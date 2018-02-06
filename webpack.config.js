const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "src"),
        compress: true,
        port: 9015
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            hash: true,
            minify: {
                minifyCSS: true,
                minifyJS: true
            }
        })
    ]
}