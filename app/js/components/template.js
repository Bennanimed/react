'use strict';

import React from 'react';
import Navbar from './navigation';

// Stateless Component : Template
const Template = (props) => {
    return(
        <div className="container">
            <div className="row">
                <Navbar />
            </div>
            <div className="row">
                {props.children}
            </div>
        </div>
    )
};

module.exports = Template;
