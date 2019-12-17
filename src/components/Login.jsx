import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import validateAuthentication from '../helpers/validateAuthentication';
import { logIn } from '../actions/login';
import logo from '../images/logo3.png';
import { REDIRECT_TO_HOME_PAGE_TIMEOUT } from '../constants/constants';


const renderField = ({ input, name, type, placeholder, icon, meta: { touched, error } }) => (
    <div className="control has-icons-left">
        <input {...input} type={type} placeholder={placeholder} name={name} className="input is-large" />
        {touched && error && <span className='help is-danger'>{error}</span>}
        <span className="icon is-small is-left">
            <i className={icon}></i>
        </span>
    </div>
);

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        };
        this.loginSubmit = this.loginSubmit.bind(this);
    };

    /**
     * Submitting the form with input values
     * @param {Object} values 
     */
    async loginSubmit(values) {
        try {
            await this.props.logIn(values.email, values.password)
        } catch (error) {
            console.log(error);
        };
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
        if (!prevProps.login.isLogged && this.props.login.isLogged) {
            setTimeout(() => {
                this.props.history.push('/');
            }, REDIRECT_TO_HOME_PAGE_TIMEOUT);
        }
    }
    
    render() {
        const { handleSubmit, login } = this.props;
        const loginTemplate = (
            <div>
                <div className="hero is-light is-fullheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="column is-4 is-offset-4 animated rollIn">
                                <h3 className="title has-text-grey">Login</h3>
                                <p className="subtitle has-text-grey">Please login to proceed.</p>
                                <div className="box" >
                                    <div className="avatar">
                                        <img src={logo} alt="brand logo" />
                                    </div>
                                    <form onSubmit={handleSubmit(this.loginSubmit)}>
                                        <div className="field">
                                            <Field component={renderField} type="text" name='email' placeholder="Your Email" icon="fas fa-envelope" />
                                        </div>
                                        <div className="field">
                                            <Field component={renderField} className="input is-large" type="password" name='password' placeholder="Your Password" icon="fas fa-key" />
                                        </div>
                                        <button type='submit' className="button is-block is-info is-large sign-button">Login</button>
                                    </form>
                                    {<p className={`help ${login.isLogged ? 'is-success' : 'is-danger'}`}>{login.message}</p>}
                                </div>
                                <div>
                                    <p className="has-text-grey">Not a member yet ?</p>
                                    <Link to="/register" className='button is-info'>Join us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
        if (localStorage.getItem('user')) {
            return <Redirect to='/' />;
        } else {
            return loginTemplate;
        }
    };
};

const mapStateToProps = ({ login }) => ({ login });

export default compose(
    connect(
        mapStateToProps,
        { logIn }
    ),
    reduxForm({
        form: 'loginForm',
        validate: validateAuthentication
    })
)(Login);
