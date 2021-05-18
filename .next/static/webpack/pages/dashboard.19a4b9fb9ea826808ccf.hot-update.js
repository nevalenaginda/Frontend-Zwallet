webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./components/module/NavBar.js":
/*!*************************************!*\
  !*** ./components/module/NavBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _configs_redux_actions_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configs/redux/actions/user */ "./configs/redux/actions/user.js");
/* harmony import */ var _configs_redux_actions_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../configs/redux/actions/history */ "./configs/redux/actions/history.js");


var _jsxFileName = "D:\\Tutorial Web\\Week 10\\Zwallet-Frontend\\components\\module\\NavBar.js",
    _s = $RefreshSig$();








function NavBar() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var urlImg = "http://localhost:5001";

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      dataUser = _useSelector.user;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.history;
  }),
      totalNotif = _useSelector2.totalNotif;

  var token, idUser;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    token = localStorage.getItem("token");

    if (token) {
      dispatch(Object(_configs_redux_actions_user__WEBPACK_IMPORTED_MODULE_5__["getUser"])()).then(function (res) {
        dispatch(Object(_configs_redux_actions_history__WEBPACK_IMPORTED_MODULE_6__["getAllNotifications"])(idUser));
      });
    }
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (true) {
      token = localStorage.getItem("token");
      idUser = localStorage.getItem("id");

      if (!token) {
        router.push("/auth/login");
      }
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: "jsx-3916544990" + " " + "bg-white shadow h-navbar",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-3916544990" + " " + "container d-flex h-100",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-3916544990" + " " + "row w-100 d-flex",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick(e) {
            return router.push("/dashboard");
          },
          className: "jsx-3916544990" + " " + "col align-self-center pointer",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: "jsx-3916544990" + " " + "text-blue font-weight-bold m-0",
            children: "Zwallet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-3916544990" + " " + "col align-self-center d-none d-md-block",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-3916544990" + " " + "d-flex justify-content-end",
            children: [dataUser.image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "".concat(urlImg, "/images/").concat(dataUser.image),
              onClick: function onClick(e) {
                return router.push("/profile");
              },
              className: "jsx-3916544990" + " " + "img-user align-self-center bg-dark mr-3 pointer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 17
            }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              onClick: function onClick(e) {
                return router.push("/profile");
              },
              className: "jsx-3916544990" + " " + "align-self-center pointer",
              children: [dataUser.name ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "jsx-3916544990" + " " + "font-weight-bold m-0",
                children: dataUser.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 19
              }, this) : "", dataUser.phone ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "jsx-3916544990" + " " + "text-muted",
                children: dataUser.phone
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 19
              }, this) : ""]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: "jsx-3916544990" + " " + "far fa-bell  ml-3 align-self-center text-muted m-0 pointer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this), " ", totalNotif > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                height: "20px"
              },
              className: "jsx-3916544990" + " " + "badge badge-danger",
              children: totalNotif
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 17
            }, this) : ""]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3916544990",
      children: ".img-user.jsx-3916544990{width:50px;height:50px;border-radius:12px;object-fit:cover;}.h-navbar.jsx-3916544990{height:100px;border-radius:0px 0px 20px 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxUdXRvcmlhbCBXZWJcXFdlZWsgMTBcXFp3YWxsZXQtRnJvbnRlbmRcXGNvbXBvbmVudHNcXG1vZHVsZVxcTmF2QmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ga0IsQUFHc0IsQUFNRSxXQUxELEVBTW9CLFVBTGIsbUJBQ0YsR0FLbkIsY0FKQSIsImZpbGUiOiJEOlxcVHV0b3JpYWwgV2ViXFxXZWVrIDEwXFxad2FsbGV0LUZyb250ZW5kXFxjb21wb25lbnRzXFxtb2R1bGVcXE5hdkJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ3MvcmVkdXgvYWN0aW9ucy91c2VyXCI7XHJcbmltcG9ydCB7IGdldEFsbE5vdGlmaWNhdGlvbnMgfSBmcm9tIFwiLi4vLi4vY29uZmlncy9yZWR1eC9hY3Rpb25zL2hpc3RvcnlcIjtcclxuXHJcbmZ1bmN0aW9uIE5hdkJhcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IHVybEltZyA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9JTUFHRV9OT19TTEFTSDtcclxuICBjb25zdCB7IHVzZXI6IGRhdGFVc2VyIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgdG90YWxOb3RpZiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5oaXN0b3J5KTtcclxuXHJcbiAgbGV0IHRva2VuLCBpZFVzZXI7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgZGlzcGF0Y2goZ2V0VXNlcigpKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChnZXRBbGxOb3RpZmljYXRpb25zKGlkVXNlcikpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICBpZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpO1xyXG4gICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvYXV0aC9sb2dpblwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPXtgYmctd2hpdGUgc2hhZG93IGgtbmF2YmFyYH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29udGFpbmVyIGQtZmxleCBoLTEwMGB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93IHctMTAwIGQtZmxleGB9PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bjb2wgYWxpZ24tc2VsZi1jZW50ZXIgcG9pbnRlcmB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIil9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2B0ZXh0LWJsdWUgZm9udC13ZWlnaHQtYm9sZCBtLTBgfT5ad2FsbGV0PC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgYWxpZ24tc2VsZi1jZW50ZXIgZC1ub25lIGQtbWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgIHtkYXRhVXNlci5pbWFnZSA/IChcclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW1nLXVzZXIgYWxpZ24tc2VsZi1jZW50ZXIgYmctZGFyayBtci0zIHBvaW50ZXJgfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2Ake3VybEltZ30vaW1hZ2VzLyR7ZGF0YVVzZXIuaW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHJvdXRlci5wdXNoKFwiL3Byb2ZpbGVcIil9XHJcbiAgICAgICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyIHBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHJvdXRlci5wdXNoKFwiL3Byb2ZpbGVcIil9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2RhdGFVc2VyLm5hbWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG0tMFwiPntkYXRhVXNlci5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge2RhdGFVc2VyLnBob25lID8gKFxyXG4gICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPntkYXRhVXNlci5waG9uZX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZmFyIGZhLWJlbGwgIG1sLTMgYWxpZ24tc2VsZi1jZW50ZXIgdGV4dC1tdXRlZCBtLTAgcG9pbnRlclwiPjwvaDM+e1wiIFwifVxyXG4gICAgICAgICAgICAgIHt0b3RhbE5vdGlmID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiIHN0eWxlPXt7IGhlaWdodDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0b3RhbE5vdGlmfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuaW1nLXVzZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oLW5hdmJhciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Tutorial Web\\\\Week 10\\\\Zwallet-Frontend\\\\components\\\\module\\\\NavBar.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

