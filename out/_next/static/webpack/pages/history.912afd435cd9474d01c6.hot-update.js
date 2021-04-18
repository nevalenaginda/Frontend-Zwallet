webpackHotUpdate_N_E("pages/history",{

/***/ "./components/module/HistoryAllTransaction.js":
/*!****************************************************!*\
  !*** ./components/module/HistoryAllTransaction.js ***!
  \****************************************************/
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
/* harmony import */ var _helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/curencyToIDR */ "./helpers/curencyToIDR.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");



var _jsxFileName = "D:\\Tutorial Web\\Week 10\\Zwallet-Frontend\\components\\module\\HistoryAllTransaction.js",
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

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
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

function HistoryAllTransaction() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      dataAllUser = _useState[0],
      setAllDataUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      message = _useState2[0],
      setMessage = _useState2[1];

  var urlImg = "http://100.25.29.134:5001";
  var URLAPI = "http://100.25.29.134:5001/api/";
  var idUser, token;

  if (true) {
    idUser = localStorage.getItem("id");
    token = localStorage.getItem("token");
  }

  var getData = function getData() {
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(URLAPI, "history/").concat(idUser, "?limit=100&sort=asc"), {
      headers: {
        token: token
      }
    }).then(function (res) {
      console.log(res.data);
      setAllDataUser(res.data);
      setMessage(res.data.message);
    })["catch"](function (err) {
      console.log(err);
      setMessage(err.response.data.message);
      setAllDataUser({});
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getData();
  }, []); // modal

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      detailHistory = _useState3[0],
      setDetailHistory = _useState3[1];

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(getModalStyle),
      _React$useState2 = Object(D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 1),
      modalStyle = _React$useState2[0];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState4 = Object(D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      open = _React$useState4[0],
      setOpen = _React$useState4[1];

  var handleOpen = function handleOpen(data) {
    setDetailHistory(data);
    console.log("ini", data);
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
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat(URLAPI, "transferSuccess/").concat(id), data, {
      headers: {
        token: token
      }
    }).then(function (response) {
      setOpen(false);
      getData();
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500
      });
    })["catch"](function (err) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
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
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat(URLAPI, "transferCancel/").concat(id), data, {
      headers: {
        token: token
      }
    }).then(function (response) {
      getData();
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500
      });
    })["catch"](function (err) {
      console.log(err);
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
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
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("".concat(URLAPI, "transferCancel/").concat(id), data, {
      headers: {
        token: token
      }
    }).then(function (response) {
      getData();
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500
      });
    })["catch"](function (err) {
      console.log(err);
      sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
        icon: "error",
        title: "Failed",
        showConfirmButton: false,
        timer: 1500
      });
    });
  };

  var changeTime = function changeTime(time) {
    return moment__WEBPACK_IMPORTED_MODULE_6___default()(time).format("MMMM DD, YYYY - HH.mm");
  }; // end modal


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-940930211" + " " + "card card-lg h-on-lg border-0 shadow",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-940930211" + " " + "card-body p-0 p-lg-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-940930211" + " " + "container h-100 d-flex flex-column",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-940930211",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-940930211" + " " + "d-none d-lg-block",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "jsx-940930211" + " " + "font-weight-bold",
              children: "Transaction History"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
            className: "jsx-940930211" + " " + "font-weight-bold text-muted mb-3",
            children: "This Week"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, this), message !== "Data unavailable" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-940930211" + " " + "pembungkus looping h-content overflow-auto",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-940930211" + " " + "text-decoration-none text-dark ",
            children: dataAllUser.data ? dataAllUser.data.map(function (itm, idx) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                onClick: function onClick(event) {
                  return handleOpen(itm);
                },
                className: "jsx-940930211" + " " + "card shadow border-0 mb-3 pointer",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-940930211" + " " + "card-body h-100",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "jsx-940930211" + " " + "d-flex",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "jsx-940930211" + " " + "row align-self-center w-100",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "jsx-940930211" + " " + "col-4 col-sm-3 col-md-2 imgCenter d-flex justify-content-center",
                        children: itm.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: "".concat(urlImg, "/images/").concat(itm.to_image),
                          className: "jsx-940930211" + " " + "imgCenter"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 204,
                          columnNumber: 37
                        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: "".concat(urlImg, "/images/").concat(itm.from_image),
                          className: "jsx-940930211" + " " + "imgCenter"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 209,
                          columnNumber: 37
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 202,
                        columnNumber: 33
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "jsx-940930211" + " " + "col d-flex",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "jsx-940930211" + " " + "align-self-center w-100",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "jsx-940930211" + " " + "d-flex justify-content-between",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "jsx-940930211",
                              children: [itm.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                className: "jsx-940930211" + " " + "font-weight-bold m-0",
                                children: itm.to_name
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 220,
                                columnNumber: 43
                              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                className: "jsx-940930211" + " " + "font-weight-bold m-0",
                                children: itm.from_name
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 224,
                                columnNumber: 43
                              }, _this), itm.status === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                                className: "jsx-940930211" + " " + "text-muted m-0",
                                children: "Pending"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 231,
                                columnNumber: 43
                              }, _this) : itm.status === 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                                className: "jsx-940930211" + " " + "text-muted m-0",
                                children: "Transfer"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 235,
                                columnNumber: 43
                              }, _this) : itm.status === 3 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                                className: "jsx-940930211" + " " + "text-muted m-0",
                                children: "Cancel"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 239,
                                columnNumber: 43
                              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                                className: "jsx-940930211" + " " + "text-muted m-0",
                                children: "Top Up"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 243,
                                columnNumber: 43
                              }, _this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 218,
                              columnNumber: 39
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "jsx-940930211",
                              children: itm.status === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                className: "jsx-940930211" + " " + "font-weight-bold c-pending",
                                children: ["Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_4__["default"])(itm.amount)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 250,
                                columnNumber: 43
                              }, _this) : itm.status === 2 && itm.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                className: "jsx-940930211" + " " + "font-weight-bold c-transfer",
                                children: ["-Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_4__["default"])(itm.amount)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 255,
                                columnNumber: 43
                              }, _this) : itm.status === 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                className: "jsx-940930211" + " " + "font-weight-bold text-success",
                                children: ["+Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_4__["default"])(itm.amount)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 259,
                                columnNumber: 43
                              }, _this) : itm.status === 3 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                className: "jsx-940930211" + " " + "font-weight-bold c-cancel",
                                children: ["Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_4__["default"])(itm.amount)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 263,
                                columnNumber: 43
                              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                className: "jsx-940930211" + " " + "font-weight-bold c-topup",
                                children: ["+Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_4__["default"])(itm.amount)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 267,
                                columnNumber: 43
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 248,
                              columnNumber: 39
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 217,
                            columnNumber: 37
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 216,
                          columnNumber: 35
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 215,
                        columnNumber: 33
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 201,
                      columnNumber: 31
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 200,
                    columnNumber: 29
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 27
                }, _this)
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 25
              }, _this);
            }) : ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-940930211" + " " + "h-100 d-flex",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-940930211" + " " + "align-self-center w-100 text-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-940930211",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: __webpack_require__(/*! ../../assets/images/notransaction.png */ "./assets/images/notransaction.png"),
                alt: "",
                className: "jsx-940930211"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 288,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                className: "jsx-940930211" + " " + "font-weight-bold my-3",
                children: "It's Clear!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 292,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "jsx-940930211" + " " + "text-muted",
                children: "You've never done a transaction so far"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 293,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      open: open,
      onClose: handleClose,
      "aria-labelledby": "simple-modal-title",
      "aria-describedby": "simple-modal-description",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: modalStyle,
        className: "jsx-940930211" + " " + (classes.paper || ""),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-940930211" + " " + "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-940930211" + " " + "col-4",
            children: detailHistory.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "".concat(urlImg, "/images/").concat(detailHistory.to_image),
              className: "jsx-940930211" + " " + "imageHistory"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 314,
              columnNumber: 17
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "".concat(urlImg, "/images/").concat(detailHistory.from_image),
              className: "jsx-940930211" + " " + "imageHistory"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 319,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-940930211" + " " + "col d-flex",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-940930211" + " " + "align-self-center",
              children: [detailHistory.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "jsx-940930211" + " " + "font-weight-bold",
                children: detailHistory.to_name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 328,
                columnNumber: 19
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "jsx-940930211" + " " + "font-weight-bold",
                children: detailHistory.from_name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 330,
                columnNumber: 19
              }, this), detailHistory.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "jsx-940930211" + " " + "text-muted m-0",
                children: detailHistory.to_phone
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 336,
                columnNumber: 19
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "jsx-940930211" + " " + "text-muted m-0",
                children: detailHistory.from_phone
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 338,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 326,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 325,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
          className: "jsx-940930211"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-940930211" + " " + "container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-940930211" + " " + "d-flex justify-content-between mb-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-940930211" + " " + "m-0",
              children: "Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 346,
              columnNumber: 15
            }, this), detailHistory.status === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-940930211" + " " + "m-0 c-pending font-weight-bold",
              children: ["+Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_4__["default"])(detailHistory.amount)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 348,
              columnNumber: 17
            }, this) : detailHistory.status === 2 && detailHistory.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-940930211" + " " + "m-0 c-transfer font-weight-bold",
              children: ["-Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_4__["default"])(detailHistory.amount)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 353,
              columnNumber: 17
            }, this) : detailHistory.status === 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-940930211" + " " + "m-0 text-success font-weight-bold",
              children: ["+Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_4__["default"])(detailHistory.amount)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 357,
              columnNumber: 17
            }, this) : detailHistory.status === 3 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-940930211" + " " + "m-0 c-cancel font-weight-bold",
              children: ["Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_4__["default"])(detailHistory.amount)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 361,
              columnNumber: 17
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-940930211" + " " + "m-0 c-topup font-weight-bold",
              children: ["+Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_4__["default"])(detailHistory.amount)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 365,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 345,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
            className: "jsx-940930211"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 370,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-940930211" + " " + "d-flex justify-content-between mb-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-940930211" + " " + "m-0",
              children: "Date & Time"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 372,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-940930211" + " " + "m-0",
              children: changeTime(detailHistory.created_at)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
            className: "jsx-940930211"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 375,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-940930211" + " " + "mb-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-940930211" + " " + "m font-weight-bold",
              children: "Notes :"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 377,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-940930211" + " " + "m-0",
              children: detailHistory.notes
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 378,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-940930211" + " " + "mb-2",
            children: [detailHistory.status === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: "jsx-940930211" + " " + "m font-weight-bold",
              children: "Selection"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 382,
              columnNumber: 17
            }, this) : "", detailHistory.status === 1 && detailHistory.to_id === idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick(e) {
                return btcancelTarget(detailHistory.id);
              },
              className: "jsx-940930211" + " " + "btn btn-danger mr-2",
              children: "Reject"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 387,
              columnNumber: 17
            }, this) : "", detailHistory.status === 1 && detailHistory.to_id === idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick(e) {
                return btaccept(detailHistory.id);
              },
              className: "jsx-940930211" + " " + "btn btn-success",
              children: "Accept"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 397,
              columnNumber: 17
            }, this) : "", detailHistory.status === 1 && detailHistory.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick(e) {
                return btcancelUser(detailHistory.id);
              },
              className: "jsx-940930211" + " " + "btn btn-warning",
              children: "Cancel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 408,
              columnNumber: 17
            }, this) : ""]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 380,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "940930211",
      children: "@media screen and (max-width:992px){.card-lg.jsx-940930211{background-color:transparent !important;box-shadow:none !important;}}.h-content.jsx-940930211{height:calc(90vh - 12rem);}.imgCenter.jsx-940930211{object-fit:cover;border-radius:15px;height:60px;width:60px;}div.card.jsx-940930211{border-radius:15px;}.c-transfer.jsx-940930211,.c-cancel.jsx-940930211{color:red;}.c-pending.jsx-940930211{color:orange;}.c-topup.jsx-940930211{color:#6379f4;}.imageHistory.jsx-940930211{height:150px;width:100%;object-fit:cover;border-radius:15px;}@media screen and (min-width:992px){.h-on-lg.jsx-940930211{height:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxUdXRvcmlhbCBXZWJcXFdlZWsgMTBcXFp3YWxsZXQtRnJvbnRlbmRcXGNvbXBvbmVudHNcXG1vZHVsZVxcSGlzdG9yeUFsbFRyYW5zYWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFha0IsQUFJcUQsQUFLaEIsQUFHVCxBQU1FLEFBSVQsQUFHRyxBQUdDLEFBR0QsQUFPQyxVQWZoQixFQWdCRSxDQWJGLEFBTWEsQ0FIYixHQWhCcUIsRUFNckIsS0FjbUIsRUF2Qm5CLFVBSWMsSUFUaUIsQ0E2QlYsT0FuQlIsV0FDYixDQW1CQSxPQTdCRSIsImZpbGUiOiJEOlxcVHV0b3JpYWwgV2ViXFxXZWVrIDEwXFxad2FsbGV0LUZyb250ZW5kXFxjb21wb25lbnRzXFxtb2R1bGVcXEhpc3RvcnlBbGxUcmFuc2FjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0b1J1cGlhaCBmcm9tIFwiLi4vLi4vaGVscGVycy9jdXJlbmN5VG9JRFJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuLy8gbW9kYWxcclxuaW1wb3J0IE1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01vZGFsXCI7XHJcblxyXG5mdW5jdGlvbiByYW5kKCkge1xyXG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyMCkgLSAxMDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TW9kYWxTdHlsZSgpIHtcclxuICBjb25zdCB0b3AgPSA1MDtcclxuICBjb25zdCBsZWZ0ID0gNTA7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0b3A6IGAke3RvcH0lYCxcclxuICAgIGxlZnQ6IGAke2xlZnR9JWAsXHJcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoLSR7dG9wfSUsIC0ke2xlZnR9JSlgLFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHBhcGVyOiB7XHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgd2lkdGg6IDQwMCxcclxuICAgIGhlaWd0aDogNTAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICBib3JkZXI6IFwiMnB4IHNvbGlkICMwMDBcIixcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcbiAgfSxcclxufSkpO1xyXG4vLyBtb2RhbFxyXG5cclxuZnVuY3Rpb24gSGlzdG9yeUFsbFRyYW5zYWN0aW9uKCkge1xyXG4gIGNvbnN0IFtkYXRhQWxsVXNlciwgc2V0QWxsRGF0YVVzZXJdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHVybEltZyA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9JTUFHRV9OT19TTEFTSDtcclxuICBjb25zdCBVUkxBUEkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkxfQVBJX1dJVEhfU0xBU0g7XHJcblxyXG4gIGxldCBpZFVzZXIsIHRva2VuO1xyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGlkVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIik7XHJcbiAgICB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgfVxyXG4gIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke1VSTEFQSX1oaXN0b3J5LyR7aWRVc2VyfT9saW1pdD0xMDAmc29ydD1hc2NgLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyB0b2tlbiB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHNldEFsbERhdGFVc2VyKHJlcy5kYXRhKTtcclxuICAgICAgICBzZXRNZXNzYWdlKHJlcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2V0TWVzc2FnZShlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICBzZXRBbGxEYXRhVXNlcih7fSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIG1vZGFsXHJcbiAgY29uc3QgW2RldGFpbEhpc3RvcnksIHNldERldGFpbEhpc3RvcnldID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbbW9kYWxTdHlsZV0gPSBSZWFjdC51c2VTdGF0ZShnZXRNb2RhbFN0eWxlKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoZGF0YSkgPT4ge1xyXG4gICAgc2V0RGV0YWlsSGlzdG9yeShkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKFwiaW5pXCIsIGRhdGEpO1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGJ0YWNjZXB0ID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZCxcclxuICAgICAgdG9rZW4sXHJcbiAgICB9O1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChgJHtVUkxBUEl9dHJhbnNmZXJTdWNjZXNzLyR7aWR9YCwgZGF0YSwgeyBoZWFkZXJzOiB7IHRva2VuIH0gfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgdGl0bGU6IFwiRmFpbGVkXCIsXHJcbiAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBidGNhbmNlbFVzZXIgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkLFxyXG4gICAgICB0b2tlbixcclxuICAgIH07XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGAke1VSTEFQSX10cmFuc2ZlckNhbmNlbC8ke2lkfWAsIGRhdGEsIHsgaGVhZGVyczogeyB0b2tlbiB9IH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGdldERhdGEoKTtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgdGltZXI6IDE1MDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgdGl0bGU6IFwiRmFpbGVkXCIsXHJcbiAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYnRjYW5jZWxUYXJnZXQgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkLFxyXG4gICAgICB0b2tlbixcclxuICAgIH07XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGAke1VSTEFQSX10cmFuc2ZlckNhbmNlbC8ke2lkfWAsIGRhdGEsIHsgaGVhZGVyczogeyB0b2tlbiB9IH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGdldERhdGEoKTtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgdGltZXI6IDE1MDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgdGl0bGU6IFwiRmFpbGVkXCIsXHJcbiAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlVGltZSA9ICh0aW1lKSA9PiB7XHJcbiAgICByZXR1cm4gTW9tZW50KHRpbWUpLmZvcm1hdChcIk1NTU0gREQsIFlZWVkgLSBISC5tbVwiKTtcclxuICB9O1xyXG5cclxuICAvLyBlbmQgbW9kYWxcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWxnIGgtb24tbGcgYm9yZGVyLTAgc2hhZG93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHAtMCBwLWxnLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoLTEwMCBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ub25lIGQtbGctYmxvY2tcIj5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlRyYW5zYWN0aW9uIEhpc3Rvcnk8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1tdXRlZCBtYi0zXCI+VGhpcyBXZWVrPC9oNj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDwhLS0gSXRlbSAtLT4gKi99XHJcblxyXG4gICAgICAgICAge21lc3NhZ2UgIT09IFwiRGF0YSB1bmF2YWlsYWJsZVwiID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlbWJ1bmdrdXMgbG9vcGluZyBoLWNvbnRlbnQgb3ZlcmZsb3ctYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kZWNvcmF0aW9uLW5vbmUgdGV4dC1kYXJrIFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIExvb3BpbmcgZGlzaW5pICovfVxyXG4gICAgICAgICAgICAgICAge2RhdGFBbGxVc2VyLmRhdGFcclxuICAgICAgICAgICAgICAgICAgPyBkYXRhQWxsVXNlci5kYXRhLm1hcCgoaXRtLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkIHNoYWRvdyBib3JkZXItMCBtYi0zIHBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gaGFuZGxlT3BlbihpdG0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLXNlbGYtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBjb2wtc20tMyBjb2wtbWQtMiBpbWdDZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0udG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ0NlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2l0bS50b19pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ0NlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2l0bS5mcm9tX2ltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlciB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0udG9fbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0uZnJvbV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj57eyBpdG0ubm90ZXMgfX08L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0bS5zdGF0dXMgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVuZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnN0YXR1cyA9PT0gMiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnN0YXR1cyA9PT0gMyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3AgVXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0bS5zdGF0dXMgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGMtcGVuZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJwe3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRtLnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGMtdHJhbnNmZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnN0YXR1cyA9PT0gMiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1Jwe3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGMtY2FuY2VsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBjLXRvcHVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1Jwe3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTAwIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXIgdy0xMDAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL25vdHJhbnNhY3Rpb24ucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG15LTNcIj5JdCdzIENsZWFyITwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBZb3UndmUgbmV2ZXIgZG9uZSBhIHRyYW5zYWN0aW9uIHNvIGZhclxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHsvKiB7YT09J2EnPygnbScpOignYicpfSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwic2ltcGxlLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e21vZGFsU3R5bGV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAge2RldGFpbEhpc3RvcnkudG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VIaXN0b3J5XCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2RldGFpbEhpc3RvcnkudG9faW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VIaXN0b3J5XCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2RldGFpbEhpc3RvcnkuZnJvbV9pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAge2RldGFpbEhpc3RvcnkudG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj57ZGV0YWlsSGlzdG9yeS50b19uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LmZyb21fbmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge2RldGFpbEhpc3RvcnkudG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj57ZGV0YWlsSGlzdG9yeS50b19waG9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPntkZXRhaWxIaXN0b3J5LmZyb21fcGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItMlwiPlxyXG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTBcIj5BbW91bnQ8L2g2PlxyXG4gICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTAgYy1wZW5kaW5nIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgK1Jwe3RvUnVwaWFoKGRldGFpbEhpc3RvcnkuYW1vdW50KX1cclxuICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgKSA6IGRldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAyICYmXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxIaXN0b3J5LnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wIGMtdHJhbnNmZXIgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAtUnB7dG9SdXBpYWgoZGV0YWlsSGlzdG9yeS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICApIDogZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDIgPyAoXHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wIHRleHQtc3VjY2VzcyBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICtScHt0b1J1cGlhaChkZXRhaWxIaXN0b3J5LmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICkgOiBkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMyA/IChcclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTAgYy1jYW5jZWwgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICBScHt0b1J1cGlhaChkZXRhaWxIaXN0b3J5LmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wIGMtdG9wdXAgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICArUnB7dG9SdXBpYWgoZGV0YWlsSGlzdG9yeS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTJcIj5cclxuICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wXCI+RGF0ZSAmIFRpbWU8L2g2PlxyXG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTBcIj57Y2hhbmdlVGltZShkZXRhaWxIaXN0b3J5LmNyZWF0ZWRfYXQpfTwvaDY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0gZm9udC13ZWlnaHQtYm9sZFwiPk5vdGVzIDo8L2g2PlxyXG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTBcIj57ZGV0YWlsSGlzdG9yeS5ub3Rlc308L2g2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAge2RldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0gZm9udC13ZWlnaHQtYm9sZFwiPlNlbGVjdGlvbjwvaDY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMSAmJiBkZXRhaWxIaXN0b3J5LnRvX2lkID09PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBidGNhbmNlbFRhcmdldChkZXRhaWxIaXN0b3J5LmlkKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgbXItMlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFJlamVjdFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMSAmJiBkZXRhaWxIaXN0b3J5LnRvX2lkID09PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBidGFjY2VwdChkZXRhaWxIaXN0b3J5LmlkKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQWNjZXB0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMSAmJiBkZXRhaWxIaXN0b3J5LnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBidGNhbmNlbFVzZXIoZGV0YWlsSGlzdG9yeS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAuY2FyZC1sZyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmgtY29udGVudCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoOTB2aCAtIDEycmVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZ0NlbnRlciB7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2LmNhcmQge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmMtdHJhbnNmZXIsXHJcbiAgICAgICAgLmMtY2FuY2VsIHtcclxuICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jLXBlbmRpbmcge1xyXG4gICAgICAgICAgY29sb3I6IG9yYW5nZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmMtdG9wdXAge1xyXG4gICAgICAgICAgY29sb3I6ICM2Mzc5ZjQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWFnZUhpc3Rvcnkge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgLmgtb24tbGcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIaXN0b3J5QWxsVHJhbnNhY3Rpb247XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Tutorial Web\\\\Week 10\\\\Zwallet-Frontend\\\\components\\\\module\\\\HistoryAllTransaction.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 176,
    columnNumber: 5
  }, this);
}

