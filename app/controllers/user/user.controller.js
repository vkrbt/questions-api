const bcrypt = require('bcrypt');
const { User } = require('../../models');

module.exports.create = async (login, password) => {
  const hashedPassword = await bcrypt.hash(password, +process.env.SALT_ROUNDS);
  return User.create({
    login,
    password: hashedPassword,
  });
};

module.exports.getAll = () => {
  const options = {
    attributes: [
      'id',
      'login',
    ],
  };
  return User.findAndCountAll(options);
};

module.exports.getByLogin = login => User.findOne({
  where: {
    login,
  },
});

module.exports.checkPassword = (password, hashedPassword) => (
  bcrypt.compare(password, hashedPassword)
);
