webpackHotUpdate_N_E("pages/profile/manage-phone-number",{

/***/ "./pages/profile/manage-phone-number.js":
/*!**********************************************!*\
  !*** ./pages/profile/manage-phone-number.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return managePhoneNumber; });
/* harmony import */ var D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_module_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/module/Footer */ "./components/module/Footer.js");
/* harmony import */ var _components_module_ManagePhoneNumber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/module/ManagePhoneNumber */ "./components/module/ManagePhoneNumber.js");
/* harmony import */ var _components_module_NavBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/module/NavBar */ "./components/module/NavBar.js");
/* harmony import */ var _components_module_SideBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/module/SideBar */ "./components/module/SideBar.js");



var _jsxFileName = "D:\\Tutorial Web\\Week 10\\Zwallet-Frontend\\pages\\profile\\manage-phone-number.js";








function managePhoneNumber(_ref) {
  var user = _ref.user;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "jsx-2129811849" + " " + "bg-light min-vh-100",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_module_NavBar__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "jsx-2129811849" + " " + "container h-content",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "jsx-2129811849" + " " + "row py-5 py-lg-5",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "jsx-2129811849" + " " + "col-3 d-none d-md-block",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_module_SideBar__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "jsx-2129811849" + " " + "col",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_module_ManagePhoneNumber__WEBPACK_IMPORTED_MODULE_8__["default"], {
            phone: user.phone
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_module_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "2129811849",
      children: "@media (max-width:767.98px){.h-content.jsx-2129811849{height:80vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxUdXRvcmlhbCBXZWJcXFdlZWsgMTBcXFp3YWxsZXQtRnJvbnRlbmRcXHBhZ2VzXFxwcm9maWxlXFxtYW5hZ2UtcGhvbmUtbnVtYmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCa0IsQUFJeUIsWUFDZCIsImZpbGUiOiJEOlxcVHV0b3JpYWwgV2ViXFxXZWVrIDEwXFxad2FsbGV0LUZyb250ZW5kXFxwYWdlc1xccHJvZmlsZVxcbWFuYWdlLXBob25lLW51bWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vZHVsZS9Gb290ZXJcIjtcclxuaW1wb3J0IE1hbmFnZVBob25lTnVtYmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vZHVsZS9NYW5hZ2VQaG9uZU51bWJlclwiO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vZHVsZS9OYXZCYXJcIjtcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9kdWxlL1NpZGVCYXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hbmFnZVBob25lTnVtYmVyKHsgdXNlciB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbGlnaHQgbWluLXZoLTEwMFwiPlxyXG4gICAgICA8TmF2QmFyPjwvTmF2QmFyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaC1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktNSBweS1sZy01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zIGQtbm9uZSBkLW1kLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxTaWRlQmFyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxNYW5hZ2VQaG9uZU51bWJlciBwaG9uZT17dXNlci5waG9uZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgICAgICAgLmgtY29udGVudCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogODB2aDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbm1hbmFnZVBob25lTnVtYmVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCBVUkxBUEkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkxfQVBJX1dJVEhfU0xBU0g7XHJcbiAgY29uc3QgVVJMRkUgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkxfRlJPTlRfRU5EX05PX1NMQVNIO1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgY29va2llID0gXCJcIjtcclxuICAgIGlmIChjdHgucmVxKSB7XHJcbiAgICAgIGNvb2tpZSA9IGN0eC5yZXEuaGVhZGVycy5jb29raWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7VVJMQVBJfXByb2ZpbGVgLCB7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGNvb2tpZTogY29va2llLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkYXRhID0gcmVzLmRhdGEuZGF0YTtcclxuICAgIHJldHVybiB7IHVzZXI6IGRhdGEgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgaWYgKGN0eC5yZXEpIHtcclxuICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAxLCB7IExvY2F0aW9uOiBgJHtVUkxGRX0vYXV0aC9sb2dpbmAgfSk7XHJcbiAgICAgIGN0eC5yZXMuZW5kKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWN0eC5yZXEpIHtcclxuICAgICAgUm91dGVyLnB1c2goXCIvYXV0aC9sb2dpblwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHVzZXI6IHt9IH07XHJcbiAgfVxyXG59O1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Tutorial Web\\\\Week 10\\\\Zwallet-Frontend\\\\pages\\\\profile\\\\manage-phone-number.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

managePhoneNumber.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var URLAPI, URLFE, cookie, res, data;
    return D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            URLAPI = "http://localhost:5001/api/";
            URLFE = "http://localhost:3000";
            _context.prev = 2;
            cookie = "";

            if (ctx.req) {
              cookie = ctx.req.headers.cookie;
            }

            _context.next = 7;
            return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(URLAPI, "profile"), {
              withCredentials: true,
              headers: {
                cookie: cookie
              }
            });

          case 7:
            res = _context.sent;
            data = res.data.data;
            return _context.abrupt("return", {
              user: data
            });

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);

            if (ctx.req) {
              ctx.res.writeHead(301, {
                Location: "".concat(URLFE, "/auth/login")
              });
              ctx.res.end();
            }

            if (!ctx.req) {
              next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/auth/login");
            }

            return _context.abrupt("return", {
              user: {}
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 12]]);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9tYW5hZ2UtcGhvbmUtbnVtYmVyLmpzIl0sIm5hbWVzIjpbIm1hbmFnZVBob25lTnVtYmVyIiwidXNlciIsInBob25lIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiVVJMQVBJIiwicHJvY2VzcyIsIlVSTEZFIiwiY29va2llIiwicmVxIiwiaGVhZGVycyIsImF4aW9zIiwiZ2V0Iiwid2l0aENyZWRlbnRpYWxzIiwicmVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGlCQUFULE9BQXFDO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ2xELHNCQUNFO0FBQUEsd0NBQWUscUJBQWY7QUFBQSw0QkFDRSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFHRTtBQUFBLDBDQUFlLHFCQUFmO0FBQUEsNkJBQ0U7QUFBQSw0Q0FBZSxrQkFBZjtBQUFBLGdDQUNFO0FBQUEsOENBQWUseUJBQWY7QUFBQSxpQ0FDRSxxRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFO0FBQUEsOENBQWUsS0FBZjtBQUFBLGlDQUNFLHFFQUFDLDRFQUFEO0FBQW1CLGlCQUFLLEVBQUVBLElBQUksQ0FBQ0M7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBY0UscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUJEOztBQUVERixpQkFBaUIsQ0FBQ0csZUFBbEI7QUFBQSx1U0FBb0MsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzVCQyxrQkFENEIsR0FDbkJDLDRCQURtQjtBQUU1QkMsaUJBRjRCLEdBRXBCRCx1QkFGb0I7QUFBQTtBQUk1QkUsa0JBSjRCLEdBSW5CLEVBSm1COztBQUtoQyxnQkFBSUosR0FBRyxDQUFDSyxHQUFSLEVBQWE7QUFDWEQsb0JBQU0sR0FBR0osR0FBRyxDQUFDSyxHQUFKLENBQVFDLE9BQVIsQ0FBZ0JGLE1BQXpCO0FBQ0Q7O0FBUCtCO0FBQUEsbUJBUWRHLDRDQUFLLENBQUNDLEdBQU4sV0FBYVAsTUFBYixjQUE4QjtBQUM5Q1EsNkJBQWUsRUFBRSxJQUQ2QjtBQUU5Q0gscUJBQU8sRUFBRTtBQUNQRixzQkFBTSxFQUFFQTtBQUREO0FBRnFDLGFBQTlCLENBUmM7O0FBQUE7QUFRMUJNLGVBUjBCO0FBYzFCQyxnQkFkMEIsR0FjbkJELEdBQUcsQ0FBQ0MsSUFBSixDQUFTQSxJQWRVO0FBQUEsNkNBZXpCO0FBQUVkLGtCQUFJLEVBQUVjO0FBQVIsYUFmeUI7O0FBQUE7QUFBQTtBQUFBO0FBaUJoQ0MsbUJBQU8sQ0FBQ0MsR0FBUjs7QUFDQSxnQkFBSWIsR0FBRyxDQUFDSyxHQUFSLEVBQWE7QUFDWEwsaUJBQUcsQ0FBQ1UsR0FBSixDQUFRSSxTQUFSLENBQWtCLEdBQWxCLEVBQXVCO0FBQUVDLHdCQUFRLFlBQUtaLEtBQUw7QUFBVixlQUF2QjtBQUNBSCxpQkFBRyxDQUFDVSxHQUFKLENBQVFNLEdBQVI7QUFDRDs7QUFDRCxnQkFBSSxDQUFDaEIsR0FBRyxDQUFDSyxHQUFULEVBQWM7QUFDWlksZ0VBQU0sQ0FBQ0MsSUFBUCxDQUFZLGFBQVo7QUFDRDs7QUF4QitCLDZDQXlCekI7QUFBRXJCLGtCQUFJLEVBQUU7QUFBUixhQXpCeUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBcEM7O0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS9tYW5hZ2UtcGhvbmUtbnVtYmVyLjViNTkzNzViNzEwY2ZhNzViYzBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2R1bGUvRm9vdGVyXCI7XHJcbmltcG9ydCBNYW5hZ2VQaG9uZU51bWJlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2R1bGUvTWFuYWdlUGhvbmVOdW1iZXJcIjtcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2R1bGUvTmF2QmFyXCI7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vZHVsZS9TaWRlQmFyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYW5hZ2VQaG9uZU51bWJlcih7IHVzZXIgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWxpZ2h0IG1pbi12aC0xMDBcIj5cclxuICAgICAgPE5hdkJhcj48L05hdkJhcj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGgtY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHB5LTUgcHktbGctNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMyBkLW5vbmUgZC1tZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICA8U2lkZUJhciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8TWFuYWdlUGhvbmVOdW1iZXIgcGhvbmU9e3VzZXIucGhvbmV9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgICAgICAgIC5oLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5tYW5hZ2VQaG9uZU51bWJlci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgVVJMQVBJID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMX0FQSV9XSVRIX1NMQVNIO1xyXG4gIGNvbnN0IFVSTEZFID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMX0ZST05UX0VORF9OT19TTEFTSDtcclxuICB0cnkge1xyXG4gICAgbGV0IGNvb2tpZSA9IFwiXCI7XHJcbiAgICBpZiAoY3R4LnJlcSkge1xyXG4gICAgICBjb29raWUgPSBjdHgucmVxLmhlYWRlcnMuY29va2llO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke1VSTEFQSX1wcm9maWxlYCwge1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBjb29raWU6IGNvb2tpZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhLmRhdGE7XHJcbiAgICByZXR1cm4geyB1c2VyOiBkYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIGlmIChjdHgucmVxKSB7XHJcbiAgICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMSwgeyBMb2NhdGlvbjogYCR7VVJMRkV9L2F1dGgvbG9naW5gIH0pO1xyXG4gICAgICBjdHgucmVzLmVuZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFjdHgucmVxKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL2F1dGgvbG9naW5cIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyB1c2VyOiB7fSB9O1xyXG4gIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==