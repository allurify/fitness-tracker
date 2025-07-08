const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  age: Number,
  height: Number,
  weight: Number,
  gender: String,
  goalType: { type: String, enum: ['gain', 'loss'] }
});

module.exports = mongoose.model('User', userSchema);
