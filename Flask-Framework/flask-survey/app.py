from flask import Flask, request, render_template
from surveys import surveys
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = "secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

RESPONSES = []

@app.route('/')
def display_survey_page():
    """Shows home page that displays title, instructions, and start button for survey."""

    return render_template('survey_page.html')



