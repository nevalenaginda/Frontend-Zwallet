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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/curencyToIDR */ "./helpers/curencyToIDR.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _configs_redux_actions_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../configs/redux/actions/history */ "./configs/redux/actions/history.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);


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

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
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

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.history;
  }),
      message = _useSelector.message,
      dataAllUser = _useSelector.allHistory;

  var urlImg = "http://localhost:5001";
  var URLAPI = "http://localhost:5001/api/";
  var idUser, token;

  if (true) {
    idUser = localStorage.getItem("id");
    token = localStorage.getItem("token");
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch(Object(_configs_redux_actions_history__WEBPACK_IMPORTED_MODULE_6__["getAllHistory"])(idUser, 100));
  }, [dispatch]); // modal
  // const [detailHistory, setDetailHistory] = useState({});
  // const classes = useStyles();
  // const [modalStyle] = React.useState(getModalStyle);
  // const [open, setOpen] = React.useState(false);

  var handleDetail = function handleDetail(id) {
    next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/history/".concat(id));
  }; // const handleOpen = (data) => {
  //   setDetailHistory(data);
  //   console.log("ini", data);
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const btaccept = (id) => {
  //   const data = {
  //     id,
  //     token,
  //   };
  //   setOpen(false);
  //   axios
  //     .post(`${URLAPI}transferSuccess/${id}`, data, {
  //       withCredentials: true,
  //     })
  //     .then((response) => {
  //       setOpen(false);
  //       getData();
  //       Swal.fire({
  //         icon: "success",
  //         title: response.data.message,
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     })
  //     .catch((err) => {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Failed",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     });
  // };
  // const btcancelUser = (id) => {
  //   const data = {
  //     id,
  //     token,
  //   };
  //   setOpen(false);
  //   axios
  //     .post(`${URLAPI}transferCancel/${id}`, data, {
  //       withCredentials: true,
  //     })
  //     .then((response) => {
  //       getData();
  //       Swal.fire({
  //         icon: "success",
  //         title: response.data.message,
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       Swal.fire({
  //         icon: "error",
  //         title: "Failed",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     });
  // };
  // const btcancelTarget = (id) => {
  //   const data = {
  //     id,
  //     token,
  //   };
  //   setOpen(false);
  //   axios
  //     .post(`${URLAPI}transferCancel/${id}`, data, {
  //       withCredentials: true,
  //     })
  //     .then((response) => {
  //       getData();
  //       Swal.fire({
  //         icon: "success",
  //         title: response.data.message,
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       Swal.fire({
  //         icon: "error",
  //         title: "Failed",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     });
  // };
  // const changeTime = (time) => {
  //   return Moment(time).format("MMMM DD, YYYY - HH.mm");
  // };
  // end modal


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-2759088451" + " " + "card card-lg h-on-lg border-0 shadow",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-2759088451" + " " + "card-body p-0 p-lg-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-2759088451" + " " + "container h-100 d-flex flex-column",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-2759088451",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-2759088451" + " " + "d-none d-lg-block",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "jsx-2759088451" + " " + "font-weight-bold",
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
            className: "jsx-2759088451" + " " + "font-weight-bold text-muted mb-3",
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
          className: "jsx-2759088451" + " " + "pembungkus looping h-content overflow-auto",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-2759088451" + " " + "text-decoration-none text-dark ",
            children: dataAllUser.data ? dataAllUser.data.map(function (itm, idx) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                onClick: function onClick(event) {
                  return handleDetail(itm.id);
                },
                className: "jsx-2759088451" + " " + "card shadow border-0 mb-3 pointer",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-2759088451" + " " + "card-body h-100",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "jsx-2759088451" + " " + "d-flex",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "jsx-2759088451" + " " + "row align-self-center w-100",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "jsx-2759088451" + " " + "col-4 col-sm-3 col-md-2 imgCenter d-flex justify-content-center",
                        children: itm.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: "".concat(urlImg, "/images/").concat(itm.to_image),
                          className: "jsx-2759088451" + " " + "imgCenter"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 204,
                          columnNumber: 37
                        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: "".concat(urlImg, "/images/").concat(itm.from_image),
                          className: "jsx-2759088451" + " " + "imgCenter"
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
                        className: "jsx-2759088451" + " " + "col d-flex",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "jsx-2759088451" + " " + "align-self-center w-100",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "jsx-2759088451" + " " + "d-flex justify-content-between",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "jsx-2759088451",
                              children: [itm.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                className: "jsx-2759088451" + " " + "font-weight-bold m-0",
                                children: itm.to_name
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 220,
                                columnNumber: 43
                              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                className: "jsx-2759088451" + " " + "font-weight-bold m-0",
                                children: itm.from_name
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 224,
                                columnNumber: 43
                              }, _this), itm.status === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                                className: "jsx-2759088451" + " " + "text-muted m-0",
                                children: "Pending"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 231,
                                columnNumber: 43
                              }, _this) : itm.status === 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                                className: "jsx-2759088451" + " " + "text-muted m-0",
                                children: "Transfer"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 235,
                                columnNumber: 43
                              }, _this) : itm.status === 3 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                                className: "jsx-2759088451" + " " + "text-muted m-0",
                                children: "Cancel"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 239,
                                columnNumber: 43
                              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                                className: "jsx-2759088451" + " " + "text-muted m-0",
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
                              className: "jsx-2759088451",
                              children: itm.status === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                className: "jsx-2759088451" + " " + "font-weight-bold c-pending",
                                children: ["Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_3__["default"])(itm.amount)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 250,
                                columnNumber: 43
                              }, _this) : itm.status === 2 && itm.to_id !== idUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                className: "jsx-2759088451" + " " + "font-weight-bold c-transfer",
                                children: ["-Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_3__["default"])(itm.amount)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 255,
                                columnNumber: 43
                              }, _this) : itm.status === 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                className: "jsx-2759088451" + " " + "font-weight-bold text-success",
                                children: ["+Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_3__["default"])(itm.amount)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 259,
                                columnNumber: 43
                              }, _this) : itm.status === 3 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                className: "jsx-2759088451" + " " + "font-weight-bold c-cancel",
                                children: ["Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_3__["default"])(itm.amount)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 263,
                                columnNumber: 43
                              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                                className: "jsx-2759088451" + " " + "font-weight-bold c-topup",
                                children: ["+Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_3__["default"])(itm.amount)]
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
          className: "jsx-2759088451" + " " + "h-100 d-flex",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-2759088451" + " " + "align-self-center w-100 text-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-2759088451",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: __webpack_require__(/*! ../../assets/images/notransaction.png */ "./assets/images/notransaction.png"),
                alt: "",
                className: "jsx-2759088451"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 288,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                className: "jsx-2759088451" + " " + "font-weight-bold my-3",
                children: "It's Clear!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 292,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "jsx-2759088451" + " " + "text-muted",
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2759088451",
      children: "@media screen and (max-width:992px){.card-lg.jsx-2759088451{background-color:transparent !important;box-shadow:none !important;}.h-content.jsx-2759088451{height:calc(100vh - 12rem);}}.h-content.jsx-2759088451{height:calc(80vh - 12rem);}.imgCenter.jsx-2759088451{object-fit:cover;border-radius:15px;height:60px;width:60px;}div.card.jsx-2759088451{border-radius:15px;}.c-transfer.jsx-2759088451,.c-cancel.jsx-2759088451{color:red;}.c-pending.jsx-2759088451{color:orange;}.c-topup.jsx-2759088451{color:#6379f4;}.imageHistory.jsx-2759088451{height:150px;width:100%;object-fit:cover;border-radius:15px;}@media screen and (min-width:992px){.h-on-lg.jsx-2759088451{height:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxUdXRvcmlhbCBXZWJcXFdlZWsgMTBcXFp3YWxsZXQtRnJvbnRlbmRcXGNvbXBvbmVudHNcXG1vZHVsZVxcSGlzdG9yeUFsbFRyYW5zYWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1ha0IsQUFJcUQsQUFJYixBQUlILEFBR1QsQUFNRSxBQUlULEFBR0csQUFHQyxBQUdELEFBT0MsVUFmaEIsRUFnQkUsQ0FiRixBQU1hLENBSGIsR0FoQnFCLEVBTXJCLEtBY21CLEVBdkJuQixDQUpFLFNBUVksSUFaaUIsQ0FnQ1YsT0FuQlIsV0FDYixDQW1CQSxPQWhDRSIsImZpbGUiOiJEOlxcVHV0b3JpYWwgV2ViXFxXZWVrIDEwXFxad2FsbGV0LUZyb250ZW5kXFxjb21wb25lbnRzXFxtb2R1bGVcXEhpc3RvcnlBbGxUcmFuc2FjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0b1J1cGlhaCBmcm9tIFwiLi4vLi4vaGVscGVycy9jdXJlbmN5VG9JRFJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZ2V0QWxsSGlzdG9yeSB9IGZyb20gXCIuLi8uLi9jb25maWdzL3JlZHV4L2FjdGlvbnMvaGlzdG9yeVwiO1xyXG5cclxuLy8gbW9kYWxcclxuaW1wb3J0IE1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01vZGFsXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiByYW5kKCkge1xyXG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyMCkgLSAxMDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TW9kYWxTdHlsZSgpIHtcclxuICBjb25zdCB0b3AgPSA1MDtcclxuICBjb25zdCBsZWZ0ID0gNTA7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0b3A6IGAke3RvcH0lYCxcclxuICAgIGxlZnQ6IGAke2xlZnR9JWAsXHJcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoLSR7dG9wfSUsIC0ke2xlZnR9JSlgLFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHBhcGVyOiB7XHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgd2lkdGg6IDQwMCxcclxuICAgIGhlaWd0aDogNTAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICBib3JkZXI6IFwiMnB4IHNvbGlkICMwMDBcIixcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXHJcbiAgfSxcclxufSkpO1xyXG4vLyBtb2RhbFxyXG5cclxuZnVuY3Rpb24gSGlzdG9yeUFsbFRyYW5zYWN0aW9uKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG1lc3NhZ2UsIGFsbEhpc3Rvcnk6IGRhdGFBbGxVc2VyIH0gPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUuaGlzdG9yeVxyXG4gICk7XHJcbiAgY29uc3QgdXJsSW1nID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMX0lNQUdFX05PX1NMQVNIO1xyXG4gIGNvbnN0IFVSTEFQSSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9BUElfV0lUSF9TTEFTSDtcclxuXHJcbiAgbGV0IGlkVXNlciwgdG9rZW47XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgaWRVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKTtcclxuICAgIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChnZXRBbGxIaXN0b3J5KGlkVXNlciwgMTAwKSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIC8vIG1vZGFsXHJcbiAgLy8gY29uc3QgW2RldGFpbEhpc3RvcnksIHNldERldGFpbEhpc3RvcnldID0gdXNlU3RhdGUoe30pO1xyXG4gIC8vIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAvLyBjb25zdCBbbW9kYWxTdHlsZV0gPSBSZWFjdC51c2VTdGF0ZShnZXRNb2RhbFN0eWxlKTtcclxuICAvLyBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURldGFpbCA9IChpZCkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2goYC9oaXN0b3J5LyR7aWR9YCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc3QgaGFuZGxlT3BlbiA9IChkYXRhKSA9PiB7XHJcbiAgLy8gICBzZXREZXRhaWxIaXN0b3J5KGRhdGEpO1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJpbmlcIiwgZGF0YSk7XHJcbiAgLy8gICBzZXRPcGVuKHRydWUpO1xyXG4gIC8vIH07XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gIC8vICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgLy8gY29uc3QgYnRhY2NlcHQgPSAoaWQpID0+IHtcclxuICAvLyAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgLy8gICAgIGlkLFxyXG4gIC8vICAgICB0b2tlbixcclxuICAvLyAgIH07XHJcbiAgLy8gICBzZXRPcGVuKGZhbHNlKTtcclxuICAvLyAgIGF4aW9zXHJcbiAgLy8gICAgIC5wb3N0KGAke1VSTEFQSX10cmFuc2ZlclN1Y2Nlc3MvJHtpZH1gLCBkYXRhLCB7XHJcbiAgLy8gICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAvLyAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAvLyAgICAgICBnZXREYXRhKCk7XHJcbiAgLy8gICAgICAgU3dhbC5maXJlKHtcclxuICAvLyAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gIC8vICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAvLyAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAvLyAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gIC8vICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgLy8gICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgLy8gICAgICAgICB0aXRsZTogXCJGYWlsZWRcIixcclxuICAvLyAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAvLyAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICB9KTtcclxuICAvLyB9O1xyXG4gIC8vIGNvbnN0IGJ0Y2FuY2VsVXNlciA9IChpZCkgPT4ge1xyXG4gIC8vICAgY29uc3QgZGF0YSA9IHtcclxuICAvLyAgICAgaWQsXHJcbiAgLy8gICAgIHRva2VuLFxyXG4gIC8vICAgfTtcclxuICAvLyAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIC8vICAgYXhpb3NcclxuICAvLyAgICAgLnBvc3QoYCR7VVJMQVBJfXRyYW5zZmVyQ2FuY2VsLyR7aWR9YCwgZGF0YSwge1xyXG4gIC8vICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gICAgICAgZ2V0RGF0YSgpO1xyXG4gIC8vICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgLy8gICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAvLyAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgLy8gICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgLy8gICAgICAgICB0aW1lcjogMTUwMCxcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIC8vICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgLy8gICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgLy8gICAgICAgICB0aXRsZTogXCJGYWlsZWRcIixcclxuICAvLyAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAvLyAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICB9KTtcclxuICAvLyB9O1xyXG5cclxuICAvLyBjb25zdCBidGNhbmNlbFRhcmdldCA9IChpZCkgPT4ge1xyXG4gIC8vICAgY29uc3QgZGF0YSA9IHtcclxuICAvLyAgICAgaWQsXHJcbiAgLy8gICAgIHRva2VuLFxyXG4gIC8vICAgfTtcclxuICAvLyAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIC8vICAgYXhpb3NcclxuICAvLyAgICAgLnBvc3QoYCR7VVJMQVBJfXRyYW5zZmVyQ2FuY2VsLyR7aWR9YCwgZGF0YSwge1xyXG4gIC8vICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gICAgICAgZ2V0RGF0YSgpO1xyXG4gIC8vICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgLy8gICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAvLyAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgLy8gICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgLy8gICAgICAgICB0aW1lcjogMTUwMCxcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIC8vICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgLy8gICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgLy8gICAgICAgICB0aXRsZTogXCJGYWlsZWRcIixcclxuICAvLyAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAvLyAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICB9KTtcclxuICAvLyB9O1xyXG5cclxuICAvLyBjb25zdCBjaGFuZ2VUaW1lID0gKHRpbWUpID0+IHtcclxuICAvLyAgIHJldHVybiBNb21lbnQodGltZSkuZm9ybWF0KFwiTU1NTSBERCwgWVlZWSAtIEhILm1tXCIpO1xyXG4gIC8vIH07XHJcblxyXG4gIC8vIGVuZCBtb2RhbFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtbGcgaC1vbi1sZyBib3JkZXItMCBzaGFkb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgcC0wIHAtbGctNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGgtMTAwIGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW5vbmUgZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+VHJhbnNhY3Rpb24gSGlzdG9yeTwvaDU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCB0ZXh0LW11dGVkIG1iLTNcIj5UaGlzIFdlZWs8L2g2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPCEtLSBJdGVtIC0tPiAqL31cclxuXHJcbiAgICAgICAgICB7bWVzc2FnZSAhPT0gXCJEYXRhIHVuYXZhaWxhYmxlXCIgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVtYnVuZ2t1cyBsb29waW5nIGgtY29udGVudCBvdmVyZmxvdy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRlY29yYXRpb24tbm9uZSB0ZXh0LWRhcmsgXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogTG9vcGluZyBkaXNpbmkgKi99XHJcbiAgICAgICAgICAgICAgICB7ZGF0YUFsbFVzZXIuZGF0YVxyXG4gICAgICAgICAgICAgICAgICA/IGRhdGFBbGxVc2VyLmRhdGEubWFwKChpdG0sIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQgc2hhZG93IGJvcmRlci0wIG1iLTMgcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBoYW5kbGVEZXRhaWwoaXRtLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1zZWxmLWNlbnRlciB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgY29sLXNtLTMgY29sLW1kLTIgaW1nQ2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvJHtpdG0udG9faW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvJHtpdG0uZnJvbV9pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXIgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0bS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLnRvX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLmZyb21fbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+e3sgaXRtLm5vdGVzIH19PC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0uc3RhdHVzID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlbmRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNmZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9wIFVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0uc3RhdHVzID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBjLXBlbmRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBScHt0b1J1cGlhaChpdG0uYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0uc3RhdHVzID09PSAyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0bS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBjLXRyYW5zZmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLVJwe3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGl0bS5zdGF0dXMgPT09IDIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIHRleHQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtScHt0b1J1cGlhaChpdG0uYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0uc3RhdHVzID09PSAzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBjLWNhbmNlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJwe3RvUnVwaWFoKGl0bS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYy10b3B1cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtScHt0b1J1cGlhaChpdG0uYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEwMCBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyIHctMTAwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ub3RyYW5zYWN0aW9uLnBuZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBteS0zXCI+SXQncyBDbGVhciE8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgWW91J3ZlIG5ldmVyIGRvbmUgYSB0cmFuc2FjdGlvbiBzbyBmYXJcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInNpbXBsZS1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IHN0eWxlPXttb2RhbFN0eWxlfSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlSGlzdG9yeVwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvJHtkZXRhaWxIaXN0b3J5LnRvX2ltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlSGlzdG9yeVwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvJHtkZXRhaWxIaXN0b3J5LmZyb21faW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+e2RldGFpbEhpc3RvcnkudG9fbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS5mcm9tX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnRvX2lkICE9PSBpZFVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+e2RldGFpbEhpc3RvcnkudG9fcGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj57ZGV0YWlsSGlzdG9yeS5mcm9tX3Bob25lfTwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTJcIj5cclxuICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wXCI+QW1vdW50PC9oNj5cclxuICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wIGMtcGVuZGluZyBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICtScHt0b1J1cGlhaChkZXRhaWxIaXN0b3J5LmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICkgOiBkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgZGV0YWlsSGlzdG9yeS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMCBjLXRyYW5zZmVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgLVJwe3RvUnVwaWFoKGRldGFpbEhpc3RvcnkuYW1vdW50KX1cclxuICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgKSA6IGRldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAyID8gKFxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMCB0ZXh0LXN1Y2Nlc3MgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICArUnB7dG9SdXBpYWgoZGV0YWlsSGlzdG9yeS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICApIDogZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDMgPyAoXHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wIGMtY2FuY2VsIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgUnB7dG9SdXBpYWgoZGV0YWlsSGlzdG9yeS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMCBjLXRvcHVwIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgK1Jwe3RvUnVwaWFoKGRldGFpbEhpc3RvcnkuYW1vdW50KX1cclxuICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMFwiPkRhdGUgJiBUaW1lPC9oNj5cclxuICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wXCI+e2NoYW5nZVRpbWUoZGV0YWlsSGlzdG9yeS5jcmVhdGVkX2F0KX08L2g2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtIGZvbnQtd2VpZ2h0LWJvbGRcIj5Ob3RlcyA6PC9oNj5cclxuICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wXCI+e2RldGFpbEhpc3Rvcnkubm90ZXN9PC9oNj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgIHtkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtIGZvbnQtd2VpZ2h0LWJvbGRcIj5TZWxlY3Rpb248L2g2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDEgJiYgZGV0YWlsSGlzdG9yeS50b19pZCA9PT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gYnRjYW5jZWxUYXJnZXQoZGV0YWlsSGlzdG9yeS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBSZWplY3RcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDEgJiYgZGV0YWlsSGlzdG9yeS50b19pZCA9PT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gYnRhY2NlcHQoZGV0YWlsSGlzdG9yeS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEFjY2VwdFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDEgJiYgZGV0YWlsSGlzdG9yeS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gYnRjYW5jZWxVc2VyKGRldGFpbEhpc3RvcnkuaWQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD4gKi99XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgIC5jYXJkLWxnIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmgtY29udGVudCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEycmVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmgtY29udGVudCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoODB2aCAtIDEycmVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZ0NlbnRlciB7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2LmNhcmQge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmMtdHJhbnNmZXIsXHJcbiAgICAgICAgLmMtY2FuY2VsIHtcclxuICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jLXBlbmRpbmcge1xyXG4gICAgICAgICAgY29sb3I6IG9yYW5nZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmMtdG9wdXAge1xyXG4gICAgICAgICAgY29sb3I6ICM2Mzc5ZjQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWFnZUhpc3Rvcnkge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgLmgtb24tbGcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIaXN0b3J5QWxsVHJhbnNhY3Rpb247XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Tutorial Web\\\\Week 10\\\\Zwallet-Frontend\\\\components\\\\module\\\\HistoryAllTransaction.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 176,
    columnNumber: 5
  }, this);
}

