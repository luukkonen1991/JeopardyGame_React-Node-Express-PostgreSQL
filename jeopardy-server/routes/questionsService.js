const Pool = require('pg').Pool;

const conopts = {
  user: 'postgres',
  password: 'Sovelto1',
  host: 'localhost',
  database: 'questions'
}

const pool = new Pool(conopts);

function getAllAnimalQuestions(callback) {
  pool.connect((err, client) => {
    if (err) throw err;
    client.query("SELECT category.title, question.title, question.difficulty FROM category JOIN question ON category.id = question.id AND category.title = 'Elaimet'",
    (err, data) => {
      if (err) throw err;
      client.release();
      callback(data.rows);
    });
  });
}

function getAllHistoryQuestions(callback) {
  pool.connect((err, client) => {
    if (err) throw err;
    client.query("SELECT category.title, question.title, question.difficulty FROM category JOIN question ON category.id = question.id AND category.title = 'Historia'",
    (err, data) => {
      if (err) throw err;
      client.release();
      callback(data.rows);
    });
  });
}

function getAllScienceQuestions(callback) {
  pool.connect((err, client) => {
    if (err) throw err;
    client.query("SELECT category.title, question.title, question.difficulty FROM category JOIN question ON category.id = question.id AND category.title = 'Tiede'",
    (err, data) => {
      if (err) throw err;
      client.release();
      callback(data.rows);
    });
  });
}

module.exports = { getAllAnimalQuestions, getAllHistoryQuestions, getAllScienceQuestions };