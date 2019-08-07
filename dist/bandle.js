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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
// import 'expose-loader?$!expose-loader?window.jQuery!expose-loader?jQuery!jquery'

window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;

window.Popper = popper_js__WEBPACK_IMPORTED_MODULE_1__["default"];

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! ../scss/main.scss */ "./assets/scss/main.scss");

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'components/feed'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/***/ }),

/***/ "./assets/scss/main.scss":
/*!*******************************!*\
  !*** ./assets/scss/main.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./assets/scss/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot":
/*!******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a547e21eceadf53602caf057be9ad9fd.eot";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg":
/*!******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fdc155d57b7351ef85b3028ea3cfc048.svg";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf":
/*!******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5ee32f5c8598e1a63ddf1aad4ffe54f4.ttf";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff":
/*!*******************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,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"

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2":
/*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2 ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,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"

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Bootstrap v4.0.0-beta (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.')
}

(function ($) {
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')
  }
})(jQuery);

(function () {
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Util = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var transition = false;

  var MAX_UID = 1000000;

  var TransitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'

    // shoutout AngusCroll (https://goo.gl/pxwQGp)
  };function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function isElement(obj) {
    return (obj[0] || obj).nodeType;
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }
        return undefined;
      }
    };
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    var el = document.createElement('bootstrap');

    for (var name in TransitionEndEvent) {
      if (el.style[name] !== undefined) {
        return {
          end: TransitionEndEvent[name]
        };
      }
    }

    return false;
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;

    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });

    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);

    return this;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();

    $.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  var Util = {

    TRANSITION_END: 'bsTransitionEnd',

    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));
      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');
      if (!selector || selector === '#') {
        selector = element.getAttribute('href') || '';
      }

      try {
        var $selector = $(selector);
        return $selector.length > 0 ? selector : null;
      } catch (error) {
        return null;
      }
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(transition.end);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(transition);
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (configTypes.hasOwnProperty(property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
          }
        }
      }
    }
  };

  setTransitionEndSupport();

  return Util;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Alert = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;

  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };

  var Event = {
    CLOSE: 'close' + EVENT_KEY,
    CLOSED: 'closed' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Alert = function () {
    function Alert(element) {
      _classCallCheck(this, Alert);

      this._element = element;
    }

    // getters

    // public

    Alert.prototype.close = function close(element) {
      element = element || this._element;

      var rootElement = this._getRootElement(element);
      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    Alert.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    };

    // private

    Alert.prototype._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = $(selector)[0];
      }

      if (!parent) {
        parent = $(element).closest('.' + ClassName.ALERT)[0];
      }

      return parent;
    };

    Alert.prototype._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);

      $(element).trigger(closeEvent);
      return closeEvent;
    };

    Alert.prototype._removeElement = function _removeElement(element) {
      var _this2 = this;

      $(element).removeClass(ClassName.SHOW);

      if (!Util.supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);
        return;
      }

      $(element).one(Util.TRANSITION_END, function (event) {
        return _this2._destroyElement(element, event);
      }).emulateTransitionEnd(TRANSITION_DURATION);
    };

    Alert.prototype._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    };

    // static

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  return Alert;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Button = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'button';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.button';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var ClassName = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };

  var Selector = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };

  var Event = {
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    FOCUS_BLUR_DATA_API: 'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Button = function () {
    function Button(element) {
      _classCallCheck(this, Button);

      this._element = element;
    }

    // getters

    // public

    Button.prototype.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];

      if (rootElement) {
        var input = $(this._element).find(Selector.INPUT)[0];

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = $(rootElement).find(Selector.ACTIVE)[0];

              if (activeElement) {
                $(activeElement).removeClass(ClassName.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
              return;
            }
            input.checked = !$(this._element).hasClass(ClassName.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));
      }

      if (triggerChangeEvent) {
        $(this._element).toggleClass(ClassName.ACTIVE);
      }
    };

    Button.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    };

    // static

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Button;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();

    var button = event.target;

    if (!$(button).hasClass(ClassName.BUTTON)) {
      button = $(button).closest(Selector.BUTTON);
    }

    Button._jQueryInterface.call($(button), 'toggle');
  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector.BUTTON)[0];
    $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Button._jQueryInterface;
  $.fn[NAME].Constructor = Button;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Button._jQueryInterface;
  };

  return Button;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Carousel = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'carousel';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.carousel';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key
  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key
  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true
  };

  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean'
  };

  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };

  var Event = {
    SLIDE: 'slide' + EVENT_KEY,
    SLID: 'slid' + EVENT_KEY,
    KEYDOWN: 'keydown' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY,
    TOUCHEND: 'touchend' + EVENT_KEY,
    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item'
  };

  var Selector = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Carousel = function () {
    function Carousel(element, config) {
      _classCallCheck(this, Carousel);

      this._items = null;
      this._interval = null;
      this._activeElement = null;

      this._isPaused = false;
      this._isSliding = false;

      this.touchTimeout = null;

      this._config = this._getConfig(config);
      this._element = $(element)[0];
      this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0];

      this._addEventListeners();
    }

    // getters

    // public

    Carousel.prototype.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    Carousel.prototype.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      if (!document.hidden) {
        this.next();
      }
    };

    Carousel.prototype.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    Carousel.prototype.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if ($(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    Carousel.prototype.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    Carousel.prototype.to = function to(index) {
      var _this3 = this;

      this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event.SLID, function () {
          return _this3.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    Carousel.prototype.dispose = function dispose() {
      $(this._element).off(EVENT_KEY);
      $.removeData(this._element, DATA_KEY);

      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    };

    // private

    Carousel.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    Carousel.prototype._addEventListeners = function _addEventListeners() {
      var _this4 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN, function (event) {
          return _this4._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(Event.MOUSEENTER, function (event) {
          return _this4.pause(event);
        }).on(Event.MOUSELEAVE, function (event) {
          return _this4.cycle(event);
        });
        if ('ontouchstart' in document.documentElement) {
          // if it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          $(this._element).on(Event.TOUCHEND, function () {
            _this4.pause();
            if (_this4.touchTimeout) {
              clearTimeout(_this4.touchTimeout);
            }
            _this4.touchTimeout = setTimeout(function (event) {
              return _this4.cycle(event);
            }, TOUCHEVENT_COMPAT_WAIT + _this4._config.interval);
          });
        }
      }
    };

    Carousel.prototype._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;
        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
        default:
          return;
      }
    };

    Carousel.prototype._getItemIndex = function _getItemIndex(element) {
      this._items = $.makeArray($(element).parent().find(Selector.ITEM));
      return this._items.indexOf(element);
    };

    Carousel.prototype._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;
      var activeIndex = this._getItemIndex(activeElement);
      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;

      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    Carousel.prototype._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);
      var fromIndex = this._getItemIndex($(this._element).find(Selector.ACTIVE_ITEM)[0]);
      var slideEvent = $.Event(Event.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });

      $(this._element).trigger(slideEvent);

      return slideEvent;
    };

    Carousel.prototype._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        $(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName.ACTIVE);
        }
      }
    };

    Carousel.prototype._slide = function _slide(direction, element) {
      var _this5 = this;

      var activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];
      var activeElementIndex = this._getItemIndex(activeElement);
      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);
      var nextElementIndex = this._getItemIndex(nextElement);
      var isCycling = Boolean(this._interval);

      var directionalClassName = void 0;
      var orderClassName = void 0;
      var eventDirectionName = void 0;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName.LEFT;
        orderClassName = ClassName.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName.RIGHT;
        orderClassName = ClassName.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.SLIDE)) {

        $(nextElement).addClass(orderClassName);

        Util.reflow(nextElement);

        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);

        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + ' ' + orderClassName).addClass(ClassName.ACTIVE);

          $(activeElement).removeClass(ClassName.ACTIVE + ' ' + orderClassName + ' ' + directionalClassName);

          _this5._isSliding = false;

          setTimeout(function () {
            return $(_this5._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        $(activeElement).removeClass(ClassName.ACTIVE);
        $(nextElement).addClass(ClassName.ACTIVE);

        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    };

    // static

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = $.extend({}, Default, $(this).data());

        if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
          $.extend(_config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (data[action] === undefined) {
            throw new Error('No method named "' + action + '"');
          }
          data[action]();
        } else if (_config.interval) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
        return;
      }

      var config = $.extend({}, $(target).data(), $(this).data());
      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);

  $(window).on(Event.LOAD_DATA_API, function () {
    $(Selector.DATA_RIDE).each(function () {
      var $carousel = $(this);
      Carousel._jQueryInterface.call($carousel, $carousel.data());
    });
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Carousel._jQueryInterface;
  $.fn[NAME].Constructor = Carousel;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Carousel._jQueryInterface;
  };

  return Carousel;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Collapse = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'collapse';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;

  var Default = {
    toggle: true,
    parent: ''
  };

  var DefaultType = {
    toggle: 'boolean',
    parent: 'string'
  };

  var Event = {
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };

  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };

  var Selector = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Collapse = function () {
    function Collapse(element, config) {
      _classCallCheck(this, Collapse);

      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));
      var tabToggles = $(Selector.DATA_TOGGLE);
      for (var i = 0; i < tabToggles.length; i++) {
        var elem = tabToggles[i];
        var selector = Util.getSelectorFromElement(elem);
        if (selector !== null && $(selector).filter(element).length > 0) {
          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    }

    // getters

    // public

    Collapse.prototype.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    Collapse.prototype.show = function show() {
      var _this6 = this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var actives = void 0;
      var activesData = void 0;

      if (this._parent) {
        actives = $.makeArray($(this._parent).children().children(Selector.ACTIVES));
        if (!actives.length) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).data(DATA_KEY);
        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event.SHOW);
      $(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives), 'hide');
        if (!activesData) {
          $(actives).data(DATA_KEY, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);

      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this6._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);

        _this6._element.style[dimension] = '';

        _this6.setTransitioning(false);

        $(_this6._element).trigger(Event.SHOWN);
      };

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = 'scroll' + capitalizedDimension;

      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);

      this._element.style[dimension] = this._element[scrollSize] + 'px';
    };

    Collapse.prototype.hide = function hide() {
      var _this7 = this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event.HIDE);
      $(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + 'px';

      Util.reflow(this._element);

      $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

      if (this._triggerArray.length) {
        for (var i = 0; i < this._triggerArray.length; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);
          if (selector !== null) {
            var $elem = $(selector);
            if (!$elem.hasClass(ClassName.SHOW)) {
              $(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this7.setTransitioning(false);
        $(_this7._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
      };

      this._element.style[dimension] = '';

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
    };

    Collapse.prototype.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    Collapse.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);

      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    };

    // private

    Collapse.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      config.toggle = Boolean(config.toggle); // coerce string values
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    Collapse.prototype._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    Collapse.prototype._getParent = function _getParent() {
      var _this8 = this;

      var parent = $(this._config.parent)[0];
      var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';

      $(parent).find(selector).each(function (i, element) {
        _this8._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });

      return parent;
    };

    Collapse.prototype._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      if (element) {
        var isOpen = $(element).hasClass(ClassName.SHOW);

        if (triggerArray.length) {
          $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
        }
      }
    };

    // static

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? $(selector)[0] : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);
        var _config = $.extend({}, Default, $this.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Collapse;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    if (!/input|textarea/i.test(event.target.tagName)) {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    $(selector).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY);
      var config = data ? 'toggle' : $trigger.data();
      Collapse._jQueryInterface.call($target, config);
    });
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Collapse._jQueryInterface;
  $.fn[NAME].Constructor = Collapse;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Collapse._jQueryInterface;
  };

  return Collapse;
}(jQuery);

/* global Popper */

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Dropdown = function ($) {

  /**
   * Check for Popper dependency
   * Popper - https://popper.js.org
   */
  if (typeof Popper === 'undefined') {
    throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)');
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'dropdown';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.dropdown';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key
  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key
  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key
  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key
  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key
  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)
  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + '|' + ARROW_DOWN_KEYCODE + '|' + ESCAPE_KEYCODE);

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    KEYDOWN_DATA_API: 'keydown' + EVENT_KEY + DATA_API_KEY,
    KEYUP_DATA_API: 'keyup' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left'
  };

  var Selector = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
  };

  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end'
  };

  var Default = {
    placement: AttachmentMap.BOTTOM,
    offset: 0,
    flip: true
  };

  var DefaultType = {
    placement: 'string',
    offset: '(number|string)',
    flip: 'boolean'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Dropdown = function () {
    function Dropdown(element, config) {
      _classCallCheck(this, Dropdown);

      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    }

    // getters

    // public

    Dropdown.prototype.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this._element);
      var isActive = $(this._menu).hasClass(ClassName.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event.SHOW, relatedTarget);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      var element = this._element;
      // for dropup with alignment we use the parent as popper container
      if ($(parent).hasClass(ClassName.DROPUP)) {
        if ($(this._menu).hasClass(ClassName.MENULEFT) || $(this._menu).hasClass(ClassName.MENURIGHT)) {
          element = parent;
        }
      }
      this._popper = new Popper(element, this._menu, this._getPopperConfig());

      // if this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {
        $('body').children().on('mouseover', null, $.noop);
      }

      this._element.focus();
      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName.SHOW);
      $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.SHOWN, relatedTarget));
    };

    Dropdown.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._element).off(EVENT_KEY);
      this._element = null;
      this._menu = null;
      if (this._popper !== null) {
        this._popper.destroy();
      }
      this._popper = null;
    };

    Dropdown.prototype.update = function update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    };

    // private

    Dropdown.prototype._addEventListeners = function _addEventListeners() {
      var _this9 = this;

      $(this._element).on(Event.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();
        _this9.toggle();
      });
    };

    Dropdown.prototype._getConfig = function _getConfig(config) {
      var elementData = $(this._element).data();
      if (elementData.placement !== undefined) {
        elementData.placement = AttachmentMap[elementData.placement.toUpperCase()];
      }

      config = $.extend({}, this.constructor.Default, $(this._element).data(), config);

      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);

      return config;
    };

    Dropdown.prototype._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);
        this._menu = $(parent).find(Selector.MENU)[0];
      }
      return this._menu;
    };

    Dropdown.prototype._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element).parent();
      var placement = this._config.placement;

      // Handle dropup
      if ($parentDropdown.hasClass(ClassName.DROPUP) || this._config.placement === AttachmentMap.TOP) {
        placement = AttachmentMap.TOP;
        if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }
      return placement;
    };

    Dropdown.prototype._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    Dropdown.prototype._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: {
            offset: this._config.offset
          },
          flip: {
            enabled: this._config.flip
          }
        }

        // Disable Popper.js for Dropdown in Navbar
      };if (this._inNavbar) {
        popperConfig.modifiers.applyStyle = {
          enabled: !this._inNavbar
        };
      }
      return popperConfig;
    };

    // static

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = $.makeArray($(Selector.DATA_TOGGLE));
      for (var i = 0; i < toggles.length; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);
        var context = $(toggles[i]).data(DATA_KEY);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;
        if (!$(parent).hasClass(ClassName.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);
        if (hideEvent.isDefaultPrevented()) {
          continue;
        }

        // if this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ('ontouchstart' in document.documentElement) {
          $('body').children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        $(dropdownMenu).removeClass(ClassName.SHOW);
        $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent = void 0;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = $(selector)[0];
      }

      return parent || element.parentNode;
    };

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      if (!REGEXP_KEYDOWN.test(event.which) || /button/i.test(event.target.tagName) && event.which === SPACE_KEYCODE || /input|textarea/i.test(event.target.tagName)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);
      var isActive = $(parent).hasClass(ClassName.SHOW);

      if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {

        if (event.which === ESCAPE_KEYCODE) {
          var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = $(parent).find(Selector.VISIBLE_ITEMS).get();

      if (!items.length) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }, {
      key: 'DefaultType',
      get: function get() {
        return DefaultType;
      }
    }]);

    return Dropdown;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + ' ' + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();
    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
    e.stopPropagation();
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Dropdown._jQueryInterface;
  $.fn[NAME].Constructor = Dropdown;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Modal = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'modal';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;
  var BACKDROP_TRANSITION_DURATION = 150;
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };

  var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    RESIZE: 'resize' + EVENT_KEY,
    CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
    KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
    MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,
    MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    NAVBAR_TOGGLER: '.navbar-toggler'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Modal = function () {
    function Modal(element, config) {
      _classCallCheck(this, Modal);

      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = $(element).find(Selector.DIALOG)[0];
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._originalBodyPadding = 0;
      this._scrollbarWidth = 0;
    }

    // getters

    // public

    Modal.prototype.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    Modal.prototype.show = function show(relatedTarget) {
      var _this10 = this;

      if (this._isTransitioning) {
        return;
      }

      if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      });

      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();
      this._setScrollbar();

      $(document.body).addClass(ClassName.OPEN);

      this._setEscapeEvent();
      this._setResizeEvent();

      $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        return _this10.hide(event);
      });

      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        $(_this10._element).one(Event.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this10._element)) {
            _this10._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this10._showElement(relatedTarget);
      });
    };

    Modal.prototype.hide = function hide(event) {
      var _this11 = this;

      if (event) {
        event.preventDefault();
      }

      if (this._isTransitioning || !this._isShown) {
        return;
      }

      var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      var hideEvent = $.Event(Event.HIDE);

      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;

      this._setEscapeEvent();
      this._setResizeEvent();

      $(document).off(Event.FOCUSIN);

      $(this._element).removeClass(ClassName.SHOW);

      $(this._element).off(Event.CLICK_DISMISS);
      $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

      if (transition) {

        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this11._hideModal(event);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        this._hideModal();
      }
    };

    Modal.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);

      $(window, document, this._element, this._backdrop).off(EVENT_KEY);

      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._scrollbarWidth = null;
    };

    Modal.prototype.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    };

    // private

    Modal.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    Modal.prototype._showElement = function _showElement(relatedTarget) {
      var _this12 = this;

      var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // don't move modals dom position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.scrollTop = 0;

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this12._config.focus) {
          _this12._element.focus();
        }
        _this12._isTransitioning = false;
        $(_this12._element).trigger(shownEvent);
      };

      if (transition) {
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        transitionComplete();
      }
    };

    Modal.prototype._enforceFocus = function _enforceFocus() {
      var _this13 = this;

      $(document).off(Event.FOCUSIN) // guard against infinite focus loop
      .on(Event.FOCUSIN, function (event) {
        if (document !== event.target && _this13._element !== event.target && !$(_this13._element).has(event.target).length) {
          _this13._element.focus();
        }
      });
    };

    Modal.prototype._setEscapeEvent = function _setEscapeEvent() {
      var _this14 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE) {
            event.preventDefault();
            _this14.hide();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event.KEYDOWN_DISMISS);
      }
    };

    Modal.prototype._setResizeEvent = function _setResizeEvent() {
      var _this15 = this;

      if (this._isShown) {
        $(window).on(Event.RESIZE, function (event) {
          return _this15.handleUpdate(event);
        });
      } else {
        $(window).off(Event.RESIZE);
      }
    };

    Modal.prototype._hideModal = function _hideModal() {
      var _this16 = this;

      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', true);
      this._isTransitioning = false;
      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName.OPEN);
        _this16._resetAdjustments();
        _this16._resetScrollbar();
        $(_this16._element).trigger(Event.HIDDEN);
      });
    };

    Modal.prototype._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    Modal.prototype._showBackdrop = function _showBackdrop(callback) {
      var _this17 = this;

      var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

      if (this._isShown && this._config.backdrop) {
        var doAnimate = Util.supportsTransitionEnd() && animate;

        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        if (animate) {
          $(this._backdrop).addClass(animate);
        }

        $(this._backdrop).appendTo(document.body);

        $(this._element).on(Event.CLICK_DISMISS, function (event) {
          if (_this17._ignoreBackdropClick) {
            _this17._ignoreBackdropClick = false;
            return;
          }
          if (event.target !== event.currentTarget) {
            return;
          }
          if (_this17._config.backdrop === 'static') {
            _this17._element.focus();
          } else {
            _this17.hide();
          }
        });

        if (doAnimate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return;
        }

        if (!doAnimate) {
          callback();
          return;
        }

        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName.SHOW);

        var callbackRemove = function callbackRemove() {
          _this17._removeBackdrop();
          if (callback) {
            callback();
          }
        };

        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    };

    // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------

    Modal.prototype._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + 'px';
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + 'px';
      }
    };

    Modal.prototype._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    Modal.prototype._checkScrollbar = function _checkScrollbar() {
      this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    Modal.prototype._setScrollbar = function _setScrollbar() {
      var _this18 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set

        // Adjust fixed content padding
        $(Selector.FIXED_CONTENT).each(function (index, element) {
          var actualPadding = $(element)[0].style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this18._scrollbarWidth + 'px');
        });

        // Adjust navbar-toggler margin
        $(Selector.NAVBAR_TOGGLER).each(function (index, element) {
          var actualMargin = $(element)[0].style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this18._scrollbarWidth + 'px');
        });

        // Adjust body padding
        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $('body').css('padding-right');
        $('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + 'px');
      }
    };

    Modal.prototype._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      $(Selector.FIXED_CONTENT).each(function (index, element) {
        var padding = $(element).data('padding-right');
        if (typeof padding !== 'undefined') {
          $(element).css('padding-right', padding).removeData('padding-right');
        }
      });

      // Restore navbar-toggler margin
      $(Selector.NAVBAR_TOGGLER).each(function (index, element) {
        var margin = $(element).data('margin-right');
        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      });

      // Restore body padding
      var padding = $('body').data('padding-right');
      if (typeof padding !== 'undefined') {
        $('body').css('padding-right', padding).removeData('padding-right');
      }
    };

    Modal.prototype._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    };

    // static

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = $.extend({}, Modal.Default, $(this).data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Modal;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this19 = this;

    var target = void 0;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = $(selector)[0];
    }

    var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($(_this19).is(':visible')) {
          _this19.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Modal._jQueryInterface;
  $.fn[NAME].Constructor = Modal;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var ScrollSpy = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'scrollspy';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.scrollspy';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var Default = {
    offset: 10,
    method: 'auto',
    target: ''
  };

  var DefaultType = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };

  var Event = {
    ACTIVATE: 'activate' + EVENT_KEY,
    SCROLL: 'scroll' + EVENT_KEY,
    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };

  var Selector = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };

  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var ScrollSpy = function () {
    function ScrollSpy(element, config) {
      var _this20 = this;

      _classCallCheck(this, ScrollSpy);

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + ' ' + Selector.NAV_LINKS + ',' + (this._config.target + ' ' + Selector.LIST_ITEMS + ',') + (this._config.target + ' ' + Selector.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;

      $(this._scrollElement).on(Event.SCROLL, function (event) {
        return _this20._process(event);
      });

      this.refresh();
      this._process();
    }

    // getters

    // public

    ScrollSpy.prototype.refresh = function refresh() {
      var _this21 = this;

      var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;

      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;

      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;

      this._offsets = [];
      this._targets = [];

      this._scrollHeight = this._getScrollHeight();

      var targets = $.makeArray($(this._selector));

      targets.map(function (element) {
        var target = void 0;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = $(targetSelector)[0];
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();
          if (targetBCR.width || targetBCR.height) {
            // todo (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }
        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this21._offsets.push(item[0]);
        _this21._targets.push(item[1]);
      });
    };

    ScrollSpy.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._scrollElement).off(EVENT_KEY);

      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    };

    // private

    ScrollSpy.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');
        if (!id) {
          id = Util.getUID(NAME);
          $(config.target).attr('id', id);
        }
        config.target = '#' + id;
      }

      Util.typeCheckConfig(NAME, config, DefaultType);

      return config;
    };

    ScrollSpy.prototype._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    ScrollSpy.prototype._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    ScrollSpy.prototype._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    ScrollSpy.prototype._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;
      var scrollHeight = this._getScrollHeight();
      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }
        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;
        this._clear();
        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (this._offsets[i + 1] === undefined || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    ScrollSpy.prototype._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',');
      queries = queries.map(function (selector) {
        return selector + '[data-target="' + target + '"],' + (selector + '[href="' + target + '"]');
      });

      var $link = $(queries.join(','));

      if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
        $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        $link.addClass(ClassName.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName.ACTIVE);
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ', ' + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE);
      }

      $(this._scrollElement).trigger(Event.ACTIVATE, {
        relatedTarget: target
      });
    };

    ScrollSpy.prototype._clear = function _clear() {
      $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
    };

    // static

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return ScrollSpy;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(window).on(Event.LOAD_DATA_API, function () {
    var scrollSpys = $.makeArray($(Selector.DATA_SPY));

    for (var i = scrollSpys.length; i--;) {
      var $spy = $(scrollSpys[i]);
      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = ScrollSpy._jQueryInterface;
  $.fn[NAME].Constructor = ScrollSpy;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return ScrollSpy._jQueryInterface;
  };

  return ScrollSpy;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tab = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tab';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.tab';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Tab = function () {
    function Tab(element) {
      _classCallCheck(this, Tab);

      this._element = element;
    }

    // getters

    // public

    Tab.prototype.show = function show() {
      var _this22 = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var target = void 0;
      var previous = void 0;
      var listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        previous = $.makeArray($(listElement).find(Selector.ACTIVE));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event.HIDE, {
        relatedTarget: this._element
      });

      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = $(selector)[0];
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event.HIDDEN, {
          relatedTarget: _this22._element
        });

        var shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: previous
        });

        $(previous).trigger(hiddenEvent);
        $(_this22._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    Tab.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    };

    // private

    Tab.prototype._activate = function _activate(element, container, callback) {
      var _this23 = this;

      var active = $(container).find(Selector.ACTIVE)[0];
      var isTransitioning = callback && Util.supportsTransitionEnd() && active && $(active).hasClass(ClassName.FADE);

      var complete = function complete() {
        return _this23._transitionComplete(element, active, isTransitioning, callback);
      };

      if (active && isTransitioning) {
        $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      if (active) {
        $(active).removeClass(ClassName.SHOW);
      }
    };

    Tab.prototype._transitionComplete = function _transitionComplete(element, active, isTransitioning, callback) {
      if (active) {
        $(active).removeClass(ClassName.ACTIVE);

        var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName.ACTIVE);
        }

        active.setAttribute('aria-expanded', false);
      }

      $(element).addClass(ClassName.ACTIVE);
      element.setAttribute('aria-expanded', true);

      if (isTransitioning) {
        Util.reflow(element);
        $(element).addClass(ClassName.SHOW);
      } else {
        $(element).removeClass(ClassName.FADE);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {

        var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
        if (dropdownElement) {
          $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    };

    // static

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Tab;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();
    Tab._jQueryInterface.call($(this), 'show');
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Tab._jQueryInterface;
  $.fn[NAME].Constructor = Tab;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tab._jQueryInterface;
  };

  return Tab;
}(jQuery);

