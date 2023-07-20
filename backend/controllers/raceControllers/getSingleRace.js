const RaceModel = require('../../models/raceModel');

const getSingleRace = async (req, res) => {
  const { id } = req.params;
  const race = await RaceModel.findById(id, null, { lean: true });
  console.log(race);

  res.send(race);
};

module.exports = getSingleRace;
