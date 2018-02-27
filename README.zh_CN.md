# egg-otp

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-otp.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-otp
[travis-image]: https://img.shields.io/travis/eggjs/egg-otp.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-otp
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-otp.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-otp?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-otp.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-otp
[snyk-image]: https://snyk.io/test/npm/egg-otp/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-otp
[download-image]: https://img.shields.io/npm/dm/egg-otp.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-otp

基于hotp和totp的 one time password 支持插件

## 开启插件

```js
// config/plugin.js
exports.otp = {
  enable: true,
  package: 'egg-otp',
};
```

## 使用场景

- Why and What: 描述为什么会有这个插件，它主要在完成一件什么事情。
尽可能描述详细。
- How: 描述这个插件是怎样使用的，具体的示例代码，甚至提供一个完整的示例，并给出链接。

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
