import React from 'react';
import TodoListItem from './TodoListItem.jsx';

class TodoList extends React.Component {
    constructor() {
        super();

        this.enableEditing = this.enableEditing.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
        this.enableEditing = this.enableEditing.bind(this);
        this.disableEditing = this.disableEditing.bind(this);
    }

    enableEditing(id) {
        this.props.enableEditing(id);
    }

    disableEditing(id) {
        this.props.disableEditing(id)
    }

    saveTodo(todo) {
        this.props.saveTodo(todo);
    }

    updateTodo(todo) {
        this.props.updateTodo(todo);
    }

    updateStatus(todo) {
        this.props.updateStatus(todo);
    }

    createItem(todo) {
        return (
            <TodoListItem
                deleteTodo={this.props.deleteTodo}
                saveTodo={this.saveTodo}
                updateTodo={this.updateTodo}
                updateStatus={this.updateStatus}
                enableEditing={this.enableEditing}
                disableEditing={this.disableEditing}
                key={todo._id}
                todo={todo}>
            </TodoListItem>
        );
    }

    render () {
        return (
            <ul className="todo-list">{this.props.todos.map(this.createItem, this)}</ul>
        )
    }
}

export default TodoList;