'use strict';

var _ = require('lodash');
var Like = require('./like.model');

// Get list of likes
exports.index = function(req, res) {
  Like.find(function (err, likes) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(likes);
  });
};

// Get a single like
exports.show = function(req, res) {
  Like.findById(req.params.id, function (err, like) {
    if(err) { return handleError(res, err); }
    if(!like) { return res.status(404).send('Not Found'); }
    return res.json(like);
  });
};

// Creates a new like in the DB.
exports.create = function(req, res) {
  var Like = new Like(_.merge({ user : req.user._id }, req.body));

  console.log(req);
  Like.save(function(err, like) {
    if(err) { return handleError(res, err); }
    return res.json(201, like);
  });
};

// Updates an existing like in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Like.findById(req.params.id, function (err, like) {
    if (err) { return handleError(res, err); }
    if(!like) { return res.status(404).send('Not Found'); }
    var updated = _.merge(like, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(like);
    });
  });
};

// Deletes a like from the DB.
exports.destroy = function(req, res) {
  Like.findById(req.params.id, function (err, like) {
    if(err) { return handleError(res, err); }
    if(!like) { return res.status(404).send('Not Found'); }
    like.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}