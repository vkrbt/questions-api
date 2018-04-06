const sequelize = require('../../db');
const tagFields = require('./tag.fields');
const { hasManyOptions } = require('../helpers/helpers');

module.exports = () => {
  const Tag = sequelize.define('tag', tagFields);

  Tag.associate = models => {
    models.Tag.belongsToMany(models.Question, { through: 'questionTag', ...hasManyOptions });
  };

  return Tag;
};
