"""Models for Blogly."""

from flask_sqlalchemy import SQLAlchemy

# initialize SQLAlchemy
db = SQLAlchemy()

# we put this in a function so we can call this logic to connect to a db from app.py -- best practice!
def connect_db(app):
    db.app = app 
    db.init_app(app)

# SQL version of table:

# CREATE TABLE user (
#     id SERIAL PRIMARY KEY,
#     first_name VARCHAR(15) TEXT NOT NULL UNIQUE,
#     last_name VARCHAR(15) TEXT NOT NULL UNIQUE,
#     image_url TEXT
# );

# ORM -- Object-relational Mapping
# MODELS GO BELOW, WHERE WE DEFINE OUR SCHEMA, USING SQLAlchemy
# The point of a model is to create a class, which is a Python class

class User(db.Model):
    """User."""

    __tablename__ = 'users'

    def __repr__(self):
        u = self
        return f"<User id={u.id} first_name={u.first_name} last_name={u.last_name} image_url={u.image_url}>"

    id = db.Column(db.Integer, 
                            primary_key=True,
                            autoincrement=True)

    first_name = db.Column(db.String(15), 
                            nullable=False, #first and last name cannot be Null
                            unique=True)

    last_name = db.Column(db.String(15), 
                            nullable=False, 
                            unique=True)

    image_url = db.Column(db.String(100), nullable=True)

    def greet(self):
        """Welcome back the User."""
        return f"Welcome back, {self.first_name}"