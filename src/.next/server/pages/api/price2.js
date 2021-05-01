/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/price2";
exports.ids = ["pages/api/price2"];
exports.modules = {

/***/ "./pages/api/price2.js":
/*!*****************************!*\
  !*** ./pages/api/price2.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst request = __webpack_require__(/*! postman-request */ \"postman-request\");\n\nconst handler = async (req, res) => {\n  if (req.method == 'GET') {\n    let data = await apiCall(); //console.log(\"data\",data)\n\n    res.json(data);\n  } else {\n    res.json({\n      \"status\": false,\n      \"message\": \"invalid request\"\n    });\n  }\n};\n\nasync function apiCall(req) {\n  let result;\n\n  try {\n    let result = await request('https://data-asg.goldprice.org/dbXRates/USD,INR', function (error, response, body) {}); //console.log(result)\n\n    return result;\n  } catch (error) {\n    return error;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYWluYW1famV3ZWxsZXJzLy4vcGFnZXMvYXBpL3ByaWNlMi5qcz8yMmM2Il0sIm5hbWVzIjpbInJlcXVlc3QiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJhcGlDYWxsIiwianNvbiIsInJlc3VsdCIsImVycm9yIiwicmVzcG9uc2UiLCJib2R5Il0sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLHdDQUFELENBQXZCOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDaEMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLElBQWMsS0FBbEIsRUFBeUI7QUFDckIsUUFBSUMsSUFBSSxHQUFHLE1BQU1DLE9BQU8sRUFBeEIsQ0FEcUIsQ0FFckI7O0FBQ0FILE9BQUcsQ0FBQ0ksSUFBSixDQUFTRixJQUFUO0FBQ0gsR0FKRCxNQUlPO0FBQ0hGLE9BQUcsQ0FBQ0ksSUFBSixDQUFTO0FBQUUsZ0JBQVUsS0FBWjtBQUFtQixpQkFBVztBQUE5QixLQUFUO0FBQ0g7QUFDSixDQVJEOztBQVVBLGVBQWVELE9BQWYsQ0FBdUJKLEdBQXZCLEVBQTRCO0FBQ3hCLE1BQUlNLE1BQUo7O0FBQ0EsTUFBSTtBQUNBLFFBQUlBLE1BQU0sR0FBRyxNQUFNVCxPQUFPLENBQUMsaURBQUQsRUFBb0QsVUFBVVUsS0FBVixFQUFpQkMsUUFBakIsRUFBMkJDLElBQTNCLEVBQWlDLENBQzlHLENBRHlCLENBQTFCLENBREEsQ0FHQTs7QUFDQSxXQUFPSCxNQUFQO0FBQ0gsR0FMRCxDQUtFLE9BQU9DLEtBQVAsRUFBYztBQUNaLFdBQU9BLEtBQVA7QUFDSDtBQUNKOztBQUVELCtEQUFlUixPQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3ByaWNlMi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlcXVlc3QgPSByZXF1aXJlKCdwb3N0bWFuLXJlcXVlc3QnKTtcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGlmIChyZXEubWV0aG9kID09ICdHRVQnKSB7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgYXBpQ2FsbCgpXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJkYXRhXCIsZGF0YSlcbiAgICAgICAgcmVzLmpzb24oZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLmpzb24oeyBcInN0YXR1c1wiOiBmYWxzZSwgXCJtZXNzYWdlXCI6IFwiaW52YWxpZCByZXF1ZXN0XCIgfSlcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFwaUNhbGwocmVxKSB7XG4gICAgbGV0IHJlc3VsdFxuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0KCdodHRwczovL2RhdGEtYXNnLmdvbGRwcmljZS5vcmcvZGJYUmF0ZXMvVVNELElOUicsIGZ1bmN0aW9uIChlcnJvciwgcmVzcG9uc2UsIGJvZHkpIHtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/price2.js\n");

/***/ }),

/***/ "postman-request":
/*!**********************************!*\
  !*** external "postman-request" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("postman-request");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/price2.js"));
module.exports = __webpack_exports__;

})();