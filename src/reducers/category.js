import { GET_BOOKS_FOR_CATEGORY } from '../action-types/category';

export default (state = [], action) => {
    switch (action.type) {
        case GET_BOOKS_FOR_CATEGORY:
            return action.payload;
        default:
            return state;
    };
};