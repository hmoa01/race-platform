const { Schema, model } = require('mongoose');

const ContestantSchema = new Schema({
  bib: { type: String, required: true },
  name: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date, required: true },
});

const ContestantModel = model('Contestants', ContestantSchema);

module.exports = ContestantModel;
