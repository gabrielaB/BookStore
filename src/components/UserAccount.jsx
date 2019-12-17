import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../actions/user';
import BookCard from './BookCard';
import CommentCard from './CommentCard';
import { deleteComment } from '../actions/comments';
import {
    USER_FAVOURTIE_BOOKS_ON_PAGE,
    USER_FAVOURTIE_BOOKS_ON_PAGE_TABLET,
    LEFT,
    RIGHT,
    BREAKPOINT_TABLET,
    BREAKPOINT_PHONE,
    BREAKPOINT_DESKTOP,
    BREAKPOINT_LAPTOP
} from '../constants/constants';
import userPic from '../images/user.jpg';

export class UserAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            favBooksToRender: [],
            isTabletWidth: true
        };
        this.deleteComment = this.deleteComment.bind(this);
        this.changePage = this.changePage.bind(this);
        this.getPageWithBooks = this.getPageWithBooks.bind(this);
        this.setWidth = this.setWidth.bind(this);
    }

    componentDidMount() {
        if (this.props.login.user.length > 1) {
            this.props.getUser(this.props.login.user);
        }

        this.setWidth();
        
        window.addEventListener('resize', this.setWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setWidth);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user.favouriteBooks !== this.props.user.favouriteBooks) {
            this.setState(() => {
                return {
                    favBooksToRender: [...this.props.user.favouriteBooks]
                };
            });
        }
    }

    /**
     * This method deletes comment from user profile and book
     * @param event 
     */
    deleteComment(event) {
        const commentId = event.target.dataset['commentid'];
        const bookId = event.target.dataset['bookid'];
        const commentRating = event.target.dataset['rating'];
        this.props.deleteComment(commentId, bookId, commentRating, this.props.login.user);
    }

    /**
     * Changing the page of favourite books list 
     * @param event 
     */
    changePage(event) {
        const bookOnPage = this.state.isTabletWidth ? USER_FAVOURTIE_BOOKS_ON_PAGE_TABLET : USER_FAVOURTIE_BOOKS_ON_PAGE;
        const changePageLeft = event.currentTarget.getAttribute('arrow') === LEFT && this.state.page > 1;
        const changePageRight = event.currentTarget.getAttribute('arrow') === RIGHT
            && this.state.page < this.state.favBooksToRender.length / bookOnPage;
        if (changePageLeft) {
            this.setState((prevState) => {
                return {
                    page: (prevState.page - 1)
                };
            });
        }
        if (changePageRight) {
            this.setState((prevState) => {
                return {
                    page: (prevState.page + 1)
                };
            });
        }
    }

    /**
     * this method slice 4 or 6 books depending on the page and render them to the screen
     */
    getPageWithBooks() {
        const bookOnPage = this.state.isTabletWidth ? USER_FAVOURTIE_BOOKS_ON_PAGE_TABLET : USER_FAVOURTIE_BOOKS_ON_PAGE;
        return this.state.favBooksToRender.slice(this.state.page * bookOnPage - bookOnPage, this.state.page * bookOnPage);
    }

    /**
     * This method checks if current width of the screen
     * is in diapason of tablet width
     * @param event 
     */
    setWidth() {
        this.setState(() => ({ isTabletWidth: window.innerWidth > BREAKPOINT_LAPTOP && window.innerWidth < BREAKPOINT_DESKTOP }));
    }

    render() {
        const { user } = this.props;
        return (
            <div className="tile is-ancestor hero-body">
                <div className="tile is-3 is-vertical is-parent details-menu">
                    <div className="tile is-child box">
                        <img className="image-book profile-picture level-left" src={userPic} alt="User image" />
                        <br />
                        <div className="product-details">
                            <h2 className="subtitle">My profile</h2>
                            <p><strong>Username: {user.username}</strong> </p>
                            <p><strong>E-mail: {user.email}</strong></p>
                            <p><strong>Favourite books: {user.favouriteBooks ? user.favouriteBooks.length : 0}</strong></p>
                            <p><strong>Comments: {user.comments ? user.comments.length : 0}</strong></p>
                        </div>
                    </div>
                </div>
                <div className="tile is-parent is-vertical">
                    <div className="tile is-child box user-favourite">
                        <h1 className="title"> My favorite books: </h1>
                        <div className="columns" id="fav-book-acc">
                            {user.favouriteBooks ? this.getPageWithBooks().map((book) => {
                                return <BookCard key={book._id} book={book} />;
                            }) : null}
                        </div>
                        <div className="level">
                            <a onClick={this.changePage} arrow={LEFT} className="arrow-left"><i className="fa fa-chevron-left level-left" aria-hidden="true"></i></a>
                            <a onClick={this.changePage} arrow={RIGHT} className="arrow-right"><i className="fa fa-chevron-right level-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div className="tile is-child box">
                        <h2 className="subtitle has-text-weight-semibold">My comments:</h2>
                        <article className="media">
                            <div className="media-content">
                                <div className="content">
                                    {user.comments ? user.comments.map((comment) => {
                                        return <CommentCard key={comment._id} comment={comment} deleteComment={this.deleteComment} />
                                    }) : <p>No comments yet..</p>}
                                </div>
                            </div>
                            <div className="media-right">
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = ({ user, login }) => ({ user, login });

export default connect(mapStateToProps, { getUser, deleteComment })(UserAccount);