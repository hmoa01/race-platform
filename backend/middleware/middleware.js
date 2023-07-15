const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/config');
const UserModel = require('../models/userModel');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!Object.prototype.hasOwnProperty.call(req.headers, 'authorization')) {
    return res.status(500).send({ msg: 'token doestn exist' });
  }

  jwt.verify(token, SECRET_KEY, async (err, decoded) => {
    // console.log(decoded);
    if (err) {
      console.log(err);
      err = {
        name: 'JsonWebTokenError',
        message: 'jwt malformed',
      };
    } else {
      try {
        const user = await UserModel.findOne({ id: decoded.id }, null, {
          lean: true,
        }); //! PROVERITI ID

    

        if (user) {
          let { password, ...thisUser } = user;
          req.locals = Object.assign({}, decoded, thisUser);

          

        
          next();
        } else {
          res
            .status(401)
            .send({ message: 'Unauthorized: token does not exist' });
        }
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .send({ message: 'Internal Server Error: ' + error.message });
      }
    }
  });
};

module.exports = verifyToken;
