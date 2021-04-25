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
  }, [dispatch]);
  console.log(allHistory); // modal

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
          className: "jsx-1519109956" + " " + "row",
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
      children: "@media screen and (max-width:992px){.shadow.jsx-1519109956{box-shadow:none !important;}div.bg-0.card.jsx-1519109956{background-color:transparent;}}.imgCenter.jsx-1519109956{object-fit:cover;border-radius:15px;height:60px;width:60px;}.min-item.jsx-1519109956{min-height:75px;}div.card.jsx-1519109956{border-radius:15px;}.c-transfer.jsx-1519109956,.c-cancel.jsx-1519109956{color:red;}.c-pending.jsx-1519109956{color:orange;}.c-topup.jsx-1519109956{color:#6379f4;}.h-content.jsx-1519109956{height:100px;}.imageHistory.jsx-1519109956{height:159px;width:100%;object-fit:cover;border-radius:15px;}.h-trans.jsx-1519109956{height:260px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxUdXRvcmlhbCBXZWJcXFdlZWsgMTBcXFp3YWxsZXQtRnJvbnRlbmRcXGNvbXBvbmVudHNcXG1vZHVsZVxcVHJhbnNhY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbWhCUyxBQUkwQyxBQUdFLEFBSWQsQUFNRCxBQUdHLEFBSVQsQUFHRyxBQUdDLEFBR0QsQUFJQSxBQU1BLFVBbEJmLEdBR0EsQUFNQSxBQUlhLEFBTWIsQ0FiQSxFQWJBLENBTnFCLEVBU3JCLEtBa0JtQixHQWxDakIsRUFHQSxPQUtZLEtBMkJPLE9BMUJSLFdBQ2IsQ0EwQkEiLCJmaWxlIjoiRDpcXFR1dG9yaWFsIFdlYlxcV2VlayAxMFxcWndhbGxldC1Gcm9udGVuZFxcY29tcG9uZW50c1xcbW9kdWxlXFxUcmFuc2FjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHRvUnVwaWFoIGZyb20gXCIuLi8uLi9oZWxwZXJzL2N1cmVuY3lUb0lEUlwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIGdldEFsbEhpc3RvcnksXHJcbiAgZ2V0RGV0YWlsSGlzdG9yeSxcclxufSBmcm9tIFwiLi4vLi4vY29uZmlncy9yZWR1eC9hY3Rpb25zL2hpc3RvcnlcIjtcclxuXHJcbi8vIG1vZGFsXHJcbmltcG9ydCBNb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbFwiO1xyXG5cclxuZnVuY3Rpb24gcmFuZCgpIHtcclxuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjApIC0gMTA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1vZGFsU3R5bGUoKSB7XHJcbiAgY29uc3QgdG9wID0gNTA7XHJcbiAgY29uc3QgbGVmdCA9IDUwO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdG9wOiBgJHt0b3B9JWAsXHJcbiAgICBsZWZ0OiBgJHtsZWZ0fSVgLFxyXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC0ke3RvcH0lLCAtJHtsZWZ0fSUpYCxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBwYXBlcjoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHdpZHRoOiA0MDAsXHJcbiAgICBoZWlndGg6IDUwMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjMDAwXCIsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG4gIH0sXHJcbn0pKTtcclxuLy8gbW9kYWxcclxuXHJcbmZ1bmN0aW9uIFRyYW5zYWN0aW9uSGlzdG9yeSgpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZXNzYWdlLCBhbGxIaXN0b3J5IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmhpc3RvcnkpO1xyXG4gIGNvbnN0IFtkZXRhaWxIaXN0b3J5LCBzZXREZXRhaWxIaXN0b3J5XSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB1cmxJbWcgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkxfSU1BR0VfTk9fU0xBU0g7XHJcbiAgY29uc3QgVVJMQVBJID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMX0FQSV9XSVRIX1NMQVNIO1xyXG5cclxuICBsZXQgaWRVc2VyLCB0b2tlbjtcclxuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICBpZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpO1xyXG4gICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGdldEFsbEhpc3RvcnkoaWRVc2VyLCAxMCkpO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG4gIGNvbnNvbGUubG9nKGFsbEhpc3RvcnkpO1xyXG4gIC8vIG1vZGFsXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFttb2RhbFN0eWxlXSA9IFJlYWN0LnVzZVN0YXRlKGdldE1vZGFsU3R5bGUpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9IChpZHgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBkaXNwYXRjaChnZXREZXRhaWxIaXN0b3J5KGlkeCkpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXREZXRhaWxIaXN0b3J5KHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiaW5pXCIsIGRhdGEpO1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGJ0YWNjZXB0ID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZCxcclxuICAgICAgdG9rZW4sXHJcbiAgICB9O1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChgJHtVUkxBUEl9dHJhbnNmZXJTdWNjZXNzLyR7aWR9YCwgZGF0YSwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJGYWlsZWRcIixcclxuICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGJ0Y2FuY2VsVXNlciA9IChpZCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWQsXHJcbiAgICAgIHRva2VuLFxyXG4gICAgfTtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYCR7VVJMQVBJfXRyYW5zZmVyQ2FuY2VsLyR7aWR9YCwgZGF0YSwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJGYWlsZWRcIixcclxuICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBidGNhbmNlbFRhcmdldCA9IChpZCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWQsXHJcbiAgICAgIHRva2VuLFxyXG4gICAgfTtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYCR7VVJMQVBJfXRyYW5zZmVyQ2FuY2VsLyR7aWR9YCwgZGF0YSwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJGYWlsZWRcIixcclxuICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VUaW1lID0gKHRpbWUpID0+IHtcclxuICAgIHJldHVybiBNb21lbnQodGltZSkuZm9ybWF0KFwiTU1NTSBERCwgWVlZWSAtIEhILm1tXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGVuZCBtb2RhbFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLTEwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2hhZG93IGJnLTAgYm9yZGVyLTAgaC0xMDBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHBiLTAgbWItM1wiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlRyYW5zYWN0aW9uIEhpc3Rvcnk8L2g1PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9oaXN0b3J5XCJ9PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYmx1ZSB0ZXh0LWRlY29yYXRpb24tbm9uZVwiPlNlZSBBbGw8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDwhLS0gSXRlbSAtLT4gKi99XHJcbiAgICAgICAgICB7bWVzc2FnZSAhPT0gXCJEYXRhIHVuYXZhaWxhYmxlXCIgfHxcclxuICAgICAgICAgIG1lc3NhZ2UgPT09IFwiR2V0IGFsbCBoaXN0b3J5IHN1Y2Nlc3NcIiA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktMiBoLXRyYW5zIG92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgICAgICAgICB7LyogTG9vcGluZyBkaXNpbmkgKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgdGV4dC1kZWNvcmF0aW9uLW5vbmUgXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBmb3IgZGVza3RvcCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICB7YWxsSGlzdG9yeS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgID8gYWxsSGlzdG9yeS5kYXRhLm1hcCgoaXRtLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLW5vbmUgZC1sZy1mbGV4IHJvdyBuby1ndXR0ZXJzIG1pbi1pdGVtIG1iLTIgcHktYXV0byBwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGhhbmRsZU9wZW4oaXRtLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgY29sLXNtLTMgY29sLW1kLTIgaW1nQ2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaXRtLnRvX2ltYWdlIHx8ICFpdG0uZnJvbV9pbWFnZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy9kZWZhdWx0LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0udG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2l0bS50b19pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ0NlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3VybEltZ30vaW1hZ2VzLyR7aXRtLmZyb21faW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleCBtbC0yIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0udG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0udG9fbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0bS5mcm9tX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0uc3RhdHVzID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+UGVuZGluZzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5UcmFuc2ZlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5DYW5jZWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5Ub3AgVXA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIFNIT1cgQlVUVE9OIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gc2hvdyB0YXJnZXQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0uc3RhdHVzID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGMtcGVuZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDIgJiYgaXRtLnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYy10cmFuc2ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLVJwe3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0uc3RhdHVzID09PSAyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIHRleHQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1Jwe3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0uc3RhdHVzID09PSAzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGMtY2FuY2VsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBScCB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBjLXRvcHVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIEVuZCBvZiBmb3IgZGVza3RvcCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBGb3IgbW9iaWxlISAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICB7YWxsSGlzdG9yeS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgID8gYWxsSGlzdG9yeS5kYXRhLm1hcCgoaXRtLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggZC1sZy1ub25lIHJvdyBwb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGhhbmRsZU9wZW4oaXRtLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB3LTEwMCBtYi0yIHNoYWRvdyBib3JkZXItMCBoLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGNvbC1zbS0zIGNvbC1tZC0yIGltZ0NlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWl0bS50b19pbWFnZSB8fCAhaXRtLmZyb21faW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nQ2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvZGVmYXVsdC5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nQ2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvJHtpdG0udG9faW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2l0bS5mcm9tX2ltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXggbWwtMiBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLnRvX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0uZnJvbV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLnN0YXR1cyA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPlBlbmRpbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0uc3RhdHVzID09PSAyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+VHJhbnNmZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0uc3RhdHVzID09PSAzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+Q2FuY2VsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+VG9wIFVwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0uc3RhdHVzID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGMtcGVuZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdG0udG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBjLXRyYW5zZmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYy1jYW5jZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJwIHt0b1J1cGlhaChpdG0uYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGMtdG9wdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtScHt0b1J1cGlhaChpdG0uYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0yIGQtZmxleCBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXIgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL25vdHJhbnNhY3Rpb24ucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG15LTNcIj5JdCdzIENsZWFyITwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBZb3UndmUgbmV2ZXIgZG9uZSBhIHRyYW5zYWN0aW9uIHNvIGZhclxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHsvKiA8IS0tIEVuZCBPZiBJdGVtIC0tPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwic2ltcGxlLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIHtpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXttb2RhbFN0eWxlfSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyAgdy0xMDBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS1hdXRvIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBXaGVuIGxvYWRpbmcqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItZ3JvdyB0ZXh0LWJsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+V2FpdCBhIG1vbWVudC4uLjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5Mb2FkaW5nIHByb2Nlc3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXttb2RhbFN0eWxlfSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZUhpc3RvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvJHtkZXRhaWxIaXN0b3J5LnRvX2ltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VIaXN0b3J5XCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3VybEltZ30vaW1hZ2VzLyR7ZGV0YWlsSGlzdG9yeS5mcm9tX2ltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS50b19uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LmZyb21fbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2RldGFpbEhpc3RvcnkudG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPntkZXRhaWxIaXN0b3J5LnRvX3Bob25lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPntkZXRhaWxIaXN0b3J5LmZyb21fcGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wXCI+QW1vdW50PC9oNj5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMCBjLXBlbmRpbmcgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICtScHt0b1J1cGlhaChkZXRhaWxIaXN0b3J5LmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICApIDogZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDIgJiZcclxuICAgICAgICAgICAgICAgICAgZGV0YWlsSGlzdG9yeS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wIGMtdHJhbnNmZXIgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIC1ScHt0b1J1cGlhaChkZXRhaWxIaXN0b3J5LmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICApIDogZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDIgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTAgdGV4dC1zdWNjZXNzIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICArUnB7dG9SdXBpYWgoZGV0YWlsSGlzdG9yeS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgKSA6IGRldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAzID8gKFxyXG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wIGMtY2FuY2VsIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICBScHt0b1J1cGlhaChkZXRhaWxIaXN0b3J5LmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wIGMtdG9wdXAgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICtScHt0b1J1cGlhaChkZXRhaWxIaXN0b3J5LmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTBcIj5EYXRlICYgVGltZTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wXCI+e2NoYW5nZVRpbWUoZGV0YWlsSGlzdG9yeS5jcmVhdGVkX2F0KX08L2g2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0gZm9udC13ZWlnaHQtYm9sZFwiPk5vdGVzIDo8L2g2PlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMFwiPntkZXRhaWxIaXN0b3J5Lm5vdGVzfTwvaDY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtIGZvbnQtd2VpZ2h0LWJvbGRcIj5TZWxlY3Rpb248L2g2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgZGV0YWlsSGlzdG9yeS50b19pZCA9PT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGJ0Y2FuY2VsVGFyZ2V0KGRldGFpbEhpc3RvcnkuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVqZWN0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgZGV0YWlsSGlzdG9yeS50b19pZCA9PT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGJ0YWNjZXB0KGRldGFpbEhpc3RvcnkuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBBY2NlcHRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgZGV0YWlsSGlzdG9yeS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGJ0Y2FuY2VsVXNlcihkZXRhaWxIaXN0b3J5LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAuc2hhZG93IHtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2LmJnLTAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pbWdDZW50ZXIge1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5taW4taXRlbSB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkaXYuY2FyZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYy10cmFuc2ZlcixcclxuICAgICAgICAgIC5jLWNhbmNlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYy1wZW5kaW5nIHtcclxuICAgICAgICAgICAgY29sb3I6IG9yYW5nZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jLXRvcHVwIHtcclxuICAgICAgICAgICAgY29sb3I6ICM2Mzc5ZjQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaC1jb250ZW50IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaW1hZ2VIaXN0b3J5IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTlweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmgtdHJhbnMge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFuc2FjdGlvbkhpc3Rvcnk7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Tutorial Web\\\\Week 10\\\\Zwallet-Frontend\\\\components\\\\module\\\\Transaction.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2R1bGUvVHJhbnNhY3Rpb24uanMiXSwibmFtZXMiOlsicmFuZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImdldE1vZGFsU3R5bGUiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ3RoIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwicGFkZGluZyIsInNwYWNpbmciLCJUcmFuc2FjdGlvbkhpc3RvcnkiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImhpc3RvcnkiLCJtZXNzYWdlIiwiYWxsSGlzdG9yeSIsInVzZVN0YXRlIiwiZGV0YWlsSGlzdG9yeSIsInNldERldGFpbEhpc3RvcnkiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwidXJsSW1nIiwicHJvY2VzcyIsIlVSTEFQSSIsImlkVXNlciIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZUVmZmVjdCIsImdldEFsbEhpc3RvcnkiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsIlJlYWN0IiwibW9kYWxTdHlsZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlT3BlbiIsImlkeCIsImdldERldGFpbEhpc3RvcnkiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsImhhbmRsZUNsb3NlIiwiYnRhY2NlcHQiLCJpZCIsImF4aW9zIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsInJlc3BvbnNlIiwiU3dhbCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwiYnRjYW5jZWxVc2VyIiwiYnRjYW5jZWxUYXJnZXQiLCJjaGFuZ2VUaW1lIiwidGltZSIsIk1vbWVudCIsImZvcm1hdCIsIm1hcCIsIml0bSIsImV2ZW50IiwidG9faW1hZ2UiLCJmcm9tX2ltYWdlIiwidG9faWQiLCJ0b19uYW1lIiwiZnJvbV9uYW1lIiwic3RhdHVzIiwidG9SdXBpYWgiLCJhbW91bnQiLCJyZXF1aXJlIiwidG9fcGhvbmUiLCJmcm9tX3Bob25lIiwiY3JlYXRlZF9hdCIsIm5vdGVzIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBTUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNkLFNBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsSUFBaUMsRUFBeEM7QUFDRDs7QUFFRCxTQUFTQyxhQUFULEdBQXlCO0FBQ3ZCLE1BQU1DLEdBQUcsR0FBRyxFQUFaO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLEVBQWI7QUFFQSxTQUFPO0FBQ0xELE9BQUcsWUFBS0EsR0FBTCxNQURFO0FBRUxDLFFBQUksWUFBS0EsSUFBTCxNQUZDO0FBR0xDLGFBQVMsdUJBQWdCRixHQUFoQixpQkFBMEJDLElBQTFCO0FBSEosR0FBUDtBQUtEOztBQUVELElBQU1FLFNBQVMsR0FBR0MsNEVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsU0FBSyxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxVQURMO0FBRUxDLFdBQUssRUFBRSxHQUZGO0FBR0xDLFlBQU0sRUFBRSxHQUhIO0FBSUxDLHFCQUFlLEVBQUVMLEtBQUssQ0FBQ00sT0FBTixDQUFjQyxVQUFkLENBQXlCTixLQUpyQztBQUtMTyxZQUFNLEVBQUUsZ0JBTEg7QUFNTEMsZUFBUyxFQUFFVCxLQUFLLENBQUNVLE9BQU4sQ0FBYyxDQUFkLENBTk47QUFPTEMsYUFBTyxFQUFFWCxLQUFLLENBQUNZLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9C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ZUFEWDtBQUFBLGtEQUVZLGlCQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZELEdBU0MsRUF0Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcE5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbVpEOztHQXZoQlF0QyxrQjtVQUNVRSx1RCxFQUNlQyx1RCxFQWlCaEJsQixTOzs7S0FuQlRlLGtCO0FBeWhCTUEsaUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLmIwMDQwYTUxMGM5OTU0OWUwOWU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB0b1J1cGlhaCBmcm9tIFwiLi4vLi4vaGVscGVycy9jdXJlbmN5VG9JRFJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtcclxuICBnZXRBbGxIaXN0b3J5LFxyXG4gIGdldERldGFpbEhpc3RvcnksXHJcbn0gZnJvbSBcIi4uLy4uL2NvbmZpZ3MvcmVkdXgvYWN0aW9ucy9oaXN0b3J5XCI7XHJcblxyXG4vLyBtb2RhbFxyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWxcIjtcclxuXHJcbmZ1bmN0aW9uIHJhbmQoKSB7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDIwKSAtIDEwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNb2RhbFN0eWxlKCkge1xyXG4gIGNvbnN0IHRvcCA9IDUwO1xyXG4gIGNvbnN0IGxlZnQgPSA1MDtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHRvcDogYCR7dG9wfSVgLFxyXG4gICAgbGVmdDogYCR7bGVmdH0lYCxcclxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgtJHt0b3B9JSwgLSR7bGVmdH0lKWAsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcGFwZXI6IHtcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICB3aWR0aDogNDAwLFxyXG4gICAgaGVpZ3RoOiA1MDAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgIGJvcmRlcjogXCIycHggc29saWQgIzAwMFwiLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcclxuICB9LFxyXG59KSk7XHJcbi8vIG1vZGFsXHJcblxyXG5mdW5jdGlvbiBUcmFuc2FjdGlvbkhpc3RvcnkoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWVzc2FnZSwgYWxsSGlzdG9yeSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5oaXN0b3J5KTtcclxuICBjb25zdCBbZGV0YWlsSGlzdG9yeSwgc2V0RGV0YWlsSGlzdG9yeV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdXJsSW1nID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMX0lNQUdFX05PX1NMQVNIO1xyXG4gIGNvbnN0IFVSTEFQSSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9BUElfV0lUSF9TTEFTSDtcclxuXHJcbiAgbGV0IGlkVXNlciwgdG9rZW47XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgaWRVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKTtcclxuICAgIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChnZXRBbGxIaXN0b3J5KGlkVXNlciwgMTApKTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuICBjb25zb2xlLmxvZyhhbGxIaXN0b3J5KTtcclxuICAvLyBtb2RhbFxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbbW9kYWxTdHlsZV0gPSBSZWFjdC51c2VTdGF0ZShnZXRNb2RhbFN0eWxlKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoaWR4KSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgZGlzcGF0Y2goZ2V0RGV0YWlsSGlzdG9yeShpZHgpKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0RGV0YWlsSGlzdG9yeShyZXMuZGF0YS5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImluaVwiLCBkYXRhKTtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBidGFjY2VwdCA9IChpZCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWQsXHJcbiAgICAgIHRva2VuLFxyXG4gICAgfTtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYCR7VVJMQVBJfXRyYW5zZmVyU3VjY2Vzcy8ke2lkfWAsIGRhdGEsIHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgdGl0bGU6IFwiRmFpbGVkXCIsXHJcbiAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBidGNhbmNlbFVzZXIgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkLFxyXG4gICAgICB0b2tlbixcclxuICAgIH07XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGAke1VSTEFQSX10cmFuc2ZlckNhbmNlbC8ke2lkfWAsIGRhdGEsIHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgdGl0bGU6IFwiRmFpbGVkXCIsXHJcbiAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYnRjYW5jZWxUYXJnZXQgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkLFxyXG4gICAgICB0b2tlbixcclxuICAgIH07XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGAke1VSTEFQSX10cmFuc2ZlckNhbmNlbC8ke2lkfWAsIGRhdGEsIHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgdGl0bGU6IFwiRmFpbGVkXCIsXHJcbiAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlVGltZSA9ICh0aW1lKSA9PiB7XHJcbiAgICByZXR1cm4gTW9tZW50KHRpbWUpLmZvcm1hdChcIk1NTU0gREQsIFlZWVkgLSBISC5tbVwiKTtcclxuICB9O1xyXG5cclxuICAvLyBlbmQgbW9kYWxcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xMDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNoYWRvdyBiZy0wIGJvcmRlci0wIGgtMTAwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBwYi0wIG1iLTNcIj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5UcmFuc2FjdGlvbiBIaXN0b3J5PC9oNT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvaGlzdG9yeVwifT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIj5TZWUgQWxsPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8IS0tIEl0ZW0gLS0+ICovfVxyXG4gICAgICAgICAge21lc3NhZ2UgIT09IFwiRGF0YSB1bmF2YWlsYWJsZVwiIHx8XHJcbiAgICAgICAgICBtZXNzYWdlID09PSBcIkdldCBhbGwgaGlzdG9yeSBzdWNjZXNzXCIgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTIgaC10cmFucyBvdmVyZmxvdy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgey8qIExvb3BpbmcgZGlzaW5pICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYXJrIHRleHQtZGVjb3JhdGlvbi1ub25lIFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gZm9yIGRlc2t0b3AgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAge2FsbEhpc3RvcnkuZGF0YVxyXG4gICAgICAgICAgICAgICAgICA/IGFsbEhpc3RvcnkuZGF0YS5tYXAoKGl0bSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ub25lIGQtbGctZmxleCByb3cgbm8tZ3V0dGVycyBtaW4taXRlbSBtYi0yIHB5LWF1dG8gcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBoYW5kbGVPcGVuKGl0bS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGNvbC1zbS0zIGNvbC1tZC0yIGltZ0NlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWl0bS50b19pbWFnZSB8fCAhaXRtLmZyb21faW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nQ2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvZGVmYXVsdC5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nQ2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvJHtpdG0udG9faW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2l0bS5mcm9tX2ltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXggbWwtMiBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLnRvX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0uZnJvbV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLnN0YXR1cyA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPlBlbmRpbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0uc3RhdHVzID09PSAyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+VHJhbnNmZXI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0uc3RhdHVzID09PSAzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+Q2FuY2VsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+VG9wIFVwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBTSE9XIEJVVFRPTiAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIHNob3cgdGFyZ2V0IC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLnN0YXR1cyA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBjLXBlbmRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJwe3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0uc3RhdHVzID09PSAyICYmIGl0bS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGMtdHJhbnNmZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1ScHt0b1J1cGlhaChpdG0uYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnN0YXR1cyA9PT0gMiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtScHt0b1J1cGlhaChpdG0uYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnN0YXR1cyA9PT0gMyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBjLWNhbmNlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUnAge3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYy10b3B1cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1Jwe3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBFbmQgb2YgZm9yIGRlc2t0b3AgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gRm9yIG1vYmlsZSEgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAge2FsbEhpc3RvcnkuZGF0YVxyXG4gICAgICAgICAgICAgICAgICA/IGFsbEhpc3RvcnkuZGF0YS5tYXAoKGl0bSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGQtbGctbm9uZSByb3cgcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBoYW5kbGVPcGVuKGl0bS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdy0xMDAgbWItMiBzaGFkb3cgYm9yZGVyLTAgaC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBjb2wtc20tMyBjb2wtbWQtMiBpbWdDZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpdG0udG9faW1hZ2UgfHwgIWl0bS5mcm9tX2ltYWdlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ0NlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3VybEltZ30vaW1hZ2VzL2RlZmF1bHQucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ0NlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3VybEltZ30vaW1hZ2VzLyR7aXRtLnRvX2ltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nQ2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvJHtpdG0uZnJvbV9pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZC1mbGV4IG1sLTIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0bS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0bS50b19uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLmZyb21fbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0bS5zdGF0dXMgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5QZW5kaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnN0YXR1cyA9PT0gMiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPlRyYW5zZmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnN0YXR1cyA9PT0gMyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPkNhbmNlbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPlRvcCBVcDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLnN0YXR1cyA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBjLXBlbmRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJwe3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0uc3RhdHVzID09PSAyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRtLnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYy10cmFuc2ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLVJwe3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0uc3RhdHVzID09PSAyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIHRleHQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1Jwe3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0uc3RhdHVzID09PSAzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGMtY2FuY2VsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBScCB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBjLXRvcHVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMiBkLWZsZXggaC0xMDBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ub3RyYW5zYWN0aW9uLnBuZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBteS0zXCI+SXQncyBDbGVhciE8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgWW91J3ZlIG5ldmVyIGRvbmUgYSB0cmFuc2FjdGlvbiBzbyBmYXJcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7LyogPCEtLSBFbmQgT2YgSXRlbSAtLT4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInNpbXBsZS1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17bW9kYWxTdHlsZX0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktYXV0byB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogV2hlbiBsb2FkaW5nKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWdyb3cgdGV4dC1ibHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPldhaXQgYSBtb21lbnQuLi48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+TG9hZGluZyBwcm9jZXNzPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17bW9kYWxTdHlsZX0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VIaXN0b3J5XCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3VybEltZ30vaW1hZ2VzLyR7ZGV0YWlsSGlzdG9yeS50b19pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlSGlzdG9yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2RldGFpbEhpc3RvcnkuZnJvbV9pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAge2RldGFpbEhpc3RvcnkudG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2RldGFpbEhpc3RvcnkudG9fbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS5mcm9tX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj57ZGV0YWlsSGlzdG9yeS50b19waG9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj57ZGV0YWlsSGlzdG9yeS5mcm9tX3Bob25lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMFwiPkFtb3VudDwvaDY+XHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTAgYy1wZW5kaW5nIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICArUnB7dG9SdXBpYWgoZGV0YWlsSGlzdG9yeS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgKSA6IGRldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAyICYmXHJcbiAgICAgICAgICAgICAgICAgIGRldGFpbEhpc3RvcnkudG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMCBjLXRyYW5zZmVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAtUnB7dG9SdXBpYWgoZGV0YWlsSGlzdG9yeS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgKSA6IGRldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAyID8gKFxyXG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wIHRleHQtc3VjY2VzcyBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgK1Jwe3RvUnVwaWFoKGRldGFpbEhpc3RvcnkuYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICkgOiBkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMyA/IChcclxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMCBjLWNhbmNlbCBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUnB7dG9SdXBpYWgoZGV0YWlsSGlzdG9yeS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMCBjLXRvcHVwIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICArUnB7dG9SdXBpYWgoZGV0YWlsSGlzdG9yeS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wXCI+RGF0ZSAmIFRpbWU8L2g2PlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMFwiPntjaGFuZ2VUaW1lKGRldGFpbEhpc3RvcnkuY3JlYXRlZF9hdCl9PC9oNj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtIGZvbnQtd2VpZ2h0LWJvbGRcIj5Ob3RlcyA6PC9oNj5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTBcIj57ZGV0YWlsSGlzdG9yeS5ub3Rlc308L2g2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAge2RldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibSBmb250LXdlaWdodC1ib2xkXCI+U2VsZWN0aW9uPC9oNj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDEgJiZcclxuICAgICAgICAgICAgICAgIGRldGFpbEhpc3RvcnkudG9faWQgPT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBidGNhbmNlbFRhcmdldChkZXRhaWxIaXN0b3J5LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBtci0yXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlamVjdFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDEgJiZcclxuICAgICAgICAgICAgICAgIGRldGFpbEhpc3RvcnkudG9faWQgPT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBidGFjY2VwdChkZXRhaWxIaXN0b3J5LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQWNjZXB0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDEgJiZcclxuICAgICAgICAgICAgICAgIGRldGFpbEhpc3RvcnkudG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBidGNhbmNlbFVzZXIoZGV0YWlsSGlzdG9yeS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLnNoYWRvdyB7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdi5iZy0wLmNhcmQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaW1nQ2VudGVyIHtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWluLWl0ZW0ge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGl2LmNhcmQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmMtdHJhbnNmZXIsXHJcbiAgICAgICAgICAuYy1jYW5jZWwge1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmMtcGVuZGluZyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYy10b3B1cCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjM3OWY0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmgtY29udGVudCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmltYWdlSGlzdG9yeSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTU5cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oLXRyYW5zIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb25IaXN0b3J5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9