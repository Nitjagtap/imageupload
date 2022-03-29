// const res = require('express/lib/response');

var fs = require('fs')


async function read(req,res) {
  try {
    fs.readFile('read.txt', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}
//const readFile ='read.txt';


module.exports = read;