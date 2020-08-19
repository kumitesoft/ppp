module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/LF6":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blockBig_container": "Card_blockBig_container__A-9iT",
	"blockBig_image_container": "Card_blockBig_image_container__1OKA2",
	"imageBig": "Card_imageBig__1cWrn",
	"labelBig": "Card_labelBig__1pHIn",
	"titleBig": "Card_titleBig__12OKm",
	"priceBig": "Card_priceBig__3EtlP"
};


/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0Sn8":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "Layout_layout__9S_lM",
	"popup_help_container": "Layout_popup_help_container__1hD8q",
	"popup_help_container_bg": "Layout_popup_help_container_bg__Y-pe6",
	"popup_help_wrapper": "Layout_popup_help_wrapper__2ymaD",
	"popup_help_info": "Layout_popup_help_info__3fet5",
	"popup_help_close": "Layout_popup_help_close__2WmCF",
	"topline_container": "Layout_topline_container__31emU",
	"bottom_container": "Layout_bottom_container__1qtxY",
	"topline_wrapper": "Layout_topline_wrapper__sRgk5",
	"bottom_wrapper": "Layout_bottom_wrapper__GEYK7",
	"topline_box": "Layout_topline_box__2n7MQ",
	"newsletter": "Layout_newsletter__2IW1F",
	"arrowdown": "Layout_arrowdown__2b4O0",
	"pomocBtn": "Layout_pomocBtn__2jyk0",
	"bottomline_container": "Layout_bottomline_container__2GkaZ",
	"blink": "Layout_blink__kqbMA",
	"bottomline_wrapper": "Layout_bottomline_wrapper__3Mdc7",
	"blinking": "Layout_blinking__1O6QQ"
};


/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var _querystring = __webpack_require__("8xkj"); // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    // query = '' + new URLSearchParams(query);
    query = (0, _querystring.encode)(query);
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "80PL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./helpers/menu.js
var menu = __webpack_require__("upzw");

// CONCATENATED MODULE: ./components/desktopmenu/DesktopMenu.js


var __jsx = external_react_default.a.createElement;



const DesktopMenu = ({
  setMainPage
}) => {
  return __jsx("ul", {
    className: "jsx-2568988605" + " " + 'bigmenu'
  }, __jsx("li", {
    className: "jsx-2568988605" + " " + 'nowosc'
  }, __jsx(link_default.a, {
    href: "/"
  }, __jsx("p", {
    className: "jsx-2568988605"
  }, "HOME"))), __jsx("li", {
    className: "jsx-2568988605"
  }, __jsx("span", {
    className: "jsx-2568988605"
  }, "OSOBA"), __jsx("ul", {
    className: "jsx-2568988605"
  }, menu["a" /* menu */].osoba.map(el => __jsx("li", {
    key: el,
    className: "jsx-2568988605"
  }, __jsx(link_default.a, {
    onClick: () => setMainPage(false),
    href: "./[subCategory]",
    as: `./${el.toLowerCase()}`
  }, __jsx("p", {
    className: "jsx-2568988605"
  }, el)))))), __jsx("li", {
    className: "jsx-2568988605"
  }, __jsx("span", {
    className: "jsx-2568988605"
  }, "Z OKAZJI"), __jsx("ul", {
    className: "jsx-2568988605"
  }, menu["a" /* menu */].okazja.map(el => __jsx("li", {
    key: el,
    className: "jsx-2568988605"
  }, __jsx(link_default.a, {
    onClick: () => setMainPage(false),
    href: "./[subCategory]",
    as: `./${el.toLowerCase()}`
  }, __jsx("p", {
    className: "jsx-2568988605"
  }, el)))))), __jsx("li", {
    className: "jsx-2568988605"
  }, __jsx("span", {
    className: "jsx-2568988605"
  }, "KATEGORIA"), __jsx("ul", {
    className: "jsx-2568988605"
  }, menu["a" /* menu */].kategoria.map(el => __jsx("li", {
    key: el,
    className: "jsx-2568988605"
  }, __jsx(link_default.a, {
    onClick: () => setMainPage(false),
    href: "./[subCategory]",
    as: `./${el.toLowerCase()}`
  }, __jsx("p", {
    className: "jsx-2568988605"
  }, el)))))), __jsx("li", {
    className: "jsx-2568988605"
  }, __jsx("span", {
    className: "jsx-2568988605"
  }, "WIECEJ"), __jsx("ul", {
    className: "jsx-2568988605"
  }, menu["a" /* menu */].wiecej.map(el => __jsx("li", {
    key: el,
    className: "jsx-2568988605"
  }, __jsx(link_default.a, {
    onClick: () => setMainPage(false),
    href: "./[subCategory]",
    as: `./${el.toLowerCase()}`
  }, __jsx("p", {
    className: "jsx-2568988605"
  }, el)))))), __jsx(style_default.a, {
    id: "2568988605"
  }, [".bigmenu.jsx-2568988605{-webkit-transform:translateX(-3rem);-ms-transform:translateX(-3rem);transform:translateX(-3rem);}", ".nowosc.jsx-2568988605:hover{border-bottom:1px solid red;}", ".bigmenu.jsx-2568988605{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:3.5rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:1.3rem;-webkit-text-decoration:none;text-decoration:none;font-weight:600;width:48rem;}", ".bigmenu.jsx-2568988605 li.jsx-2568988605{display:inline-block;}", "p.jsx-2568988605,span.jsx-2568988605{display:block;padding:0 10px;line-height:3.5rem;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}", "span.jsx-2568988605{cursor:default;}", "p.jsx-2568988605:hover{background-color:#ff2a2a;color:#fff;}", ".bigmenu.jsx-2568988605 ul.jsx-2568988605{display:none;position:absolute;top:3.5rem;}", ".bigmenu.jsx-2568988605 li.jsx-2568988605:hover>ul.jsx-2568988605{display:inherit;}", ".bigmenu.jsx-2568988605 ul.jsx-2568988605 li.jsx-2568988605{width:170px;float:none;display:list-item;position:relative;background-color:#f3f3f3;border-bottom:1px solid #000;}", ".bigmenu.jsx-2568988605 ul.jsx-2568988605 li.jsx-2568988605:nth-last-child(1){border-bottom:none;}", ".bigmenu.jsx-2568988605 ul.jsx-2568988605 ul.jsx-2568988605 li.jsx-2568988605{position:relative;top:-60px;left:170px;}", "li.jsx-2568988605>a.jsx-2568988605:after{content:' +';}", "li.jsx-2568988605>a.jsx-2568988605:only-child.jsx-2568988605:after{content:'';}", "@media only screen and (max-width:1024px){.bigmenu.jsx-2568988605{display:none;}}"]));
};

