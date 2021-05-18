webpackHotUpdate_N_E("pages/auth/reset-password/[token]/[email]",{

/***/ "./pages/auth/reset-password/[token]/[email].js":
/*!******************************************************!*\
  !*** ./pages/auth/reset-password/[token]/[email].js ***!
  \******************************************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_module_AsideLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/module/AsideLeft */ "./components/module/AsideLeft.js");


var _jsxFileName = "D:\\Tutorial Web\\Week 10\\Zwallet-Frontend\\pages\\auth\\reset-password\\[token]\\[email].js",
    _s = $RefreshSig$();









function resetPassword() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      newPassword = _useState[0],
      setNewPassword = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      token = _useState3[0],
      setToken = _useState3[1];

  var onSubmitHandler = function onSubmitHandler(event) {
    event.preventDefault();
    var URLAPI = "http://localhost:5001/api/";
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(URLAPI, "api/resetPassword/").concat(token, "/").concat(email, "/").concat(newPassword), {
      withCredentials: true
    }).then(function (res) {
      Swal.fire({
        title: "Success!",
        text: res.data.message,
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#6379f4;"
      }).then(function (result) {
        if (result.isConfirmed) {}

        setEmail("");
      });
    })["catch"](function (err) {
      console.log(err.response.data.message);
      Swal.fire({
        title: "Error!",
        text: err.response.data.message,
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#a4a7b4"
      });
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (router.query.token && router.query.email) {
      setEmail(router.query.email);
      setToken(router.query.token);
    }
  }, [router.query.token, router.query.email]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-1217259691",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-1217259691" + " " + "row min-vh-100 no-gutters",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-1217259691" + " " + "col-lg-7 bg-blue min-vh-100 bg-accent overflow-auto d-none d-lg-flex px-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_AsideLeft__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-1217259691" + " " + "col min-vh-100 overflow-auto d-lg-flex px-lg-5 phone-brand",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-1217259691",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-1217259691" + " " + "d-flex d-lg-none h-brand",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: "jsx-1217259691" + " " + "font-weight-bold w-100 align-self-center m-0 text-center text-blue",
              children: "Zwallet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-1217259691" + " " + "align-self-center bg-white h-content round py-5 py-lg-0",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-1217259691" + " " + "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-1217259691" + " " + "px-4",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-1217259691" + " " + "d-none d-lg-block",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  className: "jsx-1217259691" + " " + "font-weight-bold",
                  children: "Did You Forgot Your Password? Don\u2019t Worry, You Can Reset Your Password In a Minutes."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "jsx-1217259691" + " " + "text-muted",
                  children: "To reset your password, you must type a new password and we will help you reset your password then you will be directed to the login screens."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-1217259691" + " " + "d-block d-lg-none text-center mb-5",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  className: "jsx-1217259691" + " " + "font-weight-bold",
                  children: "Reset Password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "jsx-1217259691" + " " + "text-muted",
                  children: "Enter your Zwallet new password so you can login again."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-1217259691" + " " + "mt-md-5",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                  className: "jsx-1217259691",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "jsx-1217259691" + " " + "input-group mb-4",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "jsx-1217259691" + " " + "input-group-prepend",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        id: "basic-addon1",
                        className: "jsx-1217259691" + " " + "input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                          className: "jsx-1217259691" + " " + "fas fa-lock"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 99,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 94,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "password",
                      placeholder: "Enter your new password",
                      required: true,
                      className: "jsx-1217259691" + " " + "form-control border-top-0 border-left-0 border-right-0 rounded-0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "jsx-1217259691" + " " + "input-group-append",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        id: "basic-addon1",
                        className: "jsx-1217259691" + " " + "input-group-text bg-white border-top-0 border-left-0 border-right-0",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "jsx-1217259691" + " " + "text-decoration-none text-dark",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "jsx-1217259691" + " " + "fas fa-eye-slash"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 115,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 113,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 109,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "jsx-1217259691" + " " + "pt-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      type: "submit",
                      style: {
                        borderRadius: "12px"
                      },
                      className: "jsx-1217259691" + " " + "btn btn-secondary btn-block",
                      children: "Reset"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "jsx-1217259691" + " " + "text-center pt-4",
                  children: ["Have memorized your password ? Let's back to", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                    href: "/auth/login",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      className: "jsx-1217259691" + " " + "text-decoration-none",
                      children: " Login"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1217259691",
      children: "@media screen and (max-width:992px){.phone-brand.jsx-1217259691{background-color:ghostwhite;}.h-content.jsx-1217259691{height:calc(100vh - 75px);box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important;}}input.jsx-1217259691:focus{border-color:blue !important;box-shadow:none !important;outline:0 none !important;}.h-brand.jsx-1217259691{height:100px;}.round.jsx-1217259691{border-radius:25px 25px 0px 0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxUdXRvcmlhbCBXZWJcXFdlZWsgMTBcXFp3YWxsZXQtRnJvbnRlbmRcXHBhZ2VzXFxhdXRoXFxyZXNldC1wYXNzd29yZFxcW3Rva2VuXVxcW2VtYWlsXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSVMsQUFJMkMsQUFHRixBQUtDLEFBS2hCLEFBR21CLGFBRmxDLGFBVjRELEVBSDFELENBUTJCLEdBUTdCLHdCQVA0Qix1QkFMMUIsR0FNRiIsImZpbGUiOiJEOlxcVHV0b3JpYWwgV2ViXFxXZWVrIDEwXFxad2FsbGV0LUZyb250ZW5kXFxwYWdlc1xcYXV0aFxccmVzZXQtcGFzc3dvcmRcXFt0b2tlbl1cXFtlbWFpbF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzd2FsbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEFzaWRlTGVmdCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9tb2R1bGUvQXNpZGVMZWZ0XCI7XHJcbmZ1bmN0aW9uIHJlc2V0UGFzc3dvcmQoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW25ld1Bhc3N3b3JkLCBzZXROZXdQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IFVSTEFQSSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9BUElfV0lUSF9TTEFTSDtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7VVJMQVBJfWFwaS9yZXNldFBhc3N3b3JkLyR7dG9rZW59LyR7ZW1haWx9LyR7bmV3UGFzc3dvcmR9YCwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICB0aXRsZTogXCJTdWNjZXNzIVwiLFxyXG4gICAgICAgICAgdGV4dDogcmVzLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjNjM3OWY0O1wiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0RW1haWwoXCJcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiBcIkVycm9yIVwiLFxyXG4gICAgICAgICAgdGV4dDogZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiI2E0YTdiNFwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5xdWVyeS50b2tlbiAmJiByb3V0ZXIucXVlcnkuZW1haWwpIHtcclxuICAgICAgc2V0RW1haWwocm91dGVyLnF1ZXJ5LmVtYWlsKTtcclxuICAgICAgc2V0VG9rZW4ocm91dGVyLnF1ZXJ5LnRva2VuKTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5LnRva2VuLCByb3V0ZXIucXVlcnkuZW1haWxdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1pbi12aC0xMDAgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgYmctYmx1ZSBtaW4tdmgtMTAwIGJnLWFjY2VudCBvdmVyZmxvdy1hdXRvIGQtbm9uZSBkLWxnLWZsZXggcHgtNVwiPlxyXG4gICAgICAgICAgPEFzaWRlTGVmdCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG1pbi12aC0xMDAgb3ZlcmZsb3ctYXV0byBkLWxnLWZsZXggcHgtbGctNSBwaG9uZS1icmFuZFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZC1sZy1ub25lIGgtYnJhbmRcIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCB3LTEwMCBhbGlnbi1zZWxmLWNlbnRlciBtLTAgdGV4dC1jZW50ZXIgdGV4dC1ibHVlXCI+XHJcbiAgICAgICAgICAgICAgICBad2FsbGV0XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXIgYmctd2hpdGUgaC1jb250ZW50IHJvdW5kIHB5LTUgcHktbGctMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gRm9yIGRlc2t0b3AgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW5vbmUgZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERpZCBZb3UgRm9yZ290IFlvdXIgUGFzc3dvcmQ/IERvbuKAmXQgV29ycnksIFlvdSBDYW4gUmVzZXRcclxuICAgICAgICAgICAgICAgICAgICBZb3VyIFBhc3N3b3JkIEluIGEgTWludXRlcy5cclxuICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRvIHJlc2V0IHlvdXIgcGFzc3dvcmQsIHlvdSBtdXN0IHR5cGUgYSBuZXcgcGFzc3dvcmQgYW5kIHdlXHJcbiAgICAgICAgICAgICAgICAgICAgd2lsbCBoZWxwIHlvdSByZXNldCB5b3VyIHBhc3N3b3JkIHRoZW4geW91IHdpbGwgYmUgZGlyZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICB0byB0aGUgbG9naW4gc2NyZWVucy5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBFbmQgb2YgZm9yIGRlc2t0b3AgLS0+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIEZvciBtb2JpbGUgPCBtZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtYmxvY2sgZC1sZy1ub25lIHRleHQtY2VudGVyIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5SZXNldCBQYXNzd29yZDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBFbnRlciB5b3VyIFp3YWxsZXQgbmV3IHBhc3N3b3JkIHNvIHlvdSBjYW4gbG9naW4gYWdhaW4uXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gRW5kIE9mIGZvciBtb2JpbGUgPCBtZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LW1kLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJnLXdoaXRlIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIHJvdW5kZWQtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1hZGRvbjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWxvY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCByb3VuZGVkLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmV3IHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYmctd2hpdGUgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzaWMtYWRkb24xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGVjb3JhdGlvbi1ub25lIHRleHQtZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leWVcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV5ZS1zbGFzaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCIxMnB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVzZXRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICBIYXZlIG1lbW9yaXplZCB5b3VyIHBhc3N3b3JkID8gTGV0J3MgYmFjayB0b1xyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1kZWNvcmF0aW9uLW5vbmVcIj4gTG9naW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgIC5waG9uZS1icmFuZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaC1jb250ZW50IHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4KTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAwIG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oLWJyYW5kIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yb3VuZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwcHggMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNldFBhc3N3b3JkO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Tutorial Web\\\\Week 10\\\\Zwallet-Frontend\\\\pages\\\\auth\\\\reset-password\\\\[token]\\\\[email].js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

_s(resetPassword, "XcYLQ/rmDzWiId+Nc1vljlevplA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

/* harmony default export */ __webpack_exports__["default"] = (resetPassword);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9yZXNldC1wYXNzd29yZC9bdG9rZW5dL1tlbWFpbF0uanMiXSwibmFtZXMiOlsicmVzZXRQYXNzd29yZCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibmV3UGFzc3dvcmQiLCJzZXROZXdQYXNzd29yZCIsImVtYWlsIiwic2V0RW1haWwiLCJ0b2tlbiIsInNldFRva2VuIiwib25TdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIlVSTEFQSSIsInByb2Nlc3MiLCJheGlvcyIsImdldCIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwidGV4dCIsImRhdGEiLCJtZXNzYWdlIiwiaWNvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY29uZmlybUJ1dHRvbkNvbG9yIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJ1c2VFZmZlY3QiLCJxdWVyeSIsImJvcmRlclJhZGl1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsYUFBVCxHQUF5QjtBQUFBOztBQUN2QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUR1QixrQkFFZUMsc0RBQVEsQ0FBQyxFQUFELENBRnZCO0FBQUEsTUFFaEJDLFdBRmdCO0FBQUEsTUFFSEMsY0FGRzs7QUFBQSxtQkFHR0Ysc0RBQVEsQ0FBQyxFQUFELENBSFg7QUFBQSxNQUdoQkcsS0FIZ0I7QUFBQSxNQUdUQyxRQUhTOztBQUFBLG1CQUlHSixzREFBUSxDQUFDLEVBQUQsQ0FKWDtBQUFBLE1BSWhCSyxLQUpnQjtBQUFBLE1BSVRDLFFBSlM7O0FBTXZCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxF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cUVBQUMsZ0RBQUQ7QUFBTSx3QkFBSSxFQUFDLGFBQVg7QUFBQSwyQ0FDRTtBQUFBLDBEQUFhLHNCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBeENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxSEQ7O0dBbEtRckMsYTtVQUNRRSxxRDs7O0FBbUtGRiw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL3Jlc2V0LXBhc3N3b3JkL1t0b2tlbl0vW2VtYWlsXS5kZDA2MjIxZGJjODBiNjc2ZGM4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc3dhbGwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBBc2lkZUxlZnQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbW9kdWxlL0FzaWRlTGVmdFwiO1xyXG5mdW5jdGlvbiByZXNldFBhc3N3b3JkKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtuZXdQYXNzd29yZCwgc2V0TmV3UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBVUkxBUEkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkxfQVBJX1dJVEhfU0xBU0g7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke1VSTEFQSX1hcGkvcmVzZXRQYXNzd29yZC8ke3Rva2VufS8ke2VtYWlsfS8ke25ld1Bhc3N3b3JkfWAsIHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiU3VjY2VzcyFcIixcclxuICAgICAgICAgIHRleHQ6IHJlcy5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzYzNzlmNDtcIixcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldEVtYWlsKFwiXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICB0aXRsZTogXCJFcnJvciFcIixcclxuICAgICAgICAgIHRleHQ6IGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiNhNGE3YjRcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb3V0ZXIucXVlcnkudG9rZW4gJiYgcm91dGVyLnF1ZXJ5LmVtYWlsKSB7XHJcbiAgICAgIHNldEVtYWlsKHJvdXRlci5xdWVyeS5lbWFpbCk7XHJcbiAgICAgIHNldFRva2VuKHJvdXRlci5xdWVyeS50b2tlbik7XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS50b2tlbiwgcm91dGVyLnF1ZXJ5LmVtYWlsXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtaW4tdmgtMTAwIG5vLWd1dHRlcnNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy03IGJnLWJsdWUgbWluLXZoLTEwMCBiZy1hY2NlbnQgb3ZlcmZsb3ctYXV0byBkLW5vbmUgZC1sZy1mbGV4IHB4LTVcIj5cclxuICAgICAgICAgIDxBc2lkZUxlZnQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtaW4tdmgtMTAwIG92ZXJmbG93LWF1dG8gZC1sZy1mbGV4IHB4LWxnLTUgcGhvbmUtYnJhbmRcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGQtbGctbm9uZSBoLWJyYW5kXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdy0xMDAgYWxpZ24tc2VsZi1jZW50ZXIgbS0wIHRleHQtY2VudGVyIHRleHQtYmx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgWndhbGxldFxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyIGJnLXdoaXRlIGgtY29udGVudCByb3VuZCBweS01IHB5LWxnLTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTRcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIEZvciBkZXNrdG9wIC0tPiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ub25lIGQtbGctYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICBEaWQgWW91IEZvcmdvdCBZb3VyIFBhc3N3b3JkPyBEb27igJl0IFdvcnJ5LCBZb3UgQ2FuIFJlc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgWW91ciBQYXNzd29yZCBJbiBhIE1pbnV0ZXMuXHJcbiAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBUbyByZXNldCB5b3VyIHBhc3N3b3JkLCB5b3UgbXVzdCB0eXBlIGEgbmV3IHBhc3N3b3JkIGFuZCB3ZVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbGwgaGVscCB5b3UgcmVzZXQgeW91ciBwYXNzd29yZCB0aGVuIHlvdSB3aWxsIGJlIGRpcmVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgdG8gdGhlIGxvZ2luIHNjcmVlbnMuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gRW5kIG9mIGZvciBkZXNrdG9wIC0tPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBGb3IgbW9iaWxlIDwgbWQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWJsb2NrIGQtbGctbm9uZSB0ZXh0LWNlbnRlciBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+UmVzZXQgUGFzc3dvcmQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRW50ZXIgeW91ciBad2FsbGV0IG5ldyBwYXNzd29yZCBzbyB5b3UgY2FuIGxvZ2luIGFnYWluLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIEVuZCBPZiBmb3IgbW9iaWxlIDwgbWQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBiZy13aGl0ZSBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCByb3VuZGVkLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzaWMtYWRkb24xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1sb2NrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgcm91bmRlZC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5ldyBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJnLXdoaXRlIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJhc2ljLWFkZG9uMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRlY29yYXRpb24tbm9uZSB0ZXh0LWRhcmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXllXCI+PC9pPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leWUtc2xhc2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiMTJweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSGF2ZSBtZW1vcml6ZWQgeW91ciBwYXNzd29yZCA/IExldCdzIGJhY2sgdG9cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtZGVjb3JhdGlvbi1ub25lXCI+IExvZ2luPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAucGhvbmUtYnJhbmQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmgtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0OmZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgb3V0bGluZTogMCBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaC1icmFuZCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucm91bmQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMHB4IDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVzZXRQYXNzd29yZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==