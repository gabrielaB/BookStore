import axios from 'axios';

import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT
} from '../action-types/login';
import { API_URL } from '../constants/constants';

export const logIn = (email, password) => {
    let loginData = {
        email,
        password
    };
    return async (dispatch, getState) => {
        const response = await axios.post(`${API_URL}/login`, loginData).then((data) => data.data);
        const loginResponseType = response.success ? LOGIN_SUCCESS : LOGIN_FAILED;
        if (loginResponseType === LOGIN_SUCCESS) {
            localStorage.setItem('user', response.user);
            localStorage.setItem('username', response.username);
        }
        dispatch({
            type: loginResponseType,
            payload: response
        });
    };
};

export const logOut = () => {
    localStorage.clear();
    return (dispatch, getState) => {
        dispatch({
            type: LOGOUT,
            payload: 'User logged Out'
        });
    };
};
