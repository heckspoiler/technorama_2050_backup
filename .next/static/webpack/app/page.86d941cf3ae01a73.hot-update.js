"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/page */ \"(app-pages-browser)/./app/home/page.js\");\n/* harmony import */ var _components_home_svgBackground_svgBackground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/home/svgBackground/svgBackground */ \"(app-pages-browser)/./components/home/svgBackground/svgBackground.js\");\n/* harmony import */ var _stores_navScrollStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/stores/navScrollStore */ \"(app-pages-browser)/./stores/navScrollStore.js\");\n/* harmony import */ var _stores_initialLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/stores/initialLoading */ \"(app-pages-browser)/./stores/initialLoading.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction App(param) {\n    let { posts } = param;\n    const loadMainContent = (0,_stores_initialLoading__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((state)=>state.loadMainContent);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loadMainContent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                console.log(\"Rendering Home and SvgBackground\"),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_svgBackground_svgBackground__WEBPACK_IMPORTED_MODULE_2__.SvgBackground, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFK0I7QUFDK0M7QUFDbEI7QUFDVDtBQUVwQyxTQUFTSSxJQUFJLEtBQVM7UUFBVCxFQUFFQyxLQUFLLEVBQUUsR0FBVDtJQUMxQixNQUFNQyxrQkFBa0JILGtFQUFZQSxDQUFDLENBQUNJLFFBQVVBLE1BQU1ELGVBQWU7SUFDckUscUJBQ0U7a0JBQ0dBLGlDQUNDOztnQkFDR0UsUUFBUUMsR0FBRyxDQUFDOzhCQUNiLDhEQUFDUix1RkFBYUE7Ozs7OzhCQUNkLDhEQUFDRCxrREFBSUE7Ozs7Ozs7O0FBS2Y7S0Fid0JJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUvcGFnZSc7XG5pbXBvcnQgeyBTdmdCYWNrZ3JvdW5kIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvc3ZnQmFja2dyb3VuZC9zdmdCYWNrZ3JvdW5kJztcbmltcG9ydCB7IHVzZVNjcm9sbFN0b3JlTmF2IH0gZnJvbSAnQC9zdG9yZXMvbmF2U2Nyb2xsU3RvcmUnO1xuaW1wb3J0IGxvYWRpbmdTdG9yZSBmcm9tICdAL3N0b3Jlcy9pbml0aWFsTG9hZGluZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IHBvc3RzIH0pIHtcbiAgY29uc3QgbG9hZE1haW5Db250ZW50ID0gbG9hZGluZ1N0b3JlKChzdGF0ZSkgPT4gc3RhdGUubG9hZE1haW5Db250ZW50KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xvYWRNYWluQ29udGVudCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2NvbnNvbGUubG9nKCdSZW5kZXJpbmcgSG9tZSBhbmQgU3ZnQmFja2dyb3VuZCcpfVxuICAgICAgICAgIDxTdmdCYWNrZ3JvdW5kIC8+XG4gICAgICAgICAgPEhvbWUgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhvbWUiLCJTdmdCYWNrZ3JvdW5kIiwidXNlU2Nyb2xsU3RvcmVOYXYiLCJsb2FkaW5nU3RvcmUiLCJBcHAiLCJwb3N0cyIsImxvYWRNYWluQ29udGVudCIsInN0YXRlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./stores/navScrollStore.js":
/*!**********************************!*\
  !*** ./stores/navScrollStore.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useScrollStoreNav: function() { return /* binding */ useScrollStoreNav; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"(app-pages-browser)/./node_modules/zustand/esm/index.mjs\");\n\nconst useScrollStoreNav = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({\n        isScrolled: false,\n        setScrolled: (scrolled)=>set({\n                isScrolled: scrolled\n            })\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0b3Jlcy9uYXZTY3JvbGxTdG9yZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFpQztBQUUxQixNQUFNQyxvQkFBb0JELCtDQUFNQSxDQUFDLENBQUNFLE1BQVM7UUFDaERDLFlBQVk7UUFDWkMsYUFBYSxDQUFDQyxXQUFhSCxJQUFJO2dCQUFFQyxZQUFZRTtZQUFTO0lBQ3hELElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmVzL25hdlNjcm9sbFN0b3JlLmpzPzY3MmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnenVzdGFuZCc7XG5cbmV4cG9ydCBjb25zdCB1c2VTY3JvbGxTdG9yZU5hdiA9IGNyZWF0ZSgoc2V0KSA9PiAoe1xuICBpc1Njcm9sbGVkOiBmYWxzZSxcbiAgc2V0U2Nyb2xsZWQ6IChzY3JvbGxlZCkgPT4gc2V0KHsgaXNTY3JvbGxlZDogc2Nyb2xsZWQgfSksXG59KSk7XG4iXSwibmFtZXMiOlsiY3JlYXRlIiwidXNlU2Nyb2xsU3RvcmVOYXYiLCJzZXQiLCJpc1Njcm9sbGVkIiwic2V0U2Nyb2xsZWQiLCJzY3JvbGxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./stores/navScrollStore.js\n"));

/***/ })

});