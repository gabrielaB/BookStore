import { SIGNUP_SUCCESS, SIGNUP_FAILED } from '../action-types/registration';

const initialState = {
    success: false,
    message: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case SIGNUP_FAILED:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};