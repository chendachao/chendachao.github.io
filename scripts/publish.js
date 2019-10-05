const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'master',
  // repo: 'https://github.com/chendachao/chendachao.github.io.git',
  repo: 'https://$GITHUB_TOKEN@github.com/chendachao/stone.git',
}, function(err) {
  if (err) {
    console.error(err);
  }
  console.log('publish done');
});
