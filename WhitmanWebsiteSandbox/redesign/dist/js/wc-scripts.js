/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csscolumns-cssgradients-flexbox-flexboxlegacy-flexboxtweener-flexwrap-inlinesvg-rgba-svg-video-domprefixes-setclasses-shiv-testallprops-testprop !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,a,i,s;for(var l in b)if(b.hasOwnProperty(l)){if(e=[],t=b[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),y.push((o?"":"no-")+s.join("-"))}}function a(e){var t=x.className,n=Modernizr._config.classPrefix||"";if(C&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?x.className.baseVal=t:x.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e,t){return!!~(""+e).indexOf(t)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var o;for(var a in e)if(e[a]in t)return n===!1?e[a]:(o=t[e[a]],r(o,"function")?c(o,n||t):o);return!1}function u(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=t.body;return e||(e=i(C?"svg":"body"),e.fake=!0),e}function p(e,n,r,o){var a,s,l,c,f="modernizr",u=i("div"),p=d();if(parseInt(r,10))for(;r--;)l=i("div"),l.id=o?o[r]:f+(r+1),u.appendChild(l);return a=i("style"),a.type="text/css",a.id="s"+f,(p.fake?p:u).appendChild(a),p.appendChild(u),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),u.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",c=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),s=n(u,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=c,x.offsetHeight):u.parentNode.removeChild(u),!!s}function m(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(u(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+u(t[o])+":"+r+")");return a=a.join(" or "),p("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,o,a){function c(){u&&(delete _.style,delete _.modElem)}if(a=r(a,"undefined")?!1:a,!r(o,"undefined")){var f=m(e,o);if(!r(f,"undefined"))return f}for(var u,d,p,h,g,v=["modernizr","tspan","samp"];!_.style&&v.length;)u=!0,_.modElem=i(v.shift()),_.style=_.modElem.style;for(p=e.length,d=0;p>d;d++)if(h=e[d],g=_.style[h],s(h,"-")&&(h=l(h)),_.style[h]!==n){if(a||r(o,"undefined"))return c(),"pfx"==t?h:!0;try{_.style[h]=o}catch(y){}if(_.style[h]!=g)return c(),"pfx"==t?h:!0}return c(),!1}function g(e,t,n,o,a){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+T.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?h(s,t,o,a):(s=(e+" "+S.join(i+" ")+i).split(" "),f(s,t,n))}function v(e,t,r){return g(e,n,n,t,r)}var y=[],b=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr,Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var x=t.documentElement,C="svg"===x.nodeName.toLowerCase();C||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=b.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),b.elements=n+" "+e,c(t)}function a(e){var t=y[e[g]];return t||(t={},v++,e[g]=v,y[v]=t),t}function i(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=a(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||a(e);for(var o=n.frag.cloneNode(),i=0,s=r(),l=s.length;l>i;i++)o.createElement(s[i]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function c(e){e||(e=t);var r=a(e);return!b.shivCSS||f||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||l(e,r),e}var f,u,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){f=!0,u=!0}}();var b={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:u,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:c,createElement:i,createDocumentFragment:s,addElements:o};e.html5=b,c(t),"object"==typeof module&&module.exports&&(module.exports=b)}("undefined"!=typeof e?e:this,t);var E="Moz O ms Webkit",S=w._config.usePrefixes?E.toLowerCase().split(" "):[];w._domPrefixes=S,Modernizr.addTest("video",function(){var e=i("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("rgba",function(){var e=i("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var T=w._config.usePrefixes?E.split(" "):[];w._cssomPrefixes=T;var k={elem:i("modernizr")};Modernizr._q.push(function(){delete k.elem});var _={style:k.elem.style};Modernizr._q.unshift(function(){delete _.style});w.testProp=function(e,t,r){return h([e],n,t,r)};w.testAllProps=g,w.testAllProps=v,function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=v("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=v("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||v(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",v("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",v("flexAlign","end",!0)),Modernizr.addTest("flexwrap",v("flexWrap","wrap",!0));var P=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=P,Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",o=0,a=P.length-1;a>o;o++)e=0===o?"to ":"",r+=t+P[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var s=i("a"),l=s.style;return l.cssText=r,(""+l.backgroundImage).indexOf("gradient")>-1}),o(),a(y),delete w.addTest,delete w.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){I=t}function r(t){J=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof H?function(){H(a)}:c()}function s(){var t=0,e=new V(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<G;t+=2){var e=$[t],n=$[t+1];e(n),$[t]=void 0,$[t+1]=void 0}G=0}function f(){try{var t=require,e=t("vertx");return H=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}function l(t,e){var n=arguments,r=this,o=new this.constructor(p);void 0===o[et]&&k(o);var i=r._state;return i?!function(){var t=n[i-1];J(function(){return x(i,o,t,r._result)})}():E(r,o,t,e),o}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(e){return it.error=e,it}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){J(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===rt?S(t,e._result):e._state===ot?j(t,e._result):E(e,void 0,function(e){return g(t,e)},function(e){return j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?b(t,n):r===it?j(t,it.error):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,v()):t(n)?w(e,n,_(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),P(t)}function S(t,e){t._state===nt&&(t._result=e,t._state=rt,0!==t._subscribers.length&&J(P,t))}function j(t,e){t._state===nt&&(t._state=ot,t._result=e,J(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+rt]=n,o[i+ot]=r,0===i&&t._state&&J(P,t)}function P(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function T(){this.error=null}function M(t,e){try{return t(e)}catch(n){return st.error=n,st}}function x(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=void 0,a=void 0;if(i){if(s=M(r,o),s===st?(a=!0,u=s.error,s=null):c=!0,n===s)return void j(n,d())}else s=o,c=!0;n._state!==nt||(i&&c?g(n,s):a?j(n,u):t===rt?S(n,s):t===ot&&j(n,s))}function C(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function O(){return ut++}function k(t){t[et]=ut++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Y(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[et]||k(this.promise),B(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&S(this.promise,this._result))):j(this.promise,q())}function q(){return new Error("Array Methods must be provided an Array")}function F(t){return new Y(this,t).promise}function D(t){var e=this;return new e(B(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function K(t){var e=this,n=new e(p);return j(n,t),n}function L(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function N(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function U(t){this[et]=O(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&L(),this instanceof U?C(this,t):N())}function W(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=U}var z=void 0;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var B=z,G=0,H=void 0,I=void 0,J=function(t,e){$[G]=t,$[G+1]=e,G+=2,2===G&&(I?I(a):tt())},Q="undefined"!=typeof window?window:void 0,R=Q||{},V=R.MutationObserver||R.WebKitMutationObserver,X="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),Z="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,$=new Array(1e3),tt=void 0;tt=X?o():V?s():Z?u():void 0===Q&&"function"==typeof require?f():c();var et=Math.random().toString(36).substring(16),nt=void 0,rt=1,ot=2,it=new T,st=new T,ut=0;return Y.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===nt&&n<t;n++)this._eachEntry(e[n],n)},Y.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=_(t);if(o===l&&t._state!==nt)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===U){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},Y.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===nt&&(this._remaining--,t===ot?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},Y.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){return n._settledAt(rt,e,t)},function(t){return n._settledAt(ot,e,t)})},U.all=F,U.race=D,U.resolve=h,U.reject=K,U._setScheduler=n,U._setAsap=r,U._asap=J,U.prototype={constructor:U,then:l,"catch":function(t){return this.then(null,t)}},U.polyfill=W,U.Promise=U,U}),ES6Promise.polyfill();

// accepts optional transformer
// now transformers are compatible with ES6
String.prototype.template = function (fn, object) {'use strict';
  // Andrea Giammarchi - WTFPL License
  var
    hasTransformer = typeof fn === 'function',
    stringify = JSON.stringify,
    re = /\$\{([\S\s]*?)\}/g,
    strings = [],
    values = hasTransformer ? [] : strings,
    i = 0,
    str,
    m
  ;
  while ((m = re.exec(this))) {
    str = this.slice(i, m.index);
    if (hasTransformer) {
      strings.push(str);
      values.push('(' + m[1] + ')');
    } else {
      strings.push(stringify(str), '(' + m[1] + ')');
    }
    i = re.lastIndex;
  }
  str = this.slice(i);
  strings.push(hasTransformer ? str : stringify(str));
  if (hasTransformer) {
    str = 'function' + (Math.random() * 1e5 | 0);
    strings = [
      str,
      'with(this)return ' + str + '(' + stringify(strings) + (
        values.length ? (',' + values.join(',')) : ''
      ) + ')'
    ];
  } else {
    strings = ['with(this)return ' + strings.join('+')];
  }
  return Function.apply(null, strings).call(
    hasTransformer ? object : fn,
    hasTransformer && fn
  );
};

/**********************************
Polyfill for Object.assign()

Info
[-]   Taken from here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
**********************************/
if (typeof Object.assign != 'function') {
  (function () {
    Object.assign = function (target) {
      'use strict';
      // We must check against these specific cases.
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  })();
}


/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.4
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.4
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.4'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.4
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.4'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.4
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.4'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.4
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.4'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.4
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.4'

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--                        // up
    if (e.which == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.4
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.4'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.4
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.4'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (self && self.$tip && self.$tip.is(':visible')) {
      self.hoverState = 'in'
      return
    }

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $container   = this.options.container ? $(this.options.container) : this.$element.parent()
        var containerDim = this.getPosition($container)

        placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < containerDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > containerDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < containerDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    return (this.$tip = this.$tip || $(this.options.template))
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.4
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.4'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.4
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.4'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.4
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.3.4'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.4
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.4'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = $(document.body).height()

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);


/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.8
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (i + 1) + '</button>';
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.hidden = 'hidden';
            _.paused = false;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, dataSettings, settings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);
            _.checkResponsive(true);

        }

        return Slick;

    }());

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

        if (_.slideCount > _.options.slidesToShow && _.paused !== true) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator,
                _.options.autoplaySpeed);
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this;

        if (_.options.infinite === false) {

            if (_.direction === 1) {

                if ((_.currentSlide + 1) === _.slideCount -
                    1) {
                    _.direction = 0;
                }

                _.slideHandler(_.currentSlide + _.options.slidesToScroll);

            } else {

                if ((_.currentSlide - 1 === 0)) {

                    _.direction = 1;

                }

                _.slideHandler(_.currentSlide - _.options.slidesToScroll);

            }

        } else {

            _.slideHandler(_.currentSlide + _.options.slidesToScroll);

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dotString;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            dotString = '<ul class="' + _.options.dotsClass + '">';

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dotString += '<li>' + _.options.customPaging.call(this, _, i) + '</li>';
            }

            dotString += '</ul>';

            _.$dots = $(dotString).appendTo(
                _.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slidesCache = _.$slides;

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.html(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.target),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots).off('click.slick', _.changeSlide);

            if (_.options.pauseOnDotsHover === true && _.options.autoplay === true) {

                $('li', _.$dots)
                    .off('mouseenter.slick', $.proxy(_.setPaused, _, true))
                    .off('mouseleave.slick', $.proxy(_.setPaused, _, false));

            }

        }

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.$list.off('mouseenter.slick', $.proxy(_.setPaused, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.setPaused, _, false));

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.html(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css("display","");

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css("display","");

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToShow;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToShow;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;

            if (_.options.centerMode === true) {
                if (_.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.on('click.slick', {
                message: 'next'
            }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.options.autoplay === true) {
            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.setPaused, _, true))
                .on('mouseleave.slick', $.proxy(_.setPaused, _, false));
        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        _.$list.on('mouseenter.slick', $.proxy(_.setPaused, _, true));
        _.$list.on('mouseleave.slick', $.proxy(_.setPaused, _, false));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

        if (_.options.autoplay === true) {

            _.autoPlay();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {
            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {
                    image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                        });
                };

                imageToLoad.src = imageSource;

            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = rangeStart + _.options.slidesToShow;
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.paused = false;
        _.autoPlay();

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        _.$slider.trigger('afterChange', [_, index]);

        _.animating = false;

        _.setPosition();

        _.swipeLeft = null;

        if (_.options.autoplay === true && _.paused === false) {
            _.autoPlay();
        }
        if (_.options.accessibility === true) {
            _.initADA();
        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {
        event.preventDefault();
    };

    Slick.prototype.progressiveLazyLoad = function() {

        var _ = this,
            imgCount, targetImage;

        imgCount = $('img[data-lazy]', _.$slider).length;

        if (imgCount > 0) {
            targetImage = $('img[data-lazy]', _.$slider).first();
            targetImage.attr('src', targetImage.attr('data-lazy')).removeClass('slick-loading').load(function() {
                    targetImage.removeAttr('data-lazy');
                    _.progressiveLazyLoad();

                    if (_.options.adaptiveHeight === true) {
                        _.setPosition();
                    }
                })
                .error(function() {
                    targetImage.removeAttr('data-lazy');
                    _.progressiveLazyLoad();
                });
        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this,
            currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === "array" && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(0);

        _.setPosition();

        _.$slider.trigger('reInit', [_]);

        if (_.options.autoplay === true) {
            _.focusHandler();
        }

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function(option, value, refresh) {

        var _ = this, l, item;

        if( option === "responsive" && $.type(value) === "array" ) {
            for ( item in value ) {
                if( $.type( _.options.responsive ) !== "array" ) {
                    _.options.responsive = [ value[item] ];
                } else {
                    l = _.options.responsive.length-1;
                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {
                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {
                            _.options.responsive.splice(l,1);
                        }
                        l--;
                    }
                    _.options.responsive.push( value[item] );
                }
            }
        } else {
            _.options[option] = value;
        }

        if (refresh === true) {
            _.unload();
            _.reinit();
        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = (_.animType !== null && _.animType !== false);

    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.setPaused = function(paused) {

        var _ = this;

        if (_.options.autoplay === true && _.options.pauseOnHover === true) {
            _.paused = paused;
            if (!paused) {
                _.autoPlay();
            } else {
                _.autoPlayClear();
            }
        }
    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay === true) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'left';
            } else {
                return 'right';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount;

        _.dragging = false;

        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            switch (_.swipeDirection()) {
                case 'left':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 0;
                    _.touchObject = {};
                    _.$slider.trigger('swipe', [_, 'left']);
                    break;

                case 'right':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                    _.slideHandler(slideCount);
                    _.currentDirection = 1;
                    _.touchObject = {};
                    _.$slider.trigger('swipe', [_, 'right']);
                    break;
            }
        } else {
            if (_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if (document[_.hidden]) {
            _.paused = true;
            _.autoPlayClear();
        } else {
            if (_.options.autoplay === true) {
                _.paused = false;
                _.autoPlay();
            }
        }

    };
    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.activateADA = function() {
        var _ = this,
        _isSlideOnFocus =_.$slider.find('*').is(':focus');
        // _isSlideOnFocus = _.$slides.is(':focus') || _.$slides.find('*').is(':focus');

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false',
            'tabindex': '0'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

        (_isSlideOnFocus) &&  _.$slideTrack.find('.slick-active').focus();

    };

    Slick.prototype.focusHandler = function() {
        var _ = this;
        _.$slider.on('focus.slick blur.slick', '*', function(event) {
            event.stopImmediatePropagation();
            var sf = $(this);
            setTimeout(function() {
                if (_.isPlay) {
                    if (sf.is(':focus')) {
                        _.autoPlayClear();
                        _.paused = true;
                    } else {
                        _.paused = false;
                        _.autoPlay();
                    }
                }
            }, 0);
        });
    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i = 0,
            ret;
        for (i; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));


/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

; (function ($) {

    'use strict';

    $.fn.fitVids = function (options) {
        var settings = {
            customSelector: null,
            ignore: null
        };

        if (!document.getElementById('fit-vids-style')) {
            // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
            var head = document.head || document.getElementsByTagName('head')[0];
            var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
            var div = document.createElement("div");
            div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
            head.appendChild(div.childNodes[1]);
        }

        if (options) {
            $.extend(settings, options);
        }

        return this.each(function () {
            var selectors = [
              'iframe[src*="player.vimeo.com"]',
              'iframe[src*="youtube.com"]',
              'iframe[src*="youtube-nocookie.com"]',
              'iframe[src*="kickstarter.com"][src*="video.html"]',
              'object',
              'embed'
            ];

            if (settings.customSelector) {
                selectors.push(settings.customSelector);
            }

            var ignoreList = '.fitvidsignore';

            if (settings.ignore) {
                ignoreList = ignoreList + ', ' + settings.ignore;
            }

            var $allVideos = $(this).find(selectors.join(','));
            $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
            $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

            $allVideos.each(function (count) {
                var $this = $(this);
                if ($this.parents(ignoreList).length > 0) {
                    return; // Disable FitVids on this video.
                }
                if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
                if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width')))) {
                    $this.attr('height', 9);
                    $this.attr('width', 16);
                }
                var height = (this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10)))) ? parseInt($this.attr('height'), 10) : $this.height(),
                    width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
                    aspectRatio = height / width;
                if (!$this.attr('id')) {
                    var videoID = 'fitvid' + count;
                    $this.attr('id', videoID);
                }
                $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100) + '%');
                $this.removeAttr('height').removeAttr('width');
            });
        });
    };
    // Works with either jQuery or Zepto
})(window.jQuery || window.Zepto);

!function(root, factory) {
    "function" == typeof define && define.amd ? define([], function() {
        return root.svg4everybody = factory();
    }) : "object" == typeof exports ? module.exports = factory() : root.svg4everybody = factory();
}(this, function() {
    /*! svg4everybody v2.0.0 | github.com/jonathantneal/svg4everybody */
    function embed(svg, g) {
        if (g) {
            var viewBox = !svg.getAttribute("viewBox") && g.getAttribute("viewBox"), fragment = document.createDocumentFragment(), clone = g.cloneNode(!0);
            for (viewBox && svg.setAttribute("viewBox", viewBox); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            svg.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        xhr.onreadystatechange = function() {
            if (4 === xhr.readyState) {
                var x = document.createElement("x");
                x.innerHTML = xhr.responseText, xhr.s.splice(0).map(function(array) {
                    embed(array[0], x.querySelector("#" + array[1].replace(/(\W)/g, "\\$1")));
                });
            }
        }, xhr.onreadystatechange();
    }
    function svg4everybody(opts) {
        function oninterval() {
            for (var use; use = uses[0]; ) {
                var svg = use.parentNode;
                if (svg && /svg/i.test(svg.nodeName)) {
                    var src = use.getAttribute("xlink:href");
                    if (polyfill && (!validate || validate(src, svg, use))) {
                        var url = src.split("#"), url_root = url[0], url_hash = url[1];
                        if (svg.removeChild(use), url_root.length) {
                            var xhr = svgCache[url_root] = svgCache[url_root] || new XMLHttpRequest();
                            xhr.s || (xhr.s = [], xhr.open("GET", url_root), xhr.send()), xhr.s.push([ svg, url_hash ]), 
                            loadreadystatechange(xhr);
                        } else {
                            embed(svg, document.getElementById(url_hash));
                        }
                    }
                }
            }
            requestAnimationFrame(oninterval, 17);
        }
        opts = opts || {};
        var uses = document.getElementsByTagName("use"), polyfill = "polyfill" in opts ? opts.polyfill : /\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent) || (navigator.userAgent.match(/AppleWebKit\/(\d+)/) || [])[1] < 537, validate = opts.validate, requestAnimationFrame = window.requestAnimationFrame || setTimeout, svgCache = {};
        polyfill && oninterval();
    }
    return svg4everybody;
});

/*! jquery-visibility v1.0.11 | MIT license | http://mths.be/visibility */
!function(e,i){"function"==typeof define&&define.amd?define(["jquery"],function(t){return i(e,t)}):"object"==typeof exports?module.exports=i(e,require("jquery")):i(e,jQuery)}(this,function(e,i,t){"use strict";function o(){"hidden"!==n&&(r.hidden=f.pageVisibility?r[n]:t)}for(var n,u,r=e.document,s=["webkit","o","ms","moz",""],f=i.support||{},c=("onfocusin"in r&&"hasFocus"in r?"focusin focusout":"focus blur");(u=s.pop())!==t;)if(n=(u?u+"H":"h")+"idden",f.pageVisibility=r[n]!==t,f.pageVisibility){c=u+"visibilitychange";break}o(),i(/blur$/.test(c)?e:r).on(c,function(e){var u=e.type,s=e.originalEvent;if(s){var f=s.toElement;(!/^focus./.test(u)||f===t&&s.fromElement===t&&s.relatedTarget===t)&&i(r).triggerHandler(n&&r[n]||/^(?:blur|focusout)$/.test(u)?"hide":"show"),o()}})});

;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());


/*! Tiny Pub/Sub - v0.7.0 - 2013-01-29
* https://github.com/cowboy/jquery-tiny-pubsub
* Copyright (c) 2013 "Cowboy" Ben Alman; Licensed MIT */
(function($) {

  var o = $({});

  $.subscribe = function() {
    o.on.apply(o, arguments);
  };

  $.unsubscribe = function() {
    o.off.apply(o, arguments);
  };

  $.publish = function() {
    o.trigger.apply(o, arguments);
  };

}(jQuery));

/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});

