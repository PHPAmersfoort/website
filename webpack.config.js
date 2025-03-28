const path = require('path');
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './assets/main.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new FaviconsWebpackPlugin({
            logo: './assets/icon.png',
            cache: true,
            prefix: '',
            favicons: {
                icons: {
                    android: false,
                    appleIcon: false,
                    appleStartup: false,
                    coast: false,
                    favicons: true,
                    firefox: false,
                    windows: false,
                    yandex: false,
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[contenthash][ext]'
                },
                oneOf: [
                    {
                        test: /logos/,
                        use: [
                            {
                                loader: "webpack-image-resize-loader",
                                options: {
                                    width: 200,
                                    height: 120,
                                    fit: 'contain',
                                    background: 'transparent',
                                    format: 'png'
                                },
                            }
                        ]
                    },
                    {
                        use: [
                            {
                                loader: "webpack-image-resize-loader",
                                options: {
                                    width: 400,
                                }
                            }
                        ]
                    }
                ],
            }
        ]
    }
}
