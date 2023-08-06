const { jwtCreateToken } = require('../../helpers/nodemailerJWT');
const { sendEmailRequest } = require('../../helpers/sendEmail');
const UserModel = require('../../models/userModel');

const forgetPassword = async (req, res) => {
  const { email } = req.body;

  const user = await UserModel.findOne({ email });

  const payload = {
    _id: user._id,
    email: user.email,
  };

  const token = await jwtCreateToken(payload);

  await sendEmailRequest(email, token);
  res.send('Email sent!!');
};

module.exports = forgetPassword;
