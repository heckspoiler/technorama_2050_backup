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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_home_svgBackground_svgBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/home/svgBackground/svgBackground */ \"(app-pages-browser)/./components/home/svgBackground/svgBackground.js\");\n/* harmony import */ var _stores_navScrollStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/stores/navScrollStore */ \"(app-pages-browser)/./stores/navScrollStore.js\");\n/* harmony import */ var _stores_initialLoading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/stores/initialLoading */ \"(app-pages-browser)/./stores/initialLoading.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_home_firstSection_firstSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/home/firstSection/firstSection */ \"(app-pages-browser)/./components/home/firstSection/firstSection.js\");\n/* harmony import */ var _components_home_secondSection_secondSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/home/secondSection/secondSection */ \"(app-pages-browser)/./components/home/secondSection/secondSection.js\");\n/* harmony import */ var _components_home_thirdSection_thirdSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/home/thirdSection/thirdSection */ \"(app-pages-browser)/./components/home/thirdSection/thirdSection.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction App(param) {\n    let { posts } = param;\n    _s();\n    const loadMainContent = (0,_stores_initialLoading__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((state)=>state.loadMainContent);\n    const { setScrolled } = (0,_stores_navScrollStore__WEBPACK_IMPORTED_MODULE_2__.useScrollStoreNav)();\n    const [testnumber, setTestnumber] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const isScrolled = window.scrollY > 10;\n            if (isScrolled && testnumber === 0) {\n                setTestnumber(1);\n                setScrolled(true);\n            } else if (!isScrolled && testnumber === 1) {\n                setTestnumber(0);\n                setScrolled(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        testnumber,\n        setScrolled\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loadMainContent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_svgBackground_svgBackground__WEBPACK_IMPORTED_MODULE_1__.SvgBackground, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_firstSection_firstSection__WEBPACK_IMPORTED_MODULE_5__.FirstSection, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_secondSection_secondSection__WEBPACK_IMPORTED_MODULE_6__.SecondSection, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_thirdSection_thirdSection__WEBPACK_IMPORTED_MODULE_7__.ThirdSection, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n}\n_s(App, \"wu6phuD4WMn7qVXAT39REiVuXTg=\", false, function() {\n    return [\n        _stores_navScrollStore__WEBPACK_IMPORTED_MODULE_2__.useScrollStoreNav\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUU4RTtBQUNsQjtBQUNUO0FBQ1A7QUFDK0I7QUFDRztBQUNIO0FBRTVELFNBQVNRLElBQUksS0FBUztRQUFULEVBQUVDLEtBQUssRUFBRSxHQUFUOztJQUMxQixNQUFNQyxrQkFBa0JSLGtFQUFZQSxDQUFDLENBQUNTLFFBQVVBLE1BQU1ELGVBQWU7SUFDckUsTUFBTSxFQUFFRSxXQUFXLEVBQUUsR0FBR1gseUVBQWlCQTtJQUN6QyxNQUFNLENBQUNZLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFFN0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVksZUFBZTtZQUNuQixNQUFNQyxhQUFhQyxPQUFPQyxPQUFPLEdBQUc7WUFDcEMsSUFBSUYsY0FBY0gsZUFBZSxHQUFHO2dCQUNsQ0MsY0FBYztnQkFDZEYsWUFBWTtZQUNkLE9BQU8sSUFBSSxDQUFDSSxjQUFjSCxlQUFlLEdBQUc7Z0JBQzFDQyxjQUFjO2dCQUNkRixZQUFZO1lBQ2Q7UUFDRjtRQUVBSyxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSjtRQUVsQyxPQUFPO1lBQ0xFLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVMO1FBQ3ZDO0lBQ0YsR0FBRztRQUFDRjtRQUFZRDtLQUFZO0lBRTVCLHFCQUNFO2tCQUNHRixpQ0FDQzs7OEJBQ0UsOERBQUNWLHVGQUFhQTs7Ozs7OEJBQ2QsOERBQUNLLG9GQUFZQTs7Ozs7OEJBQ2IsOERBQUNDLHVGQUFhQTs7Ozs7OEJBQ2QsOERBQUNDLG9GQUFZQTs7Ozs7Ozs7QUFLdkI7R0FwQ3dCQzs7UUFFRVAscUVBQWlCQTs7O0tBRm5CTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgU3ZnQmFja2dyb3VuZCB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL3N2Z0JhY2tncm91bmQvc3ZnQmFja2dyb3VuZCc7XG5pbXBvcnQgeyB1c2VTY3JvbGxTdG9yZU5hdiB9IGZyb20gJ0Avc3RvcmVzL25hdlNjcm9sbFN0b3JlJztcbmltcG9ydCBsb2FkaW5nU3RvcmUgZnJvbSAnQC9zdG9yZXMvaW5pdGlhbExvYWRpbmcnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpcnN0U2VjdGlvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL2ZpcnN0U2VjdGlvbi9maXJzdFNlY3Rpb24nO1xuaW1wb3J0IHsgU2Vjb25kU2VjdGlvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL3NlY29uZFNlY3Rpb24vc2Vjb25kU2VjdGlvbic7XG5pbXBvcnQgeyBUaGlyZFNlY3Rpb24gfSBmcm9tICdAL2NvbXBvbmVudHMvaG9tZS90aGlyZFNlY3Rpb24vdGhpcmRTZWN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgcG9zdHMgfSkge1xuICBjb25zdCBsb2FkTWFpbkNvbnRlbnQgPSBsb2FkaW5nU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5sb2FkTWFpbkNvbnRlbnQpO1xuICBjb25zdCB7IHNldFNjcm9sbGVkIH0gPSB1c2VTY3JvbGxTdG9yZU5hdigpO1xuICBjb25zdCBbdGVzdG51bWJlciwgc2V0VGVzdG51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGlzU2Nyb2xsZWQgPSB3aW5kb3cuc2Nyb2xsWSA+IDEwO1xuICAgICAgaWYgKGlzU2Nyb2xsZWQgJiYgdGVzdG51bWJlciA9PT0gMCkge1xuICAgICAgICBzZXRUZXN0bnVtYmVyKDEpO1xuICAgICAgICBzZXRTY3JvbGxlZCh0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzU2Nyb2xsZWQgJiYgdGVzdG51bWJlciA9PT0gMSkge1xuICAgICAgICBzZXRUZXN0bnVtYmVyKDApO1xuICAgICAgICBzZXRTY3JvbGxlZChmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFt0ZXN0bnVtYmVyLCBzZXRTY3JvbGxlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsb2FkTWFpbkNvbnRlbnQgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxTdmdCYWNrZ3JvdW5kIC8+XG4gICAgICAgICAgPEZpcnN0U2VjdGlvbiAvPlxuICAgICAgICAgIDxTZWNvbmRTZWN0aW9uIC8+XG4gICAgICAgICAgPFRoaXJkU2VjdGlvbiAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU3ZnQmFja2dyb3VuZCIsInVzZVNjcm9sbFN0b3JlTmF2IiwibG9hZGluZ1N0b3JlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGaXJzdFNlY3Rpb24iLCJTZWNvbmRTZWN0aW9uIiwiVGhpcmRTZWN0aW9uIiwiQXBwIiwicG9zdHMiLCJsb2FkTWFpbkNvbnRlbnQiLCJzdGF0ZSIsInNldFNjcm9sbGVkIiwidGVzdG51bWJlciIsInNldFRlc3RudW1iZXIiLCJoYW5kbGVTY3JvbGwiLCJpc1Njcm9sbGVkIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});