/* harmony default export */ var desktopmenu_DesktopMenu = (DesktopMenu);
// EXTERNAL MODULE: ./components/navbar/Navbar.module.scss
var Navbar_module = __webpack_require__("wXM4");
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);

// CONCATENATED MODULE: ./components/navbar/Navbar.js


var Navbar_jsx = external_react_default.a.createElement;




const Navbar = ({
  setOpenMobileMenu,
  openMobileMenu,
  setMainPage
}) => {
  return Navbar_jsx("div", {
    className: "jsx-2085888330" + " " + (Navbar_module_default.a.navbar_container || "")
  }, Navbar_jsx("div", {
    className: "jsx-2085888330" + " " + (Navbar_module_default.a.navbar_wrapper || "")
  }, Navbar_jsx("div", {
    className: "jsx-2085888330" + " " + (Navbar_module_default.a.navbar_logo || "")
  }, Navbar_jsx(link_default.a, {
    href: "/"
  }, Navbar_jsx("img", {
    alt: "logo",
    src: "./logo.png",
    className: "jsx-2085888330"
  }))), Navbar_jsx(desktopmenu_DesktopMenu, {
    setMainPage: setMainPage
  }), Navbar_jsx("button", {
    onClick: () => setOpenMobileMenu(!openMobileMenu),
    className: "jsx-2085888330" + " " + (Navbar_module_default.a.burger || "")
  }, "mobile")), Navbar_jsx(style_default.a, {
    id: "2085888330"
  }, []));
};

/* harmony default export */ var navbar_Navbar = (Navbar);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/footer/Footer.module.scss
var Footer_module = __webpack_require__("GLbt");
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);

// CONCATENATED MODULE: ./components/footer/Footer.js


var Footer_jsx = external_react_default.a.createElement;


const Footer = () => Footer_jsx("div", {
  className: "jsx-2085888330" + " " + (Footer_module_default.a.footer_container || "")
}, Footer_jsx("div", {
  className: "jsx-2085888330" + " " + (Footer_module_default.a.footer_wrapper || "")
}, Footer_jsx("div", {
  className: "jsx-2085888330" + " " + (Footer_module_default.a.footer_left || "")
}, Footer_jsx("img", {
  src: "./logo.png",
  alt: "logo",
  className: "jsx-2085888330"
}), Footer_jsx("p", {
  className: "jsx-2085888330"
}, "2020")), Footer_jsx("div", {
  className: "jsx-2085888330" + " " + (Footer_module_default.a.footer_right || "")
}, Footer_jsx("img", {
  src: "./instagram.png",
  className: "jsx-2085888330"
}), Footer_jsx("p", {
  className: "jsx-2085888330"
}, "Thank you"))), Footer_jsx(style_default.a, {
  id: "2085888330"
}, []));

/* harmony default export */ var footer_Footer = (Footer);
// CONCATENATED MODULE: ./components/mobilemenu/MobileMenu.js


var MobileMenu_jsx = external_react_default.a.createElement;




