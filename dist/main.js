/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/1.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/1.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/1.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"* {\\r\\n    margin:0;\\r\\n    padding:0;\\r\\n    box-sizing:border-box;\\r\\n}\\r\\nbody {\\r\\n    overflow-x:hidden;\\r\\n}\\r\\n.page-header {\\r\\n    display:flex;\\r\\n    justify-content: space-around;\\r\\n    min-height:8vh;\\r\\n    align-items: center;\\r\\n    /* width:90%; */\\r\\n    margin: 0 auto;\\r\\n    padding:20px 0px;\\r\\n}\\r\\n.page-header > nav > .logo-container {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    color:black;\\r\\n    flex:1;\\r\\n    justify-content: center;\\r\\n}\\r\\n.logo-container > h4 {\\r\\n    font-family: segoe ui light;\\r\\n    font-size:18px;\\r\\n}\\r\\n.logo-container > img {\\r\\n    margin-right:10px;\\r\\n}\\r\\n.page-header > nav {\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n    width:100%\\r\\n}\\r\\n.page-header > nav > .nav-links {\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n    flex:2;\\r\\n    align-items:center;\\r\\n}\\r\\n\\r\\n.nav-link {\\r\\n    list-style-type:none;\\r\\n}\\r\\n.nav-link > a {\\r\\n    text-decoration: none;\\r\\n    color:rgba(0,0,0,0.7);\\r\\n    font-family: 'Poppins', sans-serif;\\r\\n    transition : .6s all ease-in;\\r\\n    background-size:0% 50%;\\r\\n}\\r\\n.nav-link > a:hover {\\r\\n    background: linear-gradient(to right ,  pink , blue);\\r\\n    -webkit-background-clip: text;\\r\\n    -webkit-text-fill-color: transparent;\\r\\n    background-size:100% 100%;\\r\\n}\\r\\n.cart-logo {\\r\\n    flex: 0.5;\\r\\n    justify-content: center;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n.burger {\\r\\n    width:40px;\\r\\n    height:40px;\\r\\n    flex-direction: column;\\r\\n    justify-content: space-around;\\r\\n    display:none;\\r\\n}\\r\\n.burger > div {\\r\\n    width:100%;\\r\\n    height:2px;\\r\\n    background-color:black;\\r\\n}\\r\\n.page-present {\\r\\n    display:flex;\\r\\n    justify-content:space-around;\\r\\n    align-items:center;\\r\\n    font-family:'Poppins', sans-serif;\\r\\n    position:relative;\\r\\n}\\r\\n.cover {\\r\\n    width:40vw;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.cover img {\\r\\n    width : 100%;\\r\\n    filter: drop-shadow(3px 5px 6px black);\\r\\n    opacity:0;\\r\\n    animation : loadIn 1s ease-in forwards;\\r\\n}\\r\\n@-webkit-keyframes loadIn {\\r\\n    from {\\r\\n        transform : translateY(-200px);\\r\\n    }\\r\\n    to {\\r\\n        transform : translateY(0px);\\r\\n        opacity:1;\\r\\n    }\\r\\n}\\r\\n.laptop-select {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    width:25%;\\r\\n    margin-top:20px;\\r\\n}\\r\\n.laptop-select > img {\\r\\n    width : 10px;\\r\\n    filter:none;\\r\\n    margin:0px 20px;\\r\\n    cursor:pointer;\\r\\n}\\r\\n.laptop-select > div {\\r\\n    width:15px;\\r\\n    height:15px;\\r\\n    border-radius:50%;\\r\\n    background-color:rgba(0,0,0,0.7);\\r\\n}\\r\\n.page-intro > .intro__text > h1 {\\r\\n    font-size:40px;\\r\\n    background : linear-gradient(to right , #494964 , #6f6f89);\\r\\n    -webkit-background-clip: text;\\r\\n    -webkit-text-fill-color: transparent;\\r\\n}\\r\\n.page-intro > .intro__text > p {\\r\\n    margin-top:10px;\\r\\n    color : #585772;\\r\\n}\\r\\n.page-intro > .intro__cta {\\r\\n    margin-top:50px;\\r\\n}\\r\\n.page-intro > .intro__cta > .cta--select {\\r\\n    border:none;\\r\\n    background:transparent;\\r\\n    border:2px solid #c36cbb;\\r\\n    width:140px;\\r\\n    padding:12px 0px;\\r\\n    cursor:pointer;\\r\\n    background-color:#c36cbb;\\r\\n    color:rgba(255, 255, 255,0.9);\\r\\n    margin-right:20px;\\r\\n    font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n.page-intro > .intro__cta > .cta--add {\\r\\n    border:none;\\r\\n    background:transparent;\\r\\n    border:2px solid #c36cbb;\\r\\n    width:140px;\\r\\n    padding:12px 0px;\\r\\n    cursor:pointer;\\r\\n    color:#c36cbb;\\r\\n    font-family: 'Poppins', sans-serif;\\r\\n    transition:.3s all ease-in;\\r\\n}\\r\\n.page-intro > .intro__cta > .cta--add:hover {\\r\\n    color:white;\\r\\n    background-color:#c36cbb;\\r\\n}\\r\\n.page-intro > .intro__cta > button:focus {\\r\\n    outline:none;\\r\\n}\\r\\n.page-intro__bg {\\r\\n    position: absolute;\\r\\n    right:0;\\r\\n    top:0;\\r\\n    width:100%;\\r\\n    height:100%;\\r\\n    z-index:-1;\\r\\n    opacity:.7;\\r\\n}\\r\\n.page-intro__bg  > .bg-circle{\\r\\n    position: absolute;\\r\\n    right:0;\\r\\n    top:0;\\r\\n    width:40%;\\r\\n}\\r\\n.page-intro__bg > .md-circle{\\r\\n    position:absolute;\\r\\n    top:35%;\\r\\n    right:35%;\\r\\n}\\r\\n.page-intro__bg > .sm-circle {\\r\\n    position:absolute;\\r\\n    top:60%;\\r\\n    right:65%;\\r\\n}\\r\\n.page-seller {\\r\\n    padding-top:100px;\\r\\n    width:90%;\\r\\n    margin:0 auto;\\r\\n}\\r\\n.page-seller--item {\\r\\n    text-align: center;\\r\\n    font-family:'Poppins', sans-serif;\\r\\n}\\r\\n.page-seller--item > .item__img {\\r\\n    height:80%;\\r\\n    overflow:hidden;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    cursor:pointer;\\r\\n}\\r\\n.item__img > img {\\r\\n    transition:.6s all ease-in;\\r\\n}\\r\\n.item__img:hover img {\\r\\n    transform: scale(1.3);\\r\\n}\\r\\n.item__description {\\r\\n    text-align: left;\\r\\n    color:#585772;\\r\\n    margin-top:10px 0px;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width:576px){\\r\\n    .nav-links {\\r\\n        width:100vw !important;\\r\\n    }\\r\\n}\\r\\n@media only screen and (max-width:992px){\\r\\n    .burger{\\r\\n        display:flex;\\r\\n        cursor:pointer;\\r\\n    }\\r\\n    .nav-active {\\r\\n        transform:translateX(0) !important;\\r\\n    }\\r\\n    .burger > div {\\r\\n        transition: .3s all ease-out;\\r\\n    } \\r\\n    .burger-break > .burger__line--1 {\\r\\n        transform: translate(-2px ,0px) rotateZ(45deg);\\r\\n        transform-origin: 0% 0%;\\r\\n    }\\r\\n    .burger-break > .burger__line--3 {\\r\\n        transform: translate(-3px,1px)rotateZ(-45deg);\\r\\n        transform-origin: 0% 0%;\\r\\n    }\\r\\n    .burger-break > .burger__line--2 {\\r\\n        opacity : 0;\\r\\n    }\\r\\n    .page-header > nav > .nav-links {\\r\\n        position:absolute;\\r\\n        width:50vw;\\r\\n        height:90vh;\\r\\n        right:0;\\r\\n        top:10vh;\\r\\n        flex-direction: column; \\r\\n        background-color:rgba(0,0,0,0.9);\\r\\n        z-index:1;\\r\\n        border-top-left-radius: 5px;\\r\\n        transform:translateX(100%);\\r\\n        transition : .4s all ease-in;\\r\\n    }\\r\\n    .nav-links > .nav-link {\\r\\n        width:100%;\\r\\n        text-align: center;\\r\\n        padding: 40px 0px;\\r\\n        transition:.4s all ease-in;\\r\\n        opacity: 0;\\r\\n    }\\r\\n    @-webkit-keyframes slide-in {\\r\\n        from {\\r\\n            transform : translateX(100%);\\r\\n        }\\r\\n        to {\\r\\n            opacity:1;\\r\\n            transform: translateX(0);\\r\\n        }\\r\\n    }\\r\\n    .nav-links > .nav-link > a{ \\r\\n        color: rgba(255,255,255,0.7);\\r\\n        font-size:18px;\\r\\n    }\\r\\n    .nav-link:hover{\\r\\n        background-color:rgba(255,255,255,0.2);\\r\\n    }\\r\\n    .page-header > nav {\\r\\n        width:80%;\\r\\n    }\\r\\n    .page-header > nav > .logo-container {\\r\\n        justify-content: flex-start;\\r\\n    }\\r\\n    .page-header > nav > .cart-logo{\\r\\n        justify-content: flex-end;\\r\\n        margin-right:10px;\\r\\n    }\\r\\n    .page-present {\\r\\n        flex-direction: column;\\r\\n        margin-top:30px;\\r\\n    }\\r\\n    .page-present > .page-intro {\\r\\n        text-align:center;\\r\\n    }\\r\\n    .cover {\\r\\n        width:80%;\\r\\n    }\\r\\n    .laptop-select {\\r\\n        width:80%;\\r\\n    }\\r\\n    .page-seller--item {\\r\\n        margin-top:40px;\\r\\n    }\\r\\n    .page-seller--item > .item__name {\\r\\n        margin-top:10px;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/1.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/1.css":
/*!*******************!*\
  !*** ./src/1.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./1.css */ \"./node_modules/css-loader/dist/cjs.js!./src/1.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/1.css?");

/***/ }),

/***/ "./src/1.js":
/*!******************!*\
  !*** ./src/1.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _1_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1.css */ \"./src/1.css\");\n/* harmony import */ var _1_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_1_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\nvar burger = document.querySelector('.burger');\r\nvar navMenu = document.querySelector('.nav-links');\r\nvar burgerLine = document.querySelectorAll('.burger > div');\r\nvar navMenuItems = document.querySelectorAll('.nav-links > .nav-link');\r\nvar leftArrow = document.querySelector('.laptop-select > .left');\r\nvar rightArrow = document.querySelector('.laptop-select > .right');\r\nburger.addEventListener('click',function(){\r\n    navMenu.classList.toggle('nav-active');\r\n    burger.classList.toggle('burger-break');\r\n    navMenuItems.forEach((navMenuItem,index) => {\r\n        if(!navMenuItem.style.animation){\r\n            navMenuItem.style.animation = `slide-in .8s ease-in forwards ${index / 8 + 0.5}s `\r\n        }else navMenuItem.style.animation = '';\r\n    });\r\n})\r\n\n\n//# sourceURL=webpack:///./src/1.js?");

/***/ })

/******/ });