var fs = require('fs')
var someFile = 'node_modules/ng-contextmenu/dist/ng-contextmenu.min.js';

fs.readFile(someFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  var result = data.replace(/\.pageX/g, '.clientX').replace(/\.pageY/g, '.clientY');

  fs.writeFile(someFile, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});