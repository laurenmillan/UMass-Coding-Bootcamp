"""Seed file to make sample data for users db aka starter data."""

from models import User, Post, db 
from app import app

# Create all tables
db.drop_all()
db.create_all()

# If table isn't empty, empty it
# User.query.delete()

# Add users
bob = User(first_name='Bob', last_name='Vance')
jane = User(first_name='Jane', last_name='Doe')
john = User(first_name='John', last_name='Smith')

# Add posts
weather = Post(title='Weather', content='Crazy weather', created_at='10-10-2021', user_id=1)
dance = Post(title='Dance', content='I love dancing', created_at='11-12-2020', user_id=2)
football = Post(title='Football', content='Football sucks', created_at='09-12-2022', user_id=3)

# Add new objects to session so they will persist
db.session.add_all([bob, jane, john])

db.session.commit()

db.session.add_all([weather, dance, football])

# Commit -- otherwise, this never gets saved
db.session.commit()