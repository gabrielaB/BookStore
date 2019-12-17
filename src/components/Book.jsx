import React, { Component } from 'react';
import { connect } from 'react-redux';

import Comments from './Comments'
import { getBookInformation } from '../actions/books';
import { getCommentsForBook } from '../actions/comments';
import { getUser } from '../actions/user';
import {
    addToFavourites,
    removeFromFavourites
} from '../actions/favouriteBooks';
import {
    addToCart,
    removeFromCart
} from '../actions/cart';
import {
    MAX_RATING,
    FOR_SALE,
    BOOK_IMAGE,
    ANONIMOUS
} from '../constants/constants';

export class Book extends Component {
    constructor(props) {
        super(props);

        this.state = {
            success: false,
            message: ''
        };
        this.renderFavouriteButton = this.renderFavouriteButton.bind(this);
        this.renderAddToCartButton = this.renderAddToCartButton.bind(this);
        this.addToFavouritesBooks = this.addToFavouritesBooks.bind(this);
        this.removeFromFavouritesBooks = this.removeFromFavouritesBooks.bind(this);
        this.addBookToCart = this.addBookToCart.bind(this);
        this.removeBookFromCart = this.removeBookFromCart.bind(this);
    }

    componentDidMount(props) {
        const bookId = this.props.match.params.book;
        if (this.props.login.user.length > 1) {
            this.props.getUser(this.props.login.user);
        }
        this.props.getBookInformation(bookId);
        this.props.getCommentsForBook(bookId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.comments.length !== this.props.comments.length) {
            const bookId = this.props.match.params.book;
            this.props.getBookInformation(bookId); // get book details with new Rating
        }
    }

    /**
     * This method add book to user favorite books
     */
    async addToFavouritesBooks() {
        const response = await this.props.addToFavourites(this.props.bookDetails, this.props.user._id);
        this.setState(() => {
            return {
                success: response.success,
                message: response.message
            };
        });
    }

    /**
     * This method remove book from user favorite books
     */
    async removeFromFavouritesBooks() {
        const response = await this.props.removeFromFavourites(this.props.bookDetails, this.props.user._id);
        this.setState(() => {
            return {
                success: response.success,
                message: response.message
            };
        });
    }

    /**
     * Render add/remove from favourites button 
     */
    renderFavouriteButton() {
        if (this.props.user.favouriteBooks) {
            return this.props.user.favouriteBooks.some((book) => {
                return this.props.bookDetails._id === book._id
            }) ? <a className="buy-book-btn button is-info subtitle" onClick={this.removeFromFavouritesBooks}>Remove from favourites</a>
                : <a className="buy-book-btn button is-info subtitle" onClick={this.addToFavouritesBooks}>Add to favourites</a>;
        } else {
            return <a className="buy-book-btn button is-info subtitle" disabled>Add to favourites</a>;
        }
    }

    /**
     * Add book to user cart
     */
    addBookToCart() {
        this.props.addToCart(this.props.bookDetails);
    }

    /**
     * Remove book from user cart
     */
    removeBookFromCart() {
        this.props.removeFromCart(this.props.bookDetails._id);
    }

    /**
     * Render add/remove from cart button
     */
    renderAddToCartButton() {
        const checkIfPriceExist = this.props.bookDetails.saleInfo && this.props.bookDetails.saleInfo.listPrice && this.props.bookDetails.saleInfo.listPrice.amount;
        if (this.props.cart && this.props.user && checkIfPriceExist) {
            return this.props.cart.some((book) => book.details._id === this.props.bookDetails._id)
                ? <a className="buy-book-btn button is-info subtitle" onClick={this.removeBookFromCart}>Remove from cart</a>
                : <a className="buy-book-btn button is-info subtitle" onClick={this.addBookToCart}>Add to cart</a>;
        } else {
            return <a href="" className="buy-book-btn button is-info subtitle" disabled>Add to cart</a>;
        }
    }

