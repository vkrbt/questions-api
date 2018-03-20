const { INTEGER, BOOLEAN } = require('sequelize');
const User = require('../user/user.model');
const Answer = require('../answer/answer.model');
const sequelize = require('../../db');

const AnswerVote = sequelize.define('answer_vote', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  answerId: {
    type: INTEGER,
    allowNull: false,
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
