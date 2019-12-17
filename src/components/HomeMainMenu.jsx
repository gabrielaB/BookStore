import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PopularAuthors from './PopularAuthors';
import BookCard from './BookCard';
import { getAllBooks } from '../actions/books';
import { getUser } from '../actions/user';
import { sortByProp } from '../helpers';
import {
    RATING_DESCENDING,
    NUMBER_OF_BOOK_CARDS,
    CAROUSEL_TYPE_BOOKS
} from '../constants/constants';
import {
    RESPONSIVE_CAROUSEL_CONFIG,
    getCarouselConfig
} from '../helpers/responsiveCarousel'
import banner from '../images/banner.jpg';
import bottomBanner from '../images/bottom-banner.jpg';
import { Carousel } from './Carousel';

export class HomeMainMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: []
        };
        this.setCarouselWidth = this.setCarouselWidth.bind(this);
        this.renderBookCards = this.renderBookCards.bind(this);
    }

    componentWillMount() {
        this.setCarouselWidth();
    }

    componentDidMount(props) {
        this.props.getAllBooks();
        window.addEventListener('resize', this.setCarouselWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setCarouselWidth);
    }

    /**
     * This method sets carousel configuration.
     * It depends on window.innderWidth
     */
    setCarouselWidth() {
        this.setState(() => ({ carouselConfig: getCarouselConfig(window.innerWidth, CAROUSEL_TYPE_BOOKS) }));
    }

    /**
     * this method creates array of 12 random books.
     */
    renderBookCards() {
        if (this.props.books.length < NUMBER_OF_BOOK_CARDS) {
            return this.props.books.map((book) => <BookCard key={book._id} {...book} />);
        } else {
            let randomBooks = [];
            for (let index = 0; index < NUMBER_OF_BOOK_CARDS; index++) {
                const randomNumber = Math.floor(Math.random() * this.props.books.length);
                if (randomBooks.indexOf(this.props.books[randomNumber]) === -1) {
                    randomBooks.push(this.props.books[randomNumber]);
                } else {
                    index--;
                }
            }
            return randomBooks.map((book) => <BookCard key={book._id} book={book} bookClass={'carousel-book'} />);
        }
    }

    render() {
        const booksToRender = this.renderBookCards();
        return (
            <div className="tile is-parent is-9">
                <article className="tile is-child box is-12">
                    <div className="content">
                        <div className="image">
                            <img src={banner} alt="Banner for book news" />
                        </div>
                        <PopularAuthors />
                        <hr />
                    </div>
                    <div>
                        <Carousel config={this.state.carouselConfig}>
                            {booksToRender}
                        </Carousel>
                    </div>
                    <div className="image bottom-banner">
                        <img src={bottomBanner} alt="Banner for book news" />
                    </div>
                </article>
            </div>
        );
    }
};

const mapStateToProps = ({ books }) => ({ books });

export default connect(mapStateToProps, { getAllBooks })(HomeMainMenu);