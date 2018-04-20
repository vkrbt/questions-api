const Answer = require('../controllers/answer/answer.controller');

exports.create = async ctx => {
  const { id } = ctx.params;
  const { text } = ctx.request.body;
  const question = await Answer.create(text, id, ctx.state.user.id);
  if (question) {
    ctx.body = question;
  } else {
    ctx.status = 400;
  }
};

exports.getById = async ctx => {
  const { id } = ctx.params;
  const answers = await Answer.getById(id);
  if (answers) {
    ctx.body = answers;
  } else {
    ctx.status = 400;
  }
};

exports.getAllByQuestionId = async ctx => {
  const { id } = ctx.params;
  const answers = await Answer.getAllByQuestionId(id);
  if (answers) {
    ctx.body = answers;
  } else {
    ctx.status = 400;
  }
};

exports.update = async ctx => {
  const { id } = ctx.params;
  const answers = await Answer.updateById(id, ctx.request.body);
  if (answers) {
    ctx.body = answers;
  } else {
    ctx.status = 400;
  }
};

exports.upvote = async ctx => {
  const { id } = ctx.params;
  const vote = await Answer.vote(id, ctx.state.user.id);
  ctx.body = vote;
};

exports.downvote = async ctx => {
  const { id } = ctx.params;
  const vote = await Answer.vote(id, ctx.state.user.id, false);
  ctx.body = vote;
};

exports.remove = async ctx => {
  const { id } = ctx.params;
  ctx.body = await Answer.remove(id);
};
