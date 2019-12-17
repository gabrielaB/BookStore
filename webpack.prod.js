const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const prod = {
    plugins: [
        new UglifyJSPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
        // new BundleAnalyzerPlugin()
    ]
};

module.exports = merge(common, prod);
