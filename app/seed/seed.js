'use strict';

var Todo = require('../models/Todo');

var todos = [
    'Feed the dog',
    'Make Dinner',
    'Go to the gym'
];

todos.forEach(function (todo) {
    Todo.find({'name': todo}, function (err, todos) {
        if(!err && !todos.length) {
            Todo.create({name: todo});
        }
    })
})