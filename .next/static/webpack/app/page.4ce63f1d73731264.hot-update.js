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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_home_svgBackground_svgBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/home/svgBackground/svgBackground */ \"(app-pages-browser)/./components/home/svgBackground/svgBackground.js\");\n/* harmony import */ var _stores_navScrollStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/stores/navScrollStore */ \"(app-pages-browser)/./stores/navScrollStore.js\");\n/* harmony import */ var _utils_throttleFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/throttleFunction */ \"(app-pages-browser)/./utils/throttleFunction.js\");\n/* harmony import */ var _stores_initialLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/stores/initialLoading */ \"(app-pages-browser)/./stores/initialLoading.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_home_firstSection_firstSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/home/firstSection/firstSection */ \"(app-pages-browser)/./components/home/firstSection/firstSection.js\");\n/* harmony import */ var _components_home_secondSection_secondSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/home/secondSection/secondSection */ \"(app-pages-browser)/./components/home/secondSection/secondSection.js\");\n/* harmony import */ var _components_home_thirdSection_thirdSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/home/thirdSection/thirdSection */ \"(app-pages-browser)/./components/home/thirdSection/thirdSection.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction App(param) {\n    let { posts } = param;\n    _s();\n    const loadMainContent = (0,_stores_initialLoading__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((state)=>state.loadMainContent);\n    const { setScrolled } = (0,_stores_navScrollStore__WEBPACK_IMPORTED_MODULE_2__.useScrollStoreNav)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const isScrolled = window.scrollY > 100;\n            console.log(\"isScrolled: \", isScrolled);\n            setScrolled(isScrolled);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        setScrolled\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loadMainContent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_svgBackground_svgBackground__WEBPACK_IMPORTED_MODULE_1__.SvgBackground, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_firstSection_firstSection__WEBPACK_IMPORTED_MODULE_6__.FirstSection, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_secondSection_secondSection__WEBPACK_IMPORTED_MODULE_7__.SecondSection, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_thirdSection_thirdSection__WEBPACK_IMPORTED_MODULE_8__.ThirdSection, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n}\n_s(App, \"LvFdzjXDHpW+kdTAZ5hd7EMeUHA=\", false, function() {\n    return [\n        _stores_navScrollStore__WEBPACK_IMPORTED_MODULE_2__.useScrollStoreNav\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOEU7QUFDbEI7QUFDUjtBQUNEO0FBQ2pCO0FBQ3lDO0FBQ0c7QUFDSDtBQUU1RCxTQUFTUSxJQUFJLEtBQVM7UUFBVCxFQUFFQyxLQUFLLEVBQUUsR0FBVDs7SUFDMUIsTUFBTUMsa0JBQWtCUCxrRUFBWUEsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNRCxlQUFlO0lBQ3JFLE1BQU0sRUFBRUUsV0FBVyxFQUFFLEdBQUdYLHlFQUFpQkE7SUFFekNHLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsZUFBZTtZQUNuQixNQUFNQyxhQUFhQyxPQUFPQyxPQUFPLEdBQUc7WUFDcENDLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JKO1lBQzVCRixZQUFZRTtRQUNkO1FBQ0FDLE9BQU9JLGdCQUFnQixDQUFDLFVBQVVOO1FBRWxDLE9BQU87WUFDTEUsT0FBT0ssbUJBQW1CLENBQUMsVUFBVVA7UUFDdkM7SUFDRixHQUFHO1FBQUNEO0tBQVk7SUFFaEIscUJBQ0U7a0JBQ0dGLGlDQUNDOzs4QkFDRSw4REFBQ1YsdUZBQWFBOzs7Ozs4QkFDZCw4REFBQ0ssb0ZBQVlBOzs7Ozs4QkFDYiw4REFBQ0MsdUZBQWFBOzs7Ozs4QkFDZCw4REFBQ0Msb0ZBQVlBOzs7Ozs7OztBQUt2QjtHQTdCd0JDOztRQUVFUCxxRUFBaUJBOzs7S0FGbkJPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBTdmdCYWNrZ3JvdW5kIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvc3ZnQmFja2dyb3VuZC9zdmdCYWNrZ3JvdW5kJztcbmltcG9ydCB7IHVzZVNjcm9sbFN0b3JlTmF2IH0gZnJvbSAnQC9zdG9yZXMvbmF2U2Nyb2xsU3RvcmUnO1xuaW1wb3J0IHsgdGhyb3R0bGUgfSBmcm9tICdAL3V0aWxzL3Rocm90dGxlRnVuY3Rpb24nO1xuaW1wb3J0IGxvYWRpbmdTdG9yZSBmcm9tICdAL3N0b3Jlcy9pbml0aWFsTG9hZGluZyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaXJzdFNlY3Rpb24gfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9maXJzdFNlY3Rpb24vZmlyc3RTZWN0aW9uJztcbmltcG9ydCB7IFNlY29uZFNlY3Rpb24gfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9zZWNvbmRTZWN0aW9uL3NlY29uZFNlY3Rpb24nO1xuaW1wb3J0IHsgVGhpcmRTZWN0aW9uIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvdGhpcmRTZWN0aW9uL3RoaXJkU2VjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IHBvc3RzIH0pIHtcbiAgY29uc3QgbG9hZE1haW5Db250ZW50ID0gbG9hZGluZ1N0b3JlKChzdGF0ZSkgPT4gc3RhdGUubG9hZE1haW5Db250ZW50KTtcbiAgY29uc3QgeyBzZXRTY3JvbGxlZCB9ID0gdXNlU2Nyb2xsU3RvcmVOYXYoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGlzU2Nyb2xsZWQgPSB3aW5kb3cuc2Nyb2xsWSA+IDEwMDtcbiAgICAgIGNvbnNvbGUubG9nKCdpc1Njcm9sbGVkOiAnLCBpc1Njcm9sbGVkKTtcbiAgICAgIHNldFNjcm9sbGVkKGlzU2Nyb2xsZWQpO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW3NldFNjcm9sbGVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xvYWRNYWluQ29udGVudCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFN2Z0JhY2tncm91bmQgLz5cbiAgICAgICAgICA8Rmlyc3RTZWN0aW9uIC8+XG4gICAgICAgICAgPFNlY29uZFNlY3Rpb24gLz5cbiAgICAgICAgICA8VGhpcmRTZWN0aW9uIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTdmdCYWNrZ3JvdW5kIiwidXNlU2Nyb2xsU3RvcmVOYXYiLCJ0aHJvdHRsZSIsImxvYWRpbmdTdG9yZSIsInVzZUVmZmVjdCIsIkZpcnN0U2VjdGlvbiIsIlNlY29uZFNlY3Rpb24iLCJUaGlyZFNlY3Rpb24iLCJBcHAiLCJwb3N0cyIsImxvYWRNYWluQ29udGVudCIsInN0YXRlIiwic2V0U2Nyb2xsZWQiLCJoYW5kbGVTY3JvbGwiLCJpc1Njcm9sbGVkIiwid2luZG93Iiwic2Nyb2xsWSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./utils/throttleFunction.js":
/*!***********************************!*\
  !*** ./utils/throttleFunction.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nfunction throttle(func, limit) {\n    let inThrottle;\n    return function() {\n        const args = arguments;\n        const context = this;\n        if (!inThrottle) {\n            func.apply(context, args);\n            inThrottle = true;\n            setTimeout(()=>inThrottle = false, limit);\n        }\n    };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (throttle);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3V0aWxzL3Rocm90dGxlRnVuY3Rpb24uanMiLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVNBLFNBQVNDLElBQUksRUFBRUMsS0FBSztJQUMzQixJQUFJQztJQUNKLE9BQU87UUFDTCxNQUFNQyxPQUFPQztRQUNiLE1BQU1DLFVBQVUsSUFBSTtRQUNwQixJQUFJLENBQUNILFlBQVk7WUFDZkYsS0FBS00sS0FBSyxDQUFDRCxTQUFTRjtZQUNwQkQsYUFBYTtZQUNiSyxXQUFXLElBQU9MLGFBQWEsT0FBUUQ7UUFDekM7SUFDRjtBQUNGO0FBRUEsK0RBQWVGLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdGhyb3R0bGVGdW5jdGlvbi5qcz9kMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIGxpbWl0KSB7XG4gIGxldCBpblRocm90dGxlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgaWYgKCFpblRocm90dGxlKSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgaW5UaHJvdHRsZSA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IChpblRocm90dGxlID0gZmFsc2UpLCBsaW1pdCk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB0aHJvdHRsZTtcbiJdLCJuYW1lcyI6WyJ0aHJvdHRsZSIsImZ1bmMiLCJsaW1pdCIsImluVGhyb3R0bGUiLCJhcmdzIiwiYXJndW1lbnRzIiwiY29udGV4dCIsImFwcGx5Iiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/throttleFunction.js\n"));

/***/ })

});