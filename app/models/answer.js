const { INTEGER, TEXT, DATE } = require('sequelize');
const User = require('./user');
const Question = require('./question');
const sequelize = require('../db');

const Answer = sequelize.define('answer', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: TEXT,
  authorId: {
    type: INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  questionId: {
    type: INTEGER,
    references: {
      model: Question,
      key: 'id',
    },
  },
  createDate: DATE,
  updateDate: DATE,
});

module.exports = Answer;