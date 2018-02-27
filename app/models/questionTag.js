const Sequelize = require('sequelize');
const Tag = require('./user');
const Question = require('./question');
const sequelize = require('../db');

const QuestionTag = sequelize.define('question_tag', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tagId: {
    type: Sequelize.INTEGER,
    references: {
      model: Tag,
      key: 'id',
    },
  },
  questionId: {
    type: Sequelize.INTEGER,
    references: {
      model: Question,
      key: 'id',
    },
  },
});

module.exports = QuestionTag;
