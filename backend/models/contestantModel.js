const { Schema, model } = require('mongoose');

const ContestantSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  birthDate: { type: Date, required: true },
});

const ContestantModel = model('contestants', ContestantSchema);

module.exports = ContestantModel;
