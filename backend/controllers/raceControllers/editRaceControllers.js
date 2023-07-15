const RaceModel = require('../../models/raceModel')
const RaceUserModel = require('../../models/raceUserModel')

const editRaceControllers = async (req, res, next) => {

    const { raceId } = req.params
    const reqBody = req.body
    const { _id , role} = req.locals 


     try {

         if(role !== 'superadmin' && role !== 'admin'){
            throw new Error("You do not have the right to edit race")
         }
         if(role === 'admin'){
            const assignToRace = await RaceUserModel.findOne({userId: _id , raceId})
            if(!assignToRace){
               throw new Error('You dont have permision')
            }
         }



        const editRace = await RaceModel.findOneAndUpdate({_id: raceId } , reqBody , {new : true})
        

        res.send(editRace)
        
     } catch (error) {
        return next(error)
     }

    
}


module.exports = editRaceControllers