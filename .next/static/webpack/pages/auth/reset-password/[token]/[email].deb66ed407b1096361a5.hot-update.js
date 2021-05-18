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
      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
        title: "Success!",
        text: res.data.message,
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#6379f4;"
      }).then(function (result) {
        if (result.isConfirmed) {}

        router.push("/auth/login");
        setNewPassword("");
      });
    })["catch"](function (err) {
      console.log(err.response.data.message);
      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
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
          lineNumber: 57,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
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
              lineNumber: 62,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
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
                  lineNumber: 72,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "jsx-1217259691" + " " + "text-muted",
                  children: "To reset your password, you must type a new password and we will help you reset your password then you will be directed to the login screens."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-1217259691" + " " + "d-block d-lg-none text-center mb-5",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  className: "jsx-1217259691" + " " + "font-weight-bold",
                  children: "Reset Password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "jsx-1217259691" + " " + "text-muted",
                  children: "Enter your Zwallet new password so you can login again."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-1217259691" + " " + "mt-md-5",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                  onSubmit: onSubmitHandler,
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
                          lineNumber: 100,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 96,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "password",
                      placeholder: "Enter your new password",
                      value: newPassword,
                      onChange: function onChange(e) {
                        return setNewPassword(e.target.value);
                      },
                      required: true,
                      className: "jsx-1217259691" + " " + "form-control border-top-0 border-left-0 border-right-0 rounded-0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
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
                            lineNumber: 118,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 116,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "jsx-1217259691" + " " + "pt-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      type: "submit",
                      style: {
                        borderRadius: "12px"
                      },
                      className: "jsx-1217259691" + " " + "btn btn-secondary btn-block",
                      children: "Reset Password"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
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
                      lineNumber: 137,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1217259691",
      children: "@media screen and (max-width:992px){.phone-brand.jsx-1217259691{background-color:ghostwhite;}.h-content.jsx-1217259691{height:calc(100vh - 75px);box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important;}}input.jsx-1217259691:focus{border-color:blue !important;box-shadow:none !important;outline:0 none !important;}.h-brand.jsx-1217259691{height:100px;}.round.jsx-1217259691{border-radius:25px 25px 0px 0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxUdXRvcmlhbCBXZWJcXFdlZWsgMTBcXFp3YWxsZXQtRnJvbnRlbmRcXHBhZ2VzXFxhdXRoXFxyZXNldC1wYXNzd29yZFxcW3Rva2VuXVxcW2VtYWlsXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSlMsQUFJMkMsQUFHRixBQUtDLEFBS2hCLEFBR21CLGFBRmxDLGFBVjRELEVBSDFELENBUTJCLEdBUTdCLHdCQVA0Qix1QkFMMUIsR0FNRiIsImZpbGUiOiJEOlxcVHV0b3JpYWwgV2ViXFxXZWVrIDEwXFxad2FsbGV0LUZyb250ZW5kXFxwYWdlc1xcYXV0aFxccmVzZXQtcGFzc3dvcmRcXFt0b2tlbl1cXFtlbWFpbF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQXNpZGVMZWZ0IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL21vZHVsZS9Bc2lkZUxlZnRcIjtcclxuZnVuY3Rpb24gcmVzZXRQYXNzd29yZCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbbmV3UGFzc3dvcmQsIHNldE5ld1Bhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgVVJMQVBJID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMX0FQSV9XSVRIX1NMQVNIO1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtVUkxBUEl9YXBpL3Jlc2V0UGFzc3dvcmQvJHt0b2tlbn0vJHtlbWFpbH0vJHtuZXdQYXNzd29yZH1gLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiBcIlN1Y2Nlc3MhXCIsXHJcbiAgICAgICAgICB0ZXh0OiByZXMuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiM2Mzc5ZjQ7XCIsXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9hdXRoL2xvZ2luXCIpO1xyXG4gICAgICAgICAgc2V0TmV3UGFzc3dvcmQoXCJcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiBcIkVycm9yIVwiLFxyXG4gICAgICAgICAgdGV4dDogZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiI2E0YTdiNFwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5xdWVyeS50b2tlbiAmJiByb3V0ZXIucXVlcnkuZW1haWwpIHtcclxuICAgICAgc2V0RW1haWwocm91dGVyLnF1ZXJ5LmVtYWlsKTtcclxuICAgICAgc2V0VG9rZW4ocm91dGVyLnF1ZXJ5LnRva2VuKTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5LnRva2VuLCByb3V0ZXIucXVlcnkuZW1haWxdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1pbi12aC0xMDAgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgYmctYmx1ZSBtaW4tdmgtMTAwIGJnLWFjY2VudCBvdmVyZmxvdy1hdXRvIGQtbm9uZSBkLWxnLWZsZXggcHgtNVwiPlxyXG4gICAgICAgICAgPEFzaWRlTGVmdCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG1pbi12aC0xMDAgb3ZlcmZsb3ctYXV0byBkLWxnLWZsZXggcHgtbGctNSBwaG9uZS1icmFuZFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZC1sZy1ub25lIGgtYnJhbmRcIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCB3LTEwMCBhbGlnbi1zZWxmLWNlbnRlciBtLTAgdGV4dC1jZW50ZXIgdGV4dC1ibHVlXCI+XHJcbiAgICAgICAgICAgICAgICBad2FsbGV0XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXIgYmctd2hpdGUgaC1jb250ZW50IHJvdW5kIHB5LTUgcHktbGctMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gRm9yIGRlc2t0b3AgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW5vbmUgZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERpZCBZb3UgRm9yZ290IFlvdXIgUGFzc3dvcmQ/IERvbuKAmXQgV29ycnksIFlvdSBDYW4gUmVzZXRcclxuICAgICAgICAgICAgICAgICAgICBZb3VyIFBhc3N3b3JkIEluIGEgTWludXRlcy5cclxuICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRvIHJlc2V0IHlvdXIgcGFzc3dvcmQsIHlvdSBtdXN0IHR5cGUgYSBuZXcgcGFzc3dvcmQgYW5kIHdlXHJcbiAgICAgICAgICAgICAgICAgICAgd2lsbCBoZWxwIHlvdSByZXNldCB5b3VyIHBhc3N3b3JkIHRoZW4geW91IHdpbGwgYmUgZGlyZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICB0byB0aGUgbG9naW4gc2NyZWVucy5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBFbmQgb2YgZm9yIGRlc2t0b3AgLS0+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIEZvciBtb2JpbGUgPCBtZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtYmxvY2sgZC1sZy1ub25lIHRleHQtY2VudGVyIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5SZXNldCBQYXNzd29yZDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBFbnRlciB5b3VyIFp3YWxsZXQgbmV3IHBhc3N3b3JkIHNvIHlvdSBjYW4gbG9naW4gYWdhaW4uXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gRW5kIE9mIGZvciBtb2JpbGUgPCBtZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LW1kLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJnLXdoaXRlIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIHJvdW5kZWQtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1hZGRvbjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWxvY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCByb3VuZGVkLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmV3IHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld1Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1Bhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYmctd2hpdGUgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzaWMtYWRkb24xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGVjb3JhdGlvbi1ub25lIHRleHQtZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leWVcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV5ZS1zbGFzaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCIxMnB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVzZXQgUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICBIYXZlIG1lbW9yaXplZCB5b3VyIHBhc3N3b3JkID8gTGV0J3MgYmFjayB0b1xyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1kZWNvcmF0aW9uLW5vbmVcIj4gTG9naW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgIC5waG9uZS1icmFuZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaC1jb250ZW50IHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4KTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAwIG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oLWJyYW5kIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yb3VuZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwcHggMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNldFBhc3N3b3JkO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Tutorial Web\\\\Week 10\\\\Zwallet-Frontend\\\\pages\\\\auth\\\\reset-password\\\\[token]\\\\[email].js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9yZXNldC1wYXNzd29yZC9bdG9rZW5dL1tlbWFpbF0uanMiXSwibmFtZXMiOlsicmVzZXRQYXNzd29yZCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibmV3UGFzc3dvcmQiLCJzZXROZXdQYXNzd29yZCIsImVtYWlsIiwic2V0RW1haWwiLCJ0b2tlbiIsInNldFRva2VuIiwib25TdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIlVSTEFQSSIsInByb2Nlc3MiLCJheGlvcyIsImdldCIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwidGV4dCIsImRhdGEiLCJtZXNzYWdlIiwiaWNvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY29uZmlybUJ1dHRvbkNvbG9yIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJwdXNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwidXNlRWZmZWN0IiwicXVlcnkiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFDdkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEdUIsa0JBRWVDLHNEQUFRLENBQUMsRUFBRCxDQUZ2QjtBQUFBLE1BRWhCQyxXQUZnQjtBQUFBLE1BRUhDLGNBRkc7O0FBQUEsbUJBR0dGLHNEQUFRLENBQUMsRUFBRCxDQUhYO0FBQUEsTUFHaEJHLEtBSGdCO0FBQUEsTUFHVEMsUUFIUzs7QUFBQSxtQkFJR0osc0RBQVEsQ0FBQyxFQUFELENBSlg7QUFBQSxNQUloQkssS0FKZ0I7QUFBQSxNQUlUQyxRQUpTOztBQU12QixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQ0EsU0FBSyxDQUFDQyxjQUFOO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw0QkFBZjtBQUNBQyxnREFBSyxDQUNGQyxHQURILFdBQ1VILE1BRFYsK0JBQ3FDTCxLQURyQyxjQUM4Q0YsS0FEOUMsY0FDdURGLFdBRHZELEdBQ3NFO0FBQ2xFYSxxQkFBZSxFQUFFO0FBRGlELEtBRHRFLEVBSUdDLElBSkgsQ0FJUSxVQUFDQyxHQUFELEVBQVM7QUFDYkMsd0RBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ1JDLGFBQUssRUFBRSxVQURDO0FBRVJDLFlBQUksRUFBRUosR0FBRyxDQUFDSyxJQUFKLENBQVNDLE9BRlA7QUFHUkMsWUFBSSxFQUFFLFNBSEU7QUFJUkMseUJBQWlCLEVBQUUsSUFKWDtBQUtSQywwQkFBa0IsRUFBRTtBQUxaLE9BQVYsRUFNR1YsSUFOSCxDQU1RLFVBQUNXLE1BQUQsRUFBWTtBQUNsQixZQUFJQSxNQUFNLENBQUNDLFdBQVgsRUFBd0IsQ0FDdkI7O0FBQ0Q3QixjQUFNLENBQUM4QixJQUFQLENBQVksYUFBWjtBQUNBMUIsc0JBQWMsQ0FBQyxFQUFELENBQWQ7QUFDRCxPQVhEO0FBWUQsS0FqQkgsV0FrQlMsVUFBQzJCLEdBQUQsRUFBUztBQUNkQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxRQUFKLENBQWFYLElBQWIsQ0FBa0JDLE9BQTlCO0FBQ0FMLHdEQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNSQyxhQUFLLEVBQUUsUUFEQztBQUVSQyxZQUFJLEVBQUVTLEdBQUcsQ0FBQ0csUUFBSixDQUFhWCxJQUFiLENBQWtCQyxPQUZoQjtBQUdSQyxZQUFJLEVBQUUsT0FIRTtBQUlSQyx5QkFBaUIsRUFBRSxJQUpYO0FBS1JDLDBCQUFrQixFQUFFO0FBTFosT0FBVjtBQU9ELEtBM0JIO0FBNEJELEdBL0JEOztBQWlDQVEseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSW5DLE1BQU0sQ0FBQ29DLEtBQVAsQ0FBYTdCLEtBQWIsSUFBc0JQLE1BQU0sQ0FBQ29DLEtBQVAsQ0FBYS9CLEtBQXZDLEVBQThDO0FBQzVDQyxjQUFRLENBQUNOLE1BQU0sQ0FBQ29DLEtBQVAsQ0FBYS9CLEtBQWQsQ0FBUjtBQUNBRyxjQUFRLENBQUNSLE1BQU0sQ0FBQ29DLEtBQVAsQ0FBYTdCLEtBQWQsQ0FBUjtBQUNEO0FBQ0YsR0FMUSxFQUtOLENBQUNQLE1BQU0sQ0FBQ29DLEtBQVAsQ0FBYTdCLEtBQWQsRUFBcUJQLE1BQU0sQ0FBQ29DLEtBQVAsQ0FBYS9CLEtBQWxDLENBTE0sQ0FBVDtBQU9BLHNCQUNFO0FBQUE7QUFBQSw0QkFDRTtBQUFBLDBDQUFlLDJCQUFmO0FBQUEsOEJBQ0U7QUFBQSw0Q0FBZSwyRUFBZjtBQUFBLCtCQUNFLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFBLDRDQUFlLDREQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBLGlDQUNFO0FBQUEsZ0RBQWUsMEJBQWY7QUFBQSxtQ0FDRTtBQUFBLGtEQUFjLG9FQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFRRTtBQUFBLDhDQUFlLHlEQUFmO0FBQUEsaUNBQ0U7QUFBQSxnREFBZSxXQUFmO0FBQUEsbUNBQ0U7QUFBQSxrREFBZSxNQUFmO0FBQUEsc0NBRUU7QUFBQSxvREFBZSxtQkFBZjtBQUFBLHdDQUNFO0FBQUEsc0RBQWMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFLRTtBQUFBLHNEQUFhLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLGVBZ0JFO0FBQUEsb0RBQWUsb0NBQWY7QUFBQSx3Q0FDRTtBQUFBLHNEQUFjLGtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBRUU7QUFBQSxzREFBYSxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFoQkYsZUF1QkU7QUFBQSxvREFBZSxTQUFmO0FBQUEsd0NBQ0U7QUFBTSwwQkFBUSxFQUFFSSxlQUFoQjtBQUFBO0FBQUEsMENBQ0U7QUFBQSx3REFBZSxrQkFBZjtBQUFBLDRDQUNFO0FBQUEsMERBQWUscUJBQWY7QUFBQSw2Q0FDRTtBQUVFLDBCQUFFLEVBQUMsY0FGTDtBQUFBLDREQUNZLCtFQURaO0FBQUEsK0NBSUU7QUFBQSw4REFBYTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixlQVNFO0FBQ0UsMEJBQUksRUFBQyxVQURQO0FBR0UsaUNBQVcsRUFBQyx5QkFIZDtBQUlFLDJCQUFLLEVBQUVOLFdBSlQ7QUFLRSw4QkFBUSxFQUFFLGtCQUFDa0MsQ0FBRDtBQUFBLCtCQUFPakMsY0FBYyxDQUFDaUMsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBckI7QUFBQSx1QkFMWjtBQU1FLDhCQUFRLE1BTlY7QUFBQSwwREFFWTtBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBVEYsZUFpQkU7QUFBQSwwREFBZSxvQkFBZjtBQUFBLDZDQUNFO0FBRUUsMEJBQUUsRUFBQyxjQUZMO0FBQUEsNERBQ1kscUVBRFo7QUFBQSwrQ0FJRTtBQUFBLDhEQUFnQixnQ0FBaEI7QUFBQSxpREFFRTtBQUFBLGdFQUFhO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLGVBK0JFO0FBQUEsd0RBQWUsTUFBZjtBQUFBLDJDQUNFO0FBQ0UsMEJBQUksRUFBQyxRQURQO0FBR0UsMkJBQUssRUFBRTtBQUFFQyxvQ0FBWSxFQUFFO0FBQWhCLHVCQUhUO0FBQUEsMERBRVksNkJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUEwQ0U7QUFBQSxzREFBYSxrQkFBYjtBQUFBLDBGQUVFLHFFQUFDLGdEQUFEO0FBQU0sd0JBQUksRUFBQyxhQUFYO0FBQUEsMkNBQ0U7QUFBQSwwREFBYSxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQTFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUhEOztHQXJLUXpDLGE7VUFDUUUscUQ7OztBQXNLRkYsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9yZXNldC1wYXNzd29yZC9bdG9rZW5dL1tlbWFpbF0uZGViNjZlZDQwN2IxMDk2MzYxYTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBBc2lkZUxlZnQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbW9kdWxlL0FzaWRlTGVmdFwiO1xyXG5mdW5jdGlvbiByZXNldFBhc3N3b3JkKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtuZXdQYXNzd29yZCwgc2V0TmV3UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBVUkxBUEkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkxfQVBJX1dJVEhfU0xBU0g7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke1VSTEFQSX1hcGkvcmVzZXRQYXNzd29yZC8ke3Rva2VufS8ke2VtYWlsfS8ke25ld1Bhc3N3b3JkfWAsIHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiU3VjY2VzcyFcIixcclxuICAgICAgICAgIHRleHQ6IHJlcy5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzYzNzlmNDtcIixcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2F1dGgvbG9naW5cIik7XHJcbiAgICAgICAgICBzZXROZXdQYXNzd29yZChcIlwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiRXJyb3IhXCIsXHJcbiAgICAgICAgICB0ZXh0OiBlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjYTRhN2I0XCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LnRva2VuICYmIHJvdXRlci5xdWVyeS5lbWFpbCkge1xyXG4gICAgICBzZXRFbWFpbChyb3V0ZXIucXVlcnkuZW1haWwpO1xyXG4gICAgICBzZXRUb2tlbihyb3V0ZXIucXVlcnkudG9rZW4pO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnkudG9rZW4sIHJvdXRlci5xdWVyeS5lbWFpbF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWluLXZoLTEwMCBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNyBiZy1ibHVlIG1pbi12aC0xMDAgYmctYWNjZW50IG92ZXJmbG93LWF1dG8gZC1ub25lIGQtbGctZmxleCBweC01XCI+XHJcbiAgICAgICAgICA8QXNpZGVMZWZ0IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbWluLXZoLTEwMCBvdmVyZmxvdy1hdXRvIGQtbGctZmxleCBweC1sZy01IHBob25lLWJyYW5kXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBkLWxnLW5vbmUgaC1icmFuZFwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIHctMTAwIGFsaWduLXNlbGYtY2VudGVyIG0tMCB0ZXh0LWNlbnRlciB0ZXh0LWJsdWVcIj5cclxuICAgICAgICAgICAgICAgIFp3YWxsZXRcclxuICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlciBiZy13aGl0ZSBoLWNvbnRlbnQgcm91bmQgcHktNSBweS1sZy0wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00XCI+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBGb3IgZGVza3RvcCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbm9uZSBkLWxnLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRGlkIFlvdSBGb3Jnb3QgWW91ciBQYXNzd29yZD8gRG9u4oCZdCBXb3JyeSwgWW91IENhbiBSZXNldFxyXG4gICAgICAgICAgICAgICAgICAgIFlvdXIgUGFzc3dvcmQgSW4gYSBNaW51dGVzLlxyXG4gICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVG8gcmVzZXQgeW91ciBwYXNzd29yZCwgeW91IG11c3QgdHlwZSBhIG5ldyBwYXNzd29yZCBhbmQgd2VcclxuICAgICAgICAgICAgICAgICAgICB3aWxsIGhlbHAgeW91IHJlc2V0IHlvdXIgcGFzc3dvcmQgdGhlbiB5b3Ugd2lsbCBiZSBkaXJlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHRoZSBsb2dpbiBzY3JlZW5zLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIEVuZCBvZiBmb3IgZGVza3RvcCAtLT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gRm9yIG1vYmlsZSA8IG1kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ibG9jayBkLWxnLW5vbmUgdGV4dC1jZW50ZXIgbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlJlc2V0IFBhc3N3b3JkPC9oND5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVudGVyIHlvdXIgWndhbGxldCBuZXcgcGFzc3dvcmQgc28geW91IGNhbiBsb2dpbiBhZ2Fpbi5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBFbmQgT2YgZm9yIG1vYmlsZSA8IG1kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtbWQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYmctd2hpdGUgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgcm91bmRlZC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJhc2ljLWFkZG9uMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbG9ja1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIHJvdW5kZWQtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuZXcgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3UGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBiZy13aGl0ZSBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1hZGRvbjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kZWNvcmF0aW9uLW5vbmUgdGV4dC1kYXJrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV5ZVwiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXllLXNsYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjEycHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZXNldCBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEhhdmUgbWVtb3JpemVkIHlvdXIgcGFzc3dvcmQgPyBMZXQncyBiYWNrIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWRlY29yYXRpb24tbm9uZVwiPiBMb2dpbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLnBob25lLWJyYW5kIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc1cHgpO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbnB1dDpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDAgbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmgtYnJhbmQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJvdW5kIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDBweCAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlc2V0UGFzc3dvcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=