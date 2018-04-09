const sequelize = require('../../db');
const answerFields = require('./answer.fields');
const { hasTimestamp } = require('../helpers/helpers');
const { hasMany } = require('../helpers/helpers');

module.exports = () => {
  const Answer = sequelize.define('answer', answerFields, hasTimestamp);

  Answer.associate = models => {
    models.Answer.hasMany(models.AnswerVote, hasMany);
    models.Answer.belongsTo(models.User);
    models.Answer.belongsTo(models.Question);
  };

  return Answer;
};
