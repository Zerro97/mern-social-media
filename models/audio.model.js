/**
 * Mongoose model and schema for user.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const audioSchema = new Schema({
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
  audioURL: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Audio = mongoose.model('Audio', audioSchema);

module.exports = Audio;