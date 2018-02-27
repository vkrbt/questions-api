const Sequelize = require('sequelize');
const User = require('./user');
const Question = require('./question');
const sequelize = require('../db');

const Answer = sequelize.define('answer', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: Sequelize.TEXT,
  authorId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
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
  createDate: Sequelize.DATE,
  updateDate: Sequelize.DATE,
});

module.exports = Answer;
