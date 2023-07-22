const ContestantModel = require("../../models/contestantModel")

const getAllContestants = async (req, res, next) => {
  let allContestants = await ContestantModel.find({})

  return res.send(allContestants)
}

module.exports = getAllContestants