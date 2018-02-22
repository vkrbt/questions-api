const Sequelize = require('sequelize');

const sequelize = new Sequelize('dkwagavy', 'dkwagavy', 'oCXSCyvcK41Vkfs1A56sYB8AnVt6nb4y', {
  host: 'horton.elephantsql.com',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
