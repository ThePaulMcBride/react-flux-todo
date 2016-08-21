'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: String,
    complete: {type: Boolean, default: false}
});

var model = mongoose.model('Todo', schema);

module.exports = model;