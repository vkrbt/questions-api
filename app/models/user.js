const { STRING, BOOLEAN, INTEGER } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  login: {
    type: STRING,
    unique: true,
  },
  password: STRING,
  isAdmin: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;
