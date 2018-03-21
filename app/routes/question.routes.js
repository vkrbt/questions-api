const Question = require('../models/question/question.model');
const QuestionVote = require('../models/questionVote/questionVote.model');

exports.getAll = async (ctx) => {
  const { } = ctx.request;
  const questions = await Question.findAll({ offset: 5, limit: 5 });
  ctx.body = questions;
};

exports.get = async (ctx) => {
  try {
    const { id } = ctx.request;
    const question = await Question.findById(id);
    if (question) {
      ctx.body = question;
    } else {
      ctx.status = 400;
    }
  } catch (err) {
    ctx.status = 500;
  }
};

exports.create = async (ctx) => {
  const { title, description } = ctx.request.body;
  const newQuestion = await Question.create({
    title,
    description,
    authorId: 1,
    createDate: Date.now(),
    updateDate: Date.now(),
  });
  ctx.body = newQuestion;
};

exports.upvote = async (ctx) => {

};


exports.upvote = async (ctx) => {

};
