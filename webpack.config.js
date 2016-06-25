const webpack = require('webpack');

module.exports = {

    entry: './public/src/app.js',
    output: {
        path: './public/lib/',
        filename: 'source.js'
    },
    module: {

        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],

    watch: true
};
