import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import toDoReducer from './toDo';
import loginReducer from './login';
import registerReducer from './registration';
import categoryReducer from './category';
import authorReducer from './author';
import booksReducer from './books';
import bookDetailsReducer from './bookDetail';
import commentsReducer from './comments';
import searchReducer from './search';
import userReducer from './user';
import cartReducer from './cart';

export default combineReducers({
    todos: toDoReducer,
    form: formReducer,
    login: loginReducer,
    register: registerReducer,
    categoryBooks: categoryReducer,
    author: authorReducer,
    books: booksReducer,
    bookDetails: bookDetailsReducer,
    comments: commentsReducer,
    search: searchReducer,
    user: userReducer,
    cart: cartReducer
});