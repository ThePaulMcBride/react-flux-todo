import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = { name:'' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.name.trim().length) {
            this.props.onFormSubmit(this.state.name);
            this.setState({name: ''});
        }
        return;
    };

    onChange(e) {
        this.setState({
            name: e.target.value
        })
    };

    render() {
        return (
            <form className="input-group" onSubmit={this.handleSubmit}>
                <input className="form-control" type="text" ref='name' onChange={this.onChange} value={this.state.name} />
                <span className="input-group-btn">
                    <input className="btn btn-primary square" type="submit" value="Add"/>
                </span>
            </form>
        )
    };

}

export default TodoForm;