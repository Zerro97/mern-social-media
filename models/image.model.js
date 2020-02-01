/**
 * Mongoose model and schema for user.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
  }
}, {
  timestamps: true,
});

const Image = mongoose.model('Announcement', imageSchema);

module.exports = Image;