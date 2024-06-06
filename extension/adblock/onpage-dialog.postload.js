/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 245:
/***/ (function(module) {

/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  var hasOwnProperty = Object.hasOwnProperty,
      setPrototypeOf = Object.setPrototypeOf,
      isFrozen = Object.isFrozen;
  var freeze = Object.freeze,
      seal = Object.seal,
      create = Object.create; // eslint-disable-line import/no-mutable-exports

  var _ref = typeof Reflect !== 'undefined' && Reflect,
      apply = _ref.apply,
      construct = _ref.construct;

  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }

  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }

  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }

  if (!construct) {
    construct = function construct(Func, args) {
      return new (Function.prototype.bind.apply(Func, [null].concat(_toConsumableArray(args))))();
    };
  }

  var arrayForEach = unapply(Array.prototype.forEach);
  var arrayPop = unapply(Array.prototype.pop);
  var arrayPush = unapply(Array.prototype.push);

  var stringToLowerCase = unapply(String.prototype.toLowerCase);
  var stringMatch = unapply(String.prototype.match);
  var stringReplace = unapply(String.prototype.replace);
  var stringIndexOf = unapply(String.prototype.indexOf);
  var stringTrim = unapply(String.prototype.trim);

  var regExpTest = unapply(RegExp.prototype.test);

  var typeErrorCreate = unconstruct(TypeError);

  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return apply(func, thisArg, args);
    };
  }

  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return construct(func, args);
    };
  }

  /* Add properties to a lookup table */
  function addToSet(set, array) {
    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }

    var l = array.length;
    while (l--) {
      var element = array[l];
      if (typeof element === 'string') {
        var lcElement = stringToLowerCase(element);
        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }

          element = lcElement;
        }
      }

      set[element] = true;
    }

    return set;
  }

  /* Shallow clone an object */
  function clone(object) {
    var newObject = create(null);

    var property = void 0;
    for (property in object) {
      if (apply(hasOwnProperty, object, [property])) {
        newObject[property] = object[property];
      }
    }

    return newObject;
  }

  var html = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

  // SVG
  var svg = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'audio', 'canvas', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'video', 'view', 'vkern']);

  var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);

  var mathMl = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']);

  var text = freeze(['#text']);

  var html$1 = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns']);

  var svg$1 = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);

  var mathMl$1 = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);

  var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  // eslint-disable-next-line unicorn/better-regex
  var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
  var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
  var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
  var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  function _toConsumableArray$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  var getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };

  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {Document} document The document object (to determine policy name suffix)
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported).
   */
  var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
    if ((typeof trustedTypes === 'undefined' ? 'undefined' : _typeof(trustedTypes)) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    }

    // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.
    var suffix = null;
    var ATTR_NAME = 'data-tt-policy-suffix';
    if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
      suffix = document.currentScript.getAttribute(ATTR_NAME);
    }

    var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML: function createHTML(html$$1) {
          return html$$1;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };

  function createDOMPurify() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

    var DOMPurify = function DOMPurify(root) {
      return createDOMPurify(root);
    };

    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */
    DOMPurify.version = '2.2.2';

    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */
    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;

      return DOMPurify;
    }

    var originalDocument = window.document;

    var document = window.document;
    var DocumentFragment = window.DocumentFragment,
        HTMLTemplateElement = window.HTMLTemplateElement,
        Node = window.Node,
        NodeFilter = window.NodeFilter,
        _window$NamedNodeMap = window.NamedNodeMap,
        NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
        Text = window.Text,
        Comment = window.Comment,
        DOMParser = window.DOMParser,
        trustedTypes = window.trustedTypes;

    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.

    if (typeof HTMLTemplateElement === 'function') {
      var template = document.createElement('template');
      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }

    var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
    var emptyHTML = trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML('') : '';

    var _document = document,
        implementation = _document.implementation,
        createNodeIterator = _document.createNodeIterator,
        getElementsByTagName = _document.getElementsByTagName,
        createDocumentFragment = _document.createDocumentFragment;
    var importNode = originalDocument.importNode;


    var documentMode = {};
    try {
      documentMode = clone(document).documentMode ? document.documentMode : {};
    } catch (_) {}

    var hooks = {};

    /**
     * Expose whether this browser supports running the full DOMPurify.
     */
    DOMPurify.isSupported = implementation && typeof implementation.createHTMLDocument !== 'undefined' && documentMode !== 9;

    var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR,
        ERB_EXPR$$1 = ERB_EXPR,
        DATA_ATTR$$1 = DATA_ATTR,
        ARIA_ATTR$$1 = ARIA_ATTR,
        IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA,
        ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;
    var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;

    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */

    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(html), _toConsumableArray$1(svg), _toConsumableArray$1(svgFilters), _toConsumableArray$1(mathMl), _toConsumableArray$1(text)));

    /* Allowed attribute names */
    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray$1(html$1), _toConsumableArray$1(svg$1), _toConsumableArray$1(mathMl$1), _toConsumableArray$1(xml)));

    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
    var FORBID_TAGS = null;

    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
    var FORBID_ATTR = null;

    /* Decide if ARIA attributes are okay */
    var ALLOW_ARIA_ATTR = true;

    /* Decide if custom data attributes are okay */
    var ALLOW_DATA_ATTR = true;

    /* Decide if unknown protocols are okay */
    var ALLOW_UNKNOWN_PROTOCOLS = false;

    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */
    var SAFE_FOR_TEMPLATES = false;

    /* Decide if document with <html>... should be returned */
    var WHOLE_DOCUMENT = false;

    /* Track whether config is already set on this instance of DOMPurify. */
    var SET_CONFIG = false;

    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */
    var FORCE_BODY = false;

    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */
    var RETURN_DOM = false;

    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */
    var RETURN_DOM_FRAGMENT = false;

    /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
     * `Node` is imported into the current `Document`. If this flag is not enabled the
     * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
     * DOMPurify.
     *
     * This defaults to `true` starting DOMPurify 2.2.0. Note that setting it to `false`
     * might cause XSS from attacks hidden in closed shadowroots in case the browser
     * supports Declarative Shadow: DOM https://web.dev/declarative-shadow-dom/
     */
    var RETURN_DOM_IMPORT = true;

    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */
    var RETURN_TRUSTED_TYPE = false;

    /* Output should be free from DOM clobbering attacks? */
    var SANITIZE_DOM = true;

    /* Keep element content when removing element? */
    var KEEP_CONTENT = true;

    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */
    var IN_PLACE = false;

    /* Allow usage of profiles like html, svg and mathMl */
    var USE_PROFILES = {};

    /* Tags to ignore content of when KEEP_CONTENT is true */
    var FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);

    /* Tags that are safe for data: URIs */
    var DATA_URI_TAGS = null;
    var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);

    /* Attributes safe for values like "javascript:" */
    var URI_SAFE_ATTRIBUTES = null;
    var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'summary', 'title', 'value', 'style', 'xmlns']);

    /* Keep a reference to config to pass to hooks */
    var CONFIG = null;

    /* Ideally, do not touch anything below this line */
    /* ______________________________________________ */

    var formElement = document.createElement('form');

    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity
    var _parseConfig = function _parseConfig(cfg) {
      if (CONFIG && CONFIG === cfg) {
        return;
      }

      /* Shield configuration object from tampering */
      if (!cfg || (typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
        cfg = {};
      }

      /* Shield configuration object from prototype pollution */
      cfg = clone(cfg);

      /* Set configuration parameters */
      ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
      URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS) : DEFAULT_DATA_URI_TAGS;
      FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
      FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
      USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
      RETURN_DOM = cfg.RETURN_DOM || false; // Default false
      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
      RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT !== false; // Default true
      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
      FORCE_BODY = cfg.FORCE_BODY || false; // Default false
      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
      IN_PLACE = cfg.IN_PLACE || false; // Default false
      IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;
      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }

      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }

      /* Parse profile info */
      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(text)));
        ALLOWED_ATTR = [];
        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html);
          addToSet(ALLOWED_ATTR, html$1);
        }

        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg);
          addToSet(ALLOWED_ATTR, svg$1);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg$1);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl);
          addToSet(ALLOWED_ATTR, mathMl$1);
          addToSet(ALLOWED_ATTR, xml);
        }
      }

      /* Merge configuration parameters */
      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }

        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
      }

      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }

        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
      }

      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
      }

      /* Add #text in case KEEP_CONTENT is set to true */
      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }

      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }

      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      }

      // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.
      if (freeze) {
        freeze(cfg);
      }

      CONFIG = cfg;
    };

    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */
    var _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, { element: node });
      try {
        node.parentNode.removeChild(node);
      } catch (_) {
        node.outerHTML = emptyHTML;
      }
    };

    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */
    var _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }

      node.removeAttribute(name);
    };

    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */
    var _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      var doc = void 0;
      var leadingWhitespace = void 0;

      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        var matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }

      var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /* Use the DOMParser API by default, fallback later if needs be */
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, 'text/html');
      } catch (_) {}

      /* Use createHTMLDocument in case DOMParser is not available */
      if (!doc || !doc.documentElement) {
        doc = implementation.createHTMLDocument('');
        var _doc = doc,
            body = _doc.body;

        body.parentNode.removeChild(body.parentNode.firstElementChild);
        body.outerHTML = dirtyPayload;
      }

      if (dirty && leadingWhitespace) {
        doc.body.insertBefore(document.createTextNode(leadingWhitespace), doc.body.childNodes[0] || null);
      }

      /* Work on whole document or just its body */
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
    };

    /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */
    var _createIterator = function _createIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, function () {
        return NodeFilter.FILTER_ACCEPT;
      }, false);
    };

    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */
    var _isClobbered = function _isClobbered(elm) {
      if (elm instanceof Text || elm instanceof Comment) {
        return false;
      }

      if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string') {
        return true;
      }

      return false;
    };

    /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */
    var _isNode = function _isNode(object) {
      return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? object instanceof Node : object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
    };

    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */
    var _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }

      arrayForEach(hooks[entryPoint], function (hook) {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };

    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */
    var _sanitizeElements = function _sanitizeElements(currentNode) {
      var content = void 0;

      /* Execute a hook if present */
      _executeHook('beforeSanitizeElements', currentNode, null);

      /* Check if element is clobbered or can clobber */
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Check if tagname contains Unicode */
      if (stringMatch(currentNode.nodeName, /[\u0080-\uFFFF]/)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Now let's check the element's type and name */
      var tagName = stringToLowerCase(currentNode.nodeName);

      /* Execute a hook if present */
      _executeHook('uponSanitizeElement', currentNode, {
        tagName: tagName,
        allowedTags: ALLOWED_TAGS
      });

      /* Take care of an mXSS pattern using p, br inside svg, math */
      if ((tagName === 'svg' || tagName === 'math') && currentNode.querySelectorAll('p, br, form, table').length !== 0) {
        _forceRemove(currentNode);
        return true;
      }

      /* Detect mXSS attempts abusing namespace confusion */
      if (!_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[!/\w]/g, currentNode.innerHTML) && regExpTest(/<[!/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Remove element if anything forbids its presence */
      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Keep content except for bad-listed elements */
        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && typeof currentNode.insertAdjacentHTML === 'function') {
          try {
            var htmlToInsert = currentNode.innerHTML;
            currentNode.insertAdjacentHTML('AfterEnd', trustedTypesPolicy ? trustedTypesPolicy.createHTML(htmlToInsert) : htmlToInsert);
          } catch (_) {}
        }

        _forceRemove(currentNode);
        return true;
      }

      /* Remove in case a noscript/noembed XSS is suspected */
      if ((tagName === 'noscript' || tagName === 'noembed') && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }

      /* Sanitize element content to be template-safe */
      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        /* Get the element's text content */
        content = currentNode.textContent;
        content = stringReplace(content, MUSTACHE_EXPR$$1, ' ');
        content = stringReplace(content, ERB_EXPR$$1, ' ');
        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
          currentNode.textContent = content;
        }
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeElements', currentNode, null);

      return false;
    };

    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity
    var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }

      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */
      if (ALLOW_DATA_ATTR && regExpTest(DATA_ATTR$$1, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$$1, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        return false;

        /* Check value is safe. First, is attr inert? If so, is safe */
      } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ; else if (!value) ; else {
        return false;
      }

      return true;
    };

    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */
    var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      var attr = void 0;
      var value = void 0;
      var lcName = void 0;
      var l = void 0;
      /* Execute a hook if present */
      _executeHook('beforeSanitizeAttributes', currentNode, null);

      var attributes = currentNode.attributes;

      /* Check if we have attributes; if not we might have a text node */

      if (!attributes) {
        return;
      }

      var hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l = attributes.length;

      /* Go backwards over all attributes; safely remove bad ones */
      while (l--) {
        attr = attributes[l];
        var _attr = attr,
            name = _attr.name,
            namespaceURI = _attr.namespaceURI;

        value = stringTrim(attr.value);
        lcName = stringToLowerCase(name);

        /* Execute a hook if present */
        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
        value = hookEvent.attrValue;
        /* Did the hooks approve of the attribute? */
        if (hookEvent.forceKeepAttr) {
          continue;
        }

        /* Remove attribute */
        _removeAttribute(name, currentNode);

        /* Did the hooks approve of the attribute? */
        if (!hookEvent.keepAttr) {
          continue;
        }

        /* Work around a security issue in jQuery 3.0 */
        if (regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }

        /* Sanitize attribute content to be template-safe */
        if (SAFE_FOR_TEMPLATES) {
          value = stringReplace(value, MUSTACHE_EXPR$$1, ' ');
          value = stringReplace(value, ERB_EXPR$$1, ' ');
        }

        /* Is `value` valid for this attribute? */
        var lcTag = currentNode.nodeName.toLowerCase();
        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }

        /* Handle invalid data-* attribute set by try-catching it */
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }

          arrayPop(DOMPurify.removed);
        } catch (_) {}
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeAttributes', currentNode, null);
    };

    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */
    var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      var shadowNode = void 0;
      var shadowIterator = _createIterator(fragment);

      /* Execute a hook if present */
      _executeHook('beforeSanitizeShadowDOM', fragment, null);

      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);

        /* Sanitize tags and elements */
        if (_sanitizeElements(shadowNode)) {
          continue;
        }

        /* Deep shadow DOM detected */
        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(shadowNode);
      }

      /* Execute a hook if present */
      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };

    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    // eslint-disable-next-line complexity
    DOMPurify.sanitize = function (dirty, cfg) {
      var body = void 0;
      var importedNode = void 0;
      var currentNode = void 0;
      var oldNode = void 0;
      var returnNode = void 0;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */
      if (!dirty) {
        dirty = '<!-->';
      }

      /* Stringify, in case dirty is an object */
      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        // eslint-disable-next-line no-negated-condition
        if (typeof dirty.toString !== 'function') {
          throw typeErrorCreate('toString is not a function');
        } else {
          dirty = dirty.toString();
          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        }
      }

      /* Check we can run. Otherwise fall back or ignore */
      if (!DOMPurify.isSupported) {
        if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
          if (typeof dirty === 'string') {
            return window.toStaticHTML(dirty);
          }

          if (_isNode(dirty)) {
            return window.toStaticHTML(dirty.outerHTML);
          }
        }

        return dirty;
      }

      /* Assign config vars */
      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }

      /* Clean up removed elements */
      DOMPurify.removed = [];

      /* Check if dirty is correctly typed for IN_PLACE */
      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }

      if (IN_PLACE) ; else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);
        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT &&
        // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }

        /* Initialize the document to work on */
        body = _initDocument(dirty);

        /* Check we have a DOM node from the data */
        if (!body) {
          return RETURN_DOM ? null : emptyHTML;
        }
      }

      /* Remove first element node (ours) if FORCE_BODY is set */
      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }

      /* Get node iterator */
      var nodeIterator = _createIterator(IN_PLACE ? dirty : body);

      /* Now start iterating over the created document */
      while (currentNode = nodeIterator.nextNode()) {
        /* Fix IE's strange behavior with manipulated textNodes #89 */
        if (currentNode.nodeType === 3 && currentNode === oldNode) {
          continue;
        }

        /* Sanitize tags and elements */
        if (_sanitizeElements(currentNode)) {
          continue;
        }

        /* Shadow DOM detected, sanitize it */
        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }

        /* Check attributes, sanitize if necessary */
        _sanitizeAttributes(currentNode);

        oldNode = currentNode;
      }

      oldNode = null;

      /* If we sanitized `dirty` in-place, return it. */
      if (IN_PLACE) {
        return dirty;
      }

      /* Return sanitized string or DOM */
      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);

          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }

        if (RETURN_DOM_IMPORT) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }

        return returnNode;
      }

      var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

      /* Sanitize final string template-safe */
      if (SAFE_FOR_TEMPLATES) {
        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$$1, ' ');
        serializedHTML = stringReplace(serializedHTML, ERB_EXPR$$1, ' ');
      }

      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };

    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */
    DOMPurify.setConfig = function (cfg) {
      _parseConfig(cfg);
      SET_CONFIG = true;
    };

    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */
    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };

    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */
    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }

      var lcTag = stringToLowerCase(tag);
      var lcName = stringToLowerCase(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };

    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */
    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }

      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };

    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     */
    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        arrayPop(hooks[entryPoint]);
      }
    };

    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */
    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };

    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */
    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };

    return DOMPurify;
  }

  var purify = createDOMPurify();

  return purify;

}));


/***/ }),

/***/ 935:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
  /* webextension-polyfill - v0.8.0 - Tue Apr 20 2021 11:27:38 */

  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */

  /* vim: set sts=2 sw=2 et tw=80: */

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.

    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            },
            "elements": {
              "createSidebarPane": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goBack": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goForward": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }
      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */


      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }

      }
      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */


      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };
      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */


      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(new Error(extensionAPIs.runtime.lastError.message));
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */


      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.

                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };
      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */


      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }

        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */

      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.
              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,

                get() {
                  return target[prop];
                },

                set(value) {
                  target[prop] = value;
                }

              });
              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }

            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }

        }; // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.

        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };
      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */


      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }

      });

      const onRequestFinishedWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */


        return function onRequestFinished(req) {
          const wrappedReq = wrapObject(req, {}
          /* wrappers */
          , {
            getContent: {
              minArgs: 0,
              maxArgs: 0
            }
          });
          listener(wrappedReq);
        };
      }); // Keep track if the deprecation warning has been logged at least once.

      let loggedSendResponseDeprecationWarning = false;
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */


        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }

              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;

          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.

          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          } // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).


          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;

              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          }; // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.


          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          } // Let Chrome know that the listener is replying.


          return true;
        };
      });

      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(new Error(extensionAPIs.runtime.lastError.message));
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        devtools: {
          network: {
            onRequestFinished: wrapEvent(onRequestFinishedWrappers)
          }
        },
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    } // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.


    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/webextension-polyfill/dist/browser-polyfill.js
var browser_polyfill = __webpack_require__(935);
// EXTERNAL MODULE: ./node_modules/dompurify/dist/purify.js
var purify = __webpack_require__(245);
;// CONCATENATED MODULE: ./adblock-betafish/fonts/lato.woff
const lato_namespaceObject = "data:font/woff;base64,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";
;// CONCATENATED MODULE: ./adblock-betafish/fonts/lato-ext-regular.woff
const lato_ext_regular_namespaceObject = "data:font/woff;base64,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";
;// CONCATENATED MODULE: ./adblock-betafish/fonts/lato-ext-italic.woff
const lato_ext_italic_namespaceObject = "data:font/woff;base64,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";
;// CONCATENATED MODULE: ./adblock-betafish/fonts/lato-italic.woff
const lato_italic_namespaceObject = "data:font/woff;base64,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";
;// CONCATENATED MODULE: ./adblock-betafish/fonts/lato-ext-bolditalic.woff
const lato_ext_bolditalic_namespaceObject = "data:font/woff;base64,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";
;// CONCATENATED MODULE: ./adblock-betafish/fonts/lato-bolditalic.woff
const lato_bolditalic_namespaceObject = "data:font/woff;base64,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";
;// CONCATENATED MODULE: ./adblock-betafish/fonts/lato-ext-bold.woff
const lato_ext_bold_namespaceObject = "data:font/woff;base64,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";
;// CONCATENATED MODULE: ./adblock-betafish/fonts/lato-bold.woff
const lato_bold_namespaceObject = "data:font/woff;base64,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";
;// CONCATENATED MODULE: ./icons/MaterialIcons-Regular.woff2
const MaterialIcons_Regular_woff2_namespaceObject = "data:font/woff2;base64,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";
;// CONCATENATED MODULE: ./icons/adblock-20.svg
const adblock_20_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMCAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE2NDlfMjA2OCkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuNTQ3OTIgMC41QzYuMTA1ODkgMC41IDUuNjgxOTQgMC42NzU2MTUgNS4zNjkzNiAwLjk4ODIwNkwwLjQ4ODEwMyA1Ljg2OTg5QzAuMTc1NTc0IDYuMTgyNDQgMCA2LjYwNjM2IDAgNy4wNDgzNlYxMy45NTI2QzAgMTQuMzk0NyAwLjE3NTU5NSAxNC44MTg2IDAuNDg4MTU2IDE1LjEzMTFMNS4zNjkzNiAyMC4wMTI0QzUuNjgxOTQgMjAuMzI0OSA2LjEwNTg2IDIwLjUwMDUgNi41NDc4OSAyMC41MDA1SDEzLjQ1MjFDMTMuODk0MSAyMC41MDA1IDE0LjMxODEgMjAuMzI0OSAxNC42MzA2IDIwLjAxMjRMMTkuNTExOCAxNS4xMzExQzE5LjgyNDQgMTQuODE4NiAyMCAxNC4zOTQ2IDIwIDEzLjk1MjZWNy4wNDgzNkMyMCA2LjYwNjM2IDE5LjgyNDQgNi4xODI0NCAxOS41MTE5IDUuODY5ODlMMTQuNjMwNiAwLjk4ODIwNkMxNC4zMTgxIDAuNjc1NjE1IDEzLjg5NDEgMC41IDEzLjQ1MjEgMC41SDYuNTQ3OTJaIiBmaWxsPSIjRTQwRDBEIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOS41NjczMyAxNy43NUMxMi44ODA2IDE3Ljc1IDEzLjY2NjggMTQuNzEwOCAxMy42NjY4IDE0LjcxMDhMMTUuNTY4NSA5LjI0NjkyQzE1LjU2ODUgOS4yNDY5MiAxNS43NDAyIDguNjc5NzUgMTUuNzA4NyA4LjY3MzQ0QzEzLjkzNzggOC4zNDI1OCAxMy41NjEzIDkuNTkwMzkgMTMuNTYxMyA5LjU5MDM5QzEzLjU2MTMgOS41OTAzOSAxMi44ODA2IDExLjM1ODEgMTIuNzc1MSAxMS4zNTgxQzEyLjY2OTUgMTEuMzU4MSAxMi42NTY5IDExLjIyNzQgMTIuNjU2OSAxMS4yMjc0VjQuODc2NDRDMTIuNjU2OSA0Ljg3NjQ0IDEyLjY5IDQuMDU3MTcgMTEuODQ4NyA0LjA1NzE3QzExLjAwNzQgNC4wNTcxNyAxMS4wNDk5IDQuODc4MDIgMTEuMDQ5OSA0Ljg3ODAyTDExLjA1MTUgOS41Njk5MkMxMS4wNTE1IDkuNTY5OTIgMTEuMDYyNSA5Ljc1ODk3IDEwLjkwNDkgOS43NTg5N0MxMC43NjQ3IDkuNzU4OTcgMTAuNzcyNiA5LjU3NjIyIDEwLjc3MjYgOS41NzYyMlYzLjkyMzI1QzEwLjc3MjYgMy45MjMyNSAxMC44MjQ2IDMgOS45NzM4IDNDOS4xMjMwMyAzIDkuMTY4NzIgMy45Mjk1NiA5LjE2ODcyIDMuOTI5NTZMOS4xNjA4NiA5LjUwNjg5QzkuMTYwODYgOS41MDY4OSA5LjE3MTg5IDkuNjc4NjEgOS4wMzE2NiA5LjY3ODYxQzguOTAwODkgOS42Nzg2MSA4LjkwNTYxIDkuNTA4NDcgOC45MDU2MSA5LjUwODQ3VjQuODMyMzNDOC45MDU2MSA0LjgzMjMzIDguOTUyODkgMy44ODA3MSA4LjA4NjM1IDMuODgwNzFDNy4yMzU1NyAzLjg4MDcxIDcuMjgxMjUgNC44NDk2NiA3LjI4MTI1IDQuODQ5NjZMNy4yNzMzOCA5Ljc4NzMzQzcuMjczMzggOS43ODczMyA3LjI4OTEzIDkuOTMwNjkgNy4xNTUyMSA5LjkzMDY5QzcuMDEzNDIgOS45MzA2OSA3LjAxNjU3IDkuNzg3MzMgNy4wMTY1NyA5Ljc4NzMzTDcuMDEwMjcgNi44MDE3MkM3LjAxMDI3IDYuODAxNzIgNy4wMTgxNCA1Ljk3NjE3IDYuMzAyODYgNS45NzYxN0M1LjU0MTg4IDUuOTc2MTcgNS41NTYwNiA2LjgwMTcyIDUuNTU2MDYgNi44MDE3MlYxMy4yNDU2QzUuNTYwNzkgMTMuMjQ0IDUuMzYzODUgMTcuNzUgOS41NjczMyAxNy43NVoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTY0OV8yMDY4Ij4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjUpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";
;// CONCATENATED MODULE: ./adblock-betafish/onpage-dialog/content/dialog.css
const dialog_namespaceObject = "/*\n * This file is part of AdBlock  <https://getadblock.com/>,\n * Copyright (C) 2013-present  Adblock, Inc.\n *\n * AdBlock is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * AdBlock is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.\n */\n\n:host {\n  all: initial;\n\n  --text-color: #333333;\n  --button-color: #333333;\n  --button-background: #ffca00;\n  --icon-color: #666666;\n  --icon-color-hover: #333333;\n  --icon-border-color: #e6e6e6;\n  --main-icon-background-color: white;\n  --thumb-background-color: #c4c4c4;\n}\n\n* {\n  font-family: \"Lato\", Arial, sans-serif;\n  font-size: 16px;\n}\n\n.material-icons {\n  font-family: \"Material Icons\";\n  cursor: pointer;\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  vertical-align: middle;\n  color: var(--icon-color);\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  font-feature-settings: \"liga\";\n}\n\n.material-icons.md-20 {\n  font-size: 20px;\n}\n\n/* RTL language */\n\n[dir=\"rtl\"] {\n  left: auto;\n  right: 75px;\n}\n\n.header-section {\n  display: flex;\n  align-items: center;\n}\n\n.header-logo {\n  height: 18px;\n  width: auto;\n}\n\n.header-logo-text {\n  color: #333333;\n  padding-left: 6px;\n  height: 22px;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 140%;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--icon-border-color);\n  padding-bottom: 8px;\n  align-items: center;\n}\n\nheader .material-icons {\n  color: var(--icon-color);\n}\n\nheader .material-icons:hover {\n  color: var(--icon-color-hover);\n}\n\nheader .material-icons:focus {\n  outline: #2284f7 auto 5px;\n  opacity: 1;\n}\n\n#settingsIcon {\n  margin-right: 8px;\n}\n\n.dialog {\n  position: fixed;\n  top: var(--dialog-top-position);\n  right: 37px;\n  width: 256px;\n  padding: 8px 16px 24px 16px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 6px;\n  background-color: var(--main-icon-background-color);\n  z-index: 2147483647 !important;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 12px;\n}\n\n.titleRow {\n  display: flex;\n  font-weight: bold;\n  color: var(--text-color);\n  line-height: 140%;\n  margin-bottom: 0px;\n}\n\n#bodySection {\n  display: flex;\n  flex-direction: column;\n}\n\n.msgText {\n  font-size: 13px;\n  line-height: 140%;\n  color: var(--text-color);\n  width: 100%;\n  margin-bottom: 0px;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: 8px;\n}\n\n#continue {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 22.5px;\n  height: 40px;\n  min-width: 100%;\n  border-radius: 4px;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--button-color);\n  background-color: var(--button-background);\n}\n\n#continue:hover {\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);\n}\n";
;// CONCATENATED MODULE: ./adblock-betafish/onpage-dialog/content/dialog.html
const onpage_dialog_content_dialog_namespaceObject = "<!--\n/*\n  This file is part of AdBlock  <https://getadblock.com/>,\n  Copyright (C) 2013-present  Adblock, Inc.\n\n  AdBlock is free software: you can redistribute it and/or modify\n  it under the terms of the GNU General Public License version 3 as\n  published by the Free Software Foundation.\n\n  AdBlock is distributed in the hope that it will be useful,\n  but WITHOUT ANY WARRANTY; without even the implied warranty of\n  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  GNU General Public License for more details.\n\n  You should have received a copy of the GNU General Public License\n  along with AdBlock.  If not, see <http://www.gnu.org/licenses/>.\n\n-->\n<div class=\"dialog\">\n  <header>\n    <span class=\"header-section\">\n      <img class=\"header-logo\" alt=\"AdBlock logo\" id=\"adblock-logo\" />\n      <span class=\"header-logo-text\">AdBlock</span>\n    </span>\n    <span class=\"header-section\">\n      <i tabindex=\"10\" class=\"material-icons md-20\" id=\"closeIcon\" role=\"img\" aria-label=\"close\"\n        >close</i\n      >\n    </span>\n  </header>\n  <main>\n    <h1 class=\"titleRow\" id=\"titleRow\"></h1>\n    <section id=\"bodySection\"></section>\n  </main>\n\n  <footer id=\"footer\">\n    <button id=\"continue\"></button>\n  </footer>\n</div>\n";
;// CONCATENATED MODULE: ./adblock-betafish/polyfills/shared/polyfill.ts
function isMessage(candidate) {
    return (candidate !== null && typeof candidate === "object" && "type" in candidate);
}

