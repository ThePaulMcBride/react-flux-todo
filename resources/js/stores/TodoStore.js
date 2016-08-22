import EventEmitter from 'events';
import dispatcher from '../dispatcher.js';

class TodoStore extends EventEmitter {
    constructor() {
        super();

        this.todos = [];
    }

    getAllTodos() {
        return this.todos;
    }

    createTodo(todo) {
        var _id = todo._id;
        var name = todo.name;

        this.todos.push({
            _id,
            name,
            complete: false
        });

        this.emit('change');
    }

    deleteTodo(todo) {
        for(var i = 0; i < this.todos.length; i++)
        {
            if(this.todos[i]._id == todo._id)
            {
                this.todos.splice(i, 1);
            }
        }

        this.emit('change');
    }

    updateTodo(todo)
    {
        for(var i = 0; i < this.todos.length; i++)
        {
            if(this.todos[i]._id == todo.id)
            {
                this.todos[i].name = todo.name;
            }
        }

        this.emit('change');
    }

    updateStatus(todo) {
        console.log(todo);

        for(var i = 0; i < this.todos.length; i++)
        {
            if(this.todos[i]._id == todo.id)
            {
                this.todos[i].status = todo.status;
            }
        }

        this.emit('change');
    }

    saveTodo(todo) {
        for(var i = 0; i < this.todos.length; i++)
        {
            if(this.todos[i]._id == todo.id)
            {
                this.todos[i].name = todo.name;
                this.todos[i].complete = todo.complete;
            }
        }

        this.emit('change');
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_TODO":
                this.createTodo(action.todo);
                break;

            case "RECEIVED_TODOS":
                this.todos = action.todos;
                this.emit('change');
                break;

            case "DELETE_TODO":
                this.deleteTodo(action.todo);
                break;

            case "SAVE_TODO":
                this.saveTodo(action.todo);
                break;

            case "UPDATE_TODO":
                this.updateTodo(action.todo);
                break;

            case "UPDATE_STATUS":
                this.updateStatus(action.todo)
                break;
        }
    }
}

var todoStore = new TodoStore;

dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;