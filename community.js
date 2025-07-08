const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  username: String,
  comment: String,
  timestamp: { type: Date, default: Date.now }
});

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  username: String,
  content: String,
  timestamp: { type: Date, default: Date.now },
  comments: [commentSchema]
});

module.exports = mongoose.model('Post', postSchema);
