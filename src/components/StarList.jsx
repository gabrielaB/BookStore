import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    MAX_STARS,
    ALL_CATEGORIES
} from '../constants/constants';
import {
    createFilterObject,
    createQueryString
} from '../helpers/index';

const StarList = ({ parameters, onClick, rating }) => {
    let stars = [];
    for (let index = 1; index <= MAX_STARS; index++) {
        stars.push(<i key={`star-rating=${index}`} className={index <= rating ? "fas fa-star star" : "far fa-star star"} aria-hidden="true"></i>);
    }
    parameters['rating'] = rating;
    
    return (
        <Link key={`rating=${rating}`} to={`/search?${createQueryString(parameters)}`} rating={rating} onClick={onClick}>{stars}</Link>
    );
};

export default StarList;