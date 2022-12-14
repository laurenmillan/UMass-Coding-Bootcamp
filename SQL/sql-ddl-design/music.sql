-- from the terminal run:
-- psql < music.sql
-- psql music

DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

\c music

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    duration_in_seconds INTEGER NOT NULL,
    release_date DATE NOT NULL,
    artists TEXT[] NOT NULL,
    album TEXT NOT NULL,
    producers TEXT[] NOT NULL
);

CREATE TABLE award (
    id SERIAL PRIMARY KEY,
    song_id INTEGER REFERENCES songs,
    award_title TEXT NOT NULL,
    year_award_granted INTEGER
);

INSERT INTO songs
    (title, duration_in_seconds, release_date, artists, album, producers)
VALUES
    ('MMMBop', 238, '04-15-1997', '{"Hanson"}', 'Middle of Nowhere', '{"Dust Brothers", "Stephen Lironi"}'),
    ('Bohemian Rhapsody', 355, '10-31-1975', '{"Queen"}', 'A Night at the Opera', '{"Roy Thomas Baker"}'),
    ('One Sweet Day', 282, '11-14-1995', '{"Mariah Cary", "Boyz II Men"}', 'Daydream', '{"Walter Afanasieff"}'),
    ('Shallow', 216, '09-27-2018', '{"Lady Gaga", "Bradley Cooper"}', 'A Star Is Born', '{"Benjamin Rice"}'),
    ('How You Remind Me', 223, '08-21-2001', '{"Nickelback"}', 'Silver Side Up', '{"Rick Parashar"}'),
    ('New York State of Mind', 276, '10-20-2009', '{"Jay Z", "Alicia Keys"}', 'The Blueprint 3', '{"Al Shux"}'),
    ('Dark Horse', 215, '12-17-2013', '{"Katy Perry", "Juicy J"}', 'Prism', '{"Max Martin", "Cirkut"}'),
    ('Moves Like Jagger', 201, '06-21-2011', '{"Maroon 5", "Christina Aguilera"}', 'Hands All Over', '{"Shellback", "Benny Blanco"}'),
    ('Complicated', 244, '05-14-2002', '{"Avril Lavigne"}', 'Let Go', '{"The Matrix"}'),
    ('Say My Name', 240, '11-07-1999', '{"Destiny''s Child"}', 'The Writing''s on the Wall', '{"Darkchild"}');

INSERT INTO award
    (song_id, award_title, year_award_granted)
VALUES
    (1, 'Grammy', 1998),
    (2, 'Golden Globe', 1976),
    (3, 'Music Awards', 1996),
    (4, 'Golden Awards', 2018),
    (5, 'Grammy', 2002),
    (6, 'Music Awards', 2010),
    (7, 'Golden Globe', 2014),
    (8, 'Grammy', 2012),
    (9, 'Golden Awards', 2003),
    (10, 'Golden Globe', 1999);