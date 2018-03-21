const { Question, User } = require('../../models');

const includeUserLogin = {
  include: [{
    model: User,
    attributes: ['login'],
  }],
};

module.exports.create = (title, description, userId) => Question.create(
  {
    title,
    description,
    userId,
  },
  {
    include: User,
  },
);

module.exports.getAll = () => Question.findAll(includeUserLogin);

module.exports.getById = id => Question.findById(id, includeUserLogin);

module.exports.updateById = (id, question) => {
  const options = {
    where: {
      id,
    },
    fields: ['title', 'description'],
    returning: true,
  };
  return Question.update(question, options);
};
