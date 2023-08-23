#!/usr/bin/env node

import { shortenUrl, type ShorteningService } from './index';

const argv = require('yargs/yargs')(process.argv.slice(2))
  .usage('Usage: $0 <url> [service]')
  .command('$0 <url> [service]', 'shorten the given URL using the specified service', {
    url: {
      description: 'the URL to shorten',
      type: 'string',
    },
    service: {
      description: 'the service to use for shortening (1pt, cleanuri, isgd, shrtcode)',
      type: 'string',
      default: 'isgd',
    },
  })
  .help()
  .alias('help', 'h')
  .argv;

const url: string = argv.url;
const service: ShorteningService = argv.service;

shortenUrl(url, service)
  .then(shortenedUrl => {
    console.log(`Shortened URL: ${shortenedUrl}`);
  })
  .catch(error => {
    console.error(`An error occurred: ${error.message}`);
  });
