"""Seed file to make sample data for playlist-app db, aka starter data."""

from models import Playlist, Song, PlaylistSong, db
from app import app

db.drop_all()
db.create_all()

# Add songs
sunshine = Song(title='Good Day Sunshine', artist='The Beatles')
hello = Song(title='Hello', artist='Adele')

db.session.add_all([sunshine, hello])
db.session.commit

# Add Playlist
favorites = Playlist(name='Favorites', description='my favorite songs')

db.session.add_all([favorites])
db.session.commit