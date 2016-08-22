import axios from 'axios';
import dispatcher from '../dispatcher.js';

export function createTodo(todo) {
    axios.post('/todos', {todo: todo}).then(function(response) {
        if(response.status == 200) {
            dispatcher.dispatch({
                type: "CREATE_TODO",
                todo: response.data.todo
            });
        } else {
            dispatcher.dispatch({
                type: "CREATING_TODO_ERROR",
            });
        }
    });
}

export function deleteTodo(id) {
    axios.delete('/todo/' + id ).then(function(response) {
        if(response.status == 200) {
            dispatcher.dispatch({
                type: "DELETE_TODO",
                todo: response.data.todo,
            });
        }
    });
}

export function saveTodo(todo) {
    axios.put('/todo/' + todo.id, {todo: todo}).then(function(response) {
        if(response.status == 200) {
            dispatcher.dispatch({
                type: "SAVE_TODO",
                todo: todo,
            });
        }
    });
}

export function enableEditing(id)
{
    dispatcher.dispatch({
        type: "ENABLE_EDITING",
        id
    });
}

export function updateTodo(todo)
{
    dispatcher.dispatch({
        type: "UPDATE_TODO",
        todo: todo
    });
}

export function updateStatus(todo)
{
    axios.put('/todo/' + todo.id, {todo: todo}).then(function(response) {
        if(response.status == 200) {
            dispatcher.dispatch({
                type: "UDATE_STATUS",
                todo: todo,
            });
        }
    });
}

export function loadTodos() {
    axios.get('/todos').then(function(response) {
        if(response.status == 200) {
            dispatcher.dispatch({
                type: "RECEIVED_TODOS",
                todos: response.data.todos
            });
        } else {
            dispatcher.dispatch({
                type: "FETCHING_TODOS_ERROR",
            });
        }
    });
}