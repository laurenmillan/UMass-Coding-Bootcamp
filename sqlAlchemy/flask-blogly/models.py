"""Models for Blogly."""

from flask_sqlalchemy import SQLAlchemy
import datetime

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

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String(15), nullable=False, unique=True) #first and last name cannot be Null
    last_name = db.Column(db.String(15), nullable=False, unique=True)
    image_url = db.Column(db.String, nullable=True)

    posts = db.relationship('Post', backref='user', cascade='all, delete-orphan') # backref is defining the two-way relationship between User and Post models


    def greet(self):
        """Welcome back the User."""
        return f"Welcome back, {self.first_name}"


class Post(db.Model):
    """Blog Post."""

    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False) # this is referencing the primary key from the users table

    # users = db.relationship('User', backref='posts')

    def __repr__(self):
        u = self
        return f"<title={u.title} content={u.content} created_at={u.created_at}>"


# def get_posts():
#     all_posts = Post.query.all()

#     for p in all_posts:
#         print(p.title, p.content, p.created_at)


class PostTag(db.Model):
    """Tag on a post."""

    __tablename__ = 'posts_tags'

    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), primary_key=True)
    tag_id = db.Column(db.Integer, db.ForeignKey('tags.id'), primary_key=True)


class Tag(db.Model):
    """Tag that can be added to posts."""

    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False, unique=True)

    posts = db.relationship(
        'Post', 
        secondary="posts_tags", 
        # cascade="all,delete",
        backref="tags")