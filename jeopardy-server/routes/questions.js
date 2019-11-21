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
      res.send('Oh no something went wrong...')
    }
  })



// GET ALL ANIMAL QUESTIONS
router.route('/elaimet')
  .get((req, res, next) => {
    try {
      QuestionsService.getAllAnimalQuestions((results) => {
        res.json(results)
      })
    } catch (err) {
      res.send('Oh no something went wrong...')
    }
  })


// GET ALL HISTORY QUESTIONS
router.route('/historia')
  .get((req, res, next) => {
    try {
      QuestionsService.getAllHistoryQuestions((results) => {
        res.json(results)
      })
    } catch (err) {
      res.send('Oh no something went wrong...')
    }
  })
// GET ALL SCIENCE QUESTIONS
router.route('/tiede')
  .get((req, res, next) => {
    try {
      QuestionsService.getAllScienceQuestions((results) => {
        res.json(results)
      })
    } catch (err) {
      res.send('Oh no something went wrong...')
    }
  })


module.exports = router;
