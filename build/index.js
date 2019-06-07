/*!
 * @technote-space/gutenberg-utils 1.0.2
 * Copyright (c) 2019 Technote <technote.space@gmail.com> (https://technote.space)
 * License: GPL-3.0
 */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Common=n():(t.Technote=t.Technote||{},t.Technote.Gutenberg=t.Technote.Gutenberg||{},t.Technote.Gutenberg.Common=n())}(window,function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=6)}([function(t,n,e){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var e={}.hasOwnProperty;function r(){for(var t=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var i=typeof o;if("string"===i||"number"===i)t.push(o);else if(Array.isArray(o)&&o.length){var u=r.apply(null,o);u&&t.push(u)}else if("object"===i)for(var c in o)e.call(o,c)&&o[c]&&t.push(c)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(o=function(){return r}.apply(n,[]))||(t.exports=o)}()},function(t,n,e){var o=e(2);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(4)(o,r);o.locals&&(t.exports=o.locals)},function(t,n,e){(t.exports=e(3)(!1)).push([t.i,'/**\r\n * Colors\r\n */\n.components-dropdown-button {\n  padding: 3px;\n  display: flex; }\n  .components-dropdown-button__popover .components-popover__content {\n    min-width: 200px;\n    padding: 10px; }\n  .components-dropdown-button__toggle {\n    width: auto;\n    margin: 0;\n    padding: 4px;\n    border: 1px solid transparent;\n    display: flex;\n    flex-direction: row; }\n    .components-dropdown-button__toggle.is-active, .components-dropdown-button__toggle.is-active:hover {\n      box-shadow: none;\n      background-color: #555d66;\n      color: #fff; }\n    .components-dropdown-button__toggle:focus::before {\n      top: -3px;\n      right: -3px;\n      bottom: -3px;\n      left: -3px; }\n    .components-dropdown-button__toggle:hover, .components-dropdown-button__toggle:focus, .components-dropdown-button__toggle:not(:disabled):not([aria-disabled="true"]):not(.is-default):hover {\n      color: #555d66;\n      box-shadow: inset 0 0 0 1px #555d66, inset 0 0 0 2px #fff; }\n  .components-dropdown-button__indicator::after {\n    content: "";\n    pointer-events: none;\n    display: block;\n    width: 0;\n    height: 0;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent;\n    border-top: 5px solid;\n    margin-left: 4px;\n    margin-right: 2px; }\n\n#editor.block-editor__container .components-popover.components-color-palette__picker {\n  z-index: 1000001; }\n',""])},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var r=(u=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(u))))+" */"),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[e].concat(i).concat([r]).join("\n")}var u;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<t.length;r++){var u=t[r];null!=u[0]&&o[u[0]]||(e&&!u[2]?u[2]=e:e&&(u[2]="("+u[2]+") and ("+e+")"),n.push(u))}},n}},function(t,n,e){var o,r,i={},u=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),c=function(t){var n={};return function(t,e){if("function"==typeof t)return t();if(void 0===n[t]){var o=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}n[t]=o}return n[t]}}(),a=null,s=0,f=[],l=e(5);function p(t,n){for(var e=0;e<t.length;e++){var o=t[e],r=i[o.id];if(r){r.refs++;for(var u=0;u<r.parts.length;u++)r.parts[u](o.parts[u]);for(;u<o.parts.length;u++)r.parts.push(h(o.parts[u],n))}else{var c=[];for(u=0;u<o.parts.length;u++)c.push(h(o.parts[u],n));i[o.id]={id:o.id,refs:1,parts:c}}}}function d(t,n){for(var e=[],o={},r=0;r<t.length;r++){var i=t[r],u=n.base?i[0]+n.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};o[u]?o[u].parts.push(c):e.push(o[u]={id:u,parts:[c]})}return e}function v(t,n){var e=c(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=f[f.length-1];if("top"===t.insertAt)o?o.nextSibling?e.insertBefore(n,o.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),f.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=c(t.insertAt.before,e);e.insertBefore(n,r)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=f.indexOf(t);n>=0&&f.splice(n,1)}function b(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return e.nc}();o&&(t.attrs.nonce=o)}return y(n,t.attrs),v(t,n),n}function y(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function h(t,n){var e,o,r,i;if(n.transform&&t.css){if(!(i="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=i}if(n.singleton){var u=s++;e=a||(a=b(n)),o=x.bind(null,e,u,!1),r=x.bind(null,e,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(n,t.attrs),v(t,n),n}(n),o=function(t,n,e){var o=e.css,r=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||i)&&(o=l(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var u=new Blob([o],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(u),c&&URL.revokeObjectURL(c)}.bind(null,e,n),r=function(){m(e),e.href&&URL.revokeObjectURL(e.href)}):(e=b(n),o=function(t,n){var e=n.css,o=n.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){m(e)});return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else r()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=u()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=d(t,n);return p(e,n),function(t){for(var o=[],r=0;r<e.length;r++){var u=e[r];(c=i[u.id]).refs--,o.push(c)}t&&p(d(t,n),n);for(r=0;r<o.length;r++){var c;if(0===(c=o[r]).refs){for(var a=0;a<c.parts.length;a++)c.parts[a]();delete i[c.id]}}}};var g,w=(g=[],function(t,n){return g[t]=n,g.filter(Boolean).join("\n")});function x(t,n,e,o){var r=e?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(n,r);else{var i=document.createTextNode(r),u=t.childNodes;u[n]&&t.removeChild(u[n]),u.length?t.insertBefore(i,u[n]):t.appendChild(i)}}},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,o=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var r,i=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,n,e){"use strict";e.r(n);var o={};e.r(o),e.d(o,"Icon",function(){return p}),e.d(o,"DropdownButton",function(){return x});var r={};e.r(r),e.d(r,"getActiveStyle",function(){return O}),e.d(r,"addActiveAttributes",function(){return A}),e.d(r,"setActiveStyle",function(){return E}),e.d(r,"onChangeStyle",function(){return T}),e.d(r,"isValidCustomColors",function(){return k}),e.d(r,"isValidCustomFontSizes",function(){return L}),e.d(r,"getColors",function(){return N}),e.d(r,"getFontSizes",function(){return M}),e.d(r,"getProperty",function(){return P}),e.d(r,"setProperty",function(){return B}),e.d(r,"parameterManager",function(){return z}),e.d(r,"getTranslator",function(){return G});var i=e(0),u=e.n(i),c=wp.components,a=c.SVG,s=c.Dashicon,f=wp.url.isURL,l=window.lodash.isString,p=function t(n){var e=n.icon,o=n.className,r=n.defaultIcon,i=void 0!==r&&r;return function(t){return l(t)&&(f(t)||/^data:image/.test(t))}(e)?function(t,n){return wp.element.createElement(a,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"".concat(20,"px"),height:"".concat(20,"px"),viewBox:"0 0 ".concat(20," ").concat(20),"enable-background":"new 0 0 ".concat(20," ").concat(20),className:n},wp.element.createElement("image",{width:20,height:20,x:"0",y:"0",xlinkHref:t}))}(e,u()("components-icon components-icon__svg",o)):function(t){return l(t)&&/^dashicons-/.test(t)}(e)?function(t,n){return wp.element.createElement(s,{icon:t.replace(/^dashicons-/,""),className:n})}(e,u()("components-icon components-icon__dashicon",o)):!e&&i?t({icon:i,className:o}):e||null};e(1);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(t,n){return!n||"object"!==d(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,n){return(y=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var h=wp.components.Dropdown,g=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),m(this,b(n).apply(this,arguments))}var e,o,r;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&y(t,n)}(n,h),e=n,(o=[{key:"closeIfClickOutside",value:function(t){if(!this.containerRef.current.contains(t.target)){var n=document.querySelector(".components-color-picker");if(n&&n.contains(t.target))return;var e=document.querySelector(".components-font-size-picker__dropdown-content");if(e&&e.contains(t.target))return;this.close()}}}])&&v(e.prototype,o),r&&v(e,r),n}(),w=wp.components.IconButton,x=function(t){var n=t.icon,e=void 0===n?"menu":n,o=t.label,r=t.tooltip,i=void 0===r?o:r,c=t.className,a=t.position,s=void 0===a?"top right":a,f=t.contentClassName,l=t.renderContent,p=t.isActive,d=void 0!==p&&p,v=t.isDisabled,m=void 0!==v&&v,b=t.isDropdownDisabled,y=void 0!==b&&b;return wp.element.createElement(g,{className:u()("components-dropdown-button",c),contentClassName:u()("components-dropdown-button__popover",f),position:s,renderToggle:function(t){var n=t.isOpen,r=t.onToggle;return n&&y&&r(),wp.element.createElement(w,{className:u()("components-dropdown-button__toggle",{"is-active":d}),icon:e,onClick:r,"aria-haspopup":"true","aria-expanded":n,"aria-pressed":d,label:o,tooltip:i,disabled:m},wp.element.createElement("span",{className:"components-dropdown-button__indicator"}))},renderContent:l})},_=wp.richText,S=_.getActiveFormat,j=_.applyFormat,C=_.removeFormat,O=function(t,n,e){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{suffix:void 0,defaultStyle:!1,filter:void 0};if(!t.isActive)return o.defaultStyle;var r=S(t.value,n);if(!r||!r.attributes)return o.defaultStyle;var i=r.attributes.style||r.unregisteredAttributes&&r.unregisteredAttributes.style;if(!i)return o.defaultStyle;var u=i.replace(new RegExp("^".concat(e,":\\s*")),""),c=function(t){return o.filter?o.filter(t):t};return o.suffix?c(u.replace(new RegExp("".concat(o.suffix,"$")),"")):c(u)},A=function(t,n,e){var o=t.activeAttributes||{};return o[n]=e,o},E=function(t,n,e){return A(t,"style","".concat(n,": ").concat(e))},T=function(t,n,e){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return function(r){return void 0===r?t.onChange(C(t.value,n)):r?t.onChange(j(t.value,{type:n,attributes:E(t,e,r+o)})):null}},R=wp.data.select,U=function(){return R("core/editor").getEditorSettings()},k=function(){return!U().disableCustomColors},L=function(){return!U().disableCustomFontSizes},N=function(){return U().colors},M=function(){return U().fontSizes};function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var P=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,o=n.split("."),r=!0,i=!1,u=void 0;try{for(var c,a=o[Symbol.iterator]();!(r=(c=a.next()).done);r=!0){var s=c.value;if(!(s in t))return"function"==typeof e?e():e;t=t[s]}}catch(t){i=!0,u=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw u}}return t},B=function t(n,e,o){var r=Array.isArray(e)?e:e.split(".");if(r.length>1){var i=r.shift();return"object"!==I(n[i])&&(n[i]={}),n[i]=t(n[i],r,o),n}return n[r[0]]=o,n},D=function(t){return function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;return P(t,n,e)}},F=function(t){return function(n,e){return B(t,n,e)}},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{get:D(t),set:F(t)}},G=function(t){return function(n){return z(t).get("translate."+n,n)}};e.d(n,"Components",function(){return o}),e.d(n,"Helpers",function(){return r})}])});