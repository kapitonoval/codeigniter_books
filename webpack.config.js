const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  {
    entry: {
      bandle: './assets/js/app.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              "presets": ["@babel/preset-env"]
            }
          }
        },
        { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },

        {
          test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
          use: "url-loader?limit=100000"
        }
      ],

    },
    plugins: [],
  },
];
