webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./components/module/Transaction.js":
/*!******************************************!*\
  !*** ./components/module/Transaction.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/curencyToIDR */ "./helpers/curencyToIDR.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _configs_redux_actions_history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../configs/redux/actions/history */ "./configs/redux/actions/history.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");



var _jsxFileName = "D:\\Tutorial Web\\Week 10\\Zwallet-Frontend\\components\\module\\Transaction.js",
    _s = $RefreshSig$();







 // modal






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

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(function (theme) {
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

function TransactionHistory() {
  _s();

  var _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.history;
  }),
      message = _useSelector.message,
      allHistory = _useSelector.allHistory;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      detailHistory = _useState[0],
      setDetailHistory = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var urlImg = "http://localhost:5001";
  var URLAPI = "http://localhost:5001/api/";
  var idUser, token;

  if (true) {
    idUser = localStorage.getItem("id");
    token = localStorage.getItem("token");
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch(Object(_configs_redux_actions_history__WEBPACK_IMPORTED_MODULE_8__["getAllHistory"])(idUser, 10));
  }, [dispatch]); // console.log(allHistory);
  // modal

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(getModalStyle),
      _React$useState2 = Object(D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 1),
      modalStyle = _React$useState2[0];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState4 = Object(D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      open = _React$useState4[0],
      setOpen = _React$useState4[1];

  var handleOpen = function handleOpen(idx) {
    setLoading(true);
    dispatch(Object(_configs_redux_actions_history__WEBPACK_IMPORTED_MODULE_8__["getDetailHistory"])(idx)).then(function (res) {
      setLoading(false);
      setDetailHistory(res.data.data);
      console.log(res.data.data);
    })["catch"](function (err) {
      setLoading(false);
    }); // console.log("ini", data);

    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var btaccept = function btaccept(id) {
    var data = {
      id: id,
      token: token
    };
    setOpen(false);
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("".concat(URLAPI, "transferSuccess/").concat(id), data, {
      withCredentials: true
    }).then(function (response) {
      setOpen(false);
      sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500
      });
    })["catch"](function (err) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
        icon: "error",
        title: "Failed",
        showConfirmButton: false,
        timer: 1500
      });
    });
  };

  var btcancelUser = function btcancelUser(id) {
    var data = {
      id: id,
      token: token
    };
    setOpen(false);
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("".concat(URLAPI, "transferCancel/").concat(id), data, {
      withCredentials: true
    }).then(function (response) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500
      });
    })["catch"](function (err) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
        icon: "error",
        title: "Failed",
        showConfirmButton: false,
        timer: 1500
      });
    });
  };

  var btcancelTarget = function btcancelTarget(id) {
    var data = {
      id: id,
      token: token
    };
    setOpen(false);
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("".concat(URLAPI, "transferCancel/").concat(id), data, {
      withCredentials: true
    }).then(function (response) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500
      });
    })["catch"](function (err) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
        icon: "error",
        title: "Failed",
        showConfirmButton: false,
        timer: 1500
      });
    });
  };

  var changeTime = function changeTime(time) {
    return moment__WEBPACK_IMPORTED_MODULE_9___default()(time).format("MMMM DD, YYYY - HH.mm");
  }; // end modal


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-1519109956" + " " + "h-100",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-1519109956" + " " + "card shadow bg-0 border-0 h-100",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-1519109956" + " " + "card-body d-flex flex-column",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-1519109956" + " " + "d-flex justify-content-between pb-0 mb-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "jsx-1519109956" + " " + "font-weight-bold",
            children: "Transaction History"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/history",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-1519109956" + " " + "text-blue text-decoration-none",
              children: "See All"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, this), message !== "Data unavailable" || message === "Get all history success" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-1519109956" + " " + "container py-2 h-trans overflow-auto",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-1519109956" + " " + "text-dark text-decoration-none ",
            children: [allHistory.data ? allHistory.data.map(function (itm, idx) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                onClick: function onClick(event) {
                  return handleOpen(itm.id);
                },
                className: "jsx-1519109956" + " " + "d-none d-lg-flex row no-gutters min-item mb-2 py-auto pointer",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-1519109956" + " " + "col-4 col-sm-3 col-md-2 imgCenter d-flex justify-content-center",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "jsx-1519109956" + " " + "align-self-center",
                    children: !itm.to_image || !itm.from_image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "".concat(urlImg, "/images/default.png"),
                      alt: "",
                      className: "jsx-1519109956" + " " + "imgCenter"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 205,
                      columnNumber: 33
                    }, _this) : itm.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "".concat(urlImg, "/images/").concat(itm.to_image),
                      alt: "",
                      className: "jsx-1519109956" + " " + "imgCenter"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 211,
                      columnNumber: 33
                    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "".concat(urlImg, "/images/").concat(itm.from_image),
                      alt: "",
                      className: "jsx-1519109956" + " " + "imgCenter"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 217,
                      columnNumber: 33
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 29
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 27
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-1519109956" + " " + "col d-flex ml-2 justify-content-between",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "jsx-1519109956" + " " + "align-self-center",
                    children: [itm.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                      className: "jsx-1519109956" + " " + "font-weight-bold m-0",
                      children: itm.to_name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 228,
                      columnNumber: 33
                    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                      className: "jsx-1519109956" + " " + "font-weight-bold m-0",
                      children: itm.from_name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 232,
                      columnNumber: 33
                    }, _this), itm.status === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "jsx-1519109956" + " " + "text-muted m-0",
                      children: "Pending"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 238,
                      columnNumber: 33
                    }, _this) : itm.status === 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "jsx-1519109956" + " " + "text-muted m-0",
                      children: "Transfer"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 240,
                      columnNumber: 33
                    }, _this) : itm.status === 3 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "jsx-1519109956" + " " + "text-muted m-0",
                      children: "Cancel"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 242,
                      columnNumber: 33
                    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "jsx-1519109956" + " " + "text-muted m-0",
                      children: "Top Up"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 244,
                      columnNumber: 33
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 29
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "jsx-1519109956" + " " + "align-self-center",
                    children: itm.status === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                      className: "jsx-1519109956" + " " + "font-weight-bold c-pending",
                      children: ["Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_5__["default"])(itm.amount)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 251,
                      columnNumber: 33
                    }, _this) : itm.status === 2 && itm.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                      className: "jsx-1519109956" + " " + "font-weight-bold c-transfer",
                      children: ["-Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_5__["default"])(itm.amount)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 255,
                      columnNumber: 33
                    }, _this) : itm.status === 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                      className: "jsx-1519109956" + " " + "font-weight-bold text-success",
                      children: ["+Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_5__["default"])(itm.amount)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 259,
                      columnNumber: 33
                    }, _this) : itm.status === 3 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                      className: "jsx-1519109956" + " " + "font-weight-bold c-cancel",
                      children: ["Rp ", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_5__["default"])(itm.amount)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 263,
                      columnNumber: 33
                    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                      className: "jsx-1519109956" + " " + "font-weight-bold c-topup",
                      children: ["+Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_5__["default"])(itm.amount)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 267,
                      columnNumber: 33
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 249,
                    columnNumber: 29
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 27
                }, _this)]
              }, idx, true, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 25
              }, _this);
            }) : "", allHistory.data ? allHistory.data.map(function (itm, idx) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                onClick: function onClick(event) {
                  return handleOpen(itm.id);
                },
                className: "jsx-1519109956" + " " + "d-flex d-lg-none row pointer",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-1519109956" + " " + "card w-100 mb-2 shadow border-0 h-content",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "jsx-1519109956" + " " + "card-body",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "jsx-1519109956" + " " + "row no-gutters",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "jsx-1519109956" + " " + "col-4 col-sm-3 col-md-2 imgCenter d-flex justify-content-center",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "jsx-1519109956" + " " + "align-self-center",
                          children: !itm.to_image || !itm.from_image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: "".concat(urlImg, "/images/default.png"),
                            alt: "",
                            className: "jsx-1519109956" + " " + "imgCenter"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 294,
                            columnNumber: 39
                          }, _this) : itm.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: "".concat(urlImg, "/images/").concat(itm.to_image),
                            alt: "",
                            className: "jsx-1519109956" + " " + "imgCenter"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 300,
                            columnNumber: 39
                          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: "".concat(urlImg, "/images/").concat(itm.from_image),
                            alt: "",
                            className: "jsx-1519109956" + " " + "imgCenter"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 306,
                            columnNumber: 39
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 292,
                          columnNumber: 35
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 291,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "jsx-1519109956" + " " + "col d-flex ml-2 justify-content-between",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "jsx-1519109956" + " " + "align-self-center",
                          children: [itm.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                            className: "jsx-1519109956" + " " + "font-weight-bold m-0",
                            children: itm.to_name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 317,
                            columnNumber: 39
                          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                            className: "jsx-1519109956" + " " + "font-weight-bold m-0",
                            children: itm.from_name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 321,
                            columnNumber: 39
                          }, _this), itm.status === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            className: "jsx-1519109956" + " " + "text-muted m-0",
                            children: "Pending"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 327,
                            columnNumber: 39
                          }, _this) : itm.status === 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            className: "jsx-1519109956" + " " + "text-muted m-0",
                            children: "Transfer"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 329,
                            columnNumber: 39
                          }, _this) : itm.status === 3 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            className: "jsx-1519109956" + " " + "text-muted m-0",
                            children: "Cancel"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 331,
                            columnNumber: 39
                          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            className: "jsx-1519109956" + " " + "text-muted m-0",
                            children: "Top Up"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 333,
                            columnNumber: 39
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 315,
                          columnNumber: 35
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "jsx-1519109956" + " " + "align-self-center",
                          children: itm.status === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                            className: "jsx-1519109956" + " " + "font-weight-bold c-pending",
                            children: ["Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_5__["default"])(itm.amount)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 338,
                            columnNumber: 39
                          }, _this) : itm.status === 2 && itm.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                            className: "jsx-1519109956" + " " + "font-weight-bold c-transfer",
                            children: ["-Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_5__["default"])(itm.amount)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 343,
                            columnNumber: 39
                          }, _this) : itm.status === 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                            className: "jsx-1519109956" + " " + "font-weight-bold text-success",
                            children: ["+Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_5__["default"])(itm.amount)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 347,
                            columnNumber: 39
                          }, _this) : itm.status === 3 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                            className: "jsx-1519109956" + " " + "font-weight-bold c-cancel",
                            children: ["Rp ", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_5__["default"])(itm.amount)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 351,
                            columnNumber: 39
                          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                            className: "jsx-1519109956" + " " + "font-weight-bold c-topup",
                            children: ["+Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_5__["default"])(itm.amount)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 355,
                            columnNumber: 39
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 336,
                          columnNumber: 35
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 314,
                        columnNumber: 33
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 290,
                      columnNumber: 31
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 289,
                    columnNumber: 29
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 288,
                  columnNumber: 27
                }, _this)
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 25
              }, _this);
            }) : ""]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-1519109956" + " " + "text-center py-2 d-flex h-100",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-1519109956" + " " + "align-self-center w-100",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-1519109956" + " " + "",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: __webpack_require__(/*! ../../assets/images/notransaction.png */ "./assets/images/notransaction.png"),
                alt: "",
                className: "jsx-1519109956"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 374,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                className: "jsx-1519109956" + " " + "font-weight-bold my-3",
                children: "It's Clear!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 378,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "jsx-1519109956" + " " + "text-muted",
                children: "You've never done a transaction so far"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 379,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 372,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_12__["default"], {
      open: open,
      onClose: handleClose,
      "aria-labelledby": "simple-modal-title",
      "aria-describedby": "simple-modal-description",
      children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: modalStyle,
        className: "jsx-1519109956" + " " + (classes.paper || ""),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-1519109956" + " " + "row  w-100",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-1519109956" + " " + "col h-100",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-1519109956" + " " + "py-auto text-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-1519109956" + " " + "align-self-center ",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-1519109956" + " " + "spinner-grow text-blue",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "jsx-1519109956" + " " + "sr-only",
                    children: "Loading..."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 404,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 403,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: "jsx-1519109956" + " " + "font-weight-bold",
                  children: "Wait a moment..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 406,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "jsx-1519109956" + " " + "text-muted m-0",
                  children: "Loading process"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 407,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 402,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 400,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 399,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 13
        }, this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: modalStyle,
        className: "jsx-1519109956" + " " + (classes.paper || ""),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-1519109956" + " " + "row px-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-1519109956" + " " + "col-4",
            children: detailHistory.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "".concat(urlImg, "/images/").concat(detailHistory.to_image),
              className: "jsx-1519109956" + " " + "imageHistory"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 418,
              columnNumber: 19
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "".concat(urlImg, "/images/").concat(detailHistory.from_image),
              className: "jsx-1519109956" + " " + "imageHistory"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 423,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 416,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-1519109956" + " " + "col d-flex",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-1519109956" + " " + "align-self-center",
              children: [detailHistory.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "jsx-1519109956" + " " + "font-weight-bold",
                children: detailHistory.to_name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 432,
                columnNumber: 21
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "jsx-1519109956" + " " + "font-weight-bold",
                children: detailHistory.from_name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 436,
                columnNumber: 21
              }, this), detailHistory.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "jsx-1519109956" + " " + "text-muted m-0",
                children: detailHistory.to_phone
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 442,
                columnNumber: 21
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "jsx-1519109956" + " " + "text-muted m-0",
                children: detailHistory.from_phone
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 444,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 430,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 429,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
          className: "jsx-1519109956"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 449,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-1519109956" + " " + "container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-1519109956" + " " + "d-flex justify-content-between mb-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-1519109956" + " " + "m-0",
              children: "Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 452,
              columnNumber: 17
            }, this), detailHistory.status === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-1519109956" + " " + "m-0 c-pending font-weight-bold",
              children: ["+Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_5__["default"])(detailHistory.amount)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 454,
              columnNumber: 19
            }, this) : detailHistory.status === 2 && detailHistory.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-1519109956" + " " + "m-0 c-transfer font-weight-bold",
              children: ["-Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_5__["default"])(detailHistory.amount)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 459,
              columnNumber: 19
            }, this) : detailHistory.status === 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-1519109956" + " " + "m-0 text-success font-weight-bold",
              children: ["+Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_5__["default"])(detailHistory.amount)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 463,
              columnNumber: 19
            }, this) : detailHistory.status === 3 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-1519109956" + " " + "m-0 c-cancel font-weight-bold",
              children: ["Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_5__["default"])(detailHistory.amount)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 467,
              columnNumber: 19
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-1519109956" + " " + "m-0 c-topup font-weight-bold",
              children: ["+Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_5__["default"])(detailHistory.amount)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 471,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 451,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
            className: "jsx-1519109956"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 476,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-1519109956" + " " + "d-flex justify-content-between mb-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-1519109956" + " " + "m-0",
              children: "Date & Time"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 478,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-1519109956" + " " + "m-0",
              children: changeTime(detailHistory.created_at)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 479,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 477,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
            className: "jsx-1519109956"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 481,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-1519109956" + " " + "mb-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-1519109956" + " " + "m font-weight-bold",
              children: "Notes :"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 483,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-1519109956" + " " + "m-0",
              children: detailHistory.notes
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 484,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 482,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-1519109956" + " " + "mb-2",
            children: [detailHistory.status === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-1519109956" + " " + "m font-weight-bold",
              children: "Selection"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 488,
              columnNumber: 19
            }, this) : "", detailHistory.status === 1 && detailHistory.to_id === idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick(e) {
                return btcancelTarget(detailHistory.id);
              },
              className: "jsx-1519109956" + " " + "btn btn-danger mr-2",
              children: "Reject"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 494,
              columnNumber: 19
            }, this) : "", detailHistory.status === 1 && detailHistory.to_id === idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick(e) {
                return btaccept(detailHistory.id);
              },
              className: "jsx-1519109956" + " " + "btn btn-success",
              children: "Accept"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 505,
              columnNumber: 19
            }, this) : "", detailHistory.status === 1 && detailHistory.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick(e) {
                return btcancelUser(detailHistory.id);
              },
              className: "jsx-1519109956" + " " + "btn btn-warning",
              children: "Cancel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 517,
              columnNumber: 19
            }, this) : ""]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 486,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 450,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "1519109956",
      children: "@media screen and (max-width:992px){.shadow.jsx-1519109956{box-shadow:none !important;}div.bg-0.card.jsx-1519109956{background-color:transparent;}}.imgCenter.jsx-1519109956{object-fit:cover;border-radius:15px;height:60px;width:60px;}.min-item.jsx-1519109956{min-height:75px;}div.card.jsx-1519109956{border-radius:15px;}.c-transfer.jsx-1519109956,.c-cancel.jsx-1519109956{color:red;}.c-pending.jsx-1519109956{color:orange;}.c-topup.jsx-1519109956{color:#6379f4;}.h-content.jsx-1519109956{height:100px;}.imageHistory.jsx-1519109956{height:159px;width:100%;object-fit:cover;border-radius:15px;}.h-trans.jsx-1519109956{height:260px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxUdXRvcmlhbCBXZWJcXFdlZWsgMTBcXFp3YWxsZXQtRnJvbnRlbmRcXGNvbXBvbmVudHNcXG1vZHVsZVxcVHJhbnNhY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbWhCUyxBQUkwQyxBQUdFLEFBSWQsQUFNRCxBQUdHLEFBSVQsQUFHRyxBQUdDLEFBR0QsQUFJQSxBQU1BLFVBbEJmLEdBR0EsQUFNQSxBQUlhLEFBTWIsQ0FiQSxFQWJBLENBTnFCLEVBU3JCLEtBa0JtQixHQWxDakIsRUFHQSxPQUtZLEtBMkJPLE9BMUJSLFdBQ2IsQ0EwQkEiLCJmaWxlIjoiRDpcXFR1dG9yaWFsIFdlYlxcV2VlayAxMFxcWndhbGxldC1Gcm9udGVuZFxcY29tcG9uZW50c1xcbW9kdWxlXFxUcmFuc2FjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHRvUnVwaWFoIGZyb20gXCIuLi8uLi9oZWxwZXJzL2N1cmVuY3lUb0lEUlwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIGdldEFsbEhpc3RvcnksXHJcbiAgZ2V0RGV0YWlsSGlzdG9yeSxcclxufSBmcm9tIFwiLi4vLi4vY29uZmlncy9yZWR1eC9hY3Rpb25zL2hpc3RvcnlcIjtcclxuXHJcbi8vIG1vZGFsXHJcbmltcG9ydCBNb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbFwiO1xyXG5cclxuZnVuY3Rpb24gcmFuZCgpIHtcclxuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjApIC0gMTA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1vZGFsU3R5bGUoKSB7XHJcbiAgY29uc3QgdG9wID0gNTA7XHJcbiAgY29uc3QgbGVmdCA9IDUwO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdG9wOiBgJHt0b3B9JWAsXHJcbiAgICBsZWZ0OiBgJHtsZWZ0fSVgLFxyXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC0ke3RvcH0lLCAtJHtsZWZ0fSUpYCxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBwYXBlcjoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHdpZHRoOiA0MDAsXHJcbiAgICBoZWlndGg6IDUwMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjMDAwXCIsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG4gIH0sXHJcbn0pKTtcclxuLy8gbW9kYWxcclxuXHJcbmZ1bmN0aW9uIFRyYW5zYWN0aW9uSGlzdG9yeSgpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZXNzYWdlLCBhbGxIaXN0b3J5IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmhpc3RvcnkpO1xyXG4gIGNvbnN0IFtkZXRhaWxIaXN0b3J5LCBzZXREZXRhaWxIaXN0b3J5XSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB1cmxJbWcgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkxfSU1BR0VfTk9fU0xBU0g7XHJcbiAgY29uc3QgVVJMQVBJID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMX0FQSV9XSVRIX1NMQVNIO1xyXG5cclxuICBsZXQgaWRVc2VyLCB0b2tlbjtcclxuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICBpZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpO1xyXG4gICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGdldEFsbEhpc3RvcnkoaWRVc2VyLCAxMCkpO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG4gIC8vIGNvbnNvbGUubG9nKGFsbEhpc3RvcnkpO1xyXG4gIC8vIG1vZGFsXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFttb2RhbFN0eWxlXSA9IFJlYWN0LnVzZVN0YXRlKGdldE1vZGFsU3R5bGUpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9IChpZHgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBkaXNwYXRjaChnZXREZXRhaWxIaXN0b3J5KGlkeCkpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXREZXRhaWxIaXN0b3J5KHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiaW5pXCIsIGRhdGEpO1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGJ0YWNjZXB0ID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZCxcclxuICAgICAgdG9rZW4sXHJcbiAgICB9O1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChgJHtVUkxBUEl9dHJhbnNmZXJTdWNjZXNzLyR7aWR9YCwgZGF0YSwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJGYWlsZWRcIixcclxuICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGJ0Y2FuY2VsVXNlciA9IChpZCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWQsXHJcbiAgICAgIHRva2VuLFxyXG4gICAgfTtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYCR7VVJMQVBJfXRyYW5zZmVyQ2FuY2VsLyR7aWR9YCwgZGF0YSwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJGYWlsZWRcIixcclxuICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBidGNhbmNlbFRhcmdldCA9IChpZCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWQsXHJcbiAgICAgIHRva2VuLFxyXG4gICAgfTtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYCR7VVJMQVBJfXRyYW5zZmVyQ2FuY2VsLyR7aWR9YCwgZGF0YSwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJGYWlsZWRcIixcclxuICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VUaW1lID0gKHRpbWUpID0+IHtcclxuICAgIHJldHVybiBNb21lbnQodGltZSkuZm9ybWF0KFwiTU1NTSBERCwgWVlZWSAtIEhILm1tXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGVuZCBtb2RhbFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLTEwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2hhZG93IGJnLTAgYm9yZGVyLTAgaC0xMDBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHBiLTAgbWItM1wiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlRyYW5zYWN0aW9uIEhpc3Rvcnk8L2g1PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9oaXN0b3J5XCJ9PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYmx1ZSB0ZXh0LWRlY29yYXRpb24tbm9uZVwiPlNlZSBBbGw8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDwhLS0gSXRlbSAtLT4gKi99XHJcbiAgICAgICAgICB7bWVzc2FnZSAhPT0gXCJEYXRhIHVuYXZhaWxhYmxlXCIgfHxcclxuICAgICAgICAgIG1lc3NhZ2UgPT09IFwiR2V0IGFsbCBoaXN0b3J5IHN1Y2Nlc3NcIiA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktMiBoLXRyYW5zIG92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgICAgICAgICB7LyogTG9vcGluZyBkaXNpbmkgKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgdGV4dC1kZWNvcmF0aW9uLW5vbmUgXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBmb3IgZGVza3RvcCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICB7YWxsSGlzdG9yeS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgID8gYWxsSGlzdG9yeS5kYXRhLm1hcCgoaXRtLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLW5vbmUgZC1sZy1mbGV4IHJvdyBuby1ndXR0ZXJzIG1pbi1pdGVtIG1iLTIgcHktYXV0byBwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGhhbmRsZU9wZW4oaXRtLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgY29sLXNtLTMgY29sLW1kLTIgaW1nQ2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaXRtLnRvX2ltYWdlIHx8ICFpdG0uZnJvbV9pbWFnZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy9kZWZhdWx0LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0udG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2l0bS50b19pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ0NlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3VybEltZ30vaW1hZ2VzLyR7aXRtLmZyb21faW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleCBtbC0yIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0udG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0udG9fbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0bS5mcm9tX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0uc3RhdHVzID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+UGVuZGluZzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5UcmFuc2ZlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5DYW5jZWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5Ub3AgVXA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIFNIT1cgQlVUVE9OIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gc2hvdyB0YXJnZXQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0uc3RhdHVzID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGMtcGVuZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDIgJiYgaXRtLnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYy10cmFuc2ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLVJwe3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0uc3RhdHVzID09PSAyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIHRleHQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1Jwe3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0uc3RhdHVzID09PSAzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGMtY2FuY2VsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBScCB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBjLXRvcHVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIEVuZCBvZiBmb3IgZGVza3RvcCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBGb3IgbW9iaWxlISAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICB7YWxsSGlzdG9yeS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgID8gYWxsSGlzdG9yeS5kYXRhLm1hcCgoaXRtLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggZC1sZy1ub25lIHJvdyBwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGhhbmRsZU9wZW4oaXRtLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB3LTEwMCBtYi0yIHNoYWRvdyBib3JkZXItMCBoLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGNvbC1zbS0zIGNvbC1tZC0yIGltZ0NlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWl0bS50b19pbWFnZSB8fCAhaXRtLmZyb21faW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nQ2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvZGVmYXVsdC5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nQ2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvJHtpdG0udG9faW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2l0bS5mcm9tX2ltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXggbWwtMiBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLnRvX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0uZnJvbV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLnN0YXR1cyA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPlBlbmRpbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0uc3RhdHVzID09PSAyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+VHJhbnNmZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0uc3RhdHVzID09PSAzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+Q2FuY2VsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+VG9wIFVwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0uc3RhdHVzID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGMtcGVuZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdG0udG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBjLXRyYW5zZmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYy1jYW5jZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJwIHt0b1J1cGlhaChpdG0uYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGMtdG9wdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtScHt0b1J1cGlhaChpdG0uYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0yIGQtZmxleCBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXIgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL25vdHJhbnNhY3Rpb24ucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG15LTNcIj5JdCdzIENsZWFyITwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBZb3UndmUgbmV2ZXIgZG9uZSBhIHRyYW5zYWN0aW9uIHNvIGZhclxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHsvKiA8IS0tIEVuZCBPZiBJdGVtIC0tPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwic2ltcGxlLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIHtpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXttb2RhbFN0eWxlfSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyAgdy0xMDBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS1hdXRvIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBXaGVuIGxvYWRpbmcqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItZ3JvdyB0ZXh0LWJsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+V2FpdCBhIG1vbWVudC4uLjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5Mb2FkaW5nIHByb2Nlc3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXttb2RhbFN0eWxlfSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweC01XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAge2RldGFpbEhpc3RvcnkudG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlSGlzdG9yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2RldGFpbEhpc3RvcnkudG9faW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZUhpc3RvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvJHtkZXRhaWxIaXN0b3J5LmZyb21faW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnRvX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2RldGFpbEhpc3RvcnkuZnJvbV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+e2RldGFpbEhpc3RvcnkudG9fcGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+e2RldGFpbEhpc3RvcnkuZnJvbV9waG9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTBcIj5BbW91bnQ8L2g2PlxyXG4gICAgICAgICAgICAgICAge2RldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wIGMtcGVuZGluZyBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgK1Jwe3RvUnVwaWFoKGRldGFpbEhpc3RvcnkuYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICkgOiBkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgICBkZXRhaWxIaXN0b3J5LnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTAgYy10cmFuc2ZlciBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgLVJwe3RvUnVwaWFoKGRldGFpbEhpc3RvcnkuYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICkgOiBkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMiA/IChcclxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMCB0ZXh0LXN1Y2Nlc3MgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICtScHt0b1J1cGlhaChkZXRhaWxIaXN0b3J5LmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICApIDogZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDMgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTAgYy1jYW5jZWwgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFJwe3RvUnVwaWFoKGRldGFpbEhpc3RvcnkuYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTAgYy10b3B1cCBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgK1Jwe3RvUnVwaWFoKGRldGFpbEhpc3RvcnkuYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMFwiPkRhdGUgJiBUaW1lPC9oNj5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTBcIj57Y2hhbmdlVGltZShkZXRhaWxIaXN0b3J5LmNyZWF0ZWRfYXQpfTwvaDY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibSBmb250LXdlaWdodC1ib2xkXCI+Tm90ZXMgOjwvaDY+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wXCI+e2RldGFpbEhpc3Rvcnkubm90ZXN9PC9oNj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0gZm9udC13ZWlnaHQtYm9sZFwiPlNlbGVjdGlvbjwvaDY+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge2RldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxIaXN0b3J5LnRvX2lkID09PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gYnRjYW5jZWxUYXJnZXQoZGV0YWlsSGlzdG9yeS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgbXItMlwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBSZWplY3RcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge2RldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxIaXN0b3J5LnRvX2lkID09PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gYnRhY2NlcHQoZGV0YWlsSGlzdG9yeS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFjY2VwdFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge2RldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxIaXN0b3J5LnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gYnRjYW5jZWxVc2VyKGRldGFpbEhpc3RvcnkuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgIC5zaGFkb3cge1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXYuYmctMC5jYXJkIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmltZ0NlbnRlciB7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1pbi1pdGVtIHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNzVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRpdi5jYXJkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jLXRyYW5zZmVyLFxyXG4gICAgICAgICAgLmMtY2FuY2VsIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jLXBlbmRpbmcge1xyXG4gICAgICAgICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmMtdG9wdXAge1xyXG4gICAgICAgICAgICBjb2xvcjogIzYzNzlmNDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pbWFnZUhpc3Rvcnkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1OXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaC10cmFucyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYW5zYWN0aW9uSGlzdG9yeTtcclxuIl19 */\n/*@ sourceURL=D:\\\\Tutorial Web\\\\Week 10\\\\Zwallet-Frontend\\\\components\\\\module\\\\Transaction.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 178,
    columnNumber: 5
  }, this);
}

