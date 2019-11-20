DROP DATABASE IF EXISTS questions;
CREATE DATABASE questions;

\c questions;

CREATE TABLE question (
  id SERIAL PRIMARY KEY,
  title varchar(255) NOT NULL,
  difficulty varchar(255) NOT NULL,
  category INT
);


CREATE TABLE options (
  id SERIAL PRIMARY KEY,
  title1 varchar(255) NOT NULL,
  result1 boolean,
  title2 varchar(255) NOT NULL,
  result2 boolean,
  title3 varchar(255) NOT NULL,
  result3 boolean,
  question INT
);


CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  ctitle varchar(255) NOT NULL,
  summary varchar(255) NOT NULL
);


-- Animal table content
INSERT INTO category (ctitle, summary) VALUES ('Elaimet', 'elaimet-kuvuas');
INSERT INTO question (title, difficulty) VALUES ('OtsikkoElaimet', 'Vaikea');
INSERT INTO options (title1, title2, title3, result1, result2, result3) VALUES ('eka', 'toka', 'kolmas', true, false, false);

INSERT INTO category (ctitle, summary) VALUES ('Elaimet', 'elaimet-kuvuas');
INSERT INTO question (title, difficulty) VALUES ('Otsikko2Elaimet', 'helppo');
INSERT INTO options (title1, title2, title3, result1, result2, result3) VALUES ('eka', 'toka', 'kolmas', false, true, false);

INSERT INTO category (ctitle, summary) VALUES ('Elaimet', 'elaimet-kuvuas');
INSERT INTO question (title, difficulty) VALUES ('Otsikko3Elaimet', 'normaali');
INSERT INTO options (title1, title2, title3, result1, result2, result3) VALUES ('eka', 'toka', 'kolmas', false, true, false);


-- History talbe content
INSERT INTO category (ctitle, summary) VALUES ('Historia', 'historia-kuvuas');
INSERT INTO question (title, difficulty) VALUES ('Otsikko1Histori', 'normaali');
INSERT INTO options (title1, title2, title3, result1, result2, result3) VALUES ('eka', 'toka', 'kolmas', false, true, false);

INSERT INTO category (ctitle, summary) VALUES ('Historia', 'historia-kuvuas');
INSERT INTO question (title, difficulty) VALUES ('Otsikko2Historia', 'vaikea');
INSERT INTO options (title1, title2, title3, result1, result2, result3) VALUES ('eka', 'toka', 'kolmas', false, true, false);

INSERT INTO category (ctitle, summary) VALUES ('Historia', 'historia-kuvuas');
INSERT INTO question (title, difficulty) VALUES ('Otsikko3Historia', 'helppo');
INSERT INTO options (title1, title2, title3, result1, result2, result3) VALUES ('eka', 'toka', 'kolmas', false, true, false);

-- Science table content 
INSERT INTO category (ctitle, summary) VALUES ('Tiede', 'tiede-kuvuas');
INSERT INTO question (title, difficulty) VALUES ('Otsikko1Historia', 'normaali');
INSERT INTO options (title1, title2, title3, result1, result2, result3) VALUES ('eka', 'toka', 'kolmas', false, true, false);

INSERT INTO category (ctitle, summary) VALUES ('Tiede', 'tiede-kuvuas');
INSERT INTO question (title, difficulty) VALUES ('Otsikko2Historia', 'vaikea');
INSERT INTO options (title1, title2, title3, result1, result2, result3) VALUES ('eka', 'toka', 'kolmas', false, true, false);

INSERT INTO category (ctitle, summary) VALUES ('Tiede', 'tiede-kuvuas');
INSERT INTO question (title, difficulty) VALUES ('Otsikko3Historia', 'helppo');
INSERT INTO options (title1, title2, title3, result1, result2, result3) VALUES ('eka', 'toka', 'kolmas', false, true, false);



ALTER TABLE question add CONSTRAINT fk_category FOREIGN KEY(category) REFERENCES category(id);
ALTER TABLE options add CONSTRAINT fk_question FOREIGN KEY(question) REFERENCES question(id);




\d options;
