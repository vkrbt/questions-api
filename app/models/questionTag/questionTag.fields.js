const { INTEGER } = require('sequelize');

module.exports = {
  questionId: {
    type: INTEGER,
    allowNull: false,
  },
  tagId: {
    type: INTEGER,
    allowNull: false,
  },
};
