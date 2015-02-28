module.exports = {
    entry: "./src/App.jsx",
    output: {
        path: __dirname + '/www/static/build/',
        filename: "bundle.js",
        publicPath: "static/build/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: "style!css!less"},

            { test: /\.jsx$/, loader: "react-hot!traceur?sourceMaps&runtime!jshint!jsx", exclude: [/node_modules\/material-ui/]},
            { test: /\.jsx$/, loader: "jsx?harmony", include: [/node_modules\/material-ui/]},

            { test: /\.js$/, loader: "jshint!traceur?sourceMaps&runtime", exclude: [/node_modules/, /www/] },

            { test: /\.json$/, loader: "json"}
        ]
    },
    jshint: require('./webpack.jshint.json')
};