module.exports = {

    entry: {
        app: './app.js'
    },

    output: {
        filename: '[name].min.js'
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                //use: 'babel-loader',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {
                                targets: {
                                    browsers: ['> 1%', 'last 2 versions']
                                    //chrome: 52
                                }
                            }]
                        ]
                    }
                },
                exclude: '/node_modules/'
            }
        ]
    }
}