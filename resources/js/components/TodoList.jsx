import React from 'react';
import TodoListItem from './TodoListItem.jsx';

class TodoList extends React.Component {
    constructor() {
        super();

        this.enableEditing = this.enableEditing.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
    }

    createItem(todo) {
        return (
            <TodoListItem deleteTodo={this.props.deleteTodo} key={todo._id} saveTodo={this.saveTodo} todo={todo}></TodoListItem>
        );
    }

    enableEditing(todo) {
        this.props.enableEditing(todo);
    }

    saveTodo(todo) {
        this.props.saveTodo(todo);
    }

    render () {
        return (
            <ul className="todo-list">{this.props.todos.map(this.createItem, this)}</ul>
        )
    }
}

export default TodoList;