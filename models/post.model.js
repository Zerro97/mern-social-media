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
    minlength: 3
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
  },
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