import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    BOOK_IMAGE,
    BOOK_CARD_TITLE_MAX_LENGTH,
    TITLE_NOT_FOUND,
    BREAKPOINT_LAPTOP,
    BREAKPOINT_DESKTOP,
    RESPONSIVE_CLASS_IS_3,
    RESPONSIVE_CLASS_IS_4,
    RESPONSIVE_CLASS_IS_6
} from '../constants/constants';

export class BookCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookImgSrc: BOOK_IMAGE,
            bookTitle: TITLE_NOT_FOUND,
            bookCardClass: RESPONSIVE_CLASS_IS_3
        };
        this.setBookCardClass = this.setBookCardClass.bind(this);
    }

    componentDidMount() {
        const bookHasThumbnail = this.props.book && this.props.book.volumeInfo && this.props.book.volumeInfo.imageLinks && this.props.book.volumeInfo.imageLinks.thumbnail;
        const bookHasTitle = this.props.book && this.props.book.volumeInfo && this.props.book.volumeInfo.title;
        
        if (this.props.bookClass) {
            this.setState(() => { bookCardClass: this.props.bookClass });
        }
        
        if (bookHasThumbnail) {
            this.setState(() => {
                return {
                    bookImgSrc: this.props.book.volumeInfo.imageLinks.thumbnail
                };
            });
        }
        
        if (bookHasTitle) {
            this.setState(() => {
                return {
                    bookTitle: this.props.book.volumeInfo.title
                };
            });
        }

        this.setBookCardClass();

        window.addEventListener('resize', this.setBookCardClass);
    }

    /**
     * Change class name of BookCard Component depends on 
     * window.innerWidth
     * @param event 
     */
    setBookCardClass() {
        if (this.props.bookClass) {
            this.setState(() => ({ bookCardClass: this.props.bookClass }));
            return;
        }
        if (window.innerWidth < BREAKPOINT_LAPTOP && this.state.bookCardClass !== RESPONSIVE_CLASS_IS_6) {
            this.setState(() => {
                return {
                    bookCardClass: RESPONSIVE_CLASS_IS_6
                };
            });
        }

        if (window.innerWidth > BREAKPOINT_LAPTOP && window.innerWidth < BREAKPOINT_DESKTOP && this.state.bookCardClass !== RESPONSIVE_CLASS_IS_4) {
            this.setState(() => {
                return {
                    bookCardClass: RESPONSIVE_CLASS_IS_4
                };
            });
        }

        if (window.innerWidth > BREAKPOINT_DESKTOP && this.state.bookCardClass !== RESPONSIVE_CLASS_IS_3) {
            this.setState(() => {
                return {
                    bookCardClass: RESPONSIVE_CLASS_IS_3
                };
            });
        }
    }

    render() {
        const book = this.props.book;
        return (
            <div className={`${this.state.bookCardClass} book-card`}>
                <Link className="link-to-book" to={`/books/${book._id}`}>
                    <div className="card">
                        <div className="card-image">
                            <img className="image-in-card" src={this.state.bookImgSrc} alt="Placeholder image" />
                        </div>
                        <div className="card-content">
                            <p className="title is-centered is-6 title-in-card">{this.state.bookTitle.length < BOOK_CARD_TITLE_MAX_LENGTH ? this.state.bookTitle : `${this.state.bookTitle.slice(0, BOOK_CARD_TITLE_MAX_LENGTH)}...`}</p>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setBookCardClass);
    }
};

export default BookCard;
