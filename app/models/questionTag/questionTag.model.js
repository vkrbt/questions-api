const sequelize = require('../../db');
const fields = require('./questionTag.fields');

module.exports = () => {
  const QuestionTag = sequelize.define('questionTag', fields, {
    indexes: [
      {
        unique: true,
        fields: ['questionId', 'tagId'],
      },
    ],
  });

  QuestionTag.associate = models => {
    models.QuestionTag.belongsTo(models.Tag, { foreignKey: { allowNull: false } });
    models.QuestionTag.belongsTo(models.Question, { foreignKey: { allowNull: false } });
  };

  return QuestionTag;
};
