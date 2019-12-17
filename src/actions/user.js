import axios from 'axios';

import { GET_USER } from '../action-types/user';
import { API_URL } from '../constants/constants';

export const getUser = (userId) => {
    return async (dispatch, getState) => {
        const user = await axios.get(`${API_URL}/login/${userId}`).then((user) => user.data);
        dispatch({
            type: GET_USER,
            payload: user
        });
    };
};
