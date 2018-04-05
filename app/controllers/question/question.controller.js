const { Question, User, QuestionVote } = require('../../models');
const { createInstance, deleteInstance, updateInstance } = require('../common');

const includeUserLogin = {
  include: [
    {
      model: User,
      attributes: ['login'],
    },
    {
      model: QuestionVote,
      attributes: ['isUpvote'],
    },
  ],
};

exports.create = (title, description, userId) =>
  createInstance(
    Question,
    {
      title,
      description,
      userId,
    },
    [User],
  );

exports.getAll = () => Question.all(includeUserLogin);

exports.getById = id => Question.findById(id, includeUserLogin);

exports.updateById = (id, question) => updateInstance(Question, id, ['title', 'description'], question);

exports.vote = (id, userId, isUpvote = true) =>
  QuestionVote.upsert(
    {
      isUpvote,
      id,
      userId,
    },
    {
      include: [User, Question],
    },
  );

exports.delete = id => deleteInstance(Question, id);
