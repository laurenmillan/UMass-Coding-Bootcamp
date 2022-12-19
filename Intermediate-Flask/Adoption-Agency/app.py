"""Pet Adoption application."""

from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Pet

app = Flask(__name__)

# Here we configured the database url, then connect app with SQLAlchemy instance:
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///adopt_db'
# Here we set this to false, so we don't see the deprecated warning message
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Here we set this to true, which prints all SQL statements to terminal -- helpful for debugging
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'secret246'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)

@app.route('/')
def list_pets():
    """Show list of all pets in db."""
    pets = Pet.query.all()

    return redirect('/')

    #return render_template('listpets.html', pets=pets)