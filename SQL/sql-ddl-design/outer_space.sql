-- from the terminal run:
-- psql < outer_space.sql
-- psl outer_space

DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space

CREATE TABLE planets (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    orbital_period_in_years FLOAT NOT NULL,
    orbits_around TEXT NOT NULL,
    galaxy TEXT NOT NULL,
    moons TEXT[],
    planet_type TEXT,
    discovery_date TEXT
);

INSERT INTO planets
    (name, orbital_period_in_years, orbits_around, galaxy, moons, planet_type, discovery_date)
VALUES
    ('Earth', 1.00, 'The Sun', 'Milky Way', '{"The Moon"}', 'terrestrial', 'unknown'),
    ('Mars', 1.88, 'The Sun', 'Milky Way', '{"Phobos", "Deimos"}', 'rocky', 'unknown'),
    ('Venus', 0.62, 'The Sun', 'Milky Way', '{}', 'terrestrial', 'unknown'),
    ('Neptune', 164.8, 'The Sun', 'Milky Way', '{"Naiad", "Thalassa", "Despina", "Galatea", "Larissa", "S/2004 N 1", "Proteus", "Triton", "Nereid", "Halimede", "Sao", "Laomedeia", "Psamathe", "Neso"}', 'ice giant', 'September 23 1846'),
    ('Proxima Centauri b', 0.03, 'Proxima Centauri', 'Milky Way', '{}', 'super Earth exoplanet', 'August 24 2016'),
    ('Gliese 876 b', 0.23, 'Gliese 876', 'Milky Way', '{}', 'gas giant exoplanet', 'June 22 1998');