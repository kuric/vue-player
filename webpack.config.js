const HtmlWebpackPlugin = require('html-webpack-plugin');
const VuelLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader'},
            {test: /\.vue$/, use: 'vue-loader'},
            {test: /\.css$/, use: 'vue-style-loader'},
        ]
    },
    devServer: {
        open: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new VuelLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}