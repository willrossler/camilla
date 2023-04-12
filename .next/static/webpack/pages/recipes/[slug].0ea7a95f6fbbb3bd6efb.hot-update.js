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
      race = _post$fields.race;
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
          children: ["Ras: ", race]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlcy9bc2x1Z10uanMiXSwibmFtZXMiOlsiUmVjaXBlRGV0YWlscyIsInBvc3QiLCJmaWVsZHMiLCJmZWF0dXJlZEltYWdlIiwidGl0bGUiLCJwcmlzIiwiYmVza3Jpdm5pbmciLCJyYWNlIiwiY29uc29sZSIsImxvZyIsImZpbGUiLCJ1cmwiLCJkZXRhaWxzIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQWtDZSxTQUFTQSxhQUFULE9BQWlDO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQUEscUJBQ1lBLElBQUksQ0FBQ0MsTUFEakI7QUFBQSxNQUN0Q0MsYUFEc0MsZ0JBQ3RDQSxhQURzQztBQUFBLE1BQ3ZCQyxLQUR1QixnQkFDdkJBLEtBRHVCO0FBQUEsTUFDaEJDLElBRGdCLGdCQUNoQkEsSUFEZ0I7QUFBQSxNQUNWQyxXQURVLGdCQUNWQSxXQURVO0FBQUEsTUFDR0MsSUFESCxnQkFDR0EsSUFESDtBQUU5Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlSLElBQVo7QUFDQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDRSxxRUFBQyxpREFBRDtBQUNFLFdBQUcsRUFBRSxXQUFXRSxhQUFhLENBQUNELE1BQWQsQ0FBcUJRLElBQXJCLENBQTBCQyxHQUQ1QztBQUVFLGFBQUssRUFBRVIsYUFBYSxDQUFDRCxNQUFkLENBQXFCUSxJQUFyQixDQUEwQkUsT0FBMUIsQ0FBa0NDLEtBQWxDLENBQXdDQyxLQUZqRDtBQUdFLGNBQU0sRUFBRVgsYUFBYSxDQUFDRCxNQUFkLENBQXFCUSxJQUFyQixDQUEwQkUsT0FBMUIsQ0FBa0NDLEtBQWxDLENBQXdDRTtBQUhsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRTtBQUFBLGtCQUFLWDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBSUU7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSwrQkFBVUQsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLDhCQUFTRSxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7S0FwQnVCUCxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlY2lwZXMvW3NsdWddLjBlYTdhOTVmNmZiYmIzYmQ2ZWZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiY29udGVudGZ1bFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBzcGFjZTogcHJvY2Vzcy5lbnYuQ09OVEVOVEZVTF9TUEFDRV9JRCxcbiAgYWNjZXNzVG9rZW46IHByb2Nlc3MuZW52LkNPTlRFTlRGVUxfQUNDRVNTX0tFWSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICBjb250ZW50X3R5cGU6IFwicG9zdFwiLFxuICB9KTtcblxuICBjb25zdCBwYXRocyA9IHJlcy5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyYW1zOiB7IHNsdWc6IGl0ZW0uZmllbGRzLnNsdWcgfSxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHsgaXRlbXMgfSA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICBjb250ZW50X3R5cGU6IFwicG9zdFwiLFxuICAgIFwiZmllbGRzLnNsdWdcIjogcGFyYW1zLnNsdWcsXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcG9zdDogaXRlbXNbMF0gfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlRGV0YWlscyh7IHBvc3QgfSkge1xuICBjb25zdCB7IGZlYXR1cmVkSW1hZ2UsIHRpdGxlLCBwcmlzLCBiZXNrcml2bmluZywgcmFjZSB9ID0gcG9zdC5maWVsZHM7XG4gIGNvbnNvbGUubG9nKHBvc3QpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e1wiaHR0cHM6XCIgKyBmZWF0dXJlZEltYWdlLmZpZWxkcy5maWxlLnVybH1cbiAgICAgICAgICB3aWR0aD17ZmVhdHVyZWRJbWFnZS5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLndpZHRofVxuICAgICAgICAgIGhlaWdodD17ZmVhdHVyZWRJbWFnZS5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLmhlaWdodH1cbiAgICAgICAgLz5cbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICAgICAgICA8cD57YmVza3Jpdm5pbmd9PC9wPlxuICAgICAgICAgIDxwPlByaXM6IHtwcmlzfTwvcD5cbiAgICAgICAgICA8cD5SYXM6IHtyYWNlfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=