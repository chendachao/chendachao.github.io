var ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'master',
  repo: 'https://github.com/chendachao/chendachao.github.io.git'
}, function(err) {
  console.log('publish done');
});
