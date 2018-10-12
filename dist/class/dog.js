'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animal = require('./animal.js');

var _animal2 = _interopRequireDefault(_animal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dog = function (_Animal) {
  _inherits(Dog, _Animal);

  function Dog(name, age, breed) {
    _classCallCheck(this, Dog);

    var _this = _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this, name, age));

    _this.breed = breed;
    return _this;
  }

  _createClass(Dog, [{
    key: 'info',
    value: function info() {
      // object destructuring
      var name = this.name,
          breed = this.breed,
          age = this.age;

      var humanAge = this.getHumanAge();

      this.greet();
      console.log('\u540D\u524D\u306F' + name + '\u3067\u3059');
      console.log('\u72AC\u7A2E\u306F' + breed + '\u3067\u3059');
      console.log(age + '\u6B73\u3067\u3059');
      console.log('\u4EBA\u9593\u5E74\u9F62\u3067' + humanAge + '\u6B73\u3067\u3059');
    }
  }, {
    key: 'getHumanAge',
    value: function getHumanAge() {
      return this.age * 7;
    }
  }]);

  return Dog;
}(_animal2.default);

exports.default = Dog;