/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import './../bower_components/webcomponentsjs/webcomponents-hi-sd-ce.js';

__webpack_require__(3);

__webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymerElement = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonClab = function (_Polymer$Element) {
  _inherits(ButtonClab, _Polymer$Element);

  function ButtonClab() {
    _classCallCheck(this, ButtonClab);

    return _possibleConstructorReturn(this, (ButtonClab.__proto__ || Object.getPrototypeOf(ButtonClab)).apply(this, arguments));
  }

  _createClass(ButtonClab, [{
    key: '_click',
    value: function _click(evt) {
      this.dispatchEvent(new CustomEvent('btnclick'), { bubbles: true });
    }
  }, {
    key: '_computeClass',
    value: function _computeClass(type, appearance, size, block) {
      var arr = ['btn', type, appearance, size];
      block ? arr.push('block') : null;
      return arr.join(' ');
    }
  }, {
    key: '_computeIconClass',
    value: function _computeIconClass(icon) {
      return ['icon', icon].join(' ');
    }
  }], [{
    key: 'is',
    get: function get() {
      return 'button-clab';
    }
  }, {
    key: 'properties',
    get: function get() {
      return {
        type: {
          type: String,
          value: "",
          reflectToAttribute: true
        },
        appearance: {
          type: String,
          value: ""
        },
        size: {
          type: String,
          value: ""
        },
        icon: {
          type: String,
          value: ""
        },
        disabled: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },
        block: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },
        buttonType: {
          type: String,
          value: 'button'
        }
      };
    }
  }]);

  return ButtonClab;
}(_polymerElement.Polymer.Element);

customElements.define(ButtonClab.is, ButtonClab);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import './../bower_components/polymer/polymer-element.html';

