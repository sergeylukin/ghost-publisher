# ghost-publisher
[![NPM version](https://badge.fury.io/js/ghost-publisher.svg)](http://badge.fury.io/js/ghost-publisher)

Publish drafts with `published_at` > current datetime

## Installation

    $ npm install -g ghost-publisher

## Usage

    # Publish drafts with expired publish date from production Sqlite3 database
    $ ghost-publisher /path/to/ghost/app

    # Publish drafts from development database
    $ ghost-publisher /path/to/ghost/app --file ghost-dev.db

Alternatively, you can `require('ghost-publisher')` and use it in your own scripts. Example:

    var GhostPublisher = require('ghost-publisher');

    GhostPublisher({
      source: '/path/to/ghost/app',
      file: 'ghost-dev.db'
    });

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

