require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const WorkboxPlugin = require('workbox-webpack-plugin');
const merge = require('webpack-merge');
const glob = require('glob-all');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'dist')
};

const commonConfig = merge([
  {
    entry: {
      app: PATHS.app,
      print: './src/print.js'
    },
    output: {
      filename: '[name].[hash:8].bundle.js',
      // filename: '[name].bundle.js',
      path: PATHS.build
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
      }),
      new WorkboxPlugin.GenerateSW({
        // these options encourage the ServiceWorkers to get in there fast
        // and not allow any straggling "old" SWs to hang around
        clientsClaim: true,
        skipWaiting: true
      })
    ]
  }
]);


const productionConfig = merge([
  parts.loadJavaScript({
    include: PATHS.app,
    exclude(path) {
      return path.match(/node_modules/);
    }
  }),
  parts.loadHTML({
    options: {
      minimize: true
    }
  }),
  parts.extractCSS({
    use: ['css-loader', parts.autoprefix()]
  }),
  parts.purifyCSS({
    paths: glob.sync([
      path.join(__dirname, 'src/**/*'),
    ], { nodir: true })
  }),
  parts.loadImages({
    options: {
      name: './img/[name].[hash].[ext]',
      limit: 10000
    }
  }),
]);

const developmentConfig = merge([
  {
    plugins: [
      // new ErrorOverlayPlugin(),
      // Ignore node_modules so CPU usage with poll
      // watching drops significantly.
      new webpack.WatchIgnorePlugin([
        path.join(__dirname, 'node_modules')
      ]),
      new WebpackNotifierPlugin({
        title: 'Webpack'
      }),
    
    ]
  },
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  parts.loadHTML(),
  parts.loadJavaScript(),
  parts.loadCSS(),
  parts.loadImages(),
]);

module.exports = mode => {
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, {mode});
  }
  
  return merge(commonConfig, developmentConfig, {mode});
};

