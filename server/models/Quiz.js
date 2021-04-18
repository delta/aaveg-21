const mongoose = require('mongoose')

const quizSchema = mongoose.Schema({
  rollnumber: {
    type: String,
    required: true
  },
  questions: {
    type: [mongoose.Schema.Types.Mixed]
  }
})

const Quiz = mongoose.model('quiz', quizSchema)
module.exports = Quiz
