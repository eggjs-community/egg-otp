'use strict';

const hotp = require('../../lib/hotp');
const totp = require('../../lib/totp');

const crypto = require('crypto');
const b32 = require('thirty-two');

const encode = function(bin) {
  return b32.encode(bin).toString('utf8').replace(/=/g, '');
};

module.exports = {
  otp: {
    get hotp() {
      return hotp;
    },
    get totp() {
      return totp;
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
        + '&algorithm=' + (algo || 'SHA1')
        + '&digits=' + (digits || 6)
        + '&period=' + (period || 30)
      ;
    },
  },
};
