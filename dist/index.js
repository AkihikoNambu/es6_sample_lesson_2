'use strict';

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _dogList = require('./lib/dogList');

var _dogList2 = _interopRequireDefault(_dogList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEntered = function isEntered(answers) {
  return answers.isEnter;
};
// relative path
// import npm packages


var questions = [{ type: 'confirm', name: 'isEnter', message: 'ワンちゃんの情報を見ますか？' }, { when: isEntered, type: 'list', name: 'dog', message: 'どのワンちゃんの情報を見ますか？', choices: _dogList2.default }];

// use npm packages
console.log(_chalk2.default.cyan.bold('ペットショップへようこそ！'));
_inquirer2.default.prompt(questions).then(function (answers) {
  console.log('------------------');

  // object destructuring
  var isEnter = answers.isEnter,
      dog = answers.dog;


  isEnter ? dog.info() : console.log('またのお越しをお待ちしております。');
});