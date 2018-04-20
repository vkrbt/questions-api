const koaJwt = require('koa-jwt');
const jwt = require('jsonwebtoken');

const setup = koaJwt({
  cookie: true,
  secret: process.env.JWT_SECRET,
}).unless({ path: [/^\/register/, /^\/login/] });

exports.authSetup = setup;

const createToken = ({ id, isAdmin }) =>
  new Promise((res, rej) => {
    jwt.sign(
      { id, isAdmin },
      process.env.JWT_SECRET,
      {
        expiresIn: 30 * 60,
      },
      (err, token) => {
        if (!err) {
          res(token);
          return;
        }
        rej(err);
      },
    );
  });

exports.createToken = createToken;
