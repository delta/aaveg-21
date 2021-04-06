const Student = require('../models/Student');
const Quiz = require('../models/Quiz');
const logger = require('../config/winston');

exports.saveAnswers = async (req, res) => {
	let { questions } = req.body;
	let userId = req.user_id;
	// Look for the student id in request
	Student.findOne({ _id: userId })
		.then((student) => {
			// If quiz already there then update
			if (student.quizId != null) {
				Quiz.findOneAndUpdate(
					{ _id: student.quizId },
					{ $set: { questions: questions } }
				)
					.then((quiz) => {
						logger.info(
							`Answers updated for ${student.rollnumber}`
						);
						res.status(200);
						res.json({
							message: 'Your response has been updated.',
						});
					})
					.catch((err) => {
						res.status(500);
						res.json({ message: 'Oops! something went wrong.' });
						logger.error(err);
					});
			}
			// Else create new one and save
			else {
				let newQuiz = new Quiz({
					userId: student._id,
					questions: questions,
				});
				newQuiz.save();
				student.quizId = newQuiz._id;
				student.save();
				logger.info(`Answers saved for ${student.rollnumber}`);
				res.status(200);
				res.json({
					message: 'Your response has been recorded.',
				});
			}
		})
		.catch((err) => {
			logger.error(err);
			res.status(500);
			res.json({ message: 'Oops! something went wrong.' });
		});
};
