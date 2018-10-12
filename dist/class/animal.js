"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
  function Animal(name, age) {
    _classCallCheck(this, Animal);

    this.name = name;
    this.age = age;
  }

  _createClass(Animal, [{
    key: "greet",
    value: function greet() {
      console.log("こんにちは");
    }
  }, {
    key: "info",
    value: function info() {
      this.greet();
      console.log("\u540D\u524D\u306F" + this.name + "\u3067\u3059");
      console.log(this.age + "\u6B73\u3067\u3059");
    }
  }]);

  return Animal;
}();

exports.default = Animal;