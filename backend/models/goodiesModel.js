const { Schema, model } = require('mongoose');

const GoodiesSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const GoodiesModel = model('Goodies', GoodiesSchema);

module.exports = GoodiesModel;
