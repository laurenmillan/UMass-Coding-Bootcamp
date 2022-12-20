"""Pet Adoption application."""

from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Pet
from forms import AddPetForm

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///adopt_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'secret246'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)


@app.route('/')
def list_pets():
    """Show home page."""

    pets = Pet.query.all()
    return render_template('listpets.html', pets=pets)


@app.route('/add', methods=['GET', 'POST'])
def add_pet():
    """Add new pet."""
    #print(request.form)

    form = AddPetForm() # this creates a new form object based off the class
    if form.validate_on_submit():
        return redirect('/')
    else:
        return render_template('add_pet_form.html', form=form)