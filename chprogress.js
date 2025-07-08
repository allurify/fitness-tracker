// models/UserChallenge.js
const userChallengeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  challengeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Challenge' },
  startDate: { type: Date, default: Date.now },
  progress: [{ date: Date, value: Number }], // daily log
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('UserChallenge', userChallengeSchema);
