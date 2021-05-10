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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
          className: "jsx-168628897" + " " + "m-0 font-weight-bold align-self-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
            className: "jsx-168628897" + " " + "bi bi-arrow-left"
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
      children: "@media screen and (max-width:992px){.card-lg.jsx-168628897{box-shadow:none !important;}.card-lg.jsx-168628897 .bodycard.jsx-168628897{padding:0 !important;}}.btn-blue.jsx-168628897{background-color:#6379f4;color:white;}.btn-blue.jsx-168628897:hover{background-color:#5265cf;color:white;}.btn-blue.jsx-168628897:disabled{background-color:#dadada;color:#88888f;}.btn-blue.jsx-168628897:disabled.jsx-168628897:hover{background-color:#dadada;color:#88888f;}.img-people.jsx-168628897{width:100px;height:100px;border-radius:12px;object-fit:cover;}div.card.jsx-168628897{border-radius:15px;}.bg-gray.jsx-168628897{background-color:#ebecec;}.bg-gray.jsx-168628897:focus{background-color:#ebecec;}input.jsx-168628897:focus{box-shadow:none;}.btn-blue.jsx-168628897{background-color:#6379f4;color:white;}.btn-blue.jsx-168628897:hover{background-color:#5365c9;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxUdXRvcmlhbCBXZWJcXFdlZWsgMTBcXFp3YWxsZXQtRnJvbnRlbmRcXGNvbXBvbmVudHNcXG1vZHVsZVxcRGV0YWlsVHJhbnNmZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc1JTLEFBSTBDLEFBR04sQUFJRSxBQUlBLEFBSUEsQUFJQSxBQUliLEFBTU8sQUFHTSxBQUdBLEFBR1QsQUFHUyxBQUtBLFlBdEJaLElBZWYsR0FUQSxFQTFCRSxJQUlZLEFBSUEsQUFJRSxBQUlBLEFBS0ssQUFRckIsQUFHQSxBQU1jLEFBS0EsRUE5Q1osVUFRRixBQUlBLEFBOEJBLEFBS0EsRUEvQkEsQUFJQSxLQUttQixpQkFDbkIiLCJmaWxlIjoiRDpcXFR1dG9yaWFsIFdlYlxcV2VlayAxMFxcWndhbGxldC1Gcm9udGVuZFxcY29tcG9uZW50c1xcbW9kdWxlXFxEZXRhaWxUcmFuc2Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHRvUnVwaWFoIGZyb20gXCIuLi8uLi9oZWxwZXJzL2N1cmVuY3lUb0lEUlwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IFBpbklucHV0IGZyb20gXCJyZWFjdC1waW4taW5wdXRcIjtcclxuaW1wb3J0IHsgY2hlY2tQaW4gfSBmcm9tIFwiLi4vLi4vY29uZmlncy9yZWR1eC9hY3Rpb25zL3VzZXJcIjtcclxuaW1wb3J0IHsgdHJhbnNmZXJQcm9jZXNzIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ3MvcmVkdXgvYWN0aW9ucy90cmFuc2ZlclwiO1xyXG5cclxuLy9tb2RhbFxyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbFwiO1xyXG5cclxuZnVuY3Rpb24gcmFuZCgpIHtcclxuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjApIC0gMTA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1vZGFsU3R5bGUoKSB7XHJcbiAgY29uc3QgdG9wID0gNTA7XHJcbiAgY29uc3QgbGVmdCA9IDUwO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdG9wOiBgJHt0b3B9JWAsXHJcbiAgICBsZWZ0OiBgJHtsZWZ0fSVgLFxyXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC0ke3RvcH0lLCAtJHtsZWZ0fSUpYCxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBwYXBlcjoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHdpZHRoOiA0MDAsXHJcbiAgICBoZWlndGg6IDUwMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjMDAwXCIsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG4gIH0sXHJcbn0pKTtcclxuLy8gbW9kYWxcclxuXHJcbmZ1bmN0aW9uIERldGFpbFRyYW5zZmVyKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IHRyYW5zZmVyLCBkYXRhVGFyZ2V0IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYW5zZmVyKTtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgdXJsSW1nID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMX0lNQUdFX05PX1NMQVNIO1xyXG5cclxuICBjb25zdCBub3dUaW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZVRpbWUgPSBNb21lbnQoKS5mb3JtYXQoXCJNTU1NIERELCBZWVlZIC0gSEgubW1cIik7XHJcbiAgICByZXR1cm4gZGF0ZVRpbWU7XHJcbiAgfTtcclxuXHJcbiAgLy8gbW9kYWxcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW21vZGFsU3R5bGVdID0gUmVhY3QudXNlU3RhdGUoZ2V0TW9kYWxTdHlsZSk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2dpblBpbiwgc2V0TG9naW5QaW5dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZU9wZW4gPSAoZGF0YSkgPT4ge1xyXG4gIC8vICAgc2V0T3Blbih0cnVlKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbnRpbnVlID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpblBpbiA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkaXNwYXRjaChjaGVja1Bpbih7IHBpbjogbG9naW5QaW4gfSwgdXNlci5pZCkpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2godHJhbnNmZXJQcm9jZXNzKHRyYW5zZmVyKSlcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlRSQU5TRkVSX1NVQ0NFU1NcIiB9KTtcclxuICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICB0aXRsZTogXCJTdWNjZXNzIVwiLFxyXG4gICAgICAgICAgICAgIHRleHQ6IFwiVHJhbnNmZXIgU3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICBwYXRobmFtZTogXCIvdHJhbnNmZXIvaGlzdG9yeVwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJUUkFOU0ZFUl9GQUlMVVJFXCIsXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDogZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3IhXCIsXHJcbiAgICAgICAgICAgICAgdGV4dDogXCJUcmFuc2ZlciBGYWlsZWRcIixcclxuICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi90cmFuc2Zlci9oaXN0b3J5XCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiBcIkVycm9yIVwiLFxyXG4gICAgICAgICAgdGV4dDogXCJMb2dpbiBwaW4gbnVtYmVyIGZhaWxlZC4gUGxlYXNlIGVudGVyIGNvcnJlY3QgcGluIG51bWJlci5cIixcclxuICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzYzNzlmNDtcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghdHJhbnNmZXIuYW1vdW50ICYmICFkYXRhVGFyZ2V0LmlkKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBcIklOU0VSVF9EQVRBX1RSQU5TRkVSXCIsXHJcbiAgICAgICAgcGF5bG9hZDogKHRyYW5zZmVyLmRhdGVUaW1lID0gbm93VGltZSgpKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXggZC1sZy1ub25lIHB5LTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFyayBtci0zXCIgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0+XHJcbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibS0wIGZvbnQtd2VpZ2h0LWJvbGQgYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktYXJyb3ctbGVmdFwiPjwvaT5cclxuICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm0tMCBhbGlnbi1zZWxmLWNlbnRlciBmb250LXdlaWdodC1ib2xkXCI+Q29uZmlybWF0aW9uPC9oNT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBib3JkZXItMCBjYXJkLWxnIHNoYWRvdyBweS0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYm9keWNhcmRcIj5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+VHJhbnNmZXIgVG88L2g1PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvcmRlci0wIHNoYWRvdyBtYi00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgIHtkYXRhVGFyZ2V0LmltYWdlICYmIChcclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLXBlb3BsZSBtci00XCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2RhdGFUYXJnZXQuaW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7ZGF0YVRhcmdldC5uYW1lICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj57ZGF0YVRhcmdldC5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+e2RhdGFUYXJnZXQucGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+RGV0YWlsczwvaDU+XHJcbiAgICAgICAgICB7LyogPCEtLSBBbW91bnQgLS0+ICovfVxyXG4gICAgICAgICAge3RyYW5zZmVyLmFtb3VudCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHkgYm9yZGVyLTAgc2hhZG93IG1iLTNcIj5cclxuICAgICAgICAgICAgICA8cD5BbW91bnQ8L3A+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm0tMCBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICBScCB7dG9SdXBpYWgodHJhbnNmZXIuYW1vdW50KX1cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7LyogPCEtLSBFbmQgT2YgQW1vdW50IC0tPiAqL31cclxuICAgICAgICAgIHsvKiA8IS0tIEJhbGFuY2UgbGVmdCAtLT4gKi99XHJcbiAgICAgICAgICB7dHJhbnNmZXIuYmFsYW5jZUxlZnQgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IGJvcmRlci0wIG1iLTMgc2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgPHA+QmFsYW5jZSBMZWZ0PC9wPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtLTAgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgUnAge3RvUnVwaWFoKHRyYW5zZmVyLmJhbGFuY2VMZWZ0KX1cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7LyogPCEtLSBFbmQgT2YgQmFsYW5jZSBMZWZ0IC0tPiAqL31cclxuICAgICAgICAgIHsvKiA8IS0tIERhdGUgLS0+ICovfVxyXG4gICAgICAgICAge3RyYW5zZmVyLmRhdGVUaW1lICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keSBtYi0zIGJvcmRlci0wIHNoYWRvd1wiPlxyXG4gICAgICAgICAgICAgIDxwPkRhdGUgJiBUaW1lPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtLTAgZm9udC13ZWlnaHQtYm9sZFwiPnt0cmFuc2Zlci5kYXRlVGltZX08L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7LyogPCEtLSBFbmQgT2YgRGF0ZSAtLT4gKi99XHJcbiAgICAgICAgICB7LyogPCEtLSBOb3RlIC0tPiAqL31cclxuICAgICAgICAgIHt0cmFuc2Zlci5ub3RlcyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHkgbWItNSBib3JkZXItMCBzaGFkb3dcIj5cclxuICAgICAgICAgICAgICA8cD5Ob3RlczwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibS0wIGZvbnQtd2VpZ2h0LWJvbGRcIj57dHJhbnNmZXIubm90ZXN9PC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgey8qIDwhLS0gRW5kIE9mIE5vdGUgLS0+ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlIGJ0bi1sZyByYWRpdXMtMTIgZC1ub25lIGQtbGctYmxvY2tcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvbnRpbnVlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInAtMyBmb250LXdlaWdodC1ib2xkXCI+IENvbnRpbnVlIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlIGJ0bi1sZyByYWRpdXMtMTIgYnRuLWJsb2NrIGQtbGctbm9uZSBkLWJsb2NrXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb250aW51ZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJwLTMgZm9udC13ZWlnaHQtYm9sZFwiPiBDb250aW51ZSA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzaW1wbGUtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e21vZGFsU3R5bGV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtLTAgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVudGVyIFBJTiB0byBUcmFuc2ZlclxyXG4gICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS00IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgRW50ZXIgeW91ciA2IGRpZ2l0cyBQSU4gZm9yIGNvbmZpcm1hdGlvbiB0b1xyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgY29udGludWUgdHJhbnNmZXJyaW5nIG1vbmV5LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFBpbklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aD17Nn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjcmV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0U3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHJnYmEoMTY5LCAxNjksIDE2OSwgMC42KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEZvY3VzU3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIgIzYzNzlmNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtZXJpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldExvZ2luUGluKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIGJ0bi1sZyByYWRpdXMtMTIgYnRuLWJsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9naW5QaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9naW5QaW4ubGVuZ3RoIDwgNn1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAuY2FyZC1sZyB7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jYXJkLWxnIC5ib2R5Y2FyZCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuLWJsdWUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM3OWY0O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuLWJsdWU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI2NWNmO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuLWJsdWU6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xyXG4gICAgICAgICAgICBjb2xvcjogIzg4ODg4ZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tYmx1ZTpkaXNhYmxlZDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODg4ODhmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmltZy1wZW9wbGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGl2LmNhcmQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJnLWdyYXkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlY2VjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJnLWdyYXk6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlY2VjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1ibHVlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYzNzlmNDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idG4tYmx1ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzY1Yzk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsVHJhbnNmZXI7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Tutorial Web\\\\Week 10\\\\Zwallet-Frontend\\\\components\\\\module\\\\DetailTransfer.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2R1bGUvRGV0YWlsVHJhbnNmZXIuanMiXSwibmFtZXMiOlsicmFuZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImdldE1vZGFsU3R5bGUiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ3RoIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwicGFkZGluZyIsInNwYWNpbmciLCJEZXRhaWxUcmFuc2ZlciIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidHJhbnNmZXIiLCJkYXRhVGFyZ2V0IiwidXNlciIsInVybEltZyIsInByb2Nlc3MiLCJub3dUaW1lIiwiZGF0ZVRpbWUiLCJNb21lbnQiLCJmb3JtYXQiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vZGFsU3R5bGUiLCJvcGVuIiwic2V0T3BlbiIsImxvZ2luUGluIiwic2V0TG9naW5QaW4iLCJoYW5kbGVDbG9zZSIsImhhbmRsZUNvbnRpbnVlIiwiaGFuZGxlTG9naW5QaW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJjaGVja1BpbiIsInBpbiIsImlkIiwidGhlbiIsInJlcyIsInRyYW5zZmVyUHJvY2VzcyIsInR5cGUiLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwidGV4dCIsImljb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwicHVzaCIsInBhdGhuYW1lIiwiZXJyIiwicGF5bG9hZCIsInJlc3BvbnNlIiwiZGF0YSIsIm1lc3NhZ2UiLCJjb25maXJtQnV0dG9uVGV4dCIsImNvbmZpcm1CdXR0b25Db2xvciIsInVzZUVmZmVjdCIsImFtb3VudCIsImJhY2siLCJpbWFnZSIsIm5hbWUiLCJwaG9uZSIsInRvUnVwaWFoIiwiYmFsYW5jZUxlZnQiLCJub3RlcyIsImJvcmRlclJhZGl1cyIsIm1pbldpZHRoIiwiYm9yZGVyQ29sb3IiLCJ2YWx1ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQ2QsU0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUEzQixJQUFpQyxFQUF4QztBQUNEOztBQUVELFNBQVNDLGFBQVQsR0FBeUI7QUFDdkIsTUFBTUMsR0FBRyxHQUFHLEVBQVo7QUFDQSxNQUFNQyxJQUFJLEdBQUcsRUFBYjtBQUVBLFNBQU87QUFDTEQsT0FBRyxZQUFLQSxHQUFMLE1BREU7QUFFTEMsUUFBSSxZQUFLQSxJQUFMLE1BRkM7QUFHTEMsYUFBUyx1QkFBZ0JGLEdBQWhCLGlCQUEwQkMsSUFBMUI7QUFISixHQUFQO0FBS0Q7O0FBRUQsSUFBTUUsU0FBUyxHQUFHQyw0RUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxTQUFLLEVBQUU7QUFDTEMsY0FBUSxFQUFFLFVBREw7QUFFTEMsV0FBSyxFQUFFLEdBRkY7QUFHTEMsWUFBTSxFQUFFLEdBSEg7QUFJTEMscUJBQWUsRUFBRUwsS0FBSyxDQUFDTSxPQUFOLENBQWNDLFVBQWQsQ0FBeUJOLEtBSnJDO0FBS0xPLFlBQU0sRUFBRSxnQkFMSDtBQU1MQyxlQUFTLEVBQUVULEtBQUssQ0FBQ1UsT0FBTixDQUFjLENBQWQsQ0FOTjtBQU9MQyxhQUFPLEVBQUVYLEtBQUssQ0FBQ1ksT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7QUFQSjtBQURnQyxHQUFaO0FBQUEsQ0FBRCxDQUE1QixDLENBV0E7O0FBRUEsU0FBU0MsY0FBVCxHQUEwQjtBQUFBOztBQUFBOztBQUN4QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGd0IscUJBR1NDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsUUFBakI7QUFBQSxHQUFELENBSHBCO0FBQUEsTUFHaEJBLFFBSGdCLGdCQUdoQkEsUUFIZ0I7QUFBQSxNQUdOQyxVQUhNLGdCQUdOQSxVQUhNOztBQUFBLHNCQUlQSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNHLElBQWpCO0FBQUEsR0FBRCxDQUpKO0FBQUEsTUFJaEJBLElBSmdCLGlCQUloQkEsSUFKZ0I7O0FBS3hCLE1BQU1DLE1BQU0sR0FBR0MsdUJBQWY7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixRQUFNQyxRQUFRLEdBQUdDLDZDQUFNLEdBQUdDLE1BQVQsQ0FBZ0IsdUJBQWhCLENBQWpCO0FBQ0EsV0FBT0YsUUFBUDtBQUNELEdBSEQsQ0FQd0IsQ0FZeEI7OztBQUNBLE1BQU1HLE9BQU8sR0FBRy9CLFNBQVMsRUFBekI7O0FBYndCLHdCQWNIZ0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlckMsYUFBZixDQWRHO0FBQUE7QUFBQSxNQWNqQnNDLFVBZGlCOztBQUFBLHlCQWVBRiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQWZBO0FBQUE7QUFBQSxNQWVqQkUsSUFmaUI7QUFBQSxNQWVYQyxPQWZXOztBQUFBLGtCQWdCUUgsc0RBQVEsQ0FBQyxFQUFELENBaEJoQjtBQUFBLE1BZ0JqQkksUUFoQmlCO0FBQUEsTUFnQlBDLFdBaEJPLGlCQWtCeEI7QUFDQTtBQUNBOzs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCSCxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxNQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0JKLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1LLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzVCQSxLQUFDLENBQUNDLGNBQUY7QUFDQXpCLFlBQVEsQ0FBQzBCLDZFQUFRLENBQUM7QUFBRUMsU0FBRyxFQUFFUjtBQUFQLEtBQUQsRUFBb0JiLElBQUksQ0FBQ3NCLEVBQXpCLENBQVQsQ0FBUixDQUNHQyxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JaLGFBQU8sQ0FBQyxLQUFELENBQVA7QUFFQWxCLGNBQVEsQ0FBQytCLHdGQUFlLENBQUMzQixRQUFELENBQWhCLENBQVIsQ0FDR3lCLElBREgsQ0FDUSxVQUFDQyxHQUFELEVBQVM7QUFDYjlCLGdCQUFRLENBQUM7QUFBRWdDLGNBQUksRUFBRTtBQUFSLFNBQUQsQ0FBUjtBQUNBQywyREFBSSxDQUFDQyxJQUFMLENBQVU7QUFDUkMsZUFBSyxFQUFFLFVBREM7QUFFUkMsY0FBSSxFQUFFLGtCQUZFO0FBR1JDLGNBQUksRUFBRSxTQUhFO0FBSVJDLDJCQUFpQixFQUFFLEtBSlg7QUFLUkMsZUFBSyxFQUFFO0FBTEMsU0FBVjtBQU9BekMsY0FBTSxDQUFDMEMsSUFBUCxDQUFZO0FBQ1ZDLGtCQUFRLEVBQUU7QUFEQSxTQUFaO0FBR0QsT0FiSCxXQWNTLFVBQUNDLEdBQUQsRUFBUztBQUNkMUMsZ0JBQVEsQ0FBQztBQUNQZ0MsY0FBSSxFQUFFLGtCQURDO0FBRVBXLGlCQUFPLEVBQUVELEdBQUcsQ0FBQ0UsUUFBSixDQUFhQyxJQUFiLENBQWtCQztBQUZwQixTQUFELENBQVI7QUFJQWIsMkRBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ1JDLGVBQUssRUFBRSxRQURDO0FBRVJDLGNBQUksRUFBRSxpQkFGRTtBQUdSQyxjQUFJLEVBQUUsT0FIRTtBQUlSQywyQkFBaUIsRUFBRSxLQUpYO0FBS1JDLGVBQUssRUFBRTtBQUxDLFNBQVY7QUFPQXpDLGNBQU0sQ0FBQzBDLElBQVAsQ0FBWTtBQUNWQyxrQkFBUSxFQUFFO0FBREEsU0FBWjtBQUdELE9BN0JIO0FBOEJELEtBbENILFdBbUNTLFVBQUNDLEdBQUQsRUFBUztBQUNkeEIsYUFBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBZSx5REFBSSxDQUFDQyxJQUFMLENBQVU7QUFDUkMsYUFBSyxFQUFFLFFBREM7QUFFUkMsWUFBSSxFQUFFLDJEQUZFO0FBR1JDLFlBQUksRUFBRSxPQUhFO0FBSVJVLHlCQUFpQixFQUFFLElBSlg7QUFLUkMsMEJBQWtCLEVBQUU7QUFMWixPQUFWO0FBT0QsS0E1Q0g7QUE2Q0QsR0EvQ0Q7O0FBaURBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUM3QyxRQUFRLENBQUM4QyxNQUFWLElBQW9CLENBQUM3QyxVQUFVLENBQUN1QixFQUFwQyxFQUF3QztBQUN0QzlCLFlBQU0sQ0FBQzBDLElBQVAsQ0FBWSxZQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0x4QyxjQUFRLENBQUM7QUFDUGdDLFlBQUksRUFBRSxzQkFEQztBQUVQVyxlQUFPLEVBQUd2QyxRQUFRLENBQUNNLFFBQVQsR0FBb0JELE9BQU87QUFGOUIsT0FBRCxDQUFSO0FBSUQ7QUFDRixHQVRRLEVBU04sQ0FBQ1QsUUFBRCxDQVRNLENBQVQ7QUFXQSxzQkFDRTtBQUFBLHVDQUFlLEVBQWY7QUFBQSw0QkFDRTtBQUFBLHlDQUFlLGlDQUFmO0FBQUEsOEJBQ0U7QUFBZ0MsZUFBTyxFQUFFO0FBQUEsaUJBQU1GLE1BQU0sQ0FBQ3FELElBQVAsRUFBTjtBQUFBLFNBQXpDO0FBQUEsMkNBQWUsZ0JBQWY7QUFBQSwrQkFDRTtBQUFBLDZDQUFjLHdDQUFkO0FBQUEsaUNBQ0U7QUFBQSwrQ0FBYTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUU7QUFBQSwyQ0FBYyx3Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBU0U7QUFBQSx5Q0FBZSxtQ0FBZjtBQUFBLDhCQUNFO0FBQUEsMkNBQWUsb0JBQWY7QUFBQSxnQ0FDRTtBQUFBLDZDQUFjLGtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSw2Q0FBZSwyQkFBZjtBQUFBLGlDQUNFO0FBQUEsK0NBQWUsa0JBQWY7QUFBQSx1QkFDRzlDLFVBQVUsQ0FBQytDLEtBQVgsaUJBQ0M7QUFFRSxpQkFBRyxZQUFLN0MsTUFBTCxxQkFBc0JGLFVBQVUsQ0FBQytDLEtBQWpDLENBRkw7QUFHRSxpQkFBRyxFQUFDLEVBSE47QUFBQSxpREFDWTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosRUFRRy9DLFVBQVUsQ0FBQ2dELElBQVgsaUJBQ0M7QUFBQSxpREFBZSxtQkFBZjtBQUFBLHNDQUNFO0FBQUEsbURBQWMsa0JBQWQ7QUFBQSwwQkFBa0NoRCxVQUFVLENBQUNnRDtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFBQSxtREFBYSxnQkFBYjtBQUFBLDBCQUErQmhELFVBQVUsQ0FBQ2lEO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFtQkU7QUFBQSw2Q0FBYyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQkYsRUFxQkdsRCxRQUFRLENBQUM4QyxNQUFULGlCQUNDO0FBQUEsNkNBQWUscUNBQWY7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSwrQ0FBYyxzQkFBZDtBQUFBLDhCQUNNSyxxRUFBUSxDQUFDbkQsUUFBUSxDQUFDOEMsTUFBVixDQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdEJKLEVBK0JHOUMsUUFBUSxDQUFDb0QsV0FBVCxpQkFDQztBQUFBLDZDQUFlLHFDQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUEsK0NBQWMsc0JBQWQ7QUFBQSw4QkFDTUQscUVBQVEsQ0FBQ25ELFFBQVEsQ0FBQ29ELFdBQVYsQ0FEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhDSixFQXlDR3BELFFBQVEsQ0FBQ00sUUFBVCxpQkFDQztBQUFBLDZDQUFlLHFDQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUEsK0NBQWUsYUFBZjtBQUFBLG1DQUNFO0FBQUEsaURBQWMsc0JBQWQ7QUFBQSx3QkFBc0NOLFFBQVEsQ0FBQ007QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFDSixFQW1ER04sUUFBUSxDQUFDcUQsS0FBVCxpQkFDQztBQUFBLDZDQUFlLHFDQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUEsK0NBQWUsYUFBZjtBQUFBLG1DQUNFO0FBQUEsaURBQWMsc0JBQWQ7QUFBQSx3QkFBc0NyRCxRQUFRLENBQUNxRDtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcERKLGVBNERFO0FBQUEsNkNBQWUsNEJBQWY7QUFBQSxrQ0FDRTtBQUVFLG1CQUFPLEVBQUVuQyxjQUZYO0FBQUEsK0NBQ1ksaURBRFo7QUFBQSxtQ0FJRTtBQUFBLGlEQUFpQixzQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBT0U7QUFFRSxtQkFBTyxFQUFFQSxjQUZYO0FBQUEsK0NBQ1ksMkRBRFo7QUFBQSxtQ0FJRTtBQUFBLGlEQUFpQixzQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUE0RUUscUVBQUMsZ0VBQUQ7QUFDRSxZQUFJLEVBQUVMLElBRFI7QUFFRSxlQUFPLEVBQUVJLFdBRlg7QUFHRSwyQkFBZ0Isb0JBSGxCO0FBSUUsNEJBQWlCLDBCQUpuQjtBQUFBLCtCQU1FO0FBQUssZUFBSyxFQUFFTCxVQUFaO0FBQUEsOENBQW1DSCxPQUFPLENBQUM1QixLQUEzQztBQUFBLGlDQUNFO0FBQUE7QUFBQSxtQ0FDRTtBQUFBLGlEQUFlLEtBQWY7QUFBQSxzQ0FDRTtBQUFBLG1EQUFlLGdDQUFmO0FBQUEsdUNBQ0U7QUFBQSxxREFBYyxzQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFNRTtBQUFBLG1EQUFhLGlCQUFiO0FBQUEsdUZBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5GLGVBWUU7QUFBQTtBQUFBLHdDQUNFO0FBQUEscURBQWUsMENBQWY7QUFBQSx5Q0FDRTtBQUFBLHVEQUFlLGlCQUFmO0FBQUEsMkNBQ0UscUVBQUMsc0RBQUQ7QUFDRSw0QkFBTSxFQUFFLENBRFY7QUFFRSwyQkFBSyxNQUZQO0FBR0UsNEJBQU0sTUFIUjtBQUlFLGtDQUFZLEVBQUMsRUFKZjtBQUtFLGdDQUFVLEVBQUU7QUFDVk8sOEJBQU0sRUFBRSxvQ0FERTtBQUVWa0Usb0NBQVksRUFBRSxNQUZKO0FBR1Z2RSw2QkFBSyxFQUFFLEtBSEc7QUFJVndFLGdDQUFRLEVBQUU7QUFKQSx1QkFMZDtBQVdFLHFDQUFlLEVBQUU7QUFDZkMsbUNBQVcsRUFBRTtBQURFLHVCQVhuQjtBQWNFLDBCQUFJLEVBQUMsU0FkUDtBQWVFLDhCQUFRLEVBQUUsa0JBQUNDLEtBQUQ7QUFBQSwrQkFBV3pDLFdBQVcsQ0FBQ3lDLEtBQUQsQ0FBdEI7QUFBQTtBQWZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQXNCRTtBQUFBLHFEQUFlLDRCQUFmO0FBQUEseUNBQ0U7QUFDRSx3QkFBSSxFQUFDLFFBRFA7QUFHRSwyQkFBTyxFQUFFdEMsY0FIWDtBQUlFLDRCQUFRLEVBQUVKLFFBQVEsQ0FBQzJDLE1BQVQsR0FBa0I7QUFKOUIscUxBS08sUUFMUCxnTUFFWSx5Q0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBNRDs7R0FwU1FqRSxjO1VBQ1FFLHFELEVBQ0VFLHVELEVBQ2dCQyx1RCxFQUNoQkEsdUQsRUFTRHBCLFM7OztLQWJUZSxjO0FBc1NNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90cmFuc2Zlci9kZXRhaWwuNjlmYTU1YzE1NzRmOTAxYWIwNWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHRvUnVwaWFoIGZyb20gXCIuLi8uLi9oZWxwZXJzL2N1cmVuY3lUb0lEUlwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IFBpbklucHV0IGZyb20gXCJyZWFjdC1waW4taW5wdXRcIjtcclxuaW1wb3J0IHsgY2hlY2tQaW4gfSBmcm9tIFwiLi4vLi4vY29uZmlncy9yZWR1eC9hY3Rpb25zL3VzZXJcIjtcclxuaW1wb3J0IHsgdHJhbnNmZXJQcm9jZXNzIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ3MvcmVkdXgvYWN0aW9ucy90cmFuc2ZlclwiO1xyXG5cclxuLy9tb2RhbFxyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbFwiO1xyXG5cclxuZnVuY3Rpb24gcmFuZCgpIHtcclxuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjApIC0gMTA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1vZGFsU3R5bGUoKSB7XHJcbiAgY29uc3QgdG9wID0gNTA7XHJcbiAgY29uc3QgbGVmdCA9IDUwO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdG9wOiBgJHt0b3B9JWAsXHJcbiAgICBsZWZ0OiBgJHtsZWZ0fSVgLFxyXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC0ke3RvcH0lLCAtJHtsZWZ0fSUpYCxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBwYXBlcjoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHdpZHRoOiA0MDAsXHJcbiAgICBoZWlndGg6IDUwMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjMDAwXCIsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG4gIH0sXHJcbn0pKTtcclxuLy8gbW9kYWxcclxuXHJcbmZ1bmN0aW9uIERldGFpbFRyYW5zZmVyKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IHRyYW5zZmVyLCBkYXRhVGFyZ2V0IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYW5zZmVyKTtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgdXJsSW1nID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMX0lNQUdFX05PX1NMQVNIO1xyXG5cclxuICBjb25zdCBub3dUaW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZVRpbWUgPSBNb21lbnQoKS5mb3JtYXQoXCJNTU1NIERELCBZWVlZIC0gSEgubW1cIik7XHJcbiAgICByZXR1cm4gZGF0ZVRpbWU7XHJcbiAgfTtcclxuXHJcbiAgLy8gbW9kYWxcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW21vZGFsU3R5bGVdID0gUmVhY3QudXNlU3RhdGUoZ2V0TW9kYWxTdHlsZSk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2dpblBpbiwgc2V0TG9naW5QaW5dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZU9wZW4gPSAoZGF0YSkgPT4ge1xyXG4gIC8vICAgc2V0T3Blbih0cnVlKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbnRpbnVlID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpblBpbiA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkaXNwYXRjaChjaGVja1Bpbih7IHBpbjogbG9naW5QaW4gfSwgdXNlci5pZCkpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2godHJhbnNmZXJQcm9jZXNzKHRyYW5zZmVyKSlcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlRSQU5TRkVSX1NVQ0NFU1NcIiB9KTtcclxuICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICB0aXRsZTogXCJTdWNjZXNzIVwiLFxyXG4gICAgICAgICAgICAgIHRleHQ6IFwiVHJhbnNmZXIgU3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICBwYXRobmFtZTogXCIvdHJhbnNmZXIvaGlzdG9yeVwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJUUkFOU0ZFUl9GQUlMVVJFXCIsXHJcbiAgICAgICAgICAgICAgcGF5bG9hZDogZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3IhXCIsXHJcbiAgICAgICAgICAgICAgdGV4dDogXCJUcmFuc2ZlciBGYWlsZWRcIixcclxuICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi90cmFuc2Zlci9oaXN0b3J5XCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIHRpdGxlOiBcIkVycm9yIVwiLFxyXG4gICAgICAgICAgdGV4dDogXCJMb2dpbiBwaW4gbnVtYmVyIGZhaWxlZC4gUGxlYXNlIGVudGVyIGNvcnJlY3QgcGluIG51bWJlci5cIixcclxuICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzYzNzlmNDtcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghdHJhbnNmZXIuYW1vdW50ICYmICFkYXRhVGFyZ2V0LmlkKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBcIklOU0VSVF9EQVRBX1RSQU5TRkVSXCIsXHJcbiAgICAgICAgcGF5bG9hZDogKHRyYW5zZmVyLmRhdGVUaW1lID0gbm93VGltZSgpKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXggZC1sZy1ub25lIHB5LTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFyayBtci0zXCIgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0+XHJcbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibS0wIGZvbnQtd2VpZ2h0LWJvbGQgYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYmkgYmktYXJyb3ctbGVmdFwiPjwvaT5cclxuICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm0tMCBhbGlnbi1zZWxmLWNlbnRlciBmb250LXdlaWdodC1ib2xkXCI+Q29uZmlybWF0aW9uPC9oNT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBib3JkZXItMCBjYXJkLWxnIHNoYWRvdyBweS0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYm9keWNhcmRcIj5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+VHJhbnNmZXIgVG88L2g1PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvcmRlci0wIHNoYWRvdyBtYi00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgIHtkYXRhVGFyZ2V0LmltYWdlICYmIChcclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLXBlb3BsZSBtci00XCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2RhdGFUYXJnZXQuaW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7ZGF0YVRhcmdldC5uYW1lICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj57ZGF0YVRhcmdldC5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+e2RhdGFUYXJnZXQucGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+RGV0YWlsczwvaDU+XHJcbiAgICAgICAgICB7LyogPCEtLSBBbW91bnQgLS0+ICovfVxyXG4gICAgICAgICAge3RyYW5zZmVyLmFtb3VudCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHkgYm9yZGVyLTAgc2hhZG93IG1iLTNcIj5cclxuICAgICAgICAgICAgICA8cD5BbW91bnQ8L3A+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm0tMCBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICBScCB7dG9SdXBpYWgodHJhbnNmZXIuYW1vdW50KX1cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7LyogPCEtLSBFbmQgT2YgQW1vdW50IC0tPiAqL31cclxuICAgICAgICAgIHsvKiA8IS0tIEJhbGFuY2UgbGVmdCAtLT4gKi99XHJcbiAgICAgICAgICB7dHJhbnNmZXIuYmFsYW5jZUxlZnQgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IGJvcmRlci0wIG1iLTMgc2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgPHA+QmFsYW5jZSBMZWZ0PC9wPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtLTAgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgUnAge3RvUnVwaWFoKHRyYW5zZmVyLmJhbGFuY2VMZWZ0KX1cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7LyogPCEtLSBFbmQgT2YgQmFsYW5jZSBMZWZ0IC0tPiAqL31cclxuICAgICAgICAgIHsvKiA8IS0tIERhdGUgLS0+ICovfVxyXG4gICAgICAgICAge3RyYW5zZmVyLmRhdGVUaW1lICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keSBtYi0zIGJvcmRlci0wIHNoYWRvd1wiPlxyXG4gICAgICAgICAgICAgIDxwPkRhdGUgJiBUaW1lPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtLTAgZm9udC13ZWlnaHQtYm9sZFwiPnt0cmFuc2Zlci5kYXRlVGltZX08L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7LyogPCEtLSBFbmQgT2YgRGF0ZSAtLT4gKi99XHJcbiAgICAgICAgICB7LyogPCEtLSBOb3RlIC0tPiAqL31cclxuICAgICAgICAgIHt0cmFuc2Zlci5ub3RlcyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHkgbWItNSBib3JkZXItMCBzaGFkb3dcIj5cclxuICAgICAgICAgICAgICA8cD5Ob3RlczwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibS0wIGZvbnQtd2VpZ2h0LWJvbGRcIj57dHJhbnNmZXIubm90ZXN9PC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgey8qIDwhLS0gRW5kIE9mIE5vdGUgLS0+ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlIGJ0bi1sZyByYWRpdXMtMTIgZC1ub25lIGQtbGctYmxvY2tcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvbnRpbnVlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInAtMyBmb250LXdlaWdodC1ib2xkXCI+IENvbnRpbnVlIDwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlIGJ0bi1sZyByYWRpdXMtMTIgYnRuLWJsb2NrIGQtbGctbm9uZSBkLWJsb2NrXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb250aW51ZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJwLTMgZm9udC13ZWlnaHQtYm9sZFwiPiBDb250aW51ZSA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzaW1wbGUtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e21vZGFsU3R5bGV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtLTAgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVudGVyIFBJTiB0byBUcmFuc2ZlclxyXG4gICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS00IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgRW50ZXIgeW91ciA2IGRpZ2l0cyBQSU4gZm9yIGNvbmZpcm1hdGlvbiB0b1xyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgY29udGludWUgdHJhbnNmZXJyaW5nIG1vbmV5LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFBpbklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aD17Nn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjcmV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0U3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHJnYmEoMTY5LCAxNjksIDE2OSwgMC42KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEZvY3VzU3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIgIzYzNzlmNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtZXJpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldExvZ2luUGluKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIGJ0bi1sZyByYWRpdXMtMTIgYnRuLWJsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9naW5QaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9naW5QaW4ubGVuZ3RoIDwgNn1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAuY2FyZC1sZyB7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jYXJkLWxnIC5ib2R5Y2FyZCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuLWJsdWUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM3OWY0O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuLWJsdWU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI2NWNmO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuLWJsdWU6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xyXG4gICAgICAgICAgICBjb2xvcjogIzg4ODg4ZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tYmx1ZTpkaXNhYmxlZDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODg4ODhmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmltZy1wZW9wbGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGl2LmNhcmQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJnLWdyYXkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlY2VjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJnLWdyYXk6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlY2VjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1ibHVlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYzNzlmNDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idG4tYmx1ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzY1Yzk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsVHJhbnNmZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=