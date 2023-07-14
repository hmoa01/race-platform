const RaceModel = require('../../models/raceModel');

const getAllRaceControllers = async (req, res,next) => {
     
    try {
        let allRaces = await RaceModel.find({})

        res.send(allRaces)
    } catch (error) {
        return next(error);
    }
    

}

module.exports = getAllRaceControllers;