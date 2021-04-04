const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
  rollnumber: {
    type: String,
    required: true
  },
  hostel: {
    type: String
  },
  isFilled: {
    type: Boolean
  }
})

const Student = mongoose.model('Student', studentSchema)
module.exports = Student
