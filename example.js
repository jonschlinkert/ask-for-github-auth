'use strict';

var ask = require('./');
var argv = require('minimist')(process.argv.slice(2));
var opts = {
  init: argv.i || argv.init,
  force: argv.f || argv.force
};

ask(opts, function (err, creds) {
  if (err) return console.error(err);
  console.log('Credentials:', creds);
});
