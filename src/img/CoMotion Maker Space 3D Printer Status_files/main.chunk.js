(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: 'Encode Sans','Open Sans', sans-serif;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color:#4b2e83;\n  color:white;\n\n}\n.no-work{\n  background: rgba(244, 204, 204,.7);\n  font-size: 1.5rem;\n  font-weight: bold;\n  padding-top: 100%;\n  color: darkred;\n  border-radius: 20px;\n}\n.warning{\n  color:red;\n}\n\n.printer-wrapper {\n border-radius: 20px;\n}\n\nli {\n  overflow: hidden;\n  float: left;\n}\n\n.card-img-top{\n  width:5rem;\n\n}\n.card-img-wrapper{\n  text-align: center;\n}\n.card-body{\n  padding:0;\n}\n.status{\n  color:#38761d;\n  font-weight: bold;\n  font-size: 1.5rem;\n\n}\n\n.card {\n  margin-top: 50px;\n  border: 1px solid #999;\n  text-align: center;\n  padding-top: 30px;\n  height: 20rem;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  color:#000000;\n  background-color: transparent;\n  border-radius: 20px;\n  }\n\n  .card:before {\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    \n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);\n    border-radius: 30px;\n    font-size: 28px;\n    font-style: normal;\n    left: 50%;\n    line-height: 60px;\n    position: absolute;\n    top: -30px;\n    width: 60px;\n  }\n.printTitle{\n  font-size: 2rem;\n  font-weight: bold;\n}\nh1{\n  text-align: center\n}\n.logo_div{\n  text-align:center;\n}\n.logo{\n  height:5rem;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n#overlay{\n  position: fixed; /* Sit on top of the page content */\n  width: 100%; /* Full width (cover the whole page) */\n  height: 100%; /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,0.5); /* Black background with opacity */\n  z-index: 2000; /* Specify a stack order in case you're using a different order for other elements */\n  cursor: pointer; /* Add a pointer on hover */\n}", ""]);

// exports


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default, load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony import */ var _Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.js */ "./src/config.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_finder_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/finder.png */ "./src/img/finder.png");
/* harmony import */ var _img_finder_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_finder_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_creator_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/creator.png */ "./src/img/creator.png");
/* harmony import */ var _img_creator_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_creator_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_ultimaker_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/ultimaker.png */ "./src/img/ultimaker.png");
/* harmony import */ var _img_ultimaker_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_ultimaker_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_prusa_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/prusa.png */ "./src/img/prusa.png");
/* harmony import */ var _img_prusa_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_prusa_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_logo_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_3d_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/3d.png */ "./src/img/3d.png");
/* harmony import */ var _img_3d_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_3d_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);





var _jsxFileName = "/Users/ramonq/Desktop/OneDrive - UW/2018-2019/makerspace/CoMotionPrinterStatus/src/App.js";








 //import Moment from 'react-moment';



var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    var _this;

    Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this));

    _this.onSettingsChange = function (data) {
      console.log(data);

      _this.setState({
        settings: data
      });
    };

    _this.onDataChange = function (data) {
      console.log(data);

      _this.setState({
        data: data
      });
    };

    _this.onErrorChange = function (error) {
      console.log(error);

      _this.setState({
        error: error
      });
    };

    _this.state = {
      data: undefined,
      settings: undefined,
      error: undefined
    };
    return _this;
  }

  Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(DataSync, {
        settingCallback: this.onSettingsChange.bind(this),
        dataCallback: this.onDataChange.bind(this),
        errorCallback: this.onErrorChange.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "logo_div mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "logo",
        src: _img_logo_png__WEBPACK_IMPORTED_MODULE_12___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "CoMotion Maker Space 3D Printer Status"), this.state.error !== undefined ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        style: {
          color: "red"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, this.state.error) : this.state.data === undefined || this.state.settings == undefined ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          margin: (window.innerHeight - 240) / 2.0 + "px 0 0 " + (window.innerWidth - 240) / 2.0 + "px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "loader",
        type: "Puff",
        color: "#b2cfff",
        height: "240",
        width: "240",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }))) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(PrinterList, {
        setting: this.state.settings,
        data: this.state.data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);


function load(callback, sheetName, area) {
  window.gapi.client.load("sheets", "v4", function () {
    window.gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: _config_js__WEBPACK_IMPORTED_MODULE_6__["default"].spreadsheetId,
      range: sheetName + "!" + area
    }).then(function (response) {
      var data = response.result.values;
      callback(data);
    }, function (response) {
      callback(false, response.result.error);
    });
  });
}

