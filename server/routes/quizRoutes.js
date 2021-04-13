const router = require('express').Router()
const quizController = require('../controllers/quizController')
const studentAuthController = require('../controllers/authController')

router.post(
  '/saveAnswers',
  studentAuthController.validateJWT,
  quizController.saveAnswers
)

module.exports = router