/*! npm.im/object-fit-images 3.1.3 */
var objectFitImages = (function () {
'use strict';

var OFI = 'bfred-it:object-fit-images';
var propRegex = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g;
var testImg = typeof Image === 'undefined' ? {style: {'object-position': 1}} : new Image();
var supportsObjectFit = 'object-fit' in testImg.style;
var supportsObjectPosition = 'object-position' in testImg.style;
var supportsOFI = 'background-size' in testImg.style;
var supportsCurrentSrc = typeof testImg.currentSrc === 'string';
var nativeGetAttribute = testImg.getAttribute;
var nativeSetAttribute = testImg.setAttribute;
var autoModeEnabled = false;

function createPlaceholder(w, h) {
	return ("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + w + "' height='" + h + "'%3E%3C/svg%3E");
}

function polyfillCurrentSrc(el) {
	if (el.srcset && !supportsCurrentSrc && window.picturefill) {
		var pf = window.picturefill._;
		// parse srcset with picturefill where currentSrc isn't available
		if (!el[pf.ns] || !el[pf.ns].evaled) {
			// force synchronous srcset parsing
			pf.fillImg(el, {reselect: true});
		}

		if (!el[pf.ns].curSrc) {
			// force picturefill to parse srcset
			el[pf.ns].supported = false;
			pf.fillImg(el, {reselect: true});
		}

		// retrieve parsed currentSrc, if any
		el.currentSrc = el[pf.ns].curSrc || el.src;
	}
}

function getStyle(el) {
	var style = getComputedStyle(el).fontFamily;
	var parsed;
	var props = {};
	while ((parsed = propRegex.exec(style)) !== null) {
		props[parsed[1]] = parsed[2];
	}
	return props;
}

function setPlaceholder(img, width, height) {
	// Default: fill width, no height
	var placeholder = createPlaceholder(width || 1, height || 0);

	// Only set placeholder if it's different
	if (nativeGetAttribute.call(img, 'src') !== placeholder) {
		nativeSetAttribute.call(img, 'src', placeholder);
	}
}

function onImageReady(img, callback) {
	// naturalWidth is only available when the image headers are loaded,
	// this loop will poll it every 100ms.
	if (img.naturalWidth) {
		callback(img);
	} else {
		setTimeout(onImageReady, 100, img, callback);
	}
}

function fixOne(el) {
	var style = getStyle(el);
	var ofi = el[OFI];
	style['object-fit'] = style['object-fit'] || 'fill'; // default value

	// Avoid running where unnecessary, unless OFI had already done its deed
	if (!ofi.img) {
		// fill is the default behavior so no action is necessary
		if (style['object-fit'] === 'fill') {
			return;
		}

		// Where object-fit is supported and object-position isn't (Safari < 10)
		if (
			!ofi.skipTest && // unless user wants to apply regardless of browser support
			supportsObjectFit && // if browser already supports object-fit
			!style['object-position'] // unless object-position is used
		) {
			return;
		}
	}

	// keep a clone in memory while resetting the original to a blank
	if (!ofi.img) {
		ofi.img = new Image(el.width, el.height);
		ofi.img.srcset = nativeGetAttribute.call(el, "data-ofi-srcset") || el.srcset;
		ofi.img.src = nativeGetAttribute.call(el, "data-ofi-src") || el.src;

		// preserve for any future cloneNode calls
		// https://github.com/bfred-it/object-fit-images/issues/53
		nativeSetAttribute.call(el, "data-ofi-src", el.src);
		if (el.srcset) {
			nativeSetAttribute.call(el, "data-ofi-srcset", el.srcset);
		}

		setPlaceholder(el, el.naturalWidth || el.width, el.naturalHeight || el.height);

		// remove srcset because it overrides src
		if (el.srcset) {
			el.srcset = '';
		}
		try {
			keepSrcUsable(el);
		} catch (err) {
			if (window.console) {
				console.log('http://bit.ly/ofi-old-browser');
			}
		}
	}

	polyfillCurrentSrc(ofi.img);

	el.style.backgroundImage = "url(\"" + ((ofi.img.currentSrc || ofi.img.src).replace(/"/g, '\\"')) + "\")";
	el.style.backgroundPosition = style['object-position'] || 'center';
	el.style.backgroundRepeat = 'no-repeat';

	if (/scale-down/.test(style['object-fit'])) {
		onImageReady(ofi.img, function () {
			if (ofi.img.naturalWidth > el.width || ofi.img.naturalHeight > el.height) {
				el.style.backgroundSize = 'contain';
			} else {
				el.style.backgroundSize = 'auto';
			}
		});
	} else {
		el.style.backgroundSize = style['object-fit'].replace('none', 'auto').replace('fill', '100% 100%');
	}

	onImageReady(ofi.img, function (img) {
		setPlaceholder(el, img.naturalWidth, img.naturalHeight);
	});
}

function keepSrcUsable(el) {
	var descriptors = {
		get: function get(prop) {
			return el[OFI].img[prop ? prop : 'src'];
		},
		set: function set(value, prop) {
			el[OFI].img[prop ? prop : 'src'] = value;
			nativeSetAttribute.call(el, ("data-ofi-" + prop), value); // preserve for any future cloneNode
			fixOne(el);
			return value;
		}
	};
	Object.defineProperty(el, 'src', descriptors);
	Object.defineProperty(el, 'currentSrc', {
		get: function () { return descriptors.get('currentSrc'); }
	});
	Object.defineProperty(el, 'srcset', {
		get: function () { return descriptors.get('srcset'); },
		set: function (ss) { return descriptors.set(ss, 'srcset'); }
	});
}

function hijackAttributes() {
	function getOfiImageMaybe(el, name) {
		return el[OFI] && el[OFI].img && (name === 'src' || name === 'srcset') ? el[OFI].img : el;
	}
	if (!supportsObjectPosition) {
		HTMLImageElement.prototype.getAttribute = function (name) {
			return nativeGetAttribute.call(getOfiImageMaybe(this, name), name);
		};

		HTMLImageElement.prototype.setAttribute = function (name, value) {
			return nativeSetAttribute.call(getOfiImageMaybe(this, name), name, String(value));
		};
	}
}

function fix(imgs, opts) {
	var startAutoMode = !autoModeEnabled && !imgs;
	opts = opts || {};
	imgs = imgs || 'img';

	if ((supportsObjectPosition && !opts.skipTest) || !supportsOFI) {
		return false;
	}

	// use imgs as a selector or just select all images
	if (typeof imgs === 'string') {
		imgs = document.querySelectorAll(imgs);
	} else if (!('length' in imgs)) {
		imgs = [imgs];
	}

	// apply fix to all
	for (var i = 0; i < imgs.length; i++) {
		imgs[i][OFI] = imgs[i][OFI] || {
			skipTest: opts.skipTest
		};
		fixOne(imgs[i]);
	}

	if (startAutoMode) {
		document.body.addEventListener('load', function (e) {
			if (e.target.tagName === 'IMG') {
				fix(e.target, {
					skipTest: opts.skipTest
				});
			}
		}, true);
		autoModeEnabled = true;
		imgs = 'img'; // reset to a generic selector for watchMQ
	}

	// if requested, watch media queries for object-fit change
	if (opts.watchMQ) {
		window.addEventListener('resize', fix.bind(null, imgs, {
			skipTest: opts.skipTest
		}));
	}
}

fix.supportsObjectFit = supportsObjectFit;
fix.supportsObjectPosition = supportsObjectPosition;

hijackAttributes();

return fix;

}());


/**********************************
Map Styles
**********************************/
var mapStyles = [
	{
		"elementType": "labels",
		"stylers": [
			{ "visibility": "off" }
		]
	},
	{
		"featureType": "road",
		"elementType": "labels",
		"stylers": [
			{ "visibility": "on" }
		]
	},
	{
		"featureType": "water",
		"elementType": "labels",
		"stylers": [
			{ "visibility": "on" }
		]
	},
	{
		"elementType": "geometry.fill",
		"stylers": [
			{ "color": "#d7e3f1" }
		]
	},
	{
		"featureType": "road",
		"elementType": "geometry.fill",
		"stylers": [
			{ "color": "#ffffff" }
		]
	},
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
	{
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#d7e3f1"
            }
        ]
    },
	{
		"featureType": "water",
		"stylers": [
			{ "color": "#99ccff" } //#517898
		]
	}
];

/**********************************
#CARD-COMPONENT-FACTORY-FUNCTION

Info
[-] 	This factory function creates CardComponent objects, which are components
		that open a modal box when you click on a button. Note that this is only
		used for creating Card Components that are not in a Card Gallery. For
		the js for Card Components within a Card Gallery, see card-gallery.js.
[-] 	For more info on this confusing setup, see the "Card Component"
		section here - https://wiki.whitman.edu/display/WEB/Component+Index

[-] 	Example Usage:
			var myCardComponent = CardComponent({
				$element:$('#someCardComponent'),
				modal:s.modal
			});
			myCardComponent.setup();


Notes
[1] 	The object that's being returned.
**********************************/
var CardComponent = function(params){
	'use strict';

	var o = {}; /*[1]*/

	var d = params.$element.data('mcParams');

	o.state = {
		$element:params.$element,
		modalContent:d.modalContent,
		$button:$(d.button).first(),
		ariaLabel:d.modalAriaLabel,
		modal:params.modal,
		openCallback:d.openCallback
	}

	o.setup = function(){
		o.state.$button.click(function(event) {
			o.state.modal.updateContent({
				ariaLabel:o.state.ariaLabel,
				content:o.state.modalContent
			})
			if(o.state.openCallback){o.state.openCallback();}
			o.state.modal.open();
		});
	}

	return o;
};

/**********************************
#CARD-GALLERY-FACTORY-FUNCTION

Info
[-] 	This factory function creates Card Gallery objects. It uses Bootstrap modals and
 		Masonry for its layout
[-] 	Tiles: generic term we're using in our galleries for cards, thumbnails,
		etc. - whatever is being laid out

Notes
[1] 	The gallery object we're creating
**********************************/
var CardGallery = function(params,$e){
	'use strict';
	
	var g = {}; /*[1]*/

	/**********************************
	Shared state object with all of the object's data.
	
	Notes
	[1] 	The box where the cards go
	[2] 	The cards data we're getting from the page
	[3] 	Tiles: generic term for whatever the elements are that we're
			laying out with masonry (in this case cards)
	[4] 	The number of cards to show at a time, this number of new images
			is added when addImages() is run
	**********************************/
	g.state = {
		types:['CardGallery'],
		$component:$e,
		$box:$e.find('.wc-masonry-gallery-box').first(),/*[1]*/
		id:$e.attr('id'),
		params: params,
		data: params.data,/*[2]*/
		tiles:[],/*[3]*/

		/**********************************
		Masonry Stuff
		**********************************/
		moreButtonText: 'Show More',
		groupSize: params.groupSize,/*[4]*/
		loadedCount: 0,
		itemClass: '.wc-card-link',
		itemSizerClass: '.wc-mg-tile-sizer',
		gutterClass: '.wc-mg-gutter-sizer',
		thumbnailWidth: $e.find('.wc-mg-tile-sizer').first().width(),

		/**********************************
		Modal Stuff
		**********************************/
		modalOpenButton:'.wc-bmg-button',
		modalCloseButton:'.wc-lightbox-close-button',
		modal:undefined
	};

	
	/**********************************
	Setup the card gallery

	Notes
	[1]		Create the gallery's modal
	[2] 	Add bindings for opening the cards in the modal
	**********************************/
	g.cgSetup = function(){
		g.state.modal = Modal({ /*[1]*/
			template: '<div class="wc-lightbox wc-card-lightbox modal-dialog" role="document">${content}</div>',
			id:g.state.id,
			content:'',
			closeButton:g.state.modalCloseButton
		});
		g.state.$box.on('click',g.state.modalOpenButton,function(e){ /*[2]*/
			e.preventDefault();
			var i = $(this).data('wc-item-index');
			g.state.modal.updateContent({
				ariaLabel: g.state.tiles[i].title,
				content: g.state.tiles[i].lightBoxMarkup,
				closeButton:g.state.modalCloseButton
			});
			g.state.modal.open();
		});
	}

	/**********************************
	Build the cards and modal/lightbox markup

	Notes
	 [1] If there's no link, make it a button and build the modal markup
	 [2] ...Otherwise make it a link
	**********************************/ 
	g.cgBuildTiles = function(){
		for (var k = 0; k < g.state.data.length; k++) {
			var item = g.state.data[k];
			var tile = {};
			tile.title = item.title;
			if(WcFun.nullIfEmpty(item.cardLink) === null){ /*[1]*/
				tile.imageInLightboxContent = WcFun.toBool(item.imageInBodyCopy)?
					'<div class="wc-card-lightbox-image-container">'+
						'<img src="${item.image}" class="wc-card-image" alt="${item.imageAltText}"></img>'+
					'</div>'
					:'';
				tile.markup =
					'<button class="wc-card-link wc-bmg-button wc-mg-tile" data-wc-item-index="${k}" >'+
						'<img src="${item.image}" class="wc-card-image" alt="${item.imageAltText}"/>'+
						'<div class="wc-card-text-box">'+
							'<span class="wc-card-title">${item.title}</span>'+
							'<span class="wc-card-subtitle">${item.subtitle}</span>'+
							'<span class="wc-card-author">${item.author}</span>'+
						'</div>'+
					'</button>';
				tile.markup = tile.markup.template({item:item,k:k});
				tile.lightBoxMarkup =
					'<div class="wc-card-lightbox-topbar">'+
						'<button class="wc-lightbox-close-button" aria-label="close">'+
							'<svg viewBox="0 0 32 32">'+
							'<use  xlink:href="'+Globals.s.svgFilePath+'#icon-menu-x"></use>'+
							'</svg>'+
						'</button>'+
					'</div>'+
					'<div class="wc-card-lightbox-content">'+
						tile.imageInLightboxContent +
						'<div class="wc-card-lightbox-text-container">'+
							'<h2 class="wc-card-title">${item.title}</h2>'+
							'<p class="wc-card-subtitle">${item.subtitle}</p>'+
							item.bodyCopy +
						'</div>' +
					'</div>';
				tile.lightBoxMarkup = tile.lightBoxMarkup.template({item:item,k:k});
			}
			else{ /*[2]*/
				tile.markup =
					'<a class="wc-card-link wc-bmg-link wc-mg-tile" href="${item.cardLink}" data-wc-item-index="${k}" >'+
						'<img src="${item.image}" class="wc-card-image" alt="${item.imageAltText}"/>'+
						'<div class="wc-card-text-box">'+
							'<span class="wc-card-title">${item.title}</span>'+
							'<span class="wc-card-subtitle">${item.subtitle}</span>'+
							'<span class="wc-card-author">${item.author}</span>'+
						'</div>'+
					'</a>';
				tile.markup = tile.markup.template({item:item,k:k});
			}
			g.state.tiles.push(tile);
		}
	}

	return Object.assign(
		g,
		MasonryGallery(g.state)
	);
}

/**********************************
#IMAGE-GALLERY-FACTORY-FUNCTION

Info
[-] 	This factory function creates Image Gallery objects that get their
		data from Google Drive, use Masonry for layout, and PhotoSwipe for
		a lightbox.

Notes
[1] 	The gallery object we're creating
**********************************/
var ImageGallery = function(params,$e){
	'use strict';

	var g = {}; /*[1]*/

	/**********************************
	Shared state object with all of the gallery object's data

	Notes
	[1] 	The box where the images go
	[2] 	The data we're going to get from google
	[3] 	Tiles: generic term for whatever the elements are that we're
			laying out with masonry (in this case thumbnails)
	[4] 	The number of images to show at a time, this number of new images
			is added when addImages() is run
	**********************************/
	g.state = {
 		types:['ImageGallery'],
		$component:$e,
		$box:$e.find('.wc-masonry-gallery-box').first(), /*[1]*/
		id:$e.attr('id'),
		params: params,
		googleAPIKey:params.googleAPIKey,
		folderID: params.folderID,
		data: [], /*[2]*/
		tiles: [], /*[3]*/
		order: params.order.toUpperCase(),
		reverse: WcFun.toBool(params.reverseOrder),

		/**********************************
		Masonry Stuff
		**********************************/
		moreButtonText: 'Show More Images',
		groupSize: params.groupSize,/*[4]*/
		loadedCount: 0,
		itemClass: '.wc-mg-tile',
		itemSizerClass: '.wc-mg-tile-sizer',
		gutterClass: '.wc-mg-gutter-sizer',
		thumbnailWidth: $e.find('.wc-mg-tile-sizer').first().width(),

		/**********************************
		PhotoSwipe stuff
		**********************************/
		captions: WcFun.toBool(params.captions),
		lightboxButton:'.wc-ps-button',
		psContent:'images'
	};

	/**********************************
	Get the data from Google

	Notes
	[1] 	Get the data from google, once it's done setup the gallery
	[2] 	Default is EDITEDDATE
	[3] 	The thumbnail url comes back with =s220 on the end, if we strip that off
			we get the full image.
	[4] 	Using the API to add parameters to get the thumbnail size we want:
				w = width, h = height, s = longest dimension
				ex. h300 = 300px high, s220 = the longest dimension is 220px
	**********************************/
	g.getData = function(){
		var url = "https://www.googleapis.com/drive/v3/files?q='"+g.state.folderID+"'+in+parents&fields=files%2Ckind&key="+g.state.params.googleAPIKey+"&callback=?";
		return new Promise(function(resolve,reject){
			$.getJSON(url) /*[1]*/
				.done(function(data){
					if(g.state.order === 'FILENAME'){
						g.state.data = data.files.sort(function(a,b){
							var aFileName = a.originalFilename.toLowerCase();
							var bFileName = b.originalFilename.toLowerCase();
							return ((aFileName < bFileName)? -1 : ((aFileName > bFileName)? 1 :0))
						})

					}
					else if(g.state.order === 'RANDOM'){
						g.state.data = WcFun.shuffleArray(data.files);
					}
					else{ /*[2]*/
						g.state.data = data.files;
					}
					if(g.state.reverse){
						g.state.data = g.state.data.reverse();
					}
					for (var k = 0; k < g.state.data.length; k++) {
						var item = g.state.data[k];
						var tile = {};
						var sizeIndex = item.thumbnailLink.indexOf('=s'); /*[3]*/
						if(sizeIndex > 0){
							tile.imageUrl = item.thumbnailLink.substring(0,sizeIndex);
							tile.thumbUrl = tile.imageUrl + '=w' + g.state.thumbnailWidth; /*[4]*/
							tile.description = item.description;
							tile.imageMediaMetadata = item.imageMediaMetadata;
						}
						else{
							log('Image Gallery Error: there was a problem retrieving the image URL, looks like it\'s not formatted how we expected. Google\'s API may have changed?');
						}
						g.state.tiles.push(tile);
					}
					resolve();
				})
				.fail(function(error){
					reject(error);
				});
		});
	}

	/**********************************
	Build the tile markup
	**********************************/ 
	g.buildTiles = function(){
		for (var k = 0; k < g.state.tiles.length; k++) {
			var tile 	= 	g.state.tiles[k];
			tile.markup =	'<a href="${tile.imageUrl}" class="wc-mg-tile wc-ps-button wc-ig-tile" data-wc-item-index="${k}" >'+
								'<img src="${tile.thumbUrl}" alt="${tile.description}" />'+
							'</a>';
			tile.markup = tile.markup.template({tile:tile,k:k});
		}
	}

	/**********************************
	Merge the gallery object with a MasonryGallery object and a
	PhotoSwipeGallery object to get their functionality
	**********************************/
	return Object.assign(
		g,
		MasonryGallery(g.state),
		PhotoSwipeGallery(g.state)
	);
}

/**********************************
#INSTAGRAM-GALLERY-FACTORY-FUNCTION

Info
[-] 	This factory function creates Instagram Gallery objects.
**********************************/
function InstagramGallery(params,$e){
	'use strict';

	var o = {};

	o.s = {
		resourcesLoaded:undefined,
		method:params.method,
		tagOptions:params.tagOptions,
		userOptions:params.userOptions,
		accessToken:params.accessToken,
		imageCount:params.imageCount,
		id:$.attr('id')
	};

	/**********************************
	Initialize

	Notes
	[1] 	After the resources for using instafeed have been loaded, get the images.
	[2] 	If it's using tags, and there's a list of users then filter by that list of users
	[3] 	Doing this to avoid posts with multiple photos since at this point they just come across as gray
			squares in the API. The feature is brand new though so it might be worth checking on this later. -meanspa 2.24.17
	**********************************/
	o.init = function(){
		var promises = $.grep(Globals.s.promises, function(p){ return p.name === 'InstafeedResources'; })
		if (promises.length === 0){
			var resources = ['../plugins/instafeed/instafeed.min.js']
			o.s.resourcesLoaded = Globals.getStuff(resources);
			var p = {
				name:'InstafeedResources',
				promise:o.s.resourcesLoaded
			}
			Globals.s.promises.push(p);
		}
		else {
			o.s.resourcesLoaded = promises[0].promise;
		}
		o.s.resourcesLoaded.then(function(){ /*[1]*/
			var successCallback = function(r){
				if(o.s.method === 'tag' && o.s.tagOptions.users && o.s.tagOptions.users.length > 0){ /*[2]*/
					o.s.results = $.grep(r.data,function(img,i){
						return o.s.tagOptions.users.indexOf(img.user.id) != -1;
					})
				}
				else{
					o.s.results = r.data;
				}
				o.s.imageCount = o.s.imageCount > o.s.results.length?o.s.results.length:o.s.imageCount;
				for (var i = 0; i < o.s.imageCount; i++) {
					var item = o.s.results[i];
					if (item.type === "video" && item.images.thumbnail.url.indexOf("null") >= 0) { /*[3]*/
						o.s.imageCount++;
					}
					else{
						var markup = '<a href="'+item.link+'" target="_blank" class="wc-instagram-thumbnail wc-card-link"><img src="'+item.images.low_resolution.url+'" alt="Instagram Image - '+item.caption.text.replace(/\"/g,'&quot;')+'" /></a>';
						$e.append(markup);
					}
				}
				$.publish('dom.newElements');
			}
			var options = {
				accessToken: o.s.accessToken,
				mock: true,
				success: successCallback
			};
			if(o.s.method === 'tag'){
				options.get = 'tagged';
				options.tagName = o.s.tagOptions.tag;
			}
			else if(o.s.method === 'user'){				
				options.get = 'user';
				options.userId = o.s.userOptions.userID;
			}
			o.s.feed = new Instafeed(options);
			o.s.feed.run();
		});
	}

	return o;
}

/**********************************
#MASONRY-GALLERY-FACTORY-FUNCTION

Info
[-] 	This factory function creates an object that has methods for
		setting up Masonry on a gallery. It's not intended to be used
		on its own, but rather to be added to another gallery object in
		order to use the Masonry layout (see image-gallery.js for an example).
[-] 	http://masonry.desandro.com/options.html

Notes
[-] 	Tiles: generic term for cards, thumbnails, etc. - whatever the
		elements are that we're laying out with masonry.
[1] 	Depends on a shared state object with all of the relevant settings
		and data.
**********************************/
var MasonryGallery = function(state){ /*[1]*/
	'use strict';
	
	var g = {};

	/**********************************
	Some setup before anything else happens
	
	Notes
	[-] 	Created this for elements that might need to be accessed before
			mgSetup is run.
	**********************************/
	g.mgPreSetup = function(){
		state.$loader = $('<div/>').addClass('wc-loader wc-medium-loader').text('Loading...');			
		state.$moreButton = $('<button>').addClass('wc-box-button wc-small wc-masonry-more-button').text(state.moreButtonText)
			.click(function(){
				g.mgHideMoreButton();
				g.mgAddTiles();
			});
	}

	/**********************************
	Masonry setup

	Notes
	[1] 	Check Globals.s.promises to see if the resources have already
			been requested.
	[2] 	If not, request them and save the promise to Globals.s.promises
	[3] 	Returns a promise, resolved after the resources are loaded
			and masonry is setup.
	**********************************/
	g.mgSetup = function(){
		state.types.push('MasonryGallery');
		if(!Globals.s.isIE || Globals.s.ieVersion > 9){
			var resourcesLoaded, promises;
			promises = $.grep(Globals.s.promises, function(p){ return p.name === 'MasonryResources'; });/*[1]*/
			if(promises.length === 0){ /*[2]*/
				var resources = [
					'../plugins/masonry/masonry.pkgd.min.js'
				];
				resourcesLoaded = Globals.getStuff(resources);
				var p = {
					name:'MasonryResources',
					promise:resourcesLoaded
				}
				Globals.s.promises.push(p);
			}
			else{
				resourcesLoaded = promises[0].promise;
			}
			return new Promise(function(resolve,reject){ /*[3]*/
				resourcesLoaded.then(function(){
					state.$box.masonry({
						itemSelector: state.itemClass,
						columnWidth: state.itemSizerClass,
						gutter:state.gutterClass,
						percentPosition:true
					});
					resolve();
				})
			})
		}	
		else{
			return g.mgSetup_ie();
		}
	}

	/**********************************
	Add tiles to the gallery

	Notes
	[-] 	This function adds groups of tiles to the gallery through the masonry API [5],
			based on the gallery's groupSize property.
	[1] 	Count = the total images that should be shown after this runs
	[2] 	Return a promise that resolves when all tiles are loaded and added to
			Masonry
	[3]		Before we can add tiles to Masonry, we need to wait for all of the images
			to load so it sizes and positions things correctly. For each image in the tile,
			run it through Globals.imageLoaded() to create a promise that resolves when the
			image is loaded.
	[4] 	...add those promises to imgPromises	
	[5] 	...and after all of the promises in imgPromises have resolved, add the tiles
			to Masonry.
	[6] 	If there are more tiles to display after this group, show the "Show More" button
	**********************************/
	g.mgAddTiles = function(){
		if(!Globals.s.isIE || Globals.s.ieVersion > 9){
			var count = ((state.loadedCount + state.groupSize) > state.tiles.length)?state.tiles.length:state.loadedCount + state.groupSize; /*[1]*/
			var $newTiles = $();
			var imgPromises = [];
			g.mgShowLoader('show');

			return new Promise(function(resolve,reject){ /*[2]*/
				for (var k = state.loadedCount; k < count; k++) {
					var tile = state.tiles[k];
					var $newTile = $(tile.markup).css({'opacity':'0'});
					$newTile.find('img').each(function(i){ /*[3]*/
						var p =	Globals.imageLoaded(this);
						p.then(function(){
							state.loadedCount++;
						});
						imgPromises.push(p); /*[4]*/
					})
					$newTiles = $newTiles.add($newTile);
					state.$box.append($newTile);
				}

				Promise.all(imgPromises) /*[5]*/
					.then(function(){
						g.mgHideLoader();
						state.$box.masonry('appended',$newTiles);
						if(state.tiles.length > state.loadedCount){
							g.mgShowMoreButton();/*[6]*/
						}
						resolve();
					})
					.catch(reject);
			});
		}
		else{
			return g.addTiles_ie();
		}
	}


	/**********************************
	IE9 Fallback setup

	Info
	[-] 	IE9 was having trouble with masonry, so we built this to just
			make a grid of static-sized images.
	**********************************/
	g.mgSetup_ie = function(){
		state.$component.addClass('wc-ie-fallback');
		return new Promise(function(resolve,reject){
			resolve();
		})
	}

	/**********************************
	IE9 Fallback method for adding images
	**********************************/
	g.addTiles_ie = function(){
		var count = ((state.loadedCount + state.groupSize) > state.tiles.length)?state.tiles.length:state.loadedCount + state.groupSize; /*[1]*/
		var $newTiles = $();
		var imgPromises = [];
		g.mgShowLoader('show');

		return new Promise(function(resolve,reject){ /*[2]*/
			for (var k = state.loadedCount; k < count; k++) {
				var tile = state.tiles[k];
				var $newTile = $(tile.markup);
				$newTile.find('img').each(function(i){ /*[3]*/
					var p =	Globals.imageLoaded(this);
					p.then(function(){
						state.loadedCount++;
					});
					imgPromises.push(p); /*[4]*/
				})
				$newTiles = $newTiles.add($newTile);
				state.$box.append($newTile);
			}

			Promise.all(imgPromises) /*[5]*/
				.then(function(){
					g.mgHideLoader();
					if(state.tiles.length > state.loadedCount){
						g.mgShowMoreButton();/*[6]*/
					}
					resolve();
				})
				.catch(reject);
		});
	}

	/**********************************
	Show the animated loader wheel
	**********************************/
	g.mgShowLoader = function(){
		if(!$.contains(state.$component[0],state.$loader[0])){
			state.$component.append(state.$loader);
		}
	}

	/**********************************
	Hide the animated loader wheel
	**********************************/
	g.mgHideLoader = function(){
		state.$loader.detach();
	}

	/**********************************
	Show the button for adding more tiles
	**********************************/
	g.mgShowMoreButton = function(){
		if(!$.contains(state.$component[0],state.$moreButton[0])){
			state.$component.append(state.$moreButton);
		}
	}

	/**********************************
	Hide the button for adding more tiles
	**********************************/
	g.mgHideMoreButton = function(){
		state.$moreButton.detach();
	}

	return g;
}



/**********************************
Check for masonry errors

Info
[-]		Created this to deal with an IE bug where masonry would sometimes yield overlapping
		images. Couldn't narrow down exactly what was causing the bug so I built this 
		workaround instead. It just measures the area of the gallery's .wc-image-gallery-box
		and adds up the area of all the images and makes sure it's big enough. If not it
		runs masonry again to fix the layout. Not sure if we still need this or not, leaving it 
		here in case we need to add it back.

Notes
[-] 	This needs to be added to the state object columns : Math.round(g.$box.width() / g.thumbnailWidth)
[1] 	Calculate the column width, doing it this way so we don't have to worry
		about horizontal gutters
[2] 	Vertical margin
[3]  	Include an extra vertical margin when calculating the area to account for the
		top margin.
**********************************/
// function masonryCheck(g){
// 	var box = {
// 		h:g.$box.height(),
// 		w:g.$box.width(),
// 		area:(g.$box.height() * g.$box.width())
// 	}
// 	var cw = (box.w/g.columns); /*[1]*/
// 	var vm = parseInt(g.$box.find('.wc-masonry-thumbnail-sizer').first().css('margin-bottom'));/*[2]*/
// 	var imagesHeight = 0;
// 	g.$box.find('.wc-ig-thumbnail img').each(function(){
// 		imagesHeight += $(this).height() + vm;
// 	});
// 	var neededArea = (imagesHeight + vm) * cw; /*[3]*/
// 	if(neededArea > box.area){
// 		log('Image Gallery Error - looks like some images are overlapping, refreshing the layout');
// 		log('neededArea: ' + neededArea);
// 		g.$box.masonry();
// 	}
// }

/**********************************
#MODAL-FACTORY-FUNCTION

Info
[-] 	This factory function creates Modal objects using Bootstrap
		modals.
[-] 	Example Usage:
			var myModal = Modal({
				template: '<div class="wc-lightbox wc-card-lightbox modal-dialog" role="document">${content}</div>',
				id:"someID",
				content:''
			});
			myModal.updateContent({ //Note that this needs to happen each time you open the modal
				ariaLabel:'This is the ARIA label',
				content:'<p>This is some content for the modal</p>'
			});
			myModal.open();

Notes
[1] 	The object being returned
**********************************/
var Modal = function(params){
	'use strict';

	var o = {}; /*[1]*/

	/**********************************
	State object

	Notes
	[1] 	Fallback standard light box template
	**********************************/ 
	o.state = {
		template:params.template?params.template:'<div class="wc-lightbox modal-dialog" role="document">${content}</div>', /*[1]*/
		id:params.id + '_modal',
		$element: $('<div class="modal fade wc-modal '+params.modalClass+'" id="'+params.id + '_modal" tabindex="-1" role="dialog" aria-hidden="true"></div>'),
		content:params.content,
		closeButton:params.closeButton
	};


	/**********************************
	Setup

	Notes
	[1] 	For a white backgrop, we need to do this since we don't have control
			over the backgrop markup itself.
	[2] 	Empty the modal after it's closed
	[3] 	If there's a close button, add its bindings
	**********************************/
	$('body').append(o.state.$element);
	o.state.$element.on('hide.bs.modal',function(){ /*[2]*/
		o.state.$element.empty();
	});
	if(o.state.closeButton){ /*[3]*/
		o.state.$element.on('click',o.state.closeButton,function(e){
			e.preventDefault();
			o.state.$element.modal('hide');
		});
	}

	/**********************************
	Update the content of the modal

	Notes
	[1]		Add an aria label for accessibility if one is provided
	**********************************/ 
	o.updateContent = function(params){
		o.state.content = params.content;
		if (params.ariaLabel) {
			o.state.ariaLabel = params.ariaLabel;
			o.state.$element.attr('aria-label',o.state.ariaLabel);/*[1]*/
		}
		o.state.$element.html(o.state.template.template({content:o.state.content,svgPath:Globals.s.svgFilePath}));
	}

	/**********************************
	Open the modal
	**********************************/
	o.open = function(){
		o.state.$element.modal();
	}

	return o;
}

/**********************************
#PHOTOSWIPE-GALLERY-FACTORY-FUNCTION

Info
[-] 	This factory function creates an object that has methods for
		setting up PhotoSwipe on a gallery. It's not intended to be used
		on its own, but rather to be added to another gallery object in
		order to use the PhotoSwipe lightbox layout (see image-gallery.js
		for an example).
[-] 	http://photoswipe.com/

Notes
[1] 	Depends on a shared state object with all of the relevant settings
		and data.
**********************************/
var PhotoSwipeGallery = function(state){ /*[1]*/
	'use strict';

	var g = {};

	/**********************************
	PhotoSwipe setup

	Notes
	[1] 	Check Globals.s.promises to see if the resources have already
			been requested.
	[2] 	If not, request them and save the promise to Globals.s.promises
	[3] 	Returns a promise, resolved after the resources are loaded
			and PhotoSwipe is setup.
	[4] 	The markup for all of photoswipe's controls when the slideshow is open. 
	[5] 	Leaving all of the controls in there and toggling them on/off with the 
			options in the openPSGallery() method
	[6] 	Photoswipe needs an array of all the images' paths, dimensions and
			captions.
	**********************************/
	g.psSetup = function(){
		state.types.push('PhotoSwipeGallery');
		var resourcesLoaded, promises;
		promises = $.grep(Globals.s.promises, function(p){ return p.name === 'PhotoSwipeResources'; });/*[1]*/
		if(promises.length === 0){/*[2]*/
			var resources = [
				'../plugins/photoswipe/photoswipe.min.js',
				'../plugins/photoswipe/photoswipe-ui-default.js',
				'../plugins/photoswipe/photoswipe.css', 
				'../plugins/photoswipe/default-skin/default-skin.css'
			];
			resourcesLoaded = Globals.getStuff(resources);
			var p = {
				name:'PhotoSwipeResources',
				promise:resourcesLoaded
			}
			Globals.s.promises.push(p);
		}
		else{
			resourcesLoaded = promises[0].promise;
		}
		return new Promise(function(resolve,reject){ /*[3]*/
			resourcesLoaded.then(function(){
				if(!WcFun.nullIfEmpty(state.psControlsMarkup)){
					state.psControlsMarkup = /*[4]*/
						'<div class="pswp wc-pswp-box" tabindex="-1" role="dialog" aria-hidden="true" id="'+state.id+'_pswp">'+
							'<div class="pswp__bg"></div>'+ //background of PhotoSwipe.
							'<div class="pswp__scroll-wrap">'+
								'<div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div>'+ //Container that holds slides. Don't modify these 3 pswp__item elements
								'<div class="pswp__ui pswp__ui--hidden">' + //Default interface on top of sliding area
									'<div class="pswp__top-bar">'+ //begin controls
										'<div class="pswp__counter"></div>'+
										'<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>'+
										'<button class="pswp__button pswp__button--share" title="Share"></button>'+
										'<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>'+
										'<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>'+
										'<div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div>'+ //preloader
									'</div>'+//end controls
									'<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div> </div>'+
									'<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>'+
									'<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>'+
									'<div class="pswp__caption"><div class="pswp__caption__center"></div></div>'+
								'</div>'+
							'</div>'+
						'</div>';
				}
				state.psControls = $(state.psControlsMarkup)[0];
				state.$component.append(state.psControls); /*[5]*/
				state.psArray = [];
				if (state.psContent === 'images' || !WcFun.nullIfEmpty(state.psContent)){
					state.tiles.forEach(function(image){
						state.psArray.push({ /*[6]*/
							src: image.imageUrl,
							w: image.imageMediaMetadata.width,
							h: image.imageMediaMetadata.height,
							title: image.description
						});
					})
				}
				else if(state.psContent === 'html'){
					state.tiles.forEach(function(tile){
						state.psArray.push({
							html:tile.lightBoxMarkup
						})
					})
				}
				g.addBindings();
				resolve();
			});
		});
	}

	/**********************************
	Add bindings for opening PhotoSwipe
	**********************************/
	g.addBindings = function(){
		state.$box.on('click',state.lightboxButton,function(e){
			e.preventDefault();
			g.openPSGallery($(this).data('wc-item-index'));
		});
	}

	/**********************************
	Open the PhotowSwipe gallery

	Notes
	[1] 	For some reason PhotoSwipe needs to be re-initialized each time
			it's opened.
	**********************************/
	g.openPSGallery = function(i){ 
		var options = {
			index: i,
			bgOpacity: .9,
			shareEl: false,
			fullscreenEl: false,
			captionEl:state.captions,
			zoomEl: false,
			loop:false,
			closeOnScroll:false
		};
		var psGallery = new PhotoSwipe(state.psControls, PhotoSwipeUI_Default, state.psArray, options);/*[1]*/
		psGallery.init();
	}

	return g;
}

/**********************************
#TAXONOMY-LIST-FACTORY-FUNCTION

Info
[-] 	This factory function creates Taxonomy List objects.
**********************************/ 	

var TaxonomyIndex = function(params,$e){
	'use strict';

	var ob = {};

	/**********************************
	State Object

	Notes
	[1] 	Information for the category filter (e.g. radio button, dropdown, etc.)
	[2]		Subset of s.results that's been filtered by the category
			selected in the $catSelect dropdown.
	[3]		Subset of s.categorySelection that's been filtered by the letter selected
			in $alphaLinks
	**********************************/
	ob.state = {
		params: params,
		id:$e.attr('id'),
		alphabet:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
		$resultsList: $e.find('.wc-taxonomy-list').first(),
		$alphaLinks: $e.find('.wc-alphabet-list-box').first(),
		$listBox: $e.find('.wc-taxonomy-list-box').first(),
		$collapseButton: $e.find('.wc-collapse-button').first(),
		catSelect: { /*[1]*/
			type:params.catSelectType,
			$box:$e.find('.wc-list-filter-box').first(),
			allTitle:params.catAllTitle
		},
		collapseSettings:{
			collapseHeight:208,
		 	expandedHeight:0,
		},
		allPages: params.pageList,
		catList: params.catList,
		alphaSort: WcFun.toBool(params.alphaSort),
		alphaGroup: WcFun.toBool(params.alphaGroup),
		useUrlParams: WcFun.toBool(params.useUrlParams),
		collapse:WcFun.toBool(params.collapse),
		categorySelection:[],/*[2]*/
		finalSelection:[]/*[3]*/
	}

	/****************************************
	Initialize

	Notes
	[1] 	Update the category filter (dropdown)
	[2] 	Need to trigger the change manually in this case.
	[3] 	Update the category filter (radio buttons)
	****************************************/
	ob.setup = function(){
		ob.state.categorySelection = WcFun.alphabetize(ob.state.allPages);
		ob.state.finalSelection = ob.state.categorySelection;
		ob.buildCategorySelect();
		ob.bindings();
		ob.buildAlphabetList();
		if(!ob.state.alphaGroup){
			ob.state.$resultsList.addClass('wc-item-list wc-highlight-link-list');
		}
		if(ob.state.useUrlParams && Globals.s.urlParameters.cat){
			var cat = Globals.s.urlParameters.cat;
			if(ob.state.catSelect.type === 'Dropdown'){ /*[1]*/
				ob.state.catSelect.$dropdown.find('option[value="'+cat+'"]').first().prop('selected',true);
				ob.state.catSelect.$dropdown.change(); /*[2]*/
			}
			else if(ob.state.catSelect.type === 'RadioButtons'){ /*[3]*/
				ob.state.catSelect.$radioButtons.filter('input[value=' + cat +']').click();
			}
		}
		else{
			ob.populateResultsList();
		}
		if(ob.state.collapse){
			ob.setupCollapse();
		}
	}

	/****************************************
	Assign event handlers for UI actions

	Notes
	[1] 	Alphabet Links
	[2] 	Dropdown category filter
	[3] 	Radio button category filter
	****************************************/
	ob.bindings = function(){
		if (ob.state.alphaSort){/*[1]*/
			ob.state.$alphaLinks.click(function(e){
				var d = $(e.target).data('tl-filter');
				if(d){
					ob.alphaFilter(d);
				}
			});
		}
		if (ob.state.catSelect.type ==='Dropdown'){/*[2]*/
			ob.state.catSelect.$dropdown.change(function(){
				ob.filterByCategory(this.value);
				if(ob.state.collapse){
					ob.expandList();
				}
			});
		}
		else if(ob.state.catSelect.type === 'RadioButtons'){ /*[3]*/
			ob.state.catSelect.$radioButtons.change(function(){
				ob.filterByCategory(this.value);
				if(ob.state.collapse){
					ob.expandList();
				}
			})
		}
	}

	/**********************************
	Setup the collapse button

	Notes
	[-] 	Note that we didn't use the wc-collapse method in Globals.js
			because we needed to change the height based on the size of
			the list (which changes when you use the category filter).
	**********************************/
	ob.setupCollapse = function(){
		ob.state.collapseSettings.collapseHeight = $(ob.state.$listBox.find('li')[4]).position().top + $(ob.state.$listBox.find('li')[4]).height() + 10;
		ob.state.$collapseButton = $(
			'<button class="wc-collapse-button">'+
				'<svg viewbox= "0 0 32 32"><use xlink:href="'+Globals.s.svgFilePath+'#icon-arrow-down"></use></svg>'+
			'</button>');
		$e.append(ob.state.$collapseButton);
		ob.collapseList();
		ob.state.$collapseButton.click(function(){
			if(ob.state.$listBox.hasClass('wc-collapsed')){
				ob.expandList();
			}
			else{
				ob.collapseList();
			}
		})
	}

	/**********************************
	Collapse the list
	**********************************/
	ob.collapseList = function(){
		ob.state.$listBox.height(ob.state.collapseSettings.collapseHeight);
		ob.state.$listBox.addClass('wc-collapsed');
		ob.state.$collapseButton.addClass('wc-collapsed');
	}

	/**********************************
	Expand the list

	Notes
	[-] 	We also use this for updating the list box height when the category
			filter is used.
	**********************************/
	ob.expandList = function(){
		ob.state.$listBox.height(ob.state.$resultsList.height());
		ob.state.$listBox.removeClass('wc-collapsed');
		ob.state.$collapseButton.removeClass('wc-collapsed');
	}

	/**********************************
	Build the category select
	**********************************/
	ob.buildCategorySelect = function(){
		// Dropdown
		if (ob.state.catSelect.type ==='Dropdown'){
			ob.state.catSelect.$box
				.addClass('wc-dropdown-filter-box')
				.append('<label for="wc-category-filter">Filter by:</label>');
			ob.state.catSelect.$dropdown = $('<select class="wc-rounded-dropdown wc-category-filter-dropdown" name="wc-category-filter" title="Filter by categories"></select>');
			ob.state.catSelect.$dropdown.append('<option value="all">'+ob.state.catSelect.allTitle+'</option>');
			ob.state.catList.forEach(function(cat){
				ob.state.catSelect.$dropdown.append('<option value="'+cat.id+'">'+cat.name+'</option>');
			});
			ob.state.catSelect.$box.append(ob.state.catSelect.$dropdown);
		}

		// Radio Button
		else if(ob.state.catSelect.type === 'RadioButtons'){
			ob.state.catSelect.$box
				.addClass('wc-radio-filter-box');
			var filterName = ob.state.id+'_filter';
			var markup = '';
			ob.state.catList.forEach(function(cat){
				markup += 
					'<div class="wc-radio-option-box">'+
						'<input type="radio" name="'+filterName+'" id="'+filterName+'_'+cat.id+'" value="'+cat.id+'">'+
						'<label for="'+filterName+'_'+cat.id+'" id="'+filterName+'_'+cat.id+'_label">'+cat.name+'</label>'+
						'<div class="wc-radio-btn" data-target="#'+filterName+'_'+cat.id+'_label">'+
							'<div class="wc-radio-btn-inner"></div>'+
						'</div>'+
					'</div>';
			})
			markup += 
				'<div class="wc-radio-option-box">'+
					'<input type="radio" name="'+filterName+'" id="'+filterName+'_all" value="all" checked>'+
					'<label for="'+filterName+'_all" id="'+filterName+'_all_label">'+ob.state.catSelect.allTitle+'</label>'+
					'<div class="wc-radio-btn" data-target="#'+filterName+'_all_label">'+
						'<div class="wc-radio-btn-inner"></div>'+
					'</div>'+
				'</div>';
			ob.state.catSelect.$box.append(markup);
			ob.state.catSelect.$radioButtons = $('input[type=radio][name='+filterName+']');
		}
	}


	/****************************************
	Populate the DOM list of alphabet links at the top

	Notes
	[1] 	If it's the current letter, make it a gray span so you can't click
			on it.
	[2]		If the letter has results for it, add a link for it
	[3] 	...otherwise just add a grayed out span.
	****************************************/
	ob.buildAlphabetList = function(currentLetter){
		if (ob.state.alphaSort) {
			var allMarkup 	= '';
			if (!currentLetter){
				allMarkup =  '<span class="wc-no-link">All</span> <span class="wc-dash">-</span> ';
			}
			else{
				allMarkup = '<a class="wc-all-link" data-tl-filter="all">All</a> <span class="wc-dash">-</span> ';
			}
			ob.state.$alphaLinks.empty();
			ob.state.$alphaLinks.append(allMarkup);
			for (var i =0; i<ob.state.alphabet.length; i++){
				var letter 	= ob.state.alphabet[i],
					markup 	= '',
					subset 	= ob.state.categorySelection.filter(function(item){
						var title = item.title.toUpperCase();
						return(title[0] == letter);
					});
				if (subset.length > 0){
					if (ob.state.alphabet[i] == currentLetter){
						markup = '<span class="wc-current-letter">'+letter+'</span>';/*[1]*/
					}
					else{
						markup = '<a data-tl-filter="'+letter+'">'+letter+'</a>';/*[2]*/
					}
					ob.state.$alphaLinks.append(markup);
				}
				else{
					markup = '<span class="wc-no-link">'+letter+'</span>';/*[3]*/
					ob.state.$alphaLinks.append(markup);
				}
			}
			ob.state.$alphaLinks.removeClass('wc-hidden');
		}
	}

	/****************************************
	Populate the DOM list

	Notes
	[1]		Groups and displays the links by letter.
	[2] 	If there are links for this letter, add a letter link up top
	[3]		...otherwise add a grayed out letter
	****************************************/
	ob.populateResultsList = function(){
		ob.state.$resultsList.empty();
		if(ob.state.alphaGroup){
			for(var i=0;i<ob.state.alphabet.length;i++){ /*[1]*/
				var letter 	= ob.state.alphabet[i],
					markup 	= '',
					subset 	= ob.state.finalSelection.filter(function(item){
						var title = item.title.toUpperCase();
						return (title[0] == letter);
					});
				if (subset.length > 0){
					markup = '<li class="wc-category"><h2>'+letter+'</h2><ul class="wc-item-list wc-highlight-link-list">';
					for (var k=0;k<subset.length;k++){
						markup += '<li><a href="'+subset[k].url+'">'+subset[k].title+'</a></li>';
					}
					markup += '</ul></li>';
					ob.state.$resultsList.append(markup);
				}
			}
		}
		else{
			for (var i = 0; i < ob.state.finalSelection.length; i++) {
				var markup = '<li><a href="'+ob.state.finalSelection[i].url+'">'+ob.state.finalSelection[i].title+'</a></li>';
				ob.state.$resultsList.append(markup);
			}
		}
	}

	/****************************************
	Filter the selection by a category
	****************************************/
	ob.filterByCategory = function(cat){
		if (cat == 'all'){
			if(ob.state.useUrlParams){ Globals.removeUrlParameter('cat'); }
			ob.state.categorySelection 	= WcFun.alphabetize(ob.state.allPages);
			ob.state.finalSelection 	= ob.state.categorySelection;
		}
		else{
			if(ob.state.useUrlParams){ Globals.addUrlParameter('cat',cat); }
			ob.state.categorySelection = ob.state.allPages.filter(function(item){
				return (item.tags.indexOf(cat) > -1);
			});
			ob.state.finalSelection	= ob.state.categorySelection;
		}
		ob.buildAlphabetList();
		ob.populateResultsList();
	}

	/****************************************
	Filter the selection by the title's first letter
	****************************************/
	ob.alphaFilter = function(letter){
		if (letter == 'all'){
			ob.state.finalSelection = ob.state.categorySelection;
			ob.buildAlphabetList();
		}
		else if (ob.state.alphabet.indexOf(letter) > -1){
			ob.state.finalSelection = ob.state.categorySelection.filter(function(item){
				var title = item.title.toUpperCase();
				return (title[0] == letter);
			});
			ob.buildAlphabetList(letter);
		}
		else{
			ob.state.finalSelection = ob.state.categorySelection;
			ob.buildAlphabetList();
		}
		ob.populateResultsList();
	}

	return ob;
}

/**********************************
#VIDEO-GALLERY-FACTORY-FUNCTION

Info
[-] 	This factory function creates Video Gallery objects. 
[-] 	The videos in the gallery should all have their own Video
		objects, but those aren't managed or tracked here. This is
		just the code necessary to setup the video gallery.
[-] 	Example Usage:
			var myVideoGallery = VideoGallery({
				$element:$('#my-fancy-video-gallery-component') // The video gallery component element
			});
			myVideoGallery.setup();

Notes
[1] 	The object that's being returned.
**********************************/
function VideoGallery(params){
	'use strict';

	var o = {}; /*[1]*/

	o.state = {
		$element:params.$element,
		expandable:WcFun.toBool(params.$element.data('expandable')),
		$videoList:params.$element.find('.wc-video-list').first(),
		$videos:params.$element.find('.wc-video-component'),
		id:params.$element.attr('id'),
		colmns:undefined,
		openHeight:0,
		collapseHeight:0
	};

	/**********************************
	Measure the Galleries

	Notes
	[1]		Need to give it a static height when open for the CSS transition to work.
	[2] 	Figure out how many columns of videos are in a row
	[3] 	When the gallery is collapsed, we want one row to be visible, so we
			set the collapsed height to be the height of the first row. To get that
			we find the tallest video in the first row.
	[4] 	Compensating for the dropshadow - We need to make sure the cards' dropshadows aren't
			cut off, but we can't use "overflow:visible" because it would show the hidden cards
			(and getting the timing right to apply it with JS when it's open would be a pain), so
			we give wc-video-list some bottom padding in the css which takes care of the problem when
			it's expanded, but not when it's collapsed so we add some extra height for that.
	[5] 	Checking to see if there's more than one row of videos, multiplying by 1.2
			here just to give a bit of a buffer.
	[6] 	Only show the "more videos..." button if there's more than one row of videos.
	**********************************/	
	o.setup = function(){
		if(o.state.expandable){
			o.state.$element.addClass('wc-collapsed');
			o.state.openHeight = o.state.$videoList[0].scrollHeight; /*[1]*/
			o.state.columns = Math.floor(o.state.$videoList.outerWidth()/o.state.$videos.first().outerWidth()); /*[2]*/
			for (var k = 0; k < o.state.columns; k++) {
				o.state.collapseHeight = ($(o.state.$videos[k]).outerHeight() > o.state.collapseHeight)?$(o.state.$videos[k]).outerHeight():o.state.collapseHeight; /*[3]*/
			}
			o.state.collapseHeight += 24; /*[4]*/
			var cssString = '#' + o.state.id + ' .wc-video-list{height:'+o.state.openHeight+'px;}' + '#' + o.state.id + '.wc-collapsed .wc-video-list{height:'+o.state.collapseHeight+'px;}'
			Globals.addCSS(cssString);
			if(o.state.openHeight > (1.2 * o.state.collapseHeight)){ /*[5]*/
				o.state.$element.find('.wc-collapse-button').first().removeClass('wc-hidden'); /*[6]*/
			}
		}
		o.state.$element.removeClass('wc-not-ready');
	}

	return o;
}

/**********************************
#VIDEO-FACTORY-FUNCTION

Info
[-] 	This factory function creates Video objects. We only use these for videos
		that we want to open in a modal window.
[-] 	Example Usage:
			var myVideo = Video({
				$element:$('#my-fancy-video-component'), // The video component element
				modal:s.modal // A modal object for playing the video
			});
			video.setup();

Notes
[1] 	The object that's being returned.
**********************************/
var Video = function(params){
	'use strict';

	var o = {}; /*[1]*/
	
	/**********************************
	Object State

	Notes
	[1] 	Actual resolution doesn't matter here, just using this for the aspect
			ratio that fitVids will use. We do need some value here though.
	[2] 	The video opens in a modal window that needs to be passed to it
			in params.
	**********************************/
	var d = params.$element.data();
	
	o.state = {
		type:d.videoType,
		title:d.videoTitle,
		$element:params.$element,
		dimensions:(d.dimensions !== undefined && d.dimensions.indexOf(',') > 0) ? d.dimensions.split(','):[560,315], /*[1]*/
		videoId:d.videoId,
		closedCaptions:WcFun.toBool(d.closedCaptions),
		modal:params.modal, /*[2]*/
		modalMarkup:undefined,
		url:undefined
	}


	/**********************************
	Setup

	Notes
	[1] 	Actual resolution doesn't matter here, just using this for the aspect
			ratio that fitVids will use. We do need some value here though.
	**********************************/ 
	o.setup = function(){
		switch(o.state.type){
			case 'youtube':
				o.state.url = 'https://www.youtube.com/embed/' + o.state.videoId + '?rel=0&showinfo=0&autoplay=1';
				if(o.state.closedCaptions){
				    o.state.url += "&cc_load_policy=1";
				}
				o.state.markup = '<iframe width="'+ o.state.dimensions[0]+'" height="'+o.state.dimensions[1]+'" src="'+o.state.url+'" style="border: none" allowfullscreen></iframe>';
				break;
			case 'vimeo':
				o.state.url = 'https://player.vimeo.com/video/' + o.state.videoId;
				o.state.markup = '<iframe src="'+o.state.url+'" width="'+o.state.dimensions[0]+'" height="'+o.state.dimensions[1]+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
				break;
			default:
				log('Video Error: don\'t recognize this video type - ' + o.state.videoType);
		}
		o.state.$element.click(function(e) {
			e.preventDefault();
			o.open();
		});
	}


	
	/**********************************
	Open the video

	Notes
	[1]		Need to trigger fitVids again because this wasn't in the DOM when it ran
			initially.
	**********************************/
	o.open = function(){
		o.state.modal.updateContent({
			ariaLabel:'Video Modal - ' + o.state.title, 
			content:o.state.markup
		});
		o.state.modal.state.$element.fitVids(); /*[1]*/
		o.state.modal.open();
	}

	return o;
}

/**********************************
#AUTO-SIZE-CONTROL

Info
		Automatically resizes elements with the "data-auto-size" data attribute to have
		100% width and keep the correct aspect ratio on different screen sizes.

		Example Markup: <div data-auto-size='{"width": "640", "height":"360" }'></div>

		*Note*  The FitVid plugin already does this for embedded videos like youtube and vimeo.
		It's best to use that for videos if possible - https://github.com/davatron5000/FitVids.js
**********************************/ 

var AutoSizeControl = (function(){
	'use strict';
	var s = {
		things:null
	};

	function init(){
		s.things = $('[data-auto-size]');
		if (s.things.length > 0 ) {
			resize();
			subscriptions();
		}
	}

	/**********************************
	Resize the things according to their aspect ratio
	**********************************/
	function resize(){
		s.things.each(function(){
			var params = $(this).data('auto-size');
			var ratio = parseInt(params.height,10)/parseInt(params.width,10);
			$(this).css({'width':'100%'}).height($(this).width() * ratio);
		});
	}

	/**********************************
	Pub/Sub subscriptions

	Notes
	[1] 	Run this whenever the window size changes (watching Globals.watchWindowSize)
	**********************************/
	function subscriptions(){
		$.subscribe('window.newMeasurements',function(){
			resize();
		});
	}

	return {
		s:s,
		resize:resize,
		init:init
	}
})();

/**********************************
#CARD-COMPONENT-CONTROL

Info
		This module manages Card Components that are not in a Card Gallery. For
		the js for Card Components within a Card Gallery, see card-gallery.js.
[-] 	For more info on this confusing setup, see the "Card Component"
		section here - https://wiki.whitman.edu/display/WEB/Component+Index

Notes
[-] 	See card-component.js for the CardComponent factory function
[1] 	Adding these so you can set these variables in the HTML of the page
		to change how the lightboxes look. Example: "At the Hub" article x42910
**********************************/
var CardComponentControl = (function(){
	'use strict';

	var s = {
		componentClass:'.wc-card-component',
		template:'',
		closeButtonClass:'',
		components:[],
		modal:null
	};


	/**********************************
	Initialize the Module

	Notes
	[1] 	Setup templates for special magazine articles (Example: whitman.edu/at-the-hub))
	**********************************/
	function init(){
		if($('html').hasClass('wc-magazine-page') && $('html').hasClass('wc-white-modal')){
			s.closeButtonClass	= 	'.wc-lightbox-close-button';
			s.template 			=	'<div class="wc-lightbox wc-magazine-lightbox wc-body-copy-lightbox modal-dialog" role="document">'+
										'<div class="wc-magazine-lightbox-topbar">'+
											'<button class="wc-lightbox-close-button" role="Close" aria-label="Close">'+
												'<svg viewBox="0 0 32 32">'+
													'<use xlink:href="${svgPath}#icon-menu-x"></use>'+
												'</svg>'+
											'</button>'+
										'</div>'+
										'${content}'+
									'</div>';
		}

		findCardComponents();
	};

	/**********************************
	Find Components

	Notes
	[1] 	For the first component we find, create a modal
	**********************************/ 	
	function findCardComponents(){
		$(s.componentClass).each(function() {
			if($(this).data('mcParams')){
				if(!s.modal){
					s.modal = Modal({ /*[1]*/
						id:'wc-card-component-modal',
						template:s.template,
						closeButton:s.closeButtonClass
					});
				}
				var mc = CardComponent({
					$element:$(this),
					modal:s.modal
				});
				mc.setup();
				s.components.push(mc);
			}
		});
	}

	return {
		s:s,
		init:init
	}
})();

/**********************************
#CARD-GALLERY-CONTROL

Info
[-] 	This is the module for managing our card galleries. Most of 
		the relevant code for how card galleries work is is in the card gallery 
		factory function - objects/card-gallery.js. This module is primarily for
		finding them on a page and setting them up.
**********************************/
var CardGalleryControl = (function(){
	'use strict';

	/**********************************
	Settings
	**********************************/
	var s = {
		componentClass:'.wc-card-gallery-component',
		galleries:[]
	};

	/**********************************
	Initialize the module

	Notes
	[1] 	The order of this setup process is important
	**********************************/
	function init(){
		findGalleries();
		s.galleries.forEach(function(g){ /*[1]*/
			g.mgPreSetup();
			g.cgBuildTiles();
			g.mgSetup().then(function(){
				return g.mgAddTiles();
			}).then(function(){
				return g.cgSetup();
			});
		})

	}

	/**********************************
	Find any galleries on the page and create objects for them
	**********************************/
	function findGalleries(){
		$(s.componentClass).each(function(){
			var params = $(this).data('cgParams');
			if(params){
				var g = CardGallery(params,$(this));
				s.galleries.push(g);
			}
		})
	}

	return {
		s:s,
		init:init
	}
})();

/**********************************
	
#CLICK-OFF-CONTROL

Info
	Manages the click event handler that detects if you've "clicked off"
	of specific elements to close them. E.g. When you open a dropdown, 
	clicking somehwere else on the page closes it.

**********************************/

var ClickOff = (function(){
	/****************************************
	Settings

	Notes
	[1] 	Array of 'click-off' objects, when these are open, you can click off
			of them and they'll close or do whatever other stuff you specify. See add().
	****************************************/
	var s = {
		clickOffs:[] /*[1]*/
	};

	/****************************************
	Initializes the module
	****************************************/
	function init(){
		bind();
	}

	/****************************************
	Binds the clickoff events

	Notes
	[1] 	Adds a click event handler to the whole page. When the user clicks
			anywhere on the page it loops through each item in s.clickOffs and
			checks to see if the click occurred outside of that item's element(s).
			If so, it runs that item's action.
	[2]		It's important to use a uniquely named index here. Otherwise when it runs
			the item's action that code might contain a for loop with a generic
			index variable (like i, k, etc.) and then you got problems. Definitely
			learned this the hard way.
	****************************************/
	function bind(){ /*[1]*/
		clearClickOffs();
		$('html').click(function(event) {
			for (var clickIndex=0; clickIndex < s.clickOffs.length; clickIndex++){ /*[2]*/
				if (!$(event.target).closest(s.clickOffs[clickIndex].elements).length){
					s.clickOffs[clickIndex].action();
				}
			}
		});
	}

	/****************************************
	Add items to the clickOffs array

	Notes
	[1]		elements 	- Jquery selector for element(s) 
	[2]		action 		- The function to run when you click off of that element
	****************************************/
	function add(theElements,theAction){
		var thing = {
			elements:theElements, /*[1]*/
			action:theAction /*[2]*/
		};
		var cancel = 0;
		for (var i=0;i<s.clickOffs.length;i++){
			if (thing.elements == s.clickOffs[i].elements){
				cancel = 1;
			}
		}
		if (cancel === 0){
			s.clickOffs.push(thing);
		}
	}

	/****************************************
	Remove item from clickOffs array

	Notes
	[-]		When adding a clickoff element, you can add ClickOff.remove()
			to its action so after it's triggered it removes itself from the 
			clickOffs[] array. Think this through though, if you have multiple
			clickOff's for a given element this can be problematic.
	****************************************/
	function remove(theElements){
		log('removing clickoff listener');
		for (var i = 0; i<s.clickOffs.length; i++){
			if (s.clickOffs[i].elements[0] == theElements[0]){
				log('found it - removing');
				s.clickOffs.splice(i,1);
			}
		}
	}

	/****************************************
	Clear all clickOffs from html. 

	Notes
	[-]		Be careful with this, might be other scripts on the page that 
			rely on global click events.
	****************************************/
	function clearClickOffs(){ /*[4]*/
		$('html').off();
	}

	/****************************************
	Return public API
	****************************************/
	return {
		s:s,
		init:init,
		add:add,
		remove:remove
	};
})();

/**********************************
#DOM-CHANGES

Info
[-] 	This is a module for any misc. DOM changes that don't warrant their own module. 

TODO
[-] 	At this point it's very incomplete, there's a lot in Globals that should be moved here.
**********************************/ 
var DomChanges = (function(){
	'use strict';

	function init(){
		anchorTagFix();
		if ($('.wc-right-content-column.wc-in-body-copy').length > 0) {
			moveRightColumns();
			$.subscribe('window.newMeasurements',function(){
				moveRightColumns();
			})
		}
	}

	/**********************************
	Move Floating Right Columns to the Bottom on Mobile
	**********************************/
	function moveRightColumns(){
		var $rc = $('.wc-right-content-column.wc-in-body-copy').first();
		if(!Globals.s.breakpointChecks.md){
			if($rc.is(':first-child')){
				$('.wc-body-copy').first().append($rc);
			}
		}
		else{
			if(!$rc.is(':first-child')){
				$('.wc-body-copy').first().prepend($rc);
			}
		}
	}

	/**********************************
	A fix for anchor tags. For desktops, the hovering header means that the target is covered up
	so we need to scroll up a bit for each one.

	Notes
	[1] 	Only looking at anchor tags in wc-main-content
	[2] 	Only looking at anchor tags with the name attribute, since that's how ingeniux creates them
			NOTE: apparently the name attribute is deprecated for this, so if Ingeniux ever starts using
			ID's instead we'll need to rebuild this
	[3] 	See _globals.scss for how this class fixes the issue
	**********************************/
	function anchorTagFix(){
		$('.wc-main-content a').each(function(){ /*[1]*/	
			if($(this).attr('name') !== undefined){ /*[2]*/
				$(this).addClass('wc-anchor-fix'); /*[3]*/
			}
		});
	}

	return {
		init:init
	}
})();

/**********************************
#WC-DROPDOWN-SLIDER-CONTROL

Info
	Controls for hiding/showing elements for the dropdown-slider.

Notes
[-]		Obviously Bootstrap does a lot of this, but there is enough that
		we want to do that's slightly different that I decided to create this instead. 
[-] 	Uses Bootstrap's .collapse() method.
[-]		Example Button Markup:
			<button class="wc-dropdown-slider-button wc-profile-slider-button"
				data-target="#wc-profile-slide-1"
				data-button-group="wc-profile-slider-button"
				data-target-group="wc-profile-slide">
[-]		Example Target Markup:
			<div class="wc-dropdown-slide wc-profile-slide collapse in" id="wc-profile-slide-1">
[-]		See the notes for showHide() for how to use the data attributes.
**********************************/

var DropdownSliderControl = (function(){

	/****************************************
	Settings
	****************************************/
	var s = {
		buttons:$('.wc-dropdown-slider-button'),
	};
	
	/****************************************
	Initialize the module
	****************************************/
	function init(){
		bindUIActions();
	}

	/****************************************
	Bind UI actions
	****************************************/
	function bindUIActions(){
		s.buttons.click(function(){
			showHide(this);
		});
	}

	/****************************************
	Shows/hides a target, hides the others

	Notes
	[1]		Points to the thing to show/hide
	[2]		If you want a group of targets to automatically hide when one
			of them is shown, give them all a class and put it in data-target-group.
	[3]		Likewise, if you have a group of buttons that you want to automatically
			untoggle/toggle with the wc-active class when one of them is toggled,
			give them all a class and put it in data-button-group.
	****************************************/
	function showHide(thing){
		var target 			= $(thing).data('target'); /*[1]*/
		var targetGroup 	= $(thing).data('target-group'); /*[2]*/
		var buttonGroup		= $(thing).data('button-group'); /*[3]*/
		$('.'+buttonGroup).removeClass('wc-active');
		$('.'+targetGroup).not(target).collapse('hide');
		$(thing).addClass('wc-active');
		$(target).collapse('show');
	}

	return {
		s:s,
		init:init
	};
})();

/**********************************
#EVENTS-CONTROL

Info
		Handles the events components, pulling in events from the localist API
**********************************/
var EventsControl = (function(){
	'use strict';
	
	/****************************************
	Settings
	****************************************/
	var s = {
		eventComponents:[]
	};

	/****************************************
	Initializes the module

	Notes
	[1] 	params.recurreingEvents determines if we get all occurances of recurring
			events as well as how we display them.
	****************************************/
	function init(){
		$('.wc-events-component').each(function(){
			if($(this).data('eventsParams')){
				var params = $(this).data('eventsParams');
				var eventComponent = {
					element:$(this),
					domList:$(this).find('.wc-events-list').first(),
					params:params,
					recurringEvents:(params.recurringEvents)?params.recurringEvents.toLowerCase():'distinct',
					distinctEvents:(!params.recurringEvents || params.recurringEvents.toLowerCase() === 'distinct')?true:false, /*[1]*/
					events:[]
				}
				s.eventComponents.push(eventComponent);
			}
		});
		for (var i = 0; i < s.eventComponents.length; i++) {
			getEvents(s.eventComponents[i]);
		}
	}

	/**********************************
	Run the AJAX call to get the events from localist

	Notes
	[1] 	Get events for the next year, only grab one instance
			of recurring events.
	**********************************/
	function getEvents(component){
		var paramString = '&days=365';/*[1]*/
		for (var i = 0; i < component.params.types.length; i++) {
			if (component.params.types[i]){
				paramString += '&type[]=' + component.params.types[i];
			}
		}
		for (var i = 0; i < component.params.excludes.length; i++) {
			if (component.params.excludes[i]){
				paramString += '&exclude_type[]=' + component.params.excludes[i];
			}
		}
		if (component.params.featuredOnly === 'true') {
		    paramString += '&featured=true';
		}
		if (component.params.count){
			paramString += '&pp=' + component.params.count;
		}
		if (component.params.match){
			paramString += '&match=' + component.params.match;
		}
		if(component.distinctEvents){
			paramString += '&distinct=true';
		}
		component.queryString = 'https://calendar.whitman.edu/api/2/events?'+paramString+'&callback=?';
		$.getJSON(component.queryString, function (data){
			component.events = data.events;
			prepData(component);
			populateList(component);
		});
	}

	/**********************************
	Prepare the data

	Notes
	[1] 	For compact duplicate dates, need to remove all duplicates and add them to
			the wcInstances array for making the dropdown
	**********************************/
	function prepData(component){
		if(component.recurringEvents === 'compact'){ /*[1]*/
			var unique = [];
			var what = [];
			for (var i = 0; i < component.events.length; i++) {
				var event = component.events[i].event;
				event.wcInstances = [];
				if(unique.indexOf(event.id) === -1){
					var same = $.grep(component.events,function(e){return e.event.id === event.id});
					for (var k = 0; k < same.length; k++) {
						var thisInstance = WcFun.formatDate(new Date(same[k].event.event_instances[0].event_instance.start));
						thisInstance.allDay = same[k].event.event_instances[0].event_instance.all_day;
						event.wcInstances.push(thisInstance);
					}
					event.wc_unique = true;
					unique.push(event.id);
				}
				else{
					event.wc_unique = false;
				}
			}
			component.events = $.grep(component.events,function(e){return e.event.wc_unique});
		}
	}


	/**********************************
	Populate the DOM list
	**********************************/ 	
	function populateList(component) {
		for (var i = 0; i < component.events.length; i++) {
			if (component.events[i]){
				var markup,description,moreDatesMarkup = '';
				var thisEvent 	= component.events[i].event;
				var wcInstances	= (thisEvent.wcInstances)?thisEvent.wcInstances:null;
				var eventDate 	= WcFun.formatDate(new Date(thisEvent.event_instances[0].event_instance.start));
				var ariaLabel 	= thisEvent.title + ', ' + eventDate.month + ' ' + eventDate.day;
				var detailsString = (thisEvent.event_instances[0].event_instance.all_day)?thisEvent.location_name: (thisEvent.location_name.length > 0)? eventDate.time.timeString + ' • ' + thisEvent.location_name:eventDate.time.timeString;

				/**********************************
				Markup for the more dates box (used for the compact recurring events option)
				**********************************/
				if(component.recurringEvents === 'compact' && wcInstances.length > 1){
					moreDatesMarkup = '<div class="wc-more-dates-box">';
					var dateBoxID = $(component.element).attr('id') + '_DateBox' + thisEvent.id;
					moreDatesMarkup += '<span class="wc-date-range">' + wcInstances[0].slashDate + ' - ' + wcInstances[wcInstances.length - 1].slashDate + '</span>';
					moreDatesMarkup += 
						'<button class="wc-more-link wc-more-dates-button collapsed" data-toggle="collapse" data-target="#'+dateBoxID+'">'+
							'<span class="wc-text">View All Dates</span>'+
							'<svg class="wc-spins" viewbox="0 0 32 32" aria-hidden="true"> <use xlink:href="'+Globals.s.svgFilePath+'#icon-arrow-right"></use></svg>'+
						'</button>'+
						'<ul class="collapse" id="'+dateBoxID+'">';
					for (var k = 0; k < wcInstances.length; k++) {
						moreDatesMarkup += '<li>' + wcInstances[k].slashDate + (wcInstances[k].allDay?'':' • ' + WcFun.formatTime(wcInstances[k].date).timeString) + '</li>';
					}
					moreDatesMarkup += '</ul></div>';
				}

				/**********************************
				Markup for home page events list (FeaturedEventsListComponent)
				**********************************/
				if(component.params.format === 'home'){
					markup = 
						'<li>'+
							'<div class="wc-date-box" aria-hidden="true">'+
								'<span class="wc-month">' + eventDate.monthAbv + '</span>'+
								'<span class="wc-day">' + eventDate.day + '</span>'+
							'</div>'+
							'<div class="wc-item-content">'+
								'<a href="' + thisEvent.localist_url + '" class="wc-title-link wc-item-title" aria-label="'+ariaLabel+'">'+ thisEvent.title +'</a>'+
								'<p class="wc-event-details wc-small"><span class="wc-no-flex-date">'+eventDate.month + ' ' + eventDate.day+' </span>' + detailsString + '</p>'+ '</div>'+
						'</li>';
				}

				/**********************************
				Markup for the standard events list (EventsListComponent)
				**********************************/
				else if (component.params.format === 'default'){
					description = WcFun.truncate(thisEvent.description_text,150);
					markup	= '<li>'+
								'<div class="wc-date-box" aria-hidden="true">'+
									'<span class="wc-month">'+eventDate.monthAbv+'</span>'+
									'<span class="wc-day">'+eventDate.day+'</span>'+
								'</div>'+
								'<div class="wc-item-content">'+
									'<a href="' + thisEvent.localist_url + '" class="wc-title-link wc-item-title" aria-label="'+ariaLabel+'">'+ thisEvent.title +'</a>'+
									'<p class="wc-event-details"><span class="wc-no-flex-date">'+eventDate.month + ' ' + eventDate.day+' </span>'+detailsString+'</p>'+
									moreDatesMarkup;
					if (component.params.showAbstracts !== 'false') {
						markup += '<p class="wc-item-description">' + description + '</p>';
					}
					if (component.params.moreLinks != 'false'){
						markup +=  '<a href="'+thisEvent.localist_url+'" class="wc-bb-more-link wc-box-button" aria-label="'+ariaLabel+'">'+
										'<span class="wc-text">More</span>'+
									'</a>';
					}
					markup += '</div></li>';
				}

				else{log('EventsControl error: unrecognized format - '  + component.params.format);}
				component.domList.append(markup);
			}
		};
		if (component.events == null || component.events.length == 0) {
			component.domList.append("<li>No scheduled events to display</li>")
		}
		$.publish('dom.newElements');
	}

	/****************************************
	Return public API
	****************************************/
	return{
		s:s,
		init:init
	};
})();

/**********************************
#GLOBALS

Info
		This is intended to be for JS that applies to various places throughout the website. Over
		time it's also turned into sort of a catch-all for anything that doesn't have its own module.
**********************************/
var Globals = (function(){
	'use strict';

	/****************************************
	Settings 

	Notes
	[1] 	Version number, just for troubleshooting.
	[2]		Bootstrap breakpoints, need to keep these synced with whatever they are in the CSS/SCSS.
			Note that these correspond to the maximum values. E.g. s.breakpoints.xs = $screen-xs-max,
			hence there isn't one for lg.
	[3] 	For checking to see what breakpoint you're at, true = the screen is at least that big. 
	[4] 	Count of lightboxes on the page, just used for giving them unique ID's
	[5] 	An array for storing promises that need to be globally accessible, Ex. psSetup() in masonry-gallery.js
	****************************************/
	var s = {
		v:2, /*[1]*/
		windowWidth:0,
		windowHeight:0,
		headerHeight:0,
		breakpoints:{ /*[2]*/
				xs: 767,
				sm: 1024,
				md: 1199
		},
		breakpointChecks:{ /*[3]*/
			xs:false,
			sm:false,
			md:false,
			lg:false
		},
		currentBreakpoint:undefined,
		isFirefox:false,
		isIE:false,
		ieVersion:0,
		urlParameters:{},
		apiKeys:{},
		footer:$('#wc-footer'),
		contentWrap:$('.wc-content-wrap'),
		bgVideos:[],
		cssFolderPath:undefined,
		jsFolderPath:undefined,
		svgFilePath:undefined,
		lightBoxCount:0, /*[4]*/
		addedScripts:[],
		addedStylesheets:[],
		promises:[] /*[5]*/
	};

	/****************************************
	Initializes the module

	Notes
	[1] 	Just for mobile accordions - hiding things initially that
			shouldn't be hidden for desktop
	[2] 	Collapse these boxes on mobile (ex. sections of the mobile main nav)
			Not sure why this is different from note [1], might want to combine them
			at some point.
	[3] 	Set the max height for lightboxes
	[4] 	Check for high contrast URL parameter
	[5] 	Trigger the newElements binding
	****************************************/
	function init(){
		getUrlParameters();
		getAPIKeys();
		browserDetect();
		miscSetup();
		initCollapse();
		updateMeasurements();
		bindings();
		sameHeight();
		addCaptions();
		lightboxSetup();
		applyEllipsis();
		randomBGImage();
		videoBackgrounds();

		if(s.windowWidth <= s.breakpoints.xs){ /*[1]*/
			$('.wc-mobile-default-collapse').collapse('hide'); 
		}

		if(!s.breakpointChecks.md){ /*[2]*/
			$('.wc-mobile-collapse-box').addClass('collapse');
		}

		addCSS('.wc-lightbox img{max-height:'+Math.floor((s.windowHeight * 0.9)) +'px;}'); /*[3]*/

		if(s.urlParameters['hc'] === '1'){ /*[4]*/
			highContrast();
		}

		$.publish('dom.newElements'); /*[5]*/
	}

	/**********************************
	Misc setup things

	Notes
	[1][2][3] 	Get these paths so it's independent of how Ingeniux links to them.
	[4] 		This should be at the bottom of layout.cshtml
	**********************************/
	function miscSetup(){
		var mainCSSLink = $('head link').filter('link[href*="wc-style.css"]')[0];
		if(mainCSSLink && mainCSSLink.href.length > 0){
			s.cssFolderPath = mainCSSLink.href.substring(0,mainCSSLink.href.indexOf('wc-style')); /*[1]*/
		}
		else{
			log('Globals.miscSetup error: wc-styles.css not found');
		}
		var mainJSLink = $('#wc-scripts-tag')[0];
		if(mainJSLink && mainJSLink.src.length > 0){
			s.jsFolderPath =  mainJSLink.src.substring(0,mainJSLink.src.indexOf('wc-scripts')); /*[2]*/
		}
		else{
			log('Globals.miscSetup error: wc-sripts.css not found');
		}
		var svgPathSpan = $('#wc-svg-path'); /*[3][4]*/
		if (svgPathSpan) {
			s.svgFilePath = svgPathSpan.data('svgPath');
		}
	}

	/**********************************
	Event handlers

	Notes
	[1] 	Adds a "click off" listener so quick links will close when you click off
			of it.
	**********************************/
	function bindings(){
		ClickOff.add($('#wc-quick-links-links, #wc-quick-links-button'),function(){ /*[1]*/
			$('#wc-quick-links-links').collapse('hide');
		});


		/**********************************
		When the window is resized, update things accordingly
		**********************************/
		$(window).resize($.throttle(500,function(){
				updateMeasurements();
			})
		);
		$.subscribe('window.newMeasurements',function(){
			cleanUp();
			sameHeight();
		})

		/**********************************
		When elements are added to the DOM , update things accordingly. 

		Notes
		[-] 	This means you need to add $.publish('dom.newElements') in your code whenever
				you add stuff
		[1] 	Remove the focus styles after you click on a button. This shouldn't interfere with
				keyboard focus.
		**********************************/
		$.subscribe('dom.newElements',function(){
			$.each(document.getElementsByTagName('button'), function(i,e) { /*[1]*/
				e.onmouseup = function(){this.blur();}
			});
			sameHeight();
		})

		/**********************************
		Collapsed Navigation Stuff

		Notes
		[-] 	Example: the navigation on the landing pages
		[1] 	Toggling a class to make the navigation opaque when it's open. Using
				bootstrap's events here to keep it synched with bootstrap's collapse method.
		[2] 	When you expand a submenu, close the other ones. Trying to keep the menu from
				getting too long, only works for the first level of submenus.
		[3] 	Resize the page so the section nav never goes below the bottom of it.
		**********************************/
		var $navRow = $('.wc-collapsed-nav-row').first();
		if(s.breakpointChecks.sm && $navRow.length > 0){
			var $innerBox = $navRow.find('#wc-left-column-inner-box');
			var $leftCol = $('#wc-left-column');
			$innerBox
				.on('show.bs.collapse',function(e){ /*[1]*/
					if($innerBox.get(0) === e.target){
						$leftCol.addClass('wc-collapsed');
					}
				})
				.on('hide.bs.collapse',function(e){
					if($innerBox.get(0) === e.target){
						$leftCol.removeClass('wc-collapsed');
					}
				});
			ClickOff.add($leftCol,function(){
				$innerBox.collapse('hide');
			});
			$navRow.find('.wc-section-nav-list>li>.wc-nav-expander').click(function(){/*[2]*/
				var $clickedBtn = $(this);
				$navRow.find('.wc-section-nav-list>li>.wc-nav-expander:not(.collapsed)').each(function(){
					if($(this).get(0) != $clickedBtn.get(0)){
						$(this).get(0).click();
					}
				});
			});
			$innerBox.on('shown.bs.collapse hidden.bs.collapse',function(e){ /*[3]*/
				var minHeight = ($leftCol.height() - $('.wc-footer').height() + 50);
				minHeight = minHeight<1?1:minHeight;
				$('.wc-expand-for-nav').first().css({
					'min-height':minHeight +'px'
				});
			});
		}
		collapseButtons();
		clickTriggers();
	}

	/**********************************
	Collapse Buttons - our custom collapse function.

	Note
	[-] 	This is our own custom collapse/expand function. We're also still using the
			bootstrap collapse function in several places because it handles expanding to
			a non-static height element pretty well.
	[-] 	Making this a separate function so it can be called again later for elements
			that are added to the DOM by JS.
	[1] 	Note that this might be multiple id's/classes.
	**********************************/
	function collapseButtons($e){
		if(!$e){
			$e = $('.wc-collapse-button');
		}
		$e.click(function(){
			var targetSelector = $(this).data('target'); /*[1]*/
			$(targetSelector).toggleClass('wc-collapsed');
		});
	}

	/**********************************
	Click Triggers - things you click on that click on other things when you click on them

	Notes
	[-] 	Making this a separate function so it can be called again later for elements
			that are added to the DOM by JS.
	**********************************/	
	function clickTriggers($e){
		if(!$e){
			$e = $('.wc-click-trigger');
		}
		$e.click(function(){
			var targetSelector = $(this).data('target');
			$(targetSelector).click();
		})
	}

	/****************************************
	Measure things (like the window size)
	
	Notes
	[-]		Can't use $(window).width() / .height() because it fails to account
			for scrollbars.
	[1] 	Only tiggering this after we confirm there's been a change. Would like to 
			check height here too, but scrolling on mobile seems to return a change in
			height for some reason.
	[2] 	Note that this does not account for scrollbars. Using it instead of
			window.innerWidth because that yields inconsistent measurements on
			mobile Safari
	[3]		Check to see what css breakpoint you're at
	[4] 	Publish this event so other modules can watch for it
	****************************************/
	function updateMeasurements(){
		var thing1 = window,
			thing2 = 'inner';
		if (!('innerWidth' in window )) {
			thing2 = 'client';
			thing1 = document.documentElement || document.body;
		}
		var tempwidth = thing1[ thing2+'Width' ];
		if(s.windowWidth != tempwidth){ /*[1]*/
			s.windowWidth = tempwidth;
			s.windowHeight = $(window).height();/*[2]*/
			s.headerHeight = $('#wc-site-header').height();
			s.breakpointChecks.lg = ($('#wc-breakpoint-check-lg').css('display') === 'block'); /*[3]*/
			s.breakpointChecks.md = ($('#wc-breakpoint-check-md').css('display') === 'block');
			s.breakpointChecks.sm = ($('#wc-breakpoint-check-sm').css('display') === 'block');
			s.breakpointChecks.xs = ($('#wc-breakpoint-check-xs').css('display') === 'block');
			if(s.breakpointChecks.lg){s.currentBreakpoint = 'lg';}
			else if(s.breakpointChecks.md){s.currentBreakpoint = 'md';}
			else if(s.breakpointChecks.sm){s.currentBreakpoint = 'sm';}
			else if(s.breakpointChecks.xs){s.currentBreakpoint = 'xs';}
			$.publish('window.newMeasurements'); /*[4]*/
		}
	}

	/****************************************
	Shift margins/sizes of things according to the browser size
	
	Notes
	[1] 	If the search options have been shown/hidden in desktop view,
			this resets them for mobile view.
	****************************************/
	function cleanUp(){
		if (s.windowWidth > s.breakpoints.sm){
			MenuControl.mobileSearchToggle('reset');
			MenuControl.mobileNavToggle('reset');
		}

		/**********************************
		Apply ellipsis
		**********************************/
		applyEllipsis();

		/**********************************
		Resize the home page video on smaller screens

		Notes
		[1] 	Remember to update this if you change it in the CSS
		[2] 	Keeps it at less than 65% of the total height of the window
		**********************************/
		var videoInitHeight = 620;/*[1]*/
		if(($('#wc-main-feature').height() < 620 || $('#wc-main-feature').height() > (s.windowHeight * 0.7)) && s.windowWidth > s.breakpoints.sm){
			var max = videoInitHeight, min = 250;
			var newHeight = (s.windowHeight * 0.65) > max ? max:(s.windowHeight * 0.65) < min ? min: (s.windowHeight * 0.65);/*[2]*/
			$('#wc-main-feature').height(newHeight);
		}

		/**********************************
		Move components in the left column for mobile

		Notes
		[1] 	If they're link lists, leave them there
		**********************************/
		if(!s.breakpointChecks.sm){
			var componentRows = $('#wc-left-column .wc-component-row');
			for (var i = 0; i < componentRows.length; i++) {
				if($(componentRows[i]).find('.wc-link-list-component').length < 1){ /*[1]*/
					$(componentRows[i]).appendTo('#wc-reader-content');
				}
			}
		}
	}

	/**********************************
	Browser Detection

	Info
			Using modernizr's feature detection as much as possible, but there are some things it can't 
			check for...

	Notes
	[1] 	...like when a browser has dropdown arrows for its select elements that look terrible with
			a border-radius because they're from 1995 (*cough* firefox).
	[2] 	Setting s.ieVersion to 99 for any version of IE past 10 since it's hard to get
			that from the ua string.
	**********************************/ 
	function browserDetect(){
		var ua = window.navigator.userAgent;
		s.isFirefox = ua.toLowerCase().indexOf('firefox') > -1; /*[1]*/
		if (s.isFirefox){
			$('html').addClass('firefox');
		}

		var msIEIndex 		= ua.toLowerCase().indexOf("msie");
		var tridentIndex 	= ua.toLowerCase().indexOf("trident");
		if (msIEIndex > -1 || tridentIndex > -1){
			s.isIE = true;
			$('html').addClass('ie-yes');
			if (msIEIndex > -1){
				s.ieVersion = parseInt(ua.substring(msIEIndex + 5, ua.indexOf(".", msIEIndex)));
			}
			else{
				s.ieVersion = 99;
			}
			ieFixes();
		}
		else{
			s.isIE = false;
		}
	}

	/**********************************
	Misc Fixes for Internet Explorer
	**********************************/
	function ieFixes(override){
		var ieClass = 'ie-';
		if(s.ieVersion === 99){
			ieClass+='11+';
		}
		else if(s.ieVersion < 9){
			ieClass+='old';
		}
		else{
			ieClass+=s.ieVersion;
		}
		$('html').addClass(ieClass);
		

		/**********************************
		Fix for IE9's css selector limit

		Info
			IE9 has a per-file css selector limit of 4096. To deal with this, grunt makes a copy of the wc-styles.css file
			and breaks it into chunks that are smaller than that. Then we use this JS to link to those files in the 
			head if the browser is IE9 or below.

		Notes
		[1]		If we ever need more files than 2 *shudder*, update this array with the new file names. 
		[2] 	First check to see if the split CSS files are there
		[3] 	...if they are then remove the original css file
		[4] 	...and add the new ones.
		**********************************/
		if (s.ieVersion < 10 || override === true){
			var ieCSSFiles = [
				'wc-style_part_1.css',/*[1]*/
				'wc-style_part_2.css'
			];
			checkUrl(s.cssFolderPath + ieCSSFiles[1], function(m){/*[2]*/
				if(m === 'success'){
					$(mainCSSLink).remove(); /*[3]*/
					for (var i = 0; i < ieCSSFiles.length; i++) {/*[4]*/
						var path 	= s.cssFolderPath + ieCSSFiles[i];
						var link 	= document.createElement('link');
						link.rel  	= 'stylesheet';
						link.type 	= 'text/css';
						link.href 	= path;
						link.media 	= 'all';
						document.getElementsByTagName('head')[0].appendChild(link);
					}
				}
			});
		}
	}

	/**********************************
	Check to see if a URL is broken or not
	**********************************/
	function checkUrl(url,callback){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if(xhr.status < 400){
					callback('success');
				}
				else{
					callback('fail');
				}
			}
		};
		xhr.open('HEAD', url);
		xhr.send();
	}

	/**********************************
	Get URL/GET parameters

	Notes
	[1] 	Converts all parameter names to lower-case
	**********************************/
	function getUrlParameters(){
		/**********************************
		Credit: @gion_13 - http://stackoverflow.com/questions/12049620/how-to-get-get-variables-value-in-javascript
		**********************************/
		if(document.location.toString().indexOf('?') !== -1) {
			var query = document.location.toString()
				.replace(/^.*?\?/, '')
				.replace(/#.*$/, '')
				.split('&');
			for(var i=0, l=query.length; i<l; i++) {
			   var aux = decodeURIComponent(query[i]).split('=');
			   s.urlParameters[aux[0].toLowerCase()] = aux[1]; /*[1]*/
			}
		}

		/**********************************
		Update URL parameters when somebody hits "back"
		
		Notes
		[1] 	If we've edited the history with addUrlParameter(), then hitting the
				back button will yield a 'popstate' event, but it won't actually reload
				the page.
		[2] 	We use this event to retrieve the urlParameters object that we stored
				in the state object (see note [3] in urlParameters()), then we can update
				Globals.s.urlParameters and use those values to update hte page accordingly
		**********************************/
		$(window).on('popstate',function(e){ /*[1]*/
			var state = e.originalEvent.state;
			if(state && state.hasOwnProperty('urlParameters')){ /*[2]*/
				s.urlParameters = state['urlParameters'];
				$.publish('window.back-popstate');
			}
			
		});
	}

	/**********************************
	Get API Keys from meta tags

	Notes:
	[-] 	So we can keep our production and dev keys separate:
	**********************************/ 
	function getAPIKeys(){
		$('meta[name=APIKey]').each(function(){
			var arr = $(this).attr('content').split(':');
			s.apiKeys[arr[0]] = arr[1];
		})
	}

	/**********************************
	Gives all child elements the same height

	Notes
	[-] 	Two ways of using this
			- 	.wc-same-height-children: give all child elements the same height
			- 	.wc-same-height-group-X: where X is a letter of the alphabet, give
				all elements with that class (not their children) the same height
	[-] 	Note that this use to use the class .wc-same-height but it no longer does
	[1] 	Grouped by classes, works with .wc-same-height-group- and any letter
			of the alphabet
	[2]  	We only want to do this for the bigger breakpoints
	[3] 	Using the imagesLoaded plugin - http://imagesloaded.desandro.com/
	[4]		Need to reset their height first, in case this function has already 
			run (like when resizig a window)
	**********************************/
	function sameHeight(){
		var groups = [];
		var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; /*[1]*/
		alphabet.forEach(function(l){
			if($('.wc-same-height-group-' + l).length !== 0){
				groups.push($('.wc-same-height-group-' + l));
			}
		})
		$('.wc-same-height-children').each(function(){
			groups.push($(this).children());
		})
		groups.forEach(function($g){
			if (s.windowWidth >= s.breakpoints.xs) { /*[2]*/
				$g.imagesLoaded().always(function() { /*[3]*/
					var height = 0;
					$g.each(function(){
						$(this).height(''); /*[4]*/
						if(height < $(this).height() ){
							height = $(this).height();
						}						
					});
					$g.each(function(){
						$(this).height(height);
					})
				});
			}
		})
	}

	/**********************************
	Load Background Videos

	Notes
	[1] 	No video for mobile or IE
	[2] 	Play at randomize starting points
	[3][4]	Wait until the video has started playing at the statpoint before showing everything
	[5][6] 	Need both of these because if they don't have JS enabled the stupid html video controls
			still show up in Chrome
	[7] 	Pause the video when the user moves to a different tab. Play again when they return
	**********************************/
	function videoBackgrounds(){
		$('.wc-video-background').each(function(){
			var params = $(this).data('bgVidParams');
			if(!params || !params.fallbackImageBox){
				revert('Video Error: insufficient parameters');
				return false;
			}
			s.bgVideos.push(params);
			var i = 0;
			var theVideo = $(params.theVideo);
			theVideo.on('error',function(){
				theVideo.remove();
				revert('Video failed to load');
			});

			if(s.windowWidth > s.breakpoints.sm && !s.isIE){ /*[1]*/
				var path = '';
				if(Modernizr.video && Modernizr.video.webm && params.videoPaths.webm){
					path = params.videoPaths.webm;
				}
				else if(Modernizr.video && Modernizr.video.ogg && params.videoPaths.ogg){
					path = params.videoPaths.ogg;
				}
				else if(Modernizr.video && Modernizr.video.h264 && params.videoPaths.h264){
					path = params.videoPaths.h264;
				}
				else{
					theVideo.remove();
					revert('No working video format');
				}
				if(params.startTimes && params.startTimes.length > 0){ /*[2]*/
					var time = params.startTimes[Math.floor(Math.random()*params.startTimes.length)];
					path += '#t=' + time;
					theVideo.on('timeupdate',function(){ /*[3]*/
						if(theVideo.get(0).currentTime > time){
							theVideo.css({'opacity':'1'}); /*[5]*/
							$(params.fallbackImageBox).css({
								'transition': 'all .3s',
								'opacity':'1'}); /*[6]*/
							theVideo.off('timeupdate');
						}
					});
				}
				else{
					theVideo.on('timeupdate',function(){ /*[4]*/
						if(theVideo.get(0).currentTime > 0){
							theVideo.css({'opacity':'1'});
							$(params.fallbackImageBox).css({
								'transition': 'all .3s',
								'opacity':'1'});
							theVideo.off('timeupdate');
						}
					});
				}
				theVideo.attr('src',path);
				$(document).on({/*[7]*/
					'show':function(){theVideo.get(0).play();},
					'hide':function(){theVideo.get(0).pause();}
				});
			}
			else{
				theVideo.remove();
				revert();
			}

			function revert(message){
				if(message){log(message);}
				if(params && params.fallbackImageBox){
					$(params.fallbackImageBox).css({
						'transition': 'all .3s',
						'opacity':'1'});
				}
			}
		});
	}


	/**********************************
	Random background images

	Notes
	[1] 	In the <script> tag we hide the element and then show it here, that way
			we can have a fallback bg image for people with js turned off, and it
			won't flash before switching to the randomized image.
	**********************************/
	function randomBGImage(){
		$('.wc-random-bg-image').each(function(){
			try{
				var images = $(this).data('bgImages');
				var i = WcFun.randomInt(0,images.length - 1 );
				$(this).css({'background-image':'url("'+images[i]+'")'});
				$(this).css('visibility', 'visible');
			}
			catch(e){
				log('randomBGImage() error: ' + e);
			}
		});
	}
	

	/**********************************
	A function for using an Ingeniux folder URL in javascript. 

	Example - igxUrl('some/folder?Preview=true&IncludeAllPages=true','/filename.png') => 'some/folder/filename.png?Preview=true&IncludeAllPages=true'

	See the map tiles in map-control.js for one place it's being used
	**********************************/
	function igxUrl(url,str){
		var newUrl;
		if(url.indexOf('?') !== -1){
			newUrl = url.slice(0,url.indexOf('?')) + str + url.slice(url.indexOf('?'),url.length);
		}
		else{
			newUrl = url + str;
		}
		return(newUrl);
	}


	/****************************************
	Open .pdfs, .docs and non-whitman urls in new window
	****************************************/
	$("a[href^='http']").each(function() {
		if ($(this).attr("href").indexOf("whitman.edu") == -1) {
			$(this).attr("target", "_blank");
		}
	});
	$('a[href$=".doc"], a[href$=".pdf"]').attr('target', '_blank');


	/***************************************
	Video Component - call fitvids to enable responsive video 

	Notes
	[-] 	For this to work well, you probably need the iframe to have height and
			width properties (like it does by default when copying from youtube)
	[1] 	You can use fitvids on other iframes by adding the .wc-fit-vids class to
			the iframe
	[2] 	...or you can add .wc-fit-vids-box class to the parent, since for some
			reason Ingeniux's tinyMCE implementation strips classes off of 
			iframes.
	***************************************/
	$(".wc-content-wrap").fitVids();
	$(".wc-content-wrap").fitVids({ /*[1]*/
		customSelector: ".wc-fit-vids"
	});
	$(".wc-fit-vids-box").fitVids({ /*[2]*/
		customSelector: "iframe"
	});

	/**********************************
	Add captions to any images with a .wc-caption... classes

	Notes
	[1] 	Need to wait until all images are loaded before this runs, otherwise firefox (and
			maybe safai?) return incorrect measurements.
	[2] 	Wrap the image in a div, and give the div the same css and classes as the image
	[3] 	Remove the image's css and classes because we've added them to the containing
			DIV instead
	**********************************/
	function addCaptions(){
		var images = $('.wc-caption-image, .wc-caption-image-left, .wc-caption-image-right');
		$(window).load(function(){ /*[1]*/
			for (var i = 0; i < images.length; i++) {
				var image = $(images[i]);
				image.wrap('<figure style="'+WcFun.emptyIfNull(image.attr('style'))+ ' width:' + image.outerWidth()+'px;" class="'+WcFun.emptyIfNull(image.attr('class'))+'"></figure>');/*[2]*/
				image.attr('style','').attr('class',''); /*[3]*/
				if(image.attr('title')){
					image.parent().append('<figcaption class="wc-image-caption">'+image.attr('title')+'</figcaption>');
				}
			}
		});
	}

	/**********************************
	Setup Lightboxes

	Info
			Uses Bootstrap's modal plugin. Loops through all of the lightbox links on the page
			and makes lightboxes for the images inside them.

	Notes
	[1] 	You can pass it a specific element to create a lightbox for, otherwise it
			runs for all lightbox links on a page.
	[2] 	Uses the image the link points to for the lightbox image
	[3] 	If the link doesn't point to an image, use the image itself as a fallback
	[4] 	Build the lightbox
	[5] 	Using s.lightBoxCount for unique ID's instead of a timestamp becuase the timestamp was
			still resulting in duplicate ID's
	[6] 	Bind the modal method to the lightbox links
	**********************************/
	function lightboxSetup(element){
		var lbLinks = $();
		if (element){
			lbLinks = lbLinks.add(element); /*[1]*/
		}
		else{
			lbLinks = $('a.wc-lightbox-link');
		}
		for (var i = 0; i < lbLinks.length; i++) {
			if($($(lbLinks[i]).find('img')).length > 0){
				var image = $($(lbLinks[i]).find('img')).first();
				var bigImagePath = $(lbLinks[i]).attr('href'); /*[2]*/
				var urlChecks = ['http://#','https://#','#'];
				var useFallback = 0;
				for (var k = 0; k < urlChecks.length; k++) { 
					if(bigImagePath === urlChecks[k]){
						useFallback++;
					}
				}
				if(useFallback > 0){
					bigImagePath = image.attr('src'); /*[3]*/
				}
				var captionMarkup = (image.attr('title') && image.attr('title').length > 0)?'<p class="wc-image-caption">'+image.attr('title')+'</p>' :'';
				var lightBox = $( /*[4]*/
					'<div class="modal fade wc-modal" id="wc-lightbox-'+s.lightBoxCount+'" tabindex="-1" role="dialog" aria-labelledby="ImageLightbox">'+ /*[5]*/
						'<div class="wc-lightbox">'+
							'<img  src="'+bigImagePath+'">'+
							captionMarkup+
						'</div>'+
					'</div>');
				$('body').append(lightBox);
				$(lbLinks[i]).data({'lightBoxID':s.lightBoxCount});
				$(lbLinks[i]).click(function(event){ /*[6]*/
					event.preventDefault();
					var lightBoxID = $(this).data('lightBoxID');
					if(!isNaN(lightBoxID)){
						$('#wc-lightbox-' + lightBoxID).modal({keyboard:true});
					}
				});
				s.lightBoxCount++;
			}
		}
	}
	

	/**********************************
	Ellipsis - truncates text in an element

	Notes
	[-] 	To use these, you'll need to explicitely give the element data-ellipsis-X values
			for every breakpoint you want ellipsis for.
			e.g. <p class="wc-description" data-ellipsis-xs="80" data-ellipsis-sm="100"...> 
	**********************************/
	function applyEllipsis(){
		if(s.breakpointChecks.lg){
			$('[data-ellipsis-lg]').each(function(){
				var count = $(this).attr('data-ellipsis-lg');
				if (count < $(this).text().length){
					$(this).text($(this).text().substring(0,count) + '...');
				}
			});
		}
		else if(s.breakpointChecks.md){
			$('[data-ellipsis-md]').each(function(){
				var count = $(this).attr('data-ellipsis-md');
				if (count < $(this).text().length){
					$(this).text($(this).text().substring(0,count) + '...');
				}
			});
		}
		else if(s.breakpointChecks.sm){
			$('[data-ellipsis-sm]').each(function(){
				var count = $(this).attr('data-ellipsis-sm');
				if (count < $(this).text().length){
					$(this).text($(this).text().substring(0,count) + '...');
				}
			});
		}
		else if(s.breakpointChecks.xs){
			$('[data-ellipsis-xs]').each(function(){
				var count = $(this).attr('data-ellipsis-xs');
				if (count < $(this).text().length){
					$(this).text($(this).text().substring(0,count) + '...');
				}
			});
		}
	}

	/**********************************
	Apply Hight Contrast Styles
	**********************************/
	function highContrast(){
		var link 	= document.createElement('link');
		link.rel  	= 'stylesheet';
		link.href 	= s.cssFolderPath + 'wc-high-contrast.css';
		$('head').append(link);
	}


	/**********************************
	Check if an image has finished loading
	**********************************/
	function checkImageLoaded(img){
		if (!img.complete) {
			return false;
		}
		if (typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0) {
			return false;
		}
		return true;
	}

	/**********************************
	Returns a promise that resolves when the image is loaded
	**********************************/
	function imageLoaded(img){
		return new Promise(function(resolve,reject){
			var checkInterval = setInterval(function(){
					if(checkImageLoaded(img)){
						clearInterval(checkInterval);
						resolve();
					}
				},50);
		});
	}

	/****************************************
	Just a console.log() function for debugging.
	****************************************/
	function log(thing){
		if (s.isIE === false || s.ieVersion >= 10){
			if(s.urlParameters['dev'] === '1'){
				console.log(thing);
			}
		}
	}

	/**********************************
	Add a parameter to the URL

	Notes
	[1] 	Add the new variable to the array of existing URL parameters
	[2] 	Rebuild the URL with the updated list of URL parameters, this way 
			we don't lose any when we add a new one.
	[3] 	Adding the url parameters to the state object, so they can be retrieved
			if somebody uses the "back" button.
	**********************************/
	function addUrlParameter(name, val){
		if(WcFun.nullIfEmpty(val)){
			s.urlParameters[name] = val; /*[1]*/
		}
		else{
			delete s.urlParameters[name];
		}
		var newUrl = window.location.pathname;
		if(Object.keys(s.urlParameters).length > 0){ /*[2]*/
			newUrl+= '?';
			Object.keys(s.urlParameters).forEach(function(key,i){
				if(i>0){
					newUrl+='&';
				}
				newUrl += (key + '=' + s.urlParameters[key]);
			});
		}
		if (s.isIE === false || s.ieVersion >= 10){
			history.pushState({'urlParameters':s.urlParameters}, 'Map', newUrl); /*[3]*/
		}
	}


	/**********************************
	Remove a url parameter
	**********************************/
	function removeUrlParameter(name){
		addUrlParameter(name,'');
	}

	/**********************************
	Adds new css rules

	Notes
	[-] 	You probably don't want to add this to clean() or anything else that fires repeatedly, otherwise
			you're going to have tons of divs added with conflicting CSS rules, and that's just tacky.
	**********************************/
	function addCSS(rule){
		var div = $('<div />',{
				html: '<style>' + rule + '</style>',
				class:'wc-style-box'
			})
			.attr('aria-hidden','true')
			.appendTo('body');
	}

	/**********************************
	Append a stylesheet to the head

	Notes
	[-] 	Note that these styles won't take effect unti lafter all JS has run
	[-] 	Tried numerous approaches to having a callback when the stylesheet was
			loaded, or even just confirming that the url was valid before loading it,
			never found a good solution. See https://www.wrike.com/open.htm?id=114779499
	**********************************/
	function addStylesheet(url){
		if(url.indexOf('http') !== 0){
			url = s.cssFolderPath + url;
		}
		var abort = 0;
		if(s.addedStylesheets.indexOf(url) === -1){
			$('head').find('link').each(function(){
				if($(this).attr('href') === url){
					abort ++;
				}
			});			
			if(abort === 0){
				var link = $('<link>',{href:url,rel:'stylesheet'});
				$('head').append(link);
				s.addedStylesheets.push(url);
			}
		}
	}

	/**********************************
	Add a script

	Notes
	[-] 	This returns an ES6 promise
	[1] 	Add the prebuilt folder path if it's one of our scripts
	[2] 	Using $.ajax instead of $.getScript() here so we can use caching. 
	[3] 	Aside from the logged error we want this to still return a success 
			so it doesn't thwart callbacks.
	**********************************/
	function addScript(url){
		return new Promise(function(resolve,reject){
			if(url.indexOf('http') !== 0){
				url = s.jsFolderPath + url; /*[1]*/
			}
			if(s.addedScripts.indexOf(url) === -1){
				s.addedScripts.push(url);
				$.ajax({ /*[2]*/
						url: url,
						dataType: 'script',
						cache: true
					})
					.done(function(){
						resolve();
					})
					.fail(function(){
						log('Globals.addScript Error: failed to load this script - ' + url);
						reject();
					});
			}
			else{
				log('Globals.addScript: script already added - '  + url);
				resolve(); /*[3]*/
			}
		});
	}

	/**********************************
	Add a group of scripts/stylesheets

	Info
	[-] 	Pass this funciton an array of JS and CSS file urls and it will load them all
			and return a promise that resolves after all of the JS files are loaded. See
			image-gallery-control for an example of how it's used.
			
	Notes
	[1] 	Note that there's no promise/callback for these, so the success/failure of
			loading the css files doesn't effect this at all (see notes for addStylesheet)
	[2] 	Note that if any of these fail this promise fails, even though some might
			have succeeded in loading
	**********************************/
	function getStuff(urls){
		return new Promise(function(resolve,reject){
			var urls_css = urls.filter(function(u){return u.indexOf('.css') !== -1});
			var urls_js = urls.filter(function(u){return u.indexOf('.js') !== -1});
			urls.forEach(function(s){
				if(urls_js.indexOf(s) === -1 && urls_css.indexOf(s) === -1){
					log('Globals.getStuff Error: don\'t recognize this url as CSS or JS - ' + s);
				}
			})
			if(urls_css.length > 0){
				urls_css.forEach(function(url){
					addStylesheet(url); /*[1]*/
				})				
			}
			if(urls_js.length > 0){
				var jsPromises = [];
				urls_js.forEach(function(url){
					jsPromises.push(addScript(url));
				})
				Promise.all(jsPromises) /*[2]*/
					.then(resolve)
					.catch(reject);
			}
			else if (urls_css.length > 0){
				resolve();
			}
			else{
				log('Globals.getStuff Error: no files provided were recognized as JS or CSS');
				reject();
			}
		});
	}

	/****************************************
	Return public API
	****************************************/
	return{
		s:s,
		getWindowWidth:function(){return s.windowWidth;},
		getWindowHeight:function(){return s.windowHeight;},
		breakpoints:s.breakpoints,
		breakpointChecks:s.breakpointChecks,
		videoBackgrounds:videoBackgrounds,
		init:init,
		log:log,
		addCSS:addCSS,
		updateMeasurements:updateMeasurements,
		igxUrl:igxUrl,
		lightboxSetup:lightboxSetup,
		addUrlParameter:addUrlParameter,
		removeUrlParameter:removeUrlParameter,
		ieFixes:ieFixes,
		checkImageLoaded:checkImageLoaded,
		imageLoaded:imageLoaded,
		addStylesheet:addStylesheet,
		addScript:addScript,
		getStuff:getStuff,
		sameHeight:sameHeight,
		collapseButtons:collapseButtons,
		clickTriggers:clickTriggers
	};
})();

/**********************************
#IMAGE-GALLERY-CONTROL

Info
[-] 	This is the module for managing our image galleries. Most of 
		the relevant code for how image galleries work is is in
		objects/image-gallery.js, this is primarily for finding them on
		a page and setting them up.
**********************************/
var ImageGalleryControl = (function(){
	'use strict';

	/**********************************
	Settings
	**********************************/
	var s = {
		componentClass:'.wc-image-gallery-component',
		galleries:[]
	};

	/**********************************
	Initialize the module
	**********************************/
	function init(){
		findGalleries();
		s.galleries.forEach(function(g){
			g.mgPreSetup();
			g.mgShowLoader();
			g.getData().then(function(){
				g.buildTiles();
				return g.mgSetup();
			}).then(function(){
				return g.mgAddTiles();
			}).then(function(){
				return g.psSetup();
			}).catch(function(error){
				log('Image Gallery Error: error setting up the gallery ' + g.state.id);
				log(error);
			});
		})
	}

	/**********************************
	Find any galleries on the page and create objects for them
	**********************************/
	function findGalleries(){
		$(s.componentClass).each(function(){
			var params = $(this).data('igParams');
			if(params){
				params.googleAPIKey = Globals.s.apiKeys.GoogleDrive;
				var g = ImageGallery(params,$(this));
				s.galleries.push(g);
			}
		})
	}

	return {
		s:s,
		init:init
	}
})();

/**********************************
#INSTAGRAM-GALLERY-CONTROL

Notes
[-] 	This is the module for managing our instagram galleries. Most of 
		the relevant code for how instagram galleries work is is in the instagram gallery
		factory function - objects/instagram-gallery.js. This module is primarily for
		finding them on a page and setting them up.
**********************************/
var InstagramGalleryControl = (function(){
	'use strict';

	var s = {
		galleryClass:'.wc-instagram-box',
		galleries:[]
	}

	function init(){
		findComponents();
		s.galleries.forEach(function(g){
			g.init();
		})
	}

	function findComponents(){
		$(s.galleryClass).each(function(){
			if(!$(this).attr('id')){
				$(this).attr('id','wc-instagram-gallery_auto_'+s.galleries.length);
			}
			var params = $(this).data('instagramParams');
			if(params){
				var g = InstagramGallery(params,$(this));
				s.galleries.push(g);
			}
		})
	}

	return {
		s:s,
		init:init
	}
})();

/**********************************

#KEY-CONTROL

Info
		Keyboard Shortcut Controller, for adding/removing keyboard shortcuts.

**********************************/

var KeyControl = (function(){


	/****************************************
	Settings
	****************************************/
	var s = {
		keys:[]
	};


	/****************************************
	Initializes the module
	****************************************/
	function init(){
		bind();
	}


	/****************************************
	Bind event handler

	Notes
	[-]		When a key is pressed, searches though the keys array for 
			a match and executes the appropriate action.
	[1]		Note the default action is always removed
	****************************************/
	function bind(){
		$(document).keydown(function(e){
			if (!$('input').is(':focus')){
				for (var kdIndex = 0;kdIndex<s.keys.length;kdIndex++){
					if (s.keys[kdIndex].keyCode == e.which){
						s.keys[kdIndex].action();
						e.preventDefault();/*[1]*/
					}
				}
			}
		});
	}


	/****************************************
	Add a new shortcut

	Notes
	[1]		keyCode	- the code for the key that's pressed
	[2]		action 	- the function to run when that key is pressed
	****************************************/
	function add(theCode,theAction){
		var key = {
			keyCode:theCode,
			action:theAction
		};
		var cancel = 0;
		for (var i=0;i<s.keys.length;i++){
			if (s.keys[i].keyCode == key.keyCode){
				cancel = 1;
				log('KeyControl Error: key '+ key.keyCode+' already has an action associated with it.');
			}
		}
		if (cancel === 0){
			s.keys.push(key);			
		}
	}


	/****************************************
	Remove a shortcut
	****************************************/
	function remove(theCode){
		for (var i=0;i<s.keys.length;i++){
			if (s.keys[i].keyCode == theCode){
				s.keys.splice(i,1);
			}
		}
	}

	/****************************************
	Logs the code of all keys pressed - useful for development/debugging
	****************************************/
	function logCode(){
		$(document).keydown(function(e){
			log(e.which);
		});
	}

	/****************************************
	Return public API
	****************************************/
	return {
		s:s,
		init:init,
		add:add,
		remove:remove,
		logCode:logCode
	};
})();

/*******************************
Map Control

Notes
[-] 	Terms
			Features: Generic term for all shapes and points and things.
			
			Places/Polygons: These are polygons for buildings and locations, etc.
			
			Points: Points are the markers that are only used when the map is zoomed out enough. They
				display on the google map like a marker, but they're not actually markers (I think), 
				so you can't use all of the marker class's methods/properties with them. Most of
				our points have a corresponding polygon/place associated with them that you see when
				you zoom in far enough.
[1] 	From js/map/map-styles.js
[2] 	The currently selected features, so when clearing the highlighted styles these will 
		keep them.
[3] 	The current selected feature itself (not just an ID). Right not just using this for editing
		polygons when you click on them, not used when you select one from the controls

**********************************/
var MapControl = (function($){
	'use strict';

	/**********************************
	Settings
	**********************************/
	var s = {
		map:null,
		placesGeoJson:null,
		pointsGeoJson:null,
		featureGeoJson:null,
		uniqueTags:null,
		imagesUrl:null,
		initCenter: undefined,
		currentCenter: undefined,
		mapTileBounds:null,
		initBounds:null,
		initZoom: 17,
		maxZoom:19,
		minZoom: 9,
		mapStyles:mapStyles, /*[1]*/
		mapTileFolder:'',
		generalStyles:{
			highlightStrokeWeight: 5,
		},
		buildingStyles:{
			strokeWeight: 0,
			fillOpacity: 0,
			highlightOpacity: 0,
			highlightStrokeColor: '#FFC72C',
			highlightStrokeOpacity: 1
		},
		outdoorStyles:{
			strokeWeight: 0,
			fillOpacity: 0,
			highlightOpacity: 0,
			highlightStrokeColor: '#FFC72C',
			highlightStrokeOpacity: 1
		},
		waterStyles:{
			strokeWeight: 0,
			fillOpacity: 0,
			highlightOpacity: 0,
			highlightStrokeColor: '#FFC72C',
			highlightStrokeOpacity: 1
		},
		mapBoxID:'wc-map-box',
		placesLayer:null,
		pointsLayer:null,
		additionalFeatureLayer:null,
		hoverID:null,
		highlightMarkers:[],
		selectedFeatureIDs:[], /*[2]*/
		selectedFeature:null, /*[3]*/
		isMobile:false,
		mapReady:false,
		positionMarker:null,
		controls:{
			mapControlsBox:$('#wc-map-controls'),
			slideTrack:'#wc-mc-slide-track',
			featuresList:[],
			featuresListLookup:{},
			placesDOMList:$('#wc-map-places-list'),
			categoriesList:[],
			categoriesDOMList:$('#wc-map-categories-list'),
			placesButton:$('#wc-map-places-button'),
			categoriesButton:$('#wc-map-categories-button'),
			allDetailBoxes:$('.wc-mc-detail-box'),
			baseDetailBox:'#wc-mc-detail-box-base',
			hideButtonClass:'wc-mc-hide-button',
			baseZIndex:10,
			maxZ:10,
			notReady:0
		},
		messageBoxID:'#wc-map-message-box',
		letsEdit:false,
		controlMeasurements:null
	};

	/**********************************
	Initialize the module

	Notes
	[1] 	Check to see if the map is ready
	[2]  	If not subscribe to the ready event, then go to the url location
	[3] 	If the user has been clicking on things, hitting 'back' won't reload
			the page, so we subscribe to 'window.back-popstate'* so when when 
			that happens we know to show the correct place based on the url
			parameters.

	*See Globals.getUrlParameters()
	**********************************/
	function init(){
		if($('#wc-map').length > 0){
			var params = $('#wc-map').data('mapParams');
			console.log(params);
			var promise = Globals.addScript('https://maps.googleapis.com/maps/api/js?key='+Globals.s.apiKeys.GoogleMaps);
			promise.then(function(){
				if (!(Globals.s.isIE && Globals.s.ieVersion <10)) {
					$('html').addClass('wc-map-page');
					s.isMobile = !Globals.s.breakpointChecks.sm;
					s.placesGeoJson = dataCleanUp(params.places,'places');
					s.pointsGeoJson = params.points;
					s.featureGeoJson = params.additionalFeatures;
					var allTags = [];
					var index = 0;
					//Store tags in dictionary for later showing specific data
					for(var i = 0; i < s.featureGeoJson.features.length; i++) {
						for(var j = 0; j < s.featureGeoJson.features[i].properties.tags.length; j++) {
							allTags[index] = s.featureGeoJson.features[i].properties.tags[j];
							index++;
						}						
					}

					//Remove Duplicates from allTags
					function removeDups(tags) {
						let unique = {};
						tags.forEach(function(i) {
						  if(!unique[i]) {
							unique[i] = true;
						  }
						});
						return Object.keys(unique);
					}
					  
					s.uniqueTags = removeDups(allTags);


					// console.log("TAGS DICTIONARY");
					// console.log(s.uniqueTags);
					// console.log(s.featureGeoJson);
					s.imagesUrl = params.imagesUrl;
					s.mapTileFolder = params.mapTileFolder;
					s.initCenter = new google.maps.LatLng(params.center.lat,params.center.long);
					s.currentCenter = new google.maps.LatLng(params.center.lat,params.center.long);
					mapSetup();
					controlsSetup();
					if(s.mapReady){ /*[1]*/
						showUrlPlace();
					}
					else{ /*[2]*/
						$.subscribe('map.ready',function(){
							showUrlPlace();
						});
					}
					$.subscribe('window.back-popstate',function(){ /*[3]*/
						showUrlPlace();
					});
				}
			});
		}
	}

	/**********************************
	Setup the map
	**********************************/
	function mapSetup(){
		createMap();
		addFeatures();
		addTiles();
		addFeatureBindings();
	}

	/**********************************
	Clean up/format the data

	Notes
	[1]		Splitting string of tags into an array.
	[2] 	If tags isn't already an array, convert it to one.
	**********************************/
	function dataCleanUp(data,type){
		if(type == 'places'){
			for (var i = 0; i < data.features.length; i++) { /*[1]*/
				var feature = data.features[i];
				if(feature.properties.tags.constructor !== Array){/*[2]*/
					var tagsAarray = feature.properties.tags.split(',');
					feature.properties.tags = tagsAarray;
				}
			}
		}
		return data;
	}

	/**********************************
	Create the map
	**********************************/
	function createMap(){
		var mapOptions = {
			zoom: s.initZoom,
			minZoom: s.minZoom,
			maxZoom: s.maxZoom,
			center: s.initCenter,
			scrollwheel: true,
			draggable: true,
			overviewMapControl: true,
			zoomControl: true,
			mapTypeControlOptions: {
				mapTypeIds: []
			},
			streetViewControl:!s.isMobile,
			streetViewControlOptions:{
				position: google.maps.ControlPosition.LEFT_TOP
			},
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.SMALL,
				position: google.maps.ControlPosition.LEFT_CENTER
			},
			panControl: false
		};

		s.map = new google.maps.Map(document.getElementById(s.mapBoxID),mapOptions);
		google.maps.event.addListenerOnce(s.map, 'idle', function(){
			s.initBounds = s.map.getBounds();
			$.publish('map.ready');
		});

		/**********************************
		Style the map
		**********************************/
		s.map.set('styles', s.mapStyles);

		/**********************************
		Add zoom level listener - when zoom changes, hide/show makers and 
		places accordingly
		**********************************/
		s.map.addListener('zoom_changed',function(){
			//BOGUS BOOLEAN FOR TESTING
			// s.pointsLayer.setMap(s.map);
			// s.placesLayer.setMap(s.map);
			// s.additionalFeatureLayer.setMap(s.map);
			// var showTrees = true;
			// if (showTrees) {
			// 	s.pointsLayer.setMap(null);
			// 	s.placesLayer.setMap(null);
			// 	s.additionalFeatureLayer.setMap(s.map);
			// } else 
			if(s.map.getZoom() > 13) {
				s.pointsLayer.setMap(null);
				s.placesLayer.setMap(s.map);
			}
			else {
				s.pointsLayer.setMap(s.map);
				s.additionalFeatureLayer.setMap(null);
				s.placesLayer.setMap(null);
			}
		});
	}

	/**********************************
	Add the tiles
	**********************************/
	function addTiles(){
		s.mapTileBounds = new google.maps.LatLngBounds(
			new google.maps.LatLng(46.065704, -118.340604),
			new google.maps.LatLng(46.080511, -118.318437));
		var mapMinZoom = 13;
		var mapMaxZoom = 19;

		var maptiler = new google.maps.ImageMapType({
			getTileUrl: function(coord, zoom) { 
				var proj = s.map.getProjection();
				var z2 = Math.pow(2, zoom);
				var tileXSize = 256 / z2;
				var tileYSize = 256 / z2;
				var mapTileBounds = new google.maps.LatLngBounds(
					proj.fromPointToLatLng(new google.maps.Point(coord.x * tileXSize, (coord.y + 1) * tileYSize)),
					proj.fromPointToLatLng(new google.maps.Point((coord.x + 1) * tileXSize, coord.y * tileYSize))
				);
				var y = coord.y;
				var x = coord.x >= 0 ? coord.x : z2 + coord.x;
				if (s.mapTileBounds.intersects(mapTileBounds) && (mapMinZoom <= zoom) && (zoom <= mapMaxZoom)){
					return Globals.igxUrl(s.mapTileFolder,'/'+zoom + '/' + x + '/' + y + '.png');
				}
			},
			tileSize: new google.maps.Size(256, 256),
			isPng: true,
			opacity: 1.0
		});	
		s.map.overlayMapTypes.insertAt(0, maptiler);
	}

	/**********************************
	Add the features

	Notes
	[1] 	Initially, add the polygons to the map but not the points. Then use
			checkZoom to switch that if you zoom out enough.
	**********************************/
	function addFeatures(){
		s.placesLayer = new google.maps.Data();
		s.placesLayer.addGeoJson(s.placesGeoJson);
		s.placesLayer.setMap(s.map);/*[1]*/
		s.pointsLayer = new google.maps.Data();
		s.pointsLayer.addGeoJson(s.pointsGeoJson);
		// s.pointsLayer.setMap(s.map);
		s.additionalFeatureLayer = new google.maps.Data();
		s.additionalFeatureLayer.addGeoJson(s.featureGeoJson);

		
		/**********************************
		Style the polygons

		Notes
		[1] 	Just some cumbersome math to get the stroke weight to adjust as you zoom
				in and out.
		[2] 	It looks like this also acts as a listener, so whenever a property of
				a feature is changed, this runs again.
		[3]		Used for editing shapes, see the letsEdit() function
		**********************************/
		s.placesLayer.setStyle(function(feature){ /*[2]*/
			var dynamicStrokeWeight = ((s.map.getZoom() - 13 )* 2)-(8-s.generalStyles.highlightStrokeWeight);/*[1]*/
			dynamicStrokeWeight = (dynamicStrokeWeight<2)?2:dynamicStrokeWeight;

			var styles = {};
			if(feature.getProperty('objectType').toUpperCase() == 'BUILDING'){
				styles = jQuery.extend({},s.buildingStyles);
			}
			else if(feature.getProperty('objectType').toUpperCase() == 'OUTDOOR'){
				styles = jQuery.extend({},s.outdoorStyles);
			}
			else if(feature.getProperty('objectType').toUpperCase() == 'WATER'){
				styles = jQuery.extend({},s.waterStyles);
			}
			if(feature.getProperty('highlighted')){
				styles.fillColor 		= styles.highlightColor;
				styles.fillOpacity 		= styles.highlightOpacity;
				styles.strokeWeight 	= dynamicStrokeWeight;
				styles.strokeColor 		= styles.highlightStrokeColor;
				styles.strokeOpacity 	= styles.highlightStrokeOpacity;
				if(s.letsEdit){
					styles.draggable = true; /*[3]*/
					styles.editable = true;
				}
				else{
					styles.draggable = false;
					styles.editable = false;
				}
			}
			return {
				fillColor: styles.fillColor,
				strokeColor: styles.strokeColor, 
				fillOpacity: styles.fillOpacity,
				strokeWeight: styles.strokeWeight,
				draggable: styles.draggable,
				editable: styles.editable,
				strokeOpacity: styles.strokeOpacity
			};
		});
	}

	/**********************************
	Add hover and click bindings

	Notes
	[1] 	If you enter a feature, clear all highlights and then highlight it.
	**********************************/
	function addFeatureBindings(){
		if(s.controls.notReady < 0){
			s.controls.notReady = 0;
		}

		/**********************************
		Places - Hover
		**********************************/
		s.placesLayer.addListener('mouseover',function(event){/*[1]*/
			var feature = event.feature;
			clearHighlights();
			var id = feature.getProperty('id');
			s.hoverID	= id;
			s.placesLayer.revertStyle();
			feature.setProperty('highlighted',true);
		});
		s.placesLayer.addListener('mouseout',function(){
			if(s.hoverID !== null){
				clearHighlights();
				s.placesLayer.revertStyle();
				s.pointsLayer.revertStyle();
				s.hoverID = null;
			}
		});

		/**********************************
		Places - Click
		**********************************/
		s.placesLayer.addListener('click',function(event){
			showPlace(event.feature.getProperty('id'));
			s.selectedFeature = event.feature;
		});


		/**********************************
		Points - Hover
		**********************************/
		s.pointsLayer.addListener('mouseover',function(event){
			var id = event.feature.getProperty('id');
			s.hoverID	= id;
		});

		/**********************************
		Points - Click
		**********************************/
		s.pointsLayer.addListener('click',function(event){
			var feature 	= event.feature;
			var polygonId	= feature.getProperty('polygonId');
			showPlace(polygonId,'boxB','boxA');
		});

		/**********************************
		AdditionalFeatures - Click
		**********************************/
		s.additionalFeatureLayer.addListener('click',function(event){
			console.log("CLICK LISTENER");
			var feature 	= event.feature;
			var polygonId	= feature.getProperty('polygonId');
			
			showPlace(polygonId,'boxB','boxA');
		});
	}

	/**********************************
	Clear highlights

	Notes
	[1] 	If it's not selected, clear it.
	**********************************/
	function clearHighlights(){
		s.placesLayer.forEach(function(feature){
			if (s.selectedFeatureIDs.indexOf(feature.getProperty('id')) == -1){ /*[1]*/
				feature.setProperty('highlighted',false);
			}
		});
		clearMarkers();
	}


	/**********************************
	Clear selections
	**********************************/
	function clearSelection(){
		s.selectedFeatureIDs = [];
		clearHighlights();
	}


	/**********************************
	Focus on something

	Notes
	[1]			If it's within the current map's bounds and you're not zoomed out, then pan to it.
	[2]	 		If its within the initial bounds, the initial zoom level is probably fine, so
				just pan to it and use that.
	[3] 		If it's way out there, shift the bounds so that it contains the point as well as
				the center of campus. (but not for mobile)
	[4]			If it's a group, don't use a zoom that's closer than the initial zoom
	**********************************/
	function focusMap(type,id,tag){
		clearSelection();
		if (type == 'Polygon'){
			s.placesLayer.forEach(function(feature){
				if (feature.getProperty('id') == id){
					s.selectedFeatureIDs.push(id);
					feature.setProperty('highlighted',true);
					var position = getPolyCenter(feature.getGeometry());
					if (s.map.getBounds().contains(position) && s.map.getZoom() >= s.initZoom){/*[1]*/
						s.map.panTo(position);
						s.currentCenter = s.map.getCenter();
					}
					else if(s.initBounds.contains(position) || s.isMobile){/*[2]*/
						s.map.panTo(position);
						s.currentCenter = s.map.getCenter();
						s.map.setZoom(s.initZoom);
					}
					else{/*[3]*/
						var tempBounds = new google.maps.LatLngBounds();
						tempBounds.extend(position);
						tempBounds.extend(s.initCenter);
						s.map.fitBounds(tempBounds);
						s.map.panTo(position);
						s.currentCenter = s.map.getCenter();
					}
				}
			});
		}
		else if (type == 'Group'){
			var tempBounds = new google.maps.LatLngBounds();
			s.placesLayer.forEach(function(feature){
				if(feature.getProperty('tags').indexOf(tag) !== -1){
					var position = getPolyCenter(feature.getGeometry());
					feature.setProperty('highlighted',true);
					tempBounds.extend(position);
					s.selectedFeatureIDs.push(feature.getProperty('id'));
				}
			});
			s.map.fitBounds(tempBounds);
			if(s.map.getZoom() > s.initZoom){s.map.setZoom(s.initZoom); } /*[4]*/
			s.currentCenter = s.map.getCenter();
		}
		else if (type === 'additionalFeatures') {
			console.log('additionalFeatures');
			s.map.setZoom(s.initZoom);
			s.currentCenter = s.map.getCenter();
		}
		else if (type == 'additionalFeature') {
			console.log("additionalFeature");
			console.log("ID", id);
			s.additionalFeatureLayer.forEach(function(feature){
				if (feature.getProperty('id') === id){
					var geometry = feature.getGeometry().get();
					s.map.panTo(geometry);
					s.map.setZoom(s.initZoom);
				}
			});
		}
	}

	/**********************************
	Add a marker
	**********************************/
	function addMarker(position){
		var marker = new google.maps.Marker({
			position: position,
			map: s.map,
			icon:Globals.igxUrl(s.imagesUrl,'map/icon-map-pin.png')
		});
		s.highlightMarkers.push(marker);
	}

	/**********************************
	Clear Markers
	**********************************/
	function clearMarkers(){
		for (var i = 0; i < s.highlightMarkers.length; i++) {
			s.highlightMarkers[i].setMap(null);
		}
		s.highlightMarkers = [];
	}

	/**********************************
	Get the center of a polygon
	**********************************/
	function getPolyCenter(geometry) {
		var tempBounds = new google.maps.LatLngBounds();
		var geometryArray = geometry.getArray()[0].getArray();
		geometryArray.forEach(function (g) {
			tempBounds.extend(g);
		});
		return tempBounds.getCenter();
	}

	/****************************************
	Alphabetizes arrays
	****************************************/
	function alphabetize(type,array){
		if(type == 'features'){
			array.sort(function(itemA,itemB){
				return itemA.name.localeCompare(itemB.name);
			});
		}
		else if (type == 'default'){
			var uniqueElements = [];
			$.each(array,function(i,element){
				if(uniqueElements.indexOf(element) === -1 && $.trim(element) !== ""){
					uniqueElements.push(element);
				}
			});
			array = uniqueElements;
			array.sort(function(itemA,itemB){
				return itemA.localeCompare(itemB);
			});
		}
		return array;
	}

	/**********************************
	Setup the controls
	**********************************/
	function controlsSetup(){
		populatePlacesList();
		populateCategoriesList();
		addControlsBindings();
		$(s.controls.baseDetailBox).css({'z-index':s.controls.baseZIndex});
		
		/**********************************
		Mobile Setup

		Notes
		[1] 	Hiding the controls initially and waiting a bit before showing them so they don't flash on
				the screen before sliding into place
		[2] 	Set the height for the .wc-mc-detail-box-content's for hiding/collapsing the controls on mobile
		[3] 	This shows the controls again. (see note [1])
		**********************************/
		if(s.isMobile){
			$(s.controls.mapControlsBox).css({'top':'2000px'}); /*[1]*/
			toggleCategories('places');
			s.controls.mobileDetailBoxContentHeight = Globals.s.windowHeight - (Globals.s.headerHeight + 140); /*[2]*/
			var styleString = '.wc-map-controls .wc-mc-detail-box .wc-mc-detail-box-content{height: '+s.controls.mobileDetailBoxContentHeight+'px;} ';
			styleString += '.wc-map-controls.wc-mc-hidden{bottom: -'+s.controls.mobileDetailBoxContentHeight+'px;} ';
			Globals.addCSS(styleString);
			setTimeout(function() {
				mobileSizing();
				$(s.controls.mapControlsBox).css({'top':'auto'}); /*[3]*/
			}, 10);
			
			setupGeolocationMessage();
		}
		else{
			showHideControls('show');
		}
	}

	/**********************************
	Map Controls - add bindings

	Notes
	[1] 	Wait for the controls to be ready
	[2] 	Need to wait until the animation has finished before removing the contents and 
			letting the user perform other actions
	**********************************/
	function addControlsBindings(){
		s.controls.mapControlsBox.on('click', '.wc-mc-button', function(event) {
			event.preventDefault();
			if(s.controls.notReady < 0){
				log('s.controls.notReady is less than 0, resetting it');
				s.controls.notReady = 0;
			}
			if(s.controls.notReady === 0){ /*[1]*/
				var elem = $(this);
				// Places toggle button
				if(elem.get(0) === s.controls.placesButton.get(0)){
					toggleCategories('places'); 
				}
				// Categories toggle button
				if(elem.get(0) === s.controls.categoriesButton.get(0)){
					toggleCategories('categories');
				}
				// Hide Buttons
				if(elem.hasClass(s.controls.hideButtonClass)){
					showHideControls();
				}
				// Back Buttons
				if(elem.hasClass('wc-mc-back-button')){
					clearSelection();
					var box = elem.closest('.wc-mc-detail-box');
					s.controls.notReady++;
					hideDetailBox(box);
					if(s.isMobile){
						mobileSizing(-10);
					}
					setTimeout(function() { /*[2]*/
						removeDetailBox(box);
						refocus();
						s.controls.notReady--;
					}, 400);
				}
				// Categories
				if(elem.hasClass('wc-mc-category-button')){
					showCategory(elem.data('show-cat'));
				}
				// Places
				if(elem.hasClass('wc-mc-place-button')){
					var placeData =  jQuery.parseJSON(elem.data('show-place').replace(/'/g,'"'));
					showPlace(placeData.placeId);
				}
				// Close Buttons
				if(elem.hasClass('wc-mc-close-button')){
					showHideControls('hide');
				}
			}
			else{
				log('click ignored - not ready');
			}
		});
	}

	/**********************************
	Refocuses the map on whatever the top detail box is
	**********************************/
	function refocus(){
		var theBox = topDetailBox();
		if(typeof theBox.data().boxOptions !== 'undefined' && theBox.data().boxOptions.selectedCategory !== 'undefined'){
			showAdditionalFeatures(theBox.data().boxOptions.selectedCategory);
		} else {
			s.additionalFeatureLayer.setMap(null);
		}
	}


	/**********************************
	Create a new detail box

	Info
	[-] 	Detail boxes are the main elements of the map controls, any information or menu within
			the controls will be within a detail box. They're the element that slides in and out 
			with different content.
	[-] 	With the exception of the base detail box, all detail boxes are created with JS.

	Notes
	[1] 	Make sure it's on top of everything else in the slide track
	[2] 	Attaching the options data here so we can use it with refocus(). For instance,
			if you select a category and then a specific place and want to back up to the
			category, this will help that category's selection to display again.
	**********************************/
	function newDetailBox(options){
		s.controls.maxZ+=10;/*[1]*/
		var box = $('<div/>',{class:'wc-mc-detail-box ' + WcFun.emptyIfNull(options.customClass)})
				.css({'z-index':s.controls.maxZ})
				.data('boxOptions',options); /*[2]*/
		box.appendTo(s.controls.slideTrack);
		var headerbox, headerContentMarkup;
		
		/**********************************
		Feature Box
		**********************************/
		if(options.boxType	=== 'featureBox'){
			headerbox = $('<div />',{'class':'wc-mc-header-box'}).appendTo(box);
			if (s.isMobile){
				headerContentMarkup =					
					'<a class="wc-mc-close-button wc-mc-back-button wc-mc-button wc-mc-icon-button"><svg viewbox="0 0 32 32"><use xlink:href="'+Globals.s.svgFilePath+'#icon-menu-x" /></svg></a>'+
					'<a class="wc-mc-mobile-header-button wc-mc-mobile-hide-button wc-mc-hide-button wc-mc-button wc-toggle wc-toggled">'+
						'<span class="wc-text">'+options.featureName+'</span>'+
						'<svg class="wc-icon" viewbox="0 0 32 32"><use xlink:href="'+Globals.s.svgFilePath+'#icon-arrow-down" /></svg>'+
					'</a>';
			}
			else{
				headerContentMarkup = 
					'<a class="wc-back-link wc-mc-back-button wc-mc-button">'+
						'<svg viewbox= "0 0 32 32"><use xlink:href="'+Globals.s.svgFilePath+'#icon-arrow-left"></use></svg><span class="wc-text">Back</span>'+
					'</a>'+
					'<h2 class="wc-mc-heading">'+options.featureName+'</h2>';
			}
			headerbox.append(headerContentMarkup);
		}

		/**********************************
		Category Box
		**********************************/
		else if (options.boxType === 'categoryBox'){
			headerbox = $('<div />',{'class':'wc-mc-header-box'}).appendTo(box);
			headerContentMarkup = 
				'<a class="wc-back-link wc-mc-back-button wc-mc-button">'+
					'<svg viewbox= "0 0 32 32"><use xlink:href="'+Globals.s.svgFilePath+'#icon-arrow-left"></use></svg><span class="wc-text">Back</span>'+
				'</a>'+
				'<h2 class="wc-mc-heading">'+options.selectedCategory+'</h2>'+
				'<hr class="wc-mc-header-divider"/>';
			headerbox.append(headerContentMarkup);
		}

		return box;
	}

	/**********************************
	Show a detail box

	Notes
	[-] 	Making this a separate function so you can put stuff in the box before showing it
	**********************************/
	function showDetailBox(box){
		box.css({'left':'0'});
	}

	/**********************************
	Show a detail box
	**********************************/
	function hideDetailBox(box){
		box.css({'left':'100%'});
	}

	/**********************************
	Remove a detail box

	Notes
	[1] 	If this detail box has a description box on it, send it back to the
			queue so it's not deleted.
	**********************************/
	function removeDetailBox(box){
		var descriptionBox = box.find('.wc-mc-description').first();
		if(descriptionBox.length){ /*[1]*/
			descriptionBox.appendTo('#wc-mc-descriptions-queue');
		}
		box.remove();
		s.controls.maxZ-=10;
	}

	/**********************************
	Show/hide the controls, defaults to a toggle
	**********************************/
	function showHideControls(method){
		if(method == 'show'){
			s.controls.mapControlsBox.removeClass('wc-mc-hidden');
			$('.'+s.controls.hideButtonClass).addClass('wc-toggled');
		}
		else if(method == 'hide'){
			s.controls.mapControlsBox.addClass('wc-mc-hidden');
			$('.'+s.controls.hideButtonClass).removeClass('wc-toggled');
		}
		else{
			s.controls.mapControlsBox.toggleClass('wc-mc-hidden');
			$('.'+s.controls.hideButtonClass).toggleClass('wc-toggled'); 
		}
	}
	
	/**********************************
	Places/Categories toggle
	**********************************/
	function toggleCategories(which){
		if (which == 'places') {
			s.controls.placesButton.addClass('wc-toggled');
			s.controls.categoriesButton.removeClass('wc-toggled');
			s.controls.categoriesDOMList.addClass('wc-hidden');
			s.controls.placesDOMList.removeClass('wc-hidden');
		}
		else if (which == 'categories') {
			s.controls.placesButton.removeClass('wc-toggled');
			s.controls.categoriesButton.addClass('wc-toggled');
			s.controls.categoriesDOMList.removeClass('wc-hidden');
			s.controls.placesDOMList.addClass('wc-hidden');
		}
		else{
			s.controls.placesButton.toggleClass('wc-toggled');
			s.controls.categoriesButton.toggleClass('wc-toggled');
			s.controls.categoriesDOMList.toggleClass('wc-hidden');
			s.controls.placesDOMList.toggleClass('wc-hidden');				
		}
	}

	/**********************************
	Map Controls - Populate the places list

	Notes
	[1] 	Just using the polygons, not the points
	**********************************/
	function populatePlacesList(){
		//PLACES
		var data = s.placesGeoJson;
		var additionalFeatures = s.featureGeoJson;
		for(var i=0; i<data.features.length;i++){
			var feature = data.features[i];
			s.controls.featuresList.push(feature.properties);
		}
		for(var i = 0; i < additionalFeatures.features.length; i++) {
			var feature = additionalFeatures.features[i];
			s.controls.featuresList.push(feature.properties);
		}

		s.controls.featuresList = alphabetize('features',s.controls.featuresList);

		s.controls.featuresListLookup = {};
		for (var k = 0; k < s.controls.featuresList.length; k++) {
			s.controls.featuresListLookup[s.controls.featuresList[k].id] = s.controls.featuresList[k];
		}

		for (var j = 0; j < s.controls.featuresList.length; j++) {
			var thisFeature = s.controls.featuresList[j];
			var markup = 
				'<li role="menuitem">'+
					'<a class="wc-item-link wc-mc-place-button wc-mc-button" data-show-place="{\'placeId\'\:\''+thisFeature.id+'\'}" title="'+thisFeature.name+'">'+
						'<span class="wc-text">'+thisFeature.name+'</span>'+
						'<svg class="wc-icon" viewbox="0 0 32 32"><use xlink:href="'+Globals.s.svgFilePath+'#icon-arrow-right" /></svg>'+
					'</a>'+
				'</li>';
			s.controls.placesDOMList.append(markup);
		}
	}

	/**********************************
	Map Controls - Poppulate the categories list
	**********************************/
	function populateCategoriesList(){
		var data = s.placesGeoJson;
		var additionalFeatures = s.featureGeoJson;
		for (var i=0;i<data.features.length;i++){
			var feature = data.features[i];
			var tags = feature.properties.tags;
			s.controls.categoriesList = s.controls.categoriesList.concat(tags);
		}
		for(var i = 0; i < additionalFeatures.features.length; i++) {
			var feature = additionalFeatures.features[i];
			var tags = feature.properties.tags;
			s.controls.categoriesList = s.controls.categoriesList.concat(tags);
		}

		s.controls.categoriesList = alphabetize('default',s.controls.categoriesList);
		for (var k = 0; k < s.controls.categoriesList.length; k++) {
			var category = s.controls.categoriesList[k];
			var markup = 
				'<li role="menuitem">'+
					'<a class="wc-item-link wc-mc-category-button wc-mc-button" data-show-cat="'+category+'" title="'+category+'">'+
						'<span class="wc-text">'+category+'</span>'+
						'<svg class="wc-icon" viewbox="0 0 32 32"><use xlink:href="'+Globals.s.svgFilePath+'#icon-arrow-right" /></svg>'+
					'</a>'+
				'</li>';
			s.controls.categoriesDOMList.append(markup);
		}
	}

	/**********************************
	Map Controls - Show category

	Notes
	[1] 	Need to add a bit of delay to make sure the slide happens
	**********************************/
	function showCategory(category){
		console.log(category);
		var box = newDetailBox({
					selectedCategory:category,
					boxType:'categoryBox'
				});
		showAdditionalFeatures(category);
		var categoryListMarkup =
			'<div class="wc-mc-detail-box-content">'+
				'<ul class="wc-mc-items-list">';
		for (var i = 0; i < s.controls.featuresList.length; i++) {
			var thisFeature = s.controls.featuresList[i];
			if (thisFeature.tags.indexOf(category) !== -1){
				var listItemMarkup =
					'<li role="menuitem">'+
						'<a class="wc-item-link wc-mc-place-button wc-mc-button" data-show-place="{\'placeId\'\:\''+thisFeature.id+'\'}" title="'+thisFeature.name+'">'+
							'<span class="wc-text">'+thisFeature.name+'</span><svg class="wc-icon" viewBox="0 0 32 32"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="'+Globals.s.svgFilePath+'#icon-arrow-right"></use></svg>'+
						'</a>'+
					'</li>';
				categoryListMarkup += listItemMarkup;
			}
		}
		categoryListMarkup += '</ul></div>';
		box.append(categoryListMarkup);
		setTimeout(function() {showDetailBox(box);}, 100);/*[1]*/
		
	}

	function showAdditionalFeatures(category) {
		var isAdditionalFeatureTag = false;
		for (var i = 0; i < s.uniqueTags.length; i++) {
			if (category === s.uniqueTags[i]) {
				isAdditionalFeatureTag = true;
				break;
			}
		}
		
		s.additionalFeatureLayer = new google.maps.Data();

		if(isAdditionalFeatureTag) {
			s.pointsLayer.setMap(null);
			s.placesLayer.setMap(null);
			console.log("FEATURE GEO JSON");
			console.log(s.featureGeoJson);
			var chosenFeaturesGeoJson = {
				"type": "FeatureCollection",
				"features": []
			}
			var j = 0;
			for (var i = 0; i < s.featureGeoJson.features.length; i++) {
				for(var p = 0; p < s.featureGeoJson.features[i].properties.tags.length; p++) {
					if(s.featureGeoJson.features[i].properties.tags[p] == category) {
						chosenFeaturesGeoJson.features[j] = s.featureGeoJson.features[i];
						j++;
					}
				}
			}
			console.log("CHOSEN FEATURES: ");
			console.log(chosenFeaturesGeoJson);
			
			s.additionalFeatureLayer.addGeoJson(chosenFeaturesGeoJson);
			s.placesLayer.setMap(null);
			s.pointsLayer.setMap(null);

			/**********************************
			AdditionalFeatures - Click
			**********************************/
			s.additionalFeatureLayer.addListener('click',function(event){
				console.log("CLICK LISTENER");
				var feature 	= event.feature;
				var polygonId	= feature.getProperty('polygonId');
				
				showPlace(polygonId,'boxB','boxA');
			});

			s.additionalFeatureLayer.setMap(s.map);
			
			
			focusMap('additionalFeatures', '', category);
		} else {
			focusMap('Group','',category);
			s.additionalFeatureLayer.setMap(null);
			newFeatureLayer.setMap(null);
			s.placesLayer.setMap(s.map);
		}
	}

	/**********************************
	Map Controls - Show the place's information

	Notes
	[1]		Go grab the content for this feature (they should all be in
			#wc-mc-descriptions-queue) and move it into this detail box
	[2] 	Need to add a bit of delay otherwise the slide doesn't happen
	[3] 	Clean up the place detail boxes, need to delay this until after the
			slide animation is finished
	[4] 	Need to add this clause for it to work properly when the user hits "back"
	**********************************/
	function showPlace(id){
		//DOING FIRST ONE FOR DEBUGGING SHOULD BE A LOOP OVER ALL TAGS ON OBJECT AND IF
		//ANY ARE IN THE DICTIONARY CALL SHOW ADDITIONAL FEATURE WITH THAT FEATURE
		var isFeature = false;
		for (var i = 0; i < s.controls.featuresListLookup[id].tags.length; i++) {
			for (var j = 0; j < s.uniqueTags.length; j++) {
				if (s.controls.featuresListLookup[id].tags[i] === s.uniqueTags[j]) {
					isFeature = true;
					break;
				}
			}
		}
		if(isFeature) {
			console.log("IN SHOW PLACE CORRECT");
			focusMap('additionalFeature', id, "Trees");
		} else {
			focusMap('Polygon',id);
		}
		console.log("COMMENT1", s.controls.featuresListLookup)
		console.log("COMMENT2", s.controls.featuresListLookup[id]);
		var feature 	= s.controls.featuresListLookup[id],
			box 		= newDetailBox({
							customClass:'wc-mc-place-detail-box',
							boxType:'featureBox',
							featureName:feature.name
						});
		$('#wc-mc-desc-'+id).appendTo(box); /*[1]*/
		setTimeout(function() { /*[2]*/
				showDetailBox(box);
				mobileSizing();
			}, 100);
		if(s.isMobile){
			showHideControls('hide');
		}
		else{
			showHideControls('show');
		}
		s.controls.notReady++;
		setTimeout(function() { /*[3]*/
			cleanupDetailBoxes('.wc-mc-place-detail-box');
			s.controls.notReady--;
		}, 400);
		if(!(Globals.s.urlParameters.hasOwnProperty('plc') && Globals.s.urlParameters.plc === id)){ /*[4]*/
			Globals.addUrlParameter('plc',id);
		}
	}

	/**********************************
	Resize the mobile controls to accomodate the header's changing size

	Notes
	[1]	 	iOS bug: this returns 0 the first time it runs unless the detail box has a min-height. See 
			the note for .wc-mc-detail-box-base in _map.scss
	**********************************/
	function mobileSizing(zOffset){
		if(s.isMobile){
			var headerHeight = topDetailBox(zOffset).find('.wc-mc-header-box').outerHeight(); /*[1]*/
			$(s.controls.slideTrack).height(s.controls.mobileDetailBoxContentHeight + headerHeight); 
		}
	}

	/**********************************
	Returns the detail box that's on top, based on z-index

	Notes
	[1] 	Using zOffset so you can get a detail box other than the one that's on top
	**********************************/
	function topDetailBox(zOffset){
		if(isNaN(zOffset)){zOffset = 0;}
		var topBox;
		$('.wc-mc-detail-box').each(function(){
			if(+$(this).css('z-index') === (+s.controls.maxZ + zOffset)){ /*[1]*/
				topBox = $(this);
			}
		});
		return topBox;
	}

	/**********************************
	Clean up detail boxes

	Info
	[-] 	This deletes anything with a lower z-index than the top detail box (based on the
			selector). Example: when you click around on buildings on the map, it's creating new detail 
			boxes and laying them on top of the old ones. This deletes the old ones so when you hit
			"back" it doesn't just go back to the previous building you clicked on.

	Notes
	[1] 	Go through each of them and remove anything that's not on top. This will also
			decrease the s.controls.maxZ value.
	[2]		Using a copy of s.controls.maxZ here because we'll be changing it as we loop through this.
	[3] 	Take whatever is leftover (should just be the top element) and decrease its z value to whatever
			s.controls.maxZ is now.
	**********************************/ 
	function cleanupDetailBoxes(selector){
		var tempMaxZ = s.controls.maxZ;
		$(selector).each(function(){ /*[1]*/
			if(+$(this).css('z-index') < +tempMaxZ){ /*[2]*/
				removeDetailBox($(this));
			}
		});
		$(selector).each(function(){ /*[3]*/
			if(+$(this).css('z-index') > +s.controls.maxZ){
				$(this).css({'z-index':s.controls.maxZ});
			}
		});
	}

	/**********************************
	Add Geolocation Message
	**********************************/
	function setupGeolocationMessage(){
		var params = {
			messageBoxID:s.messageBoxID,
			messageText:'Would you like to use GPS to display your location on the map?',
			buttons:[
				{
					text:'No Thanks',
					action:function(){
						MessageControl.s.messageBox.css({'transform':'translateY(100%)'});
					}
				},
				{
					text:'Sure',
					action:function(){
						MessageControl.loadingGif();
						MapControl.letsGeolocate(
							function(){
								MessageControl.s.messageBox.css({'transform':'translateY(100%)'});
							},
							function(failureMessage){
								MessageControl.clear();
								MessageControl.setMessage(failureMessage);
								MessageControl.addButton(
									{
										text:'Ok',
										action: function(){
											MessageControl.s.messageBox.css({'transform':'translateY(100%)'});
										}
									}
								);
							}
						);
					}
				}
			],
			callback:function(){MessageControl.s.messageBox.css({'transform':'translateY(0)'});}
		};
		MessageControl.init(params);
	}

	/**********************************
	 * CAPSTONE WORK
	 * Things to do:
	 * 1. Write out function call map
	 * 		- Look carefully for how to input the data in such a way to enable the disabling of trees or enabiling or trees
	 * 2. Convert tree data into json file like city-gis-applications/WhitmanWebsiteSandbox/redesign/src/html/pieces/map-data.html
	 * 3. put tree data into use using map-control.js and map.html
	 * 4. Add to command panel tree data, or some sort of button that enables tree view or disables it (Make sure it uses a url)
	 */
	function addTrees() {
		
	}




	
	/**********************************
	Geolocation
	
	Notes
	[-] 	For a lot of the geolocation code - credit: Ryan Connolly - http://jsfiddle.net/ryanoc/86Ejf/
	[1] 	You can use this for testing, these bounds don't contain boyer house
	[2] 	Checks if they're within the bounds of the map.
	[3] 	Start tracking movement if they're using iOS or Android
	**********************************/
	function letsGeolocate(successCallback,failureCallback){
		var options = {};
		var useragent = navigator.userAgent;
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
					log('kapow!');
					var thisPosition 	= new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
					/*[1]*/ // s.mapTileBounds 	= new google.maps.LatLngBounds(new google.maps.LatLng(46.068891,-118.333118), new google.maps.LatLng(46.071042,-118.331745));
					if(s.mapTileBounds.contains(thisPosition)){ /*[2]*/
						updatePositionMarker(position);
						if(typeof successCallback == 'function'){
							successCallback();
						}
						if ( useragent.indexOf('iPhone') !== -1 || useragent.indexOf('Android') !== -1 ) { /*[3]*/
							navigator.geolocation.watchPosition( 
								updatePositionMarker, 
								handleGeolocationError, 
								{
									enableHighAccuracy: true,
									maximumAge: 30000,
									timeout: 27000
								}
							);
						}
					}
					else{
						if(typeof failureCallback == 'function'){
							failureCallback('You\'re too far from campus to display your location on the map. Once you\'re closer to campus you can refresh this page to try again.');
						}
					}
				}, function(e) {
					if(typeof failureCallback == 'function'){
						failureCallback('I\'m sorry, we were unable to use your device\'s GPS. Please ensure that GPS is enabled for your browser.');
					}
					log('Geolocation Error:');
					log(e);
				}, options);
		} else {
			if(typeof failureCallback == 'function'){
				failureCallback('I\'m sorry, we were unable to use your device\'s GPS.');
			}
		}
	}

	/**********************************
	Geolocation error handling

	Notes
	[1] 	For testing on mobile (since you can't view the console)
	**********************************/
	function handleGeolocationError(error) {
		var errorMessage = [ 
			'Error: Not sure what went wrong.',
			'Error: Permission to find your location was denied.',
			'Error: Your position could not be determined.',
			'Error: Timed out.'
		];
		if(s.isMobile && Globals.s.urlParameters['dev'] == '1'){/*[1]*/
			alert(errorMessage[ error.code ]);
		}
		log(errorMessage[ error.code ] );
	}
	
	/**********************************
	Update the position marker

	Notes
	[1] 	If there's no marker, make one darnit
	[2] 	otherwise just update its position
	**********************************/
	function updatePositionMarker(pos){
		pos = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
		if ( !s.positionMarker ) { /*[1]*/
			var image = new google.maps.MarkerImage(
				Globals.igxUrl(s.imagesUrl,'map/bluedot_retina.png'),
				null, // size
				null, // original
				new google.maps.Point( 8, 8 ), // anchor (move to center of marker)
				new google.maps.Size( 17, 17 ) // scaled size (required for Retina display icon)
			);
			s.positionMarker = new google.maps.Marker({
				flat: true,
				icon: image,
				map: s.map,
				optimized: false,
				position: pos,
				title: 'Your location',
				visible: true
			});
			s.map.setCenter(pos);
		}
		else { /*[2]*/
			s.positionMarker.setPosition(pos);
		}
	}

	/**********************************
	If there's a place ID in the url, show that place
	**********************************/
	function showUrlPlace(){
		if(Globals.s.urlParameters.hasOwnProperty('plc')){
			var urlPlace = Globals.s.urlParameters.plc;
			if(s.controls.featuresListLookup[urlPlace] !== undefined){
				showPlace(urlPlace);
			}
			else{
				log('Unable to find this place - ' + urlPlace);
			}
		}
	}

	/**********************************
	Polygon Editing
	
	Notes
	[-] 	This is for making edits to the polygons. To use this:
			-	Load the web page in the browser
			-	In the console run the command:
				MapControl.letsEdit()
			-	Click on the building you want to edit
			-	Edit it
			-	When you're done, in the console run this command
				copy(MapControl.getPolyCoords(MapControl.s.selectedFeature));
			-	The New coordinates should be copied to your clipboard.
			- 	If you're updating the ingeniux component for that feature, paste
				the copied coordinates in there. If you're updating places.js paste
				them in there.
			- 	Before saving, copy the first coordinate and paste it at the end. (The first and
				last coordinates need to be the same)
			- 	If you're editing the ingeniux component, make sure to place the whole
				group of coordinates in an additional set of brackets []
			- 	Save and you're good to go.
			- 	Note that currently this probably won't work for editing features with mutliple
				polygons (like the amphitheatre), when you copy the coordinates after editing it will just
				copy one of the polygons.
	[1] 	If you want to turn this off and view your overlays without the editing
			tools, just run MapControl.letsEdit(false)
	**********************************/
	function letsEdit(toggle){
		log('lets edit!');
		s.letsEdit = toggle === false?false:true; /*[1]*/
	}

	/**********************************
	Gets the coordinates for a polygon

	Notes
	[1] 	Using shapeIndex to specify which shape to get, if there's more than one
	[2] 	After getting the geometry, getArray() returns an array of LinearRings's,
			(should be just one if it's a simple shape I think). These are themselves basically
			an array of LatLng's.
	[3] 	Run getArray() to get the actual array of LatLng's, then toString() on each of those
			to get the actual coordinates in a string format.
	**********************************/
	function getPolyCoords(thing,shapeIndex){
		if(!shapeIndex){shapeIndex = 0;} /*[1]*/
		var theString = '';
		if(!thing){
			thing = s.selectedFeature;
		}
		var linearRing = thing.getGeometry().getArray()[shapeIndex]; /*[2]*/
		for (var i = 0; i < linearRing.getLength(); i++) {
			theString += '[' + linearRing.getArray()[i].lng() + ',  '+linearRing.getArray()[i].lat() +'],';/*[3]*/
		}
		return theString; 
	}

	return {
		s:s,
		init:init,
		focusMap:focusMap,
		showCategory:showCategory,
		showPlace:showPlace,
		showHideControls:showHideControls,
		getPolyCoords:getPolyCoords,
		letsEdit:letsEdit,
		letsGeolocate:letsGeolocate,
		topDetailBox:topDetailBox
	};
})(jQuery);

