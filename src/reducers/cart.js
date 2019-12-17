import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_UPDATE_ITEM
} from '../action-types/cart';

export default (state = [], action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            return [...state, action.payload];
        case CART_REMOVE_ITEM:
            return [...state].filter((book) => book.details._id !== action.payload);
        case CART_UPDATE_ITEM:
            const updatedCart = state.map((book) => {
                if (book.details._id === action.payload.bookId) {
                    book.quantity = action.payload.value;
                }
                return book;
            });
            return updatedCart;
        default:
            return state;
    }
};