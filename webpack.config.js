'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: [path.join(__dirname, '/app/js/index.js')],
    output: {
        path: path.join(__dirname, '/app/build/'),
        filename: 'app.js',
        publicPath: '/build/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "app/"),
        compress: true,
        port: 3000,
        inline: true,
        hot: true,
        open: true,
        stats: 'errors-only',
        historyApiFallback: true,
        watchOptions: {
            ignored: /node_modules/,
            aggregateTimeout: 300,
            poll: 1000
        }
    }
};