_s(NavBar, "oO0meKiyG3ezgFbCGsR1Mqb6R4k=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c;

$RefreshReg$(_c, "NavBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2R1bGUvTmF2QmFyLmpzIl0sIm5hbWVzIjpbIk5hdkJhciIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1cmxJbWciLCJwcm9jZXNzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJkYXRhVXNlciIsImhpc3RvcnkiLCJ0b3RhbE5vdGlmIiwidG9rZW4iLCJpZFVzZXIiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0VXNlciIsInRoZW4iLCJyZXMiLCJnZXRBbGxOb3RpZmljYXRpb25zIiwicHVzaCIsImUiLCJpbWFnZSIsIm5hbWUiLCJwaG9uZSIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUNoQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLE1BQU0sR0FBR0MsdUJBQWY7O0FBSmdCLHFCQUtXQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUx0QjtBQUFBLE1BS0ZDLFFBTEUsZ0JBS1JELElBTFE7O0FBQUEsc0JBTU9GLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csT0FBakI7QUFBQSxHQUFELENBTmxCO0FBQUEsTUFNUkMsVUFOUSxpQkFNUkEsVUFOUTs7QUFRaEIsTUFBSUMsS0FBSixFQUFXQyxNQUFYO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixTQUFLLEdBQUdHLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFSOztBQUNBLFFBQUlKLEtBQUosRUFBVztBQUNUVixjQUFRLENBQUNlLDJFQUFPLEVBQVIsQ0FBUixDQUFvQkMsSUFBcEIsQ0FBeUIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hDakIsZ0JBQVEsQ0FBQ2tCLDBGQUFtQixDQUFDUCxNQUFELENBQXBCLENBQVI7QUFDRCxPQUZEO0FBR0Q7QUFDRixHQVBRLEVBT04sQ0FBQ1gsUUFBRCxDQVBNLENBQVQ7QUFTQVkseURBQVMsQ0FBQyxZQUFNO0FBQ2QsY0FBcUI7QUFDbkJGLFdBQUssR0FBR0csWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQVI7QUFDQUgsWUFBTSxHQUFHRSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsSUFBckIsQ0FBVDs7QUFDQSxVQUFJLENBQUNKLEtBQUwsRUFBWTtBQUNWWixjQUFNLENBQUNxQixJQUFQLENBQVksYUFBWjtBQUNEO0FBQ0Y7QUFDRixHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUEsc0JBQ0U7QUFBQTtBQUFBLDRCQUNFO0FBQUE7QUFBQSw2QkFDRTtBQUFBO0FBQUEsZ0NBQ0U7QUFFRSxpQkFBTyxFQUFFLGlCQUFDQyxDQUFEO0FBQUEsbUJBQU90QixNQUFNLENBQUNxQixJQUFQLENBQVksWUFBWixDQUFQO0FBQUEsV0FGWDtBQUFBO0FBQUEsaUNBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFPRTtBQUFBLDhDQUFlLHlDQUFmO0FBQUEsaUNBQ0U7QUFBQSxnREFBZSw0QkFBZjtBQUFBLHVCQUNHWixRQUFRLENBQUNjLEtBQVQsZ0JBQ0M7QUFFRSxpQkFBRyxZQUFLbkIsTUFBTCxxQkFBc0JLLFFBQVEsQ0FBQ2MsS0FBL0IsQ0FGTDtBQUdFLHFCQUFPLEVBQUUsaUJBQUNELENBQUQ7QUFBQSx1QkFBT3RCLE1BQU0sQ0FBQ3FCLElBQVAsQ0FBWSxVQUFaLENBQVA7QUFBQSxlQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELEdBT0MsRUFSSixlQVVFO0FBRUUscUJBQU8sRUFBRSxpQkFBQ0MsQ0FBRDtBQUFBLHVCQUFPdEIsTUFBTSxDQUFDcUIsSUFBUCxDQUFZLFVBQVosQ0FBUDtBQUFBLGVBRlg7QUFBQSxrREFDWSwyQkFEWjtBQUFBLHlCQUlHWixRQUFRLENBQUNlLElBQVQsZ0JBQ0M7QUFBQSxvREFBYyxzQkFBZDtBQUFBLDBCQUFzQ2YsUUFBUSxDQUFDZTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELEdBR0MsRUFQSixFQVNHZixRQUFRLENBQUNnQixLQUFULGdCQUNDO0FBQUEsb0RBQWlCLFlBQWpCO0FBQUEsMEJBQStCaEIsUUFBUSxDQUFDZ0I7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxHQUdDLEVBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVZGLGVBeUJFO0FBQUEsa0RBQWM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXpCRixFQXlCbUYsR0F6Qm5GLEVBMEJHZCxVQUFVLEdBQUcsQ0FBYixnQkFDQztBQUFxQyxtQkFBSyxFQUFFO0FBQUVlLHNCQUFNLEVBQUU7QUFBVixlQUE1QztBQUFBLGtEQUFnQixvQkFBaEI7QUFBQSx3QkFDR2Y7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELEdBS0MsRUEvQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4REQ7O0dBM0ZRWixNO1VBQ1FFLHFELEVBQ0VFLHVELEVBR1VHLHVELEVBQ0pBLHVEOzs7S0FOaEJQLE07QUE2Rk1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC4xOWE0YjlmYjllYTgyNjgwOGNjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwiLi4vLi4vY29uZmlncy9yZWR1eC9hY3Rpb25zL3VzZXJcIjtcclxuaW1wb3J0IHsgZ2V0QWxsTm90aWZpY2F0aW9ucyB9IGZyb20gXCIuLi8uLi9jb25maWdzL3JlZHV4L2FjdGlvbnMvaGlzdG9yeVwiO1xyXG5cclxuZnVuY3Rpb24gTmF2QmFyKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgdXJsSW1nID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMX0lNQUdFX05PX1NMQVNIO1xyXG4gIGNvbnN0IHsgdXNlcjogZGF0YVVzZXIgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgeyB0b3RhbE5vdGlmIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmhpc3RvcnkpO1xyXG5cclxuICBsZXQgdG9rZW4sIGlkVXNlcjtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBkaXNwYXRjaChnZXRVc2VyKCkpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGdldEFsbE5vdGlmaWNhdGlvbnMoaWRVc2VyKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgIGlkVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIik7XHJcbiAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9hdXRoL2xvZ2luXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e2BiZy13aGl0ZSBzaGFkb3cgaC1uYXZiYXJgfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb250YWluZXIgZC1mbGV4IGgtMTAwYH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Byb3cgdy0xMDAgZC1mbGV4YH0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbCBhbGlnbi1zZWxmLWNlbnRlciBwb2ludGVyYH1cclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17YHRleHQtYmx1ZSBmb250LXdlaWdodC1ib2xkIG0tMGB9Plp3YWxsZXQ8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBhbGlnbi1zZWxmLWNlbnRlciBkLW5vbmUgZC1tZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAge2RhdGFVc2VyLmltYWdlID8gKFxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpbWctdXNlciBhbGlnbi1zZWxmLWNlbnRlciBiZy1kYXJrIG1yLTMgcG9pbnRlcmB9XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvJHtkYXRhVXNlci5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gcm91dGVyLnB1c2goXCIvcHJvZmlsZVwiKX1cclxuICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXIgcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gcm91dGVyLnB1c2goXCIvcHJvZmlsZVwiKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YVVzZXIubmFtZSA/IChcclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbS0wXCI+e2RhdGFVc2VyLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7ZGF0YVVzZXIucGhvbmUgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+e2RhdGFVc2VyLnBob25lfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmYXIgZmEtYmVsbCAgbWwtMyBhbGlnbi1zZWxmLWNlbnRlciB0ZXh0LW11dGVkIG0tMCBwb2ludGVyXCI+PC9oMz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAge3RvdGFsTm90aWYgPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge3RvdGFsTm90aWZ9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5pbWctdXNlciB7XHJcbiAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmgtbmF2YmFyIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==