'use strict';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Template from './components/template';
import Albums from './components/albums';
import Photos from './components/photos';
import PhotoDetails from './components/photo';
import Wishlist from './components/wishlist';

class Home extends React.Component {
    render() {
        return(
            <Router>
                <Template>
                    <Route exact path="/" component={Albums} />
                    <Route path="/photos/:id" component={Photos} />
                    <Route path="/photo/:id" component={PhotoDetails} />
                    <Route path="/wishlist" component={Wishlist} />
                </Template>
            </Router>
        )
    }
};

ReactDOM.render(
    <Home />,
    document.getElementById('app')
);
