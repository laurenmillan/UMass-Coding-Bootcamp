"""Seed file to make sample data for users db aka starter data."""

from models import User, db 
from app import app

# Create all tables
db.drop_all()
db.create_all()

# If table isn't empty, empty it
User.query.delete()

# Add users
bob = User(first_name='Bob', last_name='Vance')
jane = User(first_name='Jane', last_name='Doe')
john = User(first_name='John', last_name='Smith')

# Add new objects to session so they will persist
db.session.add(bob)
db.session.add(jane)
db.session.add(john)

# Commit -- otherwise, this never gets saved
db.session.commit()