const { OAuth2Client } = require('google-auth-library');
const { GOOGLE_CLIENT_ID } = require('../../config/config');
const UserModel = require('../../models/userModel');
const { createToken } = require('../../helpers/jwt');

const googleClient = new OAuth2Client({
  clientId: GOOGLE_CLIENT_ID,
});

const googleAuth = async (req, res) => {
  const { token } = req.body;

  const ticket = await googleClient.verifyIdToken({
    idToken: token,
    audience: GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();

  let user = await UserModel.findOne({ email: payload?.email }, null, {
    lean: true,
  });

  if (!user) {
    user = await new UserModel({
      firstName: payload?.given_name,
      lastName: payload?.family_name,
      email: payload?.email,
      password: 'LoginWithGoogle',
    });

    await user.save();
  }

  const { password: pass, ...currentUser } = user;

  let tokenJWT = await createToken({
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });

  return res.status(200).send({ user: currentUser, token: tokenJWT });
};

module.exports = googleAuth;
