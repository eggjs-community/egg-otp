'use strict';

const HOTP = Symbol('Application#otp#hotp');
const hotp = require('../../lib/hotp');
const TOTP = Symbol('Application#otp#totp');
const totp = require('../../lib/totp');

const OTP = Symbol('Application#otp');

const crypto = require('crypto');
const b32 = require('thirty-two');

const encode = function(bin) {
  return b32.encode(bin).toString('utf8').replace(/=/g, '');
};

// eslint-disable-next-line no-unused-vars
function otp(config) {
  this.config = config;
  return {
    get hotp() {
      if (!this[HOTP]) {
        this[HOTP] = new hotp(config);
      }
      return this[HOTP];
    },
    get totp() {
      if (!this[TOTP]) {
        this[TOTP] = new totp(config);
      }
      return this[TOTP];
    },
    generateOtpKey() {
      return crypto.randomBytes(20);
    },
    generateTotpUri({ secret, accountName, issuer, algo, digits, period }) {
      // Full OTPAUTH URI spec as explained at
      // https://github.com/google/google-authenticator/wiki/Key-Uri-Format
      return 'otpauth://totp/'
        + encodeURI(issuer || '') + ':' + encodeURI(accountName || '')
        + '?secret=' + encode(secret)
        + '&issuer=' + encodeURIComponent(issuer || '')
        + '&algorithm=' + (algo || this.config.algo || 'SHA1')
        + '&digits=' + (digits || this.config.digits || 6)
        + '&period=' + (period || 30)
      ;
    },
  };
}

module.exports = {
  get otp() {
    if (!this[OTP]) {
      this[OTP] = new otp(this.config.otp);
    }
    return this[OTP];
  },
};
