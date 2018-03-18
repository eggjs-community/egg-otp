'use strict';

/**
 * egg-otp default config
 * @member Config#otp
 * @property {String} SOME_KEY - some description
 */
exports.otp = {
  algo: 'sha1',
  window: 10,
  period: 30,
  digits: 6,
};
