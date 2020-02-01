/**
 * Mongoose model and schema for user.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
  },
  videoURL: {
    type: String,
    required: true,
    unique: true,
  }
}, {
  timestamps: true,
});

const Video = mongoose.model('Sermon', videoSchema);

module.exports = Video;