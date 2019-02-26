const { realpathSync } = require('fs');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
<% if (pwa) { %>
const { GenerateSW } = require('workbox-webpack-plugin');
<% } %>

const webpack = require('webpack');

const appDirectory = realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  entry: ['normalize.css', '@babel/polyfill', './src/index.tsx'],
  output: {
    filename: 'bundle-[hash:6].js',
    path: resolveApp('build'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: resolveApp('babel.config.js'),
          },
        },
        include: resolveApp('src'),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /i18n\.(yml|yaml)$/,
        loader: path.join(resolveApp('config'), 'webpack', 'loaders', 'i18n-locales.js'),
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'i18n-locales': require.resolve(path.join(resolveApp('config'), 'webpack', 'loaders', 'i18n.yml')),
    },
  },
  devServer: {
    contentBase: [resolveApp('public')],
    publicPath: path.resolve('/'),
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  plugins: [
    new CleanWebpackPlugin([resolveApp('build')]),
    new HtmlWebpackPlugin({
      title: '<%= app_name %>',
      template: 'public/index.html',
    }),
    new CopyWebpackPlugin([{ from: 'public/*.*', to: '', flatten: true }]),
  ],
  mode: process.env.NODE_ENV,
};
