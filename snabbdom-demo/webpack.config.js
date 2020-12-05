const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: "cheap-source-map",
    entry: {
        app: './src/app.js'
    },

    output: {
        filename: "[name].min.js",
        path: path.resolve(path.join(__dirname, '/dist'))
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    }
}