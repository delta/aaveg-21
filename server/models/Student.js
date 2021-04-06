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
  },
  quizId:{
	type:mongoose.Schema.Types.ObjectId,
	default:null
  }
})

const Student = mongoose.model('Student', studentSchema)
module.exports = Student
