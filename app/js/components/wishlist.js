'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

class Wishlist extends React.Component {
    constructor() {
        super();
        this.state = {
            photos: []
        }
    }
    componentDidMount() {
        if (typeof(Storage) !== "undefined") {
            let data = JSON.parse(localStorage.getItem("wishlist")),
                photos = <div className="col-sm-12">Empty wishlist</div>;

            if (data !== null) {
                photos = data.map((photo) => {
                    return (
                        <div className="col-sm-6 col-md-4" key={photo.id}>
                            <div className="thumbnail">
                                <div className="caption">
                                    <Link to={`/photo/${photo.id}`}>
                                        <img src={photo.url} className="thumbnail" style={{height: 200, width: '100%', display: 'block'}}/>
                                    </Link>
                                    <h3 style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{photo.title}</h3>
                                    <h3 style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Album Id : {photo.albumId}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            this.setState({photos: photos})
        }
    }
    render() {
        return (
            <div className="row">
                {this.state.photos}
            </div>
        )
    }
};

module.exports = Wishlist;
