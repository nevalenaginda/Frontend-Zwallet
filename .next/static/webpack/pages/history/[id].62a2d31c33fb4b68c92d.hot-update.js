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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\Tutorial Web\\Week 10\\Zwallet-Frontend\\components\\module\\detailHistoryTransfer.js",
    _s = $RefreshSig$();







function DetailHistoryTransfer(_ref) {
  _s();

  var details = _ref.details;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var urlImg = "http://localhost:5001";

  var changeTime = function changeTime(time) {
    return moment__WEBPACK_IMPORTED_MODULE_5___default()(time).format("MMMM DD, YYYY - HH.mm");
  };

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
          lineNumber: 19,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "jsx-169527562" + " " + "mt-4",
          children: "Transactions not found"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "jsx-169527562" + " " + "text-center mt-4",
          children: ["We could not find the transaction data you requested, we recommend that you check ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {
            className: "jsx-169527562"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 30
          }, this), " that the data you requested is correct and try again."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
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
            lineNumber: 27,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick(e) {
              return router.push("/dashboard");
            },
            className: "jsx-169527562" + " " + "btn btn-blue radius-12 px-3 py-2 font-weight-bold d-lg-block d-none",
            children: "Back to Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
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
              lineNumber: 45,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          className: "jsx-169527562" + " " + "font-weight-bold",
          children: "Transfer to"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-169527562" + " " + "card shadow border-0 mb-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-169527562" + " " + "card-body d-flex mb-3",
            children: [details.to_image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
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
            lineNumber: 50,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
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
            }, this), details.dateTime && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "jsx-169527562" + " " + "font-weight-bold m-0",
              children: changeTime(details.created_at)
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
        lineNumber: 42,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "169527562",
      children: "@media screen and (max-width:992px){.card-lg.jsx-169527562{box-shadow:none !important;}.body-card.jsx-169527562{padding:0;}}.card.jsx-169527562{border-radius:12px;}.img-people.jsx-169527562{width:100px;height:100px;border-radius:12px;object-fit:cover;}.btn-blue.jsx-169527562{background-color:#6379f4;color:white;}.btn-blue.jsx-169527562:hover{background-color:#5365c9;color:white;}.text-blue.jsx-169527562{color:#6379f4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxUdXRvcmlhbCBXZWJcXFdlZWsgMTBcXFp3YWxsZXQtRnJvbnRlbmRcXGNvbXBvbmVudHNcXG1vZHVsZVxcZGV0YWlsSGlzdG9yeVRyYW5zZmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJJUyxBQUkwQyxBQUdqQixBQUlPLEFBR1AsQUFNYSxBQUtBLEFBSVgsVUFyQmQsRUFPYSxFQWVmLEtBbEJBLE1BSXFCLEFBS1AsQUFLQSxFQXJCWixVQWlCRixBQUtBLE9BVm1CLGlCQUNuQiIsImZpbGUiOiJEOlxcVHV0b3JpYWwgV2ViXFxXZWVrIDEwXFxad2FsbGV0LUZyb250ZW5kXFxjb21wb25lbnRzXFxtb2R1bGVcXGRldGFpbEhpc3RvcnlUcmFuc2Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgdG9SdXBpYWggZnJvbSBcIi4uLy4uL2hlbHBlcnMvY3VyZW5jeVRvSURSXCI7XHJcbmltcG9ydCBNb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuZnVuY3Rpb24gRGV0YWlsSGlzdG9yeVRyYW5zZmVyKHsgZGV0YWlscyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHVybEltZyA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9JTUFHRV9OT19TTEFTSDtcclxuICBjb25zdCBjaGFuZ2VUaW1lID0gKHRpbWUpID0+IHtcclxuICAgIHJldHVybiBNb21lbnQodGltZSkuZm9ybWF0KFwiTU1NTSBERCwgWVlZWSAtIEhILm1tXCIpO1xyXG4gIH07XHJcbiAgY29uc29sZS5sb2coZGV0YWlscyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBib3JkZXItMCBzaGFkb3cgY2FyZC1sZyBweS00XCI+XHJcbiAgICAgICAge2RldGFpbHMgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBib2R5LWNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2ZlciBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWJldHdlZW4gcC01XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC00XCI+VHJhbnNhY3Rpb25zIG5vdCBmb3VuZDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgICAgICBXZSBjb3VsZCBub3QgZmluZCB0aGUgdHJhbnNhY3Rpb24gZGF0YSB5b3UgcmVxdWVzdGVkLCB3ZSByZWNvbW1lbmRcclxuICAgICAgICAgICAgICB0aGF0IHlvdSBjaGVjayA8YnIgLz4gdGhhdCB0aGUgZGF0YSB5b3UgcmVxdWVzdGVkIGlzIGNvcnJlY3QgYW5kXHJcbiAgICAgICAgICAgICAgdHJ5IGFnYWluLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgcHQtNVwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tYmx1ZSByYWRpdXMtMTIgcHgtMyBweS0yIGZvbnQtd2VpZ2h0LWJvbGQgYnRuLWJsb2NrIGQtYmxvY2sgZC1sZy1ub25lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIil9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQmFjayB0byBIb21lXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlIHJhZGl1cy0xMiBweC0zIHB5LTIgZm9udC13ZWlnaHQtYm9sZCBkLWxnLWJsb2NrIGQtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEJhY2sgdG8gSG9tZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBib2R5LWNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPkhpc3RvcnkgVHJhbnNmZXI8L2gzPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5UcmFuc2ZlciB0bzwvaDU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3cgYm9yZGVyLTAgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGQtZmxleCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlscy50b19pbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctcGVvcGxlIG1yLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvJHtkZXRhaWxzLnRvX2ltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGV0YWlscy50b19uYW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPntkZXRhaWxzLnRvX25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAge2RldGFpbHMudG9fcGhvbmUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+e2RldGFpbHMudG9fcGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5Gcm9tPC9oNT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNoYWRvdyBib3JkZXItMCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZC1mbGV4IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxzLmZyb21faW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLXBlb3BsZSBtci00XCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3VybEltZ30vaW1hZ2VzLyR7ZGV0YWlscy5mcm9tX2ltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGV0YWlscy5mcm9tX25hbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+e2RldGFpbHMuZnJvbV9uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHtkZXRhaWxzLmZyb21fcGhvbmUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgbS0wXCI+e2RldGFpbHMuZnJvbV9waG9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2hhZG93IGJvcmRlci0wIG1iLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+QW1vdW50PC9wPlxyXG4gICAgICAgICAgICAgICAge2RldGFpbHMuYW1vdW50ICYmIChcclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUnB7dG9SdXBpYWgoZGV0YWlscy5hbW91bnQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2hhZG93IGJvcmRlci0wIG1iLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+RGF0ZSAmIFRpbWU8L3A+XHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlscy5kYXRlVGltZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGFuZ2VUaW1lKGRldGFpbHMuY3JlYXRlZF9hdCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNoYWRvdyBib3JkZXItMCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwPk5vdGVzPC9wPlxyXG4gICAgICAgICAgICAgICAge2RldGFpbHMubm90ZXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtLTBcIj57ZGV0YWlscy5ub3Rlc308L2g1PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIHB0LTVcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsdWUgcmFkaXVzLTEyIHB4LTMgcHktMiBmb250LXdlaWdodC1ib2xkIGJ0bi1ibG9jayBkLWJsb2NrIGQtbGctbm9uZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEJhY2sgdG8gSG9tZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tYmx1ZSByYWRpdXMtMTIgcHgtMyBweS0yIGZvbnQtd2VpZ2h0LWJvbGQgZC1sZy1ibG9jayBkLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBCYWNrIHRvIEhvbWVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLmNhcmQtbGcge1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm9keS1jYXJkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaW1nLXBlb3BsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuLWJsdWUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM3OWY0O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ0bi1ibHVlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUzNjVjOTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRleHQtYmx1ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjM3OWY0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxIaXN0b3J5VHJhbnNmZXI7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Tutorial Web\\\\Week 10\\\\Zwallet-Frontend\\\\components\\\\module\\\\detailHistoryTransfer.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2R1bGUvZGV0YWlsSGlzdG9yeVRyYW5zZmVyLmpzIl0sIm5hbWVzIjpbIkRldGFpbEhpc3RvcnlUcmFuc2ZlciIsImRldGFpbHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1cmxJbWciLCJwcm9jZXNzIiwiY2hhbmdlVGltZSIsInRpbWUiLCJNb21lbnQiLCJmb3JtYXQiLCJjb25zb2xlIiwibG9nIiwiZSIsInB1c2giLCJ0b19pbWFnZSIsInRvX25hbWUiLCJ0b19waG9uZSIsImZyb21faW1hZ2UiLCJmcm9tX25hbWUiLCJmcm9tX3Bob25lIiwiYW1vdW50IiwidG9SdXBpYWgiLCJkYXRlVGltZSIsImNyZWF0ZWRfYXQiLCJub3RlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLHFCQUFULE9BQTRDO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQzFDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLHVCQUFmOztBQUNBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBVTtBQUMzQixXQUFPQyw2Q0FBTSxDQUFDRCxJQUFELENBQU4sQ0FBYUUsTUFBYixDQUFvQix1QkFBcEIsQ0FBUDtBQUNELEdBRkQ7O0FBR0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVixPQUFaO0FBQ0Esc0JBQ0U7QUFBQSx1Q0FBZSxFQUFmO0FBQUEsNEJBQ0U7QUFBQSx5Q0FBZSxtQ0FBZjtBQUFBLGdCQUNHQSxPQUFPLEtBQUssSUFBWixnQkFDQztBQUFBLDJDQUFlLHFCQUFmO0FBQUEsZ0NBQ0U7QUFBQSw2Q0FBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLDZDQUFjLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFDWixDQUFEO0FBQUEscUJBQU9WLE1BQU0sQ0FBQ1csSUFBUCxDQUFZLFlBQVosQ0FBUDtBQUFBLGFBRlg7QUFBQSwrQ0FDWSwrRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU9FO0FBRUUsbUJBQU8sRUFBRSxpQkFBQ0QsQ0FBRDtBQUFBLHFCQUFPVixNQUFNLENBQUNXLElBQVAsQ0FBWSxZQUFaLENBQVA7QUFBQSxhQUZYO0FBQUEsK0NBQ1kscUVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUExQko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0tEOztHQXhLUWIscUI7VUFDUUcscUQ7OztLQURSSCxxQjtBQTBLTUEsb0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaGlzdG9yeS9baWRdLjYyYTJkMzFjMzNmYjRiNjhjOTJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHRvUnVwaWFoIGZyb20gXCIuLi8uLi9oZWxwZXJzL2N1cmVuY3lUb0lEUlwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmZ1bmN0aW9uIERldGFpbEhpc3RvcnlUcmFuc2Zlcih7IGRldGFpbHMgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB1cmxJbWcgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkxfSU1BR0VfTk9fU0xBU0g7XHJcbiAgY29uc3QgY2hhbmdlVGltZSA9ICh0aW1lKSA9PiB7XHJcbiAgICByZXR1cm4gTW9tZW50KHRpbWUpLmZvcm1hdChcIk1NTU0gREQsIFlZWVkgLSBISC5tbVwiKTtcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKGRldGFpbHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9yZGVyLTAgc2hhZG93IGNhcmQtbGcgcHktNFwiPlxyXG4gICAgICAgIHtkZXRhaWxzID09PSBudWxsID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYm9keS1jYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNmZXIgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHAtNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXQtNFwiPlRyYW5zYWN0aW9ucyBub3QgZm91bmQ8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICAgICAgV2UgY291bGQgbm90IGZpbmQgdGhlIHRyYW5zYWN0aW9uIGRhdGEgeW91IHJlcXVlc3RlZCwgd2UgcmVjb21tZW5kXHJcbiAgICAgICAgICAgICAgdGhhdCB5b3UgY2hlY2sgPGJyIC8+IHRoYXQgdGhlIGRhdGEgeW91IHJlcXVlc3RlZCBpcyBjb3JyZWN0IGFuZFxyXG4gICAgICAgICAgICAgIHRyeSBhZ2Fpbi5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIHB0LTVcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsdWUgcmFkaXVzLTEyIHB4LTMgcHktMiBmb250LXdlaWdodC1ib2xkIGJ0bi1ibG9jayBkLWJsb2NrIGQtbGctbm9uZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEJhY2sgdG8gSG9tZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tYmx1ZSByYWRpdXMtMTIgcHgtMyBweS0yIGZvbnQtd2VpZ2h0LWJvbGQgZC1sZy1ibG9jayBkLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBCYWNrIHRvIEhvbWVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYm9keS1jYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5IaXN0b3J5IFRyYW5zZmVyPC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+VHJhbnNmZXIgdG88L2g1PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2hhZG93IGJvcmRlci0wIG1iLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBkLWZsZXggbWItM1wiPlxyXG4gICAgICAgICAgICAgICAge2RldGFpbHMudG9faW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLXBlb3BsZSBtci00XCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3VybEltZ30vaW1hZ2VzLyR7ZGV0YWlscy50b19pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAge2RldGFpbHMudG9fbmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj57ZGV0YWlscy50b19uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHtkZXRhaWxzLnRvX3Bob25lICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPntkZXRhaWxzLnRvX3Bob25lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+RnJvbTwvaDU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3cgYm9yZGVyLTAgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGQtZmxleCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlscy5mcm9tX2ltYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1wZW9wbGUgbXItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2RldGFpbHMuZnJvbV9pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAge2RldGFpbHMuZnJvbV9uYW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPntkZXRhaWxzLmZyb21fbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7ZGV0YWlscy5mcm9tX3Bob25lICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPntkZXRhaWxzLmZyb21fcGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNoYWRvdyBib3JkZXItMCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwPkFtb3VudDwvcD5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxzLmFtb3VudCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFJwe3RvUnVwaWFoKGRldGFpbHMuYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNoYWRvdyBib3JkZXItMCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwPkRhdGUgJiBUaW1lPC9wPlxyXG4gICAgICAgICAgICAgICAge2RldGFpbHMuZGF0ZVRpbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhbmdlVGltZShkZXRhaWxzLmNyZWF0ZWRfYXQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3cgYm9yZGVyLTAgbWItNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5Ob3RlczwvcD5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxzLm5vdGVzICYmIChcclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbS0wXCI+e2RldGFpbHMubm90ZXN9PC9oNT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwdC01XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlIHJhZGl1cy0xMiBweC0zIHB5LTIgZm9udC13ZWlnaHQtYm9sZCBidG4tYmxvY2sgZC1ibG9jayBkLWxnLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBCYWNrIHRvIEhvbWVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsdWUgcmFkaXVzLTEyIHB4LTMgcHktMiBmb250LXdlaWdodC1ib2xkIGQtbGctYmxvY2sgZC1ub25lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIil9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQmFjayB0byBIb21lXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgIC5jYXJkLWxnIHtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJvZHktY2FyZCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmltZy1wZW9wbGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1ibHVlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYzNzlmNDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idG4tYmx1ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzY1Yzk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZXh0LWJsdWUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzYzNzlmNDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsSGlzdG9yeVRyYW5zZmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9