"""Models for Flask Feedback app."""

from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

db = SQLAlchemy()

bcrypt = Bcrypt()


def connect_db(app):
    db.app = app 
    db.init_app(app)


class Feedback(db.Model):
    """Feedback Model."""

    __tablename__ = 'feedbacks'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    username = db.Column(db.Integer, db.ForeignKey('users.id'))

    user = db.relationship('User', backref='feedbacks')


class User(db.Model):
    """User Model."""

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(20), unique=True)
    password = db.Column(db.Text, nullable=False)
    email = db.Column(db.String(50), nullable=False, unique=True)
    first_name = db.Column(db.String(30), nullable=False)
    last_name = db.Column(db.String(30), nullable=False)

    # method for registering and logging in
    @classmethod
    def register(cls, username, pswd, email, first_name, last_name):
        """Register user w/ hashed password & return user."""

        hashed = bcrypt.generate_password_hash(pswd)
        # turn byte-string into normal unicode utf8 string
        hashed_utf8 = hashed.decode('utf8')

        # return instance of user w/ username and hashed password
        return cls(username=username, password=hashed_utf8, email=email, first_name=first_name, last_name=last_name)

    # authenticate method
    @classmethod
    def authenticate(cls, username, pswd, email, first_name, last_name):
        """Validate that user exists & password is correct.
            Return user if valid; else return False."""
        
        u = User.query.filter_by(username=username).first()

        if u and bcrypt.check_password_hash(u.password, pswd):
            # return user instance
            return u
        else:
            return False