const { Schema, model } = require('mongoose');

const RaceContestantGoodiesSchema = new Schema({
  raceId: { type: Schema.Types.ObjectId, ref: 'race', required: true },
  contestantId: {
    type: Schema.Types.ObjectId,
    ref: 'contestant',
    required: true,
  },
  goodiesId: { type: Schema.Types.ObjectId, ref: 'goodies', required: true },
  canClaim: { type: Boolean, default: false },
  quantity: { type: Number, default: 0 },
});

const RaceContestantGoodies = model(
  'RaceContestantGoodies',
  RaceContestantGoodiesSchema
);

module.exports = RaceContestantGoodies;