const MobileMenu = ({
  openMobileMenu,
  setOpenMobileMenu,
  setMainPage
}) => {
  const {
    0: openSubmenu,
    1: setOpenSubmenu
  } = Object(external_react_["useState"])(false);
  const {
    0: windowSize,
    1: setWindowSize
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    if (windowSize > 1024 || window.innerWidth > 1024) return;

    const onResize = () => {
      setWindowSize(window.innerWidth);

      if (windowSize > 1024) {
        setOpenSubmenu(false);
        setOpenMobileMenu(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [windowSize]);
  return MobileMenu_jsx(external_react_default.a.Fragment, null, MobileMenu_jsx("div", {
    onClick: () => setOpenMobileMenu(!openMobileMenu),
    style: {
      display: openSubmenu || !openMobileMenu ? 'none' : 'flex'
    },
    className: "jsx-3312725765" + " " + 'close_menu'
  }, "X"), MobileMenu_jsx("ul", {
    style: {
      display: openSubmenu || openMobileMenu ? 'flex' : 'none'
    },
    className: "jsx-3312725765" + " " + 'mobileMenu'
  }, MobileMenu_jsx("li", {
    className: "jsx-3312725765"
  }, MobileMenu_jsx(link_default.a, {
    href: "/"
  }, MobileMenu_jsx("a", {
    className: "jsx-3312725765"
  }, "NOWOSCI"))), MobileMenu_jsx("li", {
    className: "jsx-3312725765"
  }, MobileMenu_jsx("a", {
    onClick: () => setOpenSubmenu('osoba'),
    className: "jsx-3312725765"
  }, "OSOBA"), MobileMenu_jsx("ul", {
    style: {
      display: openSubmenu === 'osoba' ? 'flex' : 'none'
    },
    className: "jsx-3312725765"
  }, MobileMenu_jsx("img", {
    src: "./arrowdown.png",
    onClick: () => setOpenSubmenu(null),
    className: "jsx-3312725765" + " " + 'takeBack'
  }), menu["a" /* menu */].osoba.map(el => MobileMenu_jsx("li", {
    key: el,
    className: "jsx-3312725765"
  }, MobileMenu_jsx(link_default.a, {
    href: "./[subCategory]",
    as: `./${el.toLowerCase()}`
  }, MobileMenu_jsx("a", {
    onClick: () => setMainPage(false),
    className: "jsx-3312725765"
  }, el)))))), MobileMenu_jsx("li", {
    className: "jsx-3312725765"
  }, MobileMenu_jsx("a", {
    onClick: () => setOpenSubmenu('okazja'),
    className: "jsx-3312725765"
  }, "Z OKAZJI"), MobileMenu_jsx("ul", {
    style: {
      display: openSubmenu === 'okazja' ? 'flex' : 'none'
    },
    className: "jsx-3312725765"
  }, MobileMenu_jsx("img", {
    src: "./arrowdown.png",
    onClick: () => setOpenSubmenu(null),
    className: "jsx-3312725765" + " " + 'takeBack'
  }), menu["a" /* menu */].okazja.map(el => MobileMenu_jsx("li", {
    key: el,
    className: "jsx-3312725765"
  }, MobileMenu_jsx(link_default.a, {
    href: "./[subCategory]",
    as: `./${el.toLowerCase()}`
  }, MobileMenu_jsx("a", {
    href: "#",
    onClick: () => setMainPage(false),
    className: "jsx-3312725765"
  }, el)))))), MobileMenu_jsx("li", {
    className: "jsx-3312725765"
  }, MobileMenu_jsx("a", {
    onClick: () => setOpenSubmenu('kategoria'),
    className: "jsx-3312725765"
  }, "KATEGORIA"), MobileMenu_jsx("ul", {
    style: {
      display: openSubmenu === 'kategoria' ? 'flex' : 'none'
    },
    className: "jsx-3312725765"
  }, MobileMenu_jsx("img", {
    src: "./arrowdown.png",
    onClick: () => setOpenSubmenu(null),
    className: "jsx-3312725765" + " " + 'takeBack'
  }), menu["a" /* menu */].kategoria.map(el => MobileMenu_jsx("li", {
    key: el,
    className: "jsx-3312725765"
  }, MobileMenu_jsx(link_default.a, {
    href: "./[subCategory]",
    as: `./${el.toLowerCase()}`
  }, MobileMenu_jsx("a", {
    href: "#",
    onClick: () => setMainPage(false),
    className: "jsx-3312725765"
  }, el)))))), MobileMenu_jsx("li", {
    className: "jsx-3312725765"
  }, MobileMenu_jsx("a", {
    onClick: () => setOpenSubmenu('wiecej'),
    className: "jsx-3312725765"
  }, "WIECEJ"), MobileMenu_jsx("ul", {
    style: {
      display: openSubmenu === 'wiecej' ? 'flex' : 'none'
    },
    className: "jsx-3312725765"
  }, MobileMenu_jsx("img", {
    src: "./arrowdown.png",
    onClick: () => setOpenSubmenu(null),
    className: "jsx-3312725765" + " " + 'takeBack'
  }), menu["a" /* menu */].wiecej.map(el => MobileMenu_jsx("li", {
    key: el,
    className: "jsx-3312725765"
  }, MobileMenu_jsx(link_default.a, {
    href: "./[subCategory]",
    as: `./${el.toLowerCase()}`
  }, MobileMenu_jsx("a", {
    href: "#",
    onClick: () => setMainPage(false),
    className: "jsx-3312725765"
  }, el))))))), MobileMenu_jsx(style_default.a, {
    id: "3312725765"
  }, [".close_menu.jsx-3312725765{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;height:31px;width:31px;top:26px;right:22px;z-index:55;cursor:pointer;}", ".close_menu.jsx-3312725765 p.jsx-3312725765{height:2px;width:31px;background-color:#000;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);position:absolute;top:14px;left:0;}", ".close_menu.jsx-3312725765 p.jsx-3312725765:nth-child(2){-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}", ".mobileMenu.jsx-3312725765{position:absolute;top:0;left:0;background-color:#fff;z-index:51;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:1.3rem;-webkit-text-decoration:none;text-decoration:none;font-weight:600;width:100vw;height:100vh;}", ".mobileMenu.jsx-3312725765 li.jsx-3312725765{display:inline-block;}", "a.jsx-3312725765,span.jsx-3312725765{display:block;padding:0 10px;line-height:3.5rem;-webkit-text-decoration:none;text-decoration:none;}", "a.jsx-3312725765:hover{background-color:#ff2a2a;color:#fff;}", ".mobileMenu.jsx-3312725765 ul.jsx-3312725765{display:none;position:absolute;top:0;left:0;height:100vh;width:100vw;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:100;background:#fff;}", ".takeBack.jsx-3312725765{position:absolute;top:0;left:0;width:38px;-webkit-transform:rotate(90deg) translate(7px,-5px);-ms-transform:rotate(90deg) translate(7px,-5px);transform:rotate(90deg) translate(7px,-5px);height:46px;}", ".mobileMenu.jsx-3312725765 ul.jsx-3312725765 li.jsx-3312725765{width:170px;float:none;display:list-item;position:relative;background-color:#fff;border-bottom:1px solid #000;}", ".mobileMenu.jsx-3312725765 ul.jsx-3312725765 li.jsx-3312725765:nth-last-child(1){border-bottom:none;}", ".mobileMenu.jsx-3312725765 li.jsx-3312725765{cursor:pointer;}", ".mobileMenu.jsx-3312725765 ul.jsx-3312725765 ul.jsx-3312725765 li.jsx-3312725765{position:relative;top:-60px;left:170px;}"]));
};

/* harmony default export */ var mobilemenu_MobileMenu = (MobileMenu);
// EXTERNAL MODULE: ./components/layout/Layout.module.scss
var Layout_module = __webpack_require__("0Sn8");
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);

// CONCATENATED MODULE: ./components/layout/Layout.js


var Layout_jsx = external_react_default.a.createElement;







const Layout = ({
  children,
  mainPage,
  setMainPage
}) => {
  const {
    0: openPopup,
    1: setOpenPopup
  } = Object(external_react_["useState"])(false);
  const {
    0: openMobileMenu,
    1: setOpenMobileMenu
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    if (openPopup || openMobileMenu) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'visible';
    }
  }, [openPopup, openMobileMenu]);
  return Layout_jsx("div", {
    className: "jsx-2085888330" + " " + (Layout_module_default.a.layout || "")
  }, Layout_jsx(head_default.a, null, Layout_jsx("title", {
    className: "jsx-2085888330"
  }, "MOJA ZTRONA")), Layout_jsx(mobilemenu_MobileMenu, {
    openMobileMenu: openMobileMenu,
    setOpenMobileMenu: setOpenMobileMenu,
    setMainPage: setMainPage
  }), Layout_jsx("div", {
    style: {
      display: openPopup ? 'block' : 'none'
    },
    className: "jsx-2085888330" + " " + (Layout_module_default.a.popup_help_container || "")
  }, Layout_jsx("div", {
    className: "jsx-2085888330" + " " + (Layout_module_default.a.popup_help_wrapper || "")
  }, Layout_jsx("p", {
    className: "jsx-2085888330" + " " + (Layout_module_default.a.popup_help_info || "")
  }, "NASZA FIRMA NAWIAZALA KONTAKT AFILIACYJNY Z PONAD 100 INNYCH FIRM. DZIEKI NAM MASZ MOZLIWOSC DOJSCIA DO NAJCIEKAWSZYCH PRODUKTOW WIELU FIRM."), Layout_jsx("p", {
    onClick: () => setOpenPopup(!openPopup),
    className: "jsx-2085888330" + " " + (Layout_module_default.a.popup_help_close || "")
  }, "cloze")), Layout_jsx("div", {
    className: "jsx-2085888330" + " " + (Layout_module_default.a.popup_help_container_bg || "")
  })), Layout_jsx("div", {
    className: "jsx-2085888330" + " " + (Layout_module_default.a.topline_container || "")
  }, Layout_jsx("div", {
    style: {
      justifyContent: mainPage ? 'space-between' : 'flex-end'
    },
    className: "jsx-2085888330" + " " + (Layout_module_default.a.topline_wrapper || "")
  }, Layout_jsx("div", {
    style: {
      display: mainPage ? 'flex' : 'none'
    },
    className: "jsx-2085888330" + " " + (Layout_module_default.a.topline_box || "")
  }, Layout_jsx("a", {
    href: "#newsletter",
    className: "jsx-2085888330"
  }, Layout_jsx("p", {
    className: "jsx-2085888330" + " " + (Layout_module_default.a.newsletter || "")
  }, "NEWSLETTER")), Layout_jsx("a", {
    href: "#allImages",
    className: "jsx-2085888330"
  }, Layout_jsx("img", {
    src: "./arrowdown.png",
    className: "jsx-2085888330" + " " + (Layout_module_default.a.arrowdown || "")
  }))), Layout_jsx("div", {
    onClick: () => setOpenPopup(!openPopup),
    className: "jsx-2085888330" + " " + (Layout_module_default.a.pomocBtn || "")
  }, "POMOC"))), Layout_jsx(navbar_Navbar, {
    setOpenMobileMenu: setOpenMobileMenu,
    openMobileMenu: openMobileMenu,
    setMainPage: setMainPage
  }), Layout_jsx("div", {
    className: "jsx-2085888330" + " " + (Layout_module_default.a.bottomline_container || "")
  }, Layout_jsx("div", {
    className: "jsx-2085888330" + " " + (Layout_module_default.a.bottomline_wrapper || "")
  }, Layout_jsx("p", {
    className: "jsx-2085888330" + " " + (Layout_module_default.a.blinking || "")
  }, "MAMY WSZYSTKO CZEGO POTRZEBUJESZ. JESTESMY POLACZENI DO PONAD 100 FIRM"))), children, " ", Layout_jsx(footer_Footer, null), Layout_jsx(style_default.a, {
    id: "2085888330"
  }, []));
};

