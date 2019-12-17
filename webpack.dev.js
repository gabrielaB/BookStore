const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const dev = {
    devServer: {
        port: 8081,
        open: true,
        historyApiFallback: true
    },
    plugins: [
        // new BundleAnalyzerPlugin()
    ]
};

module.exports = merge(common, dev);