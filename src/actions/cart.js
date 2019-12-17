import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_UPDATE_ITEM
} from '../action-types/cart';
import { MIN_QUANTITY } from '../constants/constants';

export const addToCart = (book) => {
    return (dispatch, getState) => {
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                details: book,
                quantity: MIN_QUANTITY
            }
        });
    };
};

export const removeFromCart = (bookId) => {
    return (dispatch, getState) => {
        dispatch({
            type: CART_REMOVE_ITEM,
            payload: bookId
        });
    };
};

export const updateCart = (bookId, value) => {
    const updateValue = value >= MIN_QUANTITY ? value : MIN_QUANTITY;
    const update = {
        bookId,
        value: updateValue
    };
    return (dispatch, getState) => {
        dispatch({
            type: CART_UPDATE_ITEM,
            payload: update
        });
    };
};
