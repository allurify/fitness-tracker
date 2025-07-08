// models/WeightGoal.js
const mongoose = require('mongoose');

const weightGoalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  currentWeight: { type: Number, required: true }, // at start
  targetWeight: { type: Number, required: true },
  unit: { type: String, default: 'kg' },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ['ongoing', 'achieved', 'missed'],
    default: 'ongoing'
  }
});

module.exports = mongoose.model('WeightGoal', weightGoalSchema);
