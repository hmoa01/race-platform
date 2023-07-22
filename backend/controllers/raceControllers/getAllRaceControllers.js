const RaceModel = require('../../models/raceModel');

const getAllRaceControllers = async (req, res, next) => {
  try {
    let allRaces = await RaceModel.aggregate([{ $sort: { dateOfRace: 1 } }]);

    res.send(allRaces);
  } catch (error) {
    return next(error);
  }
};

module.exports = getAllRaceControllers;
