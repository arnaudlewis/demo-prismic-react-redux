const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./config/paths');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: paths.appIndexJs,
    output: {
        path: paths.appBuild,
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    resolve: {
        extensions: ['', '.scss', '.css', '.js', '.json'],
        modulesDirectories: [
            paths.appNodeModules,
            paths.appSrc
        ]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
            },
            {
                test: /\.css$/,
                loader: 'style!css!postcss'
            },
            // Font Definitions
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    postcss: [autoprefixer],
    plugins: [
        new ExtractTextPlugin(
            'bundle.css',
            {
                allChunks: true
            }
        ),
        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
        }),
    ]
}