'use strict';

import React from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

class Albums extends React.Component {
    constructor() {
        super();
        this.state = {
            albums: []
        }
    }
    componentDidMount() {
        api.getAlbums().then(data => {
            let albums = data.map((album) => {
                return (
                    <div className="col-sm-6 col-md-4" key={album.id}>
                        <div className="thumbnail">
                            <div className="caption">
                                <img src="../../images/react-js.png" className="thumbnail" style={{height: 200, width: '100%', display: 'block'}}/>
                                <h3 style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}><Link to={`/photos/${album.id}`}>{album.title}</Link></h3>
                            </div>
                        </div>
                    </div>
                )
            })
            this.setState({albums: albums})
        })
    }
    render() {
        return (
            <div className="row">
                {this.state.albums}
            </div>
        )
    }
};

module.exports = Albums;
