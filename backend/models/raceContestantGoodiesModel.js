const { Schema, model } = require('mongoose');

const RaceContestantGoodiesSchema = new Schema({
  contestantId: { type: Schema.Types.ObjectId, required: true },
  raceId: { type: Schema.Types.ObjectId, required: true },
  goodiesId: { type: Schema.Types.ObjectId, required: true },
  quantity: { type: Number, required: true },
});

const RaceGoodiesModel = model(
  'race-contestant-goodies',
  RaceContestantGoodiesSchema
);

module.exports = RaceGoodiesModel;
