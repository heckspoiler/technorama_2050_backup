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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/page */ \"(app-pages-browser)/./app/home/page.js\");\n/* harmony import */ var _components_home_svgBackground_svgBackground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/home/svgBackground/svgBackground */ \"(app-pages-browser)/./components/home/svgBackground/svgBackground.js\");\n/* harmony import */ var _stores_navScrollStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/stores/navScrollStore */ \"(app-pages-browser)/./stores/navScrollStore.js\");\n/* harmony import */ var _stores_initialLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/stores/initialLoading */ \"(app-pages-browser)/./stores/initialLoading.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_home_firstSection_FirstSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/home/firstSection/FirstSection */ \"(app-pages-browser)/./components/home/firstSection/FirstSection.js\");\n/* harmony import */ var _components_home_secondSection_SecondSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/home/secondSection/SecondSection */ \"(app-pages-browser)/./components/home/secondSection/SecondSection.js\");\n/* harmony import */ var _components_home_thirdSection_thirdSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/home/thirdSection/thirdSection */ \"(app-pages-browser)/./components/home/thirdSection/thirdSection.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction App(param) {\n    let { posts } = param;\n    _s();\n    const loadMainContent = (0,_stores_initialLoading__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((state)=>state.loadMainContent);\n    const { setScrolled } = (0,_stores_navScrollStore__WEBPACK_IMPORTED_MODULE_3__.useScrollStoreNav)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const isScrolled = window.scrollY > 1;\n            console.log(\"isScrolled: \", isScrolled);\n            setScrolled(isScrolled);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        setScrolled\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loadMainContent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                console.log(\"Rendering Home and SvgBackground\"),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_svgBackground_svgBackground__WEBPACK_IMPORTED_MODULE_2__.SvgBackground, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_firstSection_FirstSection__WEBPACK_IMPORTED_MODULE_6__.FirstSection, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_secondSection_SecondSection__WEBPACK_IMPORTED_MODULE_7__.SecondSection, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_thirdSection_thirdSection__WEBPACK_IMPORTED_MODULE_8__.ThirdSection, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n}\n_s(App, \"LvFdzjXDHpW+kdTAZ5hd7EMeUHA=\", false, function() {\n    return [\n        _stores_navScrollStore__WEBPACK_IMPORTED_MODULE_3__.useScrollStoreNav\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFK0I7QUFDK0M7QUFDbEI7QUFDVDtBQUNqQjtBQUN5QztBQUNHO0FBQ0g7QUFFNUQsU0FBU1EsSUFBSSxLQUFTO1FBQVQsRUFBRUMsS0FBSyxFQUFFLEdBQVQ7O0lBQzFCLE1BQU1DLGtCQUFrQlAsa0VBQVlBLENBQUMsQ0FBQ1EsUUFBVUEsTUFBTUQsZUFBZTtJQUNyRSxNQUFNLEVBQUVFLFdBQVcsRUFBRSxHQUFHVix5RUFBaUJBO0lBRXpDRSxnREFBU0EsQ0FBQztRQUNSLE1BQU1TLGVBQWU7WUFDbkIsTUFBTUMsYUFBYUMsT0FBT0MsT0FBTyxHQUFHO1lBQ3BDQyxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCSjtZQUM1QkYsWUFBWUU7UUFDZDtRQUNBQyxPQUFPSSxnQkFBZ0IsQ0FBQyxVQUFVTjtRQUVsQyxPQUFPO1lBQ0xFLE9BQU9LLG1CQUFtQixDQUFDLFVBQVVQO1FBQ3ZDO0lBQ0YsR0FBRztRQUFDRDtLQUFZO0lBRWhCLHFCQUNFO2tCQUNHRixpQ0FDQzs7Z0JBQ0dPLFFBQVFDLEdBQUcsQ0FBQzs4QkFDYiw4REFBQ2pCLHVGQUFhQTs7Ozs7OEJBQ2QsOERBQUNJLG9GQUFZQTs7Ozs7OEJBQ2IsOERBQUNDLHVGQUFhQTs7Ozs7OEJBQ2QsOERBQUNDLG9GQUFZQTs7Ozs7Ozs7QUFLdkI7R0E5QndCQzs7UUFFRU4scUVBQWlCQTs7O0tBRm5CTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9ob21lL3BhZ2UnO1xuaW1wb3J0IHsgU3ZnQmFja2dyb3VuZCB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL3N2Z0JhY2tncm91bmQvc3ZnQmFja2dyb3VuZCc7XG5pbXBvcnQgeyB1c2VTY3JvbGxTdG9yZU5hdiB9IGZyb20gJ0Avc3RvcmVzL25hdlNjcm9sbFN0b3JlJztcbmltcG9ydCBsb2FkaW5nU3RvcmUgZnJvbSAnQC9zdG9yZXMvaW5pdGlhbExvYWRpbmcnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmlyc3RTZWN0aW9uIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvZmlyc3RTZWN0aW9uL0ZpcnN0U2VjdGlvbic7XG5pbXBvcnQgeyBTZWNvbmRTZWN0aW9uIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvc2Vjb25kU2VjdGlvbi9TZWNvbmRTZWN0aW9uJztcbmltcG9ydCB7IFRoaXJkU2VjdGlvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL3RoaXJkU2VjdGlvbi90aGlyZFNlY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBwb3N0cyB9KSB7XG4gIGNvbnN0IGxvYWRNYWluQ29udGVudCA9IGxvYWRpbmdTdG9yZSgoc3RhdGUpID0+IHN0YXRlLmxvYWRNYWluQ29udGVudCk7XG4gIGNvbnN0IHsgc2V0U2Nyb2xsZWQgfSA9IHVzZVNjcm9sbFN0b3JlTmF2KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBpc1Njcm9sbGVkID0gd2luZG93LnNjcm9sbFkgPiAxO1xuICAgICAgY29uc29sZS5sb2coJ2lzU2Nyb2xsZWQ6ICcsIGlzU2Nyb2xsZWQpO1xuICAgICAgc2V0U2Nyb2xsZWQoaXNTY3JvbGxlZCk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbc2V0U2Nyb2xsZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bG9hZE1haW5Db250ZW50ICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7Y29uc29sZS5sb2coJ1JlbmRlcmluZyBIb21lIGFuZCBTdmdCYWNrZ3JvdW5kJyl9XG4gICAgICAgICAgPFN2Z0JhY2tncm91bmQgLz5cbiAgICAgICAgICA8Rmlyc3RTZWN0aW9uIC8+XG4gICAgICAgICAgPFNlY29uZFNlY3Rpb24gLz5cbiAgICAgICAgICA8VGhpcmRTZWN0aW9uIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIb21lIiwiU3ZnQmFja2dyb3VuZCIsInVzZVNjcm9sbFN0b3JlTmF2IiwibG9hZGluZ1N0b3JlIiwidXNlRWZmZWN0IiwiRmlyc3RTZWN0aW9uIiwiU2Vjb25kU2VjdGlvbiIsIlRoaXJkU2VjdGlvbiIsIkFwcCIsInBvc3RzIiwibG9hZE1haW5Db250ZW50Iiwic3RhdGUiLCJzZXRTY3JvbGxlZCIsImhhbmRsZVNjcm9sbCIsImlzU2Nyb2xsZWQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});