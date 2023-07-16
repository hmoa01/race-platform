const RaceModel = require('../../models/raceModel')
const RaceUserModel = require('../../models/raceUserModel')


const deleteRaceControllers = async (req, res, next) => {

    const { raceId } = req.params
    const { _id, role } = req.locals
    
    console.log(req.locals); // ! { _id: '64a96c08beace1cda438ef9f', role: 'superadmin' }
    


try {

    if(role !== 'superadmin'){
        throw new Error("You are not superadmin")
    }
    if(role === 'superadmin'){
     const superAdminDeletedRace = await RaceUserModel.find({userId:_id})
    
    if(!superAdminDeletedRace){
         throw new Error("Don't exist in db")
     }

    }

const deleteRace = await RaceModel.deleteOne({_id:raceId})

res.send(deleteRace)

  
} catch (error) {
    return next(error)
    
}

}

module.exports = deleteRaceControllers