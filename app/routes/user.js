const User = require('../controllers/user/user.controller');
const { createToken } = require('../auth');

exports.register = async ctx => {
  const { login, password } = ctx.request.body;
  const user = await User.create(login, password);
  if (user) {
    const token = await createToken(user);
    ctx.body = {
      token,
      message: `User ${user.login} has been created.`,
    };
  } else {
    ctx.status = 400;
  }
};

exports.login = async ctx => {
  const { login, password } = ctx.request.body;
  const user = await User.getByLogin(login);
  const isPasswordCorrect = await User.checkPassword(password, user.password);
  if (isPasswordCorrect) {
    const token = await createToken(user);
    ctx.body = {
      token,
      message: 'Success!',
    };
  } else {
    ctx.status = 400;
  }
};

exports.getAll = async ctx => {
  const users = await User.getAll();
  ctx.body = users;
};
