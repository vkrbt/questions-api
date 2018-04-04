const { TEXT, STRING } = require('sequelize');

module.exports = {
  title: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: TEXT,
    allowNull: false,
  },
};
