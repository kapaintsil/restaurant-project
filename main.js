/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/momt___-webfont.woff2 */ \"./src/fonts/momt___-webfont.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/momt___-webfont.woff */ \"./src/fonts/momt___-webfont.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/homepage-background.jpg */ \"./src/images/homepage-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/menupage-background.jpg */ \"./src/images/menupage-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/aboutpage-background.jpg */ \"./src/images/aboutpage-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\r\n:root {\r\n  --primary-color: rgb(20, 5, 5);\r\n}\r\n\r\n\r\n@font-face {\r\n  font-family: \"typewritter\";\r\n  src: \r\n      url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"woff2\"),\r\n      url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(\"woff\");\r\n  font-style: normal;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nheader {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  height: 80px;\r\n  background-color: white;\r\n  box-shadow: 0px 0px 5px 0.1px lightgray;\r\n  z-index: 1;\r\n}\r\n\r\nheader > nav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nheader > nav > div {\r\n  margin-top: -20px;\r\n  width: 200px;\r\n}\r\n\r\nheader > nav > div > a > img {\r\n  width: 200px;\r\n}\r\n\r\nheader > nav > ul {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n} \r\n\r\nnav > ul > li {\r\n  list-style: none;\r\n  margin-top: -20px;\r\n  margin-right: 30px;\r\n}\r\n\r\nnav > ul > li > a {\r\n  text-decoration: none;\r\n  font-size: 1.2rem;\r\n  color: var(--primary-color);\r\n}\r\n\r\nnav > ul > li > a:hover {\r\n  text-decoration:  underline;\r\n}\r\n.content {\r\n  margin-top: 70px;\r\n  position: relative;\r\n}\r\n\r\n.author > p {\r\n  color: white;\r\n}\r\n\r\n\r\n/***************! home page styling *********************/\r\n.home-page-body {\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n  background-position: center;\r\n  background-size: cover;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  background-blend-mode: overlay;\r\n}\r\n\r\n.home-page-body > h1 {\r\n  padding-top: 100px;\r\n  text-transform: capitalize;\r\n  font-size: 2.5rem;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.home-page-body > div {\r\n  margin-top: 50px;\r\n  color: white;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.home-page-body > div >div:first-child {\r\n  width: 400px;\r\n}\r\n\r\n.home-page-body > div >div:first-child > h3 {\r\n  word-spacing: 2px;\r\n  letter-spacing: 1.4px;\r\n  font-family: \"Roboto\", serif;\r\n}\r\n\r\n.home-page-body > div > div:nth-child(2) {\r\n  border: 5px solid white;\r\n  height: 230px;\r\n  width: 280px;\r\n  padding: 20px;\r\n  position: relative;\r\n}\r\n\r\n.home-page-body > div > div:nth-child(2) > p {\r\n  margin: 10px;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.home-page-body > div > div:nth-child(2) > button {\r\n  cursor: pointer;\r\n  border: none;\r\n  position: absolute;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  right: 10px;\r\n  bottom: 10px;\r\n  width: 100px;\r\n  padding: 8px;\r\n  color: white;\r\n  background-color: var(--primary-color);\r\n}\r\n\r\n.home-page-body > div > div:nth-child(2) > button:active {\r\n  border: 1px solid --primary-color;\r\n  background-color: transparent;\r\n  color: white;\r\n  transition: 0.25s;\r\n}\r\n\r\n\r\n/*************! menu page **************/\r\n.menu-page-body {\r\n  height: 100vh;\r\n  background: linear-gradient(\r\n    320deg, \r\n    rgb(21, 5, 5) 50%,\r\n      transparent 50%\r\n  ),\r\n  url(${___CSS_LOADER_URL_REPLACEMENT_3___}); \r\n  \r\n  background-size: cover;\r\n  background-position: left; \r\n  background-color: rgba(0, 0, 0, 0.5); \r\n  background-blend-mode: overlay;\r\n}\r\n\r\n.menu-page-body > h3 {\r\n  color: white;\r\n  text-align: center;\r\n  padding-top: 30px;\r\n  font-size: 3rem;\r\n}\r\n\r\n.menu-page-body > div {\r\n  margin-top: 30px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n}\r\n\r\n.menu-page-body > div > div {\r\n  border: 1px solid white;\r\n  width: 250px;\r\n  height: 350px;\r\n  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 20% 80%, 0% 80%);\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.menu-page-body > div > div > h3 {\r\n  margin: 10px 0 20px 10px;\r\n  font-size: 2rem;\r\n  color: white;\r\n  font-family: \"Roboto\", serif;\r\n}\r\n\r\n.menu-page-body > div > div > p {\r\n  color: white;\r\n  text-align: center;\r\n  font-family: \"typewritter\";\r\n  text-decoration: underline;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n/******************! about us page ****************/\r\n\r\n.about-page-body {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.5); \r\n  background-blend-mode: overlay;\r\n}\r\n\r\n.about-page-body > h1 {\r\n  color: white;\r\n  padding-top: 50px;\r\n  font-size: 3rem;\r\n  margin-left: 50px;\r\n}\r\n\r\n.about-page-body > p {\r\n  color: white;\r\n  margin: 15px 0 15px 50px;\r\n  max-width: 800px;\r\n  font-size: 1.2rem;\r\n  font-family: \"Roboto\", serif;\r\n}\r\n\r\n/******************! contact page *******************/\r\n\r\n.contact-page-body {\r\n  height: 100vh;\r\n  background: linear-gradient(to right, var(--primary-color) 50%, #ffffff 50%);\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n\r\n.contact-page-body > div {\r\n  width: 50%;\r\n  height: 100vh;\r\n}\r\n\r\n.contact-page-body > div:first-child > h1 {\r\n  color: white;\r\n  padding-top: 50px;\r\n  font-size: 3rem;\r\n  margin-left: 50px;\r\n}\r\n\r\n.contact-page-body > div:first-child > p {\r\n  color: white;\r\n  margin: 15px 0 15px 50px;\r\n  max-width: 800px;\r\n  font-size: 1.2rem;\r\n  font-family: \"Roboto\", serif;\r\n}\r\n\r\n.contact-page-body > div:nth-child(2) {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.contactAuthor {\r\n  opacity: 0.5;\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  bottom: 10px;\r\n  right: 10px;\r\n}\r\n\r\n.contactAuthor > span {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.contactAuthor > span > a {\r\n  color: black;\r\n  font-size: 1.5rem;\r\n}\r\n\r\nform {\r\n  padding: 15px;\r\n  width: 300px;\r\n  height: 400px;\r\n  border: 1px solid var(--primary-color);\r\n}\r\n\r\nform > label {\r\n  font-size: 1.3rem;\r\n  font-family: \"Roboto\", serif;\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\nform > input {\r\n  height: 25px;\r\n  width: 93%;\r\n  padding: 0 10px 0 10px;\r\n}\r\n\r\nform > textarea {\r\n  width: 93%;\r\n  margin-top: 20px;\r\n  height: 100px;\r\n  padding: 10px;\r\n  font-family: \"Roboto\", serif;\r\n}\r\n\r\nform > button {\r\n  cursor: pointer;\r\n  width: 100px;\r\n  height: 30px;\r\n  margin-top: 20px;\r\n  margin-left: 30px;\r\n  border: none;\r\n  background-color: var(--primary-color);\r\n  color: white\r\n}\r\n\r\nform > button:active {\r\n  border: 1px solid --primary-color;\r\n  background-color: transparent;\r\n  color: white;\r\n  transition: 0.25s;\r\n}\r\n\r\nform > button:last-child {\r\n  background-color: transparent;\r\n  border: 1px solid var(--primary-color);\r\n  color: var(--primary-color);\r\n}\r\n\r\nform > button:last-child:active {\r\n  border: none;\r\n  background-color: var(--primary-color);\r\n  color: white;\r\n  transition: 0.25s;\r\n}\r\n\r\nsection {\r\n  position: relative;\r\n}\r\n\r\n.author {\r\n  opacity: 0.5;\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  bottom: 10px;\r\n  right: 10px;\r\n}\r\n.author > span {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.author > span > a {\r\n  color: white;\r\n  font-size: 1.5rem;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page-project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about-page.js":
/*!***************************!*\
  !*** ./src/about-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ about_page)\n/* harmony export */ });\n\r\nfunction about_page() {\r\n  const content = document.querySelector('.content');\r\n  content.textContent = \"\";\r\n\r\n  const section = document.createElement('section');\r\n  section.classList.add('about-page-body');\r\n  content.appendChild(section);\r\n\r\n  const h1 = document.createElement('h1');\r\n  h1.textContent = \"About Us:\";\r\n  section.appendChild(h1);\r\n\r\n  \r\n  const p1 = document.createElement('p');\r\n  const p2 = document.createElement('p');\r\n  const p3= document.createElement('p');\r\n  const p4 = document.createElement('p');\r\n  const p5 = document.createElement('p');\r\n\r\n  p1.innerHTML = \r\n                    \"Welcome to <b>Food & Drinks Restaurant</b>, where culinary delights meet exceptional experiences! Our journey began with a passion for food and a vision to create a dining destination that celebrates flavor, creativity, and community.\";\r\n  p2.innerHTML = \r\n                    \"At <b>Food & Drinks Restaurant</b>, we are committed to using only the finest ingredients, sourcing locally whenever possible. Our diverse menu features a blend of traditional favorites and innovative creations, all crafted to satisfy every palate.\";\r\n  p3.innerHTML = \r\n                    \"<b>Our mission</b> is to create memorable experiences for our guests, and our dedicated team is here to ensure you feel at home. From our talented chefs to our friendly staff, we all share a love for hospitality and a commitment to your satisfaction.\";\r\n  p4.innerHTML = \r\n                    \"Join us on a gastronomic journey filled with delightful flavors, warm hospitality, and a sense of community. We invite you to explore our menu, make a reservation, or follow us on social media to stay updated on our latest offerings and events.\";\r\n  p5.innerHTML = \"We can't wait to serve you!\";\r\n\r\n  section.appendChild(p1);\r\n  section.appendChild(p2);\r\n  section.appendChild(p3);\r\n  section.appendChild(p4);\r\n  section.appendChild(p5);\r\n\r\n\r\n  \r\n  const authorDiv = document.createElement('div');\r\n  authorDiv.classList.add('author');\r\n  const p = document.createElement('p');\r\n  p.textContent = \"By: Kwame Adonoo Paintsil\";\r\n\r\n  const anchorSpan = document.createElement('span');\r\n  const a1 = document.createElement('a');\r\n  const a2 = document.createElement('a');\r\n\r\n  a1.href =\"https://github.com/kapaintsil\";\r\n  a2.href =\"https://x.com/KwameAdonoo\";\r\n  a1.target = \"blank\";\r\n  a2.target = \"blank\";\r\n\r\n  a1.innerHTML = `<i class=\"fa-brands fa-square-github\"></i>`;\r\n  a2.innerHTML = `<i class=\"fa-brands fa-square-x-twitter\"></i>`;\r\n\r\n  anchorSpan.appendChild(a1);\r\n  anchorSpan.appendChild(a2);\r\n\r\n  authorDiv.appendChild(p);\r\n  authorDiv.appendChild(anchorSpan);\r\n\r\n  section.appendChild(authorDiv);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/about-page.js?");

