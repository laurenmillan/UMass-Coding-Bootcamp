"""Models for Cupcake app."""

from flask_sqlalchemy import SQLAlchemy

DEFAULT_IMAGE = 'https://tinyurl.com/demo-cupcake'

db = SQLAlchemy()

def connect_db(app):
    db.app = app 
    db.init_app(app)


class Cupcake(db.Model):
    """Cupcake Model."""

    __tablename__ = 'cupcakes'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    flavor = db.Column(db.Text, nullable=False) #flavor cannot be Null
    size = db.Column(db.Text, nullable=False) #size cannot be Null
    rating = db.Column(db.Float, nullable=False) #rating cannot be Null
    image = db.Column(db.Text, nullable=True) #image can be null

    # this returns a dictionary representation of a single Cupcake
    def serialize(self):
        return {
            'id': self.id,
            'flavor': self.flavor,
            'size': self.size,
            'rating': self.rating,
            'image': self.image
        }

    def image_url(self):
        """Return image for cupcake."""

        return self.image or DEFAULT_IMAGE