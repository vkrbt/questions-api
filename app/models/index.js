const sequelize = require('../db');

const user = require('./user/user.model');
const question = require('./question/question.model');
const questionVote = require('./questionVote/questionVote.model');
const answer = require('./answer/answer.model');
const answerVote = require('./answerVote/answerVote.model');
const tag = require('./tag/tag.model');

const db = {
  User: user(),
  Question: question(),
  QuestionVote: questionVote(),
  Answer: answer(),
  AnswerVote: answerVote(),
  Tag: tag(),
};

Object.values(db).forEach(model => {
  if (model.associate) {
    model.associate(db);
  }
});

module.exports = db;
module.exports.sequelize = sequelize;
