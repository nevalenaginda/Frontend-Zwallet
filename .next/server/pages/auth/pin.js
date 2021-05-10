module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth/pin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/phone.svg":
/*!*********************************!*\
  !*** ./assets/images/phone.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/phone-c6d58297b6de1fde282d80fa33e49750.svg";

/***/ }),

/***/ "./pages/auth/pin.js":
/*!***************************!*\
  !*** ./pages/auth/pin.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-pin-input */ "react-pin-input");
/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_pin_input__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "D:\\Tutorial Web\\Week 10\\Zwallet-Frontend\\pages\\auth\\pin.js";







function pin() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: statePin,
    1: setStatePin
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: stateProcess,
    1: setStateProcess
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("input");

  const handleChangePinValue = value => {
    setStatePin(value);
  };

  const onSubmitPin = event => {
    event.preventDefault();
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    console.log(id);
    const dataPin = {
      pin: statePin
    };
    console.log(dataPin);
    const URLAPI = "http://localhost:5001/api/";
    setStateProcess("loading");
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.patch(`${URLAPI}user/${id}`, dataPin, {
      withCredentials: true
    }).then(res => {
      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
        title: "Success!",
        text: res.data.message,
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#6379f4;"
      }).then(result => {
        setStateProcess("success");

        if (result.isConfirmed) {
          router.push("/dashboard");
        } else {
          router.push("/dashboard");
        }
      });
    }).catch(err => {
      setStateProcess("input");
      setStatePin("");
      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
        title: "Error!",
        text: err.response.data.message,
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#a4a7b4"
      });
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-1633632738",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-1633632738" + " " + "row min-vh-100 no-gutters",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-1633632738" + " " + "col-7 bg-blue bg-accent overflow-auto d-none d-lg-flex px-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-1633632738" + " " + "container align-self-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: "jsx-1633632738" + " " + "font-weight-bold text-white",
            children: "ZWallet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-1633632738" + " " + "text-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              style: {
                height: "400px"
              },
              src: __webpack_require__(/*! ../../assets/images/phone.svg */ "./assets/images/phone.svg"),
              className: "jsx-1633632738"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "jsx-1633632738" + " " + "font-weight-bold text-white",
            children: "App that Covering Banking Needs."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-1633632738" + " " + "pr-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "jsx-1633632738" + " " + "text-light",
              children: "Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered inZwallet everyday with worldwide users coverage."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-1633632738" + " " + "col overflow-auto d-flex",
        children: stateProcess === "input" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-1633632738" + " " + "container align-self-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-1633632738" + " " + "px-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: "jsx-1633632738" + " " + "font-weight-bold",
              children: "Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "jsx-1633632738" + " " + "text-muted",
              children: "Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don\u2019t tell anyone about your Zwallet account password and the PIN."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
              className: "jsx-1633632738",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-1633632738" + " " + "px-0 px-sm-5",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-1633632738" + " " + "pt-4 text-center",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_pin_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
                    length: 6,
                    focus: true,
                    secret: true,
                    inputStyle: {
                      border: "1px solid rgba(169, 169, 169, 0.6)",
                      borderRadius: "10px",
                      width: "10%",
                      minWidth: "30px"
                    },
                    inputFocusStyle: {
                      borderColor: " #6379f4"
                    },
                    type: "numeric",
                    onChange: handleChangePinValue
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-1633632738" + " " + "pt-5",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    type: "submit",
                    onClick: onSubmitPin,
                    disabled: statePin.length < 6,
                    className: "jsx-1633632738" + " " + "btn btn-block btn-blue radius-12",
                    children: "Confirm"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, this) : stateProcess === "loading" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-1633632738" + " " + "container align-self-center text-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            role: "status",
            className: "jsx-1633632738" + " " + "spinner-grow text-blue",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "jsx-1633632738" + " " + "sr-only",
              children: "Loading..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            className: "jsx-1633632738" + " " + "font-weight-bold pt-2",
            children: "Please wait"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "jsx-1633632738" + " " + "text-muted",
            children: "We're verifying your PIN for safety reason"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-1633632738" + " " + "container align-self-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-1633632738" + " " + "px-5 mx-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "jsx-1633632738" + " " + "font-weight-bold display-4 text-success",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "jsx-1633632738" + " " + "fas fa-check-circle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: "jsx-1633632738" + " " + "font-weight-bold pt-3",
              children: "Your PIN Was Successfully Created"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "jsx-1633632738" + " " + "text-muted pt-3",
              children: "Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1633632738",
      children: ".btn-blue.jsx-1633632738{background-color:#6379f4;color:white;}.btn-blue.jsx-1633632738:hover{background-color:#5265cf;color:white;}.btn-blue.jsx-1633632738:disabled{background-color:#dadada;color:#88888f;}.btn-blue.jsx-1633632738:disabled.jsx-1633632738:hover{background-color:#dadada;color:#88888f;}.bg-accent.jsx-1633632738{background-image:url(\"/assets/Vector1.svg\");background-repeat:no-repeat;background-size:cover;background-position-y:50px;}input.jsx-1633632738:focus{border-color:blue !important;box-shadow:none !important;outline:0 none !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxUdXRvcmlhbCBXZWJcXFdlZWsgMTBcXFp3YWxsZXQtRnJvbnRlbmRcXHBhZ2VzXFxhdXRoXFxwaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0pTLEFBR3NDLEFBSUEsQUFJQSxBQUlBLEFBSW1CLEFBTWYseUJBckJqQixBQUlBLEFBSUUsQUFJQSxJQVVhLFFBckI3QixBQUlBLEVBSUEsQUFJQSxLQUc4QixZQU9GLGdCQU5KLFVBT3hCLFlBTjZCLDJCQUM3QiIsImZpbGUiOiJEOlxcVHV0b3JpYWwgV2ViXFxXZWVrIDEwXFxad2FsbGV0LUZyb250ZW5kXFxwYWdlc1xcYXV0aFxccGluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQgUGluSW5wdXQgZnJvbSBcInJlYWN0LXBpbi1pbnB1dFwiO1xyXG5cclxuZnVuY3Rpb24gcGluKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtzdGF0ZVBpbiwgc2V0U3RhdGVQaW5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0YXRlUHJvY2Vzcywgc2V0U3RhdGVQcm9jZXNzXSA9IHVzZVN0YXRlKFwiaW5wdXRcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVBpblZhbHVlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRTdGF0ZVBpbih2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRQaW4gPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIik7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICBjb25zdCBkYXRhUGluID0geyBwaW46IHN0YXRlUGluIH07XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhUGluKTtcclxuICAgIGNvbnN0IFVSTEFQSSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9BUElfV0lUSF9TTEFTSDtcclxuICAgIHNldFN0YXRlUHJvY2VzcyhcImxvYWRpbmdcIik7XHJcbiAgICBheGlvc1xyXG4gICAgICAucGF0Y2goYCR7VVJMQVBJfXVzZXIvJHtpZH1gLCBkYXRhUGluLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiBcIlN1Y2Nlc3MhXCIsXHJcbiAgICAgICAgICB0ZXh0OiByZXMuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiM2Mzc5ZjQ7XCIsXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBzZXRTdGF0ZVByb2Nlc3MoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgc2V0U3RhdGVQcm9jZXNzKFwiaW5wdXRcIik7XHJcbiAgICAgICAgc2V0U3RhdGVQaW4oXCJcIik7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiBcIkVycm9yIVwiLFxyXG4gICAgICAgICAgdGV4dDogZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiI2E0YTdiNFwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWluLXZoLTEwMCBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNyBiZy1ibHVlIGJnLWFjY2VudCBvdmVyZmxvdy1hdXRvIGQtbm9uZSBkLWxnLWZsZXggcHgtNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC13aGl0ZVwiPlpXYWxsZXQ8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjQwMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvcGhvbmUuc3ZnXCIpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgQXBwIHRoYXQgQ292ZXJpbmcgQmFua2luZyBOZWVkcy5cclxuICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwci01XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgWndhbGxldCBpcyBhbiBhcHBsaWNhdGlvbiB0aGF0IGZvY3Vzc2luZyBpbiBiYW5raW5nIG5lZWRzIGZvclxyXG4gICAgICAgICAgICAgICAgYWxsIHVzZXJzIGluIHRoZSB3b3JsZC4gQWx3YXlzIHVwZGF0ZWQgYW5kIGFsd2F5cyBmb2xsb3dpbmdcclxuICAgICAgICAgICAgICAgIHdvcmxkIHRyZW5kcy4gNTAwMCsgdXNlcnMgcmVnaXN0ZXJlZCBpblp3YWxsZXQgZXZlcnlkYXkgd2l0aFxyXG4gICAgICAgICAgICAgICAgd29ybGR3aWRlIHVzZXJzIGNvdmVyYWdlLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBvdmVyZmxvdy1hdXRvIGQtZmxleFwiPlxyXG4gICAgICAgICAge3N0YXRlUHJvY2VzcyA9PT0gXCJpbnB1dFwiID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgU2VjdXJlIFlvdXIgQWNjb3VudCwgWW91ciBXYWxsZXQsIGFuZCBZb3VyIERhdGEgV2l0aCA2IERpZ2l0c1xyXG4gICAgICAgICAgICAgICAgICBQSU4gVGhhdCBZb3UgQ3JlYXRlZCBZb3Vyc2VsZi5cclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIENyZWF0ZSA2IGRpZ2l0cyBwaW4gdG8gc2VjdXJlIGFsbCB5b3VyIG1vbmV5IGFuZCB5b3VyIGRhdGEgaW5cclxuICAgICAgICAgICAgICAgICAgWndhbGxldCBhcHAuIEtlZXAgaXQgc2VjcmV0IGFuZCBkb27igJl0IHRlbGwgYW55b25lIGFib3V0IHlvdXJcclxuICAgICAgICAgICAgICAgICAgWndhbGxldCBhY2NvdW50IHBhc3N3b3JkIGFuZCB0aGUgUElOLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMCBweC1zbS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UGluSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoPXs2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNyZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRTdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgxNjksIDE2OSwgMTY5LCAwLjYpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Rm9jdXNTdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiAjNjM3OWY0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1lcmljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVBpblZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4tYmx1ZSByYWRpdXMtMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXRQaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdGF0ZVBpbi5sZW5ndGggPCA2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IHN0YXRlUHJvY2VzcyA9PT0gXCJsb2FkaW5nXCIgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGFsaWduLXNlbGYtY2VudGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWdyb3cgdGV4dC1ibHVlXCIgcm9sZT1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgcHQtMlwiPlBsZWFzZSB3YWl0PC9oND5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICBXZSdyZSB2ZXJpZnlpbmcgeW91ciBQSU4gZm9yIHNhZmV0eSByZWFzb25cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgbXgtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgZGlzcGxheS00IHRleHQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIHB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgWW91ciBQSU4gV2FzIFN1Y2Nlc3NmdWxseSBDcmVhdGVkXHJcbiAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIFlvdXIgUElOIHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZCBhbmQgeW91IGNhbiBub3cgYWNjZXNzIGFsbFxyXG4gICAgICAgICAgICAgICAgICB0aGUgZmVhdHVyZXMgaW4gWndhbGxldC4gTG9naW4gdG8geW91ciBuZXcgYWNjb3VudCBhbmQgc3RhcnRcclxuICAgICAgICAgICAgICAgICAgZXhwbG9yaW5nIVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuYnRuLWJsdWUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM3OWY0O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuLWJsdWU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI2NWNmO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuLWJsdWU6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xyXG4gICAgICAgICAgICBjb2xvcjogIzg4ODg4ZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tYmx1ZTpkaXNhYmxlZDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODg4ODhmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJnLWFjY2VudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvVmVjdG9yMS5zdmdcIik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0OmZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgb3V0bGluZTogMCBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBpbjtcclxuIl19 */\n/*@ sourceURL=D:\\\\Tutorial Web\\\\Week 10\\\\Zwallet-Frontend\\\\pages\\\\auth\\\\pin.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (pin);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-pin-input":
