const User = require('../models/user');

const getAll = async (ctx) => {
  const users = await User.findAll();
  ctx.body = users;
};

const register = async (ctx) => {
  const { login, password } = ctx.request.body;
  try {
    const user = await User.create({
      login,
      password,
    });
    ctx.body = {
      message: `User ${user.login} has been created.`,
    };
  } catch (err) {
    ctx.status = 400;
    console.log(err.e);
  }
};

module.exports = {
  getAll,
  register,
};
