import axios from 'axios';

import {
    ALL_BOOKS,
    BOOK_DETAILS
} from '../action-types/books';
import { API_URL } from '../constants/constants';

export const getAllBooks = () => {
    return async (dispatch, getState) => {
        const books = await axios.get(`${API_URL}/books`).then((data) => data.data);
        dispatch({
            type: ALL_BOOKS,
            payload: books
        });
    };
};

export const getBookInformation = (bookId) => {
    return async (dispatch, getState) => {
        const book = await axios.get(`${API_URL}/books/${bookId}`).then((data) => data.data);
        dispatch({
            type: BOOK_DETAILS,
            payload: book
        });
    };
};