/* global Popper */

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tooltip = function ($) {

  /**
   * Check for Popper dependency
   * Popper - https://popper.js.org
   */
  if (typeof Popper === 'undefined') {
    throw new Error('Bootstrap tooltips require Popper.js (https://popper.js.org)');
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tooltip';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.tooltip';
  var EVENT_KEY = '.' + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp('(^|\\s)' + CLASS_PREFIX + '\\S+', 'g');

  var DefaultType = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)'
  };

  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };

  var Default = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip'
  };

  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    INSERTED: 'inserted' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    FOCUSOUT: 'focusout' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY
  };

  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };

  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Tooltip = function () {
    function Tooltip(element, config) {
      _classCallCheck(this, Tooltip);

      // private
      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null;

      // protected
      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    }

    // getters

    // public

    Tooltip.prototype.enable = function enable() {
      this._isEnabled = true;
    };

    Tooltip.prototype.disable = function disable() {
      this._isEnabled = false;
    };

    Tooltip.prototype.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    Tooltip.prototype.toggle = function toggle(event) {
      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {

        if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
          this._leave(null, this);
          return;
        }

        this._enter(null, this);
      }
    };

    Tooltip.prototype.dispose = function dispose() {
      clearTimeout(this._timeout);

      $.removeData(this.element, this.constructor.DATA_KEY);

      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;
      if (this._popper !== null) {
        this._popper.destroy();
      }
      this._popper = null;

      this.element = null;
      this.config = null;
      this.tip = null;
    };

    Tooltip.prototype.show = function show() {
      var _this24 = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);

        var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);

        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);

        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);
        this.addAttachmentClass(attachment);

        var container = this.config.container === false ? document.body : $(this.config.container);

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);

        this._popper = new Popper(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector.ARROW
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this24._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            _this24._handlePopperPlacementChange(data);
          }
        });

        $(tip).addClass(ClassName.SHOW);

        // if this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ('ontouchstart' in document.documentElement) {
          $('body').children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this24.config.animation) {
            _this24._fixTransition();
          }
          var prevHoverState = _this24._hoverState;
          _this24._hoverState = null;

          $(_this24.element).trigger(_this24.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this24._leave(null, _this24);
          }
        };

        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
        } else {
          complete();
        }
      }
    };

    Tooltip.prototype.hide = function hide(callback) {
      var _this25 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);
      var complete = function complete() {
        if (_this25._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this25._cleanTipClass();
        _this25.element.removeAttribute('aria-describedby');
        $(_this25.element).trigger(_this25.constructor.Event.HIDDEN);
        if (_this25._popper !== null) {
          _this25._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName.SHOW);

      // if this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support
      if ('ontouchstart' in document.documentElement) {
        $('body').children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {

        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    Tooltip.prototype.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    };

    // protected

    Tooltip.prototype.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    Tooltip.prototype.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + '-' + attachment);
    };

    Tooltip.prototype.getTipElement = function getTipElement() {
      return this.tip = this.tip || $(this.config.template)[0];
    };

    Tooltip.prototype.setContent = function setContent() {
      var $tip = $(this.getTipElement());
      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
      $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
    };

    Tooltip.prototype.setElementContent = function setElementContent($element, content) {
      var html = this.config.html;
      if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object' && (content.nodeType || content.jquery)) {
        // content is a DOM node or a jQuery
        if (html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }
      } else {
        $element[html ? 'html' : 'text'](content);
      }
    };

    Tooltip.prototype.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    };

    // private

    Tooltip.prototype._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    Tooltip.prototype._setListeners = function _setListeners() {
      var _this26 = this;

      var triggers = this.config.trigger.split(' ');

      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this26.element).on(_this26.constructor.Event.CLICK, _this26.config.selector, function (event) {
            return _this26.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this26.constructor.Event.MOUSEENTER : _this26.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this26.constructor.Event.MOUSELEAVE : _this26.constructor.Event.FOCUSOUT;

          $(_this26.element).on(eventIn, _this26.config.selector, function (event) {
            return _this26._enter(event);
          }).on(eventOut, _this26.config.selector, function (event) {
            return _this26._leave(event);
          });
        }

        $(_this26.element).closest('.modal').on('hide.bs.modal', function () {
          return _this26.hide();
        });
      });

      if (this.config.selector) {
        this.config = $.extend({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    Tooltip.prototype._fixTitle = function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));
      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    Tooltip.prototype._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;

      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);

      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    Tooltip.prototype._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;

      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);

      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    Tooltip.prototype._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    Tooltip.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, this.constructor.Default, $(this.element).data(), config);

      if (config.delay && typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (config.title && typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (config.content && typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);

      return config;
    };

    Tooltip.prototype._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    Tooltip.prototype._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    Tooltip.prototype._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
      this._cleanTipClass();
      this.addAttachmentClass(this._getAttachment(data.placement));
    };

    Tooltip.prototype._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;
      if (tip.getAttribute('x-placement') !== null) {
        return;
      }
      $(tip).removeClass(ClassName.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    };

    // static

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }, {
      key: 'NAME',
      get: function get() {
        return NAME;
      }
    }, {
      key: 'DATA_KEY',
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: 'Event',
      get: function get() {
        return Event;
      }
    }, {
      key: 'EVENT_KEY',
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: 'DefaultType',
      get: function get() {
        return DefaultType;
      }
    }]);

    return Tooltip;
  }();

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Tooltip._jQueryInterface;
  $.fn[NAME].Constructor = Tooltip;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tooltip._jQueryInterface;
  };

  return Tooltip;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Popover = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'popover';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.popover';
  var EVENT_KEY = '.' + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var CLASS_PREFIX = 'bs-popover';
  var BSCLS_PREFIX_REGEX = new RegExp('(^|\\s)' + CLASS_PREFIX + '\\S+', 'g');

  var Default = $.extend({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType = $.extend({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    INSERTED: 'inserted' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    FOCUSOUT: 'focusout' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Popover = function (_Tooltip) {
    _inherits(Popover, _Tooltip);

    function Popover() {
      _classCallCheck(this, Popover);

      return _possibleConstructorReturn(this, _Tooltip.apply(this, arguments));
    }

    // overrides

    Popover.prototype.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    Popover.prototype.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + '-' + attachment);
    };

    Popover.prototype.getTipElement = function getTipElement() {
      return this.tip = this.tip || $(this.config.template)[0];
    };

    Popover.prototype.setContent = function setContent() {
      var $tip = $(this.getTipElement());

      // we use append for html objects to maintain js events
      this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
      this.setElementContent($tip.find(Selector.CONTENT), this._getContent());

      $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
    };

    // private

    Popover.prototype._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
    };

    Popover.prototype._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    // static

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;

        if (!data && /destroy|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: 'VERSION',


      // getters

      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }, {
      key: 'NAME',
      get: function get() {
        return NAME;
      }
    }, {
      key: 'DATA_KEY',
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: 'Event',
      get: function get() {
        return Event;
      }
    }, {
      key: 'EVENT_KEY',
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: 'DefaultType',
      get: function get() {
        return DefaultType;
      }
    }]);

    return Popover;
  }(Tooltip);

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Popover._jQueryInterface;
  $.fn[NAME].Constructor = Popover;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Popover._jQueryInterface;
  };

  return Popover;
}(jQuery);


})();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./assets/scss/main.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./assets/scss/main.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! @fortawesome/fontawesome-free/webfonts/fa-solid-900.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! @fortawesome/fontawesome-free/webfonts/fa-solid-900.eot */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot") + "?#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! @fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2 */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! @fortawesome/fontawesome-free/webfonts/fa-solid-900.woff */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! @fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf"));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! @fortawesome/fontawesome-free/webfonts/fa-solid-900.svg */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg") + "#fontawesome");

