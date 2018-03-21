const sequelize = require('../../db');
const userFields = require('./user.fields');

module.exports = () => {
  const User = sequelize.define('user', userFields);

  User.associate = (models) => {
    models.User.hasMany(models.Question);
    models.User.hasMany(models.QuestionVote);
    models.User.hasMany(models.Answer);
    models.User.hasMany(models.AnswerVote);
  };

  return User;
};
