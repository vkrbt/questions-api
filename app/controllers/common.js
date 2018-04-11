const { User } = require('../models');

const includeUserAndVotes = voteModel => [
  {
    model: User,
    attributes: ['login'],
  },
  {
    model: voteModel,
    attributes: ['isUpvote'],
  },
];

exports.includeUserAndVotes = includeUserAndVotes;

const getById = (model, id, include = []) => model.findById(id, { include });

exports.getById = getById;

exports.getByIdWithVotes = (model, voteModel, id) => getById(model, id, includeUserAndVotes(voteModel));

exports.create = (model, data, includeModels) => model.create(data, { ...includeModels, returning: true });

exports.remove = (model, where) =>
  model.findAll({ where }).then(instances => instances.map(instance => instance.destroy()));

exports.removeById = (model, id) => model.findById(id).then(instance => instance.destroy());

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
