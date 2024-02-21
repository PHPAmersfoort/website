const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './assets/main.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
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
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'logos/[name].[contenthash][ext]'
                },
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
                    },
                ],
            }
        ]
    }
}
