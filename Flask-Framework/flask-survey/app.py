from flask import Flask, request, render_template, flash
from surveys import satisfaction_survey as survey
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = "secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

RESPONSES = 'responses'

@app.route('/')
def show_survey_start():
    """Shows home page -- displays title, instructions, and start button for survey."""

    return render_template('survey_start.html', survey=survey)
