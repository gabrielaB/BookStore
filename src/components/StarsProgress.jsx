import React, { Component } from 'react';
import { connect } from 'react-redux';

import StarList from './StarList';
import {
    MAX_STARS,
    MIN_STARS
} from '../constants/constants';

export class StarsProgress extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const stars = [];
        for (let rating = MAX_STARS; rating >= MIN_STARS; rating--) {
            stars.push(<StarList key={rating} parameters={this.props.parameters} onClick={this.props.onClick} rating={rating} />);
        }
        return (
            <ul className="menu-list advanced-search">
                <p className="menu-label">Avg. Customer Review</p>
                {stars}
            </ul>
        );
    };
};

export default StarsProgress;