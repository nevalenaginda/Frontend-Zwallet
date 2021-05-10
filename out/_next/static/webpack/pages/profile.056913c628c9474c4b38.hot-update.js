webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/module/Profile.js":
/*!**************************************!*\
  !*** ./components/module/Profile.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _configs_redux_actions_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../configs/redux/actions/user */ "./configs/redux/actions/user.js");



var _jsxFileName = "D:\\Tutorial Web\\Week 10\\Zwallet-Frontend\\components\\module\\Profile.js",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_Tutorial_Web_Week_10_Zwallet_Frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function Profile(_ref) {
  _s();

  var className = _ref.className;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var urlImg = "http://localhost:5001";

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      user = _useSelector.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(user),
      dataUser = _useState[0],
      setDataUser = _useState[1];

  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("".concat(urlImg, "/images/").concat(user.image)),
      imgUrl = _useState2[0],
      setImgUrl = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    image: null
  }),
      dataImage = _useState3[0],
      setDataImage = _useState3[1];

  var handleChangeImage = function handleChangeImage(event) {
    var imgFiles = event.target.files[0];
    setImgUrl(URL.createObjectURL(event.target.files[0]));
    setDataImage({
      image: imgFiles
    });
  };

  var handleFormChange = function handleFormChange(event) {
    var dataNew = _objectSpread({}, dataUser);

    dataNew[event.target.name] = event.target.value;
    setDataUser(dataNew);
    console.log(dataUser);
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData();
    formData.append("name", dataUser.name);
    formData.append("phone", dataUser.phone);

    if (dataImage.image !== null) {
      formData.append("image", dataImage.image);
    }

    dispatch(Object(_configs_redux_actions_user__WEBPACK_IMPORTED_MODULE_6__["updateUser"])(formData, user.id)).then(function (res) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
        icon: "success",
        title: res.data.message,
        showConfirmButton: false,
        timer: 1500
      });
    })["catch"](function (err) {
      console.log(err);
      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
        icon: "error",
        title: err.response.data.message,
        showConfirmButton: false,
        timer: 1500
      });
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setDataUser(user);
    setImgUrl("".concat(urlImg, "/images/").concat(user.image));
  }, [user]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-532506091" + " " + (className || ""),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-532506091" + " " + "card border-0 shadow",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-532506091" + " " + "card-body",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-532506091" + " " + "py-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-532506091" + " " + "container d-flex justify-content-center mb-2",
            children: dataUser.image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "".concat(urlImg, "/images/").concat(dataUser.image),
              alt: "",
              className: "jsx-532506091" + " " + "img-people"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 17
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: __webpack_require__(/*! ../../assets/images/default-user.svg */ "./assets/images/default-user.svg"),
              alt: "",
              className: "jsx-532506091" + " " + "img-people"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "data-toggle": "modal",
            "data-target": "#exampleModal",
            className: "jsx-532506091" + " " + "text-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "jsx-532506091" + " " + "text-muted pointer",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "jsx-532506091" + " " + "fas fa-pencil-alt"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, this), " Edit"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-532506091" + " " + "container text-center",
            children: [dataUser.name ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: "jsx-532506091" + " " + "font-weight-bold",
              children: dataUser.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 17
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: "jsx-532506091" + " " + "font-weight-bold"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 17
            }, this), dataUser.phone ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "jsx-532506091" + " " + "text-muted m-0",
              children: dataUser.phone
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 17
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "jsx-532506091" + " " + "text-muted m-0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "exampleModal",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true",
      className: "jsx-532506091" + " " + "modal fade",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        role: "document",
        className: "jsx-532506091" + " " + "modal-dialog modal-dialog-centered",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-532506091" + " " + "modal-content container p-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-532506091" + " " + "modal-header",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              id: "exampleModalLongTitle",
              className: "jsx-532506091" + " " + "modal-title",
              children: "Edit your data"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              "data-dismiss": "modal",
              "aria-label": "Close",
              className: "jsx-532506091" + " " + "close",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: "jsx-532506091",
                children: "\xD7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-532506091" + " " + "modal-body ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-532506091" + " " + "row ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-532506091" + " " + "col-12 mb-2 text-center",
                children: user.image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: imgUrl,
                  alt: "Profile",
                  className: "jsx-532506091" + " " + "image-user "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-532506091" + " " + "col-12 text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "file",
                  name: "image",
                  ref: imageRef,
                  onChange: function onChange(event) {
                    return handleChangeImage(event);
                  },
                  className: "jsx-532506091" + " " + " my-2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
              onSubmit: handleSubmit,
              className: "jsx-532506091",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-532506091" + " " + "form-group row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  htmlFor: "name",
                  className: "jsx-532506091" + " " + "col col-form-label",
                  children: "User Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-532506091" + " " + "col-8",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Enter your user name",
                    value: dataUser.name,
                    name: "name",
                    onChange: handleFormChange,
                    required: true,
                    className: "jsx-532506091" + " " + "form-control border-top-0 border-left-0 border-right-0 rounded-0"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-532506091" + " " + "form-group row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  htmlFor: "email",
                  className: "jsx-532506091" + " " + "col col-form-label",
                  children: "Email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-532506091" + " " + "col-8",
                  children: dataUser.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Enter your user name",
                    value: dataUser.email,
                    name: "email",
                    disabled: true,
                    className: "jsx-532506091" + " " + "form-control border-top-0 border-left-0 border-right-0 rounded-0"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-532506091" + " " + "form-group row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  htmlFor: "phone",
                  className: "jsx-532506091" + " " + "col col-form-label",
                  children: "Phone Number"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "jsx-532506091" + " " + "col-8",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Enter your user name",
                    value: dataUser.phone,
                    name: "phone",
                    onChange: handleFormChange,
                    required: true,
                    className: "jsx-532506091" + " " + "form-control border-top-0 border-left-0 border-right-0 rounded-0"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-532506091" + " " + "modal-footer",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              "data-dismiss": "modal",
              className: "jsx-532506091" + " " + "btn btn-gray radius-12",
              children: "Cancel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              "data-dismiss": "modal",
              onClick: handleSubmit,
              className: "jsx-532506091" + " " + "btn btn-blue radius-12",
              children: "Save changes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "532506091",
      children: ".img-people.jsx-532506091{width:75px;height:75px;border-radius:12px;object-fit:cover;}.image-user.jsx-532506091{height:15vh;width:10vh;object-fit:cover;border-radius:15px;}div.card.jsx-532506091{border-radius:15px;}.btn-blue.jsx-532506091{background-color:#6379f4;color:white;}.btn-blue.jsx-532506091:hover{background-color:#5365c9;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxUdXRvcmlhbCBXZWJcXFdlZWsgMTBcXFp3YWxsZXQtRnJvbnRlbmRcXGNvbXBvbmVudHNcXG1vZHVsZVxcUHJvZmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnT2tCLEFBR3NCLEFBTUMsQUFNTyxBQUdNLEFBS0EsV0FuQmIsQ0FNRCxPQU1iLElBWHFCLEFBTUYsRUFRTCxBQUtBLFlBSmQsQUFLQSxHQWJxQixFQU5GLGlCQUNuQixBQU1BIiwiZmlsZSI6IkQ6XFxUdXRvcmlhbCBXZWJcXFdlZWsgMTBcXFp3YWxsZXQtRnJvbnRlbmRcXGNvbXBvbmVudHNcXG1vZHVsZVxcUHJvZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQgeyB1cGRhdGVVc2VyIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ3MvcmVkdXgvYWN0aW9ucy91c2VyXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlKHtjbGFzc05hbWV9KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVybEltZyA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9JTUFHRV9OT19TTEFTSDtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgW2RhdGFVc2VyLCBzZXREYXRhVXNlcl0gPSB1c2VTdGF0ZSh1c2VyKTtcclxuICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbaW1nVXJsLCBzZXRJbWdVcmxdID0gdXNlU3RhdGUoYCR7dXJsSW1nfS9pbWFnZXMvJHt1c2VyLmltYWdlfWApO1xyXG4gIGNvbnN0IFtkYXRhSW1hZ2UsIHNldERhdGFJbWFnZV0gPSB1c2VTdGF0ZSh7IGltYWdlOiBudWxsIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbWFnZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgaW1nRmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXRJbWdVcmwoVVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pKTtcclxuICAgIHNldERhdGFJbWFnZSh7XHJcbiAgICAgIGltYWdlOiBpbWdGaWxlcyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGRhdGFOZXcgPSB7IC4uLmRhdGFVc2VyIH07XHJcbiAgICBkYXRhTmV3W2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIHNldERhdGFVc2VyKGRhdGFOZXcpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YVVzZXIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJuYW1lXCIsIGRhdGFVc2VyLm5hbWUpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwicGhvbmVcIiwgZGF0YVVzZXIucGhvbmUpO1xyXG4gICAgaWYgKGRhdGFJbWFnZS5pbWFnZSAhPT0gbnVsbCkge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBkYXRhSW1hZ2UuaW1hZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoKHVwZGF0ZVVzZXIoZm9ybURhdGEsIHVzZXIuaWQpKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICB0aXRsZTogZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RGF0YVVzZXIodXNlcik7XHJcbiAgICBzZXRJbWdVcmwoYCR7dXJsSW1nfS9pbWFnZXMvJHt1c2VyLmltYWdlfWApO1xyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvcmRlci0wIHNoYWRvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbWItMlwiPlxyXG4gICAgICAgICAgICAgIHtkYXRhVXNlci5pbWFnZSA/IChcclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLXBlb3BsZVwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvJHtkYXRhVXNlci5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctcGVvcGxlXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9kZWZhdWx0LXVzZXIuc3ZnXCIpfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvcG5nL2pwZ1wiXHJcbiAgICAgICAgICAgICAgICBpZD1cImZpbGVVcGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ub25lXCJcclxuICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wZW5jaWwtYWx0XCI+PC9pPiBFZGl0XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICB7ZGF0YVVzZXIubmFtZSA/IChcclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+e2RhdGFVc2VyLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj48L2g0PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2RhdGFVc2VyLnBob25lID8gKFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj57ZGF0YVVzZXIucGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPjwvcD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDwhLS0gTW9kYWwgLS0+ICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9XCJleGFtcGxlTW9kYWxcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCJcclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnQgY29udGFpbmVyIHAtM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTG9uZ1RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBFZGl0IHlvdXIgZGF0YVxyXG4gICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHkgXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtYi0yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt1c2VyLmltYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nVXJsfSBhbHQ9XCJQcm9maWxlXCIgY2xhc3NOYW1lPVwiaW1hZ2UtdXNlciBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgbXktMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtpbWFnZVJlZn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2VJbWFnZShldmVudCl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiY29sIGNvbC1mb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlciBOYW1lXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCByb3VuZGVkLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHVzZXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YVVzZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiY29sIGNvbC1mb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhVXNlci5lbWFpbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgcm91bmRlZC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHVzZXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhVXNlci5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiIGNsYXNzTmFtZT1cImNvbCBjb2wtZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBob25lIE51bWJlclxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgcm91bmRlZC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB1c2VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFVc2VyLnBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWdyYXkgcmFkaXVzLTEyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tYmx1ZSByYWRpdXMtMTJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNhdmUgY2hhbmdlc1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5pbWctcGVvcGxlIHtcclxuICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1hZ2UtdXNlciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICAgICAgICB3aWR0aDogMTB2aDtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2LmNhcmQge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi1ibHVlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2Mzc5ZjQ7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuLWJsdWU6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUzNjVjOTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Tutorial Web\\\\Week 10\\\\Zwallet-Frontend\\\\components\\\\module\\\\Profile.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

