var rollup = require('rollup');
var babel = require('rollup-plugin-babel');

rollup.rollup({
  // entry file
  entry: 'src/index.js',
  plugins: [
    babel()
  ]
}).then(function (bundle) {
  console.log('build: ' + new Date());
  // CommonJS
  bundle.write({
    format: 'cjs',
    dest: 'build/index.js'
  });
}).catch(function (e) {
  console.log(e);
});







