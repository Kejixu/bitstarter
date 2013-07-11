var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var infile = "index.html";
var text = fs.readFile(infile).toString;
app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
