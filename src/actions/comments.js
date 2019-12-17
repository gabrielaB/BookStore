import axios from 'axios';

import { API_URL } from '../constants/constants';
import {
    GET_BOOK_COMMENTS,
    ADD_COMMENT,
    DELETE_COMMENT
} from '../action-types/comments';

export const getCommentsForBook = (bookId) => {
    return async (dispatch, getState) => {
        const bookComments = await axios.get(`${API_URL}/comments/${bookId}`).then((data) => data.data);
        dispatch({
            type: GET_BOOK_COMMENTS,
            payload: bookComments
        });
    };
};

export const addCommentForBook = (bookId, title, rating, text, userId, username) => {
    const newCommentData = {
        title,
        rating,
        text,
        bookId,
        userId,
        username
    };
    return async (dispatch, getState) => {
        const newRating = await axios.post(`${API_URL}/books/${bookId}`, newCommentData, true);
        const newComment = await axios.put(`${API_URL}/comments/${bookId}`, newCommentData).then((data) => data.data);
        dispatch({
            type: ADD_COMMENT,
            payload: newComment
        });
    };
};

export const deleteComment = (commentId, bookId, rating, userId) => {
    return async (dispatch, getState) => {
        await axios.post(`${API_URL}/books/rating/${bookId}`, { rating });
        await axios.delete(`${API_URL}/comments/${commentId}`, userId).then((data) => data.data);
        dispatch({
            type: DELETE_COMMENT,
            payload: commentId
        });
    };
};