(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["avalon"] = factory();
	else
		root["avalon"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	var avalon = __webpack_require__(1) //杩欎釜鐗堟湰鍏煎IE6

	__webpack_require__(8)
	__webpack_require__(15)
	__webpack_require__(19)
	__webpack_require__(35)
	__webpack_require__(71)
	__webpack_require__(75)
	__webpack_require__(76)

	module.exports = avalon




/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	
	__webpack_require__(2)
	var avalon = __webpack_require__(3)
	var browser = __webpack_require__(4)

	avalon.shadowCopy(avalon, browser)

	__webpack_require__(5)
	__webpack_require__(6)
	__webpack_require__(7)

	module.exports = avalon

/***/ },
/* 2 */
/***/ function(module, exports) {

	
	/**
	 * 姝ゆā鍧椾笉渚濊禆浠讳綍妯″潡,鐢ㄤ簬淇璇█鐨勫簳灞傜己闄�
	 */

	var ohasOwn = Object.prototype.hasOwnProperty

	if (!'鍙稿緬姝ｇ編'.trim) {
	    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
	    String.prototype.trim = function () {
	        return this.replace(rtrim, '')
	    }
	}
	var hasDontEnumBug = !({
	    'toString': null
	}).propertyIsEnumerable('toString'),
	        hasProtoEnumBug = (function () {
	        }).propertyIsEnumerable('prototype'),
	        dontEnums = [
	            'toString',
	            'toLocaleString',
	            'valueOf',
	            'hasOwnProperty',
	            'isPrototypeOf',
	            'propertyIsEnumerable',
	            'constructor'
	        ],
	        dontEnumsLength = dontEnums.length;
	if (!Object.keys) {
	    Object.keys = function (object) { //ecma262v5 15.2.3.14
	        var theKeys = []
	        var skipProto = hasProtoEnumBug && typeof object === 'function'
	        if (typeof object === 'string' || (object && object.callee)) {
	            for (var i = 0; i < object.length; ++i) {
	                theKeys.push(String(i))
	            }
	        } else {
	            for (var name in object) {
	                if (!(skipProto && name === 'prototype') &&
	                        ohasOwn.call(object, name)) {
	                    theKeys.push(String(name))
	                }
	            }
	        }

	        if (hasDontEnumBug) {
	            var ctor = object.constructor,
	                    skipConstructor = ctor && ctor.prototype === object
	            for (var j = 0; j < dontEnumsLength; j++) {
	                var dontEnum = dontEnums[j]
	                if (!(skipConstructor && dontEnum === 'constructor') && ohasOwn.call(object, dontEnum)) {
	                    theKeys.push(dontEnum)
	                }
	            }
	        }
	        return theKeys
	    }
	}
	if (!Array.isArray) {
	    Array.isArray = function (a) {
	        return Object.prototype.toString.call(a) === '[object Array]'
	    }
	}

	if (!Array.isArray.bind) {
	    Function.prototype.bind = function (scope) {
	        if (arguments.length < 2 && scope === void 0)
	            return this
	        var fn = this,
	                argv = arguments
	        return function () {
	            var args = [],
	                    i
	            for (i = 1; i < argv.length; i++)
	                args.push(argv[i])
	            for (i = 0; i < arguments.length; i++)
	                args.push(arguments[i])
	            return fn.apply(scope, args)
	        }
	    }
	}
	//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
	/**
	* Shim for "fixing" IE's lack of support (IE < 9) for applying slice
	* on host objects like NamedNodeMap, NodeList, and HTMLCollection
	* (technically, since host objects have been implementation-dependent,
	* at least before ES6, IE hasn't needed to work this way).
	* Also works on strings, fixes IE < 9 to allow an explicit undefined
	* for the 2nd argument (as in Firefox), and prevents errors when
	* called on other DOM objects.
	*/

	var _slice = Array.prototype.slice
	try {
	    // Can't be used with DOM elements in IE < 9
	    _slice.call(document.documentElement)
	} catch (e) { // Fails in IE < 9
	    // This will work for genuine arrays, array-like objects,
	    // NamedNodeMap (attributes, entities, notations),
	    // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
	    // and will not fail on other DOM objects (as do DOM elements in IE < 9)
	    Array.prototype.slice = function (begin, end) {
	        // IE < 9 gets unhappy with an undefined end argument
	        end = (typeof end !== 'undefined') ? end : this.length

	        // For native Array objects, we use the native slice function
	        if (Array.isArray(this) ) {
	            return _slice.call(this, begin, end)
	        }

	        // For array like object we handle it ourselves.
	        var i, cloned = [],
	                size, len = this.length

	        // Handle negative value for "begin"
	        var start = begin || 0
	        start = (start >= 0) ? start : len + start

	        // Handle negative value for "end"
	        var upTo = (end) ? end : len
	        if (end < 0) {
	            upTo = len + end
	        }

	        // Actual expected size of the slice
	        size = upTo - start

	        if (size > 0) {
	            cloned = new Array(size)
	            if (this.charAt) {
	                for (i = 0; i < size; i++) {
	                    cloned[i] = this.charAt(start + i)
	                }
	            } else {
	                for (i = 0; i < size; i++) {
	                    cloned[i] = this[start + i]
	                }
	            }
	        }

	        return cloned
	    }
	}

	function iterator(vars, body, ret) {
	    var fun = 'for(var ' + vars + 'i=0,n = this.length; i < n; i++){' +
	            body.replace('_', '((i in this) && fn.call(scope,this[i],i,this))') +
	            '}' + ret
	    /* jshint ignore:start */
	    return Function('fn,scope', fun)
	    /* jshint ignore:end */
	}

	var ap = Array.prototype
	if (!/\[native code\]/.test(ap.map)) {
	    var shim = {
	        //瀹氫綅鎿嶄綔锛岃繑鍥炴暟缁勪腑绗竴涓瓑浜庣粰瀹氬弬鏁扮殑鍏冪礌鐨勭储寮曞€笺€�
	        indexOf: function (item, index) {
	            var n = this.length,
	                    i = ~~index
	            if (i < 0)
	                i += n
	            for (; i < n; i++)
	                if (this[i] === item)
	                    return i
	            return -1
	        },
	        //瀹氫綅鎿嶄綔锛屽悓涓婏紝涓嶈繃鏄粠鍚庨亶鍘嗐€�
	        lastIndexOf: function (item, index) {
	            var n = this.length,
	                    i = index == null ? n - 1 : index
	            if (i < 0)
	                i = Math.max(0, n + i)
	            for (; i >= 0; i--)
	                if (this[i] === item)
	                    return i
	            return -1
	        },
	        //杩唬鎿嶄綔锛屽皢鏁扮粍鐨勫厓绱犳尐涓効浼犲叆涓€涓嚱鏁颁腑鎵ц銆侾rototype.js鐨勫搴斿悕瀛椾负each銆�
	        forEach: iterator('', '_', ''),
	        //杩唬绫� 鍦ㄦ暟缁勪腑鐨勬瘡涓」涓婅繍琛屼竴涓嚱鏁帮紝濡傛灉姝ゅ嚱鏁扮殑鍊间负鐪燂紝鍒欐鍏冪礌浣滀负鏂版暟缁勭殑鍏冪礌鏀堕泦璧锋潵锛屽苟杩斿洖鏂版暟缁�
	        filter: iterator('r=[],j=0,', 'if(_)r[j++]=this[i]', 'return r'),
	        //鏀堕泦鎿嶄綔锛屽皢鏁扮粍鐨勫厓绱犳尐涓効浼犲叆涓€涓嚱鏁颁腑鎵ц锛岀劧鍚庢妸瀹冧滑鐨勮繑鍥炲€肩粍鎴愪竴涓柊鏁扮粍杩斿洖銆侾rototype.js鐨勫搴斿悕瀛椾负collect銆�
	        map: iterator('r=[],', 'r[i]=_', 'return r'),
	        //鍙鏁扮粍涓湁涓€涓厓绱犳弧瓒虫潯浠讹紙鏀捐繘缁欏畾鍑芥暟杩斿洖true锛夛紝閭ｄ箞瀹冨氨杩斿洖true銆侾rototype.js鐨勫搴斿悕瀛椾负any銆�
	        some: iterator('', 'if(_)return true', 'return false'),
	        //鍙湁鏁扮粍涓殑鍏冪礌閮芥弧瓒虫潯浠讹紙鏀捐繘缁欏畾鍑芥暟杩斿洖true锛夛紝瀹冩墠杩斿洖true銆侾rototype.js鐨勫搴斿悕瀛椾负all銆�
	        every: iterator('', 'if(!_)return false', 'return true')
	    }

	    for (var i in shim) {
	        ap[i] = shim[i]
	    }
	}
	module.exports = {}

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {//avalon鐨勬牳蹇�,杩欓噷閮芥槸涓€浜涗笉瀛樺湪寮傝鐨�*鏍稿績*鏂规硶涓庡睘鎬�
	function avalon(el) {
	    return new avalon.init(el)
	}

	global.avalon = avalon

	avalon.init = function (el) {
	    this[0] = this.element = el
	}

	avalon.fn = avalon.prototype = avalon.init.prototype


	avalon.shadowCopy = function (destination, source) {
	    for (var property in source) {
	        destination[property] = source[property]
	    }
	    return destination
	}

	var rword = /[^, ]+/g

	var hasConsole = global.console

	avalon.shadowCopy(avalon, {
	    noop: function () {
	    },
	    //鍒囧壊瀛楃涓蹭负涓€涓釜灏忓潡锛屼互绌烘牸鎴栭€楀彿鍒嗗紑瀹冧滑锛岀粨鍚坮eplace瀹炵幇瀛楃涓茬殑forEach
	    rword: rword,
	    inspect: ({}).toString,
	    ohasOwn: ({}).hasOwnProperty,
	    log: function () {
	        if (hasConsole && avalon.config.debug) {
	            // http://stackoverflow.com/questions/8785624/how-to-safely-wrap-console-log
	            Function.apply.call(console.log, console, arguments)
	        }
	    },
	    warn: function () {
	        if (hasConsole && avalon.config.debug) {
	            var method = console.warn || console.log
	            // http://qiang106.iteye.com/blog/1721425
	            Function.apply.call(method, console, arguments)
	        }
	    },
	    error: function (str, e) {
	        throw (e || Error)(str)
	    },
	    //灏嗕竴涓互绌烘牸鎴栭€楀彿闅斿紑鐨勫瓧绗︿覆鎴栨暟缁�,杞崲鎴愪竴涓敭鍊奸兘涓�1鐨勫璞�
	    oneObject: function (array, val) {
	        if (typeof array === 'string') {
	            array = array.match(rword) || []
	        }
	        var result = {},
	                value = val !== void 0 ? val : 1
	        for (var i = 0, n = array.length; i < n; i++) {
	            result[array[i]] = value
	        }
	        return result
	    }

	})

	module.exports = avalon
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {var window = global
	var browser = {
	    window: window,
	    document: {//鏂逛究鍦╪odejs鐜涓嶄細鎶ラ敊
	        createElement: function () {
	            return {}
	        },
	        createElementNS: function(){
	            return {}
	        },
	        contains: Boolean
	    },
	    root: {
	        outerHTML: 'x'
	    },
	    msie: NaN,
	    modern: true,
	    avalonDiv: {},
	    avalonFragment: null
	}

	if (window.window === window) {
	    var document = window.document
	    browser.document = document
	    browser.modern = window.dispatchEvent
	    browser.root = document.documentElement
	    browser.avalonDiv = document.createElement('div')
	    browser.avalonFragment = document.createDocumentFragment()
	    if (window.VBArray) {
	        browser.msie = document.documentMode || (window.XMLHttpRequest ? 7 : 6)
	    }
	}

	module.exports = browser
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports) {

	//杩欓噷鏀剧疆瀛樺湪寮傝鐨勬柟娉�

	var serialize = avalon.inspect
	var rwindow = /^\[object (?:Window|DOMWindow|global)\]$/
	var rnative = /\[native code\]/ //鍒ゅ畾鏄惁鍘熺敓鍑芥暟
	var rarraylike = /(Array|List|Collection|Map|Arguments)\]$/
	var ohasOwn = avalon.ohasOwn
	// avalon.quote
	//https://github.com/bestiejs/json3/blob/master/lib/json3.js
	var Escapes = {
	    92: "\\\\",
	    34: '\\"',
	    8: "\\b",
	    12: "\\f",
	    10: "\\n",
	    13: "\\r",
	    9: "\\t"
	}

	// Internal: Converts `value` into a zero-padded string such that its
	// length is at least equal to `width`. The `width` must be <= 6.
	var leadingZeroes = "000000"
	var toPaddedString = function (width, value) {
	    // The `|| 0` expression is necessary to work around a bug in
	    // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
	    return (leadingZeroes + (value || 0)).slice(-width)
	};
	var unicodePrefix = "\\u00"
	var escapeChar = function (character) {
	    var charCode = character.charCodeAt(0), escaped = Escapes[charCode]
	    if (escaped) {
	        return escaped
	    }
	    return unicodePrefix + toPaddedString(2, charCode.toString(16))
	};
	var reEscape = /[\x00-\x1f\x22\x5c]/g
	function quote(value) {
	    reEscape.lastIndex = 0
	    return '"' + ( reEscape.test(value)? String(value).replace(reEscape, escapeChar) : value ) + '"'
	}

	avalon.quote = typeof JSON !== 'undefined' ? JSON.stringify : quote

	// avalon.type
	var class2type = {}
	'Boolean Number String Function Array Date RegExp Object Error'.replace(avalon.rword, function (name) {
	    class2type['[object ' + name + ']'] = name.toLowerCase()
	})

	avalon.type = function (obj) { //鍙栧緱鐩爣鐨勭被鍨�
	    if (obj == null) {
	        return String(obj)
	    }
	    // 鏃╂湡鐨剋ebkit鍐呮牳娴忚鍣ㄥ疄鐜颁簡宸插簾寮冪殑ecma262v4鏍囧噯锛屽彲浠ュ皢姝ｅ垯瀛楅潰閲忓綋浣滃嚱鏁颁娇鐢紝鍥犳typeof鍦ㄥ垽瀹氭鍒欐椂浼氳繑鍥瀎unction
	    return typeof obj === 'object' || typeof obj === 'function' ?
	            class2type[serialize.call(obj)] || 'object' :
	            typeof obj
	}

	var rfunction = /^\s*\bfunction\b/

	avalon.isFunction = typeof alert === 'object' ? function (fn) {
	    try {
	        return rfunction.test(fn + '')
	    } catch (e) {
	        return false
	    }
	} : function (fn) {
	    return serialize.call(fn) === '[object Function]'
	}

	avalon.isWindow = function (obj) {
	    if (!obj)
	        return false
	    // 鍒╃敤IE678 window == document涓簍rue,document == window绔熺劧涓篺alse鐨勭濂囩壒鎬�
	    // 鏍囧噯娴忚鍣ㄥ強IE9锛孖E10绛変娇鐢� 姝ｅ垯妫€娴�
	    return obj == obj.document && obj.document != obj //jshint ignore:line
	}


	function isWindow(obj) {
	    return rwindow.test(serialize.call(obj))
	}

	if (isWindow(avalon.window)) {
	    avalon.isWindow = isWindow
	}

	var enu, enumerateBUG
	for (enu in avalon({})) {
	    break
	}
	enumerateBUG = enu !== '0' //IE6涓嬩负true, 鍏朵粬涓篺alse

	/*鍒ゅ畾鏄惁鏄竴涓湸绱犵殑javascript瀵硅薄锛圤bject锛夛紝涓嶆槸DOM瀵硅薄锛屼笉鏄疊OM瀵硅薄锛屼笉鏄嚜瀹氫箟绫荤殑瀹炰緥*/
	avalon.isPlainObject = function (obj, key) {
	    if (!obj || avalon.type(obj) !== 'object' || obj.nodeType || avalon.isWindow(obj)) {
	        return false
	    }
	    try { //IE鍐呯疆瀵硅薄娌℃湁constructor
	        if (obj.constructor &&
	                !ohasOwn.call(obj, 'constructor') &&
	                !ohasOwn.call(obj.constructor.prototype || {}, 'isPrototypeOf')) {
	            return false
	        }
	    } catch (e) { //IE8 9浼氬湪杩欓噷鎶涢敊
	        return false
	    }
	    if (enumerateBUG) {
	        for (key in obj) {
	            return ohasOwn.call(obj, key)
	        }
	    }
	    for (key in obj) {
	    }
	    return key === void 0 || ohasOwn.call(obj, key)
	}


	if (rnative.test(Object.getPrototypeOf)) {
	    avalon.isPlainObject = function (obj) {
	        // 绠€鍗曠殑 typeof obj === 'object'妫€娴嬶紝浼氳嚧浣跨敤isPlainObject(window)鍦╫pera涓嬮€氫笉杩�
	        return serialize.call(obj) === '[object Object]' &&
	                Object.getPrototypeOf(obj) === Object.prototype
	    }
	}

	//涓巎Query.extend鏂规硶锛屽彲鐢ㄤ簬娴呮嫹璐濓紝娣辨嫹璐�
	avalon.mix = avalon.fn.mix = function () {
	    var options, name, src, copy, copyIsArray, clone,
	            target = arguments[0] || {},
	            i = 1,
	            length = arguments.length,
	            deep = false

	    // 濡傛灉绗竴涓弬鏁颁负甯冨皵,鍒ゅ畾鏄惁娣辨嫹璐�
	    if (typeof target === 'boolean') {
	        deep = target
	        target = arguments[1] || {}
	        i++
	    }

	    //纭繚鎺ュ彈鏂逛负涓€涓鏉傜殑鏁版嵁绫诲瀷
	    if (typeof target !== 'object' && !avalon.isFunction(target)) {
	        target = {}
	    }

	    //濡傛灉鍙湁涓€涓弬鏁帮紝閭ｄ箞鏂版垚鍛樻坊鍔犱簬mix鎵€鍦ㄧ殑瀵硅薄涓�
	    if (i === length) {
	        target = this
	        i--
	    }

	    for (; i < length; i++) {
	        //鍙鐞嗛潪绌哄弬鏁�
	        if ((options = arguments[i]) != null) {
	            for (name in options) {
	                try {
	                    src = target[name]
	                    copy = options[name] //褰搊ptions涓篤BS瀵硅薄鏃舵姤閿�
	                } catch (e) {
	                    continue
	                }

	                // 闃叉鐜紩鐢�
	                if (target === copy) {
	                    continue
	                }
	                if (deep && copy && (avalon.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

	                    if (copyIsArray) {
	                        copyIsArray = false
	                        clone = src && Array.isArray(src) ? src : []

	                    } else {
	                        clone = src && avalon.isPlainObject(src) ? src : {}
	                    }

	                    target[name] = avalon.mix(deep, clone, copy)
	                } else if (copy !== void 0) {
	                    target[name] = copy
	                }
	            }
	        }
	    }
	    return target
	}

	/*鍒ゅ畾鏄惁绫绘暟缁勶紝濡傝妭鐐归泦鍚堬紝绾暟缁勶紝arguments涓庢嫢鏈夐潪璐熸暣鏁扮殑length灞炴€х殑绾疛S瀵硅薄*/
	function isArrayLike(obj) {
	    if (!obj)
	        return false
	    var n = obj.length
	    if (n === (n >>> 0)) { //妫€娴媗ength灞炴€ф槸鍚︿负闈炶礋鏁存暟
	        var type = serialize.call(obj).slice(8, -1)
	        if (rarraylike.test(type))
	            return false
	        if (type === 'Array')
	            return true
	        try {
	            if ({}.propertyIsEnumerable.call(obj, 'length') === false) { //濡傛灉鏄師鐢熷璞�
	                return rfunction.test(obj.item || obj.callee)
	            }
	            return true
	        } catch (e) { //IE鐨凬odeList鐩存帴鎶涢敊
	            return !obj.window //IE6-8 window
	        }
	    }
	    return false
	}


	avalon.each = function (obj, fn) {
	    if (obj) { //鎺掗櫎null, undefined
	        var i = 0
	        if (isArrayLike(obj)) {
	            for (var n = obj.length; i < n; i++) {
	                if (fn(i, obj[i]) === false)
	                    break
	            }
	        } else {
	            for (i in obj) {
	                if (obj.hasOwnProperty(i) && fn(i, obj[i]) === false) {
	                    break
	                }
	            }
	        }
	    }
	}

	module.exports = {
	    avalon: avalon,
	    isArrayLike: isArrayLike
	}



/***/ },
/* 6 */
/***/ function(module, exports) {

	var cssHooks = {}
	var rhyphen = /([a-z\d])([A-Z]+)/g
	var rcamelize = /[-_][^-_]/g
	var rhashcode = /\d\.\d{4}/
	var rescape = /[-.*+?^${}()|[\]\/\\]/g

	var _slice = [].slice
	avalon.shadowCopy(avalon, {
	    caches: {}, //avalon2.0 鏂板
	    vmodels: {},
	    filters: {},
	    components: {},//鏀剧疆缁勪欢鐨勭被
	    resolvedComponents:{},//鏀剧疆缁勪欢鐨勫疄渚�
	    directives: {},
	    eventHooks: {},
	    eventListeners: {},
	    validators: {},
	    cssHooks: cssHooks,
	    parsers: {
	        number: function (a) {
	            return a === '' ? '' : parseFloat(a) || 0
	        },
	        string: function (a) {
	            return a === null || a === void 0 ? '' : a + ''
	        },
	        boolean: function (a) {
	            return a === 'true'
	        }
	    },
	    version: "2.0",
	    slice: function (nodes, start, end) {
	        return _slice.call(nodes, start, end)
	    },
	    css: function (node, name, value, fn) {
	        //璇诲啓鍒犻櫎鍏冪礌鑺傜偣鐨勬牱寮�
	        if (node instanceof avalon) {
	            node = node[0]
	        }
	        var prop = avalon.camelize(name)
	        name = avalon.cssName(prop) || prop
	        if (value === void 0 || typeof value === 'boolean') { //鑾峰彇鏍峰紡
	            fn = cssHooks[prop + ':get'] || cssHooks['@:get']
	            if (name === 'background') {
	                name = 'backgroundColor'
	            }
	            var val = fn(node, name)
	            return value === true ? parseFloat(val) || 0 : val
	        } else if (value === '') { //璇烽櫎鏍峰紡
	            node.style[name] = ''
	        } else { //璁剧疆鏍峰紡
	            if (value == null || value !== value) {
	                return
	            }
	            if (isFinite(value) && !avalon.cssNumber[prop]) {
	                value += 'px'
	            }
	            fn = cssHooks[prop + ':set'] || cssHooks['@:set']
	            fn(node, name, value)
	        }
	    },
	    directive: function (name, definition) {
	        return this.directives[name] = definition
	    },
	    isObject: function (a) {//1.6鏂板
	        return a !== null && typeof a === 'object'
	    },
	    /* avalon.range(10)
	     => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	     avalon.range(1, 11)
	     => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	     avalon.range(0, 30, 5)
	     => [0, 5, 10, 15, 20, 25]
	     avalon.range(0, -10, -1)
	     => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
	     avalon.range(0)
	     => []*/
	    range: function (start, end, step) { // 鐢ㄤ簬鐢熸垚鏁存暟鏁扮粍
	        step || (step = 1)
	        if (end == null) {
	            end = start || 0
	            start = 0
	        }
	        var index = -1,
	                length = Math.max(0, Math.ceil((end - start) / step)),
	                result = new Array(length)
	        while (++index < length) {
	            result[index] = start
	            start += step
	        }
	        return result
	    },
	    hyphen: function (target) {
	        //杞崲涓鸿繛瀛楃绾块鏍�
	        return target.replace(rhyphen, '$1-$2').toLowerCase()
	    },
	    camelize: function (target) {
	        //鎻愬墠鍒ゆ柇锛屾彁楂榞etStyle绛夌殑鏁堢巼
	        if (!target || target.indexOf('-') < 0 && target.indexOf('_') < 0) {
	            return target
	        }
	        //杞崲涓洪┘宄伴鏍�
	        return target.replace(rcamelize, function (match) {
	            return match.charAt(1).toUpperCase()
	        })
	    },
	    //鐢熸垚UUID http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
	    makeHashCode: function (prefix) {
	        prefix = prefix || 'avalon'
	        return String(Math.random() + Math.random()).replace(rhashcode, prefix)
	    },
	    escapeRegExp: function (target) {
	        //http://stevenlevithan.com/regex/xregexp/
	        //灏嗗瓧绗︿覆瀹夊叏鏍煎紡鍖栦负姝ｅ垯琛ㄨ揪寮忕殑婧愮爜
	        return (target + '').replace(rescape, '\\$&')
	    },
	    Array: {
	        merge: function (target, other) {
	            //鍚堝苟涓や釜鏁扮粍 avalon2鏂板
	            target.push.apply(target, other)
	        },
	        ensure: function (target, item) {
	            //鍙湁褰撳墠鏁扮粍涓嶅瓨鍦ㄦ鍏冪礌鏃跺彧娣诲姞瀹�
	            if (target.indexOf(item) === -1) {
	                return target.push(item)
	            }
	        },
	        removeAt: function (target, index) {
	            //绉婚櫎鏁扮粍涓寚瀹氫綅缃殑鍏冪礌锛岃繑鍥炲竷灏旇〃绀烘垚鍔熶笌鍚�
	            return !!target.splice(index, 1).length
	        },
	        remove: function (target, item) {
	            //绉婚櫎鏁扮粍涓涓€涓尮閰嶄紶鍙傜殑閭ｄ釜鍏冪礌锛岃繑鍥炲竷灏旇〃绀烘垚鍔熶笌鍚�
	            var index = target.indexOf(item)
	            if (~index)
	                return avalon.Array.removeAt(target, index)
	            return false
	        }
	    }
	})

	var uuid = 1
	module.exports = {
	    //鐢熸垚浜嬩欢鍥炶皟鐨刄UID(鐢ㄦ埛閫氳繃ms-on鎸囦护)
	    avalon: avalon,
	    getLongID: function (fn) {
	        return fn.uuid || (fn.uuid = avalon.makeHashCode('e'))
	    },
	    //鐢熸垚浜嬩欢鍥炶皟鐨刄UID(鐢ㄦ埛閫氳繃avalon.bind)
	    getShortID: function (fn) {
	        return fn.uuid || (fn.uuid = '_' + (++uuid))
	    }
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	
	function kernel(settings) {
	    for (var p in settings) {
	        if (!avalon.ohasOwn.call(settings, p))
	            continue
	        var val = settings[p]
	        if (typeof kernel.plugins[p] === 'function') {
	            kernel.plugins[p](val)
	        } else if (typeof kernel[p] === 'object') {
	            avalon.shadowCopy(kernel[p], val)
	        } else {
	            kernel[p] = val
	        }
	    }
	    return this
	}

	avalon.config = kernel

	var plugins = {
	    interpolate: function (array) {
	        var openTag = array[0]
	        var closeTag = array[1]
	        /*eslint-disable */
	        if (openTag === closeTag) {
	            throw new SyntaxError('openTag!==closeTag')
	        }
	        var test = openTag + 'test' + closeTag
	        var div = avalon.avalonDiv
	        div.innerHTML = test
	        if (div.innerHTML !== test && div.innerHTML.indexOf('&lt;') > -1) {
	            throw new SyntaxError('姝ゅ畾鐣岀涓嶅悎娉�')
	        }
	        div.innerHTML = ''
	        /*eslint-enable */
	        kernel.openTag = openTag
	        kernel.closeTag = closeTag
	        var o = avalon.escapeRegExp(openTag)
	        var c = avalon.escapeRegExp(closeTag)
	        kernel.rexpr = new RegExp(o + '([\\ss\\S]*)' + c)
	        kernel.rexprg = new RegExp(o + '([\\ss\\S]*)' + c, 'g')
	        kernel.rbind = new RegExp(o + '[\\ss\\S]*' + c + '|\\bms-|\\bslot\\b')
	    }
	}
	kernel.plugins = plugins
	kernel.plugins['interpolate'](['{{', '}}'])

	kernel.debug = true


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	
	var number = __webpack_require__(9)
	var escape = __webpack_require__(10)
	var sanitize = __webpack_require__(11)
	var date = __webpack_require__(12)
	var arrayFilters = __webpack_require__(13)
	var eventFilters = __webpack_require__(14)
	var filters = avalon.filters

	function K(a) {
	    return a
	}

	avalon.__format__ = function (name) {
	    var fn = filters[name]
	    if (fn) {
	        return fn.get ? fn.get : fn
	    }
	    return K
	}


	avalon.mix(filters, {
	    uppercase: function (str) {
	        return str.toUpperCase()
	    },
	    lowercase: function (str) {
	        return str.toLowerCase()
	    },
	    truncate: function (str, length, truncation) {
	        //length锛屾柊瀛楃涓查暱搴︼紝truncation锛屾柊瀛楃涓茬殑缁撳熬鐨勫瓧娈�,杩斿洖鏂板瓧绗︿覆
	        length = length || 30
	        truncation = typeof truncation === "string" ? truncation : "..."
	        return str.length > length ?
	                str.slice(0, length - truncation.length) + truncation :
	                String(str)
	    },
	    camelize: avalon.camelize,
	    date: date,
	    escape: escape,
	    sanitize: sanitize,
	    number: number,
	    currency: function (amount, symbol, fractionSize) {
	        return (symbol || "\uFFE5") +
	                number(amount,
	                        isFinite(fractionSize) ? fractionSize : 2)
	    }
	}, arrayFilters, eventFilters)







	module.exports = avalon

/***/ },
/* 9 */
/***/ function(module, exports) {

	function number(number, decimals, point, thousands) {
	    //form http://phpjs.org/functions/number_format/
	    //number 蹇呴渶锛岃鏍煎紡鍖栫殑鏁板瓧
	    //decimals 鍙€夛紝瑙勫畾澶氬皯涓皬鏁颁綅銆�
	    //point 鍙€夛紝瑙勫畾鐢ㄤ綔灏忔暟鐐圭殑瀛楃涓诧紙榛樿涓� . 锛夈€�
	    //thousands 鍙€夛紝瑙勫畾鐢ㄤ綔鍗冧綅鍒嗛殧绗︾殑瀛楃涓诧紙榛樿涓� , 锛夛紝濡傛灉璁剧疆浜嗚鍙傛暟锛岄偅涔堟墍鏈夊叾浠栧弬鏁伴兘鏄繀闇€鐨勩€�
	    number = (number + '')
	            .replace(/[^0-9+\-Ee.]/g, '')
	    var n = !isFinite(+number) ? 0 : +number,
	            prec = !isFinite(+decimals) ? 3 : Math.abs(decimals),
	            sep = thousands || ",",
	            dec = point || ".",
	            s = '',
	            toFixedFix = function (n, prec) {
	                var k = Math.pow(10, prec)
	                return '' + (Math.round(n * k) / k)
	                        .toFixed(prec)
	            }
	    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
	    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
	            .split('.')
	    if (s[0].length > 3) {
	        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
	    }
	    if ((s[1] || '')
	            .length < prec) {
	        s[1] = s[1] || ''
	        s[1] += new Array(prec - s[1].length + 1)
	                .join('0')
	    }
	    return s.join(dec)
	}

	module.exports = number

	//澶勭悊 璐у竵 http://openexchangerates.github.io/accounting.js/

/***/ },
/* 10 */
/***/ function(module, exports) {

	
	var rsurrogate = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
	var rnoalphanumeric = /([^\#-~| |!])/g

	function escape(str) {
	    //灏嗗瓧绗︿覆缁忚繃 str 杞箟寰楀埌閫傚悎鍦ㄩ〉闈腑鏄剧ず鐨勫唴瀹�, 渚嬪鏇挎崲 < 涓� &lt 
	    return String(str).
	            replace(/&/g, '&amp;').
	            replace(rsurrogate, function (value) {
	                var hi = value.charCodeAt(0)
	                var low = value.charCodeAt(1)
	                return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';'
	            }).
	            replace(rnoalphanumeric, function (value) {
	                return '&#' + value.charCodeAt(0) + ';'
	            }).
	            replace(/</g, '&lt;').
	            replace(/>/g, '&gt;')
	}

	module.exports = escape

/***/ },
/* 11 */
/***/ function(module, exports) {

	var rscripts = /<script[^>]*>([\S\s]*?)<\/script\s*>/gim
	var ron = /\s+(on[^=\s]+)(?:=("[^"]*"|'[^']*'|[^\s>]+))?/g
	var ropen = /<\w+\b(?:(["'])[^"]*?(\1)|[^>])*>/ig
	var rsanitize = {
	    a: /\b(href)\=("javascript[^"]*"|'javascript[^']*')/ig,
	    img: /\b(src)\=("javascript[^"]*"|'javascript[^']*')/ig,
	    form: /\b(action)\=("javascript[^"]*"|'javascript[^']*')/ig
	}


	//https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	//    <a href="javasc&NewLine;ript&colon;alert('XSS')">chrome</a> 
	//    <a href="data:text/html;base64, PGltZyBzcmM9eCBvbmVycm9yPWFsZXJ0KDEpPg==">chrome</a>
	//    <a href="jav	ascript:alert('XSS');">IE67chrome</a>
	//    <a href="jav&#x09;ascript:alert('XSS');">IE67chrome</a>
	//    <a href="jav&#x0A;ascript:alert('XSS');">IE67chrome</a>
	module.exports = function sanitize(str) {
	    return str.replace(rscripts, "").replace(ropen, function (a, b) {
	        var match = a.toLowerCase().match(/<(\w+)\s/)
	        if (match) { //澶勭悊a鏍囩鐨刪ref灞炴€э紝img鏍囩鐨剆rc灞炴€э紝form鏍囩鐨刟ction灞炴€�
	            var reg = rsanitize[match[1]]
	            if (reg) {
	                a = a.replace(reg, function (s, name, value) {
	                    var quote = value.charAt(0)
	                    return name + "=" + quote + "javascript:void(0)" + quote// jshint ignore:line
	                })
	            }
	        }
	        return a.replace(ron, " ").replace(/\s+/g, " ") //绉婚櫎onXXX浜嬩欢
	    })
	}


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
	 'yyyy': 4 digit representation of year (e.g. AD 1 => 0001, AD 2010 => 2010)
	 'yy': 2 digit representation of year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
	 'y': 1 digit representation of year, e.g. (AD 1 => 1, AD 199 => 199)
	 'MMMM': Month in year (January-December)
	 'MMM': Month in year (Jan-Dec)
	 'MM': Month in year, padded (01-12)
	 'M': Month in year (1-12)
	 'dd': Day in month, padded (01-31)
	 'd': Day in month (1-31)
	 'EEEE': Day in Week,(Sunday-Saturday)
	 'EEE': Day in Week, (Sun-Sat)
	 'HH': Hour in day, padded (00-23)
	 'H': Hour in day (0-23)
	 'hh': Hour in am/pm, padded (01-12)
	 'h': Hour in am/pm, (1-12)
	 'mm': Minute in hour, padded (00-59)
	 'm': Minute in hour (0-59)
	 'ss': Second in minute, padded (00-59)
	 's': Second in minute (0-59)
	 'a': am/pm marker
	 'Z': 4 digit (+sign) representation of the timezone offset (-1200-+1200)
	 format string can also be one of the following predefined localizable formats:
	 
	 'medium': equivalent to 'MMM d, y h:mm:ss a' for en_US locale (e.g. Sep 3, 2010 12:05:08 pm)
	 'short': equivalent to 'M/d/yy h:mm a' for en_US locale (e.g. 9/3/10 12:05 pm)
	 'fullDate': equivalent to 'EEEE, MMMM d,y' for en_US locale (e.g. Friday, September 3, 2010)
	 'longDate': equivalent to 'MMMM d, y' for en_US locale (e.g. September 3, 2010
	 'mediumDate': equivalent to 'MMM d, y' for en_US locale (e.g. Sep 3, 2010)
	 'shortDate': equivalent to 'M/d/yy' for en_US locale (e.g. 9/3/10)
	 'mediumTime': equivalent to 'h:mm:ss a' for en_US locale (e.g. 12:05:08 pm)
	 'shortTime': equivalent to 'h:mm a' for en_US locale (e.g. 12:05 pm)
	 */

	function toInt(str) {
	    return parseInt(str, 10) || 0
	}

	function padNumber(num, digits, trim) {
	    var neg = ""
	    if (num < 0) {
	        neg = '-'
	        num = -num
	    }
	    num = "" + num
	    while (num.length < digits)
	        num = "0" + num
	    if (trim)
	        num = num.substr(num.length - digits)
	    return neg + num
	}

	function dateGetter(name, size, offset, trim) {
	    return function (date) {
	        var value = date["get" + name]()
	        if (offset > 0 || value > -offset)
	            value += offset
	        if (value === 0 && offset === -12) {
	            value = 12
	        }
	        return padNumber(value, size, trim)
	    }
	}

	function dateStrGetter(name, shortForm) {
	    return function (date, formats) {
	        var value = date["get" + name]()
	        var get = (shortForm ? ("SHORT" + name) : name).toUpperCase()
	        return formats[get][value]
	    }
	}

	function timeZoneGetter(date) {
	    var zone = -1 * date.getTimezoneOffset()
	    var paddedZone = (zone >= 0) ? "+" : ""
	    paddedZone += padNumber(Math[zone > 0 ? "floor" : "ceil"](zone / 60), 2) + padNumber(Math.abs(zone % 60), 2)
	    return paddedZone
	}
	//鍙栧緱涓婂崍涓嬪崍

	function ampmGetter(date, formats) {
	    return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1]
	}
	var DATE_FORMATS = {
	    yyyy: dateGetter("FullYear", 4),
	    yy: dateGetter("FullYear", 2, 0, true),
	    y: dateGetter("FullYear", 1),
	    MMMM: dateStrGetter("Month"),
	    MMM: dateStrGetter("Month", true),
	    MM: dateGetter("Month", 2, 1),
	    M: dateGetter("Month", 1, 1),
	    dd: dateGetter("Date", 2),
	    d: dateGetter("Date", 1),
	    HH: dateGetter("Hours", 2),
	    H: dateGetter("Hours", 1),
	    hh: dateGetter("Hours", 2, -12),
	    h: dateGetter("Hours", 1, -12),
	    mm: dateGetter("Minutes", 2),
	    m: dateGetter("Minutes", 1),
	    ss: dateGetter("Seconds", 2),
	    s: dateGetter("Seconds", 1),
	    sss: dateGetter("Milliseconds", 3),
	    EEEE: dateStrGetter("Day"),
	    EEE: dateStrGetter("Day", true),
	    a: ampmGetter,
	    Z: timeZoneGetter
	}
	var rdateFormat = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/
	var raspnetjson = /^\/Date\((\d+)\)\/$/
	function dateFilter(date, format) {
	    var locate = dateFilter.locate,
	            text = "",
	            parts = [],
	            fn, match
	    format = format || "mediumDate"
	    format = locate[format] || format
	    if (typeof date === "string") {
	        if (/^\d+$/.test(date)) {
	            date = toInt(date)
	        } else if (raspnetjson.test(date)) {
	            date = +RegExp.$1
	        } else {
	            var trimDate = date.trim()
	            var dateArray = [0, 0, 0, 0, 0, 0, 0]
	            var oDate = new Date(0)
	            //鍙栧緱骞存湀鏃�
	            trimDate = trimDate.replace(/^(\d+)\D(\d+)\D(\d+)/, function (_, a, b, c) {
	                var array = c.length === 4 ? [c, a, b] : [a, b, c]
	                dateArray[0] = toInt(array[0])     //骞�
	                dateArray[1] = toInt(array[1]) - 1 //鏈�
	                dateArray[2] = toInt(array[2])     //鏃�
	                return ""
	            })
	            var dateSetter = oDate.setFullYear
	            var timeSetter = oDate.setHours
	            trimDate = trimDate.replace(/[T\s](\d+):(\d+):?(\d+)?\.?(\d)?/, function (_, a, b, c, d) {
	                dateArray[3] = toInt(a) //灏忔椂
	                dateArray[4] = toInt(b) //鍒嗛挓
	                dateArray[5] = toInt(c) //绉�
	                if (d) {                //姣
	                    dateArray[6] = Math.round(parseFloat("0." + d) * 1000)
	                }
	                return ""
	            })
	            var tzHour = 0
	            var tzMin = 0
	            trimDate = trimDate.replace(/Z|([+-])(\d\d):?(\d\d)/, function (z, symbol, c, d) {
	                dateSetter = oDate.setUTCFullYear
	                timeSetter = oDate.setUTCHours
	                if (symbol) {
	                    tzHour = toInt(symbol + c)
	                    tzMin = toInt(symbol + d)
	                }
	                return ""
	            })

	            dateArray[3] -= tzHour
	            dateArray[4] -= tzMin
	            dateSetter.apply(oDate, dateArray.slice(0, 3))
	            timeSetter.apply(oDate, dateArray.slice(3))
	            date = oDate
	        }
	    }
	    if (typeof date === "number") {
	        date = new Date(date)
	    }
	    if (avalon.type(date) !== "date") {
	        return
	    }
	    while (format) {
	        match = rdateFormat.exec(format)
	        if (match) {
	            parts = parts.concat(match.slice(1))
	            format = parts.pop()
	        } else {
	            parts.push(format)
	            format = null
	        }
	    }
	    parts.forEach(function (value) {
	        fn = DATE_FORMATS[value]
	        text += fn ? fn(date, locate) : value.replace(/(^'|'$)/g, "").replace(/''/g, "'")
	    })
	    return text
	}


	var locate = {
	    AMPMS: {
	        0: "涓婂崍",
	        1: "涓嬪崍"
	    },
	    DAY: {
	        0: "鏄熸湡鏃�",
	        1: "鏄熸湡涓€",
	        2: "鏄熸湡浜�",
	        3: "鏄熸湡涓�",
	        4: "鏄熸湡鍥�",
	        5: "鏄熸湡浜�",
	        6: "鏄熸湡鍏�"
	    },
	    MONTH: {
	        0: "1鏈�",
	        1: "2鏈�",
	        2: "3鏈�",
	        3: "4鏈�",
	        4: "5鏈�",
	        5: "6鏈�",
	        6: "7鏈�",
	        7: "8鏈�",
	        8: "9鏈�",
	        9: "10鏈�",
	        10: "11鏈�",
	        11: "12鏈�"
	    },
	    SHORTDAY: {
	        "0": "鍛ㄦ棩",
	        "1": "鍛ㄤ竴",
	        "2": "鍛ㄤ簩",
	        "3": "鍛ㄤ笁",
	        "4": "鍛ㄥ洓",
	        "5": "鍛ㄤ簲",
	        "6": "鍛ㄥ叚"
	    },
	    fullDate: "y骞碝鏈坉鏃EEE",
	    longDate: "y骞碝鏈坉鏃�",
	    medium: "yyyy-M-d H:mm:ss",
	    mediumDate: "yyyy-M-d",
	    mediumTime: "H:mm:ss",
	    "short": "yy-M-d ah:mm",
	    shortDate: "yy-M-d",
	    shortTime: "ah:mm"
	}
	locate.SHORTMONTH = locate.MONTH
	dateFilter.locate = locate

	module.exports = dateFilter

/***/ },
/* 13 */
/***/ function(module, exports) {

	
	function orderBy(array, criteria, reverse) {
	    var type = avalon.type(array)
	    if (type !== 'array' && type !== 'object')
	        throw 'orderBy鍙兘澶勭悊瀵硅薄鎴栨暟缁�'
	    var order = (reverse && reverse < 0) ? -1 : 1

	    if (typeof criteria === 'string') {
	        var key = criteria
	        criteria = function (a) {
	            return a && a[key]
	        }
	    }
	    array = convertArray(array)
	    array.forEach(function (el) {
	        el.order = criteria(el.value, el.key)
	    })
	    array.sort(function (left, right) {
	        var a = left.order
	        var b = right.order
	        if(Number.isNaN(a) && Number.isNaN(b)){
	            return 0
	        }
	        return a === b ? 0 : a > b ? order : -order
	    })
	    var isArray = type === 'array'
	    var target = isArray ? [] : {}
	    return recovery(target, array, function (el) {
	        if (isArray) {
	            target.push(el.value)
	        } else {
	            target[el.key] = el.value
	        }
	    })
	}
	function filterBy(array, search) {
	    var type = avalon.type(array)
	    if (type !== 'array' && type !== 'object')
	        throw 'filterBy鍙兘澶勭悊瀵硅薄鎴栨暟缁�'
	    var args = avalon.slice(arguments, 2)
	    if (typeof search === 'function') {
	        var criteria = search
	    } else if (typeof search === 'string') {
	        if(search.trim() === ''){
	           criteria = function(){
	               return false
	           }
	        }else{
	           args.unshift(new RegExp(avalon.escapeRegExp(search), 'i'))
	           criteria = containKey
	        }
	        
	    } else {
	        throw search + '蹇呴』鏄瓧绗︿覆鎴栧嚱鏁�'
	    }

	    array = convertArray(array).filter(function (el) {
	        聽return !!criteria.apply(el, [el.value].concat(args))
	    })
	    var isArray = type === 'array'
	    var target = isArray ? [] : {}
	    return recovery(target, array, function (el) {
	        if (isArray) {
	            target.push(el.value)
	        } else {
	            target[el.key] = el.value
	        }
	    })
	}

	function selectBy(data, array, defaults) {
	    if (avalon.isObject(data) && !Array.isArray(data)) {
	        var target = []
	        return recovery(target, array, function (name) {
	            target.push(data.hasOwnProperty(name) ? data[name] : defaults ? defaults[name]: '' )
	        })
	    } else {
	        throw 'selectBy鍙敮鎸佸璞�'
	    }
	}

	Number.isNaN = Number.isNaN || function(a){
	    return a !== a
	}

	function limitBy(input, limit, begin) {
	    if (Math.abs(Number(limit)) === Infinity) {
	        limit = Number(limit);
	    } else {
	        limit = parseInt(limit,10)
	    }
	    if (Number.isNaN(limit))
	        return input

	    if (typeof input === 'number')
	        input = input + ''
	    if ((!Array.isArray(input)) && (typeof input !== 'string'))
	        return input

	    begin = (!begin || Number.isNaN(begin)) ? 0 : ~~begin
	  
	    
	    begin = (begin < 0) ? Math.max(0, input.length + begin) : begin
	    if (limit >= 0) {
	        input = input.slice(begin, begin + limit)
	    } else {
	        if (begin === 0) {
	            input = input.slice(limit, input.length)
	        } else {
	            input = input.slice(Math.max(0, begin + limit), begin);
	        }
	    }

	    return recovery(input, [])
	}

	function recovery(ret, array, callback) {
	    for (var i = 0, n = array.length; i < n; i++) {
	        callback(array[i])
	    }
	    return ret
	}

	function containKey(a, reg) {
	    if (avalon.isPlainObject(a)) {
	        for (var k in a) {
	            if (reg.test(a[k]))
	                return true
	        }
	    } else if (Array.isArray(a)) {
	        return a.some(function (b) {
	            return reg.test(b)
	        })
	    } else if (a !== null) {
	        return reg.test(a)
	    }
	    return false
	}

	function convertArray(array) {
	    var ret = [], i = 0
	    avalon.each(array, function (key, value) {
	        ret[i++] = {
	            value: value,
	            key: key
	        }
	    })
	    return ret
	}

	module.exports = {
	    limitBy: limitBy,
	    orderBy: orderBy,
	    selectBy: selectBy,
	    filterBy: filterBy
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	
	var eventFilters = {
	    stop: function (e) {
	        e.stopPropagation()
	        return e
	    },
	    prevent: function (e) {
	        e.preventDefault()
	        return e
	    }
	}
	var keyCode = {
	    esc: 27,
	    tab: 9,
	    enter: 13,
	    space: 32,
	    del: 46,
	    up: 38,
	    left: 37,
	    right: 39,
	    down: 40
	}

	avalon.each(keyCode, function (name, keyCode) {
	    eventFilters[name] = function (e) {
	        if (e.which !== keyCode) {
	            e.$return = true
	        }
	        return e
	    }
	})

	module.exports = eventFilters

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 铏氭嫙DOM鐨�4澶ф瀯閫犲櫒
	 */
	var VText = __webpack_require__(16)
	var VComment = __webpack_require__(17)
	var VElement = __webpack_require__(18)

	avalon.vdomAdaptor = function (obj, method) {
	    switch (obj.nodeType) {
	        case 3:
	            return VText.prototype[method].call(obj) 
	        case 8:
	            return VComment.prototype[method].call(obj)
	        default:
	            return VElement.prototype[method].call(obj)
	    }
	}

	module.exports = {
	    VText: VText,
	    VComment: VComment,
	    VElement: VElement
	}


/***/ },
/* 16 */
/***/ function(module, exports) {

	var rexpr = avalon.config.rexpr

	function VText(text) {
	    if (typeof text === 'string') {
	        this.type = '#text'
	        this.nodeValue = text
	        this.skipContent = !rexpr.test(text)
	        this.nodeType = 3
	    } else {
	        for (var i in text) {
	            this[i] = text[i]
	        }
	    }
	}

	VText.prototype = {
	    constructor: VText,
	    toDOM: function () {
	        return document.createTextNode(this.nodeValue)
	    },
	    toHTML: function () {
	        return this.nodeValue
	    }
	}

	module.exports = VText

/***/ },
/* 17 */
/***/ function(module, exports) {

	
	function VComment(text) {
	    if (typeof text === 'string') {
	        this.type = '#comment'
	        this.nodeValue = text
	        this.skipContent = true
	        this.nodeType = 8
	    } else {
	        for (var i in text) {
	            this[i] = text[i]
	        }
	    }
	}
	VComment.prototype = {
	    constructor: VComment,
	    toDOM: function () {
	        return document.createComment(this.nodeValue)
	    },
	    toHTML: function () {
	        return '<!--' + this.nodeValue + '-->'
	    }
	}

	module.exports = VComment

/***/ },
/* 18 */
/***/ function(module, exports) {

	
	function VElement(type, props, children) {
	    if (typeof type === 'object') {
	        for (var i in type) {
	            this[i] = type[i]
	        }
	    } else {
	        this.nodeType = 1
	        this.type = type
	        this.props = props
	        this.children = children
	        this.template = ''
	    }
	}
	function skipFalseAndFunction(a) {
	    return a !== false && (Object(a) !== a)
	}
	VElement.prototype = {
	    constructor: VElement,
	    toDOM: function () {
	        var dom = document.createElement(this.type)
	        for (var i in this.props) {
	            var val = this.props[i]
	            if (skipFalseAndFunction(val)) {
	                if(i === "class" && avalon.msie < 8){
	                    dom.className = val +''
	                }else{
	                    dom.setAttribute(i, val + '')
	                }
	            }
	        }
	        if (this.skipContent) {
	            switch (this.type) {
	                case 'script':
	                    dom.text = this.template
	                    break
	                case 'style':
	                case 'template':
	                    dom.innerHTML = this.template
	                    break
	                case 'noscript':
	                    dom.textContent = this.template
	                    break
	                default:
	                    var a = avalon.parseHTML(this.template)
	                    dom.appendChild(a)
	                    break
	            }

	        } else if (!this.isVoidTag) {
	            if (this.children.length) {
	                this.children.forEach(function (c) {
	                    dom.appendChild(avalon.vdomAdaptor(c, 'toDOM'))
	                })
	            } else {
	                dom.appendChild(avalon.parseHTML(this.template))
	            }
	        }
	        return dom
	    },
	    toHTML: function () {
	        var arr = []
	        for (var i in this.props) {
	            var val = this.props[i]
	            if (skipFalseAndFunction(val)) {
	                arr.push(i + '=' + avalon.quote(this.props[i] + ''))
	            }
	        }
	        arr = arr.length ? ' ' + arr.join(' ') : ''
	        var str = '<' + this.type + arr
	        if (this.isVoidTag) {
	            return str + '/>'
	        }
	        str += '>'
	        if (this.children.length) {
	            str += this.children.map(function (c) {
	                return avalon.vdomAdaptor(c, 'toHTML')
	            }).join('')
	        } else {
	            str += this.template
	        }
	        return str + '</' + this.type + '>'
	    }
	}

	module.exports = VElement

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 *                          DOM Api
	 * shim,class,data,css,val,html,event,ready  
	 * ------------------------------------------------------------
	 */
	__webpack_require__(20)
	__webpack_require__(21)
	__webpack_require__(22)
	__webpack_require__(23)
	__webpack_require__(24)
	__webpack_require__(25)
	__webpack_require__(31)
	__webpack_require__(33)

	module.exports = avalon

/***/ },
/* 20 */
/***/ function(module, exports) {

	function fixContains(root, el) {
	    try { //IE6-8,娓哥浜嶥OM鏍戝鐨勬枃鏈妭鐐癸紝璁块棶parentNode鏈夋椂浼氭姏閿�
	        while ((el = el.parentNode))
	            if (el === root)
	                return true
	        return false
	    } catch (e) {
	        return false
	    }
	}

	avalon.contains = fixContains
	//IE6-11鐨勬枃妗ｅ璞℃病鏈塩ontains
	if (!avalon.document.contains) {
	    avalon.document.contains = function (b) {
	        return fixContains(document, b)
	    }
	}

	function outerHTML() {
	    return new XMLSerializer().serializeToString(this)
	}

	if (avalon.window.SVGElement) {
	    //safari5+鏄妸contains鏂规硶鏀惧湪Element.prototype涓婅€屼笉鏄疦ode.prototype
	    if (!document.createTextNode('x').contains) {
	        Node.prototype.contains = function (arg) {//IE6-8娌℃湁Node瀵硅薄
	            return !!(this.compareDocumentPosition(arg) & 16)
	        }
	    }

	    var svgns = 'http://www.w3.org/2000/svg'
	    var svg = avalon.document.createElementNS(svgns, 'svg')

	    svg.innerHTML = '<circle fill="red" />'

	    if (!/^\[object SVG\w*Element\]$/.test(svg.firstChild)) {
	        function createSVG(node, parent) {
	            /* jshint ignore:start */
	            if (node && node.childNodes) {
	                var nodes = node.childNodes
	                for (var i = 0, el; el = nodes[i++]; ) {
	                    if (el.nodeType === 1) {
	                        var svg = document.createElementNS(svgns, el.nodeName.toLowerCase())
	                        avalon.each(el.attributes, function (a, attr) {
	                            svg.setAttribute(attr.name, attr.value)
	                        })
	                        createSVG(el, svg)
	                        parent.appendChild(svg)
	                    } else {
	                        parent.appendChild(el.cloneNode(true))
	                    }
	                }
	            }
	            /* jshint ignore:end */
	        }
	        //IE9-11,firefox涓嶆敮鎸丼VG鍏冪礌鐨刬nnerHTML,outerHTML灞炴€�
	        Object.defineProperties(SVGElement.prototype, {
	            outerHTML: {
	                enumerable: true,
	                configurable: true,
	                get: outerHTML,
	                set: function (html) {
	                    var tagName = this.tagName.toLowerCase()
	                    var parent = this.parent
	                    var parsed = avalon.parseHTML(html)
	                    if (tagName === 'svg') {
	                        parent.insertBefore(parsed, this)
	                    } else {
	                        var empty = document.createDocumentFragment()
	                        createSVG(parsed, empty)
	                        parent.insertBefore(empty, this)
	                    }
	                    parent.removeChild(this)
	                }
	            },
	            innerHTML: {
	                enumerable: true,
	                configurable: true,
	                get: function () {
	                    var s = this.outerHTML
	                    var ropen = new RegExp('<' + this.nodeName + '\\b(?:(["\'])[^"]*?(\\1)|[^>])*>', 'i')
	                    var rclose = new RegExp('<\/' + this.nodeName + '>$', 'i')
	                    return s.replace(ropen, '').replace(rclose, '')
	                },
	                set: function (html) {
	                    if (avalon.clearHTML) {
	                        avalon.clearHTML(this)
	                        var frag = avalon.parseHTML(html)
	                        createSVG(frag, this)
	                    }
	                }
	            }
	        })
	    }
	}
	//firefox 鍒�11鏃舵墠鏈塷uterHTML
	if (!avalon.root.outerHTML && window.HTMLElement) { 
	    HTMLElement.prototype.__defineGetter__('outerHTML', outerHTML)
	}




/***/ },
/* 21 */
/***/ function(module, exports) {

	var rnowhite = /\S+/g
	var fakeClassListMethods = {
	    _toString: function () {
	        var node = this.node
	        var cls = node.className
	        var str = typeof cls === 'string' ? cls : cls.baseVal
	        var match = str.match(rnowhite)
	        return match ? match.join(' ') : ''
	    },
	    _contains: function (cls) {
	        return (' ' + this + ' ').indexOf(' ' + cls + ' ') > -1
	    },
	    _add: function (cls) {
	        if (!this.contains(cls)) {
	            this._set(this + ' ' + cls)
	        }
	    },
	    _remove: function (cls) {
	        this._set((' ' + this + ' ').replace(' ' + cls + ' ', ' '))
	    },
	    __set: function (cls) {
	        cls = cls.trim()
	        var node = this.node
	        if (typeof node.className === 'object') {
	            //SVG鍏冪礌鐨刢lassName鏄竴涓璞� SVGAnimatedString { baseVal='', animVal=''}锛屽彧鑳介€氳繃set/getAttribute鎿嶄綔
	            node.setAttribute('class', cls)
	        } else {
	            node.className = cls
	        }
	    } //toggle瀛樺湪鐗堟湰宸紓锛屽洜姝や笉浣跨敤瀹�
	}

	function fakeClassList(node) {
	    if (!('classList' in node)) {
	        node.classList = {
	            node: node
	        }
	        for (var k in fakeClassListMethods) {
	            node.classList[k.slice(1)] = fakeClassListMethods[k]
	        }
	    }
	    return node.classList
	}


	'add,remove'.replace(avalon.rword, function (method) {
	    avalon.fn[method + 'Class'] = function (cls) {
	        var el = this[0] || {}
	        //https://developer.mozilla.org/zh-CN/docs/Mozilla/Firefox/Releases/26
	        if (cls && typeof cls === 'string' && el.nodeType === 1) {
	            cls.replace(rnowhite, function (c) {
	                fakeClassList(el)[method](c)
	            })
	        }
	        return this
	    }
	})

	avalon.fn.mix({
	    hasClass: function (cls) {
	        var el = this[0] || {}
	        return el.nodeType === 1 && fakeClassList(el).contains(cls)
	    },
	    toggleClass: function (value, stateVal) {
	        var isBool = typeof stateVal === 'boolean'
	        var me = this
	        String(value).replace(rnowhite, function (c) {
	            var state = isBool ? stateVal : !me.hasClass(c)
	            me[state ? 'addClass' : 'removeClass'](c)
	        })
	        return this
	    }
	})



/***/ },
/* 22 */
/***/ function(module, exports) {

	
	var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	        rvalidchars = /^[\],:{}\s]*$/,
	        rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
	        rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	        rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g

	avalon.parseJSON = avalon.window.JSON ? JSON.parse : function (data) {
	    if (typeof data === 'string') {
	        data = data.trim();
	        if (data) {
	            if (rvalidchars.test(data.replace(rvalidescape, '@')
	                    .replace(rvalidtokens, ']')
	                    .replace(rvalidbraces, ''))) {
	                return (new Function('return ' + data))() // jshint ignore:line
	            }
	        }
	        avalon.error('Invalid JSON: ' + data)
	    }
	    return data
	}

	function parseData(data) {
	    try {
	        if (typeof data === 'object')
	            return data
	        data = data === 'true' ? true :
	                data === 'false' ? false :
	                data === 'null' ? null : +data + '' === data ? +data :
	                rbrace.test(data) ? avalon.parseJSON(data) : data
	    } catch (e) {
	    }
	    return data
	}

	avalon.fn.attr = function (name, value) {
	    if (arguments.length === 2) {
	        this[0].setAttribute(name, value)
	        return this
	    } else {
	        return this[0].getAttribute(name)
	    }
	}

	avalon.fn.data = function (name, value) {
	    name = 'data-' + avalon.hyphen(name || '')
	    switch (arguments.length) {
	        case 2:
	            this.attr(name, value)
	            return this
	        case 1:
	            var val = this.attr(name)
	            return parseData(val)
	        case 0:
	            var ret = {}
	            avalon.each(this[0].attributes, function (i, attr) {
	                if (attr) {
	                    name = attr.name
	                    if (!name.indexOf('data-')) {
	                        name = avalon.camelize(name.slice(5))
	                        ret[name] = parseData(attr.value)
	                    }
	                }
	            })
	            return ret
	    }
	}



/***/ },
/* 23 */
/***/ function(module, exports) {

	var root = avalon.root
	var window = avalon.window
	var camelize = avalon.camelize
	var cssHooks = avalon.cssHooks

	var prefixes = ['', '-webkit-', '-o-', '-moz-', '-ms-']
	var cssMap = {
	    'float': window.Range ? 'cssFloat' : 'styleFloat'
	}
	avalon.cssNumber = avalon.oneObject('animationIterationCount,columnCount,order,flex,flexGrow,flexShrink,fillOpacity,fontWeight,lineHeight,opacity,orphans,widows,zIndex,zoom')

	avalon.cssName = function (name, host, camelCase) {
	    if (cssMap[name]) {
	        return cssMap[name]
	    }
	    host = host || root.style || {}
	    for (var i = 0, n = prefixes.length; i < n; i++) {
	        camelCase = camelize(prefixes[i] + name)
	        if (camelCase in host) {
	            return (cssMap[name] = camelCase)
	        }
	    }
	    return null
	}


	avalon.fn.css = function (name, value) {
	    if (avalon.isPlainObject(name)) {
	        for (var i in name) {
	            avalon.css(this, i, name[i])
	        }
	    } else {
	        var ret = avalon.css(this, name, value)
	    }
	    return ret !== void 0 ? ret : this
	}

	avalon.fn.position = function () {
	    var offsetParent, offset,
	            elem = this[0],
	            parentOffset = {
	                top: 0,
	                left: 0
	            }
	    if (!elem) {
	        return parentOffset
	    }
	    if (this.css('position') === 'fixed') {
	        offset = elem.getBoundingClientRect()
	    } else {
	        offsetParent = this.offsetParent() //寰楀埌鐪熸鐨刼ffsetParent
	        offset = this.offset() // 寰楀埌姝ｇ‘鐨刼ffsetParent
	        if (offsetParent[0].tagName !== 'HTML') {
	            parentOffset = offsetParent.offset()
	        }
	        parentOffset.top += avalon.css(offsetParent[0], 'borderTopWidth', true)
	        parentOffset.left += avalon.css(offsetParent[0], 'borderLeftWidth', true)

	        // Subtract offsetParent scroll positions
	        parentOffset.top -= offsetParent.scrollTop()
	        parentOffset.left -= offsetParent.scrollLeft()
	    }
	    return {
	        top: offset.top - parentOffset.top - avalon.css(elem, 'marginTop', true),
	        left: offset.left - parentOffset.left - avalon.css(elem, 'marginLeft', true)
	    }
	}
	avalon.fn.offsetParent = function () {
	    var offsetParent = this[0].offsetParent
	    while (offsetParent && avalon.css(offsetParent, 'position') === 'static') {
	        offsetParent = offsetParent.offsetParent;
	    }
	    return avalon(offsetParent || root)
	}

	cssHooks['@:set'] = function (node, name, value) {
	    try {
	        //node.style.width = NaN;node.style.width = 'xxxxxxx';
	        //node.style.width = undefine 鍦ㄦ棫寮廔E涓嬩細鎶涘紓甯�
	        node.style[name] = value
	    } catch (e) {
	    }
	}

	if (window.getComputedStyle) {
	    cssHooks['@:get'] = function (node, name) {
	        if (!node || !node.style) {
	            throw new Error('getComputedStyle瑕佹眰浼犲叆涓€涓妭鐐� ' + node)
	        }
	        var ret, styles = getComputedStyle(node, null)
	        if (styles) {
	            ret = name === 'filter' ? styles.getPropertyValue(name) : styles[name]
	            if (ret === '') {
	                ret = node.style[name] //鍏朵粬娴忚鍣ㄩ渶瑕佹垜浠墜鍔ㄥ彇鍐呰仈鏍峰紡
	            }
	        }
	        return ret
	    }
	    cssHooks['opacity:get'] = function (node) {
	        var ret = cssHooks['@:get'](node, 'opacity')
	        return ret === '' ? '1' : ret
	    }
	} else {
	    var rnumnonpx = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i
	    var rposition = /^(top|right|bottom|left)$/
	    var ralpha = /alpha\([^)]*\)/i
	    var ie8 = !!window.XDomainRequest
	    var salpha = 'DXImageTransform.Microsoft.Alpha'
	    var border = {
	        thin: ie8 ? '1px' : '2px',
	        medium: ie8 ? '3px' : '4px',
	        thick: ie8 ? '5px' : '6px'
	    }
	    cssHooks['@:get'] = function (node, name) {
	        //鍙栧緱绮剧‘鍊硷紝涓嶈繃瀹冩湁鍙兘鏄甫em,pc,mm,pt,%绛夊崟浣�
	        var currentStyle = node.currentStyle
	        var ret = currentStyle[name]
	        if ((rnumnonpx.test(ret) && !rposition.test(ret))) {
	            //鈶狅紝淇濆瓨鍘熸湁鐨剆tyle.left, runtimeStyle.left,
	            var style = node.style,
	                    left = style.left,
	                    rsLeft = node.runtimeStyle.left
	            //鈶＄敱浜庘憿澶勭殑style.left = xxx浼氬奖鍝嶅埌currentStyle.left锛�
	            //鍥犳鎶婂畠currentStyle.left鏀惧埌runtimeStyle.left锛�
	            //runtimeStyle.left鎷ユ湁鏈€楂樹紭鍏堢骇锛屼笉浼歴tyle.left褰卞搷
	            node.runtimeStyle.left = currentStyle.left
	            //鈶㈠皢绮剧‘鍊艰祴缁欏埌style.left锛岀劧鍚庨€氳繃IE鐨勫彟涓€涓鏈夊睘鎬� style.pixelLeft
	            //寰楀埌鍗曚綅涓簆x鐨勭粨鏋滐紱fontSize鐨勫垎鏀http://bugs.jquery.com/ticket/760
	            style.left = name === 'fontSize' ? '1em' : (ret || 0)
	            ret = style.pixelLeft + 'px'
	            //鈶ｈ繕鍘� style.left锛宺untimeStyle.left
	            style.left = left
	            node.runtimeStyle.left = rsLeft
	        }
	        if (ret === 'medium') {
	            name = name.replace('Width', 'Style')
	            //border width 榛樿鍊间负medium锛屽嵆浣垮叾涓�0'
	            if (currentStyle[name] === 'none') {
	                ret = '0px'
	            }
	        }
	        return ret === '' ? 'auto' : border[ret] || ret
	    }
	    cssHooks['opacity:set'] = function (node, name, value) {
	        var style = node.style
	        var opacity = isFinite(value) && value <= 1 ? 'alpha(opacity=' + value * 100 + ')' : ''
	        var filter = style.filter || '';
	        style.zoom = 1
	        //涓嶈兘浣跨敤浠ヤ笅鏂瑰紡璁剧疆閫忔槑搴�
	        //node.filters.alpha.opacity = value * 100
	        style.filter = (ralpha.test(filter) ?
	                filter.replace(ralpha, opacity) :
	                filter + ' ' + opacity).trim()
	        if (!style.filter) {
	            style.removeAttribute('filter')
	        }
	    }
	    cssHooks['opacity:get'] = function (node) {
	        //杩欐槸鏈€蹇殑鑾峰彇IE閫忔槑鍊肩殑鏂瑰紡锛屼笉闇€瑕佸姩鐢ㄦ鍒欎簡锛�
	        var alpha = node.filters.alpha || node.filters[salpha],
	                op = alpha && alpha.enabled ? alpha.opacity : 100
	        return (op / 100) + '' //纭繚杩斿洖鐨勬槸瀛楃涓�
	    }
	}

	'top,left'.replace(avalon.rword, function (name) {
	    cssHooks[name + ':get'] = function (node) {
	        var computed = cssHooks['@:get'](node, name)
	        return /px$/.test(computed) ? computed :
	                avalon(node).position()[name] + 'px'
	    }
	})

	var cssShow = {
	    position: 'absolute',
	    visibility: 'hidden',
	    display: 'block'
	}

	var rdisplayswap = /^(none|table(?!-c[ea]).+)/

	function showHidden(node, array) {
	    //http://www.cnblogs.com/rubylouvre/archive/2012/10/27/2742529.html
	    if (node.offsetWidth <= 0) { //opera.offsetWidth鍙兘灏忎簬0
	        if (rdisplayswap.test(cssHooks['@:get'](node, 'display'))) {
	            var obj = {
	                node: node
	            }
	            for (var name in cssShow) {
	                obj[name] = node.style[name]
	                node.style[name] = cssShow[name]
	            }
	            array.push(obj)
	        }
	        var parent = node.parentNode
	        if (parent && parent.nodeType === 1) {
	            showHidden(parent, array)
	        }
	    }
	}
	avalon.each({
	    Width: 'width',
	    Height: 'height'
	}, function (name, method) {
	    var clientProp = 'client' + name,
	            scrollProp = 'scroll' + name,
	            offsetProp = 'offset' + name
	    cssHooks[method + ':get'] = function (node, which, override) {
	        var boxSizing = -4
	        if (typeof override === 'number') {
	            boxSizing = override
	        }
	        which = name === 'Width' ? ['Left', 'Right'] : ['Top', 'Bottom']
	        var ret = node[offsetProp] // border-box 0
	        if (boxSizing === 2) { // margin-box 2
	            return ret + avalon.css(node, 'margin' + which[0], true) + avalon.css(node, 'margin' + which[1], true)
	        }
	        if (boxSizing < 0) { // padding-box  -2
	            ret = ret - avalon.css(node, 'border' + which[0] + 'Width', true) - avalon.css(node, 'border' + which[1] + 'Width', true)
	        }
	        if (boxSizing === -4) { // content-box -4
	            ret = ret - avalon.css(node, 'padding' + which[0], true) - avalon.css(node, 'padding' + which[1], true)
	        }
	        return ret
	    }
	    cssHooks[method + '&get'] = function (node) {
	        var hidden = [];
	        showHidden(node, hidden);
	        var val = cssHooks[method + ':get'](node)
	        for (var i = 0, obj; obj = hidden[i++]; ) {
	            node = obj.node
	            for (var n in obj) {
	                if (typeof obj[n] === 'string') {
	                    node.style[n] = obj[n]
	                }
	            }
	        }
	        return val
	    }
	    avalon.fn[method] = function (value) { //浼氬拷瑙嗗叾display
	        var node = this[0]
	        if (arguments.length === 0) {
	            if (node.setTimeout) { //鍙栧緱绐楀彛灏哄
	                return node['inner' + name] ||
	                        node.document.documentElement[clientProp] ||
	                        node.document.body[clientProp] //IE6涓嬪墠涓や釜鍒嗗埆涓簎ndefined,0
	            }
	            if (node.nodeType === 9) { //鍙栧緱椤甸潰灏哄
	                var doc = node.documentElement
	                //FF chrome    html.scrollHeight< body.scrollHeight
	                //IE 鏍囧噯妯″紡 : html.scrollHeight> body.scrollHeight
	                //IE 鎬紓妯″紡 : html.scrollHeight 鏈€澶х瓑浜庡彲瑙嗙獥鍙ｅ涓€鐐癸紵
	                return Math.max(node.body[scrollProp], doc[scrollProp], node.body[offsetProp], doc[offsetProp], doc[clientProp])
	            }
	            return cssHooks[method + '&get'](node)
	        } else {
	            return this.css(method, value)
	        }
	    }
	    avalon.fn['inner' + name] = function () {
	        return cssHooks[method + ':get'](this[0], void 0, -2)
	    }
	    avalon.fn['outer' + name] = function (includeMargin) {
	        return cssHooks[method + ':get'](this[0], void 0, includeMargin === true ? 2 : 0)
	    }
	})

	avalon.fn.offset = function () { //鍙栧緱璺濈椤甸潰宸﹀彸瑙掔殑鍧愭爣
	    var node = this[0],
	            box = {
	                left: 0,
	                top: 0
	            }
	    if (!node || !node.tagName || !node.ownerDocument) {
	        return box
	    }
	    var doc = node.ownerDocument,
	            body = doc.body,
	            root = doc.documentElement,
	            win = doc.defaultView || doc.parentWindow
	    if (!avalon.contains(root, node)) {
	        return box
	    }
	    //http://hkom.blog1.fc2.com/?mode=m&no=750 body鐨勫亸绉婚噺鏄笉鍖呭惈margin鐨�
	    //鎴戜滑鍙互閫氳繃getBoundingClientRect鏉ヨ幏寰楀厓绱犵浉瀵逛簬client鐨剅ect.
	    //http://msdn.microsoft.com/en-us/library/ms536433.aspx
	    if (node.getBoundingClientRect) {
	        box = node.getBoundingClientRect() // BlackBerry 5, iOS 3 (original iPhone)
	    }
	    //chrome/IE6: body.scrollTop, firefox/other: root.scrollTop
	    var clientTop = root.clientTop || body.clientTop,
	            clientLeft = root.clientLeft || body.clientLeft,
	            scrollTop = Math.max(win.pageYOffset || 0, root.scrollTop, body.scrollTop),
	            scrollLeft = Math.max(win.pageXOffset || 0, root.scrollLeft, body.scrollLeft)
	    // 鎶婃粴鍔ㄨ窛绂诲姞鍒發eft,top涓幓銆�
	    // IE涓€浜涚増鏈腑浼氳嚜鍔ㄤ负HTML鍏冪礌鍔犱笂2px鐨刡order锛屾垜浠渶瑕佸幓鎺夊畠
	    // http://msdn.microsoft.com/en-us/library/ms533564(VS.85).aspx
	    return {
	        top: box.top + scrollTop - clientTop,
	        left: box.left + scrollLeft - clientLeft
	    }
	}

	//鐢熸垚avalon.fn.scrollLeft, avalon.fn.scrollTop鏂规硶
	avalon.each({
	    scrollLeft: 'pageXOffset',
	    scrollTop: 'pageYOffset'
	}, function (method, prop) {
	    avalon.fn[method] = function (val) {
	        var node = this[0] || {},
	                win = getWindow(node),
	                top = method === 'scrollTop'
	        if (!arguments.length) {
	            return win ? (prop in win) ? win[prop] : root[method] : node[method]
	        } else {
	            if (win) {
	                win.scrollTo(!top ? val : avalon(win).scrollLeft(), top ? val : avalon(win).scrollTop())
	            } else {
	                node[method] = val
	            }
	        }
	    }
	})

	function getWindow(node) {
	    return node.window && node.document ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	function getValType(elem) {
	    var ret = elem.tagName.toLowerCase()
	    return ret === 'input' && /checkbox|radio/.test(elem.type) ? 'checked' : ret
	}
	var roption = /^<option(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s+value[\s=]/i
	var valHooks = {
	    'option:get': avalon.msie ? function (node) {
	        //鍦↖E11鍙奧3C锛屽鏋滄病鏈夋寚瀹歷alue锛岄偅涔坣ode.value榛樿涓簄ode.text锛堝瓨鍦╰rim浣滐級锛屼絾IE9-10鍒欐槸鍙杋nnerHTML(娌rim鎿嶄綔)
	        //specified骞朵笉鍙潬锛屽洜姝ら€氳繃鍒嗘瀽outerHTML鍒ゅ畾鐢ㄦ埛鏈夋病鏈夋樉绀哄畾涔塿alue
	        return roption.test(node.outerHTML) ? node.value : node.text.trim()
	    } : function (node) {
	        return node.value
	    },
	    'select:get': function (node, value) {
	        var option, options = node.options,
	                index = node.selectedIndex,
	                getter = valHooks['option:get'],
	                one = node.type === 'select-one' || index < 0,
	                values = one ? null : [],
	                max = one ? index + 1 : options.length,
	                i = index < 0 ? max : one ? index : 0
	        for (; i < max; i++) {
	            option = options[i]
	            //IE6-9鍦╮eset鍚庝笉浼氭敼鍙榮elected锛岄渶瑕佹敼鐢╥ === index鍒ゅ畾
	            //鎴戜滑杩囨护鎵€鏈塪isabled鐨刼ption鍏冪礌锛屼絾鍦╯afari5涓嬶紝
	            //濡傛灉璁剧疆optgroup涓篸isable锛岄偅涔堝叾鎵€鏈夊瀛愰兘disable
	            //鍥犳褰撲竴涓厓绱犱负disable锛岄渶瑕佹娴嬪叾鏄惁鏄惧紡璁剧疆浜哾isable鍙婂叾鐖惰妭鐐圭殑disable鎯呭喌
	            if ((option.selected || i === index) && !option.disabled &&
	                    (!option.parentNode.disabled || option.parentNode.tagName !== 'OPTGROUP')
	                    ) {
	                value = getter(option)
	                if (one) {
	                    return value
	                }
	                //鏀堕泦鎵€鏈塻elected鍊肩粍鎴愭暟缁勮繑鍥�
	                values.push(value)
	            }
	        }
	        return values
	    },
	    'select:set': function (node, values, optionSet) {
	        values = [].concat(values) //寮哄埗杞崲涓烘暟缁�
	        var getter = valHooks['option:get']
	        for (var i = 0, el; el = node.options[i++]; ) {
	            if ((el.selected = values.indexOf(getter(el)) > -1)) {
	                optionSet = true
	            }
	        }
	        if (!optionSet) {
	            node.selectedIndex = -1
	        }
	    }
	}

	avalon.fn.val = function (value) {
	    var node = this[0]
	    if (node && node.nodeType === 1) {
	        var get = arguments.length === 0
	        var access = get ? ':get' : ':set'
	        var fn = valHooks[getValType(node) + access]
	        if (fn) {
	            var val = fn(node, value)
	        } else if (get) {
	            return (node.value || '').replace(/\r/g, '')
	        } else {
	            node.value = value
	        }
	    }
	    return get ? val : this
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var Cache = __webpack_require__(26)
	var fixScript = __webpack_require__(27)
	var fixTbodyVML = __webpack_require__(28)
	var fixCloneNode = __webpack_require__(30)

	var tagHooks = {
	    area: [1, '<map>', '</map>'],
	    param: [1, '<object>', '</object>'],
	    col: [2, '<table><colgroup>', '</colgroup></table>'],
	    legend: [1, '<fieldset>', '</fieldset>'],
	    option: [1, '<select multiple="multiple">', '</select>'],
	    thead: [1, '<table>', '</table>'],
	    tr: [2, '<table>', '</table>'],
	    td: [3, '<table><tr>', '</tr></table>'],
	    g: [1, '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">', '</svg>'],
	    //IE6-8鍦ㄧ敤innerHTML鐢熸垚鑺傜偣鏃讹紝涓嶈兘鐩存帴鍒涘缓no-scope鍏冪礌涓嶩TML5鐨勬柊鏍囩
	    _default: avalon.modern ? [0, '', ''] : [1, 'X<div>', '</div>'] //div鍙互涓嶇敤闂悎
	}
	tagHooks.th = tagHooks.td
	tagHooks.optgroup = tagHooks.option
	tagHooks.tbody = tagHooks.tfoot = tagHooks.colgroup = tagHooks.caption = tagHooks.thead
	String('circle,defs,ellipse,image,line,path,polygon,polyline,rect,symbol,text,use').replace(avalon.rword, function (tag) {
	    tagHooks[tag] = tagHooks.g //澶勭悊SVG
	})

	var rtagName = /<([\w:]+)/ //鍙栧緱鍏秚agName
	var rxhtml = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig
	var rcreate = avalon.modern ? /[^\d\D]/ : /(<(?:script|link|style|meta|noscript))/ig
	var rnest = /<(?:tb|td|tf|th|tr|col|opt|leg|cap|area)/ //闇€瑕佸鐞嗗宓屽叧绯荤殑鏍囩
	var rhtml = /<|&#?\w+;/
	var htmlCache = new Cache(128)
	avalon.parseHTML = function (html) {
	    var fragment = avalon.avalonFragment.cloneNode(false), firstChild
	    //澶勭悊闈炲瓧绗︿覆
	    if (typeof html !== 'string') {
	        return fragment
	    }
	    //澶勭悊闈濰TML瀛楃涓�
	    if (!rhtml.test(html)) {
	        fragment.appendChild(document.createTextNode(html))
	        return fragment
	    }

	    html = html.replace(rxhtml, '<$1></$2>').trim()
	    var hasCache = htmlCache.get(html)
	    if (hasCache) {
	        return fixCloneNode(hasCache)
	    }

	    var tag = (rtagName.exec(html) || ['', ''])[1].toLowerCase()
	    var wrap = tagHooks[tag] || tagHooks._default
	    var wrapper = avalon.avalonDiv

	    wrapper.innerHTML = wrap[1] + html + wrap[2]

	    //浣跨敤innerHTML鐢熸垚鐨剆cript鑺傜偣涓嶄細鍙戝嚭璇锋眰涓庢墽琛宼ext灞炴€�
	    fixScript(wrapper)

	    if (!avalon.modern) { //fix IE
	        fixTbodyVML(wrapper, wrap, tag)
	    }

	    //绉婚櫎鎴戜滑涓轰簡绗﹀悎濂楀祵鍏崇郴鑰屾坊鍔犵殑鏍囩
	    for (var i = wrap[0]; i--; wrapper = wrapper.lastChild) {
	    }
	    while (firstChild = wrapper.firstChild) { // 灏唚rapper涓婄殑鑺傜偣杞Щ鍒版枃妗ｇ鐗囦笂锛�
	        fragment.appendChild(firstChild)
	    }
	    if (html.length < 1024) {
	        htmlCache.put(html, fixCloneNode(fragment))
	    }
	    return fragment
	}


	avalon.innerHTML = function (node, html) {
	    if (!avalon.modern && (!rcreate.test(html) && !rnest.test(html))) {
	        try {
	            node.innerHTML = html
	            return
	        } catch (e) {
	        }
	    }
	    var parsed = this.parseHTML(html)
	    this.clearHTML(node).appendChild(parsed)
	}

	avalon.clearHTML = function (node) {
	    node.textContent = ''
	    while (node.lastChild) {
	        node.removeChild(node.lastChild)
	    }
	    return node
	}



/***/ },
/* 26 */
/***/ function(module, exports) {

	// https://github.com/rsms/js-lru
	function LRU(maxLength) {
	    this.size = 0
	    this.limit = maxLength
	    this.head = this.tail = void 0
	    this._keymap = {}
	}

	var p = LRU.prototype

	p.put = function (key, value) {
	    var entry = {
	        key: key,
	        value: value
	    }
	    this._keymap[key] = entry
	    if (this.tail) {
	        this.tail.newer = entry
	        entry.older = this.tail
	    } else {
	        this.head = entry
	    }
	    this.tail = entry
	    if (this.size === this.limit) {
	        this.shift()
	    } else {
	        this.size++
	    }
	    return value
	}

	p.shift = function () {
	    var entry = this.head
	    if (entry) {
	        this.head = this.head.newer
	        this.head.older =
	                entry.newer =
	                entry.older =
	                this._keymap[entry.key] = void 0
	        delete this._keymap[entry.key] //#1029
	    }
	}
	p.get = function (key) {
	    var entry = this._keymap[key]
	    if (entry === void 0)
	        return
	    if (entry === this.tail) {
	        return  entry.value
	    }
	    // HEAD--------------TAIL
	    //   <.older   .newer>
	    //  <--- add direction --
	    //   A  B  C  <D>  E
	    if (entry.newer) {
	        if (entry === this.head) {
	            this.head = entry.newer
	        }
	        entry.newer.older = entry.older // C <-- E.
	    }
	    if (entry.older) {
	        entry.older.newer = entry.newer // C. --> E
	    }
	    entry.newer = void 0 // D --x
	    entry.older = this.tail // D. --> E
	    if (this.tail) {
	        this.tail.newer = entry // E. <-- D
	    }
	    this.tail = entry
	    return entry.value
	}

	module.exports = LRU


/***/ },
/* 27 */
/***/ function(module, exports) {

	
	var scriptNode = avalon.document.createElement('script')
	var scriptTypes = avalon.oneObject(['', 'text/javascript', 'text/ecmascript',
	    'application/ecmascript', 'application/javascript'])

	function fixScript(wrapper) {
	    var els = wrapper.getElementsByTagName('script')
	    if (els.length) {
	        for (var i = 0, el; el = els[i++]; ) {
	            if (scriptTypes[el.type]) {
	                //浠ュ伔榫欒浆鍑ゆ柟寮忔仮澶嶆墽琛岃剼鏈姛鑳�
	                var neo = scriptNode.cloneNode(false) //FF涓嶈兘鐪佺暐鍙傛暟
	                Array.prototype.forEach.call(el.attributes, function (attr) {
	                    if (attr && attr.specified) {
	                        neo[attr.name] = attr.value //澶嶅埗鍏跺睘鎬�
	                        neo.setAttribute(attr.name, attr.value)
	                    }
	                }) // jshint ignore:line
	                neo.text = el.text
	                el.parentNode.replaceChild(neo, el) //鏇挎崲鑺傜偣
	            }
	        }
	    }
	}

	module.exports = fixScript


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isVML = __webpack_require__(29)
	function fixTbody(wrapper, wrap, tag) {
	    var target = wrap[1] === 'X<div>' ? wrapper.lastChild.firstChild : wrapper.lastChild
	    if (target && target.tagName === 'TABLE' && tag !== 'tbody') {
	        //IE6-7澶勭悊 <thead> --> <thead>,<tbody>
	        //<tfoot> --> <tfoot>,<tbody>
	        //<table> --> <table><tbody></table>
	        for (var els = target.childNodes, i = 0, el; el = els[i++]; ) {
	            if (el.tagName === 'TBODY' && !el.innerHTML) {
	                target.removeChild(el)
	                break
	            }
	        }
	    }

	    for (els = wrapper.all, i = 0; el = els[i++]; ) { //fix VML
	        if (isVML(el)) {
	            fixVML(el)
	        }
	    }
	}

	function fixVML(node) {
	    if (node.currentStyle.behavior !== 'url(#default#VML)') {
	        node.style.behavior = 'url(#default#VML)'
	        node.style.display = 'inline-block'
	        node.style.zoom = 1 //hasLayout
	    }
	}

	module.exports = fixTbody


/***/ },
/* 29 */
/***/ function(module, exports) {

	function isVML(src) {
	    var nodeName = src.nodeName
	    return nodeName.toLowerCase() === nodeName && src.scopeName && src.outerText === ''
	}

	module.exports = isVML

/***/ },
/* 30 */
/***/ function(module, exports) {

	var rcheckedType = /radio|checkbox/

	function fix(dest, src) {
	    if (dest.nodeType !== 1) {
	        return
	    }
	    var nodeName = dest.nodeName.toLowerCase()
	    if (nodeName === 'object') {
	        if (dest.parentNode) {
	            dest.outerHTML = src.outerHTML
	        }

	    } else if (nodeName === 'input' && rcheckedType.test(src.type)) {

	        dest.defaultChecked = dest.checked = src.checked

	        if (dest.value !== src.value) {
	            dest.value = src.value
	        }

	    } else if (nodeName === 'option') {
	        dest.defaultSelected = dest.selected = src.defaultSelected
	    } else if (nodeName === 'input' || nodeName === 'textarea') {
	        dest.defaultValue = src.defaultValue
	    }
	}


	function getAll(el) {
	    if (el.getElementsByTagName) {
	        return el.getElementsByTagName('*')
	    } else {
	        return el.querySelectorAll('*')
	    }
	}

	function fixCloneNode(src) {
	    var target = src.cloneNode(true)
	    if(avalon.modern)
	        return target
	    var t = getAll(target)
	    var s = getAll(src)
	    avalon.each(s, function (i) {
	        fix(t[i], s[i])
	    })
	    return target
	}

	module.exports = fixCloneNode

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var document = avalon.document
	var window = avalon.window
	var root = avalon.root
	var W3C = avalon.modern

	var getShortID = __webpack_require__(6).getShortID
	//http://www.feiesoft.com/html/events.html
	//http://segmentfault.com/q/1010000000687977/a-1020000000688757
	var canBubbleUp = __webpack_require__(32)

	if (!W3C) {
	    delete canBubbleUp.change
	    delete canBubbleUp.select
	}


	var eventHooks = avalon.eventHooks
	/*缁戝畾浜嬩欢*/
	avalon.bind = function (elem, type, fn) {
	    if (elem.nodeType === 1) {
	        var value = elem.getAttribute('avalon-events') || ''
	        //濡傛灉鏄娇鐢╩s-on-*缁戝畾鐨勫洖璋�,鍏秛uid鏍煎紡涓篹12122324,
	        //濡傛灉鏄娇鐢╞ind鏂规硶缁戝畾鐨勫洖璋�,鍏秛uid鏍煎紡涓篲12
	        var uuid = getShortID(fn)
	        var key = type + ':' + uuid
	        var hook = eventHooks[type]
	        if (hook) {
	            type = hook.type
	            if (hook.fix) {
	                fn = hook.fix(elem, fn)
	                fn.uuid = uuid + '0'
	            }
	            key = type + ':' + fn.uuid
	        }
	        avalon.eventListeners[fn.uuid] = fn
	        if (value.indexOf(type + ':') === -1) {//鍚屼竴绉嶄簨浠跺彧缁戝畾涓€娆�
	            if (canBubbleUp[type] || (avalon.modern && focusBlur[type])) {
	                delegateEvent(type)
	            } else {
	                nativeBind(elem, type, dispatch)
	            }
	        }
	        var keys = value.split('??')
	        if (keys[0] === '') {
	            keys.shift()
	        }
	        if (keys.indexOf(key) === -1) {
	            keys.push(key)
	            elem.setAttribute('avalon-events', keys.join('??'))
	            //灏嗕护鐗屾斁杩沘valon-events灞炴€т腑
	        }

	    } else {
	        nativeBind(elem, type, fn)
	    }
	    return fn //鍏煎涔嬪墠鐨勭増鏈�
	}

	avalon.unbind = function (elem, type, fn) {
	    if (elem.nodeType === 1) {
	        var value = elem.getAttribute('avalon-events') || ''
	        switch (arguments.length) {
	            case 1:
	                nativeUnBind(elem, type, dispatch)
	                elem.removeAttribute('avalon-events')
	                break
	            case 2:
	                value = value.split('??').filter(function (str) {
	                    return str.indexOf(type + ':') === -1
	                }).join('??')
	                elem.setAttribute('avalon-events', value)
	                break
	            default:
	                var search = type + ':' + fn.uuid
	                value = value.split('??').filter(function (str) {
	                    return str !== search
	                }).join('??')
	                elem.setAttribute('avalon-events', value)
	                delete avalon.eventListeners[fn.uuid]
	                break
	        }
	    } else {
	        nativeUnBind(elem, type, fn)
	    }
	}

	var reventNames = /[^\s\?]+/g
	var last = +new Date()
	var typeRegExp = {}
	function collectHandlers(elem, type, handlers) {
	    var value = elem.getAttribute('avalon-events')
	    if (value && (elem.disabled !== true || type !== 'click')) {
	        var uuids = []
	        var reg = typeRegExp[type] || (typeRegExp[type] = new RegExp(type+'\\:([^?\s]+)','g'))
	        value.replace(reg, function(a, b){
	            uuids.push(b)
	            return a
	        })
	        if (uuids.length) {
	            handlers.push({
	                elem: elem,
	                uuids: uuids
	            })
	        }
	    }
	    elem = elem.parentNode
	    if (elem && elem.getAttribute && canBubbleUp[type]) {
	        collectHandlers(elem, type, handlers)
	    }

	}
	var rhandleHasVm = /^e\d+/
	var rneedSmooth = /move|scroll/
	function dispatch(event) {
	    event = new avEvent(event)
	    var type = event.type
	    var elem = event.target
	    var handlers = []
	    collectHandlers(elem, type, handlers)
	    var i = 0, j, uuid, handler
	    while ((handler = handlers[i++]) && !event.cancelBubble) {
	        event.currentTarget = handler.elem
	        j = 0
	        while ((uuid = handler.uuids[ j++ ]) &&
	                !event.isImmediatePropagationStopped) {
	            var fn = avalon.eventListeners[uuid]
	            if (fn) {
	                var vm = rhandleHasVm.test(uuid) ? handler.elem._ms_context_: 0
	                if (vm && vm.$hashcode === false) {
	                    return avalon.unbind(elem, type, fn)
	                }
	                if (rneedSmooth.test(type)) {
	                    var curr = +new Date()
	                    if (curr - last > 16) {
	                        fn.call(vm || elem, event)
	                        last = curr
	                    }
	                } else {
	                    fn.call(vm || elem, event)
	                }
	            }
	        }
	    }
	}

	var focusBlur = {
	    focus: true,
	    blur: true
	}
	var nativeBind = W3C ? function (el, type, fn, capture) {
	    el.addEventListener(type, fn, capture)
	} : function (el, type, fn) {
	    el.attachEvent('on' + type, fn)
	}
	var nativeUnBind = W3C ? function (el, type, fn) {
	    el.removeEventListener(type, fn)
	} : function (el, type, fn) {
	    el.detachEvent('on' + type, fn)
	}

	function delegateEvent(type) {
	    var value = root.getAttribute('delegate-events') || ''
	    if (value.indexOf(type) === -1) {
	        var arr = value.match(reventNames) || []
	        arr.push(type)
	        root.setAttribute('delegate-events', arr.join('??'))
	        nativeBind(root, type, dispatch, !!focusBlur[type])
	    }
	}

	avalon.fireDom = function (elem, type, opts) {
	    if (document.createEvent) {
	        var hackEvent = document.createEvent('Events')
	        hackEvent.initEvent(type, true, true, opts)
	        avalon.shadowCopy(hackEvent, opts)

	        elem.dispatchEvent(hackEvent)
	    } else if (root.contains(elem)) {//IE6-8瑙﹀彂浜嬩欢蹇呴』淇濊瘉鍦―OM鏍戜腑,鍚﹀垯鎶�'SCRIPT16389: 鏈寚鏄庣殑閿欒'
	        hackEvent = document.createEventObject()
	        avalon.shadowCopy(hackEvent, opts)
	        elem.fireEvent('on' + type, hackEvent)
	    }
	}

	var rmouseEvent = /^(?:mouse|contextmenu|drag)|click/
	var rvendor = /^(?:ms|webkit|moz)/
	function avEvent(event) {
	    if (event.originalEvent) {
	        return this
	    }
	    for (var i in event) {
	        if (!rvendor.test(i) && typeof event[i] !== 'function') {
	            this[i] = event[i]
	        }
	    }
	    if (!this.target) {
	        this.target = event.srcElement
	    }
	    var target = this.target
	    if (event.type.indexOf('key') === 0) {
	        this.which = event.charCode != null ? event.charCode : event.keyCode
	    } else if (rmouseEvent.test(event.type) && !('pageX' in this)) {
	        var doc = target.ownerDocument || document
	        var box = doc.compatMode === 'BackCompat' ? doc.body : doc.documentElement
	        this.pageX = event.clientX + (box.scrollLeft >> 0) - (box.clientLeft >> 0)
	        this.pageY = event.clientY + (box.scrollTop >> 0) - (box.clientTop >> 0)
	        this.wheelDeltaY = this.wheelDelta
	        this.wheelDeltaX = 0
	    }
	    this.timeStamp = new Date() - 0
	    this.originalEvent = event
	}
	avEvent.prototype = {
	    preventDefault: function () {
	        var e = this.originalEvent;
	        this.returnValue = false
	        if (e) {
	            e.returnValue = false
	            if (e.preventDefault) {
	                e.preventDefault()
	            }
	        }
	    },
	    stopPropagation: function () {
	        var e = this.originalEvent
	        this.cancelBubble = true
	        if (e) {
	            e.cancelBubble = true
	            if (e.stopPropagation) {
	                e.stopPropagation()
	            }
	        }
	    },
	    stopImmediatePropagation: function () {
	        var e = this.originalEvent
	        this.isImmediatePropagationStopped = true
	        if (e.stopImmediatePropagation) {
	            e.stopImmediatePropagation()
	        }
	        this.stopPropagation()
	    }
	}

	//閽堝firefox, chrome淇mouseenter, mouseleave
	if (!('onmouseenter' in root)) {
	    avalon.each({
	        mouseenter: 'mouseover',
	        mouseleave: 'mouseout'
	    }, function (origType, fixType) {
	        eventHooks[origType] = {
	            type: fixType,
	            fix: function (elem, fn) {
	                return function (e) {
	                    var t = e.relatedTarget
	                    if (!t || (t !== elem && !(elem.compareDocumentPosition(t) & 16))) {
	                        delete e.type
	                        e.type = origType
	                        return fn.apply(elem, arguments)
	                    }
	                }
	            }
	        }
	    })
	}
	//閽堝IE9+, w3c淇animationend
	avalon.each({
	    AnimationEvent: 'animationend',
	    WebKitAnimationEvent: 'webkitAnimationEnd'
	}, function (construct, fixType) {
	    if (window[construct] && !eventHooks.animationend) {
	        eventHooks.animationend = {
	            type: fixType
	        }
	    }
	})
	//閽堝IE6-8淇input
	if (!('oninput' in document.createElement('input'))) {
	    eventHooks.input = {
	        type: 'propertychange',
	        fix: function (elem, fn) {
	            return function (e) {
	                if (e.propertyName === 'value') {
	                    e.type = 'input'
	                    return fn.apply(elem, arguments)
	                }
	            }
	        }
	    }
	}
	if (document.onmousewheel === void 0) {
	    /* IE6-11 chrome mousewheel wheelDetla 涓� -120 涓� 120
	     firefox DOMMouseScroll detail 涓�3 涓�-3
	     firefox wheel detlaY 涓�3 涓�-3
	     IE9-11 wheel deltaY 涓�40 涓�-40
	     chrome wheel deltaY 涓�100 涓�-100 */
	    var fixWheelType = document.onwheel !== void 0 ? 'wheel' : 'DOMMouseScroll'
	    var fixWheelDelta = fixWheelType === 'wheel' ? 'deltaY' : 'detail'
	    eventHooks.mousewheel = {
	        type: fixWheelType,
	        fix: function (elem, fn) {
	            return function (e) {
	                e.wheelDeltaY = e.wheelDelta = e[fixWheelDelta] > 0 ? -120 : 120
	                e.wheelDeltaX = 0
	                if (Object.defineProperty) {
	                    Object.defineProperty(e, 'type', {
	                        value: 'mousewheel'
	                    })
	                }
	                return fn.apply(elem, arguments)
	            }
	        }
	    }
	}

	avalon.fn.bind = function (type, fn, phase) {
	    if (this[0]) { //姝ゆ柟娉曚笉浼氶摼
	        return avalon.bind(this[0], type, fn, phase)
	    }
	}

	avalon.fn.unbind = function (type, fn, phase) {
	    if (this[0]) {
	        avalon.unbind(this[0], type, fn, phase)
	    }
	    return this
	}

/***/ },
/* 32 */
/***/ function(module, exports) {

	//http://www.feiesoft.com/html/events.html
	//http://segmentfault.com/q/1010000000687977/a-1020000000688757
	module.exports = {
	    click: true,
	    dblclick: true,
	    keydown: true,
	    keypress: true,
	    keyup: true,
	    mousedown: true,
	    mousemove: true,
	    mouseup: true,
	    mouseover: true,
	    mouseout: true,
	    wheel: true,
	    mousewheel: true,
	    input: true,
	    change: true,
	    beforeinput: true,
	    compositionstart: true,
	    compositionupdate: true,
	    compositionend: true,
	    select: true,
	    //http://blog.csdn.net/lee_magnum/article/details/17761441
	    cut: true,
	    copy: true,
	    paste: true,
	    beforecut: true,
	    beforecopy: true,
	    beforepaste: true,
	    focusin: true,
	    focusout: true,
	    DOMFocusIn: true,
	    DOMFocusOut: true,
	    DOMActivate: true,
	    dragend: true,
	    datasetchanged: true
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var scan = __webpack_require__(34)

	var document = avalon.document
	var window = avalon.window
	var root = avalon.root

	var readyList = [], isReady
	var fireReady = function (fn) {
	    isReady = true

	    while (fn = readyList.shift()) {
	        fn(avalon)
	    }
	}

	function doScrollCheck() {
	    try { //IE涓嬮€氳繃doScrollCheck妫€娴婦OM鏍戞槸鍚﹀缓瀹�
	        root.doScroll('left')
	        fireReady()
	    } catch (e) {
	        setTimeout(doScrollCheck)
	    }
	}

	if (document.readyState === 'complete') {
	    setTimeout(fireReady) //濡傛灉鍦╠omReady涔嬪鍔犺浇
	} else if (document.addEventListener) {
	    document.addEventListener('DOMContentLoaded', fireReady)
	} else if (document.attachEvent) {
	    document.attachEvent('onreadystatechange', function () {
	        if (document.readyState === 'complete') {
	            fireReady()
	        }
	    })
	    try {
	        var isTop = window.frameElement === null
	    } catch (e) {
	    }
	    if (root.doScroll && isTop && window.external) {//fix IE iframe BUG
	        doScrollCheck()
	    }
	}
	if (window.document) {
	    avalon.bind(window, 'load', fireReady)
	}
	avalon.ready = function (fn) {
	    if (!isReady) {
	        readyList.push(fn)
	    } else {
	        fn(avalon)
	    }
	}

	avalon.ready(function(){
	    scan(document.body)
	})



/***/ },
/* 34 */
/***/ function(module, exports) {

	var scanStatistics = 0
	function scan(nodes) {
	    for (var i = 0, elem; elem = nodes[i++]; ) {
	        if (elem.nodeType === 1) {
	            var $id = getController(elem)
	            if ($id) {
	                ++scanStatistics
	            }
	            var vm = avalon.vmodels[$id]
	            if (vm && !vm.$element) {
	                cleanWhitespace(elem)//鍑忓皯铏氭嫙DOM鐨勮妯″強diff, patch鐨勬椂闂�
	                avalon(elem).removeClass('ms-controller')
	                vm.$element = elem
	                var now = new Date()
	                var vtree = elem.vtree = avalon.lexer(elem.outerHTML)
	                var now2 = new Date()
	                avalon.log('create primitive vtree', now2 - now)
	                vm.$render = avalon.render(vtree)
	                var now3 = new Date()
	                avalon.log('create template Function ', now3 - now2)
	                avalon.rerenderStart = now3
	                avalon.batch($id, true)

	            } else if (!$id) {
	                scan(elem.childNodes)
	            }
	        }
	    }
	}
	var notWhitespace = /\S/
	function cleanWhitespace(target) {
	    var keep
	    for (var i = 0; i < target.childNodes.length; i++) {
	        var node = target.childNodes[i]
	        if ((node.nodeType === 3) && (!notWhitespace.test(node.nodeValue))) {
	            keep = target.removeChild(node)
	            i--
	        } else if (node.nodeType === 1) {
	            cleanWhitespace(node)
	        }
	    }
	    if (target.childNodes.length === 0 && keep) {
	        target.appendChild(keep)
	    }
	}
	module.exports = avalon.scan = function (a) {
	    if (!a || !a.nodeType) {
	        avalon.warn('[avalon.scan] first argument must be element , documentFragment, or document')
	        return
	    }
	    scan([a])
	    if (scanStatistics === 0) {
	        avalon.warn('[avalon.scan] your nodes must has "ms-controller" attribute')
	    }
	    scanStatistics = 0
	}

	function getController(a) {
	    return a.getAttribute('ms-controller')
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36)
	__webpack_require__(43)
	//澶勭悊灞炴€ф牱寮�
	__webpack_require__(44)
	__webpack_require__(47)
	__webpack_require__(48)
	//澶勭悊鍐呭
	__webpack_require__(49)
	__webpack_require__(50)
	__webpack_require__(51)
	//闇€瑕佺敤鍒颁簨浠剁殑
	__webpack_require__(52)
	__webpack_require__(53)
	__webpack_require__(54)
	__webpack_require__(61)
	__webpack_require__(62)

	//澶勭悊閫昏緫
	__webpack_require__(63)
	__webpack_require__(65)

	__webpack_require__(66)
	__webpack_require__(69)
	//浼樺厛绾� ms-important, ms-controller, ms-for, ms-widget, ms-effect, ms-if
	//.......
	//ms-duplex

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var parseView = __webpack_require__(37)

	avalon.directive("important", {
	    priority: 1,
	    parse: function (binding, num, elem) {
	        var $id = binding.expr
	        var vm = 'vm' + num
	        var a = 'var ' + vm + ' =  avalon.vmodels['
	                + avalon.quote($id) + ']\n'
	        var str = a + '__vmodel__ = ' + vm + ' || __vmodel__\n\n'
	        delete elem.props['ms-important']
	        num += 1
	        var body = parseView([elem], num) + '\n\nreturn vnodes' + num
	        var ctrl = avalon.vmodels[$id]
	        elem.props['ms-important'] = $id
	        ctrl.$render = Function('__vmodel__', str + body)
	        return str
	    },
	    diff: function (cur, pre, steps, name) {
	        if (pre.props[name] !== cur.props[name]) {
	            cur.props[name] = pre.props[name]
	            var list = cur.change || (cur.change = [])
	            if (avalon.Array.ensure(list, this.update)) {
	                steps.count += 1
	            }
	        }
	    },
	    update: function (node, vnode) {
	        var id = node.getAttribute('ms-important')
	        var vm = avalon.vmodels[id] || {}
	        vm.$element = node
	    }
	})



/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	
	var parseExpr = __webpack_require__(38)
	var parseBindings = __webpack_require__(41)
	var parseDelimiter = __webpack_require__(42)
	var rexpr = avalon.config.rexpr
	var quote = avalon.quote
	var makeHashCode = avalon.makeHashCode
	var r = __webpack_require__(40)
	var rident = r.ident
	var rsp = r.sp
	function wrapDelimiter(expr) {
	    return rident.test(expr) ? expr : parseExpr(expr,'text')
	}

	function wrap(a, num) {
	    return '(function(){\n\n' + a + '\n\nreturn vnodes' + num + '\n})();\n'
	}

	function parseView(arr, num) {
	    num = num || String(new Date - 0).slice(0, 5)

	    var forstack = []
	    var hasIf = false
	    var children = 'vnodes' + num
	    var vnode = 'vnode' + num
	    var str = 'var ' + children + ' = []\n'
	    for (var i = 0; i < arr.length; i++) {
	        var el = arr[i]
	        if (el.nodeType === 3) {
	            str += 'var ' + vnode + ' = {type:"#text",nodeType:3,skipContent:true}\n'
	            var hasDelimiter = rexpr.test(el.nodeValue)

	            if (hasDelimiter) {
	                var array = parseDelimiter(el.nodeValue)
	                if (array.length === 1) {
	                    var a = parseExpr(array[0].expr)
	                    str += vnode + '.nodeValue = ' + wrapDelimiter(array[0].expr) + '\n'
	                } else {
	                    a = array.map(function (el) {
	                        return el.type ? wrapDelimiter(el.expr) : quote(el.expr)
	                    }).join(' + ')
	                    str += vnode + '.nodeValue = String(' + a + ')\n'
	                }
	                str += vnode + '.fixIESkip = true\n'
	                /* jshint ignore:start */
	                str += vnode + '.skipContent = false\n'
	            } else {
	                if (rsp.test(el.nodeValue)) {
	                    str += vnode + '.nodeValue = "\\n"\n'
	                } else {
	                    str += vnode + '.nodeValue = ' + quote(el.nodeValue) + '\n'
	                }
	            }
	            str += children + '.push(' + vnode + ')\n'
	            continue
	        } else if (el.nodeType === 8) {
	            var nodeValue = el.nodeValue
	            if (nodeValue.indexOf('ms-for:') === 0) {//聽澶勭悊ms-for鎸囦护
	                var signature = el.signature
	                forstack.push(signature)
	                str += '\nvar ' + signature + ' = {' +
	                        '\n\tnodeType:8,' +
	                        '\n\ttype:"#comment",' +
	                        '\n\tvmodel:__vmodel__,' +
	                        '\n\tdirective:"for",' +
	                        '\n\tskipContent:false,' +
	                        '\n\tcid:' + quote(el.cid) + ',' +
	                        '\n\tstart:' + children + '.length,' +
	                        '\n\tsignature:' + quote(signature) + ',' +
	                        '\n\tnodeValue:' + quote(nodeValue) +
	                        '\n}\n'
	                str += children + '.push(' + signature + ')\n'

	                str += avalon.directives['for'].parse(el, num)

	            } else if (nodeValue.indexOf('ms-for-end:') === 0) {
	                var signature = forstack[forstack.length - 1]
	                str += children + '.push({' +
	                        '\n\tnodeType: 8,' +
	                        '\n\ttype:"#comment",' +
	                        '\n\tskipContent: true,' +
	                        '\n\tnodeValue:' + quote(signature) + ',' +
	                        '\n\tkey:traceKey\n})\n'
	                str += '\n})\n' //缁撴潫寰幆
	                if (forstack.length) {
	                    var signature = forstack[forstack.length - 1]
	                    str += signature + '.end =' + children + '.push({' +
	                            '\n\tnodeType: 8,' +
	                            '\n\ttype:"#comment",' +
	                            '\n\tskipContent: true,' +
	                            '\n\tsignature:' + quote(signature) + ',' +
	                            '\n\tnodeValue:' + quote(signature + ':end') +
	                            '\n})\n'
	                    forstack.pop()
	                }
	            } else if (nodeValue.indexOf('ms-js:') === 0) {//鎻掑叆鏅€欽S浠ｇ爜
	                str += parseExpr(nodeValue.replace('ms-js:', ''), 'js') + '\n'
	            } else {
	                str += children + '.push(' + quote(el) + ')\n\n\n'
	            }
	            continue
	        } else { //澶勭悊鍏冪礌鑺傜偣

	            str += 'var ' + vnode + ' = {' +
	                    '\n\tnodeType:1,' +
	                    '\n\ttype: ' + quote(el.type) + ',' +
	                    '\n\tprops:{},' +
	                    '\n\tchildren: [],' +
	                    '\n\tisVoidTag: ' + !!el.isVoidTag + ',' +
	                    '\n\ttemplate: ""}\n'

	            var hasWidget = el.props['ms-widget']
	            if (!hasWidget && el.type.indexOf('-') > 0 && !el.props.resolved) {
	                el.props['ms-widget'] = '@' + el.type.replace(/-/g, "_")
	            }

	            var hasBindings = parseBindings(el.props, num, el)
	            if (hasBindings) {
	                str += hasBindings
	            }
	            if (!el.isVoidTag) {
	                if (el.children.length) {
	                    var hasWidget = el.props['ms-widget']
	                    var hasIf = el.props['ms-if']
	                    if (hasIf) {
	                        str += 'if(' +vnode+'&&'+ vnode + '.nodeType === 1 ){\n'
	                    }
	                    if (hasWidget) {
	                        str += 'if(!' + vnode + '.props.wid ){\n'
	                    }
	                    str += vnode + '.children = ' + wrap(parseView(el.children, num), num) + '\n'
	                    if (hasIf) {
	                        str += '}\n'
	                    }
	                    if (hasWidget) {
	                        str += '}\n'
	                    }
	                } else {
	                    str += vnode + '.template = ' + quote(el.template) + '\n'
	                }
	            }
	            str += children + '.push(' + vnode + ')\n'
	        }

	    }
	    return str
	}

	module.exports = parseView

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	

	//缂撳瓨姹傚€煎嚱鏁帮紝浠ヤ究澶氭鍒╃敤
	var evaluatorPool = __webpack_require__(39)

	var rregexp = /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/g
	var rstring = __webpack_require__(40).string
	var rfill = /\?\?\d+/g
	var brackets = /\(([^)]*)\)/
	var rAt = /(^|[^\w\u00c0-\uFFFF_])(@)(?=\w)/g
	var rhandleName = /^\@[$\w]+$/
	var rshortCircuit = /\|\|/g
	var rpipeline = /\|(?=\w)/
	var ruselessSp = /\s*(\.|\|)\s*/g
	var wrapDuplex = function(arr){
	    return '(function(){ return ' +arr.join('\n')+'})();\n'
	}
	function parseExpr(str, category) {

	    var binding = {}
	    category = category || 'other'
	    if (typeof str === 'object') {
	        category = str.type
	        binding = str
	        str = binding.expr
	    }
	    if (typeof str !== 'string')
	        return ''
	    var cacheID = str
	    var cacheStr = evaluatorPool.get(category + ':' + cacheID)

	    if (cacheStr) {
	        return cacheStr
	    }

	    var number = 1
	//鐩稿悓鐨勮〃杈惧紡鐢熸垚鐩稿悓鐨勫嚱鏁�
	    var maps = {}
	    function dig(a) {
	        var key = '??' + number++
	        maps[key] = a
	        return key
	    }

	    function fill(a) {
	        return maps[a]
	    }

	    var input = str.replace(rregexp, dig).//绉婚櫎鎵€鏈夋鍒�
	            replace(rstring, dig).//绉婚櫎鎵€鏈夊瓧绗︿覆
	            replace(rshortCircuit, dig).//绉婚櫎鎵€鏈夌煭璺垨
	            replace(ruselessSp, '$1').//绉婚櫎. |涓ょ绌虹櫧
	            split(rpipeline) //浣跨敤绠￠亾绗﹀垎绂绘墍鏈夎繃婊ゅ櫒鍙婅〃杈惧紡鐨勬浣�

	//杩樺師body
	    var body = input.shift().replace(rfill, fill).trim()
	    if (category === 'on' && rhandleName.test(body)) {
	        body = body + '($event)'
	    }

	    body = body.replace(rAt, '$1__vmodel__.')
	    if (category === 'js') {
	        return evaluatorPool.put(category + ':' + cacheID, body)
	    }

	//澶勭悊琛ㄨ揪寮忕殑杩囨护鍣ㄩ儴鍒�

	    var filters = input.map(function (str) {

	        str = str.replace(rfill, fill).replace(rAt, '$1__vmodel__.') //杩樺師
	        var hasBracket = false
	        str = str.replace(brackets, function (a, b) {
	            hasBracket = true
	            return /\S/.test(b) ?
	                    '(__value__,' + b + ');' :
	                    '(__value__);'
	        })
	        if (!hasBracket) {
	            str += '(__value__);'
	        }
	        str = str.replace(/(\w+)/, 'avalon.__format__("$1")')
	        return '__value__ = ' + str
	    })
	    var ret = []
	    if (category === 'on') {
	        filters = filters.map(function (el) {
	            return el.replace(/__value__/g, '$event')
	        })
	        if (filters.length) {
	            filters.push('if($event.$return){\n\treturn;\n}')
	        }
	        ret = ['function self($event){',
	            'try{',
	            '\tvar __vmodel__ = this;',
	            '\t' + body,
	            '}catch(e){',
	            quoteError(str, category),
	            '}',
	            '}']
	        filters.unshift(2, 0)
	    } else if (category === 'duplex') {

	        //浠巚m涓緱鍒板綋鍓嶅睘鎬х殑鍊�
	        var getterBody = [
	            'function (__vmodel__){',
	            'try{',
	            'return ' + body + '\n',
	            '}catch(e){',
	            quoteError(str, category),
	            '}',
	            '}']
	        evaluatorPool.put('duplex:' + cacheID,wrapDuplex(getterBody))
	        //缁檝m鍚屾鏌愪釜灞炴€�
	        var setterBody = [
	            'function (__vmodel__,__value__){',
	            'try{',
	            '\t' + body + ' = __value__',
	            '}catch(e){',
	            quoteError(str, category),
	            '}',
	            '}']
	        evaluatorPool.put('duplex:set:' + cacheID, wrapDuplex(setterBody))
	        //瀵规煇涓€艰繘琛屾牸寮忓寲
	        if (input.length) {
	            var formatBody = [
	                'function (__vmodel__, __value__){',
	                'try{',
	                filters.join('\n'),
	                'return __value__\n',
	                '}catch(e){',
	                quoteError(str, category),
	                '}',
	                '}']
	            evaluatorPool.put('duplex:format:' + cacheID, wrapDuplex(formatBody))
	        }
	        return
	    } else {
	        ret = [
	            '(function(){',
	            'try{',
	            'var __value__ = ' + body,
	            ( category === 'text'? 
	            'return __value__ == null ? "" :__value__': 
	            'return __value__'),
	            '}catch(e){',
	            quoteError(str, category),
	            '\treturn ""',
	            '}',
	            '})()'
	        ]
	        filters.unshift(3, 0)
	    }
	    ret.splice.apply(ret, filters)
	    cacheStr = ret.join('\n')
	    evaluatorPool.put(category + ':' + cacheID, cacheStr)
	    return cacheStr

	}

	function quoteError(str, type) {
	    return '\tavalon.warn(e, ' +
	            avalon.quote('parse ' + type + ' binding銆� ' + str + ' 銆慺ail')
	            + ')'
	}

	module.exports = avalon.parseExpr = parseExpr


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	
	var Cache = __webpack_require__(26)
	//缂撳瓨姹傚€煎嚱鏁帮紝浠ヤ究澶氭鍒╃敤
	module.exports = new Cache(512)


/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = {
	    ident: /^[$a-zA-Z_][$a-zA-Z0-9_]*$/,
	    sp: /^\s+$/, //鍏ㄩ儴閮芥槸绌虹櫧,
	    leftSp: /^\s+/, //宸﹁竟绌虹櫧
	    rightSp: /s+$/, //鍙宠竟绌虹櫧,
	    binding: /^ms-(\w+)-?(.*)/, //缁戝畾灞炴€�,
	    string: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/g
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var rneedQuote = /[W-]/
	var quote = avalon.quote
	var directives = avalon.directives
	var rbinding = __webpack_require__(40).binding
	var eventMap = avalon.oneObject('animationend,blur,change,input,click,dblclick,focus,keydown,keypress,keyup,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,scan,scroll,submit')
	var keyMap = avalon.oneObject("break,case,catch,continue,debugger,default,delete,do,else,false," +
	        "finally,for,function,if,in,instanceof,new,null,return,switch,this," +
	        "throw,true,try,typeof,var,void,while,with," + /* 鍏抽敭瀛�*/
	        "abstract,boolean,byte,char,class,const,double,enum,export,extends," +
	        "final,float,goto,implements,import,int,interface,long,native," +
	        "package,private,protected,public,short,static,super,synchronized," +
	        "throws,transient,volatile")
	function parseBindings(props, num, elem) {
	    var bindings = []
	    var skip = 'ms-skip' in props
	    var ret = ''
	    for (var i in props) {
	        var value = props[i], match

	        if (!skip && value && (match = i.match(rbinding))) {
	            var type = match[1]
	            var param = match[2] || ''
	            var name = i
	            if (eventMap[type]) {
	                var order = parseFloat(param) || 0
	                param = type
	                type = 'on'
	            }
	            name = 'ms-' + type + (param ? '-' + param : '')
	            if (i !== name) {
	                delete props[i]
	                props[name] = value
	            }
	            if (directives[type]) {
	                var binding = {
	                    type: type,
	                    param: param,
	                    name: name,
	                    expr: value,
	                    priority: directives[type].priority || type.charCodeAt(0) * 100
	                }
	                if (type === 'on') {
	                    order = order || 0
	                    binding.name += '-' + order
	                    binding.priority += param.charCodeAt(0) * 100 + order
	                }

	                bindings.push(binding)

	            }
	        } else {
	            //IE6-8涓嬪叧閿瓧涓嶈兘鐩存帴褰撳仛瀵硅薄鐨勯敭鍚嶏紝闇€瑕佺敤寮曞彿鎷捣鏉�
	            if (rneedQuote.test(i) || keyMap[i]) {//鏀堕泦闈炵粦瀹氬睘鎬�
	                ret += 'vnode' + num + '.props[' + quote(i) + '] = ' + quote(value) + '\n'
	            } else {
	                ret += 'vnode' + num + '.props.' + i + ' = ' + quote(value) + '\n'
	            }
	        }
	    }

	    if (!bindings.length) {
	        ret += '\tvnode' + num + '.skipAttrs = true\n'
	    } else {
	        bindings.sort(byPriority)
	        ret += ('vnode' + num + '.order = "'+ bindings.map(function(a){
	            return a.name
	        }).join(';;')+'"\n')
	        //浼樺寲澶勭悊ms-widget
	        var first = bindings[0]
	        var isWidget = first && first.type === 'widget'
	        if (isWidget) {
	            bindings.shift()
	            bindings.forEach(function (binding) {
	                ret += 'vnode' + num + '.props[' + quote(binding.name) + '] = ' + quote(binding.expr) + '\n'
	            })
	            ret += directives['widget'].parse(first, num, elem)
	        } else {
	            bindings.forEach(function (binding) {
	                ret += directives[binding.type].parse(binding, num, elem)
	            })
	        }

	    }
	    return ret

	}

	function byPriority(a, b) {
	    return a.priority - b.priority
	}

	module.exports = parseBindings

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var rline = /\r?\n/g
	var r = __webpack_require__(40)

	function parseDelimiter(str) {
	    var tokens = [],
	            value, start = 0,
	            stop
	    do {
	        stop = str.indexOf(avalon.config.openTag, start)
	        if (stop === -1) {
	            break
	        }
	        value = str.slice(start, stop)
	        if (start === 0) {
	            value = value.replace(r.leftSp, '')
	        }
	        if (value) { // {{ 宸﹁竟鐨勬枃鏈�
	            tokens.push({
	                expr: value
	            })
	        }
	        start = stop + avalon.config.openTag.length
	        stop = str.indexOf(avalon.config.closeTag, start)
	        if (stop === -1) {
	            break
	        }
	        value = str.slice(start, stop)
	        if (value) { //澶勭悊{{ }}鎻掑€艰〃杈惧紡
	            tokens.push({
	                expr: value.replace(rline, ''),
	                type: '{{}}'
	            })
	        }
	        start = stop + avalon.config.closeTag.length
	    } while (1)
	    value = str.slice(start)

	    var lastText = value.replace(r.rightSp, '')
	    if (lastText) { //}} 鍙宠竟鐨勬枃鏈�
	        tokens.push({
	            expr: lastText
	        })
	    }
	    return tokens
	}

	module.exports = parseDelimiter


/***/ },
/* 43 */
/***/ function(module, exports) {

	
	avalon.directive('controller', {
	    priority: 2,
	    parse: function (binding, num) {
	        var vm = 'vm' + num
	        var $id = binding.expr
	        var isObject = /\{.+\}/.test($id)
	        var a = 'var ' + vm + ' =  avalon.vmodels[' + avalon.quote($id) + ']\n'
	        var b = 'var ' + vm + ' = ' + $id + '\n'
	        var str = (isObject ? b : a) +
	                'if(' + vm + '){\n' +
	                '\tif(__vmodel__){\n' +
	                '\t\t__vmodel__ = avalon.mediatorFactory(__vmodel__, ' + vm + ')\n' +
	                '\t}else{\n' +
	                '\t\t__vmodel__ = ' + vm + '\n' +
	                '\t}\n' +
	                '}\n\n\n'
	        return str
	    },
	    diff: avalon.noop,
	    update:avalon.noop
	})



/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	
	var attrUpdate = __webpack_require__(45)

	avalon.directive('attr', {
	    parse: function (binding, num) {
	        return 'vnode' + num + '.props["ms-attr"] = ' + avalon.parseExpr(binding) + ';\n'

	    },
	    diff: function (cur, pre, steps, name) {
	        var a = cur.props[name]
	        var p = pre.props[name]
	        if (a && typeof a === 'object') {
	            if (Array.isArray(a)) {
	                a = cur.props[name] = avalon.mix.apply({}, a)
	            }
	            if (typeof p !== 'object') {
	                cur.changeAttr = a
	            } else {
	                var patch = {}
	                var hasChange = false
	                for (var i in a) {
	                    if (a[i] !== p[i]) {
	                        hasChange = true
	                        patch[i] = a[i]
	                    }
	                }
	                if (hasChange) {
	                    cur.changeAttr = patch
	                }
	            }
	            if (cur.changeAttr) {
	                var list = cur.change || (cur.change = [])
	                if(avalon.Array.ensure(list, this.update)){
	                   steps.count += 1
	                }
	            }
	        } else {
	            cur.props[name] = p
	        }
	        pre.changeAttr = null
	    },
	    //dom, vnode
	    update: attrUpdate
	})



/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	
	var propMap = __webpack_require__(46)
	var isVML = __webpack_require__(29)
	var rsvg =/^\[object SVG\w*Element\]$/
	var ramp = /&amp;/g

	function attrUpdate(node, vnode) {
	    var attrs = vnode.changeAttr
	    if (!node || node.nodeType !== 1 ) {
	        return
	    }
	    if (attrs) {
	        for (var attrName in attrs) {
	            var val = attrs[attrName]
	            // switch
	            if (attrName === 'href' || attrName === 'src') {
	                if (!node.hasAttribute) {
	                    val = String(val).replace(ramp, '&') //澶勭悊IE67鑷姩杞箟鐨勯棶棰�
	                }
	                node[attrName] = val
	                if (window.chrome && node.tagName === 'EMBED') {
	                    var parent = node.parentNode //#525  chrome1-37涓媏mbed鏍囩鍔ㄦ€佽缃畇rc涓嶈兘鍙戠敓璇锋眰
	                    var comment = document.createComment('ms-src')
	                    parent.replaceChild(comment, node)
	                    parent.replaceChild(node, comment)
	                }
	            } else if (attrName.indexOf('data-') === 0) {
	                node.setAttribute(attrName, val)

	            } else {
	                var propName = propMap[attrName] || attrName
	                if (typeof node[propName] === 'boolean') {
	                    node[propName] = !!val
	                  
	                    //甯冨皵灞炴€у繀椤讳娇鐢╡l.xxx = true|false鏂瑰紡璁惧€�
	                    //濡傛灉涓篺alse, IE鍏ㄧ郴鍒椾笅鐩稿綋浜巗etAttribute(xxx,''),
	                    //浼氬奖鍝嶅埌鏍峰紡,闇€瑕佽繘涓€姝ュ鐞�
	                }

	                if (val === false ) {
	                    node.removeAttribute(propName)
	                    continue
	                }
	                //SVG鍙兘浣跨敤setAttribute(xxx, yyy), VML鍙兘浣跨敤node.xxx = yyy ,
	                //HTML鐨勫浐鏈夊睘鎬у繀椤籲ode.xxx = yyy
	                var isInnate = rsvg.test(node) ? false :
	                        (document.namespaces && isVML(node)) ? true :
	                        attrName in node.cloneNode(false)
	                if (isInnate) {
	                    node[propName] = val + ''
	                } else {
	                    node.setAttribute(attrName, val)
	                }

	            }

	        }
	        vnode.changeAttr = null
	    }
	}

	module.exports = attrUpdate

/***/ },
/* 46 */
/***/ function(module, exports) {

	var bools = ['autofocus,autoplay,async,allowTransparency,checked,controls',
	    'declare,disabled,defer,defaultChecked,defaultSelected,',
	    'isMap,loop,multiple,noHref,noResize,noShade',
	    'open,readOnly,selected'
	].join(',')

	var propMap = {//涓嶈鍒欑殑灞炴€у悕鏄犲皠
	    'accept-charset': 'acceptCharset',
	    'char': 'ch',
	    charoff: 'chOff',
	    'class': 'className',
	    'for': 'htmlFor',
	    'http-equiv': 'httpEquiv'
	}
	/*
	contenteditable涓嶆槸甯冨皵灞炴€�
	http://www.zhangxinxu.com/wordpress/2016/01/contenteditable-plaintext-only/
	contenteditable=''
	contenteditable='events'
	contenteditable='caret'
	contenteditable='plaintext-only'
	contenteditable='true'
	contenteditable='false'
	 */
	bools.replace(/\w+/g, function (name) {
	    propMap[name.toLowerCase()] = name
	})


	var anomaly = ['accessKey,bgColor,cellPadding,cellSpacing,codeBase,codeType,colSpan',
	    'dateTime,defaultValue,contentEditable,frameBorder,longDesc,maxLength,marginWidth,marginHeight',
	    'rowSpan,tabIndex,useMap,vSpace,valueType,vAlign'
	].join(',')
	anomaly.replace(/\w+/g, function (name) {
	    propMap[name.toLowerCase()] = name
	})

	module.exports = propMap


/***/ },
/* 47 */
/***/ function(module, exports) {

	

	avalon.directive('css', {
	    parse: function (binding, num) {
	        return 'vnode' + num + '.props["ms-css"] = ' + avalon.parseExpr(binding) + ';\n'
	    },
	    diff: function (cur, pre, steps, name) {
	        var a = cur.props[name]
	        var p = pre.props[name]
	        if ( Object(a) === a) {
	            if (Array.isArray(a)) {
	                a = cur.props[name] = avalon.mix.apply({}, a)
	            }
	            if (typeof p !== 'object') {
	                cur.changeStyle = a
	            } else {
	                var patch = {}
	                var hasChange = false
	                for (var i in a) {
	                    if (a[i] !== p[i]) {
	                        hasChange = true
	                        patch[i] = a[i]
	                    }
	                }
	                if (hasChange) {
	                    cur.changeStyle = patch
	                }
	            }
	            if (cur.changeStyle) {
	                var list = cur.change || (cur.change = [])
	                if(avalon.Array.ensure(list, this.update)){
	                   steps.count += 1
	                }
	            }
	        } else {
	            cur.props[name] = p
	        }
	    },
	    update: function (node, vnode) {
	        var change = vnode.changeStyle
	        var wrap = avalon(node)
	        for (var name in change) {
	            wrap.css(name, change[name])
	        }
	        delete vnode.changeStyle
	    }
	})


/***/ },
/* 48 */
/***/ function(module, exports) {

	
	var none = 'none'
	function parseDisplay(elem, val) {
	    //鐢ㄤ簬鍙栧緱姝ょ被鏍囩鐨勯粯璁isplay鍊�
	    var doc = elem.ownerDocument
	    var nodeName = elem.nodeName
	    var key = '_' + nodeName
	    if (!parseDisplay[key]) {
	        var temp = doc.body.appendChild(doc.createElement(nodeName))
	        if (avalon.modern) {
	            val = getComputedStyle(temp, null).display
	        } else {
	            val = temp.currentStyle.display
	        }
	        doc.body.removeChild(temp)
	        if (val === none) {
	            val = 'block'
	        }
	        parseDisplay[key] = val
	    }
	    return parseDisplay[key]
	}

	avalon.parseDisplay = parseDisplay

	avalon.directive('visible', {
	    parse: function (binding, num) {
	        return 'vnode' + num + '.props["ms-visible"] = ' + avalon.parseExpr(binding) + ';\n'
	    },
	    diff: function (cur, pre, steps, name) {
	        var c = cur.props[name] = !!cur.props[name]
	        cur.displayValue = pre.displayValue
	        if (c !== pre.props[name]) {
	            var list = cur.change || (cur.change = [])
	            if(avalon.Array.ensure(list, this.update)){
	                steps.count += 1
	            }
	        }
	    },
	    update: function (node, vnode) {
	        var show = vnode.props['ms-visible']
	        var display = node.style.display
	        var value
	        if (show) {
	            if (display === none) {
	                value = vnode.displayValue
	                if (!value) {
	                    node.style.display = ''
	                }
	            }
	            if (node.style.display === '' && avalon(node).css('display') === none &&
	                    // fix firefox BUG,蹇呴』鎸傚埌椤甸潰涓�
	                    avalon.contains(node.ownerDocument, node)) {

	                value = parseDisplay(node)
	            }
	        } else {
	            if (display !== none) {
	                value = none
	                vnode.displayValue = display
	            }
	        }
	        function cb(){
	           if (value !== void 0) {
	              node.style.display = value
	           }
	        }
	        avalon.applyEffect(node, vnode, {
	            hook: show ? 'onEnterDone': 'onLeaveDone',
	            cb: cb
	        })
	    }
	})



/***/ },
/* 49 */
/***/ function(module, exports) {

	
	avalon.directive('expr', {
	    parse: function () {
	    },
	    diff: function (cur, pre, steps) {
	        cur.fixIESkip = true
	        var dom = cur.dom = pre.dom
	        if (cur.nodeValue !== pre.nodeValue) {
	           
	            if (dom && avalon.contains(avalon.root,dom)) {
	                this.update(dom, cur)
	            } else {
	                var list = cur.change || (cur.change = [])
	                if(avalon.Array.ensure(list, this.update)){
	                    steps.count += 1
	                }   
	            }
	        }
	        pre.dom = null
	    },
	    update: function (node, vnode, parent) {
	        if (node.nodeType !== 3) {
	            var textNode = document.createTextNode(vnode.nodeValue)
	            parent.replaceChild(textNode, node)
	        } else {
	           
	            node.nodeValue = vnode.nodeValue
	            textNode = node
	        }
	        vnode.dom = textNode
	    }
	})

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var rident = __webpack_require__(40).ident
	avalon.directive('text', {
	    parse: function (binding, num, vnode) {
	        vnode.children = [{type: '#text', nodeType: 3, nodeValue: ''}]
	        var val = rident.test(binding.expr) ? binding.expr : avalon.parseExpr(binding)
	        return 'vnode' + num + '.props["ms-text"] =' + val + '\n'
	    },
	    diff: function (cur, pre, steps, name) {
	        var curValue = cur.props[name]
	        var preValue = pre.props[name]
	        cur.children = pre.children
	        cur.skipContent = true
	        var dom = cur.dom = pre.dom
	        if (curValue !== preValue) {
	            cur.children[0].nodeValue = curValue
	            if (dom) {
	                this.update(dom, cur)
	            } else {
	                var list = cur.change || (cur.change = [])
	                if(avalon.Array.ensure(list, this.update)){
	                   steps.count += 1
	                }
	            }
	        }
	        pre.dom = null
	        return false
	    },
	    update: function (node, vnode) {
	        var nodeValue = vnode.props['ms-text']
	        if ('textContent' in node) {
	            node.textContent = nodeValue + ''
	        } else {
	            node.innerText = nodeValue + ''
	        }
	        vnode.dom = node
	    }
	})

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	
	var parseView = __webpack_require__(37)

	avalon.htmlFactory = function(str, num){
	  var vtree = avalon.lexer(str)
	  avalon.__html = []
	  var render =  parseView(vtree, num) + '\nreturn (avalon.__html = vnodes' + num + ')'
	  return {
	    render: render
	  }
	}

	avalon.directive('html', {
	    parse: function (binding, num) {
	              var ret =   "var htmlId =  "+avalon.parseExpr(binding)+'\n'
	              ret += 'vnode'+ num + '.props["ms-html"]  = htmlId;\n'
	              ret += 'vnode'+ num + '.props.skipContent  = true;\n'
	              ret += 'var obj  = avalon.htmlFactory(htmlId,'+num+');\n'
	              ret += 'try{eval(" new function(){"+ obj.render +"}")}catch(e){};\n'
	              ret += 'vnode'+ num +'.children = avalon.__html;\n'
	              return ret
	    },

	    diff: function (cur, pre, steps, name) {
	        var curValue = cur.props[name]
	        var preValue = pre.props[name]
	        cur.skipContent = false
	        if (curValue !== preValue) {
	            if (cur.props[name] !== preValue) {
	                var list = cur.change || (cur.change = [])
	                if(avalon.Array.ensure(list, this.update)){
	                   steps.count += 1
	                }
	            }
	        }
	    },
	    update: function (node, vnode) {
	        if(node.nodeType !== 1){
	            return
	        }
	        if (node.querySelectorAll) {
	            var nodes = node.querySelectorAll('[avalon-events]')
	            avalon.each(nodes, function (el) {
	                avalon.unbind(el)
	            })
	        } else {
	            var nodes = node.getElementsByTagName('*')
	            //IE6-7杩欐牱鍙栨墍鏈夊瓙瀛欒妭鐐逛細娣峰叆娉ㄩ噴鑺傜偣
	            avalon.each(nodes, function (el) {
	                if (el.nodeType === 1 && el.getAttribute('avalon-events')) {
	                    avalon.unbind(el)
	                }
	            })
	        }
	        //娣诲姞鑺傜偣
	        avalon.clearHTML(node)
	        var fragment = document.createDocumentFragment()
	        vnode.children.forEach(function (c) {
	            fragment.appendChild(avalon.vdomAdaptor(c, 'toDOM'))
	        })
	        node.appendChild(fragment)
	    }
	})


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	//鏍规嵁VM鐨勫睘鎬у€兼垨琛ㄨ揪寮忕殑鍊煎垏鎹㈢被鍚嶏紝ms-class='xxx yyy zzz:flag'
	//http://www.cnblogs.com/rubylouvre/archive/2012/12/17/2818540.html
	var markID = __webpack_require__(6).getLongID

	var directives = avalon.directives
	avalon.directive('class', {
	    parse: function (binding, num) {
	        //蹇呴』鏄竷灏斿璞℃垨瀛楃涓叉暟缁�
	        return 'vnode' + num + '.props["' + binding.name + '"] = ' + avalon.parseExpr(binding) + ';\n'
	    },
	    diff: function (cur, pre, steps, name) {
	        var type = name.slice(3)
	        var curValue = cur.props[name]
	        var preValue = pre.props[name]
	        if (!pre.classEvent) {
	            var classEvent = {}
	            if (type === 'hover') {//鍦ㄧЩ鍑虹Щ鍏ユ椂鍒囨崲绫诲悕
	                classEvent.mouseenter = activateClass
	                classEvent.mouseleave = abandonClass
	            } else if (type === 'active') {//鍦ㄨ幏寰楃劍鐐规椂鍒囨崲绫诲悕
	                cur.props.tabindex = cur.props.tabindex || -1
	                classEvent.tabIndex = cur.props.tabindex
	                classEvent.mousedown = activateClass
	                classEvent.mouseup = abandonClass
	                classEvent.mouseleave = abandonClass
	            }
	            cur.classEvent = classEvent
	        } else {
	            cur.classEvent = pre.classEvent
	        }
	        pre.classEvent = null

	        var className = avalon.noop
	        if (Array.isArray(curValue)) {
	            //澶勭悊澶嶆潅鐨勪竴缁存暟缁�
	           className = curValue.map(function(el){
	                return el && typeof el === 'object' ? processBooleanObject(el) :
	                        el ? el : ''
	            }).join(' ')
	        } else if (avalon.isObject(curValue)) {
	            //澶勭悊甯冨皵瀵硅薄
	            className = processBooleanObject(curValue)
	        } else if (curValue) {
	            //澶勭悊鍏朵粬鐪熷€硷紝濡傚瓧绗︿覆锛屾暟瀛�
	            className = String(curValue)
	        }
	        if(className === avalon.noop){
	            return
	        }
	        className = cur.props[name] = className.trim().replace(/\s+/, ' ')
	        if (!preValue || preValue !== className) {
	            cur['change-' + type] = className
	            var list = cur.change || (cur.change = [])
	            if (avalon.Array.ensure(list, this.update)) {
	                steps.count += 1
	            }
	        }
	    },
	    update: function (node, vnode) {
	        var classEvent = vnode.classEvent
	        if (classEvent) {
	            for (var i in classEvent) {
	                if (i === 'tabIndex') {
	                    node[i] = classEvent[i]
	                } else {
	                    avalon.bind(node, i, classEvent[i])
	                }
	            }
	            vnode.classEvent = {}
	        }
	        var names = ['class', 'hover', 'active']
	        names.forEach(function (type) {
	            var name = 'change-' + type
	            var value = vnode[ name ]
	            if (value === void 0)
	                return
	            if (type === 'class') {
	                setClass(node, vnode)
	            } else {
	                var oldType = node.getAttribute('change-'+type)
	                if (oldType) {
	                    avalon(node).removeClass(oldType)
	                }
	                node.setAttribute(name, value)
	            }
	        })
	    }
	})

	directives.active = directives.hover = directives['class']

	function processBooleanObject(obj) {
	    return Object.keys(obj).filter(function (name) {
	        return obj[name]
	    }).join(' ')
	}

	var classMap = {
	    mouseenter: 'change-hover',
	    mouseleave: 'change-hover',
	    mousedown: 'change-active',
	    mouseup: 'change-active'
	}

	function activateClass(e) {
	    var elem = e.target
	    avalon(elem).addClass(elem.getAttribute(classMap[e.type]) || '')
	}

	function abandonClass(e) {
	    var elem = e.target
	    var name = classMap[e.type]
	    avalon(elem).removeClass(elem.getAttribute(name) || '')
	    if (name !== 'change-active') {
	        avalon(elem).removeClass(elem.getAttribute('change-active') || '')
	    }
	}

	function setClass(node, vnode) {
	    var old = node.getAttribute('old-change-class') || ''
	    var neo = vnode.props['ms-class']
	    avalon(node).removeClass(old).addClass(neo)
	    node.setAttribute('old-change-class', neo)
	}

	markID(activateClass)
	markID(abandonClass)




/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var markID = __webpack_require__(6).getLongID

	var quote = avalon.quote

	//Ref: http://developers.whatwg.org/webappapis.html#event-handler-idl-attributes
	// The assumption is that future DOM event attribute names will begin with
	// 'on' and be composed of only English letters.
	var revent = /^ms-on-([a-z]+)/ 
	var rfilters = /\|.+/g
	var rvar = /([@$]?\w+)/g
	var rstring = __webpack_require__(40).string
	//鍩轰簬浜嬩欢浠ｇ悊鐨勯珮鎬ц兘浜嬩欢缁戝畾
	avalon.directive('on', {
	    priority: 3000,
	    parse: function (binding, num) {
	        var vars = binding.expr.replace(rstring, ' ').replace(rfilters, '').match(rvar)
	        var canCache = vars.every(function (el) {
	            return el.charAt(0) === '@' || el === '$event'
	        })
	        var vmDefine = 'vnode' + num + '.onVm = __vmodel__\n'
	        var pid = quote(binding.name)
	       
	        if (canCache) {
	            var fn = Function('return ' + avalon.parseExpr(binding, 'on'))()
	            var uuid = markID(fn)
	            avalon.eventListeners[uuid] = fn
	            return vmDefine + 'vnode' + num + '.props[' + pid +
	                    '] = avalon.eventListeners.' + uuid + '\n'
	        } else {//濡傛灉闂寘寮曠敤鍏朵粬鍙橀噺
	            return vmDefine + 'vnode' + num + '.props[' + pid +
	                    '] = ' + avalon.parseExpr(binding, 'on') + '\n'
	        }
	    },
	    diff: function (cur, pre, steps, name) {
	      
	        var fn0 = cur.props[name]
	        var fn1 = (pre.props || {})[name]
	        if ( fn0 !== fn1  ) {
	            var match = name.match(revent)
	            var type = match[1]
	            var search = type + ':' + markID(fn0)
	            cur.addEvents = cur.addEvents || {}
	            cur.addEvents[search] = fn0

	            if (typeof fn1 === 'function') {
	                cur.removeEvents = cur.removeEvents || {}
	                cur.removeEvents[type + ':' + fn1.uuid] = fn1
	            }

	            var list = cur.change || (cur.change = [])
	            if(avalon.Array.ensure(list, this.update)){
	                steps.count += 1
	            }
	            
	        }
	    },
	    update: function (node, vnode) {
	        if(!node || node.nodeType > 1) //鍦ㄥ惊鐜粦瀹氫腑锛岃繖閲屼负null
	          return
	        var key, type, listener
	        node._ms_context_ = vnode.onVm
	        delete vnode.onVm
	        for (key in vnode.removeEvents) {
	            type = key.split(':').shift()
	            listener = vnode.removeEvents[key]
	            avalon.unbind(node, type, listener)
	        }
	        delete vnode.removeEvents
	        for (key in vnode.addEvents) {
	            type = key.split(':').shift()
	            listener = vnode.addEvents[key]
	            avalon.bind(node, type, listener)
	        }
	        delete vnode.addEvents
	    }
	})






/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	
	var valueHijack = __webpack_require__(55)

	var newField = __webpack_require__(56)
	var initField = __webpack_require__(57)
	var updateField = __webpack_require__(59)
	var addField = __webpack_require__(60)
	var evaluatorPool = __webpack_require__(39)
	avalon.directive('duplex', {
	    priority: 2000,
	    parse: function (binding, num, vnode) {
	        var id = binding.expr
	        newField(binding, vnode)
	        avalon.caches[id] = vnode.field
	        var ret = 'vnode' + num + '.duplexVm = __vmodel__;\n' +
	                'vnode' + num + '.props["ms-duplex"] = ' + avalon.quote(id) + ';\n' +
	                'vnode' + num + '.props["data-duplex-get"] = ' + evaluatorPool.get('duplex:' + id) +'\n'+
	                'vnode' + num + '.props["data-duplex-set"] = ' + evaluatorPool.get('duplex:set:' + id)+'\n'
	        var format = evaluatorPool.get('duplex:format:' + id)
	        if (format) {
	            ret += 'vnode' + num + '.props["data-duplex-format"] = ' + format
	        }
	        return ret
	    },
	    diff: function (cur, pre, steps) {
	        var duplexID = cur.props["ms-duplex"]
	        cur.field = pre.field || avalon.mix( {}, avalon.caches[duplexID])
	        var field = cur.field
	        if (!field.set) {
	            initField(cur)
	        }

	        cur.duplexVm = null
	        var value = cur.props.value = field.get(field.vmodel)

	        if (cur.type === 'select' && !cur.children.length) {
	            avalon.Array.merge(cur.children, avalon.lexer(cur.template, 0, 2))
	            fixVirtualOptionSelected(cur, value)
	        }

	        if (!field.element) {
	            var isEqual = false
	        } else {
	            var preValue = pre.props.value

	            if (Array.isArray(value)) {
	                isEqual = value + '' === preValue + ''
	            } else {
	                isEqual = value === preValue
	            }
	        }

	        if (!isEqual) {
	            field.modelValue = value
	            var afterChange = cur.afterChange || (cur.afterChange = [])
	            avalon.Array.ensure(afterChange, this.update)
	            steps.count += 1
	        }
	    },
	    update: function (node, vnode) {
	        var field = node._ms_field_ = vnode.field
	        if (!field.element) {//杩欐槸涓€娆℃€х粦瀹�
	            field.element = node //鏂逛究杩涜鍨冨溇鍥炴敹
	            var events = field.events
	            for (var name in events) {
	                avalon.bind(node, name, events[name])
	                delete events[name]
	            }
	        }
	        addField(node, vnode)
	        if (!avalon.msie && valueHijack === false && !node.valueHijack) {
	            //chrome 42鍙婁互涓嬬増鏈渶瑕佽繖涓猦ack
	            node.valueHijack = field.update
	            var intervalID = setInterval(function () {
	                if (!avalon.contains(avalon.root, node)) {
	                    clearInterval(intervalID)
	                } else {
	                    node.valueHijack()
	                }
	            }, 30)
	        }
	        var viewValue = field.format(field.modelValue)
	        if (field.viewValue !== viewValue) {
	            field.viewValue = viewValue
	            updateField[field.type].call(field)
	            if (node.caret) {
	                var pos = field.caretPos
	                pos && field.updateCaret(node, pos.start, pos.end)
	                field.caretPos = null
	            }
	        }
	    }
	})


	function fixVirtualOptionSelected(cur, curValue) {
	    var options = []
	    cur.children.forEach(function (a) {
	        if (a.type === 'option') {
	            options.push(a)
	        } else if (a.type === 'optgroup') {
	            a.children.forEach(function (c) {
	                if (c.type === 'option') {
	                    options.push(c)
	                }
	            })
	        }
	    })
	    var multi = cur.props.multiple
	    var map = {}
	    var one = multi === null || multi === void 0 || multi === false
	    if (Array.isArray(curValue)) {
	        curValue.forEach(function (a) {
	            map[a] = 1
	        })
	    } else {
	        map[curValue] = 1
	    }
	    for (var i = 0, option; option = options[i++]; ) {
	        var v = 'value' in option.props ? option.props.value :
	                (option.children[0] || {nodeValue: ''}).nodeValue.trim()
	        option.props.selected = !!map[v]
	        if (map[v] && one) {
	            break
	        }
	    }
	}


/***/ },
/* 55 */
/***/ function(module, exports) {

	var valueHijack = false
	try { //#272 IE9-IE11, firefox
	    var setters = {}
	    var aproto = HTMLInputElement.prototype
	    var bproto = HTMLTextAreaElement.prototype
	    function newSetter(value) { // jshint ignore:line
	        setters[this.tagName].call(this, value)
	        if (!this.caret && this._ms_field_) {
	            this._ms_field_.update.call(this)
	        }
	    }
	    var inputProto = HTMLInputElement.prototype
	    Object.getOwnPropertyNames(inputProto) //鏁呮剰寮曞彂IE6-8绛夋祻瑙堝櫒鎶ラ敊
	    setters['INPUT'] = Object.getOwnPropertyDescriptor(aproto, 'value').set

	    Object.defineProperty(aproto, 'value', {
	        set: newSetter
	    })
	    setters['TEXTAREA'] = Object.getOwnPropertyDescriptor(bproto, 'value').set
	    Object.defineProperty(bproto, 'value', {
	        set: newSetter
	    })
	    valueHijack = true
	} catch (e) {
	    //鍦╟hrome 43涓� ms-duplex缁堜簬涓嶉渶瑕佷娇鐢ㄥ畾鏃跺櫒瀹炵幇鍙屽悜缁戝畾浜�
	    // http://updates.html5rocks.com/2015/04/DOM-attributes-now-on-the-prototype
	    // https://docs.google.com/document/d/1jwA8mtClwxI-QJuHT7872Z0pxpZz8PBkf2bGAbsUtqs/edit?pli=1
	}
	module.exports = valueHijack

/***/ },
/* 56 */
/***/ function(module, exports) {

	var rchangeFilter = /\|\s*change\b/
	var rcheckedType = /^(?:checkbox|radio)$/
	var rdebounceFilter = /\|\s*debounce(?:\(([^)]+)\))?/
	var rnoduplexInput = /^(file|button|reset|submit|checkbox|radio|range)$/

	function newField(binding, vnode) {
	    var expr = binding.expr
	    var etype = vnode.props.type
	    //澶勭悊鏁版嵁杞崲鍣�
	    var ptype = binding.param
	    var isChecked = ptype === 'checked'

	    var field = vnode.field = {
	        parsers: [],
	        formatters: [],
	        modelValue: NaN,
	        viewValue: NaN,
	        validators: '',
	        parse: parse,
	        format: format
	    }
	    if (isChecked) {
	        if (rcheckedType.test(etype)) {
	            field.isChecked = true
	            field.type = 'radio'
	        } else {
	            ptype = null
	        }
	    }
	    var changed = vnode.props['data-duplex-changed']
	    if (changed) {
	        var cid = changed+':cb'
	        if(!avalon.caches[cid]){
	            var fn = Function('return '+ avalon.parseExpr(changed, 'on'))
	            avalon.caches[cid] = field.callback = fn()
	        }else{
	            field.callback = avalon.caches[cid]
	        }
	    }
	    var parser = avalon.parsers[ptype]
	    if (parser) {
	        field.parsers.push(parser)
	    }
	    if (rchangeFilter.test(expr)) {
	      //  expr = expr.replace(rchangeFilter, '')
	        if (rnoduplexInput.test(etype)) {
	            avalon.warn(etype + '涓嶆敮鎸乧hange杩囨护鍣�')
	        } else {
	            field.isChanged = true
	        }
	    }

	    var match = expr.match(rdebounceFilter)
	    if (match) {
	       // expr = expr.replace(rdebounceFilter, '')
	        if (!field.isChanged) {
	            field.debounceTime = parseInt(match[1], 10) || 300
	        }
	    }
	    binding.expr = field.expr = expr.trim()
	    if (!/input|textarea|select/.test(vnode.type)) {
	        if ('contenteditable' in vnode.props) {
	            field.type = 'contenteditable'
	        }
	    } else if (!field.type) {
	        field.type = vnode.type === 'select' ? 'select' :
	                etype === 'checkbox' ? 'checkbox' :
	                etype === 'radio' ? 'radio' :
	                'input'
	    }
	    avalon.parseExpr(binding, 'duplex')
	}

	function parse(val) {
	    for (var i = 0, fn; fn = this.parsers[i++]; ) {
	        val = fn.call(this, val)
	    }
	    return val
	}

	function format(val) {
	    var formatters = this.formatters
	    var index = formatters.length
	    while (index--) {
	        val = formatters[index](val)
	    }
	    return val
	}

	module.exports = newField


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var msie = avalon.msie
	var window = avalon.window
	var document = avalon.document
	var refreshModel = __webpack_require__(58)
	var markID = __webpack_require__(6).getShortID


	function initControl(cur) {

	    var field = cur.field
	    field.update = updateModel
	    field.updateCaret = setCaret
	    field.get = cur.props['data-duplex-get']
	    field.set = cur.props['data-duplex-set']
	    var format = cur.props['data-duplex-format']
	    if (format) {
	        field.formatters.push(function (v) {
	            return format(field.vmodel, v)
	        })
	    }
	    field.vmodel = cur.duplexVm

	    var events = field.events = {}
	    //娣诲姞闇€瑕佺洃鍚殑浜嬩欢
	    switch (field.type) {
	        case 'radio':
	            if (cur.props.type === 'radio') {
	                events.click = updateModel
	            } else {
	                events[msie < 9 ? 'click' : 'change'] = updateModel
	            }
	            break
	        case 'checkbox':
	        case 'select':
	            events.change = updateModel
	            break
	        case 'contenteditable':
	            if (field.isChanged) {
	                events.blur = updateModel
	            } else {
	                if (avalon.modern) {
	                    if (window.webkitURL) {
	                        // http://code.metager.de/source/xref/WebKit/LayoutTests/fast/events/
	                        // https://bugs.webkit.org/show_bug.cgi?id=110742
	                        events.webkitEditableContentChanged = updateModel
	                    } else if (window.MutationEvent) {
	                        events.DOMCharacterDataModified = updateModel
	                    }
	                    events.input = updateModel
	                } else {

	                    events.keydown = updateModelKeyDown
	                    events.paste = updateModelDelay
	                    events.cut = updateModelDelay
	                    events.focus = closeComposition
	                    events.blur = openComposition

	                }

	            }
	            break
	        case 'input':
	            if (field.isChanged) {
	                events.change = updateModel
	            } else {

	                //http://www.cnblogs.com/rubylouvre/archive/2013/02/17/2914604.html
	                //http://www.matts411.com/post/internet-explorer-9-oninput/
	                if (avalon.msie < 10) {
	                    // Internet Explorer <= 8 doesn't support the 'input' event, but does include 'propertychange' that fires whenever
	                    // any property of an element changes. Unlike 'input', it also fires if a property is changed from JavaScript code,
	                    // but that's an acceptable compromise for this binding. IE 9 does support 'input', but since it doesn't fire it
	                    // when using autocomplete, we'll use 'propertychange' for it also.
	                    events.propertychange = updateModelHack
	                    if (msie === 8) {
	                        // IE 8 has a bug where it fails to fire 'propertychange' on the first update following a value change from
	                        // JavaScript code. It also doesn't fire if you clear the entire value. To fix this, we bind to the following
	                        // events too.
	                        events.keyup = updateModel      // A single keystoke
	                        events.keydown = updateModel    // The first character when a key is held down
	                    }
	                    if (msie >= 8) {
	                        // Internet Explorer 9 doesn't fire the 'input' event when deleting text, including using
	                        // the backspace, delete, or field-x keys, clicking the 'x' to clear the input, dragging text
	                        // out of the field, and cutting or deleting text using the context menu. 'selectionchange'
	                        // can detect all of those except dragging text out of the field, for which we use 'dragend'.
	                        // These are also needed in IE8 because of the bug described above.
	                        cur.valueHijack = updateModel  // 'selectionchange' covers cut, paste, drop, delete, etc.
	                        events.dragend = updateModelDelay
	                    }
	                } else {
	                    events.input = updateModel
	                    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
	                    //濡傛灉褰撳墠娴忚鍣ㄦ敮鎸両nt8Array,閭ｄ箞鎴戜滑灏变笉闇€瑕佷互涓嬭繖浜涗簨浠舵潵鎵撹ˉ涓佷簡
	                    if (!/\[native code\]/.test(window.Int8Array)) {
	                        events.keydown = updateModelKeyDown //safari < 5 opera < 11
	                        events.paste = updateModelDelay//safari < 5
	                        events.cut = updateModelDelay//safari < 5 
	                        if (window.netscape) {
	                            // Firefox <= 3.6 doesn't fire the 'input' event when text is filled in through autocomplete
	                            events.DOMAutoComplete = updateModel
	                        }
	                    }
	                    events.compositionstart = openComposition
	                    events.compositionend = closeComposition

	                }
	            }
	            break
	    }

	    if (/password|text/.test(cur.props.type)) {
	        events.focus = openCaret
	        events.blur = closeCaret
	    }
	}


	function updateModel() {
	    var elem = this

	    var field = this._ms_field_
	    if (elem.composing)
	        return
	    if (elem.caret) {
	        try {
	            var pos = getCaret(elem)
	            if (pos.start === pos.end || pos.start + 1 === pos.end) {
	                field.caretPos = pos
	            }
	        } catch (e) {
	            avalon.warn('fixCaret error', e)
	        }
	    }
	    if (field.debounceTime > 4) {
	        var timestamp = new Date()
	        var left = timestamp - field.time || 0
	        field.time = timestamp
	        if (left >= field.debounceTime) {
	            refreshModel[field.type].call(field)
	        } else {
	            clearTimeout(field.debounceID)
	            field.debounceID = setTimeout(function () {
	                refreshModel[field.type].call(field)
	            }, left)
	        }
	    } else {
	        refreshModel[field.type].call(field)
	    }
	}


	function updateModelHack(e) {
	    if (e.propertyName === 'value') {
	        updateModel.call(this, e)
	    }
	}

	function updateModelDelay(e) {
	    var elem = this
	    setTimeout(function () {
	        updateModel.call(elem, e)
	    }, 17)
	}


	function openCaret() {
	    this.caret = true
	}

	function closeCaret() {
	    this.caret = false
	}
	function openComposition() {
	    this.composing = true
	}

	function closeComposition(e) {
	    this.composing = false
	}
	function updateModelKeyDown(e) {
	    var key = e.keyCode;
	    // ignore
	    //    command            modifiers                   arrows
	    if (key === 91 || (15 < key && key < 19) || (37 <= key && key <= 40))
	        return
	    updateModelDelay.call(this, e)
	}

	markID(openCaret)
	markID(closeCaret)
	markID(openComposition)
	markID(closeComposition)
	markID(updateModel)
	markID(updateModelHack)
	markID(updateModelDelay)
	markID(updateModelKeyDown)

	if (msie >= 8 && msie < 10) {
	    avalon.bind(document, 'selectionchange', function (e) {
	        var el = document.activeElement || {}
	        if (!el.caret && el.valueHijack) {
	            el.valueHijack()
	        }
	    })
	}

	function getCaret(field) {
	    var start = NaN, end = NaN
	    if (field.setSelectionRange) {
	        start = field.selectionStart
	        end = field.selectionEnd
	    } else if (document.selection && document.selection.createRange) {
	        var range = document.selection.createRange()
	        start = 0 - range.duplicate().moveStart('character', -100000)
	        end = start + range.text.length
	    }
	    return {
	        start: start,
	        end: end
	    }
	}

	function setCaret(field, begin, end) {
	    if (!field.value || field.readOnly)
	        return
	    if (field.createTextRange) {//IE6-8
	        var range = field.createTextRange()
	        range.collapse(true)
	        range.moveStart('character', begin)
	        range.select()
	    } else {
	        field.selectionStart = begin
	        field.selectionEnd = end
	    }
	}

	module.exports = initControl

/***/ },
/* 58 */
/***/ function(module, exports) {

	
	/**
	 * ------------------------------------------------------------
	 * refreshModel
	 * 鍦ㄤ簨浠跺洖璋冧笌value鐨剆etter涓皟鐢ㄨ繖浜涙柟娉�,鏉ュ悓姝m
	 * ------------------------------------------------------------
	 */
	var refreshModel = {
	    input: function (prop) {//澶勭悊鍗曚釜value鍊煎鐞�
	        var field = this
	        prop = prop || 'value'
	        var viewValue = field.element[prop]
	        var rawValue = viewValue

	        viewValue = field.format(viewValue)
	        //vm.aaa = '1234567890'
	        //澶勭悊 <input ms-duplex='@aaa|limitBy(8)'/>{{@aaa}} 杩欑鏍煎紡鍖栧悓姝ヤ笉涓€鑷寸殑鎯呭喌 
	        var val = field.parse(viewValue)
	        viewValue = val + ''

	        if (val !== field.modelValue) {
	            field.set(field.vmodel, val)
	            callback(field)
	        }

	        if (rawValue !== viewValue) {
	            field.viewValue = viewValue
	            field.element[prop] = viewValue
	        }

	    },
	    radio: function () {
	        var field = this
	        if (field.isChecked) {
	            var val = field.modelValue = !field.modelValue
	            field.set(field.vmodel, val)
	            callback(field)
	        } else {
	            refreshModel.input.call(field)
	        }
	    },
	    checkbox: function () {
	        var field = this
	        var array = field.modelValue
	        if (!Array.isArray(array)) {
	            avalon.warn('ms-duplex搴旂敤浜巆heckbox涓婅瀵瑰簲涓€涓暟缁�')
	            array = [array]
	        }
	        var method = field.element.checked ? 'ensure' : 'remove'
	        if (array[method]) {
	            var val = field.parse(field.element.value)
	            array[method](val)
	            callback(field)
	        }

	    },
	    select: function () {
	        var field = this
	        var val = avalon(field.element).val() //瀛楃涓叉垨瀛楃涓叉暟缁�
	        if (val + '' !== this.modelValue + '') {
	            if (Array.isArray(val)) { //杞崲甯冨皵鏁扮粍鎴栧叾浠�
	                val = val.map(function (v) {
	                    return field.parse(v)
	                })
	            } else {
	                val = field.parse(val)
	            }
	            field.modelValue = val
	            field.set(field.vmodel, val)
	            callback(field)
	        }
	    },
	    contenteditable: function () {
	        refreshModel.input.call(this, 'innerHTML')
	    }
	}

	function callback(field) {
	    if (field.validator) {
	        avalon.directives.validate.validate(field, false)
	    }
	    if (field.callback) {
	        field.callback.call(field.vmodel, {
	            type: 'changed',
	            target: field.element
	        })
	    }
	}
	module.exports = refreshModel

/***/ },
/* 59 */
/***/ function(module, exports) {

	
	var updateField = {
	    input: function () {//澶勭悊鍗曚釜value鍊煎鐞�
	        this.element.value = this.viewValue
	    },
	    radio: function () {//澶勭悊鍗曚釜checked灞炴€�
	        var checked
	        if (this.isChecked) {
	            checked = !!this.viewValue
	        } else {
	            checked = this.viewValue + '' === this.element.value
	        }
	        var element = this.element
	        if (avalon.msie === 6) {
	            setTimeout(function () {
	                //IE8 checkbox, radio鏄娇鐢╠efaultChecked鎺у埗閫変腑鐘舵€侊紝
	                //骞朵笖瑕佸厛璁剧疆defaultChecked鍚庤缃甤hecked
	                //骞朵笖蹇呴』璁剧疆寤惰繜
	                element.defaultChecked = checked
	                element.checked = checked
	            }, 31)
	        } else {
	            element.checked = checked
	        }
	    },
	    checkbox: function () {//澶勭悊澶氫釜checked灞炴€�
	        var checked = false
	        var element = this.element
	        var value = element.value
	        for (var i = 0; i < this.modelValue.length; i++) {
	            var el = this.modelValue[i]
	            if (el + '' === value) {
	                checked = true
	            }
	        }
	        element.checked = checked
	    },
	    select: function () {//澶勭悊瀛愮骇鐨剆elected灞炴€�
	        var a = Array.isArray(this.viewValue) ? this.viewValue.map(String): this.viewValue+''
	        avalon(this.element).val(a)
	    },
	    contenteditable: function () {//澶勭悊鍗曚釜innerHTML
	        this.element.innerHTML = this.viewValue
	        this.update.call(this.element)
	    }
	}

	module.exports = updateField

/***/ },
/* 60 */
/***/ function(module, exports) {

	
	module.exports = function addField(node, vnode) {
	    var field = vnode.field
	    var rules = vnode.props['ms-rules']
	    if (rules && !field.validator) {
	        while (node && node.nodeType === 1) {
	            var validator = node._ms_validator_
	            if (validator) {
	                field.rules = rules
	                field.validator = validator
	                if(avalon.Array.ensure(validator.fields, field)){
	                    validator.addField(field)
	                }
	                break
	            }
	            node = node.parentNode
	        }
	    }
	}


/***/ },
/* 61 */
/***/ function(module, exports) {

	var dir = avalon.directive('validate', {
	//楠岃瘉鍗曚釜琛ㄥ崟鍏冪礌
	    parse: function (binding, num) {
	        return 'vnode' + num + '.props["ms-validate"] = ' + avalon.parseExpr(binding) + ';\n'
	    },
	    diff: function (cur, pre, steps, name) {
	        var validator = cur.props[name]
	        var p = pre.props[name]
	        if (p && p.onError && p.addField) {
	            cur.props[name] = p
	        } else if (Object(validator) === validator) {
	            if(validator.$id){//杞崲涓烘櫘閫氬璞�
	                validator = validator.$model
	            }
	            cur.props[name] = validator
	            for(var name in dir.defaults){
	                if(!validator[name]){
	                    validator[name] = dir.defaults[name]
	                }
	            }
	            validator.fields = validator.fields || []
	            var list = cur.change || (cur.change = [])
	            if (avalon.Array.ensure(list, this.update)) {
	                steps.count += 1
	            }
	        }
	    },
	    update: function (node, vnode) {
	        var validator = vnode.props['ms-validate']
	        node._ms_validator_ = validator
	        validator.element = node
	        node.setAttribute("novalidate", "novalidate");
	        if (validator.validateAllInSubmit) {
	            avalon.bind(node, "submit", function (e) {
	                e.preventDefault()
	                dir.validateAll.call(validator, validator.onValidateAll)
	            })
	        }
	        if (typeof validator.onInit === "function") { //vmodels鏄笉鍖呮嫭vmodel鐨�
	            validator.onInit.call(node)
	        }
	    },
	    validateAll: function (callback) {
	        var validator = this
	        var fn = typeof callback === "function" ? callback : validator.onValidateAll
	        var promise = validator.fields.filter(function (field) {
	            var el = field.element
	            return el && !el.disabled && validator.element.contains(el)
	        }).map(function (field) {
	            return dir.validate(field, true)
	        })
	        var reasons = []
	        Promise.all(promise).then(function (array) {
	            for (var i = 0, el; el = array[i++]; ) {
	                reasons = reasons.concat(el)
	            }
	            if (validator.deduplicateInValidateAll) {
	                var uniq = {}
	                reasons = reasons.filter(function (field) {
	                    var el = field.element
	                    var uuid = el.uniqueID || (el.uniqueID = setTimeout("1"))
	                    if (uniq[uuid]) {
	                        return false
	                    } else {
	                        uniq[uuid] = true
	                        return true
	                    }
	                })
	            }
	            fn.call(validator.element, reasons) //杩欓噷鍙斁缃湭閫氳繃楠岃瘉鐨勭粍浠�
	        })
	    },
	    addField: function (field) {
	        var validator = this
	        var node = field.element
	        if (validator.validateInKeyup && (!field.isChanged &&!field.debounceTime)) {
	            avalon.bind(node, 'keyup', function (e) {
	                 dir.validate(field, 0, e)
	            })
	        }
	        if (validator.validateInBlur) {
	            avalon.bind(node, 'blur', function (e) {
	                dir.validate(field, 0, e)
	            })
	        }
	        if (validator.resetInFocus) {
	            avalon.bind(node, 'focus', function (e) {
	                validator.onReset.call(node, e, field)
	            })
	        }
	    },
	    validate: function (field, isValidateAll, event) {
	        var promises = []
	        var value = field.get(field.vmodel)
	        var elem = field.element
	        var validator = field.validator
	        if (elem.disabled)
	            return
	        for (var ruleName in field.rules) {
	            var ruleValue = field.rules[ruleName]
	            if (ruleValue === false)
	                continue
	            var hook = avalon.validators[ruleName]
	            var resolve, reject
	            promises.push(new Promise(function (a, b) {
	                resolve = a
	                reject = b
	            }))
	            var next = function (a) {
	                if (field.norequired && value === "") {
	                    a = true
	                }
	                if (a) {
	                    resolve(true)
	                } else {
	                    var reason = {
	                        element: elem,
	                        data: field.data,
	                        message: elem.getAttribute("data-" + ruleName + "-message") || elem.getAttribute("data-message") || hook.message,
	                        validateRule: ruleName,
	                        getMessage: getMessage
	                    }
	                    resolve(reason)
	                }
	            }
	            field.data = {}
	            field.data[ruleName] = ruleValue
	            hook.get(value, field, next)
	        }
	        var reasons = []
	        //濡傛灉promises涓嶄负绌猴紝璇存槑缁忚繃楠岃瘉鎷︽埅鍣�
	        var lastPromise = Promise.all(promises).then(function (array) {
	            for (var i = 0, el; el = array[i++]; ) {
	                if (typeof el === "object") {
	                    reasons.push(el)
	                }
	            }
	            if (!isValidateAll) {
	                if (reasons.length) {
	                    validator.onError.call(elem, reasons, event)
	                } else {
	                    validator.onSuccess.call(elem, reasons, event)
	                }
	                validator.onComplete.call(elem, reasons, event)
	            }
	            return reasons
	        })
	        return lastPromise
	    }
	})

	var rformat = /\\?{{([^{}]+)\}}/gm

	function getMessage() {
	    var data = this.data || {}
	    return this.message.replace(rformat, function (_, name) {
	        return data[name] == null ? "" : data[name]
	    })
	}
	dir.defaults = {
	    addField: dir.addField,
	    onError: avalon.noop,
	    onSuccess: avalon.noop,
	    onComplete: avalon.noop,
	    onReset: avalon.noop,
	    validateInBlur: true, //@config {Boolean} true锛屽湪blur浜嬩欢涓繘琛岄獙璇�,瑙﹀彂onSuccess, onError, onComplete鍥炶皟
	    validateInKeyup: true, //@config {Boolean} true锛屽湪keyup浜嬩欢涓繘琛岄獙璇�,瑙﹀彂onSuccess, onError, onComplete鍥炶皟
	    validateAllInSubmit: true, //@config {Boolean} true锛屽湪submit浜嬩欢涓墽琛宱nValidateAll鍥炶皟
	    resetInFocus: true, //@config {Boolean} true锛屽湪focus浜嬩欢涓墽琛宱nReset鍥炶皟,
	    deduplicateInValidateAll: false //@config {Boolean} false锛屽湪validateAll鍥炶皟涓reason鏁扮粍鏍规嵁鍏冪礌鑺傜偣杩涜鍘婚噸
	}

/***/ },
/* 62 */
/***/ function(module, exports) {

	avalon.directive('rules', {
	    parse: function (binding, num) {
	        var rules = binding.expr
	        if (/{.+}/.test(rules)) {
	            return 'vnode' + num + '.props["ms-rules"] = ' + avalon.parseExpr(binding) + ';\n'
	        }
	    },
	    diff: avalon.noop
	})
	function isRegExp(value) {
	    return avalon.type(value) === 'regexp'
	}
	var rmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i
	var rurl = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/
	function isCorrectDate(value) {
	    if (typeof value === "string" && value) { //鏄瓧绗︿覆浣嗕笉鑳芥槸绌哄瓧绗�
	        var arr = value.split("-") //鍙互琚�-鍒囨垚3浠斤紝骞朵笖绗�1涓槸4涓瓧绗�
	        if (arr.length === 3 && arr[0].length === 4) {
	            var year = ~~arr[0] //鍏ㄩ儴杞崲涓洪潪璐熸暣鏁�
	            var month = ~~arr[1] - 1
	            var date = ~~arr[2]
	            var d = new Date(year, month, date)
	            return d.getFullYear() === year && d.getMonth() === month && d.getDate() === date
	        }
	    }
	    return false
	}
	avalon.shadowCopy(avalon.validators, {
	    pattern: {
	        message: '蹇呴』鍖归厤{{pattern}}杩欐牱鐨勬牸寮�',
	        get: function (value, field, next) {
	            var elem = field.element
	            var data = field.data
	            if (!isRegExp(data.pattern)) {
	                var h5pattern = elem.getAttribute("pattern")
	                data.pattern = new RegExp('^(?:' + h5pattern + ')$')
	            }
	            next(data.pattern.test(value))
	            return value
	        }
	    },
	    digits: function (value, field, next) {//鏁存暟
	        next(/^\-?\d+$/.test(value))
	        return value
	    },
	    number: function (value, field, next) {//鏁板€�
	        next(isFinite(value))
	        return value
	    },
	    required: {
	        message: '蹇呴』濉啓',
	        get: function (value, field, next) {
	            next(value !== "")
	            return value
	        }
	    },
	    equalto: {
	        message: '瀵嗙爜杈撳叆涓嶄竴鑷�',
	        get: function (value, field, next) {
	            var id = String(field.data.equalto).slice(1)
	            var other = avalon(document.getElementById(id)).val() || ""
	            next(value === other)
	            return value
	        }
	    },
	    date: {
	        message: '鏃ユ湡鏍煎紡涓嶆纭�',
	        get: function (value, field, next) {
	            var data = field.data
	            if (avalon.type(data.date) === 'regexp') {
	                next(data.date.test(value))
	            } else {
	                next(isCorrectDate(value))
	            }
	            return value
	        }
	    },
	    url: {
	        message: 'URL鏍煎紡涓嶆纭�',
	        get: function (value, field, next) {
	            next(rurl.test(value))
	            return value
	        }
	    },
	    email: {
	        message: 'email鏍煎紡涓嶆纭�',
	        get: function (value, field, next) {
	            next(rmail.test(value))
	            return value
	        }
	    },
	    minlength: {
	        message: '鏈€灏戣緭鍏{minlength}}涓瓧',
	        get: function (value, field, next) {
	            var num = parseInt(field.data.minlength, 10)
	            next(value.length >= num)
	            return value
	        }
	    },
	    maxlength: {
	        message: '鏈€澶氳緭鍏{maxlength}}涓瓧',
	        get: function (value, field, next) {
	            var num = parseInt(field.data.maxlength, 10)
	            next(value.length <= num)
	            return value
	        }
	    },
	    min: {
	        message: '杈撳叆鍊间笉鑳藉皬浜巤{min}}',
	        get: function (value, field, next) {
	            var num = parseInt(field.data.min, 10)
	            next(parseFloat(value) >= num)
	            return value
	        }
	    },
	    max: {
	        message: '杈撳叆鍊间笉鑳藉ぇ浜巤{max}}',
	        get: function (value, field, next) {
	            var num = parseInt(field.data.max, 10)
	            next(parseFloat(value) <= num)
	            return value
	        }
	    },
	    chs: {
	        message: '蹇呴』鏄腑鏂囧瓧绗�',
	        get: function (value, field, next) {
	            next(/^[\u4e00-\u9fa5]+$/.test(value))
	            return value
	        }
	    }
	})

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var patch = __webpack_require__(64)
	var uniqueID = 1
	//ms-imporant ms-controller ms-for ms-widget ms-effect ms-if   ...
	avalon.directive('if', {
	    priority: 6,
	    parse: function (binding, num) {
	        var ret = 'var ifVar = '+ avalon.parseExpr(binding,'if')+';\n'
	        ret += 'vnode' + num + '.props["ms-if"] = ifVar;\n'
	        ret += 'if(!ifVar){\n'
	        ret += 'vnode'+ num +'.nodeType = 8;\n'
	        ret += 'vnode'+num+'.directive="if";\n'
	        ret += 'vnode'+num+'.nodeValue="ms-if"\n}\n'
	        return ret
	    },
	    diff: function (cur, pre, steps) {
	        cur.dom = pre.dom
	        if (cur.nodeType !== pre.nodeType) {
	            var list = cur.change || (cur.change = [])
	            if (avalon.Array.ensure(list, this.update)) {
	                steps.count += 1
	                cur.steps = steps
	            }
	        }
	    },
	    update: function (node, vnode, parent) {
	        var dtype = node.nodeType
	        var vtype = vnode.nodeType
	        if (dtype !== vtype) {
	            if (vtype === 1) {
	                //瑕佹彃鍏ュ厓绱犺妭鐐�,灏嗗師浣嶇疆涓婄殑娉ㄩ噴鑺傜偣绉婚櫎骞禼ache
	                var element = vnode.dom
	                if (!element) {
	                    element = avalon.vdomAdaptor(vnode, 'toDOM')
	                    vnode.dom = element
	                }
	                parent.replaceChild(element, node)
	                if (vnode.steps.count) {
	                    patch([element], [vnode], parent, vnode.steps)
	                }
	                avalon.applyEffect(node,vnode, {
	                    hook: 'onEnterDone'
	                })
	                return (vnode.steps = false)
	            } else if (vtype === 8) {
	                //瑕佺Щ闄ゅ厓绱犺妭鐐�,鍦ㄥ搴斾綅缃笂鎻掑叆娉ㄩ噴鑺傜偣
	                avalon.applyEffect(node,vnode,{
	                    hook: 'onLeaveDone',
	                    cb: function(){
	                       var comment = node._ms_if_ ||
	                        (node._ms_if_ = document.createComment(vnode.nodeValue))
	                
	                       parent.replaceChild(comment, node)
	                   }
	                })
	            }
	        }
	    }
	})



/***/ },
/* 64 */
/***/ function(module, exports) {

	/**
	 * ------------------------------------------------------------
	 * patch 瀵规煇涓€涓鍥炬牴鎹搴旂殑铏氭嫙DOM鏍戣繘琛屽叏閲忔洿鏂�
	 * ------------------------------------------------------------
	 */
	var sp = /^\s*$/
	function patch(nodes, vnodes, parent, steps) {
	    var next = nodes[0]
	    if ((!next && !parent) || !steps.count ){
	        return
	    }
	    parent = parent || next.parentNode
	    for (var i = 0, vn = vnodes.length; i < vn; i++) {
	        var vnode = vnodes[i]
	        //IE6-8涓嶄細鐢熸垚绌虹櫧鐨勬枃鏈妭鐐癸紝閫犳垚铏氭嫙DOM涓庣湡瀹濪OM鐨勪釜鏁颁笉涓€鑷达紝闇€瑕佽烦杩�
	        if(avalon.msie < 9 && vnode.type === '#text' && !sp.fixIESkip && sp.test(vnode.nodeValue) ){
	            continue
	        }
	        var node = next
	        if (node)
	            next = node.nextSibling

	        if (vnode.directive === 'for' && vnode.change) {
	            if (node.nodeType === 1) {
	                var startRepeat = document.createComment(vnode.nodeValue)
	                parent.insertBefore(startRepeat, node)
	                vnode.endRepeat = document.createComment('ms-for-end:')
	                parent.insertBefore(vnode.endRepeat, node.nextSibling)
	                node = startRepeat
	            } else {//濡傛灉鏄敞閲婅妭鐐�
	                if (!vnode.endRepeat) {
	                    vnode.endRepeat = getEndRepeat(node)
	                }
	            }
	            next = vnode.endRepeat.nextSibling
	        }

	        //ms-repeat,ms-if, ms-widget浼氳繑鍥瀎alse
	        if (false === execHooks(node, vnode, parent, steps, 'change')) {
	            if(vnode.repeatCount){
	                i += vnode.repeatCount + 1 //淇绱㈠紩鍊�
	            }
	            execHooks(node, vnode, parent, steps, 'afterChange')
	            continue
	        }
	        if (!vnode.skipContent && vnode.children && node && node.nodeType === 1) {
	            //澶勭悊瀛愯妭鐐�
	            patch(avalon.slice(node.childNodes), vnode.children, node, steps)
	        }
	        //ms-duplex
	        execHooks(node, vnode, parent, steps, 'afterChange')
	    }
	}

	function getEndRepeat(node) {
	    var isBreak = 0, ret = [], node
	    while (node) {
	        if (node.type === '#comment') {
	            if (node.nodeValue.indexOf('ms-for:') === 0) {
	                isBreak++
	            } else if (node.nodeValue.indexOf('ms-for-end:') === 0) {
	                isBreak--
	            }
	        }
	        ret.push(node)
	        node = node.nextSibling
	        if (isBreak === 0) {
	            break
	        }
	    }
	    return ret.pop()
	}

	function execHooks(node, vnode, parent, steps, hookName) {
	    var hooks = vnode[hookName]
	    if (hooks) {
	        for (var hook; hook = hooks.shift(); ) {
	            steps.count -= 1
	            if (false === hook(node, vnode, parent)) {
	                return false
	            }
	        }
	        delete vnode[hookName]
	    }
	}

	module.exports = patch

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var patch = __webpack_require__(64)
	var Cache = __webpack_require__(26)

	var rforPrefix = /ms-for\:\s*/
	var rforLeft = /^\s*\(\s*/
	var rforRight = /\s*\)\s*$/
	var rforSplit = /\s*,\s*/
	var rforAs = /\s+as\s+([$\w]+)/
	var rident = __webpack_require__(40).ident
	var rinvalid = /^(null|undefined|NaN|window|this|\$index|\$id)$/
	avalon._each = function (obj, fn) {
	    if (Array.isArray(obj)) {
	        for (var i = 0; i < obj.length; i++) {
	            var item = obj[i]
	            var type = typeof item
	            var key = item && type === 'object' ? item.$hashcode : type + item
	            fn(i, obj[i], key)
	        }
	    } else {
	        for (var i in obj) {
	            if (obj.hasOwnProperty(i)) {
	                fn(i, obj[i], i)
	            }
	        }
	    }
	}
	avalon.directive('for', {
	    priority: 3,
	    parse: function (el, num) {
	        var str = el.nodeValue, aliasAs
	        str = str.replace(rforAs, function (a, b) {
	            if (!rident.test(b) || rinvalid.test(b)) {
	                avalon.error('alias ' + b + ' is invalid --- must be a valid JS identifier which is not a reserved name.')
	            } else {
	                aliasAs = b
	            }
	            return ''
	        })
	        var arr = str.replace(rforPrefix, '').split(' in ')
	        var assign = 'var loop' + num + ' = ' + avalon.parseExpr(arr[1]) + '\n'
	        var alias = aliasAs ? 'var ' + aliasAs + ' = loop' + num + '\n' : ''
	        var kv = arr[0].replace(rforLeft, '').replace(rforRight, '').split(rforSplit)
	        if (kv.length === 1) {//纭繚avalon._each鐨勫洖璋冩湁涓変釜鍙傛暟
	            kv.unshift('$key')
	        }
	        //鍒嗗埆鍒涘缓isArray, ____n, ___i, ___v, ___trackKey鍙橀噺
	        return assign + alias + 'avalon._each(loop' + num + ', function(' + kv + ', traceKey){\n'

	    },
	    diff: function (current, previous, steps, __index__) {
	        var cur = current[__index__]
	        var pre = previous[__index__] || {}

	        var isInit = !('directive' in pre)
	        var isChange = false, i, c, p
	        if (isInit) {
	            pre.components = []
	            pre.repeatCount = 0
	        }
	        if (!pre.components) {
	            var range = getRepeatRange(previous, __index__)//鎵€鏈夎妭鐐瑰寘鎷墠鍚庨敋鐐�
	            pre.components = getComponents(range.slice(1, -1), pre.signature)
	            pre.repeatCount = range.length - 2
	        }
	        var quota = pre.components.length
	        var nodes = current.slice(cur.start, cur.end)
	        cur.endRepeat = pre.endRepeat
	        cur.components = getComponents(nodes.slice(1, -1), cur.signature)
	        var n = Math.max(nodes.length - 2, 0) - pre.repeatCount

	        if (n > 0) {
	            var spliceArgs = [__index__ + 1, 0]
	            for (var i = 0, n = n - 1; i < n; i++) {
	                spliceArgs.push(null)
	            }
	            previous.splice.apply(previous, spliceArgs)
	        } else if (n < 0) {
	            previous.splice.apply(previous, [__index__, Math.abs(n)])
	        }
	        cur.action = isInit ? 'init' : 'update'
	        if (!isInit) {
	            var cache = pre.cache
	            var newCache = cur.cache = {}

	            /* eslint-disable no-cond-assign */
	            for (i = 0; c = cur.components[i++]; ) {
	                /* eslint-enable no-cond-assign */
	                var p = isInCache(cache, c.key)
	                if (p) {
	                    if (!isChange) {//濡傛灉浣嶇疆鍙戠敓浜嗗彉鍖�
	                        isChange = c.index !== p.index
	                    }
	                    quota--
	                    c.nodes = p.nodes
	                    avalon.diff(c.children, p.children, steps)
	                } else if (quota) {
	                    p = fuzzyMatchCache(cache, c.key)
	                    if (p) {
	                        quota--
	                        isChange = true //鍐呭鍙戠敓鍙樺寲
	                        c.nodes = p.nodes
	                        avalon.diff(c.children, p.children, steps)
	                    }
	                }
	                saveInCache(newCache, c)
	            }

	            //杩欐槸鏂版坊鍔犵殑鍏冪礌
	            for (i in newCache) {
	                c = newCache[i]
	                if (!c.nodes) {
	                    isChange = true
	                    avalon.diff(c.children, [], steps)
	                }
	            }
	            for(i in cache){
	                cur.removedComponents = cache
	                isChange = true
	                break
	            }
	           

	        } else {
	            /* eslint-disable no-cond-assign */
	            var cache = cur.cache = {}
	            for (i = 0; c = cur.components[i++]; ) {
	                /* eslint-enable no-cond-assign */
	                avalon.diff(c.children, [], steps)
	                saveInCache(cache, c)
	            }
	            cur.removedComponents = {}
	            isChange = true
	        }
	        pre.components.length = 0 //release memory
	        delete pre.cache
	        if (isChange) {
	            var list = cur.change || (cur.change = [])
	            avalon.Array.ensure(list, this.update)
	            cur.steps = steps
	            steps.count += 1
	        }

	        return __index__ + nodes.length - 1

	    },
	    update: function (startRepeat, vnode, parent) {
	        var action = vnode.action
	        var endRepeat = vnode.endRepeat
	        var fragment = document.createDocumentFragment()
	        var hasEffect = false
	        if (action === 'init') {
	            var node = startRepeat.nextSibling
	            while (node && node !== endRepeat) {
	                if(!hasEffect && node.nodeType === 1){
	                   hasEffect = node.getAttribute('ms-effect')
	                }
	                parent.removeChild(node)
	                node = startRepeat.nextSibling
	            }
	        }
	        if (!startRepeat.domTemplate && vnode.components[0]) {
	            var domTemplate = fragment.cloneNode(false)
	            componentToDom(vnode.components[0], domTemplate)
	            startRepeat.domTemplate = domTemplate
	        }
	        var key = vnode.signature
	        for (var i in vnode.removedComponents) {
	            var el = vnode.removedComponents[i]
	            if (el.nodes) {
	                el.nodes.forEach(function (n, k) {
	                    if (n.parentNode) {                       
	                        avalon.applyEffect(n, el.children[k],{
	                            hook:'onLeaveDone',
	                            cb:function () {
	                               n.parentNode.removeChild(n)
	                            },
	                            staggerKey: key+'leave'
	                        })
	                    }
	                })
	                el.nodes.length = el.children.length = 0
	            }
	        }

	        delete vnode.removedComponents

	        var insertPoint = startRepeat

	        for (var i = 0; i < vnode.components.length; i++) {
	            var com = vnode.components[i]
	            var cnodes = com.nodes
	            if (cnodes) {
	                if (insertPoint.nextSibling !== cnodes[0]) {
	                    var moveFragment = fragment.cloneNode(false)
	                    for (var k = 0, cc; cc = cnodes[k++]; ) {
	                        moveFragment.appendChild(cc)
	                    }
	                    parent.insertBefore(moveFragment, insertPoint.nextSibling)
	                    applyEffects(com.nodes, com.children,{
	                        hook:'onMoveDone',
	                        staggerKey: key+'move'
	                    })
	                }
	            } else {
	                var newFragment = startRepeat.domTemplate.cloneNode(true)
	                cnodes = com.nodes = avalon.slice(newFragment.childNodes)
	                parent.insertBefore(newFragment, insertPoint.nextSibling)
	                applyEffects(com.nodes,com.children,{
	                    hook:'onEnterDone',
	                    staggerKey: key+'enter'
	                })
	            }
	            insertPoint = cnodes[cnodes.length - 1]
	        }
	        var entity = [], vnodes = []
	        vnode.components.forEach(function (c) {
	            entity.push.apply(entity, c.nodes)
	            vnodes.push.apply(vnodes, c.children)
	        })
	        vnode.repeatCount = vnodes.length
	        patch(entity, vnodes, parent, vnode.steps)
	        var cb = avalon.caches[vnode.cid]
	        if (cb) {
	            cb.call(vnode.vmodel, {
	                type: "rendered",
	                target: startRepeat,
	                endRepeat: endRepeat,
	                signature: vnode.signature
	            })
	        }
	        return false
	    }

	})

	function getRepeatRange(nodes, i) {
	    var isBreak = 0, ret = [], node
	    while (node = nodes[i++]) {
	        if (node.type === '#comment') {
	            if (node.nodeValue.indexOf('ms-for:') === 0) {
	                isBreak++
	            } else if (node.nodeValue.indexOf('ms-for-end:') === 0) {
	                isBreak--
	            }
	        }
	        ret.push(node)
	        if (isBreak === 0) {
	            break
	        }
	    }
	    return ret
	}
	var forCache = new Cache(128)
	function componentToDom(com, fragment, cur) {
	    for (var i = 0, c; c = com.children[i++]; ) {
	        if (c.nodeType === 1) {
	            cur = avalon.vdomAdaptor(c, 'toDOM')
	        } else {
	            var expr = c.type + '#' + c.nodeValue
	            var node = forCache.get(expr)
	            if (!node) {
	                node = avalon.vdomAdaptor(c, 'toDOM')
	                forCache.put(expr, node)
	            }
	            cur = node.cloneNode(true)
	        }
	        fragment.appendChild(cur)
	    }
	    return fragment
	}

	//灏嗚寰幆鐨勮妭鐐规牴鎹敋鐐瑰厓绱犲啀鍒嗘垚涓€涓釜鏇村ぇ鐨勫崟鍏�,鐢ㄤ簬diff
	function getComponents(nodes, signature) {
	    var components = []
	    var com = {
	        children: []
	    }
	    for (var i = 0, el; el = nodes[i]; i++) {
	        if (el.nodeType === 8 && el.nodeValue === signature) {
	            com.children.push(el)
	            com.key = el.key
	            com.index = components.length
	            components.push(com)
	            com = {
	                children: []
	            }
	        } else {
	            com.children.push(el)
	        }
	    }
	    return components
	}

	var rfuzzy = /^(string|number|boolean)/
	var rkfuzzy = /^_*(string|number|boolean)/
	function fuzzyMatchCache(cache, id) {
	    var m = id.match(rfuzzy)
	    if (m) {
	        var fid = m[1]
	        for (var i in cache) {
	            var n = i.match(rkfuzzy)
	            if (n && n[1] === fid) {
	                return isInCache(cache, i)
	            }
	        }
	    }
	}

	// 鏂颁綅缃�: 鏃т綅缃�
	function isInCache(cache, id) {
	    var c = cache[id], cid = id
	    if (c) {
	        var ctack = cache["***" + id]
	        if (ctack) {
	            var a = ctack.pop()
	            delete cache[a.id]
	            if (ctack.length == 0)
	                delete cache["***" + id]
	            return a.c
	        }
	        var stack = [{id: id, c: c}]
	        while (1) {
	            id += '_'
	            if (cache[id]) {
	                stack.push({
	                    id: id,
	                    c: cache[id]
	                })
	            } else {
	                break
	            }
	        }
	        var a = stack.pop()
	        delete cache[a.id]
	        if (stack.length) {
	            cache['***' + cid] = stack
	        }
	        return a.c
	    }
	    return c
	}

	function saveInCache(cache, component) {
	    var trackId = component.key
	    if (!cache[trackId]) {
	        cache[trackId] = component
	    } else {
	        while (1) {
	            trackId += '_'
	            if (!cache[trackId]) {
	                cache[trackId] = component
	                break
	            }
	        }
	    }
	}
	var applyEffects = function(nodes, vnodes, opts){
	    vnodes.forEach(function(el, i){ 
	        avalon.applyEffect(nodes[i], vnodes[i], opts)
	    })
	}



/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	
	var skipArray = __webpack_require__(67)
	var disposeDetectStrategy = __webpack_require__(68)
	var patch = __webpack_require__(64)

	//鎻掑叆鐐规満鍒�,缁勪欢鐨勬ā鏉夸腑鏈変竴浜泂lot鍏冪礌,鐢ㄤ簬绛夊緟琚闈㈢殑鍏冪礌鏇夸唬
	var dir = avalon.directive('widget', {
	    priority: 4,
	    parse: function (binding, num, elem) {
	        var wid = elem.props.wid || (elem.props.wid = avalon.makeHashCode('w'))
	        avalon.resolvedComponents[wid] = {
	            props: avalon.shadowCopy({}, elem.props),
	            template: elem.template
	        }
	        var ret = ''
	        ret += 'vnode' + num + '.props.wid = "' + wid + '"\n'
	        ret += 'vnode' + num + '.template = ' + avalon.quote(elem.template) + '\n'
	        ret += 'vnode' + num + '.props["ms-widget"] = ' + avalon.parseExpr(binding, 'widget') + '\n'
	        ret += 'vnode' + num + ' = avalon.component(vnode' + num + ', __vmodel__)\n'
	        ret += 'if(typeof vnode' + num + '.render === "string"){\n'
	        ret += 'avalon.__widget = [];\n'
	        ret += '__vmodel__ = vnode' + num+'.vmodel\n'
	        ret += 'try{eval(" new function(){"+ vnode' + num + '.render +"}");\n'
	        ret += '}catch(e){avalon.log(e)}\n'
	        ret += 'vnode' + num + ' = avalon.renderWidget(avalon.__widget[0])\n}\n'
	        return ret
	    },
	    define: function (topVm, defaults, options, accessors) {
	        var after = avalon.mix({}, defaults, options)
	        var events = {}
	        //缁戝畾鐢熷懡鍛ㄦ湡鐨勫洖璋�
	        'onInit onReady onViewChange onDispose'.replace(/\S+/g, function (a) {
	            if (typeof after[a] === 'function')
	                events[a] = after[a]
	            delete after[a]
	        })
	        var vm = avalon.mediatorFactory(topVm, after)
	        if (accessors.length) {
	            accessors.forEach(function (bag) {
	                vm = avalon.mediatorFactory(vm, bag)
	            })
	        }
	        ++avalon.suspendUpdate
	        for (var i in after) {
	            if (skipArray[i])
	                continue
	            vm[i] = after[i]
	        }
	        --avalon.suspendUpdate
	        for (i in events) {
	            vm.$watch(i, events[i])
	        }
	        return vm
	    },
	    diff: function (cur, pre, steps) {
	        var coms = avalon.resolvedComponents
	        var wid = cur.props.wid
	        
	        var docker = coms[wid]
	       
	        if (!docker.renderCount) {
	            cur.change = [this.replaceByComment]
	            steps.count += 1
	        } else if (!pre.props.resolved) {

	            cur.steps = steps
	            var list = cur.change || (cur.change = [])
	            avalon.Array.ensure(list, this.replaceByComponent)
	            cur.afterChange = [
	                function (dom, vnode) {
	                    vnode.vmodel.$element = dom
	                    cur.vmodel.$fire('onReady', {
	                        type: 'ready',
	                        target: dom,
	                        vmodel: vnode.vmodel
	                    })
	                    docker.renderCount = 2
	                }
	            ]

	        } else {

	            var needUpdate = !cur.diff || cur.diff(cur, pre)
	            cur.skipContent = !needUpdate

	            var viewChangeObservers = cur.vmodel.$events.onViewChange
	            if (viewChangeObservers && viewChangeObservers.length) {
	                cur.afterChange = [function (dom, vnode) {
	                        var preHTML = avalon.vdomAdaptor(pre, 'toHTML')
	                        var curHTML = avalon.vdomAdaptor(cur, 'toHTML')
	                        if (preHTML !== curHTML) {
	                            cur.vmodel.$fire('onViewChange', {
	                                type: 'viewchange',
	                                target: dom,
	                                vmodel: vnode.vmodel
	                            })
	                        }
	                        docker.renderCount++
	                    }]
	            }
	        }
	    },
	    addDisposeMonitor: function (dom) {
	        if (window.chrome && window.MutationEvent) {
	            disposeDetectStrategy.byMutationEvent(dom)
	        } else if (Object.defineProperty && window.Node) {
	            disposeDetectStrategy.byRewritePrototype(dom)
	        } else {
	            disposeDetectStrategy.byPolling(dom)
	        }
	    },
	    replaceByComment: function (dom, node, parent) {
	        var comment = document.createComment(node.nodeValue)
	        if (dom) {
	            parent.replaceChild(comment, dom)
	        } else {
	            parent.appendChild(comment)
	        }
	    },
	    replaceByComponent: function (dom, node, parent) {
	        var hasDdash = node.type.indexOf('-') > 0
	        var hasDetect = false
	        if (hasDdash && document.registerElement) {
	            //蹇呴』鍦ㄨ嚜瀹氫箟鏍囩瀹炰緥鍖栨椂,娉ㄥ唽瀹�
	            disposeDetectStrategy.byCustomElement(node.type)
	            hasDetect = true
	        }
	        var com = avalon.vdomAdaptor(node, 'toDOM')
	        if (dom) {
	            parent.replaceChild(com, dom)
	        } else {
	            parent.appendChild(com)
	        }
	        patch([com], [node], parent, node.steps)
	        if (!hasDetect) {
	            dir.addDisposeMonitor(com)
	        }
	    }
	})




	// http://www.besteric.com/2014/11/16/build-blog-mirror-site-on-gitcafe/

/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * 
	$$skipArray:鏄郴缁熺骇閫氱敤鐨勪笉鍙洃鍚睘鎬�
	$skipArray: 鏄綋鍓嶅璞＄壒鏈夌殑涓嶅彲鐩戝惉灞炴€�

	 涓嶅悓鐐规槸
	 $$skipArray琚玥asOwnProperty鍚庤繑鍥瀎alse
	 $skipArray琚玥asOwnProperty鍚庤繑鍥瀟rue
	 */

	module.exports = avalon.oneObject('$id,$render,$track,$element,$watch,$fire,$events,$model,$skipArray,$accessors,$hashcode,__proxy__,__data__,__const__')

/***/ },
/* 68 */
/***/ function(module, exports) {

	//鐢ㄤ簬chrome, safari
	var tags = {}
	function byCustomElement(name) {
	    if (tags[name])
	        return
	    tags[name] = true
	    var prototype = Object.create(HTMLElement.prototype)
	    prototype.detachedCallback = function () {
	        var dom = this
	        setTimeout(function () {
	            fireDisposeHook(dom)
	        })
	    }
	    document.registerElement(name, prototype)
	}

	//http://stackoverflow.com/questions/11425209/are-dom-mutation-observers-slower-than-dom-mutation-events
	//http://stackoverflow.com/questions/31798816/simple-mutationobserver-version-of-domnoderemovedfromdocument
	function byMutationEvent(dom) {
	    dom.addEventListener("DOMNodeRemovedFromDocument", function () {
	        setTimeout(function () {
	            fireDisposeHook(dom)
	        })
	    })
	}
	//鐢ㄤ簬IE8+, firefox
	function byRewritePrototype() {
	    if (byRewritePrototype.execute) {
	        return
	    }
	    
	    byRewritePrototype.execute = true
	    var p = Node.prototype
	    var _removeChild = p.removeChild
	    p.removeChild = function (a, b) {
	        _removeChild.call(this, a, b)
	        if (a.nodeType === 1) {
	            setTimeout(function () {
	                fireDisposeHook(a)
	            })
	        }
	        return a
	    }
	    var _replaceChild = p.replaceChild
	    p.replaceChild = function (a, b) {
	        _replaceChild.call(this, a, b)
	        if (a.nodeType === 1) {
	            setTimeout(function () {
	                fireDisposeHook(a)
	            })
	        }
	        return a
	    }
	    var _innerHTML = p.innerHTML
	    p.innerHTML = function (html) {
	        var all = this.getElementsByTagName('*')
	        _innerHTML.call(this, html)
	        fireDisposedComponents(all)
	    }
	    var _appendChild = p._appendChild
	    p.appendChild = function (a) {
	        _appendChild.call(this, a)
	        if (a.nodeType === 1 && this.nodeType === 11) {
	            setTimeout(function () {
	                fireDisposeHook(a)
	            })
	        }
	        return a
	    }
	    var _insertBefore = p.insertBefore
	    p.insertBefore = function (a) {
	        _insertBefore.call(this, a)
	        if (a.nodeType === 1 && this.nodeType === 11) {
	            setTimeout(function () {
	                fireDisposeHook(a)
	            })
	        }
	        return a
	    }
	}


	//鐢ㄤ簬IE6,7
	var checkDisposeNodes = []
	var checkID = 0
	function byPolling(dom) {
	    avalon.Array.ensure(checkDisposeNodes, dom)
	    if (!checkID) {
	        checkID = setInterval(function () {
	            for (var i = 0, el; el = checkDisposeNodes[i++]; ) {
	                if (false === fireDisposeHook(el)) {
	                    avalon.Array.removeAt(checkDisposeNodes, i)
	                    --i
	                }
	            }
	            if (checkDisposeNodes.length == 0) {
	                clearInterval(checkID)
	                checkID = 0
	            }
	        }, 1000)
	    }
	}


	module.exports = {
	    byPolling: byPolling,
	    byMutationEvent: byMutationEvent,
	    byCustomElement: byCustomElement,
	    byRewritePrototype: byRewritePrototype
	}

	function fireDisposeHook(el) {
	    if (el.nodeType === 1 && el.getAttribute('wid') && !avalon.contains(avalon.root, el)) {
	        var wid = el.getAttribute('wid')
	        var docker = avalon.resolvedComponents[ wid ]
	        if (docker && docker.vmodel) {
	            var vm = docker.vmodel
	            docker.vmodel.$fire("onDispose", {
	                type: 'dispose',
	                target: el,
	                vmodel: vm
	            })
	            vm.$element = null
	            vm.$hashcode = false
	            delete docker.vmodel
	            delete avalon.resolvedComponents[ wid ]
	            return false
	        }
	    }
	}

	function fireDisposedComponents (nodes) {
	    for (var i = 0, el; el = nodes[i++]; ) {
	        fireDisposeHook(el)
	    }
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var support = __webpack_require__(70)
	var Cache = __webpack_require__(26)

	avalon.directive('effect', {
	    priority: 5,
	    parse: function (binding, num) {
	        return 'vnode' + num + '.props["ms-effect"] = ' + avalon.parseExpr(binding) + ';\n'
	    },
	    diff: function (cur, pre, steps, name) {
	        var curObj = cur.props[name]
	        if(typeof curObj === 'string'){
	            var is = curObj
	            curObj = cur.props[name] = {
	                is: is
	            }
	           
	        }else if (Array.isArray(curObj)) {
	            curObj = cur.props[name] = avalon.mix.apply({}, curObj)
	        }
	    
	        curObj.action = curObj.action || 'enter'
	       
	        if (Object(curObj) === curObj) {
	            var preObj = pre.props[name]
	            if ( Object(preObj) !== preObj || diffObj(curObj, preObj ))  {
	                var list = cur.afterChange = cur.afterChange || []
	                if(avalon.Array.ensure(list, this.update)){
	                   steps.count += 1
	                }
	            }
	        }
	    },
	    update: function (dom, vnode, parent, option) {
	        if(dom.animating ){
	            return
	        }
	        dom.animating = true
	        var localeOption = vnode.props['ms-effect']
	        var type = localeOption.is
	        option = option || {}
	        if(!type){//濡傛灉娌℃湁鎸囧畾绫诲瀷
	            return avalon.warn('need is option')
	        }
	      
	        var effects = avalon.effects
	        if(support.css && !effects[type]){
	            avalon.effect(type, {})
	        }
	        var globalOption = effects[type]
	        if(!globalOption){//濡傛灉娌℃湁瀹氫箟鐗规晥
	            return avalon.warn(type+' effect is undefined')
	        }
	        var action = option.action || localeOption.action
	        var Effect = avalon.Effect
	        if (typeof Effect.prototype[action] !== 'function'){
	            return avalon.warn(action+' action is undefined')
	        }   
	        var effect = new Effect(dom)
	        var finalOption = avalon.mix(option, globalOption, localeOption)
	        if (finalOption.queue) {
	            animationQueue.push(function () {
	                effect[action](finalOption)
	            })
	            callNextAnimation()
	        } else {
	            setTimeout(function(){
	               effect[action](finalOption)
	            },4)
	        }
	    }
	})
	function diffObj(a, b){
	    for(var i in a){
	        if(a[i] !== b[i])
	            return true
	    }
	    return false
	}

	var animationQueue = []
	function callNextAnimation() {
	    if (animationQueue.lock)
	        return
	    var fn = animationQueue[0]
	    if (fn) {
	       callNextAnimation.lock = true
	       fn()
	    }
	}

	avalon.effects = {}
	//杩欓噷瀹氫箟CSS鍔ㄧ敾
	avalon.effect = function (name, definition) {
	    avalon.effects[name] = definition
	    if (support.css) {
	        if (!definition.enterClass) {
	            definition.enterClass = name + '-enter'
	        }
	        if (!definition.enterActiveClass) {
	            definition.enterActiveClass = definition.enterClass + '-active'
	        }
	        if (!definition.leaveClass) {
	            definition.leaveClass = name + '-leave'
	        }
	        if (!definition.leaveActiveClass) {
	            definition.leaveActiveClass = definition.leaveClass + '-active'
	        }
	    }
	    if (!definition.action) {
	        definition.action = 'enter'
	    }
	}


	var Effect = function (el) {
	    this.el = el
	}
	avalon.Effect = Effect
	Effect.prototype = {
	    enter: createAction('Enter'),
	    leave: createAction('Leave'),
	    move: createAction('Move')
	}

	var rsecond = /\d+s$/
	function toMillisecond(str){
	   var ratio = rsecond.test(str) ? 1000 : 1
	   return parseFloat(str) * ratio
	}

	function execHooks(options, name, el) {
	    var list = options[name]
	    list = Array.isArray(list) ? list : typeof list === 'function' ? [list] : []
	    list.forEach(function (fn) {
	       fn && fn(el)
	    })
	}
	 var staggerCache = new Cache(128)

	function createAction(action) {
	    var lower = action.toLowerCase()
	    return function (option) {
	        var elem = this.el
	        var $el = avalon(elem)
	        var enterAnimateDone
	        var staggerTime = isFinite(option.stagger) ? option.stagger * 1000 : 0
	        if(staggerTime){
	            if(option.staggerKey){
	                var stagger = staggerCache.get(option.staggerKey) || 
	                        staggerCache.put(option.staggerKey, {
	                    count:0,
	                    items:0
	                })
	                stagger.count++
	                stagger.items++
	            }
	        }
	        var staggerIndex = stagger && stagger.count || 0
	        var animationDone = function(e) {
	            var isOk = e !== false
	            elem.animating = void 0
	            enterAnimateDone = true
	            var dirWord = isOk ? 'Done' : 'Abort'
	            execHooks(option, 'on' + action + dirWord, elem)
	            avalon.unbind(elem,support.transitionEndEvent)
	            avalon.unbind(elem,support.animationEndEvent)
	            if(stagger){
	                if(--stagger.items === 0){
	                    stagger.count = 0
	                }
	            }
	            if(option.queue){
	                animationQueue.lock = false
	                animationQueue.shift()
	                callNextAnimation()
	            }
	        }
	        execHooks(option, 'onBefore' + action, elem)

	        if (option[lower]) {
	            option[lower](elem, function (ok) {
	                animationDone(ok !== false)
	            })
	        } else if (support.css) {
	            
	            $el.addClass(option[lower + 'Class'])
	            if(lower === 'leave'){
	                $el.removeClass(option.enterClass+' '+option.enterActiveClass)
	            }else if(lower === 'enter'){
	                $el.removeClass(option.leaveClass+' '+option.leaveActiveClass)
	            }

	            $el.bind(support.transitionEndEvent, animationDone)
	            $el.bind(support.animationEndEvent, animationDone)
	            setTimeout(function () {
	                enterAnimateDone = avalon.root.offsetWidth === NaN
	                $el.addClass(option[lower + 'ActiveClass'])
	                var computedStyles = window.getComputedStyle(elem)
	                var tranDuration = computedStyles[support.transitionDuration]
	                var animDuration = computedStyles[support.animationDuration]
	                var time = toMillisecond(tranDuration) || toMillisecond(animDuration)
	                if (!time === 0) {
	                    animationDone(false)
	                }else if(!staggerTime ){
	                    setTimeout(function(){
	                        if(!enterAnimateDone){
	                            animationDone(false)
	                        }
	                    },time + 130 )
	                }
	            }, 17+ staggerTime * staggerIndex)// = 1000/60
	        }
	    }
	}

	avalon.applyEffect = function(node, vnode, opts){
	    var cb = opts.cb
	    var hook = opts.hook
	    var curEffect = vnode.nodeType === 1 && vnode.props['ms-effect']
	    if(curEffect && !avalon.document.hidden ){
	        var old = curEffect[hook]
	        if(cb){
	            if(Array.isArray(old)){
	                old.push(cb)
	            }else if(old){
	                curEffect[hook] = [old, cb]
	            }else{
	                curEffect[hook] = [cb]
	            }
	        }
	        getAction(opts)
	        node.animate = true
	        avalon.directives.effect.update(node,vnode, 0, avalon.shadowCopy({},opts) ) 

	    }else if(cb){
	        cb()
	    }
	}

	function getAction(opts){
	    if(!opts.acton){
	        opts.action = opts.hook.replace(/^on/,'').replace(/Done$/,'').toLowerCase()
	    }
	}



/***/ },
/* 70 */
/***/ function(module, exports) {

	/**
	 * ------------------------------------------------------------
	 * 妫€娴嬫祻瑙堝櫒瀵笴SS鍔ㄧ敾鐨勬敮鎸佷笌API鍚�
	 * ------------------------------------------------------------
	 */
	var supportTransition = false
	var supportAnimation = false
	var supportCSS = false
	var transitionEndEvent
	var animationEndEvent
	var transitionDuration = avalon.cssName("transition-duration")
	var animationDuration = avalon.cssName("animation-duration")

	var checker = {
	    'TransitionEvent': 'transitionend',
	    'WebKitTransitionEvent': 'webkitTransitionEnd',
	    'OTransitionEvent': 'oTransitionEnd',
	    'otransitionEvent': 'otransitionEnd'
	}
	var window = avalon.window
	var tran
	//鏈夌殑娴忚鍣ㄥ悓鏃舵敮鎸佺鏈夊疄鐜颁笌鏍囧噯鍐欐硶锛屾瘮濡倃ebkit鏀寔鍓嶄袱绉嶏紝Opera鏀寔1銆�3銆�4
	for (var name in checker) {
	    if (window[name]) {
	        tran = checker[name]
	        break
	    }
	    try {
	        var a = document.createEvent(name)
	        tran = checker[name]
	        break;
	    } catch (e) {
	    }
	}
	if (typeof tran === "string") {
	    supportTransition = true
	    supportCSS = true
	    transitionEndEvent = tran
	}

	//澶ц嚧涓婃湁涓ょ閫夋嫨
	//IE10+, Firefox 16+ & Opera 12.1+: animationend
	//Chrome/Safari: webkitAnimationEnd
	//http://blogs.msdn.com/b/davrous/archive/2011/12/06/introduction-to-css3-animat ions.aspx
	//IE10涔熷彲浠ヤ娇鐢∕SAnimationEnd鐩戝惉锛屼絾鏄洖璋冮噷鐨勪簨浠� type渚濈劧涓篴nimationend
	//  el.addEventListener("MSAnimationEnd", function(e) {
	//     alert(e.type)// animationend锛侊紒锛�
	// })
	checker = {
	    'AnimationEvent': 'animationend',
	    'WebKitAnimationEvent': 'webkitAnimationEnd'
	}
	var ani
	for (name in checker) {
	    if (window[name]) {
	        ani = checker[name];
	        break;
	    }
	}
	if (typeof ani === "string") {
	    supportTransition = true
	    supportCSS = true
	    animationEndEvent = ani
	}

	module.exports = {
	    transition: supportTransition,
	    animation: supportAnimation,
	    css: supportCSS,
	    transitionEndEvent: transitionEndEvent,
	    animationEndEvent: animationEndEvent,
	    transitionDuration: transitionDuration,
	    animationDuration: animationDuration
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	
	avalon.lexer = __webpack_require__(72)
	avalon.diff = __webpack_require__(73)
	avalon.batch = __webpack_require__(74)
	// dispatch涓巔atch 涓哄唴缃ā鍧�

	var parseView = __webpack_require__(37)

	function render(vtree) {
	    var num = num || String(new Date - 0).slice(0, 6)
	    var body = parseView(vtree, num) + '\n\nreturn vnodes' + num
	    var fn = Function('__vmodel__', body)
	    return fn
	}
	avalon.render = render

	module.exports = avalon


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * lexer 灏嗗瓧绗︿覆鍙樻垚涓€涓櫄鎷烡OM鏍�,鏂逛究浠ュ悗杩涗竴姝ュ彉鎴愭ā鏉垮嚱鏁�
	 * 姝ら樁娈靛彧浼氱敓鎴怴Element,VText,VComment
	 * ------------------------------------------------------------
	 */

	var makeHashCode = avalon.makeHashCode
	var vdom = __webpack_require__(15)
	var VText = vdom.VText
	var VComment = vdom.VComment


	//鍖归厤鍙湁寮€鏍囩鐨勬棤鍐呭鍏冪礌锛圴oid elements 鎴� self-contained tags锛�
	//http://www.colorglare.com/2014/02/03/to-close-or-not-to-close.html
	//http://blog.jobbole.com/61514/

	var rfullTag = /^<([^\s>\/=.$<]+)(?:\s+[^=\s]+(?:=[^>\s]+)?)*\s*>(?:[\s\S]*)<\/\1>/
	var rvoidTag = /^<([^\s>\/=.$<]+)\s*([^>]*?)\/?>/

	var rtext = /^[^<]+/
	var rcomment = /^<!--([\w\W]*?)-->/

	var rnumber = /\d+/g
	var rspAfterForStart = /^\s*ms-for\:/
	var rspBeforeForEnd = /^\s*ms-for-end\:/
	var r = __webpack_require__(40)
	var rsp = r.sp
	var rfill = /\?\?\d+/g
	var rleftSp = r.leftSp
	var rstring = r.string


	var rbind = avalon.config.rbind


	var maps = {}
	var number = 1
	function dig(a) {
	    var key = '??' + number++
	    maps[key] = a
	    return key
	}
	function fill(a) {
	    var val = maps[a]
	    return val
	}
	var rhasString = /=["']/
	var rlineSp = /\n\s*/g
	function fixLongAttrValue(attr) {
	    return rhasString.test(attr) ?
	            attr.replace(rlineSp, '').replace(rstring, dig) : attr
	}
	function lexer(text, curDeep, maxDeep) {
	    var nodes = []
	    maxDeep = maxDeep || 1
	    if (typeof curDeep !== 'number') {
	        curDeep = 0
	    } else {
	        curDeep = curDeep + 1
	    }
	    if (curDeep >= maxDeep && !rbind.test(text)) {
	        return nodes
	    }
	    if (!curDeep) {
	        text = text.replace(rstring, dig)
	    }
	    do {
	        var outerHTML = ''
	        var node = false
	        var match = text.match(rtext)
	        if (match) {//灏濊瘯鍖归厤鏂囨湰
	            outerHTML = match[0]
	            node = new VText(outerHTML.replace(rfill, fill))
	        }

	        if (!node) {//灏濊瘯鍖归厤娉ㄩ噴
	            match = text.match(rcomment)
	            if (match) {
	                outerHTML = match[0]
	                node = new VComment(match[1].replace(rfill, fill))
	                var nodeValue = node.nodeValue
	                if (rspBeforeForEnd.test(nodeValue)) {
	                    var sp = nodes[nodes.length - 1]
	                    //绉婚櫎绱ф尐鐫€<!--ms-for-end:xxxx-->鍓嶇殑绌虹櫧鑺傜偣
	                    if (sp && sp.nodeType === 3 && rsp.test(sp.nodeValue)) {
	                        nodes.pop()
	                    }
	                }
	            }
	        }


	        if (!node) {//灏濊瘯鍖归厤鎷ユ湁闂爣绛剧殑鍏冪礌鑺傜偣
	            match = text.match(rfullTag)
	            if (match) {
	                outerHTML = match[0]//璐┆鍖归厤 outerHTML,鍙兘鍖归厤杩囧
	                var type = match[1].toLowerCase()//nodeName
	                outerHTML = clipOuterHTML(outerHTML, type)

	                match = outerHTML.match(rvoidTag) //鎶藉彇鎵€鏈夊睘鎬�

	                var props = {}
	                if (match[2]) {
	                    handleProps(fixLongAttrValue(match[2]), props)
	                }

	                var innerHTML = outerHTML.slice(match[0].length,
	                        (type.length + 3) * -1) //鎶藉彇innerHTML

	                node = {
	                    nodeType: 1,
	                    type: type,
	                    props: props,
	                    template: innerHTML.replace(rfill, fill).trim(),
	                    children: []
	                }
	                node = modifyProps(node, innerHTML, nodes, curDeep, maxDeep)
	            }
	        }

	        if (!node) {
	            match = text.match(rvoidTag)
	            if (match) {//灏濊瘯鍖归厤鑷棴鍚堟爣绛�
	                outerHTML = match[0]
	                type = match[1].toLowerCase()
	                props = {}
	                if (match[2]) {
	                    handleProps(fixLongAttrValue(match[2]), props)
	                }
	                node = {
	                    nodeType: 1,
	                    type: type,
	                    props: props,
	                    template: '',
	                    children: [],
	                    isVoidTag: true
	                }
	                modifyProps(node, '', nodes, curDeep, maxDeep)
	            }
	        }

	        if (node) {//浠巘ext涓Щ闄よ鍖归厤鐨勯儴鍒�
	            nodes.push(node)
	            text = text.slice(outerHTML.length)
	            if (node.nodeType === 8 && rspAfterForStart.test(node.nodeValue)) {
	                node.signature = makeHashCode('for')
	                //绉婚櫎绱ф尐鐫€<!--ms-for:xxxx-->鍚庣殑绌虹櫧鑺傜偣
	                text = text.replace(rleftSp, '')
	            }
	        } else {
	            break
	        }
	    } while (1);
	    if (!curDeep) {
	        maps = {}
	    }
	    return nodes
	}

	//鐢ㄤ簬鍒涘缓閫傞厤鏌愪竴绉嶆爣绛剧殑姝ｅ垯琛ㄨ揪寮�
	var openStr = '(?:\\s+[^>=]*?(?:=[^>]+?)?)*>'
	var tagCache = {}// 缂撳瓨鎵€鏈夊尮閰嶅紑鏍囩闂爣绛剧殑姝ｅ垯
	var rchar = /./g
	var regArgs = avalon.msie < 9 ? 'ig' : 'g'//IE6-8锛屾爣绛惧悕閮芥槸澶у啓
	function clipOuterHTML(matchText, type) {
	    var opens = []
	    var closes = []
	    var ropen = tagCache[type + 'open'] ||
	            (tagCache[type + 'open'] = new RegExp('<' + type + openStr, regArgs))
	    var rclose = tagCache[type + 'close'] ||
	            (tagCache[type + 'close'] = new RegExp('<\/' + type + '>', regArgs))

	    /* jshint ignore:start */
	    matchText.replace(ropen, function (_, b) {
	        //娉ㄦ剰,椤甸潰鏈夋椂寰堥暱,b鐨勬暟鍊煎氨寰堝ぇ,濡�
	        //000000000<000000011>000000041<000000066>000000096<000000107>
	        opens.push(('0000000000' + b + '<').slice(-10))//鍙栧緱鎵€鏈夊紑鏍囩鐨勪綅缃�
	        return _.replace(rchar, '1')
	    }).replace(rclose, function (_, b) {
	        closes.push(('0000000000' + b + '>').slice(-10))//鍙栧緱鎵€鏈夐棴鏍囩鐨勪綅缃�               
	    })

	    /* jshint ignore:end */
	    //<div><div>01</div><div>02</div></div><div>222</div><div>333</div>
	    //浼氬彉鎴�000<005<012>018<025>031>037<045>051<059>
	    //鍐嶅彉鎴�<<><>><><>
	    //鏈€鍚庤幏鍙栨纭殑>鐨勭储寮曞€�,杩欓噷涓�<<><>>鐨勬渶鍚庝竴涓瓧绗�,
	    var pos = opens.concat(closes).sort()
	    var gtlt = pos.join('').replace(rnumber, '')
	    var k = 0, last = 0

	    for (var i = 0, n = gtlt.length; i < n; i++) {
	        var c = gtlt.charAt(i)
	        if (c === '<') {
	            k += 1
	        } else {
	            k -= 1
	        }
	        if (k === 0) {
	            last = i
	            break
	        }
	    }
	    var findex = parseFloat(pos[last]) + type.length + 3 // (</>涓轰笁涓瓧绗�)
	    return  matchText.slice(0, findex) //鍙栧緱姝ｇ‘鐨刼uterHTML
	}


	function modifyProps(node, innerHTML, nodes, curDeep, maxDeep) {
	    var type = node.type
	    if (node.props['ms-skip']) {
	        node.skipContent = true
	    } else {
	        switch (type) {
	            case 'style':
	            case 'script':
	            case 'noscript':
	            case 'template':
	            case 'textarea':
	                node.skipContent = true
	                if (type === 'textarea') {
	                    node.props.type = 'textarea'
	                }
	                break
	            case 'input':
	                if (!node.props.type) {
	                    node.props.type = 'text'
	                }
	            case 'xmp':
	                node.children.push(new VText(node.template))
	                break
	            case 'option':
	                node.children.push(new VText(trimHTML(node.template)))
	                break
	            default:

	                if (!node.isVoidTag) {
	                    var childs = lexer(innerHTML, curDeep, maxDeep)
	                    node.children = childs
	                    if (type === 'table') {
	                        addTbody(node.children)
	                    }
	                }
	                break
	        }
	        var forExpr = node.props['ms-for']
	        if (forExpr) {
	            var cb = node.props['data-for-rendered']
	            var cid = cb+':cb'
	            nodes.push({
	                nodeType: 8,
	                type: '#comment',
	                nodeValue: 'ms-for:' + forExpr,
	                signature: makeHashCode('for'),
	                cid: cid
	            })
	            if(cb && !avalon.caches[cid]){
	                avalon.caches[cid] = Function('return '+ avalon.parseExpr(cb, 'on'))()  
	            }
	         
	            delete node.props['ms-for']
	            nodes.push(node)
	            node = {
	                nodeType: 8,
	                skipContent: true,
	                type: '#comment',
	                nodeValue: 'ms-for-end:'
	            }
	        }
	    }
	    return node
	}
	//濡傛灉鐩存帴灏唗r鍏冪礌鍐檛able涓嬮潰,閭ｄ箞娴忚鍣ㄥ皢灏嗗畠浠�(鐩搁偦鐨勯偅鍑犱釜),鏀惧埌涓€涓姩鎬佸垱寤虹殑tbody搴曚笅
	function addTbody(nodes) {
	    var tbody, needAddTbody = false, count = 0, start = 0, n = nodes.length
	    for (var i = 0; i < n; i++) {
	        var node = nodes[i]
	        if (!tbody) {
	            if (node.type === 'tr') {
	                tbody = {
	                    nodeType: 1,
	                    type: 'tbody',
	                    template: '',
	                    children: [],
	                    props: {}
	                }
	                tbody.children.push(node)
	                needAddTbody = true
	                if (start === 0)
	                    start = i
	                nodes[i] = tbody
	            }
	        } else {
	            if (node.type !== 'tr' && node.nodeType === 1) {
	                tbody = false
	            } else {
	                tbody.children.push(node)
	                count++
	                nodes[i] = 0
	            }
	        }
	    }

	    if (needAddTbody) {
	        for (i = start; i < n; i++) {
	            if (nodes[i] === 0) {
	                nodes.splice(i, 1)
	                i--
	                count--
	                if (count === 0) {
	                    break
	                }
	            }
	        }
	    }
	}


	var ramp = /&amp;/g
	var rnowhite = /\S+/g
	var rquote = /&quot;/g
	var rnogutter = /\s*=\s*/g
	function handleProps(str, props) {
	    str.replace(rnogutter, '=').replace(rnowhite, function (el) {
	        var arr = el.split('='), value = arr[1] || '',
	                name = arr[0].toLowerCase()
	        if (arr.length === 2) {
	            if (value.indexOf('??') === 0) {
	                value = value.replace(rfill, fill).
	                        slice(1, -1).
	                        replace(ramp, '&').
	                        replace(rquote, '"')
	            }
	        }
	        props[name] = value
	    })
	}

	//form prototype.js
	var rtrimHTML = /<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi
	function trimHTML(v) {
	    return String(v).replace(rtrimHTML, '').trim()
	}


	module.exports = lexer

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * diff 瀵规瘮鏂版棫涓や釜铏氭嫙DOM鏍�,鏍规嵁directive涓殑diff鏂规硶涓烘柊铏氭嫙DOM鏍�
	 * 娣诲姞change, afterChange鏇存柊閽╁瓙
	 * ------------------------------------------------------------
	 */
	var emptyArr = []
	var emptyObj = {
	    children: [], props: {}
	}
	var directives = avalon.directives
	var rbinding = __webpack_require__(40).binding

	function diff(current, previous, steps) {
	    if (!current)
	        return
	    for (var i = 0; i < current.length; i++) {
	        var cur = current[i]
	        var pre = previous[i] || emptyObj
	        switch (cur.nodeType) {
	            case 3:
	                if (!cur.skipContent) {
	                    directives.expr.diff(cur, pre, steps)
	                }
	                break
	            case 8:
	                if (cur.directive === 'for') {
	                    i = directives['for'].diff(current, previous, steps, i)
	                } else if (cur.directive) {//if widget
	                    directives[cur.directive].diff(cur, pre, steps)
	                }
	                break
	            default:
	                if (!cur.skipAttrs) {
	                    diffProps(cur, pre, steps)
	                }
	                if (!cur.skipContent) {
	                    diff(cur.children, pre.children || emptyArr, steps)
	                }
	                break
	        }
	    }
	}

	function diffProps(current, previous, steps) {
	    if (current.order) {
	        try {
	            current.order.replace(/([^;]+)/g, function (name) {
	                var match = name.match(rbinding)
	                var type = match && match[1]
	                if (directives[type]) {
	                    directives[type].diff(current, previous || emptyObj, steps, name)
	                }
	                return name
	            })
	        } catch (e) {
	            avalon.log(current, previous, e, 'diffProps error')
	        }
	    }
	    

	}
	avalon.diffProps = diffProps
	module.exports = diff


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * ------------------------------------------------------------
	 * batch 鍚屾椂瀵筃涓鍥捐繘琛屽叏閲忔洿鏂�
	 * ------------------------------------------------------------
	 */

	var patch = __webpack_require__(64)


	//濡傛灉姝ｅ湪鏇存柊涓€涓瓙鏍�,閭ｄ箞灏嗗畠鏀惧埌
	var dirtyTrees = {}
	var needRenderIds = []
	avalon.suspendUpdate = 0
	var isBatchingUpdates = false
	function batchUpdate(id, immediate) {
	    var vm = avalon.vmodels[id] || {}
	    if (dirtyTrees[id]) {
	        avalon.Array.ensure(needRenderIds, id)
	    } else {
	        dirtyTrees[id] = true
	    }
	    if (avalon.suspendUpdate > 0 || typeof vm.$render !== 'function' || !vm.$element || isBatchingUpdates) {
	        return
	    }

	    if (!document.nodeName)//濡傛灉鏄湪mocha绛夋祴璇曠幆澧冧腑绔嬪嵆杩斿洖
	        return


	    var dom = vm.$element

	    flushUpdate(function () {
	        isBatchingUpdates = true
	        var vtree = vm.$render()
	        var steps = {count:0}
	        avalon.diff(vtree, dom.vtree || [], steps)
	        patch([dom], vtree, null, steps )
	        steps.count = 0
	        dom.vtree = vtree
	        isBatchingUpdates = false
	        avalon.log('rerender', vm.$id, new Date - avalon.rerenderStart)
	        delete dirtyTrees[id]
	        for (var i in dirtyTrees) {//鏇存柊鍏朵粬瀛愭爲
	            batchUpdate(i, true)
	            break
	        }

	    }, immediate)


	}

	function flushUpdate(callback, immediate聽) {
	    if (immediate) {
	        callback()
	        var id = needRenderIds.shift()
	        if (id) {
	            batchUpdate(id, true)
	        }
	    } else {
	        setTimeout(callback, 0)
	    }
	}

	module.exports = avalon.batch = batchUpdate


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	
	var VText = __webpack_require__(16)
	var outerTags = avalon.oneObject('wbr,xmp,template')

	var resolvedComponents = avalon.resolvedComponents
	var skipWidget = {'ms-widget': 1, widget: 1, resolved: 1}
	var parseView = __webpack_require__(37)

	avalon.document.createElement('slot')

	avalon.component = function (name, definition) {
	    //杩欐槸瀹氫箟缁勪欢鐨勫垎鏀�,骞跺皢鍒楅槦涓殑鍚岀被鍨嬪璞＄Щ闄�
	    if (typeof name === 'string') {
	        if (!avalon.components[name]) {
	            avalon.components[name] = definition
	        }
	        //杩欓噷娌℃湁杩斿洖鍊�
	    } else {

	        var node = name //node涓洪〉闈笂鑺傜偣瀵瑰簲鐨勮櫄鎷烡OM
	        var topVm = definition

	        var wid = node.props.wid
	        //灏唌s-widget鐨勫€煎悎骞舵垚涓€涓函绮圭殑瀵硅薄,骞朵笖灏嗛噷闈㈢殑vm鎶藉彇vms鏁扮粍涓�
	        var options = node.props['ms-widget'] || {}
	        var vms = []
	        if (Array.isArray(options)) {
	            vms = options.filter(function (el) {
	                return el.$id
	            })
	            options = avalon.mix.apply({}, options)
	        } else if (options.$id) {
	            vms = [options]
	        }
	        //濡傛灉缁勪欢妯℃澘宸茬粡瀹�
	        var placeholder = {
	            nodeType: 8,
	            type: '#comment',
	            directive: 'widget',
	            props: {'ms-widget': wid},
	            nodeValue: 'ms-widget placeholder'
	        }

	        var tagName = node.type.indexOf('-') > 0 ? node.type : options.is
	        var docker = resolvedComponents[wid]
	        var docker = resolvedComponents[wid]
	        if (!docker) {
	            resolvedComponents[wid] = docker = node
	        }
	        //濡傛灉姝ょ粍浠剁殑瀹炰緥宸茬粡瀛樺湪,閭ｄ箞閲嶆柊娓叉煋
	        if (docker.render) {
	            return docker
	        } else if (!avalon.components[tagName]) {
	            //濡傛灉缁勪欢杩樻病鏈夊畾涔�,閭ｄ箞杩斿洖涓€涓敞閲婅妭鐐瑰崰浣�
	            return placeholder
	        } else {

	            var type = node.type
	            //鍒ゅ畾鐢ㄦ埛浼犲叆鐨勬爣绛惧悕鏄惁绗﹀悎瑙勬牸
	            if (!outerTags[type] && !isCustomTag(type)) {
	                avalon.warn(type + '涓嶅悎閫傚仛缁勪欢鐨勬爣绛�')
	            }
	            //灏嗙敤鎴峰０鏄庣粍浠剁敤鐨勮嚜瀹氫箟鏍囩(鎴杧mp.template)鐨則emplate杞崲鎴愯櫄鎷烡OM
	            if (type === 'xmp' || type === 'template' || node.children.length === 0) {
	                node.children = avalon.lexer(docker.template)
	            }
	            //瀵逛簬IE6-8,闇€瑕佸鑷畾涔夋爣绛捐繘琛宧ack
	            definition = avalon.components[tagName]
	            if (!avalon.modern && !definition.fixTag) {
	                avalon.document.createElement(tagName)
	                definition.fixTag = 1
	            }
	            //瀵圭粍浠跺唴缃殑template杞崲鎴愯櫄鎷烡OM
	            var vtree = avalon.lexer(definition.template.trim())
	            if (vtree.length > 1) {
	                avalon.error('缁勪欢蹇呴』鐢ㄤ竴涓厓绱犲寘璧锋潵')
	            }

	            var widgetNode = vtree[0]
	            widgetNode.props.resolved = true
	            if (widgetNode.type !== tagName) {
	                avalon.warn('妯℃澘瀹瑰櫒鏍囩鏈€濂戒负' + tagName)
	            }
	            //灏嗙敤鎴锋爣绛句腑鐨勫睘鎬у悎骞跺埌缁勪欢鏍囩鐨勫睘鎬ч噷
	            widgetNode
	            for (var i in docker.props) {
	                if (!skipWidget[i]) {
	                    widgetNode.props[i] = docker.props[i]
	                }
	            }

	            //鎶藉彇鐢ㄦ埛鏍囩閲屽甫slot灞炴€х殑鍏冪礌,鏇挎崲缁勪欢鐨勮櫄鎷烡OM鏍戜腑鐨剆lot鍏冪礌
	            if (definition.soleSlot) {
	                var slots = {}
	                var slotName = definition.soleSlot
	                slots[slotName] = /\S/.test(docker.template) ? node.children : new VText('{{@' + slotName + '}}')
	                mergeTempale(vtree, slots)
	            } else if (!node.isVoidTag) {
	                insertSlots(vtree, node, definition.soleSlot)
	            }
	            //寮€濮嬫瀯寤虹粍浠剁殑vm鐨勯厤缃璞�
	            var diff = options.diff
	            var define = options.define
	            define = define || avalon.directives.widget.define
	            var $id = options.$id || avalon.makeHashCode(tagName.replace(/-/g, '_'))

	            try { //options鍙兘鏄痸m, 鍦↖E涓嬩娇鐢╠elete浼氭姤閿�
	                delete options.is
	                delete options.diff
	                delete options.define
	            } catch (e) {
	            }
	            var vmodel = define(topVm, definition.defaults, options, vms)
	            vmodel.$id = $id
	            avalon.vmodels[$id] = vmodel
	            //鐢熸垚缁勪欢鐨剅ender
	            var num = num || String(new Date - 0).slice(0, 6)
	            var render = parseView(vtree, num) + '\nreturn (avalon.__widget = vnodes' + num + ');\n'
	         
	            vmodel.$render = render
	            //瑙﹀彂onInit鍥炶皟
	            vmodel.$fire('onInit', {
	                type: 'init',
	                vmodel: vmodel,
	                target: null
	            })

	            avalon.shadowCopy(docker, {
	                diff: diff,
	                render: render,
	                vmodel: vmodel,
	                placeholder: placeholder
	            })
	            return docker
	        }
	    }
	}

	var ralphabet = /^[a-z]+$/

	function isCustomTag(type) {
	    return type.length > 3 && type.indexOf('-') > 0 &&
	            ralphabet.test(type.charAt(0) + type.slice(-1))
	}
	avalon.renderWidget = function(widgetNode){
	    var docker = avalon.resolvedComponents[widgetNode.props.wid]
	    widgetNode.order = 'ms-widget;;' + widgetNode.order
	    if (!isComponentReady(widgetNode)) {
	        return docker.placeholder
	    }
	    if (!docker.renderCount) {
	        docker.renderCount = 1
	    }
	    widgetNode.props['ms-widget'] = docker.props['ms-widget']
	    widgetNode.vmodel = docker.vmodel
	    widgetNode.diff = docker.diff
	    //绉婚櫎skipAttrs,浠ヤ究杩涜diff
	    delete widgetNode.skipAttrs
	    return widgetNode
	}
	function isComponentReady(vnode) {
	    var isReady = true
	    try {
	        hasUnresolvedComponent(vnode)
	    } catch (e) {
	        isReady = false
	    }
	    return isReady
	}

	function hasUnresolvedComponent(vnode) {

	    vnode.children.forEach(function (el) {
	        if (el.nodeType === 8) {
	            if ('ms-widget' in el.props) {
	                throw 'unresolved'
	            }
	        } else if (el.children) {
	            hasUnresolvedComponent(el)
	        }
	    })
	}

	function insertSlots(vtree, node, soleSlot) {
	    var slots = {}
	    if (soleSlot) {
	        slots[soleSlot] = node.children
	    } else {
	        node.children.forEach(function (el) {
	            if (el.nodeType === 1) {
	                var name = el.props.slot || 'default'
	                if (slots[name]) {
	                    slots[name].push(el)
	                } else {
	                    slots[name] = [el]
	                }
	            }
	        })
	    }
	    mergeTempale(vtree, slots)
	}

	function mergeTempale(vtree, slots) {
	    for (var i = 0, node; node = vtree[i++]; ) {
	        if (node.nodeType === 1) {
	            if (node.type === 'slot') {
	                var name = node.props.name || 'default'
	                if (slots[name]) {
	                    var s = slots[name]
	                    vtree.splice.apply(vtree, [i - 1, 1].concat(s))
	                    if (s.length === 1 && s[0].nodeType === 3) {
	                        removeEmptyText(vtree)
	                    }
	                }
	            } else {
	                mergeTempale(node.children, slots)
	            }
	        }
	    }

	    return vtree
	}

	function removeEmptyText(nodes) {
	    //濡傛灉瀹氫箟缁勪欢鏃�,slot鍏冪礌涓ゆ梺鏈夊ぇ鐗囩┖鐧�,涓攕lot鍏冪礌鍙堟槸琚竴涓枃鏈妭鐐规浛浠ｆ椂,闇€瑕佸悎骞惰繖涓変釜鏂囨湰鑺傜偣
	    for (var i = 0, el; el = nodes[i]; i++) {
	        if (el.skipContent === false && el.nodeType === 3) {
	            var pre = nodes[i - 1]
	            var next = nodes[i + 1]
	            if (pre && pre.nodeType === 3 && !/\S/.test(pre.nodeValue)) {
	                avalon.Array.remove(nodes, pre)
	                --i
	            }
	            if (next && next.nodeType === 3 && !/\S/.test(next.nodeValue)) {
	                avalon.Array.remove(nodes, next)
	            }
	        }
	    }
	}


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * ------------------------------------------------------------
	 * avalon鍩轰簬绾噣鐨凮bject.defineProperties鐨剉m宸ュ巶 
	 * masterFactory,slaveFactory,mediatorFactory, ArrayFactory
	 * ------------------------------------------------------------
	 */

	var share = __webpack_require__(77)

	var isSkip = share.isSkip
	var toJson = share.toJson
	var $$midway = share.$$midway
	var $$skipArray = share.$$skipArray

	var makeAccessor = share.makeAccessor
	var makeObserver = share.makeObserver
	var modelAccessor = share.modelAccessor
	var modelAdaptor = share.modelAdaptor
	var makeHashCode = avalon.makeHashCode


	//涓€涓獀m鎬绘槸涓篛bserver鐨勫疄渚�
	function Observer() {
	}

	function masterFactory(definition, heirloom, options) {

	    var $skipArray = {}
	    if (definition.$skipArray) {//鏀堕泦鎵€鏈変笉鍙洃鍚睘鎬�
	        $skipArray = avalon.oneObject(definition.$skipArray)
	        delete definition.$skipArray
	    }

	    var keys = {}
	    options = options || {}
	    heirloom = heirloom || {}
	    var accessors = {}
	    var hashcode = makeHashCode('$')
	    var pathname = options.pathname || ''
	    options.id = options.id || hashcode
	    options.hashcode = options.hashcode || hashcode
	    var key, sid, spath
	    for (key in definition) {
	        if ($$skipArray[key])
	            continue
	        var val = keys[key] = definition[key]
	        if (!isSkip(key, val, $skipArray)) {
	            sid = options.id + '.' + key
	            spath = pathname ? pathname + '.' + key : key
	            accessors[key] = makeAccessor(sid, spath, heirloom)
	        }
	    }

	    accessors.$model = modelAccessor
	    var $vmodel = new Observer()
	    $vmodel = addAccessors($vmodel, accessors, definition)

	    for (key in keys) {
	        //瀵规櫘閫氱洃鎺у睘鎬ф垨璁块棶鍣ㄥ睘鎬ц繘琛岃祴鍊�
	     
	        $vmodel[key] = keys[key]
	    
	        //鍒犻櫎绯荤粺灞炴€�
	        if (key in $skipArray) {
	            delete keys[key]
	        } else {
	            keys[key] = true
	        }
	    }
	    makeObserver($vmodel, heirloom, keys, accessors, options)

	    return $vmodel
	}

	$$midway.masterFactory = masterFactory
	var addAccessors = __webpack_require__(81)

	function slaveFactory(before, after, heirloom, options) {
	    var keys = {}
	    var skips = {}
	    var accessors = {}
	   heirloom = heirloom || {}
	    var pathname = options.pathname
	    var resue = before.$accessors || {}
	    var key, sid, spath
	    for (key in after) {
	        if ($$skipArray[key])
	            continue
	        keys[key] = true
	        if (!isSkip(key, after[key], {})) {
	            if (resue[key]) {
	                accessors[key] = resue[key]
	            } else {
	                sid = options.id + '.' + key
	                spath = pathname ? pathname + '.' + key : key
	                accessors[key] = makeAccessor(sid, spath, heirloom)
	            }
	        } else {
	            skips[key] = after[key]
	        }
	    }

	    options.hashcode = before.$hashcode || makeHashCode('$')
	    accessors.$model = modelAccessor
	    var $vmodel = new Observer()
	    $vmodel = addAccessors($vmodel, accessors, skips)

	    for (key in skips) {
	        $vmodel[key] = skips[key]
	        delete after[key]
	    }

	    makeObserver($vmodel, heirloom, keys, accessors, options)

	    return $vmodel
	}

	$$midway.slaveFactory = slaveFactory

	function mediatorFactory(before, after, heirloom) {
	    var b = before.$accessors || {}
	    var a = after.$accessors || {}
	    var accessors = {}
	    var keys = {}, key
	    //鏀堕泦鎵€鏈夐敭鍊煎鍙婅闂櫒灞炴€�
	    for (key in before) {
	        if ($$skipArray[key])
	             continue
	        keys[key] = before[key]
	        if (b[key]) {
	            accessors[key] = b[key]
	        }
	    }

	    for (key in after) {
	        keys[key] = after[key]
	        if (a[key]) {
	            accessors[key] = a[key]
	        }
	    }
	    var $vmodel = new Observer()
	    $vmodel = addAccessors($vmodel, accessors, keys)

	    for (key in keys) {
	        if (!accessors[key]) {//娣诲姞涓嶅彲鐩戞帶鐨勫睘鎬�
	            $vmodel[key] = keys[key]
	        }
	        if (key in $$skipArray) {
	            delete keys[key]
	        } else {
	            keys[key] = true
	        }

	    }

	    makeObserver($vmodel, heirloom || {}, keys, accessors, {
	        id: before.$id,
	        hashcode: makeHashCode('$'),
	        master: true
	    })
	    if(after.$id && before.$element){
	        after.$element = before.$element
	        after.$render = before.$render
	    }
	    return $vmodel
	}


	$$midway.mediatorFactory = avalon.mediatorFactory = mediatorFactory

	var __array__ = share.__array__


	var ap = Array.prototype
	var _splice = ap.splice
	function notifySize(array, size) {
	    if (array.length !== size) {
	        array.notify('length', array.length, size, true)
	    }
	}

	__array__.removeAll = function (all) { //绉婚櫎N涓厓绱�
	    var size = this.length
	    if (Array.isArray(all)) {
	        for (var i = this.length - 1; i >= 0; i--) {
	            if (all.indexOf(this[i]) !== -1) {
	                _splice.call(this, i, 1)
	            }
	        }
	    } else if (typeof all === 'function') {
	        for (i = this.length - 1; i >= 0; i--) {
	            var el = this[i]
	            if (all(el, i)) {
	                _splice.call(this, i, 1)
	            }
	        }
	    } else {
	        _splice.call(this, 0, this.length)

	    }
	    if (!avalon.modern) {
	        this.$model = toJson(this)
	    }
	    notifySize(this, size)
	    this.notify()
	}


	var __method__ = ['push', 'pop', 'shift', 'unshift', 'splice']

	__method__.forEach(function (method) {
	    var original = ap[method]
	    __array__[method] = function (a, b) {
	        // 缁х画灏濊瘯鍔寔鏁扮粍鍏冪礌鐨勫睘鎬�
	        var args = [], size = this.length

	        if (method === 'splice' && Object(this[0]) === this[0]) {
	            var old = this.slice(a, b)
	            var neo = ap.slice.call(arguments, 2)
	            var args = [a, b]
	            for (var j = 0, jn = neo.length; j < jn; j++) {
	                var item = old[j]

	                args[j + 2] = modelAdaptor(neo[j], item, item && item.$events, {
	                    id: this.$id + '.*',
	                    master: true
	                })
	            }

	        } else {
	            for (var i = 0, n = arguments.length; i < n; i++) {
	                args[i] = modelAdaptor(arguments[i], 0, {}, {
	                    id: this.$id + '.*',
	                    master: true
	                })
	            }
	        }
	        var result = original.apply(this, args)
	        if (!avalon.modern) {
	            this.$model = toJson(this)
	        }
	        notifySize(this, size)
	        this.notify()
	        return result
	    }
	})

	'sort,reverse'.replace(avalon.rword, function (method) {
	    __array__[method] = function () {
	        ap[method].apply(this, arguments)
	        if (!avalon.modern) {
	            this.$model = toJson(this)
	        }
	        this.notify()
	        return this
	    }
	})


	module.exports = avalon
	//浣跨敤杩欎釜鏉ユ墎骞冲寲鏁版嵁  https://github.com/gaearon/normalizr
	//浣跨敤Promise  https://github.com/stefanpenner/es6-promise
	//浣跨敤杩欎釜AJAX搴� https://github.com/matthew-andrews/isomorphic-fetch

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var share = __webpack_require__(78)
	var canHideProperty = __webpack_require__(80)
	var makeFire = share.makeFire
	function toJson(val) {
	    var xtype = avalon.type(val)
	    if (xtype === 'array') {
	        var array = []
	        for (var i = 0; i < val.length; i++) {
	            array[i] = toJson(val[i])
	        }
	        return array
	    } else if (xtype === 'object') {
	        var obj = {}
	        for (i in val) {
	            if (i === '__proxy__' || i === '__data__' || i === '__const__')
	                continue
	            if (val.hasOwnProperty(i)) {
	                var value = val[i]
	                obj[i] = value && value.nodeType ? value : toJson(value)
	            }
	        }
	        return obj
	    }
	    return val
	}

	function hideProperty(host, name, value) {
	    if (canHideProperty) {
	        Object.defineProperty(host, name, {
	            value: value,
	            writable: true,
	            enumerable: false,
	            configurable: true
	        })
	    } else {
	        host[name] = value
	    }
	}

	var modelAccessor = {
	    get: function () {
	        return toJson(this)
	    },
	    set: avalon.noop,
	    enumerable: false,
	    configurable: true
	}

	function makeObserver($vmodel, heirloom, keys, accessors, options) {

	    if (options.array) {
	        if (avalon.modern) {
	            Object.defineProperty($vmodel, '$model', modelAccessor)
	        } else {
	            $vmodel.$model = toJson($vmodel)
	        }
	    } else {
	        function hasOwnKey(key) {
	            return keys[key] === true
	        }
	        hideProperty($vmodel, '$accessors', accessors)
	        hideProperty($vmodel, 'hasOwnProperty', hasOwnKey)
	        hideProperty($vmodel, '$track', Object.keys(keys).sort().join(';;'))
	    }
	    hideProperty($vmodel, '$id', options.id)
	    hideProperty($vmodel, '$hashcode', options.hashcode)
	    if (options.master === true) {
	        hideProperty($vmodel, '$element', null)
	        hideProperty($vmodel, '$render', 1)
	        makeFire($vmodel, heirloom)
	    }
	}

	share.$$midway.makeObserver = makeObserver

	share.$$midway.hideProperty = hideProperty

	var mixin = {
	    toJson: toJson,
	    makeObserver: makeObserver,
	    modelAccessor: modelAccessor
	}
	for (var i in share) {
	    mixin[i] = share[i]
	}

	module.exports = mixin


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	
	var $$midway = {}
	var $$skipArray = __webpack_require__(67)
	var dispatch = __webpack_require__(79)
	var $emit = dispatch.$emit
	var $watch = dispatch.$watch


	function makeFire($vmodel, heirloom) {
	    heirloom.__vmodel__ = $vmodel
	    var hide = $$midway.hideProperty

	    hide($vmodel, '$events', heirloom)
	    hide($vmodel, '$watch', function () {
	        if (arguments.length === 2) {
	            return $watch.apply($vmodel, arguments)
	        } else {
	            throw '$watch鏂规硶鍙傛暟涓嶅'
	        }
	    })
	    hide($vmodel, '$fire', function (expr, a, b) {
	        var list = $vmodel.$events[expr]
	        $emit(list, $vmodel, expr, a, b)
	    })
	}


	function isSkip(key, value, skipArray) {
	    // 鍒ゅ畾姝ゅ睘鎬ц兘鍚﹁浆鎹㈣闂櫒
	    return key.charAt(0) === '$' ||
	            skipArray[key] ||
	            (typeof value === 'function') ||
	            (value && value.nodeName && value.nodeType > 0)
	}

	function modelAdaptor(definition, old, heirloom, options) {
	    //濡傛灉鏁扮粍杞崲涓虹洃鎺ф暟缁�
	    if (Array.isArray(definition)) {
	        return $$midway.arrayFactory(definition, old, heirloom, options)
	    } else if (Object(definition) === definition && typeof definition !== 'function') {
	        //濡傛灉姝ゅ睘鎬у師鏉ュ氨鏄竴涓猇M,鎷嗗垎閲岄潰鐨勮闂櫒灞炴€�
	        if (old && old.$id) {
	            ++avalon.suspendUpdate
	            //1.5甯︽潵鐨勪紭鍖栨柟妗�
	            if (old.$track !== Object.keys(definition).sort().join(';;')) {
	                var vm = $$midway.slaveFactory(old, definition, heirloom, options)
	            } else {
	                vm = old
	            }
	            for (var i in definition) {
	                if ($$skipArray[i])
	                    continue
	                vm[i] = definition[i]
	            }
	            --avalon.suspendUpdate
	            return vm
	        } else {
	            vm = $$midway.masterFactory(definition, heirloom, options)
	            return vm
	        }
	    } else {
	        return definition
	    }
	}
	$$midway.modelAdaptor = modelAdaptor

	var rtopsub = /([^.]+)\.(.+)/
	function makeAccessor(sid, spath, heirloom) {
	    var old = NaN
	    function get() {
	        return old
	    }
	    get.heirloom = heirloom
	    return {
	        get: get,
	        set: function (val) {
	            if (old === val) {
	                return
	            }
	            if (val && typeof val === 'object') {
	                val = $$midway.modelAdaptor(val, old, heirloom, {
	                    pathname: spath,
	                    id: sid
	                })
	            }
	            var older = old
	            old = val
	            var vm = heirloom.__vmodel__
	            if (this.$hashcode && vm) {
	                //鈽呪槄纭繚鍒囨崲鍒版柊鐨別vents涓�(杩欎釜events鍙兘鏄潵鑷猳ldProxy)               
	                if (heirloom !== vm.$events) {
	                    get.heirloom = vm.$events
	                }
	                $emit(get.heirloom[spath], vm, spath, val, older)
	                if (sid.indexOf('.*.') > 0) {//濡傛灉鏄痠tem vm
	                    var arr = sid.match(rtopsub)
	                    var top = avalon.vmodels[ arr[1] ]
	                    if (top) {
	                        var path = arr[2]
	                        $emit(top.$events[ path ], vm, path, val, older)
	                    }
	                }
	               
	                var vid = vm.$id.split('.')[0]
	                avalon.rerenderStart = new Date
	                avalon.batch(vid, true)

	            }
	        },
	        enumerable: true,
	        configurable: true
	    }
	}


	function define(definition) {
	    var $id = definition.$id
	    if (!$id && avalon.config.debug) {
	        avalon.warn('vm.$id must be specified')
	    }
	    if (avalon.vmodels[$id]) {
	        throw Error('error:[', $id, '] had defined!')
	    }
	    var vm = $$midway.masterFactory(definition, {}, {
	        pathname: '',
	        id: $id,
	        master: true
	    })

	    return avalon.vmodels[$id] = vm

	}

	function arrayFactory(array, old, heirloom, options) {
	    if (old && old.splice) {
	        var args = [0, old.length].concat(array)
	        ++avalon.suspendUpdate 
	        old.splice.apply(old, args)
	        --avalon.suspendUpdate 
	        return old
	    } else {
	        for (var i in __array__) {
	            array[i] = __array__[i]
	        }

	        array.notify = function (a, b, c, d) {
	            var vm = heirloom.__vmodel__
	            if (vm) {
	                var path = a === null || a === void 0 ?
	                        options.pathname :
	                        options.pathname + '.' + a
	                vm.$fire(path, b, c)
	                if (!d && !avalon.suspendUpdate) {
	                    avalon.rerenderStart = new Date
	                    avalon.batch(vm.$id, true)
	                }
	            }
	        }

	        var hashcode = avalon.makeHashCode('$')
	        options.array = true
	        options.hashcode = hashcode
	        options.id = options.id || hashcode
	        $$midway.makeObserver(array, heirloom, {}, {}, options)

	        for (var j = 0, n = array.length; j < n; j++) {
	            array[j] = modelAdaptor(array[j], 0, {}, {
	                id: array.$id + '.*',
	                master: true
	            })
	        }
	        return array
	    }
	}
	$$midway.arrayFactory = arrayFactory

	var __array__ = {
	    set: function (index, val) {
	        if (((index >>> 0) === index) && this[index] !== val) {
	            if (index > this.length) {
	                throw Error(index + 'set鏂规硶鐨勭涓€涓弬鏁颁笉鑳藉ぇ浜庡師鏁扮粍闀垮害')
	            }
	            this.notify('*', val, this[index], true)
	            this.splice(index, 1, val)
	        }
	    },
	    contains: function (el) { //鍒ゅ畾鏄惁鍖呭惈
	        return this.indexOf(el) !== -1
	    },
	    ensure: function (el) {
	        if (!this.contains(el)) { //鍙湁涓嶅瓨鍦ㄦ墠push
	            this.push(el)
	        }
	        return this
	    },
	    pushArray: function (arr) {
	        return this.push.apply(this, arr)
	    },
	    remove: function (el) { //绉婚櫎绗竴涓瓑浜庣粰瀹氬€肩殑鍏冪礌
	        return this.removeAt(this.indexOf(el))
	    },
	    removeAt: function (index) { //绉婚櫎鎸囧畾绱㈠紩涓婄殑鍏冪礌
	        if ((index >>> 0) === index) {
	            return this.splice(index, 1)
	        }
	        return []
	    },
	    clear: function () {
	        this.removeAll()
	        return this
	    }
	}
	avalon.define = define

	module.exports = {
	    $$midway: $$midway,
	    $$skipArray: $$skipArray,
	    isSkip: isSkip,
	    __array__: __array__,
	    makeFire: makeFire,
	    makeAccessor: makeAccessor,
	    modelAdaptor: modelAdaptor
	}

/***/ },
/* 79 */
/***/ function(module, exports) {

	
	/**
	 * ------------------------------------------------------------
	 * 灞炴€х洃鍚郴缁� 
	 * ------------------------------------------------------------
	 */

	function adjustVm(vm, expr) {
	    var toppath = expr.split(".")[0], other
	    try {
	        if (vm.hasOwnProperty(toppath)) {
	            if (vm.$accessors) {
	                other = vm.$accessors[toppath].get.heirloom.__vmodel__
	            } else {
	                other = Object.getOwnPropertyDescriptor(vm, toppath).get.heirloom.__vmodel__
	            }

	        }
	    } catch (e) {
	    }
	    return other || vm
	}


	function $watch(expr, callback) {
	    var vm = $watch.adjust(this, expr)
	    var hive = vm.$events
	    var list = hive[expr] || (hive[expr] = [])
	    if (vm !== this) {
	        this.$events[expr] = list
	    }
	    avalon.Array.ensure(list, callback)

	    return function () {
	        avalon.Array.remove(list, callback)
	    }
	}

	$watch.adjust = adjustVm
	/**
	 * $fire 鏂规硶鐨勫唴閮ㄥ疄鐜�
	 * 
	 * @param {Array} list 璁㈤槄鑰呮暟缁�
	 * @param {Component} vm
	 * @param {String} path 鐩戝惉灞炴€у悕鎴栬矾寰�
	 * @param {Any} a 褰撳墠鍊� 
	 * @param {Any} b 杩囧幓鍊�
	 * @param {Number} i 濡傛灉鎶涢敊,璁╀笅涓€涓户缁墽琛�
	 * @returns {undefined}
	 */
	function $emit(list, vm, path, a, b, i) {
	    if (list && list.length) {
	        try {
	            for (i = i || list.length - 1; i >= 0; i--) {
	                var callback = list[i]
	                callback.call(vm, a, b, path)
	            }
	        } catch (e) {
	            if (i - 1 > 0)
	                $emit(list, vm, path, a, b, i - 1)
	            avalon.log(e, path)
	        }

	    }
	}


	module.exports = {
	    $emit: $emit,
	    $watch: $watch,
	    adjustVm: adjustVm
	}


/***/ },
/* 80 */
/***/ function(module, exports) {

	//濡傛灉娴忚鍣ㄤ笉鏀寔ecma262v5鐨凮bject.defineProperties鎴栬€呭瓨鍦˙UG锛屾瘮濡侷E8
	//鏍囧噯娴忚鍣ㄤ娇鐢╛_defineGetter__, __defineSetter__瀹炵幇
	var flag = true
	try {
	    Object.defineProperty({}, '_', {
	        value: 'x'
	    })
	} catch (e) {
	    flag = false
	}

	module.exports = flag

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	
	var canHideProperty = __webpack_require__(80)
	var $$skipArray = __webpack_require__(67)


	var defineProperties = Object.defineProperties
	var defineProperty

	var expose = new Date() - 0

	if (!canHideProperty) {
	    if ('__defineGetter__' in avalon) {
	        defineProperty = function (obj, prop, desc) {
	            if ('value' in desc) {
	                obj[prop] = desc.value
	            }
	            if ('get' in desc) {
	                obj.__defineGetter__(prop, desc.get)
	            }
	            if ('set' in desc) {
	                obj.__defineSetter__(prop, desc.set)
	            }
	            return obj
	        }
	        defineProperties = function (obj, descs) {
	            for (var prop in descs) {
	                if (descs.hasOwnProperty(prop)) {
	                    defineProperty(obj, prop, descs[prop])
	                }
	            }
	            return obj
	        }
	    }
	    if (avalon.msie) {
	        var VBClassPool = {}
	        window.execScript([// jshint ignore:line
	            'Function parseVB(code)',
	            '\tExecuteGlobal(code)',
	            'End Function' //杞崲涓€娈垫枃鏈负VB浠ｇ爜
	        ].join('\n'), 'VBScript');
	        
	        function VBMediator(instance, accessors, name, value) {// jshint ignore:line
	            var accessor = accessors[name]
	            if (arguments.length === 4) {
	                accessor.set.call(instance, value)
	            } else {
	                return accessor.get.call(instance)
	            }
	        }
	        defineProperties = function (name, accessors, properties) {
	            // jshint ignore:line
	            var buffer = []
	            buffer.push(
	                    '\r\n\tPrivate [__data__], [__proxy__]',
	                    '\tPublic Default Function [__const__](d' + expose + ', p' + expose + ')',
	                    '\t\tSet [__data__] = d' + expose + ': set [__proxy__] = p' + expose,
	                    '\t\tSet [__const__] = Me', //閾惧紡璋冪敤
	                    '\tEnd Function')
	            //娣诲姞鏅€氬睘鎬�,鍥犱负VBScript瀵硅薄涓嶈兘鍍廕S閭ｆ牱闅忔剰澧炲垹灞炴€э紝蹇呴』鍦ㄨ繖閲岄鍏堝畾涔夊ソ
	            var uniq = {
	               __proxy__: true,
	               __data__: true,
	               __const__: true
	            }

	            //娣诲姞璁块棶鍣ㄥ睘鎬� 
	            for (name in accessors) {
	                uniq[name] = true
	                buffer.push(
	                        //鐢变簬涓嶇煡瀵规柟浼氫紶鍏ヤ粈涔�,鍥犳set, let閮界敤涓�
	                        '\tPublic Property Let [' + name + '](val' + expose + ')', //setter
	                        '\t\tCall [__proxy__](Me,[__data__], "' + name + '", val' + expose + ')',
	                        '\tEnd Property',
	                        '\tPublic Property Set [' + name + '](val' + expose + ')', //setter
	                        '\t\tCall [__proxy__](Me,[__data__], "' + name + '", val' + expose + ')',
	                        '\tEnd Property',
	                        '\tPublic Property Get [' + name + ']', //getter
	                        '\tOn Error Resume Next', //蹇呴』浼樺厛浣跨敤set璇彞,鍚﹀垯瀹冧細璇皢鏁扮粍褰撳瓧绗︿覆杩斿洖
	                        '\t\tSet[' + name + '] = [__proxy__](Me,[__data__],"' + name + '")',
	                        '\tIf Err.Number <> 0 Then',
	                        '\t\t[' + name + '] = [__proxy__](Me,[__data__],"' + name + '")',
	                        '\tEnd If',
	                        '\tOn Error Goto 0',
	                        '\tEnd Property')

	            }
	            for (name in properties) {
	                if (uniq[name] !== true) {
	                    uniq[name] = true
	                    buffer.push('\tPublic [' + name + ']')
	                }
	            }
	            for (name in $$skipArray) {
	                if (uniq[name] !== true) {
	                    uniq[name] = true
	                    buffer.push('\tPublic [' + name + ']')
	                }
	            }
	            buffer.push('\tPublic [' + 'hasOwnProperty' + ']')
	            buffer.push('End Class')
	            var body = buffer.join('\r\n')
	            var className = VBClassPool[body]
	            if (!className) {
	                className = avalon.makeHashCode('VBClass')
	                
	                window.parseVB('Class ' + className + body)
	                window.parseVB([
	                    'Function ' + className + 'Factory(a, b)', //鍒涘缓瀹炰緥骞朵紶鍏ヤ袱涓叧閿殑鍙傛暟
	                    '\tDim o',
	                    '\tSet o = (New ' + className + ')(a, b)',
	                    '\tSet ' + className + 'Factory = o',
	                    'End Function'
	                ].join('\r\n'))
	                VBClassPool[body] = className
	            }
	            var ret = window[className + 'Factory'](accessors, VBMediator) //寰楀埌鍏朵骇鍝�
	            return ret //寰楀埌鍏朵骇鍝�
	        }
	    }
	}

	module.exports = defineProperties


/***/ }
/******/ ])
});
;