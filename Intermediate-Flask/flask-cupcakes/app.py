"""Flask app for Cupcakes"""

from flask import Flask, request, render_template, redirect, flash, session, jsonify, request
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Cupcake

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcakes_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'secret369'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)


@app.route('/api/cupcakes')
def list_cupcakes():

    # this makes a list of dictionaries
    all_cupcakes = [cupcake.serialize() for cupcake in Cupcake.query.all()]

    # this returns a json object
    return jsonify(cupcakes=all_cupcakes)


@app.route('/api/cupcakes/<int:id>')
def get_cupcake_info(id):

    cupcake = Cupcake.query.get_or_404(id)

    return jsonify(cupcake=cupcake.serialize())


@app.route('/api/cupcakes', methods=['POST'])
def create_cupcake():

    new_cupcake = Cupcake(flavor=request.json['flavor'], size=request.json['size'], 
                        rating=request.json['rating'], image=request.json['image'])
    
    db.session.add(new_cupcake)
    db.session.commit()
    response_json = jsonify(cupcake=new_cupcake.serialize())
    
    return (response_json, 201)