'use strict';

import React from 'react';
import { NavLink } from 'react-router-dom';

// Stateless Component : Navbar
const Navbar = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li>
                        <NavLink activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/wishlist">Wishlist</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

module.exports = Navbar;
