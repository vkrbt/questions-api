const sequelize = require('../../db');
const answerFields = require('./answer.fields');
const timestampsConfig = require('../common/timestamps.config');
const { hasManyOptions } = require('../common/helpers');

module.exports = () => {
  const Answer = sequelize.define('answer', answerFields, timestampsConfig);

  Answer.associate = (models) => {
    models.Answer.hasMany(models.AnswerVote, hasManyOptions);
    models.Answer.belongsTo(models.User);
    models.Answer.belongsTo(models.Question);
  };

  return Answer;
};
