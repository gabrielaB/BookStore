import axios from 'axios';

import { SIGNUP_SUCCESS, SIGNUP_FAILED } from '../action-types/registration';
import { API_URL } from '../constants/constants';

export const signUp = (username, email, password, repeatPassword) => {
    const regData = {
        username,
        email,
        password,
        repeatPassword
    };
    return async (dispatch, getState) => {
        const response = await axios.post(`${API_URL}/registration`, regData).then((data) => data.data);
        const signupResponseType = response.success ? SIGNUP_SUCCESS : SIGNUP_FAILED;
            dispatch({
                type: signupResponseType,
                payload: response
            });
    };
};
