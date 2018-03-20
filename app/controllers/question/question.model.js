const {
  INTEGER,
  TEXT,
  DATE,
  STRING,
} = require('sequelize');
const User = require('../user/user.model');
const sequelize = require('../../db');

const Question = sequelize.define('question', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: STRING,
  description: {
    type: TEXT,
    allowNull: false,
  },
  authorId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  createDate: {
    type: DATE,
    allowNull: false,
  },
  updateDate: {
    type: DATE,
    allowNull: false,
  },
});

module.exports = Question;
