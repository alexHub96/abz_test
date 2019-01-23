const PurgecssPlugin = require('purgecss-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin');
const glob = require('glob-all');
const path = require('path');

module.exports = {

    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config.plugins.push(
                new PurgecssPlugin({
                    paths: glob.sync([
                        path.join(__dirname, './src/index.html'),
                        path.join(__dirname, './**/*.vue'),
                    ]),
                }),
                new UglifyJsPlugin({
                    test: /\.js(\?.*)?$/i
                }),
                new ImageminPlugin({
                    disable: process.env.NODE_ENV !== 'production', // Disable during development
                    pngquant: {
                        quality: '95-100'
                    }
                })
            )
        }
    },
};
