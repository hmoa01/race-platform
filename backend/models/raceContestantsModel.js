const { Schema, model } = require('mongoose');

const RaceContestantsSchema = new Schema({
  raceId: { type: Schema.Types.ObjectId, ref: 'race', required: true },
  contestantId: {
    type: Schema.Types.ObjectId,
    ref: 'contestant',
    required: true,
  },
  isPackageClaimed: { type: Boolean, default: false },
});

const RaceContestantsModel = model('RaceContestants', RaceContestantsSchema);

module.exports = RaceContestantsModel;
