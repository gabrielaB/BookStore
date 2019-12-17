import axios from 'axios';

import { GET_BOOKS_FOR_CATEGORY } from '../action-types/category';
import { API_URL } from '../constants/constants';

export const getBooksForCategory = (category) => {
    return async (dispatch, getState) => {
        const books = await axios.get(`${API_URL}/books/category/${category}`).then((res) => res.data);
        dispatch({
            type: GET_BOOKS_FOR_CATEGORY,
            payload: books
        });
    };
};