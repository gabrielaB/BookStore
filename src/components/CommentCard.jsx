import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    MAX_RATING,
    ANONIMOUS
} from '../constants/constants';

const CommentCard = ({ comment, deleteComment }) => {
    return (
        <Link to={`/books/${comment.bookId}`}>
            <article className="media message is-warning">
                <div className="media-content">
                    <div className="content">
                        <div className="message-body">
                            <strong className="title">{comment.title}</strong>
                            <br />
                            <span>By {comment.username ? comment.username : ANONIMOUS}</span>
                            <br />
                            <small>on {comment.date}</small>
                            <p><label htmlFor="progressRating"><strong>Rating:</strong>  {comment.rating} </label>
                                <progress name="progressRating"
                                    className="progress is-warning"
                                    value={comment.rating}
                                    max={MAX_RATING}></progress>
                            </p>
                            <p>{comment.text}</p>
                        </div>
                    </div>
                </div>
                <div className="media-right">
                    <button className="delete"
                        data-commentid={comment._id}
                        data-bookid={comment.bookId}
                        data-rating={comment.rating}
                        onClick={deleteComment}>Delete comment</button>
                </div>
            </article>
        </Link>
    );
};

export default CommentCard;
