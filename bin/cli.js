#!/usr/bin/env node

var GhostPublisher = require('..'),
    package = require('../package.json'),
    program = require('commander')
      .version(package.version)
      .usage('[options] [source]')
      .option('-f, --file <file>', 'Sqlite3 db file', 'ghost.db');

program.on('--help', function(){
  console.log('  Description:');
  console.log('');
  console.log('    ' + package.description);
  console.log('');
  console.log('  Examples:');
  console.log('');
  console.log('    # Publish draft posts with publish date before current date')
  console.log('    $ ghost-publish /path/to/ghost/app');
  console.log('');
  console.log('    # Publish draft posts with publish date before current date in custom database')
  console.log('    $ ghost-publish /path/to/ghost/app --file ghost.db');
  console.log('');
});

program.parse(process.argv);

var args = {
  source: program.args.shift(),
  file: program.file
};

GhostPublisher(args, function(err, count) {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }
});
