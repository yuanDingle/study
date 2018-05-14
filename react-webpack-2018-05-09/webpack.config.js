/**
 * webpack配置
 */
var path = require('path');
var webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        port: 8182
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }

            },
            //加载css、less样式
            {
                test: /\.(css|less)$/,
                loaders: ['style-loader', 'css-loader','less-loader']
            },
        ]
    },
    
    mode: 'development',
    plugins: [
        //删除上次产生的文件
        new CleanWebpackPlugin([
            'build/*.hot-update.json',
            'build/main.*.js',
            'build/*.hot-update.js']),
        new webpack.HotModuleReplacementPlugin()
    ]
}    