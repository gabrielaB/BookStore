import { ADVANCED_SEARCH } from '../action-types/search';

export default (state = [], action) => {
    switch (action.type) {
        case ADVANCED_SEARCH:
            return action.payload;
        default:
            return state;
    }
};