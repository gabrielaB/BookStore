import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
    Field,
    reduxForm,
    reset
} from 'redux-form';

import CommentCard from './CommentCard';
import validateComment from '../helpers/validateComment';
import {
    addCommentForBook,
    deleteComment
} from '../actions/comments';
import { getBookInformation } from '../actions/books';
import {
    MIN_RATING,
    MAX_RATING
} from '../constants/constants';

const commentInput = ({ input, name, type, placeholder, min, max, meta: { touched, error } }) => (
    <div className="control">
        <input {...input} type={type} placeholder={placeholder} name={name} min={min} max={max} className="input is-medium is-info" />
        {touched && error && <span className='help is-danger'>{error}</span>}
    </div>
);

export class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookId: ''
        };
        this.postComment = this.postComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.bookDetails && prevProps.bookDetails._id !== this.props.bookDetails._id) {
            this.setState(() => {
                return {
                    bookId: this.props.bookDetails._id
                };
            });
        }
    }
    /**
     * This methods adds comment to the selected book with
     * appropriate parameters from comment form
     * @param {Object} values 
     */
    postComment(values) {
        this.props.addCommentForBook(this.state.bookId, values.title, values.rating, values.text, this.props.login.user, this.props.login.username);
        this.props.reset();
    }
    /**
     * This method delete comment from comments list
     * and refresh book rating
     * @param {Object} event 
     */
    deleteComment(event) {
        const commentId = event.target.dataset['commentid'];
        const bookId = event.target.dataset['bookid'];
        const commentRating = event.target.dataset['rating'];
        this.props.deleteComment(commentId, bookId, commentRating, this.props.login.user);
        this.props.reset();
    }

    render() {
        const { handleSubmit, resetForm } = this.props;
        const commentsTemplate = this.props.comments.map((comment) => {
            return <CommentCard key={comment._id} comment={comment} deleteComment={this.deleteComment} />;
        });
        const commentComponent = (
            <div className="tile is-child box">
                <h2 className="subtitle has-text-weight-semibold">Customer reviews:</h2>
                {commentsTemplate}
                <article className="media">
                    <form name="newCommentForm" className="media-content" onSubmit={handleSubmit(this.postComment)}>
                        <div className="field">
                            <label className="label" htmlFor="title">Title</label>
                            <Field component={commentInput} type="text" name="title" placeholder="Title" />
                            <label className="label" htmlFor="rating">Rating</label>
                            <Field component={commentInput} type="number" name="rating" placeholder="Rating" min={MIN_RATING} max={MAX_RATING} />
                        </div>
                        <div className="field">
                            <p className="control">
                                <Field component="textarea" className="textarea is-info" name="text" placeholder="Add a comment..."></Field>
                            </p>
                        </div>
                        <div className="level">
                            <div className="level-left">
                                <div className="level-item">
                                    <button type="submit" className="button is-info">Post</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </article>
            </div>
        );
        return commentComponent;
    };
};

const mapStateToProps = ({ login, bookDetails, comments }) => ({ login, bookDetails, comments });

export default compose(
    connect(mapStateToProps, { addCommentForBook, deleteComment, getBookInformation }),
    reduxForm({
        form: 'commentForm',
        validate: validateComment,
        enableReinitialize: true,
        keepDirtyOnReinitialize: true
    })
)(Comments);
