/**
 * Mongoose model and schema for post.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: false,
    trim: true,
  }
  /*author: {
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }
},
  comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
      }
  ]*/
}, {
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;