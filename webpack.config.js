var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var AutoPrefixer = require('autoprefixer');
var AutoReset = require('postcss-autoreset');

module.exports = {
    //devtool: 'source-map',
    entry: {
        index: "./js/index.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            "react": "react/lib/React.js",
            "react-dom": "react-dom/dist/react-dom.js",
            "common.css": '../css/common.css'
        }
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
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!cssnext-loader")
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
        ],
        noParse: []   //忽略对已知文件的解析
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        // new UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.OccurenceOrderPlugin()
    ],
    postcss: [AutoPrefixer, AutoReset({reset: {
      margin: 0,
      padding: 0
    }})],
    externals: {} //申明一个外部依赖，比如使用公用 CDN
};
