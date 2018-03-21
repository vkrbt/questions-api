const sequelize = require('../../db');
const voteFields = require('../common/vote.fields');

module.exports = () => {
  const AnswerVote = sequelize.define('answerVote', voteFields);

  AnswerVote.associate = (models) => {
    models.AnswerVote.belongsTo(models.User);
    models.AnswerVote.belongsTo(models.Answer);
  };

  return AnswerVote;
};
