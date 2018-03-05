const {
  INTEGER,
  TEXT,
  DATE,
  STRING,
} = require('sequelize');
const User = require('./user');
const sequelize = require('../db');

const Question = sequelize.define('question', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: STRING,
  description: TEXT,
  authorId: {
    type: INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  createDate: DATE,
  updateDate: DATE,
});

module.exports = Question;
