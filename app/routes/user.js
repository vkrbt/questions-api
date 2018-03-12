const bcrypt = require('bcrypt');
const User = require('../models/user');

const getAll = async (ctx) => {
  const users = await User.all();
  ctx.body = users;
};

const postRegister = async (ctx) => {
  try {
    const { login, password } = ctx.request.body;
    const saltedPassword = await bcrypt.hash(password);
    const user = await User.create({
      login,
      password: saltedPassword,
    });
    if (user) {
      ctx.body = {
        message: `User ${user.login} has been created.`,
      };
    } else {
      throw user;
    }
  } catch (err) {
    if (err.errors) {
      ctx.status = 400;
      ctx.body = {
        message: err.errors && err.errors[0].message,
      };
    } else {
      ctx.status = 500;
      ctx.body = {
        message: 'An error has been occured',
      };
    }
  }
};

const postLogin = async (ctx) => {
  try {
    const { login, password } = ctx.request.body;
    const user = await User.findOne({
      where: {
        login,
      },
    });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (isPasswordCorrect) {
      ctx.body = {
        message: 'Success!',
      };
    } else {
      throw user;
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      message: 'No such user or password is wrong',
    };
  }
};

module.exports = {
  getAll,
  postRegister,
  postLogin,
};
