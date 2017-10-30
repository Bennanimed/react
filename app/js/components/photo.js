'use strict';

import React from 'react';
import api from '../api';
import { Link } from 'react-router-dom';
import { uniqBy } from 'lodash';

class PhotoDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            photo: ''
        }
    }
    componentDidMount() {
        let photoId = this.props.match.params.id;

        api.getPhotoDetails(photoId).then(data => {
            this.setState({photo: data})
        })
    }
    addToWishlist(photo) {
        if (typeof(Storage) !== "undefined") {
            let wishlist = JSON.parse(localStorage.getItem("wishlist"));

            if (wishlist == null) {
                wishlist = [];
            }
            wishlist.push(photo);
            localStorage.setItem('wishlist', JSON.stringify(uniqBy(wishlist, 'id')));
        }
    }
    render() {
        return (
            <div className="jumbotron">
                <div className="media">
                    <div className="media-left">
                        <img className="media-object" src={ this.state.photo.thumbnailUrl } alt="{ this.state.photo.title }" />
                    </div>
                    <div className="media-body">
                        <h2 className="media-heading">{ this.state.photo.title }</h2>
                        <p><a className="btn btn-primary btn-lg" onClick={() => this.addToWishlist(this.state.photo) } role="button">Add To Wishlist</a></p>
                    </div>
                </div>
            </div>
        )
    }
};

module.exports = PhotoDetails;
