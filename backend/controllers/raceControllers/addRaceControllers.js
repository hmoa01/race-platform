const RaceModel = require('../../models/raceModel');

const addRaceControllers = async (req, res, next) => {
  const { role } = req.locals;
  const reqBody = req.body;

  if (role !== 'superadmin') {
    throw new Error('You are not authorized to add a race');
  }

  let newRace = await RaceModel.create(reqBody)

  res.send(newRace)

}


module.exports = addRaceControllers