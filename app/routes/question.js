const Question = require('../controllers/question/question.controller');

exports.create = async ctx => {
  const { title, description, userId } = ctx.request.body;
  const question = await Question.create(title, description, userId);
  if (question) {
    ctx.body = question;
  } else {
    ctx.status = 400;
  }
};

exports.getAll = async ctx => {
  const questions = await Question.getAll();
  if (questions) {
    ctx.body = questions;
  } else {
    ctx.status = 400;
  }
};

exports.getById = async ctx => {
  const { id } = ctx.params;
  const questions = await Question.getById(id);
  if (questions) {
    ctx.body = questions;
  } else {
    ctx.status = 400;
  }
};

exports.update = async ctx => {
  const { id } = ctx.params;
  const questions = await Question.updateById(id, ctx.request.body);
  if (questions) {
    ctx.body = questions;
  } else {
    ctx.status = 400;
  }
};

exports.upvote = async ctx => {
  const { id } = ctx.params;
  const vote = await Question.vote(id, 1);
  ctx.body = vote;
};

exports.downvote = async ctx => {
  const { id } = ctx.params;
  const vote = await Question.vote(id, 1, false);
  ctx.body = vote;
};

exports.remove = async ctx => {
  const { id } = ctx.params;
  ctx.body = await Question.remove(id);;
};