_s(HistoryAllTransaction, "uBW35fagWDilH1EFEzyUwOR55Zo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2R1bGUvSGlzdG9yeUFsbFRyYW5zYWN0aW9uLmpzIl0sIm5hbWVzIjpbInJhbmQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJnZXRNb2RhbFN0eWxlIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWd0aCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYm94U2hhZG93Iiwic2hhZG93cyIsInBhZGRpbmciLCJzcGFjaW5nIiwiSGlzdG9yeUFsbFRyYW5zYWN0aW9uIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJoaXN0b3J5IiwibWVzc2FnZSIsImRhdGFBbGxVc2VyIiwiYWxsSGlzdG9yeSIsInVybEltZyIsInByb2Nlc3MiLCJVUkxBUEkiLCJpZFVzZXIiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VFZmZlY3QiLCJnZXRBbGxIaXN0b3J5IiwiaGFuZGxlRGV0YWlsIiwiaWQiLCJSb3V0ZXIiLCJwdXNoIiwiZGF0YSIsIm1hcCIsIml0bSIsImlkeCIsImV2ZW50IiwidG9faWQiLCJ0b19pbWFnZSIsImZyb21faW1hZ2UiLCJ0b19uYW1lIiwiZnJvbV9uYW1lIiwic3RhdHVzIiwidG9SdXBpYWgiLCJhbW91bnQiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNkLFNBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsSUFBaUMsRUFB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c0JBREYsZUFLRTtBQUFBLG9EQUFjLHVCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxGLGVBTUU7QUFBQSxvREFBYSxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTNHSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtU0Q7O0dBeGFRbkMscUI7VUFDVUUsdUQsRUFDNEJDLHVEOzs7S0FGdENILHFCO0FBMGFNQSxvRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9oaXN0b3J5LjllNDNmNzA2YzIyOGZlMDUzNDBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdG9SdXBpYWggZnJvbSBcIi4uLy4uL2hlbHBlcnMvY3VyZW5jeVRvSURSXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGdldEFsbEhpc3RvcnkgfSBmcm9tIFwiLi4vLi4vY29uZmlncy9yZWR1eC9hY3Rpb25zL2hpc3RvcnlcIjtcclxuXHJcbi8vIG1vZGFsXHJcbmltcG9ydCBNb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gcmFuZCgpIHtcclxuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjApIC0gMTA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1vZGFsU3R5bGUoKSB7XHJcbiAgY29uc3QgdG9wID0gNTA7XHJcbiAgY29uc3QgbGVmdCA9IDUwO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdG9wOiBgJHt0b3B9JWAsXHJcbiAgICBsZWZ0OiBgJHtsZWZ0fSVgLFxyXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC0ke3RvcH0lLCAtJHtsZWZ0fSUpYCxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBwYXBlcjoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHdpZHRoOiA0MDAsXHJcbiAgICBoZWlndGg6IDUwMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjMDAwXCIsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbNV0sXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxyXG4gIH0sXHJcbn0pKTtcclxuLy8gbW9kYWxcclxuXHJcbmZ1bmN0aW9uIEhpc3RvcnlBbGxUcmFuc2FjdGlvbigpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZXNzYWdlLCBhbGxIaXN0b3J5OiBkYXRhQWxsVXNlciB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLmhpc3RvcnlcclxuICApO1xyXG4gIGNvbnN0IHVybEltZyA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9JTUFHRV9OT19TTEFTSDtcclxuICBjb25zdCBVUkxBUEkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkxfQVBJX1dJVEhfU0xBU0g7XHJcblxyXG4gIGxldCBpZFVzZXIsIHRva2VuO1xyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGlkVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIik7XHJcbiAgICB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZ2V0QWxsSGlzdG9yeShpZFVzZXIsIDEwMCkpO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICAvLyBtb2RhbFxyXG4gIC8vIGNvbnN0IFtkZXRhaWxIaXN0b3J5LCBzZXREZXRhaWxIaXN0b3J5XSA9IHVzZVN0YXRlKHt9KTtcclxuICAvLyBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgLy8gY29uc3QgW21vZGFsU3R5bGVdID0gUmVhY3QudXNlU3RhdGUoZ2V0TW9kYWxTdHlsZSk7XHJcbiAgLy8gY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEZXRhaWwgPSAoaWQpID0+IHtcclxuICAgIFJvdXRlci5wdXNoKGAvaGlzdG9yeS8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZU9wZW4gPSAoZGF0YSkgPT4ge1xyXG4gIC8vICAgc2V0RGV0YWlsSGlzdG9yeShkYXRhKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiaW5pXCIsIGRhdGEpO1xyXG4gIC8vICAgc2V0T3Blbih0cnVlKTtcclxuICAvLyB9O1xyXG5cclxuICAvLyBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAvLyAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIC8vIH07XHJcblxyXG4gIC8vIGNvbnN0IGJ0YWNjZXB0ID0gKGlkKSA9PiB7XHJcbiAgLy8gICBjb25zdCBkYXRhID0ge1xyXG4gIC8vICAgICBpZCxcclxuICAvLyAgICAgdG9rZW4sXHJcbiAgLy8gICB9O1xyXG4gIC8vICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgLy8gICBheGlvc1xyXG4gIC8vICAgICAucG9zdChgJHtVUkxBUEl9dHJhbnNmZXJTdWNjZXNzLyR7aWR9YCwgZGF0YSwge1xyXG4gIC8vICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgLy8gICAgICAgZ2V0RGF0YSgpO1xyXG4gIC8vICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgLy8gICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAvLyAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXHJcbiAgLy8gICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgLy8gICAgICAgICB0aW1lcjogMTUwMCxcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAvLyAgICAgICBTd2FsLmZpcmUoe1xyXG4gIC8vICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gIC8vICAgICAgICAgdGl0bGU6IFwiRmFpbGVkXCIsXHJcbiAgLy8gICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgLy8gICAgICAgICB0aW1lcjogMTUwMCxcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfTtcclxuICAvLyBjb25zdCBidGNhbmNlbFVzZXIgPSAoaWQpID0+IHtcclxuICAvLyAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgLy8gICAgIGlkLFxyXG4gIC8vICAgICB0b2tlbixcclxuICAvLyAgIH07XHJcbiAgLy8gICBzZXRPcGVuKGZhbHNlKTtcclxuICAvLyAgIGF4aW9zXHJcbiAgLy8gICAgIC5wb3N0KGAke1VSTEFQSX10cmFuc2ZlckNhbmNlbC8ke2lkfWAsIGRhdGEsIHtcclxuICAvLyAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gIC8vICAgICAgIGdldERhdGEoKTtcclxuICAvLyAgICAgICBTd2FsLmZpcmUoe1xyXG4gIC8vICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgLy8gICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gIC8vICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gIC8vICAgICAgICAgdGltZXI6IDE1MDAsXHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAvLyAgICAgICBTd2FsLmZpcmUoe1xyXG4gIC8vICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gIC8vICAgICAgICAgdGl0bGU6IFwiRmFpbGVkXCIsXHJcbiAgLy8gICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgLy8gICAgICAgICB0aW1lcjogMTUwMCxcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgLy8gY29uc3QgYnRjYW5jZWxUYXJnZXQgPSAoaWQpID0+IHtcclxuICAvLyAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgLy8gICAgIGlkLFxyXG4gIC8vICAgICB0b2tlbixcclxuICAvLyAgIH07XHJcbiAgLy8gICBzZXRPcGVuKGZhbHNlKTtcclxuICAvLyAgIGF4aW9zXHJcbiAgLy8gICAgIC5wb3N0KGAke1VSTEFQSX10cmFuc2ZlckNhbmNlbC8ke2lkfWAsIGRhdGEsIHtcclxuICAvLyAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gIC8vICAgICAgIGdldERhdGEoKTtcclxuICAvLyAgICAgICBTd2FsLmZpcmUoe1xyXG4gIC8vICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgLy8gICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxyXG4gIC8vICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gIC8vICAgICAgICAgdGltZXI6IDE1MDAsXHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAvLyAgICAgICBTd2FsLmZpcmUoe1xyXG4gIC8vICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gIC8vICAgICAgICAgdGl0bGU6IFwiRmFpbGVkXCIsXHJcbiAgLy8gICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgLy8gICAgICAgICB0aW1lcjogMTUwMCxcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgLy8gY29uc3QgY2hhbmdlVGltZSA9ICh0aW1lKSA9PiB7XHJcbiAgLy8gICByZXR1cm4gTW9tZW50KHRpbWUpLmZvcm1hdChcIk1NTU0gREQsIFlZWVkgLSBISC5tbVwiKTtcclxuICAvLyB9O1xyXG5cclxuICAvLyBlbmQgbW9kYWxcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWxnIGgtb24tbGcgYm9yZGVyLTAgc2hhZG93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHAtMCBwLWxnLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBoLTEwMCBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ub25lIGQtbGctYmxvY2tcIj5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlRyYW5zYWN0aW9uIEhpc3Rvcnk8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1tdXRlZCBtYi0zXCI+VGhpcyBXZWVrPC9oNj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDwhLS0gSXRlbSAtLT4gKi99XHJcblxyXG4gICAgICAgICAge21lc3NhZ2UgIT09IFwiRGF0YSB1bmF2YWlsYWJsZVwiID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlbWJ1bmdrdXMgbG9vcGluZyBoLWNvbnRlbnQgb3ZlcmZsb3ctYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kZWNvcmF0aW9uLW5vbmUgdGV4dC1kYXJrIFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIExvb3BpbmcgZGlzaW5pICovfVxyXG4gICAgICAgICAgICAgICAge2RhdGFBbGxVc2VyLmRhdGFcclxuICAgICAgICAgICAgICAgICAgPyBkYXRhQWxsVXNlci5kYXRhLm1hcCgoaXRtLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkIHNoYWRvdyBib3JkZXItMCBtYi0zIHBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gaGFuZGxlRGV0YWlsKGl0bS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24tc2VsZi1jZW50ZXIgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGNvbC1zbS0zIGNvbC1tZC0yIGltZ0NlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0bS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nQ2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3VybEltZ30vaW1hZ2VzLyR7aXRtLnRvX2ltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nQ2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3VybEltZ30vaW1hZ2VzLyR7aXRtLmZyb21faW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0udG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0bS50b19uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0bS5mcm9tX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPnt7IGl0bS5ub3RlcyB9fTwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLnN0YXR1cyA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZW5kaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0uc3RhdHVzID09PSAyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zZmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0uc3RhdHVzID09PSAzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvcCBVcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRtLnN0YXR1cyA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYy1wZW5kaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnN0YXR1cyA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdG0udG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYy10cmFuc2ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1ScHt0b1J1cGlhaChpdG0uYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBpdG0uc3RhdHVzID09PSAyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogaXRtLnN0YXR1cyA9PT0gMyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYy1jYW5jZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBScHt0b1J1cGlhaChpdG0uYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGMtdG9wdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArUnB7dG9SdXBpYWgoaXRtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xMDAgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlciB3LTEwMCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbm90cmFuc2FjdGlvbi5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbXktM1wiPkl0J3MgQ2xlYXIhPC9oND5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFlvdSd2ZSBuZXZlciBkb25lIGEgdHJhbnNhY3Rpb24gc28gZmFyXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzaW1wbGUtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17bW9kYWxTdHlsZX0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZUhpc3RvcnlcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2Ake3VybEltZ30vaW1hZ2VzLyR7ZGV0YWlsSGlzdG9yeS50b19pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZUhpc3RvcnlcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2Ake3VybEltZ30vaW1hZ2VzLyR7ZGV0YWlsSGlzdG9yeS5mcm9tX2ltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPntkZXRhaWxIaXN0b3J5LnRvX25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RldGFpbEhpc3RvcnkuZnJvbV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS50b19pZCAhPT0gaWRVc2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPntkZXRhaWxIaXN0b3J5LnRvX3Bob25lfTwvcD5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+e2RldGFpbEhpc3RvcnkuZnJvbV9waG9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMFwiPkFtb3VudDwvaDY+XHJcbiAgICAgICAgICAgICAge2RldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMCBjLXBlbmRpbmcgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICArUnB7dG9SdXBpYWgoZGV0YWlsSGlzdG9yeS5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICApIDogZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDIgJiZcclxuICAgICAgICAgICAgICAgIGRldGFpbEhpc3RvcnkudG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTAgYy10cmFuc2ZlciBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgIC1ScHt0b1J1cGlhaChkZXRhaWxIaXN0b3J5LmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICkgOiBkZXRhaWxIaXN0b3J5LnN0YXR1cyA9PT0gMiA/IChcclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTAgdGV4dC1zdWNjZXNzIGZvbnQtd2VpZ2h0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgK1Jwe3RvUnVwaWFoKGRldGFpbEhpc3RvcnkuYW1vdW50KX1cclxuICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgKSA6IGRldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAzID8gKFxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMCBjLWNhbmNlbCBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgIFJwe3RvUnVwaWFoKGRldGFpbEhpc3RvcnkuYW1vdW50KX1cclxuICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTAgYy10b3B1cCBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICtScHt0b1J1cGlhaChkZXRhaWxIaXN0b3J5LmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItMlwiPlxyXG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtLTBcIj5EYXRlICYgVGltZTwvaDY+XHJcbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMFwiPntjaGFuZ2VUaW1lKGRldGFpbEhpc3RvcnkuY3JlYXRlZF9hdCl9PC9oNj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibSBmb250LXdlaWdodC1ib2xkXCI+Tm90ZXMgOjwvaDY+XHJcbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm0tMFwiPntkZXRhaWxIaXN0b3J5Lm5vdGVzfTwvaDY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICB7ZGV0YWlsSGlzdG9yeS5zdGF0dXMgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibSBmb250LXdlaWdodC1ib2xkXCI+U2VsZWN0aW9uPC9oNj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2RldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAxICYmIGRldGFpbEhpc3RvcnkudG9faWQgPT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGJ0Y2FuY2VsVGFyZ2V0KGRldGFpbEhpc3RvcnkuaWQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBtci0yXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUmVqZWN0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2RldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAxICYmIGRldGFpbEhpc3RvcnkudG9faWQgPT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGJ0YWNjZXB0KGRldGFpbEhpc3RvcnkuaWQpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBBY2NlcHRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAge2RldGFpbEhpc3Rvcnkuc3RhdHVzID09PSAxICYmIGRldGFpbEhpc3RvcnkudG9faWQgIT09IGlkVXNlciA/IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGJ0Y2FuY2VsVXNlcihkZXRhaWxIaXN0b3J5LmlkKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+ICovfVxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAuY2FyZC1sZyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMnJlbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oLWNvbnRlbnQge1xyXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDgwdmggLSAxMnJlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWdDZW50ZXIge1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdi5jYXJkIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jLXRyYW5zZmVyLFxyXG4gICAgICAgIC5jLWNhbmNlbCB7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYy1wZW5kaW5nIHtcclxuICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jLXRvcHVwIHtcclxuICAgICAgICAgIGNvbG9yOiAjNjM3OWY0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1hZ2VIaXN0b3J5IHtcclxuICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgIC5oLW9uLWxnIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGlzdG9yeUFsbFRyYW5zYWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9