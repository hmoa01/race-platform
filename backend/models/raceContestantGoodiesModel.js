const { Schema, model } = require('mongoose');
const GoodiesModel = require('./goodieModel');

const RaceContestantGoodiesSchema = new Schema({
  contestantId: { type: Schema.Types.ObjectId, required: true },
  raceId: { type: Schema.Types.ObjectId, required: true },
  goodies: { goodies: [GoodiesModel], default: [], required: true },
  quantity: { type: Number, default: 0 },
});

const RaceGoodiesModel = model(
  'race-contestant-goodies',
  RaceContestantGoodiesSchema
);

module.exports = RaceGoodiesModel;
