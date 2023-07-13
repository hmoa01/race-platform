const { Schema, model } = require('mongoose');

const RaceUserSchema = new Schema({
  raceId: { type: Schema.Types.ObjectId, required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
});

const RaceUserModel = model('race-users', RaceUserSchema);

module.exports = RaceUserModel;
