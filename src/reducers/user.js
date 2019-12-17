import { GET_USER } from '../action-types/user';
import { USER_UPDATE_FAVOURITES } from '../action-types';

export default (state = {}, action) => {
    switch(action.type) {
        case GET_USER: 
            return action.payload;
        case USER_UPDATE_FAVOURITES: 
            return action.payload;
        default:
            return state;
    }
};
