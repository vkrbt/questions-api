const sequelize = require('../../db');
const tagFields = require('./tag.fields');
const { hasMany } = require('../helpers/helpers');

module.exports = () => {
  const Tag = sequelize.define('tag', tagFields);

  Tag.associate = models => {
    models.Tag.belongsToMany(models.Question, { through: 'questionTag', ...hasMany });
  };

  return Tag;
};
