const Pool = require('pg').Pool;

const conopts = {
  user: 'postgres',
  password: 'Sovelto1',
  host: 'localhost',
  database: 'questions'
}

const pool = new Pool(conopts);

module.exports = {};