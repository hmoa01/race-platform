const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const {
  jsonWebTokenError,
  tokenExpired,
} = require('../errorHandler/errorMessages');

const jwtCreateToken = async (payload) => {
  return new Promise(async (resolve, reject) => {
    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) reject(jsonWebTokenError);
        resolve(token);
      }
    );
  });
};

const jwtVerifyToken = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    return decoded;
  } catch (err) {
    throw new Error(tokenExpired);
  }
};

module.exports = {
  jwtCreateToken,
  jwtVerifyToken,
};
