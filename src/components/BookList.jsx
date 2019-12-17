import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MAX_RATING } from '../constants/constants';

const BookList = (book) => {
    let bookPrice = 'Out of stock'
    if (book && book.saleInfo && book.saleInfo.listPrice && book.saleInfo.retailPrice) {
        bookPrice = `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}`
    }
    let bookThumbnail = 'https://placeholdit.co//i/150x150?';
    if (book && book.volumeInfo && book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) {
        bookThumbnail = book.volumeInfo.imageLinks.thumbnail
    }

    return (
        <div className="columns" key={book.id}>
            <div className="column is-3 book-list-image">
                <img className="img-by-category" src={bookThumbnail} alt="Book cover" />
                <Link to={`/books/${book._id}`} className="button is-info sign-button"> <strong>More info</strong> </Link>
            </div>
            <div className="column is-fluid book-list-info">
                <h3 className="subtitle">{book.volumeInfo.title}</h3>
                <h6>{book.volumeInfo.authors ? `by ${book.volumeInfo.authors[0]}` : ''}</h6>
                <hr />
                <p>
                    <strong>Price: </strong>
                    <span>{bookPrice}</span>
                </p>
                <hr />
                <label htmlFor="progressRating"><span>Average rating: {book.volumeInfo.averageRating}/5</span> </label>
                <progress name="progressRating" className="progress is-warning" value={book.volumeInfo.averageRating} max={MAX_RATING}></progress>
                <hr />
            </div>
        </div>
    );
};

export default BookList;
