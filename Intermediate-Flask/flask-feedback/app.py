"""Flask app for Flask Feedback"""

from flask import Flask, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User, Feedback
from forms import AddUserForm, AddPostForm
from sqlalchemy.exc import IntegrityError

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///feedback_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'secretkey012'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)


@app.route('/')
def home_page():
    """Show homepage with links to site areas."""

    return render_template('index.html')


@app.route('/posts', methods=['GET', 'POST'])
def show_posts():
    """Show page with posts."""

    if 'user_id' not in session:
        flash('Please login to see content', 'danger')
        return redirect('/')
    form = AddPostForm()
    all_posts = Feedback.query.all()
    if form.validate_on_submit():
        title = form.title.data
        content = form.content.data

        new_post = Feedback(title=title, content=content, username=session['user_id'])
        db.session.add(new_post)
        db.session.commit()
        flash('Post Created!', 'success')
        return redirect('/posts')

    return render_template('posts.html', form=form, feedbacks=all_posts)


@app.route('/posts/<int:id>', methods=['POST'])
def delete_post(id):
    """Delete current user's post."""

    if 'user_id' not in session:
        flash('Please login first!', 'danger')
        return redirect('/login')
    post = Feedback.query.get_or_404(id)

    if post.username == session['user_id']:
        db.session.delete(post)
        db.session.commit()
        flash('Post Deleted!', 'info')
        return redirect('/posts')
    flash("You don't have permission to do this action!", "danger")

    return redirect('/posts')


@app.route('/register', methods=['GET', 'POST'])
def register_user():
    """Show page to register new user."""

    form = AddUserForm()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data
        email = form.email.data
        first_name = form.first_name.data
        last_name = form.last_name.data

        new_user = User.register(username, password, email, first_name, last_name)

        db.session.add(new_user)
        try:
            db.session.commit()
        except IntegrityError:
            form.username.errors.append('This username is taken. Please choose another username')
            return render_template('/register.html', form=form)
        session['user_id'] = new_user.id
        flash('Welcome! Your account has been successfully created!', 'success')
        return redirect('/posts')

    return render_template('register.html', form=form)


@app.route('/login', methods=['GET', 'POST'])
def login_user():
    """Show login user page."""

    form = AddUserForm()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data
        email = form.email.data
        first_name = form.first_name.data
        last_name = form.last_name.data

        user = User.authenticate(username, password, email, first_name, last_name)
        if user:
            flash(f'Welcome Back, {user.username}!', 'primary')
            session['user_id'] = user.id
            return redirect('/posts')
        else:
            form.username.errors = ['Invalid username/password']

    return render_template('login.html', form=form) 


@app.route('/logout')
def logout_user():
    """Logout user."""
    session.pop('user_id')
    flash('You successfully logged out', 'info')

    return redirect('/')