const Sequelize = require('sequelize');
const User = require('./user');
const sequelize = require('../db');

const Question = sequelize.define('question', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  authorId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  createDate: Sequelize.DATE,
  updateDate: Sequelize.DATE,
});

module.exports = Question;
