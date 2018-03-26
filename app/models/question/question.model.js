const sequelize = require('../../db');
const questionFields = require('./question.fields');
const { hasTimestamp } = require('../common/helpers');
const { hasManyOptions } = require('../common/helpers');

module.exports = () => {
  const Question = sequelize.define('question', questionFields, hasTimestamp);

  Question.associate = (models) => {
    Question.belongsTo(models.User);
    models.Question.hasMany(models.Answer, hasManyOptions);
    models.Question.hasMany(models.QuestionVote, hasManyOptions);
    models.Question.belongsToMany(models.Tag, { through: 'questionTag' });
  };

  return Question;
};
