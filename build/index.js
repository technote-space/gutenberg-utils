/*!
 * @technote-space/gutenberg-utils 1.0.14
 * Copyright (c) 2019 Technote <technote.space@gmail.com> (https://technote.space)
 * License: GPL-3.0
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Common=e():(t.Technote=t.Technote||{},t.Technote.Gutenberg=t.Technote.Gutenberg||{},t.Technote.Gutenberg.Common=e())}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){var o;
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
!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var i=typeof o;if("string"===i||"number"===i)t.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&t.push(a)}else if("object"===i)for(var c in o)n.call(o,c)&&o[c]&&t.push(c)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(o=function(){return r}.apply(e,[]))||(t.exports=o)}()},function(t,e,n){var o=n(2);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,'/**\r\n * Colors\r\n */\n.components-dropdown-button {\n  padding: 3px;\n  display: flex; }\n  .components-dropdown-button__popover .components-popover__content {\n    min-width: 200px;\n    padding: 10px; }\n  .components-dropdown-button__toggle {\n    width: auto;\n    margin: 0;\n    padding: 4px;\n    border: 1px solid transparent;\n    display: flex;\n    flex-direction: row; }\n    .components-dropdown-button__toggle.is-active, .components-dropdown-button__toggle.is-active:hover {\n      box-shadow: none;\n      background-color: #555d66;\n      color: #fff; }\n    .components-dropdown-button__toggle:focus::before {\n      top: -3px;\n      right: -3px;\n      bottom: -3px;\n      left: -3px; }\n    .components-dropdown-button__toggle:hover, .components-dropdown-button__toggle:focus, .components-dropdown-button__toggle:not(:disabled):not([aria-disabled="true"]):not(.is-default):hover {\n      color: #555d66;\n      box-shadow: inset 0 0 0 1px #555d66, inset 0 0 0 2px #fff; }\n  .components-dropdown-button__indicator::after {\n    content: "";\n    pointer-events: none;\n    display: block;\n    width: 0;\n    height: 0;\n    border-left: 3px solid transparent;\n    border-right: 3px solid transparent;\n    border-top: 5px solid;\n    margin-left: 4px;\n    margin-right: 2px; }\n  .components-dropdown-button__has-property-color .dashicon {\n    color: #d94f4f; }\n  .components-dropdown-button__has-property-background-color .dashicon {\n    background-color: #f0b849; }\n\n#editor.block-editor__container .components-popover.components-color-palette__picker,\n#editor.block-editor__container .components-font-size-picker__dropdown-content {\n  z-index: 1000001; }\n\n.components-popover__content__dropdown-tooltip {\n  color: black;\n  background-color: white;\n  font-size: 1em !important;\n  line-height: 1.5em;\n  display: flex !important;\n  background-position: left -100% bottom -40% !important;\n  background-size: 200% 1em !important;\n  padding: 2px !important; }\n',""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=o.sources.map(function(t){return"/*# sourceURL=".concat(o.sourceRoot).concat(t," */")});return[n].concat(i).concat([r]).join("\n")}var a,c,u;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<t.length;a++){var c=t[a];null!=c[0]&&o[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="(".concat(c[2],") and (").concat(n,")")),e.push(c))}},e}},function(t,e,n){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),c=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var o=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),u=null,s=0,l=[],f=n(5);function p(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(y(o.parts[a],e))}else{var c=[];for(a=0;a<o.parts.length;a++)c.push(y(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:c}}}}function d(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(c):n.push(o[a]={id:a,parts:[c]})}return n}function m(t,e){var n=c(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=c(t.insertAt.before,n);n.insertBefore(e,r)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return n.nc}();o&&(t.attrs.nonce=o)}return g(e,t.attrs),m(t,e),e}function g(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=s++;n=u||(u=v(e)),o=x.bind(null,n,a,!1),r=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),m(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=f(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,n,e),r=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){b(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return p(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var a=n[r];(c=i[a.id]).refs--,o.push(c)}t&&p(d(t,e),e);for(r=0;r<o.length;r++){var c;if(0===(c=o[r]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}};var h,w=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function x(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){"use strict";n.r(e);var o={};n.r(o),n.d(o,"Icon",function(){return p}),n.d(o,"DropdownButton",function(){return x});var r={};n.r(r),n.d(r,"isOldEditor",function(){return k}),n.d(r,"getEditorStoreKey",function(){return A}),n.d(r,"getEditor",function(){return N}),n.d(r,"getActiveStyle",function(){return Z}),n.d(r,"addActiveAttributes",function(){return tt}),n.d(r,"setActiveStyle",function(){return et}),n.d(r,"onChangeStyle",function(){return nt}),n.d(r,"getToolbarButtonProps",function(){return ot}),n.d(r,"getDropdownButtonProps",function(){return rt}),n.d(r,"getColorButtonProps",function(){return it}),n.d(r,"getFontSizesButtonProps",function(){return ct}),n.d(r,"getContrastChecker",function(){return ut}),n.d(r,"getRemoveFormatFunction",function(){return st}),n.d(r,"isValidCustomColors",function(){return S}),n.d(r,"isValidCustomFontSizes",function(){return E}),n.d(r,"getColors",function(){return O}),n.d(r,"getFontSizes",function(){return j}),n.d(r,"getProperty",function(){return ft}),n.d(r,"setProperty",function(){return pt}),n.d(r,"parameterManager",function(){return bt}),n.d(r,"getTranslator",function(){return vt});var i=n(0),a=n.n(i),c=wp.components,u=c.SVG,s=c.Dashicon,l=wp.url.isURL,f=window.lodash.isString,p=function t(e){var n=e.icon,o=e.className,r=e.defaultIcon,i=void 0!==r&&r;return function(t){return f(t)&&(l(t)||/^data:image/.test(t))}(n)?function(t,e){return wp.element.createElement(u,{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"".concat(20,"px"),height:"".concat(20,"px"),viewBox:"0 0 ".concat(20," ").concat(20),"enable-background":"new 0 0 ".concat(20," ").concat(20),className:e},wp.element.createElement("image",{width:20,height:20,x:"0",y:"0",xlinkHref:t}))}(n,a()("components-icon components-icon__svg",o)):function(t){return f(t)&&/^dashicons-/.test(t)}(n)?function(t,e){return wp.element.createElement(s,{icon:t.replace(/^dashicons-/,""),className:e})}(n,a()("components-icon components-icon__dashicon",o)):!n&&i?t({icon:i,className:o}):n||null};n(1);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=wp.components.Dropdown,h=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,v(e).apply(this,arguments))}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,y),n=e,(o=[{key:"closeIfClickOutside",value:function(t){if(!this.containerRef.current.contains(t.target)){var e=document.querySelector(".components-color-picker, .components-font-size-picker__dropdown-content");if(e&&e.contains(t.target))return;this.close()}}}])&&m(n.prototype,o),r&&m(n,r),e}(),w=wp.components.IconButton,x=function(t){var e=t.icon,n=void 0===e?"menu":e,o=t.label,r=t.tooltip,i=void 0===r?o:r,c=t.className,u=t.position,s=void 0===u?"top right":u,l=t.contentClassName,f=t.renderContent,p=t.isActive,d=void 0!==p&&p,m=t.isDisabled,b=void 0!==m&&m,v=t.isDropdownDisabled,g=void 0!==v&&v;return wp.element.createElement(h,{className:a()("components-dropdown-button",c),contentClassName:a()("components-dropdown-button__popover",l),position:s,renderToggle:function(t){var e=t.isOpen,r=t.onToggle;return e&&g&&r(),wp.element.createElement(w,{className:a()("components-dropdown-button__toggle",{"is-active":d}),icon:n,onClick:r,"aria-haspopup":"true","aria-expanded":e,"aria-pressed":d,label:o,tooltip:i,disabled:b},wp.element.createElement("span",{className:"components-dropdown-button__indicator"}))},renderContent:f})},_=wp.data.select,C=function(){return _("core/editor").getEditorSettings()},S=function(){return!C().disableCustomColors},E=function(){return!C().disableCustomFontSizes},O=function(){return C().colors},j=function(){return C().fontSizes};wp.blockEditor&&wp.blockEditor.BlockEdit||(wp.blockEditor=wp.editor,wp.blockEditor.isOldEditor=!0);var k=function(){return"isOldEditor"in wp.blockEditor&&wp.blockEditor.isOldEditor},A=function(){return k()?"core/editor":"core/block-editor"},N=function(){return k()?wp.editor:wp.blockEditor};function T(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function P(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){U(t,e,n[e])})}return t}function U(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var I=wp.richText,z=I.getActiveFormat,B=I.toggleFormat,L=I.applyFormat,D=I.removeFormat,F=wp.components,M=F.ToolbarButton,G=F.BaseControl,V=F.ColorPalette,$=F.FontSizePicker,q=F.ColorIndicator,H=N(),J=H.getColorObjectByColorValue,K=H.ContrastChecker,Q=wp.element.Fragment,W=wp.i18n,X=W.sprintf,Y=W.__,Z=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(!o.ignoreActive&&!t.isActive)return o.defaultStyle;var r=z(t.value,e);if(!r||!r.attributes)return o.defaultStyle;var i=r.attributes.style||r.unregisteredAttributes&&r.unregisteredAttributes.style;if(!i)return o.defaultStyle;var a=i.replace(new RegExp("^".concat(n,":\\s*")),""),c=function(t){return"function"==typeof o.filter?o.filter(t):t};return o.suffix?c(a.replace(new RegExp("".concat(o.suffix,"$")),"")):c(a)},tt=function(t,e,n){var o=t.activeAttributes||{};return o[e]=n,o},et=function(t,e,n){return tt(t,"style","".concat(e,": ").concat(n))},nt=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return function(r){return void 0===r?t.onChange(D(t.value,e)):r?t.onChange(L(t.value,{type:e,attributes:et(t,n,r+o)})):null}},ot=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{tooltipClass:void 0},r="title"in o?o.title:e,i="className"in o?o.className:e;return R({name:e,group:t,create:function(t){var c=t.args,u=t.formatName;return wp.element.createElement(M,{icon:n,title:wp.element.createElement("div",{className:i},r),onClick:function(){return c.onChange(B(c.value,{type:u}))},isActive:c.isActive,extraProps:{label:e,tooltip:wp.element.createElement("div",{className:a()("components-popover__content__dropdown-tooltip",o.tooltipClass)},wp.element.createElement("div",{className:e},r))}})}},o)},rt=function(t,e,n,o,r,i,c){var u={name:e,inspectorGroup:t,attributes:{style:""},propertyName:r,useInspectorSetting:!0};return i.createDisabled||(u.create=function(t){var e=t.args,u=t.formatName;return wp.element.createElement(x,{icon:o,label:n,className:a()("components-dropdown-button__has-property-".concat(r),i.dropdownClassName),renderContent:function(){return c(e,u,!1)}})}),i.createInspectorDisabled||(u.createInspector=function(t){var e=t.args,n=t.formatName;return c(e,n,!0)}),delete i.createDisabled,delete i.createInspectorDisabled,Object.assign({},u,i)},it=function(t,e,n,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=r.group||"inspector";return delete r.group,rt(i,t,e,n,o,r,function(t,n,r){var i=Z(t,n,o),a=O(),c=function(t,e){return wp.element.createElement(V,{colors:a,disableCustomColors:!S(),value:i,onChange:nt(t,e,o)})};return r?wp.element.createElement(G,{label:at(i,e,a)},c(t,n)):c(t,n)})},at=function(t,e,n){if(!t)return e;var o=J(n,t),r=o&&o.name;return wp.element.createElement(Q,null,e,wp.element.createElement(q,{colorValue:t,"aria-label":X(Y("(%s: %s)"),e.toLowerCase(),r||t)}))},ct=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.group||"inspector";return delete o.group,rt(r,t,e,n,"font-size",o,function(t,e){var n=Z(t,e,"font-size",{suffix:"px",filter:Number});return wp.element.createElement($,{fontSizes:j(),value:n,fallbackFontSize:n,onChange:nt(t,e,"font-size","px")})})},ut=function(t,e){if(!t||!t.length)return null;var n=t.filter(function(t){var e=P(t,1)[0].props;return"propertyName"in e&&"formatName"in e});if(!n.length)return null;var o=Object.assign.apply(Object,T(n.map(function(t){var e=P(t,1)[0].props;return U({},e.propertyName,e)})));if(!("color"in o&&"background-color"in o))return null;var r=Z(e,o.color.formatName,"color",{ignoreActive:!0}),i=Z(e,o["background-color"].formatName,"background-color",{ignoreActive:!0});if(!r||!i)return null;var a="font-size"in o?Z(e,o["font-size"].formatName,"font-size",{suffix:"px",filter:Number,defaultStyle:16,ignoreActive:!0}):16;return wp.element.createElement(G,null,wp.element.createElement(K,{backgroundColor:i,textColor:r,fontSize:a}))},st=function(t){return function(){return t.onChange(R({},t.value,{formats:Array(t.value.formats.length)}))}};function lt(t){return(lt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var ft=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,o=e.split("."),r=!0,i=!1,a=void 0;try{for(var c,u=o[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){var s=c.value;if(!(s in t))return"function"==typeof n?n():n;t=t[s]}}catch(t){i=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return t},pt=function t(e,n,o){var r=Array.isArray(n)?n:n.split(".");if(r.length>1){var i=r.shift();return"object"!==lt(e[i])&&(e[i]={}),e[i]=t(e[i],r,o),e}return e[r[0]]=o,e},dt=function(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return ft(t,e,n)}},mt=function(t){return function(e,n){return pt(t,e,n)}},bt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{get:dt(t),set:mt(t)}},vt=function(t){return function(e){return bt(t).get("translate."+e,e)}};n.d(e,"Components",function(){return o}),n.d(e,"Helpers",function(){return r}),n.d(e,"classnames",function(){return a.a})}])});