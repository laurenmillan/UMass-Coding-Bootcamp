"""Flask app for Cupcakes"""

from flask import Flask, render_template, redirect, flash, session, jsonify, request
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Cupcake

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcakes_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'secret369'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
# debug = DebugToolbarExtension(app)

connect_db(app)

#Frontend
@app.route('/')
def home_page():
    """Shows home page."""

    cupcakes = Cupcake.query.all()

    return render_template('index.html', cupcakes=cupcakes)
    

#RESTful API following RESTful routing conventions using POST, PATCH, DELETE.

@app.route('/api/cupcakes')
def list_cupcakes():
    """Gets all cupcakes in a json object."""

    # this makes a list of dictionaries
    all_cupcakes = [cupcake.serialize() for cupcake in Cupcake.query.all()]

    # this returns a json object
    return jsonify(cupcakes=all_cupcakes)


@app.route('/api/cupcakes/<int:id>')
def get_cupcake_info(id):
    """Shows info about a single cupcake in a json object."""

    cupcake = Cupcake.query.get_or_404(id)

    return jsonify(cupcake=cupcake.serialize())


@app.route('/api/cupcakes', methods=['POST'])
def create_cupcake():
    """Create a new cupcake using a Post request."""

    new_cupcake = Cupcake(flavor=request.json['flavor'], size=request.json['size'], 
                        rating=request.json['rating'], image=request.json['image'])
    
    db.session.add(new_cupcake)
    db.session.commit()
    response_json = jsonify(cupcake=new_cupcake.serialize())
    
    return (response_json, 201)


@app.route('/api/cupcakes/<int:id>', methods=['PATCH'])
def update_cupcake(id):
    """Update a current cupcake with a single id using a Patch request."""

    cupcake = Cupcake.query.get_or_404(id)

    # db.session.query(Cupcake).filter_by(id=id.update(request.json))
    cupcake.flavor = request.json.get('flavor', cupcake.flavor)
    cupcake.size = request.json.get('size', cupcake.size)
    cupcake.rating = request.json.get('rating', cupcake.rating)
    cupcake.image = request.json.get('image', cupcake.image)
    db.session.commit()

    return jsonify(cupcake=cupcake.serialize())


@app.route('/api/cupcakes/<int:id>', methods=['DELETE'])
def delete_cupcake(id):
    """Delete a cupcake with a single id using a Delete request."""

    cupcake = Cupcake.query.get_or_404(id)

    db.session.delete(cupcake)
    db.session.commit()

    return jsonify(msg='deleted')