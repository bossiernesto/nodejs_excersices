var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, 'utf-8' , function (err, contents) {
  var newline_count = contents.split('\n').length - 1
  console.log(newline_count)
})
