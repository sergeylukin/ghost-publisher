var dateFormat = require('dateformat'),
    fs = require('fs'),
    path = require('path'),
    sqlite3 = require('sqlite3'),
    nodeSql = require('nodesql');

module.exports = function(args, callback) {
  callback = callback || function() {};

  if (args.file === undefined) { args.file = 'ghost.db'; }

  if (!args.source) {
    callback(new Error('No source Ghost app specified'), 0);
  } else if (!fs.existsSync(args.source)) {
    callback(new Error('Source app does not exist'), 0);
  } else {
    var connection = new sqlite3.Database(path.join(args.source, 'content/data/', args.file), function(err, db) {
      if (err) callback(err, 0);
    });
    var db = nodeSql.createSqliteStrategy(connection);
    db.query('SELECT id, slug, published_at FROM posts WHERE status IS "draft" AND datetime(published_at/1000, "unixepoch") < datetime("now");', function (err, rows) {
      if(!err) {
        rows.forEach(function(el, index, arr) {
          db.update('posts', { status: 'published' }, { id: el.id }, function (err) {
            if (err) {
              console.log(err);
            } else {
              console.log("Published post '" + el.slug + "'");
            }
          });
        });
      }
      else {
        console.log("An Error Occured");
        console.log(err);
      }
    });

    connection.close();
  }
};
