const UserModel = require('../../models/userModel');

const { httpStatus } = require('../../config/httpStatus');
const bCryptFunctions = require('../../helpers/bcryptFunctions');

const register = async (req, res) => {

  const { userName, password } = req.body;

  const reqBody = req.body;

  let isUserExits = await UserModel.findOne({ userName });

  if (isUserExits >= 1) {
    return res.status(httpStatus.EXIST.status).send(httpStatus.EXIST.send);
  }

  let hashedPassword = await bCryptFunctions.hashPassword(password);

  let newUser = new UserModel({ ...reqBody, password: hashedPassword });

  await newUser.save();

  return res.send({ newUser });
};

module.exports = register;
