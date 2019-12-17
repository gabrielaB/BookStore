import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    POPULAR_AUTHORS,
    BREAKPOINT_TABLET,
    CAROUSEL_TYPE_AUTHORS
} from '../constants/constants';
import {
    RESPONSIVE_CAROUSEL_CONFIG,
    getCarouselConfig
} from '../helpers/responsiveCarousel';
import { Carousel } from './Carousel';

export class PopularAuthors extends Component {
    constructor(props) {
        super(props);

        this.popularAuthors = React.createRef();
        this.state = {
            desktopScreen: true,
            showMenu: true
        };
        this.setWindowWidth = this.setWindowWidth.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentWillMount() {
        this.setWindowWidth();
        this.setState(() => ({ desktopScreen: !(window.innerWidth < BREAKPOINT_TABLET) }));
    }

    componentDidMount() {
        window.addEventListener('resize', this.setWindowWidth, false);
    }

    /**
     * This method checks if window width is 
     * smaller then breakpoint for tablet 
     * @param event 
     */
    setWindowWidth(event) {
        this.setState(() => {
            return {
                desktopScreen: !(window.innerWidth < BREAKPOINT_TABLET),
                carouselConfig: getCarouselConfig(window.innerWidth, CAROUSEL_TYPE_AUTHORS)
            };
        });
    }

    /**
     * Set show/hide menu flag in state 
     */
    toggleMenu() {
        const menu = this.popularAuthors.current;
        this.setState(() => ({ showMenu: menu.classList.contains('category-menu') }));
    }

    render() {
        const smallScreenTemplate = (
            <div className="columns">
                {POPULAR_AUTHORS.map((author) => {
                    return (
                        <div className="column is-3 col has-text-centered authors" key={author.alt}>
                            <Link to={`/authors/${author.alt}`}>
                                {this.state.desktopScreen ? <img className="author-image" src={author.src} alt={author.alt} /> : `${author.alt}`}
                            </Link>
                        </div>
                    );
                })}
            </div>
        );

        const bigScreenTemplate = (
            <Carousel config={this.state.carouselConfig}>
                {POPULAR_AUTHORS.map((author) => {
                    return (
                        <div className="authors" key={author.alt}>
                            <Link to={`/authors/${author.alt}`}>
                                {this.state.desktopScreen ? <img className="popular-author-image" src={author.src} alt={author.alt} /> : `${author.alt}`}
                            </Link>
                        </div>
                    );
                })}
            </Carousel>
        );

        return (
            <div >
                <button className="button is-info is-rounded show-menu" onClick={this.toggleMenu}>{this.state.showMenu ? 'Show popular authors' : 'Hide popular authors'}</button>
                <div ref={this.popularAuthors} className={`popular-authors ${this.state.showMenu ? "hide-menu" : "category-menu"}`} id='authors-in-popular'>
                    <div className="hero is-fluid">
                        <div className='has-text-centered home-title'>
                            <h1>Popular authors</h1>
                        </div>
                        {!this.state.desktopScreen ? smallScreenTemplate : bigScreenTemplate}
                    </div>
                </div>
            </div>
        );
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.setWindowWidth);
    }
};

export default PopularAuthors;