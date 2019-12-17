import {
    MAX_RATING,
    MIN_RATING
} from '../constants/constants';

export default function validateComment(values) {
    const errors = {};
    
    if (!values.title) {
        errors.title = 'Title is required';
    }
    
    if (Number(values.rating) > Number(MAX_RATING) || Number(values.rating) < Number(MIN_RATING)) {
        errors.rating = 'Rating should be between 1 and 5';
    }
    
    if(Number(values.rating) === NaN) {
        errors.rating = 'Enter a number';
    }
    
    return errors;
}