/**********************************
#MENU-CONTROL

Info
[-] 	This is the module for controlling how the mobile menu and
		search show and hide. For the rest of the JS that handles
		search, see SearchControl.js.
**********************************/
var MenuControl = (function(){

	/**********************************
	Settings
	**********************************/
	var s = {
		$mainNav:$('#wc-main-nav'),
		mobileNavCollapsed:1,
		$mobileNavButton:$('#wc-mobile-nav-button'),
		$mobileSearchButton:$('#wc-mobile-search-button'),
		$searchBox:$('#wc-search-box'),
		mobileSearchCollapsed:1
	}

	/**********************************
	Initialize the module
	**********************************/
	function init(){
		bindings();
	}

	/**********************************
	Bindings
	**********************************/
	function bindings(){
		s.$mobileNavButton.click(function(){
			mobileNavToggle();
		});
		s.$mobileSearchButton.click(function(){
			mobileSearchToggle();
		});
	}

	/**********************************
	Show/hide the main navigation for mobile

	Notes
	[1] 	It's important for this to be the first thing that happens, for 
			note [4] to work right.
	[2] 	When it's being opened, use autoshrink to hide everything else.
	[3] 	If the search is open, hide it.
	[4] 	When it's being closed, show everything else again. Unless search 
			is open, in which case don't do anything because we want stuff to stay
			hidden until it's closed.
	**********************************/
	function mobileNavToggle(select){
		if(select == 'reset'){
			s.$mainNav.css({'display':''});
			s.mobileNavCollapsed = 1;
			s.$mobileNavButton.removeClass('wc-toggled').attr('aria-expanded','false');
			autoShrink('unshrink');
		}
		else{
			if(s.mobileNavCollapsed === 1){
				s.mobileNavCollapsed = 0; /*[1]*/
				autoShrink('shrink'); /*[2]*/
				s.$mainNav.slideDown();
				s.$mobileNavButton.addClass('wc-toggled').attr('aria-expanded','true');
				if (s.mobileSearchCollapsed === 0){ /*[3]*/
					mobileSearchToggle();
				}
			}
			else{
				s.mobileNavCollapsed = 1; /*[1]*/
				s.$mainNav.slideUp();
				if (s.mobileSearchCollapsed == 1){ /*[4]*/
					autoShrink('unshrink');
				}
				s.$mobileNavButton.removeClass('wc-toggled').attr('aria-expanded','false');
			}
		}
	}

	/**********************************
	Show/hide the search box for mobile

	Notes
	[1] 	It's important for this to be the first thing that happens, for 
			note [4] to work right.
	[2] 	When it's being opened, use autoshrink to hide everything else.
	[3] 	If the search is open, hide it.
	[4] 	When it's being closed, show everything else again. Unless search 
			is open, in which case don't do anything because we want stuff to stay
			hidden until it's closed.
	**********************************/
	function mobileSearchToggle(select){
		if(select == 'reset'){
			s.$searchBox.css({'display':''});
			s.mobileSearchCollapsed = 1;
			s.$mobileSearchButton.removeClass('wc-toggled').attr('aria-expanded','false');
			autoShrink('unshrink');
		}
		else{
			if(s.mobileSearchCollapsed === 1){
				s.mobileSearchCollapsed = 0; /*[1]*/
				autoShrink('shrink'); /*[2]*/
				s.$searchBox.slideDown();
				s.$mobileSearchButton.addClass('wc-toggled').attr('aria-expanded','true');
				if (s.mobileNavCollapsed === 0){ /*[3]*/
					mobileNavToggle();
				}
			}
			else{
				s.mobileSearchCollapsed = 1; /*[1]*/
				s.$searchBox.slideUp();
				if (s.mobileNavCollapsed == 1){ /*[4]*/
					autoShrink('unshrink');
				}
				s.$mobileSearchButton.removeClass('wc-toggled').attr('aria-expanded','false');
			}
		}
	}

	/**********************************
	Shrink everything on the page other than the header. Right now just using this
	for the mobile nav and mobile search, to hide everything behind them when they're
	open, and thus collapsing the page to only be as tall as they are.
	**********************************/
	function autoShrink(method){
		if (method == 'shrink'){
			$('body').children(':not(.wc-header)').addClass('wc-mm-collapse');
			$('body').addClass('wc-body-go-blue');
		}
		if (method == 'unshrink'){
			$('body').children(':not(.wc-header)').removeClass('wc-mm-collapse');
			$('body').removeClass('wc-body-go-blue');
		}
	}

	return {
		s:s,
		init:init,
		mobileNavToggle:mobileNavToggle,
		mobileSearchToggle:mobileSearchToggle
	}

})();

