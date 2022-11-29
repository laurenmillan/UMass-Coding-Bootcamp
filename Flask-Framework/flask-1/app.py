from flask import Flask, request, render_template, redirect, session, flash
from currency_converter import CurrencyConverter
from decimal import *
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = 'secret'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)


@app.route('/', methods=['GET', 'POST'])
def form_page():
    """Show form home page."""

    return render_template('index.html')