/* harmony default export */ var layout_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "GLbt":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer_container": "Footer_footer_container__2g4O-",
	"footer_wrapper": "Footer_footer_wrapper__1BhbG",
	"footer_left": "Footer_footer_left__3k1kN",
	"footer_right": "Footer_footer_right__3Nywy",
	"footer": "Footer_footer__17mGM"
};


/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IB8S":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"inbetweenOne_container": "InbetweenOne_inbetweenOne_container__1IGtT",
	"inbetweenOne_wrapper": "InbetweenOne_inbetweenOne_wrapper__3VZ3h"
};


/***/ }),

/***/ "IObC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/LF6");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Card = ({
  id,
  name,
  description,
  price,
  category,
  image,
  createdAt
}) => {
  return __jsx("div", {
    key: name,
    className: "jsx-2085888330" + " " + (_Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.blockBig_container || "")
  }, __jsx("a", {
    href: "#!",
    onClick: () => axios__WEBPACK_IMPORTED_MODULE_3___default()({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      data: {},
      url: `/popularity/${id}`
    }),
    className: "jsx-2085888330" + " " + (_Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.blockBig_image_container || "")
  }, __jsx("span", {
    className: "jsx-2085888330" + " " + (_Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.labelBig || "")
  }, "EXTRA"), __jsx("img", {
    src: image,
    className: "jsx-2085888330" + " " + (_Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.imageBig || "")
  })), __jsx("p", {
    className: "jsx-2085888330" + " " + (_Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.titleBig || "")
  }, name), __jsx("p", {
    className: "jsx-2085888330" + " " + (_Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.priceBig || "")
  }, price, "PLN"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2085888330"
  }, []));
};

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "NzbH":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"empty_padding_newsletter": "Newsletter_empty_padding_newsletter__1cz-s",
	"newsletter_container": "Newsletter_newsletter_container__gIHk5",
	"newsletter_wrapper": "Newsletter_newsletter_wrapper__3sEMR",
	"newsletter_component": "Newsletter_newsletter_component__2fGrr",
	"newsletter_signinbox": "Newsletter_newsletter_signinbox__PXMdH",
	"newsletter_btn": "Newsletter_newsletter_btn__3XlFu"
};


/***/ }),

/***/ "OREE":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"homeNews_container": "HomeNews_homeNews_container__gOpIK",
	"homeNews_title": "HomeNews_homeNews_title__3zxOD",
	"homeNews_title_left": "HomeNews_homeNews_title_left__Lcqn_",
	"homeNews_wrapper": "HomeNews_homeNews_wrapper__3lYjM",
	"homeNews_buttons": "HomeNews_homeNews_buttons__2c1ec",
	"homeNews_box": "HomeNews_homeNews_box__1WTYs"
};


/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/layout/Layout.js + 4 modules
var Layout = __webpack_require__("80PL");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");

// EXTERNAL MODULE: ./components/smallcard/SmallCard.module.scss
var SmallCard_module = __webpack_require__("z9a/");
var SmallCard_module_default = /*#__PURE__*/__webpack_require__.n(SmallCard_module);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/smallcard/SmallCard.js


