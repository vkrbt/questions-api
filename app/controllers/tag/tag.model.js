const { INTEGER, STRING } = require('sequelize');
const sequelize = require('../../db');

const Tag = sequelize.define('tag', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Tag;
