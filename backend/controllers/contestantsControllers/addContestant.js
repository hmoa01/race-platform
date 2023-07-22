const ContestantModel = require('../../models/contestantModel');

const addRaceControllers = async (req, res, next) => {
  const { role } = req.locals;
  const reqBody = req.body;

  if (role !== 'superadmin') {
    throw new Error('You are not authorized to add a race');
  }

  let newContestant = await ContestantModel.create(reqBody)

  return res.send(newContestant)

}


module.exports = addRaceControllers