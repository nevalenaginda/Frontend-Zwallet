webpackHotUpdate_N_E("pages/history/[id]",{

/***/ "./components/module/detailHistoryTransfer.js":
/*!****************************************************!*\
  !*** ./components/module/detailHistoryTransfer.js ***!
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/curencyToIDR */ "./helpers/curencyToIDR.js");
/* harmony import */ var _helpers_changeTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/changeTime */ "./helpers/changeTime.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "D:\\Tutorial Web\\Week 10\\Zwallet-Frontend\\components\\module\\detailHistoryTransfer.js",
    _s = $RefreshSig$();








function DetailHistoryTransfer(_ref) {
  _s();

  var details = _ref.details;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var urlImg = "http://localhost:5001";
  console.log(details);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-169527562" + " " + "",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-169527562" + " " + "card border-0 shadow card-lg py-4",
      children: details === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-169527562" + " " + "card-body body-card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-169527562" + " " + "transfer d-flex flex-column justify-content-between p-5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "jsx-169527562" + " " + "mt-4",
          children: "Transactions not found"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "jsx-169527562" + " " + "text-center mt-4",
          children: ["We could not find the transaction data you requested, we recommend that you check ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {
            className: "jsx-169527562"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 30
          }, this), " that the data you requested is correct and try again."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-169527562" + " " + "d-flex justify-content-end pt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick(e) {
              return router.push("/dashboard");
            },
            className: "jsx-169527562" + " " + "btn btn-blue radius-12 px-3 py-2 font-weight-bold btn-block d-block d-lg-none",
            children: "Back to Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick(e) {
              return router.push("/dashboard");
            },
            className: "jsx-169527562" + " " + "btn btn-blue radius-12 px-3 py-2 font-weight-bold d-lg-block d-none",
            children: "Back to Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-169527562" + " " + "card-body body-card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-169527562" + " " + "d-flex justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-169527562",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: "jsx-169527562" + " " + "font-weight-bold",
              children: "History Transfer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          className: "jsx-169527562" + " " + "font-weight-bold",
          children: "Transfer to"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-169527562" + " " + "card shadow border-0 mb-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-169527562" + " " + "card-body d-flex mb-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "jsx-169527562" + " " + "w-100 d-block",
              children: "Transfer to"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 17
            }, this), details.to_image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "".concat(urlImg, "/images/").concat(details.to_image),
              alt: "",
              className: "jsx-169527562" + " " + "img-people mr-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-169527562" + " " + "align-self-center",
              children: [details.to_name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "jsx-169527562" + " " + "font-weight-bold",
                children: details.to_name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 21
              }, this), details.to_phone && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "jsx-169527562" + " " + "text-muted m-0",
                children: details.to_phone
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          className: "jsx-169527562" + " " + "font-weight-bold",
          children: "From"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-169527562" + " " + "card shadow border-0 mb-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-169527562" + " " + "card-body d-flex mb-3",
            children: [details.from_image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "".concat(urlImg, "/images/").concat(details.from_image),
              alt: "",
              className: "jsx-169527562" + " " + "img-people mr-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-169527562" + " " + "align-self-center",
              children: [details.from_name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "jsx-169527562" + " " + "font-weight-bold",
                children: details.from_name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 21
              }, this), details.from_phone && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "jsx-169527562" + " " + "text-muted m-0",
                children: details.from_phone
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-169527562" + " " + "card shadow border-0 mb-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-169527562" + " " + "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "jsx-169527562",
              children: "Amount"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 17
            }, this), details.amount && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "jsx-169527562" + " " + "font-weight-bold m-0",
              children: ["Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_4__["default"])(details.amount)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-169527562" + " " + "card shadow border-0 mb-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-169527562" + " " + "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "jsx-169527562",
              children: "Date & Time"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 17
            }, this), details.created_at && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "jsx-169527562" + " " + "font-weight-bold m-0",
              children: Object(_helpers_changeTime__WEBPACK_IMPORTED_MODULE_5__["default"])(details.created_at)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-169527562" + " " + "card shadow border-0 mb-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-169527562" + " " + "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "jsx-169527562",
              children: "Notes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 17
            }, this), details.notes && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "jsx-169527562" + " " + "font-weight-bold m-0",
              children: details.notes
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-169527562" + " " + "d-flex justify-content-end pt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick(e) {
              return router.push("/dashboard");
            },
            className: "jsx-169527562" + " " + "btn btn-blue radius-12 px-3 py-2 font-weight-bold btn-block d-block d-lg-none",
            children: "Back to Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick(e) {
              return router.push("/dashboard");
            },
            className: "jsx-169527562" + " " + "btn btn-blue radius-12 px-3 py-2 font-weight-bold d-lg-block d-none",
            children: "Back to Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "169527562",
      children: "@media screen and (max-width:992px){.card-lg.jsx-169527562{box-shadow:none !important;}.body-card.jsx-169527562{padding:0;}}.card.jsx-169527562{border-radius:12px;}.img-people.jsx-169527562{width:100px;height:100px;border-radius:12px;object-fit:cover;}.btn-blue.jsx-169527562{background-color:#6379f4;color:white;}.btn-blue.jsx-169527562:hover{background-color:#5365c9;color:white;}.text-blue.jsx-169527562{color:#6379f4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxUdXRvcmlhbCBXZWJcXFdlZWsgMTBcXFp3YWxsZXQtRnJvbnRlbmRcXGNvbXBvbmVudHNcXG1vZHVsZVxcZGV0YWlsSGlzdG9yeVRyYW5zZmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJJUyxBQUkwQyxBQUdqQixBQUlPLEFBR1AsQUFNYSxBQUtBLEFBSVgsVUFyQmQsRUFPYSxFQWVmLEtBbEJBLE1BSXFCLEFBS1AsQUFLQSxFQXJCWixVQWlCRixBQUtBLE9BVm1CLGlCQUNuQiIsImZpbGUiOiJEOlxcVHV0b3JpYWwgV2ViXFxXZWVrIDEwXFxad2FsbGV0LUZyb250ZW5kXFxjb21wb25lbnRzXFxtb2R1bGVcXGRldGFpbEhpc3RvcnlUcmFuc2Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgdG9SdXBpYWggZnJvbSBcIi4uLy4uL2hlbHBlcnMvY3VyZW5jeVRvSURSXCI7XHJcbmltcG9ydCBjaGFuZ2VUaW1lIGZyb20gXCIuLi8uLi9oZWxwZXJzL2NoYW5nZVRpbWVcIjtcclxuaW1wb3J0IE1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5mdW5jdGlvbiBEZXRhaWxIaXN0b3J5VHJhbnNmZXIoeyBkZXRhaWxzIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgdXJsSW1nID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMX0lNQUdFX05PX1NMQVNIO1xyXG5cclxuICBjb25zb2xlLmxvZyhkZXRhaWxzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvcmRlci0wIHNoYWRvdyBjYXJkLWxnIHB5LTRcIj5cclxuICAgICAgICB7ZGV0YWlscyA9PT0gbnVsbCA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJvZHktY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zZmVyIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBwLTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTRcIj5UcmFuc2FjdGlvbnMgbm90IGZvdW5kPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICAgIFdlIGNvdWxkIG5vdCBmaW5kIHRoZSB0cmFuc2FjdGlvbiBkYXRhIHlvdSByZXF1ZXN0ZWQsIHdlIHJlY29tbWVuZFxyXG4gICAgICAgICAgICAgIHRoYXQgeW91IGNoZWNrIDxiciAvPiB0aGF0IHRoZSBkYXRhIHlvdSByZXF1ZXN0ZWQgaXMgY29ycmVjdCBhbmRcclxuICAgICAgICAgICAgICB0cnkgYWdhaW4uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwdC01XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlIHJhZGl1cy0xMiBweC0zIHB5LTIgZm9udC13ZWlnaHQtYm9sZCBidG4tYmxvY2sgZC1ibG9jayBkLWxnLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBCYWNrIHRvIEhvbWVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsdWUgcmFkaXVzLTEyIHB4LTMgcHktMiBmb250LXdlaWdodC1ib2xkIGQtbGctYmxvY2sgZC1ub25lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIil9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQmFjayB0byBIb21lXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJvZHktY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+SGlzdG9yeSBUcmFuc2ZlcjwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlRyYW5zZmVyIHRvPC9oNT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNoYWRvdyBib3JkZXItMCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZC1mbGV4IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInctMTAwIGQtYmxvY2tcIj5UcmFuc2ZlciB0bzwvcD5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxzLnRvX2ltYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1wZW9wbGUgbXItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2RldGFpbHMudG9faW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkZXRhaWxzLnRvX25hbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+e2RldGFpbHMudG9fbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7ZGV0YWlscy50b19waG9uZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj57ZGV0YWlscy50b19waG9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPkZyb208L2g1PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2hhZG93IGJvcmRlci0wIG1iLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBkLWZsZXggbWItM1wiPlxyXG4gICAgICAgICAgICAgICAge2RldGFpbHMuZnJvbV9pbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctcGVvcGxlIG1yLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvJHtkZXRhaWxzLmZyb21faW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkZXRhaWxzLmZyb21fbmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj57ZGV0YWlscy5mcm9tX25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAge2RldGFpbHMuZnJvbV9waG9uZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj57ZGV0YWlscy5mcm9tX3Bob25lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3cgYm9yZGVyLTAgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5BbW91bnQ8L3A+XHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlscy5hbW91bnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICBScHt0b1J1cGlhaChkZXRhaWxzLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3cgYm9yZGVyLTAgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5EYXRlICYgVGltZTwvcD5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxzLmNyZWF0ZWRfYXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhbmdlVGltZShkZXRhaWxzLmNyZWF0ZWRfYXQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3cgYm9yZGVyLTAgbWItNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5Ob3RlczwvcD5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxzLm5vdGVzICYmIChcclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbS0wXCI+e2RldGFpbHMubm90ZXN9PC9oNT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwdC01XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlIHJhZGl1cy0xMiBweC0zIHB5LTIgZm9udC13ZWlnaHQtYm9sZCBidG4tYmxvY2sgZC1ibG9jayBkLWxnLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBCYWNrIHRvIEhvbWVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsdWUgcmFkaXVzLTEyIHB4LTMgcHktMiBmb250LXdlaWdodC1ib2xkIGQtbGctYmxvY2sgZC1ub25lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIil9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQmFjayB0byBIb21lXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgIC5jYXJkLWxnIHtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJvZHktY2FyZCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmltZy1wZW9wbGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1ibHVlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYzNzlmNDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idG4tYmx1ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzY1Yzk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZXh0LWJsdWUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzYzNzlmNDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsSGlzdG9yeVRyYW5zZmVyO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Tutorial Web\\\\Week 10\\\\Zwallet-Frontend\\\\components\\\\module\\\\detailHistoryTransfer.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(DetailHistoryTransfer, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = DetailHistoryTransfer;
