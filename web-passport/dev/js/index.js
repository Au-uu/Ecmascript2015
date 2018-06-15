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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_js__ = __webpack_require__(2);



window.login = function (opts) {
  var container = opts.container;
  Object(__WEBPACK_IMPORTED_MODULE_0__render_js__["a" /* default */])(container);
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (container) {
  var tpl = "<form id=\"form\">\n    <input id=\"input\" name=\"uname\" type=\"text\">\n    <input name=\"password\" type=\"password\">\n    <input id=\"submit\" value=\"\u767B\u5F55\" type=\"submit\">\n  </form>";
  container.innerHTML = tpl;
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_formCheck_js__ = __webpack_require__(3);

/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var btn = document.getElementById('submit');
  var input = document.getElementById('input');
  var check = Object(__WEBPACK_IMPORTED_MODULE_0__common_formCheck_js__["a" /* default */])(document.getElementById('form'));
  btn.onclick = function (e) {
    console.log(e);
    e.preventDefault();
    check();
    alert(111);
  };

  input.oninput = function () {
    check();
  };
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (form) {
  return function () {
    alert(form.id);
    return [{}];
  };
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmE0Zjc4NmFkNDlmNTJiMTYwMDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xvZ2luL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xvZ2luL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbG9naW4vZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi9mb3JtQ2hlY2suanMiXSwibmFtZXMiOlsid2luZG93IiwibG9naW4iLCJvcHRzIiwiY29udGFpbmVyIiwicmVuZGVyIiwidHBsIiwiaW5uZXJIVE1MIiwiYnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlucHV0IiwiY2hlY2siLCJmb3JtQ2hlY2siLCJvbmNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0Iiwib25pbnB1dCIsImZvcm0iLCJpZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQzdEQTtBQUNBOztBQUVBQSxPQUFPQyxLQUFQLEdBQWUsVUFBQ0MsSUFBRCxFQUFVO0FBQ3ZCLE1BQU1DLFlBQVlELEtBQUtDLFNBQXZCO0FBQ0FDLEVBQUEsbUVBQUFBLENBQU9ELFNBQVA7QUFDRCxDQUhELEM7Ozs7Ozs7QUNIQSx5REFBZSxVQUFDQSxTQUFELEVBQWU7QUFDNUIsTUFBTUUsK01BQU47QUFLQUYsWUFBVUcsU0FBVixHQUFzQkQsR0FBdEI7QUFDRCxDQVBELEU7Ozs7Ozs7O0FDQUE7QUFDQSwwRUFBZSxZQUFNO0FBQ25CLE1BQU1FLE1BQU1DLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBWjtBQUNBLE1BQU1DLFFBQVFGLFNBQVNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZDtBQUNBLE1BQU1FLFFBQVEsNkVBQUFDLENBQVVKLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBVixDQUFkO0FBQ0FGLE1BQUlNLE9BQUosR0FBYyxVQUFDQyxDQUFELEVBQU87QUFDbkJDLFlBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBQSxNQUFFRyxjQUFGO0FBQ0FOO0FBQ0FPLFVBQU0sR0FBTjtBQUNELEdBTEQ7O0FBT0FSLFFBQU1TLE9BQU4sR0FBZ0IsWUFBTTtBQUNwQlI7QUFDRCxHQUZEO0FBR0QsQ0FkRCxFOzs7Ozs7O0FDREEseURBQWUsVUFBQ1MsSUFBRCxFQUFVO0FBQ3ZCLFNBQU8sWUFBTTtBQUNYRixVQUFNRSxLQUFLQyxFQUFYO0FBQ0EsV0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNELEdBSEQ7QUFJRCxDQUxELEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2YTRmNzg2YWQ0OWY1MmIxNjAwOCIsImltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXIuanMnO1xyXG5pbXBvcnQgZXZlbnQgZnJvbSAnLi9ldmVudC5qcyc7XHJcblxyXG53aW5kb3cubG9naW4gPSAob3B0cykgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IG9wdHMuY29udGFpbmVyO1xyXG4gIHJlbmRlcihjb250YWluZXIpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2xvZ2luL2luaXQuanMiLCJleHBvcnQgZGVmYXVsdCAoY29udGFpbmVyKSA9PiB7XHJcbiAgY29uc3QgdHBsID0gIGA8Zm9ybSBpZD1cImZvcm1cIj5cclxuICAgIDxpbnB1dCBpZD1cImlucHV0XCIgbmFtZT1cInVuYW1lXCIgdHlwZT1cInRleHRcIj5cclxuICAgIDxpbnB1dCBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIj5cclxuICAgIDxpbnB1dCBpZD1cInN1Ym1pdFwiIHZhbHVlPVwi55m75b2VXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gIDwvZm9ybT5gO1xyXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSB0cGw7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbG9naW4vcmVuZGVyLmpzIiwiaW1wb3J0IGZvcm1DaGVjayBmcm9tICcuLi9jb21tb24vZm9ybUNoZWNrLmpzJ1xyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpO1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0Jyk7XHJcbiAgY29uc3QgY2hlY2sgPSBmb3JtQ2hlY2soZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKSk7XHJcbiAgYnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjaGVjaygpO1xyXG4gICAgYWxlcnQoMTExKTtcclxuICB9XHJcblxyXG4gIGlucHV0Lm9uaW5wdXQgPSAoKSA9PiB7XHJcbiAgICBjaGVjaygpO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9sb2dpbi9ldmVudC5qcyIsImV4cG9ydCBkZWZhdWx0IChmb3JtKSA9PiB7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIGFsZXJ0KGZvcm0uaWQpO1xyXG4gICAgcmV0dXJuIFt7fV07XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbW1vbi9mb3JtQ2hlY2suanMiXSwic291cmNlUm9vdCI6IiJ9