/**********************************
#MESSAGE-CONTROL

Info
		A controller for message boxes. To use this, put this markup in the DOM where you want 
		the message to be:

			<div id="some-id" class="wc-map-message-box">
				<img class="wc-loader-gif" src="path/for/some/loader.gif"> <!-- optional -->
			</div>

		The loader gif is in there so JS can get the correct path from ingeniux.

Notes
[-] 	Originally created to handle the geolocation prompt on the map page.
[-] 	At this point I think we only have css in place for these to work
		on mobile.
[-] 	Right now this is only setup to manage a single message at a time,
		so you can't have more than one on a page (aside from updating the
		content of a single message).
**********************************/
var MessageControl = (function(){
	'use strict';	
	/**********************************
	Settings
	**********************************/
	var s = {
		messageBox:undefined,
		buttonBox:undefined,
		message:undefined,
		params:undefined,
		buttons:undefined,
		loaderGif:undefined
	};

	/**********************************
	Initialize the module

	Notes
	[1]  Make a copy of the loader gif, just to get the correct path.
	**********************************/
	function init(params){
		s.params 		= params;
		s.messageBox 	= $(params.messageBoxID);
		s.loaderGif 	= s.messageBox.find('.wc-loader-gif').first()?s.messageBox.find('.wc-loader-gif').first().clone():undefined;/*[1]*/
		s.message 		= $('<p>');
		s.messageBox.empty();
		setMessage(params.messageText);
		s.messageBox.append(s.message);
		s.buttonBox = $('<div>').addClass('wc-button-box');
		if(params.buttons){
			for (var i = 0; i < params.buttons.length; i++) {
				addButton(params.buttons[i]);
			}
		}
		s.messageBox.append(s.buttonBox);
		if(typeof params.callback == 'function'){
			s.params.callback();
		}
	}

	/**********************************
	Set the message
	**********************************/
	function setMessage(messageText){
		s.message.text(messageText);
	}

	/**********************************
	Add a button
	**********************************/
	function addButton(thisButton){
		var button = $('<a>').addClass('wc-message-box-button');
		button.text(thisButton.text);
		if(thisButton.action){
			button.click(function(){
				thisButton.action();
			});
		}
		s.buttonBox.append(button);
	}

	/**********************************
	Display the loading gif in place of the buttons
	**********************************/
	function loadingGif(){
		clear('buttons');
		s.buttonBox.append(s.loaderGif);
	}

	/**********************************
	Clear stuff
	**********************************/
	function clear(what){
		if(what == 'buttons'){
			s.buttonBox.empty();
			s.buttons = undefined;
		}
		else{
			setMessage('');
			s.buttonBox.empty();
			s.buttons = undefined;			
		}
	}

	return {
		s:s,
		init:init,
		clear:clear,
		setMessage:setMessage,
		addButton:addButton,
		loadingGif:loadingGif
	};
})();

