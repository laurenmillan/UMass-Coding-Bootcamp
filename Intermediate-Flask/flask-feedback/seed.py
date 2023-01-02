"""Seed file to make sample data for feedback db, aka starter data."""

from models import db, User
from app import app

db.drop_all()
db.create_all()

# Add users
bob = User(username='bobby', password='dogluvr', email='bob1@gmail.com', first_name='Bob', last_name='Vance')
jane = User(username='janeyjane', password='catsrule', email='jane@gmail.com',first_name='Jane', last_name='Doe')
john = User(username='john', password='truckzzz', email='johnsmith@gmail.com',first_name='John', last_name='Smith')

# Add new objects to session so they will persist
db.session.add_all([bob, jane, john])
db.session.commit()