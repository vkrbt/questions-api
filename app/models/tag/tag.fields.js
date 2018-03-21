const { STRING } = require('sequelize');

module.exports = {
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
};
