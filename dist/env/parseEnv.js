"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJsonFromFile = exports.envNumber = exports.env = void 0;
var getJsonFromFile = exports.getJsonFromFile = function getJsonFromFile(path) {
  return require("".concat(process.cwd()).concat(path));
};
var env = exports.env = function env(key) {
  var value = process.env[key];
  if (!value) {
    throw Error("\uD83E\uDDE8 No environment variable found for ".concat(key, " \uD83E\uDDE8"));
  }
  return value;
};
var envNumber = exports.envNumber = function envNumber(key) {
  return Number(env(key));
};