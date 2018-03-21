const bcrypt = require('bcrypt');
const User = require('../models/user/user.model');

const getAll = async (ctx) => {
  const users = await User.all();
  ctx.body = users;
};
exports.getAll = getAll;


const postRegister = async (ctx) => {
  try {
    const { login, password } = ctx.request.body;
    const hashedPassword = await bcrypt.hash(password, +process.env.SALT_ROUNDS);
    const user = await User.create({
      login,
      password: hashedPassword,
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
    }
  }
};
exports.postRegister = postRegister;


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
  }
};
exports.postLogin = postLogin;
