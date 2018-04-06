const Tag = require('../controllers/tag//tag.controller');

exports.create = async ctx => {
  const { name } = ctx.request.body;
  const tag = Tag.create(name);
  if (tag) {
    ctx.body = tag;
  } else {
    ctx.status = 400;
  }
};