/**********************************
#SEARCH-CONTROL

Info
		Controls the search box in the header, most of this is for the auto-results.

Notes
[-] 	Decided to leave some log() statements in here commented out, just so 
		it's easy to use them for debugging in the future.

**********************************/

var SearchControl = (function(){
	'use strict';

	/****************************************
	Settings

	Notes
	[1]		The current action of the form (website/people)
	[2]		The selected/highlighted result for keyboard navigation
	[3]		Indicates if auto-results is working, see initAutoresults()
	[4] 	Used for checking to see when the user stops typing see checkLast()
	[5]		How many auto-results you want to display	
	[6] 	The delay between checking the search box to see if they've stopped
			typing.
	****************************************/
	var s = {
		searchBox:$('#wc-search-box'),
		searchForm:$('#wc-search-form'),
		searchField:$('#wc-search-input'),
		resultsBox:$('#wc-auto-search-results'),
		resultsList:$('#wc-auto-search-results ul'),
		optionsBox:$('#wc-search-options-box'),
		peopleButton:$('#wc-search-people'),
		websiteButton:$('#wc-search-website'),
		peopleAction:$('#wc-action-people'),
		websiteAction:$('#wc-action-website'),
		loader:$('#wc-ajax-loader'),
		websiteSearchUrl:$('meta[name=SearchURL]').first().attr('content'),
		currentAction:'', /*[1]*/
		resultsListElements:{}, 
		selectedResult:null, /*[2]*/
		pageResults:[], 
		promoResults:[],
		combinedResults:[],
		peopleResults:[],
		working:false, /*[3]*/
		query:'', 
		newCharCount:0, /*[4]*/
		totalResults:0, 
		resCount:5, /*[5]*/
		refreshDelay:500, /*[6]*/
		browserOk:true,
		newSearchString:''
	};
	

	/****************************************
	Initializes the module
	****************************************/
	function init(){
		browserCheck();
		bindUIActions();
		s.currentAction = 'website';
		ClickOff.add(s.searchBox,function(){
			SearchControl.hideAll();
			SearchControl.showHideOptions('hide');
		});
		subscriptions();
		showHideOptions('reset');
	}


	/****************************************
	Reset the settings
	****************************************/
	function letsReset(){
		s.resultsListElements 	= {};
		s.selectedResult 		= null;
		s.pageResults 			= [];
		s.promoResults 			= [];
		s.combinedResults 		= [];
		s.peopleResults 		= [];
		s.working 				= false;
		s.query 				= '';
		s.newCharCount 			= 0;
		s.totalResults 			= 0;
	}


	/**********************************
	Checks for compatible browers
	**********************************/
	function browserCheck(){
		if(Globals.s.isIE === false || Globals.s.ieVersion >= 10){
			s.browserOk = true;
		}
		else{
			s.browserOk = false;
		}
	}


	/****************************************
	Assign event handlers for UI actions
	
	Notes
	[1] 	Every keystroke is counted, used to determine when they've stopped typing
	[2]		Keyboard Shortcut - "/"
	[3]		Keyboard Shortcut - esc
	[4][5] 	Submit the form if they tap an option twice.
	****************************************/
	function bindUIActions(){
		if (s.browserOk === true){
			s.searchField.on('input',function(){
				initAutoResults();
				s.newCharCount ++; /*[1]*/
			});
		}
		s.searchBox.click(function(){
			showHideOptions('show');
		});
		s.searchBox.keydown(function(e){
			keyNav(e);
		});
		KeyControl.add(191,function(){ /*[2]*/
			if (!s.searchField.is(':focus')){
				s.searchField.focus();
				showHideOptions('show');
			}
		});
		KeyControl.add(27,function(){ /*[3]*/
			SearchControl.hideAll();
			if (s.searchField.is(':focus')){
				s.searchField.blur();
				showHideOptions('hide');
			}
		});
		s.peopleButton.click(function(e){
			if (s.currentAction != 'people'){
				toggleButton('people');
				switchAction('people');
				s.searchField.focus();
				if (s.browserOk === true){
					initAutoResults();
				}
			}
			else{
				s.searchForm.submit(); /*[4]*/
			}
		});
		s.websiteButton.click(function(e){
			if (s.currentAction != 'website'){
				toggleButton('website');
				switchAction('website');
				s.searchField.focus();
				if (s.browserOk === true){
					initAutoResults();
				}
			}
			else{
				s.searchForm.submit(); /*[5]*/
			}
		});
	}

	/**********************************
	Pub/Sub subscriptions

	Notes
	[1] 	Run this whenever the window size changes (watching Globals.watchWindowSize)
	**********************************/
	function subscriptions(){
		$.subscribe('window.newMeasurements',function(){ /*[1]*/
			if(!Globals.breakpointChecks.md && !Globals.breakpointChecks.lg){
				SearchControl.showHideOptions('reset');
			}
		});
	}

	/****************************************
	Initiate auto results - start working
	
	Notes
	[1]		Initiate autoresults if it hasn't been initiated yet (i.e.
			working == false)
	[2]		Start checking the search query, once they've stopped typing run
			the appropriate search.
	****************************************/
	function initAutoResults(){
		if (s.working === false){ /*[1]*/
			// log('---init auto results---');
			letsReset();
			s.working = true;
			s.newCharCount++;
			clearList();
			s.loader.css({'display':'block'});
			s.resultsBox.show();
			checkLast(function(){ /*[2]*/
				if (s.currentAction === 'website'){
					runWebsiteSearch();
				}
				if (s.currentAction === 'people'){
					runPeopleSearch();
				}
			});
		}
	}
	

	/****************************************
	Checks to see when they've stopped typing

	Notes
	[1] 	Strips out the white space.
	[2] 	If characters have been typed since the last time this ran, set it to zero and keep checking.
			When this is 0, they've stopped typing and we can run the search.
	****************************************/
	function checkLast(callback){
		s.query = encodeURI(s.searchField.val());
		var queryLength = s.searchField.val().replace(/\s+/g, '').length;/*[1]*/
		if (s.newCharCount > 0){ /*[2]*/
			// log('resetting newCharCount');
			s.newCharCount = 0;
			setTimeout(function () {
				checkLast(callback);
			}, s.refreshDelay); //was 200
		}
		else if (queryLength < 3){
			// log('stopped typing, but too short. queryLength - ' + queryLength);
			hideAll();
			done();
		}
		else{
			// log('stopped typing, long enough - ' + queryLength);
			callback();
		}
	}


	/****************************************
	Run the website search 

	Notes
	[1][2]	Format the results and promotions and add them both to 
			s.combinedResults
	[3]		Populate s.resultsList
	[4]		If there are more results than s.resCount, show the more
			link.
	****************************************/
	function runWebsiteSearch(){
		var searchString = s.websiteSearchUrl + s.query;
		// log('running search');
		$.getJSON(searchString, function (data) {
			if (data.items || data.promotions){
				// log('we've got results');
				s.totalResults = data.searchInformation.totalResults;
				if (data.items){ /*[1]*/
					s.pageResults = formatWebsiteResults(data.items);
					addResults();
				}
				if (data.promotions){ /*[2]*/
					s.totalResults += data.promotions.length;
					s.promoResults = formatWebsitePromos(data.promotions);
					addPromotions();
				}
				populateList(s.combinedResults); /*[3]*/
				if (s.totalResults > s.resCount){
					addMoreLink(); /*[4]*/
				}
				s.loader.css({'display':'none'});
				done();
			}
			else{
				hideAll();
				done();
				// log('no results found');
			}
		}).error(function() {
			hideAll();
			done();
		});
	}


	/****************************************
	Run the people search 

	Notes
	[1]		Format the results.
	[2]		Trim the results to s.resCount
	[3]		Populate s.resultsList
	[4]		If there are more results than our limit, show the more
			link.
	****************************************/
	function runPeopleSearch(){
		var searchString = 'https://webapp.whitman.edu/directory/jsonp.cfm?q='+s.query+'&callback=?';
		$.getJSON(searchString, function (data) {
			if (data.results.length > 0){
				s.totalResults	+= data.results.length;
				s.peopleResults = formatPeopleResults(data.results); /*[1]*/
				s.peopleResults = s.peopleResults.slice(0,s.resCount); /*[2]*/
				populateList(s.peopleResults); /*[3]*/
				if (s.totalResults > s.resCount){
					addMoreLink(); /*[4]*/
				}
				s.loader.css({'display':'none'});
				done();
			}
			else{
				hideAll();
				done();
			}
		});
	}


	/****************************************
	Format website results

	Notes
	[1][2]	Strip out the HTML
	[3]		Build the markup for each result
	****************************************/
	function formatWebsiteResults(results){
		var formatted	= [];
		for (var i = 0; i < results.length; i++) {
			var result = {
				type: 'page',
				title: results[i].htmlTitle.replace(/(<([^>]+)>)/ig, ""), /*[1]*/
				link: results[i].link,
				blurb: results[i].htmlSnippet.replace(/(<([^>]+)>)/ig, ""),/*[2]*/
			};
			var pdfNote = ''; /*[3]*/
			if (result.link.indexOf('.pdf') > -1) {
				pdfNote += '<span class="wc-note">pdf</span>';
			}
			if (result.blurb.length > 90){
				result.blurb = result.blurb.substring(0,90) + '...';
			}
			var markup = '<li><a href="' + result.link + '"><span class="wc-link-title">' +pdfNote + result.title + '</span><span class="wc-link-desc">' + result.blurb + '</span></a></li>';
			result.markup = markup;
			formatted.splice(i,0,result);
		}
		formatted = formatted.slice(0,s.resCount);
		return formatted;
	}


	/****************************************
	Format website promos

	Notes
	[1]		Build the markup for each result
	****************************************/
	function formatWebsitePromos(promos){
		var formatted 	= [];
		for (var i = 0; i < promos.length; i++) {
			var promo = {
				type: 'promo',
				title:promos[i].title,
				link:promos[i].link,
				blurb:promos[i].bodyLines ? promos[i].bodyLines[0].title : ''
			};
			var pdfNote = '';/*[1]*/
			if (promo.link.indexOf('.pdf') > -1) {
				pdfNote += '<span class="wc-note">pdf</span>';
			}
			if (promo.blurb.length > 90){
				promo.blurb = promo.blurb.substring(0,90) + '...';
			}
			var markup = '<li><a href="' + promo.link + '"><span class="wc-link-title">' +pdfNote + promo.title + '</span><span class="wc-link-desc">' + promo.blurb + '</span></a></li>';
			promo.markup = markup;
			formatted.splice(i,0,promo);
		}
		return formatted;
	}


	/****************************************
	Format people results
	****************************************/
	function formatPeopleResults(people){
		var formatted 	= [];
		for (var i = 0;i<people.length;i++){
			var person = {
				type: 'person',
				name: people[i].name,
				title: people[i].title,
				email: people[i].mail,
				phone: String(people[i].phone)
			};
			var phoneMarkup = '';
			if (person.phone) {
				if (person.phone.indexOf('-') == -1 && person.phone.length ==7){
					person.phone = person.phone.slice(0,3) + '-' + person.phone.slice(3);
				}
				phoneMarkup = '<a href="tel:1-509-' + person.phone + '" class="wc-person-phone">509-' + person.phone + '</a>';
			}
			var markup 		= '<li><span class="wc-person-name">' + person.name + '</span><span class="wc-person-title">' + person.title + '</span><a class="wc-person-email" href="mailto:' + person.email + '">' + person.email + '</a>'+phoneMarkup+'</li>';
			person.markup 	= markup;
			formatted.splice(i,0,person);
		}
		return formatted;
	}


	/****************************************
	Add the page results to s.combinedResults
	****************************************/
	function addResults(){
		s.combinedResults = s.combinedResults.concat(s.pageResults);
	}


	/****************************************
	Add the promotions to s.combinedResults

	Notes
	[1]		At this point if there are  multiple promotions I think this will
			add them in reverse order
	[2]		Check to see if there are any results that are duplicates of the
			promos, if so remove them.
	****************************************/
	function addPromotions(){
		for (var i = 0; i < s.promoResults.length; i++) { /*[1]*/
			for (var k = 0; k< s.combinedResults.length; k++){ /*[2]*/
				if (s.combinedResults[k].link == s.promoResults[i].link){
					s.combinedResults.splice(k,1);
				}
			}
			s.combinedResults.splice(0,0,s.promoResults[i]);
		}
	}


	/****************************************
	Populate actual <ul> (s.resultsList) with the markup from all of the results
	****************************************/
	function populateList(items){
		for (var i=0; i<items.length; i++){
			s.resultsList.append(items[i].markup);
		}
		s.resultsListElements = $('#wc-auto-search-results ul li');
	}


	/****************************************
	Add the 'More Results' link at the bottom of the list

	Notes
	[1]		We do it this way rather than just using css to show/hide something
			that's already in the DOM because it allows us to easily clear out
			s.resultsList when we need to.
	****************************************/
	function addMoreLink() { /*[1]*/
		s.resultsList.append('<li><a id="wc-submit-search-b"><span class="wc-link-title">See more results...</span></a></li>'); 
		$('#wc-submit-search-b').click(function (event) { /*[2]*/
			$('#wc-search-form').submit();
			event.preventDefault();
		});
	}


	/****************************************
	Show/Hide the search option buttons (website/people)
	****************************************/
	function showHideOptions(select){
		if (select == 'reset'){
			s.optionsBox.addClass('wc-hidden-alt');
		}
		else if (Globals.getWindowWidth() > Globals.breakpoints.sm){
			if (select == 'show'){
				s.optionsBox.removeClass('wc-hidden-alt');
			}
			else if(select == 'hide'){
				s.optionsBox.addClass('wc-hidden-alt');
			}
		}
	}

	/****************************************
	Handles Keyboard navigation for auto-results
	
	Notes
	[1]		Down Arrow
	[2]		Up Arrow
	[3]		Enter/Return
	****************************************/
	function keyNav(e){
		if (s.working === false && s.resultsListElements.length > 0){
			if (e.which == 40) {/*[1]*/
				if (s.selectedResult) {
					if (s.selectedResult.next().length > 0){
						s.selectedResult.removeClass('wc-selected');
						s.selectedResult = s.selectedResult.next().addClass('wc-selected');
					}
				}
				else{
					s.selectedResult = s.resultsListElements.eq(0).addClass('wc-selected');
				}
			}
			else if (e.which == 38) {/*[2]*/
				if (s.selectedResult){
					s.selectedResult.removeClass('wc-selected');
					if (s.selectedResult.prev().length > 0) {
						s.selectedResult = s.selectedResult.prev().addClass('wc-selected');
					}
					else {
						s.selectedResult = null;
					}
				}
			}
			else if (e.which == 13 && s.selectedResult) {/*[3]*/
				e.preventDefault();
				if (s.selectedResult.children('a').first().is('#wc-submit-search-b')){
					s.searchForm.submit();
				}
				else {
					window.location = s.selectedResult.children('a').first().attr('href');
				}
					
			}
		}
	}


	/****************************************
	Switch the forms action
	****************************************/
	function switchAction(thing){
		s.currentAction = thing;
		var action = '';
		if (s.currentAction === 'people'){
			action = $(s.peopleAction).text();
		}
		if (s.currentAction === 'website'){
			action = $(s.websiteAction).text();
		}
		$(s.searchForm)[0].setAttribute('action',action);
	}

	/****************************************
	Clear the results
	****************************************/
	function clearList(){
		s.resultsList.empty();
	}


	/****************************************
	Hide everything, clear the results
	****************************************/
	function hideAll(){
		s.loader.css({'display':'none'});
		clearList();
		s.resultsBox.hide();
	}

	/****************************************
	Highlight buttons when clicked
	****************************************/
	function toggleButton(button){
		if (button === 'people'){
			s.peopleButton.addClass('wc-highlighted');
			s.websiteButton.removeClass('wc-highlighted');
		}
		if (button === 'website'){
			s.websiteButton.addClass('wc-highlighted');
			s.peopleButton.removeClass('wc-highlighted');
		}
	}


	/****************************************
	When done, set working = false
	****************************************/
	function done(){
		s.working = false;
	}


	/****************************************
	Return public API
	****************************************/
	return{
		s:s,
		init:init,
		hideAll:hideAll,
		showHideOptions:showHideOptions
	};
})();

