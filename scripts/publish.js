const ghpages = require('gh-pages');

console.log('github.actor', ${github.actor});
console.log('github.repository', ${github.repository});

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const repo = GITHUB_TOKEN ? `https://chendachao:${GITHUB_TOKEN}@github.com/chendachao/chendachao.github.io.git` : 'https://github.com/chendachao/chendachao.github.io.git';
const user = GITHUB_TOKEN ? {
  name: 'chendachao',
  email: 'chendachao@users.noreply.github.com'
} : null;

ghpages.publish('dist', {
  branch: 'master',
  repo,
  user
}, function(err) {
  if (err) {
    console.error(err);
  }
  console.log('publish done');
});
