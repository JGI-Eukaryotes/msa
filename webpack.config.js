var path = require('path');
var webpack = require('webpack');
var ROOT_DIR = path.resolve(__dirname, './')

module.exports = {
    mode: 'development',
    entry: path.join(ROOT_DIR, '/src/index.js'),
    output: {
        path: __dirname,
        filename: './dist/main.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {   test: /\.js?$/,
                use: 'babel-loader',
                exclude: path.join(ROOT_DIR, '/node_modules/')
            },
            {   test: /\.css$/,
                use: 'css-loader',
                exclude: path.join(ROOT_DIR, '/node_modules/')
            }
        ],
    },
    devtool: 'eval-source-map',
    resolve: {
      extensions: ['.js', '.css'],
      alias: {
        'bio.io': path.join(ROOT_DIR, '/node_modules/bio.io/src/index.js')
      }
    },
};