/**********************************
#SLIDER-CONTROL

Info
		Controls for slideshows, mobile sliders, and anything else that
		uses Slick Slider - https://github.com/kenwheeler/slick.

**********************************/

var SliderControl = (function(){
	'use strict';

	/**********************************
	Settings
	
	Notes
	[1] 	Note that or slide shows, the default width is hard-coded in here as the width
			of a detail page's main content (roughly 3/4 the width of a page). This is what's
			used to calculate the aspect ratio, so slideshows won't have the correct height
			if they're used in places with a width other than that.
	[2] 	The default ratio. See the resize() function for details on how this works
	**********************************/
	var s = {
		sliderclass:'.wc-slider',
		slideShows:[],
		categorySliders:[],
		mobileSliders:[],
		defaultWidth:846, /*[1]*/
		defaultRatio: 310/846 /*[2]*/
	};

	/**********************************
	Initialize

	Notes
	[1][2][3] 	Separating these out so we can control when they're einitialized. Because of
				how Slick works, it's important for the category sliders to be initalized 
				after their children mobileSliders.
	[4] 		If there are nested sliders, make sure to remove the script tags otherwise
				slick treats them like slides.
	**********************************/
	function init() {
		if($(s.sliderclass).length > 0){
			$(s.sliderclass).each(function(){
				var wcParams 		= $(this).data('wcParams');
				var slickParams 	= $(this).data('slickParams');
				if(wcParams){
					if (wcParams.type == 'slideshow' && slickParams){
						s.slideShows.push({
							slider:$(this),
							wcParams:wcParams,
							slickParams:slickParams
						});
					}
					else if(wcParams.type == 'mobileSlider'){
						slickParams = slickParams?slickParams:{};
						s.mobileSliders.push({
							slider:$(this),
							wcParams:wcParams,
							slickParams:slickParams
						});
					}
					else if(wcParams.type == 'categorySlider'){
						s.categorySliders.push({
							slider:$(this),
							wcParams:wcParams,
							slickParams:slickParams
						});
					}
					else{
						log('Slider Error: There was a problem with the parameters');
					}
				}
			});
			for (var i = 0; i < s.slideShows.length; i++) {/*[1]*/
				var slideShow = s.slideShows[i];
				makeSlideshow(slideShow.slider,slideShow.wcParams,slideShow.slickParams,i);
			}
			for (var k = 0; k < s.mobileSliders.length; k++) { /*[2]*/
				var mobileSlider = s.mobileSliders[k];
				makeMobileSlider(mobileSlider.slider,mobileSlider.wcParams,mobileSlider.slickParams);
			}
			for (var j = 0; j < s.categorySliders.length; j++) {/*[3]*/
				var catSlider = s.categorySliders[j];
				$(catSlider.slider).find('script').remove(); /*[4]*/
				makeCategorySlider(catSlider.slider,catSlider.wcParams,catSlider.slickParams);
			}
			subscriptions();
		}
	}

	/**********************************
	Pub/Sub subscriptions

	Notes
	[1] 	Run this whenever the window size changes (watching Globals.watchWindowSize)
	**********************************/
	function subscriptions(){
		$.subscribe('window.newMeasurements',function(){
			resize('all'); /*[1]*/
		});
	}


	/**********************************
	Make Slideshow

	Notes
	[1] 	Necessary to filter out the events that propagate up from the nested sliders
	[2] 	Unhiding the content once the slider is done loading
	**********************************/
	function makeSlideshow(slider,wcParams,slickParams,index){
		resize(index);
		$(slider)
			.on('init',function(event, slick){
				if(slick.$slider.attr('id') == slider.attr('id')){ /*[1]*/
					$(this).removeClass('wc-invisible'); /*[2]*/
				}
			});
		$(slider).slick(slickParams);
	}

	/**********************************
	Make a mobile slider, these only become sliders on the xs breakpoint

	Notes
	[1] 	Necessary to filter out the events that propagate up from the nested sliders
	[2] 	Unhiding the content once the slider is done loading
	[3] 	Adding this so the slides don't have focus styles.
	**********************************/
	function makeMobileSlider(slider,wcParams,slickParams){
		$(slider)
			.on('init',function(event, slick){
				if(slick.$slider.attr('id') == slider.attr('id')){ /*[1]*/
					$(this).removeClass('wc-invisible'); /*[2]*/
				}
			});
		$(slider).slick({
			responsive:[
				{
					breakpoint:9000,
					settings:"unslick"
				},
				{
					breakpoint:768,
					settings:{
						slidesToShow:1,
						dots: true,
						arrows: false,
						speed:300,
						autoplay: wcParams.autoplay,
						autoplaySpeed: wcParams.autoplaySpeed
					}
				}
			],
			accessibility: false /*[3]*/
		});
	}

	/**********************************
	Make a category slider

	Notes
	[1] 	Necessary to filter out the events that propagate up from the nested sliders
	[2] 	Unhiding the content once the slider is done loading
	[3] 	Make the other categories inactive and this one active
	[4] 	Adding this so the slides don't have focus styles.
	**********************************/
	function makeCategorySlider(slider,wcParams,slickParams){
		wcParams.selectButtons 	= $(wcParams.catBox).find('.wc-slider-category');
		wcParams.leftArrow 		= $(wcParams.catBox).find('.wc-left-arrow').first();
		wcParams.rightArrow 	= $(wcParams.catBox).find('.wc-right-arrow').first();
		$(slider)
			.on('init',function(event, slick){
				if(slick.$slider.attr('id') == slider.attr('id')){ /*[1]*/
					$(this).removeClass('wc-invisible');/*[2]*/
				}
			})
			.on('beforeChange',function(event, slick, currentSlide, nextSlide){
				if(slick.$slider.attr('id') == slider.attr('id')){ 
					$(wcParams.selectButtons).removeClass('wc-active');	/*[3]*/
					$(wcParams.selectButtons[nextSlide]).addClass('wc-active');
				}
			});
		$(slider).slick({
			dots:false,
			arrows:false,
			draggable:false,
			swipe:false,
			autoplay:false,
			accessibility: false /*[4]*/
		});
		bindMobileActions($(slider),wcParams);
	}

	/**********************************
	Bind mobile UI Actions

	Notes
	[1[[2] 	We need to bind these ourselves, if slick does it they add css we don't want
	**********************************/
	function bindMobileActions(slider,wcParams){
		if(wcParams.selectButtons){
			wcParams.selectButtons.click(function(){
				var slide = $(this).data('slide-control').slide;
				slider.slick('slickGoTo',slide);
			});
		}
		if(wcParams.leftArrow){
			wcParams.leftArrow.click(function(){/*[1]*/
				slider.slick('slickPrev');
			});
		}
		if(wcParams.rightArrow){
			wcParams.rightArrow.click(function(){/*[2]*/
				slider.slick('slickNext');
			});
		}
	}

	/**********************************
	Next Slide
	**********************************/
	function nextSlide(data){
		var slider = $('.'+ data.slider);
		slider.slick('slickNext');
		toggleCategory(slider,data);
	}
	
	/**********************************
	Previous Slide
	**********************************/
	function prevSlide(data){
		var slider = $('.'+ data.slider);
		slider.slick('slickPrev');
		toggleCategory(slider,data);
	}
		
	/**********************************
	Toggle the active/not active class
	**********************************/
	function toggleCategory(slider, data){
		var currentSlide = slider.slick('slickCurrentSlide') + 1;
		var thing = '{"slider":"'+data.slider+'","slide":"'+currentSlide+'"}';//Using data here to get the string of the slider's class, not the slider itself
		s.selectButtons.removeClass('wc-active');
		s.selectButtons.filter("[data-slide-control='" + thing + "']").addClass('wc-active'); 
	}

	/**********************************
	Resize the Slider according to its aspect ratio

	Notes
	[-] 	This is used to resize the slider for different screen sizes. To do this
			we need to know its initial aspect ratio, and then use that to set its height
			at smaller breakpoints.
	[1][2] 	The aspect ratio is just the height that the user sets divided by the default
			width (roughtly 3/4 the width of the page). Note that this means if they put a slideshow
			in a column that's skinnier than that, the height will be adjusted accordingly, and it won't
			have the exact pixel height they set in Ingeniux.
	**********************************/
	function resize(index){ 
		var slideShow,slideBoxes, slideWidth, ratio, slideHeight;
		if (index === 'all'){
			for(var i=0;i<s.slideShows.length;i++){
				slideShow 	= s.slideShows[i];
				slideBoxes = $(slideShow.slider).find('.wc-slide-box');
				slideWidth 	= slideBoxes.first().width();
				if(slideShow.wcParams.height){
					ratio = slideShow.wcParams.height / s.defaultWidth; /*[1]*/
				}
				else{
					ratio = s.defaultRatio; 
				}
				slideHeight = slideWidth * ratio;
				slideBoxes.height(slideHeight);
			}
		}
		else{
			slideShow 	= s.slideShows[index];
			slideBoxes 	= $(slideShow.slider).find('.wc-slide-box');
			slideWidth 	= slideBoxes.first().width();
			if(slideShow.wcParams.height){
				ratio = slideShow.wcParams.height / s.defaultWidth; /*[2]*/
			}
			else{
				ratio = s.defaultRatio; 
			}
			slideHeight = slideWidth * ratio;
			slideBoxes.height(slideHeight);
		}
	}

	/**********************************
	Cleanup unnecessary aria attributes
	
	Notes
	[1] 	aria-describedby - don't think these are necessary and
			when there are no nav dots they break compatibility
	**********************************/
	function ariaCleanup(){
		/**********************************
		- can't really use this yet because it looks like init fires before the
		aria attributes are added, waiting on slick to fix this - https://github.com/kenwheeler/slick/pull/2030
		- after that's fixed, add this to .on('init',function(){....}) when you create the
		sliders
		**********************************/
		$('.slick-slide').each(function(){
			if($(this).attr('aria-describedby') !== undefined){
				$(this).removeAttr('aria-describedby');
			}
		});
	}


	// Return the public API
	return{
		s:s,
		init:init,
		resize:resize
	};
})();


