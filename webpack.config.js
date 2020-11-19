require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const { GenerateSW, InjectManifest } = require('workbox-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {merge} = require('webpack-merge');
const glob = require('glob-all');

const parts = require('./webpack.parts');

const rootPath = process.cwd();
// const rootPath = __dirname;
const resolve = relativePath => path.resolve(rootPath, relativePath);

const PATHS = {
  app: resolve('src'),
  build: resolve('dist')
};

// const inlineBundles = /^(app|runtime).*.bundle.js$/;

const commonConfig = merge([
  {
    entry: {
      app: [PATHS.app],
      log: './src/log.js',
      install: './src/install.js',
      cv: ['./src/index-cv.js'],
      stone: ['./src/index-stone.js'],
    },
    output: {
      filename: '[name].[contenthash].bundle.js',
      // filename: '[name].[hash:8].bundle.js',
      chunkFilename: '[name].[chunkhash].chunk.js',
      path: PATHS.build,
    },
    resolve: {
      extensions: [".ts", ".js", 'css', 'scss'],
      symlinks: false,
      alias: {
        '@app': resolve('./src/app')
      }
    },
    optimization: {
      moduleIds: 'hashed',
      runtimeChunk: 'single',
      // runtimeChunk: true,
      splitChunks: {
        chunks: 'all',
        // cacheGroups: {
        //   vendor: {
        //     test: /[\\/]node_modules[\\/]/,
        //     name: 'vendors',
        //     chunks: 'all',
        //     enforce: true
        //   },
        // }
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        minify: false,
        excludeChunks: ['cv', 'stone']
      }),
      new HtmlWebpackPlugin({
        template: 'src/index-cv.html',
        minify: false,
        filename: 'cv.html',
        chunks: ['cv']
      }),
      new HtmlWebpackPlugin({
        template: 'src/index-stone.html',
        minify: false,
        filename: 'stone.html',
        chunks: ['stone']
      }),
      new ScriptExtHtmlWebpackPlugin({
        // inline: inlineBundles, // cause pwa update issue
        preload: /^vendors~app.*.bundle.js$/,
        custom: {
          test: /^vendors~app.*.bundle.js$/,
          attribute: 'crossorigin',
          value: 'anonymous'
        },
        defer: [
          /^log.*.bundle.js$/,
          /^install.*.bundle.js$/,
        ],
        // sync: 'first.js',
        defaultAttribute: 'async'
      }),
      new webpack.HashedModuleIdsPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {from: 'LICENSE'},
          {from: 'src/site.webmanifest'},
          {from: 'src/robots.txt'},
          {from: 'src/assets', to: 'assets'},
          {
            from: 'node_modules/sw-offline-google-analytics/build/importScripts/sw-offline-google-analytics.prod.v0.0.25.js',
            to: 'sw-offline-google-analytics.js'
          },
        ]
      }),
    ]
  },
  parts.loadFonts({
    options: {
      name: './fonts/[name].[ext]'
    }
  }),
  parts.attachRevision(),
]);

const pwaPlugins = [
  new GenerateSW({
    // and not allow any straggling "old" SWs to hang around
    // these options encourage the ServiceWorkers to get in there fast
    swDest: 'sw.js',
    clientsClaim: true,
    skipWaiting: false,
    // exclude: [inlineBundles],
    cleanupOutdatedCaches: true,
    offlineGoogleAnalytics: {
      parameterOverrides: {
        cd1: 'offline',
      },
    },
    sourcemap: true,
    importScripts: [
      'assets/sw-patch.js'
    ],
    runtimeCaching: [
      {
        urlPattern: /^\/api\//,
        handler: 'StaleWhileRevalidate',
      },
      {
        urlPattern: /\.(?:js|css)$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'js-css-cache',
        }
      },
      {
        urlPattern: /\.(?:png|gif|jpg|jpeg|svg|ico)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 200,
            purgeOnQuotaError: true,
            maxAgeSeconds: 365 * 24 * 60 * 60,
          },
        }
      },
    ]
  }),
  // new InjectManifest({
  //   swSrc: './src/sw.js',
  //   exclude: [inlineBundles],
  //   // globDirectory: '.',
  //   // globIgnores: ['dist/*.map', 'dist/site.webmanifest', 'dist/*.config'],
  //   // globPatterns: ['dist/*.{js,png,php,css}', 'dist/img/*.{png,jpg,jpeg}', 'dist/fonts/*'],
  // })
];

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
      minimize: {
        // minimize: true,
        // minifyJS: true,
        // minifyCSS: true,
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: false
      },
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
    devtool: 'source-map',
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
    // TODO: workaround for workbox issue https://github.com/GoogleChrome/workbox/issues/1790
    commonConfig.plugins.push(...pwaPlugins);
    return merge(commonConfig, productionConfig, {mode});
  } else {
    mode = 'development';
  }
  
  return merge(commonConfig, developmentConfig, {mode});
};

