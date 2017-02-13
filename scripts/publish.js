/**
 * Created by dachao.chen on 2/13/2017.
 */

var ghpages = require('gh-pages');
var path = require('path');


ghpages.publish(path.join(__dirname, 'dist'), function (err) {
  if (err) throw err;
});

console.log('done');





