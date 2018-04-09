const sequelize = require('../../db');
const userFields = require('./user.fields');
const { hasMany } = require('../helpers/helpers');

module.exports = () => {
  const User = sequelize.define('user', userFields);

  User.associate = models => {
    models.User.hasMany(models.Question, hasMany);
    models.User.hasMany(models.QuestionVote, hasMany);
    models.User.hasMany(models.Answer, hasMany);
    models.User.hasMany(models.AnswerVote, hasMany);
  };

  return User;
};
