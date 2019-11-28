const ghpages = require('gh-pages');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const repo = GITHUB_TOKEN ? `https://chendachao:${GITHUB_TOKEN}@github.com/chendachao/chendachao.github.io.git` : 'https://github.com/chendachao/chendachao.github.io.git';

ghpages.publish('dist', {
  branch: 'master',
  repo
}, function(err) {
  if (err) {
    console.error(err);
  }
  console.log('publish done');
});
