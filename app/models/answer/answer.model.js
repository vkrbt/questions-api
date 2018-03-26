const sequelize = require('../../db');
const answerFields = require('./answer.fields');
const { hasTimestamp } = require('../common/helpers');
const { hasManyOptions } = require('../common/helpers');

module.exports = () => {
  const Answer = sequelize.define('answer', answerFields, hasTimestamp);

  Answer.associate = (models) => {
    models.Answer.hasMany(models.AnswerVote, hasManyOptions);
    models.Answer.belongsTo(models.User);
    models.Answer.belongsTo(models.Question);
  };

  return Answer;
};
