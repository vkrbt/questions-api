const sequelize = require('../../db');
const questionFields = require('./question.fields');
const timestampsConfig = require('../common/timestamps.config');

module.exports = () => {
  const Question = sequelize.define('question', questionFields, timestampsConfig);

  Question.associate = (models) => {
    Question.belongsTo(models.User);
    models.Question.hasMany(models.Answer);
    models.Question.hasMany(models.QuestionVote);
    models.Question.belongsToMany(models.Tag, { through: 'questionTag' });
  };

  return Question;
};
