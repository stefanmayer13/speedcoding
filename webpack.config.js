var webpack = require("webpack");

module.exports = {
    // Entry point for static analyzer:
    entry: {
        app: './app/App.js',
        react: ["react"]
    },

    output: {
        // Where to put build results when doing production builds:
        // (Server doesn't write to the disk, but this is required.)
        path: __dirname + "/dist",

        // JS filename you're going to use in HTML
        filename: 'app.js',

        // Path you're going to use in HTML
        publicPath: 'dist/scripts/'
    },

    resolve: {
        // Allow to omit extensions when requiring these files
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            // Pass *.jsx files through jsx-loader transform
            { test: /\.js$/, loader: 'jsx' },
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"react", /* filename= */"react.js")
    ]
};