import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BUTTONS_BAR } from '../constants/constants';

export class ButtonsBar extends Component {
    render() {
        return (
            <div className="hero buttons-bar">
                <div className="columns">
                    {BUTTONS_BAR.map((button) => {
                        return (
                            <div className="column has-text-centered" key={button.src}>
                                <a href={button.link}>
                                    <img src={button.src} alt={button.alt} />
                                    <p>{button.title}</p>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };
};

export default ButtonsBar;