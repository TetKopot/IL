parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=t(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0,c=function(){};return{s:c,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function t(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}document.addEventListener("DOMContentLoaded",function(){var t,r=document.querySelector(".burger__menu"),n=document.querySelector(".menu"),o=document.querySelector(".page__body"),c=document.querySelectorAll(".menu__item"),i=document.querySelectorAll(".switch-wrapper input"),a=document.querySelectorAll(".price"),u=e(i);try{var l=function(){var r=t.value;r.addEventListener("input",function(){var t,n=e(a);try{for(n.s();!(t=n.n()).done;){t.value.classList.add("hide")}}catch(i){n.e(i)}finally{n.f()}var o,c=e(document.querySelectorAll(".price.".concat(r.id)));try{for(c.s();!(o=c.n()).done;){o.value.classList.remove("hide")}}catch(i){c.e(i)}finally{c.f()}})};for(u.s();!(t=u.n()).done;)l()}catch(s){u.e(s)}finally{u.f()}r.addEventListener("click",function(){n.classList.toggle("active"),r.classList.toggle("active"),o.classList.toggle("page__body--with-menu")}),c.forEach(function(e){e.addEventListener("click",function(){document.querySelector(e.querySelector("a").getAttribute("href")).scrollIntoView({behavior:"smooth"}),n.classList.remove("active"),o.classList.remove("page__body--with-menu")})})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.1d67746a.js.map