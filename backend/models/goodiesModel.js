const { Schema, model } = require('mongoose');

const GoodiesSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, default: 0 },
  isEnabled: { type: Boolean, default: true },
  welcomePackage: { type: Boolean, default: false },
});

const GoodiesModel = model('goodies', GoodiesSchema);

module.exports = GoodiesModel;
