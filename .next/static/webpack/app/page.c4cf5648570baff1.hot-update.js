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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_home_svgBackground_svgBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/home/svgBackground/svgBackground */ \"(app-pages-browser)/./components/home/svgBackground/svgBackground.js\");\n/* harmony import */ var _stores_navScrollStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/stores/navScrollStore */ \"(app-pages-browser)/./stores/navScrollStore.js\");\n/* harmony import */ var _stores_initialLoading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/stores/initialLoading */ \"(app-pages-browser)/./stores/initialLoading.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_home_firstSection_firstSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/home/firstSection/firstSection */ \"(app-pages-browser)/./components/home/firstSection/firstSection.js\");\n/* harmony import */ var _components_home_secondSection_secondSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/home/secondSection/secondSection */ \"(app-pages-browser)/./components/home/secondSection/secondSection.js\");\n/* harmony import */ var _components_home_thirdSection_thirdSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/home/thirdSection/thirdSection */ \"(app-pages-browser)/./components/home/thirdSection/thirdSection.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction App(param) {\n    let { posts } = param;\n    _s();\n    const loadMainContent = (0,_stores_initialLoading__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((state)=>state.loadMainContent);\n    const { setScrolled } = (0,_stores_navScrollStore__WEBPACK_IMPORTED_MODULE_2__.useScrollStoreNav)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const isScrolled = window.scrollY > 100;\n            console.log(\"isScrolled: \", isScrolled);\n            setScrolled(isScrolled);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        setScrolled\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loadMainContent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                console.log(\"Rendering Home and SvgBackground\"),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_svgBackground_svgBackground__WEBPACK_IMPORTED_MODULE_1__.SvgBackground, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_firstSection_firstSection__WEBPACK_IMPORTED_MODULE_5__.FirstSection, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_secondSection_secondSection__WEBPACK_IMPORTED_MODULE_6__.SecondSection, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_thirdSection_thirdSection__WEBPACK_IMPORTED_MODULE_7__.ThirdSection, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n}\n_s(App, \"LvFdzjXDHpW+kdTAZ5hd7EMeUHA=\", false, function() {\n    return [\n        _stores_navScrollStore__WEBPACK_IMPORTED_MODULE_2__.useScrollStoreNav\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUU4RTtBQUNsQjtBQUNUO0FBQ2pCO0FBQ3lDO0FBQ0c7QUFDSDtBQUU1RCxTQUFTTyxJQUFJLEtBQVM7UUFBVCxFQUFFQyxLQUFLLEVBQUUsR0FBVDs7SUFDMUIsTUFBTUMsa0JBQWtCUCxrRUFBWUEsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNRCxlQUFlO0lBQ3JFLE1BQU0sRUFBRUUsV0FBVyxFQUFFLEdBQUdWLHlFQUFpQkE7SUFFekNFLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsZUFBZTtZQUNuQixNQUFNQyxhQUFhQyxPQUFPQyxPQUFPLEdBQUc7WUFDcENDLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JKO1lBQzVCRixZQUFZRTtRQUNkO1FBQ0FDLE9BQU9JLGdCQUFnQixDQUFDLFVBQVVOO1FBRWxDLE9BQU87WUFDTEUsT0FBT0ssbUJBQW1CLENBQUMsVUFBVVA7UUFDdkM7SUFDRixHQUFHO1FBQUNEO0tBQVk7SUFFaEIscUJBQ0U7a0JBQ0dGLGlDQUNDOztnQkFDR08sUUFBUUMsR0FBRyxDQUFDOzhCQUNiLDhEQUFDakIsdUZBQWFBOzs7Ozs4QkFDZCw4REFBQ0ksb0ZBQVlBOzs7Ozs4QkFDYiw4REFBQ0MsdUZBQWFBOzs7Ozs4QkFDZCw4REFBQ0Msb0ZBQVlBOzs7Ozs7OztBQUt2QjtHQTlCd0JDOztRQUVFTixxRUFBaUJBOzs7S0FGbkJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBTdmdCYWNrZ3JvdW5kIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvc3ZnQmFja2dyb3VuZC9zdmdCYWNrZ3JvdW5kJztcbmltcG9ydCB7IHVzZVNjcm9sbFN0b3JlTmF2IH0gZnJvbSAnQC9zdG9yZXMvbmF2U2Nyb2xsU3RvcmUnO1xuaW1wb3J0IGxvYWRpbmdTdG9yZSBmcm9tICdAL3N0b3Jlcy9pbml0aWFsTG9hZGluZyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaXJzdFNlY3Rpb24gfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9maXJzdFNlY3Rpb24vZmlyc3RTZWN0aW9uJztcbmltcG9ydCB7IFNlY29uZFNlY3Rpb24gfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9zZWNvbmRTZWN0aW9uL3NlY29uZFNlY3Rpb24nO1xuaW1wb3J0IHsgVGhpcmRTZWN0aW9uIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvdGhpcmRTZWN0aW9uL3RoaXJkU2VjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IHBvc3RzIH0pIHtcbiAgY29uc3QgbG9hZE1haW5Db250ZW50ID0gbG9hZGluZ1N0b3JlKChzdGF0ZSkgPT4gc3RhdGUubG9hZE1haW5Db250ZW50KTtcbiAgY29uc3QgeyBzZXRTY3JvbGxlZCB9ID0gdXNlU2Nyb2xsU3RvcmVOYXYoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGlzU2Nyb2xsZWQgPSB3aW5kb3cuc2Nyb2xsWSA+IDEwMDtcbiAgICAgIGNvbnNvbGUubG9nKCdpc1Njcm9sbGVkOiAnLCBpc1Njcm9sbGVkKTtcbiAgICAgIHNldFNjcm9sbGVkKGlzU2Nyb2xsZWQpO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW3NldFNjcm9sbGVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xvYWRNYWluQ29udGVudCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2NvbnNvbGUubG9nKCdSZW5kZXJpbmcgSG9tZSBhbmQgU3ZnQmFja2dyb3VuZCcpfVxuICAgICAgICAgIDxTdmdCYWNrZ3JvdW5kIC8+XG4gICAgICAgICAgPEZpcnN0U2VjdGlvbiAvPlxuICAgICAgICAgIDxTZWNvbmRTZWN0aW9uIC8+XG4gICAgICAgICAgPFRoaXJkU2VjdGlvbiAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU3ZnQmFja2dyb3VuZCIsInVzZVNjcm9sbFN0b3JlTmF2IiwibG9hZGluZ1N0b3JlIiwidXNlRWZmZWN0IiwiRmlyc3RTZWN0aW9uIiwiU2Vjb25kU2VjdGlvbiIsIlRoaXJkU2VjdGlvbiIsIkFwcCIsInBvc3RzIiwibG9hZE1haW5Db250ZW50Iiwic3RhdGUiLCJzZXRTY3JvbGxlZCIsImhhbmRsZVNjcm9sbCIsImlzU2Nyb2xsZWQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/home/firstSection/firstSection.js":
/*!******************************************************!*\
  !*** ./components/home/firstSection/firstSection.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FirstSection: function() { return /* binding */ FirstSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firstSection_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firstSection.module.css */ \"(app-pages-browser)/./components/home/firstSection/firstSection.module.css\");\n/* harmony import */ var _firstSection_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_firstSection_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst FirstSection = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_firstSection_module_css__WEBPACK_IMPORTED_MODULE_3___default().firstContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_firstSection_module_css__WEBPACK_IMPORTED_MODULE_3___default().heroContainer),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_firstSection_module_css__WEBPACK_IMPORTED_MODULE_3___default().twentyfifty),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"20\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/components/home/firstSection/firstSection.js\",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_firstSection_module_css__WEBPACK_IMPORTED_MODULE_3___default().fifty),\n                            children: \"50\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/components/home/firstSection/firstSection.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/components/home/firstSection/firstSection.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/images/home/hero_sketch.png\",\n                        width: 1405 / 1.8,\n                        height: 556 / 1.8,\n                        alt: \"Technorama 2050 Hero Sketch\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/components/home/firstSection/firstSection.js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/components/home/firstSection/firstSection.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/components/home/firstSection/firstSection.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/components/home/firstSection/firstSection.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = FirstSection;\nvar _c;\n$RefreshReg$(_c, \"FirstSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaG9tZS9maXJzdFNlY3Rpb24vZmlyc3RTZWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNLO0FBQ2dCO0FBRXhDLE1BQU1HLGVBQWU7SUFDMUIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdILGdGQUFxQjtrQkFDbkMsNEVBQUNFO1lBQUlDLFdBQVdILCtFQUFvQjs7OEJBQ2xDLDhEQUFDRTtvQkFBSUMsV0FBV0gsNkVBQWtCOztzQ0FDaEMsOERBQUNPO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNBOzRCQUFHSixXQUFXSCx1RUFBWTtzQ0FBRTs7Ozs7Ozs7Ozs7OzhCQUUvQiw4REFBQ0U7OEJBQ0MsNEVBQUNILG1EQUFLQTt3QkFDSlUsS0FBSTt3QkFDSkMsT0FBTyxPQUFPO3dCQUNkQyxRQUFRLE1BQU07d0JBQ2RDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEIsRUFBRTtLQW5CV1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2ZpcnN0U2VjdGlvbi9maXJzdFNlY3Rpb24uanM/NjQ0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ZpcnN0U2VjdGlvbi5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IEZpcnN0U2VjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpcnN0Q29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0NvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHdlbnR5ZmlmdHl9PlxuICAgICAgICAgIDxoMT4yMDwvaDE+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmZpZnR5fT41MDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9ob21lL2hlcm9fc2tldGNoLnBuZ1wiXG4gICAgICAgICAgICB3aWR0aD17MTQwNSAvIDEuOH1cbiAgICAgICAgICAgIGhlaWdodD17NTU2IC8gMS44fVxuICAgICAgICAgICAgYWx0PVwiVGVjaG5vcmFtYSAyMDUwIEhlcm8gU2tldGNoXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwic3R5bGVzIiwiRmlyc3RTZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmlyc3RDb250YWluZXIiLCJoZXJvQ29udGFpbmVyIiwidHdlbnR5ZmlmdHkiLCJoMSIsImZpZnR5Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/home/firstSection/firstSection.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/home/secondSection/secondSection.js":