var __jsx = external_react_default.a.createElement;



const SmallCard = ({
  id,
  name,
  description,
  price,
  category,
  image,
  createdAt
}) => {
  return __jsx("div", {
    key: name,
    className: "jsx-2170358054" + " " + (SmallCard_module_default.a.blockSmall_container || "")
  }, __jsx("p", {
    className: "jsx-2170358054" + " " + (SmallCard_module_default.a.titleSmall || "")
  }, name), __jsx("a", {
    href: "#!",
    onClick: () => external_axios_default()({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      data: {},
      url: `/popularity/${id}`
    }),
    className: "jsx-2170358054"
  }, __jsx("img", {
    src: image,
    className: "jsx-2170358054" + " " + (SmallCard_module_default.a.imageSmall || "")
  })), __jsx(style_default.a, {
    id: "2170358054"
  }, []));
};

/* harmony default export */ var smallcard_SmallCard = (SmallCard);
// EXTERNAL MODULE: ./components/latestnews/LatestNews.module.scss
var LatestNews_module = __webpack_require__("eva/");
var LatestNews_module_default = /*#__PURE__*/__webpack_require__.n(LatestNews_module);

// CONCATENATED MODULE: ./components/latestnews/LatestNews.js


var LatestNews_jsx = external_react_default.a.createElement;



const LatestNews = ({
  data,
  latest
}) => {
  return LatestNews_jsx("div", {
    className: "jsx-2085888330" + " " + (LatestNews_module_default.a.latestNews_container || "")
  }, LatestNews_jsx("div", {
    className: "jsx-2085888330" + " " + (LatestNews_module_default.a.latestNews_title || "")
  }, LatestNews_jsx("p", {
    className: "jsx-2085888330" + " " + (LatestNews_module_default.a.latestNews_title_left || "")
  }, "Najnowsze"), LatestNews_jsx("a", {
    href: "#allImages",
    onClick: () => latest(),
    className: "jsx-2085888330" + " " + (LatestNews_module_default.a.latestNews_title_right || "")
  }, LatestNews_jsx("p", {
    className: "jsx-2085888330"
  }, "Zobacz"))), data ? LatestNews_jsx("div", {
    className: "jsx-2085888330" + " " + (LatestNews_module_default.a.latestNews_wrapper || "")
  }, data.map(el => LatestNews_jsx(smallcard_SmallCard, {
    id: el._id,
    name: el.name,
    description: el.description,
    price: el.price,
    category: el.category,
    image: el.image,
    createdAt: el.createdAt,
    key: el.name
  }))) : LatestNews_jsx("p", {
    className: "jsx-2085888330"
  }, "loading"), LatestNews_jsx(style_default.a, {
    id: "2085888330"
  }, []));
};

/* harmony default export */ var latestnews_LatestNews = (LatestNews);
// EXTERNAL MODULE: ./components/homenews/HomeNews.module.scss
var HomeNews_module = __webpack_require__("OREE");
var HomeNews_module_default = /*#__PURE__*/__webpack_require__.n(HomeNews_module);

// EXTERNAL MODULE: ./components/card/Card.js
var Card = __webpack_require__("IObC");

// CONCATENATED MODULE: ./components/homenews/HomeNews.js


var HomeNews_jsx = external_react_default.a.createElement;



const HomeNews = ({
  data,
  latest,
  popular,
  under,
  random
}) => {
  return HomeNews_jsx("div", {
    id: "allImages",
    className: "jsx-2085888330" + " " + (HomeNews_module_default.a.homeNews_container || "")
  }, HomeNews_jsx("div", {
    className: "jsx-2085888330" + " " + (HomeNews_module_default.a.homeNews_title || "")
  }, HomeNews_jsx("p", {
    className: "jsx-2085888330" + " " + (HomeNews_module_default.a.homeNews_title_left || "")
  }, "Wejdz na wyzszy poziom zakupow")), data ? HomeNews_jsx("div", {
    className: "jsx-2085888330" + " " + (HomeNews_module_default.a.homeNews_wrapper || "")
  }, HomeNews_jsx("div", {
    className: "jsx-2085888330" + " " + (HomeNews_module_default.a.homeNews_buttons || "")
  }, HomeNews_jsx("p", {
    onClick: () => latest(),
    className: "jsx-2085888330" + " " + 'btn'
  }, "Najnowsze"), HomeNews_jsx("p", {
    onClick: () => popular(),
    className: "jsx-2085888330" + " " + 'btn'
  }, "Popularne"), HomeNews_jsx("p", {
    onClick: () => under(),
    className: "jsx-2085888330" + " " + 'btn'
  }, "- 10PLN"), HomeNews_jsx("p", {
    onClick: () => random(),
    className: "jsx-2085888330" + " " + 'btn'
  }, "Random")), HomeNews_jsx("div", {
    className: "jsx-2085888330" + " " + (HomeNews_module_default.a.homeNews_box || "")
  }, data.map(el => HomeNews_jsx(Card["a" /* default */], {
    id: el._id,
    name: el.name,
    description: el.description,
    price: el.price,
    category: el.category,
    image: el.image,
    createdAt: el.createdAt,
    key: el.name
  })))) : HomeNews_jsx("p", {
    className: "jsx-2085888330"
  }, "loading"), HomeNews_jsx(style_default.a, {
    id: "2085888330"
  }, []));
};

/* harmony default export */ var homenews_HomeNews = (HomeNews);
// CONCATENATED MODULE: ./components/adminpanel/AdminPanel.js

var AdminPanel_jsx = external_react_default.a.createElement;



