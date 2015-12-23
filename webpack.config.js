var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var AutoPrefixer = require('autoprefixer');
var AutoReset = require('postcss-autoreset');

module.exports = {
    entry: {
        index: "./js/index.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname,
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!cssnext-loader")
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        // new UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ],
    postcss: [AutoPrefixer, AutoReset({reset: {
      margin: 0,
      padding: 0
    }})]
};
