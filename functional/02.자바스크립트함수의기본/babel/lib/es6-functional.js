"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var forEach = function forEach(array, fn) {
  var i;

  for (i = 0; i < array.length; i++) {
    fn(array[i]);
  }
};

var _default = forEach;
exports["default"] = _default;