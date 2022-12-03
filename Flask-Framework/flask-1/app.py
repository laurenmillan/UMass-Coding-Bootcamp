from flask import Flask, request, render_template, session, redirect, flash
from flask_debugtoolbar import DebugToolbarExtension
#from converter import Currency
from decimal import *

app = Flask(__name__)

app.config['SECRET_KEY'] = "very_secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)


@app.route('/', methods=["GET", "POST"])
def home_page():
    """Show home page containing Forex form."""

    return render_template('home.html')


@app.route('/results', methods=["GET", "POST"])
def results():
    """Show calculated conversions."""

    init = request.form.get('init')
    final = request.form.get('final')
    amt = request.form.get('amount')

    try:
        amount = Decimal(amt)
    except:
        alert = "Please enter a valid number for the amount."
        flash(alert)

        return redirect('/')
    
    try:
        curr = Currency(init)
    except:
        alert = "Please enter a valid currency."
        flash(alert)

        return redirect('/')
    
    try:
        new_curr = Currency(final)
    except:
        alert_2 = "Please enter a valid currency."
        flash(alert_2)

        return redirect('/')

    try:
        converse = curr.convert_amount(init, final, amount)
        converted_val = round(converse, 2)
        converted_sym = curr.currency_symbol(final)   
    except:
        alert_3 = "Sorry! An error occurred. Please check your values to see if they are valid."
        flash(alert_3)

        return redirect('/')
    
    return render_template('results.html', conv=converted_val, sym=converted_sym)