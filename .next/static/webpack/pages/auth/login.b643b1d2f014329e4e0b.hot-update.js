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
          text: res,
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
          text: res,
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
      console.log(err.response.data.data.message);
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
      children: "@media screen and (max-width:992px){.phone-brand.jsx-2093279435{background-color:ghostwhite;}.h-content.jsx-2093279435{height:calc(100vh - 75px);box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important;}}.round.jsx-2093279435{border-radius:25px 25px 0px 0px;}.h-brand.jsx-2093279435{height:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxUdXRvcmlhbCBXZWJcXFdlZWsgMTBcXFp3YWxsZXQtRnJvbnRlbmRcXHBhZ2VzXFxhdXRoXFxsb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1TVMsQUFJMkMsQUFHRixBQUtJLEFBR25CLGFBQ2YsYUFSNEQsRUFIMUQsSUFRRiwrQ0FKRSIsImZpbGUiOiJEOlxcVHV0b3JpYWwgV2ViXFxXZWVrIDEwXFxad2FsbGV0LUZyb250ZW5kXFxwYWdlc1xcYXV0aFxcbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBc2lkZUxlZnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9kdWxlL0FzaWRlTGVmdFwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9JbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvQnV0dG9uXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmFzZS9MYXlvdXRcIjtcclxuXHJcbmZ1bmN0aW9uIGxvZ2luKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtkYXRhTG9naW4sIHNldERhdGFMb2dpbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGhhbmRsZUZvcm1Mb2dpbiA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IHsgLi4uZGF0YUxvZ2luIH07XHJcbiAgICBuZXdEYXRhW2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIHNldERhdGFMb2dpbihuZXdEYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBVUkxBUEkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkxfQVBJX1dJVEhfU0xBU0g7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChgJHtVUkxBUEl9bG9naW4vYCwgZGF0YUxvZ2luLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlcy5kYXRhLnRva2VuKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlkXCIsIHJlcy5kYXRhLmlkKTtcclxuICAgICAgICBpZiAocmVzLmRhdGEucGluID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJTdWNjZXNzIVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiByZXMsXHJcbiAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzYzNzlmNDtcIixcclxuICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlN1Y2Nlc3MhXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IHJlcyxcclxuICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjNjM3OWY0O1wiLFxyXG4gICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9hdXRoL3BpblwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9hdXRoL3BpblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiBcIkVycm9yIVwiLFxyXG4gICAgICAgICAgdGV4dDogZXJyLFxyXG4gICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjYTRhN2I0XCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPXtcIkxvZ2luXCJ9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1pbi12aC0xMDAgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNyBiZy1ibHVlIG1pbi12aC0xMDAgYmctYWNjZW50IG92ZXJmbG93LWF1dG8gZC1ub25lIGQtbGctZmxleCBweC01XCI+XHJcbiAgICAgICAgICAgIDxBc2lkZUxlZnQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdy0xMDAgbWluLXZoLTEwMCBvdmVyZmxvdy1hdXRvIGQtZmxleCBweC1sZy01IHBob25lLWJyYW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgYWxpZ24tc2VsZi1sZy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBkLWxnLW5vbmUgaC1icmFuZFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdy0xMDAgYWxpZ24tc2VsZi1jZW50ZXIgbS0wIHRleHQtY2VudGVyIHRleHQtYmx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICBad2FsbGV0XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXIgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIERlc2t0b3AgdmlldyAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbm9uZSBkLWxnLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNSBweC0yIHByLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU3RhcnQgQWNjZXNzaW5nIEJhbmtpbmcgTmVlZHMgV2l0aCBBbGwgRGV2aWNlcyBhbmQgQWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybXMgV2l0aCAzMC4wMDArIFVzZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBUcmFuc2ZlcmluZyBtb25leSBpcyBlYXNpZXIgdGhhbiBldmVyLCB5b3UgY2FuIGFjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgWndhbGxldCB3aGVyZXZlciB5b3UgYXJlLiBEZXNrdG9wLCBsYXB0b3AsIG1vYmlsZSBwaG9uZT9cclxuICAgICAgICAgICAgICAgICAgICAgIHdlIGNvdmVyIGFsbCBvZiB0aGF0IGZvciB5b3UhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gRW5kIE9mIERlc2t0b3AgVmlldyAtLT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gPD0gTUQgdmlldyAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBkLWxnLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXIgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kIGgtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS01IGQtYmxvY2sgZC1sZy1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIHRleHQtY2VudGVyXCI+TG9naW48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gdG8geW91ciBleGlzdGluZyBhY2NvdW50IHRvIGFjY2VzcyA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGwgdGhlIGZlYXR1cmVzIGluIFp3YWxsZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSA8PSBFbmQgT2YgTUQgdmlldyAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBtLWxnLTAgcC1sZy0wIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBiZy13aGl0ZSBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCByb3VuZGVkLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1hZGRvbjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1lbnZlbG9wZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCByb3VuZGVkLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlLW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZvcm1Mb2dpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYmctd2hpdGUgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgcm91bmRlZC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzaWMtYWRkb24xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbG9ja1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIHJvdW5kZWQtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtTG9naW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYmctd2hpdGUgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1hZGRvbjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGVjb3JhdGlvbi1ub25lIHRleHQtZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV5ZVwiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leWUtc2xhc2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGgvZm9yZ290LXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1kZWNvcmF0aW9uLW5vbmUgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yZ290IHBhc3N3b3JkP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCIxMnB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb27igJl0IGhhdmUgYW4gYWNjb3VudD8gTGV04oCZc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtZGVjb3JhdGlvbi1ub25lXCI+IFNpZ24gVXA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLnBob25lLWJyYW5kIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDc1cHgpO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucm91bmQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMHB4IDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oLWJyYW5kIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW47XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Tutorial Web\\\\Week 10\\\\Zwallet-Frontend\\\\pages\\\\auth\\\\login.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9sb2dpbi5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImRhdGFMb2dpbiIsInNldERhdGFMb2dpbiIsImhhbmRsZUZvcm1Mb2dpbiIsImV2ZW50IiwibmV3RGF0YSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIm9uU3VibWl0SGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiVVJMQVBJIiwicHJvY2VzcyIsImF4aW9zIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRhdGEiLCJ0b2tlbiIsImlkIiwicGluIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjb25maXJtQnV0dG9uQ29sb3IiLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsInB1c2giLCJlcnIiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQ2YsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEZSxrQkFFbUJDLHNEQUFRLENBQUM7QUFDekNDLFNBQUssRUFBRSxFQURrQztBQUV6Q0MsWUFBUSxFQUFFO0FBRitCLEdBQUQsQ0FGM0I7QUFBQSxNQUVSQyxTQUZRO0FBQUEsTUFFR0MsWUFGSDs7QUFNZixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxRQUFNQyxPQUFPLHFCQUFRSixTQUFSLENBQWI7O0FB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b3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQXNpZGVMZWZ0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vZHVsZS9Bc2lkZUxlZnRcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvSW5wdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9iYXNlL0J1dHRvblwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jhc2UvTGF5b3V0XCI7XHJcblxyXG5mdW5jdGlvbiBsb2dpbigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZGF0YUxvZ2luLCBzZXREYXRhTG9naW5dID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBoYW5kbGVGb3JtTG9naW4gPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSB7IC4uLmRhdGFMb2dpbiB9O1xyXG4gICAgbmV3RGF0YVtldmVudC50YXJnZXQubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBzZXREYXRhTG9naW4obmV3RGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgVVJMQVBJID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMX0FQSV9XSVRIX1NMQVNIO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYCR7VVJMQVBJfWxvZ2luL2AsIGRhdGFMb2dpbiwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCByZXMuZGF0YS50b2tlbik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpZFwiLCByZXMuZGF0YS5pZCk7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnBpbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiU3VjY2VzcyFcIixcclxuICAgICAgICAgICAgdGV4dDogcmVzLFxyXG4gICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2tcIixcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiM2Mzc5ZjQ7XCIsXHJcbiAgICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJTdWNjZXNzIVwiLFxyXG4gICAgICAgICAgICB0ZXh0OiByZXMsXHJcbiAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzYzNzlmNDtcIixcclxuICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYXV0aC9waW5cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYXV0aC9waW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICB0aXRsZTogXCJFcnJvciFcIixcclxuICAgICAgICAgIHRleHQ6IGVycixcclxuICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiI2E0YTdiNFwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT17XCJMb2dpblwifT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtaW4tdmgtMTAwIG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTcgYmctYmx1ZSBtaW4tdmgtMTAwIGJnLWFjY2VudCBvdmVyZmxvdy1hdXRvIGQtbm9uZSBkLWxnLWZsZXggcHgtNVwiPlxyXG4gICAgICAgICAgICA8QXNpZGVMZWZ0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHctMTAwIG1pbi12aC0xMDAgb3ZlcmZsb3ctYXV0byBkLWZsZXggcHgtbGctNSBwaG9uZS1icmFuZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGFsaWduLXNlbGYtbGctY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZC1sZy1ub25lIGgtYnJhbmRcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIHctMTAwIGFsaWduLXNlbGYtY2VudGVyIG0tMCB0ZXh0LWNlbnRlciB0ZXh0LWJsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgWndhbGxldFxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBEZXNrdG9wIHZpZXcgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW5vbmUgZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTUgcHgtMiBwci01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IEFjY2Vzc2luZyBCYW5raW5nIE5lZWRzIFdpdGggQWxsIERldmljZXMgYW5kIEFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgUGxhdGZvcm1zIFdpdGggMzAuMDAwKyBVc2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVHJhbnNmZXJpbmcgbW9uZXkgaXMgZWFzaWVyIHRoYW4gZXZlciwgeW91IGNhbiBhY2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgIFp3YWxsZXQgd2hlcmV2ZXIgeW91IGFyZS4gRGVza3RvcCwgbGFwdG9wLCBtb2JpbGUgcGhvbmU/XHJcbiAgICAgICAgICAgICAgICAgICAgICB3ZSBjb3ZlciBhbGwgb2YgdGhhdCBmb3IgeW91IVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIEVuZCBPZiBEZXNrdG9wIFZpZXcgLS0+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIDw9IE1EIHZpZXcgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZCBoLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNSBkLWJsb2NrIGQtbGctbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWNlbnRlclwiPkxvZ2luPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luIHRvIHlvdXIgZXhpc3RpbmcgYWNjb3VudCB0byBhY2Nlc3MgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsIHRoZSBmZWF0dXJlcyBpbiBad2FsbGV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gPD0gRW5kIE9mIE1EIHZpZXcgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgbS1sZy0wIHAtbGctMCBweC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYmctd2hpdGUgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgcm91bmRlZC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzaWMtYWRkb24xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtZW52ZWxvcGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgcm91bmRlZC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZS1tYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtTG9naW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJnLXdoaXRlIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIHJvdW5kZWQtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJhc2ljLWFkZG9uMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWxvY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCByb3VuZGVkLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRm9ybUxvZ2lufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJnLXdoaXRlIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzaWMtYWRkb24xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWRlY29yYXRpb24tbm9uZSB0ZXh0LWRhcmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leWVcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXllLXNsYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL2ZvcmdvdC1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtZGVjb3JhdGlvbi1ub25lIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiMTJweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/IExldOKAmXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWRlY29yYXRpb24tbm9uZVwiPiBTaWduIFVwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgIC5waG9uZS1icmFuZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaC1jb250ZW50IHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3NXB4KTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJvdW5kIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDBweCAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaC1icmFuZCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2luO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9