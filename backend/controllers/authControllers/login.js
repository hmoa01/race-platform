const UserModel = require('../../models/userModel');
const { createToken } = require('../../helpers/jwt');
const {
  ValidationError,
  NotFoundError,
} = require('../../errorHandler/errors.js');

const bCryptFunctions = require('../../helpers/bcryptFunctions');

const login = async (req, res, next) => {
  const { password, userName } = req.body;

  const user = await UserModel.findOne({ userName }, null, { lean: true });

  if (!user) {
    throw new NotFoundError('User not found');
  }

  const isPasswordEqual = await bCryptFunctions.comparePassword(
    password,
    user.password
  );

  if (!isPasswordEqual) {
    throw new ValidationError('user not valid');
  }

  delete user.password;
  // const { pass:password, ...thisUser } = user;

  const token = await createToken({
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    role: user.role,
  });

  return res.send({ user, token });

};

module.exports = login;
