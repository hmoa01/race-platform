const { Schema, model } = require('mongoose');

const RaceContestantSchema = new Schema({
  contestantId: { type: Schema.Types.ObjectId, required: true },
  raceId: { type: Schema.Types.ObjectId, required: true },
  bib: { type: Number, required: true },
  finishTime: { type: Number, required: true },
});

const RaceContestantModel = model('race-contestants', RaceContestantSchema);

module.exports = RaceContestantModel;
