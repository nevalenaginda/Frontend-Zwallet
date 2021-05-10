webpackHotUpdate_N_E("pages/auth/login",{

/***/ "./pages/auth/login.js":
/*!*****************************!*\
  !*** ./pages/auth/login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_module_AsideLeft__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/module/AsideLeft */ "./components/module/AsideLeft.js");
/* harmony import */ var _components_base_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/base/Input */ "./components/base/Input.js");
/* harmony import */ var _components_base_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/base/Button */ "./components/base/Button.jsx");
/* harmony import */ var _components_base_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/base/Layout */ "./components/base/Layout.js");



var _jsxFileName = "D:\\Tutorial Web\\Week 10\\Zwallet-Frontend\\pages\\auth\\login.js",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function login() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    email: "",
    password: ""
  }),
      dataLogin = _useState[0],
      setDataLogin = _useState[1];

  var handleFormLogin = function handleFormLogin(event) {
    var newData = _objectSpread({}, dataLogin);

    newData[event.target.name] = event.target.value;
    setDataLogin(newData);
  };

  var onSubmitHandler = function onSubmitHandler(event) {
    event.preventDefault();
    var URLAPI = "http://localhost:5001/api/";
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(URLAPI, "login/"), dataLogin, {
      withCredentials: true
    }).then(function (res) {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);

      if (res.data.pin === true) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
          title: "Success!",
          text: res.data.message,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6379f4;"
        }).then(function (result) {
          if (result.isConfirmed) {
            router.push("/dashboard");
          } else {
            router.push("/dashboard");
          }
        });
      } else {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
          title: "Success!",
          text: res.data.message,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6379f4;"
        }).then(function (result) {
          if (result.isConfirmed) {
            router.push("/auth/pin");
          } else {
            router.push("/auth/pin");
          }
        });
      }
    })["catch"](function (err) {
      console.log(err.response.data.message);
      sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
        title: "Error!",
        text: err,
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#a4a7b4"
      });
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_base_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: "Login",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-2093279435",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-2093279435" + " " + "row min-vh-100 no-gutters",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-2093279435" + " " + "col-7 bg-blue min-vh-100 bg-accent overflow-auto d-none d-lg-flex px-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_module_AsideLeft__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-2093279435" + " " + "col w-100 min-vh-100 overflow-auto d-flex px-lg-5 phone-brand",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-2093279435" + " " + "w-100 align-self-lg-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-2093279435" + " " + "d-flex d-lg-none h-brand",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "jsx-2093279435" + " " + "font-weight-bold w-100 align-self-center m-0 text-center text-blue",
                children: "Zwallet"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-2093279435" + " " + "align-self-center w-100",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-2093279435" + " " + "d-none d-lg-block",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-2093279435" + " " + "py-5 px-2 pr-5",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                    className: "jsx-2093279435" + " " + "font-weight-bold",
                    children: "Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "jsx-2093279435" + " " + "text-muted",
                    children: "Transfering money is easier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-2093279435" + " " + "d-flex d-lg-block",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-2093279435" + " " + "align-self-center w-100",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "jsx-2093279435" + " " + "bg-white round h-content",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "jsx-2093279435" + " " + "py-5 d-block d-lg-none",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                        className: "jsx-2093279435" + " " + "font-weight-bold text-center",
                        children: "Login"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "jsx-2093279435" + " " + "text-muted text-center",
                        children: ["Login to your existing account to access ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {
                          className: "jsx-2093279435"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 114,
                          columnNumber: 68
                        }, this), "all the features in Zwallet"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 113,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "jsx-2093279435" + " " + "container",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "jsx-2093279435" + " " + "my-2 m-lg-0 p-lg-0 px-4",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                          onSubmit: onSubmitHandler,
                          className: "jsx-2093279435",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "jsx-2093279435" + " " + "input-group mb-3",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "jsx-2093279435" + " " + "input-group-prepend",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                id: "basic-addon1",
                                className: "jsx-2093279435" + " " + "input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "jsx-2093279435" + " " + "far fa-envelope"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 128,
                                  columnNumber: 35
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 124,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 123,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_base_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
                              type: "email",
                              className: "form-control border-top-0 border-left-0 border-right-0 rounded-0",
                              placeholder: "Enter your e-mail",
                              name: "email",
                              onChange: handleFormLogin,
                              required: true
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 131,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 122,
                            columnNumber: 29
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "jsx-2093279435" + " " + "input-group mb-3",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "jsx-2093279435" + " " + "input-group-prepend",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                id: "basic-addon1",
                                className: "jsx-2093279435" + " " + "input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "jsx-2093279435" + " " + "fas fa-lock"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 146,
                                  columnNumber: 35
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 142,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 141,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_base_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
                              type: "password",
                              className: "border-top-0 border-left-0 border-right-0 rounded-0",
                              placeholder: "Enter your password",
                              name: "password",
                              onChange: handleFormLogin
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 149,
                              columnNumber: 31
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "jsx-2093279435" + " " + "input-group-append",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                id: "basic-addon1",
                                className: "jsx-2093279435" + " " + "input-group-text bg-white border-top-0 border-left-0 border-right-0",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: "jsx-2093279435" + " " + "text-decoration-none text-dark",
                                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                    className: "jsx-2093279435" + " " + "fas fa-eye-slash"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 163,
                                    columnNumber: 37
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 161,
                                  columnNumber: 35
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 157,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 156,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 140,
                            columnNumber: 29
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                            className: "jsx-2093279435" + " " + "font-weight-bold text-right",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                              href: "/auth/forgot-password",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                className: "jsx-2093279435" + " " + "text-decoration-none text-muted",
                                children: "Forgot password?"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 170,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 169,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 168,
                            columnNumber: 29
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_base_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
                            type: "submit",
                            className: "btn btn-secondary btn-block",
                            style: {
                              borderRadius: "12px"
                            },
                            children: "Login"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 175,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 121,
                          columnNumber: 27
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          className: "jsx-2093279435" + " " + "text-center pt-4",
                          children: ["Don\u2019t have an account? Let\u2019s", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                            href: "/auth/register",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              className: "jsx-2093279435" + " " + "text-decoration-none",
                              children: " Sign Up"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 186,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 185,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 183,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 120,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 119,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "2093279435",
      children: "@media screen and (max-width:992px){.phone-brand.jsx-2093279435{background-color:ghostwhite;}.h-content.jsx-2093279435{height:calc(100vh - 75px);box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important;}}.round.jsx-2093279435{border-radius:25px 25px 0px 0px;}.h-brand.jsx-2093279435{height:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxUdXRvcmlhbCBXZWJcXFdlZWsgMTBcXFp3YWxsZXQtRnJvbnRlbmRcXHBhZ2VzXFxhdXRoXFxsb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1TVMsQUFJMkMsQUFHRixBQUtJLEFBR25CLGFBQ2YsYUFSNEQsRUFIMUQsSUFRRiwrQ0FKRSIsImZpbGUiOiJEOlxcVHV0b3JpYWwgV2ViXFxXZWVrIDEwXFxad2FsbGV0LUZyb250ZW5kXFxwYWdlc1xcYXV0aFxcbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBc2lkZUxlZnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9kdWxlL0FzaWRlTGVmdFwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9JbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvQnV0dG9uXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9MYXlvdXRcIjtcclxuXHJcbmZ1bmN0aW9uIGxvZ2luKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtkYXRhTG9naW4sIHNldERhdGFMb2dpbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGhhbmRsZUZvcm1Mb2dpbiA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IHsgLi4uZGF0YUxvZ2luIH07XHJcbiAgICBuZXdEYXRhW2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIHNldERhdGFMb2dpbihuZXdEYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBVUkxBUEkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkxfQVBJX1dJVEhfU0xBU0g7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChgJHtVUkxBUEl9bG9naW4vYCwgZGF0YUxvZ2luLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlcy5kYXRhLnRva2VuKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlkXCIsIHJlcy5kYXRhLmlkKTtcclxuICAgICAgICBpZiAocmVzLmRhdGEucGluID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJTdWNjZXNzIVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiByZXMuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiM2Mzc5ZjQ7XCIsXHJcbiAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJTdWNjZXNzIVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiByZXMuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiM2Mzc5ZjQ7XCIsXHJcbiAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2F1dGgvcGluXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2F1dGgvcGluXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiBcIkVycm9yIVwiLFxyXG4gICAgICAgICAgdGV4dDogZXJyLFxyXG4gICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjYTRhN2I0XCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPXtcIkxvZ2luXCJ9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1pbi12aC0xMDAgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNyBiZy1ibHVlIG1pbi12aC0xMDAgYmctYWNjZW50IG92ZXJmbG93LWF1dG8gZC1ub25lIGQtbGctZmxleCBweC01XCI+XHJcbiAgICAgICAgICAgIDxBc2lkZUxlZnQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdy0xMDAgbWluLXZoLTEwMCBvdmVyZmxvdy1hdXRvIGQtZmxleCBweC1sZy01IHBob25lLWJyYW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgYWxpZ24tc2VsZi1sZy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBkLWxnLW5vbmUgaC1icmFuZFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdy0xMDAgYWxpZ24tc2VsZi1jZW50ZXIgbS0wIHRleHQtY2VudGVyIHRleHQtYmx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICBad2FsbGV0XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXIgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIERlc2t0b3AgdmlldyAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbm9uZSBkLWxnLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNSBweC0yIHByLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU3RhcnQgQWNjZXNzaW5nIEJhbmtpbmcgTmVlZHMgV2l0aCBBbGwgRGV2aWNlcyBhbmQgQWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybXMgV2l0aCAzMC4wMDArIFVzZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBUcmFuc2ZlcmluZyBtb25leSBpcyBlYXNpZXIgdGhhbiBldmVyLCB5b3UgY2FuIGFjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgWndhbGxldCB3aGVyZXZlciB5b3UgYXJlLiBEZXNrdG9wLCBsYXB0b3AsIG1vYmlsZSBwaG9uZT9cclxuICAgICAgICAgICAgICAgICAgICAgIHdlIGNvdmVyIGFsbCBvZiB0aGF0IGZvciB5b3UhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gRW5kIE9mIERlc2t0b3AgVmlldyAtLT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gPD0gTUQgdmlldyAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBkLWxnLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXIgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kIGgtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS01IGQtYmxvY2sgZC1sZy1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIHRleHQtY2VudGVyXCI+TG9naW48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gdG8geW91ciBleGlzdGluZyBhY2NvdW50IHRvIGFjY2VzcyA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGwgdGhlIGZlYXR1cmVzIGluIFp3YWxsZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSA8PSBFbmQgT2YgTUQgdmlldyAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBtLWxnLTAgcC1sZy0wIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBiZy13aGl0ZSBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCByb3VuZGVkLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1hZGRvbjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1lbnZlbG9wZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCByb3VuZGVkLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlLW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1Mb2dpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYmctd2hpdGUgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgcm91bmRlZC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzaWMtYWRkb24xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbG9ja1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIHJvdW5kZWQtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtTG9naW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYmctd2hpdGUgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1hZGRvbjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGVjb3JhdGlvbi1ub25lIHRleHQtZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV5ZVwiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leWUtc2xhc2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvZm9yZ290LXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1kZWNvcmF0aW9uLW5vbmUgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yZ290IHBhc3N3b3JkP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCIxMnB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb27igJl0IGhhdmUgYW4gYWNjb3VudD8gTGV04oCZc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtZGVjb3JhdGlvbi1ub25lXCI+IFNpZ24gVXA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLnBob25lLWJyYW5kIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc1cHgpO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucm91bmQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMHB4IDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oLWJyYW5kIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW47XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Tutorial Web\\\\Week 10\\\\Zwallet-Frontend\\\\pages\\\\auth\\\\login.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, this);
}

