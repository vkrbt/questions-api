const Koa = require('koa');

const sequelize = require('./db');
const { PORT } = require('./config');

const app = new Koa();

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const server = app.listen(PORT, () => {
  console.log(`App listening on ${PORT} port`);
});

module.exports = server;