_s(Profile, "i0XQcqHh9ntFYhxzqt7ShEUySn0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2R1bGUvUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwiY2xhc3NOYW1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVybEltZyIsInByb2Nlc3MiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInVzZVN0YXRlIiwiZGF0YVVzZXIiLCJzZXREYXRhVXNlciIsImltYWdlUmVmIiwidXNlUmVmIiwiaW1hZ2UiLCJpbWdVcmwiLCJzZXRJbWdVcmwiLCJkYXRhSW1hZ2UiLCJzZXREYXRhSW1hZ2UiLCJoYW5kbGVDaGFuZ2VJbWFnZSIsImV2ZW50IiwiaW1nRmlsZXMiLCJ0YXJnZXQiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhhbmRsZUZvcm1DaGFuZ2UiLCJkYXRhTmV3IiwibmFtZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBob25lIiwidXBkYXRlVXNlciIsImlkIiwidGhlbiIsInJlcyIsIlN3YWwiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiZGF0YSIsIm1lc3NhZ2UiLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwiZXJyIiwicmVzcG9uc2UiLCJ1c2VFZmZlY3QiLCJyZXF1aXJlIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBWkMsU0FBWSxRQUFaQSxTQUFZO0FBQzVCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLHVCQUFmOztBQUY0QixxQkFHWEMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFq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QUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2TEQ7O0dBdlBRaEMsTztVQUNVRyx1RCxFQUVBRyx1RDs7O0tBSFZOLE87QUF5UE1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuMDU2OTEzYzYyOGM5NDc0YzRiMzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQgeyB1cGRhdGVVc2VyIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ3MvcmVkdXgvYWN0aW9ucy91c2VyXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlKHtjbGFzc05hbWV9KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVybEltZyA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9JTUFHRV9OT19TTEFTSDtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgW2RhdGFVc2VyLCBzZXREYXRhVXNlcl0gPSB1c2VTdGF0ZSh1c2VyKTtcclxuICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbaW1nVXJsLCBzZXRJbWdVcmxdID0gdXNlU3RhdGUoYCR7dXJsSW1nfS9pbWFnZXMvJHt1c2VyLmltYWdlfWApO1xyXG4gIGNvbnN0IFtkYXRhSW1hZ2UsIHNldERhdGFJbWFnZV0gPSB1c2VTdGF0ZSh7IGltYWdlOiBudWxsIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbWFnZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgaW1nRmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBzZXRJbWdVcmwoVVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pKTtcclxuICAgIHNldERhdGFJbWFnZSh7XHJcbiAgICAgIGltYWdlOiBpbWdGaWxlcyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGRhdGFOZXcgPSB7IC4uLmRhdGFVc2VyIH07XHJcbiAgICBkYXRhTmV3W2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIHNldERhdGFVc2VyKGRhdGFOZXcpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YVVzZXIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJuYW1lXCIsIGRhdGFVc2VyLm5hbWUpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwicGhvbmVcIiwgZGF0YVVzZXIucGhvbmUpO1xyXG4gICAgaWYgKGRhdGFJbWFnZS5pbWFnZSAhPT0gbnVsbCkge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBkYXRhSW1hZ2UuaW1hZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoKHVwZGF0ZVVzZXIoZm9ybURhdGEsIHVzZXIuaWQpKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICB0aW1lcjogMTUwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICB0aXRsZTogZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZSxcclxuICAgICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgIHRpbWVyOiAxNTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RGF0YVVzZXIodXNlcik7XHJcbiAgICBzZXRJbWdVcmwoYCR7dXJsSW1nfS9pbWFnZXMvJHt1c2VyLmltYWdlfWApO1xyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvcmRlci0wIHNoYWRvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbWItMlwiPlxyXG4gICAgICAgICAgICAgIHtkYXRhVXNlci5pbWFnZSA/IChcclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLXBlb3BsZVwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7dXJsSW1nfS9pbWFnZXMvJHtkYXRhVXNlci5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctcGVvcGxlXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9kZWZhdWx0LXVzZXIuc3ZnXCIpfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNleGFtcGxlTW9kYWxcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvcG5nL2pwZ1wiXHJcbiAgICAgICAgICAgICAgICBpZD1cImZpbGVVcGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ub25lXCJcclxuICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wZW5jaWwtYWx0XCI+PC9pPiBFZGl0XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICB7ZGF0YVVzZXIubmFtZSA/IChcclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+e2RhdGFVc2VyLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj48L2g0PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2RhdGFVc2VyLnBob25lID8gKFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtLTBcIj57ZGF0YVVzZXIucGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG0tMFwiPjwvcD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDwhLS0gTW9kYWwgLS0+ICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9XCJleGFtcGxlTW9kYWxcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCJcclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnQgY29udGFpbmVyIHAtM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTG9uZ1RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBFZGl0IHlvdXIgZGF0YVxyXG4gICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHkgXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBtYi0yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt1c2VyLmltYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nVXJsfSBhbHQ9XCJQcm9maWxlXCIgY2xhc3NOYW1lPVwiaW1hZ2UtdXNlciBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgbXktMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtpbWFnZVJlZn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2VJbWFnZShldmVudCl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiY29sIGNvbC1mb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlciBOYW1lXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCByb3VuZGVkLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHVzZXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YVVzZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiY29sIGNvbC1mb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhVXNlci5lbWFpbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgcm91bmRlZC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHVzZXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhVXNlci5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiIGNsYXNzTmFtZT1cImNvbCBjb2wtZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBob25lIE51bWJlclxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgcm91bmRlZC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB1c2VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGFVc2VyLnBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWdyYXkgcmFkaXVzLTEyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tYmx1ZSByYWRpdXMtMTJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNhdmUgY2hhbmdlc1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5pbWctcGVvcGxlIHtcclxuICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1hZ2UtdXNlciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICAgICAgICB3aWR0aDogMTB2aDtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2LmNhcmQge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi1ibHVlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2Mzc5ZjQ7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuLWJsdWU6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUzNjVjOTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=