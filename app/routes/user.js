const User = require('../controllers/user/user.controller');

exports.register = async (ctx) => {
  try {
    const { login, password } = ctx.request.body;
    const user = await User.create(login, password);
    if (user) {
      ctx.body = {
        message: `User ${user.login} has been created.`,
      };
    } else {
      ctx.status = 400;
    }
  } catch (err) {
    ctx.status = 500;
  }
};

exports.login = async (ctx) => {
  try {
    const { login, password } = ctx.request.body;
    const user = await User.getByLogin(login);
    const isPasswordCorrect = await User.checkPassword(password, user.password);
    if (isPasswordCorrect) {
      ctx.body = {
        message: 'Success!',
      };
    } else {
      ctx.status = 400;
    }
  } catch (err) {
    ctx.status = 500;
  }
};

exports.getAll = async (ctx) => {
  try {
    const users = await User.getAll();
    ctx.body = users;
  } catch (err) {
    ctx.status = 500;
  }
};
