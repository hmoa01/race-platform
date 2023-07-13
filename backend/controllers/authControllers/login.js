const UserModel = require('../../models/userModel');
const { createToken } = require('../../helpers/jwt');
const {
  ValidationError,
  NotFoundError,
} = require('../../errorHandler/errors.js');

const bCryptFunctions = require('../../helpers/bcryptFunctions');

const login = async (req, res, next) => {
  try {
    const { password, userName } = req.body;

    

    const user = await UserModel.findOne({ userName }, null, { lean: true });

    

    if (!user) {
      throw new NotFoundError('error user dont exist in db');
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
    console.log('token');
    console.log(token);

    return res.send({ user, token });
  } catch (error) {
    return next(error);
  }
};

module.exports = login;
