const { INTEGER, TEXT, DATE } = require('sequelize');
const User = require('../user/user.model');
const Question = require('../question/question.model');
const sequelize = require('../../db');

const Answer = sequelize.define('answer', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: TEXT,
  authorId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  questionId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: Question,
      key: 'id',
    },
  },
  createDate: {
    type: DATE,
    allowNull: false,
  },
  updateDate: {
    type: DATE,
    allowNull: false,
  },
});

module.exports = Answer;
