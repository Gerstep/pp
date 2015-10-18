'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  text: String,
  created_by: String,
  image: String,
  active: Boolean
});

/**
 *  Validate post
 */


module.exports = mongoose.model('Post', PostSchema);