_s(TransactionHistory, "17PN5LYWj5GJK8Zo2TpBl0odlOQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], useStyles];
});

_c = TransactionHistory;
/* harmony default export */ __webpack_exports__["default"] = (TransactionHistory);

var _c;

$RefreshReg$(_c, "TransactionHistory");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2R1bGUvVHJhbnNhY3Rpb24uanMiXSwibmFtZXMiOlsicmFuZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImdldE1vZGFsU3R5bGUiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ3RoIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwicGFkZGluZyIsInNwYWNpbmciLCJUcmFuc2FjdGlvbkhpc3RvcnkiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImhpc3RvcnkiLCJtZXNzYWdlIiwiYWxsSGlzdG9yeSIsInVzZVN0YXRlIiwiZGV0YWlsSGlzdG9yeSIsInNldERldGFpbEhpc3RvcnkiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwidXJsSW1nIiwicHJvY2VzcyIsIlVSTEFQSSIsImlkVXNlciIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZUVmZmVjdCIsImdldEFsbEhpc3RvcnkiLCJjbGFzc2VzIiwiUmVhY3QiLCJtb2RhbFN0eWxlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVPcGVuIiwiaWR4IiwiZ2V0RGV0YWlsSGlzdG9yeSIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVyciIsImhhbmRsZUNsb3NlIiwiYnRhY2NlcHQiLCJpZCIsImF4aW9zIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsInJlc3BvbnNlIiwiU3dhbCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwiYnRjYW5jZWxVc2VyIiwiYnRjYW5jZWxUYXJnZXQiLCJjaGFuZ2VUaW1lIiwidGltZSIsIk1vbWVudCIsImZvcm1hdCIsIm1hcCIsIml0bSIsImV2ZW50IiwidG9faW1hZ2UiLCJmcm9tX2ltYWdlIiwidG9faWQiLCJ0b19uYW1lIiwiZnJvbV9uYW1lIiwic3RhdHVzIiwidG9SdXBpYWgiLCJhbW91bnQiLCJyZXF1aXJlIiwidG9fcGhvbmUiLCJmcm9tX3Bob25lIiwiY3JlYXRlZF9hdCIsIm5vdGVzIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBTUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNkLFNBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsSUFBaUMsRUFBeEM7QUFDRDs7QUFFRCxTQUFTQyxhQUFULEdBQXlCO0FBQ3ZCLE1BQU1DLEdBQUcsR0FBRyxFQUFaO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLEVBQWI7QUFFQSxTQUFPO0FBQ0xELE9BQUcsWUFBS0EsR0FBTCxNQURFO0FBRUxDLFFBQUksWUFBS0EsSUFBTCxNQUZDO0FBR0xDLGFBQVMsdUJBQWdCRixHQUFoQixpQkFBMEJDLElBQTFCO0FBSEosR0FBUDtBQUtEOztBQUVELElBQU1FLFNBQVMsR0FBR0MsNEVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsU0FBSyxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxVQURMO0FBRUxDLFdBQUssRUFBRSxHQUZGO0FBR0xDLFlBQU0sRUFBRSxHQUhIO0FBSUxDLHFCQUFlLEVBQUVMLEtBQUssQ0FBQ00sT0FBTixDQUFjQyxVQUFkLENBQXlCTixLQUpyQztBQUtMTyxZQUFNLEVBQUUsZ0JBTEg7QUFNTEMsZUFBUyxFQUFFVCxLQUFLLENBQUNVLE9BQU4sQ0FBYyxDQUFkLENBTk47QUFPTEMsYUFBTyxFQUFFWCxLQUFLLENBQUNZLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCO0FBUEo7QUFEZ0MsR0FBWjtBQUFBLENBQUQsQ0FBNUIsQyxDQVdBOztBQUVBLFNBQVNDLGtCQUFULEdBQThCO0FBQUE7O0FBQUE7O0FBQzVCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRDRCLHFCQUVJQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLE9BQWpCO0FBQUEsR0FBRCxDQUZmO0FBQUEsTUFFcEJDLE9BRm9CLGdCQUVwQkEsT0FGb0I7QUFBQSxNQUVYQyxVQUZXLGdCQUVYQSxVQUZXOztBQUFBLGtCQUdjQyxzREFBUSxDQUFDLEVBQUQsQ0FIdEI7QUFBQSxNQUdyQkMsYUFIcUI7QUFBQSxNQUdOQyxnQkFITTs7QUFBQSxtQkFJSUYsc0RBQVEsQ0FBQyxLQUFELENBSlo7QUFBQSxNQUlyQkcsU0FKcUI7QUFBQSxNQUlWQyxVQUpVOztBQUs1QixNQUFNQyxNQUFNLEdBQUdDLHVCQUFmO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCw0QkFBZjtBQUVBLE1BQUlFLE1BQUosRUFBWUMsS0FBWjs7QUFDQSxZQUFxQjtBQUNuQkQsVUFBTSxHQUFHRSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsSUFBckIsQ0FBVDtBQUNBRixTQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFSO0FBQ0Q7O0FBRURDLHlEQUFTLENBQUMsWUFBTTtBQUNkbkIsWUFBUSxDQUFDb0Isb0ZBQWEsQ0FBQ0wsTUFBRCxFQUFTLEVBQVQsQ0FBZCxDQUFSO0FBQ0QsR0FGUSxFQUVOLENBQUNmLFFBQUQsQ0FGTSxDQUFULENBZDRCLENBaUI1QjtBQUNBOztBQUNBLE1BQU1xQixPQUFPLEdBQUdyQyxTQUFTLEVBQXpCOztBQW5CNEIsd0JBb0JQc0MsNENBQUssQ0FBQ2YsUUFBTixDQUFlM0IsYUFBZixDQXBCTztBQUFBO0FBQUEsTUFvQnJCMkMsVUFwQnFCOztBQUFBLHlCQXFCSkQsNENBQUssQ0FBQ2YsUUFBTixDQUFlLEtBQWYsQ0FyQkk7QUFBQTtBQUFBLE1BcUJyQmlCLElBckJxQjtBQUFBLE1BcUJmQyxPQXJCZTs7QUF1QjVCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBUztBQUMxQmhCLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQVgsWUFBUSxDQUFDNEIsdUZBQWdCLENBQUNELEdBQUQsQ0FBakIsQ0FBUixDQUNHRSxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JuQixnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBRixzQkFBZ0IsQ0FBQ3FCLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQSxJQUFWLENBQWhCO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBckI7QUFDRCxLQUxILFdBTVMsVUFBQ0csR0FBRCxFQUFTO0FBQ2R2QixnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBUkgsRUFGMEIsQ0FXMUI7O0FBQ0FjLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDRCxHQWJEOztBQWVBLE1BQU1VLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJWLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1XLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEVBQUQsRUFBUTtBQUN2QixRQUFNTixJQUFJLEdBQUc7QUFDWE0sUUFBRSxFQUFGQSxFQURXO0FBRVhyQixXQUFLLEVBQUxBO0FBRlcsS0FBYjtBQUlBUyxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0FhLGdEQUFLLENBQ0ZDLElBREgsV0FDV3pCLE1BRFgsNkJBQ29DdUIsRUFEcEMsR0FDMENOLElBRDFDLEVBQ2dEO0FBQzVDUyxxQkFBZSxFQUFFO0FBRDJCLEtBRGhELEVBSUdYLElBSkgsQ0FJUSxVQUFDWSxRQUFELEVBQWM7QUFDbEJoQixhQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0FpQix5REFBSSxDQUFDQyxJQUFMLENBQVU7QUFDUkMsWUFBSSxFQUFFLFNBREU7QUFFUkMsYUFBSyxFQUFFSixRQUFRLENBQUNWLElBQVQsQ0FBYzFCLE9BRmI7QUFHUnlDLHlCQUFpQixFQUFFLEtBSFg7QUFJUkMsYUFBSyxFQUFFO0FBSkMsT0FBVjtBQU1ELEtBWkgsV0FhUyxVQUFDYixHQUFELEVBQVM7QUFDZFEseURBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ1JDLFlBQUksRUFBRSxPQURFO0FBRVJDLGFBQUssRUFBRSxRQUZDO0FBR1JDLHlCQUFpQixFQUFFLEtBSFg7QUFJUkMsYUFBSyxFQUFFO0FBSkMsT0FBVjtBQU1ELEtBcEJIO0FBcUJELEdBM0JEOztBQTRCQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDWCxFQUFELEVBQVE7QUFDM0IsUUFBTU4sSUFBSSxHQUFHO0FBQ1hNLFFBQUUsRUFBRkEsRUFEVztBQUVYckIsV0FBSyxFQUFMQTtBQUZXLEtBQWI7QUFJQVMsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBYSxnREFBSyxDQUNGQyxJQURILFdBQ1d6QixNQURYLDRCQUNtQ3VCLEVBRG5DLEdBQ3lDTixJQUR6QyxFQUMrQztBQUMzQ1MscUJBQWUsRUFBRTtBQUQwQixLQUQvQyxFQUlHWCxJQUpILENBSVEsVUFBQ1ksUUFBRCxFQUFjO0FBQ2xCQyx5REFBSSxDQUFDQyxJQUFMLENBQVU7QUFDUkMsWUFBSSxFQUFFLFNBREU7QUFFUkMsYUFBSyxFQUFFSixRQUFRLENBQUNWLElBQVQsQ0FBYzFCLE9BRmI7QUFHUnlDLHlCQUFpQixFQUFFLEtBSFg7QUFJUkMsYUFBSyxFQUFFO0FBSkMsT0FBVjtBQU1ELEtBWEgsV0FZUyxVQUFDYixHQUFELEVBQVM7QUFDZFEseURBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ1JDLFlBQUksRUFBRSxPQURFO0FBRVJDLGFBQUssRUFBRSxRQUZDO0FBR1JDLHlCQUFpQixFQUFFLEtBSFg7QUFJUkMsYUFBSyxFQUFFO0FBSkMsT0FBVjtBQU1ELEtBbkJIO0FBb0JELEdBMUJEOztBQTRCQSxNQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNaLEVBQUQsRUFBUTtBQUM3QixRQUFNTixJQUFJLEdBQUc7QUFDWE0sUUFBRSxFQUFGQSxFQURXO0FBRVhyQixXQUFLLEVBQUxBO0FBRlcsS0FBYjtBQUlBUyxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0FhLGdEQUFLLENBQ0ZDLElBREgsV0FDV3pCLE1BRFgsNEJBQ21DdUIsRUFEbkMsR0FDeUNOLElBRHpDLEVBQytDO0FBQzNDUyxxQkFBZSxFQUFFO0FBRDBCLEtBRC9DLEVBSUdYLElBSkgsQ0FJUSxVQUFDWSxRQUFELEVBQWM7QUFDbEJDLHlEQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNSQyxZQUFJLEVBQUUsU0FERTtBQUVSQyxhQUFLLEVBQUVKLFFBQVEsQ0FBQ1YsSUFBVCxDQUFjMUIsT0FGYjtBQUdSeUMseUJBQWlCLEVBQUUsS0FIWDtBQUlSQyxhQUFLLEVBQUU7QUFKQyxPQUFWO0FBTUQsS0FYSCxXQVlTLFVBQUNiLEdBQUQsRUFBUztBQUNkUSx5REFBSSxDQUFDQyxJQUFMLENBQVU7QUFDUkMsWUFBSSxFQUFFLE9BREU7QUFFUkMsYUFBSyxFQUFFLFFBRkM7QUFHUkMseUJBQWlCLEVBQUUsS0FIWDtBQUlSQyxhQUFLLEVBQUU7QUFKQyxPQUFWO0FBTUQsS0FuQkg7QUFvQkQsR0ExQkQ7O0FBNEJBLE1BQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBVTtBQUMzQixXQUFPQyw2Q0FBTSxDQUFDRCxJQUFELENBQU4sQ0FBYUUsTUFBYixDQUFvQix1QkFBcEIsQ0FBUDtBQUNELEdBRkQsQ0E5SDRCLENBa0k1Qjs7O0FBRUEsc0JBQ0U7QUFBQSx3Q0FBZSxPQUFmO0FBQUEsNEJBQ0U7QUFBQSwwQ0FBZSxpQ0FBZjtBQUFBLDZCQUNFO0FBQUEsNENBQWUsOEJBQWY7QUFBQSxnQ0FDRTtBQUFBLDhDQUFlLDBDQUFmO0FBQUEsa0NBQ0U7QUFBQSxnREFBYyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBRSxVQUFaO0FBQUEsbUNBQ0U7QUFBQSxrREFBYSxnQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBUUdoRCxPQUFPLEtBQUssa0JBQVosSUFDREEsT0FBTyxLQUFLLHlCQURYLGdCQUVDO0FBQUEsOENBQWUsc0NBQWY7QUFBQSxpQ0FFRTtBQUFBLGdEQUFlLGlDQUFmO0FBQUEsdUJBRUdDLFVBQVUsQ0FBQ3lCLElBQVgsR0FDR3pCLFVBQVUsQ0FBQ3lCLElBQVgsQ0FBZ0J1QixHQUFoQixDQUFvQixVQUFDQyxHQUFELEVBQU01QixHQUFOLEVBQWM7QUFDaEMsa0NBQ0U7QUFHRSx1QkFBTyxFQUFFLGlCQUFDNkIsS0FBRDtBQUFBLHlCQUFXOUIsVUFBVSxDQUFDNkIsR0FBRyxDQUFDbEIsRUFBTCxDQUFyQjtBQUFBLGlCQUhYO0FBQUEsb0RBQ1ksK0RBRFo7QUFBQSx3Q0FLRTtBQUFBLHNEQUFlLGlFQUFmO0FBQUEseUNBQ0U7QUFBQSx3REFBZSxtQkFBZjtBQUFBLDhCQUNHLENBQUNrQixHQUFHLENBQUNFLFFBQUwsSUFBaUIsQ0FBQ0YsR0FBRyxDQUFDRyxVQUF0QixnQkFDQztBQUVFLHlCQUFHLFlBQUs5QyxNQUFMLHdCQUZMO0FBR0UseUJBQUcsRUFBQyxFQUhOO0FBQUEsMERBQ1k7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURELEdBTUcyQyxHQUFHLENBQUNJLEtBQUosS0FBYzVDLE1BQWQsZ0JBQ0Y7QUFFRSx5QkFBRyxZQUFLSCxNQUFMLHFCQUFzQjJDLEdBQUcsQ0FBQ0UsUUFBMUIsQ0FGTDtBQUdFLHlCQUFHLEVBQUMsRUFITjtBQUFBLDBEQUNZO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERSxnQkFPRjtBQUVFLHlCQUFHLFlBQUs3QyxNQUFMLHFCQUFzQjJDLEdBQUcsQ0FBQ0csVUFBMUIsQ0FGTDtBQUdFLHlCQUFHLEVBQUMsRUFITjtBQUFBLDBEQUNZO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGLGVBNEJFO0FBQUEsc0RBQWUseUNBQWY7QUFBQSwwQ0FDRTtBQUFBLHdEQUFlLG1CQUFmO0FBQUEsK0JBQ0dILEdBQUcsQ0FBQ0ksS0FBSixLQUFjNUMsTUFBZCxnQkFDQztBQUFBLDBEQUFjLHNCQUFkO0FBQUEsZ0NBQ0d3QyxHQUFHLENBQUNLO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERCxnQkFLQztBQUFBLDBEQUFjLHNCQUFkO0FBQUEsZ0NBQ0dMLEdBQUcsQ0FBQ007QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQU5KLEVBV0dOLEdBQUcsQ0FBQ08sTUFBSixLQUFlLENBQWYsZ0JBQ0M7QUFBQSwwREFBYSxnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERCxHQUVHUCxHQUFHLENBQUNPLE1BQUosS0FBZSxDQUFmLGdCQUNGO0FBQUEsMERBQWEsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREUsR0FFQVAsR0FBRyxDQUFDTyxNQUFKLEtBQWUsQ0FBZixnQkFDRjtBQUFBLDBEQUFhLGdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURFLGdCQUdGO0FBQUEsMERBQWEsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQXdCRTtBQUFBLHdEQUFlLG1CQUFmO0FBQUEsOEJBQ0dQLEdBQUcsQ0FBQ08sTUFBSixLQUFlLENBQWYsZ0JBQ0M7QUFBQSwwREFBYyw0QkFBZDtBQUFBLHVDQUNLQyxxRUFBUSxDQUFDUixHQUFHLENBQUNTLE1BQUwsQ0FEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREQsR0FJR1QsR0FBRyxDQUFDTyxNQUFKLEtBQWUsQ0FBZixJQUFvQlAsR0FBRyxDQUFDSSxLQUFKLEtBQWM1QyxNQUFsQyxnQkFDRjtBQUFBLDBEQUFjLDZCQUFkO0FBQUEsd0NBQ01nRCxxRUFBUSxDQUFDUixHQUFHLENBQUNTLE1BQUwsQ0FEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREUsR0FJQVQsR0FBRyxDQUFDTyxNQUFKLEtBQWUsQ0FBZixnQkFDRjtBQUFBLDBEQUFjLCtCQUFkO0FBQUEsd0NBQ01DLHFFQUFRLENBQUNSLEdBQUcsQ0FBQ1MsTUFBTCxDQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERSxHQUlBVCxHQUFHLENBQUNPLE1BQUosS0FBZSxDQUFmLGdCQUNGO0FBQUEsMERBQWMsMkJBQWQ7QUFBQSx3Q0FDTUMscUVBQVEsQ0FBQ1IsR0FBRyxDQUFDUyxNQUFMLENBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURFLGdCQUtGO0FBQUEsMERBQWMsMEJBQWQ7QUFBQSx3Q0FDTUQscUVBQVEsQ0FBQ1IsR0FBRyxDQUFDUyxNQUFMLENBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkE1QkY7QUFBQSxpQkFFT3JDLEdBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQStFRCxhQWhGRCxDQURILEdBa0ZHLEVBcEZOLEVBd0ZHckIsVUFBVSxDQUFDeUIsSUFBWCxHQUNHekIsVUFBVSxDQUFDeUIsSUFBWCxDQUFnQnVCLEdBQWhCLENBQW9CLFVBQUNDLEdBQUQsRUFBTTVCLEdBQU4sRUFBYztBQUNoQyxrQ0FDRTtBQUVFLHVCQUFPLEVBQUUsaUJBQUM2QixLQUFEO0FBQUEseUJBQVc5QixVQUFVLENBQUM2QixHQUFHLENBQUNsQixFQUFMLENBQXJCO0FBQUEsaUJBRlg7QUFBQSxvREFDWSw4QkFEWjtBQUFBLHVDQUtFO0FBQUEsc0RBQWUsMkNBQWY7QUFBQSx5Q0FDRTtBQUFBLHdEQUFlLFdBQWY7QUFBQSwyQ0FDRTtBQUFBLDBEQUFlLGdCQUFmO0FBQUEsOENBQ0U7QUFBQSw0REFBZSxpRUFBZjtBQUFBLCtDQUNFO0FBQUEsOERBQWUsbUJBQWY7QUFBQSxvQ0FDRyxDQUFDa0IsR0FBRyxDQUFDRSxRQUFMLElBQWlCLENBQUNGLEdBQUcsQ0FBQ0csVUFBdEIsZ0JBQ0M7QUFFRSwrQkFBRyxZQUFLOUMsTUFBTCx3QkFGTDtBQUdFLCtCQUFHLEVBQUMsRUFITjtBQUFBLGdFQUNZO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERCxHQU1HMkMsR0FBRyxDQUFDSSxLQUFKLEtBQWM1QyxNQUFkLGdCQUNGO0FBRUUsK0JBQUcsWUFBS0gsTUFBTCxxQkFBc0IyQyxHQUFHLENBQUNFLFFBQTFCLENBRkw7QUFHRSwrQkFBRyxFQUFDLEVBSE47QUFBQSxnRUFDWTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREUsZ0JBT0Y7QUFFRSwrQkFBRyxZQUFLN0MsTUFBTCxxQkFBc0IyQyxHQUFHLENBQUNHLFVBQTFCLENBRkw7QUFHRSwrQkFBRyxFQUFDLEVBSE47QUFBQSxnRUFDWTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERixlQXdCRTtBQUFBLDREQUFlLHlDQUFmO0FBQUEsZ0RBQ0U7QUFBQSw4REFBZSxtQkFBZjtBQUFBLHFDQUNHSCxHQUFHLENBQUNJLEtBQUosS0FBYzVDLE1BQWQsZ0JBQ0M7QUFBQSxnRUFBYyxzQkFBZDtBQUFBLHNDQUNHd0MsR0FBRyxDQUFDSztBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREQsZ0JBS0M7QUFBQSxnRUFBYyxzQkFBZDtBQUFBLHNDQUNHTCxHQUFHLENBQUNNO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FOSixFQVdHTixHQUFHLENBQUNPLE1BQUosS0FBZSxDQUFmLGdCQUNDO0FBQUEsZ0VBQWEsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREQsR0FFR1AsR0FBRyxDQUFDTyxNQUFKLEtBQWUsQ0FBZixnQkFDRjtBQUFBLGdFQUFhLGdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURFLEdBRUFQLEdBQUcsQ0FBQ08sTUFBSixLQUFlLENBQWYsZ0JBQ0Y7QUFBQSxnRUFBYSxnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERSxnQkFHRjtBQUFBLGdFQUFhLGdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsZUFzQkU7QUFBQSw4REFBZSxtQkFBZjtBQUFBLG9DQUNHUCxHQUFHLENBQUNPLE1BQUosS0FBZSxDQUFmLGdCQUNDO0FBQUEsZ0VBQWMsNEJBQWQ7QUFBQSw2Q0FDS0MscUVBQVEsQ0FBQ1IsR0FBRyxDQUFDUyxNQUFMLENBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURELEdBSUdULEdBQUcsQ0FBQ08sTUFBSixLQUFlLENBQWYsSUFDRlAsR0FBRyxDQUFDSSxLQUFKLEtBQWM1QyxNQURaLGdCQUVGO0FBQUEsZ0VBQWMsNkJBQWQ7QUFBQSw4Q0FDTWdELHFFQUFRLENBQUNSLEdBQUcsQ0FBQ1MsTUFBTCxDQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FGRSxHQUtBVCxHQUFHLENBQUNPLE1BQUosS0FBZSxDQUFmLGdCQUNGO0FBQUEsZ0VBQWMsK0JBQWQ7QUFBQSw4Q0FDTUMscUVBQVEsQ0FBQ1IsR0FBRyxDQUFDUyxNQUFMLENBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURFLEdBSUFULEdBQUcsQ0FBQ08sTUFBSixLQUFlLENBQWYsZ0JBQ0Y7QUFBQSxnRUFBYywyQkFBZDtBQUFBLDhDQUNNQyxxRUFBUSxDQUFDUixHQUFHLENBQUNTLE1BQUwsQ0FEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREUsZ0JBS0Y7QUFBQSxnRUFBYywwQkFBZDtBQUFBLDhDQUNNRCxxRUFBUSxDQUFDUixHQUFHLENBQUNTLE1BQUwsQ0FEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0F0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGLGlCQUdPckMsR0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBb0ZELGFBckZELENBREgsR0F1RkcsRUEvS047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRCxnQkF1TEM7QUFBQSw4Q0FBZSwrQkFBZjtBQUFBLGlDQUNFO0FBQUEsZ0RBQWUseUJBQWY7QUFBQSxtQ0FDRTtBQUFBLGtEQUFlLEVBQWY7QUFBQSxzQ0FDRTtBQUNFLG1CQUFHLEVBQUVzQyxtQkFBTyxDQUFDLGdGQUFELENBRGQ7QUFFRSxtQkFBRyxFQUFDLEVBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFLRTtBQUFBLG9EQUFjLHVCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxGLGVBTUU7QUFBQSxvREFBYSxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9MSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFvTkUscUVBQUMsZ0VBQUQ7QUFDRSxVQUFJLEVBQUV6QyxJQURSO0FBRUUsYUFBTyxFQUFFVyxXQUZYO0FBR0UseUJBQWdCLG9CQUhsQjtBQUlFLDBCQUFpQiwwQkFKbkI7QUFBQSxnQkFNR3pCLFNBQVMsZ0JBQ1I7QUFBSyxhQUFLLEVBQUVhLFVBQVo7QUFBQSw2Q0FBbUNGLE9BQU8sQ0FBQ2xDLEtBQTNDO0FBQUEsZ0NBQ0U7QUFBQSw4Q0FBZSxZQUFmO0FBQUEsaUNBQ0U7QUFBQSxnREFBZSxXQUFmO0FBQUEsbUNBQ0U7QUFBQSxrREFBZSxxQkFBZjtBQUFBLHFDQUVFO0FBQUEsb0RBQWUsb0JBQWY7QUFBQSx3Q0FDRTtBQUFBLHNEQUFlLHdCQUFmO0FBQUEseUNBQ0U7QUFBQSx3REFBZ0IsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBSUU7QUFBQSxzREFBYyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKRixlQUtFO0FBQUEsc0RBQWEsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBY1MsR0FkVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUSxnQkFrQlI7QUFBSyxhQUFLLEVBQUVvQyxVQUFaO0FBQUEsNkNBQW1DRixPQUFPLENBQUNsQyxLQUEzQztBQUFBLGdDQUNFO0FBQUEsOENBQWUsVUFBZjtBQUFBLGtDQUNFO0FBQUEsZ0RBQWUsT0FBZjtBQUFBLHNCQUNHcUIsYUFBYSxDQUFDbUQsS0FBZCxLQUF3QjVDLE1BQXhCLGdCQUNDO0FBRUUsaUJBQUcsWUFBS0gsTUFBTCxxQkFBc0JKLGFBQWEsQ0FBQ2lELFFBQXBDLENBRkw7QUFBQSxrREFDWTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZ0JBTUM7QUFFRSxpQkFBRyxZQUFLN0MsTUFBTCxxQkFBc0JKLGFBQWEsQ0FBQ2tELFVBQXBDLENBRkw7QUFBQSxrREFDWTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBY0U7QUFBQSxnREFBZSxZQUFmO0FBQUEsbUNBQ0U7QUFBQSxrREFBZSxtQkFBZjtBQUFBLHlCQUNHbEQsYUFBYSxDQUFDbUQsS0FBZCxLQUF3QjVDLE1BQXhCLGdCQUNDO0FBQUEsb0RBQWMsa0JBQWQ7QUFBQSwwQkFDR1AsYUFBYSxDQUFDb0Q7QUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxnQkFLQztBQUFBLG9EQUFjLGtCQUFkO0FBQUEsMEJBQ0dwRCxhQUFhLENBQUNxRDtBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5KLEVBV0dyRCxhQUFhLENBQUNtRCxLQUFkLEtBQXdCNUMsTUFBeEIsZ0JBQ0M7QUFBQSxvREFBYSxnQkFBYjtBQUFBLDBCQUErQlAsYUFBYSxDQUFDMEQ7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxnQkFHQztBQUFBLG9EQUFhLGdCQUFiO0FBQUEsMEJBQStCMUQsYUFBYSxDQUFDMkQ7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQW1DRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQ0YsZUFvQ0U7QUFBQSw4Q0FBZSxXQUFmO0FBQUEsa0NBQ0U7QUFBQSxnREFBZSxxQ0FBZjtBQUFBLG9DQUNFO0FBQUEsa0RBQWMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVHM0QsYUFBYSxDQUFDc0QsTUFBZCxLQUF5QixDQUF6QixnQkFDQztBQUFBLGtEQUFjLGdDQUFkO0FBQUEsZ0NBQ01DLHFFQUFRLENBQUN2RCxhQUFhLENBQUN3RCxNQUFmLENBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELEdBSUd4RCxhQUFhLENBQUNzRCxNQUFkLEtBQXlCLENBQXpCLElBQ0Z0RCxhQUFhLENBQUNtRCxLQUFkLEtBQXdCNUMsTUFEdEIsZ0JBRUY7QUFBQSxrREFBYyxpQ0FBZDtBQUFBLGdDQUNNZ0QscUVBQVEsQ0FBQ3ZELGFBQWEsQ0FBQ3dELE1BQWYsQ0FEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkUsR0FLQXhELGFBQWEsQ0FBQ3NELE1BQWQsS0FBeUIsQ0FBekIsZ0JBQ0Y7QUFBQSxrREFBYyxtQ0FBZDtBQUFBLGdDQUNNQyxxRUFBUSxDQUFDdkQsYUFBYSxDQUFDd0QsTUFBZixDQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERSxHQUlBeEQsYUFBYSxDQUFDc0QsTUFBZCxLQUF5QixDQUF6QixnQkFDRjtBQUFBLGtEQUFjLCtCQUFkO0FBQUEsK0JBQ0tDLHFFQUFRLENBQUN2RCxhQUFhLENBQUN3RCxNQUFmLENBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURFLGdCQUtGO0FBQUEsa0RBQWMsOEJBQWQ7QUFBQSxnQ0FDTUQscUVBQVEsQ0FBQ3ZELGFBQWEsQ0FBQ3dELE1BQWYsQ0FEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQTBCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkExQkYsZUEyQkU7QUFBQSxnREFBZSxxQ0FBZjtBQUFBLG9DQUNFO0FBQUEsa0RBQWMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUEsa0RBQWMsS0FBZDtBQUFBLHdCQUFxQmQsVUFBVSxDQUFDMUMsYUFBYSxDQUFDNEQsVUFBZjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEzQkYsZUErQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBL0JGLGVBZ0NFO0FBQUEsZ0RBQWUsTUFBZjtBQUFBLG9DQUNFO0FBQUEsa0RBQWMsb0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFBLGtEQUFjLEtBQWQ7QUFBQSx3QkFBcUI1RCxhQUFhLENBQUM2RDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQ0YsZUFvQ0U7QUFBQSxnREFBZSxNQUFmO0FBQUEsdUJBQ0c3RCxhQUFhLENBQUNzRCxNQUFkLEtBQXlCLENBQXpCLGdCQUNDO0FBQUEsa0RBQWMsb0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsR0FHQyxFQUpKLEVBTUd0RCxhQUFhLENBQUNzRCxNQUFkLEtBQXlCLENBQXpCLElBQ0R0RCxhQUFhLENBQUNtRCxLQUFkLEtBQXdCNUMsTUFEdkIsZ0JBRUM7QUFDRSxxQkFBTyxFQUFFLGlCQUFDdUQsQ0FBRDtBQUFBLHVCQUFPckIsY0FBYyxDQUFDekMsYUFBYSxDQUFDNkIsRUFBZixDQUFyQjtBQUFBLGVBRFg7QUFBQSxrREFFWSxxQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRCxHQVNDLEVBZkosRUFpQkc3QixhQUFhLENBQUNzRCxNQUFkLEtBQXlCLENBQXpCLElBQ0R0RCxhQUFhLENBQUNtRCxLQUFkLEtBQXdCNUMsTUFEdkIsZ0JBRUM7QUFDRSxxQkFBTyxFQUFFLGlCQUFDdUQsQ0FBRDtBQUFBLHVCQUFPbEMsUUFBUSxDQUFDNUIsYUFBYSxDQUFDNkIsRUFBZixDQUFmO0FBQUEsZUFEWDtBQUFBLGtEQUVZLGlCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZELEdBU0MsRUExQkosRUE2Qkc3QixhQUFhLENBQUNzRCxNQUFkLEtBQXlCLENBQXpCLElBQ0R0RCxhQUFhLENBQUNtRCxLQUFkLEtBQXdCNUMsTUFEdkIsZ0JBRUM7QUFDRSxxQkFBTyxFQUFFLGlCQUFDdUQsQ0FBRDtBQUFBLHVCQUFPdEIsWUFBWSxDQUFDeEMsYUFBYSxDQUFDNkIsRUFBZixDQUFuQjtBQUFBLGVBRFg7QUFBQSxrREFFWSxpQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRCxHQVNDLEVBdENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1aRDs7R0F2aEJRdEMsa0I7VUFDVUUsdUQsRUFDZUMsdUQsRUFpQmhCbEIsUzs7O0tBbkJUZSxrQjtBQXloQk1BLGlGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC5jNWQ4NjMyYjA0MTMwZDQwMWM2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgdG9SdXBpYWggZnJvbSBcIi4uLy4uL2hlbHBlcnMvY3VyZW5jeVRvSURSXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0QWxsSGlzdG9yeSxcclxuICBnZXREZXRhaWxIaXN0b3J5LFxyXG59IGZyb20gXCIuLi8uLi9jb25maWdzL3JlZHV4L2FjdGlvbnMvaGlzdG9yeVwiO1xyXG5cclxuLy8gbW9kYWxcclxuaW1wb3J0IE1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01vZGFsXCI7XHJcblxyXG5mdW5jdGlvbiByYW5kKCkge1xyXG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyMCkgLSAxMDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TW9kYWxTdHlsZSgpIHtcclxuICBjb25zdCB0b3AgPSA1MDtcclxuICBjb25zdCBsZWZ0ID0gNTA7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0b3A6IGAke3RvcH0lYCxcclxuICAgIGxlZnQ6IGAke2xlZnR9JWAsXHJcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoLSR7dG9wfSUsIC0ke2xlZnR9JSlgLFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHBhcGVyOiB7XHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgd2lkdGg6IDQwMCxcclxuICAgIGhlaWd0aDogNTAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICBib3JkZXI6IFwiMnB4IHNvbGlkICMwMDBcIixcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcbiAgfSxcclxufSkpO1xyXG4vLyBtb2RhbFxyXG5cclxuZnVuY3Rpb24gVHJhbnNhY3Rpb25IaXN0b3J5KCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG1lc3NhZ2UsIGFsbEhpc3RvcnkgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaGlzdG9yeSk7XHJcbiAgY29uc3QgW2RldGFpbEhpc3RvcnksIHNldERldGFpbEhpc3RvcnldID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHVybEltZyA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9JTUFHRV9OT19TTEFTSDtcclxuICBjb25zdCBVUkxBUEkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkxfQVBJX1dJVEhfU0xBU0g7XHJcblxyXG4gIGxldCBpZFVzZXIsIHRva2VuO1xyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGlkVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIik7XHJcbiAgICB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZ2V0QWxsSGlzdG9yeShpZFVzZXIsIDEwKSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcbiAgLy8gY29uc29sZS5sb2coYWxsSGlzdG9yeSk7XHJcbiAgLy8gbW9kYWxcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW21vZGFsU3R5bGVdID0gUmVhY3QudXNlU3RhdGUoZ2V0TW9kYWxTdHlsZSk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKGlkeCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGRpc3BhdGNoKGdldERldGFpbEhpc3RvcnkoaWR4KSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldERldGFpbEhpc3RvcnkocmVzLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJpbmlcIiwgZGF0YSk7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYnRhY2NlcHQgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkLFxyXG4gICAgICB0b2tlbixcclxuICAgIH07XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGAke1VSTEFQSX10cmFuc2ZlclN1Y2Nlc3MvJHtpZH1gLCBkYXRhLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgdGltZXI6IDE1MDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgIHRpdGxlOiBcIkZhaWxlZFwiLFxyXG4gICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgdGltZXI6IDE1MDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgYnRjYW5jZWxVc2VyID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZCxcclxuICAgICAgdG9rZW4sXHJcbiAgICB9O1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChgJHtVUkxBUEl9dHJhbnNmZXJDYW5jZWwvJHtpZH1gLCBkYXRhLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgdGltZXI6IDE1MDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgIHRpdGxlOiBcIkZhaWxlZFwiLFxyXG4gICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgdGltZXI6IDE1MDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGJ0Y2FuY2VsVGFyZ2V0ID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZCxcclxuICAgICAgdG9rZW4sXHJcbiAgICB9O1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChgJHtVUkxBUEl9dHJhbnNmZXJDYW5jZWwvJHtpZH1gLCBkYXRhLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgdGltZXI6IDE1MDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgIHRpdGxlOiBcIkZhaWxlZFwiLFxyXG4gICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgdGltZXI6IDE1MDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZVRpbWUgPSAodGltZSkgPT4ge1xyXG4gICAgcmV0dXJuIE1vbWVudCh0aW1lKS5mb3JtYXQoXCJNTU1NIERELCBZWVlZIC0gSEgubW1cIik7XHJcbiAgfTtcclxuXHJcbiAgLy8gZW5kIG1vZGFsXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3cgYmctMCBib3JkZXItMCBoLTEwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gcGItMCBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+VHJhbnNhY3Rpb24gSGlzdG9yeTwvaDU+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2hpc3RvcnlcIn0+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ibHVlIHRleHQtZGVjb3JhdGlvbi1ub25lXCI+U2VlIEFsbDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPCEtLSBJdGVtIC0tPiAqL31cclxuICAgICAgICAgIHttZXNzYWdlICE9PSBcIkRhdGEgdW5hdmFpbGFibGVcIiB8fFxyXG4gICAgICAgICAgbWVzc2FnZSA9PT0gXCJHZXQgYWxsIGhpc3Rvcnkgc3VjY2Vzc1wiID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS0yIGgtdHJhbnMgb3ZlcmZsb3ctYXV0b1wiPlxyXG4gICAgICAgICAgICAgIHsvKiBMb29waW5nIGRpc2luaSAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFyayB0ZXh0LWRlY29yYXRpb24tbm9uZSBcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIGZvciBkZXNrdG9wIC0tPiAqL31cclxuICAgICAgICAgICAgICAgIHthbGxIaXN0b3J5LmRhdGFcclxuICAgICAgICAgICAgICAgICAgPyBhbGxIaXN0b3J5LmRhdGEubWFwKChpdG0sIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtbm9uZSBkLWxnLWZsZXggcm93IG5vLWd1dHRlcnMgbWluLWl0ZW0gbWItMiBweS1hdXRvIHBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gaGFuZGxlT3BlbihpdG0uaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBjb2wtc20tMyBjb2wtbWQtMiBpbWdDZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpdG0udG9faW1hZ2UgfHwgIWl0bS5mcm9tX2ltYWdlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ0NlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3VybEltZ30vaW1hZ2VzL2RlZmF1bHQucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ0NlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3VybEltZ30vaW1hZ2VzLyR7aXRtLnRvX2ltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nQ2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvJHtpdG0uZnJvbV9pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZC1mbGV4IG1sLTIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0bS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0bS50b19uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLmZyb21fbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0bS5zdGF0dXMgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5QZW5kaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnN0YXR1cyA9PT0gMiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPlRyYW5zZmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnN0YXR1cyA9PT0gMyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPkNhbmNlbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPlRvcCBVcDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gU0hPVyBCVVRUT04gLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBzaG93IHRhcmdldCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0bS5zdGF0dXMgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYy1wZW5kaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBScHt0b1J1cGlhaChpdG0uYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnN0YXR1cyA9PT0gMiAmJiBpdG0udG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBjLXRyYW5zZmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYy1jYW5jZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJwIHt0b1J1cGlhaChpdG0uYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGMtdG9wdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtScHt0b1J1cGlhaChpdG0uYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gRW5kIG9mIGZvciBkZXNrdG9wIC0tPiAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIEZvciBtb2JpbGUhIC0tPiAqL31cclxuICAgICAgICAgICAgICAgIHthbGxIaXN0b3J5LmRhdGFcclxuICAgICAgICAgICAgICAgICAgPyBhbGxIaXN0b3J5LmRhdGEubWFwKChpdG0sIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBkLWxnLW5vbmUgcm93IHBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gaGFuZGxlT3BlbihpdG0uaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHctMTAwIG1iLTIgc2hhZG93IGJvcmRlci0wIGgtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgY29sLXNtLTMgY29sLW1kLTIgaW1nQ2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaXRtLnRvX2ltYWdlIHx8ICFpdG0uZnJvbV9pbWFnZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy9kZWZhdWx0LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0udG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2l0bS50b19pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ0NlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3VybEltZ30vaW1hZ2VzLyR7aXRtLmZyb21faW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleCBtbC0yIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0udG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0udG9fbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0bS5mcm9tX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0uc3RhdHVzID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+UGVuZGluZzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5UcmFuc2ZlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5DYW5jZWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5Ub3AgVXA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0bS5zdGF0dXMgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYy1wZW5kaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBScHt0b1J1cGlhaChpdG0uYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnN0YXR1cyA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0bS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGMtdHJhbnNmZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1ScHt0b1J1cGlhaChpdG0uYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnN0YXR1cyA9PT0gMiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtScHt0b1J1cGlhaChpdG0uYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnN0YXR1cyA9PT0gMyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBjLWNhbmNlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUnAge3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYy10b3B1cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1Jwe3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTIgZC1mbGV4IGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlciB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbm90cmFuc2FjdGlvbi5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbXktM1wiPkl0J3MgQ2xlYXIhPC9oND5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFlvdSd2ZSBuZXZlciBkb25lIGEgdHJhbnNhY3Rpb24gc28gZmFyXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgey8qIDwhLS0gRW5kIE9mIEl0ZW0gLS0+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzaW1wbGUtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e21vZGFsU3R5bGV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93ICB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LWF1dG8gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIFdoZW4gbG9hZGluZyovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1ncm93IHRleHQtYmx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5XYWl0IGEgbW9tZW50Li4uPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPkxvYWRpbmcgcHJvY2VzczwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e21vZGFsU3R5bGV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHB4LTVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VIaXN0b3J5XCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3VybEltZ30vaW1hZ2VzLyR7ZGV0YWlsSGlzdG9yeS50b19pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlSGlzdG9yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2RldGFpbEhpc3RvcnkuZnJvbV9pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAge2RldGFpbEhpc3RvcnkudG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2RldGFpbEhpc3RvcnkudG9fbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS5mcm9tX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj57ZGV0YWlsSGlzdG9yeS50b19waG9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj57ZGV0YWlsSGlzdG9yeS5mcm9tX3Bob25lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMFwiPkFtb3VudDwvaDY+XHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTAgYy1wZW5kaW5nIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICArUnB7dG9SdXBpYWgoZGV0YWlsSGlzdG9yeS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgKSA6IGRldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAyICYmXHJcbiAgICAgICAgICAgICAgICAgIGRldGFpbEhpc3RvcnkudG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMCBjLXRyYW5zZmVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAtUnB7dG9SdXBpYWgoZGV0YWlsSGlzdG9yeS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgKSA6IGRldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAyID8gKFxyXG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wIHRleHQtc3VjY2VzcyBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgK1Jwe3RvUnVwaWFoKGRldGFpbEhpc3RvcnkuYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICkgOiBkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMyA/IChcclxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMCBjLWNhbmNlbCBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUnB7dG9SdXBpYWgoZGV0YWlsSGlzdG9yeS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMCBjLXRvcHVwIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICArUnB7dG9SdXBpYWgoZGV0YWlsSGlzdG9yeS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wXCI+RGF0ZSAmIFRpbWU8L2g2PlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMFwiPntjaGFuZ2VUaW1lKGRldGFpbEhpc3RvcnkuY3JlYXRlZF9hdCl9PC9oNj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtIGZvbnQtd2VpZ2h0LWJvbGRcIj5Ob3RlcyA6PC9oNj5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTBcIj57ZGV0YWlsSGlzdG9yeS5ub3Rlc308L2g2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAge2RldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibSBmb250LXdlaWdodC1ib2xkXCI+U2VsZWN0aW9uPC9oNj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDEgJiZcclxuICAgICAgICAgICAgICAgIGRldGFpbEhpc3RvcnkudG9faWQgPT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBidGNhbmNlbFRhcmdldChkZXRhaWxIaXN0b3J5LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBtci0yXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlamVjdFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDEgJiZcclxuICAgICAgICAgICAgICAgIGRldGFpbEhpc3RvcnkudG9faWQgPT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBidGFjY2VwdChkZXRhaWxIaXN0b3J5LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQWNjZXB0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDEgJiZcclxuICAgICAgICAgICAgICAgIGRldGFpbEhpc3RvcnkudG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBidGNhbmNlbFVzZXIoZGV0YWlsSGlzdG9yeS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLnNoYWRvdyB7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdi5iZy0wLmNhcmQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaW1nQ2VudGVyIHtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWluLWl0ZW0ge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGl2LmNhcmQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmMtdHJhbnNmZXIsXHJcbiAgICAgICAgICAuYy1jYW5jZWwge1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmMtcGVuZGluZyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYy10b3B1cCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjM3OWY0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmgtY29udGVudCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmltYWdlSGlzdG9yeSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTU5cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oLXRyYW5zIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb25IaXN0b3J5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9