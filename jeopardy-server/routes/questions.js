var express = require('express');
var router = express.Router();

var QuestionsService = require('./questionsService');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.route('/all')
.get((req, res, next) => {
  QuestionsService.getAllData((results) => {
    res.json(results)
  })
})

// GET ALL ANIMAL QUESTIONS
router.route('/elaimet')
  .get((req, res, next) => {
    QuestionsService.getAllAnimalQuestions((results) => {
      res.json(results)
    })
  })
// GET ALL HISTORY QUESTIONS
router.route('/historia')
  .get((req, res, next) => {
    QuestionsService.getAllHistoryQuestions((results) => {
      res.json(results)
    })
  })
// GET ALL SCIENCE QUESTIONS
router.route('/tiede')
  .get((req, res, next) => {
    QuestionsService.getAllScienceQuestions((results) => {
      res.json(results)
    })
  })


module.exports = router;
