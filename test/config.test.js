'use strict';

/*
 * config.test.js: Tests for winston.config
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENSE
 *
 */

const assume = require('assume');
const winston = require('../lib/winston');

describe('winston.config', () => {
  it('should have expected methods', () => {
    assume(winston.config).is.an('object');
    assume(winston.config.addColors).is.a('function');
    assume(winston.config.cli).is.an('object');
    assume(winston.config.npm).is.an('object');
    assume(winston.config.syslog).is.an('object');
  });
});