var DataSync =
/*#__PURE__*/
function (_Component2) {
  Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DataSync, _Component2);

  function DataSync(props) {
    var _this2;

    Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DataSync);

    _this2 = Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DataSync).call(this, props));

    _this2.onSettingLoad = function (data, error) {
      if (data) {
        _this2.props.settingCallback(data);
      } else {
        _this2.props.errorCallback(error);
      }
    };

    _this2.onDataLoad = function (data, error) {
      if (data) {
        _this2.props.dataCallback(data);
      } else {
        _this2.props.errorCallback(error);
      }
    };

    _this2.initClient = function () {
      // 2. Initialize the JavaScript client library.
      window.gapi.client.init({
        apiKey: _config_js__WEBPACK_IMPORTED_MODULE_6__["default"].apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: _config_js__WEBPACK_IMPORTED_MODULE_6__["default"].discoveryDocs
      }).then(function () {
        console.log("Start"); // 3. Initialize and make the API request.

        load(_this2.onSettingLoad, "settings", "A2:D");
        load(_this2.onDataLoad, "current", "A2:Q");
      });
    };

    return _this2;
  }

  Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DataSync, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.gapi.load("client", this.initClient);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null);
    }
  }]);

  return DataSync;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var PrinterList =
/*#__PURE__*/
function (_Component3) {
  Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PrinterList, _Component3);

  function PrinterList() {
    Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PrinterList);

    return Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PrinterList).apply(this, arguments));
  }

  Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PrinterList, [{
    key: "processJobs",
    value: function processJobs() {
      var data = this.props.data;
      var machine_types = this.props.setting.map(function (item) {
        return item[0];
      });
      var machine = {};
      machine_types.forEach(function (element) {
        machine[element] = [];
      }); //console.log(data[0][0]);
      //console.log(data[0][7]);
      //console.log(moment.duration(data[0][7]));
      //console.log(moment(data[0][0]) < moment());

      data = data.filter(function (item) {
        return moment__WEBPACK_IMPORTED_MODULE_14___default()(item[0]).add(moment__WEBPACK_IMPORTED_MODULE_14___default.a.duration(item[7])) > moment__WEBPACK_IMPORTED_MODULE_14___default()();
      });
      return data;
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.processJobs();
      console.log(data);
      var printers = this.props.setting.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Printer, {
          job: data,
          id: item[0],
          type: item[1],
          warning: item[2],
          working: item[3] === "N",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "printer_list container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, printers));
    }
  }]);

  return PrinterList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var Printer =
/*#__PURE__*/
function (_Component4) {
  Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Printer, _Component4);

  function Printer() {
    Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Printer);

    return Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Printer).apply(this, arguments));
  }

  Object(_Users_ramonq_Desktop_OneDrive_UW_2018_2019_makerspace_CoMotionPrinterStatus_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Printer, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var type_img = "";

      switch (this.props.type) {
        case "FlashForge Finder":
          type_img = _img_finder_png__WEBPACK_IMPORTED_MODULE_8___default.a;
          break;

        case "Creator Pro":
          type_img = _img_creator_png__WEBPACK_IMPORTED_MODULE_9___default.a;
          break;

        case "Ultimaker 2+":
          type_img = _img_ultimaker_png__WEBPACK_IMPORTED_MODULE_10___default.a;
          break;

        case "Ultimaker 2+ Extended":
          type_img = _img_ultimaker_png__WEBPACK_IMPORTED_MODULE_10___default.a;
          break;

        case "PRUSA":
          type_img = _img_prusa_png__WEBPACK_IMPORTED_MODULE_11___default.a;
          break;

        default:
          type_img = _img_3d_png__WEBPACK_IMPORTED_MODULE_13___default.a;
          break;
      }

      var cur = this.props.job.filter(function (item) {
        return item[5] === _this3.props.id;
      });
      this.busy = cur.length > 0;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "printer-wrapper mx-2",
        style: {
          background: !this.busy ? "green" : "red"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card printer",
        style: {
          width: "15rem"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: this.props.working ? "" : "card-img-overlay no-work",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, this.props.working ? "" : "In Maintenance"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-img-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "card-img-top",
        src: type_img,
        alt: "Printer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "ID: ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "printTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, this.props.id)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, this.props.type), this.props.working ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, this.props.warning !== "N/A" ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "warning",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "Warning: ", this.props.warning) : null, this.busy ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "Estimate End: ", moment__WEBPACK_IMPORTED_MODULE_14___default()(cur[0][0]).add(moment__WEBPACK_IMPORTED_MODULE_14___default.a.duration(cur[0][7])).fromNow()) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "IDLE")) : null))));
    }
  }]);

  return Printer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  apiKey: "AIzaSyC9pn1RnVpeBBX6o6MsyD59ua9IdOpTovQ",
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  spreadsheetId: "19w-HFVnmLQju_9pgJKmt38ayhAjtX5aozCT8LWF5rrI"
});

