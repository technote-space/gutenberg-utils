/*!
 * @technote-space/gutenberg-utils 0.0.1
 * Copyright (c) 2019 Technote <technote.space@gmail.com> (https://technote.space)
 * License: GPL-3.0
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){var o;
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
!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var i=typeof o;if("string"===i||"number"===i)t.push(o);else if(Array.isArray(o)&&o.length){var s=r.apply(null,o);s&&t.push(s)}else if("object"===i)for(var a in o)n.call(o,a)&&o[a]&&t.push(a)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(o=function(){return r}.apply(e,[]))||(t.exports=o)}()},function(t,e,n){var o=n(2);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,'/**\r\n * Colors\r\n */\n.components-dropdown-button {\n  padding: 3px;\n  display: flex; }\n  .components-dropdown-button__popover .components-popover__content {\n    min-width: 200px;\n    padding: 10px; }\n  .components-dropdown-button__toggle {\n    width: auto;\n    margin: 0;\n    padding: 4px;\n    border: 1px solid transparent;\n    display: flex;\n    flex-direction: row; }\n    .components-dropdown-button__toggle.is-active, .components-dropdown-button__toggle.is-active:hover {\n      box-shadow: none;\n      background-color: #555d66;\n      color: #fff; }\n    .components-dropdown-button__toggle:focus::before {\n      top: -3px;\n      right: -3px;\n      bottom: -3px;\n      left: -3px; }\n    .components-dropdown-button__toggle:hover, .components-dropdown-button__toggle:focus, .components-dropdown-button__toggle:not(:disabled):not([aria-disabled="true"]):not(.is-default):hover {\n      color: #555d66;\n      box-shadow: inset 0 0 0 1px #555d66, inset 0 0 0 2px #fff; }\n  .components-dropdown-button__indicator::after {\n    content: "";\n    pointer-events: none;\n    display: block;\n    width: 0;\n    height: 0;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent;\n    border-top: 5px solid;\n    margin-left: 4px;\n    margin-right: 2px; }\n\n#editor.block-editor__container .components-popover.components-color-palette__picker {\n  z-index: 1000001; }\n',""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];null!=s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var o,r,i={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var o=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),c=null,u=0,p=[],l=n(5);function f(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](o.parts[s]);for(;s<o.parts.length;s++)r.parts.push(y(o.parts[s],e))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(y(o.parts[s],e));i[o.id]={id:o.id,refs:1,parts:a}}}}function d(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}function v(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=p[p.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),p.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(t.insertAt.before,n);n.insertBefore(e,r)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=p.indexOf(t);e>=0&&p.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return n.nc}();o&&(t.attrs.nonce=o)}return h(e,t.attrs),v(t,e),e}function h(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var s=u++;n=c||(c=b(e)),o=x.bind(null,n,s,!1),r=x.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",h(e,t.attrs),v(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=l(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),r=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){m(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return f(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var s=n[r];(a=i[s.id]).refs--,o.push(a)}t&&f(d(t,e),e);for(r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var g,w=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function x(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(e,r);else{var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=wp.components,s=i.SVG,a=i.Dashicon,c=wp.url.isURL,u=window.lodash.isString,p=function t(e){var n=e.icon,o=e.className,i=e.defaultIcon,p=void 0!==i&&i;return function(t){return u(t)&&(c(t)||/^data:image/.test(t))}(n)?function(t,e){return wp.element.createElement(s,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"".concat(20,"px"),height:"".concat(20,"px"),viewBox:"0 0 ".concat(20," ").concat(20),"enable-background":"new 0 0 ".concat(20," ").concat(20),className:e},wp.element.createElement("image",{width:20,height:20,x:"0",y:"0",xlinkHref:t}))}(n,r()("components-icon components-icon__svg",o)):function(t){return u(t)&&/^dashicons-/.test(t)}(n)?function(t,e){return wp.element.createElement(a,{icon:t.replace(/^dashicons-/,""),className:e})}(n,r()("components-icon components-icon__dashicon",o)):!n&&p?t({icon:p,className:o}):n||null};n(1);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function d(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var b=wp.components.Dropdown,h=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,v(e).apply(this,arguments))}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,b),n=e,(o=[{key:"closeIfClickOutside",value:function(t){if(!this.containerRef.current.contains(t.target)){var e=document.querySelector(".components-color-picker");if(e&&e.contains(t.target))return;var n=document.querySelector(".components-font-size-picker__dropdown-content");if(n&&n.contains(t.target))return;this.close()}}}])&&f(n.prototype,o),r&&f(n,r),e}(),y=wp.components.IconButton,g=function(t){var e=t.icon,n=void 0===e?"menu":e,o=t.label,i=t.tooltip,s=void 0===i?o:i,a=t.className,c=t.position,u=void 0===c?"top right":c,p=t.contentClassName,l=t.renderContent,f=t.isActive,d=void 0!==f&&f,v=t.isDisabled,m=void 0!==v&&v,b=t.isDropdownDisabled,g=void 0!==b&&b;return wp.element.createElement(h,{className:r()("components-dropdown-button",a),contentClassName:r()("components-dropdown-button__popover",p),position:u,renderToggle:function(t){var e=t.isOpen,i=t.onToggle;return e&&g&&i(),wp.element.createElement(y,{className:r()("components-dropdown-button__toggle",{"is-active":d}),icon:n,onClick:i,"aria-haspopup":"true","aria-expanded":e,"aria-pressed":d,label:o,tooltip:s,disabled:m},wp.element.createElement("span",{className:"components-dropdown-button__indicator"}))},renderContent:l})},w=wp.richText,x=w.getActiveFormat,_=w.applyFormat,S=w.removeFormat,j=function(t,e,n){var o=t.activeAttributes||{};return o[e]=n,o},O=function(t,e,n){return j(t,"style","".concat(e,": ").concat(n))},C=wp.data.select,A=function(){return C("core/editor").getEditorSettings()};wp.components.extension=wp.components.extension||{},wp.components.extension.Icon=p,wp.components.extension.DropdownButton=g,wp.richText.extension=wp.richText.extension||{},wp.richText.extension.getActiveStyle=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{suffix:void 0,defaultStyle:!1,filter:void 0};if(!t.isActive)return o.defaultStyle;var r=x(t.value,e);if(!r||!r.attributes)return o.defaultStyle;var i=r.attributes.style||r.unregisteredAttributes&&r.unregisteredAttributes.style;if(!i)return o.defaultStyle;var s=i.replace(new RegExp("^".concat(n,":\\s*")),""),a=function(t){return o.filter?o.filter(t):t};return o.suffix?a(s.replace(new RegExp("".concat(o.suffix,"$")),"")):a(s)},wp.richText.extension.addActiveAttributes=j,wp.richText.extension.setActiveStyle=O,wp.richText.extension.onChangeStyle=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return function(r){return void 0===r?t.onChange(S(t.value,e)):r?t.onChange(_(t.value,{type:e,attributes:O(t,n,r+o)})):null}},wp.editor.extension=wp.editor.extension||{},wp.editor.extension.isValidCustomColors=function(){return!A().disableCustomColors},wp.editor.extension.isValidCustomFontSizes=function(){return!A().disableCustomFontSizes},wp.editor.extension.getColors=function(){return A().colors},wp.editor.extension.getFontSizes=function(){return A().fontSizes}}])});