'use strict';

const hotp = require('./hotp');

class totp {
  constructor(config) {
    this.config = config;
  }
  _getCounter(key, opt) {
    const period = opt.period || opt.time || this.config.period || 30;
    const _t = new Date().getTime();
    return Math.floor((_t / 1000) / period);
  }
  gen(key, opt) {
    opt = opt || {};
    opt.counter = this._getCounter(key.opt);

    return hotp.gen(key, opt);
  }
  verify(token, key, opt) {
    opt = opt || {};
    opt.counter = this._getCounter(key.opt);

    return hotp.verify(token, key, opt);
  }
}

module.exports = totp;
