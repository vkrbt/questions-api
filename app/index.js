require('dotenv').config();
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const models = require('./models');
const routes = require('./routes');

models.sequelize.sync();

const app = new Koa();
app.use(bodyParser());
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});
app.use(routes.routes());

const server = app.listen(process.env.PORT, () => {
  console.log(`App listening on ${process.env.PORT} port`);
});

module.exports = server;
