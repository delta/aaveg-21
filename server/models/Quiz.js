const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	questions: {
		type: [mongoose.Schema.Types.Mixed],
	},
});

const Quiz = mongoose.model('quiz', quizSchema);
module.exports = Quiz;
