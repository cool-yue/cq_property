const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: path.resolve(__dirname, "../main.js"),
    output: {
        filename: "main.[hash:7].js",
        chunkFilename: '[name].[hash:7].js',
        path: path.resolve(__dirname, "../dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    esModule: false
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            favicon: path.resolve('favicon.ico')
        }),
        new MiniCssExtractPlugin({
            filename:"[name].[hash:7].css"
        })
    ],
    resolve: {
        extensions: ['.vue', '.js'],
        mainFiles: ['index'],
        alias: {
            "@compos": path.resolve(__dirname, "../src/components"),
            "@config_management": path.resolve(__dirname, "../src/components/business/config_management")
        }
    }
};