_s(HistoryAllTransaction, "k22FfYAcGY2CvRBrtdAxoarCm/E=", false, function () {
  return [useStyles];
});

_c = HistoryAllTransaction;
/* harmony default export */ __webpack_exports__["default"] = (HistoryAllTransaction);

var _c;

$RefreshReg$(_c, "HistoryAllTransaction");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2R1bGUvSGlzdG9yeUFsbFRyYW5zYWN0aW9uLmpzIl0sIm5hbWVzIjpbInJhbmQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJnZXRNb2RhbFN0eWxlIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWd0aCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYm94U2hhZG93Iiwic2hhZG93cyIsInBhZGRpbmciLCJzcGFjaW5nIiwiSGlzdG9yeUFsbFRyYW5zYWN0aW9uIiwidXNlU3RhdGUiLCJkYXRhQWxsVXNlciIsInNldEFsbERhdGFVc2VyIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ1cmxJbWciLCJwcm9jZXNzIiwiVVJMQVBJIiwiaWRVc2VyIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0RGF0YSIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVyciIsInJlc3BvbnNlIiwidXNlRWZmZWN0IiwiZGV0YWlsSGlzdG9yeSIsInNldERldGFpbEhpc3RvcnkiLCJjbGFzc2VzIiwiUmVhY3QiLCJtb2RhbFN0eWxlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJidGFjY2VwdCIsImlkIiwicG9zdCIsIlN3YWwiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsImJ0Y2FuY2VsVXNlciIsImJ0Y2FuY2VsVGFyZ2V0IiwiY2hhbmdlVGltZSIsInRpbWUiLCJNb21lbnQiLCJmb3JtYXQiLCJtYXAiLCJpdG0iLCJpZHgiLCJldmVudCIsInRvX2lkIiwidG9faW1hZ2UiLCJmcm9tX2ltYWdlIiwidG9fbmFtZSIsImZyb21fbmFtZSIsInN0YXR1cyIsInRvUnVwaWFoIiwiYW1vdW50IiwicmVxdWlyZSIsInRvX3Bob25lIiwiZnJvbV9waG9uZSIsImNyZWF0ZWRfYXQiLCJub3RlcyIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNkLFNBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsSUFBaUMsRUFBeEM7QUFDRDs7QUFFRCxTQUFTQyxhQUFULEdBQXlCO0FBQ3ZCLE1BQU1DLEdBQUcsR0FBRyxFQUFaO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLEVBQWI7QUFFQSxTQUFPO0FBQ0xELE9BQUcsWUFBS0EsR0FBTCxNQURFO0FBRUxDLFFBQUksWUFBS0EsSUFBTCxNQUZDO0FBR0xDLGFBQVMsdUJBQWdCRixHQUFoQixpQkFBMEJDLElBQTFCO0FBSEosR0FBUDtBQUtEOztBQUVELElBQU1FLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsU0FBSyxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxVQURMO0FBRUxDLFdBQUssRUFBRSxHQUZGO0FBR0xDLFlBQU0sRUFBRSxHQUhIO0FBSUxDLHFCQUFlLEVBQUVMLEtBQUssQ0FBQ00sT0FBTixDQUFjQyxVQUFkLENBQXlCTixLQUpyQztBQUtMTyxZQUFNLEVBQUUsZ0JBTEg7QUFNTEMsZUFBUyxFQUFFVCxLQUFLLENBQUNVLE9BQU4sQ0FBYyxDQUFkLENBTk47QUFPTEMsYUFBTyxFQUFFWCxLQUFLLENBQUNZLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCO0FBUEo7QUFEZ0MsR0FBWjtBQUFBLENBQUQsQ0FBNUIsQyxDQVdBOztBQUVBLFNBQVNDLHFCQUFULEdBQWlDO0FBQUE7O0FBQUE7O0FB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QU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoSUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrU0Q7O0dBMWFRbkMscUI7VUFpQ1NmLFM7OztLQWpDVGUscUI7QUE0YU1BLG9GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hpc3RvcnkuOTEyYWZkNDM1Y2Q5NDc0ZDAxYzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0b1J1cGlhaCBmcm9tIFwiLi4vLi4vaGVscGVycy9jdXJlbmN5VG9JRFJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuLy8gbW9kYWxcclxuaW1wb3J0IE1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01vZGFsXCI7XHJcblxyXG5mdW5jdGlvbiByYW5kKCkge1xyXG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyMCkgLSAxMDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TW9kYWxTdHlsZSgpIHtcclxuICBjb25zdCB0b3AgPSA1MDtcclxuICBjb25zdCBsZWZ0ID0gNTA7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0b3A6IGAke3RvcH0lYCxcclxuICAgIGxlZnQ6IGAke2xlZnR9JWAsXHJcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoLSR7dG9wfSUsIC0ke2xlZnR9JSlgLFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHBhcGVyOiB7XHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgd2lkdGg6IDQwMCxcclxuICAgIGhlaWd0aDogNTAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICBib3JkZXI6IFwiMnB4IHNvbGlkICMwMDBcIixcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcbiAgfSxcclxufSkpO1xyXG4vLyBtb2RhbFxyXG5cclxuZnVuY3Rpb24gSGlzdG9yeUFsbFRyYW5zYWN0aW9uKCkge1xyXG4gIGNvbnN0IFtkYXRhQWxsVXNlciwgc2V0QWxsRGF0YVVzZXJdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHVybEltZyA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9JTUFHRV9OT19TTEFTSDtcclxuICBjb25zdCBVUkxBUEkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkxfQVBJX1dJVEhfU0xBU0g7XHJcblxyXG4gIGxldCBpZFVzZXIsIHRva2VuO1xyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGlkVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIik7XHJcbiAgICB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgfVxyXG4gIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke1VSTEFQSX1oaXN0b3J5LyR7aWRVc2VyfT9saW1pdD0xMDAmc29ydD1hc2NgLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyB0b2tlbiB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHNldEFsbERhdGFVc2VyKHJlcy5kYXRhKTtcclxuICAgICAgICBzZXRNZXNzYWdlKHJlcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2V0TWVzc2FnZShlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICBzZXRBbGxEYXRhVXNlcih7fSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIG1vZGFsXHJcbiAgY29uc3QgW2RldGFpbEhpc3RvcnksIHNldERldGFpbEhpc3RvcnldID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbbW9kYWxTdHlsZV0gPSBSZWFjdC51c2VTdGF0ZShnZXRNb2RhbFN0eWxlKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoZGF0YSkgPT4ge1xyXG4gICAgc2V0RGV0YWlsSGlzdG9yeShkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKFwiaW5pXCIsIGRhdGEpO1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGJ0YWNjZXB0ID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZCxcclxuICAgICAgdG9rZW4sXHJcbiAgICB9O1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChgJHtVUkxBUEl9dHJhbnNmZXJTdWNjZXNzLyR7aWR9YCwgZGF0YSwgeyBoZWFkZXJzOiB7IHRva2VuIH0gfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgdGl0bGU6IFwiRmFpbGVkXCIsXHJcbiAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBidGNhbmNlbFVzZXIgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkLFxyXG4gICAgICB0b2tlbixcclxuICAgIH07XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGAke1VSTEFQSX10cmFuc2ZlckNhbmNlbC8ke2lkfWAsIGRhdGEsIHsgaGVhZGVyczogeyB0b2tlbiB9IH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGdldERhdGEoKTtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgdGltZXI6IDE1MDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgdGl0bGU6IFwiRmFpbGVkXCIsXHJcbiAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYnRjYW5jZWxUYXJnZXQgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkLFxyXG4gICAgICB0b2tlbixcclxuICAgIH07XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGAke1VSTEFQSX10cmFuc2ZlckNhbmNlbC8ke2lkfWAsIGRhdGEsIHsgaGVhZGVyczogeyB0b2tlbiB9IH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGdldERhdGEoKTtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgdGltZXI6IDE1MDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgdGl0bGU6IFwiRmFpbGVkXCIsXHJcbiAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlVGltZSA9ICh0aW1lKSA9PiB7XHJcbiAgICByZXR1cm4gTW9tZW50KHRpbWUpLmZvcm1hdChcIk1NTU0gREQsIFlZWVkgLSBISC5tbVwiKTtcclxuICB9O1xyXG5cclxuICAvLyBlbmQgbW9kYWxcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWxnIGgtb24tbGcgYm9yZGVyLTAgc2hhZG93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHAtMCBwLWxnLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoLTEwMCBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ub25lIGQtbGctYmxvY2tcIj5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlRyYW5zYWN0aW9uIEhpc3Rvcnk8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1tdXRlZCBtYi0zXCI+VGhpcyBXZWVrPC9oNj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDwhLS0gSXRlbSAtLT4gKi99XHJcblxyXG4gICAgICAgICAge21lc3NhZ2UgIT09IFwiRGF0YSB1bmF2YWlsYWJsZVwiID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlbWJ1bmdrdXMgbG9vcGluZyBoLWNvbnRlbnQgb3ZlcmZsb3ctYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kZWNvcmF0aW9uLW5vbmUgdGV4dC1kYXJrIFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIExvb3BpbmcgZGlzaW5pICovfVxyXG4gICAgICAgICAgICAgICAge2RhdGFBbGxVc2VyLmRhdGFcclxuICAgICAgICAgICAgICAgICAgPyBkYXRhQWxsVXNlci5kYXRhLm1hcCgoaXRtLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkIHNoYWRvdyBib3JkZXItMCBtYi0zIHBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gaGFuZGxlT3BlbihpdG0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLXNlbGYtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBjb2wtc20tMyBjb2wtbWQtMiBpbWdDZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0udG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ0NlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2l0bS50b19pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ0NlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2l0bS5mcm9tX2ltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlciB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0udG9fbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0uZnJvbV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj57eyBpdG0ubm90ZXMgfX08L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0bS5zdGF0dXMgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVuZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnN0YXR1cyA9PT0gMiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnN0YXR1cyA9PT0gMyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3AgVXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0bS5zdGF0dXMgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGMtcGVuZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJwe3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRtLnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGMtdHJhbnNmZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnN0YXR1cyA9PT0gMiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1Jwe3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGMtY2FuY2VsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBjLXRvcHVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1Jwe3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTAwIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXIgdy0xMDAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL25vdHJhbnNhY3Rpb24ucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG15LTNcIj5JdCdzIENsZWFyITwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBZb3UndmUgbmV2ZXIgZG9uZSBhIHRyYW5zYWN0aW9uIHNvIGZhclxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHsvKiB7YT09J2EnPygnbScpOignYicpfSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwic2ltcGxlLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e21vZGFsU3R5bGV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAge2RldGFpbEhpc3RvcnkudG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VIaXN0b3J5XCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2RldGFpbEhpc3RvcnkudG9faW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VIaXN0b3J5XCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2RldGFpbEhpc3RvcnkuZnJvbV9pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAge2RldGFpbEhpc3RvcnkudG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj57ZGV0YWlsSGlzdG9yeS50b19uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LmZyb21fbmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge2RldGFpbEhpc3RvcnkudG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj57ZGV0YWlsSGlzdG9yeS50b19waG9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPntkZXRhaWxIaXN0b3J5LmZyb21fcGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItMlwiPlxyXG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTBcIj5BbW91bnQ8L2g2PlxyXG4gICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTAgYy1wZW5kaW5nIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgK1Jwe3RvUnVwaWFoKGRldGFpbEhpc3RvcnkuYW1vdW50KX1cclxuICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgKSA6IGRldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAyICYmXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxIaXN0b3J5LnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wIGMtdHJhbnNmZXIgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAtUnB7dG9SdXBpYWgoZGV0YWlsSGlzdG9yeS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICApIDogZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDIgPyAoXHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wIHRleHQtc3VjY2VzcyBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICtScHt0b1J1cGlhaChkZXRhaWxIaXN0b3J5LmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICkgOiBkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMyA/IChcclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTAgYy1jYW5jZWwgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICBScHt0b1J1cGlhaChkZXRhaWxIaXN0b3J5LmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wIGMtdG9wdXAgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICArUnB7dG9SdXBpYWgoZGV0YWlsSGlzdG9yeS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTJcIj5cclxuICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wXCI+RGF0ZSAmIFRpbWU8L2g2PlxyXG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTBcIj57Y2hhbmdlVGltZShkZXRhaWxIaXN0b3J5LmNyZWF0ZWRfYXQpfTwvaDY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0gZm9udC13ZWlnaHQtYm9sZFwiPk5vdGVzIDo8L2g2PlxyXG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTBcIj57ZGV0YWlsSGlzdG9yeS5ub3Rlc308L2g2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAge2RldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0gZm9udC13ZWlnaHQtYm9sZFwiPlNlbGVjdGlvbjwvaDY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMSAmJiBkZXRhaWxIaXN0b3J5LnRvX2lkID09PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBidGNhbmNlbFRhcmdldChkZXRhaWxIaXN0b3J5LmlkKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgbXItMlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFJlamVjdFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMSAmJiBkZXRhaWxIaXN0b3J5LnRvX2lkID09PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBidGFjY2VwdChkZXRhaWxIaXN0b3J5LmlkKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQWNjZXB0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMSAmJiBkZXRhaWxIaXN0b3J5LnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBidGNhbmNlbFVzZXIoZGV0YWlsSGlzdG9yeS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAuY2FyZC1sZyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmgtY29udGVudCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoOTB2aCAtIDEycmVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZ0NlbnRlciB7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2LmNhcmQge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmMtdHJhbnNmZXIsXHJcbiAgICAgICAgLmMtY2FuY2VsIHtcclxuICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jLXBlbmRpbmcge1xyXG4gICAgICAgICAgY29sb3I6IG9yYW5nZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmMtdG9wdXAge1xyXG4gICAgICAgICAgY29sb3I6ICM2Mzc5ZjQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWFnZUhpc3Rvcnkge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgLmgtb24tbGcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIaXN0b3J5QWxsVHJhbnNhY3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=