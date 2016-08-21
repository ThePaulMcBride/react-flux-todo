import React from 'react';
import TodoBanner from './TodoBanner.jsx';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import * as TodoActions from '../actions/TodoActions.js';
import TodoStore from '../stores/TodoStore.js';

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = { todos: TodoStore.getAllTodos() };
    }

    componentWillMount() {
        TodoStore.on('change', function(){
            this.setState(
                {
                    todos: TodoStore.getAllTodos()
                }
            );
        }.bind(this));

        TodoActions.loadTodos();
    }

    componentWillUnmount() {
        TodoStore.removeListener('change');
    }

    createTodo(name) {
        TodoActions.createTodo(name);
    }

    deleteTodo(todo) {
        TodoActions.deleteTodo(todo._id);
    }

    saveTodo(todo) {
        TodoActions.saveTodo(todo);
    }

    render() {
        return (
            <div>
                <TodoBanner count={this.state.todos.length}/>
                <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} saveTodo={this.saveTodo}/>
                <TodoForm onFormSubmit={this.createTodo}/>
            </div>
        );
    }
}

export default TodoApp;
