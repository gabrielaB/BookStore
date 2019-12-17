import React, { Component } from 'react';
import { connect } from 'react-redux';

import ButtonsBar from './ButtonsBar';
import GenresMenu from './GenresMenu';
import HomeMainMenu from './HomeMainMenu';

export class Home extends Component {
    render() {
        return (
            <div className="hero-body">
                <div className="hero is-fluid">
                    <div className='container has-text-centered home-title'>
                        <h1 className="title">Books at Emazon</h1>
                    </div>
                </div>
                <ButtonsBar />
                <div className="tile is-ancestor home-main-menu">
                    <GenresMenu />
                    <HomeMainMenu />
                </div>
            </div>
        );
    };
};

export default Home;