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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_home_svgBackground_svgBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/home/svgBackground/svgBackground */ \"(app-pages-browser)/./components/home/svgBackground/svgBackground.js\");\n/* harmony import */ var _stores_navScrollStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/stores/navScrollStore */ \"(app-pages-browser)/./stores/navScrollStore.js\");\n/* harmony import */ var _stores_initialLoading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/stores/initialLoading */ \"(app-pages-browser)/./stores/initialLoading.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_home_firstSection_firstSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/home/firstSection/firstSection */ \"(app-pages-browser)/./components/home/firstSection/firstSection.js\");\n/* harmony import */ var _components_home_secondSection_secondSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/home/secondSection/secondSection */ \"(app-pages-browser)/./components/home/secondSection/secondSection.js\");\n/* harmony import */ var _components_home_thirdSection_thirdSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/home/thirdSection/thirdSection */ \"(app-pages-browser)/./components/home/thirdSection/thirdSection.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction App(param) {\n    let { posts } = param;\n    _s();\n    const loadMainContent = (0,_stores_initialLoading__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((state)=>state.loadMainContent);\n    const [isListenerActive, setIsListenerActive] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const { setScrolled } = (0,_stores_navScrollStore__WEBPACK_IMPORTED_MODULE_2__.useScrollStoreNav)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollY = window.scrollY;\n            console.log(\"Scroll\", scrollY);\n            if (scrollY > 10 && isListenerActive) {\n                setScrolled(true);\n                setIsListenerActive(false);\n            } else if (scrollY < 12 && !isListenerActive) {\n                setScrolled(false);\n                setIsListenerActive(true);\n            }\n        };\n        if (isListenerActive) {\n            window.addEventListener(\"scroll\", handleScroll);\n        }\n        return ()=>{\n            if (isListenerActive) {\n                window.removeEventListener(\"scroll\", handleScroll);\n            }\n        };\n    }, [\n        isListenerActive,\n        setScrolled\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loadMainContent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_svgBackground_svgBackground__WEBPACK_IMPORTED_MODULE_1__.SvgBackground, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_firstSection_firstSection__WEBPACK_IMPORTED_MODULE_5__.FirstSection, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_secondSection_secondSection__WEBPACK_IMPORTED_MODULE_6__.SecondSection, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_thirdSection_thirdSection__WEBPACK_IMPORTED_MODULE_7__.ThirdSection, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n}\n_s(App, \"XGOZMlHTXWn6zu5gt2AH9AdyHaE=\", false, function() {\n    return [\n        _stores_navScrollStore__WEBPACK_IMPORTED_MODULE_2__.useScrollStoreNav\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUU4RTtBQUNsQjtBQUNUO0FBQ1A7QUFDK0I7QUFDRztBQUNIO0FBRTVELFNBQVNRLElBQUksS0FBUztRQUFULEVBQUVDLEtBQUssRUFBRSxHQUFUOztJQUMxQixNQUFNQyxrQkFBa0JSLGtFQUFZQSxDQUFDLENBQUNTLFFBQVVBLE1BQU1ELGVBQWU7SUFDckUsTUFBTSxDQUFDRSxrQkFBa0JDLG9CQUFvQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLEVBQUVVLFdBQVcsRUFBRSxHQUFHYix5RUFBaUJBO0lBRXpDRSxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLGVBQWU7WUFDbkIsTUFBTUMsVUFBVUMsT0FBT0QsT0FBTztZQUM5QkUsUUFBUUMsR0FBRyxDQUFDLFVBQVVIO1lBRXRCLElBQUlBLFVBQVUsTUFBTUosa0JBQWtCO2dCQUNwQ0UsWUFBWTtnQkFDWkQsb0JBQW9CO1lBQ3RCLE9BQU8sSUFBSUcsVUFBVSxNQUFNLENBQUNKLGtCQUFrQjtnQkFDNUNFLFlBQVk7Z0JBQ1pELG9CQUFvQjtZQUN0QjtRQUNGO1FBRUEsSUFBSUQsa0JBQWtCO1lBQ3BCSyxPQUFPRyxnQkFBZ0IsQ0FBQyxVQUFVTDtRQUNwQztRQUVBLE9BQU87WUFDTCxJQUFJSCxrQkFBa0I7Z0JBQ3BCSyxPQUFPSSxtQkFBbUIsQ0FBQyxVQUFVTjtZQUN2QztRQUNGO0lBQ0YsR0FBRztRQUFDSDtRQUFrQkU7S0FBWTtJQUVsQyxxQkFDRTtrQkFDR0osaUNBQ0M7OzhCQUNFLDhEQUFDVix1RkFBYUE7Ozs7OzhCQUNkLDhEQUFDSyxvRkFBWUE7Ozs7OzhCQUNiLDhEQUFDQyx1RkFBYUE7Ozs7OzhCQUNkLDhEQUFDQyxvRkFBWUE7Ozs7Ozs7O0FBS3ZCO0dBMUN3QkM7O1FBR0VQLHFFQUFpQkE7OztLQUhuQk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IFN2Z0JhY2tncm91bmQgfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9zdmdCYWNrZ3JvdW5kL3N2Z0JhY2tncm91bmQnO1xuaW1wb3J0IHsgdXNlU2Nyb2xsU3RvcmVOYXYgfSBmcm9tICdAL3N0b3Jlcy9uYXZTY3JvbGxTdG9yZSc7XG5pbXBvcnQgbG9hZGluZ1N0b3JlIGZyb20gJ0Avc3RvcmVzL2luaXRpYWxMb2FkaW5nJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaXJzdFNlY3Rpb24gfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9maXJzdFNlY3Rpb24vZmlyc3RTZWN0aW9uJztcbmltcG9ydCB7IFNlY29uZFNlY3Rpb24gfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS9zZWNvbmRTZWN0aW9uL3NlY29uZFNlY3Rpb24nO1xuaW1wb3J0IHsgVGhpcmRTZWN0aW9uIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvdGhpcmRTZWN0aW9uL3RoaXJkU2VjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IHBvc3RzIH0pIHtcbiAgY29uc3QgbG9hZE1haW5Db250ZW50ID0gbG9hZGluZ1N0b3JlKChzdGF0ZSkgPT4gc3RhdGUubG9hZE1haW5Db250ZW50KTtcbiAgY29uc3QgW2lzTGlzdGVuZXJBY3RpdmUsIHNldElzTGlzdGVuZXJBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHsgc2V0U2Nyb2xsZWQgfSA9IHVzZVNjcm9sbFN0b3JlTmF2KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBjb25zb2xlLmxvZygnU2Nyb2xsJywgc2Nyb2xsWSk7XG5cbiAgICAgIGlmIChzY3JvbGxZID4gMTAgJiYgaXNMaXN0ZW5lckFjdGl2ZSkge1xuICAgICAgICBzZXRTY3JvbGxlZCh0cnVlKTtcbiAgICAgICAgc2V0SXNMaXN0ZW5lckFjdGl2ZShmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKHNjcm9sbFkgPCAxMiAmJiAhaXNMaXN0ZW5lckFjdGl2ZSkge1xuICAgICAgICBzZXRTY3JvbGxlZChmYWxzZSk7XG4gICAgICAgIHNldElzTGlzdGVuZXJBY3RpdmUodHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChpc0xpc3RlbmVyQWN0aXZlKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKGlzTGlzdGVuZXJBY3RpdmUpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2lzTGlzdGVuZXJBY3RpdmUsIHNldFNjcm9sbGVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xvYWRNYWluQ29udGVudCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFN2Z0JhY2tncm91bmQgLz5cbiAgICAgICAgICA8Rmlyc3RTZWN0aW9uIC8+XG4gICAgICAgICAgPFNlY29uZFNlY3Rpb24gLz5cbiAgICAgICAgICA8VGhpcmRTZWN0aW9uIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTdmdCYWNrZ3JvdW5kIiwidXNlU2Nyb2xsU3RvcmVOYXYiLCJsb2FkaW5nU3RvcmUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZpcnN0U2VjdGlvbiIsIlNlY29uZFNlY3Rpb24iLCJUaGlyZFNlY3Rpb24iLCJBcHAiLCJwb3N0cyIsImxvYWRNYWluQ29udGVudCIsInN0YXRlIiwiaXNMaXN0ZW5lckFjdGl2ZSIsInNldElzTGlzdGVuZXJBY3RpdmUiLCJzZXRTY3JvbGxlZCIsImhhbmRsZVNjcm9sbCIsInNjcm9sbFkiLCJ3aW5kb3ciLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});