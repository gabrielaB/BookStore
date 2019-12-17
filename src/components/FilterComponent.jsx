import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';

import {
    GENRES,
    ADVANCED_SEARCH_OPTIONS
} from '../constants/constants';
import {
    sortByNameAscending,
    createQueryString
} from '../helpers/index';
import { filterBooks } from '../actions/search'
import StarsProgress from './StarsProgress';

const renderField = ({ input, name, type, placeholder, icon, meta: { touched, error } }) => (
    <div className="control">
        <input {...input} type={type} placeholder={placeholder} name={name} className="input is-rounded" />
        {touched && error && <span className='help is-danger'>{error}</span>}
    </div>
);

export class FilterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchParams: {},
            authorFilter: new Set(),
            publisherFilter: new Set()
        };
        this.renderFilter = this.renderFilter.bind(this);
        this.searchSubmit = this.searchSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.books !== this.props.books) {
            const authorsSet = new Set();
            const publisherSet = new Set();
            this.props.books.forEach((book) => {
                if (book.volumeInfo) {
                    if (book.volumeInfo.authors) {
                        authorsSet.add(book.volumeInfo.authors[0].trim());
                    }
                    if (book.volumeInfo.publisher && book.volumeInfo.publisher !== ' ') {
                        publisherSet.add(book.volumeInfo.publisher.trim());
                    }
                }
            });
            this.setState((prevState) => {
                return {
                    authorFilter: authorsSet,
                    publisherFilter: publisherSet,
                    books: [...this.props.books]
                };
            });
        }
    }

    /**
     * This method takes set of names and render it to the screen
     * @param {Object} filter 
     */
    renderFilter(filter) {
        if (filter !== undefined && filter !== null) {
            return Array.from(filter)
                .sort(sortByNameAscending)
                .map((element) => <option key={element}>{element}</option>);
        } else {
            return <option>List is empty</option>;
        }
    }

    /**
     * This method set inserted values in search
     * parameters query 
     * @param {Object} values 
     */
    searchSubmit(values) {
        this.props.filterBooks(values, this.props.books);
        const url = `/search?${createQueryString(values)}`;
        this.props.history.push(url);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <aside className="menu">
                <form className="advanced-search" onSubmit={handleSubmit(this.searchSubmit)}>
                    <div className="field">
                        <p className="menu-label">Authors</p>
                        <div className="select is-rounded">
                            <Field component="select" name="author" className="select">
                                <option value="">All Authors</option>
                                {this.renderFilter(this.state.authorFilter)}
                            </Field>
                        </div>
                    </div>

                    <div className="field">
                        <p className="menu-label">Genres</p>
                        <div className="select is-rounded">
                            <Field component="select" name="category" className="select">
                                <option value=""> All genres</option>
                                {GENRES.sort(sortByNameAscending).map((category) => {
                                    return <option key={category}>{category}</option>;
                                })}
                            </Field>
                        </div>
                    </div>
                    <div className="field">
                        <p className="menu-label">Publisher</p>
                        <div className="select is-rounded">
                            <Field component="select" name="publisher" className="select">
                                <option value=""> All publishers</option>
                                {this.renderFilter(this.state.publisherFilter)}
                            </Field>
                        </div>
                    </div>
                    {ADVANCED_SEARCH_OPTIONS.map((option) => {
                        return (
                            <div key={option.name} className="field">
                                <p className="menu-label" htmlFor={option.name}>{option.placeholder}</p>
                                <Field component={renderField} type={option.type} placeholder={option.placeholder} name={option.name} />
                            </div>
                        );
                    })}
                    <br />
                    <button className="button is-info" type="submit">Search</button>
                </form>
            </aside>
        );
    }
}

const mapStateToProps = ({ books, search }) => ({ books, search });

export default withRouter(compose(
    connect(mapStateToProps, { filterBooks }),
    reduxForm({
        form: 'searchForm'
    })
)(FilterComponent));
