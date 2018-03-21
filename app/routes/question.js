const Question = require('../controllers/question/question.controller');

exports.create = async (ctx) => {
  try {
    const { title, description, userId } = ctx.request.body;
    const question = await Question.create(title, description, userId);
    if (question) {
      ctx.body = question;
    } else {
      ctx.status = 400;
    }
  } catch (err) {
    ctx.status = 500;
  }
};

exports.getAll = async (ctx) => {
  try {
    const questions = await Question.getAll();
    if (questions) {
      ctx.body = questions;
    } else {
      ctx.status = 400;
    }
  } catch (err) {
    ctx.status = 500;
  }
};

exports.getById = async (ctx) => {
  try {
    const { id } = ctx.params;
    const questions = await Question.getById(id);
    if (questions) {
      ctx.body = questions;
    } else {
      ctx.status = 400;
    }
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
};

exports.update = async (ctx) => {
  try {
    const { id } = ctx.params;
    const questions = await Question.updateById(id, ctx.request.body);
    if (questions) {
      ctx.body = questions;
    } else {
      ctx.status = 400;
    }
  } catch (err) {
    ctx.status = 500;
  }
};