const AdminPanel = () => {
  const {
    0: fileName,
    1: setFileName
  } = Object(external_react_["useState"])(null);
  const {
    0: name,
    1: setName
  } = Object(external_react_["useState"])(null);
  const {
    0: description,
    1: setDescription
  } = Object(external_react_["useState"])(null);
  const {
    0: price,
    1: setPrice
  } = Object(external_react_["useState"])(null);
  const {
    0: category,
    1: setCategory
  } = Object(external_react_["useState"])('osoba');
  const {
    0: subCategory,
    1: setSubCategory
  } = Object(external_react_["useState"])('osoba');

  const submit = e => {
    e.preventDefault();
    if (name === '' || description === '' || price === '' || category === '') return;
    external_axios_default()({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      data: JSON.stringify({
        name: name,
        description: description,
        price: price,
        category: category,
        subCategory: subCategory,
        fileName: fileName
      }),
      url: '/add'
    });
  };

  let subCategoryList = () => {
    let data;

    if (category === 'osoba') {
      data = ['Mezczyzna', 'Kobieta', 'Dzieci', 'Brat', 'Siostra', 'Para', 'Dziadek', 'Babcia', 'Zwierzatko'];
    } else if (category === 'okazja') {
      data = ['Dzien Ojca', 'Dzien Matki', 'Walentynki', 'Rocznica', 'Urodziny', 'Imieniny'];
    } else if (category === 'kategoria') {
      data = ['Indywidualny', 'Praca z domu', 'Prank', 'Gracz', 'Szafiarka', 'Memy'];
    } else if (category === 'wiecej') {
      data = ['Wszystkie', 'Losowe', 'Kontakt'];
    }

    return data.map(el => AdminPanel_jsx("option", {
      value: el,
      key: el
    }, el));
  };

  return AdminPanel_jsx("form", {
    action: "/",
    method: "POST",
    encType: "multipart/form-data"
  }, AdminPanel_jsx("label", null, "FileName"), AdminPanel_jsx("input", {
    type: "text",
    onChange: e => setFileName(e.target.value)
  }), AdminPanel_jsx("label", null, "Name"), AdminPanel_jsx("input", {
    type: "text",
    onChange: e => setName(e.target.value)
  }), AdminPanel_jsx("label", null, "Description"), AdminPanel_jsx("input", {
    type: "text",
    onChange: e => setDescription(e.target.value)
  }), AdminPanel_jsx("label", null, "Price"), AdminPanel_jsx("input", {
    type: "text",
    onChange: e => setPrice(e.target.value)
  }), AdminPanel_jsx("label", null, "Category"), AdminPanel_jsx("select", {
    onChange: e => setCategory(e.target.value)
  }, ['osoba', 'okazja', 'kategoria', 'wiecej'].map(el => AdminPanel_jsx("option", {
    value: el,
    key: el
  }, el))), AdminPanel_jsx("label", null, "SubCategory"), AdminPanel_jsx("select", {
    onChange: e => setSubCategory(e.target.value.toLowerCase())
  }, subCategoryList()), AdminPanel_jsx("button", {
    onClick: e => submit(e)
  }, "submit"));
};

/* harmony default export */ var adminpanel_AdminPanel = (AdminPanel);
// EXTERNAL MODULE: ./components/inbetweenone/InbetweenOne.module.scss
var InbetweenOne_module = __webpack_require__("IB8S");
var InbetweenOne_module_default = /*#__PURE__*/__webpack_require__.n(InbetweenOne_module);

// CONCATENATED MODULE: ./components/inbetweenone/InbetweenOne.js


var InbetweenOne_jsx = external_react_default.a.createElement;


const InbetweenOne = () => {
  return InbetweenOne_jsx("div", {
    className: "jsx-2085888330" + " " + (InbetweenOne_module_default.a.inbetweenOne_container || "")
  }, InbetweenOne_jsx("div", {
    className: "jsx-2085888330" + " " + (InbetweenOne_module_default.a.inbetweenOne_wrapper || "")
  }, InbetweenOne_jsx("span", {
    className: "jsx-2085888330"
  }, "The year 2020"), InbetweenOne_jsx("p", {
    className: "jsx-2085888330"
  }, "WSZYSTKO CZEGO DUSZA ZAPRAGNIE JEST W JEDNYM MIEJSCU")), InbetweenOne_jsx(style_default.a, {
    id: "2085888330"
  }, []));
};

/* harmony default export */ var inbetweenone_InbetweenOne = (InbetweenOne);
// EXTERNAL MODULE: ./components/newsletter/Newsletter.module.scss
var Newsletter_module = __webpack_require__("NzbH");
var Newsletter_module_default = /*#__PURE__*/__webpack_require__.n(Newsletter_module);

// CONCATENATED MODULE: ./components/newsletter/Newsletter.js


var Newsletter_jsx = external_react_default.a.createElement;


const Newsletter = () => {
  return Newsletter_jsx(external_react_default.a.Fragment, null, Newsletter_jsx("div", {
    id: "newsletter",
    className: "jsx-2085888330" + " " + (Newsletter_module_default.a.empty_padding_newsletter || "")
  }), Newsletter_jsx("div", {
    className: "jsx-2085888330" + " " + (Newsletter_module_default.a.newsletter_container || "")
  }, Newsletter_jsx("div", {
    className: "jsx-2085888330" + " " + (Newsletter_module_default.a.newsletter_wrapper || "")
  }, Newsletter_jsx("p", {
    className: "jsx-2085888330" + " " + (Newsletter_module_default.a.newsletter_component || "")
  }, "Zostaw suba! ", Newsletter_jsx("br", {
    className: "jsx-2085888330"
  }), " badz na biezaco z nowosciami"), Newsletter_jsx("div", {
    className: "jsx-2085888330" + " " + (Newsletter_module_default.a.newsletter_signinbox || "")
  }, Newsletter_jsx("input", {
    type: "text",
    className: "jsx-2085888330"
  }), Newsletter_jsx("p", {
    className: "jsx-2085888330" + " " + (Newsletter_module_default.a.newsletter_btn || "")
  }, "Zapisz sie")))), Newsletter_jsx(style_default.a, {
    id: "2085888330"
  }, []));
};

/* harmony default export */ var newsletter_Newsletter = (Newsletter);
// EXTERNAL MODULE: external "keen-slider/react"
var react_ = __webpack_require__("ogra");

// CONCATENATED MODULE: ./pages/index.js


var pages_jsx = external_react_default.a.createElement;











