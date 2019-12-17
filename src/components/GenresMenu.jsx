import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    GENRES,
    POPULAR_IN_BOOKS,
    ALL_CATEGORIES
} from '../constants/constants';
import {
    sortByNameAscending,
    createFilterObject,
    createQueryString,
    toggleMenu
} from '../helpers/index';
import StarsProgress from './StarsProgress';
import { filterBooks } from '../actions/search';

export class GenresMenu extends Component {
    constructor(props) {
        super(props);

        this.categoryList = React.createRef();
        this.state = {
            showMenu: true
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        const menu = this.categoryList.current;
        this.setState(() => ({showMenu: menu.classList.contains('category-menu')}));
    }

    render() {
        const starsProgressProps = {
            parameters: { category: ALL_CATEGORIES }
        };

        return (
            <div className="tile is-parent is-3">
                <article className="tile is-child box">
                    <button className="button is-info is-rounded show-menu" onClick={this.toggleMenu}>{this.state.showMenu ? 'Show category menu' : 'Hide menu'}</button>
                    <aside ref={this.categoryList} className={`menu ${this.state.showMenu ? "hide-menu" : "category-menu"}`}>
                        <p className="menu-label">Popular in Books</p>
                        <hr />
                        <ul className="menu-list">
                            {POPULAR_IN_BOOKS.sort(sortByNameAscending).map((popularCategory) => {
                                return <li key={popularCategory}><a href="/">{popularCategory}</a></li>;
                            })}
                        </ul>
                        <p className="menu-label">New Releases</p>
                        <ul className="menu-list">
                            <li>
                                <a className="is-active">Books</a>
                                <ul>
                                    <li key='all'><Link to={'/search'} value={ALL_CATEGORIES}>All</Link></li>
                                    {GENRES.sort(sortByNameAscending).map((category) => {
                                        return <li key={category}><Link to={`/search?category=${encodeURIComponent(category)}`} value={category}>{category}</Link></li>;
                                    })}
                                </ul>
                            </li>
                        </ul>
                        <StarsProgress {...starsProgressProps} />
                    </aside>
                </article>
            </div>
        );
    };
};

const mapStateToProps = ({ books, search }) => ({ books, search });

export default connect(mapStateToProps, { filterBooks })(GenresMenu);