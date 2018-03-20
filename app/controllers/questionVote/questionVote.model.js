const { INTEGER, BOOLEAN } = require('sequelize');
const User = require('../user/user.model');
const Question = require('../question/question.model');
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
  questionId: {
    type: INTEGER,
    references: {
      model: Question,
      key: 'id',
    },
  },
  isUpvote: {
    type: BOOLEAN,
    defaultValue: true,
  },
});

module.exports = AnswerVote;
