from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret'

debug = DebugToolbarExtension(app)


@app.route('/')
def home_page():
    """Show homepage."""

    return render_template('base.html')


@app.route('/about')
def about_page():
    """Show about me page."""

    return render_template('about.html')


@app.route('/contact')
def contact_page():
    """Show contact page."""

    return render_template('contact.html')