import axios from 'axios';

import {
    USER_ADD_TO_FAVOURITES,
    USER_REMOVE_FROM_FAVOURITES,
    USER_UPDATE_FAVOURITES
} from '../action-types/favouriteBooks';
import { API_URL } from '../constants/constants';

export const addToFavourites = (book, userId) => {
    return async (dispatch, getState) => {
        const response = await axios.post(`${API_URL}/login/fav/${userId}`, { book }).then((data) => data.data);
        dispatch({
            type: USER_UPDATE_FAVOURITES,
            payload: response.data
        });
        return Promise.resolve(response);      
    };
};

export const removeFromFavourites = (book, userId) => {
    return async (dispatch, getState) => {
        const response = await axios.post(`${API_URL}/login/fav/remove/${userId}`, { book }).then((data) => data.data);
        dispatch({
            type: USER_UPDATE_FAVOURITES,
            payload: response.data
        });
        return Promise.resolve(response);
    };
};
