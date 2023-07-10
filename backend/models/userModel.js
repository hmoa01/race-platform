const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  userName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, minlength: 6, maxlength: 100 },
  role: {
    type: String,
    required: true,
    enum: ['superadmin', 'admin', 'user'],
    default: 'user',
  },
});

const UserModel = model('Users', UserSchema);

module.exports = UserModel;