/**********************************
#SPREADSHEET-CONTROL

Notes
[-] 	Using the google sheets API and datatables
		- https://developers.google.com/sheets/
		- https://datatables.net/ 
[-] 	Right now, you can only use this component once on a page, otherwise 
		datatables will throw an error. I'm not sure if it's possible to have
		multiple data tables on a single page with independent parameters
		- ref https://www.datatables.net/examples/basic_init/multiple_tables.html
**********************************/
var SpreadsheetControl = (function(){
	'use strict';
	/**********************************
	Settings
	**********************************/ 
	var s = {
		componentClass:'.wc-spreadsheet-component',
		components:[]
	};

	/**********************************
	Initialize the client

	Notes
	[1][2] 	Need to wait for the datatables JS and Google API client library to load before using them
	[3] 	Note that because of how google is returning its errors, right 
			now I don't think this hideLoaders() will trigger if the .js file
			isn't there. :( Leaving it in there just to show my good intentions (and
			maybe this will change in the future #whoknows) - meanspa 9.26.16
	**********************************/
	function init(){
		findComponents();
		if(s.components.length > 0){
			for (var i = s.components.length - 1; i >= 0; i--) {
				s.components[i].$component.append(s.components[i].$loader);
			}
			var resources = [
				'../plugins/datatables/datatables.min.js',
				'https://apis.google.com/js/client.js',
				'../plugins/datatables/datatables_wc.min.css'
			];
			Globals.getStuff(resources)
				.then(function(){
					gapi.load('client',function(){/*[1]*/
						var discoveryUrl  = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
						gapi.client.setApiKey(Globals.s.apiKeys.GoogleDrive);
						gapi.client.load(discoveryUrl).then(loadSheets);
					})
				})
				.catch(hideLoaders); /*[3]*/
		}
	}

	/**********************************
	Find the components and format their data

	Notes
	[1] 	Build the range of the data you want (ex: wcSheet2!A:D). Note that we 
			only want whole columns from rangeStart and rangeEnd, not specific cells.
			The google sheets api could specific cells, but it would screw up our
			truncated column calculations in buildTable().
	**********************************/
	function findComponents(){
		$(s.componentClass).each(function(){
			var params = $(this).data('sParams');
			if(params && params.docID){
				var c = {
					$component:$(this),
					$table:$(this).find('.wc-spreadsheet-table').first(),
					$loader: $('<div/>').addClass('wc-loader wc-medium-loader').text('Loading...'),
					id:$(this).attr('id'),
					docID:params.docID,
					params:params,
					range:params.sheetName+'!'+params.rangeStart+':'+params.rangeEnd /*[1]*/
				}
				c.params.responsive = (c.params.responsive.toUpperCase() === 'TRUE');
				c.params.paging = (c.params.paging.toUpperCase() === 'TRUE');
				c.params.searching = (c.params.searching.toUpperCase() === 'TRUE');
				c.params.truncateLength = parseInt(c.params.truncateLength,10);
				s.components.push(c);
			}
			else{
				log('Spreadsheet Component Error: error initializing component - insufficient parameters');
			}
		});
	}

	/**********************************
	Get the data from Google
	**********************************/
	function loadSheets(){
		for (var i = 0; i < s.components.length; i++) {
			var c = s.components[i];
			gapi.client.sheets.spreadsheets.values.get({
				spreadsheetId:c.docID,
				range:c.range
			}).then(function(response){
				c.data = response.result;
				buildTable(c);
			})
		}
	}

	/**********************************
	Build the table

	Notes
	[1] 	Need to separate out the headers for passing to DataTables
	[2] 	Check to see if this column should be hidden on desktop. Need to 
			adjust for c.params.rangeStart.
	[3]		Removing headers from the data
	[4] 	Truncate the columns that need to be truncated
	[5] 	Need to adjust for c.params.rangeStart
	**********************************/
	function buildTable(c){
		c.colHeaders = [];
		for (var i = 0; i < c.data.values[0].length; i++) { /*[1]*/
			var header = {
				title:c.data.values[0][i],
				defaultContent: ''
			};
			if(c.params.hideColumns && c.params.hideColumns.indexOf(WcFun.numToChar(i + WcFun.charToNum(c.params.rangeStart)))>-1){ /*[]*/
				header.className =  'none';
			}
			c.colHeaders.push(header);
		}
		c.data.values.shift(); /*[3]*/
		if(c.params.truncateColumns){ /*[4]*/
			c.params.truncateLength = c.params.truncateLength?c.params.truncateLength:40;
			var cols = c.params.truncateColumns.split(',');
			for (var m = 0; m < cols.length; m++) {
				cols[m] = WcFun.charToNum(cols[m]) - WcFun.charToNum(c.params.rangeStart); /*[5]*/
			}
			for (var k = 0; k < cols.length; k++) {
				for (var j = 0; j < c.data.values.length; j++) {
					c.data.values[j][cols[k]] = WcFun.collapseText(c.data.values[j][cols[k]],c.params.truncateLength);
				}
			}
		}
		c.$table.DataTable({
			data: c.data.values,
			columns:c.colHeaders,
			responsive: c.params.responsive,
			paging:c.params.paging,
			searching:c.params.searching,
			stripe: true,
			initComplete: function() {
				hideLoaders(c);
			}
		});
	}

	/**********************************
	Hide the loaders
	**********************************/
	function hideLoaders(c){
		if(c){
			c.$loader.remove();
		}
		else{
			for (var i = s.components.length - 1; i >= 0; i--) {
				s.components[i].$loader.remove();
			}
		}
	}

	return {
		s:s,
		init:init
	}
})();

