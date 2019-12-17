import React, { Component } from 'react';

import {
    PRICE_ASCENDING,
    PRICE_DESCENDING,
    RATING_ASCENDING,
    RATING_DESCENDING
} from '../constants/constants';

const SortSelect = ({onChange, value}) => {
    return (
        <select name="sortBooks" onChange={onChange} value={value}>
            <option value={RATING_DESCENDING}>Avg. Customer Review: High to Low</option>
            <option value={RATING_ASCENDING}>Avg. Customer Review: Low to High</option>
            <option value={PRICE_ASCENDING}>Price: Low to High</option>
            <option value={PRICE_DESCENDING}>Price: High to Low</option>
        </select>
    );
};

export default SortSelect;