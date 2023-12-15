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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _videoComponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videoComponent.module.css */ \"(app-pages-browser)/./components/home/secondSection/video/videoComponent.module.css\");\n/* harmony import */ var _videoComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_videoComponent_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst VideoComponent = ()=>{\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const video = videoRef.current;\n            if (video) {\n                const scrollFraction = window.scrollY / (document.body.scrollHeight - window.innerHeight);\n                const videoTime = scrollFraction * video.duration;\n                video.currentTime = videoTime;\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_videoComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().videoContainer),\n        ref: videoRef,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n            autoPlay: true,\n            loop: true,\n            muted: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: \"/videos/home/secondSection/mockup.mp4\",\n                    type: \"video/mp4\"\n                }, void 0, false, {\n                    fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/components/home/secondSection/video/videoComponent.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                \"Your browser doesn't support HTML5 video.\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/components/home/secondSection/video/videoComponent.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/Carlito/Desktop/ozelot/ozelot_repos/technorama_2050_backup/components/home/secondSection/video/videoComponent.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VideoComponent, \"PdMsmLAy5JKU3vCrhAlqGYQfKuA=\");\n_c = VideoComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoComponent);\nvar _c;\n$RefreshReg$(_c, \"VideoComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaG9tZS9zZWNvbmRTZWN0aW9uL3ZpZGVvL3ZpZGVvQ29tcG9uZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlEO0FBQ0E7QUFFakQsTUFBTUksaUJBQWlCOztJQUNyQixNQUFNQyxXQUFXSCw2Q0FBTUEsQ0FBQztJQUN4QkQsZ0RBQVNBLENBQUM7UUFDUixNQUFNSyxlQUFlO1lBQ25CLE1BQU1DLFFBQVFGLFNBQVNHLE9BQU87WUFDOUIsSUFBSUQsT0FBTztnQkFDVCxNQUFNRSxpQkFDSkMsT0FBT0MsT0FBTyxHQUFJQyxDQUFBQSxTQUFTQyxJQUFJLENBQUNDLFlBQVksR0FBR0osT0FBT0ssV0FBVztnQkFDbkUsTUFBTUMsWUFBWVAsaUJBQWlCRixNQUFNVSxRQUFRO2dCQUNqRFYsTUFBTVcsV0FBVyxHQUFHRjtZQUN0QjtRQUNGO1FBRUFOLE9BQU9TLGdCQUFnQixDQUFDLFVBQVViO1FBRWxDLE9BQU87WUFDTEksT0FBT1UsbUJBQW1CLENBQUMsVUFBVWQ7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ2U7UUFBSUMsV0FBV25CLGtGQUFxQjtRQUFFcUIsS0FBS25CO2tCQUMxQyw0RUFBQ0U7WUFBTWtCLFFBQVE7WUFBQ0MsSUFBSTtZQUFDQyxLQUFLOzs4QkFDeEIsOERBQUNDO29CQUFPQyxLQUFJO29CQUF3Q0MsTUFBSzs7Ozs7O2dCQUFjOzs7Ozs7Ozs7Ozs7QUFLL0U7R0EzQk0xQjtLQUFBQTtBQTZCTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hvbWUvc2Vjb25kU2VjdGlvbi92aWRlby92aWRlb0NvbXBvbmVudC5qcz8zNzJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi92aWRlb0NvbXBvbmVudC5tb2R1bGUuY3NzJztcblxuY29uc3QgVmlkZW9Db21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHZpZGVvID0gdmlkZW9SZWYuY3VycmVudDtcbiAgICAgIGlmICh2aWRlbykge1xuICAgICAgICBjb25zdCBzY3JvbGxGcmFjdGlvbiA9XG4gICAgICAgICAgd2luZG93LnNjcm9sbFkgLyAoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICBjb25zdCB2aWRlb1RpbWUgPSBzY3JvbGxGcmFjdGlvbiAqIHZpZGVvLmR1cmF0aW9uO1xuICAgICAgICB2aWRlby5jdXJyZW50VGltZSA9IHZpZGVvVGltZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9Db250YWluZXJ9IHJlZj17dmlkZW9SZWZ9PlxuICAgICAgPHZpZGVvIGF1dG9QbGF5IGxvb3AgbXV0ZWQ+XG4gICAgICAgIDxzb3VyY2Ugc3JjPVwiL3ZpZGVvcy9ob21lL3NlY29uZFNlY3Rpb24vbW9ja3VwLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxuICAgICAgICBZb3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEhUTUw1IHZpZGVvLlxuICAgICAgPC92aWRlbz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwic3R5bGVzIiwiVmlkZW9Db21wb25lbnQiLCJ2aWRlb1JlZiIsImhhbmRsZVNjcm9sbCIsInZpZGVvIiwiY3VycmVudCIsInNjcm9sbEZyYWN0aW9uIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbEhlaWdodCIsImlubmVySGVpZ2h0IiwidmlkZW9UaW1lIiwiZHVyYXRpb24iLCJjdXJyZW50VGltZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwidmlkZW9Db250YWluZXIiLCJyZWYiLCJhdXRvUGxheSIsImxvb3AiLCJtdXRlZCIsInNvdXJjZSIsInNyYyIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/home/secondSection/video/videoComponent.js\n"));

/***/ })

});