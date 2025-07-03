// challenge schema collection


const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
  name: String,
  desc: String,
  goalType: String,
  duration: Number,
  routineIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Routine' }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  startDate: Date,
  endDate: Date,
  isActive: Boolean
});

module.exports = mongoose.model('Challenge', ChallengeSchema);