const { Answer, Question, User, AnswerVote } = require('../../models');
const { create, removeById, update, vote, getByIdWithVotes, includeUserAndVotes } = require('../common');

exports.create = (text, questionId, userId) =>
  create(
    Answer,
    {
      text,
      questionId,
      userId,
    },
    [Question, User],
  );

exports.getById = id => getByIdWithVotes(Answer, AnswerVote, id);

exports.getAllByQuestionId = questionId =>
  Answer.findAll({
    where: {
      questionId,
    },
    ...includeUserAndVotes(AnswerVote),
  });

exports.updateById = (id, answer) => update(Answer, id, ['text'], answer);

exports.remove = answerId => removeById(Answer, answerId);

exports.vote = (id, userId, isUpvote = true) => vote(AnswerVote, Answer, id, userId, isUpvote);
