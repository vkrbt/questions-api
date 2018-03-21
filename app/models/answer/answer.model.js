const sequelize = require('../../db');
const answerFields = require('./answer.fields');
const timestampsConfig = require('../common/timestamps.config');

module.exports = () => {
  const Answer = sequelize.define('answer', answerFields, timestampsConfig);

  Answer.associate = (models) => {
    models.Answer.hasMany(models.AnswerVote);
    models.Answer.belongsTo(models.User);
    models.Answer.belongsTo(models.Question);
  };

  return Answer;
};