/*!**********************************!*\
  !*** external "react-pin-input" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-pin-input");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9waG9uZS5zdmciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXV0aC9waW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcGluLWlucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3ZWV0YWxlcnQyXCIiXSwibmFtZXMiOlsicGluIiwicm91dGVyIiwidXNlUm91dGVyIiwic3RhdGVQaW4iLCJzZXRTdGF0ZVBpbiIsInVzZVN0YXRlIiwic3RhdGVQcm9jZXNzIiwic2V0U3RhdGVQcm9jZXNzIiwiaGFuZGxlQ2hhbmdlUGluVmFsdWUiLCJ2YWx1ZSIsIm9uU3VibWl0UGluIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRva2VuIiwiY29uc29sZSIsImxvZyIsImRhdGFQaW4iLCJVUkxBUEkiLCJwcm9jZXNzIiwiYXhpb3MiLCJwYXRjaCIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwidGV4dCIsImRhdGEiLCJtZXNzYWdlIiwiaWNvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY29uZmlybUJ1dHRvbkNvbG9yIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJyZXNwb25zZSIsImhlaWdodCIsInJlcXVpcmUiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJ3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bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXV0aC9waW4uanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGhvbmUtYzZkNTgyOTdiNmRlMWZkZTI4MmQ4MGZhMzNlNDk3NTAuc3ZnXCI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQgUGluSW5wdXQgZnJvbSBcInJlYWN0LXBpbi1pbnB1dFwiO1xyXG5cclxuZnVuY3Rpb24gcGluKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtzdGF0ZVBpbiwgc2V0U3RhdGVQaW5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0YXRlUHJvY2Vzcywgc2V0U3RhdGVQcm9jZXNzXSA9IHVzZVN0YXRlKFwiaW5wdXRcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVBpblZhbHVlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRTdGF0ZVBpbih2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRQaW4gPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIik7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICBjb25zdCBkYXRhUGluID0geyBwaW46IHN0YXRlUGluIH07XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhUGluKTtcclxuICAgIGNvbnN0IFVSTEFQSSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9BUElfV0lUSF9TTEFTSDtcclxuICAgIHNldFN0YXRlUHJvY2VzcyhcImxvYWRpbmdcIik7XHJcbiAgICBheGlvc1xyXG4gICAgICAucGF0Y2goYCR7VVJMQVBJfXVzZXIvJHtpZH1gLCBkYXRhUGluLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiBcIlN1Y2Nlc3MhXCIsXHJcbiAgICAgICAgICB0ZXh0OiByZXMuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiM2Mzc5ZjQ7XCIsXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBzZXRTdGF0ZVByb2Nlc3MoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgc2V0U3RhdGVQcm9jZXNzKFwiaW5wdXRcIik7XHJcbiAgICAgICAgc2V0U3RhdGVQaW4oXCJcIik7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiBcIkVycm9yIVwiLFxyXG4gICAgICAgICAgdGV4dDogZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiI2E0YTdiNFwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWluLXZoLTEwMCBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNyBiZy1ibHVlIGJnLWFjY2VudCBvdmVyZmxvdy1hdXRvIGQtbm9uZSBkLWxnLWZsZXggcHgtNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC13aGl0ZVwiPlpXYWxsZXQ8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjQwMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvcGhvbmUuc3ZnXCIpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgQXBwIHRoYXQgQ292ZXJpbmcgQmFua2luZyBOZWVkcy5cclxuICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwci01XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgWndhbGxldCBpcyBhbiBhcHBsaWNhdGlvbiB0aGF0IGZvY3Vzc2luZyBpbiBiYW5raW5nIG5lZWRzIGZvclxyXG4gICAgICAgICAgICAgICAgYWxsIHVzZXJzIGluIHRoZSB3b3JsZC4gQWx3YXlzIHVwZGF0ZWQgYW5kIGFsd2F5cyBmb2xsb3dpbmdcclxuICAgICAgICAgICAgICAgIHdvcmxkIHRyZW5kcy4gNTAwMCsgdXNlcnMgcmVnaXN0ZXJlZCBpblp3YWxsZXQgZXZlcnlkYXkgd2l0aFxyXG4gICAgICAgICAgICAgICAgd29ybGR3aWRlIHVzZXJzIGNvdmVyYWdlLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBvdmVyZmxvdy1hdXRvIGQtZmxleFwiPlxyXG4gICAgICAgICAge3N0YXRlUHJvY2VzcyA9PT0gXCJpbnB1dFwiID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgU2VjdXJlIFlvdXIgQWNjb3VudCwgWW91ciBXYWxsZXQsIGFuZCBZb3VyIERhdGEgV2l0aCA2IERpZ2l0c1xyXG4gICAgICAgICAgICAgICAgICBQSU4gVGhhdCBZb3UgQ3JlYXRlZCBZb3Vyc2VsZi5cclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIENyZWF0ZSA2IGRpZ2l0cyBwaW4gdG8gc2VjdXJlIGFsbCB5b3VyIG1vbmV5IGFuZCB5b3VyIGRhdGEgaW5cclxuICAgICAgICAgICAgICAgICAgWndhbGxldCBhcHAuIEtlZXAgaXQgc2VjcmV0IGFuZCBkb27igJl0IHRlbGwgYW55b25lIGFib3V0IHlvdXJcclxuICAgICAgICAgICAgICAgICAgWndhbGxldCBhY2NvdW50IHBhc3N3b3JkIGFuZCB0aGUgUElOLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMCBweC1zbS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UGluSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoPXs2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNyZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRTdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgxNjksIDE2OSwgMTY5LCAwLjYpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Rm9jdXNTdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiAjNjM3OWY0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1lcmljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVBpblZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4tYmx1ZSByYWRpdXMtMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXRQaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdGF0ZVBpbi5sZW5ndGggPCA2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IHN0YXRlUHJvY2VzcyA9PT0gXCJsb2FkaW5nXCIgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGFsaWduLXNlbGYtY2VudGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWdyb3cgdGV4dC1ibHVlXCIgcm9sZT1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgcHQtMlwiPlBsZWFzZSB3YWl0PC9oND5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICBXZSdyZSB2ZXJpZnlpbmcgeW91ciBQSU4gZm9yIHNhZmV0eSByZWFzb25cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgbXgtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgZGlzcGxheS00IHRleHQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIHB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgWW91ciBQSU4gV2FzIFN1Y2Nlc3NmdWxseSBDcmVhdGVkXHJcbiAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIFlvdXIgUElOIHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZCBhbmQgeW91IGNhbiBub3cgYWNjZXNzIGFsbFxyXG4gICAgICAgICAgICAgICAgICB0aGUgZmVhdHVyZXMgaW4gWndhbGxldC4gTG9naW4gdG8geW91ciBuZXcgYWNjb3VudCBhbmQgc3RhcnRcclxuICAgICAgICAgICAgICAgICAgZXhwbG9yaW5nIVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuYnRuLWJsdWUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM3OWY0O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuLWJsdWU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI2NWNmO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuLWJsdWU6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xyXG4gICAgICAgICAgICBjb2xvcjogIzg4ODg4ZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tYmx1ZTpkaXNhYmxlZDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODg4ODhmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJnLWFjY2VudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvVmVjdG9yMS5zdmdcIik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0OmZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgb3V0bGluZTogMCBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBpbjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcGluLWlucHV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3ZWV0YWxlcnQyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=