_s(login, "WApaH+fRhE7yMTUhkWGDjnaGJKk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

/* harmony default export */ __webpack_exports__["default"] = (login);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9sb2dpbi5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImRhdGFMb2dpbiIsInNldERhdGFMb2dpbiIsImhhbmRsZUZvcm1Mb2dpbiIsImV2ZW50IiwibmV3RGF0YSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIm9uU3VibWl0SGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiVVJMQVBJIiwicHJvY2VzcyIsImF4aW9zIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRhdGEiLCJ0b2tlbiIsImlkIiwicGluIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJtZXNzYWdlIiwiaWNvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY29uZmlybUJ1dHRvbkNvbG9yIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJwdXNoIiwiZXJyIiwicmVzcG9uc2UiLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQ2YsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEZSxrQkFFbUJDLHNEQUFRLENBQUM7QUFDekNDLFNBQUssRUFBRSxFQURrQztBQUV6Q0MsWUFBUSxFQUFFO0FBRitCLEdBQUQsQ0FGM0I7QUFBQSxNQUVSQyxTQUZRO0FBQUEsTUFFR0MsWUFGSDs7QUFNZixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxRQUFNQyxPQUFPLHFCQUFRSixTQUFSLENBQWI7O0FB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dGgvbG9naW4uOTJlZDc1NTdkYWMwYjgwMGEzYzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEFzaWRlTGVmdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2R1bGUvQXNpZGVMZWZ0XCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9iYXNlL0lucHV0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9CdXR0b25cIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9iYXNlL0xheW91dFwiO1xyXG5cclxuZnVuY3Rpb24gbG9naW4oKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2RhdGFMb2dpbiwgc2V0RGF0YUxvZ2luXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgaGFuZGxlRm9ybUxvZ2luID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0geyAuLi5kYXRhTG9naW4gfTtcclxuICAgIG5ld0RhdGFbZXZlbnQudGFyZ2V0Lm5hbWVdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0RGF0YUxvZ2luKG5ld0RhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IFVSTEFQSSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9BUElfV0lUSF9TTEFTSDtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGAke1VSTEFQSX1sb2dpbi9gLCBkYXRhTG9naW4sIHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzLmRhdGEudG9rZW4pO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaWRcIiwgcmVzLmRhdGEuaWQpO1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5waW4gPT09IHRydWUpIHtcclxuICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlN1Y2Nlc3MhXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IHJlcy5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzYzNzlmNDtcIixcclxuICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlN1Y2Nlc3MhXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IHJlcy5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzYzNzlmNDtcIixcclxuICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYXV0aC9waW5cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYXV0aC9waW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgdGl0bGU6IFwiRXJyb3IhXCIsXHJcbiAgICAgICAgICB0ZXh0OiBlcnIsXHJcbiAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiNhNGE3YjRcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9e1wiTG9naW5cIn0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWluLXZoLTEwMCBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03IGJnLWJsdWUgbWluLXZoLTEwMCBiZy1hY2NlbnQgb3ZlcmZsb3ctYXV0byBkLW5vbmUgZC1sZy1mbGV4IHB4LTVcIj5cclxuICAgICAgICAgICAgPEFzaWRlTGVmdCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB3LTEwMCBtaW4tdmgtMTAwIG92ZXJmbG93LWF1dG8gZC1mbGV4IHB4LWxnLTUgcGhvbmUtYnJhbmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBhbGlnbi1zZWxmLWxnLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGQtbGctbm9uZSBoLWJyYW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCB3LTEwMCBhbGlnbi1zZWxmLWNlbnRlciBtLTAgdGV4dC1jZW50ZXIgdGV4dC1ibHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgIFp3YWxsZXRcclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlciB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gRGVza3RvcCB2aWV3IC0tPiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ub25lIGQtbGctYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS01IHB4LTIgcHItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTdGFydCBBY2Nlc3NpbmcgQmFua2luZyBOZWVkcyBXaXRoIEFsbCBEZXZpY2VzIGFuZCBBbGxcclxuICAgICAgICAgICAgICAgICAgICAgIFBsYXRmb3JtcyBXaXRoIDMwLjAwMCsgVXNlcnNcclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFRyYW5zZmVyaW5nIG1vbmV5IGlzIGVhc2llciB0aGFuIGV2ZXIsIHlvdSBjYW4gYWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICBad2FsbGV0IHdoZXJldmVyIHlvdSBhcmUuIERlc2t0b3AsIGxhcHRvcCwgbW9iaWxlIHBob25lP1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2UgY292ZXIgYWxsIG9mIHRoYXQgZm9yIHlvdSFcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBFbmQgT2YgRGVza3RvcCBWaWV3IC0tPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSA8PSBNRCB2aWV3IC0tPiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGQtbGctYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlciB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmQgaC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTUgZC1ibG9jayBkLWxnLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1jZW50ZXJcIj5Mb2dpbjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpbiB0byB5b3VyIGV4aXN0aW5nIGFjY291bnQgdG8gYWNjZXNzIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsbCB0aGUgZmVhdHVyZXMgaW4gWndhbGxldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIDw9IEVuZCBPZiBNRCB2aWV3IC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIG0tbGctMCBwLWxnLTAgcHgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJnLXdoaXRlIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIHJvdW5kZWQtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJhc2ljLWFkZG9uMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWVudmVsb3BlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIHJvdW5kZWQtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUxvZ2lufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBiZy13aGl0ZSBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCByb3VuZGVkLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1hZGRvbjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1sb2NrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgcm91bmRlZC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1Mb2dpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBiZy13aGl0ZSBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJhc2ljLWFkZG9uMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kZWNvcmF0aW9uLW5vbmUgdGV4dC1kYXJrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXllXCI+PC9pPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV5ZS1zbGFzaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9mb3Jnb3QtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWRlY29yYXRpb24tbm9uZSB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3Jnb3QgcGFzc3dvcmQ/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjEycHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyBMZXTigJlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1kZWNvcmF0aW9uLW5vbmVcIj4gU2lnbiBVcDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAucGhvbmUtYnJhbmQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmgtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yb3VuZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwcHggMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmgtYnJhbmQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==