const webpack = require('webpack');
const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    devtool: "cheap-source-map",
    entry: {
        app: './app.js'
    },

    output: {
        filename: "[name].min.js",
        path: path.resolve(path.join(__dirname, '/dist'))
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader:path.resolve('test-loader'),
                    options: {
                        'dd': 'dd'
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
        //new htmlWebpackPlugin()
    ]
}