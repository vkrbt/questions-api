const sequelize = require('../../db');
const userFields = require('./user.fields');

module.exports = () => {
  const User = sequelize.define('user', userFields);

  User.associate = (models) => {
    models.User.hasMany(models.Question, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
    models.User.hasMany(models.QuestionVote, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
    models.User.hasMany(models.Answer, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
    models.User.hasMany(models.AnswerVote, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
  };

  return User;
};
