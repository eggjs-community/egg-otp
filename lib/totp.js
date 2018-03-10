'use strict';

const hotp = require('./hotp');

// TODO 载入配置文件

const totp = {
  gen(key, opt) {
    opt = opt || {};
    const time = opt.time || 30;
    const _t = new Date().getTime();
    opt.counter = Math.floor((_t / 1000) / time);

    return hotp.gen(key, opt);
  },
  verify(token, key, opt) {
    opt = opt || {};
    const time = opt.time || 30;
    const _t = new Date().getTime();
    opt.counter = Math.floor((_t / 1000) / time);

    return hotp.verify(token, key, opt);
  },
};

module.exports = totp;
