const { Question, User, QuestionVote } = require('../../models');

const includeUserLogin = {
  include: [{
    model: User,
    attributes: ['login'],
  }, {
    model: QuestionVote,
    attributes: ['isUpvote'],
  }],
};

exports.create = (title, description, userId) => Question.create(
  {
    title,
    description,
    userId,
  },
  {
    include: [User],
  },
);

exports.getAll = () => Question.findAll(includeUserLogin);

exports.getById = id => Question.findById(id, includeUserLogin);

exports.updateById = (id, question) => {
  const options = {
    where: {
      id,
    },
    fields: ['title', 'description'],
    returning: true,
  };
  return Question.update(question, options);
};

exports.vote = (questionId, userId, isUpvote = true) => QuestionVote.upsert(
  {
    isUpvote,
    questionId,
    userId,
  },
  {
    include: [User, Question],
  },
);

exports.delete = questionId => Question
  .findById(questionId)
  .then(question => question.destroy());