/* harmony default export */ __webpack_exports__["default"] = (DetailHistoryTransfer);

var _c;

$RefreshReg$(_c, "DetailHistoryTransfer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2R1bGUvZGV0YWlsSGlzdG9yeVRyYW5zZmVyLmpzIl0sIm5hbWVzIjpbIkRldGFpbEhpc3RvcnlUcmFuc2ZlciIsImRldGFpbHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1cmxJbWciLCJwcm9jZXNzIiwiY29uc29sZSIsImxvZyIsImUiLCJwdXNoIiwidG9faW1hZ2UiLCJ0b19uYW1lIiwidG9fcGhvbmUiLCJmcm9tX2ltYWdlIiwiZnJvbV9uYW1lIiwiZnJvbV9waG9uZSIsImFtb3VudCIsInRvUnVwaWFoIiwiY3JlYXRlZF9hdCIsImNoYW5nZVRpbWUiLCJub3RlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLHFCQUFULE9BQTRDO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQzFDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLHVCQUFmO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixPQUFaO0FBQ0Esc0JBQ0U7QUFBQSx1Q0FBZSxFQUFmO0FBQUEsNEJBQ0U7QUFBQSx5Q0FBZSxtQ0FBZjtBQUFBLGdCQUNHQSxPQUFPLEtBQUssSUFBWixnQkFDQztBQUFBLDJDQUFlLHFCQUFmO0FBQUEsZ0NBQ0U7QUFBQSw2Q0FBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLDZDQUFjLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLDZDQUFhLGtCQUFiO0FBQUEsd0hBRWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFRRTtBQUFBLDZDQUFlLGlDQUFmO0FBQUEsa0NBQ0U7QUFFRSxtQkFB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LGtCQURGLGVBT0U7QUFFRSxtQkFBTyxFQUFFLGlCQUFDRCxDQUFEO0FBQUEscUJBQU9OLE1BQU0sQ0FBQ08sSUFBUCxDQUFZLFlBQVosQ0FBUDtBQUFBLGFBRlg7QUFBQSwrQ0FDWSxxRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpS0Q7O0dBdktRVCxxQjtVQUNRRyxxRDs7O0tBRFJILHFCO0FBeUtNQSxvRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9oaXN0b3J5L1tpZF0uNWNhZjc0N2E1YjJiOGQ3OWIyN2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgdG9SdXBpYWggZnJvbSBcIi4uLy4uL2hlbHBlcnMvY3VyZW5jeVRvSURSXCI7XHJcbmltcG9ydCBjaGFuZ2VUaW1lIGZyb20gXCIuLi8uLi9oZWxwZXJzL2NoYW5nZVRpbWVcIjtcclxuaW1wb3J0IE1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5mdW5jdGlvbiBEZXRhaWxIaXN0b3J5VHJhbnNmZXIoeyBkZXRhaWxzIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgdXJsSW1nID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMX0lNQUdFX05PX1NMQVNIO1xyXG5cclxuICBjb25zb2xlLmxvZyhkZXRhaWxzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvcmRlci0wIHNoYWRvdyBjYXJkLWxnIHB5LTRcIj5cclxuICAgICAgICB7ZGV0YWlscyA9PT0gbnVsbCA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJvZHktY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zZmVyIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBwLTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTRcIj5UcmFuc2FjdGlvbnMgbm90IGZvdW5kPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICAgIFdlIGNvdWxkIG5vdCBmaW5kIHRoZSB0cmFuc2FjdGlvbiBkYXRhIHlvdSByZXF1ZXN0ZWQsIHdlIHJlY29tbWVuZFxyXG4gICAgICAgICAgICAgIHRoYXQgeW91IGNoZWNrIDxiciAvPiB0aGF0IHRoZSBkYXRhIHlvdSByZXF1ZXN0ZWQgaXMgY29ycmVjdCBhbmRcclxuICAgICAgICAgICAgICB0cnkgYWdhaW4uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwdC01XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlIHJhZGl1cy0xMiBweC0zIHB5LTIgZm9udC13ZWlnaHQtYm9sZCBidG4tYmxvY2sgZC1ibG9jayBkLWxnLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBCYWNrIHRvIEhvbWVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsdWUgcmFkaXVzLTEyIHB4LTMgcHktMiBmb250LXdlaWdodC1ib2xkIGQtbGctYmxvY2sgZC1ub25lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIil9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQmFjayB0byBIb21lXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJvZHktY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+SGlzdG9yeSBUcmFuc2ZlcjwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlRyYW5zZmVyIHRvPC9oNT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNoYWRvdyBib3JkZXItMCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZC1mbGV4IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInctMTAwIGQtYmxvY2tcIj5UcmFuc2ZlciB0bzwvcD5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxzLnRvX2ltYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1wZW9wbGUgbXItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2RldGFpbHMudG9faW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkZXRhaWxzLnRvX25hbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+e2RldGFpbHMudG9fbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7ZGV0YWlscy50b19waG9uZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj57ZGV0YWlscy50b19waG9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPkZyb208L2g1PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2hhZG93IGJvcmRlci0wIG1iLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBkLWZsZXggbWItM1wiPlxyXG4gICAgICAgICAgICAgICAge2RldGFpbHMuZnJvbV9pbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctcGVvcGxlIG1yLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvJHtkZXRhaWxzLmZyb21faW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkZXRhaWxzLmZyb21fbmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj57ZGV0YWlscy5mcm9tX25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAge2RldGFpbHMuZnJvbV9waG9uZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj57ZGV0YWlscy5mcm9tX3Bob25lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3cgYm9yZGVyLTAgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5BbW91bnQ8L3A+XHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlscy5hbW91bnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICBScHt0b1J1cGlhaChkZXRhaWxzLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3cgYm9yZGVyLTAgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5EYXRlICYgVGltZTwvcD5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxzLmNyZWF0ZWRfYXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhbmdlVGltZShkZXRhaWxzLmNyZWF0ZWRfYXQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3cgYm9yZGVyLTAgbWItNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5Ob3RlczwvcD5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxzLm5vdGVzICYmIChcclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbS0wXCI+e2RldGFpbHMubm90ZXN9PC9oNT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwdC01XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlIHJhZGl1cy0xMiBweC0zIHB5LTIgZm9udC13ZWlnaHQtYm9sZCBidG4tYmxvY2sgZC1ibG9jayBkLWxnLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBCYWNrIHRvIEhvbWVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsdWUgcmFkaXVzLTEyIHB4LTMgcHktMiBmb250LXdlaWdodC1ib2xkIGQtbGctYmxvY2sgZC1ub25lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIil9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQmFjayB0byBIb21lXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgIC5jYXJkLWxnIHtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJvZHktY2FyZCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmltZy1wZW9wbGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1ibHVlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYzNzlmNDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idG4tYmx1ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzY1Yzk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZXh0LWJsdWUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzYzNzlmNDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsSGlzdG9yeVRyYW5zZmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9