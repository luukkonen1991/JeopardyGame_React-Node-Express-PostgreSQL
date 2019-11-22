var express = require('express');
var router = express.Router();

var QuestionsService = require('../service/questionsService');


router.route('/all')
  .get((req, res, next) => {
    try {
      QuestionsService.getAllData((err, results) => {
        res.json(results)
      })
    } catch (err) {
      res.json(err)
 
    }
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
