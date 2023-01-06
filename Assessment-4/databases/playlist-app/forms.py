"""Forms for playlist app."""

from flask_wtf import FlaskForm
from wtforms import SelectField, StringField
from wtforms.validators import InputRequired, Optional


class PlaylistForm(FlaskForm):
    """Form for adding playlists."""

    name = StringField('Playlist Name', validators=[InputRequired(message="Enter a name for your playlist")])
    description = StringField('Playlist Description', validators=[Optional()])


class SongForm(FlaskForm):
    """Form for adding songs."""

    title = StringField('Song Title', validators=[InputRequired(message="Enter a song title")])
    artist = StringField('Song Artist', validators=[InputRequired(message="Enter a song artist")])


# DO NOT MODIFY THIS FORM - EVERYTHING YOU NEED IS HERE
class NewSongForPlaylistForm(FlaskForm):
    """Form for adding a song to playlist."""

    song = SelectField('Song To Add', coerce=int)
