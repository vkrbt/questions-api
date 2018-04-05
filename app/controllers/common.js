exports.createInstance = (model, data, includeModels) => model.create(data, includeModels);

exports.deleteInstance = (model, id) => model.findById(id).then(question => question.destroy());

exports.updateInstance = (model, id, fields, data) => {
  const options = {
    where: {
      id,
    },
    fields,
    returning: true,
  };
  return model.update(data, options);
}
