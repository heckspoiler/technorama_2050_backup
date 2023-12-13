"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/delayed-stream";
exports.ids = ["vendor-chunks/delayed-stream"];
exports.modules = {

/***/ "(ssr)/./node_modules/delayed-stream/lib/delayed_stream.js":
/*!***********************************************************!*\
  !*** ./node_modules/delayed-stream/lib/delayed_stream.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar Stream = (__webpack_require__(/*! stream */ \"stream\").Stream);\nvar util = __webpack_require__(/*! util */ \"util\");\nmodule.exports = DelayedStream;\nfunction DelayedStream() {\n    this.source = null;\n    this.dataSize = 0;\n    this.maxDataSize = 1024 * 1024;\n    this.pauseStream = true;\n    this._maxDataSizeExceeded = false;\n    this._released = false;\n    this._bufferedEvents = [];\n}\nutil.inherits(DelayedStream, Stream);\nDelayedStream.create = function(source, options) {\n    var delayedStream = new this();\n    options = options || {};\n    for(var option in options){\n        delayedStream[option] = options[option];\n    }\n    delayedStream.source = source;\n    var realEmit = source.emit;\n    source.emit = function() {\n        delayedStream._handleEmit(arguments);\n        return realEmit.apply(source, arguments);\n    };\n    source.on(\"error\", function() {});\n    if (delayedStream.pauseStream) {\n        source.pause();\n    }\n    return delayedStream;\n};\nObject.defineProperty(DelayedStream.prototype, \"readable\", {\n    configurable: true,\n    enumerable: true,\n    get: function() {\n        return this.source.readable;\n    }\n});\nDelayedStream.prototype.setEncoding = function() {\n    return this.source.setEncoding.apply(this.source, arguments);\n};\nDelayedStream.prototype.resume = function() {\n    if (!this._released) {\n        this.release();\n    }\n    this.source.resume();\n};\nDelayedStream.prototype.pause = function() {\n    this.source.pause();\n};\nDelayedStream.prototype.release = function() {\n    this._released = true;\n    this._bufferedEvents.forEach((function(args) {\n        this.emit.apply(this, args);\n    }).bind(this));\n    this._bufferedEvents = [];\n};\nDelayedStream.prototype.pipe = function() {\n    var r = Stream.prototype.pipe.apply(this, arguments);\n    this.resume();\n    return r;\n};\nDelayedStream.prototype._handleEmit = function(args) {\n    if (this._released) {\n        this.emit.apply(this, args);\n        return;\n    }\n    if (args[0] === \"data\") {\n        this.dataSize += args[1].length;\n        this._checkIfMaxDataSizeExceeded();\n    }\n    this._bufferedEvents.push(args);\n};\nDelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {\n    if (this._maxDataSizeExceeded) {\n        return;\n    }\n    if (this.dataSize <= this.maxDataSize) {\n        return;\n    }\n    this._maxDataSizeExceeded = true;\n    var message = \"DelayedStream#maxDataSize of \" + this.maxDataSize + \" bytes exceeded.\";\n    this.emit(\"error\", new Error(message));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGVsYXllZC1zdHJlYW0vbGliL2RlbGF5ZWRfc3RyZWFtLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFJQSxTQUFTQyxvREFBd0I7QUFDckMsSUFBSUMsT0FBT0QsbUJBQU9BLENBQUM7QUFFbkJFLE9BQU9DLE9BQU8sR0FBR0M7QUFDakIsU0FBU0E7SUFDUCxJQUFJLENBQUNDLE1BQU0sR0FBRztJQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHO0lBQ2hCLElBQUksQ0FBQ0MsV0FBVyxHQUFHLE9BQU87SUFDMUIsSUFBSSxDQUFDQyxXQUFXLEdBQUc7SUFFbkIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBRztJQUM1QixJQUFJLENBQUNDLFNBQVMsR0FBRztJQUNqQixJQUFJLENBQUNDLGVBQWUsR0FBRyxFQUFFO0FBQzNCO0FBQ0FWLEtBQUtXLFFBQVEsQ0FBQ1IsZUFBZUw7QUFFN0JLLGNBQWNTLE1BQU0sR0FBRyxTQUFTUixNQUFNLEVBQUVTLE9BQU87SUFDN0MsSUFBSUMsZ0JBQWdCLElBQUksSUFBSTtJQUU1QkQsVUFBVUEsV0FBVyxDQUFDO0lBQ3RCLElBQUssSUFBSUUsVUFBVUYsUUFBUztRQUMxQkMsYUFBYSxDQUFDQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0UsT0FBTztJQUN6QztJQUVBRCxjQUFjVixNQUFNLEdBQUdBO0lBRXZCLElBQUlZLFdBQVdaLE9BQU9hLElBQUk7SUFDMUJiLE9BQU9hLElBQUksR0FBRztRQUNaSCxjQUFjSSxXQUFXLENBQUNDO1FBQzFCLE9BQU9ILFNBQVNJLEtBQUssQ0FBQ2hCLFFBQVFlO0lBQ2hDO0lBRUFmLE9BQU9pQixFQUFFLENBQUMsU0FBUyxZQUFZO0lBQy9CLElBQUlQLGNBQWNQLFdBQVcsRUFBRTtRQUM3QkgsT0FBT2tCLEtBQUs7SUFDZDtJQUVBLE9BQU9SO0FBQ1Q7QUFFQVMsT0FBT0MsY0FBYyxDQUFDckIsY0FBY3NCLFNBQVMsRUFBRSxZQUFZO0lBQ3pEQyxjQUFjO0lBQ2RDLFlBQVk7SUFDWkMsS0FBSztRQUNILE9BQU8sSUFBSSxDQUFDeEIsTUFBTSxDQUFDeUIsUUFBUTtJQUM3QjtBQUNGO0FBRUExQixjQUFjc0IsU0FBUyxDQUFDSyxXQUFXLEdBQUc7SUFDcEMsT0FBTyxJQUFJLENBQUMxQixNQUFNLENBQUMwQixXQUFXLENBQUNWLEtBQUssQ0FBQyxJQUFJLENBQUNoQixNQUFNLEVBQUVlO0FBQ3BEO0FBRUFoQixjQUFjc0IsU0FBUyxDQUFDTSxNQUFNLEdBQUc7SUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQ3RCLFNBQVMsRUFBRTtRQUNuQixJQUFJLENBQUN1QixPQUFPO0lBQ2Q7SUFFQSxJQUFJLENBQUM1QixNQUFNLENBQUMyQixNQUFNO0FBQ3BCO0FBRUE1QixjQUFjc0IsU0FBUyxDQUFDSCxLQUFLLEdBQUc7SUFDOUIsSUFBSSxDQUFDbEIsTUFBTSxDQUFDa0IsS0FBSztBQUNuQjtBQUVBbkIsY0FBY3NCLFNBQVMsQ0FBQ08sT0FBTyxHQUFHO0lBQ2hDLElBQUksQ0FBQ3ZCLFNBQVMsR0FBRztJQUVqQixJQUFJLENBQUNDLGVBQWUsQ0FBQ3VCLE9BQU8sQ0FBQyxVQUFTQyxJQUFJO1FBQ3hDLElBQUksQ0FBQ2pCLElBQUksQ0FBQ0csS0FBSyxDQUFDLElBQUksRUFBRWM7SUFDeEIsR0FBRUMsSUFBSSxDQUFDLElBQUk7SUFDWCxJQUFJLENBQUN6QixlQUFlLEdBQUcsRUFBRTtBQUMzQjtBQUVBUCxjQUFjc0IsU0FBUyxDQUFDVyxJQUFJLEdBQUc7SUFDN0IsSUFBSUMsSUFBSXZDLE9BQU8yQixTQUFTLENBQUNXLElBQUksQ0FBQ2hCLEtBQUssQ0FBQyxJQUFJLEVBQUVEO0lBQzFDLElBQUksQ0FBQ1ksTUFBTTtJQUNYLE9BQU9NO0FBQ1Q7QUFFQWxDLGNBQWNzQixTQUFTLENBQUNQLFdBQVcsR0FBRyxTQUFTZ0IsSUFBSTtJQUNqRCxJQUFJLElBQUksQ0FBQ3pCLFNBQVMsRUFBRTtRQUNsQixJQUFJLENBQUNRLElBQUksQ0FBQ0csS0FBSyxDQUFDLElBQUksRUFBRWM7UUFDdEI7SUFDRjtJQUVBLElBQUlBLElBQUksQ0FBQyxFQUFFLEtBQUssUUFBUTtRQUN0QixJQUFJLENBQUM3QixRQUFRLElBQUk2QixJQUFJLENBQUMsRUFBRSxDQUFDSSxNQUFNO1FBQy9CLElBQUksQ0FBQ0MsMkJBQTJCO0lBQ2xDO0lBRUEsSUFBSSxDQUFDN0IsZUFBZSxDQUFDOEIsSUFBSSxDQUFDTjtBQUM1QjtBQUVBL0IsY0FBY3NCLFNBQVMsQ0FBQ2MsMkJBQTJCLEdBQUc7SUFDcEQsSUFBSSxJQUFJLENBQUMvQixvQkFBb0IsRUFBRTtRQUM3QjtJQUNGO0lBRUEsSUFBSSxJQUFJLENBQUNILFFBQVEsSUFBSSxJQUFJLENBQUNDLFdBQVcsRUFBRTtRQUNyQztJQUNGO0lBRUEsSUFBSSxDQUFDRSxvQkFBb0IsR0FBRztJQUM1QixJQUFJaUMsVUFDRixrQ0FBa0MsSUFBSSxDQUFDbkMsV0FBVyxHQUFHO0lBQ3ZELElBQUksQ0FBQ1csSUFBSSxDQUFDLFNBQVMsSUFBSXlCLE1BQU1EO0FBQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVjaG5vcmFtYV8yMDUwLy4vbm9kZV9tb2R1bGVzL2RlbGF5ZWQtc3RyZWFtL2xpYi9kZWxheWVkX3N0cmVhbS5qcz9mZTViIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBTdHJlYW0gPSByZXF1aXJlKCdzdHJlYW0nKS5TdHJlYW07XG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZWxheWVkU3RyZWFtO1xuZnVuY3Rpb24gRGVsYXllZFN0cmVhbSgpIHtcbiAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICB0aGlzLmRhdGFTaXplID0gMDtcbiAgdGhpcy5tYXhEYXRhU2l6ZSA9IDEwMjQgKiAxMDI0O1xuICB0aGlzLnBhdXNlU3RyZWFtID0gdHJ1ZTtcblxuICB0aGlzLl9tYXhEYXRhU2l6ZUV4Y2VlZGVkID0gZmFsc2U7XG4gIHRoaXMuX3JlbGVhc2VkID0gZmFsc2U7XG4gIHRoaXMuX2J1ZmZlcmVkRXZlbnRzID0gW107XG59XG51dGlsLmluaGVyaXRzKERlbGF5ZWRTdHJlYW0sIFN0cmVhbSk7XG5cbkRlbGF5ZWRTdHJlYW0uY3JlYXRlID0gZnVuY3Rpb24oc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBkZWxheWVkU3RyZWFtID0gbmV3IHRoaXMoKTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgZm9yICh2YXIgb3B0aW9uIGluIG9wdGlvbnMpIHtcbiAgICBkZWxheWVkU3RyZWFtW29wdGlvbl0gPSBvcHRpb25zW29wdGlvbl07XG4gIH1cblxuICBkZWxheWVkU3RyZWFtLnNvdXJjZSA9IHNvdXJjZTtcblxuICB2YXIgcmVhbEVtaXQgPSBzb3VyY2UuZW1pdDtcbiAgc291cmNlLmVtaXQgPSBmdW5jdGlvbigpIHtcbiAgICBkZWxheWVkU3RyZWFtLl9oYW5kbGVFbWl0KGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIHJlYWxFbWl0LmFwcGx5KHNvdXJjZSwgYXJndW1lbnRzKTtcbiAgfTtcblxuICBzb3VyY2Uub24oJ2Vycm9yJywgZnVuY3Rpb24oKSB7fSk7XG4gIGlmIChkZWxheWVkU3RyZWFtLnBhdXNlU3RyZWFtKSB7XG4gICAgc291cmNlLnBhdXNlKCk7XG4gIH1cblxuICByZXR1cm4gZGVsYXllZFN0cmVhbTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShEZWxheWVkU3RyZWFtLnByb3RvdHlwZSwgJ3JlYWRhYmxlJywge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlLnJlYWRhYmxlO1xuICB9XG59KTtcblxuRGVsYXllZFN0cmVhbS5wcm90b3R5cGUuc2V0RW5jb2RpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc291cmNlLnNldEVuY29kaW5nLmFwcGx5KHRoaXMuc291cmNlLCBhcmd1bWVudHMpO1xufTtcblxuRGVsYXllZFN0cmVhbS5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5fcmVsZWFzZWQpIHtcbiAgICB0aGlzLnJlbGVhc2UoKTtcbiAgfVxuXG4gIHRoaXMuc291cmNlLnJlc3VtZSgpO1xufTtcblxuRGVsYXllZFN0cmVhbS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zb3VyY2UucGF1c2UoKTtcbn07XG5cbkRlbGF5ZWRTdHJlYW0ucHJvdG90eXBlLnJlbGVhc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fcmVsZWFzZWQgPSB0cnVlO1xuXG4gIHRoaXMuX2J1ZmZlcmVkRXZlbnRzLmZvckVhY2goZnVuY3Rpb24oYXJncykge1xuICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfS5iaW5kKHRoaXMpKTtcbiAgdGhpcy5fYnVmZmVyZWRFdmVudHMgPSBbXTtcbn07XG5cbkRlbGF5ZWRTdHJlYW0ucHJvdG90eXBlLnBpcGUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHIgPSBTdHJlYW0ucHJvdG90eXBlLnBpcGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgdGhpcy5yZXN1bWUoKTtcbiAgcmV0dXJuIHI7XG59O1xuXG5EZWxheWVkU3RyZWFtLnByb3RvdHlwZS5faGFuZGxlRW1pdCA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgaWYgKHRoaXMuX3JlbGVhc2VkKSB7XG4gICAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChhcmdzWzBdID09PSAnZGF0YScpIHtcbiAgICB0aGlzLmRhdGFTaXplICs9IGFyZ3NbMV0ubGVuZ3RoO1xuICAgIHRoaXMuX2NoZWNrSWZNYXhEYXRhU2l6ZUV4Y2VlZGVkKCk7XG4gIH1cblxuICB0aGlzLl9idWZmZXJlZEV2ZW50cy5wdXNoKGFyZ3MpO1xufTtcblxuRGVsYXllZFN0cmVhbS5wcm90b3R5cGUuX2NoZWNrSWZNYXhEYXRhU2l6ZUV4Y2VlZGVkID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLl9tYXhEYXRhU2l6ZUV4Y2VlZGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHRoaXMuZGF0YVNpemUgPD0gdGhpcy5tYXhEYXRhU2l6ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuX21heERhdGFTaXplRXhjZWVkZWQgPSB0cnVlO1xuICB2YXIgbWVzc2FnZSA9XG4gICAgJ0RlbGF5ZWRTdHJlYW0jbWF4RGF0YVNpemUgb2YgJyArIHRoaXMubWF4RGF0YVNpemUgKyAnIGJ5dGVzIGV4Y2VlZGVkLidcbiAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcihtZXNzYWdlKSk7XG59O1xuIl0sIm5hbWVzIjpbIlN0cmVhbSIsInJlcXVpcmUiLCJ1dGlsIiwibW9kdWxlIiwiZXhwb3J0cyIsIkRlbGF5ZWRTdHJlYW0iLCJzb3VyY2UiLCJkYXRhU2l6ZSIsIm1heERhdGFTaXplIiwicGF1c2VTdHJlYW0iLCJfbWF4RGF0YVNpemVFeGNlZWRlZCIsIl9yZWxlYXNlZCIsIl9idWZmZXJlZEV2ZW50cyIsImluaGVyaXRzIiwiY3JlYXRlIiwib3B0aW9ucyIsImRlbGF5ZWRTdHJlYW0iLCJvcHRpb24iLCJyZWFsRW1pdCIsImVtaXQiLCJfaGFuZGxlRW1pdCIsImFyZ3VtZW50cyIsImFwcGx5Iiwib24iLCJwYXVzZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwicHJvdG90eXBlIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsInJlYWRhYmxlIiwic2V0RW5jb2RpbmciLCJyZXN1bWUiLCJyZWxlYXNlIiwiZm9yRWFjaCIsImFyZ3MiLCJiaW5kIiwicGlwZSIsInIiLCJsZW5ndGgiLCJfY2hlY2tJZk1heERhdGFTaXplRXhjZWVkZWQiLCJwdXNoIiwibWVzc2FnZSIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/delayed-stream/lib/delayed_stream.js\n");

/***/ })

};
;