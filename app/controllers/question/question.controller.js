const { Question, User, QuestionVote, QuestionTag, Tag, Answer } = require('../../models');
const { create, removeById, remove, update, vote, getById } = require('../common');

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

exports.getById = id =>
  getById(Question, id, [
    {
      model: Tag,
      attributes: ['id', 'name'],
    },
    {
      model: User,
      attributes: ['login'],
    },
    {
      model: QuestionVote,
      attributes: ['isUpvote'],
    },
    {
      model: Answer,
    },
  ]);

exports.updateById = (id, question) => update(Question, id, ['title', 'description'], question);

exports.vote = (id, userId, isUpvote = true) => vote(QuestionVote, Question, id, userId, isUpvote);

exports.remove = id => removeById(Question, id);

exports.addTag = (questionId, tagId) => create(QuestionTag, { questionId, tagId });

exports.removeTag = (questionId, tagId) => remove(QuestionTag, { questionId, tagId });
