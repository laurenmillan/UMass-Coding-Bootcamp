"""Flask Greet and Calc."""

# In the greet folder, make a simple Flask app that responds to these routes with simple text messages:
# /welcome
    # Returns “welcome”
# /welcome/home
    # Returns “welcome home”
# /welcome/back
    # Return “welcome back”

from flask import Flask

app = Flask(__name__)

@app.route('/welcome')
def welcome():
    """Returns 'Welcome' greeting."""

    return "welcome"

@app.route('/welcome/home')
def welcome_home():
    """Returns 'Welcome Home' greeting."""

    return "welcome home"

@app.route('/welcome/back')
def welcome_back():
    """Returns 'Welcome Back' greeting."""

    return "welcome back"
