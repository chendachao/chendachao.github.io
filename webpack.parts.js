const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: options.host || "0.0.0.0";
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host: process.env.HOST || localhost, // Defaults to `localhost`
    port: process.env.PORT || 8088, // Defaults to 8080
    overlay: {
      errors: true,
      warnings: true
    },
    open: true,
    watchOptions: {
      // Delay the rebuild after the first change
      aggregateTimeout: 300,

      // Poll using interval (in ms, accepts boolean too)
      poll: 1000,
    }
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

exports.loadHTML = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.html$/,
        include,
        exclude,
        use: [
          {
            loader: 'html-loader',
            options
          }
        ]
      },
    ]
  }
});

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,
        use: [
          'style-loader', 'css-loader'
        ]
      }
    ]
  }
});


exports.extractCSS = ({include, exclude, use = []}) => {
  // Output extracted CSS to a file
  const plugin = new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  });

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: [
            MiniCssExtractPlugin.loader
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
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        include,
        exclude,
        use: [
          {
            loader: 'url-loader',
            options
          },
          {
            loader: 'img-loader'
          }
        ]
      }
    ]
  }
});
