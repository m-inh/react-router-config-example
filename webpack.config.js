const webpack = require('webpack');
const path = require('path');

const indexHtml = path.join(__dirname, 'app', 'index.html');

module.exports = {
  entry: [
    'app/app.js',
    indexHtml
  ],
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      'app'
    ]
  },

  output: {
    path: path.resolve(__dirname, './build/'),
    filename: 'app.bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      {
        test: indexHtml,
        loaders: [
          'file-loader?name=[name].[ext]',
          'extract-loader',
          'html-loader?' + JSON.stringify({attrs: ["img:src", "link:href"]})
        ],
      },
      {
        test: /\.css$/,
        loaders: ['file-loader?name=[name].[ext]', 'extract-loader', 'css-loader'],
      }

    ]
  }
}
