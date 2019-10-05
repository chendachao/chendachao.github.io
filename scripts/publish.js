const ghpages = require('gh-pages');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

console.log(123, GITHUB_TOKEN);

ghpages.publish('dist', {
  branch: 'master',
  // repo: 'https://github.com/chendachao/chendachao.github.io.git',
  repo: `https://${GITHUB_TOKEN}@github.com/chendachao.github.io.git`,
  user: {
    name: 'chendachao',
    email: 'chendachao@outlook.com'
  }
}, function(err) {
  if (err) {
    console.error(err);
  }
  console.log('publish done');
});
