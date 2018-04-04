const Answer = require('../controllers/answer/answer.controller');

exports.create = async ctx => {
  const { id } = ctx.params;
  const { text, userId } = ctx.request.body;
  const question = await Answer.create(text, id, userId);
  if (question) {
    ctx.body = question;
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
