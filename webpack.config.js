require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const { GenerateSW, InjectManifest } = require('workbox-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
      app: ['@babel/polyfill', PATHS.app],
      // print: './src/print.js',
      // install: './src/install.js',
      vendor: [
        'bowser',
        'dialog-polyfill',
        'intro.js',
        'qrcode',
        'tippy.js',
      ]
    },
    output: {
      filename: '[name].[contenthash].bundle.js',
      // filename: '[name].[hash:8].bundle.js',
      // filename: '[name].bundle.js',
      path: PATHS.build
    },
    resolve: {
      extensions: [".ts", ".js", 'css', 'scss'],
      symlinks: false
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        // cacheGroups: {
        //   vendor: {
        //     name: 'vendor',
        //     test: 'vendor',
        //     chunks: 'all',
        //     enforce: true
        //   },
        // }
      },
      runtimeChunk: 'single',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
      }),
      new CopyWebpackPlugin([
        {from: 'src/manifest.json'},
        {from: 'src/favicon.ico'},
        {from: 'src/robots.txt'},
        {from: 'src/assets/images/icons', to: 'images/icons'},
        {
          from: 'node_modules/sw-offline-google-analytics/build/importScripts/sw-offline-google-analytics.prod.v0.0.25.js',
          to: 'sw-offline-google-analytics.js'
        },
      ]),
      // new GenerateSW({
      //   // these options encourage the ServiceWorkers to get in there fast
      //   // and not allow any straggling "old" SWs to hang around
      //   clientsClaim: true,
      //   skipWaiting: true,
      //   importWorkboxFrom: 'local',
      //   swDest: 'sw.js'
      // }),
      new InjectManifest({
        swSrc: './src/sw.js',
        importWorkboxFrom: 'local',
        // importWorkboxFrom: isProduction ? 'local' : 'cdn'
        // globDirectory: '.',
        // globIgnores: ['dist/*.map', 'dist/manifest.json', 'dist/*.config'],
        // globPatterns: ['dist/*.{js,png,php,css}', 'dist/img/*.{png,jpg,jpeg}', 'dist/fonts/*'],
      })
    ]
  },
  parts.loadFonts({
    options: {
      name: './fonts/[name].[ext]'
    }
  })
]);


const productionConfig = merge([
  {
    optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
      new CompressionPlugin()
    ]
  },
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
  parts.purifyCSS({
    paths: glob.sync([
      path.join(__dirname, 'src/**/*'),
    ], { nodir: true })
  }),
  parts.extractCSS({
    use: ['css-loader', parts.autoprefix()]
  }),
  parts.loadImages({
    options: {
      name: './images/[name].[contenthash].[ext]',
      limit: 10000
    },
    exclude: path.join(__dirname, 'src/assets/images/icons/*'),
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
  // parts.loadCSS(),
  parts.extractCSS({
    use: ['css-loader', parts.autoprefix()]
  }),
  parts.loadImages(),
]);

module.exports = mode => {
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, {mode});
  }
  
  return merge(commonConfig, developmentConfig, {mode});
};

