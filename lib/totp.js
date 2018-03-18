'use strict';

const hotp = require('./hotp');

class totp {
  constructor(config) {
    this.config = config;
  }
  gen(key, opt) {
    opt = opt || {};
    const period = opt.period || opt.time || this.config.period || 30;
    const _t = new Date().getTime();
    opt.counter = Math.floor((_t / 1000) / period);

    return hotp.gen(key, opt);
  }
  verify(token, key, opt) {
    opt = opt || {};
    const period = opt.period || opt.time || this.config.period || 30;
    const _t = new Date().getTime();
    opt.counter = Math.floor((_t / 1000) / period);

    return hotp.verify(token, key, opt);
  }
}

module.exports = totp;
