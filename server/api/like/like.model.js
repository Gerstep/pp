'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LikeSchema = new Schema({
  postId: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  // date: Date,
  active: Boolean
});

module.exports = mongoose.model('Like', LikeSchema);