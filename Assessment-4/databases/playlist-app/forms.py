"""Forms for playlist app."""

from flask_wtf import FlaskForm
from wtforms import SelectField
from wtforms.validators import InputRequired, Optional


class PlaylistForm(FlaskForm):
    """Form for adding playlists."""

    # Add the necessary code to use this form


class SongForm(FlaskForm):
    """Form for adding songs."""

    # Add the necessary code to use this form


# DO NOT MODIFY THIS FORM - EVERYTHING YOU NEED IS HERE
class NewSongForPlaylistForm(FlaskForm):
    """Form for adding a song to playlist."""

    song = SelectField('Song To Add', coerce=int)
