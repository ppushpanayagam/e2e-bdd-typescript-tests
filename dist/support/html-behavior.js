"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchWindow = exports.switchIframe = exports.selectElementValue = exports.scrollElementIntoViewAtIndex = exports.scrollElementIntoView = exports.getTitleWithinPage = exports.getTableDataArray = exports.getTableData = exports.getElements = exports.getElementWithOptions = exports.getElementValue = exports.getElementTextAtIndex = exports.getElementText = exports.getElement = exports.elementEnabled = exports.elementDisplayed = exports.elementChecked = exports.clickElementWithText = exports.clickElementAtIndex = exports.clickElement = void 0;
var _seleniumWebdriver = require("selenium-webdriver");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var getElement = exports.getElement = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(driver, elementIdentifier) {
    var element;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return driver.findElement(_seleniumWebdriver.By.css(elementIdentifier));
        case 2:
          element = _context.sent;
          return _context.abrupt("return", element);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getElement(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getElements = exports.getElements = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(driver, elementIdentifier) {
    var elements;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return driver.findElements(_seleniumWebdriver.By.css(elementIdentifier));
        case 2:
          elements = _context2.sent;
          return _context2.abrupt("return", elements);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getElements(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getElementWithOptions = exports.getElementWithOptions = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(driver, elementIdentifier, option) {
    var element;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return driver.findElement(_seleniumWebdriver.By.css("".concat(elementIdentifier, " > option[value=").concat(option, "]")));
        case 2:
          element = _context3.sent;
          return _context3.abrupt("return", element);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getElementWithOptions(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();
var elementDisplayed = exports.elementDisplayed = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(driver, elementIdentifier) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return driver.findElement(_seleniumWebdriver.By.css(elementIdentifier));
        case 3:
          return _context4.abrupt("return", true);
        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", false);
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 6]]);
  }));
  return function elementDisplayed(_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();
var getElementText = exports.getElementText = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(driver, elementIdentifier) {
    var element, elementText;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return getElement(driver, elementIdentifier);
        case 2:
          element = _context5.sent;
          _context5.next = 5;
          return element.getAttribute("innerText");
        case 5:
          elementText = _context5.sent;
          return _context5.abrupt("return", elementText);
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getElementText(_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();
var getElementTextAtIndex = exports.getElementTextAtIndex = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(driver, elementIdentifier, index) {
    var elements, textAtIndex;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return getElements(driver, elementIdentifier);
        case 2:
          elements = _context6.sent;
          _context6.next = 5;
          return elements[index].getText();
        case 5:
          textAtIndex = _context6.sent;
          return _context6.abrupt("return", textAtIndex);
        case 7:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function getElementTextAtIndex(_x12, _x13, _x14) {
    return _ref6.apply(this, arguments);
  };
}();
var clickElement = exports.clickElement = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(driver, elementIdentifier) {
    var element;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return getElement(driver, elementIdentifier);
        case 2:
          element = _context7.sent;
          _context7.next = 5;
          return element.click();
        case 5:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function clickElement(_x15, _x16) {
    return _ref7.apply(this, arguments);
  };
}();
var clickElementAtIndex = exports.clickElementAtIndex = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(driver, elementIdentifier, index) {
    var elements;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return getElements(driver, elementIdentifier);
        case 2:
          elements = _context8.sent;
          _context8.next = 5;
          return elements[index].click();
        case 5:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function clickElementAtIndex(_x17, _x18, _x19) {
    return _ref8.apply(this, arguments);
  };
}();
var clickElementWithText = exports.clickElementWithText = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(driver, elementIdentifier) {
    var element;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return driver.findElement(_seleniumWebdriver.By.xpath(elementIdentifier));
        case 2:
          element = _context9.sent;
          _context9.next = 5;
          return element.click();
        case 5:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function clickElementWithText(_x20, _x21) {
    return _ref9.apply(this, arguments);
  };
}();

// export const inputElementValue = async (
//     driver: WebDriver,
//     elementIdentifier: ElementLocator,
//     inputValue: InputValue,
// ): Promise<void> => {
//     const element = await getElement(driver, elementIdentifier)
//     await element.clear()
//     await element.sendKeys(inputValue)
// }

var selectElementValue = exports.selectElementValue = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(driver, elementIdentifier, option) {
    var element;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return getElementWithOptions(driver, elementIdentifier, option);
        case 2:
          element = _context10.sent;
          _context10.next = 5;
          return element.click();
        case 5:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function selectElementValue(_x22, _x23, _x24) {
    return _ref10.apply(this, arguments);
  };
}();
var elementChecked = exports.elementChecked = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(driver, elementIdentifier) {
    var element;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return getElement(driver, elementIdentifier);
        case 2:
          element = _context11.sent;
          _context11.next = 5;
          return element.isSelected();
        case 5:
          if (_context11.sent) {
            _context11.next = 9;
            break;
          }
          return _context11.abrupt("return", false);
        case 9:
          return _context11.abrupt("return", true);
        case 10:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function elementChecked(_x25, _x26) {
    return _ref11.apply(this, arguments);
  };
}();
var getElementValue = exports.getElementValue = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(driver, elementIdentifier) {
    var element;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return getElement(driver, elementIdentifier);
        case 2:
          element = _context12.sent;
          _context12.next = 5;
          return element.getAttribute('value');
        case 5:
          return _context12.abrupt("return", _context12.sent);
        case 6:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function getElementValue(_x27, _x28) {
    return _ref12.apply(this, arguments);
  };
}();
var scrollElementIntoView = exports.scrollElementIntoView = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(driver, elementIdentifier) {
    var element;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return getElement(driver, elementIdentifier);
        case 2:
          element = _context13.sent;
          _context13.next = 5;
          return driver.executeScript("arguments[0].scrollIntoView(false)", element);
        case 5:
          _context13.next = 7;
          return driver.sleep(1500);
        case 7:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function scrollElementIntoView(_x29, _x30) {
    return _ref13.apply(this, arguments);
  };
}();
var scrollElementIntoViewAtIndex = exports.scrollElementIntoViewAtIndex = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(driver, elementIdentifier, index) {
    var element;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return getElements(driver, elementIdentifier);
        case 2:
          element = _context14.sent;
          _context14.next = 5;
          return driver.executeScript("arguments[0].scrollIntoView(false)", element[index]);
        case 5:
          _context14.next = 7;
          return driver.sleep(1500);
        case 7:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function scrollElementIntoViewAtIndex(_x31, _x32, _x33) {
    return _ref14.apply(this, arguments);
  };
}();
var elementEnabled = exports.elementEnabled = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(driver, elementIdentifier) {
    var element;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return getElement(driver, elementIdentifier);
        case 2:
          element = _context15.sent;
          _context15.next = 5;
          return element.isEnabled();
        case 5:
          if (_context15.sent) {
            _context15.next = 9;
            break;
          }
          return _context15.abrupt("return", false);
        case 9:
          return _context15.abrupt("return", true);
        case 10:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function elementEnabled(_x34, _x35) {
    return _ref15.apply(this, arguments);
  };
}();
var switchIframe = exports.switchIframe = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(driver, elementIframe) {
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return driver.switchTo().frame(driver.findElement(_seleniumWebdriver.By.css(elementIframe)));
        case 2:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function switchIframe(_x36, _x37) {
    return _ref16.apply(this, arguments);
  };
}();
var switchWindow = exports.switchWindow = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(driver, pageIndex) {
    var winHandles;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          winHandles = driver.getAllWindowHandles();
          winHandles.then(function (handles) {
            var currentWindow = handles[pageIndex];
            driver.switchTo().window(currentWindow);
          });
        case 2:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function switchWindow(_x38, _x39) {
    return _ref17.apply(this, arguments);
  };
}();
var getTitleWithinPage = exports.getTitleWithinPage = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(driver, pageIndex) {
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return switchWindow(driver, pageIndex);
        case 2:
          return _context18.abrupt("return", driver.getTitle());
        case 3:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function getTitleWithinPage(_x40, _x41) {
    return _ref18.apply(this, arguments);
  };
}();
var retrieveTableData = function retrieveTableData(driver, elementIdentifier) {
  return new Promise(function (resolve) {
    var cell = [];
    driver.findElement(_seleniumWebdriver.By.css(elementIdentifier + " tbody")).then( /*#__PURE__*/function () {
      var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(rows) {
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              rows.findElements(_seleniumWebdriver.By.css("tr")).then( /*#__PURE__*/function () {
                var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(cells) {
                  var i, cell_text;
                  return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                    while (1) switch (_context19.prev = _context19.next) {
                      case 0:
                        i = 0;
                      case 1:
                        if (!(i < cells.length)) {
                          _context19.next = 9;
                          break;
                        }
                        _context19.next = 4;
                        return cells[i].getText();
                      case 4:
                        cell_text = _context19.sent;
                        cell.push(cell_text);
                      case 6:
                        i++;
                        _context19.next = 1;
                        break;
                      case 9:
                        resolve(cell);
                      case 10:
                      case "end":
                        return _context19.stop();
                    }
                  }, _callee19);
                }));
                return function (_x43) {
                  return _ref20.apply(this, arguments);
                };
              }());
            case 1:
            case "end":
              return _context20.stop();
          }
        }, _callee20);
      }));
      return function (_x42) {
        return _ref19.apply(this, arguments);
      };
    }());
  });
};
var getTableData = exports.getTableData = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(driver, elementIdentifier) {
    var asyncFunction, tableData;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return retrieveTableData(driver, elementIdentifier);
        case 2:
          _context21.t0 = _context21.sent;
          asyncFunction = [_context21.t0];
          _context21.next = 6;
          return Promise.all(asyncFunction);
        case 6:
          tableData = _context21.sent;
          return _context21.abrupt("return", tableData.toString());
        case 8:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return function getTableData(_x44, _x45) {
    return _ref21.apply(this, arguments);
  };
}();
var getTableDataArray = exports.getTableDataArray = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(driver, elementIdentifier) {
    var asyncFunction, tableData;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return retrieveTableData(driver, elementIdentifier);
        case 2:
          _context22.t0 = _context22.sent;
          asyncFunction = [_context22.t0];
          _context22.next = 6;
          return Promise.all(asyncFunction);
        case 6:
          tableData = _context22.sent;
          return _context22.abrupt("return", tableData.toString());
        case 8:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return function getTableDataArray(_x46, _x47) {
    return _ref22.apply(this, arguments);
  };
}();