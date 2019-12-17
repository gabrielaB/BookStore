import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    removeFromCart,
    updateCart
} from '../actions/cart';
import {
    BOOK_IMAGE,
    MIN_QUANTITY,
    TAX_RATE,
    SHIPPING_RATE,
    BREAKPOINT_TABLET,
    BREAKPOINT_PHONE,
    CURRENCY,
    TAX_PERCENTAGE
} from '../constants/constants';

export class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isTabletWidth: false
        };
        this.removeBookFromCart = this.removeBookFromCart.bind(this);
        this.renderCartItems = this.renderCartItems.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
        this.renderTotalPrice = this.renderTotalPrice.bind(this);
        this.setWidth = this.setWidth.bind(this);
    }

    componentDidMount() {
        this.setState(() => ({ isTabletWidth: window.innerWidth < BREAKPOINT_TABLET && window.innerWidth > BREAKPOINT_PHONE }));
        window.addEventListener('resize', this.setWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setWidth);
    }

    /**
     * Check if window width is between tablet and 
     * phone and set it to the state 
     */
    setWidth() {
        this.setState(() => ({ isTabletWidth: window.innerWidth < BREAKPOINT_TABLET && window.innerWidth > BREAKPOINT_PHONE }));
    }

    /**
     * Remove selected book from cart
     * @param event 
     */
    removeBookFromCart(event) {
        const bookId = event.target.dataset['bookid'];
        this.props.removeFromCart(bookId);
    }

    /**
     * Update quantity of the book in cart
     * @param event 
     */
    updateQuantity(event) {
        const bookId = event.currentTarget.getAttribute('book');
        const value = event.currentTarget.getAttribute('value');
        if (value >= MIN_QUANTITY) {
            this.props.updateCart(bookId, parseInt(value));
        }
    }

    /**
     * Render all items in cart
     */
    renderCartItems() {
        return this.props.cart.map((book) => {
            if (book.details.volumeInfo) {
                return (
                    <div className={`columns cart-item${this.state.isTabletWidth ? ' clearfix' : ''}`} key={book.details._id}>
                        <div className="column column-cart-image"><img className="cart-image" src={book.details.volumeInfo.imageLinks
                            ? book.details.volumeInfo.imageLinks.smallThumbnail
                            : BOOK_IMAGE} alt="Book image" />
                        </div>
                        <div className="column is-4">{this.state.isTabletWidth ? 'Title: ' : ''} {book.details.volumeInfo.title}</div>
                        <div className="column">
                        {`${this.state.isTabletWidth ? 'Price: ' : ''} ${book.details.saleInfo.listPrice.amount.toFixed(2)} ${book.details.saleInfo.listPrice.currencyCode}`}
                        </div>
                        <div className="column is-3 column-cart-quantity">
                            <div className="update-button"
                                book={book.details._id}
                                value={parseInt(book.quantity) - 1}
                                onClick={this.updateQuantity}>
                                <i className="fas fa-minus-square fa-lg quantity-button"></i>
                            </div>
                            <input
                                type="number"
                                name="quantity"
                                className="cart-quantity quantity-button"
                                value={book.quantity >= MIN_QUANTITY ? book.quantity : MIN_QUANTITY}
                                disabled />
                            <div className="update-button"
                                book={book.details._id}
                                value={parseInt(book.quantity) + 1}
                                onClick={this.updateQuantity}>
                                <i className="fas fa-plus-square fa-lg quantity-button"></i>
                            </div>
                        </div>
                        <div className="column"><button className="button is-danger is-small"
                            onClick={this.removeBookFromCart}
                            data-bookid={book.details._id}>Remove</button></div>
                        <div className="column">{this.state.isTabletWidth ? 'Total: ' : ''}{`${(book.details.saleInfo.listPrice.amount * book.quantity).toFixed(2)} ${CURRENCY}`}</div>
                    </div>
                );
            }

        })
    }

    /**
     * This method calculate and render total price of your order
     * including taxes and shipping
     */
    renderTotalPrice() {
        if (this.props.cart.length > 0) {
            const subtotal = this.props.cart.reduce(((a, b) => { return a + b.details.saleInfo.listPrice.amount * b.quantity }), 0);
            const tax = subtotal * TAX_RATE;
            const shipping = (subtotal + tax) * SHIPPING_RATE;
            const total = subtotal + tax + shipping;
            return (
                <div className="checkout-menu">
                    <div className="checkout-label"><span className="level-left">{`Subtotal: ${subtotal.toFixed(2)} ${CURRENCY}`}</span></div>
                    <div className="checkout-label"><span className="level-left">{`Tax (${TAX_PERCENTAGE}): ${tax.toFixed(2)} ${CURRENCY}`} </span></div>
                    <div className="checkout-label"><span className="level-left">{`Shiping: ${shipping.toFixed(2)} ${CURRENCY}`} </span></div>
                    <div className="checkout-label"><span className="level-left">{`Grand Total: ${total.toFixed(2)} ${CURRENCY}`} </span></div>
                    <div className="checkout-label"><a className="button is-success">Checkout</a></div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="hero-body">
                <h1 className="level-left title is-9"> Shopping Cart </h1>
                <div className="cart-table">
                    <div className="columns cart-labels">
                        <p className="column">{/*Image*/}</p>
                        <p className="column is-4">Item</p>
                        <p className="column">Price</p>
                        <p className="column is-3">Quantity</p>
                        <p className="column">{/*Remove*/}</p>
                        <p className="column">Total</p>
                    </div>
                    {this.renderCartItems()}
                    {this.renderTotalPrice()}
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps, { removeFromCart, updateCart })(ShoppingCart);