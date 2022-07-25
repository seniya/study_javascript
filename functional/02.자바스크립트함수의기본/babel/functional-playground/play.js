"use strict";

var _es6Functional = _interopRequireDefault(require("../lib/es6-functional.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var array = [1, 2, 3]; //print the console

(0, _es6Functional["default"])(array, function (data) {
  return console.log(data);
}); //double the contents

(0, _es6Functional["default"])(array, function (data) {
  return console.log(2 * data);
});