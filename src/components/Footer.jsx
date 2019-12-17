import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../scss/footer.scss";

export class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <Link to="/" className="button big-button is-dark">Back to top</Link>
                <footer className="hero footer is-dark">
                    <div className="hero is-dark">
                        <div className="has-text-centered">
                            <div>
                                <div className="columns">
                                    <div className="column">
                                        <label htmlFor=""></label>
                                        <ul className="footer-list">
                                            <li>
                                                <Link className="button is-dark is-small" to="/">Get to Know Us</Link>
                                            </li>
                                            <li>
                                                <Link className="button is-dark is-small" to="/">Careers</Link>
                                            </li>
                                            <li>
                                                <Link className="button is-dark is-small" to="/">About Emazon</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="column">
                                        <ul className="footer-list">
                                            <li>
                                                <Link className="button is-dark is-small" to="/">Make Money With Us</Link>
                                            </li>
                                            <li>
                                                <Link className="button is-dark is-small" to="/">Sell on Emazon</Link>
                                            </li>
                                            <li>
                                                <Link className="button is-dark is-small" to="/">Advertise your products</Link>
                                            </li>
                                            <li>
                                                <Link className="button is-dark is-small" to="/">Become an Emazon vendor</Link>
                                            </li>
                                            <li>
                                                <Link className="button is-dark is-small" to="/">Become an Affliate</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="column">
                                        <ul className="footer-list">
                                            <li>
                                                <Link className="button is-dark is-small" to="/">Let Us Help You</Link>
                                            </li>
                                            <li>
                                                <Link className="button is-dark is-small" to="/">Your account</Link>
                                            </li>
                                            <li>
                                                <Link className="button is-dark is-small" to="/">Your orders</Link>
                                            </li>
                                            <li>
                                                <Link className="button is-dark is-small" to="/">Returns and Replacements</Link>
                                            </li>
                                            <li>
                                                <Link className="button is-dark is-small" to="/">Help</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
};

export default Footer;