"""Seed file to make sample data for feedback db, aka starter data."""

from models import db, User
from app import app

db.drop_all()
db.create_all()

# Add users
monkey = User(username='monkey1', password='$2b$12$4UpFr2KZ1PfyAw1YkAi8Pebzd1mEFCIpnSzKO/3njfhJybJ5gg6N6', email='monkeys@gmail.com', first_name='monkey', last_name='smith')
joe = User(username='yoyo123', password='$2b$12$PvEcp1wUeejJZ1MjkybdceXAyLK8/Z8oHxs1jQWkVNyNeBYa9bRym', email='yoyoyo@gmail.com', first_name='Joe', last_name='Jack')

# Add new objects to session so they will persist
db.session.add_all([monkey, joe])
db.session.commit()