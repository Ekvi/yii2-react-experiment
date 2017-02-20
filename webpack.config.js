/*module.exports = {
    entry: './public/app.js',
    output: {
        path:__dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                exclude: /(node_modules)/
            }
        ]
    }
};*/

//const path = require('path');

module.exports = {
    //entry: './public/jsx/',
    //entry: './public/jsx/app.js',
    entry: {
        app: "./frontend/assets/jsx/app.js",
        wiki: "./frontend/assets/jsx/wiki.js",
    },
    output: {
        //path: __dirname + "/public/js",
        path: __dirname + "/frontend/assets/js",
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                exclude: /(node_modules)/
            }
        ]
    }
};