const Index = ({
  latestNewsData,
  homeNewsData
}) => {
  const {
    0: homeData,
    1: setHomeData
  } = Object(external_react_["useState"])([]); // data to which I add more n more elements

  const {
    0: btnChangedData,
    1: setBtnChangedData
  } = Object(external_react_["useState"])([]); // based on btn type set new data from homeData

  const {
    0: currentBtnClicked,
    1: setCurrentBtnClicked
  } = Object(external_react_["useState"])(''); // type of btn

  const {
    0: currentPage,
    1: setCurrentPage
  } = Object(external_react_["useState"])(8); // current page number

  const {
    0: mainPage,
    1: setMainPage
  } = Object(external_react_["useState"])(true); // based on value I disappear top navbar line elements (left)
  // slider configuration ***

  const [pause, setPause] = external_react_default.a.useState(false);
  const timer = external_react_default.a.useRef();
  const [sliderRef, slider] = Object(react_["useKeenSlider"])({
    loop: true,
    duration: 2000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    }
  });
  external_react_default.a.useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true);
    });
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false);
    });
  }, [sliderRef]);
  external_react_default.a.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 3500);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]); // end of slider configuration ***

  Object(external_react_["useEffect"])(() => {
    setHomeData(homeNewsData);
  }, []);

  const latest = () => {
    let oldData = [...homeData];
    let time = new Date(Date.now() - 86400000 * 5).toISOString();
    let newData = oldData.filter(el => el.createdAt > time);
    setBtnChangedData(newData);
    setCurrentBtnClicked('latest');
  };

  const popular = () => {
    let oldData = [...homeData];
    let newData = oldData.filter(el => el.popularity >= 10);
    setBtnChangedData(newData);
    setCurrentBtnClicked('popular');
  };

  const under = () => {
    let oldData = [...homeData];
    let newData = oldData.filter(el => el.price <= 10);
    setBtnChangedData(newData);
    setCurrentBtnClicked('under');
  };

  const random = () => {
    let oldData = [...homeData];

    function shuffle(array) {
      var currentIndex = array.length,
          temporaryValue,
          randomIndex; // While there remain elements to shuffle...

      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1; // And swap it with the current element.

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    let newData = shuffle(oldData);
    setBtnChangedData(newData);
    setCurrentBtnClicked('random');
  };

  const more = async () => {
    let {
      data
    } = await external_axios_default()({
      method: 'GET',
      url: `/items/${currentPage}`
    });
    setCurrentPage(p => p + 4);
    setBtnChangedData([]); // Reset and come back to homeData

    setHomeData(data); // Add to homeData

    if (currentBtnClicked === 'latest') latest();
    if (currentBtnClicked === 'popular') popular();
    if (currentBtnClicked === 'under') under(); // if (currentBtnClicked === 'random') random();
  };

  return pages_jsx(Layout["a" /* default */], {
    mainPage: mainPage,
    setMainPage: setMainPage
  }, pages_jsx("div", {
    className: "jsx-931979104" + " " + 'container'
  }, pages_jsx("div", {
    ref: sliderRef,
    className: "jsx-931979104" + " " + 'keen-slider'
  }, pages_jsx("div", {
    className: "jsx-931979104" + " " + 'keen-slider__slide number-slide1 slider-configuration'
  }, pages_jsx("div", {
    className: "jsx-931979104" + " " + 'slider-box'
  }, pages_jsx("img", {
    src: "./slider/1.jpg",
    className: "jsx-931979104"
  }), pages_jsx("p", {
    className: "jsx-931979104" + " " + 'slider-text slider-text-1'
  }, "PONAD 100 SKLEPOW"))), pages_jsx("div", {
    className: "jsx-931979104" + " " + 'keen-slider__slide number-slide2 slider-configuration'
  }, pages_jsx("div", {
    className: "jsx-931979104" + " " + 'slider-box'
  }, pages_jsx("img", {
    src: "./slider/2.jpg",
    className: "jsx-931979104"
  }), pages_jsx("p", {
    className: "jsx-931979104" + " " + 'slider-text slider-text-2'
  }, "ZAWSZE POD REKA"))), pages_jsx("div", {
    className: "jsx-931979104" + " " + 'keen-slider__slide number-slide3 slider-configuration'
  }, pages_jsx("div", {
    className: "jsx-931979104" + " " + 'slider-box'
  }, pages_jsx("img", {
    src: "./slider/1.jpg",
    className: "jsx-931979104"
  }), pages_jsx("p", {
    className: "jsx-931979104" + " " + 'slider-text slider-text-3'
  }, "NA KAZDA OKAZJE"))), pages_jsx("div", {
    className: "jsx-931979104" + " " + 'keen-slider__slide number-slide4 slider-configuration'
  }, pages_jsx("div", {
    className: "jsx-931979104" + " " + 'slider-box'
  }, pages_jsx("img", {
    src: "./slider/4.jpg",
    className: "jsx-931979104"
  }), pages_jsx("p", {
    className: "jsx-931979104" + " " + 'slider-text slider-text-4'
  }, "WASZE CENTRUM")))), latestNewsData ? pages_jsx(latestnews_LatestNews, {
    data: latestNewsData,
    latest: latest
  }) : pages_jsx("p", {
    className: "jsx-931979104"
  }, "Loading"), pages_jsx(inbetweenone_InbetweenOne, null), pages_jsx(newsletter_Newsletter, null), homeData || btnChangedData ? pages_jsx(homenews_HomeNews, {
    data: btnChangedData.length === 0 ? homeData : btnChangedData,
    latest: latest,
    popular: popular,
    under: under,
    random: random
  }) : pages_jsx("p", {
    className: "jsx-931979104"
  }, "Loading")), pages_jsx("div", {
    className: "jsx-931979104" + " " + 'moreBtnDiv'
  }, pages_jsx("button", {
    onClick: () => more(),
    className: "jsx-931979104" + " " + 'btn'
  }, "WIECEJ")), pages_jsx(style_default.a, {
    id: "931979104"
  }, [".slider-configuration.jsx-931979104{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:2rem 0;}", ".slider-box.jsx-931979104{position:relative;}", ".slider-text.jsx-931979104{position:absolute;font-size:3rem;width:34rem;line-height:3rem;text-shadow:1px 1px 0px rgba(0,0,0,0.2);padding:1rem 2rem;background-color:#ffc500;color:#fff;}", ".slider-text-1.jsx-931979104{bottom:30rem;left:-5rem;white-space:nowrap;}", ".slider-text-2.jsx-931979104{bottom:29rem;right:-1rem;}", ".slider-text-3.jsx-931979104{bottom:3rem;left:-10rem;}", ".slider-text-4.jsx-931979104{bottom:2rem;right:-3rem;}", ".star.jsx-931979104{position:absolute;top:-54px;left:-57px;width:9%;-webkit-transform:rotate(-3deg);-ms-transform:rotate(-3deg);transform:rotate(-3deg);}", ".moreBtnDiv.jsx-931979104{text-align:center;margin:3rem 0;}", ".moreBtnDiv.jsx-931979104 button.jsx-931979104{padding:1rem 3rem;border:none;outline:none;}", ".moreBtnDiv.jsx-931979104 button.jsx-931979104:hover{background-color:#ff2a2a;color:#fff;}", ".moreBtnDiv.jsx-931979104 button.jsx-931979104:active{-webkit-transform:translateY(0.3rem);-ms-transform:translateY(0.3rem);transform:translateY(0.3rem);}", "@media only screen and (max-width:1024px){.slider-text-1.jsx-931979104{left:-1rem;}.slider-text-2.jsx-931979104{right:-3rem;}.slider-text-3.jsx-931979104{left:-1rem;}}", "@media only screen and (max-width:768px){.slider-box.jsx-931979104{position:relative;width:95%;margin:0 auto;}.slider-box.jsx-931979104 img.jsx-931979104{width:100%;}.slider-box.jsx-931979104 p.jsx-931979104{font-size:1.8rem;width:100%;padding:0.4rem 0;text-align:center;bottom:0;left:0;}}", "@media only screen and (max-width:510px){.slider-box.jsx-931979104 p.jsx-931979104{font-size:1.3rem;padding:.2rem 0;line-height:inherit;}}"]));
};

