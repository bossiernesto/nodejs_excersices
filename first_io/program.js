var fs = require('fs');

var buffer= fs.readFileSync(process.argv[2],'utf-8');
var newline_count = buffer.split('\n').length - 1;

console.log(newline_count);
