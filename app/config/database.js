'use strict';

var mongoose = require('mongoose');

mongoose.connect("mongodb://mongo:27017/todos", function(err) {
    if(err) {
        console.log('Error with MongoDB');
    } else {
        console.log("Connected to Mongo DB");
    }
});