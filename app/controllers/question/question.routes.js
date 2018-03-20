const Question = require('./question.model');

const getAll = async (ctx) => {
  const questions = await Question.all();
  ctx.body = questions;
};

const create = async (ctx) => {
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

module.exports = {
  getAll,
  create,
};
