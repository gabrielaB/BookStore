import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import validateAuthentication from '../helpers/validateAuthentication';
import logo from '../images/logo3.png';
import { signUp } from '../actions/registration';


const renderField = ({ input, name, type, placeholder, icon, meta: { touched, error } }) => (
    <div className="control has-icons-left has-icons-right">
        <input {...input} type={type} placeholder={placeholder} name={name} className="input is-large" />
        {touched && error && <span className='help is-danger'>{error}</span>}
        {touched && !error && <span className="icon is-small is-right"> <i className="fas fa-check"></i></span>}
        <span className="icon is-small is-left">
            <i className={icon}></i>
        </span>
    </div>
);

export class Register extends Component {
    constructor(props) {
        super(props)

        this.registerSubmit = this.registerSubmit.bind(this);
    };
    /**
     * This method creates a user with registration data values
     * @param {object} values 
     */
    registerSubmit(values) {
        this.props.signUp(values.username, values.email, values.password, values.repeatPassword)
    };

    render() {
        const { handleSubmit } = this.props;
        const registerTemplate = (
            <div>
                <div className="hero is-light is-fullheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="column is-4 is-offset-4 animated rollIn">
                                <h3 className="title has-text-grey">Sign Up</h3>
                                <div className="box">
                                    <div className="avatar">
                                        <img src={logo} alt="brand logo" />
                                    </div>
                                    <form name='regForm' onSubmit={handleSubmit(this.registerSubmit)}>
                                        <div className="field">
                                            <Field component={renderField} type="text" placeholder="Your Name" name='username' icon="fas fa-user" />
                                        </div>
                                        <div className="field">
                                            <Field component={renderField} type="text" placeholder="Enter your email" name='email' icon="fas fa-envelope" />
                                        </div>
                                        <div className="field">
                                            <Field component={renderField} type="password" placeholder="Enter your password" name='password' icon="fas fa-key" />
                                        </div>
                                        <div className="field">
                                            <Field component={renderField} type="password" placeholder="Repeat your password" name='repeatPassword' icon="fas fa-key" />
                                        </div>
                                        <button type='submit' className="button is-block is-info is-large sign-button">Sign Up</button>
                                        {<p className={`help ${this.props.register.success ? 'is-success' : 'is-danger'}`}>{this.props.register.message}</p>}
                                    </form>
                                </div>
                                <div className="infoPart has-text-grey">
                                    <p className="has-text-grey">Have an account</p>
                                    <Link to="/login" className='button is-info'>Log in</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        if (localStorage.getItem('user')) {
            return <Redirect to='/' />;
        } else {
            return registerTemplate;
        };
    };
}

const mapStateToProps = ({ register }) => ({ register });

export default compose(
    connect(
        mapStateToProps,
        { signUp }
    ),
    reduxForm({
        form: 'registerForm',
        validate: validateAuthentication
    })
)(Register);
