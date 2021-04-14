const Student = require('../models/Student')
const Quiz = require('../models/Quiz')
const logger = require('../config/winston')

exports.saveAnswers = async (req, res) => {
  const { questions } = req.body
  const userId = req.user.id
  // Look for the student id in request
  Student.findOne({ _id: userId })
    .then(async (student) => {
      if (student.isFilled === true) {
        logger.warn(`${req.user.rollnumber} Tried Resubmitting Form`)
        res.status(204).json({ message: 'Rickroll time' })
      } else {
      // If quiz already there then update
        const newQuiz = new Quiz({
          userId: student._id,
          questions: questions
        })
        await newQuiz.save()
        student.quizId = newQuiz._id
        student.isFilled = true
        await student.save()
        logger.info(`Answers saved for ${student.rollnumber}`)
        res.status(200)
        res.json({
          message: 'Your response has been recorded.'
        })
      }
    }
    )
    .catch((err) => {
      logger.error(`QuizController catch : ${err}`)
      res.status(500).json({ message: 'Oops! something went wrong.' })
    })
}
