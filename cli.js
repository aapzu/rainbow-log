#!/usr/bin/env node

const log = require('./index')

const argv = require('yargs')
    .usage('Usage: rainbow-log [message]')
    .help('h')
    .alias('h', 'help')
    .epilog('carefully handcrafted by aapzu')
    .argv

const text = argv._

log(text)
