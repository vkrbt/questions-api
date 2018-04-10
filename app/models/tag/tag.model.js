const { hasMany } = require('../helpers/helpers');
const sequelize = require('../../db');
const tagFields = require('./tag.fields');

module.exports = () => {
  const Tag = sequelize.define('tag', tagFields);

  Tag.associate = models => {
    models.Tag.hasMany(models.QuestionTag, hasMany);
  };

  return Tag;
};
