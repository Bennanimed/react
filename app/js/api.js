'use strict';

let baseApiUrl = 'https://jsonplaceholder.typicode.com';

var fetchApi = (url) => {
    return fetch(url)
        .then(response => response.json())
        // Catch errors
        .catch(error => error)
}

var api = {
    getAlbums() {
        // Api : get all albums
        let URL = `${baseApiUrl}/albums`;

        return fetchApi(URL);
    },
    getAlbumPhotos(albumId) {
        let URL = `${baseApiUrl}/photos`;

        if (albumId) {
            // Api : get album photos by album-id
            URL = `${URL}?albumId=${albumId}`;
        }
        return fetchApi(URL);
    },
    getPhotoDetails(photoId) {
        if (photoId) {
            let URL = `${baseApiUrl}/photos/${photoId}`;

            return fetchApi(URL);
        }
    }
};

module.exports = api;
