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
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/01-basic.jsx":
/*!*****************************!*\
  !*** ./blocks/01-basic.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ \"./blocks/common.jsx\");\n/**\n * 01 - Basic\n */\n\n\n\nconst Edit = props => {\n  return wp.element.createElement(\"div\", null, wp.element.createElement(\"p\", null, \"Edit...\"));\n};\n\nconst Save = props => {\n  return wp.element.createElement(\"div\", {\n    className: \"my-block\"\n  }, wp.element.createElement(\"p\", null, \"Save...\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'my/basic',\n  category: _common__WEBPACK_IMPORTED_MODULE_1__[\"category\"],\n  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__[\"__\"])('01 - Basic', _common__WEBPACK_IMPORTED_MODULE_1__[\"domain\"]),\n  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__[\"__\"])('An MVP example block', _common__WEBPACK_IMPORTED_MODULE_1__[\"domain\"]),\n  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__[\"__\"])('Example', _common__WEBPACK_IMPORTED_MODULE_1__[\"domain\"]), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__[\"__\"])('Custom', _common__WEBPACK_IMPORTED_MODULE_1__[\"domain\"])],\n  attributes: {},\n  edit: Edit,\n  save: Save\n});\n\n//# sourceURL=webpack:///./blocks/01-basic.jsx?");

/***/ }),

/***/ "./blocks/02-text-control.jsx":
/*!************************************!*\
  !*** ./blocks/02-text-control.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ \"./blocks/common.jsx\");\n/**\n * 02 - Text Control\n */\n\n\n\n\nconst Edit = props => {\n  const {\n    attributes,\n    setAttributes\n  } = props;\n\n  const handleChange = value => {\n    setAttributes({\n      text: value\n    });\n  };\n\n  return wp.element.createElement(\"div\", null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__[\"TextControl\"], {\n    type: \"text\",\n    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Text Control', _common__WEBPACK_IMPORTED_MODULE_2__[\"domain\"]),\n    value: attributes.text,\n    onChange: handleChange\n  }));\n};\n\nconst Save = props => {\n  const {\n    attributes\n  } = props;\n  return wp.element.createElement(\"div\", {\n    className: \"my-block\"\n  }, wp.element.createElement(\"p\", null, \"Text Control: \".concat(attributes.text)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'my/text-control',\n  category: _common__WEBPACK_IMPORTED_MODULE_2__[\"category\"],\n  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('02 - Text Control', _common__WEBPACK_IMPORTED_MODULE_2__[\"domain\"]),\n  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('A Text Control example block', _common__WEBPACK_IMPORTED_MODULE_2__[\"domain\"]),\n  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Example', _common__WEBPACK_IMPORTED_MODULE_2__[\"domain\"]), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Custom', _common__WEBPACK_IMPORTED_MODULE_2__[\"domain\"])],\n  attributes: {\n    text: {\n      type: 'string',\n      default: ''\n    }\n  },\n  edit: Edit,\n  save: Save\n});\n\n//# sourceURL=webpack:///./blocks/02-text-control.jsx?");

/***/ }),

