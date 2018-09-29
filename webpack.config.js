const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    entry: path.resolve(__dirname,'src','main.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name]-bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            { test: /\.js$/,exclude: /node_modules/, loader: "babel-loader" },
            { 
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "POST_APP",
            template: path.resolve(__dirname,'src','template.ejs') 
        })
    ],
    devtool: 'source-map'
}

module.exports = config;