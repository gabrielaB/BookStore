import { ALL_BOOKS } from '../action-types/books';

export default (state = [], action) => {
    switch (action.type) {
        case ALL_BOOKS: {
            return action.payload;
        };
        default:
            return state;
    }
};