;// CONCATENATED MODULE: ./vendor/adblockplusui/js/api/api.port.ts
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
let port;
const connectListeners = new Set();
const disconnectListeners = new Set();
const messageListeners = new Set();
function addConnectListener(listener) {
    connectListeners.add(listener);
    listener();
}
function addDisconnectListener(listener) {
    disconnectListeners.add(listener);
}
function addMessageListener(listener) {
    messageListeners.add(listener);
}
const connect = () => {
    if (port) {
        return port;
    }
    try {
        port = browser.runtime.connect({ name: "ui" });
    }
    catch (ex) {
        port = null;
        disconnectListeners.forEach((listener) => listener());
        return port;
    }
    port.onMessage.addListener((message) => {
        onMessage(message);
    });
    port.onDisconnect.addListener(onDisconnect);
    connectListeners.forEach((listener) => listener());
    return port;
};
function listen(_a) {
    var { type, filter } = _a, options = __rest(_a, ["type", "filter"]);
    addConnectListener(() => {
        if (port) {
            port.postMessage(Object.assign({ type: `${type}.listen`, filter }, options));
        }
    });
}
function onDisconnect() {
    port = null;
    setTimeout(() => connect(), 100);
}
function onMessage(message) {
    if (!message.type.endsWith(".respond")) {
        return;
    }
    messageListeners.forEach((listener) => listener(message));
}
function removeDisconnectListener(listener) {
    disconnectListeners.delete(listener);
}

;// CONCATENATED MODULE: ./vendor/adblockplusui/js/api/api.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const platformToStore = {
    chromium: "chrome",
    edgehtml: "edge",
    gecko: "firefox"
};
const app = {
    get: (what) => send("app.get", { what }),
    getInfo: () => __awaiter(void 0, void 0, void 0, function* () {
        return Promise.all([app.get("application"), app.get("platform")]).then(([application, rawPlatform]) => {
            const platform = rawPlatform;
            let store;
            if (application !== "edge" && application !== "opera") {
                store = platformToStore[platform] || "chrome";
            }
            else {
                store = application;
            }
            return {
                application,
                platform,
                store
            };
        });
    }),
    listen: (filter) => listen({ type: "app", filter }),
    open: (what) => send("app.open", { what })
};
const ctalinks = {
    get: (link, queryParams = {}) => send("app.get", { what: "ctalink", link, queryParams })
};
const doclinks = {
    get: (link) => send("app.get", { what: "doclink", link })
};
const filters = {
    get: () => send("filters.get"),
    listen: (filter) => listen({ type: "filters", filter })
};
const notifications = {
    get: (displayMethod) => send("notifications.get", { displayMethod }),
    seen: () => send("notifications.seen")
};
const prefs = {
    get: (key) => send("prefs.get", { key }),
    listen: (filter) => listen({ type: "prefs", filter })
};
const premium = {
    activate: (userId) => send("premium.activate", { userId }),
    get: () => send("premium.get"),
    listen: (filter) => listen({ type: "premium", filter })
};
const requests = {
    listen: (filter, tabId) => listen({ type: "requests", filter, tabId })
};
function send(sendType, rawArgs = {}) {
    const args = Object.assign(Object.assign({}, rawArgs), { type: sendType });
    return browser.runtime.sendMessage(args);
}
const stats = {
    getBlockedPerPage: (tab) => send("stats.getBlockedPerPage", { tab }),
    getBlockedTotal: () => send("stats.getBlockedTotal"),
    listen: (filter) => listen({ type: "stats", filter })
};
const subscriptions = {
    get: (options) => send("subscriptions.get", options),
    getInitIssues: () => send("subscriptions.getInitIssues"),
    listen: (filter) => listen({ type: "subscriptions", filter })
};
const api_api = {
    addDisconnectListener: addDisconnectListener,
    addListener: addMessageListener,
    app,
    ctalinks,
    doclinks,
    filters,
    notifications,
    prefs,
    premium,
    requests,
    removeDisconnectListener: removeDisconnectListener,
    subscriptions,
    stats
};
connect();
/* harmony default export */ const js_api_api = ((/* unused pure expression or super */ null && (api_api)));

;// CONCATENATED MODULE: ./vendor/adblockplusui/js/api/index.ts



/* harmony default export */ const js_api = ((/* unused pure expression or super */ null && (api)));

;// CONCATENATED MODULE: ./adblock-betafish/onpage-dialog/content/dialog.ts
var dialog_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
















