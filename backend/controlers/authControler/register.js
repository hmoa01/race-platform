const UserModel = require('../../models/userModel')

const bcrypt = require('bcrypt')
const saltRounds = 10

const { httpStatus } = require('../../config/httpStatus')


const register = async(req, res) => {

    const { userName , password } = req.body 
    const reqBody = req.body


    let isUserExits = await UserModel.findOne( { userName})

    if(isUserExits >= 1){
      res.status(httpStatus.EXIST.status).send(httpStatus.EXIST.send)
    } else {
     
      bcrypt.hash(password, saltRounds, (err, hash) => {

        if (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR.status).send(httpStatus.INTERNAL_SERVER_ERROR.send)

        } else {
            reqBody.password = hash

            
            let newUser = new UserModel({...reqBody})

               newUser.save()
                .then((user) => res.send(user))
                .catch((err) => { console.error(err);
                  res.status(httpStatus.CANNOT_SAVE_USER.status).send(httpStatus.CANNOT_SAVE_USER.send)
                })
        }
    })
    

    }

}

module.exports = register








