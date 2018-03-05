const { INTEGER, STRING } = require('sequelize');
const sequelize = require('../db');

const Tag = sequelize.define('tag', {
  id: {
    type: INTEGER,
    primaryKey: true,
  },
  name: STRING,
});

module.exports = Tag;
