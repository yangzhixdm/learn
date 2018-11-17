const webpack = require('webpack');
const path = require('path');

console.log('dd');

module.exports = {
    entry: {
        app: './src/app.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',//发布目录，webpack-dev-server发布到此，但是不会生成文件
        filename: '[name].min.js'
    },

    devServer: {
        port: 9001,
        proxy: {
            '/comments': {//正则匹配
                target: 'https://m.weibo.cn',   //转换到的目标地址
                changeOrigin: true, //是否替换origin
                headers: {
                    'content-type': 'application/json',
                    'Cookie': 'xxx' //携带cookie
                }
            }
        },
        historyApiFallback: true
    }
}