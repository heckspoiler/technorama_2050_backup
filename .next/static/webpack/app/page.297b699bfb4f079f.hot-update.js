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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _stores_navScrollStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/stores/navScrollStore */ \"(app-pages-browser)/./stores/navScrollStore.js\");\n/* harmony import */ var _stores_initialLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/stores/initialLoading */ \"(app-pages-browser)/./stores/initialLoading.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_home_firstSection_firstSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/home/firstSection/firstSection */ \"(app-pages-browser)/./components/home/firstSection/firstSection.js\");\n/* harmony import */ var _components_home_secondSection_secondSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/home/secondSection/secondSection */ \"(app-pages-browser)/./components/home/secondSection/secondSection.js\");\n/* harmony import */ var _components_home_thirdSection_thirdSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/home/thirdSection/thirdSection */ \"(app-pages-browser)/./components/home/thirdSection/thirdSection.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction App(param) {\n    let { posts } = param;\n    _s();\n    const { setScrolled } = (0,_stores_navScrollStore__WEBPACK_IMPORTED_MODULE_1__.useScrollStoreNav)();\n    const [triggerAnimation, setTriggerAnimation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const animationTriggered = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);\n    const handleScroll = ()=>{\n        const threshold = 10;\n        const currentScroll = window.scrollY;\n        if (currentScroll > threshold && !animationTriggered.current) {\n            setTriggerAnimation(true);\n            console.log(\"trigger\");\n            animationTriggered.current = true; // Mark as triggered\n        } else if (currentScroll <= threshold && animationTriggered.current) {\n            setTriggerAnimation(false); // Trigger the reverse animation\n            console.log(\"reverse\");\n            animationTriggered.current = false; // Reset\n        }\n        const gradientAngle = currentScroll / 10 % 360;\n        document.body.style.background = \"linear-gradient(\".concat(gradientAngle, \"deg, rgba(186,227,229,1) 0%, rgba(235,240,162,1) 30%, rgba(186,227,229,1) 100%)\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setScrolled(triggerAnimation);\n        window.addEventListener(\"scroll\", handleScroll);\n        // Clean up\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        triggerAnimation,\n        setScrolled\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_firstSection_firstSection__WEBPACK_IMPORTED_MODULE_4__.FirstSection, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_secondSection_secondSection__WEBPACK_IMPORTED_MODULE_5__.SecondSection, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_thirdSection_thirdSection__WEBPACK_IMPORTED_MODULE_6__.ThirdSection, {}, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/app/page.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n}\n_s(App, \"X3eayCk4Rmg0vnOZp4rWwBxnScY=\", false, function() {\n    return [\n        _stores_navScrollStore__WEBPACK_IMPORTED_MODULE_1__.useScrollStoreNav\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRTREO0FBQ1Q7QUFDQztBQUN1QjtBQUNHO0FBQ0g7QUFFNUQsU0FBU1EsSUFBSSxLQUFTO1FBQVQsRUFBRUMsS0FBSyxFQUFFLEdBQVQ7O0lBQzFCLE1BQU0sRUFBRUMsV0FBVyxFQUFFLEdBQUdWLHlFQUFpQkE7SUFDekMsTUFBTSxDQUFDVyxrQkFBa0JDLG9CQUFvQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNVSxxQkFBcUJULDZDQUFNQSxDQUFDO0lBRWxDLE1BQU1VLGVBQWU7UUFDbkIsTUFBTUMsWUFBWTtRQUNsQixNQUFNQyxnQkFBZ0JDLE9BQU9DLE9BQU87UUFFcEMsSUFBSUYsZ0JBQWdCRCxhQUFhLENBQUNGLG1CQUFtQk0sT0FBTyxFQUFFO1lBQzVEUCxvQkFBb0I7WUFDcEJRLFFBQVFDLEdBQUcsQ0FBQztZQUNaUixtQkFBbUJNLE9BQU8sR0FBRyxNQUFNLG9CQUFvQjtRQUN6RCxPQUFPLElBQUlILGlCQUFpQkQsYUFBYUYsbUJBQW1CTSxPQUFPLEVBQUU7WUFDbkVQLG9CQUFvQixRQUFRLGdDQUFnQztZQUM1RFEsUUFBUUMsR0FBRyxDQUFDO1lBQ1pSLG1CQUFtQk0sT0FBTyxHQUFHLE9BQU8sUUFBUTtRQUM5QztRQUNBLE1BQU1HLGdCQUFnQixnQkFBaUIsS0FBTTtRQUM3Q0MsU0FBU0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFVBQVUsR0FBRyxtQkFBaUMsT0FBZEosZUFBYztJQUNwRTtJQUVBcEIsZ0RBQVNBLENBQUM7UUFDUlEsWUFBWUM7UUFFWk0sT0FBT1UsZ0JBQWdCLENBQUMsVUFBVWI7UUFFbEMsV0FBVztRQUNYLE9BQU87WUFDTEcsT0FBT1csbUJBQW1CLENBQUMsVUFBVWQ7UUFDdkM7SUFDRixHQUFHO1FBQUNIO1FBQWtCRDtLQUFZO0lBRWxDLHFCQUNFO2tCQVVFOzs4QkFDRSw4REFBQ0wsb0ZBQVlBOzs7Ozs4QkFDYiw4REFBQ0MsdUZBQWFBOzs7Ozs4QkFDZCw4REFBQ0Msb0ZBQVlBOzs7Ozs7OztBQUlyQjtHQW5Ed0JDOztRQUNFUixxRUFBaUJBOzs7S0FEbkJRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VTY3JvbGxTdG9yZU5hdiB9IGZyb20gJ0Avc3RvcmVzL25hdlNjcm9sbFN0b3JlJztcbmltcG9ydCBsb2FkaW5nU3RvcmUgZnJvbSAnQC9zdG9yZXMvaW5pdGlhbExvYWRpbmcnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmlyc3RTZWN0aW9uIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvZmlyc3RTZWN0aW9uL2ZpcnN0U2VjdGlvbic7XG5pbXBvcnQgeyBTZWNvbmRTZWN0aW9uIH0gZnJvbSAnQC9jb21wb25lbnRzL2hvbWUvc2Vjb25kU2VjdGlvbi9zZWNvbmRTZWN0aW9uJztcbmltcG9ydCB7IFRoaXJkU2VjdGlvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9ob21lL3RoaXJkU2VjdGlvbi90aGlyZFNlY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBwb3N0cyB9KSB7XG4gIGNvbnN0IHsgc2V0U2Nyb2xsZWQgfSA9IHVzZVNjcm9sbFN0b3JlTmF2KCk7XG4gIGNvbnN0IFt0cmlnZ2VyQW5pbWF0aW9uLCBzZXRUcmlnZ2VyQW5pbWF0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgYW5pbWF0aW9uVHJpZ2dlcmVkID0gdXNlUmVmKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgdGhyZXNob2xkID0gMTA7XG4gICAgY29uc3QgY3VycmVudFNjcm9sbCA9IHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgaWYgKGN1cnJlbnRTY3JvbGwgPiB0aHJlc2hvbGQgJiYgIWFuaW1hdGlvblRyaWdnZXJlZC5jdXJyZW50KSB7XG4gICAgICBzZXRUcmlnZ2VyQW5pbWF0aW9uKHRydWUpO1xuICAgICAgY29uc29sZS5sb2coJ3RyaWdnZXInKTtcbiAgICAgIGFuaW1hdGlvblRyaWdnZXJlZC5jdXJyZW50ID0gdHJ1ZTsgLy8gTWFyayBhcyB0cmlnZ2VyZWRcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRTY3JvbGwgPD0gdGhyZXNob2xkICYmIGFuaW1hdGlvblRyaWdnZXJlZC5jdXJyZW50KSB7XG4gICAgICBzZXRUcmlnZ2VyQW5pbWF0aW9uKGZhbHNlKTsgLy8gVHJpZ2dlciB0aGUgcmV2ZXJzZSBhbmltYXRpb25cbiAgICAgIGNvbnNvbGUubG9nKCdyZXZlcnNlJyk7XG4gICAgICBhbmltYXRpb25UcmlnZ2VyZWQuY3VycmVudCA9IGZhbHNlOyAvLyBSZXNldFxuICAgIH1cbiAgICBjb25zdCBncmFkaWVudEFuZ2xlID0gKGN1cnJlbnRTY3JvbGwgLyAxMCkgJSAzNjA7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYGxpbmVhci1ncmFkaWVudCgke2dyYWRpZW50QW5nbGV9ZGVnLCByZ2JhKDE4NiwyMjcsMjI5LDEpIDAlLCByZ2JhKDIzNSwyNDAsMTYyLDEpIDMwJSwgcmdiYSgxODYsMjI3LDIyOSwxKSAxMDAlKWA7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTY3JvbGxlZCh0cmlnZ2VyQW5pbWF0aW9uKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgLy8gQ2xlYW4gdXBcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW3RyaWdnZXJBbmltYXRpb24sIHNldFNjcm9sbGVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIHtsb2FkTWFpbkNvbnRlbnQgJiYgKFxuICAgICAgICA8PlxuICBcbiAgICAgICAgICA8Rmlyc3RTZWN0aW9uIC8+XG4gICAgICAgICAgPFNlY29uZFNlY3Rpb24gLz5cbiAgICAgICAgICA8VGhpcmRTZWN0aW9uIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX0gZW5hYmxlIGFnYWluIGFzIHNvb24gYXMgYW5pbWF0aW9uIGlzIG5lZWRlZCovfVxuXG4gICAgICA8PlxuICAgICAgICA8Rmlyc3RTZWN0aW9uIC8+XG4gICAgICAgIDxTZWNvbmRTZWN0aW9uIC8+XG4gICAgICAgIDxUaGlyZFNlY3Rpb24gLz5cbiAgICAgIDwvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVNjcm9sbFN0b3JlTmF2IiwibG9hZGluZ1N0b3JlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJGaXJzdFNlY3Rpb24iLCJTZWNvbmRTZWN0aW9uIiwiVGhpcmRTZWN0aW9uIiwiQXBwIiwicG9zdHMiLCJzZXRTY3JvbGxlZCIsInRyaWdnZXJBbmltYXRpb24iLCJzZXRUcmlnZ2VyQW5pbWF0aW9uIiwiYW5pbWF0aW9uVHJpZ2dlcmVkIiwiaGFuZGxlU2Nyb2xsIiwidGhyZXNob2xkIiwiY3VycmVudFNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsImdyYWRpZW50QW5nbGUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImJhY2tncm91bmQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});