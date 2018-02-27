const Sequelize = require('sequelize');
const sequelize = require('../db');

const Tag = sequelize.define('tag', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: Sequelize.STRING,
});

module.exports = Tag;
