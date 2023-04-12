webpackHotUpdate_N_E("pages/recipes/[slug]",{

/***/ "./pages/recipes/[slug].js":
/*!*********************************!*\
  !*** ./pages/recipes/[slug].js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipeDetails; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\willr\\Desktop\\camilla\\pages\\recipes\\[slug].js";

var __N_SSG = true;
function RecipeDetails(_ref) {
  var post = _ref.post;
  var _post$fields = post.fields,
      featuredImage = _post$fields.featuredImage,
      title = _post$fields.title,
      pris = _post$fields.pris,
      beskrivning = _post$fields.beskrivning,
      ras = _post$fields.ras;
  console.log(post);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "banner",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
        src: "https:" + featuredImage.fields.file.url,
        width: featuredImage.fields.file.details.image.width,
        height: featuredImage.fields.file.details.image.height
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "info",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: beskrivning
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Pris: ", pris]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Ras: ", ras]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
_c = RecipeDetails;

var _c;

$RefreshReg$(_c, "RecipeDetails");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlcy9bc2x1Z10uanMiXSwibmFtZXMiOlsiUmVjaXBlRGV0YWlscyIsInBvc3QiLCJmaWVsZHMiLCJmZWF0dXJlZEltYWdlIiwidGl0bGUiLCJwcmlzIiwiYmVza3Jpdm5pbmciLCJyYXMiLCJjb25zb2xlIiwibG9nIiwiZmlsZSIsInVybCIsImRldGFpbHMiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBa0NlLFNBQVNBLGFBQVQsT0FBaUM7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFBQSxxQkFDV0EsSUFBSSxDQUFDQyxNQURoQjtBQUFBLE1BQ3RDQyxhQURzQyxnQkFDdENBLGFBRHNDO0FBQUEsTUFDdkJDLEtBRHVCLGdCQUN2QkEsS0FEdUI7QUFBQSxNQUNoQkMsSUFEZ0IsZ0JBQ2hCQSxJQURnQjtBQUFBLE1BQ1ZDLFdBRFUsZ0JBQ1ZBLFdBRFU7QUFBQSxNQUNHQyxHQURILGdCQUNHQSxHQURIO0FBRTlDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVIsSUFBWjtBQUNBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDhCQUNFLHFFQUFDLGlEQUFEO0FBQ0UsV0FBRyxFQUFFLFdBQVdFLGFBQWEsQ0FBQ0QsTUFBZCxDQUFxQlEsSUFBckIsQ0FBMEJDLEdBRDVDO0FBRUUsYUFBSyxFQUFFUixhQUFhLENBQUNELE1BQWQsQ0FBcUJRLElBQXJCLENBQTBCRSxPQUExQixDQUFrQ0MsS0FBbEMsQ0FBd0NDLEtBRmpEO0FBR0UsY0FBTSxFQUFFWCxhQUFhLENBQUNELE1BQWQsQ0FBcUJRLElBQXJCLENBQTBCRSxPQUExQixDQUFrQ0MsS0FBbEMsQ0FBd0NFO0FBSGxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FO0FBQUEsa0JBQUtYO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBT0U7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxnQ0FDRTtBQUFBLG9CQUFJRTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLCtCQUFVRCxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQUEsOEJBQVNFLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDtLQXBCdUJQLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjaXBlcy9bc2x1Z10uNWEyZWNjZTY0NzhkM2M3NzBjMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJjb250ZW50ZnVsXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIHNwYWNlOiBwcm9jZXNzLmVudi5DT05URU5URlVMX1NQQUNFX0lELFxuICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuQ09OVEVOVEZVTF9BQ0NFU1NfS0VZLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgIGNvbnRlbnRfdHlwZTogXCJwb3N0XCIsXG4gIH0pO1xuXG4gIGNvbnN0IHBhdGhzID0gcmVzLml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHsgc2x1ZzogaXRlbS5maWVsZHMuc2x1ZyB9LFxuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgeyBpdGVtcyB9ID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgIGNvbnRlbnRfdHlwZTogXCJwb3N0XCIsXG4gICAgXCJmaWVsZHMuc2x1Z1wiOiBwYXJhbXMuc2x1ZyxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwb3N0OiBpdGVtc1swXSB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGVEZXRhaWxzKHsgcG9zdCB9KSB7XG4gIGNvbnN0IHsgZmVhdHVyZWRJbWFnZSwgdGl0bGUsIHByaXMsIGJlc2tyaXZuaW5nLCByYXMgfSA9IHBvc3QuZmllbGRzO1xuICBjb25zb2xlLmxvZyhwb3N0KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtcImh0dHBzOlwiICsgZmVhdHVyZWRJbWFnZS5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgd2lkdGg9e2ZlYXR1cmVkSW1hZ2UuZmllbGRzLmZpbGUuZGV0YWlscy5pbWFnZS53aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2ZlYXR1cmVkSW1hZ2UuZmllbGRzLmZpbGUuZGV0YWlscy5pbWFnZS5oZWlnaHR9XG4gICAgICAgIC8+XG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgPHA+e2Jlc2tyaXZuaW5nfTwvcD5cbiAgICAgICAgICA8cD5QcmlzOiB7cHJpc308L3A+XG4gICAgICAgICAgPHA+UmFzOiB7cmFzfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=