from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, BooleanField
from wtforms.validators import InputRequired, Optional

class AddPetForm(FlaskForm):
    """Form for adding pets."""

    name = StringField('Pet Name', validators=[InputRequired(message="Pet name cannot be blank.")])
    species = StringField('Species', validators=[InputRequired(message="Species cannot be blank.")])
    photo_url = StringField('Photo URL', validators=[Optional()])
    age = IntegerField('Age', validators=[InputRequired(message="Age cannot be blank.")])
    notes = TextAreaField('Notes', validators=[Optional()])
    available = BooleanField('Available', validators=[InputRequired(message="Please add if this pet is available for adoption.")])