// Exports Polymer global object as module

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Polymer = exports.Polymer = window.Polymer;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId])
      /******/return installedModules[moduleId].exports;
    /******/
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // identity function for calling harmony imports with the correct context
  /******/__webpack_require__.i = function (value) {
    return value;
  };
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 12);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports) {

  /*__wc__loader*/

  (function (document) {
    var _htmlStr = "\n";
    if (document.head) {
      var el = document.head;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  (function (document) {
    var _htmlStr = "";
    if (document.body) {
      var el = document.body;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  (function () {
    'use strict';

    var userPolymer = window.Polymer;

    /**
     * @namespace Polymer
     * @summary Polymer is a lightweight library built on top of the web
     * standards-based Web Components API's, and makes it easy to build your
     * own custom HTML elements.
     */
    window.Polymer = function (info) {
      return window.Polymer._polymerFn(info);
    };

    // support user settings on the Polymer object
    if (userPolymer) {
      Object.assign(Polymer, userPolymer);
    }

    // To be plugged by legacy implementation if loaded
    window.Polymer._polymerFn = function () {
      throw new Error('Load polymer.html to use the Polymer() function.');
    };
    window.Polymer.version = '2.0-preview';

    /* eslint-disable no-unused-vars */
    /*
    When using Closure Compiler, goog.reflect.objectProperty(property, object) is replaced by the munged name for object[property]
    We cannot alias this function, so we have to use a small shim that has the same behavior when not compiling.
    */
    window.goog = window.goog || {};
    window.goog.reflect = window.goog.reflect || {
      objectProperty: function objectProperty(s, o) {
        return s;
      }
    };
    /* eslint-enable */
  })();

  /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

  /*__wc__loader*/

  (function (document) {
    var _htmlStr = "\n\n\n";
    if (document.head) {
      var el = document.head;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  (function (document) {
    var _htmlStr = "";
    if (document.body) {
      var el = document.body;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  __webpack_require__(0);

  (function () {

    'use strict';

    // unique global id for deduping mixins.

    var dedupeId = 0;

    /**
     * Given a mixin producing function, memoize applications of mixin to base
     * @private
     */
    function cachingMixin(mixin) {
      return function (base) {
        if (!mixin.__mixinApplications) {
          mixin.__mixinApplications = new WeakMap();
        }
        var map = mixin.__mixinApplications;
        var application = map.get(base);
        if (!application) {
          application = mixin(base);
          map.set(base, application);
        }
        return application;
      };
    }

    /**
     * Wraps an ES6 class expression mixin such that the mixin is only applied
     * if it has not already been applied its base argument.  Also memoizes mixin
     * applications.
     *
     * @memberof Polymer
     * @param {function} mixin ES6 class expression mixin to wrap
     * @return {function} Wrapped mixin that deduplicates and memoizes
     *   mixin applications to base
     */
    Polymer.dedupingMixin = function (mixin) {
      mixin = cachingMixin(mixin);
      // maintain a unique id for each mixin
      if (!mixin.__id) {
        mixin.__dedupeId = ++dedupeId;
      }
      return function (base) {
        var baseSet = base.__mixinSet;
        if (baseSet && baseSet[mixin.__dedupeId]) {
          return base;
        }
        var extended = mixin(base);
        // copy inherited mixin set from the extended class, or the base class
        // NOTE: we avoid use of Set here because some browser (IE11)
        // cannot extend a base Set via the constructor.
        extended.__mixinSet = Object.create(extended.__mixinSet || baseSet || null);
        extended.__mixinSet[mixin.__dedupeId] = true;
        return extended;
      };
    };
  })();

  /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

  /*__wc__loader*/

  (function (document) {
    var _htmlStr = "\n\n";
    if (document.head) {
      var el = document.head;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  (function (document) {
    var _htmlStr = "";
    if (document.body) {
      var el = document.body;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  __webpack_require__(0);

  (function () {
    'use strict';

    var caseMap = {};
    var DASH_TO_CAMEL = /-[a-z]/g;
    var CAMEL_TO_DASH = /([A-Z])/g;

    /**
     * Module with utilities for converting between "dash-case" and "camelCase"
     * identifiers.
     *
     * @namespace
     * @memberof Polymer
     * @summary Module that provides utilities for converting between "dash-case"
     *   and "camelCase".
     */
    var CaseMap = {

      /**
       * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
       * (e.g. `fooBarBaz`).
       *
       * @memberof Polymer.CaseMap
       * @param {string} dash Dash-case identifier
       * @return {string} Camel-case representation of the identifier
       */
      dashToCamelCase: function dashToCamelCase(dash) {
        return caseMap[dash] || (caseMap[dash] = dash.indexOf('-') < 0 ? dash : dash.replace(DASH_TO_CAMEL, function (m) {
          return m[1].toUpperCase();
        }));
      },


      /**
       * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
       * (e.g. `foo-bar-baz`).
       *
       * @memberof Polymer.CaseMap
       * @param {string} camel Camel-case identifier
       * @return {string} Dash-case representation of the identifier
       */
      camelToDashCase: function camelToDashCase(camel) {
        return caseMap[camel] || (caseMap[camel] = camel.replace(CAMEL_TO_DASH, '-$1').toLowerCase());
      }
    };

    Polymer.CaseMap = CaseMap;
  })();

  /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

  /*__wc__loader*/

  (function (document) {
    var _htmlStr = "\n\n\n";
    if (document.head) {
      var el = document.head;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  (function (document) {
    var _htmlStr = "";
    if (document.body) {
      var el = document.body;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  __webpack_require__(0);

  (function () {
    'use strict';

    var CSS_URL_RX = /(url\()([^)]*)(\))/g;
    var ABS_URL = /(^\/)|(^#)|(^[\w-\d]*:)/;
    var workingURL = void 0;
    var resolveDoc = void 0;
    /**
     * Resolves the given URL against the provided `baseUri'.
     *
     * @memberof Polymer.ResolveUrl
     * @param {string} url Input URL to resolve
     * @param {string} baseURI Base URI to resolve the URL against
     * @return {string} resolved URL
     */
    function resolveUrl(url, baseURI) {
      if (url && ABS_URL.test(url)) {
        return url;
      }
      // Lazy feature detection.
      if (workingURL === undefined) {
        workingURL = false;
        try {
          var u = new URL('b', 'http://a');
          u.pathname = 'c%20d';
          workingURL = u.href === 'http://a/c%20d';
        } catch (e) {
          // silently fail
        }
      }
      if (!baseURI) {
        baseURI = document.baseURI || window.location.href;
      }
      if (workingURL) {
        return new URL(url, baseURI).href;
      }
      // Fallback to creating an anchor into a disconnected document.
      if (!resolveDoc) {
        resolveDoc = document.implementation.createHTMLDocument('temp');
        resolveDoc.base = resolveDoc.createElement('base');
        resolveDoc.head.appendChild(resolveDoc.base);
        resolveDoc.anchor = resolveDoc.createElement('a');
        resolveDoc.body.appendChild(resolveDoc.anchor);
      }
      resolveDoc.base.href = baseURI;
      resolveDoc.anchor.href = url;
      return resolveDoc.anchor.href || url;
    }

    /**
     * Resolves any relative URL's in the given CSS text against the provided
     * `ownerDocument`'s `baseURI`.
     *
     * @memberof Polymer.ResolveUrl
     * @param {string} cssText CSS text to process
     * @param {string} baseURI Base URI to resolve the URL against
     * @return {string} Processed CSS text with resolved URL's
     */
    function resolveCss(cssText, baseURI) {
      return cssText.replace(CSS_URL_RX, function (m, pre, url, post) {
        return pre + '\'' + resolveUrl(url.replace(/["']/g, ''), baseURI) + '\'' + post;
      });
    }

    /**
     * Returns a path from a given `url`. The path includes the trailing
     * `/` from the url.
     *
     * @memberof Polymer.ResolveUrl
     * @param {string} url Input URL to transform
     * @return {string} resolved path
     */
    function pathFromUrl(url) {
      return url.substring(0, url.lastIndexOf('/') + 1);
    }

    /**
     * Module with utilities for resolving relative URL's.
     *
     * @namespace
     * @memberof Polymer
     * @summary Module with utilities for resolving relative URL's.
     */
    Polymer.ResolveUrl = {
      resolveCss: resolveCss,
      resolveUrl: resolveUrl,
      pathFromUrl: pathFromUrl
    };
  })();

  /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

  /*__wc__loader*/

  (function (document) {
    var _htmlStr = "\n\n\n\n\n\n\n\n\n";
    if (document.head) {
      var el = document.head;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  (function (document) {
    var _htmlStr = "";
    if (document.body) {
      var el = document.body;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  __webpack_require__(0);

  __webpack_require__(1);

  __webpack_require__(2);

  __webpack_require__(11);

  __webpack_require__(3);

  __webpack_require__(5);

  __webpack_require__(7);

  (function () {
    'use strict';
    /**
     * @typedef Object<string, {
     *   value: *,
     *   type: (Function | undefined),
     *   readOnly: (boolean | undefined),
     *   computed: (string | undefined),
     *   reflectToAttribute: (boolean | undefined),
     *   notify: (boolean | undefined),
     *   observer: (string | undefined)
     * }>)
     */

    var PolymerElementProperties = void 0; // eslint-disable-line no-unused-vars

    /** @record */
    var PolymerElementConstructor = function PolymerElementConstructor() {}; // eslint-disable-line no-unused-vars
    /** @type {(string | undefined)} */
    PolymerElementConstructor.is;
    /** @type {(string | undefined)} */
    PolymerElementConstructor.extends;
    /** @type {(!PolymerElementProperties | undefined)} */
    PolymerElementConstructor.properties;
    /** @type {(!Array<string> | undefined)} */
    PolymerElementConstructor.observers;
    /** @type {(!HTMLTemplateElement | string | undefined)} */
    PolymerElementConstructor.template;

    /**
     * Element class mixin that provides the core API for Polymer's meta-programming
     * features including template stamping, data-binding, attribute deserialization,
     * and property change observation.
     *
     * Subclassers may provide the following static getters to return metadata
     * used to configure Polymer's features for the class:
     *
     * - `static get is()`: When the template is provided via a `dom-module`,
     *   users should return the `dom-module` id from a static `is` getter.  If
     *   no template is needed or the template is provided directly via the
     *   `template` getter, there is no need to define `is` for the element.
     *
     * - `static get template()`: Users may provide the template directly (as
     *   opposed to via `dom-module`) by implementing a static `template` getter.
     *   The getter may return an `HTMLTemplateElement` or a string, which will
     *   automatically be parsed into a template.
     *
     * - `static get properties()`: Should return an object describing
     *   property-related metadata used by Polymer features (key: property name
     *   value: object containing property metadata). Valid keys in per-property
     *   metadata include:
     *   - `type` (String|Number|Object|Array|...): Used by
     *     `attributeChangedCallback` to determine how string-based attributes
     *     are deserialized to JavaScript property values.
     *   - `notify` (boolean): Causes a change in the property to fire a
     *     non-bubbling event called `<property>-changed`. Elements that have
     *     enabled two-way binding to the property use this event to observe changes.
     *   - `readOnly` (boolean): Creates a getter for the property, but no setter.
     *     To set a read-only property, use the private setter method
     *     `_setProperty(property, value)`.
     *   - `observer` (string): Observer method name that will be called when
     *     the property changes. The arguments of the method are
     *     `(value, previousValue)`.
     *   - `computed` (string): String describing method and dependent properties
     *     for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
     *     Computed properties are read-only by default and can only be changed
     *     via the return value of the computing method.
     *
     * - `static get observers()`: Array of strings describing multi-property
     *   observer methods and their dependent properties (e.g.
     *   `'observeABC(a, b, c)'`).
     *
     * The base class provides default implementations for the following standard
     * custom element lifecycle callbacks; users may override these, but should
     * call the super method to ensure
     * - `constructor`: Run when the element is created or upgraded
     * - `connectedCallback`: Run each time the element is connected to the
     *   document
     * - `disconnectedCallback`: Run each time the element is disconnected from
     *   the document
     * - `attributeChangedCallback`: Run each time an attribute in
     *   `observedAttributes` is set or removed (note: this element's default
     *   `observedAttributes` implementation will automatically return an array
     *   of dash-cased attributes based on `properties`)
     *
     * @polymerMixin
     * @mixes Polymer.PropertyEffects
     * @memberof Polymer
     * @property rootPath {string} Set to the value of `Polymer.rootPath`,
     *   which defaults to the main document path
     * @property importPath {string} Set to the value of the class's static
     *   `importPath` property, which defaults to the path of this element's
     *   `dom-module` (when `is` is used), but can be overridden for other
     *   import strategies.
     * @summary Element class mixin that provides the core API for Polymer's
     * meta-programming features.
     */
    Polymer.ElementMixin = Polymer.dedupingMixin(function (base) {

      var polymerElementBase = Polymer.PropertyEffects(base);

      var caseMap = Polymer.CaseMap;

      /**
       * Returns the `properties` object specifically on `klass`. Use for:
       * (1) super chain mixes togther to make `propertiesForClass` which is
       * then used to make `observedAttributes`.
       * (2) properties effects and observers are created from it at `finalize` time.
       * @param {HTMLElement} klass
       * @private
       */
      function ownPropertiesForClass(klass) {
        if (!klass.hasOwnProperty(goog.reflect.objectProperty('__ownProperties', klass))) {
          klass.__ownProperties = klass.hasOwnProperty(goog.reflect.objectProperty('properties', klass)) ? klass.properties : {};
        }
        return klass.__ownProperties;
      }

      /**
       * Returns the `observers` array specifically on `klass`. Use for
       * setting up observers.
       * @param {HTMLElement} klass
       * @private
       */
      function ownObserversForClass(klass) {
        if (!klass.hasOwnProperty(goog.reflect.objectProperty('__ownObservers', klass))) {
          klass.__ownObservers = klass.hasOwnProperty(goog.reflect.objectProperty('observers', klass)) ? klass.observers : [];
        }
        return klass.__ownObservers;
      }

      /**
       * Mixes `props` into `flattenedProps` but upgrades shorthand type
       * syntax to { type: Type}.
       * @param {Object} flattenedProps
       * @param {Object} props
       * @private
       */
      function flattenProperties(flattenedProps, props) {
        for (var p in props) {
          var o = props[p];
          if (typeof o == 'function') {
            o = { type: o };
          }
          flattenedProps[p] = o;
        }
        return flattenedProps;
      }

      /**
       * Returns a flattened list of properties mixed together from the chain of all
       * constructor's `config.properties`. This list is used to create
       * (1) observedAttributes,
       * (2) class property default values
       * @param {HTMLElement} klass
       * @return {PolymerElementProperties}
       * @private
       */
      function propertiesForClass(klass) {
        if (!klass.hasOwnProperty(goog.reflect.objectProperty('__classProperties', klass))) {
          klass.__classProperties = flattenProperties({}, ownPropertiesForClass(klass));
          var superCtor = Object.getPrototypeOf(klass.prototype).constructor;
          if (superCtor.prototype instanceof PolymerElement) {
            klass.__classProperties = Object.assign(Object.create(propertiesForClass(superCtor)), klass.__classProperties);
          }
        }
        return klass.__classProperties;
      }

      /**
       * Returns a list of properties with default values.
       * This list is created as an optimization since it is a subset of
       * the list returned from `propertiesForClass`.
       * This list is used in `_initializeProperties` to set property defaults.
       * @param {HTMLElement} klass
       * @return {PolymerElementProperties}
       * @private
       */
      function propertyDefaultsForClass(klass) {
        if (!klass.hasOwnProperty(goog.reflect.objectProperty('__classPropertyDefaults', klass))) {
          klass.__classPropertyDefaults = null;
          var props = propertiesForClass(klass);
          for (var p in props) {
            var info = props[p];
            if ('value' in info) {
              klass.__classPropertyDefaults = klass.__classPropertyDefaults || {};
              klass.__classPropertyDefaults[p] = info;
            }
          }
        }
        return klass.__classPropertyDefaults;
      }

      /**
       * Returns true if a `klass` has finalized. Called in `ElementClass.finalize()`
       * @param {HTMLElement} klass
       * @private
       */
      function hasClassFinalized(klass) {
        return klass.hasOwnProperty(goog.reflect.objectProperty('__finalized', klass));
      }

      /**
       * Called by `ElementClass.finalize()`. Ensures this `klass` and
       * *all superclasses* are finalized by traversing the prototype chain
       * and calling `klass.finalize()`.
       * @param {HTMLElement} klass
       * @private
       */
      function finalizeClassAndSuper(klass) {
        var proto = klass.prototype;
        var superCtor = Object.getPrototypeOf(proto).constructor;
        if (superCtor.prototype instanceof PolymerElement) {
          superCtor.finalize();
        }
        finalizeClass(klass);
      }

      /**
       * Configures a `klass` based on a staic `klass.config` object and
       * a `template`. This includes creating accessors and effects
       * for properties in `config` and the `template` as well as preparing the
       * `template` for stamping.
       */
      function finalizeClass(klass) {
        klass.__finalized = true;
        var proto = klass.prototype;
        if (klass.hasOwnProperty(goog.reflect.objectProperty('is', klass)) && klass.is) {
          Polymer.telemetry.register(proto);
        }
        var props = ownPropertiesForClass(klass);
        if (props) {
          finalizeProperties(proto, props);
        }
        var observers = ownObserversForClass(klass);
        if (observers) {
          finalizeObservers(proto, observers, props);
        }
        // note: create "working" template that is finalized at instance time
        var template = klass.template;
        if (template) {
          if (typeof template === 'string') {
            var t = document.createElement('template');
            t.innerHTML = template;
            template = t;
          } else {
            template = template.cloneNode(true);
          }
          proto._template = template;
        }
      }

      /**
       * Configures a `proto` based on a `properties` object.
       * Leverages `PropertyEffects` to create property accessors and effects
       * supporting, observers, reflecting to attributes, change notification,
       * computed properties, and read only properties.
       * @param {HTMLElement} proto
       * @param {Object} properties
       * @private
       */
      function finalizeProperties(proto, properties) {
        for (var p in properties) {
          createPropertyFromConfig(proto, p, properties[p], properties);
        }
      }

      /**
       * Configures a `proto` based on a `observers` array.
       * Leverages `PropertyEffects` to create observers.
       * @param {HTMLElement} proto
       * @param {Array} observers
       * @private
       */
      function finalizeObservers(proto, observers, dynamicProperties) {
        for (var i = 0; i < observers.length; i++) {
          proto._createMethodObserver(observers[i], dynamicProperties);
        }
      }

      /**
       * Creates effects for a property.
       *
       * Note, once a property has been set to
       * `readOnly`, `computed`, `reflectToAttribute`, or `notify`
       * these values may not be changed. For example, a subclass cannot
       * alter these settings. However, additional `observers` may be added
       * by subclasses.
       *
       * The info object should may contain property metadata as follows:
       *
       * * `type`: {function} type to which an attribute matching the property
       * is deserialized. Note the property is camel-cased from a dash-cased
       * attribute. For example, 'foo-bar' attribute is dersialized to a
       * property named 'fooBar'.
       *
       * * `readOnly`: {boolean} creates a readOnly property and
       * makes a private setter for the private of the form '_setFoo' for a
       * property 'foo',
       *
       * * `computed`: {string} creates a computed property. A computed property
       * also automatically is set to `readOnly: true`. The value is calculated
       * by running a method and arguments parsed from the given string. For
       * example 'compute(foo)' will compute a given property when the
       * 'foo' property changes by executing the 'compute' method. This method
       * must return the computed value.
       *
       * * `reflectToAttriute`: {boolean} If true, the property value is reflected
       * to an attribute of the same name. Note, the attribute is dash-cased
       * so a property named 'fooBar' is reflected as 'foo-bar'.
       *
       * * `notify`: {boolean} sends a non-bubbling notification event when
       * the property changes. For example, a property named 'foo' sends an
       * event named 'foo-changed' with `event.detail` set to the value of
       * the property.
       *
       * * observer: {string} name of a method that runs when the property
       * changes. The arguments of the method are (value, previousValue).
       *
       * Note: Users may want control over modifying property
       * effects via subclassing. For example, a user might want to make a
       * reflectToAttribute property not do so in a subclass. We've chosen to
       * disable this because it leads to additional complication.
       * For example, a readOnly effect generates a special setter. If a subclass
       * disables the effect, the setter would fail unexpectedly.
       * Based on feedback, we may want to try to make effects more malleable
       * and/or provide an advanced api for manipulating them.
       * Also consider adding warnings when an effect cannot be changed.
       *
       * @param {HTMLElement} proto
       * @param {string} name Name of the property.
       * @param {object} info Info object from which to create property effects.
       * Supported keys:
       * @param {object} allProps Flattened map of all properties defined in this
       *   element (including inherited properties)
       * @private
       */
      function createPropertyFromConfig(proto, name, info, allProps) {
        // computed forces readOnly...
        if (info.computed) {
          info.readOnly = true;
        }
        // Note, since all computed properties are readOnly, this prevents
        // adding additional computed property effects (which leads to a confusing
        // setup where multiple triggers for setting a property)
        // While we do have `hasComputedEffect` this is set on the property's
        // dependencies rather than itself.
        if (info.computed && !proto._hasReadOnlyEffect(name)) {
          proto._createComputedProperty(name, info.computed, allProps);
        }
        if (info.readOnly && !proto._hasReadOnlyEffect(name)) {
          proto._createReadOnlyProperty(name, !info.computed);
        }
        if (info.reflectToAttribute && !proto._hasReflectEffect(name)) {
          proto._createReflectedProperty(name);
        }
        if (info.notify && !proto._hasNotifyEffect(name)) {
          proto._createNotifyingProperty(name);
        }
        // always add observer
        if (info.observer) {
          proto._createPropertyObserver(name, info.observer, allProps[info.observer]);
        }
      }

      /**
       * Configures an element `proto` to function with a given `template`.
       * The element name `is` and extends `ext` must be specified for ShadyCSS
       * style scoping.
       * @param {HTMLElement} proto
       * @param {HTMLTemplateElement} template
       * @param {string} baseURI URL against which to resolve urls in
       * style element cssText.
       * @param {string} is
       * @param {string} ext
       * @private
       */
      function finalizeTemplate(proto, template, baseURI, is, ext) {
        // support `include="module-name"`
        var cssText = Polymer.StyleGather.cssFromTemplate(template, baseURI) + Polymer.StyleGather.cssFromModuleImports(is);
        if (cssText) {
          var style = document.createElement('style');
          style.textContent = cssText;
          template.content.insertBefore(style, template.content.firstChild);
        }
        if (window.ShadyCSS) {
          window.ShadyCSS.prepareTemplate(template, is, ext);
        }
        proto._bindTemplate(template, propertiesForClass(proto.constructor));
      }

      /**
       * @polymerMixinClass
       * @unrestricted
       */

      var PolymerElement = function (_polymerElementBase) {
        _inherits(PolymerElement, _polymerElementBase);

        _createClass(PolymerElement, null, [{
          key: 'finalize',


          /**
           * Called automatically when the first element instance is created to
           * ensure that class finalization work has been completed.
           * May be called by users to eagerly perform class finalization work
           * prior to the creation of the first element instance.
           *
           * Class finalization work generally includes meta-programming such as
           * creating property accessors and any property effect metadata needed for
           * the features used.
           *
           * @public
           */
          value: function finalize() {
            if (!hasClassFinalized(this)) {
              finalizeClassAndSuper(this);
            }
          }

          /**
           * Returns the template stamped into this element's shadow root.
           *
           * If a `static get is()` getter is defined, the default implementation
           * will return the first `<template>` in a `dom-module` whose `id`
           * matches this element's `is`.
           *
           * Users may override this getter to return an arbitrary template
           * (in which case the `is` getter is unnecessary). The template returned
           * may be either an `HTMLTemplateElement` or a string that will be
           * automatically parsed into a template.
           *
           * Note that when subclassing, if the super class overrode the default
           * implementation and the subclass would like to provide an alternate
           * template via a `dom-module`, it should override this getter and
           * return `Polymer.DomModule.import(this.is, 'template')`.
           *
           * If a subclass would like to modify the super class template, it should
           * clone it rather than modify it in place.  If the getter does expensive
           * work such as cloning/modifying a template, it should memoize the
           * template for maximum performance:
           *
           *   let memoizedTemplate;
           *   class MySubClass extends MySuperClass {
           *     static get template() {
           *       if (!memoizedTemplate) {
           *         memoizedTemplate = super.template.cloneNode(true);
           *         let subContent = document.createElement('div');
           *         subContent.textContent = 'This came from MySubClass';
           *         memoizedTemplate.content.appendChild(subContent);
           *       }
           *       return memoizedTemplate;
           *     }
           *   }
           *
           * @returns {HTMLTemplateElement|string}
           */

        }, {
          key: 'observedAttributes',


          /**
           * Standard Custom Elements V1 API.  The default implementation returns
           * a list of dash-cased attributes based on a flattening of all properties
           * declared in `static get properties()` for this element and any
           * superclasses.
           *
           * @return {Array} Observed attribute list
           */
          get: function get() {
            if (!this.hasOwnProperty(goog.reflect.objectProperty('__observedAttributes', this))) {
              var list = [];
              var properties = propertiesForClass(this);
              for (var prop in properties) {
                list.push(Polymer.CaseMap.camelToDashCase(prop));
              }
              this.__observedAttributes = list;
            }
            return this.__observedAttributes;
          }
        }, {
          key: 'template',
          get: function get() {
            if (!this.hasOwnProperty(goog.reflect.objectProperty('_template', this))) {
              this._template = Polymer.DomModule.import(this.is, 'template') ||
              // note: implemented so a subclass can retrieve the super
              // template; call the super impl this way so that `this` points
              // to the superclass.
              Object.getPrototypeOf(this.prototype).constructor.template;
            }
            return this._template;
          }

          /**
           * Path matching the url from which the element was imported.
           * This path is used to resolve url's in template style cssText.
           * The `importPath` property is also set on element instances and can be
           * used to create bindings relative to the import path.
           * Defaults to the path matching the url containing a `dom-module` element
           * matching this element's static `is` property.
           * Note, this path should contain a trailing `/`.
           *
           * @returns {string}
           */

        }, {
          key: 'importPath',
          get: function get() {
            if (!this.hasOwnProperty(goog.reflect.objectProperty('_importPath', this))) {
              var _module = Polymer.DomModule.import(this.is);
              this._importPath = _module ? _module.assetpath : '' || Object.getPrototypeOf(this.prototype).constructor.importPath;
            }
            return this._importPath;
          }
        }]);

        function PolymerElement() {
          _classCallCheck(this, PolymerElement);

          var _this = _possibleConstructorReturn(this, (PolymerElement.__proto__ || Object.getPrototypeOf(PolymerElement)).call(this));

          Polymer.telemetry.instanceCount++;
          // Stamp template
          if (_this._template) {
            _this.root = _this._stampTemplate(_this._template);
          } else {
            _this.root = _this;
          }
          return _this;
        }

        /**
         * Overrides the default `Polymer.PropertyAccessors` to ensure class
         * metaprogramming related to property accessors and effects has
         * completed (calls `finalize`).
         *
         * It also initializes any property defaults provided via `value` in
         * `properties` metadata.
         *
         * @override
         */


        _createClass(PolymerElement, [{
          key: '_initializeProperties',
          value: function _initializeProperties() {
            this.constructor.finalize();
            var importPath = this.constructor.importPath;
            // note: finalize template when we have access to `localName` to
            // avoid dependence on `is` for polyfilling styling.
            if (this._template && !this._template.__polymerFinalized) {
              this._template.__polymerFinalized = true;
              var baseURI = importPath ? Polymer.ResolveUrl.resolveUrl(importPath) : '';
              finalizeTemplate(this.__proto__, this._template, baseURI, this.localName);
            }
            _get(PolymerElement.prototype.__proto__ || Object.getPrototypeOf(PolymerElement.prototype), '_initializeProperties', this).call(this);
            // set path defaults
            this.rootPath = Polymer.rootPath;
            this.importPath = importPath;
            // apply property defaults...
            var p$ = propertyDefaultsForClass(this.constructor);
            if (!p$) {
              return;
            }
            for (var p in p$) {
              var info = p$[p];
              if (!this._isPropertyPending(p)) {
                var value = typeof info.value == 'function' ? info.value.call(this) : info.value;
                if (this._hasPropertyEffect(p)) {
                  this._setProperty(p, value);
                } else {
                  this[p] = value;
                }
              }
            }
          }

          /**
           * Provides a default implementation of the standard Custom Elements
           * `connectedCallback`.
           *
           * The default implementation enables the property effects system and
           * flushes any pending properties, and updates shimmed CSS properties
           * when using the ShadyCSS scoping/custom properties polyfill.
           *
           * @override
           */

        }, {
          key: 'connectedCallback',
          value: function connectedCallback() {
            if (window.ShadyCSS) {
              window.ShadyCSS.styleElement(this);
            }
            this._flushProperties();
          }

          /**
           * Provides a default implementation of the standard Custom Elements
           * `disconnectedCallback`.
           *
           * @override
           */

        }, {
          key: 'disconnectedCallback',
          value: function disconnectedCallback() {}

          /**
           * Implements `PropertyEffects`'s `_readyClients` call. Attaches
           * element dom by calling `_attachDom` with the dom stamped from the
           * element's template via `_stampTemplate`. Note that this allows
           * client dom to be attached to the element prior to any observers
           * running.
           *
           * @override
           */

        }, {
          key: '_readyClients',
          value: function _readyClients() {
            _get(PolymerElement.prototype.__proto__ || Object.getPrototypeOf(PolymerElement.prototype), '_readyClients', this).call(this);
            if (this._template) {
              this.root = this._attachDom(this.root);
            }
          }

          /**
           * Attaches an element's stamped dom to itself. By default,
           * this method creates a `shadowRoot` and adds the dom to it.
           * However, this method may be overridden to allow an element
           * to put its dom in another location.
           *
           * @method _attachDom
           * @throws {Error}
           * @suppress {missingReturn}
           * @param {NodeList} dom to attach to the element.
           * @return {Node} node to which the dom has been attached.
           */

        }, {
          key: '_attachDom',
          value: function _attachDom(dom) {
            if (this.attachShadow) {
              if (dom) {
                if (!this.shadowRoot) {
                  this.attachShadow({ mode: 'open' });
                }
                this.shadowRoot.appendChild(dom);
                return this.shadowRoot;
              }
            } else {
              throw new Error('ShadowDOM not available. ' +
              // TODO(sorvell): move to compile-time conditional when supported
              'Polymer.Element can create dom as children instead of in ' + 'ShadowDOM by setting `this.root = this;\` before \`ready\`.');
            }
          }

          /**
           * Provides a default implementation of the standard Custom Elements
           * `attributeChangedCallback`.
           *
           * By default, attributes declared in `properties` metadata are
           * deserialized using their `type` information to properties of the
           * same name.  "Dash-cased" attributes are deserialzed to "camelCase"
           * properties.
           *
           * @override
           */

        }, {
          key: 'attributeChangedCallback',
          value: function attributeChangedCallback(name, old, value) {
            if (old !== value) {
              var property = caseMap.dashToCamelCase(name);
              var type = propertiesForClass(this.constructor)[property].type;
              if (!this._hasReadOnlyEffect(property)) {
                this._attributeToProperty(name, value, type);
              }
            }
          }

          /**
           * When using the ShadyCSS scoping and custom property shim, causes all
           * shimmed styles in this element (and its subtree) to be updated
           * based on current custom property values.
           *
           * The optional parameter overrides inline custom property styles with an
           * object of properties where the keys are CSS properties, and the values
           * are strings.
           *
           * Example: `this.updateStyles({'--color': 'blue'})`
           *
           * These properties are retained unless a value of `null` is set.
           *
           * @param {Object=} properties Bag of custom property key/values to
           *   apply to this element.
           */

        }, {
          key: 'updateStyles',
          value: function updateStyles(properties) {
            if (window.ShadyCSS) {
              window.ShadyCSS.styleSubtree(this, properties);
            }
          }

          /**
           * Rewrites a given URL relative to a base URL. The base URL defaults to
           * the original location of the document containing the `dom-module` for
           * this element. This method will return the same URL before and after
           * bundling.
           *
           * @param {string} url URL to resolve.
           * @param {string=} base Optional base URL to resolve against, defaults
           * to the element's `importPath`
           * @return {string} Rewritten URL relative to base
           */

        }, {
          key: 'resolveUrl',
          value: function resolveUrl(url, base) {
            if (!base && this.importPath) {
              base = Polymer.ResolveUrl.resolveUrl(this.importPath);
            }
            return Polymer.ResolveUrl.resolveUrl(url, base);
          }
        }]);

        return PolymerElement;
      }(polymerElementBase);

      return PolymerElement;
    });

    /**
     * Provides basic tracking of element definitions (registrations) and
     * instance counts.
     *
     * @namespace
     * @summary Provides basic tracking of element definitions (registrations) and
     * instance counts.
     */
    Polymer.telemetry = {
      /**
       * Total number of Polymer element instances created.
       * @type {number}
       */
      instanceCount: 0,
      /**
       * Array of Polymer element classes that have been finalized.
       * @type {Array<Polymer.Element>}
       */
      registrations: [],
      /**
       * @private
       */
      _regLog: function _regLog(prototype) {
        console.log('[' + prototype.is + ']: registered');
      },
      /**
       * Registers a class prototype for telemetry purposes.
       * @protected
       */
      register: function register(prototype) {
        this.registrations.push(prototype);
        Polymer.log && this._regLog(prototype);
      },
      /**
       * Logs all elements registered with an `is` to the console.
       * @public
       */
      dumpRegistrations: function dumpRegistrations() {
        this.registrations.forEach(this._regLog);
      }
    };

    /**
     * When using the ShadyCSS scoping and custom property shim, causes all
     * shimmed `styles` (via `custom-style`) in the document (and its subtree)
     * to be updated based on current custom property values.
     *
     * The optional parameter overrides inline custom property styles with an
     * object of properties where the keys are CSS properties, and the values
     * are strings.
     *
     * Example: `Polymer.updateStyles({'--color': 'blue'})`
     *
     * These properties are retained unless a value of `null` is set.
     *
     * @param {Object=} properties Bag of custom property key/values to
     *   apply to the document.
     */
    Polymer.updateStyles = function (props) {
      if (window.ShadyCSS) {
        window.ShadyCSS.styleDocument(props);
      }
    };

    /**
     * Globally settable property that is automatically assigned to
     * `Polymer.ElementMixin` instances, useful for binding in templates to
     * make URL's relative to an application's root.  Defaults to the main
     * document URL, but can be overridden by users.  It may be useful to set
     * `Polymer.rootPath` to provide a stable application mount path when
     * using client side routing.
     *
     * @memberof Polymer
     */
    Polymer.rootPath = Polymer.rootPath || Polymer.ResolveUrl.pathFromUrl(document.baseURI || window.location.href);
  })();

  /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

  /*__wc__loader*/

  (function (document) {
    var _htmlStr = "\n\n\n";
    if (document.head) {
      var el = document.head;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  (function (document) {
    var _htmlStr = "";
    if (document.body) {
      var el = document.body;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  __webpack_require__(0);

  __webpack_require__(3);

  (function () {
    'use strict';

    var modules = {};
    var lcModules = {};
    function findModule(id) {
      return modules[id] || lcModules[id.toLowerCase()];
    }

    function styleOutsideTemplateCheck(inst) {
      if (inst.querySelector('style')) {
        console.warn('dom-module %s has style outside template', inst.id);
      }
    }

    /**
     * The `dom-module` element registers the dom it contains to the name given
     * by the module's id attribute. It provides a unified database of dom
     * accessible via its static `import` API.
     *
     * A key use case of `dom-module` is for providing custom element `<template>`s
     * via HTML imports that are parsed by the native HTML parser, that can be
     * relocated during a bundling pass and still looked up by `id`.
     *
     * Example:
     *
     *     <dom-module id="foo">
     *       <img src="stuff.png">
     *     </dom-module>
     *
     * Then in code in some other location that cannot access the dom-module above
     *
     *     let img = document.createElement('dom-module').import('foo', 'img');
     *
     * @extends HTMLElement
     * @memberof Polymer
     * @summary Custom element that provides a registry of relocatable DOM content
     *   by `id` that is agnostic to bundling.
     */

    var DomModule = function (_HTMLElement) {
      _inherits(DomModule, _HTMLElement);

      function DomModule() {
        _classCallCheck(this, DomModule);

        return _possibleConstructorReturn(this, (DomModule.__proto__ || Object.getPrototypeOf(DomModule)).apply(this, arguments));
      }

      _createClass(DomModule, [{
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(name, old, value) {
          if (old !== value) {
            this.register();
          }
        }

        /**
         * The absolute URL of the original location of this `dom-module`.
         *
         * This value will differ from this element's `ownerDocument` in the
         * following ways:
         * - Takes into account any `assetpath` attribute added during bundling
         *   to indicate the original location relative to the bundled location
         * - Uses the HTMLImports polyfill's `importForElement` API to ensure
         *   the path is relative to the import document's location since
         *   `ownerDocument` is not currently polyfilled
         */

      }, {
        key: 'register',


        /**
         * Registers the dom-module at a given id. This method should only be called
         * when a dom-module is imperatively created. For
         * example, `document.createElement('dom-module').register('foo')`.
         * @method register
         * @param {string=} id The id at which to register the dom-module.
         */
        value: function register(id) {
          id = id || this.id;
          if (id) {
            this.id = id;
            // store id separate from lowercased id so that
            // in all cases mixedCase id will stored distinctly
            // and lowercase version is a fallback
            modules[id] = this;
            lcModules[id.toLowerCase()] = this;
            styleOutsideTemplateCheck(this);
          }
        }
      }, {
        key: 'assetpath',
        get: function get() {
          // Don't override existing assetpath.
          if (!this.__assetpath) {
            // note: assetpath set via an attribute must be relative to this
            // element's location; accomodate polyfilled HTMLImports
            var owner = window.HTMLImports && HTMLImports.importForElement ? HTMLImports.importForElement(this) || document : this.ownerDocument;
            var url = Polymer.ResolveUrl.resolveUrl(this.getAttribute('assetpath') || '', owner.baseURI);
            this.__assetpath = Polymer.ResolveUrl.pathFromUrl(url);
          }
          return this.__assetpath;
        }
      }], [{
        key: 'import',


        /**
         * Retrieves the dom specified by `selector` in the module specified by
         * `id`. For example, this.import('foo', 'img');
         * @method register
         * @param {string} id
         * @param {string=} selector
         * @return {Element} Returns the dom which matches `selector` in the module
         * at the specified `id`.
         */
        value: function _import(id, selector) {
          if (id) {
            var m = findModule(id);
            if (m && selector) {
              return m.querySelector(selector);
            }
            return m;
          }
          return null;
        }
      }, {
        key: 'observedAttributes',
        get: function get() {
          return ['id'];
        }
      }]);

      return DomModule;
    }(HTMLElement);

    DomModule.prototype['modules'] = modules;

    customElements.define('dom-module', DomModule);

    // export
    Polymer.DomModule = DomModule;
  })();

  /***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

  /*__wc__loader*/

  (function (document) {
    var _htmlStr = "\n\n\n\n\n\n";
    if (document.head) {
      var el = document.head;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  (function (document) {
    var _htmlStr = "";
    if (document.body) {
      var el = document.body;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  __webpack_require__(0);

  __webpack_require__(1);

  __webpack_require__(2);

  __webpack_require__(9);

  (function () {

    'use strict';

    var caseMap = Polymer.CaseMap;

    var microtask = Polymer.Async.microTask;

    // Save map of native properties; this forms a blacklist or properties
    // that won't have their values "saved" by `saveAccessorValue`, since
    // reading from an HTMLElement accessor from the context of a prototype throws
    var nativeProperties = {};
    var proto = HTMLElement.prototype;
    while (proto) {
      var props = Object.getOwnPropertyNames(proto);
      for (var i = 0; i < props.length; i++) {
        nativeProperties[props[i]] = true;
      }
      proto = Object.getPrototypeOf(proto);
    }

    /**
     * Used to save the value of a property that will be overridden with
     * an accessor. If the `model` is a prototype, the values will be saved
     * in `__dataProto`, and it's up to the user (or downstream mixin) to
     * decide how/when to set these values back into the accessors.
     * If `model` is already an instance (it has a `__data` property), then
     * the value will be set as a pending property, meaning the user should
     * call `_invalidateProperties` or `_flushProperties` to take effect
     *
     * @param {Object} model Prototype or instance
     * @param {string} property Name of property
     * @private
     */
    function saveAccessorValue(model, property) {
      // Don't read/store value for any native properties since they could throw
      if (!nativeProperties[property]) {
        var value = model[property];
        if (value !== undefined) {
          if (model.__data) {
            // Adding accessor to instance; update the property
            // It is the user's responsibility to call _flushProperties
            model._setPendingProperty(property, value);
          } else {
            // Adding accessor to proto; save proto's value for instance-time use
            if (!model.__dataProto) {
              model.__dataProto = {};
            } else if (!model.hasOwnProperty(goog.reflect.objectProperty('__dataProto', model))) {
              model.__dataProto = Object.create(model.__dataProto);
            }
            model.__dataProto[property] = value;
          }
        }
      }
    }

    /**
     * Element class mixin that provides basic meta-programming for creating one
     * or more property accessors (getter/setter pair) that enqueue an async
     * (batched) `_propertiesChanged` callback.
     *
     * For basic usage of this mixin, simply declare attributes to observe via
     * the standard `static get observedAttributes()`, implement `_propertiesChanged`
     * on the class, and then call `MyClass.createPropertiesForAttributes()` once
     * on the class to generate property accessors for each observed attribute
     * prior to instancing.  Any `observedAttributes` will automatically be
     * deserialized via `attributeChangedCallback` and set to the associated
     * property using `dash-case`-to-`camelCase` convention.
     *
     * @polymerMixin
     * @memberof Polymer
     * @summary Element class mixin for reacting to property changes from
     *   generated property accessors.
     */
    Polymer.PropertyAccessors = Polymer.dedupingMixin(function (superClass) {

      return function (_superClass) {
        _inherits(PropertyAccessors, _superClass);

        _createClass(PropertyAccessors, null, [{
          key: 'createPropertiesForAttributes',


          /**
           * Generates property accessors for all attributes in the standard
           * static `observedAttributes` array.
           *
           * Attribute names are mapped to property names using the `dash-case` to
           * `camelCase` convention
           *
           */
          value: function createPropertiesForAttributes() {
            var a$ = this.observedAttributes;
            for (var _i = 0; _i < a$.length; _i++) {
              this.prototype._createPropertyAccessor(caseMap.dashToCamelCase(a$[_i]));
            }
          }
        }]);

        function PropertyAccessors() {
          _classCallCheck(this, PropertyAccessors);

          var _this3 = _possibleConstructorReturn(this, (PropertyAccessors.__proto__ || Object.getPrototypeOf(PropertyAccessors)).call(this));

          _this3._initializeProperties();
          return _this3;
        }

        _createClass(PropertyAccessors, [{
          key: 'attributeChangedCallback',
          value: function attributeChangedCallback(name, old, value) {
            if (old !== value) {
              this._attributeToProperty(name, value);
            }
          }

          /**
           * Initializes the local storage for property accessors.
           *
           * Provided as an override point for performing any setup work prior
           * to initializing the property accessor system.
           *
           * @protected
           */

        }, {
          key: '_initializeProperties',
          value: function _initializeProperties() {
            this.__serializing = false;
            this.__dataCounter = 0;
            this.__dataInvalid = false;
            // initialize data with prototype values saved when creating accessors
            this.__data = {};
            this.__dataPending = null;
            this.__dataOld = null;
            if (this.__dataProto) {
              this._initializeProtoProperties(this.__dataProto);
            }
          }

          /**
           * Called at instance time with bag of properties that were overwritten
           * by accessors on the prototype when accessors were created.
           *
           * The default implementation sets these properties back into the
           * setter at instance time.  This method is provided as an override
           * point for customizing or providing more efficient initialization.
           *
           * @param {Object} props Bag of property values that were overwritten
           *   when creating property accessors.
           * @protected
           */

        }, {
          key: '_initializeProtoProperties',
          value: function _initializeProtoProperties(props) {
            for (var p in props) {
              this._setProperty(p, props[p]);
            }
          }

          /**
           * Ensures the element has the given attribute. If it does not,
           * assigns the given value to the attribute.
           *
           *
           * @method _ensureAttribute
           * @param {string} attribute Name of attribute to ensure is set.
           * @param {string} value of the attribute.
           */

        }, {
          key: '_ensureAttribute',
          value: function _ensureAttribute(attribute, value) {
            if (!this.hasAttribute(attribute)) {
              this._valueToNodeAttribute(this, value, attribute);
            }
          }

          /**
           * Deserializes an attribute to its associated property.
           *
           * This method calls the `_deserializeValue` method to convert the string to
           * a typed value.
           *
           * @method _attributeToProperty
           * @param {string} attribute Name of attribute to deserialize.
           * @param {string} value of the attribute.
           * @param {*} type type to deserialize to.
           */

        }, {
          key: '_attributeToProperty',
          value: function _attributeToProperty(attribute, value, type) {
            // Don't deserialize back to property if currently reflecting
            if (!this.__serializing) {
              var property = caseMap.dashToCamelCase(attribute);
              this[property] = this._deserializeValue(value, type);
            }
          }

          /**
           * Serializes a property to its associated attribute.
           *
           * @method _propertyToAttribute
           * @param {string} property Property name to reflect.
           * @param {string=} attribute Attribute name to reflect.
           * @param {*=} value Property value to refect.
           */

        }, {
          key: '_propertyToAttribute',
          value: function _propertyToAttribute(property, attribute, value) {
            this.__serializing = true;
            value = arguments.length < 3 ? this[property] : value;
            this._valueToNodeAttribute(this, value, attribute || caseMap.camelToDashCase(property));
            this.__serializing = false;
          }

          /**
           * Sets a typed value to an HTML attribute on a node.
           *
           * This method calls the `_serializeValue` method to convert the typed
           * value to a string.  If the `_serializeValue` method returns `undefined`,
           * the attribute will be removed (this is the default for boolean
           * type `false`).
           *
           * @method _valueToNodeAttribute
           * @param {Element} node Element to set attribute to.
           * @param {*} value Value to serialize.
           * @param {string} attribute Attribute name to serialize to.
           */

        }, {
          key: '_valueToNodeAttribute',
          value: function _valueToNodeAttribute(node, value, attribute) {
            var str = this._serializeValue(value);
            if (str === undefined) {
              node.removeAttribute(attribute);
            } else {
              node.setAttribute(attribute, str);
            }
          }

          /**
           * Converts a typed JavaScript value to a string.
           *
           * This method is called by Polymer when setting JS property values to
           * HTML attributes.  Users may override this method on Polymer element
           * prototypes to provide serialization for custom types.
           *
           * @method _serializeValue
           * @param {*} value Property value to serialize.
           * @return {string | undefined} String serialized from the provided property value.
           */

        }, {
          key: '_serializeValue',
          value: function _serializeValue(value) {
            /* eslint-disable no-fallthrough */
            switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
              case 'boolean':
                return value ? '' : undefined;

              case 'object':
                if (value instanceof Date) {
                  return value.toString();
                } else if (value) {
                  try {
                    return JSON.stringify(value);
                  } catch (x) {
                    return '';
                  }
                }

              default:
                return value != null ? value.toString() : undefined;
            }
          }

          /**
           * Converts a string to a typed JavaScript value.
           *
           * This method is called by Polymer when reading HTML attribute values to
           * JS properties.  Users may override this method on Polymer element
           * prototypes to provide deserialization for custom `type`s.  Note,
           * the `type` argument is the value of the `type` field provided in the
           * `properties` configuration object for a given property, and is
           * by convention the constructor for the type to deserialize.
           *
           * Note: The return value of `undefined` is used as a sentinel value to
           * indicate the attribute should be removed.
           *
           * @method _deserializeValue
           * @param {string} value Attribute value to deserialize.
           * @param {*} type Type to deserialize the string to.
           * @return {*} Typed value deserialized from the provided string.
           */

        }, {
          key: '_deserializeValue',
          value: function _deserializeValue(value, type) {
            /**
             * @type {*}
             */
            var outValue = void 0;
            switch (type) {
              case Number:
                outValue = Number(value);
                break;

              case Boolean:
                outValue = value !== null;
                break;

              case Object:
                try {
                  outValue = JSON.parse(value);
                } catch (x) {
                  // allow non-JSON literals like Strings and Numbers
                }
                break;

              case Array:
                try {
                  outValue = JSON.parse(value);
                } catch (x) {
                  outValue = null;
                  console.warn('Polymer::Attributes: couldn`t decode Array as JSON');
                }
                break;

              case Date:
                outValue = new Date(value);
                break;

              case String:
              default:
                outValue = value;
                break;
            }

            return outValue;
          }
          /* eslint-enable no-fallthrough */

          /**
           * Creates a setter/getter pair for the named property with its own
           * local storage.  The getter returns the value in the local storage,
           * and the setter calls `_setProperty`, which updates the local storage
           * for the property and enqueues a `_propertiesChanged` callback.
           *
           * This method may be called on a prototype or an instance.  Calling
           * this method may overwrite a property value that already exists on
           * the prototype/instance by creating the accessor.  When calling on
           * a prototype, any overwritten values are saved in `__dataProto`,
           * and it is up to the subclasser to decide how/when to set those
           * properties back into the accessor.  When calling on an instance,
           * the overwritten value is set via `_setPendingProperty`, and the
           * user should call `_invalidateProperties` or `_flushProperties`
           * for the values to take effect.
           *
           * @param {string} property Name of the property
           * @param {boolean=} readOnly When true, no setter is created; the
           *   protected `_setProperty` function must be used to set the property
           * @protected
           */

        }, {
          key: '_createPropertyAccessor',
          value: function _createPropertyAccessor(property, readOnly) {
            saveAccessorValue(this, property);
            Object.defineProperty(this, property, {
              get: function get() {
                return this.__data[property];
              },
              set: readOnly ? function () {} : function (value) {
                this._setProperty(property, value);
              }
            });
          }

          /**
           * Updates the local storage for a property (via `_setPendingProperty`)
           * and enqueues a `_proeprtiesChanged` callback.
           *
           * @param {string} property Name of the property
           * @param {*} value Value to set
           * @protected
           */

        }, {
          key: '_setProperty',
          value: function _setProperty(property, value) {
            if (this._setPendingProperty(property, value)) {
              this._invalidateProperties();
            }
          }

          /**
           * Updates the local storage for a property, records the previous value,
           * and adds it to the set of "pending changes" that will be passed to the
           * `_propertiesChanged` callback.  This method does not enqueue the
           * `_propertiesChanged` callback.
           *
           * @param {string} property Name of the property
           * @param {*} value Value to set
           * @protected
           */

        }, {
          key: '_setPendingProperty',
          value: function _setPendingProperty(property, value) {
            var old = this.__data[property];
            if (this._shouldPropertyChange(property, value, old)) {
              if (!this.__dataPending) {
                this.__dataPending = {};
                this.__dataOld = {};
              }
              // Ensure old is captured from the last turn
              if (!(property in this.__dataOld)) {
                this.__dataOld[property] = old;
              }
              this.__data[property] = value;
              this.__dataPending[property] = value;
              return true;
            }
          }

          /**
           * Returns true if the specified property has a pending change.
           *
           * @param {string} prop Property name
           * @return {boolean} True if property has a pending change
           * @protected
           */

        }, {
          key: '_isPropertyPending',
          value: function _isPropertyPending(prop) {
            return this.__dataPending && prop in this.__dataPending;
          }

          /**
           * Marks the properties as invalid, and enqueues an async
           * `_propertiesChanged` callback.
           *
           * @protected
           */

        }, {
          key: '_invalidateProperties',
          value: function _invalidateProperties() {
            var _this4 = this;

            if (!this.__dataInvalid) {
              this.__dataInvalid = true;
              microtask.run(function () {
                if (_this4.__dataInvalid) {
                  _this4.__dataInvalid = false;
                  _this4._flushProperties();
                }
              });
            }
          }

          /**
           * Calls the `_propertiesChanged` callback with the current set of
           * pending changes (and old values recorded when pending changes were
           * set), and resets the pending set of changes.
           *
           * @protected
           */

        }, {
          key: '_flushProperties',
          value: function _flushProperties() {
            var oldProps = this.__dataOld;
            var changedProps = this.__dataPending;
            this.__dataPending = null;
            this.__dataCounter++;
            this._propertiesChanged(this.__data, changedProps, oldProps);
            this.__dataCounter--;
          }

          /**
           * Callback called when any properties with accessors created via
           * `_createPropertyAccessor` have been set.
           *
           * @param {Object} currentProps Bag of all current accessor values
           * @param {Object} changedProps Bag of properties changed since the last
           *   call to `_propertiesChanged`
           * @param {Object} oldProps Bag of previous values for each property
           *   in `changedProps`
           * @protected
           */

        }, {
          key: '_propertiesChanged',
          value: function _propertiesChanged(currentProps, changedProps, oldProps) {} // eslint-disable-line no-unused-vars


          /**
           * Method called to determine whether a property value should be
           * considered as a change and cause the `_propertiesChanged` callback
           * to be enqueued.
           *
           * The default implementation returns `true` for primitive types if a
           * strict equality check fails, and returns `true` for all Object/Arrays.
           * The method always returns false for `NaN`.
           *
           * Override this method to e.g. provide stricter checking for
           * Objects/Arrays when using immutable patterns.
           *
           * @param {string} property Property name
           * @param {*} value New property value
           * @param {*} old Previous property value
           * @return {boolean} Whether the property should be considered a change
           *   and enqueue a `_proeprtiesChanged` callback
           * @protected
           */

        }, {
          key: '_shouldPropertyChange',
          value: function _shouldPropertyChange(property, value, old) {
            return (
              // Strict equality check
              old !== value && (
              // This ensures (old==NaN, value==NaN) always returns false
              old === old || value === value)
            );
          }
        }]);

        return PropertyAccessors;
      }(superClass);
    });
  })();

  /***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

  /*__wc__loader*/

  (function (document) {
    var _htmlStr = "\n\n\n\n\n\n\n\n\n\n\n";
    if (document.head) {
      var el = document.head;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  (function (document) {
    var _htmlStr = "";
    if (document.body) {
      var el = document.body;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  __webpack_require__(0);

  __webpack_require__(1);

  __webpack_require__(10);

  __webpack_require__(2);

  __webpack_require__(6);

  __webpack_require__(8);

  (function () {

    'use strict';

    var CaseMap = Polymer.CaseMap;

    // Monotonically increasing unique ID used for de-duping effects triggered
    // from multiple properties in the same turn
    var dedupeId = 0;

    // Property effect types; effects are stored on the prototype using these keys
    var TYPES = {
      ANY: '__propertyEffects',
      COMPUTE: '__computeEffects',
      REFLECT: '__reflectEffects',
      NOTIFY: '__notifyEffects',
      PROPAGATE: '__propagateEffects',
      OBSERVE: '__observeEffects',
      READ_ONLY: '__readOnly'
    };

    /**
     * Ensures that the model has an own-property map of effects for the given type.
     * The model may be a prototype or an instance.
     *
     * Property effects are stored as arrays of effects by property in a map,
     * by named type on the model. e.g.
     *
     *   __computeEffects: {
     *     foo: [ ... ],
     *     bar: [ ... ]
     *   }
     *
     * If the model does not yet have an effect map for the type, one is created
     * and returned.  If it does, but it is not an own property (i.e. the
     * prototype had effects), the the map is deeply cloned and the copy is
     * set on the model and returned, ready for new effects to be added.
     *
     * @param {Object} model Prototype or instance
     * @param {string} type Property effect type
     * @return {Object} The own-property map of effects for the given type
     * @private
     */
    function ensureOwnEffectMap(model, type) {
      var effects = model[type];
      if (!effects) {
        effects = model[type] = {};
      } else if (!model.hasOwnProperty(type)) {
        effects = model[type] = Object.create(model[type]);
        for (var p in effects) {
          var protoFx = effects[p];
          var instFx = effects[p] = Array(protoFx.length);
          for (var i = 0; i < protoFx.length; i++) {
            instFx[i] = protoFx[i];
          }
        }
      }
      return effects;
    }

    // -- effects ----------------------------------------------

    /**
     * Runs all effects of a given type for the given set of property changes
     * on an instance.
     *
     * @param {Object} inst The instance with effects to run
     * @param {string} type Type of effect to run
     * @param {Object} props Bag of current property changes
     * @param {Object=} oldProps Bag of previous values for changed properties
     * @private
     */
    function runEffects(inst, effects, props, oldProps, hasPaths) {
      if (effects) {
        var ran = void 0;
        var id = dedupeId++;
        for (var prop in props) {
          if (runEffectsForProperty(inst, effects, id, prop, props, oldProps, hasPaths)) {
            ran = true;
          }
        }
        return ran;
      }
    }

    /**
     * Runs a list of effects for a given property.
     *
     * @param {Object} inst The instance with effects to run
     * @param {Array} effects Array of effects
     * @param {number} id Effect run id used for de-duping effects
     * @param {string} prop Name of changed property
     * @param {*} value Value of changed property
     * @param {*} old Previous value of changed property
     * @private
     */
    function runEffectsForProperty(inst, effects, dedupeId, prop, props, oldProps, hasPaths) {
      var ran = void 0;
      var rootProperty = hasPaths ? Polymer.Path.root(prop) : prop;
      var fxs = effects[rootProperty];
      if (fxs) {
        for (var i = 0, l = fxs.length, fx; i < l && (fx = fxs[i]); i++) {
          if ((!fx.info || fx.info.lastRun !== dedupeId) && (!hasPaths || pathMatchesTrigger(prop, fx.trigger))) {
            fx.fn(inst, prop, props, oldProps, fx.info, hasPaths);
            if (fx.info) {
              fx.info.lastRun = dedupeId;
            }
            ran = true;
          }
        }
      }
      return ran;
    }

    /**
     * Determines whether a property/path that has changed matches the trigger
     * criteria for an effect.  A trigger is a descriptor with the following
     * structure, which matches the descriptors returned from `parseArg`.
     * e.g. for `foo.bar.*`:
     * ```
     * trigger: {
     *   name: 'a.b',
     *   structured: true,
     *   wildcard: true
     * }
     * ```
     * If no trigger is given, the path is deemed to match.
     *
     * @param {string} path Path or property that changed
     * @param {Object} trigger Descriptor
     * @return {boolean} Whether the path matched the trigger
     */
    function pathMatchesTrigger(path, trigger) {
      if (trigger) {
        var triggerPath = trigger.name;
        return triggerPath == path || trigger.structured && Polymer.Path.isAncestor(triggerPath, path) || trigger.wildcard && Polymer.Path.isDescendant(triggerPath, path);
      } else {
        return true;
      }
    }

    /**
     * Implements the "observer" effect.
     *
     * Calls the method with `info.methodName` on the instance, passing the
     * new and old values.
     *
     * @param {Object} inst The instance the effect will be run on
     * @param {string} property Name of property
     * @param {*} value Current value of property
     * @param {*} old Previous value of property
     * @param {Object} info Effect metadata
     * @private
     */
    function runObserverEffect(inst, property, props, oldProps, info) {
      var fn = inst[info.methodName];
      var changedProp = info.property;
      if (fn) {
        fn.call(inst, inst.__data[changedProp], oldProps[changedProp]);
      } else {
        console.warn('observer method `' + info.methodName + '` not defined');
      }
    }

    /**
     * Runs "notify" effects for a set of changed properties.
     *
     * This method differs from the generic `runEffects` method in that it
     * will dispatch path notification events in the case that the property
     * changed was a path and the root property for that path didn't have a
     * "notify" effect.  This is to maintain 1.0 behavior that did not require
     * `notify: true` to ensure object sub-property notifications were
     * sent.
     *
     * @param {Element} inst The instance with effects to run
     * @param {Object} props Bag of current property changes
     * @param {Object} oldProps Bag of previous values for changed properties
     * @private
     */
    function runNotifyEffects(inst, notifyProps, props, oldProps, hasPaths) {
      // Notify
      var fxs = inst.__notifyEffects;
      var notified = void 0;
      var id = dedupeId++;
      // Try normal notify effects; if none, fall back to try path notification
      for (var prop in notifyProps) {
        if (notifyProps[prop]) {
          if (fxs && runEffectsForProperty(inst, fxs, id, prop, props, oldProps, hasPaths)) {
            notified = true;
          } else if (hasPaths && notifyPath(inst, prop, props)) {
            notified = true;
          }
        }
      }
      // Flush host if we actually notified and host was batching
      var host = void 0;
      if (notified && (host = inst.__dataHost) && host._flushProperties) {
        host._flushProperties();
      }
    }

    /**
     * Dispatches {property}-changed events with path information in the detail
     * object to indicate a sub-path of the property was changed.
     *
     * @param {Element} inst The element from which to fire the event
     * @param {string} path The path that was changed
     * @param {*} value
     * @private
     */
    function notifyPath(inst, path, props) {
      var rootProperty = Polymer.Path.root(path);
      if (rootProperty !== path) {
        var eventName = Polymer.CaseMap.camelToDashCase(rootProperty) + '-changed';
        dispatchNotifyEvent(inst, eventName, props[path], path);
        return true;
      }
    }

    /**
     * Dispatches {property}-changed events to indicate a property (or path)
     * changed.
     *
     * @param {Element} inst The element from which to fire the event
     * @param {string} eventName The name of the event to send ('{property}-changed')
     * @param {*} value The value of the changed property
     * @param {string | null | undefined} path If a sub-path of this property changed, the path
     *   that changed (optional).
     * @private
     */
    function dispatchNotifyEvent(inst, eventName, value, path) {
      var detail = {
        value: value,
        queueProperty: true
      };
      if (path) {
        detail.path = path;
      }
      inst.dispatchEvent(new CustomEvent(eventName, { detail: detail }));
    }

    /**
     * Implements the "notify" effect.
     *
     * Dispatches a non-bubbling event named `info.eventName` on the instance
     * with a detail object containing the new `value`.
     *
     * @param {Element} inst The instance the effect will be run on
     * @param {string} property Name of property
     * @param {*} value Current value of property
     * @param {*} old Previous value of property
     * @param {Object} info Effect metadata
     * @private
     */
    function runNotifyEffect(inst, property, props, oldProps, info, hasPaths) {
      var rootProperty = hasPaths ? Polymer.Path.root(property) : property;
      var path = rootProperty != property ? property : null;
      var value = path ? Polymer.Path.get(inst, path) : inst.__data[property];
      if (path && value === undefined) {
        value = props[property]; // specifically for .splices
      }
      dispatchNotifyEvent(inst, info.eventName, value, path);
    }

    /**
     * Adds a 2-way binding notification event listener to the node specified
     *
     * @param {Object} node Child element to add listener to
     * @param {Object} inst Host element instance to handle notification event
     * @param {Object} info Listener metadata stored via addAnnotatedListener
     * @private
     */
    function addNotifyListener(node, inst, info) {
      node.addEventListener(info.event, function (e) {
        handleNotification(e, inst, info.property, info.path, info.negate);
      });
    }

    /**
     * Handler function for 2-way notification events. Receives context
     * information captured in the `addNotifyListener` closure from the
     * `__notifyListeners` metadata.
     *
     * Sets the value of the notified property to the host property or path.  If
     * the event contained path information, translate that path to the host
     * scope's name for that path first.
     *
     * @param {Event} e Notification event (e.g. '<property>-changed')
     * @param {Object} inst Host element instance handling the notification event
     * @param {string} property Child element property that was bound
     * @param {string} path Host property/path that was bound
     * @param {boolean} negate Whether the binding was negated
     * @private
     */
    function handleNotification(e, inst, property, path, negate) {
      var value = void 0;
      var targetPath = e.detail && e.detail.path;
      if (targetPath) {
        path = Polymer.Path.translate(property, path, targetPath);
        value = e.detail && e.detail.value;
      } else {
        value = e.target[property];
      }
      value = negate ? !value : value;
      setPropertyFromNotification(inst, path, value, e);
    }

    /**
     * Called by 2-way binding notification event listeners to set a property
     * or path to the host based on a notification from a bound child.
     *
     * @param {string} path Path on this instance to set
     * @param {*} value Value to set to given path
     * @protected
     */
    function setPropertyFromNotification(inst, path, value, event) {
      var detail = event.detail;
      if (detail && detail.queueProperty) {
        if (!inst.__readOnly || !inst.__readOnly[path]) {
          inst._setPendingPropertyOrPath(path, value, true, Boolean(detail.path));
        }
      } else {
        inst.set(path, value);
      }
    }

    /**
     * Implements the "reflect" effect.
     *
     * Sets the attribute named `info.attrName` to the given property value.
     *
     * @param {Object} inst The instance the effect will be run on
     * @param {string} property Name of property
     * @param {*} value Current value of property
     * @param {*} old Previous value of property
     * @param {Object} info Effect metadata
     * @private
     */
    function runReflectEffect(inst, property, props, oldProps, info) {
      var value = inst.__data[property];
      if (Polymer.sanitizeDOMValue) {
        value = Polymer.sanitizeDOMValue(value, info.attrName, 'attribute', inst);
      }
      inst._propertyToAttribute(property, info.attrName, value);
    }

    /**
     * Runs "computed" effects for a set of changed properties.
     *
     * This method differs from the generic `runEffects` method in that it
     * continues to run computed effects based on the output of each pass until
     * there are no more newly computed properties.  This ensures that all
     * properties that will be computed by the initial set of changes are
     * computed before other effects (binding propagation, observers, and notify)
     * run.
     *
     * @param {Element} inst The instance the effect will be run on
     * @param {Object} changedProps Bag of changed properties
     * @param {Object} oldProps Bag of previous values for changed properties
     * @private
     */
    function runComputedEffects(inst, changedProps, oldProps, hasPaths) {
      var computeEffects = inst.__computeEffects;
      if (computeEffects) {
        var inputProps = changedProps;
        while (runEffects(inst, computeEffects, inputProps, oldProps, hasPaths)) {
          Object.assign(oldProps, inst.__dataOld);
          Object.assign(changedProps, inst.__dataPending);
          inputProps = inst.__dataPending;
          inst.__dataPending = null;
        }
      }
    }

    /**
     * Implements the "computed property" effect by running the method with the
     * values of the arguments specified in the `info` object and setting the
     * return value to the computed property specified.
     *
     * @param {Object} inst The instance the effect will be run on
     * @param {string} property Name of property
     * @param {*} value Current value of property
     * @param {*} old Previous value of property
     * @param {Object} info Effect metadata
     * @private
     */
    function runComputedEffect(inst, property, props, oldProps, info) {
      var result = runMethodEffect(inst, property, props, oldProps, info);
      var computedProp = info.methodInfo;
      if (inst.__propertyEffects && inst.__propertyEffects[computedProp]) {
        inst._setPendingProperty(computedProp, result, true);
      } else {
        inst[computedProp] = result;
      }
    }

    /**
     * Computes path changes based on path links set up using the `linkPaths`
     * API.
     *
     * @param {Element} inst The instance whose props are changing
     * @param {Object} changedProps Bag of changed properties
     * @private
     */
    function computeLinkedPaths(inst, changedProps, hasPaths) {
      var links = void 0;
      if (hasPaths && (links = inst.__dataLinkedPaths)) {
        var cache = inst.__dataTemp;
        var link = void 0;
        for (var a in links) {
          var b = links[a];
          for (var path in changedProps) {
            if (Polymer.Path.isDescendant(a, path)) {
              link = Polymer.Path.translate(a, b, path);
              cache[link] = changedProps[link] = changedProps[path];
              var notifyProps = inst.__dataToNotify || (inst.__dataToNotify = {});
              notifyProps[link] = true;
            } else if (Polymer.Path.isDescendant(b, path)) {
              link = Polymer.Path.translate(b, a, path);
              cache[link] = changedProps[link] = changedProps[path];
              var _notifyProps = inst.__dataToNotify || (inst.__dataToNotify = {});
              _notifyProps[link] = true;
            }
          }
        }
      }
    }

    // -- bindings ----------------------------------------------

    /**
     * Adds "binding" property effects for the template annotation
     * ("note" for short) and node index specified.  These may either be normal
     * "binding" effects (property/path bindings) or "method binding"
     * effects, aka inline computing functions, depending on the type of binding
     * detailed in the note.
     *
     * @param {Object} model Prototype or instance
     * @param {Object} note Annotation note returned from Annotator
     * @param {number} index Index into `__templateNodes` list of annotated nodes that the
     *   note applies to
     * @param {Object=} dynamicFns Map indicating whether method names should
     *   be included as a dependency to the effect.
     * @private
     */
    function addBindingEffect(model, note, index, dynamicFns) {
      for (var i = 0; i < note.parts.length; i++) {
        var part = note.parts[i];
        if (part.signature) {
          addMethodBindingEffect(model, note, part, index, dynamicFns);
        } else if (!part.literal) {
          if (note.kind === 'attribute' && note.name[0] === '-') {
            console.warn('Cannot set attribute ' + note.name + ' because "-" is not a valid attribute starting character');
          } else {
            model._addPropertyEffect(Polymer.Path.root(part.value), TYPES.PROPAGATE, {
              fn: runBindingEffect,
              info: {
                kind: note.kind,
                index: index,
                name: note.name,
                propertyName: note.propertyName,
                value: part.value,
                isCompound: note.isCompound,
                compoundIndex: part.compoundIndex,
                event: part.event,
                customEvent: part.customEvent,
                negate: part.negate
              }
            });
          }
        }
      }
    }

    /**
     * Implements the "binding" (property/path binding) effect.
     *
     * @param {Element} inst The instance the effect will be run on
     * @param {string} path Name of property
     * @param {*} value Current value of property
     * @param {*} old Previous value of property
     * @param {Object} info Effect metadata
     * @private
     */
    function runBindingEffect(inst, path, props, oldProps, info, hasPaths) {
      var value = void 0;
      var node = inst.__templateNodes[info.index];
      // Subpath notification: transform path and set to client
      // e.g.: foo="{{obj.sub}}", path: 'obj.sub.prop', set 'foo.prop'=obj.sub.prop
      if (hasPaths && path.length > info.value.length && info.kind == 'property' && !info.isCompound && node.__propertyEffects && node.__propertyEffects[info.name]) {
        var _value = props[path];
        path = Polymer.Path.translate(info.value, info.name, path);
        if (node._setPendingPropertyOrPath(path, _value, false, true)) {
          inst._enqueueClient(node);
        }
      } else {
        // Root or deeper path was set; extract bound path value
        // e.g.: foo="{{obj.sub}}", path: 'obj', set 'foo'=obj.sub
        //   or: foo="{{obj.sub}}", path: 'obj.sub.prop', set 'foo'=obj.sub
        if (path != info.value) {
          value = Polymer.Path.get(inst, info.value);
        } else {
          if (hasPaths && Polymer.Path.isPath(path)) {
            value = Polymer.Path.get(inst, path);
          } else {
            value = inst.__data[path];
          }
        }
        // Propagate value to child
        applyBindingValue(inst, info, value);
      }
    }

    /**
     * Sets the value for an "binding" (binding) effect to a node,
     * either as a property or attribute.
     *
     * @param {Object} inst The instance owning the binding effect
     * @param {Object} info Effect metadata
     * @param {*} value Value to set
     * @private
     */
    function applyBindingValue(inst, info, value) {
      var node = inst.__templateNodes[info.index];
      value = computeBindingValue(node, value, info);
      if (Polymer.sanitizeDOMValue) {
        value = Polymer.sanitizeDOMValue(value, info.name, info.kind, node);
      }
      if (info.kind == 'attribute') {
        // Attribute binding
        inst._valueToNodeAttribute(node, value, info.name);
      } else {
        // Property binding
        var prop = info.name;
        if (node.__propertyEffects && node.__propertyEffects[prop]) {
          if (!node.__readOnly || !node.__readOnly[prop]) {
            if (node._setPendingProperty(prop, value)) {
              inst._enqueueClient(node);
            }
          }
        } else {
          inst._setUnmanagedPropertyToNode(node, prop, value);
        }
      }
    }

    /**
     * Transforms an "binding" effect value based on compound & negation
     * effect metadata, as well as handling for special-case properties
     *
     * @param {Node} node Node the value will be set to
     * @param {*} value Value to set
     * @param {Object} info Effect metadata
     * @return {*} Transformed value to set
     * @private
     */
    function computeBindingValue(node, value, info) {
      if (info.negate) {
        value = !value;
      }
      if (info.isCompound) {
        var storage = node.__dataCompoundStorage[info.name];
        storage[info.compoundIndex] = value;
        value = storage.join('');
      }
      if (info.kind !== 'attribute') {
        // Some browsers serialize `undefined` to `"undefined"`
        if (info.name === 'textContent' || node.localName == 'input' && info.name == 'value') {
          value = value == undefined ? '' : value;
        }
      }
      return value;
    }

    /**
     * Adds "binding method" property effects for the template binding
     * ("note" for short), part metadata, and node index specified.
     *
     * @param {Object} model Prototype or instance
     * @param {Object} note Binding note returned from Annotator
     * @param {Object} part The compound part metadata
     * @param {number} index Index into `__templateNodes` list of annotated nodes that the
     *   note applies to
     * @param {Object=} dynamicFns Map indicating whether method names should
     *   be included as a dependency to the effect.
     * @private
     */
    function addMethodBindingEffect(model, note, part, index, dynamicFns) {
      createMethodEffect(model, part.signature, TYPES.PROPAGATE, runMethodBindingEffect, {
        index: index,
        isCompound: note.isCompound,
        compoundIndex: part.compoundIndex,
        kind: note.kind,
        name: note.name,
        negate: part.negate,
        part: part
      }, dynamicFns);
    }

    /**
     * Implements the "binding method" (inline computed function) effect.
     *
     * Runs the method with the values of the arguments specified in the `info`
     * object and setting the return value to the node property/attribute.
     *
     * @param {Object} inst The instance the effect will be run on
     * @param {string} property Name of property
     * @param {*} value Current value of property
     * @param {*} old Previous value of property
     * @param {Object} info Effect metadata
     * @private
     */
    function runMethodBindingEffect(inst, property, props, oldProps, info) {
      var val = runMethodEffect(inst, property, props, oldProps, info);
      applyBindingValue(inst, info.methodInfo, val);
    }

    /**
     * Post-processes template bindings (notes for short) provided by the
     * Bindings library for use by the effects system:
     * - Parses bindings for methods into method `signature` objects
     * - Memoizes the root property for path bindings
     * - Recurses into nested templates and processes those templates and
     *   extracts any host properties, which are set to the template's
     *   `_content._hostProps`
     * - Adds bindings from the host to <template> elements for any nested
     *   template's lexically bound "host properties"; template handling
     *   elements can then add accessors to the template for these properties
     *   to forward host properties into template instances accordingly.
     *
     * @param {Array<Object>} notes List of notes to process; the notes are
     *   modified in place.
     * @private
     */
    function processAnnotations(notes) {
      if (!notes._processed) {
        for (var i = 0; i < notes.length; i++) {
          var note = notes[i];
          // Parse bindings for methods & path roots (models)
          for (var j = 0; j < note.bindings.length; j++) {
            var b = note.bindings[j];
            for (var k = 0; k < b.parts.length; k++) {
              var p = b.parts[k];
              if (!p.literal) {
                p.signature = parseMethod(p.value);
                if (!p.signature) {
                  p.rootProperty = Polymer.Path.root(p.value);
                }
              }
            }
          }
          // Recurse into nested templates & bind host props
          if (note.templateContent) {
            processAnnotations(note.templateContent._notes);
            var hostProps = note.templateContent._hostProps = discoverTemplateHostProps(note.templateContent._notes);
            var bindings = [];
            for (var prop in hostProps) {
              bindings.push({
                index: note.index,
                kind: 'property',
                name: '_host_' + prop,
                parts: [{
                  mode: '{',
                  value: prop
                }]
              });
            }
            note.bindings = note.bindings.concat(bindings);
          }
        }
        notes._processed = true;
      }
    }

    /**
     * Finds all property usage in templates (property/path bindings and function
     * arguments) and returns the path roots as keys in a map. Each outer template
     * merges inner _hostProps to propagate inner host property needs to outer
     * templates.
     *
     * @param {Array<Object>} notes List of notes to process for a given template
     * @return {Object<string,boolean>} Map of host properties that the template
     *   (or any nested templates) uses
     * @private
     */
    function discoverTemplateHostProps(notes) {
      var hostProps = {};
      for (var i = 0, n; i < notes.length && (n = notes[i]); i++) {
        // Find all bindings to parent.* and spread them into _parentPropChain
        for (var j = 0, b$ = n.bindings, b; j < b$.length && (b = b$[j]); j++) {
          for (var k = 0, p$ = b.parts, p; k < p$.length && (p = p$[k]); k++) {
            if (p.signature) {
              var args = p.signature.args;
              for (var kk = 0; kk < args.length; kk++) {
                var rootProperty = args[kk].rootProperty;
                if (rootProperty) {
                  hostProps[rootProperty] = true;
                }
              }
              hostProps[p.signature.methodName] = true;
            } else {
              if (p.rootProperty) {
                hostProps[p.rootProperty] = true;
              }
            }
          }
        }
        // Merge child _hostProps into this _hostProps
        if (n.templateContent) {
          var templateHostProps = n.templateContent._hostProps;
          Object.assign(hostProps, templateHostProps);
        }
      }
      return hostProps;
    }

    /**
     * Returns true if a binding's metadata meets all the requirements to allow
     * 2-way binding, and therefore a <property>-changed event listener should be
     * added:
     * - used curly braces
     * - is a property (not attribute) binding
     * - is not a textContent binding
     * - is not compound
     *
     * @param {Object} binding Binding metadata
     * @return {boolean} True if 2-way listener should be added
     * @private
     */
    function shouldAddListener(binding) {
      return binding.name && binding.kind != 'attribute' && binding.kind != 'text' && !binding.isCompound && binding.parts[0].mode === '{';
    }

    /**
     * Sets up a prototypical `__notifyListeners` metadata array to be used at
     * instance time to add event listeners for 2-way bindings.
     *
     * @param {Object} model Prototype (instances not currently supported)
     * @param {number} index Index into `__templateNodes` list of annotated nodes that the
     *   event should be added to
     * @param {string} property Property of target node to listen for changes
     * @param {string} path Host path that the change should be propagated to
     * @param {string=} event A custom event name to listen for (e.g. via the
     *   `{{prop::eventName}}` syntax)
     * @param {boolean=} negate Whether the notified value should be negated before
     *   setting to host path
     * @private
     */
    function addAnnotatedListener(model, index, property, path, event, negate) {
      var eventName = event || CaseMap.camelToDashCase(property) + '-changed';
      model.__notifyListeners = model.__notifyListeners || [];
      model.__notifyListeners.push({
        index: index,
        property: property,
        path: path,
        event: eventName,
        negate: negate
      });
    }

    /**
     * Adds all 2-way binding notification listeners to a host based on
     * `__notifyListeners` metadata recorded by prior calls to`addAnnotatedListener`
     *
     * @param {Object} inst Host element instance
     * @private
     */
    function setupNotifyListeners(inst) {
      var b$ = inst.__notifyListeners;
      for (var i = 0, l = b$.length, info; i < l && (info = b$[i]); i++) {
        var node = inst.__templateNodes[info.index];
        addNotifyListener(node, inst, info);
      }
    }

    /**
     * On the `inst` element that was previously bound, uses `inst.__templateNotes`
     * to setup compound binding storage structures onto the bound
     * nodes (`inst.__templateNodes`).
     * (`inst._, and 2-way binding event listeners are also added.)
     *
     * @param {Object} inst Instance that bas been previously bound
     * @private
     */
    function setupBindings(inst) {
      var notes = inst.__templateNotes;
      if (notes.length) {
        for (var i = 0; i < notes.length; i++) {
          var note = notes[i];
          var node = inst.__templateNodes[i];
          node.__dataHost = inst;
          if (note.bindings) {
            setupCompoundBinding(note, node);
          }
        }
      }
      if (inst.__notifyListeners) {
        setupNotifyListeners(inst);
      }
    }

    // -- for method-based effects (complexObserver & computed) --------------

    /**
     * Adds property effects for each argument in the method signature (and
     * optionally, for the method name if `dynamic` is true) that calls the
     * provided effect function.
     *
     * @param {Element | Object} model Prototype or instance
     * @param {Object} sig Method signature metadata
     * @param {string} type
     * @param {Function} effectFn Function to run when arguments change
     * @param {*=} methodInfo
     * @param {Object=} dynamicFns Map indicating whether method names should
     *   be included as a dependency to the effect. Note, defaults to true
     *   if the signature is statci (sig.static is true).
     * @private
     */
    function createMethodEffect(model, sig, type, effectFn, methodInfo, dynamicFns) {
      var dynamicFn = sig.static || dynamicFns && dynamicFns[sig.methodName];
      var info = {
        methodName: sig.methodName,
        args: sig.args,
        methodInfo: methodInfo,
        dynamicFn: dynamicFn
      };
      for (var i = 0, arg; i < sig.args.length && (arg = sig.args[i]); i++) {
        if (!arg.literal) {
          model._addPropertyEffect(arg.rootProperty, type, {
            fn: effectFn, info: info, trigger: arg
          });
        }
      }
      if (dynamicFn) {
        model._addPropertyEffect(sig.methodName, type, {
          fn: effectFn, info: info
        });
      }
    }

    /**
     * Calls a method with arguments marshaled from properties on the instance
     * based on the method signature contained in the effect metadata.
     *
     * Multi-property observers, computed properties, and inline computing
     * functions call this function to invoke the method, then use the return
     * value accordingly.
     *
     * @param {Object} inst The instance the effect will be run on
     * @param {string} property Name of property
     * @param {*} value Current value of property
     * @param {*} old Previous value of property
     * @param {Object} info Effect metadata
     * @private
     */
    function runMethodEffect(inst, property, props, oldProps, info) {
      // Instances can optionally have a _methodHost which allows redirecting where
      // to find methods. Currently used by `templatize`.
      var context = inst._methodHost || inst;
      var fn = context[info.methodName];
      if (fn) {
        var args = marshalArgs(inst.__data, info.args, property, props);
        return fn.apply(context, args);
      } else if (!info.dynamicFn) {
        console.warn('method `' + info.methodName + '` not defined');
      }
    }

    var emptyArray = [];

    /**
     * Parses an expression string for a method signature, and returns a metadata
     * describing the method in terms of `methodName`, `static` (whether all the
     * arguments are literals), and an array of `args`
     *
     * @param {string} expression The expression to parse
     * @return {?Object} The method metadata object if a method expression was
     *   found, otherwise `undefined`
     * @private
     */
    function parseMethod(expression) {
      // tries to match valid javascript property names
      var m = expression.match(/([^\s]+?)\(([\s\S]*)\)/);
      if (m) {
        var sig = { methodName: m[1], static: true };
        if (m[2].trim()) {
          // replace escaped commas with comma entity, split on un-escaped commas
          var args = m[2].replace(/\\,/g, '&comma;').split(',');
          return parseArgs(args, sig);
        } else {
          sig.args = emptyArray;
          return sig;
        }
      }
      return null;
    }

    /**
     * Parses an array of arguments and sets the `args` property of the supplied
     * signature metadata object. Sets the `static` property to false if any
     * argument is a non-literal.
     *
     * @param {Array<string>} argList Array of argument names
     * @param {Object} sig Method signature metadata object
     * @return {Object} The updated signature metadata object
     * @private
     */
    function parseArgs(argList, sig) {
      sig.args = argList.map(function (rawArg) {
        var arg = parseArg(rawArg);
        if (!arg.literal) {
          sig.static = false;
        }
        return arg;
      }, this);
      return sig;
    }

    /**
     * Parses an individual argument, and returns an argument metadata object
     * with the following fields:
     *
     *   {
     *     value: 'prop',        // property/path or literal value
     *     literal: false,       // whether argument is a literal
     *     structured: false,    // whether the property is a path
     *     rootProperty: 'prop', // the root property of the path
     *     wildcard: false       // whether the argument was a wildcard '.*' path
     *   }
     *
     * @param {string} rawArg The string value of the argument
     * @return {Object} Argument metadata object
     * @private
     */
    function parseArg(rawArg) {
      // clean up whitespace
      var arg = rawArg.trim()
      // replace comma entity with comma
      .replace(/&comma;/g, ',')
      // repair extra escape sequences; note only commas strictly need
      // escaping, but we allow any other char to be escaped since its
      // likely users will do this
      .replace(/\\(.)/g, '\$1');
      // basic argument descriptor
      var a = {
        name: arg
      };
      // detect literal value (must be String or Number)
      var fc = arg[0];
      if (fc === '-') {
        fc = arg[1];
      }
      if (fc >= '0' && fc <= '9') {
        fc = '#';
      }
      switch (fc) {
        case "'":
        case '"':
          a.value = arg.slice(1, -1);
          a.literal = true;
          break;
        case '#':
          a.value = Number(arg);
          a.literal = true;
          break;
      }
      // if not literal, look for structured path
      if (!a.literal) {
        a.rootProperty = Polymer.Path.root(arg);
        // detect structured path (has dots)
        a.structured = Polymer.Path.isDeep(arg);
        if (a.structured) {
          a.wildcard = arg.slice(-2) == '.*';
          if (a.wildcard) {
            a.name = arg.slice(0, -2);
          }
        }
      }
      return a;
    }

    /**
     * Gather the argument values for a method specified in the provided array
     * of argument metadata.
     *
     * The `path` and `value` arguments are used to fill in wildcard descriptor
     * when the method is being called as a result of a path notification.
     *
     * @param {Object} data Instance data storage object to read properties from
     * @param {Array<Object>} args Array of argument metadata
     * @return {Array<*>} Array of argument values
     * @private
     */
    function marshalArgs(data, args, path, props) {
      var values = [];
      for (var i = 0, l = args.length; i < l; i++) {
        var arg = args[i];
        var name = arg.name;
        var v = void 0;
        if (arg.literal) {
          v = arg.value;
        } else {
          if (arg.structured) {
            v = Polymer.Path.get(data, name);
            // when data is not stored e.g. `splices`
            if (v === undefined) {
              v = props[name];
            }
          } else {
            v = data[name];
          }
        }
        if (arg.wildcard) {
          // Only send the actual path changed info if the change that
          // caused the observer to run matched the wildcard
          var baseChanged = name.indexOf(path + '.') === 0;
          var matches = path.indexOf(name) === 0 && !baseChanged;
          values[i] = {
            path: matches ? path : name,
            value: matches ? props[path] : v,
            base: v
          };
        } else {
          values[i] = v;
        }
      }
      return values;
    }

    /**
     * Initializes `__dataCompoundStorage` local storage on a bound node with
     * initial literal data for compound bindings, and sets the joined
     * literal parts to the bound property.
     *
     * When changes to compound parts occur, they are first set into the compound
     * storage array for that property, and then the array is joined to result in
     * the final value set to the property/attribute.
     *
     * @param {Object} note Annotation metadata
     * @param {Node} node Bound node to initialize
     * @private
     */
    function setupCompoundBinding(note, node) {
      var bindings = note.bindings;
      for (var i = 0; i < bindings.length; i++) {
        var binding = bindings[i];
        if (binding.isCompound) {
          // Create compound storage map
          var storage = node.__dataCompoundStorage || (node.__dataCompoundStorage = {});
          var parts = binding.parts;
          // Copy literals from parts into storage for this binding
          var literals = new Array(parts.length);
          for (var j = 0; j < parts.length; j++) {
            literals[j] = parts[j].literal;
          }
          var name = binding.name;
          storage[name] = literals;
          // Configure properties with their literal parts
          if (binding.literal && binding.kind == 'property') {
            node[name] = binding.literal;
          }
        }
      }
    }

    // data api

    /**
     * Sends array splice notifications (`.splices` and `.length`)
     *
     * Note: this implementation only accepts normalized paths
     *
     * @param {Element} inst Instance to send notifications to
     * @param {Array} array The array the mutations occurred on
     * @param {string} path The path to the array that was mutated
     * @param {Array} splices Array of splice records
     * @private
     */
    function _notifySplices(inst, array, path, splices) {
      var splicesPath = path + '.splices';
      inst.notifyPath(splicesPath, { indexSplices: splices });
      inst.notifyPath(path + '.length', array.length);
      // Null here to allow potentially large splice records to be GC'ed.
      inst.__data[splicesPath] = { indexSplices: null };
    }

    /**
     * Creates a splice record and sends an array splice notification for
     * the described mutation
     *
     * Note: this implementation only accepts normalized paths
     *
     * @param {Element} inst Instance to send notifications to
     * @param {Array} array The array the mutations occurred on
     * @param {string} path The path to the array that was mutated
     * @param {number} index Index at which the array mutation occurred
     * @param {number} addedCount Number of added items
     * @param {Array} removed Array of removed items
     * @private
     */
    function notifySplice(inst, array, path, index, addedCount, removed) {
      _notifySplices(inst, array, path, [{
        index: index,
        addedCount: addedCount,
        removed: removed,
        object: array,
        type: 'splice'
      }]);
    }

    /**
     * Returns an upper-cased version of the string.
     *
     * @param {string} name String to uppercase
     * @return {string} Uppercased string
     * @private
     */
    function upper(name) {
      return name[0].toUpperCase() + name.substring(1);
    }

    /**
     * Sets the provided properties into pending data on the instance.
     *
     * @param {HTMLElement} inst Instance to apply data to
     * @param {object} props Bag of instance properties to set
     * @private
     */
    function initalizeInstanceProperties(inst, props) {
      inst.__dataOld = inst.__dataOld || {};
      inst.__dataPending = inst.__dataPending || {};
      var readOnly = inst.__readOnly;
      for (var prop in props) {
        if (!readOnly || !readOnly[prop]) {
          inst.__data[prop] = inst.__dataPending[prop] = props[prop];
        }
      }
    }

    /**
     * Element class mixin that provides meta-programming for Polymer's template
     * binding and data observation (collectively, "property effects") system.
     *
     * This mixin uses provides the following key methods for adding property effects
     * to this element:
     * - `_createPropertyObserver`
     * - `_createMethodObserver`
     * - `_createNotifyingProperty`
     * - `_createReadOnlyProperty`
     * - `_createReflectedProperty`
     * - `_createComputedProperty`
     * - `_bindTemplate`
     *
     * Each method creates one or more property accessors, along with metadata
     * used by this mixin's implementation of `_propertiesChanged` to perform
     * the property effects.  These methods may be called on element instances,
     * but are designed to be called on element prototypes such that the work to
     * set up accessors and effect metadata are done once per element class.
     *
     * @polymerMixin
     * @mixes Polymer.TemplateStamp
     * @mixes Polymer.PropertyAccessors
     * @memberof Polymer
     * @summary Element class mixin that provides meta-programming for Polymer's
     * template binding and data observation system.
     */
    Polymer.PropertyEffects = Polymer.dedupingMixin(function (superClass) {

      var propertyEffectsBase = Polymer.TemplateStamp(Polymer.PropertyAccessors(superClass));

      /**
       * @polymerMixinClass
       * @unrestricted
       */

      var PropertyEffects = function (_propertyEffectsBase) {
        _inherits(PropertyEffects, _propertyEffectsBase);

        function PropertyEffects() {
          _classCallCheck(this, PropertyEffects);

          return _possibleConstructorReturn(this, (PropertyEffects.__proto__ || Object.getPrototypeOf(PropertyEffects)).apply(this, arguments));
        }

        _createClass(PropertyEffects, [{
          key: '_initializeProperties',


          /**
           * Overrides `Polymer.PropertyAccessors` implementation to initialize
           * additional property-effect related properties.
           *
           * @override
           */
          value: function _initializeProperties() {
            _get(PropertyEffects.prototype.__proto__ || Object.getPrototypeOf(PropertyEffects.prototype), '_initializeProperties', this).call(this);
            this.__dataInitialized = false;
            this.__dataClientsInitialized = false;
            this.__dataPendingClients = null;
            this.__dataToNotify = null;
            this.__dataLinkedPaths = null;
            this.__dataHasPaths = false;
            // May be set on instance prior to upgrade
            this.__dataCompoundStorage = this.__dataCompoundStorage || null;
            this.__dataHost = this.__dataHost || null;
            this.__dataTemp = {};
            // Capture instance properties; these will be set into accessors
            // during first flush. Don't set them here, since we want
            // these to overwrite defaults/constructor assignments
            for (var p in this.__propertyEffects) {
              if (this.hasOwnProperty(p)) {
                this.__dataInstanceProps = this.__dataInstanceProps || {};
                this.__dataInstanceProps[p] = this[p];
                delete this[p];
              }
            }
          }

          /**
           * Overrides `Polymer.PropertyAccessors` implementation to provide a
           * more efficient implementation of initializing properties from
           * the prototype on the instance.
           *
           * @override
           */

        }, {
          key: '_initializeProtoProperties',
          value: function _initializeProtoProperties(props) {
            this.__data = Object.create(props);
            this.__dataPending = Object.create(props);
            this.__dataOld = {};
          }

          // Prototype setup ----------------------------------------

          /**
           * Ensures an accessor exists for the specified property, and adds
           * to a list of "property effects" that will run when the accessor for
           * the specified property is set.  Effects are grouped by "type", which
           * roughly corresponds to a phase in effect processing.  The effect
           * metadata should be in the following form:
           *
           *   {
           *     fn: effectFunction, // Reference to function to call to perform effect
           *     info: { ... }       // Effect metadata passed to function
           *     // path: '...'      // Will be set by this method based on path arg
           *   }
           *
           * Effect functions are called with the following signature:
           *
           *   effectFunction(inst, property, currentValue, oldValue, info)
           *
           * This method may be called either on the prototype of a class
           * using the PropertyEffects mixin (for best performance), or on
           * an instance to add dynamic effects.  When called on an instance or
           * subclass of a class that has already had property effects added to
           * its prototype, the property effect lists will be cloned and added as
           * own properties of the caller.
           *
           * @param {string} path Property (or path) that should trigger the effect
           * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
           * @param {Object=} effect Effect metadata object
           * @protected
           */

        }, {
          key: '_addPropertyEffect',
          value: function _addPropertyEffect(property, type, effect) {
            var effects = ensureOwnEffectMap(this, TYPES.ANY)[property];
            if (!effects) {
              effects = this.__propertyEffects[property] = [];
              this._createPropertyAccessor(property, type == TYPES.READ_ONLY);
            }
            // effects are accumulated into arrays per property based on type
            if (effect) {
              effects.push(effect);
            }
            effects = ensureOwnEffectMap(this, type)[property];
            if (!effects) {
              effects = this[type][property] = [];
            }
            effects.push(effect);
          }

          /**
           * Returns whether the current prototype/instance has a property effect
           * of a certain type.
           *
           * @param {string} property Property name
           * @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
           * @return {boolean} True if the prototype/instance has an effect of this type
           * @protected
           */

        }, {
          key: '_hasPropertyEffect',
          value: function _hasPropertyEffect(property, type) {
            var effects = this[type || TYPES.ANY];
            return Boolean(effects && effects[property]);
          }

          /**
           * Returns whether the current prototype/instance has a "read only"
           * accessor for the given property.
           *
           * @param {string} property Property name
           * @return {boolean} True if the prototype/instance has an effect of this type
           * @protected
           */

        }, {
          key: '_hasReadOnlyEffect',
          value: function _hasReadOnlyEffect(property) {
            return this._hasPropertyEffect(property, TYPES.READ_ONLY);
          }

          /**
           * Returns whether the current prototype/instance has a "notify"
           * property effect for the given property.
           *
           * @param {string} property Property name
           * @return {boolean} True if the prototype/instance has an effect of this type
           * @protected
           */

        }, {
          key: '_hasNotifyEffect',
          value: function _hasNotifyEffect(property) {
            return this._hasPropertyEffect(property, TYPES.NOTIFY);
          }

          /**
           * Returns whether the current prototype/instance has a "reflect to attribute"
           * property effect for the given property.
           *
           * @param {string} property Property name
           * @return {boolean} True if the prototype/instance has an effect of this type
           * @protected
           */

        }, {
          key: '_hasReflectEffect',
          value: function _hasReflectEffect(property) {
            return this._hasPropertyEffect(property, TYPES.REFLECT);
          }

          /**
           * Returns whether the current prototype/instance has a "computed"
           * property effect for the given property.
           *
           * @param {string} property Property name
           * @return {boolean} True if the prototype/instance has an effect of this type
           * @protected
           */

        }, {
          key: '_hasComputedEffect',
          value: function _hasComputedEffect(property) {
            return this._hasPropertyEffect(property, TYPES.COMPUTE);
          }

          // Runtime ----------------------------------------

          /**
           * Sets a pending property or path.  If the root property of the path in
           * question had no accessor, the path is set, otherwise it is enqueued
           * via `_setPendingProperty`.
           *
           * This function isolates relatively expensive functionality necessary
           * for the public API (`set`, `setProperties`, `notifyPath`, and property
           * change listeners via {{...}} bindings), such that it is only done
           * when paths enter the system, and not at every propagation step.  It
           * also sets a `__dataHasPaths` flag on the instance which is used to
           * fast-path slower path-matching code in the property effects host paths.
           *
           * `path` can be a path string or array of path parts as accepted by the
           * public API.
           *
           * @param {string | !Array<number|string>} path Path to set
           * @param {*} value Value to set
           * @param {boolean=} isPathNotification If the path being set is a path
           *   notification of an already changed value, as opposed to a request
           *   to set and notify the change.  In the latter `false` case, a dirty
           *   check is performed and then the value is set to the path before
           *   enqueuing the pending property change.
           * @return {boolean} Returns true if the property/path was enqueued in
           *   the pending changes bag.
           * @protected
           */

        }, {
          key: '_setPendingPropertyOrPath',
          value: function _setPendingPropertyOrPath(path, value, shouldNotify, isPathNotification) {
            var rootProperty = Polymer.Path.root(Array.isArray(path) ? path[0] : path);
            var hasEffect = this.__propertyEffects && this.__propertyEffects[rootProperty];
            var isPath = rootProperty !== path;
            if (hasEffect) {
              if (isPath) {
                if (!isPathNotification) {
                  // Dirty check changes being set to a path against the actual object,
                  // since this is the entry point for paths into the system; from here
                  // the only dirty checks are against the `__dataTemp` cache to prevent
                  // duplicate work in the same turn only. Note, if this was a notification
                  // of a change already set to a path (isPathNotification: true),
                  // we always let the change through and skip the `set` since it was
                  // already dirty checked at the point of entry and the underlying
                  // object has already been updated
                  var old = Polymer.Path.get(this, path);
                  path = /** @type {string} */Polymer.Path.set(this, path, value);
                  // Use property-accessor's simpler dirty check
                  if (!path || !_get(PropertyEffects.prototype.__proto__ || Object.getPrototypeOf(PropertyEffects.prototype), '_shouldPropertyChange', this).call(this, path, value, old)) {
                    return false;
                  }
                }
                this.__dataHasPaths = true;
              }
              return this._setPendingProperty(path, value, shouldNotify);
            } else {
              if (isPath) {
                Polymer.Path.set(this, path, value);
              } else {
                this[path] = value;
              }
            }
            return false;
          }

          /**
           * Applies a value to a non-Polymer element/node's property.
           *
           * The implementation makes a best-effort at binding interop:
           * Some native element properties have side-effects when
           * re-setting the same value (e.g. setting <input>.value resets the
           * cursor position), so we do a dirty-check before setting the value.
           * However, for better interop with non-Polymer custom elements that
           * accept objects, we explicitly re-set object changes coming from the
           * Polymer world (which may include deep object changes without the
           * top reference changing), erring on the side of providing more
           * information.
           *
           * Users may override this method to provide alternate approaches.
           *
           * @param {Node} node The node to set a property on
           * @param {string} prop The property to set
           * @param {*} value The value to set
           * @protected
           */

        }, {
          key: '_setUnmanagedPropertyToNode',
          value: function _setUnmanagedPropertyToNode(node, prop, value) {
            // It is a judgment call that resetting primitives is
            // "bad" and resettings objects is also "good"; alternatively we could
            // implement a whitelist of tag & property values that should never
            // be reset (e.g. <input>.value && <select>.value)
            if (value !== node[prop] || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
              node[prop] = value;
            }
          }

          /**
           * Overrides the `PropertyAccessors` implementation to introduce special
           * dirty check logic depending on the property & value being set:
           *
           * 1. Any value set to a path (e.g. 'obj.prop': 42 or 'obj.prop': {...})
           *    Stored in `__dataTemp`, dirty checked against `__dataTemp`
           * 2. Object set to simple property (e.g. 'prop': {...})
           *    Stored in `__dataTemp` and `__data`, dirty checked against
           *    `__dataTemp` by default implementation of `_shouldPropertyChange`
           * 3. Primitive value set to simple property (e.g. 'prop': 42)
           *    Stored in `__data`, dirty checked against `__data`
           *
           * The dirty-check is important to prevent cycles due to two-way
           * notification, but paths and objects are only dirty checked against any
           * previous value set during this turn via a "temporary cache" that is
           * cleared when the last `_propertiesChaged` exits. This is so:
           * a. any cached array paths (e.g. 'array.3.prop') may be invalidated
           *    due to array mutations like shift/unshift/splice; this is fine
           *    since path changes are dirty-checked at user entry points like `set`
           * b. dirty-checking for objects only lasts one turn to allow the user
           *    to mutate the object in-place and re-set it with the same identity
           *    and have all sub-properties re-propagated in a subsequent turn.
           *
           * The temp cache is not necessarily sufficient to prevent invalid array
           * paths, since a splice can happen during the same turn (with pathological
           * user code); we could introduce a "fixup" for temporarily cached array
           * paths if needed: https://github.com/Polymer/polymer/issues/4227
           *
           * @override
           */

        }, {
          key: '_setPendingProperty',
          value: function _setPendingProperty(property, value, shouldNotify) {
            var isPath = this.__dataHasPaths && Polymer.Path.isPath(property);
            var prevProps = isPath ? this.__dataTemp : this.__data;
            if (this._shouldPropertyChange(property, value, prevProps[property])) {
              if (!this.__dataPending) {
                this.__dataPending = {};
                this.__dataOld = {};
              }
              // Ensure old is captured from the last turn
              if (!(property in this.__dataOld)) {
                this.__dataOld[property] = this.__data[property];
              }
              // Paths are stored in temporary cache (cleared at end of turn),
              // which is used for dirty-checking, all others stored in __data
              if (isPath) {
                this.__dataTemp[property] = value;
              } else {
                this.__data[property] = value;
              }
              // All changes go into pending property bag, passed to _propertiesChanged
              this.__dataPending[property] = value;
              // Track properties that should notify separately
              if (isPath || this.__notifyEffects && this.__notifyEffects[property]) {
                this.__dataToNotify = this.__dataToNotify || {};
                this.__dataToNotify[property] = shouldNotify;
              }
              return true;
            }
          }

          /**
           * Overrides base implementation to ensure all accessors set `shouldNotify`
           * to true, for per-property notification tracking.
           *
           * @override
           */

        }, {
          key: '_setProperty',
          value: function _setProperty(property, value) {
            if (this._setPendingProperty(property, value, true)) {
              this._invalidateProperties();
            }
          }

          /**
           * Overrides `PropertyAccessor`'s default async queuing of
           * `_propertiesChanged`: if `__dataInitialized` is false (has not yet been
           * manually flushed), the function no-ops; otherwise flushes
           * `_propertiesChanged` synchronously.
           *
           * @override
           */

        }, {
          key: '_invalidateProperties',
          value: function _invalidateProperties() {
            if (this.__dataInitialized) {
              this._flushProperties();
            }
          }

          /**
           * Enqueues the given client on a list of pending clients, whose
           * pending property changes can later be flushed via a call to
           * `_flushClients`.
           *
           * @param {Object} client PropertyEffects client to enqueue
           * @protected
           */

        }, {
          key: '_enqueueClient',
          value: function _enqueueClient(client) {
            this.__dataPendingClients = this.__dataPendingClients || [];
            if (client !== this) {
              this.__dataPendingClients.push(client);
            }
          }

          /**
           * Flushes any clients previously enqueued via `_enqueueClient`, causing
           * their `_flushProperties` method to run.
           *
           * @protected
           */

        }, {
          key: '_flushClients',
          value: function _flushClients() {
            if (!this.__dataClientsInitialized) {
              this._readyClients();
            }
            // Flush all clients
            var clients = this.__dataPendingClients;
            if (clients) {
              this.__dataPendingClients = null;
              for (var i = 0; i < clients.length; i++) {
                var client = clients[i];
                if (!client.__dataInitialized || client.__dataPending) {
                  client._flushProperties();
                }
              }
            }
          }

          /**
           * Sets a bag of property changes to this instance, and
           * synchronously processes all effects of the properties as a batch.
           *
           * Property names must be simple properties, not paths.  Batched
           * path propagation is not supported.
           *
           * @param {Object} props Bag of one or more key-value pairs whose key is
           *   a property and value is the new value to set for that property.
           * @public
           */

        }, {
          key: 'setProperties',
          value: function setProperties(props) {
            for (var path in props) {
              if (!this.__readOnly || !this.__readOnly[path]) {
                //TODO(kschaaf): explicitly disallow paths in setProperty?
                // wildcard observers currently only pass the first changed path
                // in the `info` object, and you could do some odd things batching
                // paths, e.g. {'foo.bar': {...}, 'foo': null}
                this._setPendingPropertyOrPath(path, props[path], true);
              }
            }
            this._invalidateProperties();
          }

          /**
           * Overrides PropertyAccessor's default async queuing of
           * `_propertiesChanged`, to instead synchronously flush
           * `_propertiesChanged` unless the `this._asyncEffects` property is true.
           *
           * If this is the first time properties are being flushed, the `ready`
           * callback will be called.
           *
           * @override
           */

        }, {
          key: '_flushProperties',
          value: function _flushProperties() {
            if (!this.__dataInitialized) {
              this.ready();
            } else if (this.__dataPending) {
              _get(PropertyEffects.prototype.__proto__ || Object.getPrototypeOf(PropertyEffects.prototype), '_flushProperties', this).call(this);
              if (!this.__dataCounter) {
                // Clear temporary cache at end of turn
                this.__dataTemp = {};
              }
            }
          }

          /**
           * Polymer-specific lifecycle callback called the first time properties
           * are being flushed.  Prior to `ready`, all property sets through
           * accessors are queued and their effects are flushed after this method
           * returns.
           *
           * Users may override this function to implement behavior that is
           * dependent on the element having its properties initialized, e.g.
           * from defaults (initialized from `constructor`, `_initializeProperties`),
           * `attributeChangedCallback`, or binding values propagated from host
           * "binding effects".  `super.ready()` must be called to ensure the
           * data system becomes enabled.
           *
           * @public
           */

        }, {
          key: 'ready',
          value: function ready() {
            // Update instance properties that shadowed proto accessors; these take
            // priority over any defaults set in `properties` or constructor
            var instanceProps = this.__dataInstanceProps;
            if (instanceProps) {
              initalizeInstanceProperties(this, instanceProps);
            }
            // Enable acceessors
            this.__dataInitialized = true;
            if (this.__dataPending) {
              // Run normal flush
              this._flushProperties();
            } else {
              this._readyClients();
            }
          }

          /**
           * Perform any initial setup on client dom. Called before the first
           * `_flushProperties` call on client dom and before any element
           * observers are called.
           *
           * @protected
           */

        }, {
          key: '_readyClients',
          value: function _readyClients() {
            this.__dataClientsInitialized = true;
          }

          /**
           * Stamps the provided template and performs instance-time setup for
           * Polymer template features, including data bindings, declarative event
           * listeners, and the `this.$` map of `id`'s to nodes.  A document fragment
           * is returned containing the stamped DOM, ready for insertion into the
           * DOM.
           *
           * Note that for host data to be bound into the stamped DOM, the template
           * must have been previously bound to the prototype via a call to
           * `_bindTemplate`, which performs one-time template binding work.
           *
           * Note that this method currently only supports being called once per
           * instance.
           *
           * @param {HTMLTemplateElement} template Template to stamp
           * @return {DocumentFragment} Cloned template content
           * @protected
           */

        }, {
          key: '_stampTemplate',
          value: function _stampTemplate(template) {
            var dom = _get(PropertyEffects.prototype.__proto__ || Object.getPrototypeOf(PropertyEffects.prototype), '_stampTemplate', this).call(this, template);
            setupBindings(this);
            return dom;
          }

          /**
           * Implements `PropertyAccessors`'s properties changed callback.
           *
           * Runs each class of effects for the batch of changed properties in
           * a specific order (compute, propagate, reflect, observe, notify).
           *
           * @override
           */

        }, {
          key: '_propertiesChanged',
          value: function _propertiesChanged(currentProps, changedProps, oldProps) {
            // ----------------------------
            // let c = Object.getOwnPropertyNames(changedProps || {});
            // window.debug && console.group(this.localName + '#' + this.id + ': ' + c);
            // if (window.debug) { debugger; }
            // ----------------------------
            var hasPaths = this.__dataHasPaths;
            this.__dataHasPaths = false;
            // Compute properties
            runComputedEffects(this, changedProps, oldProps, hasPaths);
            // Compute linked paths
            computeLinkedPaths(this, changedProps, hasPaths);
            // Clear notify properties prior to possible reentry (propagate, observe),
            // but after computing effects have a chance to add to them
            var notifyProps = this.__dataToNotify;
            this.__dataToNotify = null;
            // Propagate properties to clients
            runEffects(this, this.__propagateEffects, changedProps, oldProps, hasPaths);
            // Flush clients
            this._flushClients();
            // Reflect properties
            runEffects(this, this.__reflectEffects, changedProps, oldProps, hasPaths);
            // Observe properties
            runEffects(this, this.__observeEffects, changedProps, oldProps, hasPaths);
            // Notify properties to host
            if (notifyProps) {
              runNotifyEffects(this, notifyProps, changedProps, oldProps, hasPaths);
            }
            // ----------------------------
            // window.debug && console.groupEnd(this.localName + '#' + this.id + ': ' + c);
            // ----------------------------
          }

          /**
           * Aliases one data path as another, such that path notifications from one
           * are routed to the other.
           *
           * @method linkPaths
           * @param {string | !Array<string|number>} to Target path to link.
           * @param {string | !Array<string|number>} from Source path to link.
           * @public
           */

        }, {
          key: 'linkPaths',
          value: function linkPaths(to, from) {
            to = Polymer.Path.normalize(to);
            from = Polymer.Path.normalize(from);
            this.__dataLinkedPaths = this.__dataLinkedPaths || {};
            this.__dataLinkedPaths[to] = from;
          }

          /**
           * Removes a data path alias previously established with `_linkPaths`.
           *
           * Note, the path to unlink should be the target (`to`) used when
           * linking the paths.
           *
           * @method unlinkPaths
           * @param {string | !Array<string|number>} path Target path to unlink.
           * @public
           */

        }, {
          key: 'unlinkPaths',
          value: function unlinkPaths(path) {
            path = Polymer.Path.normalize(path);
            if (this.__dataLinkedPaths) {
              delete this.__dataLinkedPaths[path];
            }
          }

          /**
           * Notify that an array has changed.
           *
           * Example:
           *
           *     this.items = [ {name: 'Jim'}, {name: 'Todd'}, {name: 'Bill'} ];
           *     ...
           *     this.items.splice(1, 1, {name: 'Sam'});
           *     this.items.push({name: 'Bob'});
           *     this.notifySplices('items', [
           *       { index: 1, removed: [{name: 'Todd'}], addedCount: 1, obect: this.items, type: 'splice' },
           *       { index: 3, removed: [], addedCount: 1, object: this.items, type: 'splice'}
           *     ]);
           *
           * @param {string} path Path that should be notified.
           * @param {Array} splices Array of splice records indicating ordered
           *   changes that occurred to the array. Each record should have the
           *   following fields:
           *    * index: index at which the change occurred
           *    * removed: array of items that were removed from this index
           *    * addedCount: number of new items added at this index
           *    * object: a reference to the array in question
           *    * type: the string literal 'splice'
           *
           *   Note that splice records _must_ be normalized such that they are
           *   reported in index order (raw results from `Object.observe` are not
           *   ordered and must be normalized/merged before notifying).
           * @public
          */

        }, {
          key: 'notifySplices',
          value: function notifySplices(path, splices) {
            var info = {};
            var array = /** @type {Array} */Polymer.Path.get(this, path, info);
            _notifySplices(this, array, info.path, splices);
          }

          /**
           * Convenience method for reading a value from a path.
           *
           * Note, if any part in the path is undefined, this method returns
           * `undefined` (this method does not throw when dereferencing undefined
           * paths).
           *
           * @method get
           * @param {(string|!Array<(string|number)>)} path Path to the value
           *   to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
           *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
           *   bracketed expressions are not supported; string-based path parts
           *   *must* be separated by dots.  Note that when dereferencing array
           *   indices, the index may be used as a dotted part directly
           *   (e.g. `users.12.name` or `['users', 12, 'name']`).
           * @param {Object=} root Root object from which the path is evaluated.
           * @return {*} Value at the path, or `undefined` if any part of the path
           *   is undefined.
           * @public
           */

        }, {
          key: 'get',
          value: function get(path, root) {
            return Polymer.Path.get(root || this, path);
          }

          /**
           * Convenience method for setting a value to a path and notifying any
           * elements bound to the same path.
           *
           * Note, if any part in the path except for the last is undefined,
           * this method does nothing (this method does not throw when
           * dereferencing undefined paths).
           *
           * @method set
           * @param {(string|!Array<(string|number)>)} path Path to the value
           *   to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
           *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
           *   bracketed expressions are not supported; string-based path parts
           *   *must* be separated by dots.  Note that when dereferencing array
           *   indices, the index may be used as a dotted part directly
           *   (e.g. `'users.12.name'` or `['users', 12, 'name']`).
           * @param {*} value Value to set at the specified path.
           * @param {Object=} root Root object from which the path is evaluated.
           *   When specified, no notification will occur.
           * @public
          */

        }, {
          key: 'set',
          value: function set(path, value, root) {
            if (root) {
              Polymer.Path.set(root, path, value);
            } else {
              if (!this.__readOnly || !this.__readOnly[/** @type {string} */path]) {
                if (this._setPendingPropertyOrPath(path, value, true)) {
                  this._invalidateProperties();
                }
              }
            }
          }

          /**
           * Adds items onto the end of the array at the path specified.
           *
           * The arguments after `path` and return value match that of
           * `Array.prototype.push`.
           *
           * This method notifies other paths to the same array that a
           * splice occurred to the array.
           *
           * @method push
           * @param {string} path Path to array.
           * @param {...*} items Items to push onto array
           * @return {number} New length of the array.
           * @public
           */

        }, {
          key: 'push',
          value: function push(path) {
            var info = {};
            var array = /** @type {Array}*/Polymer.Path.get(this, path, info);
            var len = array.length;

            for (var _len = arguments.length, items = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              items[_key - 1] = arguments[_key];
            }

            var ret = array.push.apply(array, items);
            if (items.length) {
              notifySplice(this, array, info.path, len, items.length, []);
            }
            return ret;
          }

          /**
           * Removes an item from the end of array at the path specified.
           *
           * The arguments after `path` and return value match that of
           * `Array.prototype.pop`.
           *
           * This method notifies other paths to the same array that a
           * splice occurred to the array.
           *
           * @method pop
           * @param {string} path Path to array.
           * @return {*} Item that was removed.
           * @public
           */

        }, {
          key: 'pop',
          value: function pop(path) {
            var info = {};
            var array = /** @type {Array} */Polymer.Path.get(this, path, info);
            var hadLength = Boolean(array.length);
            var ret = array.pop();
            if (hadLength) {
              notifySplice(this, array, info.path, array.length, 0, [ret]);
            }
            return ret;
          }

          /**
           * Starting from the start index specified, removes 0 or more items
           * from the array and inserts 0 or more new items in their place.
           *
           * The arguments after `path` and return value match that of
           * `Array.prototype.splice`.
           *
           * This method notifies other paths to the same array that a
           * splice occurred to the array.
           *
           * @method splice
           * @param {string} path Path to array.
           * @param {number} start Index from which to start removing/inserting.
           * @param {number} deleteCount Number of items to remove.
           * @param {...*} items Items to insert into array.
           * @return {Array} Array of removed items.
           * @public
           */

        }, {
          key: 'splice',
          value: function splice(path, start, deleteCount) {
            var info = {};
            var array = /** @type {Array} */Polymer.Path.get(this, path, info);
            // Normalize fancy native splice handling of crazy start values
            if (start < 0) {
              start = array.length - Math.floor(-start);
            } else {
              start = Math.floor(start);
            }
            if (!start) {
              start = 0;
            }

            for (var _len2 = arguments.length, items = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
              items[_key2 - 3] = arguments[_key2];
            }

            var ret = array.splice.apply(array, [start, deleteCount].concat(items));
            if (items.length || ret.length) {
              notifySplice(this, array, info.path, start, items.length, ret);
            }
            return ret;
          }

          /**
           * Removes an item from the beginning of array at the path specified.
           *
           * The arguments after `path` and return value match that of
           * `Array.prototype.pop`.
           *
           * This method notifies other paths to the same array that a
           * splice occurred to the array.
           *
           * @method shift
           * @param {string} path Path to array.
           * @return {*} Item that was removed.
           * @public
           */

        }, {
          key: 'shift',
          value: function shift(path) {
            var info = {};
            var array = /** @type {Array} */Polymer.Path.get(this, path, info);
            var hadLength = Boolean(array.length);
            var ret = array.shift();
            if (hadLength) {
              notifySplice(this, array, info.path, 0, 0, [ret]);
            }
            return ret;
          }

          /**
           * Adds items onto the beginning of the array at the path specified.
           *
           * The arguments after `path` and return value match that of
           * `Array.prototype.push`.
           *
           * This method notifies other paths to the same array that a
           * splice occurred to the array.
           *
           * @method unshift
           * @param {string} path Path to array.
           * @param {...*} items Items to insert info array
           * @return {number} New length of the array.
           * @public
           */

        }, {
          key: 'unshift',
          value: function unshift(path) {
            var info = {};
            var array = /** @type {Array} */Polymer.Path.get(this, path, info);

            for (var _len3 = arguments.length, items = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              items[_key3 - 1] = arguments[_key3];
            }

            var ret = array.unshift.apply(array, items);
            if (items.length) {
              notifySplice(this, array, info.path, 0, items.length, []);
            }
            return ret;
          }

          /**
           * Notify that a path has changed.
           *
           * Example:
           *
           *     this.item.user.name = 'Bob';
           *     this.notifyPath('item.user.name');
           *
           * @param {string} path Path that should be notified.
           * @param {*=} value Value at the path (optional).
           * @public
          */

        }, {
          key: 'notifyPath',
          value: function notifyPath(path, value) {
            /** @type {string} */
            var propPath = void 0;
            if (arguments.length == 1) {
              // Get value if not supplied
              var info = {};
              value = Polymer.Path.get(this, path, info);
              propPath = info.path;
            } else if (Array.isArray(path)) {
              // Normalize path if needed
              propPath = Polymer.Path.normalize(path);
            } else {
              propPath = /** @type{string} */path;
            }
            if (this._setPendingPropertyOrPath(propPath, value, true, true)) {
              this._invalidateProperties();
            }
          }

          /**
           * Creates a read-only accessor for the given property.
           *
           * To set the property, use the protected `_setProperty` API.
           * To create a custom protected setter (e.g. `_setMyProp()` for
           * property `myProp`), pass `true` for `protectedSetter`.
           *
           * Note, if the property will have other property effects, this method
           * should be called first, before adding other effects.
           *
           * @param {string} property Property name
           * @param {boolean=} protectedSetter Creates a custom protected setter
           *   when `true`.
           * @protected
           */

        }, {
          key: '_createReadOnlyProperty',
          value: function _createReadOnlyProperty(property, protectedSetter) {
            this._addPropertyEffect(property, TYPES.READ_ONLY);
            if (protectedSetter) {
              this['_set' + upper(property)] = function (value) {
                this._setProperty(property, value);
              };
            }
          }

          /**
           * Creates a single-property observer for the given property.
           *
           * @param {string} property Property name
           * @param {string} methodName Name of observer method to call
           * @param {boolean=} dynamicFn Whether the method name should be included as
           *   a dependency to the effect.
           * @protected
           */

        }, {
          key: '_createPropertyObserver',
          value: function _createPropertyObserver(property, methodName, dynamicFn) {
            var info = { property: property, methodName: methodName };
            this._addPropertyEffect(property, TYPES.OBSERVE, {
              fn: runObserverEffect, info: info, trigger: { name: property }
            });
            if (dynamicFn) {
              this._addPropertyEffect(methodName, TYPES.OBSERVE, {
                fn: runObserverEffect, info: info, trigger: { name: methodName }
              });
            }
          }

          /**
           * Creates a multi-property "method observer" based on the provided
           * expression, which should be a string in the form of a normal Javascript
           * function signature: `'methodName(arg1, [..., argn])'`.  Each argument
           * should correspond to a property or path in the context of this
           * prototype (or instance), or may be a literal string or number.
           *
           * @param {string} expression Method expression
           * @param {Object=} dynamicFns Map indicating whether method names should
           *   be included as a dependency to the effect.
           * @protected
           */

        }, {
          key: '_createMethodObserver',
          value: function _createMethodObserver(expression, dynamicFns) {
            var sig = parseMethod(expression);
            if (!sig) {
              throw new Error("Malformed observer expression '" + expression + "'");
            }
            createMethodEffect(this, sig, TYPES.OBSERVE, runMethodEffect, null, dynamicFns);
          }

          /**
           * Causes the setter for the given property to dispatch `<property>-changed`
           * events to notify of changes to the property.
           *
           * @param {string} property Property name
           * @protected
           */

        }, {
          key: '_createNotifyingProperty',
          value: function _createNotifyingProperty(property) {
            this._addPropertyEffect(property, TYPES.NOTIFY, {
              fn: runNotifyEffect,
              info: {
                eventName: CaseMap.camelToDashCase(property) + '-changed',
                property: property
              }
            });
          }

          /**
           * Causes the setter for the given property to reflect the property value
           * to a (dash-cased) attribute of the same name.
           *
           * @param {string} property Property name
           * @protected
           */

        }, {
          key: '_createReflectedProperty',
          value: function _createReflectedProperty(property) {
            var attr = CaseMap.camelToDashCase(property);
            if (attr[0] === '-') {
              console.warn('Property ' + property + ' cannot be reflected to attribute ' + attr + ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property thisead.');
            } else {
              this._addPropertyEffect(property, TYPES.REFLECT, {
                fn: runReflectEffect,
                info: {
                  attrName: attr
                }
              });
            }
          }

          /**
           * Creates a computed property whose value is set to the result of the
           * method described by the given `expression` each time one or more
           * arguments to the method changes.  The expression should be a string
           * in the form of a normal Javascript function signature:
           * `'methodName(arg1, [..., argn])'`
           *
           * @param {string} property Name of computed property to set
           * @param {string} expression Method expression
           * @param {Object=} dynamicFns Map indicating whether method names should
           *   be included as a dependency to the effect.
           * @protected
           */

        }, {
          key: '_createComputedProperty',
          value: function _createComputedProperty(property, expression, dynamicFns) {
            var sig = parseMethod(expression);
            if (!sig) {
              throw new Error("Malformed computed expression '" + expression + "'");
            }
            createMethodEffect(this, sig, TYPES.COMPUTE, runComputedEffect, property, dynamicFns);
          }

          // -- binding ----------------------------------------------

          /**
           * Creates "binding" property effects for all binding bindings
           * in the provided template that forward host properties into DOM stamped
           * from the template via `_stampTemplate`.
           *
           * @param {HTMLTemplateElement} template Template containing binding
           *   bindings
           * @param {Object=} dynamicFns Map indicating whether method names should
           *   be included as a dependency to the effect.
           * @protected
           */

        }, {
          key: '_bindTemplate',
          value: function _bindTemplate(template, dynamicFns) {
            // Clear any existing propagation effects inherited from superClass
            this.__propagateEffects = {};
            this.__notifyListeners = [];
            var notes = this._parseTemplateAnnotations(template);
            processAnnotations(notes);
            for (var i = 0, note; i < notes.length && (note = notes[i]); i++) {
              // where to find the node in the concretized list
              var b$ = note.bindings;
              for (var j = 0, binding; j < b$.length && (binding = b$[j]); j++) {
                if (shouldAddListener(binding)) {
                  addAnnotatedListener(this, i, binding.name, binding.parts[0].value, binding.parts[0].event, binding.parts[0].negate);
                }
                addBindingEffect(this, binding, i, dynamicFns);
              }
            }
          }
        }, {
          key: 'PROPERTY_EFFECT_TYPES',
          get: function get() {
            return TYPES;
          }
        }]);

        return PropertyEffects;
      }(propertyEffectsBase);

      return PropertyEffects;
    });
  })();

  /***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

  /*__wc__loader*/

  (function (document) {
    var _htmlStr = "\n\n\n\n";
    if (document.head) {
      var el = document.head;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  (function (document) {
    var _htmlStr = "";
    if (document.body) {
      var el = document.body;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  __webpack_require__(0);

  __webpack_require__(1);

  (function () {

    'use strict';

    // null-array (shared empty array to avoid null-checks)

    var emptyArray = [];

    var bindingRegex = function () {
      var IDENT = '(?:' + '[a-zA-Z_$][\\w.:$\\-*]*' + ')';
      var NUMBER = '(?:' + '[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?' + ')';
      var SQUOTE_STRING = '(?:' + '\'(?:[^\'\\\\]|\\\\.)*\'' + ')';
      var DQUOTE_STRING = '(?:' + '"(?:[^"\\\\]|\\\\.)*"' + ')';
      var STRING = '(?:' + SQUOTE_STRING + '|' + DQUOTE_STRING + ')';
      var ARGUMENT = '(?:' + IDENT + '|' + NUMBER + '|' + STRING + '\\s*' + ')';
      var ARGUMENTS = '(?:' + ARGUMENT + '(?:,\\s*' + ARGUMENT + ')*' + ')';
      var ARGUMENT_LIST = '(?:' + '\\(\\s*' + '(?:' + ARGUMENTS + '?' + ')' + '\\)\\s*' + ')';
      var BINDING = '(' + IDENT + '\\s*' + ARGUMENT_LIST + '?' + ')'; // Group 3
      var OPEN_BRACKET = '(\\[\\[|{{)' + '\\s*';
      var CLOSE_BRACKET = '(?:]]|}})';
      var NEGATE = '(?:(!)\\s*)?'; // Group 2
      var EXPRESSION = OPEN_BRACKET + NEGATE + BINDING + CLOSE_BRACKET;
      return new RegExp(EXPRESSION, "g");
    }();

    var insertionPointTag = 'slot';

    /**
     * Scans a template to produce an annotation map that stores expression metadata
     * and information that associates the metadata to nodes in a template instance.
     *
     * Supported annotations are:
     *   * id attributes
     *   * binding annotations in text nodes
     *     * double-mustache expressions: {{expression}}
     *     * double-bracket expressions: [[expression]]
     *   * binding annotations in attributes
     *     * attribute-bind expressions: name="{{expression}} || [[expression]]"
     *     * property-bind expressions: name*="{{expression}} || [[expression]]"
     *     * property-bind expressions: name:="expression"
     *   * event annotations
     *     * event delegation directives: on-<eventName>="expression"
     *
     * Generated data-structure:
     *   [
     *     {
     *       id: '<id>',
     *       events: [
     *         {
     *           mode: ['auto'|''],
     *           name: '<name>'
     *           value: '<expression>'
     *         }, ...
     *       ],
     *       bindings: [
     *         {
     *           kind: ['text'|'attribute'|'property'],
     *           mode: ['auto'|''],
     *           name: '<name>'
     *           value: '<expression>'
     *         }, ...
     *       ],
     *       parent: <reference to parent annotation>,
     *       index: <integer index in parent's childNodes collection>
     *     },
     *     ...
     *   ]
     *
     * @param {HTMLTemplateElement} template
     * @param {boolean=} stripWhiteSpace
     * @return {Array<Object>}
     */
    function parseTemplateAnnotations(template, stripWhiteSpace, ownerDocument) {
      // TODO(kschaaf): File issue and/or remove when fixed
      // hold a reference to content as _content to prevent odd Chrome gc issue
      // nested templates also may receive their content as _content
      var content = template._content = template._content || template.content;
      // since a template may be re-used, memo-ize notes.
      if (!content._notes) {
        content._notes = [];
        // TODO(sorvell): whitespace and processAnnotations need to be factored
        // into plugins
        ownerDocument = ownerDocument || template.ownerDocument;
        parseNodeAnnotations(content, content._notes, stripWhiteSpace || template.hasAttribute('strip-whitespace'), ownerDocument);
      }
      return content._notes;
    }

    // add annotations gleaned from subtree at `node` to `list`
    function parseNodeAnnotations(node, list, stripWhiteSpace, ownerDocument) {
      return node.nodeType === Node.TEXT_NODE ? parseTextNodeAnnotation(node, list) : parseElementAnnotations(node, list, stripWhiteSpace, ownerDocument);
    }

    function parseBindings(text) {
      var parts = [];
      var lastIndex = 0;
      var m = void 0;
      // Example: "literal1{{prop}}literal2[[!compute(foo,bar)]]final"
      // Regex matches:
      //        Iteration 1:  Iteration 2:
      // m[1]: '{{'          '[['
      // m[2]: ''            '!'
      // m[3]: 'prop'        'compute(foo,bar)'
      while ((m = bindingRegex.exec(text)) !== null) {
        // Add literal part
        if (m.index > lastIndex) {
          parts.push({ literal: text.slice(lastIndex, m.index) });
        }
        // Add binding part
        // Mode (one-way or two)
        var mode = m[1][0];
        var negate = Boolean(m[2]);
        var value = m[3].trim();
        var customEvent = void 0,
            notifyEvent = void 0,
            colon = void 0;
        if (mode == '{' && (colon = value.indexOf('::')) > 0) {
          notifyEvent = value.substring(colon + 2);
          value = value.substring(0, colon);
          customEvent = true;
        }
        parts.push({
          compoundIndex: parts.length,
          value: value,
          mode: mode,
          negate: negate,
          event: notifyEvent,
          customEvent: customEvent
        });
        lastIndex = bindingRegex.lastIndex;
      }
      // Add a final literal part
      if (lastIndex && lastIndex < text.length) {
        var literal = text.substring(lastIndex);
        if (literal) {
          parts.push({
            literal: literal
          });
        }
      }
      if (parts.length) {
        return parts;
      }
    }

    function literalFromParts(parts) {
      var s = '';
      for (var i = 0; i < parts.length; i++) {
        var literal = parts[i].literal;
        s += literal || '';
      }
      return s;
    }

    // add annotations gleaned from TextNode `node` to `list`
    function parseTextNodeAnnotation(node, list) {
      var parts = parseBindings(node.textContent);
      if (parts) {
        // Initialize the textContent with any literal parts
        // NOTE: default to a space here so the textNode remains; some browsers
        // (IE) evacipate an empty textNode following cloneNode/importNode.
        node.textContent = literalFromParts(parts) || ' ';
        var note = {
          bindings: [{
            kind: 'text',
            name: 'textContent',
            parts: parts,
            isCompound: parts.length !== 1
          }]
        };
        list.push(note);
        return note;
      }
    }

    // add annotations gleaned from Element `node` to `list`
    function parseElementAnnotations(element, list, stripWhiteSpace, ownerDocument) {
      var note = {
        bindings: [],
        events: []
      };
      if (element.localName === insertionPointTag) {
        list._hasInsertionPoint = true;
      }
      parseChildNodesAnnotations(element, note, list, stripWhiteSpace, ownerDocument);
      if (element.attributes) {
        parseNodeAttributeAnnotations(element, note);
      }
      if (note.bindings.length || note.events.length || note.id) {
        list.push(note);
      }
      return note;
    }

    // 1.x backwards-compatible auto-wrapper for template type extensions
    // This is a clear layering violation and gives favored-nation status to
    // dom-if and dom-repeat templates.  This is a conceit we're choosing to keep
    // a.) to ease 1.x backwards-compatibility due to loss of `is`, and
    // b.) to maintain if/repeat capability in parser-constrained elements
    //     (e.g. table, select) in lieu of native CE type extensions without
    //     massive new invention in this space (e.g. directive system)
    var templateExtensions = {
      'dom-if': true,
      'dom-repeat': true
    };
    function wrapTemplateExtension(node) {
      var is = node.getAttribute('is');
      if (is && templateExtensions[is]) {
        var t = node;
        t.removeAttribute('is');
        node = t.ownerDocument.createElement(is);
        t.parentNode.replaceChild(node, t);
        node.appendChild(t);
        while (t.attributes.length) {
          node.setAttribute(t.attributes[0].name, t.attributes[0].value);
          t.removeAttribute(t.attributes[0].name);
        }
      }
      return node;
    }

    // add annotations gleaned from children of `root` to `list`, `root`'s
    // `note` is supplied as it is the note.parent of added annotations
    function parseChildNodesAnnotations(root, note, list, stripWhiteSpace, ownerDocument) {
      if (root.firstChild) {
        var node = root.firstChild;
        var i = 0;
        while (node) {
          // Wrap templates
          if (node.localName == 'template') {
            node = wrapTemplateExtension(node);
          }
          // Recurse
          if (node.localName == 'template' && !node.hasAttribute('preserve-content')) {
            parseTemplate(node, i, list, note, stripWhiteSpace, ownerDocument);
          }
          // collapse adjacent textNodes: fixes an IE issue that can cause
          // text nodes to be inexplicably split =(
          // note that root.normalize() should work but does not so we do this
          // manually.
          var next = node.nextSibling;
          if (node.nodeType === Node.TEXT_NODE) {
            var n = next;
            while (n && n.nodeType === Node.TEXT_NODE) {
              node.textContent += n.textContent;
              next = n.nextSibling;
              root.removeChild(n);
              n = next;
            }
            // optionally strip whitespace
            if (stripWhiteSpace && !node.textContent.trim()) {
              root.removeChild(node);
              // decrement index since node is removed
              i--;
            }
          }
          // if this node didn't get evacipated, parse it.
          if (node.parentNode) {
            var childAnnotation = parseNodeAnnotations(node, list, stripWhiteSpace, ownerDocument);
            if (childAnnotation) {
              childAnnotation.parent = note;
              childAnnotation.index = i;
            }
          }
          node = next;
          i++;
        }
      }
    }

    // 1. Parse annotations from the template and memoize them on
    //    content._notes (recurses into nested templates)
    // 2. Remove template.content and store it in annotation list, where it
    //    will be the responsibility of the host to set it back to the template
    //    (this is both an optimization to avoid re-stamping nested template
    //    children and avoids a bug in Chrome where nested template children
    //    upgrade)
    function parseTemplate(node, index, list, parent, stripWhiteSpace, ownerDocument) {
      var content = node.content.ownerDocument.createDocumentFragment();
      content._notes = parseTemplateAnnotations(node, stripWhiteSpace, ownerDocument);
      content.appendChild(node.content);
      list.push({
        bindings: emptyArray,
        events: emptyArray,
        templateContent: content,
        parent: parent,
        index: index
      });
    }

    // add annotation data from attributes to the `annotation` for node `node`
    function parseNodeAttributeAnnotations(node, annotation) {
      // Make copy of original attribute list, since the order may change
      // as attributes are added and removed
      var attrs = Array.prototype.slice.call(node.attributes);
      for (var i = attrs.length - 1, a; a = attrs[i]; i--) {
        var n = a.name;
        var v = a.value;
        var b = void 0;
        // events (on-*)
        if (n.slice(0, 3) === 'on-') {
          node.removeAttribute(n);
          annotation.events.push({
            name: n.slice(3),
            value: v
          });
        }
        // bindings (other attributes)
        else if (b = parseNodeAttributeAnnotation(node, n, v)) {
            annotation.bindings.push(b);
          }
          // static id
          else if (n === 'id') {
              annotation.id = v;
            }
      }
    }

    // construct annotation data from a generic attribute, or undefined
    function parseNodeAttributeAnnotation(node, name, value) {
      var parts = parseBindings(value);
      if (parts) {
        // Attribute or property
        var origName = name;
        var kind = 'property';
        if (name[name.length - 1] == '$') {
          name = name.slice(0, -1);
          kind = 'attribute';
        }
        // Initialize attribute bindings with any literal parts
        var literal = literalFromParts(parts);
        if (literal && kind == 'attribute') {
          node.setAttribute(name, literal);
        }
        // Clear attribute before removing, since IE won't allow removing
        // `value` attribute if it previously had a value (can't
        // unconditionally set '' before removing since attributes with `$`
        // can't be set using setAttribute)
        if (node.localName === 'input' && origName === 'value') {
          node.setAttribute(origName, '');
        }
        // Remove annotation
        node.removeAttribute(origName);
        // Case hackery: attributes are lower-case, but bind targets
        // (properties) are case sensitive. Gambit is to map dash-case to
        // camel-case: `foo-bar` becomes `fooBar`.
        // Attribute bindings are excepted.
        var propertyName = Polymer.CaseMap.dashToCamelCase(name);
        if (kind === 'property') {
          name = propertyName;
        }
        return {
          kind: kind,
          name: name,
          propertyName: propertyName,
          parts: parts,
          literal: literal,
          isCompound: parts.length !== 1
        };
      }
    }

    function findTemplateAnnotatedNode(root, note) {
      // recursively ascend tree until we hit root
      var parent = note.parent && findTemplateAnnotatedNode(root, note.parent);
      // unwind the stack, returning the indexed node at each level
      if (parent) {
        // note: marginally faster than indexing via childNodes
        // (http://jsperf.com/childnodes-lookup)
        for (var n = parent.firstChild, i = 0; n; n = n.nextSibling) {
          if (note.index === i++) {
            return n;
          }
        }
      } else {
        return root;
      }
    }

    // construct `$` map (from id annotations)
    function applyIdToMap(inst, map, node, note) {
      if (note.id) {
        map[note.id] = node;
      }
    }

    // install event listeners (from event annotations)
    function applyEventListener(inst, node, note, host) {
      if (note.events && note.events.length) {
        for (var j = 0, e$ = note.events, e; j < e$.length && (e = e$[j]); j++) {
          inst._addMethodEventListenerToNode(node, e.name, e.value, host);
        }
      }
    }

    // push configuration references at configure time
    function applyTemplateContent(inst, node, note) {
      if (note.templateContent) {
        node._content = note.templateContent;
      }
    }

    function createNodeEventHandler(context, eventName, methodName) {
      // Instances can optionally have a _methodHost which allows redirecting where
      // to find methods. Currently used by `templatize`.
      context = context._methodHost || context;
      var handler = function handler(e) {
        if (context[methodName]) {
          context[methodName](e, e.detail);
        } else {
          console.warn('listener method `' + methodName + '` not defined');
        }
      };
      return handler;
    }

    /**
     * Element mixin that provides basic template parsing and stamping, including
     * the following template-related features for stamped templates:
     *
     * - Declarative event listeners (`on-eventname="listener"`)
     * - Map of node id's to stamped node instances (`this.$.id`)
     * - Nested template content caching/removal and re-installation (performance
     *   optimization)
     * - Relative URL's relative to original template location
     * - Template binding annotation parsing (note that this library only parses
     *   template bindings and provides annotation metadata; see
     *   `Polymer.PropertyEffects` for a full implementation of data-binding)
     *
     * @polymerMixin
     * @memberof Polymer
     * @summary Element class mixin that provides basic template parsing and stamping
     */
    Polymer.TemplateStamp = Polymer.dedupingMixin(function (superClass) {

      return function (_superClass2) {
        _inherits(TemplateStamp, _superClass2);

        function TemplateStamp() {
          _classCallCheck(this, TemplateStamp);

          var _this6 = _possibleConstructorReturn(this, (TemplateStamp.__proto__ || Object.getPrototypeOf(TemplateStamp)).call(this));

          _this6.$ = null;
          _this6.__templateNodes = null;
          _this6.__templateNotes = null;
          return _this6;
        }

        /**
         * Clones the provided template content and returns a document fragment
         * containing the cloned dom.
         *
         * The template is parsed (once and memoized) using this library's
         * template parsing features, which identify nodes with declarative
         * event listeners (`on-...``), `id`'s, `<template>`s, and bindings
         * (`{{...}}` and `[[...]]`).  This template metadata ("notes")
         * are stored as `this.__templateNotes`, and any nodes identified in
         * notes are collected for this instance into `__templateNodes` in
         * the same order as the notes array.
         *
         * Finally, this method generates an "id map" for all nodes with id's
         * under `this.$`, passes template content back to templates as `_content`
         * (a performance optimization to avoid deep template cloning), and
         * installs declarative event listeners.
         *
         * Note that the memoized template parsing process is destructive to the
         * template: attributes for bindings and declarative event listeners are
         * removed after being noted in notes, and any nested <template>.content
         * is removed and stored in notes as well.
         *
         * Note that this method may only be called once per instance (it does
         * not support stamping multiple templates per element instance).
         *
         * @param {HTMLTemplateElement} template Template to stamp
         */


        _createClass(TemplateStamp, [{
          key: '_stampTemplate',
          value: function _stampTemplate(template) {
            // Polyfill support: bootstrap the template if it has not already been
            if (template && !template.content && window.HTMLTemplateElement && HTMLTemplateElement.decorate) {
              HTMLTemplateElement.decorate(template);
            }
            var notes = this.__templateNotes = this._parseTemplateAnnotations(template);
            var dom = document.importNode(template._content || template.content, true);
            // NOTE: ShadyDom optimization indicating there is an insertion point
            dom.__noInsertionPoint = !notes._hasInsertionPoint;
            this.$ = {};
            this.__templateNodes = new Array(notes.length);
            for (var i = 0, l = notes.length, note, node; i < l && (note = notes[i]); i++) {
              node = this.__templateNodes[i] = findTemplateAnnotatedNode(dom, note);
              applyIdToMap(this, this.$, node, note);
              applyTemplateContent(this, node, note);
              applyEventListener(this, node, note, this);
            }
            return dom;
          }

          // preprocess-time

          // construct and return a list of annotation records
          // by scanning `template`'s content
          //
          // TODO(sorvell): This should just crawl over a template and call
          // a supplied list of callbacks.

        }, {
          key: '_parseTemplateAnnotations',
          value: function _parseTemplateAnnotations(template) {
            return parseTemplateAnnotations(template);
          }
        }, {
          key: '_addMethodEventListenerToNode',
          value: function _addMethodEventListenerToNode(node, eventName, methodName, context) {
            context = context || node;
            var handler = createNodeEventHandler(context, eventName, methodName);
            this._addEventListenerToNode(node, eventName, handler);
            return handler;
          }
        }, {
          key: '_addEventListenerToNode',
          value: function _addEventListenerToNode(node, eventName, handler) {
            node.addEventListener(eventName, handler);
          }
        }, {
          key: '_removeEventListenerFromNode',
          value: function _removeEventListenerFromNode(node, eventName, handler) {
            node.removeEventListener(eventName, handler);
          }
        }]);

        return TemplateStamp;
      }(superClass);
    });
  })();

  /***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

  /*__wc__loader*/

  (function (document) {
    var _htmlStr = "\n\n\n";
    if (document.head) {
      var el = document.head;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  (function (document) {
    var _htmlStr = "";
    if (document.body) {
      var el = document.body;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  __webpack_require__(0);

  (function () {

    'use strict';

    /** @typedef {{run: function(function(), number=):number, cancel: function(number)}} */

    var AsyncInterface = void 0; // eslint-disable-line no-unused-vars

    // Microtask implemented using Mutation Observer
    var microtaskCurrHandle = 0;
    var microtaskLastHandle = 0;
    var microtaskCallbacks = [];
    var microtaskNodeContent = 0;
    var microtaskNode = document.createTextNode('');
    new window.MutationObserver(microtaskFlush).observe(microtaskNode, { characterData: true });

    function microtaskFlush() {
      var len = microtaskCallbacks.length;
      for (var i = 0; i < len; i++) {
        var cb = microtaskCallbacks[i];
        if (cb) {
          try {
            cb();
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
      }
      microtaskCallbacks.splice(0, len);
      microtaskLastHandle += len;
    }

    /**
     * Module that provides a number of strategies for enqueuing asynchronous
     * tasks.  Each sub-module provides a standard `run(fn)` interface that returns a
     * handle, and a `cancel(handle)` interface for canceling async tasks before
     * they run.
     *
     * @namespace
     * @memberof Polymer
     * @summary Module that provides a number of strategies for enqueuing asynchronous
     * tasks.
     */
    Polymer.Async = {

      /**
       * Async interface wrapper around `setTimeout`.
       *
       * @namespace
       * @memberof Polymer.Async
       * @summary Async interface wrapper around `setTimeout`.
       */
      timeOut: {
        /**
         * Returns a sub-module with the async interface providing the provided
         * delay.
         *
         * @memberof Polymer.Async.timeOut
         * @param {number} delay Time to wait before calling callbacks in ms
         * @return {AsyncInterface} An async timeout interface
         */
        after: function after(delay) {
          return {
            run: function run(fn) {
              return setTimeout(fn, delay);
            },

            cancel: window.clearTimeout.bind(window)
          };
        },

        /**
         * Enqueues a function called in the next task.
         *
         * @memberof Polymer.Async.timeOut
         * @param {Function} fn Callback to run
         * @return {*} Handle used for canceling task
         */
        run: window.setTimeout.bind(window),
        /**
         * Cancels a previously enqueued `timeOut` callback.
         *
         * @memberof Polymer.Async.timeOut
         * @param {*} handle Handle returned from `run` of callback to cancel
         */
        cancel: window.clearTimeout.bind(window)
      },

      /**
       * Async interface wrapper around `requestAnimationFrame`.
       *
       * @namespace
       * @memberof Polymer.Async
       * @summary Async interface wrapper around `requestAnimationFrame`.
       */
      animationFrame: {
        /**
         * Enqueues a function called at `requestAnimationFrame` timing.
         *
         * @memberof Polymer.Async.timeOut
         * @param {Function} fn Callback to run
         * @return {*} Handle used for canceling task
         */
        run: window.requestAnimationFrame.bind(window),
        /**
         * Cancels a previously enqueued `animationFrame` callback.
         *
         * @memberof Polymer.Async.timeOut
         * @param {*} handle Handle returned from `run` of callback to cancel
         */
        cancel: window.cancelAnimationFrame.bind(window)
      },

      /**
       * Async interface wrapper around `requestIdleCallback`.  Falls back to
       * `setTimeout` on browsers that do not support `requestIdleCallback`.
       *
       * @namespace
       * @memberof Polymer.Async
       * @summary Async interface wrapper around `requestIdleCallback`.
       */
      idlePeriod: {
        /**
         * Enqueues a function called at `requestIdleCallback` timing.
         *
         * @memberof Polymer.Async.timeOut
         * @param {Function} fn Callback to run
         * @return {*} Handle used for canceling task
         */
        run: function run(fn) {
          return window.requestIdleCallback ? window.requestIdleCallback(fn) : window.setTimeout(fn, 16);
        },

        /**
         * Cancels a previously enqueued `idlePeriod` callback.
         *
         * @memberof Polymer.Async.timeOut
         * @param {*} handle Handle returned from `run` of callback to cancel
         */
        cancel: function cancel(timer) {
          return window.cancelIdleCallback ? window.cancelIdleCallback(timer) : window.clearTimeout(timer);
        }
      },

      /**
       * Async interface for enqueueing callbacks that run at microtask timing.
       *
       * Note that microtask timing is achieved via a single `MutationObserver`,
       * and thus callbacks enqueued with this API will all run in a single
       * batch, and not interleaved with other microtasks such as promises.
       * Promises are avoided as an implementation choice for the time being
       * due to Safari bugs that cause Promises to lack microtask guarantees.
       *
       * @namespace
       * @memberof Polymer.Async
       * @summary Async interface for enqueueing callbacks that run at microtask
       *   timing.
       */
      microTask: {

        /**
         * Enqueues a function called at microtask timing.
         *
         * @memberof Polymer.Async.timeOut
         * @param {Function} fn Callback to run
         */
        run: function run(callback) {
          microtaskNode.textContent = microtaskNodeContent++;
          microtaskCallbacks.push(callback);
          return microtaskCurrHandle++;
        },


        /**
         * Cancels a previously enqueued `microTask` callback.
         *
         * @param {*} handle Handle returned from `run` of callback to cancel
         */
        cancel: function cancel(handle) {
          var idx = handle - microtaskLastHandle;
          if (idx >= 0) {
            if (!microtaskCallbacks[idx]) {
              throw new Error('invalid async handle: ' + handle);
            }
            microtaskCallbacks[idx] = null;
          }
        }
      }
    };
  })();

  /***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

  /*__wc__loader*/

  (function (document) {
    var _htmlStr = "\n\n\n";
    if (document.head) {
      var el = document.head;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  (function (document) {
    var _htmlStr = "";
    if (document.body) {
      var el = document.body;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  __webpack_require__(0);

  (function () {
    'use strict';

    /**
     * Module with utilities for manipulating structured data path strings.
     *
     * @namespace
     * @memberof Polymer
     * @summary Module with utilities for manipulating structured data path strings.
     */

    var Path = {

      /**
       * Returns true if the given string is a structured data path (has dots).
       *
       * Example:
       *
       * ```
       * Polymer.Path.isPath('foo.bar.baz') // true
       * Polymer.Path.isPath('foo')         // false
       * ```
       *
       * @memberof Polymer.Path
       * @param {string} path Path string
       * @return {boolean} True if the string contained one or more dots
       */
      isPath: function isPath(path) {
        return path.indexOf('.') >= 0;
      },

      /**
       * Returns the root property name for the given path.
       *
       * Example:
       *
       * ```
       * Polymer.Path.root('foo.bar.baz') // 'foo'
       * Polymer.Path.root('foo')         // 'foo'
       * ```
       *
       * @memberof Polymer.Path
       * @param {string} path Path string
       * @return {string} Root property name
       */
      root: function root(path) {
        var dotIndex = path.indexOf('.');
        if (dotIndex === -1) {
          return path;
        }
        return path.slice(0, dotIndex);
      },

      /**
       * Given `base` is `foo.bar`, `foo` is an ancestor, `foo.bar` is not
       * Returns true if the given path is an ancestor of the base path.
       *
       * Example:
       *
       * ```
       * Polymer.Path.isAncestor('foo.bar', 'foo')         // true
       * Polymer.Path.isAncestor('foo.bar', 'foo.bar')     // false
       * Polymer.Path.isAncestor('foo.bar', 'foo.bar.baz') // false
       * ```
       *
       * @memberof Polymer.Path
       * @param {string} path Path string
       * @return {boolean} True if `path` is an ancestor of `base`
       */
      isAncestor: function isAncestor(base, path) {
        //     base.startsWith(path + '.');
        return base.indexOf(path + '.') === 0;
      },

      /**
       * Given `base` is `foo.bar`, `foo.bar.baz` is an descendant
       *
       * Example:
       *
       * ```
       * Polymer.Path.isDescendant('foo.bar', 'foo.bar.baz') // true
       * Polymer.Path.isDescendant('foo.bar', 'foo.bar')     // false
       * Polymer.Path.isDescendant('foo.bar', 'foo')         // false
       * ```
       *
       * @memberof Polymer.Path
       */
      isDescendant: function isDescendant(base, path) {
        //     path.startsWith(base + '.');
        return path.indexOf(base + '.') === 0;
      },

      /**
       * Replaces a previous base path with a new base path, preserving the
       * remainder of the path.
       *
       * User must ensure `path` has a prefix of `base`.
       *
       * Example:
       *
       * ```
       * Polymer.Path.translate('foo.bar', 'zot' 'foo.bar.baz') // 'zot.baz'
       * ```
       *
       * @memberof Polymer.Path
       * @param {string} base Current base string to remove
       * @param {string} newBase New base string to replace with
       * @param {string} path Path to translate
       * @return {string} Translated string
       */
      translate: function translate(base, newBase, path) {
        return newBase + path.slice(base.length);
      },

      matches: function matches(base, path) {
        return base === path || this.isAncestor(base, path) || this.isDescendant(base, path);
      },

      /**
       * Converts array-based paths to flattened path.  String-based paths
       * are returned as-is.
       *
       * Example:
       *
       * ```
       * Polymer.Path.normalize(['foo.bar', 0, 'baz'])  // 'foo.bar.0.baz'
       * Polymer.Path.normalize('foo.bar.0.baz')        // 'foo.bar.0.baz'
       * ```
       *
       * @memberof Polymer.Path
       * @param {string | !Array<string|number>} path Input path
       * @return {string} Flattened path
       */
      normalize: function normalize(path) {
        if (Array.isArray(path)) {
          var parts = [];
          for (var i = 0; i < path.length; i++) {
            var args = path[i].toString().split('.');
            for (var j = 0; j < args.length; j++) {
              parts.push(args[j]);
            }
          }
          return parts.join('.');
        } else {
          return path;
        }
      },

      /**
       * Splits a path into an array of property names. Accepts either arrays
       * of path parts or strings.
       *
       * Example:
       *
       * ```
       * Polymer.Path.split(['foo.bar', 0, 'baz'])  // ['foo', 'bar', '0', 'baz']
       * Polymer.Path.split('foo.bar.0.baz')        // ['foo', 'bar', '0', 'baz']
       * ```
       *
       * @memberof Polymer.Path
       * @param {string | !Array<string|number>} path Input path
       * @return {!Array<string>} Array of path parts
       */
      split: function split(path) {
        if (Array.isArray(path)) {
          return this.normalize(path).split('.');
        }
        return path.toString().split('.');
      },

      /**
       * Reads a value from a path.  If any sub-property in the path is `undefined`,
       * this method returns `undefined` (will never throw.
       *
       * @memberof Polymer.Path
       * @param {Object} root Object from which to dereference path from
       * @param {string | !Array<string|number>} path Path to read
       * @param {Object=} info If an object is provided to `info`, the normalized
       *  (flattened) path will be set to `info.path`.
       * @return {*} Value at path, or `undefined` if the path could not be
       *  fully dereferenced.
       */
      get: function get(root, path, info) {
        var prop = root;
        var parts = this.split(path);
        // Loop over path parts[0..n-1] and dereference
        for (var i = 0; i < parts.length; i++) {
          if (!prop) {
            return;
          }
          var part = parts[i];
          prop = prop[part];
        }
        if (info) {
          info.path = parts.join('.');
        }
        return prop;
      },

      /**
       * Sets a value to a path.  If any sub-property in the path is `undefined`,
       * this method will no-op.
       *
       * @memberof Polymer.Path
       * @param {Object} root Object from which to dereference path from
       * @param {string | !Array<string|number>} path Path to set
       * @param {*} value Value to set to path
       * @return {string | undefined} The normalized version of the input path
       */
      set: function set(root, path, value) {
        var prop = root;
        var parts = this.split(path);
        var last = parts[parts.length - 1];
        if (parts.length > 1) {
          // Loop over path parts[0..n-2] and dereference
          for (var i = 0; i < parts.length - 1; i++) {
            var part = parts[i];
            prop = prop[part];
            if (!prop) {
              return;
            }
          }
          // Set value to object at end of path
          prop[last] = value;
        } else {
          // Simple property set
          prop[path] = value;
        }
        return parts.join('.');
      }

    };

    /**
     * Returns true if the given string is a structured data path (has dots).
     *
     * This function is deprecated.  Use `Polymer.Path.isPath` instead.
     *
     * Example:
     *
     * ```
     * Polymer.Path.isDeep('foo.bar.baz') // true
     * Polymer.Path.isDeep('foo')         // false
     * ```
     *
     * @deprecated
     * @memberof Polymer.Path
     * @param {string} path Path string
     * @return {boolean} True if the string contained one or more dots
     */
    Path.isDeep = Path.isPath;

    Polymer.Path = Path;
  })();

  /***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

  /*__wc__loader*/

  (function (document) {
    var _htmlStr = "\n\n";
    if (document.head) {
      var el = document.head;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  (function (document) {
    var _htmlStr = "";
    if (document.body) {
      var el = document.body;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  __webpack_require__(3);

  (function () {
    'use strict';

    var MODULE_STYLE_LINK_SELECTOR = 'link[rel=import][type~=css]';
    var INCLUDE_ATTR = 'include';

    function importModule(moduleId) {
      if (!Polymer.DomModule) {
        return null;
      }
      return Polymer.DomModule.import(moduleId);
    }

    /**
     * Module with utilities for collection CSS text from `<templates>`, external
     * stylesheets, and `dom-module`s.
     *
     * @namespace
     * @memberof Polymer
     * @summary Module with utilities for collection CSS text from various sources.
     */
    var StyleGather = {

      /**
       * Returns CSS text of styles in a space-separated list of `dom-module`s.
       *
       * @memberof Polymer.StyleGather
       * @param {string} moduleIds
       * @return {string} Concatenated CSS content from specified `dom-module`s
       */
      cssFromModules: function cssFromModules(moduleIds) {
        var modules = moduleIds.trim().split(' ');
        var cssText = '';
        for (var i = 0; i < modules.length; i++) {
          cssText += this.cssFromModule(modules[i]);
        }
        return cssText;
      },


      /**
       * Returns CSS text of styles in a given `dom-module`.  CSS in a `dom-module`
       * can come either from `<style>`s within the first `<template>`, or else
       * from one or more `<link rel="import" type="css">` links outside the
       * template.
       *
       * Any `<styles>` processed are removed from their original location.
       *
       * @memberof Polymer.StyleGather
       * @param {string} moduleId dom-module id to gather styles from
       * @return {string} Concatenated CSS content from specified `dom-module`
       */
      cssFromModule: function cssFromModule(moduleId) {
        var m = importModule(moduleId);
        if (m && m._cssText === undefined) {
          var cssText = '';
          // include css from the first template in the module
          var t = m.querySelector('template');
          if (t) {
            cssText += this.cssFromTemplate(t, m.assetpath);
          }
          // module imports: <link rel="import" type="css">
          cssText += this.cssFromModuleImports(moduleId);
          m._cssText = cssText || null;
        }
        if (!m) {
          console.warn('Could not find style data in module named', moduleId);
        }
        return m && m._cssText || '';
      },


      /**
       * Returns CSS text of `<styles>` within a given template.
       *
       * Any `<styles>` processed are removed from their original location.
       *
       * @memberof Polymer.StyleGather
       * @param {HTMLTemplateElement} template Template to gather styles from
       * @param {string} baseURI Base URI to resolve the URL against
       * @return {string} Concatenated CSS content from specified template
       */
      cssFromTemplate: function cssFromTemplate(template, baseURI) {
        var cssText = '';
        // if element is a template, get content from its .content
        var e$ = template.content.querySelectorAll('style');
        for (var i = 0; i < e$.length; i++) {
          var e = e$[i];
          // support style sharing by allowing styles to "include"
          // other dom-modules that contain styling
          var include = e.getAttribute(INCLUDE_ATTR);
          if (include) {
            cssText += this.cssFromModules(include);
          }
          e.parentNode.removeChild(e);
          cssText += baseURI ? Polymer.ResolveUrl.resolveCss(e.textContent, baseURI) : e.textContent;
        }
        return cssText;
      },


      /**
       * Returns CSS text from stylsheets loaded via `<link rel="import" type="css">`
       * links within the specified `dom-module`.
       *
       * @memberof Polymer.StyleGather
       * @param {string} moduleId Id of `dom-module` to gather CSS from
       * @return {string} Concatenated CSS content from links in specified `dom-module`
       */
      cssFromModuleImports: function cssFromModuleImports(moduleId) {
        var cssText = '';
        var m = importModule(moduleId);
        if (!m) {
          return cssText;
        }
        var p$ = m.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);
        for (var i = 0; i < p$.length; i++) {
          var p = p$[i];
          if (p.import) {
            var importDoc = p.import;
            // NOTE: polyfill affordance.
            // under the HTMLImports polyfill, there will be no 'body',
            // but the import pseudo-doc can be used directly.
            var container = importDoc.body ? importDoc.body : importDoc;
            cssText += Polymer.ResolveUrl.resolveCss(container.textContent, importDoc.baseURI);
          }
        }
        return cssText;
      }
    };

    Polymer.StyleGather = StyleGather;
  })();

  /***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

  /*__wc__loader*/

  (function (document) {
    var _htmlStr = "\n";
    if (document.head) {
      var el = document.head;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  (function (document) {
    var _htmlStr = "";
    if (document.body) {
      var el = document.body;
      var div = document.createElement('div');
      div.innerHTML = _htmlStr;
      while (div.children.length > 0) {
        el.appendChild(div.children[0]);
      }
    } else {
      document.write(_htmlStr);
    }
  })(document);

  __webpack_require__(4);

  (function () {
    'use strict';

    /**
     * Base class that provides the core API for Polymer's meta-programming
     * features including template stamping, data-binding, attribute deserialization,
     * and property change observation.
     *
     * @polymerElement
     * @memberof Polymer
     * @extends HTMLElement
     * @mixes Polymer.ElementMixin
     * @summary Custom element base class that provides the core API for Polymer's
     *   key meta-programming features including template stamping, data-binding,
     *   attribute deserialization, and property change observation
     */

    var Element = Polymer.ElementMixin(HTMLElement);
    Polymer.Element = Element;
  })();

  /***/
}]);
//# sourceMappingURL=polymer-element.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map