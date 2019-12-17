import axios from 'axios';

import { GET_AUTHOR_BOOKS, GET_AUTHOR_INFORMATION } from '../action-types/author';
import { API_URL } from '../constants/constants';

export const getAuthorBooks = (author) => {
    return async (dispatch, getState) => {
        const authorBooks = await axios.get(`${API_URL}/books`).then((data) => data.data.filter((book) => {
            if (book.volumeInfo && book.volumeInfo.authors) {
                return book.volumeInfo.authors.indexOf(author) !== -1;
            }
            return;
        }));
        dispatch({
            type: GET_AUTHOR_BOOKS,
            payload: authorBooks
        });
    };
};

export const getAuthorInformation = (author) => {
    return async (dispatch, getState) => {
        const authorInfo = await axios.get(`${API_URL}/authors/${author}`).then((data) => data.data)
        dispatch({
            type: GET_AUTHOR_INFORMATION,
            payload: authorInfo
        });
    };
};

