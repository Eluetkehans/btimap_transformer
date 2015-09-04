'use strict';
var fs = require('fs');

var headerParser = require(__dirname + "/lib/header_parser.js");

var header = {};

fs.readFile(__dirname + '/img/non-palette-bitmap.bmp', callHP); 

function callHP(err, data){
  if(err){
	throw err;
  }
  headerParser(data, header, function(transformer){
  	console.dir(transformer)
  });
};

// headerParser.on('parseDone', function(){
// 	console.log('hey the event emitter works!')
// });






