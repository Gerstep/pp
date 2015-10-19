'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  text: String,
  created_by: {
    name: String,
    id: Schema.ObjectId
  },
  date: Date,
  image: String,
  tags: [String],
  active: Boolean
});

/**
 *  Validate post
 */

module.exports = mongoose.model('Post', PostSchema);