/***/ }),

/***/ "./src/img/3d.png":
/*!************************!*\
  !*** ./src/img/3d.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/3d.972566e2.png";

/***/ }),

/***/ "./src/img/creator.png":
/*!*****************************!*\
  !*** ./src/img/creator.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/creator.7d73f2b9.png";

/***/ }),

/***/ "./src/img/finder.png":
/*!****************************!*\
  !*** ./src/img/finder.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/finder.d5fb7425.png";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5723d5a7.png";

/***/ }),

/***/ "./src/img/prusa.png":
/*!***************************!*\
  !*** ./src/img/prusa.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/prusa.f8f77ed4.png";

/***/ }),

/***/ "./src/img/ultimaker.png":
/*!*******************************!*\
  !*** ./src/img/ultimaker.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAOHUlEQVR42u3dPWzcyBkGYPbXXHW13aQL4DKlAfUHt9epuC4BpNrVplEruEllQKUR4ADj3KgJoEOA1GquUYBArToVKtbe1e6F41AOPbfk/pFcDvm8wAf47NVKWg6fmxkOh1kmSeXu7u6b2Wz2p8fHxx8Xi8VZXu/y+lCqt3mdzOfzI5+WiBwkDw8P3wWIVgBVV+9y2H4IyPkERaRLqD7sUe/yHtf3Pk0RaS1hWFfRo/o87AtDw+l0+rz8NeG/i+Hiqq97E79eRGTvVPSqzraZmwq9qlVw6W2JSCMJ8005Kq9XDOmOdn2/oscV4/fa3JaI7NuzOouHcfvCkoP1Kn+fn/M//lau/O9ul8vl+/zfT/Oh4jOfvojsMww82fW9AkD511/ESNVVwCvvyb10JESkNsV8095Y7QLVKrj0uESkCpnn8fzSjj20yT5QxZUPFY8dHRGJoXlbXrKw7ZzVbDZ7kX/ddZNYZf+f57pwhETkc8JK9HLvatt1UmFCvQ2oIrSu7+/vv3W0REacYhX7l3VSAa8tsTrOtpiXCq8vz02FCfZN57ugJWIoeLLrUDB//fmmQ7p1E+jh3wNo0BKRut5VefX5xgtDN5lcD7iEua0tAf07tERkbe+qyWFg0fvaFdGfN0HLERQZSYrbb95t27sqFnW2uhQh3FCd/0yXmauHIlLA8/22vatiHqoWkW2HgDW9uM/3HmbWaYlIed3VpjsnrFtn1RRWpR7g203QavL7ikjPEq9qD/NGG2A1qUOjjfv/iqHhh3VohRuoTcKLDDTRVi+vN4DjxaGGZaVtbi6zFib5RSSt4eDRBq+/yg408V1eerFcLn/pupcnIgdMvPZq3ULRuiUMXa2HinqEv2aWOoiMI9HVwbO61waMwvxQduDJ7ngJRuaqochohoOvN71vsG6ivfi3zhLdoP2POrRMwIsMB6wvPZVPnz79cc3Le3NVLu5l5fXPvmAqIi0kXs6wpkdz3LdhVzSX9aZuuKqXJZJ4imcMbjR/VYVB8fcHSXzBIK+/1qB66oiLJJxyD6Vu/qrufsFDT2pHN2yf9BFWEWnmZP/y+K6wirzmdRd9RSDMu5WflZjXn2twfeWoi6QL1trbcYq5n14Ps+KFr1W9rGJDQBFJLfH8T82w8Tjr+UR2vJasgHTlz+xRYSIJJhpKVU64V21T3Ke9p2J8P378+IfM5LvIcBL1Sl7vMBzs1XxQsazhy/Y4NfNubtcRSS3lleJVVwjXbH3cZ4Df1D1qzJoskcRSvkJYtWFfTS+ld1sRV9zE7f5CkaGBVXVLTtXVtr6e8NGw8CglcEWk/uSuvYewbr/2vg6pohuiT6qGtBaRiqQHVu2Shqo5oD5PWkf3Rr6ru2hgeYPIgMCqeopz37ceLvccC8CuM/NYIukm7olUnPhXKZ7o5f291ixvmGgJIglkw0WjST5CK15fVrXqvQBZRFIHa80DUpPqPVbtNGHiXWQgYNWc5EmsEi/PY9XdpqMliCSQdRv3VQ2jUtntIFoUe5R5QrRIuoluy/lxxQk/yRKeqI5/v6oLCJ5bKJLeCf27+wirdmhIZaeD8iPti94WsESGClbqJ/iKvd4tbRABVn8TgfU3YIkMFKxsANuylCfe8/oJWCIjAyul3zF6ms4NsES6O/kmNYgo1VlBXioThmBVN+8qdUC0ru3aKrBS0JKDDOHeRVeptq1LJ4VKBK7LPdt67Tbd0g1YsFLQ2qKqHoQi/QYLVmqUaAErPbBgpUaLFrC6R2pSqpttS4NXA0HrZsf6yZKJbqPBKrV/CbCUApYASylgAUspYAmwlAKWAEspYAFLKWAJsJQCFrCUUsACllLAEmApBSxgKaWABSylgCXAUgpYwFJKAQtYSgFLegzWcrl8Hx4X35OnlfSiwRU7VQ7h5OnlCRzaWmhzoe0BC1hbYZXI7wusAYFVTkdoyRDACv+XAxawDpmiDQILWOurhw+tBNbIwOpo6kMcSGABSzsXYAELWMACFrCABSxJ+ECGE7NP1Zefc7FYnA3hM0/9uAMLWEpZOCrAUgpYorEpBSxgKQUscfXEVUJXCbVzYAELWMACFrCABSztXBxIYAFLOwcWsIAFLGABC1jA0s7FgQQWsLRzYAELWMAClgMJLGBp5+JAAgtY2jmwgAUsYAHLgQQWsLRzcSCBBSxgAQtYjYH1l8VicdNGAUs7BxawGk0Oy0QPSzsXB7J3J9hsNnsR6lBg5b25Y2ABC1jAWpvwINkcp9vsfw9mOO0SrOl0+iz/Plfx9wYWsIAFrJVZLpfvy98n/HeBWKtg5UC9iv8+7uUBC1jAAlZ5KHa66nuFHlcMWZOVv/951fcNWAILWMAC1u/mrTr4bHfB7AJYwAIWsOJ5q+s+glXMZx0DC1jAAtbnFL2YXj/lpcH5LGABy4FMFaxVk909HRpeAwtYwBoxWGEZQQpYZV9PzgMLWMAaI1h9nreqmc96BSxgAWtkYFUtJUihip4hsIAFrDGANZ/PX6aKVTE0vAIWsIA1ErBSuCqYtXfVEFjAciBTGxJWrWpPoHd1bUgILGCNcNI99FKebnTOXCXUzsWB7PsJFla5t3mfYNafq4PAApYDmTpYpSHicU97VVcN3wANLGA5kKmDVRoiXvcIq0nKn6d2LsDqZgO/8wNDdVssvciABSxgAWvT3takVK0thQjD0afvE/7cwh5YwAKWAzlksOJ4CIV2Lg5kMidYW7s6NLgLA7CABSxgfY1WNExcVfFzB2tf3/LwD1jAciCdYFv9vD5P7RxYwAIWsIA1erDyYc8PTdR8Pj8C1njAenh4+C4f4p7kddZEAQtYh1hP9Obu7u4bYA0brOl0+jyldgksYNWhdQKsYYPVUY8IWMBKonEAq/9Dwt+AJRoHsIAFLGABC1jAEmABC1jAEmABC1jAAhawgAUsARawgAUsARawgAUsYAELWNqkAAtYwAIWsIAFLGABC1jAApY2KcACFrCABSxgAQtYwAIWsIClTQqwgAUsYAELWMACFrCABSxgaZOicQALWMACFrCABSxgAQtYwNImReMAFrCABSxgAQtYwAIWsIAFLNE4gAUsYAELWMACFrCABSxgAUs0DmABC1jAAhawgAUsYAELWMASjQNYwAIWsIAFLGAJsIAFLGAJsIAFLGABC1jAApYAC1jAApYAC1jAAhawgAUsbVKABSxgAQtYwAIWsIAFLGABS5sUYAELWMACFrCABSxgAQtYwNImBVjAAhawgNVCLRaLm4Zqske18Z5tVt9/zi6P0VYFLGAppYAFLKWAJcBSCljAUkoBC1gtN47FYvFhVfX14PT952zp8wSWaBzAAhawgAUsYAFLgAUsYAFLgAUsYAELWMACFrAEWFHN5/OXu1Z+Mv1rVe3znm1W33/ONj5PYMnQ/m+mFLCApZQCFrCUApaYdG/w903l+KTSfrRJARawgAUsYAELWMACFrCABSxtUoAFLGABC1jAAhawgAUsYAFLmxRgAQtYwAIWsIAFLGABC1jA0iZF4wAWsIAFLGABC1jAAhawgKVNisYBLGABC1jAAhawgAUsYAELWKJxAAtYwAIWsIAFLGABC1jAApZoHMACFrCABSxgAQtYwAIWsIAlGgewgAUsYAELWMASYAELWMASYAELWMACFrCABSwBFrCABSwBFrCABSxgAQtY2qQAC1jAAhawgAUsYAELWMACljYpwAIWsIAFLGABC1jAAhawgKVNCrCABSxgAQtYwAIWsIAFLGBpk6JxAAtYwAIWsIAFLGABC1jA0iZF4wAWsIAFLGABC1jAAhawgAUs0TiABSxgAQtYwAIWsIAFLGABSzQOYAELWMACFrCABSxgAQtYwBKNA1jAAhawgAUsYAmwgAUsYElnjePy8vLfwALWIdtkS20QWHpYwAKWHpb0pHEsFotfgQWsLtpkg20NWHpYXzWsG2ABa582uWMbAhawmoWsZu4BWCMEqycwAQtYW2M2eXx8PJ7P5y+n0+kzYKUN1v39/bfhWObH9FU4tuawZGgTnKsQu83rKq+LArTTcBKECicEsA4H1mw2e1GAdByOTV7nxbG6Hkr7wwiwWkHt6c/L5fI/YYjxNMx4wg1Y2/WKysO1ng/ZgAWswQN3XfQEnmpSrjCEeYKuojfXa7Ceej7lin/H6Pe/1S6ABazxAHi1bfncgCXAUgpYwFIKWAIspYAlwFIKWMBSClgCLKWABSylFLCApQZ169N5vFi2uP/v3KJSAZbqxWr/p1uWwsr4FSvhJ+Hvw78XK+WvgSXAUgfZFSM0kOKm5dt1PbDwuvD6hHdcABawVH4Cfzh0LZfLX7b5mQM+YeuebXtM4fXh6wq8gCXASgyrmz6AFWobrIph3s6/d/j6kaElwAJW12DlPbH3YceJfSfRw9eH9wnvBywBFrBaAavA6qKh3/2i2G4HWAKshjDZqsLGf0MFKyxPKLacbuwzLubBzoElwNLDahSsYtnCecO///m+82HAklGD1eVWvokNCbOmF4AW75cBS4AFrMbAKnY3bas9ZCPYPVWABawuwWpxghxYAixgAQtYwAKWISGwgAUsYJl0B5YAy7IGyxqABayRYGLhqIWjwAKWSnBI6NYcYAELWG5+BpYAC1i2lwEWsJQN/GzgByxgKVskA0uApVpEy0MogAUs5TFfwBJgKQUsYCmlgAUspYAlwFIKWMBSSgELWEoBS4ClFLCAtfN6nqti3c5EqRbq/EC7m8qQwHp8fDz1UUuXKdocsIC1NVbHPmY5RIrbioAFLFhJGuloi2ZJHSxYyYjQkpTBgpWMDC1JFSxYyQjRkhTBgpWMFK3k8l9CcMNRqrADZgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/ramonq/Desktop/OneDrive - UW/2018-2019/makerspace/CoMotionPrinterStatus/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ramonq/Desktop/OneDrive - UW/2018-2019/makerspace/CoMotionPrinterStatus/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/ramonq/Desktop/OneDrive - UW/2018-2019/makerspace/CoMotionPrinterStatus/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map