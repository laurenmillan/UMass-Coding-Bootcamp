"""Models for Adoption Agency."""

from flask_sqlalchemy import SQLAlchemy

# initialize SQLAlchemy
db = SQLAlchemy()

# we put this in a function so we can call this logic to connect to a db from app.py -- best practice!
def connect_db(app):
    db.app = app 
    db.init_app(app)

class Pet(db.Model):
    """Pet."""

    __tablename__ = 'pets'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(Text, nullable=False) #first name cannot be Null
    species = db.Column(Text, nullable=False)
    photo_url = db.Column(Text, nullable=True)
    age = db.Column(db.Integer, nullable=True)
    notes = db.Column(Text, nullable=True)
    available = db.Column(bool, nullable=False, nullable=False)