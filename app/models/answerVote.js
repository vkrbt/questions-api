const { INTEGER, BOOLEAN } = require('sequelize');
const User = require('./user');
const Answer = require('./answer');
const sequelize = require('../db');

const AnswerVote = sequelize.define('answer_vote', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  answerId: {
    type: INTEGER,
    references: {
      model: Answer,
      key: 'id',
    },
  },
  isUpvote: {
    type: BOOLEAN,
    defaultValue: true,
  },
});

module.exports = AnswerVote;