const getStaticProps = async ctx => {
  let latestNewsData = await external_axios_default()({
    method: 'GET',
    url: `/five`
  });
  let homeNewsData = await external_axios_default()({
    method: 'GET',
    url: `/items/1`
  });
  return {
    props: {
      latestNewsData: latestNewsData.data,
      homeNewsData: homeNewsData.data
    },
    revalidate: 1 //  static content can also be dynamic (ale jakby za 3 razem?). https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation

  };
};
/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cE6r":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

var _router = __webpack_require__("nOHt");

var _router2 = __webpack_require__("elyg");
/**
* Detects whether a given url is from the same origin as the current page (browser only).
*/


function isLocal(url) {
  const locationOrigin = (0, _utils.getLocationOrigin)();
  const resolved = new URL(url, locationOrigin);
  return resolved.origin === locationOrigin;
}

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName,
    target
  } = e.currentTarget;

  if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
    // ignore click for new tab / new window behavior
    return;
  }

  if (!isLocal(href)) {
    // ignore click if it's outside our scope (e.g. https://google.com)
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router2.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router2.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router2.addBasePath)(as);
  } // Add the ending slash to the paths. So, we can serve the
  // "<page>/index.html" directly.


  if (false) {}

  return _react.default.cloneElement(child, childProps);
}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _searchParamsToUrlQuery = __webpack_require__("cE6r");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _normalizeTrailingSlash = __webpack_require__("X24+");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addBasePath(path) {
  return basePath ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  const finalUrl = new URL(urlAsString, base);
  finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

  return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (false) {}

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      const {
        url,
        as,
        options,
        __N
      } = e.state;

      if (!__N) {
        // this history state wasn't created by next.js so it can be ignored
        return;
      }

      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      if (false) {}

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly for the SSR page.


    if (false) {}

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = delBasePath(as);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _searchParamsToUrlQuery.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "eva/":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"latestNews_container": "LatestNews_latestNews_container__3OCKx",
	"latestNews_title": "LatestNews_latestNews_title__2Xtcj",
	"latestNews_title_left": "LatestNews_latestNews_title_left__2yE_2",
	"latestNews_title_right": "LatestNews_latestNews_title_right__1MlzG",
	"latestNews_wrapper": "LatestNews_latestNews_wrapper__2QLUj",
	"latestNews_title-right": "LatestNews_latestNews_title-right__3OV02"
};


/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
const DUMMY_BASE = new URL('http://n');
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected.
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "ogra":
/***/ (function(module, exports) {

module.exports = require("keen-slider/react");

/***/ }),

/***/ "upzw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pathMenu; });
// export const menu = {
//   osoba: [
//     'Mezczyzna',
//     'Kobieta',
//     'Dzieci',
//     'Brat',
//     'Siostra',
//     'Para',
//     'Zwierzatko',
//   ],
//   okazja: ['Dzien Ojca', 'Dzien Matki', 'Walentynki', 'Rocznica', 'Urodziny'],
//   kategoria: ['Indywidualny', 'Prank', 'Gracz', 'Szafiarka', 'Memy'],
//   wiecej: ['Wszystkie', 'Kontakt'],
// };
const menu = {
  osoba: ['Mezczyzna', 'Kobieta'],
  okazja: [],
  kategoria: [],
  wiecej: []
}; // export const pathMenu = [
//   'mezczyzna',
//   'kobieta',
//   'dzieci',
//   'brat',
//   'siostra',
//   'para',
//   'zwierzatko',
//   'dzien Ojca',
//   'dzien Matki',
//   'walentynki',
//   'rocznica',
//   'urodziny',
//   'indywidualny',
//   'prank',
//   'gracz',
//   'szafiarka',
//   'memy',
//   'wszystkie',
//   'kontakt',
// ];

const pathMenu = ['mezczyzna', 'kobieta'];

/***/ }),

/***/ "wXM4":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"navbar_container": "Navbar_navbar_container__2Fopq",
	"navbar_wrapper": "Navbar_navbar_wrapper__3JnG9",
	"navbar_logo": "Navbar_navbar_logo__2r8W5",
	"burger": "Navbar_burger__1pUWg"
};


/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z9a/":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blockSmall_container": "SmallCard_blockSmall_container__ouW6-",
	"titleSmall": "SmallCard_titleSmall__2YMVT",
	"imageSmall": "SmallCard_imageSmall__1IHKn"
};


/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });