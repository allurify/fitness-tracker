// models/Challenge.js
const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['calorie', 'workout', 'meal'], required: true },
  target: { type: Number, required: true }, // e.g., 500 calories/day
  duration: { type: Number, required: true }, // in days
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Challenge', challengeSchema);
