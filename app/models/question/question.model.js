const sequelize = require('../../db');
const questionFields = require('./question.fields');
const timestampsConfig = require('../common/timestamps.config');
const { hasManyOptions } = require('../common/helpers');

module.exports = () => {
  const Question = sequelize.define('question', questionFields, timestampsConfig);

  Question.associate = (models) => {
    Question.belongsTo(models.User);
    models.Question.hasMany(models.Answer, hasManyOptions);
    models.Question.hasMany(models.QuestionVote, hasManyOptions);
    models.Question.belongsToMany(models.Tag, { through: 'questionTag' });
  };

  return Question;
};
