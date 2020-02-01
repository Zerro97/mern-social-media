const webpack = require('webpack');
const path = require('path');

const config = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
       path: path.resolve(__dirname, 'output'),
       filename: 'bundle.js'
    },
    resolve: {
       extensions: ['.js', '.jsx']
    },
    module: {
       rules: [
          {
              test: /\.jsx/,
              use: {
                 loader: 'babel-loader',
                 options: { presets: ['@babel/preset-react', '@babel/preset-env'] }
              }
          },
          {
             test: /\.scss/,
             use: ['style-loader', 'css-loader', 'postcss-lodaer', 'sass-loader'] // Note that postcss loader must come before sass-loader
          }
       ]
    }
};

module.exports = {
    plugins: [require('autoprefixer')]
};