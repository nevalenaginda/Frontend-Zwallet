webpackHotUpdate_N_E("pages/transfer/detail",{

/***/ "./components/module/DetailTransfer.js":
/*!*********************************************!*\
  !*** ./components/module/DetailTransfer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/curencyToIDR */ "./helpers/curencyToIDR.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-pin-input */ "./node_modules/react-pin-input/dist/bundle.js");
/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_pin_input__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _configs_redux_actions_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../configs/redux/actions/user */ "./configs/redux/actions/user.js");
/* harmony import */ var _configs_redux_actions_transfer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../configs/redux/actions/transfer */ "./configs/redux/actions/transfer.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");




var _jsxFileName = "D:\\Tutorial Web\\Week 10\\Zwallet-Frontend\\components\\module\\DetailTransfer.js",
    _s = $RefreshSig$();









 //modal





function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  var top = 50;
  var left = 50;
  return {
    top: "".concat(top, "%"),
    left: "".concat(left, "%"),
    transform: "translate(-".concat(top, "%, -").concat(left, "%)")
  };
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["makeStyles"])(function (theme) {
  return {
    paper: {
      position: "absolute",
      width: 400,
      heigth: 500,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  };
}); // modal

function DetailTransfer() {
  _s();

  var _jsxDEV2;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.transfer;
  }),
      transfer = _useSelector.transfer,
      dataTarget = _useSelector.dataTarget;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user;
  }),
      user = _useSelector2.user;

  var urlImg = "http://localhost:5001";

  var nowTime = function nowTime() {
    var dateTime = moment__WEBPACK_IMPORTED_MODULE_8___default()().format("MMMM DD, YYYY - HH.mm");
    return dateTime;
  }; // modal


  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(getModalStyle),
      _React$useState2 = Object(D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 1),
      modalStyle = _React$useState2[0];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState4 = Object(D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      open = _React$useState4[0],
      setOpen = _React$useState4[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      loginPin = _useState[0],
      setLoginPin = _useState[1]; // const handleOpen = (data) => {
  //   setOpen(true);
  // };


  var handleClose = function handleClose() {
    setOpen(false);
  };

  var handleContinue = function handleContinue() {
    setOpen(true);
  };

  var handleLoginPin = function handleLoginPin(e) {
    e.preventDefault();
    dispatch(Object(_configs_redux_actions_user__WEBPACK_IMPORTED_MODULE_10__["checkPin"])({
      pin: loginPin
    }, user.id)).then(function (res) {
      setOpen(false);
      dispatch(Object(_configs_redux_actions_transfer__WEBPACK_IMPORTED_MODULE_11__["transferProcess"])(transfer)).then(function (res) {
        dispatch({
          type: "TRANSFER_SUCCESS"
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
          title: "Success!",
          text: "Transfer Success",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        router.push({
          pathname: "/transfer/history"
        });
      })["catch"](function (err) {
        dispatch({
          type: "TRANSFER_FAILURE",
          payload: err.response.data.message
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
          title: "Error!",
          text: "Transfer Failed",
          icon: "error",
          showConfirmButton: false,
          timer: 1500
        });
        router.push({
          pathname: "/transfer/history"
        });
      });
    })["catch"](function (err) {
      setOpen(false);
      sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
        title: "Error!",
        text: "Login pin number failed. Please enter correct pin number.",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#6379f4;"
      });
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (!transfer.amount && !dataTarget.id) {
      router.push("/dashboard");
    } else {
      dispatch({
        type: "INSERT_DATA_TRANSFER",
        payload: transfer.dateTime = nowTime()
      });
    }
  }, [dispatch]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "jsx-168628897" + " " + "",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "jsx-168628897" + " " + "container d-flex d-lg-none py-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        onClick: function onClick() {
          return router.back();
        },
        className: "jsx-168628897" + " " + "text-dark mr-3",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: "jsx-168628897" + " " + "m-0 font-weight-bold align-self-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
            "class": "bi bi-arrow-left",
            className: "jsx-168628897"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
        className: "jsx-168628897" + " " + "m-0 align-self-center font-weight-bold",
        children: "Confirmation"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "jsx-168628897" + " " + "card border-0 card-lg shadow py-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "jsx-168628897" + " " + "card-body bodycard",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
          className: "jsx-168628897" + " " + "font-weight-bold",
          children: "Transfer To"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "jsx-168628897" + " " + "card border-0 shadow mb-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "jsx-168628897" + " " + "card-body d-flex",
            children: [dataTarget.image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: "".concat(urlImg, "/images/").concat(dataTarget.image),
              alt: "",
              className: "jsx-168628897" + " " + "img-people mr-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 17
            }, this), dataTarget.name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "jsx-168628897" + " " + "align-self-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
                className: "jsx-168628897" + " " + "font-weight-bold",
                children: dataTarget.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "jsx-168628897" + " " + "text-muted m-0",
                children: dataTarget.phone
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
          className: "jsx-168628897" + " " + "font-weight-bold",
          children: "Details"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, this), transfer.amount && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "jsx-168628897" + " " + "card card-body border-0 shadow mb-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "jsx-168628897",
            children: "Amount"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
            className: "jsx-168628897" + " " + "m-0 font-weight-bold",
            children: ["Rp ", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_7__["default"])(transfer.amount)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 13
        }, this), transfer.balanceLeft && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "jsx-168628897" + " " + "card card-body border-0 mb-3 shadow",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "jsx-168628897",
            children: "Balance Left"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
            className: "jsx-168628897" + " " + "m-0 font-weight-bold",
            children: ["Rp ", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_7__["default"])(transfer.balanceLeft)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 13
        }, this), transfer.dateTime && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "jsx-168628897" + " " + "card card-body mb-3 border-0 shadow",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "jsx-168628897",
            children: "Date & Time"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "jsx-168628897" + " " + "input-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
              className: "jsx-168628897" + " " + "m-0 font-weight-bold",
              children: transfer.dateTime
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 13
        }, this), transfer.notes && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "jsx-168628897" + " " + "card card-body mb-5 border-0 shadow",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "jsx-168628897",
            children: "Notes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "jsx-168628897" + " " + "input-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
              className: "jsx-168628897" + " " + "m-0 font-weight-bold",
              children: transfer.notes
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "jsx-168628897" + " " + "d-flex justify-content-end",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
            onClick: handleContinue,
            className: "jsx-168628897" + " " + "btn btn-blue btn-lg radius-12 d-none d-lg-block",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
              className: "jsx-168628897" + " " + "p-3 font-weight-bold",
              children: " Continue "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
            onClick: handleContinue,
            className: "jsx-168628897" + " " + "btn btn-blue btn-lg radius-12 btn-block d-lg-none d-block",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
              className: "jsx-168628897" + " " + "p-3 font-weight-bold",
              children: " Continue "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_14__["default"], {
        open: open,
        onClose: handleClose,
        "aria-labelledby": "simple-modal-title",
        "aria-describedby": "simple-modal-description",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          style: modalStyle,
          className: "jsx-168628897" + " " + (classes.paper || ""),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "jsx-168628897",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "jsx-168628897" + " " + "p-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "jsx-168628897" + " " + "d-flex justify-content-between",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
                  className: "jsx-168628897" + " " + "m-0 font-weight-bold",
                  children: "Enter PIN to Transfer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                className: "jsx-168628897" + " " + "my-4 text-muted",
                children: ["Enter your 6 digits PIN for confirmation to", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {
                  className: "jsx-168628897"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 19
                }, this), "continue transferring money."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
                className: "jsx-168628897",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "jsx-168628897" + " " + "w-100 d-flex justify-content-center mb-3",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    className: "jsx-168628897" + " " + "row text-center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_pin_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
                      length: 6,
                      focus: true,
                      secret: true,
                      initialValue: "",
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
                      onChange: function onChange(value) {
                        return setLoginPin(value);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 242,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "jsx-168628897" + " " + "d-flex justify-content-end",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", (_jsxDEV2 = {
                    type: "submit",
                    onClick: handleLoginPin,
                    disabled: loginPin.length < 6
                  }, Object(D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "type", "submit"), Object(D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "className", "jsx-168628897" + " " + "btn btn-block btn-lg radius-12 btn-blue"), Object(D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "children", "Continue"), _jsxDEV2), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 262,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "168628897",
      children: "@media screen and (max-width:992px){.card-lg.jsx-168628897{box-shadow:none !important;}.card-lg.jsx-168628897 .bodycard.jsx-168628897{padding:0 !important;}}.btn-blue.jsx-168628897{background-color:#6379f4;color:white;}.btn-blue.jsx-168628897:hover{background-color:#5265cf;color:white;}.btn-blue.jsx-168628897:disabled{background-color:#dadada;color:#88888f;}.btn-blue.jsx-168628897:disabled.jsx-168628897:hover{background-color:#dadada;color:#88888f;}.img-people.jsx-168628897{width:100px;height:100px;border-radius:12px;object-fit:cover;}div.card.jsx-168628897{border-radius:15px;}.bg-gray.jsx-168628897{background-color:#ebecec;}.bg-gray.jsx-168628897:focus{background-color:#ebecec;}input.jsx-168628897:focus{box-shadow:none;}.btn-blue.jsx-168628897{background-color:#6379f4;color:white;}.btn-blue.jsx-168628897:hover{background-color:#5365c9;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxUdXRvcmlhbCBXZWJcXFdlZWsgMTBcXFp3YWxsZXQtRnJvbnRlbmRcXGNvbXBvbmVudHNcXG1vZHVsZVxcRGV0YWlsVHJhbnNmZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc1JTLEFBSTBDLEFBR04sQUFJRSxBQUlBLEFBSUEsQUFJQSxBQUliLEFBTU8sQUFHTSxBQUdBLEFBR1QsQUFHUyxBQUtBLFlBdEJaLElBZWYsR0FUQSxFQTFCRSxJQUlZLEFBSUEsQUFJRSxBQUlBLEFBS0ssQUFRckIsQUFHQSxBQU1jLEFBS0EsRUE5Q1osVUFRRixBQUlBLEFBOEJBLEFBS0EsRUEvQkEsQUFJQSxLQUttQixpQkFDbkIiLCJmaWxlIjoiRDpcXFR1dG9yaWFsIFdlYlxcV2VlayAxMFxcWndhbGxldC1Gcm9udGVuZFxcY29tcG9uZW50c1xcbW9kdWxlXFxEZXRhaWxUcmFuc2Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHRvUnVwaWFoIGZyb20gXCIuLi8uLi9oZWxwZXJzL2N1cmVuY3lUb0lEUlwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IFBpbklucHV0IGZyb20gXCJyZWFjdC1waW4taW5wdXRcIjtcclxuaW1wb3J0IHsgY2hlY2tQaW4gfSBmcm9tIFwiLi4vLi4vY29uZmlncy9yZWR1eC9hY3Rpb25zL3VzZXJcIjtcclxuaW1wb3J0IHsgdHJhbnNmZXJQcm9jZXNzIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ3MvcmVkdXgvYWN0aW9ucy90cmFuc2ZlclwiO1xyXG5cclxuLy9tb2RhbFxyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbFwiO1xyXG5cclxuZnVuY3Rpb24gcmFuZCgpIHtcclxuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjApIC0gMTA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1vZGFsU3R5bGUoKSB7XHJcbiAgY29uc3QgdG9wID0gNTA7XHJcbiAgY29uc3QgbGVmdCA9IDUwO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdG9wOiBgJHt0b3B9JWAsXHJcbiAgICBsZWZ0OiBgJHtsZWZ0fSVgLFxyXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC0ke3RvcH0lLCAtJHtsZWZ0fSUpYCxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBwYXBlcjoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHdpZHRoOiA0MDAsXHJcbiAgICBoZWlndGg6IDUwMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjMDAwXCIsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG4gIH0sXHJcbn0pKTtcclxuLy8gbW9kYWxcclxuXHJcbmZ1bmN0aW9uIERldGFpbFRyYW5zZmVyKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IHRyYW5zZmVyLCBkYXRhVGFyZ2V0IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYW5zZmVyKTtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgdXJsSW1nID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMX0lNQUdFX05PX1NMQVNIO1xyXG5cclxuICBjb25zdCBub3dUaW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZVRpbWUgPSBNb21lbnQoKS5mb3JtYXQoXCJNTU1NIERELCBZWVlZIC0gSEgubW1cIik7XHJcbiAgICByZXR1cm4gZGF0ZVRpbWU7XHJcbiAgfTtcclxuXHJcbiAgLy8gbW9kYWxcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW21vZGFsU3R5bGVdID0gUmVhY3QudXNlU3RhdGUoZ2V0TW9kYWxTdHlsZSk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2dpblBpbiwgc2V0TG9naW5QaW5dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZU9wZW4gPSAoZGF0YSkgPT4ge1xyXG4gIC8vICAgc2V0T3Blbih0cnVlKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbnRpbnVlID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpblBpbiA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkaXNwYXRjaChjaGVja1Bpbih7IHBpbjogbG9naW5QaW4gfSwgdXNlci5pZCkpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2godHJhbnNmZXJQcm9jZXNzKHRyYW5zZmVyKSlcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlRSQU5TRkVSX1NVQ0NFU1NcIiB9KTtcclxuICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICB0aXRsZTogXCJTdWNjZXNzIVwiLFxyXG4gICAgICAgICAgICAgIHRleHQ6IFwiVHJhbnNmZXIgU3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICBwYXRobmFtZTogXCIvdHJhbnNmZXIvaGlzdG9yeVwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJUUkFOU0ZFUl9GQUlMVVJFXCIsXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDogZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3IhXCIsXHJcbiAgICAgICAgICAgICAgdGV4dDogXCJUcmFuc2ZlciBGYWlsZWRcIixcclxuICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi90cmFuc2Zlci9oaXN0b3J5XCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiBcIkVycm9yIVwiLFxyXG4gICAgICAgICAgdGV4dDogXCJMb2dpbiBwaW4gbnVtYmVyIGZhaWxlZC4gUGxlYXNlIGVudGVyIGNvcnJlY3QgcGluIG51bWJlci5cIixcclxuICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzYzNzlmNDtcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghdHJhbnNmZXIuYW1vdW50ICYmICFkYXRhVGFyZ2V0LmlkKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBcIklOU0VSVF9EQVRBX1RSQU5TRkVSXCIsXHJcbiAgICAgICAgcGF5bG9hZDogKHRyYW5zZmVyLmRhdGVUaW1lID0gbm93VGltZSgpKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXggZC1sZy1ub25lIHB5LTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFyayBtci0zXCIgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtLTAgZm9udC13ZWlnaHQtYm9sZCBhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLWFycm93LWxlZnRcIj48L2k+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm0tMCBhbGlnbi1zZWxmLWNlbnRlciBmb250LXdlaWdodC1ib2xkXCI+Q29uZmlybWF0aW9uPC9oNT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBib3JkZXItMCBjYXJkLWxnIHNoYWRvdyBweS0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYm9keWNhcmRcIj5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+VHJhbnNmZXIgVG88L2g1PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvcmRlci0wIHNoYWRvdyBtYi00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgIHtkYXRhVGFyZ2V0LmltYWdlICYmIChcclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLXBlb3BsZSBtci00XCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2RhdGFUYXJnZXQuaW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7ZGF0YVRhcmdldC5uYW1lICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj57ZGF0YVRhcmdldC5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+e2RhdGFUYXJnZXQucGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+RGV0YWlsczwvaDU+XHJcbiAgICAgICAgICB7LyogPCEtLSBBbW91bnQgLS0+ICovfVxyXG4gICAgICAgICAge3RyYW5zZmVyLmFtb3VudCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHkgYm9yZGVyLTAgc2hhZG93IG1iLTNcIj5cclxuICAgICAgICAgICAgICA8cD5BbW91bnQ8L3A+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm0tMCBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICBScCB7dG9SdXBpYWgodHJhbnNmZXIuYW1vdW50KX1cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7LyogPCEtLSBFbmQgT2YgQW1vdW50IC0tPiAqL31cclxuICAgICAgICAgIHsvKiA8IS0tIEJhbGFuY2UgbGVmdCAtLT4gKi99XHJcbiAgICAgICAgICB7dHJhbnNmZXIuYmFsYW5jZUxlZnQgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IGJvcmRlci0wIG1iLTMgc2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgPHA+QmFsYW5jZSBMZWZ0PC9wPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtLTAgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgUnAge3RvUnVwaWFoKHRyYW5zZmVyLmJhbGFuY2VMZWZ0KX1cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7LyogPCEtLSBFbmQgT2YgQmFsYW5jZSBMZWZ0IC0tPiAqL31cclxuICAgICAgICAgIHsvKiA8IS0tIERhdGUgLS0+ICovfVxyXG4gICAgICAgICAge3RyYW5zZmVyLmRhdGVUaW1lICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keSBtYi0zIGJvcmRlci0wIHNoYWRvd1wiPlxyXG4gICAgICAgICAgICAgIDxwPkRhdGUgJiBUaW1lPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtLTAgZm9udC13ZWlnaHQtYm9sZFwiPnt0cmFuc2Zlci5kYXRlVGltZX08L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7LyogPCEtLSBFbmQgT2YgRGF0ZSAtLT4gKi99XHJcbiAgICAgICAgICB7LyogPCEtLSBOb3RlIC0tPiAqL31cclxuICAgICAgICAgIHt0cmFuc2Zlci5ub3RlcyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHkgbWItNSBib3JkZXItMCBzaGFkb3dcIj5cclxuICAgICAgICAgICAgICA8cD5Ob3RlczwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibS0wIGZvbnQtd2VpZ2h0LWJvbGRcIj57dHJhbnNmZXIubm90ZXN9PC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgey8qIDwhLS0gRW5kIE9mIE5vdGUgLS0+ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlIGJ0bi1sZyByYWRpdXMtMTIgZC1ub25lIGQtbGctYmxvY2tcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvbnRpbnVlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInAtMyBmb250LXdlaWdodC1ib2xkXCI+IENvbnRpbnVlIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlIGJ0bi1sZyByYWRpdXMtMTIgYnRuLWJsb2NrIGQtbGctbm9uZSBkLWJsb2NrXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb250aW51ZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJwLTMgZm9udC13ZWlnaHQtYm9sZFwiPiBDb250aW51ZSA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzaW1wbGUtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e21vZGFsU3R5bGV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtLTAgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVudGVyIFBJTiB0byBUcmFuc2ZlclxyXG4gICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS00IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgRW50ZXIgeW91ciA2IGRpZ2l0cyBQSU4gZm9yIGNvbmZpcm1hdGlvbiB0b1xyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgY29udGludWUgdHJhbnNmZXJyaW5nIG1vbmV5LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFBpbklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aD17Nn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjcmV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0U3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHJnYmEoMTY5LCAxNjksIDE2OSwgMC42KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEZvY3VzU3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIgIzYzNzlmNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtZXJpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldExvZ2luUGluKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIGJ0bi1sZyByYWRpdXMtMTIgYnRuLWJsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9naW5QaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9naW5QaW4ubGVuZ3RoIDwgNn1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAuY2FyZC1sZyB7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jYXJkLWxnIC5ib2R5Y2FyZCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuLWJsdWUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM3OWY0O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuLWJsdWU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI2NWNmO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuLWJsdWU6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xyXG4gICAgICAgICAgICBjb2xvcjogIzg4ODg4ZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tYmx1ZTpkaXNhYmxlZDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODg4ODhmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmltZy1wZW9wbGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGl2LmNhcmQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJnLWdyYXkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlY2VjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJnLWdyYXk6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlY2VjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1ibHVlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYzNzlmNDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idG4tYmx1ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzY1Yzk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsVHJhbnNmZXI7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Tutorial Web\\\\Week 10\\\\Zwallet-Frontend\\\\components\\\\module\\\\DetailTransfer.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 5
  }, this);
}

