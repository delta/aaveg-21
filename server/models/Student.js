const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
  rollnumber: {
    type: String,
    required: true
  },
  hostel: {
    type: String,
    default: 'Not Allotted'
  },
  isFilled: {
    type: Boolean,
    default: false
  },
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null
  },
  isGirl: {
    type: Boolean,
    required: true
  }
})

const Student = mongoose.model('Student', studentSchema)
module.exports = Student
