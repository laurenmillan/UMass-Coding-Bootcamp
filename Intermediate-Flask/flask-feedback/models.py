"""Models for Flask Feedback app."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app 
    db.init_app(app)

class User(db.Model):
    """User Model."""

    __tablename__ = 'users'

    def __repr__(self):
        u = self
        return f"<username={u.username} password={u.password} email={u.email} first_name={u.first_name} last_name={u.last_name}>"

    username = db.Column(db.String(20), primary_key=True)
    password = db.Column(db.Text, nullable=False)
    email = db.Column(db.String(50), nullable=False, unique=True)
    first_name = db.Column(db.String(30), nullable=False)
    last_name = db.Column(db.String(30), nullable=False)