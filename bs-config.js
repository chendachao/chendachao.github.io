module.exports = function (bs) {
  return {
    injectChanges: false, // workaround for Angular 2 styleUrls loading
    files: ['./build/**/*.{html,htm,css,scss,js,ts}', './src/**/*.{html,css}'],
    watchOptions: {
      ignored: '**/*{node_modules,jspm_packages}/*'  // TODO: I'm not sure this is right or not, https://github.com/johnpapa/lite-server/blob/master/lib/config-defaults.js#L12
    },
    server: {
      baseDir: './'
      // middleware: {
      //   1: require('connect-history-api-fallback')({
      //     index: '/index.html',
      //     verbose: true
      //   })
      // }
    },
    startPath: './build/index.html'
  }
};
