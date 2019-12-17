import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getBooksForCategory } from '../actions/category';
import { getAllBooks } from '../actions/books';
import { filterBooks } from '../actions/search';
import StarsProgress from './StarsProgress';
import BookList from './BookList';
import SortSelect from './SortSelect';
import {
    sortByNameAscending,
    sortByNameDescending,
    sortByProp,
    createFilterObject
} from '../helpers/index';
import {
    ALL_AUTHORS,
    ALL_CATEGORIES,
    PRICE_ASCENDING,
    PRICE_DESCENDING,
    RATING_ASCENDING,
    RATING_DESCENDING
} from '../constants/constants';
import FilterComponent from './FilterComponent';

export class Search extends Component {
    constructor(props) {
        super(props);

        this.filtersComponent = React.createRef();
        this.state = {
            filteredBooks: [],
            selectValue: RATING_DESCENDING,
            filters: {},
            showMenu: true
        };
        this.sortBooks = this.sortBooks.bind(this);
        this.filterByRating = this.filterByRating.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidMount(props) {
        this.props.getAllBooks();
        this.props.filterBooks(createFilterObject(this.props.location.search), this.props.books);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.books.length !== this.props.books.length) {
            this.props.filterBooks(createFilterObject(this.props.location.search), this.props.books);
        }

        if (prevProps.search !== this.props.search) {
            this.setState((prevState) => {
                const books = this.props.search ? this.props.search : [...this.props.books];
                return {
                    filteredBooks: [...books].sort(sortByProp(prevState.selectValue))
                };
            });
        }

        if (prevProps.location.search !== this.props.location.search) {
            this.props.filterBooks(createFilterObject(this.props.location.search), this.props.books);
        }
    }

    /**
     * Sorting the books by selected value
     * @param {Object} event 
     */
    sortBooks(event) {
        const value = event.target.value;
        const sortedBooks = [...this.state.filteredBooks].sort(sortByProp(value));
        this.setState(() => {
            return {
                selectValue: value,
                filteredBooks: [...sortedBooks]
            };
        });
    }

    /**
     * This method renders appropriate list of books
     * @param {Array} books
     */
    renderBooksList(books) {
        return (
            <ul>
                {books.map((book) => <BookList key={book.id} {...book} />)}
            </ul>
        );
    }

    /**
     * This method render list of books with rating
     * bigger or equal then selected
     * @param event 
     */
    filterByRating(event) {
        const rating = event.currentTarget.getAttribute('rating');
        const filters = createFilterObject(this.props.location.search);
        filters['rating'] = rating;
        this.props.filterBooks(filters, this.props.books);
    }

    toggleMenu() {
        const menu = this.filtersComponent.current;
        this.setState(() => ({ showMenu: menu.classList.contains('category-menu') }));
    }

    render() {
        const selectProps = {
            onChange: this.sortBooks,
            value: this.state.selectValue
        };
        const starProgressProps = {
            parameters: createFilterObject(this.props.location.search),
            onClick: this.filterByRating
        };
        return (
            <div className="hero-body">
                <div className="hero is-fluid search-page">
                    <div className="columns">
                        <div className="column is-3">
                            <h1 className="subtitle search-subtitle">Show results for</h1>
                            <hr className="search-horizontal-line" />
                            <button className="button is-info is-rounded show-menu" onClick={this.toggleMenu}>{this.state.showMenu ? 'Show filters' : 'Hide filters'}</button>
                            <ul ref={this.filtersComponent} className={`menu-list ${this.state.showMenu ? "hide-menu" : "category-menu"}`}>
                                <FilterComponent className="filter-component" />
                                <br />
                                <StarsProgress {...starProgressProps} />
                            </ul>
                        </div>
                        <div className="column is-9">
                            <h1 className="subtitle search-subtitle">Books</h1>
                            <div>
                                <br />
                                <div className="level-right">
                                    <span>Sort by &nbsp;</span>
                                    <div className="select">
                                        <SortSelect {...selectProps} />
                                    </div>
                                </div>
                                {this.state.filteredBooks.length > 0 ? this.renderBooksList(this.state.filteredBooks) : <p className='subtitle is-12'>No books in this category</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = ({ books, search }) => ({ books, search });

export default connect(mapStateToProps, { getAllBooks, filterBooks })(Search);