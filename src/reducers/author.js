import { GET_AUTHOR_BOOKS, GET_AUTHOR_INFORMATION } from '../action-types/author';

const initialState = {
    author: null,
    authorBooks: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_AUTHOR_BOOKS: {
            return {
                ...state,
                authorBooks: [...action.payload]
            };
        };
        case GET_AUTHOR_INFORMATION: {          
            return {
                ...state,
                author: action.payload
            };
        };
        default: 
            return state;
    };
};