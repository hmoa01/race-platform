const { Schema, model } = require('mongoose');

const LanguageSchema = new Schema({
  name: { type: String, required: true },
  translation: { type: Object, required: true },
});

const LanguageModel = model('Languages', LanguageSchema);

module.exports = LanguageModel;
