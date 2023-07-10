const { Schema, model } = require('mongoose');

const RaceSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  startTime: { type: String, required: true },
  welcomePackage: { type: Boolean, default: false },
});

const RaceModel = model('Races', RaceSchema);

module.exports = RaceModel;
