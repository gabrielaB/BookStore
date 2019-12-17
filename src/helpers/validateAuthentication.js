import {
    REGEX_EMAIL,
    MIN_PASSWORD_LENGTH
} from '../constants/constants';

export default function validateAuthentication(values, props) {
    const errors = {};

    if (!values.email) {
        errors.email = 'E-mail is required !';
    } else if (!REGEX_EMAIL.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < MIN_PASSWORD_LENGTH) {
        errors.password = 'Password too short';
    }

    if (props.register) {
        if (!values.username) {
            errors.username = 'Username is required';
        }
        if (!values.repeatPassword) {
            errors.repeatPassword = 'Password is required';
        } else if (values.password !== values.repeatPassword) {
            errors.repeatPassword = 'Passwords doesn\'t match';
        }
    }
    
    return errors;
};
