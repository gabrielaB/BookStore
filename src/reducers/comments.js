import {
    GET_BOOK_COMMENTS,
    ADD_COMMENT,
    DELETE_COMMENT
} from '../action-types/comments';

export default (state = [], action) => {
    switch (action.type) {
        case GET_BOOK_COMMENTS:
            return action.payload;
        case ADD_COMMENT:
            return [...state, action.payload];
        case DELETE_COMMENT:
            return state.filter(({ _id }) => _id !== action.payload);
        default:
            return state;
    }
};
