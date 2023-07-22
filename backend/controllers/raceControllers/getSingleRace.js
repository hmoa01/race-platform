const RaceModel = require('../../models/raceModel');

const getSingleRace = async (req, res) => {
  const { raceId } = req.params;
  const race = await RaceModel.findById(raceId, null, { lean: true });
  res.send(race);
};

module.exports = getSingleRace;