/***/ }),

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact_page)\n/* harmony export */ });\n\r\nfunction contact_page() {\r\n  const content = document.querySelector('.content');\r\n  content.textContent = \"\";\r\n\r\n  const section = document.createElement('section');\r\n  section.classList.add('contact-page-body');\r\n  content.appendChild(section);\r\n\r\n  const div1 = document.createElement('div')\r\n  const div2 = document.createElement('div')\r\n  \r\n  section.appendChild(div1);\r\n  section.appendChild(div2);\r\n\r\n  const h1 = document.createElement('h1');\r\n  h1.textContent = \"Contact Us:\";\r\n  div1.appendChild(h1);\r\n\r\n  const p1 = document.createElement('p');\r\n  const p2 = document.createElement('p');\r\n\r\n  p1.textContent = \"We’d love to hear from you! Whether you have a question, feedback, or want to make a reservation, feel free to reach out to us. Our team is here to assist you and ensure your experience with us is exceptional.\"\r\n  p2.innerHTML = \"<b>Contact us today — we look forward to connecting with you!</b>\"\r\n  \r\n  div1.appendChild(p1);\r\n  div1.appendChild(p2);\r\n\r\n  const form = document.createElement('form');\r\n  div2.appendChild(form);\r\n\r\n  const label1 = document.createElement('label');\r\n  const label2 = document.createElement('label');\r\n  const label3 = document.createElement('label');\r\n\r\n  label1.textContent = \"First Name:\";\r\n  label2.textContent = \"last Name:\";\r\n  label3.textContent = \"Email:\";\r\n\r\n  const input1 = document.createElement('input');\r\n  const input2 = document.createElement('input');\r\n  const input3 = document.createElement('input');\r\n  const textarea = document.createElement('textarea');\r\n  const button1 = document.createElement('button');\r\n  const button2 = document.createElement('button');\r\n\r\n  input3.type = \"email\";\r\n  button2.type = \"reset\";\r\n\r\n  button1.textContent = \"Submit\";\r\n  button2.textContent = \"Reset\";\r\n\r\n  form.appendChild(label1);\r\n  form.appendChild(input1);\r\n  form.appendChild(label2);\r\n  form.appendChild(input2);\r\n  form.appendChild(label3);\r\n  form.appendChild(input3);\r\n  form.appendChild(textarea);\r\n  form.appendChild(button1);\r\n  form.appendChild(button2);\r\n\r\n  button1.addEventListener('click', (e) => e.preventDefault());\r\n\r\n  \r\n  const authorDiv = document.createElement('div');\r\n  authorDiv.classList.add('contactAuthor');\r\n  const p = document.createElement('p');\r\n  p.textContent = \"By: Kwame Adonoo Paintsil\";\r\n\r\n  const anchorSpan = document.createElement('span');\r\n  const a1 = document.createElement('a');\r\n  const a2 = document.createElement('a');\r\n\r\n  a1.href =\"https://github.com/kapaintsil\";\r\n  a2.href =\"https://x.com/KwameAdonoo\";\r\n  a1.target = \"blank\";\r\n  a2.target = \"blank\";\r\n\r\n  a1.innerHTML = `<i class=\"fa-brands fa-square-github\"></i>`;\r\n  a2.innerHTML = `<i class=\"fa-brands fa-square-x-twitter\"></i>`;\r\n\r\n  anchorSpan.appendChild(a1);\r\n  anchorSpan.appendChild(a2);\r\n\r\n  authorDiv.appendChild(p);\r\n  authorDiv.appendChild(anchorSpan);\r\n\r\n  div2.appendChild(authorDiv);\r\n\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/contact-page.js?");

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home_page)\n/* harmony export */ });\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-page */ \"./src/menu-page.js\");\n\r\n\r\nfunction home_page() {\r\n  const content = document.querySelector('.content');\r\n  content.textContent = \"\";\r\n\r\n  const section = document.createElement('section');\r\n  section.classList.add('home-page-body');\r\n  const h1 = document.createElement('h1');\r\n  h1.textContent = \"food & drinks restaurant\";\r\n  const div1 = document.createElement('div');\r\n  const div2 = document.createElement('div');\r\n  const div3 = document.createElement('div');\r\n  const h3 = document.createElement('h3');\r\n  h3.textContent = \"At Food & Drink, we believe that food and drink are more than just sustenance – they’re an experience, a journey, and a celebration of life’s most vibrant flavors. Whether you're a foodie looking for your next gourmet adventure or simply in need of a comforting meal to share with loved ones, we’ve got something to satisfy every craving.\"\r\n  const para1 = document.createElement('p');\r\n  const para2 = document.createElement('p');\r\n  const para3 = document.createElement('p');\r\n  const menuButton = document.createElement('button');\r\n\r\n  para1.textContent = \"An Eclectic Culinary Experience\";\r\n  para2.textContent = \"A Captivating Array of Drinks\";\r\n  para3.textContent = \"Enchanting Live Music Performances\";\r\n  menuButton.textContent = \"menu >>\"\r\n\r\n  content.appendChild(section)\r\n  section.appendChild(h1);\r\n  section.appendChild(div1);\r\n  div1.appendChild(div2);\r\n  div1.appendChild(div3);\r\n  div2.appendChild(h3);\r\n\r\n  div3.appendChild(para1)\r\n  div3.appendChild(para2)\r\n  div3.appendChild(para3)\r\n  div3.appendChild(menuButton)\r\n\r\n  menuButton.addEventListener('click', _menu_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n  const authorDiv = document.createElement('div');\r\n  authorDiv.classList.add('author');\r\n  const p = document.createElement('p');\r\n  p.textContent = \"By: Kwame Adonoo Paintsil\";\r\n\r\n  const anchorSpan = document.createElement('span');\r\n  const a1 = document.createElement('a');\r\n  const a2 = document.createElement('a');\r\n\r\n  a1.href =\"https://github.com/kapaintsil\";\r\n  a2.href =\"https://x.com/KwameAdonoo\";\r\n  a1.target = \"blank\";\r\n  a2.target = \"blank\";\r\n\r\n  a1.innerHTML = `<i class=\"fa-brands fa-square-github\"></i>`;\r\n  a2.innerHTML = `<i class=\"fa-brands fa-square-x-twitter\"></i>`;\r\n\r\n  anchorSpan.appendChild(a1);\r\n  anchorSpan.appendChild(a2);\r\n\r\n  authorDiv.appendChild(p);\r\n  authorDiv.appendChild(anchorSpan);\r\n\r\n  section.appendChild(authorDiv);\r\n}\n\n//# sourceURL=webpack://restaurant-page-project/./src/home-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page.js */ \"./src/home-page.js\");\n/* harmony import */ var _about_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-page.js */ \"./src/about-page.js\");\n/* harmony import */ var _menu_page_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-page.js */ \"./src/menu-page.js\");\n/* harmony import */ var _contact_page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-page.js */ \"./src/contact-page.js\");\n// entry point module.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst about_link = document.querySelector('#about-link');\r\nconst home_link = document.querySelector('#home-link');\r\nconst menu_link = document.querySelector('#menu-link');\r\nconst contact_link = document.querySelector('#contact-link');\r\n\r\n(0,_home_page_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\nabout_link.addEventListener('click', _about_page_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\nmenu_link.addEventListener('click', _menu_page_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\ncontact_link.addEventListener('click', _contact_page_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\nhome_link.addEventListener('click', _home_page_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/index.js?");

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu_page)\n/* harmony export */ });\n\r\nfunction menu_page() {\r\n  const content = document.querySelector('.content');\r\n  content.textContent = \"\";\r\n\r\n  const section = document.createElement('section');\r\n  section.classList.add('menu-page-body');\r\n\r\n  const h3 = document.createElement('h3');\r\n  h3.textContent = \"Cuisine Collection\"\r\n\r\n  const div1 = document.createElement(\"div\");\r\n  const div2 = document.createElement('div');\r\n  const div3 = document.createElement('div');\r\n  const div4 = document.createElement('div');\r\n  const div5 = document.createElement('div');\r\n\r\n  \r\n\r\n\r\n  content.appendChild(section);\r\n  section.appendChild(h3);\r\n  section.appendChild(div1)\r\n  \r\n  div1.appendChild(div2);\r\n  div1.appendChild(div3);\r\n  div1.appendChild(div4);\r\n  div1.appendChild(div5);\r\n\r\n  const starterHeader = document.createElement('h3');\r\n  starterHeader.textContent = \"Starter\"\r\n  div2.appendChild(starterHeader);\r\n\r\n  const p1 = document.createElement('p');\r\n  const p2 = document.createElement('p');\r\n  const p3 = document.createElement('p');\r\n  const p4 = document.createElement('p');\r\n  const p5 = document.createElement('p');\r\n\r\n  p1.textContent = \"Soup of the Day\";\r\n  p2.textContent = \"Stuffed Mushrooms\";\r\n  p3.textContent = \"Mozzarella Sticks\";\r\n  p4.textContent = \"Shrimp Cocktail\";\r\n  p5.textContent = \"Hummus with Pita\";\r\n\r\n  div2.appendChild(p1);\r\n  div2.appendChild(p2);\r\n  div2.appendChild(p3);\r\n  div2.appendChild(p4);\r\n  div2.appendChild(p5);\r\n\r\n  const mainCourse = document.createElement('h3');\r\n  mainCourse.textContent = \"Main Course\"\r\n  div3.appendChild(mainCourse);\r\n\r\n  const p6 = document.createElement('p');\r\n  const p7 = document.createElement('p');\r\n  const p8 = document.createElement('p');\r\n  const p9 = document.createElement('p');\r\n  const p10 = document.createElement('p');\r\n  const p11 = document.createElement('p');\r\n\r\n  p6.textContent = \"Grilled Chicken Breast\";\r\n  p7.textContent = \"Vegetarian Stir-Fry \";\r\n  p8.textContent = \"Chicken Parmesan\";\r\n  p9.textContent = \"Stuffed Bell Peppers\";\r\n  p10.textContent = \"Margherita Pizza\";\r\n  p11.textContent = \"Seafood Paella\";\r\n\r\n  div3.appendChild(p6);\r\n  div3.appendChild(p7);\r\n  div3.appendChild(p8);\r\n  div3.appendChild(p9);\r\n  div3.appendChild(p10);\r\n  div3.appendChild(p11);\r\n\r\n  const dessert = document.createElement('h3');\r\n  dessert.textContent = \"Dessert\";\r\n  div4.appendChild(dessert);\r\n\r\n  const p12 = document.createElement('p');\r\n  const p13 = document.createElement('p');\r\n  const p14 = document.createElement('p');\r\n  const p15 = document.createElement('p');\r\n  const p16 = document.createElement('p');\r\n  const p17 = document.createElement('p');\r\n\r\n  p12.textContent = \"Chocolate Lava Cake\";\r\n  p13.textContent = \"Apple Pie\";\r\n  p14.textContent = \"Crème Brûlée\";\r\n  p15.textContent = \"Brownie Sundae\";\r\n  p16.textContent = \"Ice Cream Trio\";\r\n  p17.textContent = \"Sticky Toffee Pudding\";\r\n\r\n  div4.appendChild(p12);\r\n  div4.appendChild(p13);\r\n  div4.appendChild(p14);\r\n  div4.appendChild(p15);\r\n  div4.appendChild(p16);\r\n  div4.appendChild(p17);\r\n\r\n  const beverage = document.createElement('h3');\r\n  beverage.textContent = \"Beverage\";\r\n  div5.appendChild(beverage);\r\n\r\n  const p18 = document.createElement('p');\r\n  const p19 = document.createElement('p');\r\n  const p20 = document.createElement('p');\r\n  const p21 = document.createElement('p');\r\n  const p22 = document.createElement('p');\r\n  const p23 = document.createElement('p');\r\n\r\n  p18.textContent = \"Smoothies\";\r\n  p19.textContent = \"Iced Coffee\";\r\n  p20.textContent = \"Herbal Teas\";\r\n  p21.textContent = \"Mocktailse\";\r\n  p22.textContent = \"Soft Drinks\";\r\n  p23.textContent = \"Wine\";\r\n\r\n  div5.appendChild(p18);\r\n  div5.appendChild(p19);\r\n  div5.appendChild(p20);\r\n  div5.appendChild(p21);\r\n  div5.appendChild(p22);\r\n  div5.appendChild(p23);\r\n\r\n  \r\n  const authorDiv = document.createElement('div');\r\n  authorDiv.classList.add('author');\r\n  const p = document.createElement('p');\r\n  p.textContent = \"By: Kwame Adonoo Paintsil\";\r\n\r\n  const anchorSpan = document.createElement('span');\r\n  const a1 = document.createElement('a');\r\n  const a2 = document.createElement('a');\r\n\r\n  a1.href =\"https://github.com/kapaintsil\";\r\n  a2.href =\"https://x.com/KwameAdonoo\";\r\n  a1.target = \"blank\";\r\n  a2.target = \"blank\";\r\n\r\n  a1.innerHTML = `<i class=\"fa-brands fa-square-github\"></i>`;\r\n  a2.innerHTML = `<i class=\"fa-brands fa-square-x-twitter\"></i>`;\r\n\r\n  anchorSpan.appendChild(a1);\r\n  anchorSpan.appendChild(a2);\r\n\r\n  authorDiv.appendChild(p);\r\n  authorDiv.appendChild(anchorSpan);\r\n\r\n  section.appendChild(authorDiv);\r\n\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page-project/./src/menu-page.js?");

