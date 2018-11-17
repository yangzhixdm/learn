
const webpack = require('webpack');

module.exports = {

    entry: {
        app: './app.js',
        vender: ['moduleA']
    },

    output: {
        filename: '[name].min.js'
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env',{
                                targets: ['> 1%', 'last 2 version']
                            }]
                        ]
                    }
                }
            }
        ]
    },

    plugins: [

    ]
}