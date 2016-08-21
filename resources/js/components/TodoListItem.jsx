import React from 'react';
import ReactDom from 'react-dom';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.enableEditing = this.enableEditing.bind(this);
        this.disableEditing = this.disableEditing.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
        this.updateStatus = this.updateStatus.bind(this);

        this.state = {
            name: this.props.todo.name,
            editing: false,
            complete: this.props.todo.complete
        }
    }

    deleteTodo(e) {
        e.preventDefault();
        this.props.deleteTodo(this.props.todo);
    }

    enableEditing() {
        this.setState({editing: true});
    }

    disableEditing(e) {
        e.preventDefault();
        this.setState({
            editing: false,
            name: this.props.todo.name
        });
    }

    updateTodo(e) {
        this.setState({name: e.target.value});
    }

    updateStatus(e) {
        this.setState({complete: e.target.checked});
        this.props.saveTodo({
            id: this.props.todo._id,
            name: this.state.name,
            complete: !this.state.complete,
        });
    }

    saveTodo(e) {
        e.preventDefault();
        this.props.saveTodo({
            id: this.props.todo._id,
            name: this.state.name,
            complete: !this.state.complete,
        });
        this.setState({editing: false});
    }

    editForm() {
        if(this.state.editing == true) {
            return (
                <form className="input-group input-group-sm" onSubmit={this.saveTodo}>
                    <input className="form-control" ref="editForm" type="text" value={this.state.name} onChange={this.updateTodo}/>
                    <div className="input-group-btn">
                        <button className="btn btn-primary"><span className="glyphicon glyphicon-ok"></span></button>
                        <button className="btn btn-primary" onClick={this.disableEditing}><span className="glyphicon glyphicon-remove"></span></button>
                    </div>
                </form>
            )
        }
    }

    todoItem() {
        if(this.state.editing != true) {
            return (
                <div className="row" onDoubleClick={this.enableEditing}>
                    <div className="col-sm-1">
                        <input type="checkbox" defaultChecked={this.state.complete} onClick={this.updateStatus} />
                    </div>
                    <div className="col-sm-9"><span className="name">{this.props.todo.name}</span></div>
                    <div className="col-sm-2">
                        <button className="btn btn-danger btn-xs delete-button pull-right" onClick={this.deleteTodo}><span className="glyphicon glyphicon-trash"></span></button>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <li>
                {this.editForm()}
                {this.todoItem()}
            </li>
        )
    }
}

export default TodoListItem;