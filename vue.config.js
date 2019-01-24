const PurgecssPlugin = require('purgecss-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const glob = require('glob-all');
const path = require('path');

var ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {

    pluginOptions: {
        svgSprite: {
            dir: 'src/assets/icons',
            test: /\.(svg)(\?.*)?$/,

            loaderOptions: {
                extract: true,
                spriteFilename: 'img/icons.[hash:8].svg' // or 'img/icons.svg' if filenameHashing == false
            },
            pluginOptions: {
                plainSprite: true
            }
        }
    },

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

                // new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
                new ImageminPlugin({ test: /\.(jpe?g|png|gif)$/i })
            )
        }
    },
};