const fontsToLoad = [{
        src: lato_namespaceObject,
        style: 'normal',
        weight: 'normal',
        unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
    {
        src: lato_ext_regular_namespaceObject,
        style: 'normal',
        weight: 'normal',
        unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    },
    {
        src: lato_ext_italic_namespaceObject,
        style: 'italic',
        weight: 'normal',
        unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    },
    {
        src: lato_italic_namespaceObject,
        style: 'italic',
        weight: 'normal',
        unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
    {
        src: lato_ext_bolditalic_namespaceObject,
        style: 'italic',
        weight: 'bold',
        unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    },
    {
        src: lato_bolditalic_namespaceObject,
        style: 'italic',
        weight: 'bold',
        unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
    {
        src: lato_ext_bold_namespaceObject,
        style: 'normal',
        weight: 'bold',
        unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    },
    {
        src: lato_bold_namespaceObject,
        style: 'normal',
        weight: 'bold',
        unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
];
const divID = '__ABoverlay';
const defaultTopPosition = 37;
let intervalId;
const removeDialog = function () {
    var _a;
    const el = document.getElementById(divID);
    if (el) {
        (_a = el.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(el);
    }
    if (intervalId) {
        clearInterval(intervalId);
    }
};
function loadCss(base) {
    const styleElement = document.createElement('style');
    styleElement.textContent = dialog_namespaceObject;
    base.appendChild(styleElement);
}
function loadLatoFont(src, style, weight, unicodeRange) {
    return new FontFace('Lato', `url("${src}")`, { style, weight, unicodeRange });
}
function loadResources(base) {
    loadCss(base);
    fontsToLoad.forEach((fontData) => {
        const { src, style, weight, unicodeRange, } = fontData;
        document.fonts.add(loadLatoFont(src, style, weight, unicodeRange));
    });
    document.fonts.add(new FontFace('Material Icons', `url("${MaterialIcons_Regular_woff2_namespaceObject}")`, { style: 'normal', weight: 'normal' }));
}
function sendMessage(message) {
    return browser_polyfill.runtime.sendMessage(message);
}
const showDialog = function (message) {
    return dialog_awaiter(this, void 0, void 0, function* () {
        const mainBody = document.body;
        if (!mainBody) {
            return;
        }
        if (document.getElementById(divID)) {
            return;
        }
        const { content } = message;
        const { title, body, button, } = content;
        const dialogParentElement = document.createElement('div');
        dialogParentElement.id = divID;
        const dialogElement = purify.sanitize(onpage_dialog_content_dialog_namespaceObject, { RETURN_DOM_FRAGMENT: true });
        if (purify.removed && purify.removed.length > 0) {
            return;
        }
        const closeIcon = dialogElement.querySelector('#closeIcon');
        if (closeIcon instanceof HTMLElement) {
            closeIcon.onclick = function closedClicked(event) {
                if (!event.isTrusted) {
                    return;
                }
                sendMessage({ type: 'onpage-dialog.close' });
            };
        }
        const adblockLogoElement = dialogElement.querySelector('#adblock-logo');
        if (adblockLogoElement instanceof HTMLImageElement) {
            adblockLogoElement.src = adblock_20_namespaceObject;
        }
        const titleTextElement = dialogElement.querySelector('#titleRow');
        titleTextElement.textContent = purify.sanitize(title);
        const bodyElement = dialogElement.querySelector('#bodySection');
        if (bodyElement instanceof HTMLElement) {
            for (const bodyText of body) {
                const paragraph = document.createElement('p');
                paragraph.classList.add('msgText');
                paragraph.textContent = purify.sanitize(bodyText);
                bodyElement.appendChild(paragraph);
            }
        }
        const btnContinue = dialogElement.querySelector('#continue');
        if (btnContinue instanceof HTMLElement) {
            if (button) {
                btnContinue.textContent = purify.sanitize(button);
                btnContinue.onclick = function learnMoreClicked(event) {
                    return dialog_awaiter(this, void 0, void 0, function* () {
                        if (!event.isTrusted) {
                            return;
                        }
                        sendMessage({ type: 'onpage-dialog.continue' });
                    });
                };
            }
            else {
                btnContinue.style.display = 'none';
            }
        }
        const baseShadow = dialogParentElement.attachShadow({ mode: 'closed' });
        loadResources(baseShadow);
        setLangAndDirAttributes(dialogElement);
        const hostElement = baseShadow.host;
        if (hostElement instanceof HTMLElement) {
            hostElement.style.setProperty('--dialog-top-position', `${defaultTopPosition}px`);
        }
        baseShadow.appendChild(dialogElement);
        (document.body || document.documentElement).appendChild(dialogParentElement);
        let displayDuration = 0;
        intervalId = window.setInterval(() => {
            displayDuration += 1;
            sendMessage({ type: 'onpage-dialog.ping', displayDuration });
        }, 60 * 1000);
    });
};
function handleMessage(message) {
    if (!isMessage(message)) {
        return;
    }
    switch (message.type) {
        case 'onpage-dialog.hide':
            removeDialog();
            break;
        default:
    }
}
function start() {
    return dialog_awaiter(this, void 0, void 0, function* () {
        browser_polyfill.runtime.onMessage.addListener(handleMessage);
        const startInfo = yield sendMessage({ type: 'onpage-dialog.get' });
        if (startInfo && startInfo.content) {
            showDialog(startInfo);
        }
        addDisconnectListener(() => {
            removeDialog();
            browser_polyfill.runtime.onMessage.removeListener(handleMessage);
        });
    });
}
start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdCQUFnQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxtQkFBbUI7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUE2QztBQUN2RSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxTQUFTLFNBQVM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQVM7QUFDcEIsUUFBUSw4Q0FBcUM7QUFDN0MsOENBQThDLDJCQUEyQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUF5QjtBQUNqQztBQUNBLFlBQVksaURBQXdDO0FBQ3BELFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0FkQmxvY2svLi9ub2RlX21vZHVsZXMvZG9tcHVyaWZ5L3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9BZEJsb2NrLy4vbm9kZV9tb2R1bGVzL2RvbXB1cmlmeS9zcmMvdGFncy5qcyIsIndlYnBhY2s6Ly9BZEJsb2NrLy4vbm9kZV9tb2R1bGVzL2RvbXB1cmlmeS9zcmMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vQWRCbG9jay8uL25vZGVfbW9kdWxlcy9kb21wdXJpZnkvc3JjL3JlZ2V4cC5qcyIsIndlYnBhY2s6Ly9BZEJsb2NrLy4vbm9kZV9tb2R1bGVzL2RvbXB1cmlmeS9zcmMvcHVyaWZ5LmpzIiwid2VicGFjazovL0FkQmxvY2svLi9ub2RlX21vZHVsZXMvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2Rpc3QvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9BZEJsb2NrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FkQmxvY2svLi9hZGJsb2NrLWJldGFmaXNoL3BvbHlmaWxscy9zaGFyZWQvcG9seWZpbGwudHMiLCJ3ZWJwYWNrOi8vQWRCbG9jay8uL3ZlbmRvci9hZGJsb2NrcGx1c3VpL2pzL2FwaS9hcGkucG9ydC50cyIsIndlYnBhY2s6Ly9BZEJsb2NrLy4vdmVuZG9yL2FkYmxvY2twbHVzdWkvanMvYXBpL2FwaS50cyIsIndlYnBhY2s6Ly9BZEJsb2NrLy4vdmVuZG9yL2FkYmxvY2twbHVzdWkvanMvYXBpL2luZGV4LnRzIiwid2VicGFjazovL0FkQmxvY2svLi9hZGJsb2NrLWJldGFmaXNoL29ucGFnZS1kaWFsb2cvY29udGVudC9kaWFsb2cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBoYXNPd25Qcm9wZXJ0eSwgc2V0UHJvdG90eXBlT2YsIGlzRnJvemVuIH0gPSBPYmplY3Q7XG5cbmxldCB7IGZyZWV6ZSwgc2VhbCwgY3JlYXRlIH0gPSBPYmplY3Q7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xubGV0IHsgYXBwbHksIGNvbnN0cnVjdCB9ID0gdHlwZW9mIFJlZmxlY3QgIT09ICd1bmRlZmluZWQnICYmIFJlZmxlY3Q7XG5cbmlmICghYXBwbHkpIHtcbiAgYXBwbHkgPSBmdW5jdGlvbiAoZnVuLCB0aGlzVmFsdWUsIGFyZ3MpIHtcbiAgICByZXR1cm4gZnVuLmFwcGx5KHRoaXNWYWx1ZSwgYXJncyk7XG4gIH07XG59XG5cbmlmICghZnJlZXplKSB7XG4gIGZyZWV6ZSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG5cbmlmICghc2VhbCkge1xuICBzZWFsID0gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cblxuaWYgKCFjb25zdHJ1Y3QpIHtcbiAgY29uc3RydWN0ID0gZnVuY3Rpb24gKEZ1bmMsIGFyZ3MpIHtcbiAgICByZXR1cm4gbmV3IEZ1bmMoLi4uYXJncyk7XG4gIH07XG59XG5cbmNvbnN0IGFycmF5Rm9yRWFjaCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLmZvckVhY2gpO1xuY29uc3QgYXJyYXlJbmRleE9mID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUuaW5kZXhPZik7XG5jb25zdCBhcnJheVBvcCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLnBvcCk7XG5jb25zdCBhcnJheVB1c2ggPSB1bmFwcGx5KEFycmF5LnByb3RvdHlwZS5wdXNoKTtcbmNvbnN0IGFycmF5U2xpY2UgPSB1bmFwcGx5KEFycmF5LnByb3RvdHlwZS5zbGljZSk7XG5cbmNvbnN0IHN0cmluZ1RvTG93ZXJDYXNlID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnRvTG93ZXJDYXNlKTtcbmNvbnN0IHN0cmluZ01hdGNoID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLm1hdGNoKTtcbmNvbnN0IHN0cmluZ1JlcGxhY2UgPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSk7XG5jb25zdCBzdHJpbmdJbmRleE9mID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLmluZGV4T2YpO1xuY29uc3Qgc3RyaW5nVHJpbSA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS50cmltKTtcblxuY29uc3QgcmVnRXhwVGVzdCA9IHVuYXBwbHkoUmVnRXhwLnByb3RvdHlwZS50ZXN0KTtcblxuY29uc3QgdHlwZUVycm9yQ3JlYXRlID0gdW5jb25zdHJ1Y3QoVHlwZUVycm9yKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVuYXBwbHkoZnVuYykge1xuICByZXR1cm4gKHRoaXNBcmcsIC4uLmFyZ3MpID0+IGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5jb25zdHJ1Y3QoZnVuYykge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IGNvbnN0cnVjdChmdW5jLCBhcmdzKTtcbn1cblxuLyogQWRkIHByb3BlcnRpZXMgdG8gYSBsb29rdXAgdGFibGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb1NldChzZXQsIGFycmF5KSB7XG4gIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgIC8vIE1ha2UgJ2luJyBhbmQgdHJ1dGh5IGNoZWNrcyBsaWtlIEJvb2xlYW4oc2V0LmNvbnN0cnVjdG9yKVxuICAgIC8vIGluZGVwZW5kZW50IG9mIGFueSBwcm9wZXJ0aWVzIGRlZmluZWQgb24gT2JqZWN0LnByb3RvdHlwZS5cbiAgICAvLyBQcmV2ZW50IHByb3RvdHlwZSBzZXR0ZXJzIGZyb20gaW50ZXJjZXB0aW5nIHNldCBhcyBhIHRoaXMgdmFsdWUuXG4gICAgc2V0UHJvdG90eXBlT2Yoc2V0LCBudWxsKTtcbiAgfVxuXG4gIGxldCBsID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobC0tKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBhcnJheVtsXTtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBsY0VsZW1lbnQgPSBzdHJpbmdUb0xvd2VyQ2FzZShlbGVtZW50KTtcbiAgICAgIGlmIChsY0VsZW1lbnQgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgLy8gQ29uZmlnIHByZXNldHMgKGUuZy4gdGFncy5qcywgYXR0cnMuanMpIGFyZSBpbW11dGFibGUuXG4gICAgICAgIGlmICghaXNGcm96ZW4oYXJyYXkpKSB7XG4gICAgICAgICAgYXJyYXlbbF0gPSBsY0VsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50ID0gbGNFbGVtZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIHNldFtlbGVtZW50XSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc2V0O1xufVxuXG4vKiBTaGFsbG93IGNsb25lIGFuIG9iamVjdCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKG9iamVjdCkge1xuICBjb25zdCBuZXdPYmplY3QgPSBjcmVhdGUobnVsbCk7XG5cbiAgbGV0IHByb3BlcnR5O1xuICBmb3IgKHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgIGlmIChhcHBseShoYXNPd25Qcm9wZXJ0eSwgb2JqZWN0LCBbcHJvcGVydHldKSkge1xuICAgICAgbmV3T2JqZWN0W3Byb3BlcnR5XSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld09iamVjdDtcbn1cblxuZXhwb3J0IHtcbiAgLy8gQXJyYXlcbiAgYXJyYXlGb3JFYWNoLFxuICBhcnJheUluZGV4T2YsXG4gIGFycmF5UG9wLFxuICBhcnJheVB1c2gsXG4gIGFycmF5U2xpY2UsXG4gIC8vIE9iamVjdFxuICBmcmVlemUsXG4gIGhhc093blByb3BlcnR5LFxuICBpc0Zyb3plbixcbiAgc2V0UHJvdG90eXBlT2YsXG4gIHNlYWwsXG4gIC8vIFJlZ0V4cFxuICByZWdFeHBUZXN0LFxuICAvLyBTdHJpbmdcbiAgc3RyaW5nSW5kZXhPZixcbiAgc3RyaW5nTWF0Y2gsXG4gIHN0cmluZ1JlcGxhY2UsXG4gIHN0cmluZ1RvTG93ZXJDYXNlLFxuICBzdHJpbmdUcmltLFxuICAvLyBFcnJvcnNcbiAgdHlwZUVycm9yQ3JlYXRlLFxufTtcbiIsImltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgaHRtbCA9IGZyZWV6ZShbXG4gICdhJyxcbiAgJ2FiYnInLFxuICAnYWNyb255bScsXG4gICdhZGRyZXNzJyxcbiAgJ2FyZWEnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdhdWRpbycsXG4gICdiJyxcbiAgJ2JkaScsXG4gICdiZG8nLFxuICAnYmlnJyxcbiAgJ2JsaW5rJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnYm9keScsXG4gICdicicsXG4gICdidXR0b24nLFxuICAnY2FudmFzJyxcbiAgJ2NhcHRpb24nLFxuICAnY2VudGVyJyxcbiAgJ2NpdGUnLFxuICAnY29kZScsXG4gICdjb2wnLFxuICAnY29sZ3JvdXAnLFxuICAnY29udGVudCcsXG4gICdkYXRhJyxcbiAgJ2RhdGFsaXN0JyxcbiAgJ2RkJyxcbiAgJ2RlY29yYXRvcicsXG4gICdkZWwnLFxuICAnZGV0YWlscycsXG4gICdkZm4nLFxuICAnZGlhbG9nJyxcbiAgJ2RpcicsXG4gICdkaXYnLFxuICAnZGwnLFxuICAnZHQnLFxuICAnZWxlbWVudCcsXG4gICdlbScsXG4gICdmaWVsZHNldCcsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2ZpZ3VyZScsXG4gICdmb250JyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ2g1JyxcbiAgJ2g2JyxcbiAgJ2hlYWQnLFxuICAnaGVhZGVyJyxcbiAgJ2hncm91cCcsXG4gICdocicsXG4gICdodG1sJyxcbiAgJ2knLFxuICAnaW1nJyxcbiAgJ2lucHV0JyxcbiAgJ2lucycsXG4gICdrYmQnLFxuICAnbGFiZWwnLFxuICAnbGVnZW5kJyxcbiAgJ2xpJyxcbiAgJ21haW4nLFxuICAnbWFwJyxcbiAgJ21hcmsnLFxuICAnbWFycXVlZScsXG4gICdtZW51JyxcbiAgJ21lbnVpdGVtJyxcbiAgJ21ldGVyJyxcbiAgJ25hdicsXG4gICdub2JyJyxcbiAgJ29sJyxcbiAgJ29wdGdyb3VwJyxcbiAgJ29wdGlvbicsXG4gICdvdXRwdXQnLFxuICAncCcsXG4gICdwaWN0dXJlJyxcbiAgJ3ByZScsXG4gICdwcm9ncmVzcycsXG4gICdxJyxcbiAgJ3JwJyxcbiAgJ3J0JyxcbiAgJ3J1YnknLFxuICAncycsXG4gICdzYW1wJyxcbiAgJ3NlY3Rpb24nLFxuICAnc2VsZWN0JyxcbiAgJ3NoYWRvdycsXG4gICdzbWFsbCcsXG4gICdzb3VyY2UnLFxuICAnc3BhY2VyJyxcbiAgJ3NwYW4nLFxuICAnc3RyaWtlJyxcbiAgJ3N0cm9uZycsXG4gICdzdHlsZScsXG4gICdzdWInLFxuICAnc3VtbWFyeScsXG4gICdzdXAnLFxuICAndGFibGUnLFxuICAndGJvZHknLFxuICAndGQnLFxuICAndGVtcGxhdGUnLFxuICAndGV4dGFyZWEnLFxuICAndGZvb3QnLFxuICAndGgnLFxuICAndGhlYWQnLFxuICAndGltZScsXG4gICd0cicsXG4gICd0cmFjaycsXG4gICd0dCcsXG4gICd1JyxcbiAgJ3VsJyxcbiAgJ3ZhcicsXG4gICd2aWRlbycsXG4gICd3YnInLFxuXSk7XG5cbi8vIFNWR1xuZXhwb3J0IGNvbnN0IHN2ZyA9IGZyZWV6ZShbXG4gICdzdmcnLFxuICAnYScsXG4gICdhbHRnbHlwaCcsXG4gICdhbHRnbHlwaGRlZicsXG4gICdhbHRnbHlwaGl0ZW0nLFxuICAnYW5pbWF0ZWNvbG9yJyxcbiAgJ2FuaW1hdGVtb3Rpb24nLFxuICAnYW5pbWF0ZXRyYW5zZm9ybScsXG4gICdhdWRpbycsXG4gICdjYW52YXMnLFxuICAnY2lyY2xlJyxcbiAgJ2NsaXBwYXRoJyxcbiAgJ2RlZnMnLFxuICAnZGVzYycsXG4gICdlbGxpcHNlJyxcbiAgJ2ZpbHRlcicsXG4gICdmb250JyxcbiAgJ2cnLFxuICAnZ2x5cGgnLFxuICAnZ2x5cGhyZWYnLFxuICAnaGtlcm4nLFxuICAnaW1hZ2UnLFxuICAnbGluZScsXG4gICdsaW5lYXJncmFkaWVudCcsXG4gICdtYXJrZXInLFxuICAnbWFzaycsXG4gICdtZXRhZGF0YScsXG4gICdtcGF0aCcsXG4gICdwYXRoJyxcbiAgJ3BhdHRlcm4nLFxuICAncG9seWdvbicsXG4gICdwb2x5bGluZScsXG4gICdyYWRpYWxncmFkaWVudCcsXG4gICdyZWN0JyxcbiAgJ3N0b3AnLFxuICAnc3R5bGUnLFxuICAnc3dpdGNoJyxcbiAgJ3N5bWJvbCcsXG4gICd0ZXh0JyxcbiAgJ3RleHRwYXRoJyxcbiAgJ3RpdGxlJyxcbiAgJ3RyZWYnLFxuICAndHNwYW4nLFxuICAndmlkZW8nLFxuICAndmlldycsXG4gICd2a2VybicsXG5dKTtcblxuZXhwb3J0IGNvbnN0IHN2Z0ZpbHRlcnMgPSBmcmVlemUoW1xuICAnZmVCbGVuZCcsXG4gICdmZUNvbG9yTWF0cml4JyxcbiAgJ2ZlQ29tcG9uZW50VHJhbnNmZXInLFxuICAnZmVDb21wb3NpdGUnLFxuICAnZmVDb252b2x2ZU1hdHJpeCcsXG4gICdmZURpZmZ1c2VMaWdodGluZycsXG4gICdmZURpc3BsYWNlbWVudE1hcCcsXG4gICdmZURpc3RhbnRMaWdodCcsXG4gICdmZUZsb29kJyxcbiAgJ2ZlRnVuY0EnLFxuICAnZmVGdW5jQicsXG4gICdmZUZ1bmNHJyxcbiAgJ2ZlRnVuY1InLFxuICAnZmVHYXVzc2lhbkJsdXInLFxuICAnZmVNZXJnZScsXG4gICdmZU1lcmdlTm9kZScsXG4gICdmZU1vcnBob2xvZ3knLFxuICAnZmVPZmZzZXQnLFxuICAnZmVQb2ludExpZ2h0JyxcbiAgJ2ZlU3BlY3VsYXJMaWdodGluZycsXG4gICdmZVNwb3RMaWdodCcsXG4gICdmZVRpbGUnLFxuICAnZmVUdXJidWxlbmNlJyxcbl0pO1xuXG5leHBvcnQgY29uc3QgbWF0aE1sID0gZnJlZXplKFtcbiAgJ21hdGgnLFxuICAnbWVuY2xvc2UnLFxuICAnbWVycm9yJyxcbiAgJ21mZW5jZWQnLFxuICAnbWZyYWMnLFxuICAnbWdseXBoJyxcbiAgJ21pJyxcbiAgJ21sYWJlbGVkdHInLFxuICAnbW11bHRpc2NyaXB0cycsXG4gICdtbicsXG4gICdtbycsXG4gICdtb3ZlcicsXG4gICdtcGFkZGVkJyxcbiAgJ21waGFudG9tJyxcbiAgJ21yb290JyxcbiAgJ21yb3cnLFxuICAnbXMnLFxuICAnbXNwYWNlJyxcbiAgJ21zcXJ0JyxcbiAgJ21zdHlsZScsXG4gICdtc3ViJyxcbiAgJ21zdXAnLFxuICAnbXN1YnN1cCcsXG4gICdtdGFibGUnLFxuICAnbXRkJyxcbiAgJ210ZXh0JyxcbiAgJ210cicsXG4gICdtdW5kZXInLFxuICAnbXVuZGVyb3ZlcicsXG5dKTtcblxuZXhwb3J0IGNvbnN0IHRleHQgPSBmcmVlemUoWycjdGV4dCddKTtcbiIsImltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgaHRtbCA9IGZyZWV6ZShbXG4gICdhY2NlcHQnLFxuICAnYWN0aW9uJyxcbiAgJ2FsaWduJyxcbiAgJ2FsdCcsXG4gICdhdXRvY2FwaXRhbGl6ZScsXG4gICdhdXRvY29tcGxldGUnLFxuICAnYXV0b3BpY3R1cmVpbnBpY3R1cmUnLFxuICAnYXV0b3BsYXknLFxuICAnYmFja2dyb3VuZCcsXG4gICdiZ2NvbG9yJyxcbiAgJ2JvcmRlcicsXG4gICdjYXB0dXJlJyxcbiAgJ2NlbGxwYWRkaW5nJyxcbiAgJ2NlbGxzcGFjaW5nJyxcbiAgJ2NoZWNrZWQnLFxuICAnY2l0ZScsXG4gICdjbGFzcycsXG4gICdjbGVhcicsXG4gICdjb2xvcicsXG4gICdjb2xzJyxcbiAgJ2NvbHNwYW4nLFxuICAnY29udHJvbHMnLFxuICAnY29udHJvbHNsaXN0JyxcbiAgJ2Nvb3JkcycsXG4gICdjcm9zc29yaWdpbicsXG4gICdkYXRldGltZScsXG4gICdkZWNvZGluZycsXG4gICdkZWZhdWx0JyxcbiAgJ2RpcicsXG4gICdkaXNhYmxlZCcsXG4gICdkaXNhYmxlcGljdHVyZWlucGljdHVyZScsXG4gICdkaXNhYmxlcmVtb3RlcGxheWJhY2snLFxuICAnZG93bmxvYWQnLFxuICAnZHJhZ2dhYmxlJyxcbiAgJ2VuY3R5cGUnLFxuICAnZW50ZXJrZXloaW50JyxcbiAgJ2ZhY2UnLFxuICAnZm9yJyxcbiAgJ2hlYWRlcnMnLFxuICAnaGVpZ2h0JyxcbiAgJ2hpZGRlbicsXG4gICdoaWdoJyxcbiAgJ2hyZWYnLFxuICAnaHJlZmxhbmcnLFxuICAnaWQnLFxuICAnaW5wdXRtb2RlJyxcbiAgJ2ludGVncml0eScsXG4gICdpc21hcCcsXG4gICdraW5kJyxcbiAgJ2xhYmVsJyxcbiAgJ2xhbmcnLFxuICAnbGlzdCcsXG4gICdsb2FkaW5nJyxcbiAgJ2xvb3AnLFxuICAnbG93JyxcbiAgJ21heCcsXG4gICdtYXhsZW5ndGgnLFxuICAnbWVkaWEnLFxuICAnbWV0aG9kJyxcbiAgJ21pbicsXG4gICdtaW5sZW5ndGgnLFxuICAnbXVsdGlwbGUnLFxuICAnbXV0ZWQnLFxuICAnbmFtZScsXG4gICdub3NoYWRlJyxcbiAgJ25vdmFsaWRhdGUnLFxuICAnbm93cmFwJyxcbiAgJ29wZW4nLFxuICAnb3B0aW11bScsXG4gICdwYXR0ZXJuJyxcbiAgJ3BsYWNlaG9sZGVyJyxcbiAgJ3BsYXlzaW5saW5lJyxcbiAgJ3Bvc3RlcicsXG4gICdwcmVsb2FkJyxcbiAgJ3B1YmRhdGUnLFxuICAncmFkaW9ncm91cCcsXG4gICdyZWFkb25seScsXG4gICdyZWwnLFxuICAncmVxdWlyZWQnLFxuICAncmV2JyxcbiAgJ3JldmVyc2VkJyxcbiAgJ3JvbGUnLFxuICAncm93cycsXG4gICdyb3dzcGFuJyxcbiAgJ3NwZWxsY2hlY2snLFxuICAnc2NvcGUnLFxuICAnc2VsZWN0ZWQnLFxuICAnc2hhcGUnLFxuICAnc2l6ZScsXG4gICdzaXplcycsXG4gICdzcGFuJyxcbiAgJ3NyY2xhbmcnLFxuICAnc3RhcnQnLFxuICAnc3JjJyxcbiAgJ3NyY3NldCcsXG4gICdzdGVwJyxcbiAgJ3N0eWxlJyxcbiAgJ3N1bW1hcnknLFxuICAndGFiaW5kZXgnLFxuICAndGl0bGUnLFxuICAndHJhbnNsYXRlJyxcbiAgJ3R5cGUnLFxuICAndXNlbWFwJyxcbiAgJ3ZhbGlnbicsXG4gICd2YWx1ZScsXG4gICd3aWR0aCcsXG4gICd4bWxucycsXG5dKTtcblxuZXhwb3J0IGNvbnN0IHN2ZyA9IGZyZWV6ZShbXG4gICdhY2NlbnQtaGVpZ2h0JyxcbiAgJ2FjY3VtdWxhdGUnLFxuICAnYWRkaXRpdmUnLFxuICAnYWxpZ25tZW50LWJhc2VsaW5lJyxcbiAgJ2FzY2VudCcsXG4gICdhdHRyaWJ1dGVuYW1lJyxcbiAgJ2F0dHJpYnV0ZXR5cGUnLFxuICAnYXppbXV0aCcsXG4gICdiYXNlZnJlcXVlbmN5JyxcbiAgJ2Jhc2VsaW5lLXNoaWZ0JyxcbiAgJ2JlZ2luJyxcbiAgJ2JpYXMnLFxuICAnYnknLFxuICAnY2xhc3MnLFxuICAnY2xpcCcsXG4gICdjbGlwcGF0aHVuaXRzJyxcbiAgJ2NsaXAtcGF0aCcsXG4gICdjbGlwLXJ1bGUnLFxuICAnY29sb3InLFxuICAnY29sb3ItaW50ZXJwb2xhdGlvbicsXG4gICdjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMnLFxuICAnY29sb3ItcHJvZmlsZScsXG4gICdjb2xvci1yZW5kZXJpbmcnLFxuICAnY3gnLFxuICAnY3knLFxuICAnZCcsXG4gICdkeCcsXG4gICdkeScsXG4gICdkaWZmdXNlY29uc3RhbnQnLFxuICAnZGlyZWN0aW9uJyxcbiAgJ2Rpc3BsYXknLFxuICAnZGl2aXNvcicsXG4gICdkdXInLFxuICAnZWRnZW1vZGUnLFxuICAnZWxldmF0aW9uJyxcbiAgJ2VuZCcsXG4gICdmaWxsJyxcbiAgJ2ZpbGwtb3BhY2l0eScsXG4gICdmaWxsLXJ1bGUnLFxuICAnZmlsdGVyJyxcbiAgJ2ZpbHRlcnVuaXRzJyxcbiAgJ2Zsb29kLWNvbG9yJyxcbiAgJ2Zsb29kLW9wYWNpdHknLFxuICAnZm9udC1mYW1pbHknLFxuICAnZm9udC1zaXplJyxcbiAgJ2ZvbnQtc2l6ZS1hZGp1c3QnLFxuICAnZm9udC1zdHJldGNoJyxcbiAgJ2ZvbnQtc3R5bGUnLFxuICAnZm9udC12YXJpYW50JyxcbiAgJ2ZvbnQtd2VpZ2h0JyxcbiAgJ2Z4JyxcbiAgJ2Z5JyxcbiAgJ2cxJyxcbiAgJ2cyJyxcbiAgJ2dseXBoLW5hbWUnLFxuICAnZ2x5cGhyZWYnLFxuICAnZ3JhZGllbnR1bml0cycsXG4gICdncmFkaWVudHRyYW5zZm9ybScsXG4gICdoZWlnaHQnLFxuICAnaHJlZicsXG4gICdpZCcsXG4gICdpbWFnZS1yZW5kZXJpbmcnLFxuICAnaW4nLFxuICAnaW4yJyxcbiAgJ2snLFxuICAnazEnLFxuICAnazInLFxuICAnazMnLFxuICAnazQnLFxuICAna2VybmluZycsXG4gICdrZXlwb2ludHMnLFxuICAna2V5c3BsaW5lcycsXG4gICdrZXl0aW1lcycsXG4gICdsYW5nJyxcbiAgJ2xlbmd0aGFkanVzdCcsXG4gICdsZXR0ZXItc3BhY2luZycsXG4gICdrZXJuZWxtYXRyaXgnLFxuICAna2VybmVsdW5pdGxlbmd0aCcsXG4gICdsaWdodGluZy1jb2xvcicsXG4gICdsb2NhbCcsXG4gICdtYXJrZXItZW5kJyxcbiAgJ21hcmtlci1taWQnLFxuICAnbWFya2VyLXN0YXJ0JyxcbiAgJ21hcmtlcmhlaWdodCcsXG4gICdtYXJrZXJ1bml0cycsXG4gICdtYXJrZXJ3aWR0aCcsXG4gICdtYXNrY29udGVudHVuaXRzJyxcbiAgJ21hc2t1bml0cycsXG4gICdtYXgnLFxuICAnbWFzaycsXG4gICdtZWRpYScsXG4gICdtZXRob2QnLFxuICAnbW9kZScsXG4gICdtaW4nLFxuICAnbmFtZScsXG4gICdudW1vY3RhdmVzJyxcbiAgJ29mZnNldCcsXG4gICdvcGVyYXRvcicsXG4gICdvcGFjaXR5JyxcbiAgJ29yZGVyJyxcbiAgJ29yaWVudCcsXG4gICdvcmllbnRhdGlvbicsXG4gICdvcmlnaW4nLFxuICAnb3ZlcmZsb3cnLFxuICAncGFpbnQtb3JkZXInLFxuICAncGF0aCcsXG4gICdwYXRobGVuZ3RoJyxcbiAgJ3BhdHRlcm5jb250ZW50dW5pdHMnLFxuICAncGF0dGVybnRyYW5zZm9ybScsXG4gICdwYXR0ZXJudW5pdHMnLFxuICAncG9pbnRzJyxcbiAgJ3ByZXNlcnZlYWxwaGEnLFxuICAncHJlc2VydmVhc3BlY3RyYXRpbycsXG4gICdwcmltaXRpdmV1bml0cycsXG4gICdyJyxcbiAgJ3J4JyxcbiAgJ3J5JyxcbiAgJ3JhZGl1cycsXG4gICdyZWZ4JyxcbiAgJ3JlZnknLFxuICAncmVwZWF0Y291bnQnLFxuICAncmVwZWF0ZHVyJyxcbiAgJ3Jlc3RhcnQnLFxuICAncmVzdWx0JyxcbiAgJ3JvdGF0ZScsXG4gICdzY2FsZScsXG4gICdzZWVkJyxcbiAgJ3NoYXBlLXJlbmRlcmluZycsXG4gICdzcGVjdWxhcmNvbnN0YW50JyxcbiAgJ3NwZWN1bGFyZXhwb25lbnQnLFxuICAnc3ByZWFkbWV0aG9kJyxcbiAgJ3N0YXJ0b2Zmc2V0JyxcbiAgJ3N0ZGRldmlhdGlvbicsXG4gICdzdGl0Y2h0aWxlcycsXG4gICdzdG9wLWNvbG9yJyxcbiAgJ3N0b3Atb3BhY2l0eScsXG4gICdzdHJva2UtZGFzaGFycmF5JyxcbiAgJ3N0cm9rZS1kYXNob2Zmc2V0JyxcbiAgJ3N0cm9rZS1saW5lY2FwJyxcbiAgJ3N0cm9rZS1saW5lam9pbicsXG4gICdzdHJva2UtbWl0ZXJsaW1pdCcsXG4gICdzdHJva2Utb3BhY2l0eScsXG4gICdzdHJva2UnLFxuICAnc3Ryb2tlLXdpZHRoJyxcbiAgJ3N0eWxlJyxcbiAgJ3N1cmZhY2VzY2FsZScsXG4gICdzeXN0ZW1sYW5ndWFnZScsXG4gICd0YWJpbmRleCcsXG4gICd0YXJnZXR4JyxcbiAgJ3RhcmdldHknLFxuICAndHJhbnNmb3JtJyxcbiAgJ3RleHQtYW5jaG9yJyxcbiAgJ3RleHQtZGVjb3JhdGlvbicsXG4gICd0ZXh0LXJlbmRlcmluZycsXG4gICd0ZXh0bGVuZ3RoJyxcbiAgJ3R5cGUnLFxuICAndTEnLFxuICAndTInLFxuICAndW5pY29kZScsXG4gICd2YWx1ZXMnLFxuICAndmlld2JveCcsXG4gICd2aXNpYmlsaXR5JyxcbiAgJ3ZlcnNpb24nLFxuICAndmVydC1hZHYteScsXG4gICd2ZXJ0LW9yaWdpbi14JyxcbiAgJ3ZlcnQtb3JpZ2luLXknLFxuICAnd2lkdGgnLFxuICAnd29yZC1zcGFjaW5nJyxcbiAgJ3dyYXAnLFxuICAnd3JpdGluZy1tb2RlJyxcbiAgJ3hjaGFubmVsc2VsZWN0b3InLFxuICAneWNoYW5uZWxzZWxlY3RvcicsXG4gICd4JyxcbiAgJ3gxJyxcbiAgJ3gyJyxcbiAgJ3htbG5zJyxcbiAgJ3knLFxuICAneTEnLFxuICAneTInLFxuICAneicsXG4gICd6b29tYW5kcGFuJyxcbl0pO1xuXG5leHBvcnQgY29uc3QgbWF0aE1sID0gZnJlZXplKFtcbiAgJ2FjY2VudCcsXG4gICdhY2NlbnR1bmRlcicsXG4gICdhbGlnbicsXG4gICdiZXZlbGxlZCcsXG4gICdjbG9zZScsXG4gICdjb2x1bW5zYWxpZ24nLFxuICAnY29sdW1ubGluZXMnLFxuICAnY29sdW1uc3BhbicsXG4gICdkZW5vbWFsaWduJyxcbiAgJ2RlcHRoJyxcbiAgJ2RpcicsXG4gICdkaXNwbGF5JyxcbiAgJ2Rpc3BsYXlzdHlsZScsXG4gICdlbmNvZGluZycsXG4gICdmZW5jZScsXG4gICdmcmFtZScsXG4gICdoZWlnaHQnLFxuICAnaHJlZicsXG4gICdpZCcsXG4gICdsYXJnZW9wJyxcbiAgJ2xlbmd0aCcsXG4gICdsaW5ldGhpY2tuZXNzJyxcbiAgJ2xzcGFjZScsXG4gICdscXVvdGUnLFxuICAnbWF0aGJhY2tncm91bmQnLFxuICAnbWF0aGNvbG9yJyxcbiAgJ21hdGhzaXplJyxcbiAgJ21hdGh2YXJpYW50JyxcbiAgJ21heHNpemUnLFxuICAnbWluc2l6ZScsXG4gICdtb3ZhYmxlbGltaXRzJyxcbiAgJ25vdGF0aW9uJyxcbiAgJ251bWFsaWduJyxcbiAgJ29wZW4nLFxuICAncm93YWxpZ24nLFxuICAncm93bGluZXMnLFxuICAncm93c3BhY2luZycsXG4gICdyb3dzcGFuJyxcbiAgJ3JzcGFjZScsXG4gICdycXVvdGUnLFxuICAnc2NyaXB0bGV2ZWwnLFxuICAnc2NyaXB0bWluc2l6ZScsXG4gICdzY3JpcHRzaXplbXVsdGlwbGllcicsXG4gICdzZWxlY3Rpb24nLFxuICAnc2VwYXJhdG9yJyxcbiAgJ3NlcGFyYXRvcnMnLFxuICAnc3RyZXRjaHknLFxuICAnc3Vic2NyaXB0c2hpZnQnLFxuICAnc3Vwc2NyaXB0c2hpZnQnLFxuICAnc3ltbWV0cmljJyxcbiAgJ3ZvZmZzZXQnLFxuICAnd2lkdGgnLFxuICAneG1sbnMnLFxuXSk7XG5cbmV4cG9ydCBjb25zdCB4bWwgPSBmcmVlemUoW1xuICAneGxpbms6aHJlZicsXG4gICd4bWw6aWQnLFxuICAneGxpbms6dGl0bGUnLFxuICAneG1sOnNwYWNlJyxcbiAgJ3htbG5zOnhsaW5rJyxcbl0pO1xuIiwiaW1wb3J0IHsgc2VhbCB9IGZyb20gJy4vdXRpbHMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9iZXR0ZXItcmVnZXhcbmV4cG9ydCBjb25zdCBNVVNUQUNIRV9FWFBSID0gc2VhbCgvXFx7XFx7W1xcc1xcU10qfFtcXHNcXFNdKlxcfVxcfS9nbSk7IC8vIFNwZWNpZnkgdGVtcGxhdGUgZGV0ZWN0aW9uIHJlZ2V4IGZvciBTQUZFX0ZPUl9URU1QTEFURVMgbW9kZVxuZXhwb3J0IGNvbnN0IEVSQl9FWFBSID0gc2VhbCgvPCVbXFxzXFxTXSp8W1xcc1xcU10qJT4vZ20pO1xuZXhwb3J0IGNvbnN0IERBVEFfQVRUUiA9IHNlYWwoL15kYXRhLVtcXC1cXHcuXFx1MDBCNy1cXHVGRkZGXS8pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG5leHBvcnQgY29uc3QgQVJJQV9BVFRSID0gc2VhbCgvXmFyaWEtW1xcLVxcd10rJC8pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG5leHBvcnQgY29uc3QgSVNfQUxMT1dFRF9VUkkgPSBzZWFsKFxuICAvXig/Oig/Oig/OmZ8aHQpdHBzP3xtYWlsdG98dGVsfGNhbGx0b3xjaWR8eG1wcCk6fFteYS16XXxbYS16Ky5cXC1dKyg/OlteYS16Ky5cXC06XXwkKSkvaSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4pO1xuZXhwb3J0IGNvbnN0IElTX1NDUklQVF9PUl9EQVRBID0gc2VhbCgvXig/OlxcdytzY3JpcHR8ZGF0YSk6L2kpO1xuZXhwb3J0IGNvbnN0IEFUVFJfV0hJVEVTUEFDRSA9IHNlYWwoXG4gIC9bXFx1MDAwMC1cXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDI5XFx1MjA1RlxcdTMwMDBdL2cgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb250cm9sLXJlZ2V4XG4pO1xuIiwiaW1wb3J0ICogYXMgVEFHUyBmcm9tICcuL3RhZ3MnO1xuaW1wb3J0ICogYXMgQVRUUlMgZnJvbSAnLi9hdHRycyc7XG5pbXBvcnQgKiBhcyBFWFBSRVNTSU9OUyBmcm9tICcuL3JlZ2V4cCc7XG5pbXBvcnQge1xuICBhZGRUb1NldCxcbiAgY2xvbmUsXG4gIGZyZWV6ZSxcbiAgYXJyYXlGb3JFYWNoLFxuICBhcnJheVBvcCxcbiAgYXJyYXlQdXNoLFxuICBzdHJpbmdNYXRjaCxcbiAgc3RyaW5nUmVwbGFjZSxcbiAgc3RyaW5nVG9Mb3dlckNhc2UsXG4gIHN0cmluZ0luZGV4T2YsXG4gIHN0cmluZ1RyaW0sXG4gIHJlZ0V4cFRlc3QsXG4gIHR5cGVFcnJvckNyZWF0ZSxcbn0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGdldEdsb2JhbCA9ICgpID0+ICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB3aW5kb3cpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuby1vcCBwb2xpY3kgZm9yIGludGVybmFsIHVzZSBvbmx5LlxuICogRG9uJ3QgZXhwb3J0IHRoaXMgZnVuY3Rpb24gb3V0c2lkZSB0aGlzIG1vZHVsZSFcbiAqIEBwYXJhbSB7P1RydXN0ZWRUeXBlUG9saWN5RmFjdG9yeX0gdHJ1c3RlZFR5cGVzIFRoZSBwb2xpY3kgZmFjdG9yeS5cbiAqIEBwYXJhbSB7RG9jdW1lbnR9IGRvY3VtZW50IFRoZSBkb2N1bWVudCBvYmplY3QgKHRvIGRldGVybWluZSBwb2xpY3kgbmFtZSBzdWZmaXgpXG4gKiBAcmV0dXJuIHs/VHJ1c3RlZFR5cGVQb2xpY3l9IFRoZSBwb2xpY3kgY3JlYXRlZCAob3IgbnVsbCwgaWYgVHJ1c3RlZCBUeXBlc1xuICogYXJlIG5vdCBzdXBwb3J0ZWQpLlxuICovXG5jb25zdCBfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5ID0gZnVuY3Rpb24gKHRydXN0ZWRUeXBlcywgZG9jdW1lbnQpIHtcbiAgaWYgKFxuICAgIHR5cGVvZiB0cnVzdGVkVHlwZXMgIT09ICdvYmplY3QnIHx8XG4gICAgdHlwZW9mIHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3kgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBBbGxvdyB0aGUgY2FsbGVycyB0byBjb250cm9sIHRoZSB1bmlxdWUgcG9saWN5IG5hbWVcbiAgLy8gYnkgYWRkaW5nIGEgZGF0YS10dC1wb2xpY3ktc3VmZml4IHRvIHRoZSBzY3JpcHQgZWxlbWVudCB3aXRoIHRoZSBET01QdXJpZnkuXG4gIC8vIFBvbGljeSBjcmVhdGlvbiB3aXRoIGR1cGxpY2F0ZSBuYW1lcyB0aHJvd3MgaW4gVHJ1c3RlZCBUeXBlcy5cbiAgbGV0IHN1ZmZpeCA9IG51bGw7XG4gIGNvbnN0IEFUVFJfTkFNRSA9ICdkYXRhLXR0LXBvbGljeS1zdWZmaXgnO1xuICBpZiAoXG4gICAgZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJlxuICAgIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuaGFzQXR0cmlidXRlKEFUVFJfTkFNRSlcbiAgKSB7XG4gICAgc3VmZml4ID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5nZXRBdHRyaWJ1dGUoQVRUUl9OQU1FKTtcbiAgfVxuXG4gIGNvbnN0IHBvbGljeU5hbWUgPSAnZG9tcHVyaWZ5JyArIChzdWZmaXggPyAnIycgKyBzdWZmaXggOiAnJyk7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeShwb2xpY3lOYW1lLCB7XG4gICAgICBjcmVhdGVIVE1MKGh0bWwpIHtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICB9LFxuICAgIH0pO1xuICB9IGNhdGNoIChfKSB7XG4gICAgLy8gUG9saWN5IGNyZWF0aW9uIGZhaWxlZCAobW9zdCBsaWtlbHkgYW5vdGhlciBET01QdXJpZnkgc2NyaXB0IGhhc1xuICAgIC8vIGFscmVhZHkgcnVuKS4gU2tpcCBjcmVhdGluZyB0aGUgcG9saWN5LCBhcyB0aGlzIHdpbGwgb25seSBjYXVzZSBlcnJvcnNcbiAgICAvLyBpZiBUVCBhcmUgZW5mb3JjZWQuXG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1RydXN0ZWRUeXBlcyBwb2xpY3kgJyArIHBvbGljeU5hbWUgKyAnIGNvdWxkIG5vdCBiZSBjcmVhdGVkLidcbiAgICApO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVET01QdXJpZnkod2luZG93ID0gZ2V0R2xvYmFsKCkpIHtcbiAgY29uc3QgRE9NUHVyaWZ5ID0gKHJvb3QpID0+IGNyZWF0ZURPTVB1cmlmeShyb290KTtcblxuICAvKipcbiAgICogVmVyc2lvbiBsYWJlbCwgZXhwb3NlZCBmb3IgZWFzaWVyIGNoZWNrc1xuICAgKiBpZiBET01QdXJpZnkgaXMgdXAgdG8gZGF0ZSBvciBub3RcbiAgICovXG4gIERPTVB1cmlmeS52ZXJzaW9uID0gVkVSU0lPTjtcblxuICAvKipcbiAgICogQXJyYXkgb2YgZWxlbWVudHMgdGhhdCBET01QdXJpZnkgcmVtb3ZlZCBkdXJpbmcgc2FuaXRhdGlvbi5cbiAgICogRW1wdHkgaWYgbm90aGluZyB3YXMgcmVtb3ZlZC5cbiAgICovXG4gIERPTVB1cmlmeS5yZW1vdmVkID0gW107XG5cbiAgaWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5kb2N1bWVudCB8fCB3aW5kb3cuZG9jdW1lbnQubm9kZVR5cGUgIT09IDkpIHtcbiAgICAvLyBOb3QgcnVubmluZyBpbiBhIGJyb3dzZXIsIHByb3ZpZGUgYSBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgLy8gc28gdGhhdCB5b3UgY2FuIHBhc3MgeW91ciBvd24gV2luZG93XG4gICAgRE9NUHVyaWZ5LmlzU3VwcG9ydGVkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gRE9NUHVyaWZ5O1xuICB9XG5cbiAgY29uc3Qgb3JpZ2luYWxEb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcblxuICBsZXQgeyBkb2N1bWVudCB9ID0gd2luZG93O1xuICBjb25zdCB7XG4gICAgRG9jdW1lbnRGcmFnbWVudCxcbiAgICBIVE1MVGVtcGxhdGVFbGVtZW50LFxuICAgIE5vZGUsXG4gICAgTm9kZUZpbHRlcixcbiAgICBOYW1lZE5vZGVNYXAgPSB3aW5kb3cuTmFtZWROb2RlTWFwIHx8IHdpbmRvdy5Nb3pOYW1lZEF0dHJNYXAsXG4gICAgVGV4dCxcbiAgICBDb21tZW50LFxuICAgIERPTVBhcnNlcixcbiAgICB0cnVzdGVkVHlwZXMsXG4gIH0gPSB3aW5kb3c7XG5cbiAgLy8gQXMgcGVyIGlzc3VlICM0NywgdGhlIHdlYi1jb21wb25lbnRzIHJlZ2lzdHJ5IGlzIGluaGVyaXRlZCBieSBhXG4gIC8vIG5ldyBkb2N1bWVudCBjcmVhdGVkIHZpYSBjcmVhdGVIVE1MRG9jdW1lbnQuIEFzIHBlciB0aGUgc3BlY1xuICAvLyAoaHR0cDovL3czYy5naXRodWIuaW8vd2ViY29tcG9uZW50cy9zcGVjL2N1c3RvbS8jY3JlYXRpbmctYW5kLXBhc3NpbmctcmVnaXN0cmllcylcbiAgLy8gYSBuZXcgZW1wdHkgcmVnaXN0cnkgaXMgdXNlZCB3aGVuIGNyZWF0aW5nIGEgdGVtcGxhdGUgY29udGVudHMgb3duZXJcbiAgLy8gZG9jdW1lbnQsIHNvIHdlIHVzZSB0aGF0IGFzIG91ciBwYXJlbnQgZG9jdW1lbnQgdG8gZW5zdXJlIG5vdGhpbmdcbiAgLy8gaXMgaW5oZXJpdGVkLlxuICBpZiAodHlwZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgaWYgKHRlbXBsYXRlLmNvbnRlbnQgJiYgdGVtcGxhdGUuY29udGVudC5vd25lckRvY3VtZW50KSB7XG4gICAgICBkb2N1bWVudCA9IHRlbXBsYXRlLmNvbnRlbnQub3duZXJEb2N1bWVudDtcbiAgICB9XG4gIH1cblxuICBjb25zdCB0cnVzdGVkVHlwZXNQb2xpY3kgPSBfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5KFxuICAgIHRydXN0ZWRUeXBlcyxcbiAgICBvcmlnaW5hbERvY3VtZW50XG4gICk7XG4gIGNvbnN0IGVtcHR5SFRNTCA9XG4gICAgdHJ1c3RlZFR5cGVzUG9saWN5ICYmIFJFVFVSTl9UUlVTVEVEX1RZUEVcbiAgICAgID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoJycpXG4gICAgICA6ICcnO1xuXG4gIGNvbnN0IHtcbiAgICBpbXBsZW1lbnRhdGlvbixcbiAgICBjcmVhdGVOb2RlSXRlcmF0b3IsXG4gICAgZ2V0RWxlbWVudHNCeVRhZ05hbWUsXG4gICAgY3JlYXRlRG9jdW1lbnRGcmFnbWVudCxcbiAgfSA9IGRvY3VtZW50O1xuICBjb25zdCB7IGltcG9ydE5vZGUgfSA9IG9yaWdpbmFsRG9jdW1lbnQ7XG5cbiAgbGV0IGRvY3VtZW50TW9kZSA9IHt9O1xuICB0cnkge1xuICAgIGRvY3VtZW50TW9kZSA9IGNsb25lKGRvY3VtZW50KS5kb2N1bWVudE1vZGUgPyBkb2N1bWVudC5kb2N1bWVudE1vZGUgOiB7fTtcbiAgfSBjYXRjaCAoXykge31cblxuICBsZXQgaG9va3MgPSB7fTtcblxuICAvKipcbiAgICogRXhwb3NlIHdoZXRoZXIgdGhpcyBicm93c2VyIHN1cHBvcnRzIHJ1bm5pbmcgdGhlIGZ1bGwgRE9NUHVyaWZ5LlxuICAgKi9cbiAgRE9NUHVyaWZ5LmlzU3VwcG9ydGVkID1cbiAgICBpbXBsZW1lbnRhdGlvbiAmJlxuICAgIHR5cGVvZiBpbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgZG9jdW1lbnRNb2RlICE9PSA5O1xuXG4gIGNvbnN0IHtcbiAgICBNVVNUQUNIRV9FWFBSLFxuICAgIEVSQl9FWFBSLFxuICAgIERBVEFfQVRUUixcbiAgICBBUklBX0FUVFIsXG4gICAgSVNfU0NSSVBUX09SX0RBVEEsXG4gICAgQVRUUl9XSElURVNQQUNFLFxuICB9ID0gRVhQUkVTU0lPTlM7XG5cbiAgbGV0IHsgSVNfQUxMT1dFRF9VUkkgfSA9IEVYUFJFU1NJT05TO1xuXG4gIC8qKlxuICAgKiBXZSBjb25zaWRlciB0aGUgZWxlbWVudHMgYW5kIGF0dHJpYnV0ZXMgYmVsb3cgdG8gYmUgc2FmZS4gSWRlYWxseVxuICAgKiBkb24ndCBhZGQgYW55IG5ldyBvbmVzIGJ1dCBmZWVsIGZyZWUgdG8gcmVtb3ZlIHVud2FudGVkIG9uZXMuXG4gICAqL1xuXG4gIC8qIGFsbG93ZWQgZWxlbWVudCBuYW1lcyAqL1xuICBsZXQgQUxMT1dFRF9UQUdTID0gbnVsbDtcbiAgY29uc3QgREVGQVVMVF9BTExPV0VEX1RBR1MgPSBhZGRUb1NldCh7fSwgW1xuICAgIC4uLlRBR1MuaHRtbCxcbiAgICAuLi5UQUdTLnN2ZyxcbiAgICAuLi5UQUdTLnN2Z0ZpbHRlcnMsXG4gICAgLi4uVEFHUy5tYXRoTWwsXG4gICAgLi4uVEFHUy50ZXh0LFxuICBdKTtcblxuICAvKiBBbGxvd2VkIGF0dHJpYnV0ZSBuYW1lcyAqL1xuICBsZXQgQUxMT1dFRF9BVFRSID0gbnVsbDtcbiAgY29uc3QgREVGQVVMVF9BTExPV0VEX0FUVFIgPSBhZGRUb1NldCh7fSwgW1xuICAgIC4uLkFUVFJTLmh0bWwsXG4gICAgLi4uQVRUUlMuc3ZnLFxuICAgIC4uLkFUVFJTLm1hdGhNbCxcbiAgICAuLi5BVFRSUy54bWwsXG4gIF0pO1xuXG4gIC8qIEV4cGxpY2l0bHkgZm9yYmlkZGVuIHRhZ3MgKG92ZXJyaWRlcyBBTExPV0VEX1RBR1MvQUREX1RBR1MpICovXG4gIGxldCBGT1JCSURfVEFHUyA9IG51bGw7XG5cbiAgLyogRXhwbGljaXRseSBmb3JiaWRkZW4gYXR0cmlidXRlcyAob3ZlcnJpZGVzIEFMTE9XRURfQVRUUi9BRERfQVRUUikgKi9cbiAgbGV0IEZPUkJJRF9BVFRSID0gbnVsbDtcblxuICAvKiBEZWNpZGUgaWYgQVJJQSBhdHRyaWJ1dGVzIGFyZSBva2F5ICovXG4gIGxldCBBTExPV19BUklBX0FUVFIgPSB0cnVlO1xuXG4gIC8qIERlY2lkZSBpZiBjdXN0b20gZGF0YSBhdHRyaWJ1dGVzIGFyZSBva2F5ICovXG4gIGxldCBBTExPV19EQVRBX0FUVFIgPSB0cnVlO1xuXG4gIC8qIERlY2lkZSBpZiB1bmtub3duIHByb3RvY29scyBhcmUgb2theSAqL1xuICBsZXQgQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgPSBmYWxzZTtcblxuICAvKiBPdXRwdXQgc2hvdWxkIGJlIHNhZmUgZm9yIGNvbW1vbiB0ZW1wbGF0ZSBlbmdpbmVzLlxuICAgKiBUaGlzIG1lYW5zLCBET01QdXJpZnkgcmVtb3ZlcyBkYXRhIGF0dHJpYnV0ZXMsIG11c3RhY2hlcyBhbmQgRVJCXG4gICAqL1xuICBsZXQgU0FGRV9GT1JfVEVNUExBVEVTID0gZmFsc2U7XG5cbiAgLyogRGVjaWRlIGlmIGRvY3VtZW50IHdpdGggPGh0bWw+Li4uIHNob3VsZCBiZSByZXR1cm5lZCAqL1xuICBsZXQgV0hPTEVfRE9DVU1FTlQgPSBmYWxzZTtcblxuICAvKiBUcmFjayB3aGV0aGVyIGNvbmZpZyBpcyBhbHJlYWR5IHNldCBvbiB0aGlzIGluc3RhbmNlIG9mIERPTVB1cmlmeS4gKi9cbiAgbGV0IFNFVF9DT05GSUcgPSBmYWxzZTtcblxuICAvKiBEZWNpZGUgaWYgYWxsIGVsZW1lbnRzIChlLmcuIHN0eWxlLCBzY3JpcHQpIG11c3QgYmUgY2hpbGRyZW4gb2ZcbiAgICogZG9jdW1lbnQuYm9keS4gQnkgZGVmYXVsdCwgYnJvd3NlcnMgbWlnaHQgbW92ZSB0aGVtIHRvIGRvY3VtZW50LmhlYWQgKi9cbiAgbGV0IEZPUkNFX0JPRFkgPSBmYWxzZTtcblxuICAvKiBEZWNpZGUgaWYgYSBET00gYEhUTUxCb2R5RWxlbWVudGAgc2hvdWxkIGJlIHJldHVybmVkLCBpbnN0ZWFkIG9mIGEgaHRtbFxuICAgKiBzdHJpbmcgKG9yIGEgVHJ1c3RlZEhUTUwgb2JqZWN0IGlmIFRydXN0ZWQgVHlwZXMgYXJlIHN1cHBvcnRlZCkuXG4gICAqIElmIGBXSE9MRV9ET0NVTUVOVGAgaXMgZW5hYmxlZCBhIGBIVE1MSHRtbEVsZW1lbnRgIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZFxuICAgKi9cbiAgbGV0IFJFVFVSTl9ET00gPSBmYWxzZTtcblxuICAvKiBEZWNpZGUgaWYgYSBET00gYERvY3VtZW50RnJhZ21lbnRgIHNob3VsZCBiZSByZXR1cm5lZCwgaW5zdGVhZCBvZiBhIGh0bWxcbiAgICogc3RyaW5nICAob3IgYSBUcnVzdGVkSFRNTCBvYmplY3QgaWYgVHJ1c3RlZCBUeXBlcyBhcmUgc3VwcG9ydGVkKSAqL1xuICBsZXQgUkVUVVJOX0RPTV9GUkFHTUVOVCA9IGZhbHNlO1xuXG4gIC8qIElmIGBSRVRVUk5fRE9NYCBvciBgUkVUVVJOX0RPTV9GUkFHTUVOVGAgaXMgZW5hYmxlZCwgZGVjaWRlIGlmIHRoZSByZXR1cm5lZCBET01cbiAgICogYE5vZGVgIGlzIGltcG9ydGVkIGludG8gdGhlIGN1cnJlbnQgYERvY3VtZW50YC4gSWYgdGhpcyBmbGFnIGlzIG5vdCBlbmFibGVkIHRoZVxuICAgKiBgTm9kZWAgd2lsbCBiZWxvbmcgKGl0cyBvd25lckRvY3VtZW50KSB0byBhIGZyZXNoIGBIVE1MRG9jdW1lbnRgLCBjcmVhdGVkIGJ5XG4gICAqIERPTVB1cmlmeS5cbiAgICpcbiAgICogVGhpcyBkZWZhdWx0cyB0byBgdHJ1ZWAgc3RhcnRpbmcgRE9NUHVyaWZ5IDIuMi4wLiBOb3RlIHRoYXQgc2V0dGluZyBpdCB0byBgZmFsc2VgXG4gICAqIG1pZ2h0IGNhdXNlIFhTUyBmcm9tIGF0dGFja3MgaGlkZGVuIGluIGNsb3NlZCBzaGFkb3dyb290cyBpbiBjYXNlIHRoZSBicm93c2VyXG4gICAqIHN1cHBvcnRzIERlY2xhcmF0aXZlIFNoYWRvdzogRE9NIGh0dHBzOi8vd2ViLmRldi9kZWNsYXJhdGl2ZS1zaGFkb3ctZG9tL1xuICAgKi9cbiAgbGV0IFJFVFVSTl9ET01fSU1QT1JUID0gdHJ1ZTtcblxuICAvKiBUcnkgdG8gcmV0dXJuIGEgVHJ1c3RlZCBUeXBlIG9iamVjdCBpbnN0ZWFkIG9mIGEgc3RyaW5nLCByZXR1cm4gYSBzdHJpbmcgaW5cbiAgICogY2FzZSBUcnVzdGVkIFR5cGVzIGFyZSBub3Qgc3VwcG9ydGVkICAqL1xuICBsZXQgUkVUVVJOX1RSVVNURURfVFlQRSA9IGZhbHNlO1xuXG4gIC8qIE91dHB1dCBzaG91bGQgYmUgZnJlZSBmcm9tIERPTSBjbG9iYmVyaW5nIGF0dGFja3M/ICovXG4gIGxldCBTQU5JVElaRV9ET00gPSB0cnVlO1xuXG4gIC8qIEtlZXAgZWxlbWVudCBjb250ZW50IHdoZW4gcmVtb3ZpbmcgZWxlbWVudD8gKi9cbiAgbGV0IEtFRVBfQ09OVEVOVCA9IHRydWU7XG5cbiAgLyogSWYgYSBgTm9kZWAgaXMgcGFzc2VkIHRvIHNhbml0aXplKCksIHRoZW4gcGVyZm9ybXMgc2FuaXRpemF0aW9uIGluLXBsYWNlIGluc3RlYWRcbiAgICogb2YgaW1wb3J0aW5nIGl0IGludG8gYSBuZXcgRG9jdW1lbnQgYW5kIHJldHVybmluZyBhIHNhbml0aXplZCBjb3B5ICovXG4gIGxldCBJTl9QTEFDRSA9IGZhbHNlO1xuXG4gIC8qIEFsbG93IHVzYWdlIG9mIHByb2ZpbGVzIGxpa2UgaHRtbCwgc3ZnIGFuZCBtYXRoTWwgKi9cbiAgbGV0IFVTRV9QUk9GSUxFUyA9IHt9O1xuXG4gIC8qIFRhZ3MgdG8gaWdub3JlIGNvbnRlbnQgb2Ygd2hlbiBLRUVQX0NPTlRFTlQgaXMgdHJ1ZSAqL1xuICBjb25zdCBGT1JCSURfQ09OVEVOVFMgPSBhZGRUb1NldCh7fSwgW1xuICAgICdhbm5vdGF0aW9uLXhtbCcsXG4gICAgJ2F1ZGlvJyxcbiAgICAnY29sZ3JvdXAnLFxuICAgICdkZXNjJyxcbiAgICAnZm9yZWlnbm9iamVjdCcsXG4gICAgJ2hlYWQnLFxuICAgICdpZnJhbWUnLFxuICAgICdtYXRoJyxcbiAgICAnbWknLFxuICAgICdtbicsXG4gICAgJ21vJyxcbiAgICAnbXMnLFxuICAgICdtdGV4dCcsXG4gICAgJ25vZW1iZWQnLFxuICAgICdub2ZyYW1lcycsXG4gICAgJ3BsYWludGV4dCcsXG4gICAgJ3NjcmlwdCcsXG4gICAgJ3N0eWxlJyxcbiAgICAnc3ZnJyxcbiAgICAndGVtcGxhdGUnLFxuICAgICd0aGVhZCcsXG4gICAgJ3RpdGxlJyxcbiAgICAndmlkZW8nLFxuICAgICd4bXAnLFxuICBdKTtcblxuICAvKiBUYWdzIHRoYXQgYXJlIHNhZmUgZm9yIGRhdGE6IFVSSXMgKi9cbiAgbGV0IERBVEFfVVJJX1RBR1MgPSBudWxsO1xuICBjb25zdCBERUZBVUxUX0RBVEFfVVJJX1RBR1MgPSBhZGRUb1NldCh7fSwgW1xuICAgICdhdWRpbycsXG4gICAgJ3ZpZGVvJyxcbiAgICAnaW1nJyxcbiAgICAnc291cmNlJyxcbiAgICAnaW1hZ2UnLFxuICAgICd0cmFjaycsXG4gIF0pO1xuXG4gIC8qIEF0dHJpYnV0ZXMgc2FmZSBmb3IgdmFsdWVzIGxpa2UgXCJqYXZhc2NyaXB0OlwiICovXG4gIGxldCBVUklfU0FGRV9BVFRSSUJVVEVTID0gbnVsbDtcbiAgY29uc3QgREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTID0gYWRkVG9TZXQoe30sIFtcbiAgICAnYWx0JyxcbiAgICAnY2xhc3MnLFxuICAgICdmb3InLFxuICAgICdpZCcsXG4gICAgJ2xhYmVsJyxcbiAgICAnbmFtZScsXG4gICAgJ3BhdHRlcm4nLFxuICAgICdwbGFjZWhvbGRlcicsXG4gICAgJ3N1bW1hcnknLFxuICAgICd0aXRsZScsXG4gICAgJ3ZhbHVlJyxcbiAgICAnc3R5bGUnLFxuICAgICd4bWxucycsXG4gIF0pO1xuXG4gIC8qIEtlZXAgYSByZWZlcmVuY2UgdG8gY29uZmlnIHRvIHBhc3MgdG8gaG9va3MgKi9cbiAgbGV0IENPTkZJRyA9IG51bGw7XG5cbiAgLyogSWRlYWxseSwgZG8gbm90IHRvdWNoIGFueXRoaW5nIGJlbG93IHRoaXMgbGluZSAqL1xuICAvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovXG5cbiAgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgLyoqXG4gICAqIF9wYXJzZUNvbmZpZ1xuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGNmZyBvcHRpb25hbCBjb25maWcgbGl0ZXJhbFxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgY29uc3QgX3BhcnNlQ29uZmlnID0gZnVuY3Rpb24gKGNmZykge1xuICAgIGlmIChDT05GSUcgJiYgQ09ORklHID09PSBjZmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiBTaGllbGQgY29uZmlndXJhdGlvbiBvYmplY3QgZnJvbSB0YW1wZXJpbmcgKi9cbiAgICBpZiAoIWNmZyB8fCB0eXBlb2YgY2ZnICE9PSAnb2JqZWN0Jykge1xuICAgICAgY2ZnID0ge307XG4gICAgfVxuXG4gICAgLyogU2hpZWxkIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZyb20gcHJvdG90eXBlIHBvbGx1dGlvbiAqL1xuICAgIGNmZyA9IGNsb25lKGNmZyk7XG5cbiAgICAvKiBTZXQgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzICovXG4gICAgQUxMT1dFRF9UQUdTID1cbiAgICAgICdBTExPV0VEX1RBR1MnIGluIGNmZ1xuICAgICAgICA/IGFkZFRvU2V0KHt9LCBjZmcuQUxMT1dFRF9UQUdTKVxuICAgICAgICA6IERFRkFVTFRfQUxMT1dFRF9UQUdTO1xuICAgIEFMTE9XRURfQVRUUiA9XG4gICAgICAnQUxMT1dFRF9BVFRSJyBpbiBjZmdcbiAgICAgICAgPyBhZGRUb1NldCh7fSwgY2ZnLkFMTE9XRURfQVRUUilcbiAgICAgICAgOiBERUZBVUxUX0FMTE9XRURfQVRUUjtcbiAgICBVUklfU0FGRV9BVFRSSUJVVEVTID1cbiAgICAgICdBRERfVVJJX1NBRkVfQVRUUicgaW4gY2ZnXG4gICAgICAgID8gYWRkVG9TZXQoY2xvbmUoREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTKSwgY2ZnLkFERF9VUklfU0FGRV9BVFRSKVxuICAgICAgICA6IERFRkFVTFRfVVJJX1NBRkVfQVRUUklCVVRFUztcbiAgICBEQVRBX1VSSV9UQUdTID1cbiAgICAgICdBRERfREFUQV9VUklfVEFHUycgaW4gY2ZnXG4gICAgICAgID8gYWRkVG9TZXQoY2xvbmUoREVGQVVMVF9EQVRBX1VSSV9UQUdTKSwgY2ZnLkFERF9EQVRBX1VSSV9UQUdTKVxuICAgICAgICA6IERFRkFVTFRfREFUQV9VUklfVEFHUztcbiAgICBGT1JCSURfVEFHUyA9ICdGT1JCSURfVEFHUycgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfVEFHUykgOiB7fTtcbiAgICBGT1JCSURfQVRUUiA9ICdGT1JCSURfQVRUUicgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfQVRUUikgOiB7fTtcbiAgICBVU0VfUFJPRklMRVMgPSAnVVNFX1BST0ZJTEVTJyBpbiBjZmcgPyBjZmcuVVNFX1BST0ZJTEVTIDogZmFsc2U7XG4gICAgQUxMT1dfQVJJQV9BVFRSID0gY2ZnLkFMTE9XX0FSSUFfQVRUUiAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgIEFMTE9XX0RBVEFfQVRUUiA9IGNmZy5BTExPV19EQVRBX0FUVFIgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcbiAgICBBTExPV19VTktOT1dOX1BST1RPQ09MUyA9IGNmZy5BTExPV19VTktOT1dOX1BST1RPQ09MUyB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgIFNBRkVfRk9SX1RFTVBMQVRFUyA9IGNmZy5TQUZFX0ZPUl9URU1QTEFURVMgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcbiAgICBXSE9MRV9ET0NVTUVOVCA9IGNmZy5XSE9MRV9ET0NVTUVOVCB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgIFJFVFVSTl9ET00gPSBjZmcuUkVUVVJOX0RPTSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgIFJFVFVSTl9ET01fRlJBR01FTlQgPSBjZmcuUkVUVVJOX0RPTV9GUkFHTUVOVCB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgIFJFVFVSTl9ET01fSU1QT1JUID0gY2ZnLlJFVFVSTl9ET01fSU1QT1JUICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG4gICAgUkVUVVJOX1RSVVNURURfVFlQRSA9IGNmZy5SRVRVUk5fVFJVU1RFRF9UWVBFIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgRk9SQ0VfQk9EWSA9IGNmZy5GT1JDRV9CT0RZIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG4gICAgU0FOSVRJWkVfRE9NID0gY2ZnLlNBTklUSVpFX0RPTSAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuICAgIEtFRVBfQ09OVEVOVCA9IGNmZy5LRUVQX0NPTlRFTlQgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcbiAgICBJTl9QTEFDRSA9IGNmZy5JTl9QTEFDRSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuICAgIElTX0FMTE9XRURfVVJJID0gY2ZnLkFMTE9XRURfVVJJX1JFR0VYUCB8fCBJU19BTExPV0VEX1VSSTtcbiAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICBBTExPV19EQVRBX0FUVFIgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoUkVUVVJOX0RPTV9GUkFHTUVOVCkge1xuICAgICAgUkVUVVJOX0RPTSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyogUGFyc2UgcHJvZmlsZSBpbmZvICovXG4gICAgaWYgKFVTRV9QUk9GSUxFUykge1xuICAgICAgQUxMT1dFRF9UQUdTID0gYWRkVG9TZXQoe30sIFsuLi5UQUdTLnRleHRdKTtcbiAgICAgIEFMTE9XRURfQVRUUiA9IFtdO1xuICAgICAgaWYgKFVTRV9QUk9GSUxFUy5odG1sID09PSB0cnVlKSB7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgVEFHUy5odG1sKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBBVFRSUy5odG1sKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFVTRV9QUk9GSUxFUy5zdmcgPT09IHRydWUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBUQUdTLnN2Zyk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgQVRUUlMuc3ZnKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBBVFRSUy54bWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoVVNFX1BST0ZJTEVTLnN2Z0ZpbHRlcnMgPT09IHRydWUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBUQUdTLnN2Z0ZpbHRlcnMpO1xuICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIEFUVFJTLnN2Zyk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgQVRUUlMueG1sKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFVTRV9QUk9GSUxFUy5tYXRoTWwgPT09IHRydWUpIHtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBUQUdTLm1hdGhNbCk7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfQVRUUiwgQVRUUlMubWF0aE1sKTtcbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBBVFRSUy54bWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIE1lcmdlIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyAqL1xuICAgIGlmIChjZmcuQUREX1RBR1MpIHtcbiAgICAgIGlmIChBTExPV0VEX1RBR1MgPT09IERFRkFVTFRfQUxMT1dFRF9UQUdTKSB7XG4gICAgICAgIEFMTE9XRURfVEFHUyA9IGNsb25lKEFMTE9XRURfVEFHUyk7XG4gICAgICB9XG5cbiAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgY2ZnLkFERF9UQUdTKTtcbiAgICB9XG5cbiAgICBpZiAoY2ZnLkFERF9BVFRSKSB7XG4gICAgICBpZiAoQUxMT1dFRF9BVFRSID09PSBERUZBVUxUX0FMTE9XRURfQVRUUikge1xuICAgICAgICBBTExPV0VEX0FUVFIgPSBjbG9uZShBTExPV0VEX0FUVFIpO1xuICAgICAgfVxuXG4gICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIGNmZy5BRERfQVRUUik7XG4gICAgfVxuXG4gICAgaWYgKGNmZy5BRERfVVJJX1NBRkVfQVRUUikge1xuICAgICAgYWRkVG9TZXQoVVJJX1NBRkVfQVRUUklCVVRFUywgY2ZnLkFERF9VUklfU0FGRV9BVFRSKTtcbiAgICB9XG5cbiAgICAvKiBBZGQgI3RleHQgaW4gY2FzZSBLRUVQX0NPTlRFTlQgaXMgc2V0IHRvIHRydWUgKi9cbiAgICBpZiAoS0VFUF9DT05URU5UKSB7XG4gICAgICBBTExPV0VEX1RBR1NbJyN0ZXh0J10gPSB0cnVlO1xuICAgIH1cblxuICAgIC8qIEFkZCBodG1sLCBoZWFkIGFuZCBib2R5IHRvIEFMTE9XRURfVEFHUyBpbiBjYXNlIFdIT0xFX0RPQ1VNRU5UIGlzIHRydWUgKi9cbiAgICBpZiAoV0hPTEVfRE9DVU1FTlQpIHtcbiAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgWydodG1sJywgJ2hlYWQnLCAnYm9keSddKTtcbiAgICB9XG5cbiAgICAvKiBBZGQgdGJvZHkgdG8gQUxMT1dFRF9UQUdTIGluIGNhc2UgdGFibGVzIGFyZSBwZXJtaXR0ZWQsIHNlZSAjMjg2LCAjMzY1ICovXG4gICAgaWYgKEFMTE9XRURfVEFHUy50YWJsZSkge1xuICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBbJ3Rib2R5J10pO1xuICAgICAgZGVsZXRlIEZPUkJJRF9UQUdTLnRib2R5O1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgZnVydGhlciBtYW5pcHVsYXRpb24gb2YgY29uZmlndXJhdGlvbi5cbiAgICAvLyBOb3QgYXZhaWxhYmxlIGluIElFOCwgU2FmYXJpIDUsIGV0Yy5cbiAgICBpZiAoZnJlZXplKSB7XG4gICAgICBmcmVlemUoY2ZnKTtcbiAgICB9XG5cbiAgICBDT05GSUcgPSBjZmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9mb3JjZVJlbW92ZVxuICAgKlxuICAgKiBAcGFyYW0gIHtOb2RlfSBub2RlIGEgRE9NIG5vZGVcbiAgICovXG4gIGNvbnN0IF9mb3JjZVJlbW92ZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7IGVsZW1lbnQ6IG5vZGUgfSk7XG4gICAgdHJ5IHtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICBub2RlLm91dGVySFRNTCA9IGVtcHR5SFRNTDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIF9yZW1vdmVBdHRyaWJ1dGVcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lIGFuIEF0dHJpYnV0ZSBuYW1lXG4gICAqIEBwYXJhbSAge05vZGV9IG5vZGUgYSBET00gbm9kZVxuICAgKi9cbiAgY29uc3QgX3JlbW92ZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChuYW1lLCBub2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwge1xuICAgICAgICBhdHRyaWJ1dGU6IG5vZGUuZ2V0QXR0cmlidXRlTm9kZShuYW1lKSxcbiAgICAgICAgZnJvbTogbm9kZSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIGFycmF5UHVzaChET01QdXJpZnkucmVtb3ZlZCwge1xuICAgICAgICBhdHRyaWJ1dGU6IG51bGwsXG4gICAgICAgIGZyb206IG5vZGUsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfTtcblxuICAvKipcbiAgICogX2luaXREb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGRpcnR5IGEgc3RyaW5nIG9mIGRpcnR5IG1hcmt1cFxuICAgKiBAcmV0dXJuIHtEb2N1bWVudH0gYSBET00sIGZpbGxlZCB3aXRoIHRoZSBkaXJ0eSBtYXJrdXBcbiAgICovXG4gIGNvbnN0IF9pbml0RG9jdW1lbnQgPSBmdW5jdGlvbiAoZGlydHkpIHtcbiAgICAvKiBDcmVhdGUgYSBIVE1MIGRvY3VtZW50ICovXG4gICAgbGV0IGRvYztcbiAgICBsZXQgbGVhZGluZ1doaXRlc3BhY2U7XG5cbiAgICBpZiAoRk9SQ0VfQk9EWSkge1xuICAgICAgZGlydHkgPSAnPHJlbW92ZT48L3JlbW92ZT4nICsgZGlydHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIElmIEZPUkNFX0JPRFkgaXNuJ3QgdXNlZCwgbGVhZGluZyB3aGl0ZXNwYWNlIG5lZWRzIHRvIGJlIHByZXNlcnZlZCBtYW51YWxseSAqL1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IHN0cmluZ01hdGNoKGRpcnR5LCAvXltcXHJcXG5cXHQgXSsvKTtcbiAgICAgIGxlYWRpbmdXaGl0ZXNwYWNlID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzBdO1xuICAgIH1cblxuICAgIGNvbnN0IGRpcnR5UGF5bG9hZCA9IHRydXN0ZWRUeXBlc1BvbGljeVxuICAgICAgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChkaXJ0eSlcbiAgICAgIDogZGlydHk7XG4gICAgLyogVXNlIHRoZSBET01QYXJzZXIgQVBJIGJ5IGRlZmF1bHQsIGZhbGxiYWNrIGxhdGVyIGlmIG5lZWRzIGJlICovXG4gICAgdHJ5IHtcbiAgICAgIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZGlydHlQYXlsb2FkLCAndGV4dC9odG1sJyk7XG4gICAgfSBjYXRjaCAoXykge31cblxuICAgIC8qIFVzZSBjcmVhdGVIVE1MRG9jdW1lbnQgaW4gY2FzZSBET01QYXJzZXIgaXMgbm90IGF2YWlsYWJsZSAqL1xuICAgIGlmICghZG9jIHx8ICFkb2MuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBkb2MgPSBpbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoJycpO1xuICAgICAgY29uc3QgeyBib2R5IH0gPSBkb2M7XG4gICAgICBib2R5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYm9keS5wYXJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgIGJvZHkub3V0ZXJIVE1MID0gZGlydHlQYXlsb2FkO1xuICAgIH1cblxuICAgIGlmIChkaXJ0eSAmJiBsZWFkaW5nV2hpdGVzcGFjZSkge1xuICAgICAgZG9jLmJvZHkuaW5zZXJ0QmVmb3JlKFxuICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsZWFkaW5nV2hpdGVzcGFjZSksXG4gICAgICAgIGRvYy5ib2R5LmNoaWxkTm9kZXNbMF0gfHwgbnVsbFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvKiBXb3JrIG9uIHdob2xlIGRvY3VtZW50IG9yIGp1c3QgaXRzIGJvZHkgKi9cbiAgICByZXR1cm4gZ2V0RWxlbWVudHNCeVRhZ05hbWUuY2FsbChkb2MsIFdIT0xFX0RPQ1VNRU5UID8gJ2h0bWwnIDogJ2JvZHknKVswXTtcbiAgfTtcblxuICAvKipcbiAgICogX2NyZWF0ZUl0ZXJhdG9yXG4gICAqXG4gICAqIEBwYXJhbSAge0RvY3VtZW50fSByb290IGRvY3VtZW50L2ZyYWdtZW50IHRvIGNyZWF0ZSBpdGVyYXRvciBmb3JcbiAgICogQHJldHVybiB7SXRlcmF0b3J9IGl0ZXJhdG9yIGluc3RhbmNlXG4gICAqL1xuICBjb25zdCBfY3JlYXRlSXRlcmF0b3IgPSBmdW5jdGlvbiAocm9vdCkge1xuICAgIHJldHVybiBjcmVhdGVOb2RlSXRlcmF0b3IuY2FsbChcbiAgICAgIHJvb3Qub3duZXJEb2N1bWVudCB8fCByb290LFxuICAgICAgcm9vdCxcbiAgICAgIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UIHwgTm9kZUZpbHRlci5TSE9XX0NPTU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfVEVYVCxcbiAgICAgICgpID0+IHtcbiAgICAgICAgcmV0dXJuIE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVDtcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9pc0Nsb2JiZXJlZFxuICAgKlxuICAgKiBAcGFyYW0gIHtOb2RlfSBlbG0gZWxlbWVudCB0byBjaGVjayBmb3IgY2xvYmJlcmluZyBhdHRhY2tzXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY2xvYmJlcmVkLCBmYWxzZSBpZiBzYWZlXG4gICAqL1xuICBjb25zdCBfaXNDbG9iYmVyZWQgPSBmdW5jdGlvbiAoZWxtKSB7XG4gICAgaWYgKGVsbSBpbnN0YW5jZW9mIFRleHQgfHwgZWxtIGluc3RhbmNlb2YgQ29tbWVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBlbG0ubm9kZU5hbWUgIT09ICdzdHJpbmcnIHx8XG4gICAgICB0eXBlb2YgZWxtLnRleHRDb250ZW50ICE9PSAnc3RyaW5nJyB8fFxuICAgICAgdHlwZW9mIGVsbS5yZW1vdmVDaGlsZCAhPT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgIShlbG0uYXR0cmlidXRlcyBpbnN0YW5jZW9mIE5hbWVkTm9kZU1hcCkgfHxcbiAgICAgIHR5cGVvZiBlbG0ucmVtb3ZlQXR0cmlidXRlICE9PSAnZnVuY3Rpb24nIHx8XG4gICAgICB0eXBlb2YgZWxtLnNldEF0dHJpYnV0ZSAhPT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgdHlwZW9mIGVsbS5uYW1lc3BhY2VVUkkgIT09ICdzdHJpbmcnXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9pc05vZGVcbiAgICpcbiAgICogQHBhcmFtICB7Tm9kZX0gb2JqIG9iamVjdCB0byBjaGVjayB3aGV0aGVyIGl0J3MgYSBET00gbm9kZVxuICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlzIG9iamVjdCBpcyBhIERPTSBub2RlXG4gICAqL1xuICBjb25zdCBfaXNOb2RlID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2YgTm9kZSA9PT0gJ29iamVjdCdcbiAgICAgID8gb2JqZWN0IGluc3RhbmNlb2YgTm9kZVxuICAgICAgOiBvYmplY3QgJiZcbiAgICAgICAgICB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgIHR5cGVvZiBvYmplY3Qubm9kZVR5cGUgPT09ICdudW1iZXInICYmXG4gICAgICAgICAgdHlwZW9mIG9iamVjdC5ub2RlTmFtZSA9PT0gJ3N0cmluZyc7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9leGVjdXRlSG9va1xuICAgKiBFeGVjdXRlIHVzZXIgY29uZmlndXJhYmxlIGhvb2tzXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gZW50cnlQb2ludCAgTmFtZSBvZiB0aGUgaG9vaydzIGVudHJ5IHBvaW50XG4gICAqIEBwYXJhbSAge05vZGV9IGN1cnJlbnROb2RlIG5vZGUgdG8gd29yayBvbiB3aXRoIHRoZSBob29rXG4gICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBhZGRpdGlvbmFsIGhvb2sgcGFyYW1ldGVyc1xuICAgKi9cbiAgY29uc3QgX2V4ZWN1dGVIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQsIGN1cnJlbnROb2RlLCBkYXRhKSB7XG4gICAgaWYgKCFob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFycmF5Rm9yRWFjaChob29rc1tlbnRyeVBvaW50XSwgKGhvb2spID0+IHtcbiAgICAgIGhvb2suY2FsbChET01QdXJpZnksIGN1cnJlbnROb2RlLCBkYXRhLCBDT05GSUcpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBfc2FuaXRpemVFbGVtZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdCBub2RlTmFtZVxuICAgKiBAcHJvdGVjdCB0ZXh0Q29udGVudFxuICAgKiBAcHJvdGVjdCByZW1vdmVDaGlsZFxuICAgKlxuICAgKiBAcGFyYW0gICB7Tm9kZX0gY3VycmVudE5vZGUgdG8gY2hlY2sgZm9yIHBlcm1pc3Npb24gdG8gZXhpc3RcbiAgICogQHJldHVybiAge0Jvb2xlYW59IHRydWUgaWYgbm9kZSB3YXMga2lsbGVkLCBmYWxzZSBpZiBsZWZ0IGFsaXZlXG4gICAqL1xuICBjb25zdCBfc2FuaXRpemVFbGVtZW50cyA9IGZ1bmN0aW9uIChjdXJyZW50Tm9kZSkge1xuICAgIGxldCBjb250ZW50O1xuXG4gICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgIF9leGVjdXRlSG9vaygnYmVmb3JlU2FuaXRpemVFbGVtZW50cycsIGN1cnJlbnROb2RlLCBudWxsKTtcblxuICAgIC8qIENoZWNrIGlmIGVsZW1lbnQgaXMgY2xvYmJlcmVkIG9yIGNhbiBjbG9iYmVyICovXG4gICAgaWYgKF9pc0Nsb2JiZXJlZChjdXJyZW50Tm9kZSkpIHtcbiAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiBDaGVjayBpZiB0YWduYW1lIGNvbnRhaW5zIFVuaWNvZGUgKi9cbiAgICBpZiAoc3RyaW5nTWF0Y2goY3VycmVudE5vZGUubm9kZU5hbWUsIC9bXFx1MDA4MC1cXHVGRkZGXS8pKSB7XG4gICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyogTm93IGxldCdzIGNoZWNrIHRoZSBlbGVtZW50J3MgdHlwZSBhbmQgbmFtZSAqL1xuICAgIGNvbnN0IHRhZ05hbWUgPSBzdHJpbmdUb0xvd2VyQ2FzZShjdXJyZW50Tm9kZS5ub2RlTmFtZSk7XG5cbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgX2V4ZWN1dGVIb29rKCd1cG9uU2FuaXRpemVFbGVtZW50JywgY3VycmVudE5vZGUsIHtcbiAgICAgIHRhZ05hbWUsXG4gICAgICBhbGxvd2VkVGFnczogQUxMT1dFRF9UQUdTLFxuICAgIH0pO1xuXG4gICAgLyogVGFrZSBjYXJlIG9mIGFuIG1YU1MgcGF0dGVybiB1c2luZyBwLCBiciBpbnNpZGUgc3ZnLCBtYXRoICovXG4gICAgaWYgKFxuICAgICAgKHRhZ05hbWUgPT09ICdzdmcnIHx8IHRhZ05hbWUgPT09ICdtYXRoJykgJiZcbiAgICAgIGN1cnJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3AsIGJyLCBmb3JtLCB0YWJsZScpLmxlbmd0aCAhPT0gMFxuICAgICkge1xuICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qIERldGVjdCBtWFNTIGF0dGVtcHRzIGFidXNpbmcgbmFtZXNwYWNlIGNvbmZ1c2lvbiAqL1xuICAgIGlmIChcbiAgICAgICFfaXNOb2RlKGN1cnJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkKSAmJlxuICAgICAgKCFfaXNOb2RlKGN1cnJlbnROb2RlLmNvbnRlbnQpIHx8XG4gICAgICAgICFfaXNOb2RlKGN1cnJlbnROb2RlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQpKSAmJlxuICAgICAgcmVnRXhwVGVzdCgvPFshL1xcd10vZywgY3VycmVudE5vZGUuaW5uZXJIVE1MKSAmJlxuICAgICAgcmVnRXhwVGVzdCgvPFshL1xcd10vZywgY3VycmVudE5vZGUudGV4dENvbnRlbnQpXG4gICAgKSB7XG4gICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyogUmVtb3ZlIGVsZW1lbnQgaWYgYW55dGhpbmcgZm9yYmlkcyBpdHMgcHJlc2VuY2UgKi9cbiAgICBpZiAoIUFMTE9XRURfVEFHU1t0YWdOYW1lXSB8fCBGT1JCSURfVEFHU1t0YWdOYW1lXSkge1xuICAgICAgLyogS2VlcCBjb250ZW50IGV4Y2VwdCBmb3IgYmFkLWxpc3RlZCBlbGVtZW50cyAqL1xuICAgICAgaWYgKFxuICAgICAgICBLRUVQX0NPTlRFTlQgJiZcbiAgICAgICAgIUZPUkJJRF9DT05URU5UU1t0YWdOYW1lXSAmJlxuICAgICAgICB0eXBlb2YgY3VycmVudE5vZGUuaW5zZXJ0QWRqYWNlbnRIVE1MID09PSAnZnVuY3Rpb24nXG4gICAgICApIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBodG1sVG9JbnNlcnQgPSBjdXJyZW50Tm9kZS5pbm5lckhUTUw7XG4gICAgICAgICAgY3VycmVudE5vZGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgJ0FmdGVyRW5kJyxcbiAgICAgICAgICAgIHRydXN0ZWRUeXBlc1BvbGljeVxuICAgICAgICAgICAgICA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKGh0bWxUb0luc2VydClcbiAgICAgICAgICAgICAgOiBodG1sVG9JbnNlcnRcbiAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgfVxuXG4gICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyogUmVtb3ZlIGluIGNhc2UgYSBub3NjcmlwdC9ub2VtYmVkIFhTUyBpcyBzdXNwZWN0ZWQgKi9cbiAgICBpZiAoXG4gICAgICAodGFnTmFtZSA9PT0gJ25vc2NyaXB0JyB8fCB0YWdOYW1lID09PSAnbm9lbWJlZCcpICYmXG4gICAgICByZWdFeHBUZXN0KC88XFwvbm8oc2NyaXB0fGVtYmVkKS9pLCBjdXJyZW50Tm9kZS5pbm5lckhUTUwpXG4gICAgKSB7XG4gICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyogU2FuaXRpemUgZWxlbWVudCBjb250ZW50IHRvIGJlIHRlbXBsYXRlLXNhZmUgKi9cbiAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTICYmIGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAvKiBHZXQgdGhlIGVsZW1lbnQncyB0ZXh0IGNvbnRlbnQgKi9cbiAgICAgIGNvbnRlbnQgPSBjdXJyZW50Tm9kZS50ZXh0Q29udGVudDtcbiAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIE1VU1RBQ0hFX0VYUFIsICcgJyk7XG4gICAgICBjb250ZW50ID0gc3RyaW5nUmVwbGFjZShjb250ZW50LCBFUkJfRVhQUiwgJyAnKTtcbiAgICAgIGlmIChjdXJyZW50Tm9kZS50ZXh0Q29udGVudCAhPT0gY29udGVudCkge1xuICAgICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHsgZWxlbWVudDogY3VycmVudE5vZGUuY2xvbmVOb2RlKCkgfSk7XG4gICAgICAgIGN1cnJlbnROb2RlLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgX2V4ZWN1dGVIb29rKCdhZnRlclNhbml0aXplRWxlbWVudHMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9pc1ZhbGlkQXR0cmlidXRlXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gbGNUYWcgTG93ZXJjYXNlIHRhZyBuYW1lIG9mIGNvbnRhaW5pbmcgZWxlbWVudC5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBsY05hbWUgTG93ZXJjYXNlIGF0dHJpYnV0ZSBuYW1lLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlIEF0dHJpYnV0ZSB2YWx1ZS5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gIGNvbnN0IF9pc1ZhbGlkQXR0cmlidXRlID0gZnVuY3Rpb24gKGxjVGFnLCBsY05hbWUsIHZhbHVlKSB7XG4gICAgLyogTWFrZSBzdXJlIGF0dHJpYnV0ZSBjYW5ub3QgY2xvYmJlciAqL1xuICAgIGlmIChcbiAgICAgIFNBTklUSVpFX0RPTSAmJlxuICAgICAgKGxjTmFtZSA9PT0gJ2lkJyB8fCBsY05hbWUgPT09ICduYW1lJykgJiZcbiAgICAgICh2YWx1ZSBpbiBkb2N1bWVudCB8fCB2YWx1ZSBpbiBmb3JtRWxlbWVudClcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKiBBbGxvdyB2YWxpZCBkYXRhLSogYXR0cmlidXRlczogQXQgbGVhc3Qgb25lIGNoYXJhY3RlciBhZnRlciBcIi1cIlxuICAgICAgICAoaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZG9tLmh0bWwjZW1iZWRkaW5nLWN1c3RvbS1ub24tdmlzaWJsZS1kYXRhLXdpdGgtdGhlLWRhdGEtKi1hdHRyaWJ1dGVzKVxuICAgICAgICBYTUwtY29tcGF0aWJsZSAoaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5mcmFzdHJ1Y3R1cmUuaHRtbCN4bWwtY29tcGF0aWJsZSBhbmQgaHR0cDovL3d3dy53My5vcmcvVFIveG1sLyNkMGU4MDQpXG4gICAgICAgIFdlIGRvbid0IG5lZWQgdG8gY2hlY2sgdGhlIHZhbHVlOyBpdCdzIGFsd2F5cyBVUkkgc2FmZS4gKi9cbiAgICBpZiAoQUxMT1dfREFUQV9BVFRSICYmIHJlZ0V4cFRlc3QoREFUQV9BVFRSLCBsY05hbWUpKSB7XG4gICAgICAvLyBUaGlzIGF0dHJpYnV0ZSBpcyBzYWZlXG4gICAgfSBlbHNlIGlmIChBTExPV19BUklBX0FUVFIgJiYgcmVnRXhwVGVzdChBUklBX0FUVFIsIGxjTmFtZSkpIHtcbiAgICAgIC8vIFRoaXMgYXR0cmlidXRlIGlzIHNhZmVcbiAgICAgIC8qIE90aGVyd2lzZSwgY2hlY2sgdGhlIG5hbWUgaXMgcGVybWl0dGVkICovXG4gICAgfSBlbHNlIGlmICghQUxMT1dFRF9BVFRSW2xjTmFtZV0gfHwgRk9SQklEX0FUVFJbbGNOYW1lXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAvKiBDaGVjayB2YWx1ZSBpcyBzYWZlLiBGaXJzdCwgaXMgYXR0ciBpbmVydD8gSWYgc28sIGlzIHNhZmUgKi9cbiAgICB9IGVsc2UgaWYgKFVSSV9TQUZFX0FUVFJJQlVURVNbbGNOYW1lXSkge1xuICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgc2FmZVxuICAgICAgLyogQ2hlY2sgbm8gc2NyaXB0LCBkYXRhIG9yIHVua25vd24gcG9zc2libHkgdW5zYWZlIFVSSVxuICAgICAgICB1bmxlc3Mgd2Uga25vdyBVUkkgdmFsdWVzIGFyZSBzYWZlIGZvciB0aGF0IGF0dHJpYnV0ZSAqL1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICByZWdFeHBUZXN0KElTX0FMTE9XRURfVVJJLCBzdHJpbmdSZXBsYWNlKHZhbHVlLCBBVFRSX1dISVRFU1BBQ0UsICcnKSlcbiAgICApIHtcbiAgICAgIC8vIFRoaXMgYXR0cmlidXRlIGlzIHNhZmVcbiAgICAgIC8qIEtlZXAgaW1hZ2UgZGF0YSBVUklzIGFsaXZlIGlmIHNyYy94bGluazpocmVmIGlzIGFsbG93ZWQgKi9cbiAgICAgIC8qIEZ1cnRoZXIgcHJldmVudCBnYWRnZXQgWFNTIGZvciBkeW5hbWljYWxseSBidWlsdCBzY3JpcHQgdGFncyAqL1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAobGNOYW1lID09PSAnc3JjJyB8fCBsY05hbWUgPT09ICd4bGluazpocmVmJyB8fCBsY05hbWUgPT09ICdocmVmJykgJiZcbiAgICAgIGxjVGFnICE9PSAnc2NyaXB0JyAmJlxuICAgICAgc3RyaW5nSW5kZXhPZih2YWx1ZSwgJ2RhdGE6JykgPT09IDAgJiZcbiAgICAgIERBVEFfVVJJX1RBR1NbbGNUYWddXG4gICAgKSB7XG4gICAgICAvLyBUaGlzIGF0dHJpYnV0ZSBpcyBzYWZlXG4gICAgICAvKiBBbGxvdyB1bmtub3duIHByb3RvY29sczogVGhpcyBwcm92aWRlcyBzdXBwb3J0IGZvciBsaW5rcyB0aGF0XG4gICAgICAgIGFyZSBoYW5kbGVkIGJ5IHByb3RvY29sIGhhbmRsZXJzIHdoaWNoIG1heSBiZSB1bmtub3duIGFoZWFkIG9mXG4gICAgICAgIHRpbWUsIGUuZy4gZmI6LCBzcG90aWZ5OiAqL1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBBTExPV19VTktOT1dOX1BST1RPQ09MUyAmJlxuICAgICAgIXJlZ0V4cFRlc3QoSVNfU0NSSVBUX09SX0RBVEEsIHN0cmluZ1JlcGxhY2UodmFsdWUsIEFUVFJfV0hJVEVTUEFDRSwgJycpKVxuICAgICkge1xuICAgICAgLy8gVGhpcyBhdHRyaWJ1dGUgaXMgc2FmZVxuICAgICAgLyogQ2hlY2sgZm9yIGJpbmFyeSBhdHRyaWJ1dGVzICovXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVnYXRlZC1jb25kaXRpb25cbiAgICB9IGVsc2UgaWYgKCF2YWx1ZSkge1xuICAgICAgLy8gQmluYXJ5IGF0dHJpYnV0ZXMgYXJlIHNhZmUgYXQgdGhpcyBwb2ludFxuICAgICAgLyogQW55dGhpbmcgZWxzZSwgcHJlc3VtZSB1bnNhZmUsIGRvIG5vdCBhZGQgaXQgYmFjayAqL1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIF9zYW5pdGl6ZUF0dHJpYnV0ZXNcbiAgICpcbiAgICogQHByb3RlY3QgYXR0cmlidXRlc1xuICAgKiBAcHJvdGVjdCBub2RlTmFtZVxuICAgKiBAcHJvdGVjdCByZW1vdmVBdHRyaWJ1dGVcbiAgICogQHByb3RlY3Qgc2V0QXR0cmlidXRlXG4gICAqXG4gICAqIEBwYXJhbSAge05vZGV9IGN1cnJlbnROb2RlIHRvIHNhbml0aXplXG4gICAqL1xuICBjb25zdCBfc2FuaXRpemVBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKGN1cnJlbnROb2RlKSB7XG4gICAgbGV0IGF0dHI7XG4gICAgbGV0IHZhbHVlO1xuICAgIGxldCBsY05hbWU7XG4gICAgbGV0IGw7XG4gICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgIF9leGVjdXRlSG9vaygnYmVmb3JlU2FuaXRpemVBdHRyaWJ1dGVzJywgY3VycmVudE5vZGUsIG51bGwpO1xuXG4gICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSBjdXJyZW50Tm9kZTtcblxuICAgIC8qIENoZWNrIGlmIHdlIGhhdmUgYXR0cmlidXRlczsgaWYgbm90IHdlIG1pZ2h0IGhhdmUgYSB0ZXh0IG5vZGUgKi9cbiAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBob29rRXZlbnQgPSB7XG4gICAgICBhdHRyTmFtZTogJycsXG4gICAgICBhdHRyVmFsdWU6ICcnLFxuICAgICAga2VlcEF0dHI6IHRydWUsXG4gICAgICBhbGxvd2VkQXR0cmlidXRlczogQUxMT1dFRF9BVFRSLFxuICAgIH07XG4gICAgbCA9IGF0dHJpYnV0ZXMubGVuZ3RoO1xuXG4gICAgLyogR28gYmFja3dhcmRzIG92ZXIgYWxsIGF0dHJpYnV0ZXM7IHNhZmVseSByZW1vdmUgYmFkIG9uZXMgKi9cbiAgICB3aGlsZSAobC0tKSB7XG4gICAgICBhdHRyID0gYXR0cmlidXRlc1tsXTtcbiAgICAgIGNvbnN0IHsgbmFtZSwgbmFtZXNwYWNlVVJJIH0gPSBhdHRyO1xuICAgICAgdmFsdWUgPSBzdHJpbmdUcmltKGF0dHIudmFsdWUpO1xuICAgICAgbGNOYW1lID0gc3RyaW5nVG9Mb3dlckNhc2UobmFtZSk7XG5cbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICAgIGhvb2tFdmVudC5hdHRyTmFtZSA9IGxjTmFtZTtcbiAgICAgIGhvb2tFdmVudC5hdHRyVmFsdWUgPSB2YWx1ZTtcbiAgICAgIGhvb2tFdmVudC5rZWVwQXR0ciA9IHRydWU7XG4gICAgICBob29rRXZlbnQuZm9yY2VLZWVwQXR0ciA9IHVuZGVmaW5lZDsgLy8gQWxsb3dzIGRldmVsb3BlcnMgdG8gc2VlIHRoaXMgaXMgYSBwcm9wZXJ0eSB0aGV5IGNhbiBzZXRcbiAgICAgIF9leGVjdXRlSG9vaygndXBvblNhbml0aXplQXR0cmlidXRlJywgY3VycmVudE5vZGUsIGhvb2tFdmVudCk7XG4gICAgICB2YWx1ZSA9IGhvb2tFdmVudC5hdHRyVmFsdWU7XG4gICAgICAvKiBEaWQgdGhlIGhvb2tzIGFwcHJvdmUgb2YgdGhlIGF0dHJpYnV0ZT8gKi9cbiAgICAgIGlmIChob29rRXZlbnQuZm9yY2VLZWVwQXR0cikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLyogUmVtb3ZlIGF0dHJpYnV0ZSAqL1xuICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7XG5cbiAgICAgIC8qIERpZCB0aGUgaG9va3MgYXBwcm92ZSBvZiB0aGUgYXR0cmlidXRlPyAqL1xuICAgICAgaWYgKCFob29rRXZlbnQua2VlcEF0dHIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8qIFdvcmsgYXJvdW5kIGEgc2VjdXJpdHkgaXNzdWUgaW4galF1ZXJ5IDMuMCAqL1xuICAgICAgaWYgKHJlZ0V4cFRlc3QoL1xcLz4vaSwgdmFsdWUpKSB7XG4gICAgICAgIF9yZW1vdmVBdHRyaWJ1dGUobmFtZSwgY3VycmVudE5vZGUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLyogU2FuaXRpemUgYXR0cmlidXRlIGNvbnRlbnQgdG8gYmUgdGVtcGxhdGUtc2FmZSAqL1xuICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUykge1xuICAgICAgICB2YWx1ZSA9IHN0cmluZ1JlcGxhY2UodmFsdWUsIE1VU1RBQ0hFX0VYUFIsICcgJyk7XG4gICAgICAgIHZhbHVlID0gc3RyaW5nUmVwbGFjZSh2YWx1ZSwgRVJCX0VYUFIsICcgJyk7XG4gICAgICB9XG5cbiAgICAgIC8qIElzIGB2YWx1ZWAgdmFsaWQgZm9yIHRoaXMgYXR0cmlidXRlPyAqL1xuICAgICAgY29uc3QgbGNUYWcgPSBjdXJyZW50Tm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKCFfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8qIEhhbmRsZSBpbnZhbGlkIGRhdGEtKiBhdHRyaWJ1dGUgc2V0IGJ5IHRyeS1jYXRjaGluZyBpdCAqL1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKG5hbWVzcGFjZVVSSSkge1xuICAgICAgICAgIGN1cnJlbnROb2RlLnNldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgbmFtZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qIEZhbGxiYWNrIHRvIHNldEF0dHJpYnV0ZSgpIGZvciBicm93c2VyLXVucmVjb2duaXplZCBuYW1lc3BhY2VzIGUuZy4gXCJ4LXNjaGVtYVwiLiAqL1xuICAgICAgICAgIGN1cnJlbnROb2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBhcnJheVBvcChET01QdXJpZnkucmVtb3ZlZCk7XG4gICAgICB9IGNhdGNoIChfKSB7fVxuICAgIH1cblxuICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVBdHRyaWJ1dGVzJywgY3VycmVudE5vZGUsIG51bGwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBfc2FuaXRpemVTaGFkb3dET01cbiAgICpcbiAgICogQHBhcmFtICB7RG9jdW1lbnRGcmFnbWVudH0gZnJhZ21lbnQgdG8gaXRlcmF0ZSBvdmVyIHJlY3Vyc2l2ZWx5XG4gICAqL1xuICBjb25zdCBfc2FuaXRpemVTaGFkb3dET00gPSBmdW5jdGlvbiAoZnJhZ21lbnQpIHtcbiAgICBsZXQgc2hhZG93Tm9kZTtcbiAgICBjb25zdCBzaGFkb3dJdGVyYXRvciA9IF9jcmVhdGVJdGVyYXRvcihmcmFnbWVudCk7XG5cbiAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgX2V4ZWN1dGVIb29rKCdiZWZvcmVTYW5pdGl6ZVNoYWRvd0RPTScsIGZyYWdtZW50LCBudWxsKTtcblxuICAgIHdoaWxlICgoc2hhZG93Tm9kZSA9IHNoYWRvd0l0ZXJhdG9yLm5leHROb2RlKCkpKSB7XG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG4gICAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZVNoYWRvd05vZGUnLCBzaGFkb3dOb2RlLCBudWxsKTtcblxuICAgICAgLyogU2FuaXRpemUgdGFncyBhbmQgZWxlbWVudHMgKi9cbiAgICAgIGlmIChfc2FuaXRpemVFbGVtZW50cyhzaGFkb3dOb2RlKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLyogRGVlcCBzaGFkb3cgRE9NIGRldGVjdGVkICovXG4gICAgICBpZiAoc2hhZG93Tm9kZS5jb250ZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgICAgICBfc2FuaXRpemVTaGFkb3dET00oc2hhZG93Tm9kZS5jb250ZW50KTtcbiAgICAgIH1cblxuICAgICAgLyogQ2hlY2sgYXR0cmlidXRlcywgc2FuaXRpemUgaWYgbmVjZXNzYXJ5ICovXG4gICAgICBfc2FuaXRpemVBdHRyaWJ1dGVzKHNoYWRvd05vZGUpO1xuICAgIH1cblxuICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cbiAgICBfZXhlY3V0ZUhvb2soJ2FmdGVyU2FuaXRpemVTaGFkb3dET00nLCBmcmFnbWVudCwgbnVsbCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNhbml0aXplXG4gICAqIFB1YmxpYyBtZXRob2QgcHJvdmlkaW5nIGNvcmUgc2FuaXRhdGlvbiBmdW5jdGlvbmFsaXR5XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE5vZGV9IGRpcnR5IHN0cmluZyBvciBET00gbm9kZVxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gIERPTVB1cmlmeS5zYW5pdGl6ZSA9IGZ1bmN0aW9uIChkaXJ0eSwgY2ZnKSB7XG4gICAgbGV0IGJvZHk7XG4gICAgbGV0IGltcG9ydGVkTm9kZTtcbiAgICBsZXQgY3VycmVudE5vZGU7XG4gICAgbGV0IG9sZE5vZGU7XG4gICAgbGV0IHJldHVybk5vZGU7XG4gICAgLyogTWFrZSBzdXJlIHdlIGhhdmUgYSBzdHJpbmcgdG8gc2FuaXRpemUuXG4gICAgICBETyBOT1QgcmV0dXJuIGVhcmx5LCBhcyB0aGlzIHdpbGwgcmV0dXJuIHRoZSB3cm9uZyB0eXBlIGlmXG4gICAgICB0aGUgdXNlciBoYXMgcmVxdWVzdGVkIGEgRE9NIG9iamVjdCByYXRoZXIgdGhhbiBhIHN0cmluZyAqL1xuICAgIGlmICghZGlydHkpIHtcbiAgICAgIGRpcnR5ID0gJzwhLS0+JztcbiAgICB9XG5cbiAgICAvKiBTdHJpbmdpZnksIGluIGNhc2UgZGlydHkgaXMgYW4gb2JqZWN0ICovXG4gICAgaWYgKHR5cGVvZiBkaXJ0eSAhPT0gJ3N0cmluZycgJiYgIV9pc05vZGUoZGlydHkpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVnYXRlZC1jb25kaXRpb25cbiAgICAgIGlmICh0eXBlb2YgZGlydHkudG9TdHJpbmcgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgdHlwZUVycm9yQ3JlYXRlKCd0b1N0cmluZyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlydHkgPSBkaXJ0eS50b1N0cmluZygpO1xuICAgICAgICBpZiAodHlwZW9mIGRpcnR5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgnZGlydHkgaXMgbm90IGEgc3RyaW5nLCBhYm9ydGluZycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogQ2hlY2sgd2UgY2FuIHJ1bi4gT3RoZXJ3aXNlIGZhbGwgYmFjayBvciBpZ25vcmUgKi9cbiAgICBpZiAoIURPTVB1cmlmeS5pc1N1cHBvcnRlZCkge1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2Ygd2luZG93LnRvU3RhdGljSFRNTCA9PT0gJ29iamVjdCcgfHxcbiAgICAgICAgdHlwZW9mIHdpbmRvdy50b1N0YXRpY0hUTUwgPT09ICdmdW5jdGlvbidcbiAgICAgICkge1xuICAgICAgICBpZiAodHlwZW9mIGRpcnR5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiB3aW5kb3cudG9TdGF0aWNIVE1MKGRpcnR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfaXNOb2RlKGRpcnR5KSkge1xuICAgICAgICAgIHJldHVybiB3aW5kb3cudG9TdGF0aWNIVE1MKGRpcnR5Lm91dGVySFRNTCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcnR5O1xuICAgIH1cblxuICAgIC8qIEFzc2lnbiBjb25maWcgdmFycyAqL1xuICAgIGlmICghU0VUX0NPTkZJRykge1xuICAgICAgX3BhcnNlQ29uZmlnKGNmZyk7XG4gICAgfVxuXG4gICAgLyogQ2xlYW4gdXAgcmVtb3ZlZCBlbGVtZW50cyAqL1xuICAgIERPTVB1cmlmeS5yZW1vdmVkID0gW107XG5cbiAgICAvKiBDaGVjayBpZiBkaXJ0eSBpcyBjb3JyZWN0bHkgdHlwZWQgZm9yIElOX1BMQUNFICovXG4gICAgaWYgKHR5cGVvZiBkaXJ0eSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIElOX1BMQUNFID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKElOX1BMQUNFKSB7XG4gICAgICAvKiBObyBzcGVjaWFsIGhhbmRsaW5nIG5lY2Vzc2FyeSBmb3IgaW4tcGxhY2Ugc2FuaXRpemF0aW9uICovXG4gICAgfSBlbHNlIGlmIChkaXJ0eSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIC8qIElmIGRpcnR5IGlzIGEgRE9NIGVsZW1lbnQsIGFwcGVuZCB0byBhbiBlbXB0eSBkb2N1bWVudCB0byBhdm9pZFxuICAgICAgICAgZWxlbWVudHMgYmVpbmcgc3RyaXBwZWQgYnkgdGhlIHBhcnNlciAqL1xuICAgICAgYm9keSA9IF9pbml0RG9jdW1lbnQoJzwhLS0tLT4nKTtcbiAgICAgIGltcG9ydGVkTm9kZSA9IGJvZHkub3duZXJEb2N1bWVudC5pbXBvcnROb2RlKGRpcnR5LCB0cnVlKTtcbiAgICAgIGlmIChpbXBvcnRlZE5vZGUubm9kZVR5cGUgPT09IDEgJiYgaW1wb3J0ZWROb2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgLyogTm9kZSBpcyBhbHJlYWR5IGEgYm9keSwgdXNlIGFzIGlzICovXG4gICAgICAgIGJvZHkgPSBpbXBvcnRlZE5vZGU7XG4gICAgICB9IGVsc2UgaWYgKGltcG9ydGVkTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICAgIGJvZHkgPSBpbXBvcnRlZE5vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItbm9kZS1hcHBlbmRcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChpbXBvcnRlZE5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvKiBFeGl0IGRpcmVjdGx5IGlmIHdlIGhhdmUgbm90aGluZyB0byBkbyAqL1xuICAgICAgaWYgKFxuICAgICAgICAhUkVUVVJOX0RPTSAmJlxuICAgICAgICAhU0FGRV9GT1JfVEVNUExBVEVTICYmXG4gICAgICAgICFXSE9MRV9ET0NVTUVOVCAmJlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItaW5jbHVkZXNcbiAgICAgICAgZGlydHkuaW5kZXhPZignPCcpID09PSAtMVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVzdGVkVHlwZXNQb2xpY3kgJiYgUkVUVVJOX1RSVVNURURfVFlQRVxuICAgICAgICAgID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoZGlydHkpXG4gICAgICAgICAgOiBkaXJ0eTtcbiAgICAgIH1cblxuICAgICAgLyogSW5pdGlhbGl6ZSB0aGUgZG9jdW1lbnQgdG8gd29yayBvbiAqL1xuICAgICAgYm9keSA9IF9pbml0RG9jdW1lbnQoZGlydHkpO1xuXG4gICAgICAvKiBDaGVjayB3ZSBoYXZlIGEgRE9NIG5vZGUgZnJvbSB0aGUgZGF0YSAqL1xuICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHJldHVybiBSRVRVUk5fRE9NID8gbnVsbCA6IGVtcHR5SFRNTDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBSZW1vdmUgZmlyc3QgZWxlbWVudCBub2RlIChvdXJzKSBpZiBGT1JDRV9CT0RZIGlzIHNldCAqL1xuICAgIGlmIChib2R5ICYmIEZPUkNFX0JPRFkpIHtcbiAgICAgIF9mb3JjZVJlbW92ZShib2R5LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIC8qIEdldCBub2RlIGl0ZXJhdG9yICovXG4gICAgY29uc3Qgbm9kZUl0ZXJhdG9yID0gX2NyZWF0ZUl0ZXJhdG9yKElOX1BMQUNFID8gZGlydHkgOiBib2R5KTtcblxuICAgIC8qIE5vdyBzdGFydCBpdGVyYXRpbmcgb3ZlciB0aGUgY3JlYXRlZCBkb2N1bWVudCAqL1xuICAgIHdoaWxlICgoY3VycmVudE5vZGUgPSBub2RlSXRlcmF0b3IubmV4dE5vZGUoKSkpIHtcbiAgICAgIC8qIEZpeCBJRSdzIHN0cmFuZ2UgYmVoYXZpb3Igd2l0aCBtYW5pcHVsYXRlZCB0ZXh0Tm9kZXMgIzg5ICovXG4gICAgICBpZiAoY3VycmVudE5vZGUubm9kZVR5cGUgPT09IDMgJiYgY3VycmVudE5vZGUgPT09IG9sZE5vZGUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8qIFNhbml0aXplIHRhZ3MgYW5kIGVsZW1lbnRzICovXG4gICAgICBpZiAoX3Nhbml0aXplRWxlbWVudHMoY3VycmVudE5vZGUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBTaGFkb3cgRE9NIGRldGVjdGVkLCBzYW5pdGl6ZSBpdCAqL1xuICAgICAgaWYgKGN1cnJlbnROb2RlLmNvbnRlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgIF9zYW5pdGl6ZVNoYWRvd0RPTShjdXJyZW50Tm9kZS5jb250ZW50KTtcbiAgICAgIH1cblxuICAgICAgLyogQ2hlY2sgYXR0cmlidXRlcywgc2FuaXRpemUgaWYgbmVjZXNzYXJ5ICovXG4gICAgICBfc2FuaXRpemVBdHRyaWJ1dGVzKGN1cnJlbnROb2RlKTtcblxuICAgICAgb2xkTm9kZSA9IGN1cnJlbnROb2RlO1xuICAgIH1cblxuICAgIG9sZE5vZGUgPSBudWxsO1xuXG4gICAgLyogSWYgd2Ugc2FuaXRpemVkIGBkaXJ0eWAgaW4tcGxhY2UsIHJldHVybiBpdC4gKi9cbiAgICBpZiAoSU5fUExBQ0UpIHtcbiAgICAgIHJldHVybiBkaXJ0eTtcbiAgICB9XG5cbiAgICAvKiBSZXR1cm4gc2FuaXRpemVkIHN0cmluZyBvciBET00gKi9cbiAgICBpZiAoUkVUVVJOX0RPTSkge1xuICAgICAgaWYgKFJFVFVSTl9ET01fRlJBR01FTlQpIHtcbiAgICAgICAgcmV0dXJuTm9kZSA9IGNyZWF0ZURvY3VtZW50RnJhZ21lbnQuY2FsbChib2R5Lm93bmVyRG9jdW1lbnQpO1xuXG4gICAgICAgIHdoaWxlIChib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItbm9kZS1hcHBlbmRcbiAgICAgICAgICByZXR1cm5Ob2RlLmFwcGVuZENoaWxkKGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybk5vZGUgPSBib2R5O1xuICAgICAgfVxuXG4gICAgICBpZiAoUkVUVVJOX0RPTV9JTVBPUlQpIHtcbiAgICAgICAgLypcbiAgICAgICAgICBBZG9wdE5vZGUoKSBpcyBub3QgdXNlZCBiZWNhdXNlIGludGVybmFsIHN0YXRlIGlzIG5vdCByZXNldFxuICAgICAgICAgIChlLmcuIHRoZSBwYXN0IG5hbWVzIG1hcCBvZiBhIEhUTUxGb3JtRWxlbWVudCksIHRoaXMgaXMgc2FmZVxuICAgICAgICAgIGluIHRoZW9yeSBidXQgd2Ugd291bGQgcmF0aGVyIG5vdCByaXNrIGFub3RoZXIgYXR0YWNrIHZlY3Rvci5cbiAgICAgICAgICBUaGUgc3RhdGUgdGhhdCBpcyBjbG9uZWQgYnkgaW1wb3J0Tm9kZSgpIGlzIGV4cGxpY2l0bHkgZGVmaW5lZFxuICAgICAgICAgIGJ5IHRoZSBzcGVjcy5cbiAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuTm9kZSA9IGltcG9ydE5vZGUuY2FsbChvcmlnaW5hbERvY3VtZW50LCByZXR1cm5Ob2RlLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldHVybk5vZGU7XG4gICAgfVxuXG4gICAgbGV0IHNlcmlhbGl6ZWRIVE1MID0gV0hPTEVfRE9DVU1FTlQgPyBib2R5Lm91dGVySFRNTCA6IGJvZHkuaW5uZXJIVE1MO1xuXG4gICAgLyogU2FuaXRpemUgZmluYWwgc3RyaW5nIHRlbXBsYXRlLXNhZmUgKi9cbiAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICBzZXJpYWxpemVkSFRNTCA9IHN0cmluZ1JlcGxhY2Uoc2VyaWFsaXplZEhUTUwsIE1VU1RBQ0hFX0VYUFIsICcgJyk7XG4gICAgICBzZXJpYWxpemVkSFRNTCA9IHN0cmluZ1JlcGxhY2Uoc2VyaWFsaXplZEhUTUwsIEVSQl9FWFBSLCAnICcpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVzdGVkVHlwZXNQb2xpY3kgJiYgUkVUVVJOX1RSVVNURURfVFlQRVxuICAgICAgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChzZXJpYWxpemVkSFRNTClcbiAgICAgIDogc2VyaWFsaXplZEhUTUw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gc2V0IHRoZSBjb25maWd1cmF0aW9uIG9uY2VcbiAgICogc2V0Q29uZmlnXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICovXG4gIERPTVB1cmlmeS5zZXRDb25maWcgPSBmdW5jdGlvbiAoY2ZnKSB7XG4gICAgX3BhcnNlQ29uZmlnKGNmZyk7XG4gICAgU0VUX0NPTkZJRyA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIHRoZSBjb25maWd1cmF0aW9uXG4gICAqIGNsZWFyQ29uZmlnXG4gICAqXG4gICAqL1xuICBET01QdXJpZnkuY2xlYXJDb25maWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgQ09ORklHID0gbnVsbDtcbiAgICBTRVRfQ09ORklHID0gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gY2hlY2sgaWYgYW4gYXR0cmlidXRlIHZhbHVlIGlzIHZhbGlkLlxuICAgKiBVc2VzIGxhc3Qgc2V0IGNvbmZpZywgaWYgYW55LiBPdGhlcndpc2UsIHVzZXMgY29uZmlnIGRlZmF1bHRzLlxuICAgKiBpc1ZhbGlkQXR0cmlidXRlXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdGFnIFRhZyBuYW1lIG9mIGNvbnRhaW5pbmcgZWxlbWVudC5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBhdHRyIEF0dHJpYnV0ZSBuYW1lLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlIEF0dHJpYnV0ZSB2YWx1ZS5cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQuIE90aGVyd2lzZSwgcmV0dXJucyBmYWxzZS5cbiAgICovXG4gIERPTVB1cmlmeS5pc1ZhbGlkQXR0cmlidXRlID0gZnVuY3Rpb24gKHRhZywgYXR0ciwgdmFsdWUpIHtcbiAgICAvKiBJbml0aWFsaXplIHNoYXJlZCBjb25maWcgdmFycyBpZiBuZWNlc3NhcnkuICovXG4gICAgaWYgKCFDT05GSUcpIHtcbiAgICAgIF9wYXJzZUNvbmZpZyh7fSk7XG4gICAgfVxuXG4gICAgY29uc3QgbGNUYWcgPSBzdHJpbmdUb0xvd2VyQ2FzZSh0YWcpO1xuICAgIGNvbnN0IGxjTmFtZSA9IHN0cmluZ1RvTG93ZXJDYXNlKGF0dHIpO1xuICAgIHJldHVybiBfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZEhvb2tcbiAgICogUHVibGljIG1ldGhvZCB0byBhZGQgRE9NUHVyaWZ5IGhvb2tzXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9vayB0byBhZGRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va0Z1bmN0aW9uIGZ1bmN0aW9uIHRvIGV4ZWN1dGVcbiAgICovXG4gIERPTVB1cmlmeS5hZGRIb29rID0gZnVuY3Rpb24gKGVudHJ5UG9pbnQsIGhvb2tGdW5jdGlvbikge1xuICAgIGlmICh0eXBlb2YgaG9va0Z1bmN0aW9uICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaG9va3NbZW50cnlQb2ludF0gPSBob29rc1tlbnRyeVBvaW50XSB8fCBbXTtcbiAgICBhcnJheVB1c2goaG9va3NbZW50cnlQb2ludF0sIGhvb2tGdW5jdGlvbik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZUhvb2tcbiAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYSBET01QdXJpZnkgaG9vayBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcbiAgICogKHBvcHMgaXQgZnJvbSB0aGUgc3RhY2sgb2YgaG9va3MgaWYgbW9yZSBhcmUgcHJlc2VudClcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rIHRvIHJlbW92ZVxuICAgKi9cbiAgRE9NUHVyaWZ5LnJlbW92ZUhvb2sgPSBmdW5jdGlvbiAoZW50cnlQb2ludCkge1xuICAgIGlmIChob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgYXJyYXlQb3AoaG9va3NbZW50cnlQb2ludF0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlSG9va3NcbiAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rcyBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBlbnRyeVBvaW50IGVudHJ5IHBvaW50IGZvciB0aGUgaG9va3MgdG8gcmVtb3ZlXG4gICAqL1xuICBET01QdXJpZnkucmVtb3ZlSG9va3MgPSBmdW5jdGlvbiAoZW50cnlQb2ludCkge1xuICAgIGlmIChob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgaG9va3NbZW50cnlQb2ludF0gPSBbXTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZUFsbEhvb2tzXG4gICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGFsbCBET01QdXJpZnkgaG9va3NcbiAgICpcbiAgICovXG4gIERPTVB1cmlmeS5yZW1vdmVBbGxIb29rcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBob29rcyA9IHt9O1xuICB9O1xuXG4gIHJldHVybiBET01QdXJpZnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURPTVB1cmlmeSgpO1xuIiwiLyogd2ViZXh0ZW5zaW9uLXBvbHlmaWxsIC0gdjAuOC4wIC0gVHVlIEFwciAyMCAyMDIxIDExOjI3OjM4ICovXG4vKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG4vKiB2aW06IHNldCBzdHM9MiBzdz0yIGV0IHR3PTgwOiAqL1xuLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblwidXNlIHN0cmljdFwiO1xuXG5pZiAodHlwZW9mIGJyb3dzZXIgPT09IFwidW5kZWZpbmVkXCIgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKGJyb3dzZXIpICE9PSBPYmplY3QucHJvdG90eXBlKSB7XG4gIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiO1xuICBjb25zdCBTRU5EX1JFU1BPTlNFX0RFUFJFQ0FUSU9OX1dBUk5JTkcgPSBcIlJldHVybmluZyBhIFByb21pc2UgaXMgdGhlIHByZWZlcnJlZCB3YXkgdG8gc2VuZCBhIHJlcGx5IGZyb20gYW4gb25NZXNzYWdlL29uTWVzc2FnZUV4dGVybmFsIGxpc3RlbmVyLCBhcyB0aGUgc2VuZFJlc3BvbnNlIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBzcGVjcyAoU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvTW96aWxsYS9BZGQtb25zL1dlYkV4dGVuc2lvbnMvQVBJL3J1bnRpbWUvb25NZXNzYWdlKVwiO1xuXG4gIC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxuICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgLy8gY29udGVudHMgb2YgYSBmdW5jdGlvbiB1bnRpbCB0aGUgZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHNpbmNlIGl0IHdpbGxcbiAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxuICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cbiAgY29uc3Qgd3JhcEFQSXMgPSBleHRlbnNpb25BUElzID0+IHtcbiAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgLy8gYXQgYnVpbGQgdGltZSBieSByZXBsYWNpbmcgdGhlIGZvbGxvd2luZyBcImluY2x1ZGVcIiB3aXRoIHRoZSBjb250ZW50IG9mIHRoZVxuICAgIC8vIEpTT04gZmlsZS5cbiAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgIFwiYWxhcm1zXCI6IHtcbiAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJib29rbWFya3NcIjoge1xuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q2hpbGRyZW5cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UmVjZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJyb3dzZXJBY3Rpb25cIjoge1xuICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5Qb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJyb3dzaW5nRGF0YVwiOiB7XG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNvb2tpZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRG93bmxvYWRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUhpc3RvcnlcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlTG9jYWxTdG9yYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVQbHVnaW5EYXRhXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb21tYW5kc1wiOiB7XG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb250ZXh0TWVudXNcIjoge1xuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkZXZ0b29sc1wiOiB7XG4gICAgICAgIFwiaW5zcGVjdGVkV2luZG93XCI6IHtcbiAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMixcbiAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMyxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlU2lkZWJhclBhbmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRvd25sb2Fkc1wiOiB7XG4gICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRvd25sb2FkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImVyYXNlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUZpbGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzdW1lXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZXh0ZW5zaW9uXCI6IHtcbiAgICAgICAgXCJpc0FsbG93ZWRGaWxlU2NoZW1lQWNjZXNzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaGlzdG9yeVwiOiB7XG4gICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZUFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVSYW5nZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VmlzaXRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaTE4blwiOiB7XG4gICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpZGVudGl0eVwiOiB7XG4gICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImlkbGVcIjoge1xuICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm1hbmFnZW1lbnRcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0U2VsZlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInVuaW5zdGFsbFNlbGZcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGVybWlzc2lvbkxldmVsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGFnZUFjdGlvblwiOiB7XG4gICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlkZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwZXJtaXNzaW9uc1wiOiB7XG4gICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQbGF0Zm9ybUluZm9cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwib3Blbk9wdGlvbnNQYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTmF0aXZlTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlc3Npb25zXCI6IHtcbiAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFJlY2VudGx5Q2xvc2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlc3RvcmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICBcImxvY2FsXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN5bmNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRhYnNcIjoge1xuICAgICAgICBcImNhcHR1cmVWaXNpYmxlVGFiXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXNjYXJkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImR1cGxpY2F0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdvQmFja1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImluc2VydENTU1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInF1ZXJ5XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbG9hZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQ1NTXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidG9wU2l0ZXNcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2ViTmF2aWdhdGlvblwiOiB7XG4gICAgICAgIFwiZ2V0QWxsRnJhbWVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3ZWJSZXF1ZXN0XCI6IHtcbiAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3aW5kb3dzXCI6IHtcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldExhc3RGb2N1c2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICogbm90IGV4aXN0IHdoZW4gYWNjZXNzZWQsIGJ1dCBiZWhhdmVzIGV4YWN0bHkgYXMgYW4gb3JkaW5hcnkgV2Vha01hcFxuICAgICAqIG90aGVyd2lzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUl0ZW1cbiAgICAgKiAgICAgICAgQSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpbiBvcmRlciB0byBjcmVhdGUgdGhlIHZhbHVlIGZvciBhbnlcbiAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVzLCBhcyBpdHMgb25seSBhcmd1bWVudCwgdGhlIGtleSBiZWluZyBjcmVhdGVkLlxuICAgICAqL1xuICAgIGNsYXNzIERlZmF1bHRXZWFrTWFwIGV4dGVuZHMgV2Vha01hcCB7XG4gICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICBzdXBlcihpdGVtcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XG4gICAgICB9XG5cbiAgICAgIGdldChrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAqL1xuICAgIGNvbnN0IGlzVGhlbmFibGUgPSB2YWx1ZSA9PiB7XG4gICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBjYWxsZWQsIHdpbGwgcmVzb2x2ZSBvciByZWplY3RcbiAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAqXG4gICAgICogLSBJZiwgd2hlbiBjYWxsZWQsIGBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JgIGNvbnRhaW5zIGEgbm9uLW51bGwgb2JqZWN0LFxuICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAqIC0gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGV4YWN0bHkgb25lIGFyZ3VtZW50LCB0aGUgcHJvbWlzZSBpc1xuICAgICAqICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cbiAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICogICBmdW5jdGlvbidzIGFyZ3VtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIGFuZCByZWplY3Rpb24gZnVuY3Rpb25zIG9mIGFcbiAgICAgKiAgICAgICAgcHJvbWlzZS5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZXNvbHV0aW9uIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVqZWN0XG4gICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2ggaGFzIGNyZWF0ZWQgdGhlIGNhbGxiYWNrLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuICguLi5jYWxsYmFja0FyZ3MpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgfHxcbiAgICAgICAgICAgICAgICAgICAoY2FsbGJhY2tBcmdzLmxlbmd0aCA8PSAxICYmIG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnICE9PSBmYWxzZSkpIHtcbiAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gKG51bUFyZ3MpID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgKiAgICAgICAgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtdXN0IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heEFyZ3NcbiAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24ob2JqZWN0LCAuLi4qKX1cbiAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBhc3luY0Z1bmN0aW9uV3JhcHBlcih0YXJnZXQsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBpZiAobWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIFRoaXMgQVBJIG1ldGhvZCBoYXMgY3VycmVudGx5IG5vIGNhbGxiYWNrIG9uIENocm9tZSwgYnV0IGl0IHJldHVybiBhIHByb21pc2Ugb24gRmlyZWZveCxcbiAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAvLyB0byBub3QgcGFzc2luZyB0aGUgY2FsbGJhY2sgaWYgdGhlIGZpcnN0IGNhbGwgZmFpbHMuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtyZXNvbHZlLCByZWplY3R9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoY2JFcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bmFtZX0gQVBJIG1ldGhvZCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG5cbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuXG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgQVBJIG1ldGhvZCBtZXRhZGF0YSwgc28gdGhhdCB0aGUgbmV4dCBBUEkgY2FsbHMgd2lsbCBub3QgdHJ5IHRvXG4gICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cbiAgICAgICAgICAgICAgbWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEubm9DYWxsYmFjaykge1xuICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtyZXNvbHZlLCByZWplY3R9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcyBhbiBleGlzdGluZyBtZXRob2Qgb2YgdGhlIHRhcmdldCBvYmplY3QsIHNvIHRoYXQgY2FsbHMgdG8gaXQgYXJlXG4gICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAqIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdGhlIG9yaWdpbmFsIGB0YXJnZXRgIG9iamVjdCwgZm9sbG93ZWQgYnkgZWFjaCBvZlxuICAgICAqIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICogICAgICAgIFRoZSBvcmlnaW5hbCB0YXJnZXQgb2JqZWN0IHRoYXQgdGhlIHdyYXBwZWQgbWV0aG9kIGJlbG9uZ3MgdG8uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICogICAgICAgIFRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC4gVGhpcyBpcyB1c2VkIGFzIHRoZSB0YXJnZXQgb2YgdGhlIFByb3h5XG4gICAgICogICAgICAgIG9iamVjdCB3aGljaCBpcyBjcmVhdGVkIHRvIHdyYXAgdGhlIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICogICAgICAgIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiBhIGRpcmVjdCBpbnZvY2F0aW9uXG4gICAgICogICAgICAgIG9mIHRoZSB3cmFwcGVkIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm94eTxmdW5jdGlvbj59XG4gICAgICogICAgICAgIEEgUHJveHkgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gbWV0aG9kLCB3aGljaCBpbnZva2VzIHRoZSBnaXZlbiB3cmFwcGVyXG4gICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICovXG4gICAgY29uc3Qgd3JhcE1ldGhvZCA9ICh0YXJnZXQsIG1ldGhvZCwgd3JhcHBlcikgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm94eShtZXRob2QsIHtcbiAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2FsbCh0aGlzT2JqLCB0YXJnZXQsIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIC8qKlxuICAgICAqIFdyYXBzIGFuIG9iamVjdCBpbiBhIFByb3h5IHdoaWNoIGludGVyY2VwdHMgYW5kIHdyYXBzIGNlcnRhaW4gbWV0aG9kc1xuICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW3dyYXBwZXJzID0ge31dXG4gICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxuICAgICAqICAgICAgICBtZXRob2QgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlLiBUaGVzZVxuICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YSA9IHt9XVxuICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxuICAgICAqICAgICAgICB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUgd2hpY2ggaGFzIGEgY29ycmVzcG9uZGluZyBtZXRhZGF0YSBvYmplY3RcbiAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxuICAgICAqICAgICAgICB7QHNlZSB3cmFwQXN5bmNGdW5jdGlvbn1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgfHwgcHJvcCBpbiBjYWNoZTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQocHJveHlUYXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIShwcm9wIGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BdO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC4gQ2hlY2sgaWYgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgLy8gYW55IHdyYXBwaW5nLlxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXJzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IHdyYXBBc3luY0Z1bmN0aW9uKHByb3AsIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2QgdGhhdCB3ZSBkb24ndCBrbm93IG9yIGNhcmUgYWJvdXQuIFJldHVybiB0aGVcbiAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8XG4gICAgICAgICAgICAgICAgICAgICAgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgLy8gb2YuIENyZWF0ZSBhIHN1Yi1vYmplY3Qgd3JhcHBlciBmb3IgaXQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY2hpbGRcbiAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIFwiKlwiKSkge1xuICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCB7XG4gICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQocHJveHlUYXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVmaW5lUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3AsIGRlc2MpIHtcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICAvLyBQZXIgY29udHJhY3Qgb2YgdGhlIFByb3h5IEFQSSwgdGhlIFwiZ2V0XCIgcHJveHkgaGFuZGxlciBtdXN0IHJldHVybiB0aGVcbiAgICAgIC8vIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSB0YXJnZXQgaWYgdGhhdCB2YWx1ZSBpcyBkZWNsYXJlZCByZWFkLW9ubHkgYW5kXG4gICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgIC8vIHByb3RvdHlwZSBzZXQgdG8gYHRhcmdldGAgaW5zdGVhZCBvZiB1c2luZyBgdGFyZ2V0YCBkaXJlY3RseS5cbiAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW5ub3QgcmV0dXJuIGEgY3VzdG9tIG9iamVjdCBmb3IgQVBJcyB0aGF0XG4gICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBwcm94eSBoYW5kbGVycyB0aGVtc2VsdmVzIHdpbGwgc3RpbGwgdXNlIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YFxuICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgIC8vIGRlcmVmZXJlbmNlZCB2aWEgdGhlIG9yaWdpbmFsIHRhcmdldHMuXG4gICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXG4gICAgICpcbiAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXG4gICAgICogcmV0cmlldmUgdGhlIG9yaWdpbmFsIHdyYXBwZXIsIHNvIHRoYXQgIGF0dGVtcHRzIHRvIHJlbW92ZSBhXG4gICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtEZWZhdWx0V2Vha01hcDxmdW5jdGlvbiwgZnVuY3Rpb24+fSB3cmFwcGVyTWFwXG4gICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcbiAgICAgKiAgICAgICAgYW4gZXhpc3Rpbmcgb25lIHdoZW4gaXQgZG9lcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xuICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcbiAgICAgIH0sXG5cbiAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5oYXNMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gb25SZXF1ZXN0RmluaXNoZWQgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCB3aWxsIHJldHVybiBhXG4gICAgICAgKiBgZ2V0Q29udGVudCgpYCBwcm9wZXJ0eSB3aGljaCByZXR1cm5zIGEgYFByb21pc2VgIHJhdGhlciB0aGFuIHVzaW5nIGFcbiAgICAgICAqIGNhbGxiYWNrIEFQSS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxXG4gICAgICAgKiAgICAgICAgVGhlIEhBUiBlbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBvblJlcXVlc3RGaW5pc2hlZChyZXEpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZFJlcSA9IHdyYXBPYmplY3QocmVxLCB7fSAvKiB3cmFwcGVycyAqLywge1xuICAgICAgICAgIGdldENvbnRlbnQ6IHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDAsXG4gICAgICAgICAgICBtYXhBcmdzOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0ZW5lcih3cmFwcGVkUmVxKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvLyBLZWVwIHRyYWNrIGlmIHRoZSBkZXByZWNhdGlvbiB3YXJuaW5nIGhhcyBiZWVuIGxvZ2dlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGxldCBsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcgPSBmYWxzZTtcblxuICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXG4gICAgICAgKiBpdHMgcmV0dXJuIHZhbHVlLCByYXRoZXIgdGhhbiBieSByZXR1cm5pbmcgYSBzZW50aW5lbCB2YWx1ZSBhbmQgY2FsbGluZyBhXG4gICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gc2VuZGVyXG4gICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXG4gICAgICAgKiAgICAgICAgQSBjYWxsYmFjayB3aGljaCwgd2hlbiBjYWxsZWQgd2l0aCBhbiBhcmJpdHJhcnkgYXJndW1lbnQsIHNlbmRzXG4gICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgKiAgICAgICAgVHJ1ZSBpZiB0aGUgd3JhcHBlZCBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHdoaWNoIHdpbGwgbGF0ZXJcbiAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IGRpZENhbGxTZW5kUmVzcG9uc2UgPSBmYWxzZTtcblxuICAgICAgICBsZXQgd3JhcHBlZFNlbmRSZXNwb25zZTtcbiAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICB3cmFwcGVkU2VuZFJlc3BvbnNlID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmICghbG9nZ2VkU2VuZFJlc3BvbnNlRGVwcmVjYXRpb25XYXJuaW5nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihTRU5EX1JFU1BPTlNFX0RFUFJFQ0FUSU9OX1dBUk5JTkcsIG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICAgICAgICAgICAgbG9nZ2VkU2VuZFJlc3BvbnNlRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpZENhbGxTZW5kUmVzcG9uc2UgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNSZXN1bHRUaGVuYWJsZSA9IHJlc3VsdCAhPT0gdHJ1ZSAmJiBpc1RoZW5hYmxlKHJlc3VsdCk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIGRpZG4ndCByZXR1cm5lZCB0cnVlIG9yIGEgUHJvbWlzZSwgb3IgY2FsbGVkXG4gICAgICAgIC8vIHdyYXBwZWRTZW5kUmVzcG9uc2Ugc3luY2hyb25vdXNseSwgd2UgY2FuIGV4aXQgZWFybGllclxuICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG4gICAgICAgIGlmIChyZXN1bHQgIT09IHRydWUgJiYgIWlzUmVzdWx0VGhlbmFibGUgJiYgIWRpZENhbGxTZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXG4gICAgICAgIC8vIGFuZCBhbiBlcnJvciBpZiB0aGUgcHJvbWlzZSByZWplY3RzIChhIHdyYXBwZWQgc2VuZE1lc3NhZ2UgaGFzXG4gICAgICAgIC8vIHRvIHRyYW5zbGF0ZSB0aGUgbWVzc2FnZSBpbnRvIGEgcmVzb2x2ZWQgcHJvbWlzZSBvciBhIHJlamVjdGVkXG4gICAgICAgIC8vIHByb21pc2UpLlxuICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSAocHJvbWlzZSkgPT4ge1xuICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xuICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgIHNlbmRSZXNwb25zZShtc2cpO1xuICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgIC8vIGlzIGFuIGluc3RhbmNlIG9mIGVycm9yLCBvciB0aGUgb2JqZWN0IGl0c2VsZiBvdGhlcndpc2UuXG4gICAgICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciB8fFxuICAgICAgICAgICAgICAgIHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fOiB0cnVlLFxuICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHlcIiwgZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCBzZW5kIHRoZSByZXNvbHZlZCB2YWx1ZSBhcyBhXG4gICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxuICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG4gICAgICAgIGlmIChpc1Jlc3VsdFRoZW5hYmxlKSB7XG4gICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHNlbmRSZXNwb25zZVByb21pc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7cmVqZWN0LCByZXNvbHZlfSwgcmVwbHkpID0+IHtcbiAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgIC8vIERldGVjdCB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlbmVycyByZXBsaWVkIHRvIHRoZSBzZW5kTWVzc2FnZSBjYWxsIGFuZCByZXNvbHZlXG4gICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2lzc3Vlcy8xMzBcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSA9PT0gQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFKSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmVwbHkgJiYgcmVwbHkuX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fKSB7XG4gICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAvLyBhbiBFcnJvciBpbnN0YW5jZS5cbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXBseS5tZXNzYWdlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHJlcGx5KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlID0gKG5hbWUsIG1ldGFkYXRhLCBhcGlOYW1lc3BhY2VPYmosIC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge3Jlc29sdmUsIHJlamVjdH0pO1xuICAgICAgICBhcmdzLnB1c2god3JhcHBlZENiKTtcbiAgICAgICAgYXBpTmFtZXNwYWNlT2JqLnNlbmRNZXNzYWdlKC4uLmFyZ3MpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHN0YXRpY1dyYXBwZXJzID0ge1xuICAgICAgZGV2dG9vbHM6IHtcbiAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgIG9uUmVxdWVzdEZpbmlzaGVkOiB3cmFwRXZlbnQob25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcnVudGltZToge1xuICAgICAgICBvbk1lc3NhZ2U6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgIG9uTWVzc2FnZUV4dGVybmFsOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7bWluQXJnczogMSwgbWF4QXJnczogM30pLFxuICAgICAgfSxcbiAgICAgIHRhYnM6IHtcbiAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge21pbkFyZ3M6IDIsIG1heEFyZ3M6IDN9KSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBzZXR0aW5nTWV0YWRhdGEgPSB7XG4gICAgICBjbGVhcjoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgICAgZ2V0OiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgICBzZXQ6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICB9O1xuICAgIGFwaU1ldGFkYXRhLnByaXZhY3kgPSB7XG4gICAgICBuZXR3b3JrOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgICBzZXJ2aWNlczoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgICAgd2Vic2l0ZXM6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHdyYXBPYmplY3QoZXh0ZW5zaW9uQVBJcywgc3RhdGljV3JhcHBlcnMsIGFwaU1ldGFkYXRhKTtcbiAgfTtcblxuICBpZiAodHlwZW9mIGNocm9tZSAhPSBcIm9iamVjdFwiIHx8ICFjaHJvbWUgfHwgIWNocm9tZS5ydW50aW1lIHx8ICFjaHJvbWUucnVudGltZS5pZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2NyaXB0IHNob3VsZCBvbmx5IGJlIGxvYWRlZCBpbiBhIGJyb3dzZXIgZXh0ZW5zaW9uLlwiKTtcbiAgfVxuXG4gIC8vIFRoZSBidWlsZCBwcm9jZXNzIGFkZHMgYSBVTUQgd3JhcHBlciBhcm91bmQgdGhpcyBmaWxlLCB3aGljaCBtYWtlcyB0aGVcbiAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IGJyb3dzZXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzTWVzc2FnZShjYW5kaWRhdGUpIHtcbiAgICByZXR1cm4gKGNhbmRpZGF0ZSAhPT0gbnVsbCAmJiB0eXBlb2YgY2FuZGlkYXRlID09PSBcIm9iamVjdFwiICYmIFwidHlwZVwiIGluIGNhbmRpZGF0ZSk7XG59XG4iLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5sZXQgcG9ydDtcbmNvbnN0IGNvbm5lY3RMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG5jb25zdCBkaXNjb25uZWN0TGlzdGVuZXJzID0gbmV3IFNldCgpO1xuY29uc3QgbWVzc2FnZUxpc3RlbmVycyA9IG5ldyBTZXQoKTtcbmV4cG9ydCBmdW5jdGlvbiBhZGRDb25uZWN0TGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBjb25uZWN0TGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgbGlzdGVuZXIoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGREaXNjb25uZWN0TGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBkaXNjb25uZWN0TGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG59XG5leHBvcnQgZnVuY3Rpb24gYWRkTWVzc2FnZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgbWVzc2FnZUxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xufVxuZXhwb3J0IGNvbnN0IGNvbm5lY3QgPSAoKSA9PiB7XG4gICAgaWYgKHBvcnQpIHtcbiAgICAgICAgcmV0dXJuIHBvcnQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHBvcnQgPSBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6IFwidWlcIiB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgIHBvcnQgPSBudWxsO1xuICAgICAgICBkaXNjb25uZWN0TGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcigpKTtcbiAgICAgICAgcmV0dXJuIHBvcnQ7XG4gICAgfVxuICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlKSA9PiB7XG4gICAgICAgIG9uTWVzc2FnZShtZXNzYWdlKTtcbiAgICB9KTtcbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcihvbkRpc2Nvbm5lY3QpO1xuICAgIGNvbm5lY3RMaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKCkpO1xuICAgIHJldHVybiBwb3J0O1xufTtcbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW4oX2EpIHtcbiAgICB2YXIgeyB0eXBlLCBmaWx0ZXIgfSA9IF9hLCBvcHRpb25zID0gX19yZXN0KF9hLCBbXCJ0eXBlXCIsIFwiZmlsdGVyXCJdKTtcbiAgICBhZGRDb25uZWN0TGlzdGVuZXIoKCkgPT4ge1xuICAgICAgICBpZiAocG9ydCkge1xuICAgICAgICAgICAgcG9ydC5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKHsgdHlwZTogYCR7dHlwZX0ubGlzdGVuYCwgZmlsdGVyIH0sIG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gb25EaXNjb25uZWN0KCkge1xuICAgIHBvcnQgPSBudWxsO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gY29ubmVjdCgpLCAxMDApO1xufVxuZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBpZiAoIW1lc3NhZ2UudHlwZS5lbmRzV2l0aChcIi5yZXNwb25kXCIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbWVzc2FnZUxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIobWVzc2FnZSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZURpc2Nvbm5lY3RMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIGRpc2Nvbm5lY3RMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgYWRkRGlzY29ubmVjdExpc3RlbmVyLCBhZGRNZXNzYWdlTGlzdGVuZXIsIGNvbm5lY3QsIGxpc3RlbiwgcmVtb3ZlRGlzY29ubmVjdExpc3RlbmVyIH0gZnJvbSBcIi4vYXBpLnBvcnRcIjtcbmNvbnN0IHBsYXRmb3JtVG9TdG9yZSA9IHtcbiAgICBjaHJvbWl1bTogXCJjaHJvbWVcIixcbiAgICBlZGdlaHRtbDogXCJlZGdlXCIsXG4gICAgZ2Vja286IFwiZmlyZWZveFwiXG59O1xuZXhwb3J0IGNvbnN0IGFwcCA9IHtcbiAgICBnZXQ6ICh3aGF0KSA9PiBzZW5kKFwiYXBwLmdldFwiLCB7IHdoYXQgfSksXG4gICAgZ2V0SW5mbzogKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbYXBwLmdldChcImFwcGxpY2F0aW9uXCIpLCBhcHAuZ2V0KFwicGxhdGZvcm1cIildKS50aGVuKChbYXBwbGljYXRpb24sIHJhd1BsYXRmb3JtXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGxhdGZvcm0gPSByYXdQbGF0Zm9ybTtcbiAgICAgICAgICAgIGxldCBzdG9yZTtcbiAgICAgICAgICAgIGlmIChhcHBsaWNhdGlvbiAhPT0gXCJlZGdlXCIgJiYgYXBwbGljYXRpb24gIT09IFwib3BlcmFcIikge1xuICAgICAgICAgICAgICAgIHN0b3JlID0gcGxhdGZvcm1Ub1N0b3JlW3BsYXRmb3JtXSB8fCBcImNocm9tZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RvcmUgPSBhcHBsaWNhdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24sXG4gICAgICAgICAgICAgICAgcGxhdGZvcm0sXG4gICAgICAgICAgICAgICAgc3RvcmVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0pLFxuICAgIGxpc3RlbjogKGZpbHRlcikgPT4gbGlzdGVuKHsgdHlwZTogXCJhcHBcIiwgZmlsdGVyIH0pLFxuICAgIG9wZW46ICh3aGF0KSA9PiBzZW5kKFwiYXBwLm9wZW5cIiwgeyB3aGF0IH0pXG59O1xuZXhwb3J0IGNvbnN0IGN0YWxpbmtzID0ge1xuICAgIGdldDogKGxpbmssIHF1ZXJ5UGFyYW1zID0ge30pID0+IHNlbmQoXCJhcHAuZ2V0XCIsIHsgd2hhdDogXCJjdGFsaW5rXCIsIGxpbmssIHF1ZXJ5UGFyYW1zIH0pXG59O1xuZXhwb3J0IGNvbnN0IGRvY2xpbmtzID0ge1xuICAgIGdldDogKGxpbmspID0+IHNlbmQoXCJhcHAuZ2V0XCIsIHsgd2hhdDogXCJkb2NsaW5rXCIsIGxpbmsgfSlcbn07XG5leHBvcnQgY29uc3QgZmlsdGVycyA9IHtcbiAgICBnZXQ6ICgpID0+IHNlbmQoXCJmaWx0ZXJzLmdldFwiKSxcbiAgICBsaXN0ZW46IChmaWx0ZXIpID0+IGxpc3Rlbih7IHR5cGU6IFwiZmlsdGVyc1wiLCBmaWx0ZXIgfSlcbn07XG5leHBvcnQgY29uc3Qgbm90aWZpY2F0aW9ucyA9IHtcbiAgICBnZXQ6IChkaXNwbGF5TWV0aG9kKSA9PiBzZW5kKFwibm90aWZpY2F0aW9ucy5nZXRcIiwgeyBkaXNwbGF5TWV0aG9kIH0pLFxuICAgIHNlZW46ICgpID0+IHNlbmQoXCJub3RpZmljYXRpb25zLnNlZW5cIilcbn07XG5leHBvcnQgY29uc3QgcHJlZnMgPSB7XG4gICAgZ2V0OiAoa2V5KSA9PiBzZW5kKFwicHJlZnMuZ2V0XCIsIHsga2V5IH0pLFxuICAgIGxpc3RlbjogKGZpbHRlcikgPT4gbGlzdGVuKHsgdHlwZTogXCJwcmVmc1wiLCBmaWx0ZXIgfSlcbn07XG5leHBvcnQgY29uc3QgcHJlbWl1bSA9IHtcbiAgICBhY3RpdmF0ZTogKHVzZXJJZCkgPT4gc2VuZChcInByZW1pdW0uYWN0aXZhdGVcIiwgeyB1c2VySWQgfSksXG4gICAgZ2V0OiAoKSA9PiBzZW5kKFwicHJlbWl1bS5nZXRcIiksXG4gICAgbGlzdGVuOiAoZmlsdGVyKSA9PiBsaXN0ZW4oeyB0eXBlOiBcInByZW1pdW1cIiwgZmlsdGVyIH0pXG59O1xuZXhwb3J0IGNvbnN0IHJlcXVlc3RzID0ge1xuICAgIGxpc3RlbjogKGZpbHRlciwgdGFiSWQpID0+IGxpc3Rlbih7IHR5cGU6IFwicmVxdWVzdHNcIiwgZmlsdGVyLCB0YWJJZCB9KVxufTtcbmZ1bmN0aW9uIHNlbmQoc2VuZFR5cGUsIHJhd0FyZ3MgPSB7fSkge1xuICAgIGNvbnN0IGFyZ3MgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJhd0FyZ3MpLCB7IHR5cGU6IHNlbmRUeXBlIH0pO1xuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoYXJncyk7XG59XG5leHBvcnQgY29uc3Qgc3RhdHMgPSB7XG4gICAgZ2V0QmxvY2tlZFBlclBhZ2U6ICh0YWIpID0+IHNlbmQoXCJzdGF0cy5nZXRCbG9ja2VkUGVyUGFnZVwiLCB7IHRhYiB9KSxcbiAgICBnZXRCbG9ja2VkVG90YWw6ICgpID0+IHNlbmQoXCJzdGF0cy5nZXRCbG9ja2VkVG90YWxcIiksXG4gICAgbGlzdGVuOiAoZmlsdGVyKSA9PiBsaXN0ZW4oeyB0eXBlOiBcInN0YXRzXCIsIGZpbHRlciB9KVxufTtcbmV4cG9ydCBjb25zdCBzdWJzY3JpcHRpb25zID0ge1xuICAgIGdldDogKG9wdGlvbnMpID0+IHNlbmQoXCJzdWJzY3JpcHRpb25zLmdldFwiLCBvcHRpb25zKSxcbiAgICBnZXRJbml0SXNzdWVzOiAoKSA9PiBzZW5kKFwic3Vic2NyaXB0aW9ucy5nZXRJbml0SXNzdWVzXCIpLFxuICAgIGxpc3RlbjogKGZpbHRlcikgPT4gbGlzdGVuKHsgdHlwZTogXCJzdWJzY3JpcHRpb25zXCIsIGZpbHRlciB9KVxufTtcbmNvbnN0IGFwaSA9IHtcbiAgICBhZGREaXNjb25uZWN0TGlzdGVuZXIsXG4gICAgYWRkTGlzdGVuZXI6IGFkZE1lc3NhZ2VMaXN0ZW5lcixcbiAgICBhcHAsXG4gICAgY3RhbGlua3MsXG4gICAgZG9jbGlua3MsXG4gICAgZmlsdGVycyxcbiAgICBub3RpZmljYXRpb25zLFxuICAgIHByZWZzLFxuICAgIHByZW1pdW0sXG4gICAgcmVxdWVzdHMsXG4gICAgcmVtb3ZlRGlzY29ubmVjdExpc3RlbmVyLFxuICAgIHN1YnNjcmlwdGlvbnMsXG4gICAgc3RhdHNcbn07XG5jb25uZWN0KCk7XG5leHBvcnQgZGVmYXVsdCBhcGk7XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIuL2FwaVwiO1xuZXhwb3J0IHsgYXBwLCBjdGFsaW5rcywgZG9jbGlua3MsIGZpbHRlcnMsIG5vdGlmaWNhdGlvbnMsIHByZWZzLCByZXF1ZXN0cywgc3RhdHMsIHN1YnNjcmlwdGlvbnMgfSBmcm9tIFwiLi9hcGlcIjtcbmV4cG9ydCB7IGFkZENvbm5lY3RMaXN0ZW5lciwgYWRkRGlzY29ubmVjdExpc3RlbmVyLCBhZGRNZXNzYWdlTGlzdGVuZXIsIGxpc3RlbiwgcmVtb3ZlRGlzY29ubmVjdExpc3RlbmVyIH0gZnJvbSBcIi4vYXBpLnBvcnRcIjtcbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0ICogYXMgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuaW1wb3J0ICogYXMgRE9NUHVyaWZ5IGZyb20gJ2RvbXB1cmlmeSc7XG5pbXBvcnQgbGF0b1JlZ3VsYXIgZnJvbSAnLi4vLi4vZm9udHMvbGF0by53b2ZmJztcbmltcG9ydCBsYXRvRXh0UmVndWxhciBmcm9tICcuLi8uLi9mb250cy9sYXRvLWV4dC1yZWd1bGFyLndvZmYnO1xuaW1wb3J0IGxhdG9FeHRJdGFsaWMgZnJvbSAnLi4vLi4vZm9udHMvbGF0by1leHQtaXRhbGljLndvZmYnO1xuaW1wb3J0IGxhdG9JdGFsaWMgZnJvbSAnLi4vLi4vZm9udHMvbGF0by1pdGFsaWMud29mZic7XG5pbXBvcnQgbGF0b0V4dEJvbGRJdGFsaWMgZnJvbSAnLi4vLi4vZm9udHMvbGF0by1leHQtYm9sZGl0YWxpYy53b2ZmJztcbmltcG9ydCBsYXRvQm9sZEl0YWxpYyBmcm9tICcuLi8uLi9mb250cy9sYXRvLWJvbGRpdGFsaWMud29mZic7XG5pbXBvcnQgbGF0b0V4dEJvbGQgZnJvbSAnLi4vLi4vZm9udHMvbGF0by1leHQtYm9sZC53b2ZmJztcbmltcG9ydCBsYXRvQm9sZCBmcm9tICcuLi8uLi9mb250cy9sYXRvLWJvbGQud29mZic7XG5pbXBvcnQgbWF0ZXJpYWxJY29uc1JlZ3VsYXIgZnJvbSAnLi4vLi4vLi4vaWNvbnMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmYyJztcbmltcG9ydCBkaWFsb2dMb2dvIGZyb20gJy4uLy4uLy4uL2ljb25zL2FkYmxvY2stMjAuc3ZnJztcbmltcG9ydCBkaWFsb2dDc3MgZnJvbSAnLi9kaWFsb2cuY3NzJztcbmltcG9ydCBkaWFsb2dIdG1sIGZyb20gJy4vZGlhbG9nLmh0bWwnO1xuaW1wb3J0IHsgaXNNZXNzYWdlIH0gZnJvbSAnLi4vLi4vcG9seWZpbGxzL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vLi4vLi4vdmVuZG9yL2FkYmxvY2twbHVzdWkvanMvYXBpL2luZGV4JztcbmNvbnN0IGZvbnRzVG9Mb2FkID0gW3tcbiAgICAgICAgc3JjOiBsYXRvUmVndWxhcixcbiAgICAgICAgc3R5bGU6ICdub3JtYWwnLFxuICAgICAgICB3ZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgICB1bmljb2RlUmFuZ2U6ICdVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBsYXRvRXh0UmVndWxhcixcbiAgICAgICAgc3R5bGU6ICdub3JtYWwnLFxuICAgICAgICB3ZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgICB1bmljb2RlUmFuZ2U6ICdVKzAxMDAtMDI0RiwgVSswMjU5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBsYXRvRXh0SXRhbGljLFxuICAgICAgICBzdHlsZTogJ2l0YWxpYycsXG4gICAgICAgIHdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgIHVuaWNvZGVSYW5nZTogJ1UrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkYnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IGxhdG9JdGFsaWMsXG4gICAgICAgIHN0eWxlOiAnaXRhbGljJyxcbiAgICAgICAgd2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgICAgdW5pY29kZVJhbmdlOiAnVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogbGF0b0V4dEJvbGRJdGFsaWMsXG4gICAgICAgIHN0eWxlOiAnaXRhbGljJyxcbiAgICAgICAgd2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgIHVuaWNvZGVSYW5nZTogJ1UrMDEwMC0wMjRGLCBVKzAyNTksIFUrMUUwMC0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkYnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IGxhdG9Cb2xkSXRhbGljLFxuICAgICAgICBzdHlsZTogJ2l0YWxpYycsXG4gICAgICAgIHdlaWdodDogJ2JvbGQnLFxuICAgICAgICB1bmljb2RlUmFuZ2U6ICdVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBsYXRvRXh0Qm9sZCxcbiAgICAgICAgc3R5bGU6ICdub3JtYWwnLFxuICAgICAgICB3ZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgdW5pY29kZVJhbmdlOiAnVSswMTAwLTAyNEYsIFUrMDI1OSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogbGF0b0JvbGQsXG4gICAgICAgIHN0eWxlOiAnbm9ybWFsJyxcbiAgICAgICAgd2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgIHVuaWNvZGVSYW5nZTogJ1UrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQnLFxuICAgIH0sXG5dO1xuY29uc3QgZGl2SUQgPSAnX19BQm92ZXJsYXknO1xuY29uc3QgZGVmYXVsdFRvcFBvc2l0aW9uID0gMzc7XG5sZXQgaW50ZXJ2YWxJZDtcbmNvbnN0IHJlbW92ZURpYWxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJRCk7XG4gICAgaWYgKGVsKSB7XG4gICAgICAgIChfYSA9IGVsLnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmVDaGlsZChlbCk7XG4gICAgfVxuICAgIGlmIChpbnRlcnZhbElkKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgfVxufTtcbmZ1bmN0aW9uIGxvYWRDc3MoYmFzZSkge1xuICAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGVFbGVtZW50LnRleHRDb250ZW50ID0gZGlhbG9nQ3NzO1xuICAgIGJhc2UuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGxvYWRMYXRvRm9udChzcmMsIHN0eWxlLCB3ZWlnaHQsIHVuaWNvZGVSYW5nZSkge1xuICAgIHJldHVybiBuZXcgRm9udEZhY2UoJ0xhdG8nLCBgdXJsKFwiJHtzcmN9XCIpYCwgeyBzdHlsZSwgd2VpZ2h0LCB1bmljb2RlUmFuZ2UgfSk7XG59XG5mdW5jdGlvbiBsb2FkUmVzb3VyY2VzKGJhc2UpIHtcbiAgICBsb2FkQ3NzKGJhc2UpO1xuICAgIGZvbnRzVG9Mb2FkLmZvckVhY2goKGZvbnREYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3JjLCBzdHlsZSwgd2VpZ2h0LCB1bmljb2RlUmFuZ2UsIH0gPSBmb250RGF0YTtcbiAgICAgICAgZG9jdW1lbnQuZm9udHMuYWRkKGxvYWRMYXRvRm9udChzcmMsIHN0eWxlLCB3ZWlnaHQsIHVuaWNvZGVSYW5nZSkpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmZvbnRzLmFkZChuZXcgRm9udEZhY2UoJ01hdGVyaWFsIEljb25zJywgYHVybChcIiR7bWF0ZXJpYWxJY29uc1JlZ3VsYXJ9XCIpYCwgeyBzdHlsZTogJ25vcm1hbCcsIHdlaWdodDogJ25vcm1hbCcgfSkpO1xufVxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZSkge1xuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG59XG5jb25zdCBzaG93RGlhbG9nID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIGlmICghbWFpbkJvZHkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2SUQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBjb250ZW50IH0gPSBtZXNzYWdlO1xuICAgICAgICBjb25zdCB7IHRpdGxlLCBib2R5LCBidXR0b24sIH0gPSBjb250ZW50O1xuICAgICAgICBjb25zdCBkaWFsb2dQYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpYWxvZ1BhcmVudEVsZW1lbnQuaWQgPSBkaXZJRDtcbiAgICAgICAgY29uc3QgZGlhbG9nRWxlbWVudCA9IERPTVB1cmlmeS5zYW5pdGl6ZShkaWFsb2dIdG1sLCB7IFJFVFVSTl9ET01fRlJBR01FTlQ6IHRydWUgfSk7XG4gICAgICAgIGlmIChET01QdXJpZnkucmVtb3ZlZCAmJiBET01QdXJpZnkucmVtb3ZlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xvc2VJY29uID0gZGlhbG9nRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2VJY29uJyk7XG4gICAgICAgIGlmIChjbG9zZUljb24gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgY2xvc2VJY29uLm9uY2xpY2sgPSBmdW5jdGlvbiBjbG9zZWRDbGlja2VkKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC5pc1RydXN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZSh7IHR5cGU6ICdvbnBhZ2UtZGlhbG9nLmNsb3NlJyB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWRibG9ja0xvZ29FbGVtZW50ID0gZGlhbG9nRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjYWRibG9jay1sb2dvJyk7XG4gICAgICAgIGlmIChhZGJsb2NrTG9nb0VsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgICAgICBhZGJsb2NrTG9nb0VsZW1lbnQuc3JjID0gZGlhbG9nTG9nbztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aXRsZVRleHRFbGVtZW50ID0gZGlhbG9nRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGVSb3cnKTtcbiAgICAgICAgdGl0bGVUZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IERPTVB1cmlmeS5zYW5pdGl6ZSh0aXRsZSk7XG4gICAgICAgIGNvbnN0IGJvZHlFbGVtZW50ID0gZGlhbG9nRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjYm9keVNlY3Rpb24nKTtcbiAgICAgICAgaWYgKGJvZHlFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYm9keVRleHQgb2YgYm9keSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnbXNnVGV4dCcpO1xuICAgICAgICAgICAgICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IERPTVB1cmlmeS5zYW5pdGl6ZShib2R5VGV4dCk7XG4gICAgICAgICAgICAgICAgYm9keUVsZW1lbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidG5Db250aW51ZSA9IGRpYWxvZ0VsZW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRpbnVlJyk7XG4gICAgICAgIGlmIChidG5Db250aW51ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgYnRuQ29udGludWUudGV4dENvbnRlbnQgPSBET01QdXJpZnkuc2FuaXRpemUoYnV0dG9uKTtcbiAgICAgICAgICAgICAgICBidG5Db250aW51ZS5vbmNsaWNrID0gZnVuY3Rpb24gbGVhcm5Nb3JlQ2xpY2tlZChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFldmVudC5pc1RydXN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZSh7IHR5cGU6ICdvbnBhZ2UtZGlhbG9nLmNvbnRpbnVlJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ0bkNvbnRpbnVlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmFzZVNoYWRvdyA9IGRpYWxvZ1BhcmVudEVsZW1lbnQuYXR0YWNoU2hhZG93KHsgbW9kZTogJ2Nsb3NlZCcgfSk7XG4gICAgICAgIGxvYWRSZXNvdXJjZXMoYmFzZVNoYWRvdyk7XG4gICAgICAgIHNldExhbmdBbmREaXJBdHRyaWJ1dGVzKGRpYWxvZ0VsZW1lbnQpO1xuICAgICAgICBjb25zdCBob3N0RWxlbWVudCA9IGJhc2VTaGFkb3cuaG9zdDtcbiAgICAgICAgaWYgKGhvc3RFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGhvc3RFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWRpYWxvZy10b3AtcG9zaXRpb24nLCBgJHtkZWZhdWx0VG9wUG9zaXRpb259cHhgKTtcbiAgICAgICAgfVxuICAgICAgICBiYXNlU2hhZG93LmFwcGVuZENoaWxkKGRpYWxvZ0VsZW1lbnQpO1xuICAgICAgICAoZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmFwcGVuZENoaWxkKGRpYWxvZ1BhcmVudEVsZW1lbnQpO1xuICAgICAgICBsZXQgZGlzcGxheUR1cmF0aW9uID0gMDtcbiAgICAgICAgaW50ZXJ2YWxJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5RHVyYXRpb24gKz0gMTtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKHsgdHlwZTogJ29ucGFnZS1kaWFsb2cucGluZycsIGRpc3BsYXlEdXJhdGlvbiB9KTtcbiAgICAgICAgfSwgNjAgKiAxMDAwKTtcbiAgICB9KTtcbn07XG5mdW5jdGlvbiBoYW5kbGVNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBpZiAoIWlzTWVzc2FnZShtZXNzYWdlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ29ucGFnZS1kaWFsb2cuaGlkZSc6XG4gICAgICAgICAgICByZW1vdmVEaWFsb2coKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgIH1cbn1cbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoaGFuZGxlTWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5mbyA9IHlpZWxkIHNlbmRNZXNzYWdlKHsgdHlwZTogJ29ucGFnZS1kaWFsb2cuZ2V0JyB9KTtcbiAgICAgICAgaWYgKHN0YXJ0SW5mbyAmJiBzdGFydEluZm8uY29udGVudCkge1xuICAgICAgICAgICAgc2hvd0RpYWxvZyhzdGFydEluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGFwaS5hZGREaXNjb25uZWN0TGlzdGVuZXIoKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlRGlhbG9nKCk7XG4gICAgICAgICAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbnN0YXJ0KCk7XG4iXSwibmFtZXMiOlsiaGFzT3duUHJvcGVydHkiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsImlzRnJvemVuIiwiZnJlZXplIiwic2VhbCIsImNyZWF0ZSIsIlJlZmxlY3QiLCJhcHBseSIsImNvbnN0cnVjdCIsImZ1biIsInRoaXNWYWx1ZSIsImFyZ3MiLCJ4IiwiRnVuYyIsImFycmF5Rm9yRWFjaCIsInVuYXBwbHkiLCJBcnJheSIsInByb3RvdHlwZSIsImZvckVhY2giLCJhcnJheVBvcCIsInBvcCIsImFycmF5UHVzaCIsInB1c2giLCJzdHJpbmdUb0xvd2VyQ2FzZSIsIlN0cmluZyIsInRvTG93ZXJDYXNlIiwic3RyaW5nTWF0Y2giLCJtYXRjaCIsInN0cmluZ1JlcGxhY2UiLCJyZXBsYWNlIiwic3RyaW5nSW5kZXhPZiIsImluZGV4T2YiLCJzdHJpbmdUcmltIiwidHJpbSIsInJlZ0V4cFRlc3QiLCJSZWdFeHAiLCJ0ZXN0IiwidHlwZUVycm9yQ3JlYXRlIiwidW5jb25zdHJ1Y3QiLCJUeXBlRXJyb3IiLCJmdW5jIiwidGhpc0FyZyIsImFkZFRvU2V0Iiwic2V0IiwiYXJyYXkiLCJsIiwibGVuZ3RoIiwiZWxlbWVudCIsImxjRWxlbWVudCIsImNsb25lIiwib2JqZWN0IiwibmV3T2JqZWN0IiwicHJvcGVydHkiLCJodG1sIiwic3ZnIiwic3ZnRmlsdGVycyIsIm1hdGhNbCIsInRleHQiLCJ4bWwiLCJNVVNUQUNIRV9FWFBSIiwiRVJCX0VYUFIiLCJEQVRBX0FUVFIiLCJBUklBX0FUVFIiLCJJU19BTExPV0VEX1VSSSIsIklTX1NDUklQVF9PUl9EQVRBIiwiQVRUUl9XSElURVNQQUNFIiwiZ2V0R2xvYmFsIiwid2luZG93IiwiX2NyZWF0ZVRydXN0ZWRUeXBlc1BvbGljeSIsInRydXN0ZWRUeXBlcyIsImRvY3VtZW50IiwiY3JlYXRlUG9saWN5Iiwic3VmZml4IiwiQVRUUl9OQU1FIiwiY3VycmVudFNjcmlwdCIsImhhc0F0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInBvbGljeU5hbWUiLCJjcmVhdGVIVE1MIiwiXyIsImNvbnNvbGUiLCJ3YXJuIiwiY3JlYXRlRE9NUHVyaWZ5IiwiRE9NUHVyaWZ5Iiwicm9vdCIsInZlcnNpb24iLCJWRVJTSU9OIiwicmVtb3ZlZCIsIm5vZGVUeXBlIiwiaXNTdXBwb3J0ZWQiLCJvcmlnaW5hbERvY3VtZW50IiwiRG9jdW1lbnRGcmFnbWVudCIsIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCJOb2RlIiwiTm9kZUZpbHRlciIsIk5hbWVkTm9kZU1hcCIsIk1vek5hbWVkQXR0ck1hcCIsIlRleHQiLCJDb21tZW50IiwiRE9NUGFyc2VyIiwidGVtcGxhdGUiLCJjcmVhdGVFbGVtZW50IiwiY29udGVudCIsIm93bmVyRG9jdW1lbnQiLCJ0cnVzdGVkVHlwZXNQb2xpY3kiLCJlbXB0eUhUTUwiLCJSRVRVUk5fVFJVU1RFRF9UWVBFIiwiaW1wbGVtZW50YXRpb24iLCJjcmVhdGVOb2RlSXRlcmF0b3IiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJpbXBvcnROb2RlIiwiZG9jdW1lbnRNb2RlIiwiaG9va3MiLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJFWFBSRVNTSU9OUyIsIkFMTE9XRURfVEFHUyIsIkRFRkFVTFRfQUxMT1dFRF9UQUdTIiwiVEFHUyIsIkFMTE9XRURfQVRUUiIsIkRFRkFVTFRfQUxMT1dFRF9BVFRSIiwiQVRUUlMiLCJGT1JCSURfVEFHUyIsIkZPUkJJRF9BVFRSIiwiQUxMT1dfQVJJQV9BVFRSIiwiQUxMT1dfREFUQV9BVFRSIiwiQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMiLCJTQUZFX0ZPUl9URU1QTEFURVMiLCJXSE9MRV9ET0NVTUVOVCIsIlNFVF9DT05GSUciLCJGT1JDRV9CT0RZIiwiUkVUVVJOX0RPTSIsIlJFVFVSTl9ET01fRlJBR01FTlQiLCJSRVRVUk5fRE9NX0lNUE9SVCIsIlNBTklUSVpFX0RPTSIsIktFRVBfQ09OVEVOVCIsIklOX1BMQUNFIiwiVVNFX1BST0ZJTEVTIiwiRk9SQklEX0NPTlRFTlRTIiwiREFUQV9VUklfVEFHUyIsIkRFRkFVTFRfREFUQV9VUklfVEFHUyIsIlVSSV9TQUZFX0FUVFJJQlVURVMiLCJERUZBVUxUX1VSSV9TQUZFX0FUVFJJQlVURVMiLCJDT05GSUciLCJmb3JtRWxlbWVudCIsIl9wYXJzZUNvbmZpZyIsImNmZyIsIkFERF9VUklfU0FGRV9BVFRSIiwiQUREX0RBVEFfVVJJX1RBR1MiLCJBTExPV0VEX1VSSV9SRUdFWFAiLCJBRERfVEFHUyIsIkFERF9BVFRSIiwidGFibGUiLCJ0Ym9keSIsIl9mb3JjZVJlbW92ZSIsIm5vZGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJvdXRlckhUTUwiLCJfcmVtb3ZlQXR0cmlidXRlIiwibmFtZSIsImF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZU5vZGUiLCJmcm9tIiwicmVtb3ZlQXR0cmlidXRlIiwiX2luaXREb2N1bWVudCIsImRpcnR5IiwiZG9jIiwibGVhZGluZ1doaXRlc3BhY2UiLCJtYXRjaGVzIiwiZGlydHlQYXlsb2FkIiwicGFyc2VGcm9tU3RyaW5nIiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSIsImZpcnN0RWxlbWVudENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiY3JlYXRlVGV4dE5vZGUiLCJjaGlsZE5vZGVzIiwiY2FsbCIsIl9jcmVhdGVJdGVyYXRvciIsIlNIT1dfRUxFTUVOVCIsIlNIT1dfQ09NTUVOVCIsIlNIT1dfVEVYVCIsIkZJTFRFUl9BQ0NFUFQiLCJfaXNDbG9iYmVyZWQiLCJlbG0iLCJub2RlTmFtZSIsInRleHRDb250ZW50IiwiYXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZSIsIm5hbWVzcGFjZVVSSSIsIl9pc05vZGUiLCJfZXhlY3V0ZUhvb2siLCJlbnRyeVBvaW50IiwiY3VycmVudE5vZGUiLCJkYXRhIiwiaG9vayIsIl9zYW5pdGl6ZUVsZW1lbnRzIiwidGFnTmFtZSIsImFsbG93ZWRUYWdzIiwicXVlcnlTZWxlY3RvckFsbCIsImlubmVySFRNTCIsImluc2VydEFkamFjZW50SFRNTCIsImh0bWxUb0luc2VydCIsImNsb25lTm9kZSIsIl9pc1ZhbGlkQXR0cmlidXRlIiwibGNUYWciLCJsY05hbWUiLCJ2YWx1ZSIsIl9zYW5pdGl6ZUF0dHJpYnV0ZXMiLCJhdHRyIiwiaG9va0V2ZW50IiwiYXR0ck5hbWUiLCJhdHRyVmFsdWUiLCJrZWVwQXR0ciIsImFsbG93ZWRBdHRyaWJ1dGVzIiwiZm9yY2VLZWVwQXR0ciIsInVuZGVmaW5lZCIsInNldEF0dHJpYnV0ZU5TIiwiX3Nhbml0aXplU2hhZG93RE9NIiwiZnJhZ21lbnQiLCJzaGFkb3dOb2RlIiwic2hhZG93SXRlcmF0b3IiLCJuZXh0Tm9kZSIsInNhbml0aXplIiwiaW1wb3J0ZWROb2RlIiwib2xkTm9kZSIsInJldHVybk5vZGUiLCJ0b1N0cmluZyIsInRvU3RhdGljSFRNTCIsImFwcGVuZENoaWxkIiwiZmlyc3RDaGlsZCIsIm5vZGVJdGVyYXRvciIsInNlcmlhbGl6ZWRIVE1MIiwic2V0Q29uZmlnIiwiY2xlYXJDb25maWciLCJpc1ZhbGlkQXR0cmlidXRlIiwidGFnIiwiYWRkSG9vayIsImhvb2tGdW5jdGlvbiIsInJlbW92ZUhvb2siLCJyZW1vdmVIb29rcyIsInJlbW92ZUFsbEhvb2tzIiwiYnJvd3NlciIsImdldFByb3RvdHlwZU9mIiwiQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFIiwiU0VORF9SRVNQT05TRV9ERVBSRUNBVElPTl9XQVJOSU5HIiwid3JhcEFQSXMiLCJleHRlbnNpb25BUElzIiwiYXBpTWV0YWRhdGEiLCJrZXlzIiwiRXJyb3IiLCJEZWZhdWx0V2Vha01hcCIsIldlYWtNYXAiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZUl0ZW0iLCJpdGVtcyIsImdldCIsImtleSIsImhhcyIsImlzVGhlbmFibGUiLCJ0aGVuIiwibWFrZUNhbGxiYWNrIiwicHJvbWlzZSIsIm1ldGFkYXRhIiwiY2FsbGJhY2tBcmdzIiwicnVudGltZSIsImxhc3RFcnJvciIsInJlamVjdCIsIm1lc3NhZ2UiLCJzaW5nbGVDYWxsYmFja0FyZyIsInJlc29sdmUiLCJwbHVyYWxpemVBcmd1bWVudHMiLCJudW1BcmdzIiwid3JhcEFzeW5jRnVuY3Rpb24iLCJhc3luY0Z1bmN0aW9uV3JhcHBlciIsInRhcmdldCIsIm1pbkFyZ3MiLCJtYXhBcmdzIiwiUHJvbWlzZSIsImZhbGxiYWNrVG9Ob0NhbGxiYWNrIiwiY2JFcnJvciIsIm5vQ2FsbGJhY2siLCJ3cmFwTWV0aG9kIiwibWV0aG9kIiwid3JhcHBlciIsIlByb3h5IiwidGFyZ2V0TWV0aG9kIiwidGhpc09iaiIsIkZ1bmN0aW9uIiwiYmluZCIsIndyYXBPYmplY3QiLCJ3cmFwcGVycyIsImNhY2hlIiwiaGFuZGxlcnMiLCJwcm94eVRhcmdldCIsInByb3AiLCJyZWNlaXZlciIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImRlc2MiLCJkZWxldGVQcm9wZXJ0eSIsIndyYXBFdmVudCIsIndyYXBwZXJNYXAiLCJhZGRMaXN0ZW5lciIsImxpc3RlbmVyIiwiaGFzTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsIm9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMiLCJvblJlcXVlc3RGaW5pc2hlZCIsInJlcSIsIndyYXBwZWRSZXEiLCJnZXRDb250ZW50IiwibG9nZ2VkU2VuZFJlc3BvbnNlRGVwcmVjYXRpb25XYXJuaW5nIiwib25NZXNzYWdlV3JhcHBlcnMiLCJvbk1lc3NhZ2UiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJkaWRDYWxsU2VuZFJlc3BvbnNlIiwid3JhcHBlZFNlbmRSZXNwb25zZSIsInNlbmRSZXNwb25zZVByb21pc2UiLCJyZXNwb25zZSIsInN0YWNrIiwicmVzdWx0IiwiZXJyIiwiaXNSZXN1bHRUaGVuYWJsZSIsInNlbmRQcm9taXNlZFJlc3VsdCIsIm1zZyIsImVycm9yIiwiX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fIiwiY2F0Y2giLCJ3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayIsInJlcGx5Iiwid3JhcHBlZFNlbmRNZXNzYWdlIiwiYXBpTmFtZXNwYWNlT2JqIiwid3JhcHBlZENiIiwic2VuZE1lc3NhZ2UiLCJzdGF0aWNXcmFwcGVycyIsImRldnRvb2xzIiwibmV0d29yayIsIm9uTWVzc2FnZUV4dGVybmFsIiwidGFicyIsInNldHRpbmdNZXRhZGF0YSIsImNsZWFyIiwicHJpdmFjeSIsInNlcnZpY2VzIiwid2Vic2l0ZXMiLCJjaHJvbWUiLCJpZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9