/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/public/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/public/main.js":
/*!*******************************!*\
  !*** ./src/js/public/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_public_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/public/main.scss */ \"./src/scss/public/main.scss\");\n/* harmony import */ var _scss_public_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_public_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/js/public/utils.js\");\n/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle */ \"./src/js/public/toggle.js\");\n/**\n * Importing public sass files\n */\n\n/**\n * Importing jquery as external \n */\n\n\nvar jsMsg = 'from JS';\nvar jsGreeting = \"Hello World \".concat(jsMsg);\nvar htmlMsg = 'fine!';\nvar htmlGreeting = \"Works \".concat(htmlMsg);\nconsole.log(jsGreeting); // document.querySelector('.greeting > p').innerHTML = htmlGreeting;\n\njquery__WEBPACK_IMPORTED_MODULE_1___default()('.greeting > p').html(htmlGreeting);\n\n\n\n//# sourceURL=webpack:///./src/js/public/main.js?");

/***/ }),

/***/ "./src/js/public/toggle.js":
/*!*********************************!*\
  !*** ./src/js/public/toggle.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Toggle button\n */\n\nvar toggleBtn = document.querySelector('.nav-toggle');\nvar navItems = document.querySelector('.nav-items');\nvar toggle = false;\ntoggleBtn.addEventListener('click', function (eve) {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav-toggle').animateCss('pulse');\n\n  if (toggle) {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav-items').animateCss(\"fadeOut\", function () {\n      navItems.classList.remove('display');\n      navItems.classList.add('hide');\n      toggle = false;\n    });\n  } else {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav-items').animateCss('fadeIn');\n    navItems.classList.remove('hide');\n    navItems.classList.add('display');\n    toggle = true;\n  }\n});\n\n//# sourceURL=webpack:///./src/js/public/toggle.js?");

/***/ }),

/***/ "./src/js/public/utils.js":
/*!********************************!*\
  !*** ./src/js/public/utils.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\njquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.extend({\n  animateCss: function animateCss(animationName, callback) {\n    var animationEnd = function (el) {\n      var animations = {\n        animation: \"animationend\",\n        OAnimation: \"oAnimationEnd\",\n        MozAnimation: \"mozAnimationEnd\",\n        WebkitAnimation: \"webkitAnimationEnd\"\n      };\n\n      for (var t in animations) {\n        if (el.style[t] !== undefined) {\n          return animations[t];\n        }\n      }\n    }(document.createElement(\"div\"));\n\n    this.addClass(\"animated \" + animationName).one(animationEnd, function () {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass(\"animated \" + animationName);\n      if (typeof callback === \"function\") callback();\n    });\n    return this;\n  }\n});\n\n//# sourceURL=webpack:///./src/js/public/utils.js?");

/***/ }),

/***/ "./src/scss/public/main.scss":
/*!***********************************!*\
  !*** ./src/scss/public/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/public/main.scss?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ })

/******/ });