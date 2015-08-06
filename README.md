# ghost-publisher
[![NPM version](https://badge.fury.io/js/ghost-publisher.svg)](http://badge.fury.io/js/ghost-publisher)

Publish drafts with `published_at` > current datetime

## WARNING

This package is really really unreliable! I don't recomment you using it. It's
using a very brute force method to do it's job currently and it's not what you
want to use in production! Please keep this in mind.

I'm still working on better approach and will update this package as soon as
I come up with something.

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

## Pitfalls

Please note that as of Ghost `v0.6.4` you cannot set future `published_at`
value.

The dirty fix is to open `/path/to/ghost/blog/core/built/assets/ghost.js` and remove these lines:

```
if (newPublishedAt.diff(new Date(), "h") > 0) {
  errMessage = "Published Date cannot currently be in the future.";
}
```

Same piece of logic should be removed from `/path/to/ghost/blog/core/built/assets/ghost.min.js`

I hope there will be more elegant solution in the future, so do that at your
own risk.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

