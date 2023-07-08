
const UserModel = require("../../models/userModel");
const bcrypt = require("bcrypt");
const { currentToken } = require("../../helpers/jwt");


const login = async (req, res) => {
  const { password, email } = req.body;

  try {
    const user = await UserModel.findOne({ email }, null, { lean: true });

    if (user) {
      bcrypt.compare(password, user.password, (error, result) => {
        if (result) {
          const { password, ...thisUser } = user;

          const token = currentToken({
            _id: thisUser._id,
            firstName: thisUser.firstName,
            lastName: thisUser.lastName,
            userName: thisUser.userName,
            role: thisUser.role,
          });
          

          res.send({ user: thisUser, token });
          
        } else {
          res.status(500).send({ message: "user not valid" });
        }
      });
    } else {
      res.status(500).send({ message: "error user dont exist in db" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error user dont exist in db" });
  }
};

module.exports =  login;