/*!********************************************************!*\
  !*** ./components/home/secondSection/secondSection.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SecondSection: function() { return /* binding */ SecondSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _secondSection_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./secondSection.module.css */ \"(app-pages-browser)/./components/home/secondSection/secondSection.module.css\");\n/* harmony import */ var _secondSection_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_secondSection_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst SecondSection = ()=>{\n    _s();\n    const [isSticky, setSticky] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const checkSticky = ()=>{\n        const headerHeight = 6 * 16; // 6rem in pixels\n        const secondSection = document.querySelector(\".\".concat((_secondSection_module_css__WEBPACK_IMPORTED_MODULE_2___default().secondContainer)));\n        if (secondSection) {\n            const rect = secondSection.getBoundingClientRect();\n            setSticky(rect.top <= headerHeight);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", checkSticky);\n        return ()=>{\n            window.removeEventListener(\"scroll\", checkSticky);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_secondSection_module_css__WEBPACK_IMPORTED_MODULE_2___default().secondContainer), \" \").concat(isSticky ? (_secondSection_module_css__WEBPACK_IMPORTED_MODULE_2___default().sticky) : \"\"),\n        children: \"SecondSection\"\n    }, void 0, false, {\n        fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/components/home/secondSection/secondSection.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SecondSection, \"EUNqFBHXRQxzKZKrrGUHXx/GxTI=\");\n_c = SecondSection;\nvar _c;\n$RefreshReg$(_c, \"SecondSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaG9tZS9zZWNvbmRTZWN0aW9uL3NlY29uZFNlY3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDSDtBQUV6QyxNQUFNSSxnQkFBZ0I7O0lBQzNCLE1BQU0sQ0FBQ0MsVUFBVUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNTSxjQUFjO1FBQ2xCLE1BQU1DLGVBQWUsSUFBSSxJQUFJLGlCQUFpQjtRQUM5QyxNQUFNQyxnQkFBZ0JDLFNBQVNDLGFBQWEsQ0FBQyxJQUEyQixPQUF2QlIsa0ZBQXNCO1FBRXZFLElBQUlNLGVBQWU7WUFDakIsTUFBTUksT0FBT0osY0FBY0sscUJBQXFCO1lBQ2hEUixVQUFVTyxLQUFLRSxHQUFHLElBQUlQO1FBQ3hCO0lBQ0Y7SUFFQU4sZ0RBQVNBLENBQUM7UUFDUmMsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVVY7UUFFbEMsT0FBTztZQUNMUyxPQUFPRSxtQkFBbUIsQ0FBQyxVQUFVWDtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDWTtRQUNDQyxXQUFXLEdBQTZCZixPQUExQkYsa0ZBQXNCLEVBQUMsS0FBaUMsT0FBOUJFLFdBQVdGLHlFQUFhLEdBQUc7a0JBQ3BFOzs7Ozs7QUFJTCxFQUFFO0dBNUJXQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWUvc2Vjb25kU2VjdGlvbi9zZWNvbmRTZWN0aW9uLmpzPzU5MzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2Vjb25kU2VjdGlvbi5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IFNlY29uZFNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFtpc1N0aWNreSwgc2V0U3RpY2t5XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjaGVja1N0aWNreSA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSA2ICogMTY7IC8vIDZyZW0gaW4gcGl4ZWxzXG4gICAgY29uc3Qgc2Vjb25kU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3N0eWxlcy5zZWNvbmRDb250YWluZXJ9YCk7XG5cbiAgICBpZiAoc2Vjb25kU2VjdGlvbikge1xuICAgICAgY29uc3QgcmVjdCA9IHNlY29uZFNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBzZXRTdGlja3kocmVjdC50b3AgPD0gaGVhZGVySGVpZ2h0KTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTdGlja3kpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1N0aWNreSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2Vjb25kQ29udGFpbmVyfSAke2lzU3RpY2t5ID8gc3R5bGVzLnN0aWNreSA6ICcnfWB9XG4gICAgPlxuICAgICAgU2Vjb25kU2VjdGlvblxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiU2Vjb25kU2VjdGlvbiIsImlzU3RpY2t5Iiwic2V0U3RpY2t5IiwiY2hlY2tTdGlja3kiLCJoZWFkZXJIZWlnaHQiLCJzZWNvbmRTZWN0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Vjb25kQ29udGFpbmVyIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3RpY2t5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/home/secondSection/secondSection.js\n"));

/***/ })

});