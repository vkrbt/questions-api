const { Answer, Question, User } = require('../../models');

exports.create = (text, questionId, userId) =>
  Answer.create(
    {
      text,
      questionId,
      userId,
    },
    {
      include: [Question, User],
    },
  );

exports.getAllByQuestionId = (questionId) => Answer.findAll({
  where: {
    questionId,
  }
});
