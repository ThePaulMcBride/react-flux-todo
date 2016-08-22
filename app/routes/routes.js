var path = require('path');
var router = require('express').Router();
var Todo = require('../models/Todo');

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../../resources/views/index.html'));
});

router.get('/todos', function(req, res) {
    Todo.find({}, function(err, todos){
        if(err) {
            return res.status(500).json({message: err.message});
        }
        res.json({todos: todos});
    });
});

router.post('/todos', function(req, res) {
    var todo = req.body.todo;
    if(todo) {
        var todoItem = new Todo({name: todo});
        todoItem.save(function(err) {
            if(err) {
                return res.status(500).json({message: err.message});
            }
            res.json({todo: todoItem});
        });
    }
});

router.put('/todo/:id', function(req, res) {
    var id = req.params.id;
    var sentTodo = req.body.todo;
    console.log(sentTodo);
    if(id && sentTodo) {
        Todo.findOneAndUpdate({_id : id}, {name: sentTodo.name, complete: sentTodo.complete}, function(err, todo) {
            if(err) {
                return res.status(500).json({message: err.message});
            }
            res.json({todo: todo});
        });
    }
});

router.delete('/todo/:id', function(req, res) {
    var id = req.params.id;
    if(id) {
        Todo.findOne({_id : id}, function(err, todo) {
            if(err) {
                return res.status(500).json({message: err.message});
            }
            todo.remove(function(err) {
                if(err) {
                    return res.status(500).json({message: err.message});
                }

                res.json({todo: todo});
            })
        });
    }
});

module.exports = router;