    render() {
        const { bookDetails } = this.props;
        const { comments } = this.props;
        const isbn10Label = bookDetails.volumeInfo
            && bookDetails.volumeInfo.industryIdentifiers
            && bookDetails.volumeInfo.industryIdentifiers[0]
            ? bookDetails.volumeInfo.industryIdentifiers[0].type
            : 'ISBN-10';
        const isbn10 = bookDetails.volumeInfo
            && bookDetails.volumeInfo.industryIdentifiers
            && bookDetails.volumeInfo.industryIdentifiers[0]
            ? bookDetails.volumeInfo.industryIdentifiers[0].identifier
            : '1xxxxxxxxxx';
        const isbn13Label = bookDetails.volumeInfo
            && bookDetails.volumeInfo.industryIdentifiers
            && bookDetails.volumeInfo.industryIdentifiers[1]
            ? bookDetails.volumeInfo.industryIdentifiers[1].type
            : 'ISBN-13';
        const isbn13 = bookDetails.volumeInfo
            && bookDetails.volumeInfo.industryIdentifiers
            && bookDetails.volumeInfo.industryIdentifiers[1]
            ? bookDetails.volumeInfo.industryIdentifiers[1].identifier
            : '1xxxxxxxxxxxx';
        return (
            <div className="hero-body">
                <div className="tile is-ancestor">
                    <div className="tile is-3 is-vertical is-parent details-menu">
                        <div className="tile is-child box">
                            <img className='level-left image-book' src={bookDetails.volumeInfo
                                && bookDetails.volumeInfo.imageLinks
                                ? bookDetails.volumeInfo.imageLinks.thumbnail
                                : BOOK_IMAGE} alt="" />
                            <hr />
                            <div className="product-details">
                                <h2 className="subtitle">Product details</h2>
                                <p><strong>Pages: </strong>{bookDetails.volumeInfo ? bookDetails.volumeInfo.pageCount : ''}</p>
                                <p><strong>Publisher: </strong>{bookDetails.volumeInfo ? bookDetails.volumeInfo.publisher : ''}</p>
                                <p><strong>Language: </strong>{bookDetails.volumeInfo ? bookDetails.volumeInfo.language : ''}</p>
                                <p><strong>{isbn10Label} : </strong>{isbn10}</p>
                                <p><strong>{isbn13Label} : </strong>{isbn13}</p>
                                <p>
                                    <label htmlFor="progressRating">
                                        <strong>Average rating: </strong>
                                        {bookDetails.volumeInfo ? bookDetails.volumeInfo.averageRating : ''}/{MAX_RATING}
                                    </label>
                                    <progress name='progressRating'
                                        className="progress is-warning"
                                        value={bookDetails.volumeInfo ? bookDetails.volumeInfo.averageRating : ''}
                                        max={MAX_RATING}>
                                    </progress>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="tile is-parent is-vertical">
                        <div className="tile is-child box">
                            <h1 className='title'>{bookDetails.volumeInfo ? bookDetails.volumeInfo.title : 'Book Title'}</h1>
                            <h3 className='subtitle'>{bookDetails.volumeInfo ? bookDetails.volumeInfo.subtitle : ''}</h3>
                            <br />
                            <h6>by <span>{bookDetails.volumeInfo && bookDetails.volumeInfo.authors ? bookDetails.volumeInfo.authors.join(', ') : ANONIMOUS}</span></h6>
                            <p>
                                <strong>Published by </strong>
                                {bookDetails.volumeInfo ? bookDetails.volumeInfo.publisher : ''} on {bookDetails.volumeInfo ? bookDetails.volumeInfo.publishedDate : " "}
                            </p>
                            <br />
                            <p>
                                <strong>Description: </strong>
                                <span>{bookDetails.volumeInfo ? bookDetails.volumeInfo.description : ''}</span>
                            </p>
                            <br />
                            <p>
                                <strong>Price: </strong>{bookDetails.saleInfo && bookDetails.saleInfo.saleability === FOR_SALE ? `${bookDetails.saleInfo.listPrice.amount} ${bookDetails.saleInfo.listPrice.currencyCode}` : 'Out of stock'}
                            </p>
                            <br />
                            <div className="book-actions">
                                <div className="buttons-wrapper">
                                    {this.renderFavouriteButton()}
                                    {this.renderAddToCartButton()}
                                </div>
                                <span className={`book-message ${this.state.success ? 'help is-success' : 'help is-danger'}`}>{this.state.message}</span>
                            </div>
                        </div>
                        <Comments />
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({
    bookDetails,
    comments,
    user,
    login,
    cart }) => ({
        bookDetails,
        comments,
        user,
        login,
        cart
    });

export default connect(mapStateToProps, {
    getBookInformation,
    getCommentsForBook,
    addToFavourites,
    removeFromFavourites,
    getUser,
    addToCart,
    removeFromCart
})(Book);