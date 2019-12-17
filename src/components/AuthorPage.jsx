import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAuthorBooks, getAuthorInformation } from '../actions/author';
import BookList from './BookList';
import SortSelect from './SortSelect';
import { sortByProp } from '../helpers/index';

export class AuthorPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authorBooks: []
        };

        this.renderAuthorBooks = this.renderAuthorBooks.bind(this);
        this.sortBooksByAuthor = this.sortBooksByAuthor.bind(this);
    }

    componentDidMount(props) {
        this.props.getAuthorInformation(this.props.match.params.author);
        this.props.getAuthorBooks(this.props.match.params.author);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.author.authorBooks !== this.props.author.authorBooks) {
            this.setState(() => {
                return {
                    authorBooks: [...this.props.author.authorBooks]
                };
            });
        }
    }

    /**
     * Sorting author books by selected value and set them
     * to the state
     * @param {Object} event
     *  
     */
    sortBooksByAuthor(event) {
        const value = event.target.value;
        const sortedBooks = [...this.state.authorBooks].sort(sortByProp(value));
        this.setState(() => {
            return {
                selectValue: value,
                authorBooks: sortedBooks
            };
        });
    }
    
    /**
     * Render author books in list
     */
    renderAuthorBooks() {
        const authorBooks = this.state.authorBooks;
        return (
            <ul>
                {authorBooks.map((book) => <BookList key={book.id} {...book} />)}
            </ul>
        );
    }

    render() {
        const { authorBooks, author } = this.props.author;
        const selectProps = {
            onChange: this.sortBooksByAuthor,
            value: this.state.selectValue
        };
        return (
            <div className="section">
                <h1 className="title">{author ? author.name : ""}</h1>
                <div className="columns">
                    <div className="column is-3 author-section">
                        <img className="author-image" src={author ? author.img : ""} alt="" />
                        <article className="author-info">
                            <p>{author ? author.info : ""}</p>
                        </article>
                    </div>
                    <div className="column book-list">
                        <h3 className="subtitle">Books By Author</h3>
                        <div className="level-right">
                            <span>Sort by: </span>
                            <div className="select">
                                <SortSelect {...selectProps} />
                            </div>
                        </div>
                        <div>
                            {this.renderAuthorBooks()}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = ({ author }) => ({ author });

export default connect(mapStateToProps, { getAuthorBooks, getAuthorInformation })(AuthorPage);