/**********************************
#TAXONOMY-LIST-CONTROL

Notes
[-] 	This is the module for managing our taxonomy indexes. Most of 
		the relevant code for how taxonomy indexes work is is in the taxonomy index
		factory function - objects/taxonomy-index.js. This module is primarily for
		finding them on a page and setting them up.
**********************************/
var TaxonomyIndexControl = (function(){
	'use strict';
	
	/****************************************
	Settings
	****************************************/
	var s = {
		componentClass:'.wc-taxonomy-index-component',
		components:[]
	};

	/****************************************
	Initialize the module
	****************************************/
	function init() {
		findComponents();
		s.components.forEach(function(c){
			c.setup();
		});
	}

	/**********************************
	Find components, create objects for them
	**********************************/
	function findComponents(){
		$(s.componentClass).each(function(){
			var data = $(this).data('tnParams');
			if(data){
				if(WcFun.toBool(data.useUrlParams) && s.components.length > 0){
					log('Taxonomy List Control Error: Already using url parameters for a taxonomy list on this page, removing this option');
					data.useUrlParams = 'false';
				}
				var newThing = TaxonomyIndex(data,$(this));
				s.components.push(newThing);
			}
		});
	}

	/****************************************
	Return public API
	****************************************/
	return {
		s:s,
		init:init
	};
})();

/**********************************
#VIDEO-GALLERY-CONTROL

Info
		This module manages video components and video gallery components on a page.

Notes
[1] 	We only care about videos that open in a modal window, we don't
		have any JS for embedded videos or video components that just
		link directly to the video's url.
**********************************/
var VideoControl = (function(){
	'use strict';

	var s = {
		videoClass:'.wc-modal-video', /*[1]*/
		galleryClass:'.wc-video-gallery-component',
		template:'',
		closeButtonClass:'',
		videos:[],
		galleries:[],
		modal:undefined
	};

	/**********************************
	Initialize the module

	Notes
	[1] 	Setup templates for special magazine articles (Example: whitman.edu/at-the-hub))
	[2] 	Default template
	[3] 	Encountered some problems with Safari where it was measuring things wrong, this
			seems to fix it.
	**********************************/
	function init(){
		if($('html').hasClass('wc-magazine-page') && $('html').hasClass('wc-white-modal')){ /*[1]*/
			s.closeButtonClass 	= 	'.wc-lightbox-close-button';
			s.template 			= 	'<div class="wc-video-modal-box modal-dialog wc-lightbox wc-magazine-lightbox">'+
										'<div class="wc-magazine-lightbox-topbar">'+
											'<button class="wc-lightbox-close-button" role="Close" aria-label="Close">'+
												'<svg viewBox="0 0 32 32">'+
													'<use xlink:href="${svgPath}#icon-menu-x"></use>'+
												'</svg>'+
											'</button>'+
										'</div>'+
										'${content}'+
									'</div>';
		}
		else{
			s.template = '<div class="wc-video-modal-box modal-dialog">${content}</div>'; /*[2]*/
		}

		findVideos();
		findGalleries();
		$(window).on('load',function(){ /*[3]*/
			if (s.videos.length > 0 ) {
				s.videos.forEach(function(v){
					v.setup();
				})
			}
			if (s.galleries.length > 0) {
				s.galleries.forEach(function(g){
					g.setup();
				})
			}
		});
	}

	/**********************************
	Find the videos on a page

	Notes
	[1] 	All videos on the page (including those in galleries) share 
			one modal - if it hasn't been created yet, make it.
	**********************************/
	function findVideos(){
		$(s.videoClass).each(function(i, e) {
			if(!s.modal){ /*[1]*/
				s.modal = Modal({
					template:s.template,
					id:'wc-videos',
					closeButton:s.closeButtonClass
				});
			}
			var video = Video({
				$element:$(e),
				modal:s.modal
			});
			s.videos.push(video);
		});
	}

	/**********************************
	Find the video galleries on the page
	**********************************/
	function findGalleries(){
		$(s.galleryClass).each(function(){
			var gallery = VideoGallery({
				$element:$(this)
			});
			s.galleries.push(gallery);
		});
	}

	return {
		init:init,
		s:s
	}
})();

/**********************************
#FUNCTIONS

Info
		Just a module for handy functions we can use throughout the site.
**********************************/
var WcFun = (function(){
	'use strict';

	/****************************************
	Settings
	****************************************/
	var s = {
		months:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		monthsAbv:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	};

	/**********************************
	Format the date in a way that's handy for us

	Notes
	[1] 	Adding one, otherwise January = 0
	**********************************/
	function formatDate(date){
		var formatted = {
			date:date,
			year:date.getFullYear().toString().slice(2),
			month:s.months[date.getMonth()],
			monthAbv:s.monthsAbv[date.getMonth()],
			monthNum:date.getMonth() + 1,
			day:date.getDate(),
			slashDate:undefined,
			time:formatTime(date)
		}
		formatted.slashDate = formatted.monthNum + '/' + formatted.day + '/' + formatted.year;
		return formatted;
	}

	/**********************************
	Format the time so it's usable
	**********************************/
	function formatTime(time){
		var formatted = {
			minute:time.getMinutes(),
			hour:time.getHours(),
			ampm:'AM',
			timeString:''
		};
		if (formatted.hour > 11){
			formatted.ampm = 'PM';
		}
		if (formatted.hour > 12){
			formatted.hour -= 12;
		}
		if (formatted.minute < 10){
			formatted.minute = '0'+formatted.minute;
		}
		formatted.timeString = formatted.hour + ':'+formatted.minute + ' ' + formatted.ampm;
		return formatted;
	}

	/**********************************
	Truncate's the description, add ellipsis
	**********************************/
	function truncate(str,len){
		var formatted = str;
		if (str.length > len){
			formatted = formatted.substr(0, len);
			formatted += '...';
		}
		return formatted;
	}

	/**********************************
	Truncate text with a "more" button to show the rest of it

	Notes
	[1] 	The space before the button tag is deliberate
	[2] 	Unsing the uncollapseText function for uncollapsing the text
	**********************************/
	function collapseText(str,len){
		len = len?len:30;
		if(str && str.length > len){
			var extra = str.substr(len,str.length);
			str = truncate(str,len);
			var moreButton = ' <button class="wc-more-text-button" data-text="'+extra+'" onclick="WcFun.uncollapseText(this)">more</button>'; /*[1]*/ /*[2]*/
			str += moreButton;
		}
		return str;
	}

	/**********************************
	Unccollapse text that was collapsed by the collapseText function

	Notes
	[1] 	Removing 4 characters - 3 periods for the ellipsis and 1 space before the button
	**********************************/
	function uncollapseText(btn){
		var extra = $(btn).data('text')
		var $parent = $(btn).parent();
		$(btn).remove();
		var newText = $parent.text().substr(0, $parent.text().length - 4) + extra; /*[1]*/
		$parent.text(newText)
	}

	/**********************************
	Returns the number of a given letter in the alphabet (A = 0, B = 1 etc.)
	**********************************/
	function charToNum(v){
		v = v.toUpperCase();
		var i = 'ABCDEFGHIJKLMNOPQRSTUFWXYZ'.indexOf(v);
		if(i === -1){
			i = undefined;
		}
		return i;
	}

	/**********************************
	Returns the letter of the alphabet for the given number (0=A, 1=B, 25=Z etc.)
	**********************************/
	function numToChar(i){
		var c;
		if(i>25){
			c = undefined;
		}
		else{
			c = 'ABCDEFGHIJKLMNOPQRSTUFWXYZ'[i]
		}
		return c;
	}

	/*********************************
	Return a random Int
	*********************************/
	function randomInt(min,max){
		return (Math.floor(Math.random() * (max-min+1)) + min);
	}


	/**********************************
	Just a function for converting 'undefined' and 'null' to an empty string
	**********************************/
	function emptyIfNull(string){
		if(string){return string;}
		else{return '';}
	}

	/**********************************
	Just a function for converting an empty string to null
	**********************************/
	function nullIfEmpty(string){
		if(string === '' || string === null || string === undefined){
			return null;
		}
		else{return string;}
	}

	/**********************************
	Randomize the order of an array

	Info
	[-] 	This is the Fisher-Yates Shuffle
			ref: http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	**********************************/ 
	function shuffleArray(array){
		var currentIndex = array.length, temporaryValue, randomIndex;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	/****************************************
	This method puts the phab in Alphabatize

	Info
	[1] 	Aphabatize an array of strings
	****************************************/
	function alphabetize(array){
		array.sort(function(itemA,itemB){ /*[1]*/
			return itemA.title.localeCompare(itemB.title);
		});
		return array;
	}

	/**********************************
	Convert a strig to a boolean

	Info
	[-] 	Should return false if it's anything but a string that equals
			'true' or a true boolean. Ignores case.
	**********************************/
	function toBool(str){
		if(str === true){
			return true;
		}
		else if(str){
			return (str.toUpperCase() === 'TRUE');
		}
		else{
			return false;
		}
	}

	/****************************************
	Return public API
	****************************************/
	return{
		s:s,
		formatDate:formatDate,
		formatTime:formatTime,
		truncate:truncate,
		collapseText:collapseText,
		uncollapseText:uncollapseText,
		charToNum:charToNum,
		numToChar:numToChar,
		randomInt:randomInt,
		emptyIfNull:emptyIfNull,
		shuffleArray:shuffleArray,
		nullIfEmpty:nullIfEmpty,
		alphabetize:alphabetize,
		toBool:toBool
	};
})();

/**********************************
#INIT

Info
		Initializing the various JS modules, the order is important.

Notes
[-] 	Documentation on how we're writing our Javascript - https://collab.whitman.edu/wiki/display/WEB/Javascript+Notes
**********************************/

/****************************************
#VENDOR-STUFF

[1]		Bootstrap Collapse - Apparently the bootstrap collapse method needs to be initialized on
		the elements before you can use it.
[2] 	Fastclick - removes the 300ms delay for mobile devices.
[3] 	Don't run fastclick if there's something on the page that it conflicts with (ex: embedded
		form script from Slate - meanspa 3.3.17)
****************************************/
function initCollapse(){/*[1]*/
	$('.collapse').collapse({toggle:false});
}
$(function() {/*[2]*/
	if($('.wc-no-fastclick').length > 0){ /*[3]*/
		Globals.s.fastClick = false;
	}
	else{
		Globals.s.fastClick = true;
		FastClick.attach(document.body); 
	}
});
svg4everybody();
objectFitImages();


/****************************************
#OUR-MODULES
****************************************/
Globals.init();
DomChanges.init();
MenuControl.init();
ClickOff.init();
KeyControl.init();
SearchControl.init();
DropdownSliderControl.init();
SliderControl.init();
AutoSizeControl.init();
VideoControl.init();
EventsControl.init();
ImageGalleryControl.init();
SpreadsheetControl.init();
CardGalleryControl.init();
TaxonomyIndexControl.init();
InstagramGalleryControl.init();
MapControl.init();
CardComponentControl.init();

/**********************************
#GLOBAL-ALIASES

Notes
[1]		Just for convenience
**********************************/ 
function log(thing){ /*[1]*/
	Globals.log(thing);
}
//# sourceMappingURL=wc-scripts.js.map