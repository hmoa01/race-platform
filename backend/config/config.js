require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  SECRET_KEY: process.env.SECRET_KEY,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
};
