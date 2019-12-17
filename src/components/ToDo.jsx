//this is a test file for Redux setup

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';
import { removeTodo } from '../actions';
import { Login } from './Login';


export class ToDo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTodo: ''
        }
        this.updateInputValue = this.updateInputValue.bind(this);
        this.addNewTodo = this.addNewTodo.bind(this);
        this.removeSelectedTodo = this.removeSelectedTodo.bind(this);
    }

    /**
     * this method update input value in state
     * @param {Object} event 
     */
    updateInputValue(event) {
        const newTodo = event.target.value
        this.setState(() => ({ newTodo }))
    }

    /**
     * add new todo
     * @param {string} inputValue
     */
    addNewTodo() {
        this.props.addTodo(this.state.newTodo);
    }

    /**
     * remov selected todo from the list
     * @param {Object} event 
     */
    removeSelectedTodo(event) {
        this.props.removeTodo(event.target.textContent.trim());
    }
    
    renderList() {
        return this.props.todos.filter((todo) => !todo.finished).map((todo) => {
            return <li key={todo.text} onClick={this.removeSelectedTodo}> {todo.text} </li>
        });
    }

    render() {
        return (
            <div>
                <input name='addTodoInput' onChange={this.updateInputValue} type="text" value={this.state.newTodo} />
                <button onClick={this.addNewTodo}>Add ToDo</button>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
};

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps, { addTodo, removeTodo })(ToDo)
