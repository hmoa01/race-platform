const { Schema, model } = require('mongoose');

const RaceAdminSchema = new Schema({
  raceId: { type: Schema.Types.ObjectId, ref: 'race', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
});

const RaceAdminModel = model('RaceAdmins', RaceAdminSchema);

module.exports = RaceAdminModel;
