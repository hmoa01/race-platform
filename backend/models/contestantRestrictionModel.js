const { Schema, model } = require('mongoose');

const ContestantRestrictionSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  birthDate: { type: Date, required: true },
});

const ContestantRestrictionModel = model(
  'contestant-restrictions',
  ContestantRestrictionSchema
);

module.exports = ContestantRestrictionModel;
