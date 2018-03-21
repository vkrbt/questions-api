require('dotenv').config();
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const models = require('./models');
const routes = require('./routes');

models.sequelize.sync();

const app = new Koa();
app.use(bodyParser());
app.use(routes.routes());

const server = app.listen(process.env.PORT, () => {
  console.log(`App listening on ${process.env.PORT} port`);
});

module.exports = server;
