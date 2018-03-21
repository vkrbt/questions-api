require('dotenv').config();
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const models = require('./models');

const app = new Koa();
app.use(bodyParser());

const server = app.listen(process.env.PORT, () => {
  console.log(`App listening on ${process.env.PORT} port`);
});

module.exports = server;
