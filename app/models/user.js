const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
  login: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  password: Sequelize.STRING,
  isAdmin: Sequelize.BOOLEAN,
});

module.exports = User;
