import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
    createStore,
    compose,
    applyMiddleware
} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import Header from './components/Header';
import Footer from './components/Footer';
import dynamicImport from './components/DynamicImport';
import '../node_modules/bulma/css/bulma.css';
import './scss/styles.scss';
import Carousel from './components/Carousel';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));

const App = dynamicImport(() => import('./components/App'));
const Login = dynamicImport(() => import('./components/Login'));
const Register = dynamicImport(() => import('./components/Register'));
const Search = dynamicImport(() => import('./components/Search'));
const AuthorPage = dynamicImport(() => import('./components/AuthorPage'));
const Book = dynamicImport(() => import('./components/Book'));
const UserAccount = dynamicImport(() => import('./components/UserAccount'));
const ShoppingCart = dynamicImport(() => import('./components/ShoppingCart'));

render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={Header} />
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/search" component={Search} />
                <Route path="/authors/:author" component={AuthorPage} />
                <Route path="/books/:book" component={Book} />
                <Route path="/account/:user_id" component={UserAccount} />
                <Route path="/mycart" component={ShoppingCart} />
                <Route path="/carousel" component={Carousel} /> {/* Carousel test path */}   
                <Route path="/" component={Footer} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));
