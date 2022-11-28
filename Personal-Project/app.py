from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret'


@app.route('/')
def homepage():
    """Show homepage."""

    return render_template('base.html')




