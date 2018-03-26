const User = require('../controllers/user/user.controller');

exports.register = async (ctx) => {
  const { login, password } = ctx.request.body;
  const user = await User.create(login, password);
  if (user) {
    ctx.body = {
      message: `User ${user.login} has been created.`,
    };
  } else {
    ctx.status = 400;
  }
};

exports.login = async (ctx) => {
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
};

exports.getAll = async (ctx) => {
  const users = await User.getAll();
  ctx.body = users;
};
