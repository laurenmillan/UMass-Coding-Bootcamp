"""Flask app for Feedback"""

from flask import Flask, render_template, redirect, flash, session, request
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///feedback_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'secret012'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)