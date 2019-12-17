import {
    ADD_TO_FAVOURITES,
    REMOVE_FROM_FAVOURITES
} from '../action-types/favouriteBooks';

const initialState = {
    success: false,
    message: '',
    data: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            return action.payload;
        case REMOVE_FROM_FAVOURITES:
            return action.payload;
        default:
            return state;
    }
};
