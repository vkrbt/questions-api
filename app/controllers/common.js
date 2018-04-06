const { User } = require('../models');

const includeUserAndVotes = voteModel => ({
  include: [
    {
      model: User,
      attributes: ['login'],
    },
    {
      model: voteModel,
      attributes: ['isUpvote'],
    },
  ],
});

exports.includeUserAndVotes = includeUserAndVotes;

exports.getByIdWithVotes = (model, voteModel, id) => model.findById(id, includeUserAndVotes(voteModel));

exports.create = (model, data, includeModels) => model.create(data, includeModels);

exports.remove = (model, id) => model.findById(id).then(question => question.destroy());

exports.update = (model, id, fields, data) => {
  const options = {
    where: {
      id,
    },
    fields,
    returning: true,
  };
  return model.update(data, options);
};

exports.vote = (model, parentModel, id, userId, isUpvote) =>
  model.upsert(
    {
      isUpvote,
      id,
      userId,
    },
    {
      include: [User, parentModel],
    },
  );
