'use strict';

const HOTP = Symbol('Application#otp#hotp');
const hotp = require('./hotp');
const TOTP = Symbol('Application#otp#totp');
const totp = require('./totp');

const crypto = require('crypto');
const b32 = require('thirty-two');

const encode = function(bin) {
  return b32.encode(bin).toString('utf8').replace(/=/g, '');
};

class otp {
  constructor(config) {
    this.config = config;
  }
  get hotp() {
    if (!this[HOTP]) {
      this[HOTP] = new hotp(this.config);
    }
    return this[HOTP];
  }
  get totp() {
    if (!this[TOTP]) {
      this[TOTP] = new totp(this.config);
    }
    return this[TOTP];
  }
  generateOtpKey() {
    return crypto.randomBytes(20);
  }
  generateOtpUrl({ secret, accountName, issuer, algo, digits, period }) {
    // Full OTPAUTH URI spec as explained at
    // https://github.com/google/google-authenticator/wiki/Key-Uri-Format
    return 'otpauth://totp/'
      + encodeURI(issuer || '') + ':' + encodeURI(accountName || '')
      + '?secret=' + encode(secret)
      + '&issuer=' + encodeURIComponent(issuer || '')
      + '&algorithm=' + (algo || this.config.algo)
      + '&digits=' + (digits || this.config.digits)
      + '&period=' + (period || this.config.period)
    ;
  }
  generateTotpUri(...option) {
    return this.generateOtpUrl(...option);
  }
}

module.exports = otp;
