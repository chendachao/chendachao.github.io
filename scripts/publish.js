const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'master',
  repo: 'https://github.com/chendachao/chendachao.github.io.git'
}, function(err) {
  if (err) {
    console.error(err);
  }
  console.log('publish done');
});
