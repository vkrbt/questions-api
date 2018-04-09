const sequelize = require('../../db');
const questionFields = require('./question.fields');
const { hasTimestamp } = require('../helpers/helpers');
const { hasMany } = require('../helpers/helpers');

module.exports = () => {
  const Question = sequelize.define('question', questionFields, hasTimestamp);

  Question.associate = models => {
    Question.belongsTo(models.User);
    models.Question.hasMany(models.Answer, hasMany);
    models.Question.hasMany(models.QuestionVote, hasMany);
    models.Question.belongsToMany(models.Tag, { through: 'questionTag', ...hasMany });
  };

  return Question;
};
