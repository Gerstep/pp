'use strict';

var express = require('express');
var controller = require('./post.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', auth.isAuthor(), controller.update);
router.delete('/:id', auth.isAuthor(), controller.destroy);

module.exports = router;