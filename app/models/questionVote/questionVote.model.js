const sequelize = require('../../db');
const voteFields = require('../common/vote.fields');

module.exports = () => {
  const QuestionVote = sequelize.define('questionVote', voteFields);

  QuestionVote.associate = (models) => {
    models.QuestionVote.belongsTo(models.User);
    models.QuestionVote.belongsTo(models.Question);
  };

  return QuestionVote;
};
