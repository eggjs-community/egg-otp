# egg-otp

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-otp.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-otp
[travis-image]: https://img.shields.io/travis/eggjs-community/egg-opt.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs-community/egg-opt
[download-image]: https://img.shields.io/npm/dm/egg-otp.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-otp

One time password plugin for eggjs.

## Install

```bash
$ npm i egg-otp --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.otp = {
  enable: true,
  package: 'egg-otp',
};
```

## Configuration

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
