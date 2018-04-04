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

exports.getById = id => Answer.findById(id);

exports.getAllByQuestionId = questionId =>
  Answer.findAll({
    where: {
      questionId,
    },
  });

exports.updateById = (id, answer) => {
  const options = {
    where: {
      id,
    },
    fields: ['text'],
    returning: true,
  };
  return Answer.update(answer, options);
};

exports.delete = answerId => Answer.findById(answerId).then(answer => answer.destroy());
