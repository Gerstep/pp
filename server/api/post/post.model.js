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

  PostSchema
  	.path('title')
  	.validate(function(title) {
  		if (title.length < 5) respond(false);
  		respond(true);
  	}, 'Title is too short')

module.exports = mongoose.model('Post', PostSchema);