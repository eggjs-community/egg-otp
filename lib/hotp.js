/* eslint-disable no-bitwise */
'use strict';

const crypto = require('crypto');
const conversion = require('./conversion');

const hotp = {
  /**
   * HOTP一次性密码生成函数
   * @param {String} key 生成一次性密码时所用的key
   * @param {Object} opt 配置参数
   * @return {String} - 生成的一次性密码
   * @todo 载入配置文件
   */
  gen(key, opt) {
    key = key || '';
    opt = opt || {};
    const algo = opt.algo || 'sha1';
    const counter = opt.counter || 0;

    const p = opt.p || 6;

    const b = new Buffer(conversion.intToBytes(counter));

    const hmac = crypto.createHmac(algo, new Buffer(key));

    const digest = hmac.update(b).digest('hex');

    const h = conversion.hexToBytes(digest);

    const offset = h[19] & 0xf;
    const v = ((h[offset] & 0x7f) << 24 |
      (h[offset + 1] & 0xff) << 16 |
      (h[offset + 2] & 0xff) << 8 |
      (h[offset + 3] & 0xff)) + '';
    return v.substr(v.length - p, p);
  },
  /**
   * HOTP 验证函数
   * @param {String} token 用于校验的一次性密码
   * @param {String} key 生成一次性密码时所用的key
   * @param {Object} opt 配置参数
   * @return {Object|null} 包含偏移的对象或空
   */
  verify(token, key, opt) {
    opt = opt || {};
    const window = opt.window || 50;
    const counter = opt.counter || 0;

    for (let i = counter - window; i <= counter + window; ++i) {
      opt.counter = i;
      if (this.gen(key, opt) === token) {
        return { delta: i - counter };
      }
    }
    return null;
  },
};


module.exports = hotp;
