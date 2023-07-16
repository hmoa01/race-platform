const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/config');
const { CustomError } = require('../errorHandler/errors');

module.exports = {
  createToken(payload) {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, SECRET_KEY, { expiresIn: '30d' }, (err, token) => {
        if (err) reject(new CustomError(err.message, 500));
        resolve(token);
      });
    });
  },
};
