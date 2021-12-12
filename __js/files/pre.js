#!/usr/bin/env node
var args = process.argv.slice(2);

var file = args[0];
args.splice(0,1);

var fs = require('fs');
eval(fs.readFileSync(file)+'');
