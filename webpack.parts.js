const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const openBrowser = require('react-dev-utils/openBrowser');
// const GitRevisionPlugin = require('git-revision-webpack-plugin');
// const gitRevisionPlugin = new GitRevisionPlugin({
//   lightweightTags: true
// });
const { devMode } = require('./config');

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    // stats: {
    //   errors: true,
    //   warnings: false
    // },
    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: options.host || "0.0.0.0";
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host: host || 'localhost', // Defaults to `localhost`
    port: port || 8088, // Defaults to 8088
    // contentBase: path.join(__dirname, "/dist"),
    // writeToDisk: true,
    overlay: {
      errors: true,
      warnings: true
    },
    watchOptions: {
      // Delay the rebuild after the first change
      aggregateTimeout: 300,

      // Poll using interval (in ms, accepts boolean too)
      poll: 1000,
    },
    // open: true,
    // TODO: webpack-dev-server will integrate this feature later
    after: () => { openBrowser(`http://localhost:${port || 8088}`); }
  }
});


exports.loadJavaScript = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        use: [
          {
            loader: 'babel-loader',
            options
          }
        ]
      },
    ]
  }
});

exports.loadCSS = ({ include, exclude, use = [] } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,
        use: [
          'style-loader', 
          'css-loader?importLoaders=1',
        ].concat(use)
      }
    ]
  }
});

exports.extractCSS = ({include, exclude, use = []}) => {
  // Output extracted CSS to a file
  const plugin = new MiniCssExtractPlugin({
    filename: devMode ? '[name].css' : '[name].[contenthash].css', // long term caching
    chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
    ignoreOrder: true, // Enable to remove warnings about conflicting order
  });

  const prodOptions = {
    esModule: true,
    modules: {
      namedExport: true,
    },
    publicPath: '',
    // publicPath: (resourcePath, context) => {
    //   return path.relative(path.dirname(resourcePath), context) + '/';
    // },
  };

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: devMode ? {} : prodOptions,
            },
          ].concat(use)
        }
      ]
    },
    plugins: [plugin]
  };

};

exports.autoprefix = () => ({
  loader: 'postcss-loader',
  options: {
    plugins: () => [
      require('autoprefixer')()
    ]
  }
});

exports.purifyCSS = ({ paths }) => ({
  plugins: [new PurgecssPlugin({
    paths,
    only: ['bundle', 'vendor'],
    minify: true,
  })],
});

exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      // {
      //   test: /\.(gif|png|jpe?g|svg)$/i,
      //   include,
      //   exclude,
      //   use: [
      //     { 
      //       loader: 'url-loader',
      //       options
      //     },
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         disable: true, // webpack@2.x and newer
      //       },
      //     }
      //   ]
      // },

      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/[hash][ext][query]'
        }
      }
    ]
  }
});



exports.loadFonts = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      // {
      //   // Match woff2 in addition to patterns like .woff?v=1.1.1.
      //   test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      //   include,
      //   exclude,
      //   use: [
      //     // {
      //     //   loader: 'url-loader',
      //     //   options: {
      //     //     // Limit at 50k. Above that it emits separate files
      //     //     // limit: 50000,
          
      //     //     // url-loader sets mimetype if it's passed.
      //     //     // Without this it derives it from the file extension
      //     //     // mimetype: 'application/font-woff',
          
      //     //     name: './fonts/[name].[ext]'
      //     //   }
      //     // },
      //     { // TODO: remove, cos url-loader default fallback is file-loader
      //       loader: 'file-loader',
      //       options
      //     }
      //   ]
      // },

      {
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
      },
    ]
  }
});

// const bundleVersion = `${gitRevisionPlugin.version()} (${new Date().toISOString().substr(0, 10)})`; 
// const bundleVersion = `${gitRevisionPlugin.version()}`; 
const bundleVersion = `v${process.env.npm_package_version}`; 
exports.attachRevision = () => ({
  plugins: [
    // gitRevisionPlugin,
    new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(bundleVersion),
      // 'process.env.VERSION': JSON.stringify(`v${pkg.version}-${gitRevisionPlugin.version()}`),
    }),
  ]
});
