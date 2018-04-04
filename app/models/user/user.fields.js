const { STRING, BOOLEAN } = require('sequelize');

module.exports = {
  login: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  isAdmin: {
    type: BOOLEAN,
    defaultValue: false,
  },
};
