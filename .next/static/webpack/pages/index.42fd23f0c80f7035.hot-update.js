"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/utils/prismicClient.js":
/*!************************************!*\
  !*** ./src/utils/prismicClient.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   client: function() { return /* binding */ client; }\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"./node_modules/@prismicio/client/dist/index.js\");\n// utils/prismicClient.js\n// src/utils/prismicClient.js\n\n// Utiliser les variables d'environnement\nconst repositoryName = \"portfoliohb\";\nconst endpoint = \"https://portfoliohb.cdn.prismic.io/api/v2\";\n// Création du client Prismic\nconst client = _prismicio_client__WEBPACK_IMPORTED_MODULE_0__.createClient(endpoint, {\n    repositoryName\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvcHJpc21pY0NsaWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlCQUF5QjtBQUV6Qiw2QkFBNkI7QUFDZ0I7QUFFN0MseUNBQXlDO0FBQ3pDLE1BQU1DLGlCQUFpQkMsYUFBMEM7QUFDakUsTUFBTUcsV0FBV0gsMkNBQXdDO0FBRXpELDZCQUE2QjtBQUN0QixNQUFNSyxTQUFTUCwyREFBb0IsQ0FBQ0ssVUFBVTtJQUNuREo7QUFDRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9wcmlzbWljQ2xpZW50LmpzPzcwMzMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdXRpbHMvcHJpc21pY0NsaWVudC5qc1xyXG5cclxuLy8gc3JjL3V0aWxzL3ByaXNtaWNDbGllbnQuanNcclxuaW1wb3J0ICogYXMgcHJpc21pYyBmcm9tIFwiQHByaXNtaWNpby9jbGllbnRcIjtcclxuXHJcbi8vIFV0aWxpc2VyIGxlcyB2YXJpYWJsZXMgZCdlbnZpcm9ubmVtZW50XHJcbmNvbnN0IHJlcG9zaXRvcnlOYW1lID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUFJJU01JQ19SRVBPU0lUT1JZO1xyXG5jb25zdCBlbmRwb2ludCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BSSVNNSUNfRU5EUE9JTlQ7XHJcblxyXG4vLyBDcsOpYXRpb24gZHUgY2xpZW50IFByaXNtaWNcclxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IHByaXNtaWMuY3JlYXRlQ2xpZW50KGVuZHBvaW50LCB7XHJcbiAgcmVwb3NpdG9yeU5hbWUsXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsicHJpc21pYyIsInJlcG9zaXRvcnlOYW1lIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1BSSVNNSUNfUkVQT1NJVE9SWSIsImVuZHBvaW50IiwiTkVYVF9QVUJMSUNfUFJJU01JQ19FTkRQT0lOVCIsImNsaWVudCIsImNyZWF0ZUNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/prismicClient.js\n"));

/***/ })

});