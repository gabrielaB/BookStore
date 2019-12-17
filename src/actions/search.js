import axios from 'axios';

import { ADVANCED_SEARCH } from '../action-types/search';
import { API_URL } from '../constants/constants';

export const filterBooks = (filters, books) => {
    let filteredBooks = [...books];

    filteredBooks = filteredBooks.filter((book) => {
        if (book.volumeInfo) {
            let check = {
                title: false,
                author: false,
                publisher: false,
                isbn10: false,
                isbn13: false,
                price: false,
                category: false,
                rating: false
            };
            if (filters.title) {
                /* create two strings without empty spaces and search for
                part of the search title in book titles
                */
                if (book.volumeInfo.title) {
                    const title = filters.title.trim().split('').join('').toUpperCase();
                    const bookTitle = book.volumeInfo.title.split('').join('').toUpperCase();
                    check.title = bookTitle.indexOf(title) !== -1;
                }
                if (!check.title) {
                    return false;
                }
            } else {
                check.title = true;
            }

            if (filters.author) {
                if (book.volumeInfo.authors) {
                    check.author = book.volumeInfo.authors.indexOf(filters.author) !== -1;
                }
                if (!check.author) {
                    return false;
                }
            } else {
                check.author = true;
            }

            if (filters.publisher) {
                if (book.volumeInfo.publisher) {
                    check.publisher = filters.publisher.trim() === book.volumeInfo.publisher.trim();
                }
                if (!check.publisher) {
                    return false;
                }
            } else {
                check.publisher = true;
            }

            if (filters.isbn10) {                
                if (book.volumeInfo.industryIdentifiers && book.volumeInfo.industryIdentifiers[0] && book.volumeInfo.industryIdentifiers[1]) {
                    check.isbn10 = (book.volumeInfo.industryIdentifiers[1].identifier.indexOf(filters.isbn10) !== -1
                        || book.volumeInfo.industryIdentifiers[0].identifier.indexOf(filters.isbn10) !== -1);
                }
                if (!check.isbn10) {
                    return false;
                }
            } else {
                check.isbn10 = true;
            }

            if (filters.isbn13) {
                if (book.volumeInfo.industryIdentifiers && book.volumeInfo.industryIdentifiers[0] && book.volumeInfo.industryIdentifiers[1]) {
                    check.isbn13 = (book.volumeInfo.industryIdentifiers[1].identifier.indexOf(filters.isbn13) !== -1
                        || book.volumeInfo.industryIdentifiers[0].identifier.indexOf(filters.isbn13) !== -1);
                }
                if (!check.isbn13) {
                    return false;
                }
            } else {
                check.isbn13 = true;
            }

            if (filters.price) {
                if (book.saleInfo.listPrice !== undefined) {
                    check.price = book.saleInfo.listPrice.amount <= filters.price;
                }
                if (!check.price) {
                    return false;
                }
            } else {
                check.price = true;
            }        
            if (filters.category && filters.category !== 'All') {
                if (book.volumeInfo.categories) {
                    check.category = book.volumeInfo.categories.indexOf(filters.category) !== -1;
                }
                if (!check.category) {
                    return false;
                }
            } else {
                check.category = true;
            }
            if(filters.rating) {
                if(book.volumeInfo.averageRating) {
                    check.rating = book.volumeInfo.averageRating >= parseInt(filters.rating);
                }
                if(!check.rating) {
                    return false;
                }
            } else {
                check.rating = true;
            }            
            return check.title && check.author && check.publisher && check.isbn10 && check.isbn13 && check.price && check.category && check.rating;
        } else {
            return false;
        }
    });

    return (dispatch, getState) => {
        dispatch({
            type: ADVANCED_SEARCH,
            payload: filteredBooks
        });
    };
};
