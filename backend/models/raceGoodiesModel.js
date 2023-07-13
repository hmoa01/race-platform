const { Schema, model } = require('mongoose');

const RaceGoodiesSchema = new Schema({
  raceId: { type: Schema.Types.ObjectId, required: true },
  goodieId: { type: Schema.Types.ObjectId, required: true },
  quantity: { type: Number, required: true },
  isEnabled: { type: Boolean, default: false },
});

const RaceGoodiesModel = model('race-goodies', RaceGoodiesSchema);

module.exports = RaceGoodiesModel;
