"""Seed file to make sample data for users db aka starter data."""

from models import User, Post, PostTag, Tag, db 
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
mark = User(first_name='Mark', last_name='Twain')

# Add new objects to session so they will persist
db.session.add_all([bob, jane, john, mark])
db.session.commit()

# Add posts
weather = Post(title='Weather', content='Crazy weather', created_at='10-10-2021', user_id=1)
dance = Post(title='Dance', content='I love dancing', created_at='11-12-2020', user_id=2)
football = Post(title='Football', content='Football sucks', created_at='09-12-2022', user_id=3)
cowboys = Post(title='Cowboys', content='Old westerns are great', created_at='12-12-2022', user_id=4)

db.session.add_all([weather, dance, football, cowboys])
db.session.commit()

# Add tags
tag = Tag(name='blue')
tags = Tag(name='fun')
hashtag = Tag(name='boring')
hashtags = Tag(name='cowboysfan')

db.session.add_all([tag, tags, hashtag, hashtags])
db.session.commit()

# Add post tags
tag = PostTag(post_id='1', tag_id='1')
tags = PostTag(post_id='2', tag_id='2')
hashtag = PostTag(post_id='3', tag_id='3')
hashtags = PostTag(post_id='4', tag_id='4')

db.session.add_all([tag, tags, hashtag, hashtags])
db.session.commit()