const { Schema, model } = require('mongoose');

const RaceSchema = new Schema({
  name: { type: String, required: true },
  dateOfRace : { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true},
  startTime: { type: String, required: true },   // TODO: change to Date ?
  endTime: { type: String, required: true },     // TODO: change to Date ?
  welcomePackage: { type: Boolean, default: false },
});

const RaceModel = model('Races', RaceSchema);

module.exports = RaceModel;
