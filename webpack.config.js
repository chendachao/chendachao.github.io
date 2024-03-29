const { config, devMode } = require('./config');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const { GenerateSW, InjectManifest } = require('workbox-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
// const SentryCliPlugin = require('@sentry/webpack-plugin');
const { merge } = require('webpack-merge');
const glob = require('glob-all');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

const cdn = require('./cdn');

const parts = require('./webpack.parts');

const rootPath = process.cwd();
// const rootPath = __dirname;
const resolve = relativePath => path.resolve(rootPath, relativePath);

const PATHS = {
  app: resolve('src'),
  build: resolve('dist'),
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
      svgxuse: ['./src/app/svgxuse.js'], // For IE to load external svg defs
    },
    output: {
      filename: '[name].[contenthash].bundle.js',
      chunkFilename: 'scripts/[name].[contenthash].chunk.js',
      path: PATHS.build,
      publicPath: '',
      // ecmaVersion: 5 // work in webpack 5
      // the following setting is required for SRI to work:
      crossOriginLoading: 'anonymous',
      clean: true,
      assetModuleFilename: 'static/[name].[hash:8].[ext][query]'
    },
    target: devMode ? 'web' : 'browserslist',
    resolve: {
      // preferRelative: true,
      preferAbsolute: true,
      modules: ['node_modules', './src'],
      extensions: ['.ts', '.js', 'css', 'scss'],
      symlinks: false,
      alias: {
        // process: 'process/browser',
        '@app': resolve('./src/app'),
      },
    },
    experiments: {
      topLevelAwait: true,
    },
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      // runtimeChunk: true,
      splitChunks: {
        name: 'scripts/vendor',
        chunks: 'all',
        maxSize: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            filename: '[name].bundle.js',
          },
          commons: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'vendor',
            filename: '[name].bundle.js',
            chunks: 'all',
          },
        },
      },
    },
    cache: {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
      name: 'default-development',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        title: 'Chen Dachao - 陈大超',
        hostname: 'chendachao.netlify.app',
        origin: 'https://chendachao.netlify.app',
        href: 'https://chendachao.netlify.app/',
        meta: {
          'Content-Security-Policy': {
            'http-equiv': 'Content-Security-Policy',
            'content': `
                  default-src 'self';
                  script-src 'self' 'unsafe-inline' 'unsafe-eval' data:
                          larrychen.tech instant.page platform-api.sharethis.com
                          count-server.sharethis.com buttons-config.sharethis.com
                          rf.revolvermaps.com
                          www.google.com www.google.co.kr www.googletagmanager.com
                          www.google-analytics.com stats.g.doubleclick.net *.hotjar.com wss://ws1.hotjar.com
                          wss://ws12.hotjar.com wss://ws16.hotjar.com cdn.jsdelivr.net hm.baidu.com;
                  frame-src 'self' vars.hotjar.com rf.revolvermaps.com;
                  style-src 'self' 'unsafe-inline' cdn.jsdelivr.net;
                  img-src 'self' data: platform-cdn.sharethis.com hm.baidu.com rf.revolvermaps.com;
                  connect-src 'self' larrychen.tech chendachao.github.io chendachao.netlify.app
                              chendachao-github-io-chendachao.vercel.app l.sharethis.com *.ingest.sentry.io/
                              extreme-ip-lookup.com http://ip-api.com/json botd.fpapi.io;
                  font-src 'self' data: fonts.gstatic.com fonts.googleapis.com;
                  form-action 'self';
                  prefetch-src 'self' larrychen.tech;
                  object-src 'none';
                  base-uri 'none';
                  upgrade-insecure-requests;
                  report-to default;
                  `,
                  // script-src 'self' 'strict-dynamic' 'nonce-rAnd0m123' 'unsafe-inline' http: https:;
          },
          // Will generate: <meta http-equiv="Content-Security-Policy" content="default-src https:">
          // Which equals to the following http header: `Content-Security-Policy: default-src https:`
          // 'set-cookie': { 'http-equiv': 'set-cookie', content: 'name=value; expires=date; path=url' },
          // Will generate: <meta http-equiv="set-cookie" content="value; expires=date; path=url">
          // Which equals to the following http header: `set-cookie: value; expires=date; path=url`
        },
        // hash: true,
        minify: !devMode,
        excludeChunks: ['cv', 'stone'],
        cdn,
      }),
      new HtmlWebpackPlugin({
        template: 'src/index-cv.html',
        minify: !devMode,
        filename: 'cv.html',
        chunks: ['cv'],
      }),
      new HtmlWebpackPlugin({
        template: 'src/index-stone.html',
        minify: !devMode,
        filename: 'stone.html',
        chunks: ['stone'],
      }),
      // new ScriptExtHtmlWebpackPlugin({
      //   // inline: inlineBundles, // cause pwa update issue
      //   preload: /^vendors~app.*.chunk.js$/,
      //   custom: {
      //     test: /^vendors~app.*.chunk.js$/,
      //     attribute: 'crossorigin',
      //     value: 'anonymous'
      //   },
      //   defer: [
      //     /^log.*.chunk.js$/,
      //     /^install.*.chunk.js$/,
      //     /^svgxuse.*.chunk.js$/,
      //   ],
      //   // sync: 'first.js',
      //   defaultAttribute: 'async'
      // }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'LICENSE' },
          { from: 'src/site.webmanifest' },
          { from: 'src/robots.txt' },
          { from: 'src/assets', to: 'assets' },
          {
            from: 'node_modules/sw-offline-google-analytics/build/importScripts/sw-offline-google-analytics.prod.v0.0.25.js',
            to: 'sw-offline-google-analytics.js',
          },
        ],
      }),
      new WebpackBar({
        name: '🔥 Larry\'s Homepage',
        color: '#3ce2e2',
        reporter: {
          done(context) {
            // Called when compile finished
            console.log('done');
          }
        }
      }),
      new webpack.ProvidePlugin({
        // Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(config),
      }),
    ],
  },
  parts.loadFonts({
    options: {
      name: './fonts/[name].[ext]',
    },
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
    importScripts: ['assets/sw-patch.js'],
    runtimeCaching: [
      {
        urlPattern: /^\/api\//,
        handler: 'StaleWhileRevalidate',
      },
      {
        urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/npm\//,
        handler: 'StaleWhileRevalidate',
      },
      {
        urlPattern: /\.(?:js|css)$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'js-css-cache',
        },
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
        },
      },
    ],
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
    devtool: 'source-map',
    optimization: {
      minimize: true,
      minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        // `...`,
        // new TerserJSPlugin({
        //   parallel: true,
        //   // terserOptions: {
        //   //   cache: true,
        //   //   sourceMap: true,
        //   // }
        // }),
        new ESBuildMinifyPlugin({
          target: 'es2015', // Syntax to compile to (see options below for possible values)
          css: true,
        }),
        new CssMinimizerPlugin(),
      ],
      splitChunks: {
        name: 'scripts/vendor',
        chunks: 'all',
        minChunks: 1,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            filename: '[name].bundle.js',
          },
          commons: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'vendor',
            filename: '[name].bundle.js',
            chunks: 'all',
          },
        },
      },
      moduleIds: 'hashed',
      runtimeChunk: 'single',
    },
    cache: {
      name: 'default-production',
    },
    externals: {
      jquery: 'jQuery',
      'toastr': 'toastr',
      'dompurify': 'DOMPurify',
      'axios': 'axios',
    },
    plugins: [
      new CompressionPlugin(),
      new SubresourceIntegrityPlugin(),
      new WebpackObfuscator({
        rotateStringArray: true
      }, ['sw.js']), // exclude js file
      // new SentryCliPlugin({
      //   include: './dist',
      //   ignoreFile: '.sentrycliignore',
      //   ignore: ['node_modules', 'webpack.config.js'],
      //   configFile: 'sentry.properties',
      //   dryRun: true,
      //   release: `chendachao.github.io@${process.env.VERSION}-${process.env.GIT_SHA1}`,
      //   project: 'chendachao',
      //   org: 'larrychen',
      //   dist: '123',
      // }),
    ],
  },
  parts.loadJavaScript({
    include: PATHS.app,
    exclude(path) {
      return path.match(/node_modules/);
    },
    cacheDirectory: true,
  }),
  parts.purifyCSS({
    paths: glob.sync([path.join(__dirname, 'src/**/*')], { nodir: true }),
  }),
  parts.extractCSS({
    use: ['css-loader?importLoaders=1', parts.autoprefix()],
  }),
  parts.loadImages({
    options: {
      name: './assets/images/[name].[contenthash].[ext]',
      limit: 10000,
    },
    exclude: path.join(__dirname, 'src/assets/images/icons/*'),
  }),
]);

