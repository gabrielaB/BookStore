import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { ADVANCED_SEARCH_OPTIONS } from '../constants/constants';

const renderField = ({ input, name, type, placeholder, icon, meta: { touched, error } }) => (
    <div className="control">
        <input {...input} type={type} placeholder={placeholder} name={name} className="input" />
        {touched && error && <span className='help is-danger'>{error}</span>}
    </div>
);

export class AdvancedSearch extends Component {
    constructor(props) {
        super(props);

        this.searchSubmit = this.searchSubmit.bind(this);
    }

    searchSubmit(values) {
        //test submit
        console.log(values)
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="hero-body">
                <section className="hero is-orange">
                    <div className="hero-body animated rubberBand">
                        <div className="container has-text-centered">
                            <h1 className="title">Advanced search</h1>
                        </div>
                    </div>
                </section>
                <br />
                <form className="advanced-search" onSubmit={handleSubmit(this.searchSubmit)}>
                    {ADVANCED_SEARCH_OPTIONS.map((option) => {
                        return (
                            <div key={option.name} className="field">
                                <label className="label" htmlFor={option.name}>{option.placeholder}</label>
                                <Field component={renderField} type={option.type} placeholder={option.placeholder} name={option.name} />
                            </div>
                        );
                    })}
                    <button className="button is-info" type="submit" >Search</button>
                </form>
            </div>
        );
    };
};

const mapStatetoProps = ({ search }) => ({ search });

export default compose(
    connect(mapStatetoProps),
    reduxForm({
        form: 'searchForm'
    })
)(AdvancedSearch);
