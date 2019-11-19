DROP DATABASE IF EXISTS questions;
CREATE DATABASE questions;

\c questions;

CREATE TABLE question (
  id SERIAL PRIMARY KEY,
  title varchar(255) NOT NULL,
  difficulty varchar(255) NOT NULL
  -- FOREIGN KEY (id) REFERENCES category
);

-- INSERT INTO question (title, difficulty) VALUES ("Otsikko", "Vaikea");

CREATE TABLE options (
  id SERIAL PRIMARY KEY,
  title varchar(255) NOT NULL,
  result boolean
  -- FOREIGN KEY (id) REFERENCES question (id)
);

-- INSERT INTO options (title, result) VALUES ("Eka vaihtoehto", false);

CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  title varchar(255) NOT NULL,
  summary varchar(255) NOT NULL
);

\d category;

-- INSERT INTO category (title, summary) VALUES ("Eläimet", "category-kuvuas");