_s(DetailTransfer, "aFw/I6QrFDXEmxmkPTxcPU5rKcg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], useStyles];
});

_c = DetailTransfer;
/* harmony default export */ __webpack_exports__["default"] = (DetailTransfer);

var _c;

$RefreshReg$(_c, "DetailTransfer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2R1bGUvRGV0YWlsVHJhbnNmZXIuanMiXSwibmFtZXMiOlsicmFuZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImdldE1vZGFsU3R5bGUiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ3RoIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwicGFkZGluZyIsInNwYWNpbmciLCJEZXRhaWxUcmFuc2ZlciIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidHJhbnNmZXIiLCJkYXRhVGFyZ2V0IiwidXNlciIsInVybEltZyIsInByb2Nlc3MiLCJub3dUaW1lIiwiZGF0ZVRpbWUiLCJNb21lbnQiLCJmb3JtYXQiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vZGFsU3R5bGUiLCJvcGVuIiwic2V0T3BlbiIsImxvZ2luUGluIiwic2V0TG9naW5QaW4iLCJoYW5kbGVDbG9zZSIsImhhbmRsZUNvbnRpbnVlIiwiaGFuZGxlTG9naW5QaW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJjaGVja1BpbiIsInBpbiIsImlkIiwidGhlbiIsInJlcyIsInRyYW5zZmVyUHJvY2VzcyIsInR5cGUiLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwidGV4dCIsImljb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwicHVzaCIsInBhdGhuYW1lIiwiZXJyIiwicGF5bG9hZCIsInJlc3BvbnNlIiwiZGF0YSIsIm1lc3NhZ2UiLCJjb25maXJtQnV0dG9uVGV4dCIsImNvbmZpcm1CdXR0b25Db2xvciIsInVzZUVmZmVjdCIsImFtb3VudCIsImJhY2siLCJpbWFnZSIsIm5hbWUiLCJwaG9uZSIsInRvUnVwaWFoIiwiYmFsYW5jZUxlZnQiLCJub3RlcyIsImJvcmRlclJhZGl1cyIsIm1pbldpZHRoIiwiYm9yZGVyQ29sb3IiLCJ2YWx1ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQ2QsU0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUEzQixJQUFpQyxFQUF4QztBQUNEOztBQUVELFNBQVNDLGFBQVQsR0FBeUI7QUFDdkIsTUFBTUMsR0FBRyxHQUFHLEVBQVo7QUFDQSxNQUFNQyxJQUFJLEdBQUcsRUFBYjtBQUVBLFNBQU87QUFDTEQsT0FBRyxZQUFLQSxHQUFMLE1BREU7QUFFTEMsUUFBSSxZQUFLQSxJQUFMLE1BRkM7QUFHTEMsYUFBUyx1QkFBZ0JGLEdBQWhCLGlCQUEwQkMsSUFBMUI7QUFISixHQUFQO0FBS0Q7O0FBRUQsSUFBTUUsU0FBUyxHQUFHQyw0RUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxTQUFLLEVBQUU7QUFDTEMsY0FBUSxFQUFFLFVBREw7QUFFTEMsV0FBSyxFQUFFLEdBRkY7QUFHTEMsWUFBTSxFQUFFLEdBSEg7QUFJTEMscUJBQWUsRUFBRUwsS0FBSyxDQUFDTSxPQUFOLENBQWNDLFVBQWQsQ0FBeUJOLEtBSnJDO0FBS0xPLFlBQU0sRUFBRSxnQkFMSDtBQU1MQyxlQUFTLEVBQUVULEtBQUssQ0FBQ1UsT0FBTixDQUFjLENBQWQsQ0FOTjtBQU9MQyxhQUFPLEVBQUVYLEtBQUssQ0FBQ1ksT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7QUFQSjtBQURnQyxHQUFaO0FBQUEsQ0FBRCxDQUE1QixDLENBV0E7O0FBRUEsU0FBU0MsY0FBVCxHQUEwQjtBQUFBOztBQUFBOztBQUN4QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGd0IscUJBR1NDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsUUFBakI7QUFBQSxHQUFELENBSHBCO0FBQUEsTUFHaEJBLFFBSGdCLGdCQUdoQkEsUUFIZ0I7QUFBQSxNQUdOQyxVQUhNLGdCQUdOQSxVQUhNOztBQUFBLHNCQUlQSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNHLElBQWpCO0FBQUEsR0FBRCxDQUpKO0FBQUEsTUFJaEJBLElBSmdCLGlCQUloQkEsSUFKZ0I7O0FBS3hCLE1BQU1DLE1BQU0sR0FBR0MsdUJBQWY7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixRQUFNQyxRQUFRLEdBQUdDLDZDQUFNLEdBQUdDLE1BQVQsQ0FBZ0IsdUJBQWhCLENBQWpCO0FBQ0EsV0FBT0YsUUFBUDtBQUNELEdBSEQsQ0FQd0IsQ0FZeEI7OztBQUNBLE1BQU1HLE9BQU8sR0FBRy9CLFNBQVMsRUFBekI7O0FBYndCLHdCQWNIZ0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlckMsYUFBZixDQWRHO0FBQUE7QUFBQSxNQWNqQnNDLFVBZGlCOztBQUFBLHlCQWVBRiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQWZBO0FBQUE7QUFBQSxNQWVqQkUsSUFmaUI7QUFBQSxNQWVYQyxPQWZXOztBQUFBLGtCQWdCUUgsc0RBQVEsQ0FBQyxFQUFELENBaEJoQjtBQUFBLE1BZ0JqQkksUUFoQmlCO0FBQUEsTUFnQlBDLFdBaEJPLGlCQWtCeEI7QUFDQTtBQUNBOzs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCSCxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxNQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0JKLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1LLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzVCQSxLQUFDLENBQUNDLGNBQUY7QUFDQXpCLFlBQVEsQ0FBQzBCLDZFQUFRLENBQUM7QUFBRUMsU0FBRyxFQUFFUjtBQUFQLEtBQUQsRUFBb0JiLElBQUksQ0FBQ3NCLEVBQXpCLENBQVQsQ0FBUixDQUNHQyxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JaLGFBQU8sQ0FBQyxLQUFELENBQVA7QUFFQWxCLGNBQVEsQ0FBQytCLHdGQUFlLENBQUMzQixRQUFELENBQWhCLENBQVIsQ0FDR3lCLElBREgsQ0FDUSxVQUFDQyxHQUFELEVBQVM7QUFDYjlCLGdCQUFRLENBQUM7QUFBRWdDLGNBQUksRUFBRTtBQUFSLFNBQUQsQ0FBUjtBQUNBQywyREFBSSxDQUFDQyxJQUFMLENBQVU7QUFDUkMsZUFBSyxFQUFFLFVBREM7QUFFUkMsY0FBSSxFQUFFLGtCQUZFO0FBR1JDLGNBQUksRUFBRSxTQUhFO0FBSVJDLDJCQUFpQixFQUFFLEtBSlg7QUFLUkMsZUFBSyxFQUFFO0FBTEMsU0FBVjtBQU9BekMsY0FBTSxDQUFDMEMsSUFBUCxDQUFZO0FBQ1ZDLGtCQUFRLEVBQUU7QUFEQSxTQUFaO0FBR0QsT0FiSCxXQWNTLFVBQUNDLEdBQUQsRUFBUztBQUNkMUMsZ0JBQVEsQ0FBQztBQUNQZ0MsY0FBSSxFQUFFLGtCQURDO0FBRVBXLGlCQUFPLEVBQUVELEdBQUcsQ0FBQ0UsUUFBSixDQUFhQyxJQUFiLENBQWtCQztBQUZwQixTQUFELENBQVI7QUFJQWIsMkRBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ1JDLGVBQUssRUFBRSxRQURDO0FBRVJDLGNBQUksRUFBRSxpQkFGRTtBQUdSQyxjQUFJLEVBQUUsT0FIRTtBQUlSQywyQkFBaUIsRUFBRSxLQUpYO0FBS1JDLGVBQUssRUFBRTtBQUxDLFNBQVY7QUFPQXpDLGNBQU0sQ0FBQzBDLElBQVAsQ0FBWTtBQUNWQyxrQkFBUSxFQUFFO0FBREEsU0FBWjtBQUdELE9BN0JIO0FBOEJELEtBbENILFdBbUNTLFVBQUNDLEdBQUQsRUFBUztBQUNkeEIsYUFBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBZSx5REFBSSxDQUFDQyxJQUFMLENBQVU7QUFDUkMsYUFBSyxFQUFFLFFBREM7QUFFUkMsWUFBSSxFQUFFLDJEQUZFO0FBR1JDLFlBQUksRUFBRSxPQUhFO0FBSVJVLHlCQUFpQixFQUFFLElBSlg7QUFLUkMsMEJBQWtCLEVBQUU7QUFMWixPQUFWO0FBT0QsS0E1Q0g7QUE2Q0QsR0EvQ0Q7O0FBaURBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUM3QyxRQUFRLENBQUM4QyxNQUFWLElBQW9CLENBQUM3QyxVQUFVLENBQUN1QixFQUFwQyxFQUF3QztBQUN0QzlCLFlBQU0sQ0FBQzBDLElBQVAsQ0FBWSxZQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0x4QyxjQUFRLENBQUM7QUFDUGdDLFlBQUksRUFBRSxzQkFEQztBQUVQVyxlQUFPLEVBQUd2QyxRQUFRLENBQUNNLFFBQVQsR0FBb0JELE9BQU87QUFGOUIsT0FBRCxDQUFSO0FBSUQ7QUFDRixHQVRRLEVBU04sQ0FBQ1QsUUFBRCxDQVRNLENBQVQ7QUFXQSxzQkFDRTtBQUFBLHVDQUFlLEVBQWY7QUFBQSw0QkFDRTtBQUFBLHlDQUFlLGlDQUFmO0FBQUEsOEJBQ0U7QUFBZ0MsZUFBTyxFQUFFO0FBQUEsaUJBQU1GLE1BQU0sQ0FBQ3FELElBQVAsRUFBTjtBQUFBLFNBQXpDO0FBQUEsMkNBQWUsZ0JBQWY7QUFBQSwrQkFDRTtBQUFBLDZDQUFnQix3Q0FBaEI7QUFBQSxpQ0FDRTtBQUFHLHFCQUFNLGtCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FO0FBQUEsMkNBQWMsd0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVNFO0FBQUEseUNBQWUsbUNBQWY7QUFBQSw4QkFDRTtBQUFBLDJDQUFlLG9CQUFmO0FBQUEsZ0NBQ0U7QUFBQSw2Q0FBYyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEsNkNBQWUsMkJBQWY7QUFBQSxpQ0FDRTtBQUFBLCtDQUFlLGtCQUFmO0FBQUEsdUJBQ0c5QyxVQUFVLENBQUMrQyxLQUFYLGlCQUNDO0FBRUUsaUJBQUcsWUFBSzdDLE1BQUwscUJBQXNCRixVQUFVLENBQUMrQyxLQUFqQyxDQUZMO0FBR0UsaUJBQUcsRUFBQyxFQUhOO0FBQUEsaURBQ1k7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLEVBUUcvQyxVQUFVLENBQUNnRCxJQUFYLGlCQUNDO0FBQUEsaURBQWUsbUJBQWY7QUFBQSxzQ0FDRTtBQUFBLG1EQUFjLGtCQUFkO0FBQUEsMEJBQWtDaEQsVUFBVSxDQUFDZ0Q7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQUEsbURBQWEsZ0JBQWI7QUFBQSwwQkFBK0JoRCxVQUFVLENBQUNpRDtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBbUJFO0FBQUEsNkNBQWMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJGLEVBcUJHbEQsUUFBUSxDQUFDOEMsTUFBVCxpQkFDQztBQUFBLDZDQUFlLHFDQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUEsK0NBQWMsc0JBQWQ7QUFBQSw4QkFDTUsscUVBQVEsQ0FBQ25ELFFBQVEsQ0FBQzhDLE1BQVYsQ0FEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRCSixFQStCRzlDLFFBQVEsQ0FBQ29ELFdBQVQsaUJBQ0M7QUFBQSw2Q0FBZSxxQ0FBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBLCtDQUFjLHNCQUFkO0FBQUEsOEJBQ01ELHFFQUFRLENBQUNuRCxRQUFRLENBQUNvRCxXQUFWLENBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQ0osRUF5Q0dwRCxRQUFRLENBQUNNLFFBQVQsaUJBQ0M7QUFBQSw2Q0FBZSxxQ0FBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBLCtDQUFlLGFBQWY7QUFBQSxtQ0FDRTtBQUFBLGlEQUFjLHNCQUFkO0FBQUEsd0JBQXNDTixRQUFRLENBQUNNO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkExQ0osRUFtREdOLFFBQVEsQ0FBQ3FELEtBQVQsaUJBQ0M7QUFBQSw2Q0FBZSxxQ0FBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBLCtDQUFlLGFBQWY7QUFBQSxtQ0FDRTtBQUFBLGlEQUFjLHNCQUFkO0FBQUEsd0JBQXNDckQsUUFBUSxDQUFDcUQ7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBESixlQTRERTtBQUFBLDZDQUFlLDRCQUFmO0FBQUEsa0NBQ0U7QUFFRSxtQkFBTyxFQUFFbkMsY0FGWDtBQUFBLCtDQUNZLGlEQURaO0FBQUEsbUNBSUU7QUFBQSxpREFBaUIsc0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU9FO0FBRUUsbUJBQU8sRUFBRUEsY0FGWDtBQUFBLCtDQUNZLDJEQURaO0FBQUEsbUNBSUU7QUFBQSxpREFBaUIsc0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBNURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBNEVFLHFFQUFDLGdFQUFEO0FBQ0UsWUFBSSxFQUFFTCxJQURSO0FBRUUsZUFBTyxFQUFFSSxXQUZYO0FBR0UsMkJBQWdCLG9CQUhsQjtBQUlFLDRCQUFpQiwwQkFKbkI7QUFBQSwrQkFNRTtBQUFLLGVBQUssRUFBRUwsVUFBWjtBQUFBLDhDQUFtQ0gsT0FBTyxDQUFDNUIsS0FBM0M7QUFBQSxpQ0FDRTtBQUFBO0FBQUEsbUNBQ0U7QUFBQSxpREFBZSxLQUFmO0FBQUEsc0NBQ0U7QUFBQSxtREFBZSxnQ0FBZjtBQUFBLHVDQUNFO0FBQUEscURBQWMsc0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBTUU7QUFBQSxtREFBYSxpQkFBYjtBQUFBLHVGQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORixlQVlFO0FBQUE7QUFBQSx3Q0FDRTtBQUFBLHFEQUFlLDBDQUFmO0FBQUEseUNBQ0U7QUFBQSx1REFBZSxpQkFBZjtBQUFBLDJDQUNFLHFFQUFDLHNEQUFEO0FBQ0UsNEJBQU0sRUFBRSxDQURWO0FBRUUsMkJBQUssTUFGUDtBQUdFLDRCQUFNLE1BSFI7QUFJRSxrQ0FBWSxFQUFDLEVBSmY7QUFLRSxnQ0FBVSxFQUFFO0FBQ1ZPLDhCQUFNLEVBQUUsb0NBREU7QUFFVmtFLG9DQUFZLEVBQUUsTUFGSjtBQUdWdkUsNkJBQUssRUFBRSxLQUhHO0FBSVZ3RSxnQ0FBUSxFQUFFO0FBSkEsdUJBTGQ7QUFXRSxxQ0FBZSxFQUFFO0FBQ2ZDLG1DQUFXLEVBQUU7QUFERSx1QkFYbkI7QUFjRSwwQkFBSSxFQUFDLFNBZFA7QUFlRSw4QkFBUSxFQUFFLGtCQUFDQyxLQUFEO0FBQUEsK0JBQVd6QyxXQUFXLENBQUN5QyxLQUFELENBQXRCO0FBQUE7QUFmWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFzQkU7QUFBQSxxREFBZSw0QkFBZjtBQUFBLHlDQUNFO0FBQ0Usd0JBQUksRUFBQyxRQURQO0FBR0UsMkJBQU8sRUFBRXRDLGNBSFg7QUFJRSw0QkFBUSxFQUFFSixRQUFRLENBQUMyQyxNQUFULEdBQWtCO0FBSjlCLHFMQUtPLFFBTFAsZ01BRVkseUNBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwTUQ7O0dBcFNRakUsYztVQUNRRSxxRCxFQUNFRSx1RCxFQUNnQkMsdUQsRUFDaEJBLHVELEVBU0RwQixTOzs7S0FiVGUsYztBQXNTTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJhbnNmZXIvZGV0YWlsLmRiM2QwNzg5ZWM1MTEwYzFhZTUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB0b1J1cGlhaCBmcm9tIFwiLi4vLi4vaGVscGVycy9jdXJlbmN5VG9JRFJcIjtcclxuaW1wb3J0IE1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBQaW5JbnB1dCBmcm9tIFwicmVhY3QtcGluLWlucHV0XCI7XHJcbmltcG9ydCB7IGNoZWNrUGluIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ3MvcmVkdXgvYWN0aW9ucy91c2VyXCI7XHJcbmltcG9ydCB7IHRyYW5zZmVyUHJvY2VzcyB9IGZyb20gXCIuLi8uLi9jb25maWdzL3JlZHV4L2FjdGlvbnMvdHJhbnNmZXJcIjtcclxuXHJcbi8vbW9kYWxcclxuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWxcIjtcclxuXHJcbmZ1bmN0aW9uIHJhbmQoKSB7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDIwKSAtIDEwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNb2RhbFN0eWxlKCkge1xyXG4gIGNvbnN0IHRvcCA9IDUwO1xyXG4gIGNvbnN0IGxlZnQgPSA1MDtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHRvcDogYCR7dG9wfSVgLFxyXG4gICAgbGVmdDogYCR7bGVmdH0lYCxcclxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgtJHt0b3B9JSwgLSR7bGVmdH0lKWAsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcGFwZXI6IHtcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICB3aWR0aDogNDAwLFxyXG4gICAgaGVpZ3RoOiA1MDAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgIGJvcmRlcjogXCIycHggc29saWQgIzAwMFwiLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcclxuICB9LFxyXG59KSk7XHJcbi8vIG1vZGFsXHJcblxyXG5mdW5jdGlvbiBEZXRhaWxUcmFuc2ZlcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyB0cmFuc2ZlciwgZGF0YVRhcmdldCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFuc2Zlcik7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHVybEltZyA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9JTUFHRV9OT19TTEFTSDtcclxuXHJcbiAgY29uc3Qgbm93VGltZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGVUaW1lID0gTW9tZW50KCkuZm9ybWF0KFwiTU1NTSBERCwgWVlZWSAtIEhILm1tXCIpO1xyXG4gICAgcmV0dXJuIGRhdGVUaW1lO1xyXG4gIH07XHJcblxyXG4gIC8vIG1vZGFsXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFttb2RhbFN0eWxlXSA9IFJlYWN0LnVzZVN0YXRlKGdldE1vZGFsU3R5bGUpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9naW5QaW4sIHNldExvZ2luUGluXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvLyBjb25zdCBoYW5kbGVPcGVuID0gKGRhdGEpID0+IHtcclxuICAvLyAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDb250aW51ZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW5QaW4gPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZGlzcGF0Y2goY2hlY2tQaW4oeyBwaW46IGxvZ2luUGluIH0sIHVzZXIuaWQpKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHRyYW5zZmVyUHJvY2Vzcyh0cmFuc2ZlcikpXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJUUkFOU0ZFUl9TVUNDRVNTXCIgfSk7XHJcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiU3VjY2VzcyFcIixcclxuICAgICAgICAgICAgICB0ZXh0OiBcIlRyYW5zZmVyIFN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgdGltZXI6IDE1MDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3RyYW5zZmVyL2hpc3RvcnlcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiVFJBTlNGRVJfRkFJTFVSRVwiLFxyXG4gICAgICAgICAgICAgIHBheWxvYWQ6IGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yIVwiLFxyXG4gICAgICAgICAgICAgIHRleHQ6IFwiVHJhbnNmZXIgRmFpbGVkXCIsXHJcbiAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICBwYXRobmFtZTogXCIvdHJhbnNmZXIvaGlzdG9yeVwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICB0aXRsZTogXCJFcnJvciFcIixcclxuICAgICAgICAgIHRleHQ6IFwiTG9naW4gcGluIG51bWJlciBmYWlsZWQuIFBsZWFzZSBlbnRlciBjb3JyZWN0IHBpbiBudW1iZXIuXCIsXHJcbiAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiM2Mzc5ZjQ7XCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXRyYW5zZmVyLmFtb3VudCAmJiAhZGF0YVRhcmdldC5pZCkge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogXCJJTlNFUlRfREFUQV9UUkFOU0ZFUlwiLFxyXG4gICAgICAgIHBheWxvYWQ6ICh0cmFuc2Zlci5kYXRlVGltZSA9IG5vd1RpbWUoKSksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGQtbGctbm9uZSBweS00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgbXItM1wiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibS0wIGZvbnQtd2VpZ2h0LWJvbGQgYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1hcnJvdy1sZWZ0XCI+PC9pPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtLTAgYWxpZ24tc2VsZi1jZW50ZXIgZm9udC13ZWlnaHQtYm9sZFwiPkNvbmZpcm1hdGlvbjwvaDU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9yZGVyLTAgY2FyZC1sZyBzaGFkb3cgcHktM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJvZHljYXJkXCI+XHJcbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlRyYW5zZmVyIFRvPC9oNT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBib3JkZXItMCBzaGFkb3cgbWItNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICB7ZGF0YVRhcmdldC5pbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1wZW9wbGUgbXItNFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvJHtkYXRhVGFyZ2V0LmltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2RhdGFUYXJnZXQubmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+e2RhdGFUYXJnZXQubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPntkYXRhVGFyZ2V0LnBob25lfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPkRldGFpbHM8L2g1PlxyXG4gICAgICAgICAgey8qIDwhLS0gQW1vdW50IC0tPiAqL31cclxuICAgICAgICAgIHt0cmFuc2Zlci5hbW91bnQgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IGJvcmRlci0wIHNoYWRvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPHA+QW1vdW50PC9wPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtLTAgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgUnAge3RvUnVwaWFoKHRyYW5zZmVyLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgey8qIDwhLS0gRW5kIE9mIEFtb3VudCAtLT4gKi99XHJcbiAgICAgICAgICB7LyogPCEtLSBCYWxhbmNlIGxlZnQgLS0+ICovfVxyXG4gICAgICAgICAge3RyYW5zZmVyLmJhbGFuY2VMZWZ0ICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keSBib3JkZXItMCBtYi0zIHNoYWRvd1wiPlxyXG4gICAgICAgICAgICAgIDxwPkJhbGFuY2UgTGVmdDwvcD5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibS0wIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgIFJwIHt0b1J1cGlhaCh0cmFuc2Zlci5iYWxhbmNlTGVmdCl9XHJcbiAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgey8qIDwhLS0gRW5kIE9mIEJhbGFuY2UgTGVmdCAtLT4gKi99XHJcbiAgICAgICAgICB7LyogPCEtLSBEYXRlIC0tPiAqL31cclxuICAgICAgICAgIHt0cmFuc2Zlci5kYXRlVGltZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHkgbWItMyBib3JkZXItMCBzaGFkb3dcIj5cclxuICAgICAgICAgICAgICA8cD5EYXRlICYgVGltZTwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibS0wIGZvbnQtd2VpZ2h0LWJvbGRcIj57dHJhbnNmZXIuZGF0ZVRpbWV9PC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgey8qIDwhLS0gRW5kIE9mIERhdGUgLS0+ICovfVxyXG4gICAgICAgICAgey8qIDwhLS0gTm90ZSAtLT4gKi99XHJcbiAgICAgICAgICB7dHJhbnNmZXIubm90ZXMgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IG1iLTUgYm9yZGVyLTAgc2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgPHA+Tm90ZXM8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm0tMCBmb250LXdlaWdodC1ib2xkXCI+e3RyYW5zZmVyLm5vdGVzfTwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHsvKiA8IS0tIEVuZCBPZiBOb3RlIC0tPiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tYmx1ZSBidG4tbGcgcmFkaXVzLTEyIGQtbm9uZSBkLWxnLWJsb2NrXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb250aW51ZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJwLTMgZm9udC13ZWlnaHQtYm9sZFwiPiBDb250aW51ZSA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tYmx1ZSBidG4tbGcgcmFkaXVzLTEyIGJ0bi1ibG9jayBkLWxnLW5vbmUgZC1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ29udGludWV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwicC0zIGZvbnQtd2VpZ2h0LWJvbGRcIj4gQ29udGludWUgPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwic2ltcGxlLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXttb2RhbFN0eWxlfSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibS0wIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICBFbnRlciBQSU4gdG8gVHJhbnNmZXJcclxuICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktNCB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIEVudGVyIHlvdXIgNiBkaWdpdHMgUElOIGZvciBjb25maXJtYXRpb24gdG9cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIHRyYW5zZmVycmluZyBtb25leS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxQaW5JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg9ezZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3JldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCByZ2JhKDE2OSwgMTY5LCAxNjksIDAuNilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjMwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRGb2N1c1N0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiICM2Mzc5ZjRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWVyaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRMb2dpblBpbih2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4tbGcgcmFkaXVzLTEyIGJ0bi1ibHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ2luUGlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvZ2luUGluLmxlbmd0aCA8IDZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLmNhcmQtbGcge1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FyZC1sZyAuYm9keWNhcmQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1ibHVlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYzNzlmNDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1ibHVlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUyNjVjZjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1ibHVlOmRpc2FibGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcclxuICAgICAgICAgICAgY29sb3I6ICM4ODg4OGY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuLWJsdWU6ZGlzYWJsZWQ6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xyXG4gICAgICAgICAgICBjb2xvcjogIzg4ODg4ZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pbWctcGVvcGxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRpdi5jYXJkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5iZy1ncmF5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWNlYztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5iZy1ncmF5OmZvY3VzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWNlYztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0OmZvY3VzIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tYmx1ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2Mzc5ZjQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnRuLWJsdWU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM2NWM5O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbFRyYW5zZmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9