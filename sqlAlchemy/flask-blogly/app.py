"""Blogly application."""

from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User, Post, PostTag, Tag #get_posts

app = Flask(__name__)

# Here we configured the database url, then connect app with SQLAlchemy instance:
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly_db'
# Here we set this to false, so we don't see the deprecated warning message
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Here we set this to true, which prints all SQL statements to terminal -- helpful for debugging
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'secret123'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)


@app.route('/')
def list_users():
    """Show list of all users in db."""
    users = User.query.all()

    return render_template('listusers.html', users=users)


@app.route('/', methods=["POST"])
def create_user():
    """Create new user."""
    first_name = request.form["first_name"]
    last_name = request.form["last_name"]
    image_url = request.form["image_url"]

    new_user = User(first_name=first_name, last_name=last_name, image_url=image_url)
    db.session.add(new_user)
    db.session.commit()

    return redirect(f"/{new_user.id}")


@app.route('/<int:user_id>')
def show_user(user_id):
    """Show details about a single user."""
    user = User.query.get_or_404(user_id)
    
    return render_template('userdetails.html', user=user)


@app.route('/<int:user_id>/edit')
def edit_user(user_id):
    """Show edit user form."""
    user = User.query.get_or_404(user_id)

    return render_template('/edituser.html', user=user)


@app.route('/<int:user_id>/edit', methods=["POST"])
def update_user(user_id):
    """Handle form submission for updating current user."""
    user = User.query.get_or_404(user_id)
    user.first_name = request.form["first_name"]
    user.last_name = request.form["last_name"]
    user.image_url = request.form["image_url"]

    db.session.add(user)
    db.session.commit()

    return redirect('/')


@app.route('/<int:user_id>/delete', methods=["POST"])
def delete_user(user_id):
    """Handle form submission for deleting current user."""
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()

    return redirect('/')


###Posts route


@app.route('/posts/<int:post_id>')
def show_post(post_id):
    """Show a page with details about the current user's post."""
    post = Post.query.get_or_404(post_id)

    return render_template('postdetails.html', post=post)


@app.route('/posts/<int:post_id>/edit')
def edit_post(post_id):
    """Show edit post form."""
    post = Post.query.get_or_404(post_id)

    return render_template('/editpost.html', post=post)


@app.route('/posts/<int:post_id>/edit', methods=["POST"])
def update_post(post_id):
    """Handle form submission for editing post."""
    post = Post.query.get_or_404(post_id)
    post.title = request.form["title"]
    post.content = request.form["content"]

    db.session.add(post)
    db.session.commit()

    return redirect(f"/{post.user_id}")


@app.route('/posts/<int:post_id>/delete', methods=["POST"])
def delete_post(post_id):
    """Handle form submission for deleting current user's post."""
    post = Post.query.get_or_404(post_id)

    db.session.delete(post)
    db.session.commit()

    return redirect(f"/{post.user_id}")


@app.route('/<int:user_id>/posts/new')
def post_form(user_id):
    """Show form to create new post for current user."""
    user = User.query.get_or_404(user_id)

    return render_template('newpostform.html', user=user)


@app.route('/<int:user_id>/posts/new', methods=["POST"])
def add_post(user_id):
    """Handle form submission for submitting new post."""
    user = User.query.get_or_404(user_id)
    new_post = Post(title=request.form['title'], content=request.form['content'], user=user)
    
    db.session.add(new_post)
    db.session.commit()

    return redirect(f"/{user_id}")


###Tags route


@app.route('/tags')
def list_tags():
    """Show a page with a list of all tags."""
    tags = Tag.query.all()

    return render_template('tags.html', tags=tags)


@app.route('/tags/<int:tag_id>')   
def show_tags(tag_id):
    """Show details about a single tag."""
    tag = Tag.query.get_or_404(tag_id)

    return render_template('/tags.html', tag=tag)


@app.route('/tags/new')
def new_tag_form():
    """Show form to create new tag."""
    posts = Post.query.all()

    return render_template('newtag.html', posts=posts)


@app.route("/tags/new", methods=["POST"])
def new_tag():
    """Handle form submission for creating new tag."""
    post_ids = [int(num) for num in request.form.getlist("posts")]
    posts = Post.query.filter(Post.id.in_(post_ids)).all()
    new_tag = Tag(name=request.form['name'], posts=posts)

    db.session.add(new_tag)
    db.session.commit()

    return redirect("/tags.html")


@app.route('/tags/<int:tag_id>/edit')
def edit_tag(tag_id):
    """Show edit tag form."""
    tag = Tag.query.get_or_404(tag_id)
    posts=Post.query.all()

    return render_template('edittag.html', tag=tag, posts=posts)


@app.route('/tags/<int:tag_id>/edit', methods=["POST"])
def update_tag(tag_id):
    """Handle form submission for editing tag."""
    tag = Tag.query.get_or_404(tag_id)
    tag.name = request.form["name"]
    post_ids = [int(num) for num in request.form.getlist("posts")]
    tag.posts = Post.query.filter(Post.id.in_(post_ids)).all()

    db.session.add(tag)
    db.session.commit()

    return redirect('/tags.html')



@app.route('/tags/<int:tag_id>/delete', methods=["POST"])
def delete_tag(tag_id):
    """Handle form submission for deleting current user's tag."""
    tag = Tag.query.get_or_404(tag_id)

    db.session.delete(tag)
    db.session.commit()

    return redirect('/tags.html')