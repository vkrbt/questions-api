const sequelize = require('../../db');
const voteFields = require('../helpers/vote.fields');

module.exports = () => {
  const QuestionVote = sequelize.define('questionVote', voteFields, {
    indexes: [
      {
        unique: true,
        fields: ['questionId', 'userId'],
      },
    ],
  });

  QuestionVote.associate = (models) => {
    models.QuestionVote.belongsTo(models.User);
    models.QuestionVote.belongsTo(models.Question);
  };

  return QuestionVote;
};
