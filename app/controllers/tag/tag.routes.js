const Tag = require('./tag.model');

exports.getAll = async (ctx) => {
  try {
    const tags = await Tag.all();
    ctx.body = tags;
  } catch (err) {
    ctx.status = 500;
  }
};

exports.get = async (ctx) => {
  try {
    const { id } = ctx.params;
    const tag = await Tag.findById(id);
    if (tag) {
      ctx.body = tag;
    } else {
      ctx.status = 400;
    }
  } catch (err) {
    ctx.status = 500;
  }
};

exports.create = async (ctx) => {
  try {
    const { name } = ctx.request.body;
    if (name) {
      const tag = await Tag.create({ name });
      ctx.body = tag;
    } else {
      ctx.status = 400;
    }
  } catch (err) {
    if (err && err.errors && err.errors[0] && err.errors[0].message) {
      ctx.status = 400;
      ctx.body = { message: err.errors[0].message };
    } else {
      ctx.status = 500;
    }
  }
};

exports.update = () => {

};

exports.remove = () => {

};
