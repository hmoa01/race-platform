const bcrypt = require('bcrypt');

const bCryptFunctions = {
  hashPassword: async (password) => {
    const saltRounds = 10;
    return bcrypt
      .hash(password, saltRounds)
      .then((res) => res)
      .catch((err) => err);
  },

  comparePassword: async (password, hash) =>
    bcrypt
      .compare(password, hash)
      .then((res) => res)
      .catch((err) => false),
};
module.exports = bCryptFunctions;
