# egg-otp

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-otp.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-otp
[travis-image]: https://img.shields.io/travis/eggjs-community/egg-otp.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs-community/egg-otp
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
// {app_root}/controller/home.js
const key = ctx.otp.generateOtpKey();
const token = ctx.otp.hotp.gen(key, {counter: 0});
ctx.otp.hotp.verify(token, key, {counter: 0, window: 10});
```
可以查看 [lib/hotp.js](lib/hotp.js) 与 [lib/totp.js](lib/totp.js) 获得更多的函数说明。


## 使用场景

- Why and What: 描述为什么会有这个插件，它主要在完成一件什么事情。
尽可能描述详细。
- How: 描述这个插件是怎样使用的，具体的示例代码，甚至提供一个完整的示例，并给出链接。

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## License

[MIT](LICENSE)
