const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@wordpress/babel-preset-default'
                        ],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // Injecte le CSS dans le DOM
                    'css-loader',   // Traite les fichiers CSS
                    'sass-loader',  // Compile les fichiers SASS
                ],
            },
            {
                rules: [{ test: /\.svg$/, use: 'svg-loader' }],
            },
            {
                rules: [{ test: /\.css$/, use: 'css-loader' }],
            },
            {
                rules: [{ test: /\.png$/, use: 'file-loader' }],
            },
        ],
    },
}