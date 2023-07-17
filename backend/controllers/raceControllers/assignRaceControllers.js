const UserModel = require('../../models/userModel');
const { httpStatus } = require('../../config/httpStatus');
const { USER_NOT_AUTHORIZED } = require('../../errorHandler/errorMessages')



const  assignRaceControllers =  async (req, res) =>{

    const { _id , role} = req.locals

    if(role === 'user'){
        throw new Error(USER_NOT_AUTHORIZED)
    }
    
    if(role === 'superadmin' && role === 'admin'){
       res.status(httpStatus.USER_ACCESS_GRANTED.status).send(httpStatus.USER_ACCESS_GRANTED.send)
    }
    const assignUser = await UserModel.findOne({_id: _id}, null, {lean: true})
    
    res.send(assignUser)



}


module.exports = assignRaceControllers;