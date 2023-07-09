const UserModel = require('../../models/userModel');

const { httpStatus } = require('../../config/httpStatus');
const bCryptFunctions = require('../../helpers/bcryptFunctions');

const register = async (req, res) => {
  console.log('req.body');
  console.log(req.body);
  const { userName, password } = req.body;

  console.log('req.body');
  console.log(req.body);
  const reqBody = req.body;

  let isUserExits = await UserModel.findOne({ userName });

  if (isUserExits >= 1) {
    return res.status(httpStatus.EXIST.status).send(httpStatus.EXIST.send);
  }

  let hashedPassword = await bCryptFunctions.hashPassword(password);

  let newUser = new UserModel({ ...reqBody, password: hashedPassword });

  await newUser.save();

  console.log('newUser');
  console.log(newUser);

  return res.send({ newUser });
};

module.exports = register;