const developmentConfig = merge([
  {
    entry: {
      // Runtime code for hot module replacement
      hot: 'webpack/hot/dev-server.js',
      // Dev server client for web socket transport, hot and live reload logic
      client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    },
    // devtool: 'source-map',
    // devtool: 'eval-source-map',
    devtool: 'cheap-module-source-map',
    plugins: [
      // new ErrorOverlayPlugin(),
      // Ignore node_modules so CPU usage with poll
      // watching drops significantly.
      new webpack.WatchIgnorePlugin({
        paths: [path.join(__dirname, 'node_modules')],
      }),
      new WebpackNotifierPlugin({
        title: 'Webpack',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  },
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  parts.loadJavaScript(),
  // parts.loadCSS({
  //   use: [parts.autoprefix()]
  // }),
  parts.extractCSS({
    use: [
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: {
            auto: true,
            namedExport: true,
            exportLocalsConvention: 'camelCase',
        }
      },
    },
    parts.autoprefix()],
  }),
  parts.loadImages(),
]);

module.exports = mode => {
  let webpackConfig = merge(commonConfig, developmentConfig, { mode: 'development' }); // development
  if (mode.analyse) {
    commonConfig.plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: true,
      analyzerMode: 'server',
    }));
  }
  if (mode.production) {
    // TODO: workaround for workbox issue https://github.com/GoogleChrome/workbox/issues/1790
    commonConfig.plugins.push(...pwaPlugins);
    webpackConfig = merge(commonConfig, productionConfig, { mode: 'production' });
  }

  return mode.smp ? smp.wrap(webpackConfig) : webpackConfig;
};
