//this is a test reducer file for Redux
import { ADD_TODO } from '../action-types';
import { REMOVE_TODO } from '../action-types';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.payload,
                    finished: false
                }
            ];
        case REMOVE_TODO:
            return state.filter((todo) => todo.text !== action.payload);
        default:
            return state;
    };
};
