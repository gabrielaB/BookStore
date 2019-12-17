import {
    PRICE_ASCENDING,
    PRICE_DESCENDING,
    RATING_ASCENDING,
    RATING_DESCENDING
} from '../constants/constants';
import { FOR_SALE } from '../constants/constants';

/**
 * This method sorts array of string in ascending order
 * @param {String} a 
 * @param {String} b
 * @returns {Number} 
 */
export const sortByNameAscending = (a, b) => {
    const elementOne = a.toUpperCase();
    const elementTwo = b.toUpperCase();
    if (elementOne > elementTwo) {
        return 1;
    }
    if (elementOne < elementTwo) {
        return -1;
    }
    return 0;
};

/**
 * This method sorts array of string in descending order
 * @param {String} a 
 * @param {String} b
 * @returns {Number} 
 */
export const sortByNameDescending = (a, b) => {
    const elementOne = a.toUpperCase();
    const elementTwo = b.toUpperCase();
    if (elementOne > elementTwo) {
        return -1;
    }
    if (elementOne < elementTwo) {
        return 1;
    }
    return 0;
};

/**
 * Checks two object for average rating property existace
 * @param {Object} a 
 * @param {Object} b 
 */
const ratingDataExists = (a, b) => {
    return (a.volumeInfo
        && typeof a.volumeInfo.averageRating !== "undefined"
        && b.volumeInfo
        && typeof b.volumeInfo.averageRating !== "undefined");
};

/**
 * This method returns a function that sorts 
 * array of object by they prop in ascending order
 * @param {Object} a 
 * @param {Object} b 
 * @param {Number} prop
 * @returns {Number} 
 */
export const sortByProp = (prop) => {
    switch (prop) {
        case PRICE_ASCENDING:
            return (a, b) => {
                const elementOne = 0;
                const elementTwo = 0;
                if (a.saleInfo.saleability === FOR_SALE && b.saleInfo.saleability === FOR_SALE) {
                    return a.saleInfo.listPrice.amount - b.saleInfo.listPrice.amount;
                } else {
                    const elementOne = a.saleInfo.saleability !== FOR_SALE ? 0 : a.saleInfo.listPrice.amount;
                    const elementTwo = b.saleInfo.saleability !== FOR_SALE ? 0 : b.saleInfo.listPrice.amount;
                    return elementOne - elementTwo;
                }
            };
        case PRICE_DESCENDING:
            return (a, b) => {
                const elementOne = 0;
                const elementTwo = 0;
                if (a.saleInfo.saleability === FOR_SALE && b.saleInfo.saleability === FOR_SALE) {
                    return b.saleInfo.listPrice.amount - a.saleInfo.listPrice.amount;
                } else {
                    const elementOne = a.saleInfo.saleability !== FOR_SALE ? 0 : a.saleInfo.listPrice.amount;
                    const elementTwo = b.saleInfo.saleability !== FOR_SALE ? 0 : b.saleInfo.listPrice.amount;
                    return elementTwo - elementOne;
                }
            };
        case RATING_ASCENDING:
            return (a, b) => {
                if (ratingDataExists(a, b)) {
                    return a.volumeInfo.averageRating - b.volumeInfo.averageRating
                }
            };
        case RATING_DESCENDING:
            return (a, b) => {
                if (ratingDataExists(a, b)) {
                    return b.volumeInfo.averageRating - a.volumeInfo.averageRating;
                }
            }
        default:
            break;
    }
};

/**
 * This method takes strign of query parameters and
 * returns object of them with key:value 
 * @param {String} queryParams 
 */
export const createFilterObject = (queryParams) => {
    let location = queryParams;
    const filters = {};
    location = location.replace(/(^\?)/, '').split('&');
    location.map((param) => {
        let elem = param.split('=');
        filters[elem[0]] = decodeURIComponent(elem[1]);
    });
    return filters;
};

/**
 * This method creates a query string from object
 * key:value
 * @param object
 */
export const createQueryString = (object) => {
    let string = [];
    for (let key in object)
        if (object.hasOwnProperty(key)) {
            string.push(encodeURIComponent(key) + "=" + encodeURIComponent(object[key]));
        }
    return string.join("&");
};
