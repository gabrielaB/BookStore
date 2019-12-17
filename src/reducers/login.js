import { LOGIN_FAILED } from '../action-types/login';
import { LOGIN_SUCCESS } from '../action-types/login';
import { LOGOUT } from '../action-types/login';

const initialState = () => {
    const user = localStorage.getItem('user');
    const username = localStorage.getItem('username');
    if (user) {
        return {
            isLogged: true,
            message: 'User logged',
            user,
            username
        };
    } else {
        return {
            isLogged: false,
            message: '',
            user: '',
            username: ''
        };
    }
};

export default (state = initialState(), action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogged: true,
                message: action.payload.message,
                user: action.payload.user,
                username: action.payload.username
            };
        case LOGIN_FAILED:
            return {
                ...state,
                isLogged: false,
                message: action.payload.message,
                user: '',
                username: ''
            };
        case LOGOUT:
            return {
                isLogged: false,
                message: action.payload,
                user: '',
                username: ''
            };
        default:
            return state;
    };
};