/***/ "./blocks/04-preview-mode.jsx":
/*!************************************!*\
  !*** ./blocks/04-preview-mode.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ \"./blocks/common.jsx\");\n/**\n * 04 - Preview Mode\n */\n\n\n\n\nconst Edit = props => {\n  const {\n    attributes,\n    setAttributes\n  } = props;\n  const isEditing = attributes.mode === 'edit';\n\n  const toggleMode = ev => {\n    setAttributes({\n      mode: isEditing ? 'preview' : 'edit'\n    });\n  };\n\n  const handleChange = value => {\n    setAttributes({\n      text: value\n    });\n  };\n\n  const EditMode = wp.element.createElement(\"div\", null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__[\"TextControl\"], {\n    type: \"text\",\n    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Text Control', _common__WEBPACK_IMPORTED_MODULE_2__[\"domain\"]),\n    value: attributes.text,\n    onChange: handleChange\n  }));\n  const PreviewMode = wp.element.createElement(\"div\", {\n    className: \"my-block\"\n  }, wp.element.createElement(\"h5\", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Preview', _common__WEBPACK_IMPORTED_MODULE_2__[\"domain\"])), wp.element.createElement(\"p\", null, \"Text Control: \".concat(attributes.text)));\n  return [wp.element.createElement(_common__WEBPACK_IMPORTED_MODULE_2__[\"PreviewControls\"], {\n    isEditing: isEditing,\n    onClick: toggleMode\n  }), isEditing ? EditMode : PreviewMode];\n};\n\nconst Save = props => {\n  const {\n    attributes\n  } = props;\n  return wp.element.createElement(\"div\", {\n    className: \"my-block\"\n  }, wp.element.createElement(\"p\", null, \"Text Control: \".concat(attributes.text)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'my/preview-mode',\n  category: _common__WEBPACK_IMPORTED_MODULE_2__[\"category\"],\n  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('04 - Preview Mode', _common__WEBPACK_IMPORTED_MODULE_2__[\"domain\"]),\n  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('An example block that can toggle between \"Edit\" and \"Preview\" mode', _common__WEBPACK_IMPORTED_MODULE_2__[\"domain\"]),\n  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Example', _common__WEBPACK_IMPORTED_MODULE_2__[\"domain\"]), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Custom', _common__WEBPACK_IMPORTED_MODULE_2__[\"domain\"])],\n  attributes: {\n    text: {\n      type: 'string',\n      default: ''\n    },\n    mode: {\n      type: 'string',\n      default: 'edit'\n    }\n  },\n  edit: Edit,\n  save: Save\n});\n\n//# sourceURL=webpack:///./blocks/04-preview-mode.jsx?");

/***/ }),

/***/ "./blocks/common.jsx":
/*!***************************!*\
  !*** ./blocks/common.jsx ***!
  \***************************/
/*! exports provided: category, domain, PreviewControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"category\", function() { return category; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"domain\", function() { return domain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PreviewControls\", function() { return PreviewControls; });\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // Default custom category\n\nconst category = 'my-blocks'; // Text Domain for `@wordpress/i18n`\n\nconst domain = 'my-domain'; // Custom `<BlockControls>` to toggle between \"Edit\" and \"Preview\"\n\nconst PreviewControls = props => {\n  const {\n    onClick\n  } = props;\n  const PreviewButton = wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Preview', domain),\n    icon: \"visibility\",\n    onClick: onClick\n  });\n  const EditButton = wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('Edit', domain),\n    icon: \"edit\",\n    onClick: onClick\n  });\n  return wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__[\"BlockControls\"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], null, props.isEditing ? PreviewButton : EditButton));\n};\n\n\n\n//# sourceURL=webpack:///./blocks/common.jsx?");

/***/ }),

/***/ "./blocks/index.js":
/*!*************************!*\
  !*** ./blocks/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _01_basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./01-basic */ \"./blocks/01-basic.jsx\");\n/* harmony import */ var _02_text_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./02-text-control */ \"./blocks/02-text-control.jsx\");\n/* harmony import */ var _04_preview_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./04-preview-mode */ \"./blocks/04-preview-mode.jsx\");\n // Import blocks\n\n\n\n\nconst blocks = [_01_basic__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _02_text_control__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _04_preview_mode__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\nblocks.forEach(block => Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__[\"registerBlockType\"])(block.name, block));\n\n//# sourceURL=webpack:///./blocks/index.js?");

/***/ }),

/***/ "@wordpress/block-editor":
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp.blockEditor;\n\n//# sourceURL=webpack:///external_%22wp.blockEditor%22?");

/***/ }),

/***/ "@wordpress/blocks":
/*!****************************!*\
  !*** external "wp.blocks" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp.blocks;\n\n//# sourceURL=webpack:///external_%22wp.blocks%22?");

/***/ }),

/***/ "@wordpress/components":
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp.components;\n\n//# sourceURL=webpack:///external_%22wp.components%22?");

/***/ }),

/***/ "@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp.i18n;\n\n//# sourceURL=webpack:///external_%22wp.i18n%22?");

/***/ })

/******/ });