const path = require('path');

module.exports = {
    entry: './src/app.js',
    mode: 'production',
    performance: {
        hints: false,
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve('babel-loader')
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.png|jpg|gif$/,
                use: ['file-loader']
            },
            {
                test: /\.svg$/,
                type: "asset/resource"
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        client: {
            overlay: false,
        },
    },
    devtool: "eval-source-map",
};