const Pool = require('pg').Pool;

const conopts = {
  user: 'postgres',
  password: 'Sovelto1',
  host: 'localhost',
  database: 'questions'
}

const pool = new Pool(conopts);

function getAllData(callback) {
  pool.connect((err, client) => {
    if (err) throw err;
    client.query("SELECT * FROM category LEFT JOIN question ON category.id = question.id LEFT JOIN options ON question.id = options.id",
    (err, data) => {
      if (err) throw err;
      client.release();
      callback(data.rows);
    });
  });
}


function getAllAnimalQuestions(callback) {
  pool.connect((err, client) => {
    if (err) throw err;
    client.query("SELECT * FROM category LEFT JOIN question ON category.id = question.id LEFT JOIN options ON question.id = options.id WHERE category.ctitle = 'Elaimet'",
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
    client.query("SELECT * FROM category LEFT JOIN question ON category.id = question.id LEFT JOIN options ON question.id = options.id WHERE category.ctitle = 'Historia'",
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
    client.query("SELECT * FROM category LEFT JOIN question ON category.id = question.id LEFT JOIN options ON question.id = options.id WHERE category.ctitle = 'Tiede'",
    (err, data) => {
      if (err) throw err;
      client.release();
      callback(data.rows);
    });
  });
}



module.exports = { getAllData, getAllAnimalQuestions, getAllHistoryQuestions, getAllScienceQuestions };