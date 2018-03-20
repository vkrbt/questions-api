const pg = require('pg');
const Sequelize = require('sequelize');

pg.defaults.ssl = true;

const sequelize = new Sequelize(process.env.DATABASE_URL);

sequelize.sync();

module.exports = sequelize;