// Module
exports.push([module.i, "/*!\n * Font Awesome Free 5.10.1 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n.fa,\n.fas,\n.far,\n.fal,\n.fad,\n.fab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  animation: fa-spin 1s infinite steps(8); }\n\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  transform: scale(1, -1); }\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  left: 0;\n  position: absolute;\n  text-align: center;\n  width: 100%; }\n\n.fa-stack-1x {\n  line-height: inherit; }\n\n.fa-stack-2x {\n  font-size: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\nreaders do not read off random characters that represent icons */\n.fa-500px:before {\n  content: \"\\f26e\"; }\n\n.fa-accessible-icon:before {\n  content: \"\\f368\"; }\n\n.fa-accusoft:before {\n  content: \"\\f369\"; }\n\n.fa-acquisitions-incorporated:before {\n  content: \"\\f6af\"; }\n\n.fa-ad:before {\n  content: \"\\f641\"; }\n\n.fa-address-book:before {\n  content: \"\\f2b9\"; }\n\n.fa-address-card:before {\n  content: \"\\f2bb\"; }\n\n.fa-adjust:before {\n  content: \"\\f042\"; }\n\n.fa-adn:before {\n  content: \"\\f170\"; }\n\n.fa-adobe:before {\n  content: \"\\f778\"; }\n\n.fa-adversal:before {\n  content: \"\\f36a\"; }\n\n.fa-affiliatetheme:before {\n  content: \"\\f36b\"; }\n\n.fa-air-freshener:before {\n  content: \"\\f5d0\"; }\n\n.fa-airbnb:before {\n  content: \"\\f834\"; }\n\n.fa-algolia:before {\n  content: \"\\f36c\"; }\n\n.fa-align-center:before {\n  content: \"\\f037\"; }\n\n.fa-align-justify:before {\n  content: \"\\f039\"; }\n\n.fa-align-left:before {\n  content: \"\\f036\"; }\n\n.fa-align-right:before {\n  content: \"\\f038\"; }\n\n.fa-alipay:before {\n  content: \"\\f642\"; }\n\n.fa-allergies:before {\n  content: \"\\f461\"; }\n\n.fa-amazon:before {\n  content: \"\\f270\"; }\n\n.fa-amazon-pay:before {\n  content: \"\\f42c\"; }\n\n.fa-ambulance:before {\n  content: \"\\f0f9\"; }\n\n.fa-american-sign-language-interpreting:before {\n  content: \"\\f2a3\"; }\n\n.fa-amilia:before {\n  content: \"\\f36d\"; }\n\n.fa-anchor:before {\n  content: \"\\f13d\"; }\n\n.fa-android:before {\n  content: \"\\f17b\"; }\n\n.fa-angellist:before {\n  content: \"\\f209\"; }\n\n.fa-angle-double-down:before {\n  content: \"\\f103\"; }\n\n.fa-angle-double-left:before {\n  content: \"\\f100\"; }\n\n.fa-angle-double-right:before {\n  content: \"\\f101\"; }\n\n.fa-angle-double-up:before {\n  content: \"\\f102\"; }\n\n.fa-angle-down:before {\n  content: \"\\f107\"; }\n\n.fa-angle-left:before {\n  content: \"\\f104\"; }\n\n.fa-angle-right:before {\n  content: \"\\f105\"; }\n\n.fa-angle-up:before {\n  content: \"\\f106\"; }\n\n.fa-angry:before {\n  content: \"\\f556\"; }\n\n.fa-angrycreative:before {\n  content: \"\\f36e\"; }\n\n.fa-angular:before {\n  content: \"\\f420\"; }\n\n.fa-ankh:before {\n  content: \"\\f644\"; }\n\n.fa-app-store:before {\n  content: \"\\f36f\"; }\n\n.fa-app-store-ios:before {\n  content: \"\\f370\"; }\n\n.fa-apper:before {\n  content: \"\\f371\"; }\n\n.fa-apple:before {\n  content: \"\\f179\"; }\n\n.fa-apple-alt:before {\n  content: \"\\f5d1\"; }\n\n.fa-apple-pay:before {\n  content: \"\\f415\"; }\n\n.fa-archive:before {\n  content: \"\\f187\"; }\n\n.fa-archway:before {\n  content: \"\\f557\"; }\n\n.fa-arrow-alt-circle-down:before {\n  content: \"\\f358\"; }\n\n.fa-arrow-alt-circle-left:before {\n  content: \"\\f359\"; }\n\n.fa-arrow-alt-circle-right:before {\n  content: \"\\f35a\"; }\n\n.fa-arrow-alt-circle-up:before {\n  content: \"\\f35b\"; }\n\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\"; }\n\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\"; }\n\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\"; }\n\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\"; }\n\n.fa-arrow-down:before {\n  content: \"\\f063\"; }\n\n.fa-arrow-left:before {\n  content: \"\\f060\"; }\n\n.fa-arrow-right:before {\n  content: \"\\f061\"; }\n\n.fa-arrow-up:before {\n  content: \"\\f062\"; }\n\n.fa-arrows-alt:before {\n  content: \"\\f0b2\"; }\n\n.fa-arrows-alt-h:before {\n  content: \"\\f337\"; }\n\n.fa-arrows-alt-v:before {\n  content: \"\\f338\"; }\n\n.fa-artstation:before {\n  content: \"\\f77a\"; }\n\n.fa-assistive-listening-systems:before {\n  content: \"\\f2a2\"; }\n\n.fa-asterisk:before {\n  content: \"\\f069\"; }\n\n.fa-asymmetrik:before {\n  content: \"\\f372\"; }\n\n.fa-at:before {\n  content: \"\\f1fa\"; }\n\n.fa-atlas:before {\n  content: \"\\f558\"; }\n\n.fa-atlassian:before {\n  content: \"\\f77b\"; }\n\n.fa-atom:before {\n  content: \"\\f5d2\"; }\n\n.fa-audible:before {\n  content: \"\\f373\"; }\n\n.fa-audio-description:before {\n  content: \"\\f29e\"; }\n\n.fa-autoprefixer:before {\n  content: \"\\f41c\"; }\n\n.fa-avianex:before {\n  content: \"\\f374\"; }\n\n.fa-aviato:before {\n  content: \"\\f421\"; }\n\n.fa-award:before {\n  content: \"\\f559\"; }\n\n.fa-aws:before {\n  content: \"\\f375\"; }\n\n.fa-baby:before {\n  content: \"\\f77c\"; }\n\n.fa-baby-carriage:before {\n  content: \"\\f77d\"; }\n\n.fa-backspace:before {\n  content: \"\\f55a\"; }\n\n.fa-backward:before {\n  content: \"\\f04a\"; }\n\n.fa-bacon:before {\n  content: \"\\f7e5\"; }\n\n.fa-balance-scale:before {\n  content: \"\\f24e\"; }\n\n.fa-balance-scale-left:before {\n  content: \"\\f515\"; }\n\n.fa-balance-scale-right:before {\n  content: \"\\f516\"; }\n\n.fa-ban:before {\n  content: \"\\f05e\"; }\n\n.fa-band-aid:before {\n  content: \"\\f462\"; }\n\n.fa-bandcamp:before {\n  content: \"\\f2d5\"; }\n\n.fa-barcode:before {\n  content: \"\\f02a\"; }\n\n.fa-bars:before {\n  content: \"\\f0c9\"; }\n\n.fa-baseball-ball:before {\n  content: \"\\f433\"; }\n\n.fa-basketball-ball:before {\n  content: \"\\f434\"; }\n\n.fa-bath:before {\n  content: \"\\f2cd\"; }\n\n.fa-battery-empty:before {\n  content: \"\\f244\"; }\n\n.fa-battery-full:before {\n  content: \"\\f240\"; }\n\n.fa-battery-half:before {\n  content: \"\\f242\"; }\n\n.fa-battery-quarter:before {\n  content: \"\\f243\"; }\n\n.fa-battery-three-quarters:before {\n  content: \"\\f241\"; }\n\n.fa-battle-net:before {\n  content: \"\\f835\"; }\n\n.fa-bed:before {\n  content: \"\\f236\"; }\n\n.fa-beer:before {\n  content: \"\\f0fc\"; }\n\n.fa-behance:before {\n  content: \"\\f1b4\"; }\n\n.fa-behance-square:before {\n  content: \"\\f1b5\"; }\n\n.fa-bell:before {\n  content: \"\\f0f3\"; }\n\n.fa-bell-slash:before {\n  content: \"\\f1f6\"; }\n\n.fa-bezier-curve:before {\n  content: \"\\f55b\"; }\n\n.fa-bible:before {\n  content: \"\\f647\"; }\n\n.fa-bicycle:before {\n  content: \"\\f206\"; }\n\n.fa-biking:before {\n  content: \"\\f84a\"; }\n\n.fa-bimobject:before {\n  content: \"\\f378\"; }\n\n.fa-binoculars:before {\n  content: \"\\f1e5\"; }\n\n.fa-biohazard:before {\n  content: \"\\f780\"; }\n\n.fa-birthday-cake:before {\n  content: \"\\f1fd\"; }\n\n.fa-bitbucket:before {\n  content: \"\\f171\"; }\n\n.fa-bitcoin:before {\n  content: \"\\f379\"; }\n\n.fa-bity:before {\n  content: \"\\f37a\"; }\n\n.fa-black-tie:before {\n  content: \"\\f27e\"; }\n\n.fa-blackberry:before {\n  content: \"\\f37b\"; }\n\n.fa-blender:before {\n  content: \"\\f517\"; }\n\n.fa-blender-phone:before {\n  content: \"\\f6b6\"; }\n\n.fa-blind:before {\n  content: \"\\f29d\"; }\n\n.fa-blog:before {\n  content: \"\\f781\"; }\n\n.fa-blogger:before {\n  content: \"\\f37c\"; }\n\n.fa-blogger-b:before {\n  content: \"\\f37d\"; }\n\n.fa-bluetooth:before {\n  content: \"\\f293\"; }\n\n.fa-bluetooth-b:before {\n  content: \"\\f294\"; }\n\n.fa-bold:before {\n  content: \"\\f032\"; }\n\n.fa-bolt:before {\n  content: \"\\f0e7\"; }\n\n.fa-bomb:before {\n  content: \"\\f1e2\"; }\n\n.fa-bone:before {\n  content: \"\\f5d7\"; }\n\n.fa-bong:before {\n  content: \"\\f55c\"; }\n\n.fa-book:before {\n  content: \"\\f02d\"; }\n\n.fa-book-dead:before {\n  content: \"\\f6b7\"; }\n\n.fa-book-medical:before {\n  content: \"\\f7e6\"; }\n\n.fa-book-open:before {\n  content: \"\\f518\"; }\n\n.fa-book-reader:before {\n  content: \"\\f5da\"; }\n\n.fa-bookmark:before {\n  content: \"\\f02e\"; }\n\n.fa-bootstrap:before {\n  content: \"\\f836\"; }\n\n.fa-border-all:before {\n  content: \"\\f84c\"; }\n\n.fa-border-none:before {\n  content: \"\\f850\"; }\n\n.fa-border-style:before {\n  content: \"\\f853\"; }\n\n.fa-bowling-ball:before {\n  content: \"\\f436\"; }\n\n.fa-box:before {\n  content: \"\\f466\"; }\n\n.fa-box-open:before {\n  content: \"\\f49e\"; }\n\n.fa-boxes:before {\n  content: \"\\f468\"; }\n\n.fa-braille:before {\n  content: \"\\f2a1\"; }\n\n.fa-brain:before {\n  content: \"\\f5dc\"; }\n\n.fa-bread-slice:before {\n  content: \"\\f7ec\"; }\n\n.fa-briefcase:before {\n  content: \"\\f0b1\"; }\n\n.fa-briefcase-medical:before {\n  content: \"\\f469\"; }\n\n.fa-broadcast-tower:before {\n  content: \"\\f519\"; }\n\n.fa-broom:before {\n  content: \"\\f51a\"; }\n\n.fa-brush:before {\n  content: \"\\f55d\"; }\n\n.fa-btc:before {\n  content: \"\\f15a\"; }\n\n.fa-buffer:before {\n  content: \"\\f837\"; }\n\n.fa-bug:before {\n  content: \"\\f188\"; }\n\n.fa-building:before {\n  content: \"\\f1ad\"; }\n\n.fa-bullhorn:before {\n  content: \"\\f0a1\"; }\n\n.fa-bullseye:before {\n  content: \"\\f140\"; }\n\n.fa-burn:before {\n  content: \"\\f46a\"; }\n\n.fa-buromobelexperte:before {\n  content: \"\\f37f\"; }\n\n.fa-bus:before {\n  content: \"\\f207\"; }\n\n.fa-bus-alt:before {\n  content: \"\\f55e\"; }\n\n.fa-business-time:before {\n  content: \"\\f64a\"; }\n\n.fa-buysellads:before {\n  content: \"\\f20d\"; }\n\n.fa-calculator:before {\n  content: \"\\f1ec\"; }\n\n.fa-calendar:before {\n  content: \"\\f133\"; }\n\n.fa-calendar-alt:before {\n  content: \"\\f073\"; }\n\n.fa-calendar-check:before {\n  content: \"\\f274\"; }\n\n.fa-calendar-day:before {\n  content: \"\\f783\"; }\n\n.fa-calendar-minus:before {\n  content: \"\\f272\"; }\n\n.fa-calendar-plus:before {\n  content: \"\\f271\"; }\n\n.fa-calendar-times:before {\n  content: \"\\f273\"; }\n\n.fa-calendar-week:before {\n  content: \"\\f784\"; }\n\n.fa-camera:before {\n  content: \"\\f030\"; }\n\n.fa-camera-retro:before {\n  content: \"\\f083\"; }\n\n.fa-campground:before {\n  content: \"\\f6bb\"; }\n\n.fa-canadian-maple-leaf:before {\n  content: \"\\f785\"; }\n\n.fa-candy-cane:before {\n  content: \"\\f786\"; }\n\n.fa-cannabis:before {\n  content: \"\\f55f\"; }\n\n.fa-capsules:before {\n  content: \"\\f46b\"; }\n\n.fa-car:before {\n  content: \"\\f1b9\"; }\n\n.fa-car-alt:before {\n  content: \"\\f5de\"; }\n\n.fa-car-battery:before {\n  content: \"\\f5df\"; }\n\n.fa-car-crash:before {\n  content: \"\\f5e1\"; }\n\n.fa-car-side:before {\n  content: \"\\f5e4\"; }\n\n.fa-caret-down:before {\n  content: \"\\f0d7\"; }\n\n.fa-caret-left:before {\n  content: \"\\f0d9\"; }\n\n.fa-caret-right:before {\n  content: \"\\f0da\"; }\n\n.fa-caret-square-down:before {\n  content: \"\\f150\"; }\n\n.fa-caret-square-left:before {\n  content: \"\\f191\"; }\n\n.fa-caret-square-right:before {\n  content: \"\\f152\"; }\n\n.fa-caret-square-up:before {\n  content: \"\\f151\"; }\n\n.fa-caret-up:before {\n  content: \"\\f0d8\"; }\n\n.fa-carrot:before {\n  content: \"\\f787\"; }\n\n.fa-cart-arrow-down:before {\n  content: \"\\f218\"; }\n\n.fa-cart-plus:before {\n  content: \"\\f217\"; }\n\n.fa-cash-register:before {\n  content: \"\\f788\"; }\n\n.fa-cat:before {\n  content: \"\\f6be\"; }\n\n.fa-cc-amazon-pay:before {\n  content: \"\\f42d\"; }\n\n.fa-cc-amex:before {\n  content: \"\\f1f3\"; }\n\n.fa-cc-apple-pay:before {\n  content: \"\\f416\"; }\n\n.fa-cc-diners-club:before {\n  content: \"\\f24c\"; }\n\n.fa-cc-discover:before {\n  content: \"\\f1f2\"; }\n\n.fa-cc-jcb:before {\n  content: \"\\f24b\"; }\n\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\"; }\n\n.fa-cc-paypal:before {\n  content: \"\\f1f4\"; }\n\n.fa-cc-stripe:before {\n  content: \"\\f1f5\"; }\n\n.fa-cc-visa:before {\n  content: \"\\f1f0\"; }\n\n.fa-centercode:before {\n  content: \"\\f380\"; }\n\n.fa-centos:before {\n  content: \"\\f789\"; }\n\n.fa-certificate:before {\n  content: \"\\f0a3\"; }\n\n.fa-chair:before {\n  content: \"\\f6c0\"; }\n\n.fa-chalkboard:before {\n  content: \"\\f51b\"; }\n\n.fa-chalkboard-teacher:before {\n  content: \"\\f51c\"; }\n\n.fa-charging-station:before {\n  content: \"\\f5e7\"; }\n\n.fa-chart-area:before {\n  content: \"\\f1fe\"; }\n\n.fa-chart-bar:before {\n  content: \"\\f080\"; }\n\n.fa-chart-line:before {\n  content: \"\\f201\"; }\n\n.fa-chart-pie:before {\n  content: \"\\f200\"; }\n\n.fa-check:before {\n  content: \"\\f00c\"; }\n\n.fa-check-circle:before {\n  content: \"\\f058\"; }\n\n.fa-check-double:before {\n  content: \"\\f560\"; }\n\n.fa-check-square:before {\n  content: \"\\f14a\"; }\n\n.fa-cheese:before {\n  content: \"\\f7ef\"; }\n\n.fa-chess:before {\n  content: \"\\f439\"; }\n\n.fa-chess-bishop:before {\n  content: \"\\f43a\"; }\n\n.fa-chess-board:before {\n  content: \"\\f43c\"; }\n\n.fa-chess-king:before {\n  content: \"\\f43f\"; }\n\n.fa-chess-knight:before {\n  content: \"\\f441\"; }\n\n.fa-chess-pawn:before {\n  content: \"\\f443\"; }\n\n.fa-chess-queen:before {\n  content: \"\\f445\"; }\n\n.fa-chess-rook:before {\n  content: \"\\f447\"; }\n\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\"; }\n\n.fa-chevron-circle-left:before {\n  content: \"\\f137\"; }\n\n.fa-chevron-circle-right:before {\n  content: \"\\f138\"; }\n\n.fa-chevron-circle-up:before {\n  content: \"\\f139\"; }\n\n.fa-chevron-down:before {\n  content: \"\\f078\"; }\n\n.fa-chevron-left:before {\n  content: \"\\f053\"; }\n\n.fa-chevron-right:before {\n  content: \"\\f054\"; }\n\n.fa-chevron-up:before {\n  content: \"\\f077\"; }\n\n.fa-child:before {\n  content: \"\\f1ae\"; }\n\n.fa-chrome:before {\n  content: \"\\f268\"; }\n\n.fa-chromecast:before {\n  content: \"\\f838\"; }\n\n.fa-church:before {\n  content: \"\\f51d\"; }\n\n.fa-circle:before {\n  content: \"\\f111\"; }\n\n.fa-circle-notch:before {\n  content: \"\\f1ce\"; }\n\n.fa-city:before {\n  content: \"\\f64f\"; }\n\n.fa-clinic-medical:before {\n  content: \"\\f7f2\"; }\n\n.fa-clipboard:before {\n  content: \"\\f328\"; }\n\n.fa-clipboard-check:before {\n  content: \"\\f46c\"; }\n\n.fa-clipboard-list:before {\n  content: \"\\f46d\"; }\n\n.fa-clock:before {\n  content: \"\\f017\"; }\n\n.fa-clone:before {\n  content: \"\\f24d\"; }\n\n.fa-closed-captioning:before {\n  content: \"\\f20a\"; }\n\n.fa-cloud:before {\n  content: \"\\f0c2\"; }\n\n.fa-cloud-download-alt:before {\n  content: \"\\f381\"; }\n\n.fa-cloud-meatball:before {\n  content: \"\\f73b\"; }\n\n.fa-cloud-moon:before {\n  content: \"\\f6c3\"; }\n\n.fa-cloud-moon-rain:before {\n  content: \"\\f73c\"; }\n\n.fa-cloud-rain:before {\n  content: \"\\f73d\"; }\n\n.fa-cloud-showers-heavy:before {\n  content: \"\\f740\"; }\n\n.fa-cloud-sun:before {\n  content: \"\\f6c4\"; }\n\n.fa-cloud-sun-rain:before {\n  content: \"\\f743\"; }\n\n.fa-cloud-upload-alt:before {\n  content: \"\\f382\"; }\n\n.fa-cloudscale:before {\n  content: \"\\f383\"; }\n\n.fa-cloudsmith:before {\n  content: \"\\f384\"; }\n\n.fa-cloudversify:before {\n  content: \"\\f385\"; }\n\n.fa-cocktail:before {\n  content: \"\\f561\"; }\n\n.fa-code:before {\n  content: \"\\f121\"; }\n\n.fa-code-branch:before {\n  content: \"\\f126\"; }\n\n.fa-codepen:before {\n  content: \"\\f1cb\"; }\n\n.fa-codiepie:before {\n  content: \"\\f284\"; }\n\n.fa-coffee:before {\n  content: \"\\f0f4\"; }\n\n.fa-cog:before {\n  content: \"\\f013\"; }\n\n.fa-cogs:before {\n  content: \"\\f085\"; }\n\n.fa-coins:before {\n  content: \"\\f51e\"; }\n\n.fa-columns:before {\n  content: \"\\f0db\"; }\n\n.fa-comment:before {\n  content: \"\\f075\"; }\n\n.fa-comment-alt:before {\n  content: \"\\f27a\"; }\n\n.fa-comment-dollar:before {\n  content: \"\\f651\"; }\n\n.fa-comment-dots:before {\n  content: \"\\f4ad\"; }\n\n.fa-comment-medical:before {\n  content: \"\\f7f5\"; }\n\n.fa-comment-slash:before {\n  content: \"\\f4b3\"; }\n\n.fa-comments:before {\n  content: \"\\f086\"; }\n\n.fa-comments-dollar:before {\n  content: \"\\f653\"; }\n\n.fa-compact-disc:before {\n  content: \"\\f51f\"; }\n\n.fa-compass:before {\n  content: \"\\f14e\"; }\n\n.fa-compress:before {\n  content: \"\\f066\"; }\n\n.fa-compress-arrows-alt:before {\n  content: \"\\f78c\"; }\n\n.fa-concierge-bell:before {\n  content: \"\\f562\"; }\n\n.fa-confluence:before {\n  content: \"\\f78d\"; }\n\n.fa-connectdevelop:before {\n  content: \"\\f20e\"; }\n\n.fa-contao:before {\n  content: \"\\f26d\"; }\n\n.fa-cookie:before {\n  content: \"\\f563\"; }\n\n.fa-cookie-bite:before {\n  content: \"\\f564\"; }\n\n.fa-copy:before {\n  content: \"\\f0c5\"; }\n\n.fa-copyright:before {\n  content: \"\\f1f9\"; }\n\n.fa-cotton-bureau:before {\n  content: \"\\f89e\"; }\n\n.fa-couch:before {\n  content: \"\\f4b8\"; }\n\n.fa-cpanel:before {\n  content: \"\\f388\"; }\n\n.fa-creative-commons:before {\n  content: \"\\f25e\"; }\n\n.fa-creative-commons-by:before {\n  content: \"\\f4e7\"; }\n\n.fa-creative-commons-nc:before {\n  content: \"\\f4e8\"; }\n\n.fa-creative-commons-nc-eu:before {\n  content: \"\\f4e9\"; }\n\n.fa-creative-commons-nc-jp:before {\n  content: \"\\f4ea\"; }\n\n.fa-creative-commons-nd:before {\n  content: \"\\f4eb\"; }\n\n.fa-creative-commons-pd:before {\n  content: \"\\f4ec\"; }\n\n.fa-creative-commons-pd-alt:before {\n  content: \"\\f4ed\"; }\n\n.fa-creative-commons-remix:before {\n  content: \"\\f4ee\"; }\n\n.fa-creative-commons-sa:before {\n  content: \"\\f4ef\"; }\n\n.fa-creative-commons-sampling:before {\n  content: \"\\f4f0\"; }\n\n.fa-creative-commons-sampling-plus:before {\n  content: \"\\f4f1\"; }\n\n.fa-creative-commons-share:before {\n  content: \"\\f4f2\"; }\n\n.fa-creative-commons-zero:before {\n  content: \"\\f4f3\"; }\n\n.fa-credit-card:before {\n  content: \"\\f09d\"; }\n\n.fa-critical-role:before {\n  content: \"\\f6c9\"; }\n\n.fa-crop:before {\n  content: \"\\f125\"; }\n\n.fa-crop-alt:before {\n  content: \"\\f565\"; }\n\n.fa-cross:before {\n  content: \"\\f654\"; }\n\n.fa-crosshairs:before {\n  content: \"\\f05b\"; }\n\n.fa-crow:before {\n  content: \"\\f520\"; }\n\n.fa-crown:before {\n  content: \"\\f521\"; }\n\n.fa-crutch:before {\n  content: \"\\f7f7\"; }\n\n.fa-css3:before {\n  content: \"\\f13c\"; }\n\n.fa-css3-alt:before {\n  content: \"\\f38b\"; }\n\n.fa-cube:before {\n  content: \"\\f1b2\"; }\n\n.fa-cubes:before {\n  content: \"\\f1b3\"; }\n\n.fa-cut:before {\n  content: \"\\f0c4\"; }\n\n.fa-cuttlefish:before {\n  content: \"\\f38c\"; }\n\n.fa-d-and-d:before {\n  content: \"\\f38d\"; }\n\n.fa-d-and-d-beyond:before {\n  content: \"\\f6ca\"; }\n\n.fa-dashcube:before {\n  content: \"\\f210\"; }\n\n.fa-database:before {\n  content: \"\\f1c0\"; }\n\n.fa-deaf:before {\n  content: \"\\f2a4\"; }\n\n.fa-delicious:before {\n  content: \"\\f1a5\"; }\n\n.fa-democrat:before {\n  content: \"\\f747\"; }\n\n.fa-deploydog:before {\n  content: \"\\f38e\"; }\n\n.fa-deskpro:before {\n  content: \"\\f38f\"; }\n\n.fa-desktop:before {\n  content: \"\\f108\"; }\n\n.fa-dev:before {\n  content: \"\\f6cc\"; }\n\n.fa-deviantart:before {\n  content: \"\\f1bd\"; }\n\n.fa-dharmachakra:before {\n  content: \"\\f655\"; }\n\n.fa-dhl:before {\n  content: \"\\f790\"; }\n\n.fa-diagnoses:before {\n  content: \"\\f470\"; }\n\n.fa-diaspora:before {\n  content: \"\\f791\"; }\n\n.fa-dice:before {\n  content: \"\\f522\"; }\n\n.fa-dice-d20:before {\n  content: \"\\f6cf\"; }\n\n.fa-dice-d6:before {\n  content: \"\\f6d1\"; }\n\n.fa-dice-five:before {\n  content: \"\\f523\"; }\n\n.fa-dice-four:before {\n  content: \"\\f524\"; }\n\n.fa-dice-one:before {\n  content: \"\\f525\"; }\n\n.fa-dice-six:before {\n  content: \"\\f526\"; }\n\n.fa-dice-three:before {\n  content: \"\\f527\"; }\n\n.fa-dice-two:before {\n  content: \"\\f528\"; }\n\n.fa-digg:before {\n  content: \"\\f1a6\"; }\n\n.fa-digital-ocean:before {\n  content: \"\\f391\"; }\n\n.fa-digital-tachograph:before {\n  content: \"\\f566\"; }\n\n.fa-directions:before {\n  content: \"\\f5eb\"; }\n\n.fa-discord:before {\n  content: \"\\f392\"; }\n\n.fa-discourse:before {\n  content: \"\\f393\"; }\n\n.fa-divide:before {\n  content: \"\\f529\"; }\n\n.fa-dizzy:before {\n  content: \"\\f567\"; }\n\n.fa-dna:before {\n  content: \"\\f471\"; }\n\n.fa-dochub:before {\n  content: \"\\f394\"; }\n\n.fa-docker:before {\n  content: \"\\f395\"; }\n\n.fa-dog:before {\n  content: \"\\f6d3\"; }\n\n.fa-dollar-sign:before {\n  content: \"\\f155\"; }\n\n.fa-dolly:before {\n  content: \"\\f472\"; }\n\n.fa-dolly-flatbed:before {\n  content: \"\\f474\"; }\n\n.fa-donate:before {\n  content: \"\\f4b9\"; }\n\n.fa-door-closed:before {\n  content: \"\\f52a\"; }\n\n.fa-door-open:before {\n  content: \"\\f52b\"; }\n\n.fa-dot-circle:before {\n  content: \"\\f192\"; }\n\n.fa-dove:before {\n  content: \"\\f4ba\"; }\n\n.fa-download:before {\n  content: \"\\f019\"; }\n\n.fa-draft2digital:before {\n  content: \"\\f396\"; }\n\n.fa-drafting-compass:before {\n  content: \"\\f568\"; }\n\n.fa-dragon:before {\n  content: \"\\f6d5\"; }\n\n.fa-draw-polygon:before {\n  content: \"\\f5ee\"; }\n\n.fa-dribbble:before {\n  content: \"\\f17d\"; }\n\n.fa-dribbble-square:before {\n  content: \"\\f397\"; }\n\n.fa-dropbox:before {\n  content: \"\\f16b\"; }\n\n.fa-drum:before {\n  content: \"\\f569\"; }\n\n.fa-drum-steelpan:before {\n  content: \"\\f56a\"; }\n\n.fa-drumstick-bite:before {\n  content: \"\\f6d7\"; }\n\n.fa-drupal:before {\n  content: \"\\f1a9\"; }\n\n.fa-dumbbell:before {\n  content: \"\\f44b\"; }\n\n.fa-dumpster:before {\n  content: \"\\f793\"; }\n\n.fa-dumpster-fire:before {\n  content: \"\\f794\"; }\n\n.fa-dungeon:before {\n  content: \"\\f6d9\"; }\n\n.fa-dyalog:before {\n  content: \"\\f399\"; }\n\n.fa-earlybirds:before {\n  content: \"\\f39a\"; }\n\n.fa-ebay:before {\n  content: \"\\f4f4\"; }\n\n.fa-edge:before {\n  content: \"\\f282\"; }\n\n.fa-edit:before {\n  content: \"\\f044\"; }\n\n.fa-egg:before {\n  content: \"\\f7fb\"; }\n\n.fa-eject:before {\n  content: \"\\f052\"; }\n\n.fa-elementor:before {\n  content: \"\\f430\"; }\n\n.fa-ellipsis-h:before {\n  content: \"\\f141\"; }\n\n.fa-ellipsis-v:before {\n  content: \"\\f142\"; }\n\n.fa-ello:before {\n  content: \"\\f5f1\"; }\n\n.fa-ember:before {\n  content: \"\\f423\"; }\n\n.fa-empire:before {\n  content: \"\\f1d1\"; }\n\n.fa-envelope:before {\n  content: \"\\f0e0\"; }\n\n.fa-envelope-open:before {\n  content: \"\\f2b6\"; }\n\n.fa-envelope-open-text:before {\n  content: \"\\f658\"; }\n\n.fa-envelope-square:before {\n  content: \"\\f199\"; }\n\n.fa-envira:before {\n  content: \"\\f299\"; }\n\n.fa-equals:before {\n  content: \"\\f52c\"; }\n\n.fa-eraser:before {\n  content: \"\\f12d\"; }\n\n.fa-erlang:before {\n  content: \"\\f39d\"; }\n\n.fa-ethereum:before {\n  content: \"\\f42e\"; }\n\n.fa-ethernet:before {\n  content: \"\\f796\"; }\n\n.fa-etsy:before {\n  content: \"\\f2d7\"; }\n\n.fa-euro-sign:before {\n  content: \"\\f153\"; }\n\n.fa-evernote:before {\n  content: \"\\f839\"; }\n\n.fa-exchange-alt:before {\n  content: \"\\f362\"; }\n\n.fa-exclamation:before {\n  content: \"\\f12a\"; }\n\n.fa-exclamation-circle:before {\n  content: \"\\f06a\"; }\n\n.fa-exclamation-triangle:before {\n  content: \"\\f071\"; }\n\n.fa-expand:before {\n  content: \"\\f065\"; }\n\n.fa-expand-arrows-alt:before {\n  content: \"\\f31e\"; }\n\n.fa-expeditedssl:before {\n  content: \"\\f23e\"; }\n\n.fa-external-link-alt:before {\n  content: \"\\f35d\"; }\n\n.fa-external-link-square-alt:before {\n  content: \"\\f360\"; }\n\n.fa-eye:before {\n  content: \"\\f06e\"; }\n\n.fa-eye-dropper:before {\n  content: \"\\f1fb\"; }\n\n.fa-eye-slash:before {\n  content: \"\\f070\"; }\n\n.fa-facebook:before {\n  content: \"\\f09a\"; }\n\n.fa-facebook-f:before {\n  content: \"\\f39e\"; }\n\n.fa-facebook-messenger:before {\n  content: \"\\f39f\"; }\n\n.fa-facebook-square:before {\n  content: \"\\f082\"; }\n\n.fa-fan:before {\n  content: \"\\f863\"; }\n\n.fa-fantasy-flight-games:before {\n  content: \"\\f6dc\"; }\n\n.fa-fast-backward:before {\n  content: \"\\f049\"; }\n\n.fa-fast-forward:before {\n  content: \"\\f050\"; }\n\n.fa-fax:before {\n  content: \"\\f1ac\"; }\n\n.fa-feather:before {\n  content: \"\\f52d\"; }\n\n.fa-feather-alt:before {\n  content: \"\\f56b\"; }\n\n.fa-fedex:before {\n  content: \"\\f797\"; }\n\n.fa-fedora:before {\n  content: \"\\f798\"; }\n\n.fa-female:before {\n  content: \"\\f182\"; }\n\n.fa-fighter-jet:before {\n  content: \"\\f0fb\"; }\n\n.fa-figma:before {\n  content: \"\\f799\"; }\n\n.fa-file:before {\n  content: \"\\f15b\"; }\n\n.fa-file-alt:before {\n  content: \"\\f15c\"; }\n\n.fa-file-archive:before {\n  content: \"\\f1c6\"; }\n\n.fa-file-audio:before {\n  content: \"\\f1c7\"; }\n\n.fa-file-code:before {\n  content: \"\\f1c9\"; }\n\n.fa-file-contract:before {\n  content: \"\\f56c\"; }\n\n.fa-file-csv:before {\n  content: \"\\f6dd\"; }\n\n.fa-file-download:before {\n  content: \"\\f56d\"; }\n\n.fa-file-excel:before {\n  content: \"\\f1c3\"; }\n\n.fa-file-export:before {\n  content: \"\\f56e\"; }\n\n.fa-file-image:before {\n  content: \"\\f1c5\"; }\n\n.fa-file-import:before {\n  content: \"\\f56f\"; }\n\n.fa-file-invoice:before {\n  content: \"\\f570\"; }\n\n.fa-file-invoice-dollar:before {\n  content: \"\\f571\"; }\n\n.fa-file-medical:before {\n  content: \"\\f477\"; }\n\n.fa-file-medical-alt:before {\n  content: \"\\f478\"; }\n\n.fa-file-pdf:before {\n  content: \"\\f1c1\"; }\n\n.fa-file-powerpoint:before {\n  content: \"\\f1c4\"; }\n\n.fa-file-prescription:before {\n  content: \"\\f572\"; }\n\n.fa-file-signature:before {\n  content: \"\\f573\"; }\n\n.fa-file-upload:before {\n  content: \"\\f574\"; }\n\n.fa-file-video:before {\n  content: \"\\f1c8\"; }\n\n.fa-file-word:before {\n  content: \"\\f1c2\"; }\n\n.fa-fill:before {\n  content: \"\\f575\"; }\n\n.fa-fill-drip:before {\n  content: \"\\f576\"; }\n\n.fa-film:before {\n  content: \"\\f008\"; }\n\n.fa-filter:before {\n  content: \"\\f0b0\"; }\n\n.fa-fingerprint:before {\n  content: \"\\f577\"; }\n\n.fa-fire:before {\n  content: \"\\f06d\"; }\n\n.fa-fire-alt:before {\n  content: \"\\f7e4\"; }\n\n.fa-fire-extinguisher:before {\n  content: \"\\f134\"; }\n\n.fa-firefox:before {\n  content: \"\\f269\"; }\n\n.fa-first-aid:before {\n  content: \"\\f479\"; }\n\n.fa-first-order:before {\n  content: \"\\f2b0\"; }\n\n.fa-first-order-alt:before {\n  content: \"\\f50a\"; }\n\n.fa-firstdraft:before {\n  content: \"\\f3a1\"; }\n\n.fa-fish:before {\n  content: \"\\f578\"; }\n\n.fa-fist-raised:before {\n  content: \"\\f6de\"; }\n\n.fa-flag:before {\n  content: \"\\f024\"; }\n\n.fa-flag-checkered:before {\n  content: \"\\f11e\"; }\n\n.fa-flag-usa:before {\n  content: \"\\f74d\"; }\n\n.fa-flask:before {\n  content: \"\\f0c3\"; }\n\n.fa-flickr:before {\n  content: \"\\f16e\"; }\n\n.fa-flipboard:before {\n  content: \"\\f44d\"; }\n\n.fa-flushed:before {\n  content: \"\\f579\"; }\n\n.fa-fly:before {\n  content: \"\\f417\"; }\n\n.fa-folder:before {\n  content: \"\\f07b\"; }\n\n.fa-folder-minus:before {\n  content: \"\\f65d\"; }\n\n.fa-folder-open:before {\n  content: \"\\f07c\"; }\n\n.fa-folder-plus:before {\n  content: \"\\f65e\"; }\n\n.fa-font:before {\n  content: \"\\f031\"; }\n\n.fa-font-awesome:before {\n  content: \"\\f2b4\"; }\n\n.fa-font-awesome-alt:before {\n  content: \"\\f35c\"; }\n\n.fa-font-awesome-flag:before {\n  content: \"\\f425\"; }\n\n.fa-font-awesome-logo-full:before {\n  content: \"\\f4e6\"; }\n\n.fa-fonticons:before {\n  content: \"\\f280\"; }\n\n.fa-fonticons-fi:before {\n  content: \"\\f3a2\"; }\n\n.fa-football-ball:before {\n  content: \"\\f44e\"; }\n\n.fa-fort-awesome:before {\n  content: \"\\f286\"; }\n\n.fa-fort-awesome-alt:before {\n  content: \"\\f3a3\"; }\n\n.fa-forumbee:before {\n  content: \"\\f211\"; }\n\n.fa-forward:before {\n  content: \"\\f04e\"; }\n\n.fa-foursquare:before {\n  content: \"\\f180\"; }\n\n.fa-free-code-camp:before {\n  content: \"\\f2c5\"; }\n\n.fa-freebsd:before {\n  content: \"\\f3a4\"; }\n\n.fa-frog:before {\n  content: \"\\f52e\"; }\n\n.fa-frown:before {\n  content: \"\\f119\"; }\n\n.fa-frown-open:before {\n  content: \"\\f57a\"; }\n\n.fa-fulcrum:before {\n  content: \"\\f50b\"; }\n\n.fa-funnel-dollar:before {\n  content: \"\\f662\"; }\n\n.fa-futbol:before {\n  content: \"\\f1e3\"; }\n\n.fa-galactic-republic:before {\n  content: \"\\f50c\"; }\n\n.fa-galactic-senate:before {\n  content: \"\\f50d\"; }\n\n.fa-gamepad:before {\n  content: \"\\f11b\"; }\n\n.fa-gas-pump:before {\n  content: \"\\f52f\"; }\n\n.fa-gavel:before {\n  content: \"\\f0e3\"; }\n\n.fa-gem:before {\n  content: \"\\f3a5\"; }\n\n.fa-genderless:before {\n  content: \"\\f22d\"; }\n\n.fa-get-pocket:before {\n  content: \"\\f265\"; }\n\n.fa-gg:before {\n  content: \"\\f260\"; }\n\n.fa-gg-circle:before {\n  content: \"\\f261\"; }\n\n.fa-ghost:before {\n  content: \"\\f6e2\"; }\n\n.fa-gift:before {\n  content: \"\\f06b\"; }\n\n.fa-gifts:before {\n  content: \"\\f79c\"; }\n\n.fa-git:before {\n  content: \"\\f1d3\"; }\n\n.fa-git-alt:before {\n  content: \"\\f841\"; }\n\n.fa-git-square:before {\n  content: \"\\f1d2\"; }\n\n.fa-github:before {\n  content: \"\\f09b\"; }\n\n.fa-github-alt:before {\n  content: \"\\f113\"; }\n\n.fa-github-square:before {\n  content: \"\\f092\"; }\n\n.fa-gitkraken:before {\n  content: \"\\f3a6\"; }\n\n.fa-gitlab:before {\n  content: \"\\f296\"; }\n\n.fa-gitter:before {\n  content: \"\\f426\"; }\n\n.fa-glass-cheers:before {\n  content: \"\\f79f\"; }\n\n.fa-glass-martini:before {\n  content: \"\\f000\"; }\n\n.fa-glass-martini-alt:before {\n  content: \"\\f57b\"; }\n\n.fa-glass-whiskey:before {\n  content: \"\\f7a0\"; }\n\n.fa-glasses:before {\n  content: \"\\f530\"; }\n\n.fa-glide:before {\n  content: \"\\f2a5\"; }\n\n.fa-glide-g:before {\n  content: \"\\f2a6\"; }\n\n.fa-globe:before {\n  content: \"\\f0ac\"; }\n\n.fa-globe-africa:before {\n  content: \"\\f57c\"; }\n\n.fa-globe-americas:before {\n  content: \"\\f57d\"; }\n\n.fa-globe-asia:before {\n  content: \"\\f57e\"; }\n\n.fa-globe-europe:before {\n  content: \"\\f7a2\"; }\n\n.fa-gofore:before {\n  content: \"\\f3a7\"; }\n\n.fa-golf-ball:before {\n  content: \"\\f450\"; }\n\n.fa-goodreads:before {\n  content: \"\\f3a8\"; }\n\n.fa-goodreads-g:before {\n  content: \"\\f3a9\"; }\n\n.fa-google:before {\n  content: \"\\f1a0\"; }\n\n.fa-google-drive:before {\n  content: \"\\f3aa\"; }\n\n.fa-google-play:before {\n  content: \"\\f3ab\"; }\n\n.fa-google-plus:before {\n  content: \"\\f2b3\"; }\n\n.fa-google-plus-g:before {\n  content: \"\\f0d5\"; }\n\n.fa-google-plus-square:before {\n  content: \"\\f0d4\"; }\n\n.fa-google-wallet:before {\n  content: \"\\f1ee\"; }\n\n.fa-gopuram:before {\n  content: \"\\f664\"; }\n\n.fa-graduation-cap:before {\n  content: \"\\f19d\"; }\n\n.fa-gratipay:before {\n  content: \"\\f184\"; }\n\n.fa-grav:before {\n  content: \"\\f2d6\"; }\n\n.fa-greater-than:before {\n  content: \"\\f531\"; }\n\n.fa-greater-than-equal:before {\n  content: \"\\f532\"; }\n\n.fa-grimace:before {\n  content: \"\\f57f\"; }\n\n.fa-grin:before {\n  content: \"\\f580\"; }\n\n.fa-grin-alt:before {\n  content: \"\\f581\"; }\n\n.fa-grin-beam:before {\n  content: \"\\f582\"; }\n\n.fa-grin-beam-sweat:before {\n  content: \"\\f583\"; }\n\n.fa-grin-hearts:before {\n  content: \"\\f584\"; }\n\n.fa-grin-squint:before {\n  content: \"\\f585\"; }\n\n.fa-grin-squint-tears:before {\n  content: \"\\f586\"; }\n\n.fa-grin-stars:before {\n  content: \"\\f587\"; }\n\n.fa-grin-tears:before {\n  content: \"\\f588\"; }\n\n.fa-grin-tongue:before {\n  content: \"\\f589\"; }\n\n.fa-grin-tongue-squint:before {\n  content: \"\\f58a\"; }\n\n.fa-grin-tongue-wink:before {\n  content: \"\\f58b\"; }\n\n.fa-grin-wink:before {\n  content: \"\\f58c\"; }\n\n.fa-grip-horizontal:before {\n  content: \"\\f58d\"; }\n\n.fa-grip-lines:before {\n  content: \"\\f7a4\"; }\n\n.fa-grip-lines-vertical:before {\n  content: \"\\f7a5\"; }\n\n.fa-grip-vertical:before {\n  content: \"\\f58e\"; }\n\n.fa-gripfire:before {\n  content: \"\\f3ac\"; }\n\n.fa-grunt:before {\n  content: \"\\f3ad\"; }\n\n.fa-guitar:before {\n  content: \"\\f7a6\"; }\n\n.fa-gulp:before {\n  content: \"\\f3ae\"; }\n\n.fa-h-square:before {\n  content: \"\\f0fd\"; }\n\n.fa-hacker-news:before {\n  content: \"\\f1d4\"; }\n\n.fa-hacker-news-square:before {\n  content: \"\\f3af\"; }\n\n.fa-hackerrank:before {\n  content: \"\\f5f7\"; }\n\n.fa-hamburger:before {\n  content: \"\\f805\"; }\n\n.fa-hammer:before {\n  content: \"\\f6e3\"; }\n\n.fa-hamsa:before {\n  content: \"\\f665\"; }\n\n.fa-hand-holding:before {\n  content: \"\\f4bd\"; }\n\n.fa-hand-holding-heart:before {\n  content: \"\\f4be\"; }\n\n.fa-hand-holding-usd:before {\n  content: \"\\f4c0\"; }\n\n.fa-hand-lizard:before {\n  content: \"\\f258\"; }\n\n.fa-hand-middle-finger:before {\n  content: \"\\f806\"; }\n\n.fa-hand-paper:before {\n  content: \"\\f256\"; }\n\n.fa-hand-peace:before {\n  content: \"\\f25b\"; }\n\n.fa-hand-point-down:before {\n  content: \"\\f0a7\"; }\n\n.fa-hand-point-left:before {\n  content: \"\\f0a5\"; }\n\n.fa-hand-point-right:before {\n  content: \"\\f0a4\"; }\n\n.fa-hand-point-up:before {\n  content: \"\\f0a6\"; }\n\n.fa-hand-pointer:before {\n  content: \"\\f25a\"; }\n\n.fa-hand-rock:before {\n  content: \"\\f255\"; }\n\n.fa-hand-scissors:before {\n  content: \"\\f257\"; }\n\n.fa-hand-spock:before {\n  content: \"\\f259\"; }\n\n.fa-hands:before {\n  content: \"\\f4c2\"; }\n\n.fa-hands-helping:before {\n  content: \"\\f4c4\"; }\n\n.fa-handshake:before {\n  content: \"\\f2b5\"; }\n\n.fa-hanukiah:before {\n  content: \"\\f6e6\"; }\n\n.fa-hard-hat:before {\n  content: \"\\f807\"; }\n\n.fa-hashtag:before {\n  content: \"\\f292\"; }\n\n.fa-hat-wizard:before {\n  content: \"\\f6e8\"; }\n\n.fa-haykal:before {\n  content: \"\\f666\"; }\n\n.fa-hdd:before {\n  content: \"\\f0a0\"; }\n\n.fa-heading:before {\n  content: \"\\f1dc\"; }\n\n.fa-headphones:before {\n  content: \"\\f025\"; }\n\n.fa-headphones-alt:before {\n  content: \"\\f58f\"; }\n\n.fa-headset:before {\n  content: \"\\f590\"; }\n\n.fa-heart:before {\n  content: \"\\f004\"; }\n\n.fa-heart-broken:before {\n  content: \"\\f7a9\"; }\n\n.fa-heartbeat:before {\n  content: \"\\f21e\"; }\n\n.fa-helicopter:before {\n  content: \"\\f533\"; }\n\n.fa-highlighter:before {\n  content: \"\\f591\"; }\n\n.fa-hiking:before {\n  content: \"\\f6ec\"; }\n\n.fa-hippo:before {\n  content: \"\\f6ed\"; }\n\n.fa-hips:before {\n  content: \"\\f452\"; }\n\n.fa-hire-a-helper:before {\n  content: \"\\f3b0\"; }\n\n.fa-history:before {\n  content: \"\\f1da\"; }\n\n.fa-hockey-puck:before {\n  content: \"\\f453\"; }\n\n.fa-holly-berry:before {\n  content: \"\\f7aa\"; }\n\n.fa-home:before {\n  content: \"\\f015\"; }\n\n.fa-hooli:before {\n  content: \"\\f427\"; }\n\n.fa-hornbill:before {\n  content: \"\\f592\"; }\n\n.fa-horse:before {\n  content: \"\\f6f0\"; }\n\n.fa-horse-head:before {\n  content: \"\\f7ab\"; }\n\n.fa-hospital:before {\n  content: \"\\f0f8\"; }\n\n.fa-hospital-alt:before {\n  content: \"\\f47d\"; }\n\n.fa-hospital-symbol:before {\n  content: \"\\f47e\"; }\n\n.fa-hot-tub:before {\n  content: \"\\f593\"; }\n\n.fa-hotdog:before {\n  content: \"\\f80f\"; }\n\n.fa-hotel:before {\n  content: \"\\f594\"; }\n\n.fa-hotjar:before {\n  content: \"\\f3b1\"; }\n\n.fa-hourglass:before {\n  content: \"\\f254\"; }\n\n.fa-hourglass-end:before {\n  content: \"\\f253\"; }\n\n.fa-hourglass-half:before {\n  content: \"\\f252\"; }\n\n.fa-hourglass-start:before {\n  content: \"\\f251\"; }\n\n.fa-house-damage:before {\n  content: \"\\f6f1\"; }\n\n.fa-houzz:before {\n  content: \"\\f27c\"; }\n\n.fa-hryvnia:before {\n  content: \"\\f6f2\"; }\n\n.fa-html5:before {\n  content: \"\\f13b\"; }\n\n.fa-hubspot:before {\n  content: \"\\f3b2\"; }\n\n.fa-i-cursor:before {\n  content: \"\\f246\"; }\n\n.fa-ice-cream:before {\n  content: \"\\f810\"; }\n\n.fa-icicles:before {\n  content: \"\\f7ad\"; }\n\n.fa-icons:before {\n  content: \"\\f86d\"; }\n\n.fa-id-badge:before {\n  content: \"\\f2c1\"; }\n\n.fa-id-card:before {\n  content: \"\\f2c2\"; }\n\n.fa-id-card-alt:before {\n  content: \"\\f47f\"; }\n\n.fa-igloo:before {\n  content: \"\\f7ae\"; }\n\n.fa-image:before {\n  content: \"\\f03e\"; }\n\n.fa-images:before {\n  content: \"\\f302\"; }\n\n.fa-imdb:before {\n  content: \"\\f2d8\"; }\n\n.fa-inbox:before {\n  content: \"\\f01c\"; }\n\n.fa-indent:before {\n  content: \"\\f03c\"; }\n\n.fa-industry:before {\n  content: \"\\f275\"; }\n\n.fa-infinity:before {\n  content: \"\\f534\"; }\n\n.fa-info:before {\n  content: \"\\f129\"; }\n\n.fa-info-circle:before {\n  content: \"\\f05a\"; }\n\n.fa-instagram:before {\n  content: \"\\f16d\"; }\n\n.fa-intercom:before {\n  content: \"\\f7af\"; }\n\n.fa-internet-explorer:before {\n  content: \"\\f26b\"; }\n\n.fa-invision:before {\n  content: \"\\f7b0\"; }\n\n.fa-ioxhost:before {\n  content: \"\\f208\"; }\n\n.fa-italic:before {\n  content: \"\\f033\"; }\n\n.fa-itch-io:before {\n  content: \"\\f83a\"; }\n\n.fa-itunes:before {\n  content: \"\\f3b4\"; }\n\n.fa-itunes-note:before {\n  content: \"\\f3b5\"; }\n\n.fa-java:before {\n  content: \"\\f4e4\"; }\n\n.fa-jedi:before {\n  content: \"\\f669\"; }\n\n.fa-jedi-order:before {\n  content: \"\\f50e\"; }\n\n.fa-jenkins:before {\n  content: \"\\f3b6\"; }\n\n.fa-jira:before {\n  content: \"\\f7b1\"; }\n\n.fa-joget:before {\n  content: \"\\f3b7\"; }\n\n.fa-joint:before {\n  content: \"\\f595\"; }\n\n.fa-joomla:before {\n  content: \"\\f1aa\"; }\n\n.fa-journal-whills:before {\n  content: \"\\f66a\"; }\n\n.fa-js:before {\n  content: \"\\f3b8\"; }\n\n.fa-js-square:before {\n  content: \"\\f3b9\"; }\n\n.fa-jsfiddle:before {\n  content: \"\\f1cc\"; }\n\n.fa-kaaba:before {\n  content: \"\\f66b\"; }\n\n.fa-kaggle:before {\n  content: \"\\f5fa\"; }\n\n.fa-key:before {\n  content: \"\\f084\"; }\n\n.fa-keybase:before {\n  content: \"\\f4f5\"; }\n\n.fa-keyboard:before {\n  content: \"\\f11c\"; }\n\n.fa-keycdn:before {\n  content: \"\\f3ba\"; }\n\n.fa-khanda:before {\n  content: \"\\f66d\"; }\n\n.fa-kickstarter:before {\n  content: \"\\f3bb\"; }\n\n.fa-kickstarter-k:before {\n  content: \"\\f3bc\"; }\n\n.fa-kiss:before {\n  content: \"\\f596\"; }\n\n.fa-kiss-beam:before {\n  content: \"\\f597\"; }\n\n.fa-kiss-wink-heart:before {\n  content: \"\\f598\"; }\n\n.fa-kiwi-bird:before {\n  content: \"\\f535\"; }\n\n.fa-korvue:before {\n  content: \"\\f42f\"; }\n\n.fa-landmark:before {\n  content: \"\\f66f\"; }\n\n.fa-language:before {\n  content: \"\\f1ab\"; }\n\n.fa-laptop:before {\n  content: \"\\f109\"; }\n\n.fa-laptop-code:before {\n  content: \"\\f5fc\"; }\n\n.fa-laptop-medical:before {\n  content: \"\\f812\"; }\n\n.fa-laravel:before {\n  content: \"\\f3bd\"; }\n\n.fa-lastfm:before {\n  content: \"\\f202\"; }\n\n.fa-lastfm-square:before {\n  content: \"\\f203\"; }\n\n.fa-laugh:before {\n  content: \"\\f599\"; }\n\n.fa-laugh-beam:before {\n  content: \"\\f59a\"; }\n\n.fa-laugh-squint:before {\n  content: \"\\f59b\"; }\n\n.fa-laugh-wink:before {\n  content: \"\\f59c\"; }\n\n.fa-layer-group:before {\n  content: \"\\f5fd\"; }\n\n.fa-leaf:before {\n  content: \"\\f06c\"; }\n\n.fa-leanpub:before {\n  content: \"\\f212\"; }\n\n.fa-lemon:before {\n  content: \"\\f094\"; }\n\n.fa-less:before {\n  content: \"\\f41d\"; }\n\n.fa-less-than:before {\n  content: \"\\f536\"; }\n\n.fa-less-than-equal:before {\n  content: \"\\f537\"; }\n\n.fa-level-down-alt:before {\n  content: \"\\f3be\"; }\n\n.fa-level-up-alt:before {\n  content: \"\\f3bf\"; }\n\n.fa-life-ring:before {\n  content: \"\\f1cd\"; }\n\n.fa-lightbulb:before {\n  content: \"\\f0eb\"; }\n\n.fa-line:before {\n  content: \"\\f3c0\"; }\n\n.fa-link:before {\n  content: \"\\f0c1\"; }\n\n.fa-linkedin:before {\n  content: \"\\f08c\"; }\n\n.fa-linkedin-in:before {\n  content: \"\\f0e1\"; }\n\n.fa-linode:before {\n  content: \"\\f2b8\"; }\n\n.fa-linux:before {\n  content: \"\\f17c\"; }\n\n.fa-lira-sign:before {\n  content: \"\\f195\"; }\n\n.fa-list:before {\n  content: \"\\f03a\"; }\n\n.fa-list-alt:before {\n  content: \"\\f022\"; }\n\n.fa-list-ol:before {\n  content: \"\\f0cb\"; }\n\n.fa-list-ul:before {\n  content: \"\\f0ca\"; }\n\n.fa-location-arrow:before {\n  content: \"\\f124\"; }\n\n.fa-lock:before {\n  content: \"\\f023\"; }\n\n.fa-lock-open:before {\n  content: \"\\f3c1\"; }\n\n.fa-long-arrow-alt-down:before {\n  content: \"\\f309\"; }\n\n.fa-long-arrow-alt-left:before {\n  content: \"\\f30a\"; }\n\n.fa-long-arrow-alt-right:before {\n  content: \"\\f30b\"; }\n\n.fa-long-arrow-alt-up:before {\n  content: \"\\f30c\"; }\n\n.fa-low-vision:before {\n  content: \"\\f2a8\"; }\n\n.fa-luggage-cart:before {\n  content: \"\\f59d\"; }\n\n.fa-lyft:before {\n  content: \"\\f3c3\"; }\n\n.fa-magento:before {\n  content: \"\\f3c4\"; }\n\n.fa-magic:before {\n  content: \"\\f0d0\"; }\n\n.fa-magnet:before {\n  content: \"\\f076\"; }\n\n.fa-mail-bulk:before {\n  content: \"\\f674\"; }\n\n.fa-mailchimp:before {\n  content: \"\\f59e\"; }\n\n.fa-male:before {\n  content: \"\\f183\"; }\n\n.fa-mandalorian:before {\n  content: \"\\f50f\"; }\n\n.fa-map:before {\n  content: \"\\f279\"; }\n\n.fa-map-marked:before {\n  content: \"\\f59f\"; }\n\n.fa-map-marked-alt:before {\n  content: \"\\f5a0\"; }\n\n.fa-map-marker:before {\n  content: \"\\f041\"; }\n\n.fa-map-marker-alt:before {\n  content: \"\\f3c5\"; }\n\n.fa-map-pin:before {\n  content: \"\\f276\"; }\n\n.fa-map-signs:before {\n  content: \"\\f277\"; }\n\n.fa-markdown:before {\n  content: \"\\f60f\"; }\n\n.fa-marker:before {\n  content: \"\\f5a1\"; }\n\n.fa-mars:before {\n  content: \"\\f222\"; }\n\n.fa-mars-double:before {\n  content: \"\\f227\"; }\n\n.fa-mars-stroke:before {\n  content: \"\\f229\"; }\n\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\"; }\n\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\"; }\n\n.fa-mask:before {\n  content: \"\\f6fa\"; }\n\n.fa-mastodon:before {\n  content: \"\\f4f6\"; }\n\n.fa-maxcdn:before {\n  content: \"\\f136\"; }\n\n.fa-medal:before {\n  content: \"\\f5a2\"; }\n\n.fa-medapps:before {\n  content: \"\\f3c6\"; }\n\n.fa-medium:before {\n  content: \"\\f23a\"; }\n\n.fa-medium-m:before {\n  content: \"\\f3c7\"; }\n\n.fa-medkit:before {\n  content: \"\\f0fa\"; }\n\n.fa-medrt:before {\n  content: \"\\f3c8\"; }\n\n.fa-meetup:before {\n  content: \"\\f2e0\"; }\n\n.fa-megaport:before {\n  content: \"\\f5a3\"; }\n\n.fa-meh:before {\n  content: \"\\f11a\"; }\n\n.fa-meh-blank:before {\n  content: \"\\f5a4\"; }\n\n.fa-meh-rolling-eyes:before {\n  content: \"\\f5a5\"; }\n\n.fa-memory:before {\n  content: \"\\f538\"; }\n\n.fa-mendeley:before {\n  content: \"\\f7b3\"; }\n\n.fa-menorah:before {\n  content: \"\\f676\"; }\n\n.fa-mercury:before {\n  content: \"\\f223\"; }\n\n.fa-meteor:before {\n  content: \"\\f753\"; }\n\n.fa-microchip:before {\n  content: \"\\f2db\"; }\n\n.fa-microphone:before {\n  content: \"\\f130\"; }\n\n.fa-microphone-alt:before {\n  content: \"\\f3c9\"; }\n\n.fa-microphone-alt-slash:before {\n  content: \"\\f539\"; }\n\n.fa-microphone-slash:before {\n  content: \"\\f131\"; }\n\n.fa-microscope:before {\n  content: \"\\f610\"; }\n\n.fa-microsoft:before {\n  content: \"\\f3ca\"; }\n\n.fa-minus:before {\n  content: \"\\f068\"; }\n\n.fa-minus-circle:before {\n  content: \"\\f056\"; }\n\n.fa-minus-square:before {\n  content: \"\\f146\"; }\n\n.fa-mitten:before {\n  content: \"\\f7b5\"; }\n\n.fa-mix:before {\n  content: \"\\f3cb\"; }\n\n.fa-mixcloud:before {\n  content: \"\\f289\"; }\n\n.fa-mizuni:before {\n  content: \"\\f3cc\"; }\n\n.fa-mobile:before {\n  content: \"\\f10b\"; }\n\n.fa-mobile-alt:before {\n  content: \"\\f3cd\"; }\n\n.fa-modx:before {\n  content: \"\\f285\"; }\n\n.fa-monero:before {\n  content: \"\\f3d0\"; }\n\n.fa-money-bill:before {\n  content: \"\\f0d6\"; }\n\n.fa-money-bill-alt:before {\n  content: \"\\f3d1\"; }\n\n.fa-money-bill-wave:before {\n  content: \"\\f53a\"; }\n\n.fa-money-bill-wave-alt:before {\n  content: \"\\f53b\"; }\n\n.fa-money-check:before {\n  content: \"\\f53c\"; }\n\n.fa-money-check-alt:before {\n  content: \"\\f53d\"; }\n\n.fa-monument:before {\n  content: \"\\f5a6\"; }\n\n.fa-moon:before {\n  content: \"\\f186\"; }\n\n.fa-mortar-pestle:before {\n  content: \"\\f5a7\"; }\n\n.fa-mosque:before {\n  content: \"\\f678\"; }\n\n.fa-motorcycle:before {\n  content: \"\\f21c\"; }\n\n.fa-mountain:before {\n  content: \"\\f6fc\"; }\n\n.fa-mouse-pointer:before {\n  content: \"\\f245\"; }\n\n.fa-mug-hot:before {\n  content: \"\\f7b6\"; }\n\n.fa-music:before {\n  content: \"\\f001\"; }\n\n.fa-napster:before {\n  content: \"\\f3d2\"; }\n\n.fa-neos:before {\n  content: \"\\f612\"; }\n\n.fa-network-wired:before {\n  content: \"\\f6ff\"; }\n\n.fa-neuter:before {\n  content: \"\\f22c\"; }\n\n.fa-newspaper:before {\n  content: \"\\f1ea\"; }\n\n.fa-nimblr:before {\n  content: \"\\f5a8\"; }\n\n.fa-node:before {\n  content: \"\\f419\"; }\n\n.fa-node-js:before {\n  content: \"\\f3d3\"; }\n\n.fa-not-equal:before {\n  content: \"\\f53e\"; }\n\n.fa-notes-medical:before {\n  content: \"\\f481\"; }\n\n.fa-npm:before {\n  content: \"\\f3d4\"; }\n\n.fa-ns8:before {\n  content: \"\\f3d5\"; }\n\n.fa-nutritionix:before {\n  content: \"\\f3d6\"; }\n\n.fa-object-group:before {\n  content: \"\\f247\"; }\n\n.fa-object-ungroup:before {\n  content: \"\\f248\"; }\n\n.fa-odnoklassniki:before {\n  content: \"\\f263\"; }\n\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\"; }\n\n.fa-oil-can:before {\n  content: \"\\f613\"; }\n\n.fa-old-republic:before {\n  content: \"\\f510\"; }\n\n.fa-om:before {\n  content: \"\\f679\"; }\n\n.fa-opencart:before {\n  content: \"\\f23d\"; }\n\n.fa-openid:before {\n  content: \"\\f19b\"; }\n\n.fa-opera:before {\n  content: \"\\f26a\"; }\n\n.fa-optin-monster:before {\n  content: \"\\f23c\"; }\n\n.fa-osi:before {\n  content: \"\\f41a\"; }\n\n.fa-otter:before {\n  content: \"\\f700\"; }\n\n.fa-outdent:before {\n  content: \"\\f03b\"; }\n\n.fa-page4:before {\n  content: \"\\f3d7\"; }\n\n.fa-pagelines:before {\n  content: \"\\f18c\"; }\n\n.fa-pager:before {\n  content: \"\\f815\"; }\n\n.fa-paint-brush:before {\n  content: \"\\f1fc\"; }\n\n.fa-paint-roller:before {\n  content: \"\\f5aa\"; }\n\n.fa-palette:before {\n  content: \"\\f53f\"; }\n\n.fa-palfed:before {\n  content: \"\\f3d8\"; }\n\n.fa-pallet:before {\n  content: \"\\f482\"; }\n\n.fa-paper-plane:before {\n  content: \"\\f1d8\"; }\n\n.fa-paperclip:before {\n  content: \"\\f0c6\"; }\n\n.fa-parachute-box:before {\n  content: \"\\f4cd\"; }\n\n.fa-paragraph:before {\n  content: \"\\f1dd\"; }\n\n.fa-parking:before {\n  content: \"\\f540\"; }\n\n.fa-passport:before {\n  content: \"\\f5ab\"; }\n\n.fa-pastafarianism:before {\n  content: \"\\f67b\"; }\n\n.fa-paste:before {\n  content: \"\\f0ea\"; }\n\n.fa-patreon:before {\n  content: \"\\f3d9\"; }\n\n.fa-pause:before {\n  content: \"\\f04c\"; }\n\n.fa-pause-circle:before {\n  content: \"\\f28b\"; }\n\n.fa-paw:before {\n  content: \"\\f1b0\"; }\n\n.fa-paypal:before {\n  content: \"\\f1ed\"; }\n\n.fa-peace:before {\n  content: \"\\f67c\"; }\n\n.fa-pen:before {\n  content: \"\\f304\"; }\n\n.fa-pen-alt:before {\n  content: \"\\f305\"; }\n\n.fa-pen-fancy:before {\n  content: \"\\f5ac\"; }\n\n.fa-pen-nib:before {\n  content: \"\\f5ad\"; }\n\n.fa-pen-square:before {\n  content: \"\\f14b\"; }\n\n.fa-pencil-alt:before {\n  content: \"\\f303\"; }\n\n.fa-pencil-ruler:before {\n  content: \"\\f5ae\"; }\n\n.fa-penny-arcade:before {\n  content: \"\\f704\"; }\n\n.fa-people-carry:before {\n  content: \"\\f4ce\"; }\n\n.fa-pepper-hot:before {\n  content: \"\\f816\"; }\n\n.fa-percent:before {\n  content: \"\\f295\"; }\n\n.fa-percentage:before {\n  content: \"\\f541\"; }\n\n.fa-periscope:before {\n  content: \"\\f3da\"; }\n\n.fa-person-booth:before {\n  content: \"\\f756\"; }\n\n.fa-phabricator:before {\n  content: \"\\f3db\"; }\n\n.fa-phoenix-framework:before {\n  content: \"\\f3dc\"; }\n\n.fa-phoenix-squadron:before {\n  content: \"\\f511\"; }\n\n.fa-phone:before {\n  content: \"\\f095\"; }\n\n.fa-phone-alt:before {\n  content: \"\\f879\"; }\n\n.fa-phone-slash:before {\n  content: \"\\f3dd\"; }\n\n.fa-phone-square:before {\n  content: \"\\f098\"; }\n\n.fa-phone-square-alt:before {\n  content: \"\\f87b\"; }\n\n.fa-phone-volume:before {\n  content: \"\\f2a0\"; }\n\n.fa-photo-video:before {\n  content: \"\\f87c\"; }\n\n.fa-php:before {\n  content: \"\\f457\"; }\n\n.fa-pied-piper:before {\n  content: \"\\f2ae\"; }\n\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\"; }\n\n.fa-pied-piper-hat:before {\n  content: \"\\f4e5\"; }\n\n.fa-pied-piper-pp:before {\n  content: \"\\f1a7\"; }\n\n.fa-piggy-bank:before {\n  content: \"\\f4d3\"; }\n\n.fa-pills:before {\n  content: \"\\f484\"; }\n\n.fa-pinterest:before {\n  content: \"\\f0d2\"; }\n\n.fa-pinterest-p:before {\n  content: \"\\f231\"; }\n\n.fa-pinterest-square:before {\n  content: \"\\f0d3\"; }\n\n.fa-pizza-slice:before {\n  content: \"\\f818\"; }\n\n.fa-place-of-worship:before {\n  content: \"\\f67f\"; }\n\n.fa-plane:before {\n  content: \"\\f072\"; }\n\n.fa-plane-arrival:before {\n  content: \"\\f5af\"; }\n\n.fa-plane-departure:before {\n  content: \"\\f5b0\"; }\n\n.fa-play:before {\n  content: \"\\f04b\"; }\n\n.fa-play-circle:before {\n  content: \"\\f144\"; }\n\n.fa-playstation:before {\n  content: \"\\f3df\"; }\n\n.fa-plug:before {\n  content: \"\\f1e6\"; }\n\n.fa-plus:before {\n  content: \"\\f067\"; }\n\n.fa-plus-circle:before {\n  content: \"\\f055\"; }\n\n.fa-plus-square:before {\n  content: \"\\f0fe\"; }\n\n.fa-podcast:before {\n  content: \"\\f2ce\"; }\n\n.fa-poll:before {\n  content: \"\\f681\"; }\n\n.fa-poll-h:before {\n  content: \"\\f682\"; }\n\n.fa-poo:before {\n  content: \"\\f2fe\"; }\n\n.fa-poo-storm:before {\n  content: \"\\f75a\"; }\n\n.fa-poop:before {\n  content: \"\\f619\"; }\n\n.fa-portrait:before {\n  content: \"\\f3e0\"; }\n\n.fa-pound-sign:before {\n  content: \"\\f154\"; }\n\n.fa-power-off:before {\n  content: \"\\f011\"; }\n\n.fa-pray:before {\n  content: \"\\f683\"; }\n\n.fa-praying-hands:before {\n  content: \"\\f684\"; }\n\n.fa-prescription:before {\n  content: \"\\f5b1\"; }\n\n.fa-prescription-bottle:before {\n  content: \"\\f485\"; }\n\n.fa-prescription-bottle-alt:before {\n  content: \"\\f486\"; }\n\n.fa-print:before {\n  content: \"\\f02f\"; }\n\n.fa-procedures:before {\n  content: \"\\f487\"; }\n\n.fa-product-hunt:before {\n  content: \"\\f288\"; }\n\n.fa-project-diagram:before {\n  content: \"\\f542\"; }\n\n.fa-pushed:before {\n  content: \"\\f3e1\"; }\n\n.fa-puzzle-piece:before {\n  content: \"\\f12e\"; }\n\n.fa-python:before {\n  content: \"\\f3e2\"; }\n\n.fa-qq:before {\n  content: \"\\f1d6\"; }\n\n.fa-qrcode:before {\n  content: \"\\f029\"; }\n\n.fa-question:before {\n  content: \"\\f128\"; }\n\n.fa-question-circle:before {\n  content: \"\\f059\"; }\n\n.fa-quidditch:before {\n  content: \"\\f458\"; }\n\n.fa-quinscape:before {\n  content: \"\\f459\"; }\n\n.fa-quora:before {\n  content: \"\\f2c4\"; }\n\n.fa-quote-left:before {\n  content: \"\\f10d\"; }\n\n.fa-quote-right:before {\n  content: \"\\f10e\"; }\n\n.fa-quran:before {\n  content: \"\\f687\"; }\n\n.fa-r-project:before {\n  content: \"\\f4f7\"; }\n\n.fa-radiation:before {\n  content: \"\\f7b9\"; }\n\n.fa-radiation-alt:before {\n  content: \"\\f7ba\"; }\n\n.fa-rainbow:before {\n  content: \"\\f75b\"; }\n\n.fa-random:before {\n  content: \"\\f074\"; }\n\n.fa-raspberry-pi:before {\n  content: \"\\f7bb\"; }\n\n.fa-ravelry:before {\n  content: \"\\f2d9\"; }\n\n.fa-react:before {\n  content: \"\\f41b\"; }\n\n.fa-reacteurope:before {\n  content: \"\\f75d\"; }\n\n.fa-readme:before {\n  content: \"\\f4d5\"; }\n\n.fa-rebel:before {\n  content: \"\\f1d0\"; }\n\n.fa-receipt:before {\n  content: \"\\f543\"; }\n\n.fa-recycle:before {\n  content: \"\\f1b8\"; }\n\n.fa-red-river:before {\n  content: \"\\f3e3\"; }\n\n.fa-reddit:before {\n  content: \"\\f1a1\"; }\n\n.fa-reddit-alien:before {\n  content: \"\\f281\"; }\n\n.fa-reddit-square:before {\n  content: \"\\f1a2\"; }\n\n.fa-redhat:before {\n  content: \"\\f7bc\"; }\n\n.fa-redo:before {\n  content: \"\\f01e\"; }\n\n.fa-redo-alt:before {\n  content: \"\\f2f9\"; }\n\n.fa-registered:before {\n  content: \"\\f25d\"; }\n\n.fa-remove-format:before {\n  content: \"\\f87d\"; }\n\n.fa-renren:before {\n  content: \"\\f18b\"; }\n\n.fa-reply:before {\n  content: \"\\f3e5\"; }\n\n.fa-reply-all:before {\n  content: \"\\f122\"; }\n\n.fa-replyd:before {\n  content: \"\\f3e6\"; }\n\n.fa-republican:before {\n  content: \"\\f75e\"; }\n\n.fa-researchgate:before {\n  content: \"\\f4f8\"; }\n\n.fa-resolving:before {\n  content: \"\\f3e7\"; }\n\n.fa-restroom:before {\n  content: \"\\f7bd\"; }\n\n.fa-retweet:before {\n  content: \"\\f079\"; }\n\n.fa-rev:before {\n  content: \"\\f5b2\"; }\n\n.fa-ribbon:before {\n  content: \"\\f4d6\"; }\n\n.fa-ring:before {\n  content: \"\\f70b\"; }\n\n.fa-road:before {\n  content: \"\\f018\"; }\n\n.fa-robot:before {\n  content: \"\\f544\"; }\n\n.fa-rocket:before {\n  content: \"\\f135\"; }\n\n.fa-rocketchat:before {\n  content: \"\\f3e8\"; }\n\n.fa-rockrms:before {\n  content: \"\\f3e9\"; }\n\n.fa-route:before {\n  content: \"\\f4d7\"; }\n\n.fa-rss:before {\n  content: \"\\f09e\"; }\n\n.fa-rss-square:before {\n  content: \"\\f143\"; }\n\n.fa-ruble-sign:before {\n  content: \"\\f158\"; }\n\n.fa-ruler:before {\n  content: \"\\f545\"; }\n\n.fa-ruler-combined:before {\n  content: \"\\f546\"; }\n\n.fa-ruler-horizontal:before {\n  content: \"\\f547\"; }\n\n.fa-ruler-vertical:before {\n  content: \"\\f548\"; }\n\n.fa-running:before {\n  content: \"\\f70c\"; }\n\n.fa-rupee-sign:before {\n  content: \"\\f156\"; }\n\n.fa-sad-cry:before {\n  content: \"\\f5b3\"; }\n\n.fa-sad-tear:before {\n  content: \"\\f5b4\"; }\n\n.fa-safari:before {\n  content: \"\\f267\"; }\n\n.fa-salesforce:before {\n  content: \"\\f83b\"; }\n\n.fa-sass:before {\n  content: \"\\f41e\"; }\n\n.fa-satellite:before {\n  content: \"\\f7bf\"; }\n\n.fa-satellite-dish:before {\n  content: \"\\f7c0\"; }\n\n.fa-save:before {\n  content: \"\\f0c7\"; }\n\n.fa-schlix:before {\n  content: \"\\f3ea\"; }\n\n.fa-school:before {\n  content: \"\\f549\"; }\n\n.fa-screwdriver:before {\n  content: \"\\f54a\"; }\n\n.fa-scribd:before {\n  content: \"\\f28a\"; }\n\n.fa-scroll:before {\n  content: \"\\f70e\"; }\n\n.fa-sd-card:before {\n  content: \"\\f7c2\"; }\n\n.fa-search:before {\n  content: \"\\f002\"; }\n\n.fa-search-dollar:before {\n  content: \"\\f688\"; }\n\n.fa-search-location:before {\n  content: \"\\f689\"; }\n\n.fa-search-minus:before {\n  content: \"\\f010\"; }\n\n.fa-search-plus:before {\n  content: \"\\f00e\"; }\n\n.fa-searchengin:before {\n  content: \"\\f3eb\"; }\n\n.fa-seedling:before {\n  content: \"\\f4d8\"; }\n\n.fa-sellcast:before {\n  content: \"\\f2da\"; }\n\n.fa-sellsy:before {\n  content: \"\\f213\"; }\n\n.fa-server:before {\n  content: \"\\f233\"; }\n\n.fa-servicestack:before {\n  content: \"\\f3ec\"; }\n\n.fa-shapes:before {\n  content: \"\\f61f\"; }\n\n.fa-share:before {\n  content: \"\\f064\"; }\n\n.fa-share-alt:before {\n  content: \"\\f1e0\"; }\n\n.fa-share-alt-square:before {\n  content: \"\\f1e1\"; }\n\n.fa-share-square:before {\n  content: \"\\f14d\"; }\n\n.fa-shekel-sign:before {\n  content: \"\\f20b\"; }\n\n.fa-shield-alt:before {\n  content: \"\\f3ed\"; }\n\n.fa-ship:before {\n  content: \"\\f21a\"; }\n\n.fa-shipping-fast:before {\n  content: \"\\f48b\"; }\n\n.fa-shirtsinbulk:before {\n  content: \"\\f214\"; }\n\n.fa-shoe-prints:before {\n  content: \"\\f54b\"; }\n\n.fa-shopping-bag:before {\n  content: \"\\f290\"; }\n\n.fa-shopping-basket:before {\n  content: \"\\f291\"; }\n\n.fa-shopping-cart:before {\n  content: \"\\f07a\"; }\n\n.fa-shopware:before {\n  content: \"\\f5b5\"; }\n\n.fa-shower:before {\n  content: \"\\f2cc\"; }\n\n.fa-shuttle-van:before {\n  content: \"\\f5b6\"; }\n\n.fa-sign:before {\n  content: \"\\f4d9\"; }\n\n.fa-sign-in-alt:before {\n  content: \"\\f2f6\"; }\n\n.fa-sign-language:before {\n  content: \"\\f2a7\"; }\n\n.fa-sign-out-alt:before {\n  content: \"\\f2f5\"; }\n\n.fa-signal:before {\n  content: \"\\f012\"; }\n\n.fa-signature:before {\n  content: \"\\f5b7\"; }\n\n.fa-sim-card:before {\n  content: \"\\f7c4\"; }\n\n.fa-simplybuilt:before {\n  content: \"\\f215\"; }\n\n.fa-sistrix:before {\n  content: \"\\f3ee\"; }\n\n.fa-sitemap:before {\n  content: \"\\f0e8\"; }\n\n.fa-sith:before {\n  content: \"\\f512\"; }\n\n.fa-skating:before {\n  content: \"\\f7c5\"; }\n\n.fa-sketch:before {\n  content: \"\\f7c6\"; }\n\n.fa-skiing:before {\n  content: \"\\f7c9\"; }\n\n.fa-skiing-nordic:before {\n  content: \"\\f7ca\"; }\n\n.fa-skull:before {\n  content: \"\\f54c\"; }\n\n.fa-skull-crossbones:before {\n  content: \"\\f714\"; }\n\n.fa-skyatlas:before {\n  content: \"\\f216\"; }\n\n.fa-skype:before {\n  content: \"\\f17e\"; }\n\n.fa-slack:before {\n  content: \"\\f198\"; }\n\n.fa-slack-hash:before {\n  content: \"\\f3ef\"; }\n\n.fa-slash:before {\n  content: \"\\f715\"; }\n\n.fa-sleigh:before {\n  content: \"\\f7cc\"; }\n\n.fa-sliders-h:before {\n  content: \"\\f1de\"; }\n\n.fa-slideshare:before {\n  content: \"\\f1e7\"; }\n\n.fa-smile:before {\n  content: \"\\f118\"; }\n\n.fa-smile-beam:before {\n  content: \"\\f5b8\"; }\n\n.fa-smile-wink:before {\n  content: \"\\f4da\"; }\n\n.fa-smog:before {\n  content: \"\\f75f\"; }\n\n.fa-smoking:before {\n  content: \"\\f48d\"; }\n\n.fa-smoking-ban:before {\n  content: \"\\f54d\"; }\n\n.fa-sms:before {\n  content: \"\\f7cd\"; }\n\n.fa-snapchat:before {\n  content: \"\\f2ab\"; }\n\n.fa-snapchat-ghost:before {\n  content: \"\\f2ac\"; }\n\n.fa-snapchat-square:before {\n  content: \"\\f2ad\"; }\n\n.fa-snowboarding:before {\n  content: \"\\f7ce\"; }\n\n.fa-snowflake:before {\n  content: \"\\f2dc\"; }\n\n.fa-snowman:before {\n  content: \"\\f7d0\"; }\n\n.fa-snowplow:before {\n  content: \"\\f7d2\"; }\n\n.fa-socks:before {\n  content: \"\\f696\"; }\n\n.fa-solar-panel:before {\n  content: \"\\f5ba\"; }\n\n.fa-sort:before {\n  content: \"\\f0dc\"; }\n\n.fa-sort-alpha-down:before {\n  content: \"\\f15d\"; }\n\n.fa-sort-alpha-down-alt:before {\n  content: \"\\f881\"; }\n\n.fa-sort-alpha-up:before {\n  content: \"\\f15e\"; }\n\n.fa-sort-alpha-up-alt:before {\n  content: \"\\f882\"; }\n\n.fa-sort-amount-down:before {\n  content: \"\\f160\"; }\n\n.fa-sort-amount-down-alt:before {\n  content: \"\\f884\"; }\n\n.fa-sort-amount-up:before {\n  content: \"\\f161\"; }\n\n.fa-sort-amount-up-alt:before {\n  content: \"\\f885\"; }\n\n.fa-sort-down:before {\n  content: \"\\f0dd\"; }\n\n.fa-sort-numeric-down:before {\n  content: \"\\f162\"; }\n\n.fa-sort-numeric-down-alt:before {\n  content: \"\\f886\"; }\n\n.fa-sort-numeric-up:before {\n  content: \"\\f163\"; }\n\n.fa-sort-numeric-up-alt:before {\n  content: \"\\f887\"; }\n\n.fa-sort-up:before {\n  content: \"\\f0de\"; }\n\n.fa-soundcloud:before {\n  content: \"\\f1be\"; }\n\n.fa-sourcetree:before {\n  content: \"\\f7d3\"; }\n\n.fa-spa:before {\n  content: \"\\f5bb\"; }\n\n.fa-space-shuttle:before {\n  content: \"\\f197\"; }\n\n.fa-speakap:before {\n  content: \"\\f3f3\"; }\n\n.fa-speaker-deck:before {\n  content: \"\\f83c\"; }\n\n.fa-spell-check:before {\n  content: \"\\f891\"; }\n\n.fa-spider:before {\n  content: \"\\f717\"; }\n\n.fa-spinner:before {\n  content: \"\\f110\"; }\n\n.fa-splotch:before {\n  content: \"\\f5bc\"; }\n\n.fa-spotify:before {\n  content: \"\\f1bc\"; }\n\n.fa-spray-can:before {\n  content: \"\\f5bd\"; }\n\n.fa-square:before {\n  content: \"\\f0c8\"; }\n\n.fa-square-full:before {\n  content: \"\\f45c\"; }\n\n.fa-square-root-alt:before {\n  content: \"\\f698\"; }\n\n.fa-squarespace:before {\n  content: \"\\f5be\"; }\n\n.fa-stack-exchange:before {\n  content: \"\\f18d\"; }\n\n.fa-stack-overflow:before {\n  content: \"\\f16c\"; }\n\n.fa-stackpath:before {\n  content: \"\\f842\"; }\n\n.fa-stamp:before {\n  content: \"\\f5bf\"; }\n\n.fa-star:before {\n  content: \"\\f005\"; }\n\n.fa-star-and-crescent:before {\n  content: \"\\f699\"; }\n\n.fa-star-half:before {\n  content: \"\\f089\"; }\n\n.fa-star-half-alt:before {\n  content: \"\\f5c0\"; }\n\n.fa-star-of-david:before {\n  content: \"\\f69a\"; }\n\n.fa-star-of-life:before {\n  content: \"\\f621\"; }\n\n.fa-staylinked:before {\n  content: \"\\f3f5\"; }\n\n.fa-steam:before {\n  content: \"\\f1b6\"; }\n\n.fa-steam-square:before {\n  content: \"\\f1b7\"; }\n\n.fa-steam-symbol:before {\n  content: \"\\f3f6\"; }\n\n.fa-step-backward:before {\n  content: \"\\f048\"; }\n\n.fa-step-forward:before {\n  content: \"\\f051\"; }\n\n.fa-stethoscope:before {\n  content: \"\\f0f1\"; }\n\n.fa-sticker-mule:before {\n  content: \"\\f3f7\"; }\n\n.fa-sticky-note:before {\n  content: \"\\f249\"; }\n\n.fa-stop:before {\n  content: \"\\f04d\"; }\n\n.fa-stop-circle:before {\n  content: \"\\f28d\"; }\n\n.fa-stopwatch:before {\n  content: \"\\f2f2\"; }\n\n.fa-store:before {\n  content: \"\\f54e\"; }\n\n.fa-store-alt:before {\n  content: \"\\f54f\"; }\n\n.fa-strava:before {\n  content: \"\\f428\"; }\n\n.fa-stream:before {\n  content: \"\\f550\"; }\n\n.fa-street-view:before {\n  content: \"\\f21d\"; }\n\n.fa-strikethrough:before {\n  content: \"\\f0cc\"; }\n\n.fa-stripe:before {\n  content: \"\\f429\"; }\n\n.fa-stripe-s:before {\n  content: \"\\f42a\"; }\n\n.fa-stroopwafel:before {\n  content: \"\\f551\"; }\n\n.fa-studiovinari:before {\n  content: \"\\f3f8\"; }\n\n.fa-stumbleupon:before {\n  content: \"\\f1a4\"; }\n\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\"; }\n\n.fa-subscript:before {\n  content: \"\\f12c\"; }\n\n.fa-subway:before {\n  content: \"\\f239\"; }\n\n.fa-suitcase:before {\n  content: \"\\f0f2\"; }\n\n.fa-suitcase-rolling:before {\n  content: \"\\f5c1\"; }\n\n.fa-sun:before {\n  content: \"\\f185\"; }\n\n.fa-superpowers:before {\n  content: \"\\f2dd\"; }\n\n.fa-superscript:before {\n  content: \"\\f12b\"; }\n\n.fa-supple:before {\n  content: \"\\f3f9\"; }\n\n.fa-surprise:before {\n  content: \"\\f5c2\"; }\n\n.fa-suse:before {\n  content: \"\\f7d6\"; }\n\n.fa-swatchbook:before {\n  content: \"\\f5c3\"; }\n\n.fa-swimmer:before {\n  content: \"\\f5c4\"; }\n\n.fa-swimming-pool:before {\n  content: \"\\f5c5\"; }\n\n.fa-symfony:before {\n  content: \"\\f83d\"; }\n\n.fa-synagogue:before {\n  content: \"\\f69b\"; }\n\n.fa-sync:before {\n  content: \"\\f021\"; }\n\n.fa-sync-alt:before {\n  content: \"\\f2f1\"; }\n\n.fa-syringe:before {\n  content: \"\\f48e\"; }\n\n.fa-table:before {\n  content: \"\\f0ce\"; }\n\n.fa-table-tennis:before {\n  content: \"\\f45d\"; }\n\n.fa-tablet:before {\n  content: \"\\f10a\"; }\n\n.fa-tablet-alt:before {\n  content: \"\\f3fa\"; }\n\n.fa-tablets:before {\n  content: \"\\f490\"; }\n\n.fa-tachometer-alt:before {\n  content: \"\\f3fd\"; }\n\n.fa-tag:before {\n  content: \"\\f02b\"; }\n\n.fa-tags:before {\n  content: \"\\f02c\"; }\n\n.fa-tape:before {\n  content: \"\\f4db\"; }\n\n.fa-tasks:before {\n  content: \"\\f0ae\"; }\n\n.fa-taxi:before {\n  content: \"\\f1ba\"; }\n\n.fa-teamspeak:before {\n  content: \"\\f4f9\"; }\n\n.fa-teeth:before {\n  content: \"\\f62e\"; }\n\n.fa-teeth-open:before {\n  content: \"\\f62f\"; }\n\n.fa-telegram:before {\n  content: \"\\f2c6\"; }\n\n.fa-telegram-plane:before {\n  content: \"\\f3fe\"; }\n\n.fa-temperature-high:before {\n  content: \"\\f769\"; }\n\n.fa-temperature-low:before {\n  content: \"\\f76b\"; }\n\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\"; }\n\n.fa-tenge:before {\n  content: \"\\f7d7\"; }\n\n.fa-terminal:before {\n  content: \"\\f120\"; }\n\n.fa-text-height:before {\n  content: \"\\f034\"; }\n\n.fa-text-width:before {\n  content: \"\\f035\"; }\n\n.fa-th:before {\n  content: \"\\f00a\"; }\n\n.fa-th-large:before {\n  content: \"\\f009\"; }\n\n.fa-th-list:before {\n  content: \"\\f00b\"; }\n\n.fa-the-red-yeti:before {\n  content: \"\\f69d\"; }\n\n.fa-theater-masks:before {\n  content: \"\\f630\"; }\n\n.fa-themeco:before {\n  content: \"\\f5c6\"; }\n\n.fa-themeisle:before {\n  content: \"\\f2b2\"; }\n\n.fa-thermometer:before {\n  content: \"\\f491\"; }\n\n.fa-thermometer-empty:before {\n  content: \"\\f2cb\"; }\n\n.fa-thermometer-full:before {\n  content: \"\\f2c7\"; }\n\n.fa-thermometer-half:before {\n  content: \"\\f2c9\"; }\n\n.fa-thermometer-quarter:before {\n  content: \"\\f2ca\"; }\n\n.fa-thermometer-three-quarters:before {\n  content: \"\\f2c8\"; }\n\n.fa-think-peaks:before {\n  content: \"\\f731\"; }\n\n.fa-thumbs-down:before {\n  content: \"\\f165\"; }\n\n.fa-thumbs-up:before {\n  content: \"\\f164\"; }\n\n.fa-thumbtack:before {\n  content: \"\\f08d\"; }\n\n.fa-ticket-alt:before {\n  content: \"\\f3ff\"; }\n\n.fa-times:before {\n  content: \"\\f00d\"; }\n\n.fa-times-circle:before {\n  content: \"\\f057\"; }\n\n.fa-tint:before {\n  content: \"\\f043\"; }\n\n.fa-tint-slash:before {\n  content: \"\\f5c7\"; }\n\n.fa-tired:before {\n  content: \"\\f5c8\"; }\n\n.fa-toggle-off:before {\n  content: \"\\f204\"; }\n\n.fa-toggle-on:before {\n  content: \"\\f205\"; }\n\n.fa-toilet:before {\n  content: \"\\f7d8\"; }\n\n.fa-toilet-paper:before {\n  content: \"\\f71e\"; }\n\n.fa-toolbox:before {\n  content: \"\\f552\"; }\n\n.fa-tools:before {\n  content: \"\\f7d9\"; }\n\n.fa-tooth:before {\n  content: \"\\f5c9\"; }\n\n.fa-torah:before {\n  content: \"\\f6a0\"; }\n\n.fa-torii-gate:before {\n  content: \"\\f6a1\"; }\n\n.fa-tractor:before {\n  content: \"\\f722\"; }\n\n.fa-trade-federation:before {\n  content: \"\\f513\"; }\n\n.fa-trademark:before {\n  content: \"\\f25c\"; }\n\n.fa-traffic-light:before {\n  content: \"\\f637\"; }\n\n.fa-train:before {\n  content: \"\\f238\"; }\n\n.fa-tram:before {\n  content: \"\\f7da\"; }\n\n.fa-transgender:before {\n  content: \"\\f224\"; }\n\n.fa-transgender-alt:before {\n  content: \"\\f225\"; }\n\n.fa-trash:before {\n  content: \"\\f1f8\"; }\n\n.fa-trash-alt:before {\n  content: \"\\f2ed\"; }\n\n.fa-trash-restore:before {\n  content: \"\\f829\"; }\n\n.fa-trash-restore-alt:before {\n  content: \"\\f82a\"; }\n\n.fa-tree:before {\n  content: \"\\f1bb\"; }\n\n.fa-trello:before {\n  content: \"\\f181\"; }\n\n.fa-tripadvisor:before {\n  content: \"\\f262\"; }\n\n.fa-trophy:before {\n  content: \"\\f091\"; }\n\n.fa-truck:before {\n  content: \"\\f0d1\"; }\n\n.fa-truck-loading:before {\n  content: \"\\f4de\"; }\n\n.fa-truck-monster:before {\n  content: \"\\f63b\"; }\n\n.fa-truck-moving:before {\n  content: \"\\f4df\"; }\n\n.fa-truck-pickup:before {\n  content: \"\\f63c\"; }\n\n.fa-tshirt:before {\n  content: \"\\f553\"; }\n\n.fa-tty:before {\n  content: \"\\f1e4\"; }\n\n.fa-tumblr:before {\n  content: \"\\f173\"; }\n\n.fa-tumblr-square:before {\n  content: \"\\f174\"; }\n\n.fa-tv:before {\n  content: \"\\f26c\"; }\n\n.fa-twitch:before {\n  content: \"\\f1e8\"; }\n\n.fa-twitter:before {\n  content: \"\\f099\"; }\n\n.fa-twitter-square:before {\n  content: \"\\f081\"; }\n\n.fa-typo3:before {\n  content: \"\\f42b\"; }\n\n.fa-uber:before {\n  content: \"\\f402\"; }\n\n.fa-ubuntu:before {\n  content: \"\\f7df\"; }\n\n.fa-uikit:before {\n  content: \"\\f403\"; }\n\n.fa-umbrella:before {\n  content: \"\\f0e9\"; }\n\n.fa-umbrella-beach:before {\n  content: \"\\f5ca\"; }\n\n.fa-underline:before {\n  content: \"\\f0cd\"; }\n\n.fa-undo:before {\n  content: \"\\f0e2\"; }\n\n.fa-undo-alt:before {\n  content: \"\\f2ea\"; }\n\n.fa-uniregistry:before {\n  content: \"\\f404\"; }\n\n.fa-universal-access:before {\n  content: \"\\f29a\"; }\n\n.fa-university:before {\n  content: \"\\f19c\"; }\n\n.fa-unlink:before {\n  content: \"\\f127\"; }\n\n.fa-unlock:before {\n  content: \"\\f09c\"; }\n\n.fa-unlock-alt:before {\n  content: \"\\f13e\"; }\n\n.fa-untappd:before {\n  content: \"\\f405\"; }\n\n.fa-upload:before {\n  content: \"\\f093\"; }\n\n.fa-ups:before {\n  content: \"\\f7e0\"; }\n\n.fa-usb:before {\n  content: \"\\f287\"; }\n\n.fa-user:before {\n  content: \"\\f007\"; }\n\n.fa-user-alt:before {\n  content: \"\\f406\"; }\n\n.fa-user-alt-slash:before {\n  content: \"\\f4fa\"; }\n\n.fa-user-astronaut:before {\n  content: \"\\f4fb\"; }\n\n.fa-user-check:before {\n  content: \"\\f4fc\"; }\n\n.fa-user-circle:before {\n  content: \"\\f2bd\"; }\n\n.fa-user-clock:before {\n  content: \"\\f4fd\"; }\n\n.fa-user-cog:before {\n  content: \"\\f4fe\"; }\n\n.fa-user-edit:before {\n  content: \"\\f4ff\"; }\n\n.fa-user-friends:before {\n  content: \"\\f500\"; }\n\n.fa-user-graduate:before {\n  content: \"\\f501\"; }\n\n.fa-user-injured:before {\n  content: \"\\f728\"; }\n\n.fa-user-lock:before {\n  content: \"\\f502\"; }\n\n.fa-user-md:before {\n  content: \"\\f0f0\"; }\n\n.fa-user-minus:before {\n  content: \"\\f503\"; }\n\n.fa-user-ninja:before {\n  content: \"\\f504\"; }\n\n.fa-user-nurse:before {\n  content: \"\\f82f\"; }\n\n.fa-user-plus:before {\n  content: \"\\f234\"; }\n\n.fa-user-secret:before {\n  content: \"\\f21b\"; }\n\n.fa-user-shield:before {\n  content: \"\\f505\"; }\n\n.fa-user-slash:before {\n  content: \"\\f506\"; }\n\n.fa-user-tag:before {\n  content: \"\\f507\"; }\n\n.fa-user-tie:before {\n  content: \"\\f508\"; }\n\n.fa-user-times:before {\n  content: \"\\f235\"; }\n\n.fa-users:before {\n  content: \"\\f0c0\"; }\n\n.fa-users-cog:before {\n  content: \"\\f509\"; }\n\n.fa-usps:before {\n  content: \"\\f7e1\"; }\n\n.fa-ussunnah:before {\n  content: \"\\f407\"; }\n\n.fa-utensil-spoon:before {\n  content: \"\\f2e5\"; }\n\n.fa-utensils:before {\n  content: \"\\f2e7\"; }\n\n.fa-vaadin:before {\n  content: \"\\f408\"; }\n\n.fa-vector-square:before {\n  content: \"\\f5cb\"; }\n\n.fa-venus:before {\n  content: \"\\f221\"; }\n\n.fa-venus-double:before {\n  content: \"\\f226\"; }\n\n.fa-venus-mars:before {\n  content: \"\\f228\"; }\n\n.fa-viacoin:before {\n  content: \"\\f237\"; }\n\n.fa-viadeo:before {\n  content: \"\\f2a9\"; }\n\n.fa-viadeo-square:before {\n  content: \"\\f2aa\"; }\n\n.fa-vial:before {\n  content: \"\\f492\"; }\n\n.fa-vials:before {\n  content: \"\\f493\"; }\n\n.fa-viber:before {\n  content: \"\\f409\"; }\n\n.fa-video:before {\n  content: \"\\f03d\"; }\n\n.fa-video-slash:before {\n  content: \"\\f4e2\"; }\n\n.fa-vihara:before {\n  content: \"\\f6a7\"; }\n\n.fa-vimeo:before {\n  content: \"\\f40a\"; }\n\n.fa-vimeo-square:before {\n  content: \"\\f194\"; }\n\n.fa-vimeo-v:before {\n  content: \"\\f27d\"; }\n\n.fa-vine:before {\n  content: \"\\f1ca\"; }\n\n.fa-vk:before {\n  content: \"\\f189\"; }\n\n.fa-vnv:before {\n  content: \"\\f40b\"; }\n\n.fa-voicemail:before {\n  content: \"\\f897\"; }\n\n.fa-volleyball-ball:before {\n  content: \"\\f45f\"; }\n\n.fa-volume-down:before {\n  content: \"\\f027\"; }\n\n.fa-volume-mute:before {\n  content: \"\\f6a9\"; }\n\n.fa-volume-off:before {\n  content: \"\\f026\"; }\n\n.fa-volume-up:before {\n  content: \"\\f028\"; }\n\n.fa-vote-yea:before {\n  content: \"\\f772\"; }\n\n.fa-vr-cardboard:before {\n  content: \"\\f729\"; }\n\n.fa-vuejs:before {\n  content: \"\\f41f\"; }\n\n.fa-walking:before {\n  content: \"\\f554\"; }\n\n.fa-wallet:before {\n  content: \"\\f555\"; }\n\n.fa-warehouse:before {\n  content: \"\\f494\"; }\n\n.fa-water:before {\n  content: \"\\f773\"; }\n\n.fa-wave-square:before {\n  content: \"\\f83e\"; }\n\n.fa-waze:before {\n  content: \"\\f83f\"; }\n\n.fa-weebly:before {\n  content: \"\\f5cc\"; }\n\n.fa-weibo:before {\n  content: \"\\f18a\"; }\n\n.fa-weight:before {\n  content: \"\\f496\"; }\n\n.fa-weight-hanging:before {\n  content: \"\\f5cd\"; }\n\n.fa-weixin:before {\n  content: \"\\f1d7\"; }\n\n.fa-whatsapp:before {\n  content: \"\\f232\"; }\n\n.fa-whatsapp-square:before {\n  content: \"\\f40c\"; }\n\n.fa-wheelchair:before {\n  content: \"\\f193\"; }\n\n.fa-whmcs:before {\n  content: \"\\f40d\"; }\n\n.fa-wifi:before {\n  content: \"\\f1eb\"; }\n\n.fa-wikipedia-w:before {\n  content: \"\\f266\"; }\n\n.fa-wind:before {\n  content: \"\\f72e\"; }\n\n.fa-window-close:before {\n  content: \"\\f410\"; }\n\n.fa-window-maximize:before {\n  content: \"\\f2d0\"; }\n\n.fa-window-minimize:before {\n  content: \"\\f2d1\"; }\n\n.fa-window-restore:before {\n  content: \"\\f2d2\"; }\n\n.fa-windows:before {\n  content: \"\\f17a\"; }\n\n.fa-wine-bottle:before {\n  content: \"\\f72f\"; }\n\n.fa-wine-glass:before {\n  content: \"\\f4e3\"; }\n\n.fa-wine-glass-alt:before {\n  content: \"\\f5ce\"; }\n\n.fa-wix:before {\n  content: \"\\f5cf\"; }\n\n.fa-wizards-of-the-coast:before {\n  content: \"\\f730\"; }\n\n.fa-wolf-pack-battalion:before {\n  content: \"\\f514\"; }\n\n.fa-won-sign:before {\n  content: \"\\f159\"; }\n\n.fa-wordpress:before {\n  content: \"\\f19a\"; }\n\n.fa-wordpress-simple:before {\n  content: \"\\f411\"; }\n\n.fa-wpbeginner:before {\n  content: \"\\f297\"; }\n\n.fa-wpexplorer:before {\n  content: \"\\f2de\"; }\n\n.fa-wpforms:before {\n  content: \"\\f298\"; }\n\n.fa-wpressr:before {\n  content: \"\\f3e4\"; }\n\n.fa-wrench:before {\n  content: \"\\f0ad\"; }\n\n.fa-x-ray:before {\n  content: \"\\f497\"; }\n\n.fa-xbox:before {\n  content: \"\\f412\"; }\n\n.fa-xing:before {\n  content: \"\\f168\"; }\n\n.fa-xing-square:before {\n  content: \"\\f169\"; }\n\n.fa-y-combinator:before {\n  content: \"\\f23b\"; }\n\n.fa-yahoo:before {\n  content: \"\\f19e\"; }\n\n.fa-yammer:before {\n  content: \"\\f840\"; }\n\n.fa-yandex:before {\n  content: \"\\f413\"; }\n\n.fa-yandex-international:before {\n  content: \"\\f414\"; }\n\n.fa-yarn:before {\n  content: \"\\f7e3\"; }\n\n.fa-yelp:before {\n  content: \"\\f1e9\"; }\n\n.fa-yen-sign:before {\n  content: \"\\f157\"; }\n\n.fa-yin-yang:before {\n  content: \"\\f6ad\"; }\n\n.fa-yoast:before {\n  content: \"\\f2b1\"; }\n\n.fa-youtube:before {\n  content: \"\\f167\"; }\n\n.fa-youtube-square:before {\n  content: \"\\f431\"; }\n\n.fa-zhihu:before {\n  content: \"\\f63f\"; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n\n/*!\n * Font Awesome Free 5.10.1 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n@font-face {\n  font-family: 'Font Awesome 5 Free';\n  font-style: normal;\n  font-weight: 900;\n  font-display: auto;\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  src: url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\"); }\n\n.fa,\n.fas {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 900; }\n\n/*!\n * Bootstrap v4.0.0-beta (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\"; }\n  pre {\n    white-space: pre-wrap !important; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .badge {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\n@-ms-viewport {\n  width: device-width; }\n\narticle, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n\n[tabindex=\"-1\"]:focus {\n  outline: none !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: .5rem; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: bold; }\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\ndfn {\n  font-style: italic; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -.25em; }\n\nsup {\n  top: -.5em; }\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n  a:hover {\n    color: #0056b3;\n    text-decoration: underline; }\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\n  a:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover {\n    color: inherit;\n    text-decoration: none; }\n  a:not([href]):not([tabindex]):focus {\n    outline: 0; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\na,\narea,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\nsummary,\ntextarea {\n  touch-action: manipulation; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #868e96;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress {\n  vertical-align: baseline; }\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\n\nh1, .h1 {\n  font-size: 2.5rem; }\n\nh2, .h2 {\n  font-size: 2rem; }\n\nh3, .h3 {\n  font-size: 1.75rem; }\n\nh4, .h4 {\n  font-size: 1.5rem; }\n\nh5, .h5 {\n  font-size: 1.25rem; }\n\nh6, .h6 {\n  font-size: 1rem; }\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.1; }\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.1; }\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.1; }\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.1; }\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: normal; }\n\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline-item {\n  display: inline-block; }\n  .list-inline-item:not(:last-child) {\n    margin-right: 5px; }\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem; }\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #868e96; }\n  .blockquote-footer::before {\n    content: \"\\2014 \\00A0\"; }\n\n.img-fluid {\n  max-width: 100%;\n  height: auto; }\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0.25rem;\n  transition: all 0.2s ease-in-out;\n  max-width: 100%;\n  height: auto; }\n\n.figure {\n  display: inline-block; }\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1; }\n\n.figure-caption {\n  font-size: 90%;\n  color: #868e96; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: \"SFMono-Regular\", Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n\ncode {\n  padding: 0.2rem 0.4rem;\n  font-size: 90%;\n  color: #bd4147;\n  background-color: #f8f9fa;\n  border-radius: 0.25rem; }\n  a > code {\n    padding: 0;\n    color: inherit;\n    background-color: inherit; }\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 90%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem; }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold; }\n\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-size: 90%;\n  color: #212529; }\n  pre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    background-color: transparent;\n    border-radius: 0; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%; }\n  @media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n\n.container-fluid {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%; }\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n  .no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%; }\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n\n.col-1 {\n  flex: 0 0 8.33333%;\n  max-width: 8.33333%; }\n\n.col-2 {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-4 {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.col-5 {\n  flex: 0 0 41.66667%;\n  max-width: 41.66667%; }\n\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-7 {\n  flex: 0 0 58.33333%;\n  max-width: 58.33333%; }\n\n.col-8 {\n  flex: 0 0 66.66667%;\n  max-width: 66.66667%; }\n\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-10 {\n  flex: 0 0 83.33333%;\n  max-width: 83.33333%; }\n\n.col-11 {\n  flex: 0 0 91.66667%;\n  max-width: 91.66667%; }\n\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%; }\n\n.order-1 {\n  order: 1; }\n\n.order-2 {\n  order: 2; }\n\n.order-3 {\n  order: 3; }\n\n.order-4 {\n  order: 4; }\n\n.order-5 {\n  order: 5; }\n\n.order-6 {\n  order: 6; }\n\n.order-7 {\n  order: 7; }\n\n.order-8 {\n  order: 8; }\n\n.order-9 {\n  order: 9; }\n\n.order-10 {\n  order: 10; }\n\n.order-11 {\n  order: 11; }\n\n.order-12 {\n  order: 12; }\n\n@media (min-width: 576px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-sm-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-sm-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-sm-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-sm-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-1 {\n    order: 1; }\n  .order-sm-2 {\n    order: 2; }\n  .order-sm-3 {\n    order: 3; }\n  .order-sm-4 {\n    order: 4; }\n  .order-sm-5 {\n    order: 5; }\n  .order-sm-6 {\n    order: 6; }\n  .order-sm-7 {\n    order: 7; }\n  .order-sm-8 {\n    order: 8; }\n  .order-sm-9 {\n    order: 9; }\n  .order-sm-10 {\n    order: 10; }\n  .order-sm-11 {\n    order: 11; }\n  .order-sm-12 {\n    order: 12; } }\n\n@media (min-width: 768px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-md-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-md-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-md-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-md-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-1 {\n    order: 1; }\n  .order-md-2 {\n    order: 2; }\n  .order-md-3 {\n    order: 3; }\n  .order-md-4 {\n    order: 4; }\n  .order-md-5 {\n    order: 5; }\n  .order-md-6 {\n    order: 6; }\n  .order-md-7 {\n    order: 7; }\n  .order-md-8 {\n    order: 8; }\n  .order-md-9 {\n    order: 9; }\n  .order-md-10 {\n    order: 10; }\n  .order-md-11 {\n    order: 11; }\n  .order-md-12 {\n    order: 12; } }\n\n@media (min-width: 992px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-lg-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-lg-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-lg-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-1 {\n    order: 1; }\n  .order-lg-2 {\n    order: 2; }\n  .order-lg-3 {\n    order: 3; }\n  .order-lg-4 {\n    order: 4; }\n  .order-lg-5 {\n    order: 5; }\n  .order-lg-6 {\n    order: 6; }\n  .order-lg-7 {\n    order: 7; }\n  .order-lg-8 {\n    order: 8; }\n  .order-lg-9 {\n    order: 9; }\n  .order-lg-10 {\n    order: 10; }\n  .order-lg-11 {\n    order: 11; }\n  .order-lg-12 {\n    order: 12; } }\n\n@media (min-width: 1200px) {\n  .col-xl {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-xl-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-xl-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-xl-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-xl-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-1 {\n    order: 1; }\n  .order-xl-2 {\n    order: 2; }\n  .order-xl-3 {\n    order: 3; }\n  .order-xl-4 {\n    order: 4; }\n  .order-xl-5 {\n    order: 5; }\n  .order-xl-6 {\n    order: 6; }\n  .order-xl-7 {\n    order: 7; }\n  .order-xl-8 {\n    order: 8; }\n  .order-xl-9 {\n    order: 9; }\n  .order-xl-10 {\n    order: 10; }\n  .order-xl-11 {\n    order: 11; }\n  .order-xl-12 {\n    order: 12; } }\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent; }\n  .table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #e9ecef; }\n  .table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #e9ecef; }\n  .table tbody + tbody {\n    border-top: 2px solid #e9ecef; }\n  .table .table {\n    background-color: #fff; }\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n\n.table-bordered {\n  border: 1px solid #e9ecef; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #e9ecef; }\n  .table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #b8daff; }\n\n.table-hover .table-primary:hover {\n  background-color: #9fcdff; }\n  .table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #9fcdff; }\n\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #dddfe2; }\n\n.table-hover .table-secondary:hover {\n  background-color: #cfd2d6; }\n  .table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #cfd2d6; }\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #c3e6cb; }\n\n.table-hover .table-success:hover {\n  background-color: #b1dfbb; }\n  .table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #b1dfbb; }\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #bee5eb; }\n\n.table-hover .table-info:hover {\n  background-color: #abdde5; }\n  .table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #abdde5; }\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffeeba; }\n\n.table-hover .table-warning:hover {\n  background-color: #ffe8a1; }\n  .table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffe8a1; }\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f5c6cb; }\n\n.table-hover .table-danger:hover {\n  background-color: #f1b0b7; }\n  .table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #f1b0b7; }\n\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe; }\n\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n  .table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca; }\n\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n  .table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n  .table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n\n.thead-inverse th {\n  color: #fff;\n  background-color: #212529; }\n\n.thead-default th {\n  color: #495057;\n  background-color: #e9ecef; }\n\n.table-inverse {\n  color: #fff;\n  background-color: #212529; }\n  .table-inverse th,\n  .table-inverse td,\n  .table-inverse thead th {\n    border-color: #32383e; }\n  .table-inverse.table-bordered {\n    border: 0; }\n  .table-inverse.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n  .table-inverse.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n\n@media (max-width: 991px) {\n  .table-responsive {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive.table-bordered {\n      border: 0; } }\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #495057;\n  background-color: #fff;\n  background-image: none;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; }\n  .form-control::-ms-expand {\n    background-color: transparent;\n    border: 0; }\n  .form-control:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #80bdff;\n    outline: none; }\n  .form-control::placeholder {\n    color: #868e96;\n    opacity: 1; }\n  .form-control:disabled, .form-control[readonly] {\n    background-color: #e9ecef;\n    opacity: 1; }\n\nselect.form-control:not([size]):not([multiple]) {\n  height: calc(2.25rem + 2px); }\n\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff; }\n\n.form-control-file,\n.form-control-range {\n  display: block; }\n\n.col-form-label {\n  padding-top: calc(0.5rem - 1px * 2);\n  padding-bottom: calc(0.5rem - 1px * 2);\n  margin-bottom: 0; }\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem - 1px * 2);\n  padding-bottom: calc(0.5rem - 1px * 2);\n  font-size: 1.25rem; }\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem - 1px * 2);\n  padding-bottom: calc(0.25rem - 1px * 2);\n  font-size: 0.875rem; }\n\n.col-form-legend {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 0;\n  font-size: 1rem; }\n\n.form-control-plaintext {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  margin-bottom: 0;\n  line-height: 1.25;\n  border: solid transparent;\n  border-width: 1px 0; }\n  .form-control-plaintext.form-control-sm, .input-group-sm > .form-control-plaintext.form-control,\n  .input-group-sm > .form-control-plaintext.input-group-addon,\n  .input-group-sm > .input-group-btn > .form-control-plaintext.btn, .form-control-plaintext.form-control-lg, .input-group-lg > .form-control-plaintext.form-control,\n  .input-group-lg > .form-control-plaintext.input-group-addon,\n  .input-group-lg > .input-group-btn > .form-control-plaintext.btn {\n    padding-right: 0;\n    padding-left: 0; }\n\n.form-control-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\nselect.form-control-sm:not([size]):not([multiple]), .input-group-sm > select.form-control:not([size]):not([multiple]),\n.input-group-sm > select.input-group-addon:not([size]):not([multiple]),\n.input-group-sm > .input-group-btn > select.btn:not([size]):not([multiple]) {\n  height: calc(1.8125rem + 2px); }\n\n.form-control-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\nselect.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]),\n.input-group-lg > select.input-group-addon:not([size]):not([multiple]),\n.input-group-lg > .input-group-btn > select.btn:not([size]):not([multiple]) {\n  height: calc(2.875rem + 2px); }\n\n.form-group {\n  margin-bottom: 1rem; }\n\n.form-text {\n  display: block;\n  margin-top: 0.25rem; }\n\n.form-row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px; }\n  .form-row > .col,\n  .form-row > [class*=\"col-\"] {\n    padding-right: 5px;\n    padding-left: 5px; }\n\n.form-check {\n  position: relative;\n  display: block;\n  margin-bottom: 0.5rem; }\n  .form-check.disabled .form-check-label {\n    color: #868e96; }\n\n.form-check-label {\n  padding-left: 1.25rem;\n  margin-bottom: 0; }\n\n.form-check-input {\n  position: absolute;\n  margin-top: 0.25rem;\n  margin-left: -1.25rem; }\n\n.form-check-inline {\n  display: inline-block; }\n  .form-check-inline .form-check-label {\n    vertical-align: middle; }\n  .form-check-inline + .form-check-inline {\n    margin-left: 0.75rem; }\n\n.invalid-feedback {\n  display: none;\n  margin-top: .25rem;\n  font-size: .875rem;\n  color: #dc3545; }\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  width: 250px;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.8);\n  border-radius: .2rem; }\n\n.was-validated .form-control:valid, .form-control.is-valid, .was-validated\n.custom-select:valid,\n.custom-select.is-valid {\n  border-color: #28a745; }\n  .was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated\n  .custom-select:valid:focus,\n  .custom-select.is-valid:focus {\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n  .was-validated .form-control:valid ~ .invalid-feedback,\n  .was-validated .form-control:valid ~ .invalid-tooltip, .form-control.is-valid ~ .invalid-feedback,\n  .form-control.is-valid ~ .invalid-tooltip, .was-validated\n  .custom-select:valid ~ .invalid-feedback,\n  .was-validated\n  .custom-select:valid ~ .invalid-tooltip,\n  .custom-select.is-valid ~ .invalid-feedback,\n  .custom-select.is-valid ~ .invalid-tooltip {\n    display: block; }\n\n.was-validated .form-check-input:valid + .form-check-label, .form-check-input.is-valid + .form-check-label {\n  color: #28a745; }\n\n.was-validated .custom-control-input:valid ~ .custom-control-indicator, .custom-control-input.is-valid ~ .custom-control-indicator {\n  background-color: rgba(40, 167, 69, 0.25); }\n\n.was-validated .custom-control-input:valid ~ .custom-control-description, .custom-control-input.is-valid ~ .custom-control-description {\n  color: #28a745; }\n\n.was-validated .custom-file-input:valid ~ .custom-file-control, .custom-file-input.is-valid ~ .custom-file-control {\n  border-color: #28a745; }\n  .was-validated .custom-file-input:valid ~ .custom-file-control::before, .custom-file-input.is-valid ~ .custom-file-control::before {\n    border-color: inherit; }\n\n.was-validated .custom-file-input:valid:focus, .custom-file-input.is-valid:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated\n.custom-select:invalid,\n.custom-select.is-invalid {\n  border-color: #dc3545; }\n  .was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated\n  .custom-select:invalid:focus,\n  .custom-select.is-invalid:focus {\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n  .was-validated .form-control:invalid ~ .invalid-feedback,\n  .was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,\n  .form-control.is-invalid ~ .invalid-tooltip, .was-validated\n  .custom-select:invalid ~ .invalid-feedback,\n  .was-validated\n  .custom-select:invalid ~ .invalid-tooltip,\n  .custom-select.is-invalid ~ .invalid-feedback,\n  .custom-select.is-invalid ~ .invalid-tooltip {\n    display: block; }\n\n.was-validated .form-check-input:invalid + .form-check-label, .form-check-input.is-invalid + .form-check-label {\n  color: #dc3545; }\n\n.was-validated .custom-control-input:invalid ~ .custom-control-indicator, .custom-control-input.is-invalid ~ .custom-control-indicator {\n  background-color: rgba(220, 53, 69, 0.25); }\n\n.was-validated .custom-control-input:invalid ~ .custom-control-description, .custom-control-input.is-invalid ~ .custom-control-description {\n  color: #dc3545; }\n\n.was-validated .custom-file-input:invalid ~ .custom-file-control, .custom-file-input.is-invalid ~ .custom-file-control {\n  border-color: #dc3545; }\n  .was-validated .custom-file-input:invalid ~ .custom-file-control::before, .custom-file-input.is-invalid ~ .custom-file-control::before {\n    border-color: inherit; }\n\n.was-validated .custom-file-input:invalid:focus, .custom-file-input.is-invalid:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.form-inline {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center; }\n  .form-inline .form-check {\n    width: 100%; }\n  @media (min-width: 576px) {\n    .form-inline label {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 0; }\n    .form-inline .form-group {\n      display: flex;\n      flex: 0 0 auto;\n      flex-flow: row wrap;\n      align-items: center;\n      margin-bottom: 0; }\n    .form-inline .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .form-inline .form-control-plaintext {\n      display: inline-block; }\n    .form-inline .input-group {\n      width: auto; }\n    .form-inline .form-control-label {\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .form-inline .form-check {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: auto;\n      margin-top: 0;\n      margin-bottom: 0; }\n    .form-inline .form-check-label {\n      padding-left: 0; }\n    .form-inline .form-check-input {\n      position: relative;\n      margin-top: 0;\n      margin-right: 0.25rem;\n      margin-left: 0; }\n    .form-inline .custom-control {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding-left: 0; }\n    .form-inline .custom-control-indicator {\n      position: static;\n      display: inline-block;\n      margin-right: 0.25rem;\n      vertical-align: text-bottom; }\n    .form-inline .has-feedback .form-control-feedback {\n      top: 0; } }\n\n.btn {\n  display: inline-block;\n  font-weight: normal;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.5rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.25;\n  border-radius: 0.25rem;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  .btn:focus, .btn:hover {\n    text-decoration: none; }\n  .btn:focus, .btn.focus {\n    outline: 0;\n    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25); }\n  .btn.disabled, .btn:disabled {\n    opacity: .65; }\n  .btn:active, .btn.active {\n    background-image: none; }\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #0069d9;\n    border-color: #0062cc; }\n  .btn-primary:focus, .btn-primary.focus {\n    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5); }\n  .btn-primary.disabled, .btn-primary:disabled {\n    background-color: #007bff;\n    border-color: #007bff; }\n  .btn-primary:active, .btn-primary.active,\n  .show > .btn-primary.dropdown-toggle {\n    background-color: #0069d9;\n    background-image: none;\n    border-color: #0062cc; }\n\n.btn-secondary {\n  color: #fff;\n  background-color: #868e96;\n  border-color: #868e96; }\n  .btn-secondary:hover {\n    color: #fff;\n    background-color: #727b84;\n    border-color: #6c757d; }\n  .btn-secondary:focus, .btn-secondary.focus {\n    box-shadow: 0 0 0 3px rgba(134, 142, 150, 0.5); }\n  .btn-secondary.disabled, .btn-secondary:disabled {\n    background-color: #868e96;\n    border-color: #868e96; }\n  .btn-secondary:active, .btn-secondary.active,\n  .show > .btn-secondary.dropdown-toggle {\n    background-color: #727b84;\n    background-image: none;\n    border-color: #6c757d; }\n\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #218838;\n    border-color: #1e7e34; }\n  .btn-success:focus, .btn-success.focus {\n    box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5); }\n  .btn-success.disabled, .btn-success:disabled {\n    background-color: #28a745;\n    border-color: #28a745; }\n  .btn-success:active, .btn-success.active,\n  .show > .btn-success.dropdown-toggle {\n    background-color: #218838;\n    background-image: none;\n    border-color: #1e7e34; }\n\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #138496;\n    border-color: #117a8b; }\n  .btn-info:focus, .btn-info.focus {\n    box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.5); }\n  .btn-info.disabled, .btn-info:disabled {\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n  .btn-info:active, .btn-info.active,\n  .show > .btn-info.dropdown-toggle {\n    background-color: #138496;\n    background-image: none;\n    border-color: #117a8b; }\n\n.btn-warning {\n  color: #111;\n  background-color: #ffc107;\n  border-color: #ffc107; }\n  .btn-warning:hover {\n    color: #111;\n    background-color: #e0a800;\n    border-color: #d39e00; }\n  .btn-warning:focus, .btn-warning.focus {\n    box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.5); }\n  .btn-warning.disabled, .btn-warning:disabled {\n    background-color: #ffc107;\n    border-color: #ffc107; }\n  .btn-warning:active, .btn-warning.active,\n  .show > .btn-warning.dropdown-toggle {\n    background-color: #e0a800;\n    background-image: none;\n    border-color: #d39e00; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #c82333;\n    border-color: #bd2130; }\n  .btn-danger:focus, .btn-danger.focus {\n    box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5); }\n  .btn-danger.disabled, .btn-danger:disabled {\n    background-color: #dc3545;\n    border-color: #dc3545; }\n  .btn-danger:active, .btn-danger.active,\n  .show > .btn-danger.dropdown-toggle {\n    background-color: #c82333;\n    background-image: none;\n    border-color: #bd2130; }\n\n.btn-light {\n  color: #111;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa; }\n  .btn-light:hover {\n    color: #111;\n    background-color: #e2e6ea;\n    border-color: #dae0e5; }\n  .btn-light:focus, .btn-light.focus {\n    box-shadow: 0 0 0 3px rgba(248, 249, 250, 0.5); }\n  .btn-light.disabled, .btn-light:disabled {\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n  .btn-light:active, .btn-light.active,\n  .show > .btn-light.dropdown-toggle {\n    background-color: #e2e6ea;\n    background-image: none;\n    border-color: #dae0e5; }\n\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40; }\n  .btn-dark:hover {\n    color: #fff;\n    background-color: #23272b;\n    border-color: #1d2124; }\n  .btn-dark:focus, .btn-dark.focus {\n    box-shadow: 0 0 0 3px rgba(52, 58, 64, 0.5); }\n  .btn-dark.disabled, .btn-dark:disabled {\n    background-color: #343a40;\n    border-color: #343a40; }\n  .btn-dark:active, .btn-dark.active,\n  .show > .btn-dark.dropdown-toggle {\n    background-color: #23272b;\n    background-image: none;\n    border-color: #1d2124; }\n\n.btn-outline-primary {\n  color: #007bff;\n  background-color: transparent;\n  background-image: none;\n  border-color: #007bff; }\n  .btn-outline-primary:hover {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n  .btn-outline-primary:focus, .btn-outline-primary.focus {\n    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5); }\n  .btn-outline-primary.disabled, .btn-outline-primary:disabled {\n    color: #007bff;\n    background-color: transparent; }\n  .btn-outline-primary:active, .btn-outline-primary.active,\n  .show > .btn-outline-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n\n.btn-outline-secondary {\n  color: #868e96;\n  background-color: transparent;\n  background-image: none;\n  border-color: #868e96; }\n  .btn-outline-secondary:hover {\n    color: #fff;\n    background-color: #868e96;\n    border-color: #868e96; }\n  .btn-outline-secondary:focus, .btn-outline-secondary.focus {\n    box-shadow: 0 0 0 3px rgba(134, 142, 150, 0.5); }\n  .btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n    color: #868e96;\n    background-color: transparent; }\n  .btn-outline-secondary:active, .btn-outline-secondary.active,\n  .show > .btn-outline-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #868e96;\n    border-color: #868e96; }\n\n.btn-outline-success {\n  color: #28a745;\n  background-color: transparent;\n  background-image: none;\n  border-color: #28a745; }\n  .btn-outline-success:hover {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n  .btn-outline-success:focus, .btn-outline-success.focus {\n    box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5); }\n  .btn-outline-success.disabled, .btn-outline-success:disabled {\n    color: #28a745;\n    background-color: transparent; }\n  .btn-outline-success:active, .btn-outline-success.active,\n  .show > .btn-outline-success.dropdown-toggle {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n\n.btn-outline-info {\n  color: #17a2b8;\n  background-color: transparent;\n  background-image: none;\n  border-color: #17a2b8; }\n  .btn-outline-info:hover {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n  .btn-outline-info:focus, .btn-outline-info.focus {\n    box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.5); }\n  .btn-outline-info.disabled, .btn-outline-info:disabled {\n    color: #17a2b8;\n    background-color: transparent; }\n  .btn-outline-info:active, .btn-outline-info.active,\n  .show > .btn-outline-info.dropdown-toggle {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n\n.btn-outline-warning {\n  color: #ffc107;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffc107; }\n  .btn-outline-warning:hover {\n    color: #fff;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n  .btn-outline-warning:focus, .btn-outline-warning.focus {\n    box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.5); }\n  .btn-outline-warning.disabled, .btn-outline-warning:disabled {\n    color: #ffc107;\n    background-color: transparent; }\n  .btn-outline-warning:active, .btn-outline-warning.active,\n  .show > .btn-outline-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n\n.btn-outline-danger {\n  color: #dc3545;\n  background-color: transparent;\n  background-image: none;\n  border-color: #dc3545; }\n  .btn-outline-danger:hover {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n  .btn-outline-danger:focus, .btn-outline-danger.focus {\n    box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5); }\n  .btn-outline-danger.disabled, .btn-outline-danger:disabled {\n    color: #dc3545;\n    background-color: transparent; }\n  .btn-outline-danger:active, .btn-outline-danger.active,\n  .show > .btn-outline-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n\n.btn-outline-light {\n  color: #f8f9fa;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f8f9fa; }\n  .btn-outline-light:hover {\n    color: #fff;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n  .btn-outline-light:focus, .btn-outline-light.focus {\n    box-shadow: 0 0 0 3px rgba(248, 249, 250, 0.5); }\n  .btn-outline-light.disabled, .btn-outline-light:disabled {\n    color: #f8f9fa;\n    background-color: transparent; }\n  .btn-outline-light:active, .btn-outline-light.active,\n  .show > .btn-outline-light.dropdown-toggle {\n    color: #fff;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n\n.btn-outline-dark {\n  color: #343a40;\n  background-color: transparent;\n  background-image: none;\n  border-color: #343a40; }\n  .btn-outline-dark:hover {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n  .btn-outline-dark:focus, .btn-outline-dark.focus {\n    box-shadow: 0 0 0 3px rgba(52, 58, 64, 0.5); }\n  .btn-outline-dark.disabled, .btn-outline-dark:disabled {\n    color: #343a40;\n    background-color: transparent; }\n  .btn-outline-dark:active, .btn-outline-dark.active,\n  .show > .btn-outline-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n\n.btn-link {\n  font-weight: normal;\n  color: #007bff;\n  border-radius: 0; }\n  .btn-link, .btn-link:active, .btn-link.active, .btn-link:disabled {\n    background-color: transparent; }\n  .btn-link, .btn-link:focus, .btn-link:active {\n    border-color: transparent;\n    box-shadow: none; }\n  .btn-link:hover {\n    border-color: transparent; }\n  .btn-link:focus, .btn-link:hover {\n    color: #0056b3;\n    text-decoration: underline;\n    background-color: transparent; }\n  .btn-link:disabled {\n    color: #868e96; }\n    .btn-link:disabled:focus, .btn-link:disabled:hover {\n      text-decoration: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 0.5rem; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n\n.fade {\n  opacity: 0;\n  transition: opacity 0.15s linear; }\n  .fade.show {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n  .collapse.show {\n    display: block; }\n\ntr.collapse.show {\n  display: table-row; }\n\ntbody.collapse.show {\n  display: table-row-group; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease; }\n\n.dropup,\n.dropdown {\n  position: relative; }\n\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-left: 0.3em solid transparent; }\n\n.dropdown-toggle:empty::after {\n  margin-left: 0; }\n\n.dropup .dropdown-menu {\n  margin-top: 0;\n  margin-bottom: 0.125rem; }\n\n.dropup .dropdown-toggle::after {\n  border-top: 0;\n  border-bottom: 0.3em solid; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef; }\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: normal;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background: none;\n  border: 0; }\n  .dropdown-item:focus, .dropdown-item:hover {\n    color: #16181b;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n  .dropdown-item.active, .dropdown-item:active {\n    color: #fff;\n    text-decoration: none;\n    background-color: #007bff; }\n  .dropdown-item.disabled, .dropdown-item:disabled {\n    color: #868e96;\n    background-color: transparent; }\n\n.show > a {\n  outline: 0; }\n\n.dropdown-menu.show {\n  display: block; }\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #868e96;\n  white-space: nowrap; }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    flex: 0 1 auto;\n    margin-bottom: 0; }\n    .btn-group > .btn:hover,\n    .btn-group-vertical > .btn:hover {\n      z-index: 2; }\n    .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 2; }\n  .btn-group .btn + .btn,\n  .btn-group .btn + .btn-group,\n  .btn-group .btn-group + .btn,\n  .btn-group .btn-group + .btn-group,\n  .btn-group-vertical .btn + .btn,\n  .btn-group-vertical .btn + .btn-group,\n  .btn-group-vertical .btn-group + .btn,\n  .btn-group-vertical .btn-group + .btn-group {\n    margin-left: -1px; }\n\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n  .btn-toolbar .input-group {\n    width: auto; }\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group > .btn-group {\n  float: left; }\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn + .dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem; }\n  .btn + .dropdown-toggle-split::after {\n    margin-left: 0; }\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem; }\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem; }\n\n.btn-group-vertical {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center; }\n  .btn-group-vertical .btn,\n  .btn-group-vertical .btn-group {\n    width: 100%; }\n  .btn-group-vertical > .btn + .btn,\n  .btn-group-vertical > .btn + .btn-group,\n  .btn-group-vertical > .btn-group + .btn,\n  .btn-group-vertical > .btn-group + .btn-group {\n    margin-top: -1px;\n    margin-left: 0; }\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: flex;\n  width: 100%; }\n  .input-group .form-control {\n    position: relative;\n    z-index: 2;\n    flex: 1 1 auto;\n    width: 1%;\n    margin-bottom: 0; }\n    .input-group .form-control:focus, .input-group .form-control:active, .input-group .form-control:hover {\n      z-index: 3; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: flex;\n  align-items: center; }\n  .input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n\n.input-group-addon,\n.input-group-btn {\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.input-group-addon {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  color: #495057;\n  text-align: center;\n  background-color: #e9ecef;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n  .input-group-addon.form-control-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.875rem;\n    border-radius: 0.2rem; }\n  .input-group-addon.form-control-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 0.5rem 1rem;\n    font-size: 1.25rem;\n    border-radius: 0.3rem; }\n  .input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group .form-control:not(:last-child),\n.input-group-addon:not(:last-child),\n.input-group-btn:not(:last-child) > .btn,\n.input-group-btn:not(:last-child) > .btn-group > .btn,\n.input-group-btn:not(:last-child) > .dropdown-toggle,\n.input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.input-group-addon:not(:last-child) {\n  border-right: 0; }\n\n.input-group .form-control:not(:first-child),\n.input-group-addon:not(:first-child),\n.input-group-btn:not(:first-child) > .btn,\n.input-group-btn:not(:first-child) > .btn-group > .btn,\n.input-group-btn:not(:first-child) > .dropdown-toggle,\n.input-group-btn:not(:last-child) > .btn:not(:first-child),\n.input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.form-control + .input-group-addon:not(:first-child) {\n  border-left: 0; }\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n  .input-group-btn > .btn {\n    position: relative;\n    background-clip: padding-box;\n    border: 1px solid rgba(0, 0, 0, 0.15); }\n    .input-group-btn > .btn + .btn {\n      margin-left: -1px; }\n    .input-group-btn > .btn:focus, .input-group-btn > .btn:active, .input-group-btn > .btn:hover {\n      z-index: 3; }\n  .input-group-btn:not(:last-child) > .btn,\n  .input-group-btn:not(:last-child) > .btn-group {\n    margin-right: -1px; }\n  .input-group-btn:not(:first-child) > .btn,\n  .input-group-btn:not(:first-child) > .btn-group {\n    z-index: 2;\n    margin-left: -1px; }\n    .input-group-btn:not(:first-child) > .btn:focus, .input-group-btn:not(:first-child) > .btn:active, .input-group-btn:not(:first-child) > .btn:hover,\n    .input-group-btn:not(:first-child) > .btn-group:focus,\n    .input-group-btn:not(:first-child) > .btn-group:active,\n    .input-group-btn:not(:first-child) > .btn-group:hover {\n      z-index: 3; }\n\n.custom-control {\n  position: relative;\n  display: inline-flex;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n  margin-right: 1rem; }\n\n.custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0; }\n  .custom-control-input:checked ~ .custom-control-indicator {\n    color: #fff;\n    background-color: #007bff; }\n  .custom-control-input:focus ~ .custom-control-indicator {\n    box-shadow: 0 0 0 1px #fff, 0 0 0 3px #007bff; }\n  .custom-control-input:active ~ .custom-control-indicator {\n    color: #fff;\n    background-color: #b3d7ff; }\n  .custom-control-input:disabled ~ .custom-control-indicator {\n    background-color: #e9ecef; }\n  .custom-control-input:disabled ~ .custom-control-description {\n    color: #868e96; }\n\n.custom-control-indicator {\n  position: absolute;\n  top: 0.25rem;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  user-select: none;\n  background-color: #ddd;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%; }\n\n.custom-checkbox .custom-control-indicator {\n  border-radius: 0.25rem; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-indicator {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\"); }\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-indicator {\n  background-color: #007bff;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\"); }\n\n.custom-radio .custom-control-indicator {\n  border-radius: 50%; }\n\n.custom-radio .custom-control-input:checked ~ .custom-control-indicator {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\"); }\n\n.custom-controls-stacked {\n  display: flex;\n  flex-direction: column; }\n  .custom-controls-stacked .custom-control {\n    margin-bottom: 0.25rem; }\n    .custom-controls-stacked .custom-control + .custom-control {\n      margin-left: 0; }\n\n.custom-select {\n  display: inline-block;\n  max-width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.25;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-clip: padding-box;\n  background-size: 8px 10px;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n  appearance: none; }\n  .custom-select:focus {\n    border-color: #80bdff;\n    outline: none; }\n    .custom-select:focus::-ms-value {\n      color: #495057;\n      background-color: #fff; }\n  .custom-select:disabled {\n    color: #868e96;\n    background-color: #e9ecef; }\n  .custom-select::-ms-expand {\n    opacity: 0; }\n\n.custom-select-sm {\n  height: calc(1.8125rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%; }\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  max-width: 100%;\n  height: calc(2.25rem + 2px);\n  margin-bottom: 0; }\n\n.custom-file-input {\n  min-width: 14rem;\n  max-width: 100%;\n  height: calc(2.25rem + 2px);\n  margin: 0;\n  opacity: 0; }\n  .custom-file-input:focus ~ .custom-file-control {\n    box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #007bff; }\n\n.custom-file-control {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: calc(2.25rem + 2px);\n  padding: 0.5rem 0.75rem;\n  overflow: hidden;\n  line-height: 1.25;\n  color: #495057;\n  pointer-events: none;\n  user-select: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n  .custom-file-control:lang(en):empty::after {\n    content: \"Choose file...\"; }\n  .custom-file-control::before {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 6;\n    display: block;\n    height: calc(2.25rem + 2px);\n    padding: 0.5rem 0.75rem;\n    line-height: 1.25;\n    color: #495057;\n    background-color: #e9ecef;\n    border-left: 1px solid rgba(0, 0, 0, 0.15); }\n  .custom-file-control:lang(en)::before {\n    content: \"Browse\"; }\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem; }\n  .nav-link:focus, .nav-link:hover {\n    text-decoration: none; }\n  .nav-link.disabled {\n    color: #868e96; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs .nav-item {\n    margin-bottom: -1px; }\n  .nav-tabs .nav-link {\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n    .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\n      border-color: #e9ecef #e9ecef #ddd; }\n    .nav-tabs .nav-link.disabled {\n      color: #868e96;\n      background-color: transparent;\n      border-color: transparent; }\n  .nav-tabs .nav-link.active,\n  .nav-tabs .nav-item.show .nav-link {\n    color: #495057;\n    background-color: #fff;\n    border-color: #ddd #ddd #fff; }\n  .nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.nav-pills .nav-link {\n  border-radius: 0.25rem; }\n  .nav-pills .nav-link.active,\n  .show > .nav-pills .nav-link {\n    color: #fff;\n    background-color: #007bff; }\n\n.nav-fill .nav-item {\n  flex: 1 1 auto;\n  text-align: center; }\n\n.nav-justified .nav-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center; }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem; }\n  .navbar > .container,\n  .navbar > .container-fluid {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between; }\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n  .navbar-brand:focus, .navbar-brand:hover {\n    text-decoration: none; }\n\n.navbar-nav {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n  .navbar-nav .nav-link {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n\n.navbar-collapse {\n  flex-basis: 100%;\n  align-items: center; }\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  .navbar-toggler:focus, .navbar-toggler:hover {\n    text-decoration: none; }\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%; }\n\n@media (max-width: 575px) {\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-sm .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-sm .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-sm > .container,\n    .navbar-expand-sm > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-sm .navbar-collapse {\n      display: flex !important; }\n    .navbar-expand-sm .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 767px) {\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-md .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-md .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-md .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-md .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-md > .container,\n    .navbar-expand-md > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-md .navbar-collapse {\n      display: flex !important; }\n    .navbar-expand-md .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 991px) {\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-lg .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-lg .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-lg > .container,\n    .navbar-expand-lg > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-lg .navbar-collapse {\n      display: flex !important; }\n    .navbar-expand-lg .navbar-toggler {\n      display: none; } }\n\n@media (max-width: 1199px) {\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-xl .navbar-nav {\n      flex-direction: row; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-xl .navbar-nav .nav-link {\n        padding-right: .5rem;\n        padding-left: .5rem; }\n    .navbar-expand-xl > .container,\n    .navbar-expand-xl > .container-fluid {\n      flex-wrap: nowrap; }\n    .navbar-expand-xl .navbar-collapse {\n      display: flex !important; }\n    .navbar-expand-xl .navbar-toggler {\n      display: none; } }\n\n.navbar-expand {\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start; }\n  .navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-expand .navbar-nav {\n    flex-direction: row; }\n    .navbar-expand .navbar-nav .dropdown-menu {\n      position: absolute; }\n    .navbar-expand .navbar-nav .dropdown-menu-right {\n      right: 0;\n      left: auto; }\n    .navbar-expand .navbar-nav .nav-link {\n      padding-right: .5rem;\n      padding-left: .5rem; }\n  .navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    flex-wrap: nowrap; }\n  .navbar-expand .navbar-collapse {\n    display: flex !important; }\n  .navbar-expand .navbar-toggler {\n    display: none; }\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9); }\n  .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {\n    color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n    color: rgba(0, 0, 0, 0.7); }\n  .navbar-light .navbar-nav .nav-link.disabled {\n    color: rgba(0, 0, 0, 0.3); }\n\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1); }\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5); }\n\n.navbar-dark .navbar-brand {\n  color: white; }\n  .navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover {\n    color: white; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {\n    color: rgba(255, 255, 255, 0.75); }\n  .navbar-dark .navbar-nav .nav-link.disabled {\n    color: rgba(255, 255, 255, 0.25); }\n\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: white; }\n\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5); }\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem; }\n\n.card-body {\n  flex: 1 1 auto;\n  padding: 1.25rem; }\n\n.card-title {\n  margin-bottom: 0.75rem; }\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0; }\n\n.card-text:last-child {\n  margin-bottom: 0; }\n\n.card-link:hover {\n  text-decoration: none; }\n\n.card-link + .card-link {\n  margin-left: 1.25rem; }\n\n.card > .list-group:first-child .list-group-item:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem; }\n\n.card > .list-group:last-child .list-group-item:last-child {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125); }\n  .card-header:first-child {\n    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0; }\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125); }\n  .card-footer:last-child {\n    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px); }\n\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0; }\n\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem; }\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem; }\n\n.card-img {\n  width: 100%;\n  border-radius: calc(0.25rem - 1px); }\n\n.card-img-top {\n  width: 100%;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px); }\n\n.card-img-bottom {\n  width: 100%;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px); }\n\n@media (min-width: 576px) {\n  .card-deck {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px; }\n    .card-deck .card {\n      display: flex;\n      flex: 1 0 0%;\n      flex-direction: column;\n      margin-right: 15px;\n      margin-left: 15px; } }\n\n@media (min-width: 576px) {\n  .card-group {\n    display: flex;\n    flex-flow: row wrap; }\n    .card-group .card {\n      flex: 1 0 0%; }\n      .card-group .card + .card {\n        margin-left: 0;\n        border-left: 0; }\n      .card-group .card:first-child {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0; }\n        .card-group .card:first-child .card-img-top {\n          border-top-right-radius: 0; }\n        .card-group .card:first-child .card-img-bottom {\n          border-bottom-right-radius: 0; }\n      .card-group .card:last-child {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0; }\n        .card-group .card:last-child .card-img-top {\n          border-top-left-radius: 0; }\n        .card-group .card:last-child .card-img-bottom {\n          border-bottom-left-radius: 0; }\n      .card-group .card:not(:first-child):not(:last-child) {\n        border-radius: 0; }\n        .card-group .card:not(:first-child):not(:last-child) .card-img-top,\n        .card-group .card:not(:first-child):not(:last-child) .card-img-bottom {\n          border-radius: 0; } }\n\n.card-columns .card {\n  margin-bottom: 0.75rem; }\n\n@media (min-width: 576px) {\n  .card-columns {\n    column-count: 3;\n    column-gap: 1.25rem; }\n    .card-columns .card {\n      display: inline-block;\n      width: 100%; } }\n\n.breadcrumb {\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n  .breadcrumb::after {\n    display: block;\n    clear: both;\n    content: \"\"; }\n\n.breadcrumb-item {\n  float: left; }\n  .breadcrumb-item + .breadcrumb-item::before {\n    display: inline-block;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    color: #868e96;\n    content: \"/\"; }\n  .breadcrumb-item + .breadcrumb-item:hover::before {\n    text-decoration: underline; }\n  .breadcrumb-item + .breadcrumb-item:hover::before {\n    text-decoration: none; }\n  .breadcrumb-item.active {\n    color: #868e96; }\n\n.pagination {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem; }\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n.page-item.active .page-link {\n  z-index: 2;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n\n.page-item.disabled .page-link {\n  color: #868e96;\n  pointer-events: none;\n  background-color: #fff;\n  border-color: #ddd; }\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n  .page-link:focus, .page-link:hover {\n    color: #0056b3;\n    text-decoration: none;\n    background-color: #e9ecef;\n    border-color: #ddd; }\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem; }\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem; }\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem; }\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem; }\n\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem; }\n  .badge:empty {\n    display: none; }\n\n.btn .badge {\n  position: relative;\n  top: -1px; }\n\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem; }\n\n.badge-primary {\n  color: #fff;\n  background-color: #007bff; }\n  .badge-primary[href]:focus, .badge-primary[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #0062cc; }\n\n.badge-secondary {\n  color: #fff;\n  background-color: #868e96; }\n  .badge-secondary[href]:focus, .badge-secondary[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #6c757d; }\n\n.badge-success {\n  color: #fff;\n  background-color: #28a745; }\n  .badge-success[href]:focus, .badge-success[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #1e7e34; }\n\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8; }\n  .badge-info[href]:focus, .badge-info[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #117a8b; }\n\n.badge-warning {\n  color: #111;\n  background-color: #ffc107; }\n  .badge-warning[href]:focus, .badge-warning[href]:hover {\n    color: #111;\n    text-decoration: none;\n    background-color: #d39e00; }\n\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545; }\n  .badge-danger[href]:focus, .badge-danger[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #bd2130; }\n\n.badge-light {\n  color: #111;\n  background-color: #f8f9fa; }\n  .badge-light[href]:focus, .badge-light[href]:hover {\n    color: #111;\n    text-decoration: none;\n    background-color: #dae0e5; }\n\n.badge-dark {\n  color: #fff;\n  background-color: #343a40; }\n  .badge-dark[href]:focus, .badge-dark[href]:hover {\n    color: #fff;\n    text-decoration: none;\n    background-color: #1d2124; }\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem; }\n  @media (min-width: 576px) {\n    .jumbotron {\n      padding: 4rem 2rem; } }\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0; }\n\n.alert {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n\n.alert-heading {\n  color: inherit; }\n\n.alert-link {\n  font-weight: bold; }\n\n.alert-dismissible .close {\n  position: relative;\n  top: -0.75rem;\n  right: -1.25rem;\n  padding: 0.75rem 1.25rem;\n  color: inherit; }\n\n.alert-primary {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff; }\n  .alert-primary hr {\n    border-top-color: #9fcdff; }\n  .alert-primary .alert-link {\n    color: #002752; }\n\n.alert-secondary {\n  color: #464a4e;\n  background-color: #e7e8ea;\n  border-color: #dddfe2; }\n  .alert-secondary hr {\n    border-top-color: #cfd2d6; }\n  .alert-secondary .alert-link {\n    color: #2e3133; }\n\n.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb; }\n  .alert-success hr {\n    border-top-color: #b1dfbb; }\n  .alert-success .alert-link {\n    color: #0b2e13; }\n\n.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb; }\n  .alert-info hr {\n    border-top-color: #abdde5; }\n  .alert-info .alert-link {\n    color: #062c33; }\n\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba; }\n  .alert-warning hr {\n    border-top-color: #ffe8a1; }\n  .alert-warning .alert-link {\n    color: #533f03; }\n\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb; }\n  .alert-danger hr {\n    border-top-color: #f1b0b7; }\n  .alert-danger .alert-link {\n    color: #491217; }\n\n.alert-light {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe; }\n  .alert-light hr {\n    border-top-color: #ececf6; }\n  .alert-light .alert-link {\n    color: #686868; }\n\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca; }\n  .alert-dark hr {\n    border-top-color: #b9bbbe; }\n  .alert-dark .alert-link {\n    color: #040505; }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n\n.progress-bar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #007bff; }\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n\n.progress-bar-animated {\n  animation: progress-bar-stripes 1s linear infinite; }\n\n.media {\n  display: flex;\n  align-items: flex-start; }\n\n.media-body {\n  flex: 1; }\n\n.list-group {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0; }\n\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit; }\n  .list-group-item-action:focus, .list-group-item-action:hover {\n    color: #495057;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n  .list-group-item-action:active {\n    color: #212529;\n    background-color: #e9ecef; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n  .list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n  .list-group-item:focus, .list-group-item:hover {\n    text-decoration: none; }\n  .list-group-item.disabled, .list-group-item:disabled {\n    color: #868e96;\n    background-color: #fff; }\n  .list-group-item.active {\n    z-index: 2;\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n\n.list-group-flush .list-group-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0; }\n\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0; }\n\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom: 0; }\n\n.list-group-item-primary {\n  color: #004085;\n  background-color: #b8daff; }\n\na.list-group-item-primary,\nbutton.list-group-item-primary {\n  color: #004085; }\n  a.list-group-item-primary:focus, a.list-group-item-primary:hover,\n  button.list-group-item-primary:focus,\n  button.list-group-item-primary:hover {\n    color: #004085;\n    background-color: #9fcdff; }\n  a.list-group-item-primary.active,\n  button.list-group-item-primary.active {\n    color: #fff;\n    background-color: #004085;\n    border-color: #004085; }\n\n.list-group-item-secondary {\n  color: #464a4e;\n  background-color: #dddfe2; }\n\na.list-group-item-secondary,\nbutton.list-group-item-secondary {\n  color: #464a4e; }\n  a.list-group-item-secondary:focus, a.list-group-item-secondary:hover,\n  button.list-group-item-secondary:focus,\n  button.list-group-item-secondary:hover {\n    color: #464a4e;\n    background-color: #cfd2d6; }\n  a.list-group-item-secondary.active,\n  button.list-group-item-secondary.active {\n    color: #fff;\n    background-color: #464a4e;\n    border-color: #464a4e; }\n\n.list-group-item-success {\n  color: #155724;\n  background-color: #c3e6cb; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #155724; }\n  a.list-group-item-success:focus, a.list-group-item-success:hover,\n  button.list-group-item-success:focus,\n  button.list-group-item-success:hover {\n    color: #155724;\n    background-color: #b1dfbb; }\n  a.list-group-item-success.active,\n  button.list-group-item-success.active {\n    color: #fff;\n    background-color: #155724;\n    border-color: #155724; }\n\n.list-group-item-info {\n  color: #0c5460;\n  background-color: #bee5eb; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #0c5460; }\n  a.list-group-item-info:focus, a.list-group-item-info:hover,\n  button.list-group-item-info:focus,\n  button.list-group-item-info:hover {\n    color: #0c5460;\n    background-color: #abdde5; }\n  a.list-group-item-info.active,\n  button.list-group-item-info.active {\n    color: #fff;\n    background-color: #0c5460;\n    border-color: #0c5460; }\n\n.list-group-item-warning {\n  color: #856404;\n  background-color: #ffeeba; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #856404; }\n  a.list-group-item-warning:focus, a.list-group-item-warning:hover,\n  button.list-group-item-warning:focus,\n  button.list-group-item-warning:hover {\n    color: #856404;\n    background-color: #ffe8a1; }\n  a.list-group-item-warning.active,\n  button.list-group-item-warning.active {\n    color: #fff;\n    background-color: #856404;\n    border-color: #856404; }\n\n.list-group-item-danger {\n  color: #721c24;\n  background-color: #f5c6cb; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #721c24; }\n  a.list-group-item-danger:focus, a.list-group-item-danger:hover,\n  button.list-group-item-danger:focus,\n  button.list-group-item-danger:hover {\n    color: #721c24;\n    background-color: #f1b0b7; }\n  a.list-group-item-danger.active,\n  button.list-group-item-danger.active {\n    color: #fff;\n    background-color: #721c24;\n    border-color: #721c24; }\n\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe; }\n\na.list-group-item-light,\nbutton.list-group-item-light {\n  color: #818182; }\n  a.list-group-item-light:focus, a.list-group-item-light:hover,\n  button.list-group-item-light:focus,\n  button.list-group-item-light:hover {\n    color: #818182;\n    background-color: #ececf6; }\n  a.list-group-item-light.active,\n  button.list-group-item-light.active {\n    color: #fff;\n    background-color: #818182;\n    border-color: #818182; }\n\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca; }\n\na.list-group-item-dark,\nbutton.list-group-item-dark {\n  color: #1b1e21; }\n  a.list-group-item-dark:focus, a.list-group-item-dark:hover,\n  button.list-group-item-dark:focus,\n  button.list-group-item-dark:hover {\n    color: #1b1e21;\n    background-color: #b9bbbe; }\n  a.list-group-item-dark.active,\n  button.list-group-item-dark.active {\n    color: #fff;\n    background-color: #1b1e21;\n    border-color: #1b1e21; }\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5; }\n  .close:focus, .close:hover {\n    color: #000;\n    text-decoration: none;\n    opacity: .75; }\n\nbutton.close {\n  padding: 0;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.modal-open {\n  overflow: hidden; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0; }\n  .modal.fade .modal-dialog {\n    transition: transform 0.3s ease-out;\n    transform: translate(0, -25%); }\n  .modal.show .modal-dialog {\n    transform: translate(0, 0); }\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0; }\n  .modal-backdrop.show {\n    opacity: 0.5; }\n\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px;\n  border-bottom: 1px solid #e9ecef; }\n  .modal-header .close {\n    margin-left: auto; }\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5; }\n\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 15px; }\n\n.modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 15px;\n  border-top: 1px solid #e9ecef; }\n  .modal-footer > :not(:first-child) {\n    margin-left: .25rem; }\n  .modal-footer > :not(:last-child) {\n    margin-right: .25rem; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 30px auto; }\n  .modal-sm {\n    max-width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg {\n    max-width: 800px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0; }\n  .tooltip.show {\n    opacity: 0.9; }\n  .tooltip .arrow {\n    position: absolute;\n    display: block;\n    width: 5px;\n    height: 5px; }\n  .tooltip.bs-tooltip-top, .tooltip.bs-tooltip-auto[x-placement^=\"top\"] {\n    padding: 5px 0; }\n    .tooltip.bs-tooltip-top .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"top\"] .arrow {\n      bottom: 0; }\n    .tooltip.bs-tooltip-top .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"top\"] .arrow::before {\n      margin-left: -3px;\n      content: \"\";\n      border-width: 5px 5px 0;\n      border-top-color: #000; }\n  .tooltip.bs-tooltip-right, .tooltip.bs-tooltip-auto[x-placement^=\"right\"] {\n    padding: 0 5px; }\n    .tooltip.bs-tooltip-right .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"right\"] .arrow {\n      left: 0; }\n    .tooltip.bs-tooltip-right .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"right\"] .arrow::before {\n      margin-top: -3px;\n      content: \"\";\n      border-width: 5px 5px 5px 0;\n      border-right-color: #000; }\n  .tooltip.bs-tooltip-bottom, .tooltip.bs-tooltip-auto[x-placement^=\"bottom\"] {\n    padding: 5px 0; }\n    .tooltip.bs-tooltip-bottom .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow {\n      top: 0; }\n    .tooltip.bs-tooltip-bottom .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before {\n      margin-left: -3px;\n      content: \"\";\n      border-width: 0 5px 5px;\n      border-bottom-color: #000; }\n  .tooltip.bs-tooltip-left, .tooltip.bs-tooltip-auto[x-placement^=\"left\"] {\n    padding: 0 5px; }\n    .tooltip.bs-tooltip-left .arrow, .tooltip.bs-tooltip-auto[x-placement^=\"left\"] .arrow {\n      right: 0; }\n    .tooltip.bs-tooltip-left .arrow::before, .tooltip.bs-tooltip-auto[x-placement^=\"left\"] .arrow::before {\n      right: 0;\n      margin-top: -3px;\n      content: \"\";\n      border-width: 5px 0 5px 5px;\n      border-left-color: #000; }\n  .tooltip .arrow::before {\n    position: absolute;\n    border-color: transparent;\n    border-style: solid; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  padding: 1px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem; }\n  .popover .arrow {\n    position: absolute;\n    display: block;\n    width: 10px;\n    height: 5px; }\n  .popover .arrow::before,\n  .popover .arrow::after {\n    position: absolute;\n    display: block;\n    border-color: transparent;\n    border-style: solid; }\n  .popover .arrow::before {\n    content: \"\";\n    border-width: 11px; }\n  .popover .arrow::after {\n    content: \"\";\n    border-width: 11px; }\n  .popover.bs-popover-top, .popover.bs-popover-auto[x-placement^=\"top\"] {\n    margin-bottom: 10px; }\n    .popover.bs-popover-top .arrow, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow {\n      bottom: 0; }\n    .popover.bs-popover-top .arrow::before, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::before,\n    .popover.bs-popover-top .arrow::after,\n    .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n      border-bottom-width: 0; }\n    .popover.bs-popover-top .arrow::before, .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::before {\n      bottom: -11px;\n      margin-left: -6px;\n      border-top-color: rgba(0, 0, 0, 0.25); }\n    \n    .popover.bs-popover-top .arrow::after,\n    .popover.bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n      bottom: -10px;\n      margin-left: -6px;\n      border-top-color: #fff; }\n  .popover.bs-popover-right, .popover.bs-popover-auto[x-placement^=\"right\"] {\n    margin-left: 10px; }\n    .popover.bs-popover-right .arrow, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow {\n      left: 0; }\n    .popover.bs-popover-right .arrow::before, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::before,\n    .popover.bs-popover-right .arrow::after,\n    .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n      margin-top: -8px;\n      border-left-width: 0; }\n    .popover.bs-popover-right .arrow::before, .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::before {\n      left: -11px;\n      border-right-color: rgba(0, 0, 0, 0.25); }\n    \n    .popover.bs-popover-right .arrow::after,\n    .popover.bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n      left: -10px;\n      border-right-color: #fff; }\n  .popover.bs-popover-bottom, .popover.bs-popover-auto[x-placement^=\"bottom\"] {\n    margin-top: 10px; }\n    .popover.bs-popover-bottom .arrow, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow {\n      top: 0; }\n    .popover.bs-popover-bottom .arrow::before, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::before,\n    .popover.bs-popover-bottom .arrow::after,\n    .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n      margin-left: -7px;\n      border-top-width: 0; }\n    .popover.bs-popover-bottom .arrow::before, .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::before {\n      top: -11px;\n      border-bottom-color: rgba(0, 0, 0, 0.25); }\n    \n    .popover.bs-popover-bottom .arrow::after,\n    .popover.bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n      top: -10px;\n      border-bottom-color: #fff; }\n    .popover.bs-popover-bottom .popover-header::before, .popover.bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\n      position: absolute;\n      top: 0;\n      left: 50%;\n      display: block;\n      width: 20px;\n      margin-left: -10px;\n      content: \"\";\n      border-bottom: 1px solid #f7f7f7; }\n  .popover.bs-popover-left, .popover.bs-popover-auto[x-placement^=\"left\"] {\n    margin-right: 10px; }\n    .popover.bs-popover-left .arrow, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow {\n      right: 0; }\n    .popover.bs-popover-left .arrow::before, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::before,\n    .popover.bs-popover-left .arrow::after,\n    .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n      margin-top: -8px;\n      border-right-width: 0; }\n    .popover.bs-popover-left .arrow::before, .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::before {\n      right: -11px;\n      border-left-color: rgba(0, 0, 0, 0.25); }\n    \n    .popover.bs-popover-left .arrow::after,\n    .popover.bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n      right: -10px;\n      border-left-color: #fff; }\n\n.popover-header {\n  padding: 8px 14px;\n  margin-bottom: 0;\n  font-size: 1rem;\n  color: inherit;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px); }\n  .popover-header:empty {\n    display: none; }\n\n.popover-body {\n  padding: 9px 14px;\n  color: #212529; }\n\n.carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n\n.carousel-item {\n  position: relative;\n  display: none;\n  align-items: center;\n  width: 100%;\n  transition: transform 0.6s ease;\n  backface-visibility: hidden;\n  perspective: 1000px; }\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block; }\n\n.carousel-item-next,\n.carousel-item-prev {\n  position: absolute;\n  top: 0; }\n\n.carousel-item-next.carousel-item-left,\n.carousel-item-prev.carousel-item-right {\n  transform: translateX(0); }\n  @supports (transform-style: preserve-3d) {\n    .carousel-item-next.carousel-item-left,\n    .carousel-item-prev.carousel-item-right {\n      transform: translate3d(0, 0, 0); } }\n\n.carousel-item-next,\n.active.carousel-item-right {\n  transform: translateX(100%); }\n  @supports (transform-style: preserve-3d) {\n    .carousel-item-next,\n    .active.carousel-item-right {\n      transform: translate3d(100%, 0, 0); } }\n\n.carousel-item-prev,\n.active.carousel-item-left {\n  transform: translateX(-100%); }\n  @supports (transform-style: preserve-3d) {\n    .carousel-item-prev,\n    .active.carousel-item-left {\n      transform: translate3d(-100%, 0, 0); } }\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5; }\n  .carousel-control-prev:focus, .carousel-control-prev:hover,\n  .carousel-control-next:focus,\n  .carousel-control-next:hover {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: .9; }\n\n.carousel-control-prev {\n  left: 0; }\n\n.carousel-control-next {\n  right: 0; }\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: transparent no-repeat center center;\n  background-size: 100% 100%; }\n\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\"); }\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\"); }\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none; }\n  .carousel-indicators li {\n    position: relative;\n    flex: 0 1 auto;\n    width: 30px;\n    height: 3px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    background-color: rgba(255, 255, 255, 0.5); }\n    .carousel-indicators li::before {\n      position: absolute;\n      top: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n    .carousel-indicators li::after {\n      position: absolute;\n      bottom: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n  .carousel-indicators .active {\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center; }\n\n.align-baseline {\n  vertical-align: baseline !important; }\n\n.align-top {\n  vertical-align: top !important; }\n\n.align-middle {\n  vertical-align: middle !important; }\n\n.align-bottom {\n  vertical-align: bottom !important; }\n\n.align-text-bottom {\n  vertical-align: text-bottom !important; }\n\n.align-text-top {\n  vertical-align: text-top !important; }\n\n.bg-primary {\n  background-color: #007bff !important; }\n\na.bg-primary:focus, a.bg-primary:hover {\n  background-color: #0062cc !important; }\n\n.bg-secondary {\n  background-color: #868e96 !important; }\n\na.bg-secondary:focus, a.bg-secondary:hover {\n  background-color: #6c757d !important; }\n\n.bg-success {\n  background-color: #28a745 !important; }\n\na.bg-success:focus, a.bg-success:hover {\n  background-color: #1e7e34 !important; }\n\n.bg-info {\n  background-color: #17a2b8 !important; }\n\na.bg-info:focus, a.bg-info:hover {\n  background-color: #117a8b !important; }\n\n.bg-warning {\n  background-color: #ffc107 !important; }\n\na.bg-warning:focus, a.bg-warning:hover {\n  background-color: #d39e00 !important; }\n\n.bg-danger {\n  background-color: #dc3545 !important; }\n\na.bg-danger:focus, a.bg-danger:hover {\n  background-color: #bd2130 !important; }\n\n.bg-light {\n  background-color: #f8f9fa !important; }\n\na.bg-light:focus, a.bg-light:hover {\n  background-color: #dae0e5 !important; }\n\n.bg-dark {\n  background-color: #343a40 !important; }\n\na.bg-dark:focus, a.bg-dark:hover {\n  background-color: #1d2124 !important; }\n\n.bg-white {\n  background-color: #fff !important; }\n\n.bg-transparent {\n  background-color: transparent !important; }\n\n.border {\n  border: 1px solid #e9ecef !important; }\n\n.border-0 {\n  border: 0 !important; }\n\n.border-top-0 {\n  border-top: 0 !important; }\n\n.border-right-0 {\n  border-right: 0 !important; }\n\n.border-bottom-0 {\n  border-bottom: 0 !important; }\n\n.border-left-0 {\n  border-left: 0 !important; }\n\n.border-primary {\n  border-color: #007bff !important; }\n\n.border-secondary {\n  border-color: #868e96 !important; }\n\n.border-success {\n  border-color: #28a745 !important; }\n\n.border-info {\n  border-color: #17a2b8 !important; }\n\n.border-warning {\n  border-color: #ffc107 !important; }\n\n.border-danger {\n  border-color: #dc3545 !important; }\n\n.border-light {\n  border-color: #f8f9fa !important; }\n\n.border-dark {\n  border-color: #343a40 !important; }\n\n.border-white {\n  border-color: #fff !important; }\n\n.rounded {\n  border-radius: 0.25rem !important; }\n\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important; }\n\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important; }\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n\n.rounded-circle {\n  border-radius: 50%; }\n\n.rounded-0 {\n  border-radius: 0; }\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\"; }\n\n.d-none {\n  display: none !important; }\n\n.d-inline {\n  display: inline !important; }\n\n.d-inline-block {\n  display: inline-block !important; }\n\n.d-block {\n  display: block !important; }\n\n.d-table {\n  display: table !important; }\n\n.d-table-cell {\n  display: table-cell !important; }\n\n.d-flex {\n  display: flex !important; }\n\n.d-inline-flex {\n  display: inline-flex !important; }\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: inline-flex !important; } }\n\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: inline-flex !important; } }\n\n.d-print-block {\n  display: none !important; }\n  @media print {\n    .d-print-block {\n      display: block !important; } }\n\n.d-print-inline {\n  display: none !important; }\n  @media print {\n    .d-print-inline {\n      display: inline !important; } }\n\n.d-print-inline-block {\n  display: none !important; }\n  @media print {\n    .d-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .d-print-none {\n    display: none !important; } }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive::before {\n    display: block;\n    content: \"\"; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0; }\n\n.embed-responsive-21by9::before {\n  padding-top: 42.85714%; }\n\n.embed-responsive-16by9::before {\n  padding-top: 56.25%; }\n\n.embed-responsive-4by3::before {\n  padding-top: 75%; }\n\n.embed-responsive-1by1::before {\n  padding-top: 100%; }\n\n.flex-row {\n  flex-direction: row !important; }\n\n.flex-column {\n  flex-direction: column !important; }\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important; }\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important; }\n\n.flex-wrap {\n  flex-wrap: wrap !important; }\n\n.flex-nowrap {\n  flex-wrap: nowrap !important; }\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important; }\n\n.justify-content-start {\n  justify-content: flex-start !important; }\n\n.justify-content-end {\n  justify-content: flex-end !important; }\n\n.justify-content-center {\n  justify-content: center !important; }\n\n.justify-content-between {\n  justify-content: space-between !important; }\n\n.justify-content-around {\n  justify-content: space-around !important; }\n\n.align-items-start {\n  align-items: flex-start !important; }\n\n.align-items-end {\n  align-items: flex-end !important; }\n\n.align-items-center {\n  align-items: center !important; }\n\n.align-items-baseline {\n  align-items: baseline !important; }\n\n.align-items-stretch {\n  align-items: stretch !important; }\n\n.align-content-start {\n  align-content: flex-start !important; }\n\n.align-content-end {\n  align-content: flex-end !important; }\n\n.align-content-center {\n  align-content: center !important; }\n\n.align-content-between {\n  align-content: space-between !important; }\n\n.align-content-around {\n  align-content: space-around !important; }\n\n.align-content-stretch {\n  align-content: stretch !important; }\n\n.align-self-auto {\n  align-self: auto !important; }\n\n.align-self-start {\n  align-self: flex-start !important; }\n\n.align-self-end {\n  align-self: flex-end !important; }\n\n.align-self-center {\n  align-self: center !important; }\n\n.align-self-baseline {\n  align-self: baseline !important; }\n\n.align-self-stretch {\n  align-self: stretch !important; }\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    flex-direction: row !important; }\n  .flex-sm-column {\n    flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .justify-content-sm-start {\n    justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    justify-content: center !important; }\n  .justify-content-sm-between {\n    justify-content: space-between !important; }\n  .justify-content-sm-around {\n    justify-content: space-around !important; }\n  .align-items-sm-start {\n    align-items: flex-start !important; }\n  .align-items-sm-end {\n    align-items: flex-end !important; }\n  .align-items-sm-center {\n    align-items: center !important; }\n  .align-items-sm-baseline {\n    align-items: baseline !important; }\n  .align-items-sm-stretch {\n    align-items: stretch !important; }\n  .align-content-sm-start {\n    align-content: flex-start !important; }\n  .align-content-sm-end {\n    align-content: flex-end !important; }\n  .align-content-sm-center {\n    align-content: center !important; }\n  .align-content-sm-between {\n    align-content: space-between !important; }\n  .align-content-sm-around {\n    align-content: space-around !important; }\n  .align-content-sm-stretch {\n    align-content: stretch !important; }\n  .align-self-sm-auto {\n    align-self: auto !important; }\n  .align-self-sm-start {\n    align-self: flex-start !important; }\n  .align-self-sm-end {\n    align-self: flex-end !important; }\n  .align-self-sm-center {\n    align-self: center !important; }\n  .align-self-sm-baseline {\n    align-self: baseline !important; }\n  .align-self-sm-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 768px) {\n  .flex-md-row {\n    flex-direction: row !important; }\n  .flex-md-column {\n    flex-direction: column !important; }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .justify-content-md-start {\n    justify-content: flex-start !important; }\n  .justify-content-md-end {\n    justify-content: flex-end !important; }\n  .justify-content-md-center {\n    justify-content: center !important; }\n  .justify-content-md-between {\n    justify-content: space-between !important; }\n  .justify-content-md-around {\n    justify-content: space-around !important; }\n  .align-items-md-start {\n    align-items: flex-start !important; }\n  .align-items-md-end {\n    align-items: flex-end !important; }\n  .align-items-md-center {\n    align-items: center !important; }\n  .align-items-md-baseline {\n    align-items: baseline !important; }\n  .align-items-md-stretch {\n    align-items: stretch !important; }\n  .align-content-md-start {\n    align-content: flex-start !important; }\n  .align-content-md-end {\n    align-content: flex-end !important; }\n  .align-content-md-center {\n    align-content: center !important; }\n  .align-content-md-between {\n    align-content: space-between !important; }\n  .align-content-md-around {\n    align-content: space-around !important; }\n  .align-content-md-stretch {\n    align-content: stretch !important; }\n  .align-self-md-auto {\n    align-self: auto !important; }\n  .align-self-md-start {\n    align-self: flex-start !important; }\n  .align-self-md-end {\n    align-self: flex-end !important; }\n  .align-self-md-center {\n    align-self: center !important; }\n  .align-self-md-baseline {\n    align-self: baseline !important; }\n  .align-self-md-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 992px) {\n  .flex-lg-row {\n    flex-direction: row !important; }\n  .flex-lg-column {\n    flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .justify-content-lg-start {\n    justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    justify-content: center !important; }\n  .justify-content-lg-between {\n    justify-content: space-between !important; }\n  .justify-content-lg-around {\n    justify-content: space-around !important; }\n  .align-items-lg-start {\n    align-items: flex-start !important; }\n  .align-items-lg-end {\n    align-items: flex-end !important; }\n  .align-items-lg-center {\n    align-items: center !important; }\n  .align-items-lg-baseline {\n    align-items: baseline !important; }\n  .align-items-lg-stretch {\n    align-items: stretch !important; }\n  .align-content-lg-start {\n    align-content: flex-start !important; }\n  .align-content-lg-end {\n    align-content: flex-end !important; }\n  .align-content-lg-center {\n    align-content: center !important; }\n  .align-content-lg-between {\n    align-content: space-between !important; }\n  .align-content-lg-around {\n    align-content: space-around !important; }\n  .align-content-lg-stretch {\n    align-content: stretch !important; }\n  .align-self-lg-auto {\n    align-self: auto !important; }\n  .align-self-lg-start {\n    align-self: flex-start !important; }\n  .align-self-lg-end {\n    align-self: flex-end !important; }\n  .align-self-lg-center {\n    align-self: center !important; }\n  .align-self-lg-baseline {\n    align-self: baseline !important; }\n  .align-self-lg-stretch {\n    align-self: stretch !important; } }\n\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    flex-direction: row !important; }\n  .flex-xl-column {\n    flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important; }\n  .justify-content-xl-start {\n    justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    justify-content: center !important; }\n  .justify-content-xl-between {\n    justify-content: space-between !important; }\n  .justify-content-xl-around {\n    justify-content: space-around !important; }\n  .align-items-xl-start {\n    align-items: flex-start !important; }\n  .align-items-xl-end {\n    align-items: flex-end !important; }\n  .align-items-xl-center {\n    align-items: center !important; }\n  .align-items-xl-baseline {\n    align-items: baseline !important; }\n  .align-items-xl-stretch {\n    align-items: stretch !important; }\n  .align-content-xl-start {\n    align-content: flex-start !important; }\n  .align-content-xl-end {\n    align-content: flex-end !important; }\n  .align-content-xl-center {\n    align-content: center !important; }\n  .align-content-xl-between {\n    align-content: space-between !important; }\n  .align-content-xl-around {\n    align-content: space-around !important; }\n  .align-content-xl-stretch {\n    align-content: stretch !important; }\n  .align-self-xl-auto {\n    align-self: auto !important; }\n  .align-self-xl-start {\n    align-self: flex-start !important; }\n  .align-self-xl-end {\n    align-self: flex-end !important; }\n  .align-self-xl-center {\n    align-self: center !important; }\n  .align-self-xl-baseline {\n    align-self: baseline !important; }\n  .align-self-xl-stretch {\n    align-self: stretch !important; } }\n\n.float-left {\n  float: left !important; }\n\n.float-right {\n  float: right !important; }\n\n.float-none {\n  float: none !important; }\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important; }\n  .float-sm-right {\n    float: right !important; }\n  .float-sm-none {\n    float: none !important; } }\n\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important; }\n  .float-md-right {\n    float: right !important; }\n  .float-md-none {\n    float: none !important; } }\n\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important; }\n  .float-lg-right {\n    float: right !important; }\n  .float-lg-none {\n    float: none !important; } }\n\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important; }\n  .float-xl-right {\n    float: right !important; }\n  .float-xl-none {\n    float: none !important; } }\n\n.position-static {\n  position: static !important; }\n\n.position-relative {\n  position: relative !important; }\n\n.position-absolute {\n  position: absolute !important; }\n\n.position-fixed {\n  position: fixed !important; }\n\n.position-sticky {\n  position: sticky !important; }\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030; }\n\n@supports (position: sticky) {\n  .sticky-top {\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n  clip-path: none; }\n\n.w-25 {\n  width: 25% !important; }\n\n.w-50 {\n  width: 50% !important; }\n\n.w-75 {\n  width: 75% !important; }\n\n.w-100 {\n  width: 100% !important; }\n\n.h-25 {\n  height: 25% !important; }\n\n.h-50 {\n  height: 50% !important; }\n\n.h-75 {\n  height: 75% !important; }\n\n.h-100 {\n  height: 100% !important; }\n\n.mw-100 {\n  max-width: 100% !important; }\n\n.mh-100 {\n  max-height: 100% !important; }\n\n.m-0 {\n  margin: 0 !important; }\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important; }\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important; }\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important; }\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important; }\n\n.m-1 {\n  margin: 0.25rem !important; }\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important; }\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important; }\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important; }\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important; }\n\n.m-2 {\n  margin: 0.5rem !important; }\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important; }\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important; }\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important; }\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important; }\n\n.m-3 {\n  margin: 1rem !important; }\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important; }\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important; }\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important; }\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important; }\n\n.m-4 {\n  margin: 1.5rem !important; }\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important; }\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important; }\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important; }\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important; }\n\n.m-5 {\n  margin: 3rem !important; }\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important; }\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important; }\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important; }\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important; }\n\n.p-0 {\n  padding: 0 !important; }\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important; }\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important; }\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important; }\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important; }\n\n.p-1 {\n  padding: 0.25rem !important; }\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important; }\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important; }\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important; }\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important; }\n\n.p-2 {\n  padding: 0.5rem !important; }\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important; }\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important; }\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important; }\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important; }\n\n.p-3 {\n  padding: 1rem !important; }\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important; }\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important; }\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important; }\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important; }\n\n.p-4 {\n  padding: 1.5rem !important; }\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important; }\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important; }\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important; }\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important; }\n\n.p-5 {\n  padding: 3rem !important; }\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important; }\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important; }\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important; }\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important; }\n\n.m-auto {\n  margin: auto !important; }\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important; }\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important; }\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important; }\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important; }\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important; }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important; }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important; }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important; }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important; }\n  .m-sm-1 {\n    margin: 0.25rem !important; }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important; }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important; }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important; }\n  .m-sm-2 {\n    margin: 0.5rem !important; }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important; }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important; }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important; }\n  .m-sm-3 {\n    margin: 1rem !important; }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important; }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important; }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important; }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important; }\n  .m-sm-4 {\n    margin: 1.5rem !important; }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important; }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important; }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important; }\n  .m-sm-5 {\n    margin: 3rem !important; }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important; }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important; }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important; }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important; }\n  .p-sm-0 {\n    padding: 0 !important; }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important; }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important; }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important; }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important; }\n  .p-sm-1 {\n    padding: 0.25rem !important; }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important; }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important; }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important; }\n  .p-sm-2 {\n    padding: 0.5rem !important; }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important; }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important; }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important; }\n  .p-sm-3 {\n    padding: 1rem !important; }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important; }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important; }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important; }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important; }\n  .p-sm-4 {\n    padding: 1.5rem !important; }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important; }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important; }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important; }\n  .p-sm-5 {\n    padding: 3rem !important; }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important; }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important; }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important; }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important; }\n  .m-sm-auto {\n    margin: auto !important; }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important; }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important; }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important; }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important; }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important; }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important; }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important; }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important; }\n  .m-md-1 {\n    margin: 0.25rem !important; }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important; }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important; }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important; }\n  .m-md-2 {\n    margin: 0.5rem !important; }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important; }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important; }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important; }\n  .m-md-3 {\n    margin: 1rem !important; }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important; }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important; }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important; }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important; }\n  .m-md-4 {\n    margin: 1.5rem !important; }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important; }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important; }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important; }\n  .m-md-5 {\n    margin: 3rem !important; }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important; }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important; }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important; }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important; }\n  .p-md-0 {\n    padding: 0 !important; }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important; }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important; }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important; }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important; }\n  .p-md-1 {\n    padding: 0.25rem !important; }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important; }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important; }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important; }\n  .p-md-2 {\n    padding: 0.5rem !important; }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important; }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important; }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important; }\n  .p-md-3 {\n    padding: 1rem !important; }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important; }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important; }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important; }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important; }\n  .p-md-4 {\n    padding: 1.5rem !important; }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important; }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important; }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important; }\n  .p-md-5 {\n    padding: 3rem !important; }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important; }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important; }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important; }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important; }\n  .m-md-auto {\n    margin: auto !important; }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important; }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important; }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important; }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important; }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important; }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important; }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important; }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important; }\n  .m-lg-1 {\n    margin: 0.25rem !important; }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important; }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important; }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important; }\n  .m-lg-2 {\n    margin: 0.5rem !important; }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important; }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important; }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important; }\n  .m-lg-3 {\n    margin: 1rem !important; }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important; }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important; }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important; }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important; }\n  .m-lg-4 {\n    margin: 1.5rem !important; }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important; }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important; }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important; }\n  .m-lg-5 {\n    margin: 3rem !important; }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important; }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important; }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important; }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important; }\n  .p-lg-0 {\n    padding: 0 !important; }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important; }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important; }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important; }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important; }\n  .p-lg-1 {\n    padding: 0.25rem !important; }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important; }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important; }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important; }\n  .p-lg-2 {\n    padding: 0.5rem !important; }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important; }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important; }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important; }\n  .p-lg-3 {\n    padding: 1rem !important; }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important; }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important; }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important; }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important; }\n  .p-lg-4 {\n    padding: 1.5rem !important; }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important; }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important; }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important; }\n  .p-lg-5 {\n    padding: 3rem !important; }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important; }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important; }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important; }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important; }\n  .m-lg-auto {\n    margin: auto !important; }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important; }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important; }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important; }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important; } }\n\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important; }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important; }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important; }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important; }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important; }\n  .m-xl-1 {\n    margin: 0.25rem !important; }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important; }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important; }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important; }\n  .m-xl-2 {\n    margin: 0.5rem !important; }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important; }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important; }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important; }\n  .m-xl-3 {\n    margin: 1rem !important; }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important; }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important; }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important; }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important; }\n  .m-xl-4 {\n    margin: 1.5rem !important; }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important; }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important; }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important; }\n  .m-xl-5 {\n    margin: 3rem !important; }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important; }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important; }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important; }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important; }\n  .p-xl-0 {\n    padding: 0 !important; }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important; }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important; }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important; }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important; }\n  .p-xl-1 {\n    padding: 0.25rem !important; }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important; }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important; }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important; }\n  .p-xl-2 {\n    padding: 0.5rem !important; }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important; }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important; }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important; }\n  .p-xl-3 {\n    padding: 1rem !important; }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important; }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important; }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important; }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important; }\n  .p-xl-4 {\n    padding: 1.5rem !important; }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important; }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important; }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important; }\n  .p-xl-5 {\n    padding: 3rem !important; }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important; }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important; }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important; }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important; }\n  .m-xl-auto {\n    margin: auto !important; }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important; }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important; }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important; }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important; } }\n\n.text-justify {\n  text-align: justify !important; }\n\n.text-nowrap {\n  white-space: nowrap !important; }\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-left {\n  text-align: left !important; }\n\n.text-right {\n  text-align: right !important; }\n\n.text-center {\n  text-align: center !important; }\n\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important; }\n  .text-sm-right {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important; }\n  .text-md-right {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important; }\n  .text-lg-right {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important; }\n  .text-xl-right {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n\n.text-lowercase {\n  text-transform: lowercase !important; }\n\n.text-uppercase {\n  text-transform: uppercase !important; }\n\n.text-capitalize {\n  text-transform: capitalize !important; }\n\n.font-weight-light {\n  font-weight: 300 !important; }\n\n.font-weight-normal {\n  font-weight: normal !important; }\n\n.font-weight-bold {\n  font-weight: bold !important; }\n\n.font-italic {\n  font-style: italic !important; }\n\n.text-white {\n  color: #fff !important; }\n\n.text-primary {\n  color: #007bff !important; }\n\na.text-primary:focus, a.text-primary:hover {\n  color: #0062cc !important; }\n\n.text-secondary {\n  color: #868e96 !important; }\n\na.text-secondary:focus, a.text-secondary:hover {\n  color: #6c757d !important; }\n\n.text-success {\n  color: #28a745 !important; }\n\na.text-success:focus, a.text-success:hover {\n  color: #1e7e34 !important; }\n\n.text-info {\n  color: #17a2b8 !important; }\n\na.text-info:focus, a.text-info:hover {\n  color: #117a8b !important; }\n\n.text-warning {\n  color: #ffc107 !important; }\n\na.text-warning:focus, a.text-warning:hover {\n  color: #d39e00 !important; }\n\n.text-danger {\n  color: #dc3545 !important; }\n\na.text-danger:focus, a.text-danger:hover {\n  color: #bd2130 !important; }\n\n.text-light {\n  color: #f8f9fa !important; }\n\na.text-light:focus, a.text-light:hover {\n  color: #dae0e5 !important; }\n\n.text-dark {\n  color: #343a40 !important; }\n\na.text-dark:focus, a.text-dark:hover {\n  color: #1d2124 !important; }\n\n.text-muted {\n  color: #868e96 !important; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.visible {\n  visibility: visible !important; }\n\n.invisible {\n  visibility: hidden !important; }\n\n::selection {\n  background-color: #E13300;\n  color: white; }\n\n::-moz-selection {\n  background-color: #E13300;\n  color: white; }\n\nheader {\n  padding: 15px;\n  background-color: #292b2c;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n  color: #fff; }\n\n.filter-column {\n  padding: 5px; }\n  .filter-column input {\n    padding: 10px  15px;\n    border-radius: 5px;\n    border: 1px solid #f1f1f1; }\n\n.main-feed .book-item-tbl .book-item-row td {\n  padding: 10px 15px;\n  vertical-align: top; }\n\n.main-feed .book-item-tbl .book-item-row .book-img-td .book-img img {\n  max-width: 200px; }\n\n.main-feed {\n  padding: 15px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=bandle.js.map