const Tag = require('../controllers/tag/tag.controller');

exports.getAll = async ctx => {
  const questions = await Tag.getAll();
  if (questions) {
    ctx.body = questions;
  } else {
    ctx.status = 400;
  }
}

exports.create = async ctx => {
  if (ctx.state.user.isAdmin) {
    const { name } = ctx.request.body;
    const tag = await Tag.create(name);
    if (tag) {
      ctx.body = tag;
    } else {
      ctx.status = 400;
    }
  } else {
    ctx.status = 403;
  }
};
