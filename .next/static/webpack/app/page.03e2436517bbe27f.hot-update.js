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

/***/ "(app-pages-browser)/./components/home/secondSection/video/videoComponent.js":
/*!***************************************************************!*\
  !*** ./components/home/secondSection/video/videoComponent.js ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _videoComponent_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videoComponent.module.css */ \"(app-pages-browser)/./components/home/secondSection/video/videoComponent.module.css\");\n/* harmony import */ var _videoComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_videoComponent_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var scrolly_video_dist_ScrollyVideo_cjs_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scrolly-video/dist/ScrollyVideo.cjs.jsx */ \"(app-pages-browser)/./node_modules/scrolly-video/dist/ScrollyVideo.cjs.jsx\");\n/* harmony import */ var scrolly_video_dist_ScrollyVideo_cjs_jsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scrolly_video_dist_ScrollyVideo_cjs_jsx__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst VideoComponent = ()=>{\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    //   useEffect(() => {\n    //     const handleScroll = () => {\n    //       const video = videoRef.current;\n    //       if (video) {\n    //         // The height of the viewport\n    //         const viewportHeight = window.innerHeight;\n    //         // Adjusted scroll position\n    //         const adjustedScrollY = window.scrollY - viewportHeight;\n    //         console.log('adscroll', adjustedScrollY);\n    //         // Check if the adjusted scroll position is positive\n    //         if (adjustedScrollY > 0) {\n    //           // Calculate the fraction of scroll relative to the adjusted position\n    //           const scrollFraction =\n    //             adjustedScrollY / (document.body.scrollHeight - 2 * viewportHeight);\n    //           const videoTime = scrollFraction * video.duration;\n    //           video.currentTime = Math.min(videoTime, video.duration);\n    //         }\n    //       }\n    //     };\n    //     window.addEventListener('scroll', handleScroll);\n    //     return () => {\n    //       window.removeEventListener('scroll', handleScroll);\n    //     };\n    //   }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_videoComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().videoContainer)\n    }, void 0, false, {\n        fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/components/home/secondSection/video/videoComponent.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VideoComponent, \"0CLVWOVx+8g0ODBjgEMJWUwEryM=\");\n_c = VideoComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoComponent);\nvar _c;\n$RefreshReg$(_c, \"VideoComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaG9tZS9zZWNvbmRTZWN0aW9uL3ZpZGVvL3ZpZGVvQ29tcG9uZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFaUQ7QUFDQTtBQUNrQjtBQUVuRSxNQUFNSyxpQkFBaUI7O0lBQ3JCLE1BQU1DLFdBQVdKLDZDQUFNQSxDQUFDO0lBRXhCLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsd0NBQXdDO0lBQ3hDLHFCQUFxQjtJQUNyQix3Q0FBd0M7SUFDeEMscURBQXFEO0lBRXJELHNDQUFzQztJQUN0QyxtRUFBbUU7SUFDbkUsb0RBQW9EO0lBRXBELCtEQUErRDtJQUMvRCxxQ0FBcUM7SUFDckMsa0ZBQWtGO0lBQ2xGLG1DQUFtQztJQUNuQyxtRkFBbUY7SUFDbkYsK0RBQStEO0lBQy9ELHFFQUFxRTtJQUNyRSxZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7SUFFVCx1REFBdUQ7SUFFdkQscUJBQXFCO0lBQ3JCLDREQUE0RDtJQUM1RCxTQUFTO0lBQ1QsWUFBWTtJQUVaLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFXTCxrRkFBcUI7Ozs7OztBQU96QztHQXhDTUU7S0FBQUE7QUEwQ04sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL3NlY29uZFNlY3Rpb24vdmlkZW8vdmlkZW9Db21wb25lbnQuanM/MzcyYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi92aWRlb0NvbXBvbmVudC5tb2R1bGUuY3NzJztcbmltcG9ydCBTY3JvbGx5VmlkZW8gZnJvbSAnc2Nyb2xseS12aWRlby9kaXN0L1Njcm9sbHlWaWRlby5janMuanN4JztcblxuY29uc3QgVmlkZW9Db21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgLy8gICAgICAgY29uc3QgdmlkZW8gPSB2aWRlb1JlZi5jdXJyZW50O1xuICAvLyAgICAgICBpZiAodmlkZW8pIHtcbiAgLy8gICAgICAgICAvLyBUaGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydFxuICAvLyAgICAgICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gIC8vICAgICAgICAgLy8gQWRqdXN0ZWQgc2Nyb2xsIHBvc2l0aW9uXG4gIC8vICAgICAgICAgY29uc3QgYWRqdXN0ZWRTY3JvbGxZID0gd2luZG93LnNjcm9sbFkgLSB2aWV3cG9ydEhlaWdodDtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZygnYWRzY3JvbGwnLCBhZGp1c3RlZFNjcm9sbFkpO1xuXG4gIC8vICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGFkanVzdGVkIHNjcm9sbCBwb3NpdGlvbiBpcyBwb3NpdGl2ZVxuICAvLyAgICAgICAgIGlmIChhZGp1c3RlZFNjcm9sbFkgPiAwKSB7XG4gIC8vICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGZyYWN0aW9uIG9mIHNjcm9sbCByZWxhdGl2ZSB0byB0aGUgYWRqdXN0ZWQgcG9zaXRpb25cbiAgLy8gICAgICAgICAgIGNvbnN0IHNjcm9sbEZyYWN0aW9uID1cbiAgLy8gICAgICAgICAgICAgYWRqdXN0ZWRTY3JvbGxZIC8gKGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC0gMiAqIHZpZXdwb3J0SGVpZ2h0KTtcbiAgLy8gICAgICAgICAgIGNvbnN0IHZpZGVvVGltZSA9IHNjcm9sbEZyYWN0aW9uICogdmlkZW8uZHVyYXRpb247XG4gIC8vICAgICAgICAgICB2aWRlby5jdXJyZW50VGltZSA9IE1hdGgubWluKHZpZGVvVGltZSwgdmlkZW8uZHVyYXRpb24pO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfVxuICAvLyAgICAgfTtcblxuICAvLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG5cbiAgLy8gICAgIHJldHVybiAoKSA9PiB7XG4gIC8vICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAvLyAgICAgfTtcbiAgLy8gICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvQ29udGFpbmVyfT5cbiAgICAgIHsvKiA8dmlkZW8gcmVmPXt2aWRlb1JlZn0gYXV0b1BsYXkgbG9vcCBtdXRlZD5cbiAgICAgICAgPHNvdXJjZSBzcmM9XCIvdmlkZW9zL2hvbWUvc2Vjb25kU2VjdGlvbi9tb2NrdXAubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgIFlvdXIgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgSFRNTDUgdmlkZW8uXG4gICAgICA8L3ZpZGVvPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwic3R5bGVzIiwiU2Nyb2xseVZpZGVvIiwiVmlkZW9Db21wb25lbnQiLCJ2aWRlb1JlZiIsImRpdiIsImNsYXNzTmFtZSIsInZpZGVvQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/home/secondSection/video/videoComponent.js\n"));

/***/ })

});