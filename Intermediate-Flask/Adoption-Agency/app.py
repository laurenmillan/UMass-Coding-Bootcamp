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

    form = AddPetForm() # this creates a new form object based off the class
    
    if form.validate_on_submit():
        new_pet = Pet(name=form.name.data, species=form.species.data, photo_url=form.photo_url.data, age=form.age.data, notes=form.notes.data, available=form.available.data)
        db.session.add(new_pet)
        db.session.commit()

        return redirect('/')
    else:
        return render_template('add_pet_form.html', form=form)


##TODO: show details page of pet


@app.route('/<int:pet_id>/edit')
def edit_pet(pet_id):
    """Show edit pet form."""
    pet = Pet.query.get_or_404(pet_id)

    return render_template('/editpet.html', pet=pet)


@app.route('/<int:pet_id>/edit', methods=['POST'])
def update_pet():
    """Handle form submission for editing a pet."""
    pet = Pet.query.get_or_404(pet_id)

    pet.name = request.form["name"]
    pet.species = request.form["species"]
    pet.photo_url = request.form["photo_url"]
    pet.age = request.form["age"]
    pet.notes = request.form["notes"]
    #pet.available = request.form["available"]

    db.session.add(pet)
    db.session.commit()

    return redirect('/')

