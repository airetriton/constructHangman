var appexp = require("express"); 
var request = require("request");
var fs = require("fs");

var nodeArg = process.argv;
var args = process.argv[2];
var userInput = process.argv[3];

// print process.argv
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});