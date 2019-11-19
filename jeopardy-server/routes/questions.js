var express = require('express');
var router = express.Router();

var QuestionsService = require('./questionsService');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });



// GET ALL ANIMAL QUESTIONS
router.route('/elaimet')
  .get((req, res, next) => {
    QuestionsService.getAllAnimalQuestions((results) => {
      res.json(results)
    })
  })
router.route('/historia')
  .get((req, res, next) => {
    QuestionsService.getAllHistoryQuestions((results) => {
      res.json(results)
    })
  })
router.route('/tiede')
  .get((req, res, next) => {
    QuestionsService.getAllScienceQuestions((results) => {
      res.json(results)
    })
  })


module.exports = router;
