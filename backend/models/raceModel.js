const { Schema, model } = require('mongoose');

const RaceSchema = new Schema({
  name: { type: String, required: true },
  dateOfRace : { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true},
  startTime: { type: String, required: true },   
  endTime: { type: String, required: true },     
  welcomePackage: { type: Boolean, default: false },
});

const RaceModel = model('races', RaceSchema);

module.exports = RaceModel;
