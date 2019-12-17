import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { logOut } from '../actions/login';
import {
    HEADER_ALL,
    HEADER_CART,
    HEADER_LOGIN,
    HEADER_PROFILE,
    HEADER_SIGNUP
} from '../constants/constants';
import { filterBooks } from '../actions/search';
import logo from '../images/logo3.png';


export class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            link: this.props.location.pathname,
            class: 'not-active',
            searchTitle: ''
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.userLogged = this.userLogged.bind(this);
        this.userRequired = this.userRequired.bind(this);
        this.setNavLinkClasses = this.setNavLinkClasses.bind(this);
        this.searchSubmit = this.searchSubmit.bind(this);
        this.getEnteredTitle = this.getEnteredTitle.bind(this);
        this.links = [
            {
                to: '/',
                text: 'Books'
            },
            {
                to: '/search',
                text: 'Search for books'
            },
            {
                to: '/mycart',
                text: 'My Cart'
            },
            {
                to: `/account/${this.props.user}`,
                text: 'My profile'
            },
            {
                to: '/login',
                text: 'Log in'
            },
            {
                to: '/register',
                text: 'Sign up'
            },

        ]
    }

    /**
     * This method clears localStorage and log out the user
     */
    handleLogout() {
        this.props.logOut();
    }

    /**
     * This method creates navigation buttons for logged user
     */
    userRequired() {
        return (
            <div className="tabs is-fullwidth is-medium navbar-end">
                {this.links.map((link) => {
                    if (link.text !== HEADER_LOGIN && link.text !== HEADER_SIGNUP) {
                        return <NavLink
                            key={link.text}
                            activeClassName='is-active'
                            className={`navbar-item header-link ${this.state.link === link.to || this.state.link === HEADER_ALL ? '' : this.state.class}`}
                            onClick={this.setNavLinkClasses}
                            exact to={link.to}>{link.text}</NavLink>;
                    }
                    return;
                })
                }
                <NavLink activeClassName='is-active'
                    className={`navbar-item header-link ${this.state.link === HEADER_ALL ? '' : this.state.class}`}
                    to='/login'
                    onClick={this.handleLogout}>Log out</NavLink>
            </div>
        );
    }

    /**
     * This method create nav buttons for user, who is not logged in
     */
    userLogged() {
        return (
            <div className="tabs is-centered is-medium button-group navbar-end">
                {this.links.map((link) => {
                    if (link.text !== HEADER_CART && link.text !== HEADER_PROFILE) {
                        return <NavLink
                            key={link.text}
                            activeClassName='is-active'
                            className={`navbar-item header-link ${this.state.link === link.to || this.state.link === HEADER_ALL ? '' : this.state.class}`}
                            onClick={this.setNavLinkClasses}
                            exact to={link.to}>{link.text}</NavLink>;
                    }
                    return;
                })
                }
            </div>
        );
    }

    /**
     * This method change link, who needs to be rendered
     * in Header component
     * @param event 
     */
    setNavLinkClasses(event) {
        const eventLink = event.target.getAttribute('href');
        eventLink !== this.state.link ? this.setState(() => ({ link: eventLink })) : this.setState(() => ({ link: HEADER_ALL }));
    }

    /**
     * This method creates a search filter for books
     * only by title 
     * @param event 
     */
    searchSubmit(event) {
        event.preventDefault();
        const title = this.state.searchTitle;
        this.props.filterBooks({ title }, this.props.books);
        this.setState(() => ({ searchTitle: '' }));
        this.props.history.push(`/search?title=${title}`);
    }

    /**
     * Controlls title input
     * @param event 
     */
    getEnteredTitle(event) {
        const title = event.target.value;
        this.setState(() => ({ searchTitle: title }));
    }

    render() {
        return (
            <header id='appHeader'>
                <nav className="navbar" role="navigation" aria-label="navigation" >
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item">
                            <img src={logo} className="is-large header-image" />
                        </Link>
                    </div>
                    <div className="field has-addons small-search navbar-menu">
                        <div className="navbar-start">
                            <div className="control">
                                <a className="button is-static search-logo">Books</a>
                            </div>
                            <form id="header-search" className="control search-input" onSubmit={this.searchSubmit}>
                                <input name="title"
                                    className="input is-normal search"
                                    type="text"
                                    placeholder="Title"
                                    onChange={this.getEnteredTitle}
                                    value={this.state.searchTitle} />
                                <button type="submit" className="button is-orange"> Search</button>
                            </form>
                        </div>
                        {this.props.isLogged ? this.userRequired() : this.userLogged()}
                    </div>
                </nav>
            </header>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        isLogged: state.login.isLogged,
        user: state.login.user,
        books: state.books,
        search: state.search
    };
};

export default connect(mapStateToProps, { logOut, filterBooks })(Header);