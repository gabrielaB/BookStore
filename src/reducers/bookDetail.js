import { BOOK_DETAILS } from '../action-types/books';

export default (state = {}, action) => {
    switch (action.type) {
        case BOOK_DETAILS: {
            return action.payload;
        }
        default:
            return state;
    }
}