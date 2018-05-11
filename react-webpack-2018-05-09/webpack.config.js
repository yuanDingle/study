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

            }
        ]
    },

    mode: 'development',
    plugins: [
        new CleanWebpackPlugin(['build']),
        new webpack.HotModuleReplacementPlugin()
    ]
}    