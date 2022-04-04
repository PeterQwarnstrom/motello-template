const HtmlWebPackPlugin = require('html-webpack-plugin');

const deps = require('./package.json').dependencies;
module.exports = {
  // output: {
  //   publicPath: 'http://localhost:8001/',
  // },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
  },

  devServer: {
    port: 8011,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(svg)$/,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
};
