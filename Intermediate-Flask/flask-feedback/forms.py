from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import InputRequired

class AddUserForm(FlaskForm):
    """Form for adding users."""

    username = StringField('Username', validators=[InputRequired(message="Username cannot be blank.")])
    password = PasswordField('Password', validators=[InputRequired(message="Password cannot be blank")])
    email = StringField('Email', validators=[InputRequired(message="Email cannot be blank")])
    first_name = StringField('First Name', validators=[InputRequired(message="First Name cannot be blank")])
    last_name = StringField('Last Name', validators=[InputRequired(message="Last Name cannot be blank")])


class AddPostForm(FlaskForm):
    """Form for adding posts."""

    title = StringField('Title', validators=[InputRequired(message="Title cannot be blank.")])
    content = StringField('Content', validators=[InputRequired(message="Content cannot be blank.")])