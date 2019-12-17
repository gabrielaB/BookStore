import buttonArt from '../images/Buttons/Art.jpg';
import buttonBiographies from '../images/Buttons/Biographies.png';
import buttonChildrens from '../images/Buttons/Children\'s.jpg';
import buttonHistory from '../images/Buttons/History.jpg';
import buttonLiterature from '../images/Buttons/Literature.jpg';
import buttonMistery from '../images/Buttons/Mistery.jpg';
import buttonTeens from '../images/Buttons/Teens.jpg';

import authorKing from '../images/Authors/king.png';
import authorRowling from '../images/Authors/rowling.jpg';
import authorBrown from '../images/Authors/brown.jpg';
import authorJames from '../images/Authors/james.jpg';
import authorMartin from '../images/Authors/martin.jpg';
import authorAgatha from '../images/Authors/agatha.png';
import authorDoyle from '../images/Authors/doyle.png';
import authorGreen from '../images/Authors/green.png';

export const API_URL = 'http://localhost:4000';
export const MIN_PASSWORD_LENGTH = 4; // characters
export const REDIRECT_TO_HOME_PAGE_TIMEOUT = 2000; //mileseconds to redirect
export const REGEX_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const GENRES = ['Biography & Autobiography', 'Adventure', 'Art', 'Businessmen', 'Children\'s stories', 'Comics & Graphic Novels', 'Drama',
    'Erotic stories', 'Fiction', 'History', 'Horror tales, American', 'Humor', 'Juvenile Fiction', 'Juvenile Nonfiction',
    'Literary Criticism', 'Reference', 'Religion', 'Self-Help', 'Young Adult Fiction'];
export const POPULAR_IN_BOOKS = ['Best Books of 2017', '100 Books to Read in a Lifetime'];
export const BUTTONS_BAR = [{
    link: '/search/?category=Art',
    src: buttonArt,
    alt: 'Art category picture',
    title: 'Arts & Photography'
},
{
    link: '/search/?category=Biography & Autobiography',
    src: buttonBiographies,
    alt: 'Biographies category picture',
    title: 'Biographies & Memoirs'
},
{
    link: '/search/?category=Children\'s stories',
    src: buttonChildrens,
    alt: 'Children\'s Books category picture',
    title: 'Children\'s Books'
},
{
    link: '/search/?category=History',
    src: buttonHistory,
    alt: 'History category picture',
    title: 'History'
},
{
    link: '/search/?category=Fiction',
    src: buttonLiterature,
    alt: 'Literature & Fiction category picture',
    title: 'Literature & Fiction'
},
{
    link: '/search/?category=Juvenile Fiction',
    src: buttonMistery,
    alt: 'Mystery & Suspense category picture',
    title: 'Mystery & Suspense'
},
{
    link: '/search/?category=Young Adult Fiction',
    src: buttonTeens,
    alt: 'Teens & Young Adults category picture',
    title: 'Teens & Young Adults'
}];
export const POPULAR_AUTHORS = [{
    link: '',
    src: authorKing,
    alt: 'Stephen King'
},
{
    link: '',
    src: authorRowling,
    alt: 'J.K. Rowling'
},
{
    link: '',
    src: authorBrown,
    alt: 'Dan Brown'
},
{
    link: '',
    src: authorJames,
    alt: 'E. L. James'
},
{
    link: '',
    src: authorMartin,
    alt: 'George R. R. Martin'
},
{
    link: '',
    src: authorAgatha,
    alt: 'Agatha Christie'
},
{
    link: '',
    src: authorDoyle,
    alt: 'Arthur Conan Doyle'
},
{
    link: '',
    src: authorGreen,
    alt: 'John Green'
}];
export const MAX_RATING = '5';
export const MIN_RATING = '1';
export const PRICE_ASCENDING = 'PRICE_ASCENDING';
export const PRICE_DESCENDING = 'PRICE_DESCENDING';
export const RATING_ASCENDING = 'RATING_ASCENDING';
export const RATING_DESCENDING = 'RATING_DESCENDING';
export const FOR_SALE = 'FOR_SALE';
export const ALL_AUTHORS = 'ALL_AUTHORS';
export const NUMBER_OF_BOOK_CARDS = 12;
export const BOOK_IMAGE = 'https://animagehub.com/wp-content/uploads/2016/03/book-vector-13.png';
export const MAX_STARS = 5;
export const MIN_STARS = 1;
export const ALL_CATEGORIES = 'All';
export const ADVANCED_SEARCH_OPTIONS = [
    {
        type: 'text',
        placeholder: 'Title',
        name: 'title'
    },
    {
        type: 'text',
        placeholder: 'ISBN-10',
        name: 'isbn10'
    },
    {
        type: 'text',
        placeholder: 'ISBN-13',
        name: 'isbn13'
    },
    {
        type: 'number',
        placeholder: 'Price',
        name: 'price'
    }
];
export const USER_FAVOURTIE_BOOKS_ON_PAGE = 4;
export const USER_FAVOURTIE_BOOKS_ON_PAGE_TABLET = 6;
export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';
export const ANONIMOUS = 'Anonimous';
export const MIN_QUANTITY = 1;
export const TAX_RATE = 0.05;
export const SHIPPING_RATE = 0.1;
export const HEADER_LOGIN = 'Log in';
export const HEADER_SIGNUP = 'Sign up';
export const HEADER_ALL = 'all';
export const HEADER_CART = 'My Cart';
export const HEADER_PROFILE = 'My profile';
export const BREAKPOINT_PHONE = 420;
export const BREAKPOINT_TABLET = 768;
export const BREAKPOINT_LAPTOP = 1024;
export const BREAKPOINT_DESKTOP = 1280;
export const BOOK_CARD_TITLE_MAX_LENGTH = 32;
export const TITLE_NOT_FOUND = 'Title not found';
export const RESPONSIVE_CLASS_IS_6 = 'column is-6';
export const RESPONSIVE_CLASS_IS_4 = 'column is-4';
export const RESPONSIVE_CLASS_IS_3 = 'column is-3';
export const CURRENCY = 'BGN';
export const TAX_PERCENTAGE = '5%';
export const CAROUSEL_TRANSITION = 300; //ms
export const CAROUSEL_STARTING_POSITION = 1320; //px
export const CAROUSEL_TYPE_AUTHORS = 'authors';
export const CAROUSEL_TYPE_BOOKS = 'books';
export const AUTHOR_TRANSTITION = 250; //ms
