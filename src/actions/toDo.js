//this is a test file for Redux

import {ADD_TODO} from '../action-types';
import {REMOVE_TODO} from '../action-types'

export const addTodo = (text) => (dispatch, getState) => {
    dispatch({
        type: ADD_TODO,
        payload: text
    });
};

export const removeTodo = (text) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_TODO,
        payload: text
    });
};
