const { Answer, Question, User } = require('../../models');
const { createInstance, deleteInstance, updateInstance } = require('../common');

exports.create = (text, questionId, userId) =>
  createInstance(
    Answer,
    {
      text,
      questionId,
      userId,
    },
    [Question, User],
  );

exports.getById = id => Answer.findById(id);

exports.getAllByQuestionId = questionId =>
  Answer.findAll({
    where: {
      questionId,
    },
  });

exports.updateById = (id, answer) => updateInstance(Answer, id, ['text'], answer);

exports.delete = answerId => deleteInstance(Answer, answerId);
