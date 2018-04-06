const { Question, User, QuestionVote } = require('../../models');
const { create, remove, update, vote, getByIdWithVotes } = require('../common');

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
  create(
    Question,
    {
      title,
      description,
      userId,
    },
    [User],
  );

exports.getAll = () => Question.all(includeUserLogin);

exports.getById = id => getByIdWithVotes(Question, QuestionVote, id);

exports.updateById = (id, question) => update(Question, id, ['title', 'description'], question);

exports.vote = (id, userId, isUpvote = true) => vote(QuestionVote, Question, id, userId, isUpvote);

exports.remove = id => remove(Question, id);
