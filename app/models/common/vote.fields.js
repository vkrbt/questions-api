const { BOOLEAN } = require('sequelize');

module.exports = {
  isUpvote: {
    type: BOOLEAN,
    defaultValue: true,
  },
};
