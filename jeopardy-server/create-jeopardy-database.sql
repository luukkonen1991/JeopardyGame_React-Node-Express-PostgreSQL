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
INSERT INTO category (ctitle, summary) VALUES ('Elaimet', 'elaimet-kuvaus');
INSERT INTO question (title, difficulty) VALUES ('Which Git command changes where the HEAD pointer points and modifies the contents of the working directory?', 'Vaikea');
INSERT INTO options (title1, title2, title3, result1, result2, result3) VALUES ('checkout', 'merge', 'mv', true, false, false);

INSERT INTO category (ctitle, summary) VALUES ('Elaimet', 'elaimet-kuvaus');
INSERT INTO question (title, difficulty) VALUES ('Which of these Git client commands creates a copy of the repository and a working directory in the client''s workspace?', 'helppo');
INSERT INTO options (title1, title2, title3, result1, result2, result3) VALUES ('clone', 'update', 'checkout', true , false, false);

INSERT INTO category (ctitle, summary) VALUES ('Elaimet', 'elaimet-kuvaus');
INSERT INTO question (title, difficulty) VALUES ('Now, imagine that you have a local repository, but other team members have pushed changes into the remote repository. What Git operation would you use to download those changes into your working copy?', 'normaali');
INSERT INTO options (title1, title2, title3, result1, result2, result3) VALUES ('commit', 'pull', 'export', false, true, false);


-- History talbe content
INSERT INTO category (ctitle, summary) VALUES ('Historia', 'historia-kuvaus');
INSERT INTO question (title, difficulty) VALUES ('Who is responsible for crafting the Sprint Goal at the Sprint Planning?', 'normaali');
INSERT INTO options (title1, title2, title3, result1, result2, result3) VALUES ('The Scrum Team', 'The Development Team', 'The Product Owner', true, false, false);

INSERT INTO category (ctitle, summary) VALUES ('Historia', 'historia-kuvaus');
INSERT INTO question (title, difficulty) VALUES ('Who is responsible for creation of the Definition of "Done"?', 'vaikea');
INSERT INTO options (title1, title2, title3, result1, result2, result3) VALUES ('The Scrum Master', 'The Product Owner', 'The Development Team', false, false, true);

INSERT INTO category (ctitle, summary) VALUES ('Historia', 'historia-kuvaus');
INSERT INTO question (title, difficulty) VALUES ('What belongs solely to the Development Team?', 'helppo');
INSERT INTO options (title1, title2, title3, result1, result2, result3) VALUES ('The Sprint Backlog', 'The Product Backlog', 'The Increment', true, false, false);

-- Science table content 
INSERT INTO category (ctitle, summary) VALUES ('Tiede', 'tiede-kuvuas');
INSERT INTO question (title, difficulty) VALUES ('How can you access the state of a component from inside of a member function?', 'normaali');
INSERT INTO options (title1, title2, title3, result1, result2, result3) VALUES ('this.values', 'this.getState()', 'this.state', true, false, false);

INSERT INTO category (ctitle, summary) VALUES ('Tiede', 'tiede-kuvuas');
INSERT INTO question (title, difficulty) VALUES ('State in react is _____', 'vaikea');
INSERT INTO options (title1, title2, title3, result1, result2, result3) VALUES ('A permanent storage', 'Internal storage of the component', 'Both of above', false, true, false);

INSERT INTO category (ctitle, summary) VALUES ('Tiede', 'tiede-kuvuas');
INSERT INTO question (title, difficulty) VALUES ('Which of the following API is a MUST for every ReactJS component?', 'helppo');
INSERT INTO options (title1, title2, title3, result1, result2, result3) VALUES ('getInitialState', 'render', 'renderComponent', false, false, true);




ALTER TABLE question add CONSTRAINT fk_category FOREIGN KEY(category) REFERENCES category(id);
ALTER TABLE options add CONSTRAINT fk_question FOREIGN KEY(question) REFERENCES question(id);




\d options;
