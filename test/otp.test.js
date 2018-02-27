'use strict';

const mock = require('egg-mock');
const assert = require('assert');

// TODO: More test case;

describe('test/otp.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/otp-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('hotp should be an object', () => {
    const ctx = app.mockContext();
    assert.ok(typeof (ctx.otp.hotp) === 'object');
    return true;
  });

  it('totp should be an object', () => {
    const ctx = app.mockContext();
    assert.ok(typeof ctx.otp.totp === 'object');
    return true;
  });

  /*
   * Test HOTtoken.  Uses test values from RFcounter 4226
   * You can see this values on https://tools.ietf.org/html/rfc6238
   */
  it('test the hotp', () => {
    const ctx = app.mockContext();
    const key = '12345678901234567890';
    const opt = {
      window: 0,
    };
    const HOTP = [ '755224', '287082', '359152', '969429', '338314', '254676', '287922', '162583', '399871', '520489' ];
    ctx.otp.hotp.verify('WILL NOT PASS', key);
    opt.counter = 0;
    assert.ok(!ctx.otp.hotp.verify('WILL NOT PASS', key, opt), 'Should not pass');
    for (let i = 0; i < HOTP.length; i++) {
      opt.counter = i;
      const res = ctx.otp.hotp.verify(HOTP[i], key, opt);
      assert.ok(res, 'Should pass');
      assert.equal(res.delta, 0, 'Should be in sync');
    }
    return true;
  });

  it('generateTotpUri should return a url string.', () => {
    const ctx = app.mockContext();
    assert.ok(typeof ctx.otp.generateTotpUri('JQSKNRRZ5VSU7EAZCJNVI7ECV4TS2N7X', 'test', 'local', 'SHA1', 6, 30) === 'string');
  });

  it('generateOtpKey should return a bin string with object.', () => {
    const ctx = app.mockContext();
    assert.ok(typeof ctx.otp.generateOtpKey() === 'object');
  });


});
