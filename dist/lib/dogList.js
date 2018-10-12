'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dog = require('../class/dog');

var _dog2 = _interopRequireDefault(_dog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dog1 = new _dog2.default('レオ', 4, 'チワワ');
var dog2 = new _dog2.default('モコ', 1, 'チワワ');
var dog3 = new _dog2.default('ベン', 3, 'プードル');
var dog4 = new _dog2.default('ケン', 2, 'チワワ');

var dogList = [{ name: 'レオ', value: dog1 }, { name: 'モコ', value: dog2 }, { name: 'ベン', value: dog3 }, { name: 'ケン', value: dog4 }];

exports.default = dogList;