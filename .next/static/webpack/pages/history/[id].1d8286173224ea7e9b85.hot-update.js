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


var _jsxFileName = "D:\\Tutorial Web\\Week 10\\Zwallet-Frontend\\components\\module\\detailHistoryTransfer.js",
    _s = $RefreshSig$();







function DetailHistoryTransfer(_ref) {
  _s();

  var details = _ref.details;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var urlImg = "http://localhost:5001";
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
          lineNumber: 16,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "jsx-169527562" + " " + "mt-4",
          children: "Transactions not found"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "jsx-169527562" + " " + "text-center mt-4",
          children: ["We could not find the transaction data you requested, we recommend that you check ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {
            className: "jsx-169527562"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 30
          }, this), " that the data you requested is correct and try again."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
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
            lineNumber: 24,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick(e) {
              return router.push("/dashboard");
            },
            className: "jsx-169527562" + " " + "btn btn-blue radius-12 px-3 py-2 font-weight-bold d-lg-block d-none",
            children: "Back to Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
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
              lineNumber: 42,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          className: "jsx-169527562" + " " + "font-weight-bold",
          children: "Transfer to"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
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
              lineNumber: 49,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-169527562" + " " + "align-self-center",
              children: [details.to_name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "jsx-169527562" + " " + "font-weight-bold",
                children: details.to_name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 21
              }, this), details.to_phone && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "jsx-169527562" + " " + "text-muted m-0",
                children: details.to_phone
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          className: "jsx-169527562" + " " + "font-weight-bold",
          children: "From"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
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
              lineNumber: 71,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-169527562" + " " + "align-self-center",
              children: [details.from_name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                className: "jsx-169527562" + " " + "font-weight-bold",
                children: details.from_name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 21
              }, this), details.from_phone && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "jsx-169527562" + " " + "text-muted m-0",
                children: details.from_phone
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
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
              lineNumber: 91,
              columnNumber: 17
            }, this), details.amount && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "jsx-169527562" + " " + "font-weight-bold m-0",
              children: ["Rp", Object(_helpers_curencyToIDR__WEBPACK_IMPORTED_MODULE_4__["default"])(details.amount)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
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
              lineNumber: 102,
              columnNumber: 17
            }, this), details.dateTime && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "jsx-169527562" + " " + "font-weight-bold m-0",
              children: Object(_helpers_changeTime__WEBPACK_IMPORTED_MODULE_5__["default"])(details.created_at)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
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
              lineNumber: 112,
              columnNumber: 17
            }, this), details.notes && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "jsx-169527562" + " " + "font-weight-bold m-0",
              children: details.notes
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
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
            lineNumber: 120,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick(e) {
              return router.push("/dashboard");
            },
            className: "jsx-169527562" + " " + "btn btn-blue radius-12 px-3 py-2 font-weight-bold d-lg-block d-none",
            children: "Back to Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "169527562",
      children: "@media screen and (max-width:992px){.card-lg.jsx-169527562{box-shadow:none !important;}.body-card.jsx-169527562{padding:0;}}.card.jsx-169527562{border-radius:12px;}.img-people.jsx-169527562{width:100px;height:100px;border-radius:12px;object-fit:cover;}.btn-blue.jsx-169527562{background-color:#6379f4;color:white;}.btn-blue.jsx-169527562:hover{background-color:#5365c9;color:white;}.text-blue.jsx-169527562{color:#6379f4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxUdXRvcmlhbCBXZWJcXFdlZWsgMTBcXFp3YWxsZXQtRnJvbnRlbmRcXGNvbXBvbmVudHNcXG1vZHVsZVxcZGV0YWlsSGlzdG9yeVRyYW5zZmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdJUyxBQUkwQyxBQUdqQixBQUlPLEFBR1AsQUFNYSxBQUtBLEFBSVgsVUFyQmQsRUFPYSxFQWVmLEtBbEJBLE1BSXFCLEFBS1AsQUFLQSxFQXJCWixVQWlCRixBQUtBLE9BVm1CLGlCQUNuQiIsImZpbGUiOiJEOlxcVHV0b3JpYWwgV2ViXFxXZWVrIDEwXFxad2FsbGV0LUZyb250ZW5kXFxjb21wb25lbnRzXFxtb2R1bGVcXGRldGFpbEhpc3RvcnlUcmFuc2Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgdG9SdXBpYWggZnJvbSBcIi4uLy4uL2hlbHBlcnMvY3VyZW5jeVRvSURSXCI7XHJcbmltcG9ydCBjaGFuZ2VUaW1lIGZyb20gXCIuLi8uLi9oZWxwZXJzL2NoYW5nZVRpbWVcIjtcclxuXHJcbmZ1bmN0aW9uIERldGFpbEhpc3RvcnlUcmFuc2Zlcih7IGRldGFpbHMgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB1cmxJbWcgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkxfSU1BR0VfTk9fU0xBU0g7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9yZGVyLTAgc2hhZG93IGNhcmQtbGcgcHktNFwiPlxyXG4gICAgICAgIHtkZXRhaWxzID09PSBudWxsID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYm9keS1jYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNmZXIgZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHAtNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXQtNFwiPlRyYW5zYWN0aW9ucyBub3QgZm91bmQ8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICAgICAgV2UgY291bGQgbm90IGZpbmQgdGhlIHRyYW5zYWN0aW9uIGRhdGEgeW91IHJlcXVlc3RlZCwgd2UgcmVjb21tZW5kXHJcbiAgICAgICAgICAgICAgdGhhdCB5b3UgY2hlY2sgPGJyIC8+IHRoYXQgdGhlIGRhdGEgeW91IHJlcXVlc3RlZCBpcyBjb3JyZWN0IGFuZFxyXG4gICAgICAgICAgICAgIHRyeSBhZ2Fpbi5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIHB0LTVcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsdWUgcmFkaXVzLTEyIHB4LTMgcHktMiBmb250LXdlaWdodC1ib2xkIGJ0bi1ibG9jayBkLWJsb2NrIGQtbGctbm9uZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEJhY2sgdG8gSG9tZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tYmx1ZSByYWRpdXMtMTIgcHgtMyBweS0yIGZvbnQtd2VpZ2h0LWJvbGQgZC1sZy1ibG9jayBkLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBCYWNrIHRvIEhvbWVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYm9keS1jYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5IaXN0b3J5IFRyYW5zZmVyPC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+VHJhbnNmZXIgdG88L2g1PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2hhZG93IGJvcmRlci0wIG1iLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBkLWZsZXggbWItM1wiPlxyXG4gICAgICAgICAgICAgICAge2RldGFpbHMudG9faW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLXBlb3BsZSBtci00XCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3VybEltZ30vaW1hZ2VzLyR7ZGV0YWlscy50b19pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAge2RldGFpbHMudG9fbmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj57ZGV0YWlscy50b19uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHtkZXRhaWxzLnRvX3Bob25lICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPntkZXRhaWxzLnRvX3Bob25lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+RnJvbTwvaDU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3cgYm9yZGVyLTAgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGQtZmxleCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlscy5mcm9tX2ltYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1wZW9wbGUgbXItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2RldGFpbHMuZnJvbV9pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAge2RldGFpbHMuZnJvbV9uYW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPntkZXRhaWxzLmZyb21fbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7ZGV0YWlscy5mcm9tX3Bob25lICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPntkZXRhaWxzLmZyb21fcGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNoYWRvdyBib3JkZXItMCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwPkFtb3VudDwvcD5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxzLmFtb3VudCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFJwe3RvUnVwaWFoKGRldGFpbHMuYW1vdW50KX1cclxuICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNoYWRvdyBib3JkZXItMCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwPkRhdGUgJiBUaW1lPC9wPlxyXG4gICAgICAgICAgICAgICAge2RldGFpbHMuZGF0ZVRpbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhbmdlVGltZShkZXRhaWxzLmNyZWF0ZWRfYXQpfVxyXG4gICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3cgYm9yZGVyLTAgbWItNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5Ob3RlczwvcD5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxzLm5vdGVzICYmIChcclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbS0wXCI+e2RldGFpbHMubm90ZXN9PC9oNT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwdC01XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlIHJhZGl1cy0xMiBweC0zIHB5LTIgZm9udC13ZWlnaHQtYm9sZCBidG4tYmxvY2sgZC1ibG9jayBkLWxnLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBCYWNrIHRvIEhvbWVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsdWUgcmFkaXVzLTEyIHB4LTMgcHktMiBmb250LXdlaWdodC1ib2xkIGQtbGctYmxvY2sgZC1ub25lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIil9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQmFjayB0byBIb21lXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgIC5jYXJkLWxnIHtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJvZHktY2FyZCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmltZy1wZW9wbGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1ibHVlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYzNzlmNDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idG4tYmx1ZTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzY1Yzk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50ZXh0LWJsdWUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzYzNzlmNDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsSGlzdG9yeVRyYW5zZmVyO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Tutorial Web\\\\Week 10\\\\Zwallet-Frontend\\\\components\\\\module\\\\detailHistoryTransfer.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2R1bGUvZGV0YWlsSGlzdG9yeVRyYW5zZmVyLmpzIl0sIm5hbWVzIjpbIkRldGFpbEhpc3RvcnlUcmFuc2ZlciIsImRldGFpbHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1cmxJbWciLCJwcm9jZXNzIiwiZSIsInB1c2giLCJ0b19pbWFnZSIsInRvX25hbWUiLCJ0b19waG9uZSIsImZyb21faW1hZ2UiLCJmcm9tX25hbWUiLCJmcm9tX3Bob25lIiwiYW1vdW50IiwidG9SdXBpYWgiLCJkYXRlVGltZSIsImNoYW5nZVRpbWUiLCJjcmVhdGVkX2F0Iiwibm90ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLHFCQUFULE9BQTRDO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQzFDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLHVCQUFmO0FBRUEsc0JBQ0U7QUFBQSx1Q0FBZSxFQUFmO0FBQUEsNEJBQ0U7QUFBQSx5Q0FBZSxtQ0FBZjtBQUFBLGdCQUNHSixPQUFPLEtBQUssSUFBWixnQkFDQztBQUFBLDJDQUFlLHFCQUFmO0FBQUEsZ0NBQ0U7QUFBQSw2Q0FBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLDZDQUFjLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLDZDQUFhLGtCQUFiO0FBQUEsd0hBRWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFRRTtBQUFBLDZDQUFlLGlDQUFmO0FBQUEsa0NBQ0U7QUFFRSxtQkFBTyxFQUFFLGlCQUFDSyxDQUFEO0FBQUEscUJBQU9KLE1BQU0sQ0FBQ0ssSUFB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cUVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUExQko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0tEOztHQXJLUVAscUI7VUFDUUcscUQ7OztLQURSSCxxQjtBQXVLTUEsb0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaGlzdG9yeS9baWRdLjFkODI4NjE3MzIyNGVhN2U5Yjg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHRvUnVwaWFoIGZyb20gXCIuLi8uLi9oZWxwZXJzL2N1cmVuY3lUb0lEUlwiO1xyXG5pbXBvcnQgY2hhbmdlVGltZSBmcm9tIFwiLi4vLi4vaGVscGVycy9jaGFuZ2VUaW1lXCI7XHJcblxyXG5mdW5jdGlvbiBEZXRhaWxIaXN0b3J5VHJhbnNmZXIoeyBkZXRhaWxzIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgdXJsSW1nID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMX0lNQUdFX05PX1NMQVNIO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvcmRlci0wIHNoYWRvdyBjYXJkLWxnIHB5LTRcIj5cclxuICAgICAgICB7ZGV0YWlscyA9PT0gbnVsbCA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJvZHktY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zZmVyIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBwLTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTRcIj5UcmFuc2FjdGlvbnMgbm90IGZvdW5kPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgICAgICAgIFdlIGNvdWxkIG5vdCBmaW5kIHRoZSB0cmFuc2FjdGlvbiBkYXRhIHlvdSByZXF1ZXN0ZWQsIHdlIHJlY29tbWVuZFxyXG4gICAgICAgICAgICAgIHRoYXQgeW91IGNoZWNrIDxiciAvPiB0aGF0IHRoZSBkYXRhIHlvdSByZXF1ZXN0ZWQgaXMgY29ycmVjdCBhbmRcclxuICAgICAgICAgICAgICB0cnkgYWdhaW4uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBwdC01XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlIHJhZGl1cy0xMiBweC0zIHB5LTIgZm9udC13ZWlnaHQtYm9sZCBidG4tYmxvY2sgZC1ibG9jayBkLWxnLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBCYWNrIHRvIEhvbWVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsdWUgcmFkaXVzLTEyIHB4LTMgcHktMiBmb250LXdlaWdodC1ib2xkIGQtbGctYmxvY2sgZC1ub25lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIil9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQmFjayB0byBIb21lXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJvZHktY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+SGlzdG9yeSBUcmFuc2ZlcjwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPlRyYW5zZmVyIHRvPC9oNT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNoYWRvdyBib3JkZXItMCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZC1mbGV4IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxzLnRvX2ltYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1wZW9wbGUgbXItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHt1cmxJbWd9L2ltYWdlcy8ke2RldGFpbHMudG9faW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkZXRhaWxzLnRvX25hbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+e2RldGFpbHMudG9fbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7ZGV0YWlscy50b19waG9uZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj57ZGV0YWlscy50b19waG9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPkZyb208L2g1PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2hhZG93IGJvcmRlci0wIG1iLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBkLWZsZXggbWItM1wiPlxyXG4gICAgICAgICAgICAgICAge2RldGFpbHMuZnJvbV9pbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctcGVvcGxlIG1yLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvJHtkZXRhaWxzLmZyb21faW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkZXRhaWxzLmZyb21fbmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj57ZGV0YWlscy5mcm9tX25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAge2RldGFpbHMuZnJvbV9waG9uZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj57ZGV0YWlscy5mcm9tX3Bob25lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3cgYm9yZGVyLTAgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5BbW91bnQ8L3A+XHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlscy5hbW91bnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICBScHt0b1J1cGlhaChkZXRhaWxzLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3cgYm9yZGVyLTAgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5EYXRlICYgVGltZTwvcD5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxzLmRhdGVUaW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoYW5nZVRpbWUoZGV0YWlscy5jcmVhdGVkX2F0KX1cclxuICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2hhZG93IGJvcmRlci0wIG1iLTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+Tm90ZXM8L3A+XHJcbiAgICAgICAgICAgICAgICB7ZGV0YWlscy5ub3RlcyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG0tMFwiPntkZXRhaWxzLm5vdGVzfTwvaDU+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgcHQtNVwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tYmx1ZSByYWRpdXMtMTIgcHgtMyBweS0yIGZvbnQtd2VpZ2h0LWJvbGQgYnRuLWJsb2NrIGQtYmxvY2sgZC1sZy1ub25lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIil9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQmFjayB0byBIb21lXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlIHJhZGl1cy0xMiBweC0zIHB5LTIgZm9udC13ZWlnaHQtYm9sZCBkLWxnLWJsb2NrIGQtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEJhY2sgdG8gSG9tZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAuY2FyZC1sZyB7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib2R5LWNhcmQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pbWctcGVvcGxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tYmx1ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2Mzc5ZjQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnRuLWJsdWU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM2NWM5O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGV4dC1ibHVlIHtcclxuICAgICAgICAgICAgY29sb3I6ICM2Mzc5ZjQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbEhpc3RvcnlUcmFuc2ZlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==