/***/ }),

/***/ "./src/fonts/momt___-webfont.woff":
/*!****************************************!*\
  !*** ./src/fonts/momt___-webfont.woff ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b9a847ef5468519e6bd9.woff\";\n\n//# sourceURL=webpack://restaurant-page-project/./src/fonts/momt___-webfont.woff?");

/***/ }),

/***/ "./src/fonts/momt___-webfont.woff2":
/*!*****************************************!*\
  !*** ./src/fonts/momt___-webfont.woff2 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ecb6c37d70c80d10bbd8.woff2\";\n\n//# sourceURL=webpack://restaurant-page-project/./src/fonts/momt___-webfont.woff2?");

/***/ }),

/***/ "./src/images/aboutpage-background.jpg":
/*!*********************************************!*\
  !*** ./src/images/aboutpage-background.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"59282063aebe9f2f63c6.jpg\";\n\n//# sourceURL=webpack://restaurant-page-project/./src/images/aboutpage-background.jpg?");

/***/ }),

/***/ "./src/images/homepage-background.jpg":
/*!********************************************!*\
  !*** ./src/images/homepage-background.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"52bf52b7bee5a08ca620.jpg\";\n\n//# sourceURL=webpack://restaurant-page-project/./src/images/homepage-background.jpg?");

/***/ }),

/***/ "./src/images/menupage-background.jpg":
/*!********************************************!*\
  !*** ./src/images/menupage-background.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9a7723e80fca0dfe686a.jpg\";\n\n//# sourceURL=webpack://restaurant-page-project/./src/images/menupage-background.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;