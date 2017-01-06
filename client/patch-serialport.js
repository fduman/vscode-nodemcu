var fs = require('fs')
var someFile = 'node_modules/serialport/lib/bindings.js';

fs.readFile(someFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  var result = data.replace(/var\s+bindings\s*=\s*require\s*\(\s*["'`]bindings["'`]\s*\)\s*\(\s*["'`]serialport.node["'`]\s*\)/g, 
                                'var bindings = require(`../../../bin/${process.platform}/${process.arch}/serialport.node`)');

  fs.writeFile(someFile, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});


