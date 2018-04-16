'use strict';

const OTP = Symbol('Application#otp');
const otp = require('../../lib/otp');

module.exports = {
  get otp() {
    if (!this[OTP]) {
      this[OTP] = new otp(this.config.otp);
    }
    return this[OTP];
  },
};
