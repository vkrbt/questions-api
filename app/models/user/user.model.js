const sequelize = require('../../db');
const userFields = require('./user.fields');
const { hasManyOptions } = require('../common/helpers');

module.exports = () => {
  const User = sequelize.define('user', userFields);

  User.associate = (models) => {
    models.User.hasMany(models.Question, hasManyOptions);
    models.User.hasMany(models.QuestionVote, hasManyOptions);
    models.User.hasMany(models.Answer, hasManyOptions);
    models.User.hasMany(models.AnswerVote, hasManyOptions);
  };

  return User;
};
