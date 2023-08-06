const {
  userNotFound,
  passwordIsRequired,
} = require('../../errorHandler/errorMessages');
const bCryptFunctions = require('../../helpers/bcryptFunctions');
const { jwtVerifyToken } = require('../../helpers/nodemailerJWT');
const UserModel = require('../../models/userModel');

const resetPassword = async (req, res) => {
  const { newPassword, token } = req.body;

  const decoded = await jwtVerifyToken(token);

  console.log('token');
  console.log(decoded);

  const user = await UserModel.findOne({ _id: decoded._id });

  console.log('user');
  console.log(user);

  if (!user) {
    if (!user) {
      throw new Error(userNotFound);
    }
  }

  if (!newPassword) {
    throw new Error(passwordIsRequired);
  }

  const hashedPassword = await bCryptFunctions.hashPassword(newPassword);

  user.password = hashedPassword;

  await user.save();

  res.send('Password changed!');
};

module.exports = resetPassword;
