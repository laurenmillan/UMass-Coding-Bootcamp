"""Seed file to make sample data for pets db, aka starter data."""

from models import Pet, db 
from app import app

db.drop_all()
db.create_all()

# If table isn't empty, empty it
# User.query.delete()

# Add pets
hazel = Pet(name='Hazel', species='cat', age=2, available=True)
tanner = Pet(name='Tanner', species='dog', age=7, available=True)
pistachio = Pet(name='Pistachio', species='cat', age=2, available=True)

# Add new objects to session so they will persist
db.session.add_all([hazel, tanner, pistachio])
db.session.commit()