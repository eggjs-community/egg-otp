/* eslint-disable no-bitwise */
'use strict';

/**
 * 将 integer 转换为 byte 数组
 * @param {Number} num - 要操作的数
 * @return {Array} bytes
 */
module.exports.intToBytes = function(num) {
  const bytes = [];
  for (let i = 7; i >= 0; --i) {
    bytes[i] = num & (255);
    num = num >> 8;
  }
  return bytes;
};

/**
 * 将十六进制值转换为 byte 数组
 * @param {String} hex - 要转换的十六进制字符串
 * @return {Array} bytes
 */
module.exports.hexToBytes = function(hex) {
  const bytes = [];
  for (let c = 0; c < hex.length; c += 2) {
    bytes.push(parseInt(hex.substr(c, 2), 16));
  }
  return bytes;
};
