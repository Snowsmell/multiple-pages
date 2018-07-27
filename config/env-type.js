'use strict'
const argv = require('yargs').argv

const type = {
  'dev': '"dev"',
  'test': '"test"',
  'prod': '"prod"'
}

module.exports = argv.env ? type[argv.env._type] : '""'
