parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"cE2j":[function(require,module,exports) {
module.exports=function(){for(var o=0;o<arguments.length;o++)if(void 0!==arguments[o])return arguments[o]};
},{}],"6IqQ":[function(require,module,exports) {
var r=require("defined"),e=["mm","cm","m","pc","pt","in","ft","px"],t={m:{system:"metric",factor:1},cm:{system:"metric",factor:.01},mm:{system:"metric",factor:.001},pt:{system:"imperial",factor:1/72},pc:{system:"imperial",factor:1/6},in:{system:"imperial",factor:1},ft:{system:"imperial",factor:12}};const i={metric:{unit:"m",ratio:1/.0254},imperial:{unit:"in",ratio:.0254}};function o(r,e){return Number(Math.round(r+"e"+e)+"e-"+e)}function n(n,m,s,a){if("number"!=typeof n||!isFinite(n))throw new Error("Value must be a finite number");if(!m||!s)throw new Error("Must specify from and to units");var f=r((a=a||{}).pixelsPerInch,96),u=a.precision,c=!1!==a.roundPixel;if(m=m.toLowerCase(),s=s.toLowerCase(),-1===e.indexOf(m))throw new Error('Invalid from unit "'+m+'", must be one of: '+e.join(", "));if(-1===e.indexOf(s))throw new Error('Invalid from unit "'+s+'", must be one of: '+e.join(", "));if(m===s)return n;var p=1,y=1,d=!1;"px"===m&&(y=1/f,m="in"),"px"===s&&(d=!0,p=f,s="in");var l=t[m],w=t[s],x=n*l.factor*y;l.system!==w.system&&(x*=i[l.system].ratio);var b=x/w.factor*p;return d&&c?b=Math.round(b):"number"==typeof u&&isFinite(u)&&(b=o(b,u)),b}module.exports=n,module.exports.units=e;
},{"defined":"cE2j"}],"DzB2":[function(require,module,exports) {
var define;
var global = arguments[3];
var t,e=arguments[3];!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("convert-length")):"function"==typeof t&&t.amd?t(["convert-length"],n):e.canvasSketch=n(null)}(this,function(t){t=t&&t.hasOwnProperty("default")?t.default:t;var n=function(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]},i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;var s=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(t){i[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(r){return!1}}()?Object.assign:function(t,e){for(var n,s,a=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),p=1;p<arguments.length;p++){for(var c in n=Object(arguments[p]))r.call(n,c)&&(a[c]=n[c]);if(i){s=i(n);for(var u=0;u<s.length;u++)o.call(n,s[u])&&(a[s[u]]=n[s[u]])}}return a},a="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function p(t,e){return t(e={exports:{}},e.exports),e.exports}var c=a.performance&&a.performance.now?function(){return performance.now()}:Date.now||function(){return+new Date},u=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then};var h=function(t){return!(!t||"object"!=typeof t)&&("object"==typeof window&&"object"==typeof window.Node?t instanceof window.Node:"number"==typeof t.nodeType&&"string"==typeof t.nodeName)};function d(){return"undefined"!=typeof window&&window["canvas-sketch-cli"]}function l(){return"undefined"!=typeof document}var f,m=p(function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}(t.exports="function"==typeof Object.keys?Object.keys:n).shim=n}),y=(m.shim,p(function(t,e){var n="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();function i(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function r(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}(e=t.exports=n?i:r).supported=i,e.unsupported=r})),g=(y.supported,y.unsupported,p(function(t){var e=Array.prototype.slice,n=t.exports=function(t,o,s){return s||(s={}),t===o||(t instanceof Date&&o instanceof Date?t.getTime()===o.getTime():!t||!o||"object"!=typeof t&&"object"!=typeof o?s.strict?t===o:t==o:function(t,o,s){var a,p;if(i(t)||i(o))return!1;if(t.prototype!==o.prototype)return!1;if(y(t))return!!y(o)&&(t=e.call(t),o=e.call(o),n(t,o,s));if(r(t)){if(!r(o))return!1;if(t.length!==o.length)return!1;for(a=0;a<t.length;a++)if(t[a]!==o[a])return!1;return!0}try{var c=m(t),u=m(o)}catch(h){return!1}if(c.length!=u.length)return!1;for(c.sort(),u.sort(),a=c.length-1;a>=0;a--)if(c[a]!=u[a])return!1;for(a=c.length-1;a>=0;a--)if(p=c[a],!n(t[p],o[p],s))return!1;return typeof t==typeof o}(t,o,s))};function i(t){return null==t}function r(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}})),v=p(function(t,e){!function(e){var n,i,r,o=(n=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,r=/[^-+\dA-Z]/g,function(t,e,a,p){if(1!==arguments.length||"string"!==(null===(c=t)?"null":void 0===c?"undefined":"object"!=typeof c?typeof c:Array.isArray(c)?"array":{}.toString.call(c).slice(8,-1).toLowerCase())||/\d/.test(t)||(e=t,t=void 0),(t=t||new Date)instanceof Date||(t=new Date(t)),isNaN(t))throw TypeError("Invalid date");var c,u=(e=String(o.masks[e]||e||o.masks.default)).slice(0,4);"UTC:"!==u&&"GMT:"!==u||(e=e.slice(4),a=!0,"GMT:"===u&&(p=!0));var h=a?"getUTC":"get",d=t[h+"Date"](),l=t[h+"Day"](),f=t[h+"Month"](),m=t[h+"FullYear"](),y=t[h+"Hours"](),g=t[h+"Minutes"](),v=t[h+"Seconds"](),w=t[h+"Milliseconds"](),b=a?0:t.getTimezoneOffset(),x=function(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var n=new Date(e.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var i=e.getTimezoneOffset()-n.getTimezoneOffset();e.setHours(e.getHours()-i);var r=(e-n)/6048e5;return 1+Math.floor(r)}(t),_=function(t){var e=t.getDay();return 0===e&&(e=7),e}(t),k={d:d,dd:s(d),ddd:o.i18n.dayNames[l],dddd:o.i18n.dayNames[l+7],m:f+1,mm:s(f+1),mmm:o.i18n.monthNames[f],mmmm:o.i18n.monthNames[f+12],yy:String(m).slice(2),yyyy:m,h:y%12||12,hh:s(y%12||12),H:y,HH:s(y),M:g,MM:s(g),s:v,ss:s(v),l:s(w,3),L:s(Math.round(w/10)),t:y<12?o.i18n.timeNames[0]:o.i18n.timeNames[1],tt:y<12?o.i18n.timeNames[2]:o.i18n.timeNames[3],T:y<12?o.i18n.timeNames[4]:o.i18n.timeNames[5],TT:y<12?o.i18n.timeNames[6]:o.i18n.timeNames[7],Z:p?"GMT":a?"UTC":(String(t).match(i)||[""]).pop().replace(r,""),o:(b>0?"-":"+")+s(100*Math.floor(Math.abs(b)/60)+Math.abs(b)%60,4),S:["th","st","nd","rd"][d%10>3?0:(d%100-d%10!=10)*d%10],W:x,N:_};return e.replace(n,function(t){return t in k?k[t]:t.slice(1,t.length-1)})});function s(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}o.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},o.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},t.exports=o}()}),w="",b=function(t,e){if("string"!=typeof t)throw new TypeError("expected a string");if(1===e)return t;if(2===e)return t+t;var n=t.length*e;if(f!==t||void 0===f)f=t,w="";else if(w.length>=n)return w.substr(0,n);for(;n>w.length&&e>1;)1&e&&(w+=t),e>>=1,t+=t;return w=(w+=t).substr(0,n)};var x,_=function(t,e,n){return t=t.toString(),void 0===e?t:(n=0===n?"0":n?n.toString():" ",b(n,e-t.length)+t)},k=function(){},R=["image/png","image/jpeg","image/webp"];function T(t,e){return void 0===e&&(e={}),function(t){return new Promise(function(e){var n=t.indexOf(",");if(-1!==n){for(var i=t.slice(n+1),r=window.atob(i),o=/data:([^;+]);/.exec(t),s=(o?o[1]:"")||void 0,a=new ArrayBuffer(r.length),p=new Uint8Array(a),c=0;c<r.length;c++)p[c]=r.charCodeAt(c);e(new window.Blob([a],{type:s}))}else e(new window.Blob)})}(t).then(function(t){return M(t,e)})}function M(t,e){return void 0===e&&(e={}),new Promise(function(n){var i=function(t){void 0===t&&(t={});if("function"==typeof(t=s({},t)).file)return t.file(t);if(t.file)return t.file;var e=null,n="";"string"==typeof t.extension&&(n=t.extension);if("number"==typeof t.frame){var i;i="number"==typeof t.totalFrames?t.totalFrames:Math.max(1e3,t.frame),e=_(String(t.frame),String(i).length,"0")}var r=isFinite(t.totalLayers)&&isFinite(t.layer)&&t.totalLayers>1?""+t.layer:"";if(null!=e)return[r,e].filter(Boolean).join("-")+n;var o=t.timeStamp;return[t.prefix,t.name||o,r,t.hash,t.suffix].filter(Boolean).join("-")+n}(e=s({extension:"",prefix:"",suffix:""},e)),r=d();if(r&&"function"==typeof r.saveBlob&&r.output)return r.saveBlob(t,s({},e,{filename:i})).then(function(t){return n(t)});x||((x=document.createElement("a")).style.visibility="hidden",x.target="_blank"),x.download=i,x.href=window.URL.createObjectURL(t),document.body.appendChild(x),x.onclick=function(){x.onclick=k,setTimeout(function(){window.URL.revokeObjectURL(t),document.body.removeChild(x),x.removeAttribute("href"),n({filename:i,client:!1})})},x.click()})}var F={dimension:"dimensions",animated:"animate",animating:"animate",unit:"units",P5:"p5",pixellated:"pixelated",looping:"loop",pixelPerInch:"pixels"},P=["dimensions","units","pixelsPerInch","orientation","scaleToFit","scaleToView","bleed","pixelRatio","exportPixelRatio","maxPixelRatio","scaleContext","resizeCanvas","styleCanvas","canvas","context","attributes","parent","file","name","prefix","suffix","animate","playing","loop","duration","totalFrames","fps","playbackRate","timeScale","frame","time","flush","pixelated","hotkeys","p5","id","scaleToFitPadding","data","params","encoding","encodingQuality"],j=function(t){Object.keys(t).forEach(function(t){if(t in F){var e=F[t];console.warn('[canvas-sketch] Could not recognize the setting "'+t+'", did you mean "'+e+'"?')}else P.includes(t)||console.warn('[canvas-sketch] Could not recognize the setting "'+t+'"')})};var E=[["postcard",101.6,152.4],["poster-small",280,430],["poster",460,610],["poster-large",610,910],["business-card",50.8,88.9],["a0",841,1189],["a1",594,841],["a2",420,594],["a3",297,420],["a4",210,297],["a5",148,210],["a6",105,148],["a7",74,105],["a8",52,74],["a9",37,52],["a10",26,37],["2a0",1189,1682],["4a0",1682,2378],["b0",1e3,1414],["b1",707,1e3],["b1+",720,1020],["b2",500,707],["b2+",520,720],["b3",353,500],["b4",250,353],["b5",176,250],["b6",125,176],["b7",88,125],["b8",62,88],["b9",44,62],["b10",31,44],["b11",22,32],["b12",16,22],["c0",917,1297],["c1",648,917],["c2",458,648],["c3",324,458],["c4",229,324],["c5",162,229],["c6",114,162],["c7",81,114],["c8",57,81],["c9",40,57],["c10",28,40],["c11",22,32],["c12",16,22],["half-letter",5.5,8.5,"in"],["letter",8.5,11,"in"],["legal",8.5,14,"in"],["junior-legal",5,8,"in"],["ledger",11,17,"in"],["tabloid",11,17,"in"],["ansi-a",8.5,11,"in"],["ansi-b",11,17,"in"],["ansi-c",17,22,"in"],["ansi-d",22,34,"in"],["ansi-e",34,44,"in"],["arch-a",9,12,"in"],["arch-b",12,18,"in"],["arch-c",18,24,"in"],["arch-d",24,36,"in"],["arch-e",36,48,"in"],["arch-e1",30,42,"in"],["arch-e2",26,38,"in"],["arch-e3",27,39,"in"]].reduce(function(t,e){var n={units:e[3]||"mm",dimensions:[e[1],e[2]]};return t[e[0]]=n,t[e[0].replace(/-/g," ")]=n,t},{});function C(e,n,i,r){return void 0===n&&(n="px"),void 0===i&&(i="px"),void 0===r&&(r=72),t(e,n,i,{pixelsPerInch:r,precision:4,roundPixel:!0})}function S(t,e){var i,r,o,s,a,p,c=l(),u=e.dimensions,h=function(t){return!(!t.dimensions||"string"!=typeof t.dimensions&&!(Array.isArray(t.dimensions)&&t.dimensions.length>=2))}(e),d=t.exporting,f=!!h&&!1!==e.scaleToFit,m=!(!d&&h)||e.scaleToView;c||(f=m=!1);var y,g,v=e.units,w="number"==typeof e.pixelsPerInch&&isFinite(e.pixelsPerInch)?e.pixelsPerInch:72,b=n(e.bleed,0),x=c?window.devicePixelRatio:1,_=m?x:1;"number"==typeof e.pixelRatio&&isFinite(e.pixelRatio)?(y=e.pixelRatio,g=n(e.exportPixelRatio,y)):h?(y=_,g=n(e.exportPixelRatio,1)):(y=x,g=n(e.exportPixelRatio,y)),"number"==typeof e.maxPixelRatio&&isFinite(e.maxPixelRatio)&&(y=Math.min(e.maxPixelRatio,y),g=Math.min(e.maxPixelRatio,g)),d&&(y=g);var k,R,T=function(t,e){if(!l())return[300,150];var n=e.parent||window;if(n===window||n===document||n===document.body)return[window.innerWidth,window.innerHeight];var i=n.getBoundingClientRect();return[i.width,i.height]}(0,e),M=T[0],F=T[1];if(h){var P=function(t,e,n){if(void 0===e&&(e="px"),void 0===n&&(n=72),"string"==typeof t){var i=t.toLowerCase();if(!(i in E))throw new Error('The dimension preset "'+t+'" is not supported or could not be found; try using a4, a3, postcard, letter, etc.');var r=E[i];return r.dimensions.map(function(t){return C(t,r.units,e,n)})}return t}(u,v,w),j=Math.max(P[0],P[1]),S=Math.min(P[0],P[1]);if(e.orientation){var O="landscape"===e.orientation;i=O?j:S,r=O?S:j}else i=P[0],r=P[1];k=i,R=r,i+=2*b,r+=2*b}else k=i=M,R=r=F;var D=i,N=r;if(h&&v&&(D=C(i,v,"px",w),N=C(r,v,"px",w)),o=Math.round(D),s=Math.round(N),f&&!d&&h){var A=i/r,H=M/F,z=n(e.scaleToFitPadding,40),L=Math.round(M-2*z),U=Math.round(F-2*z);(o>L||s>U)&&(H>A?(s=U,o=Math.round(s*A)):(o=L,s=Math.round(o/A)))}return{bleed:b,pixelRatio:y,width:i,height:r,dimensions:[i,r],units:v||"px",scaleX:(a=m?Math.round(y*o):Math.round(y*D))/i,scaleY:(p=m?Math.round(y*s):Math.round(y*N))/r,viewportWidth:m?Math.round(o):Math.round(D),viewportHeight:m?Math.round(s):Math.round(N),canvasWidth:a,canvasHeight:p,trimWidth:k,trimHeight:R,styleWidth:o,styleHeight:s}}var O=function(t,e){if("string"!=typeof t)throw new TypeError("must specify type string");if(e=e||{},"undefined"==typeof document&&!e.canvas)return null;var n=e.canvas||document.createElement("canvas");"number"==typeof e.width&&(n.width=e.width);"number"==typeof e.height&&(n.height=e.height);var i,r=e;try{var o=[t];0===t.indexOf("webgl")&&o.push("experimental-"+t);for(var s=0;s<o.length;s++)if(i=n.getContext(o[s],r))return i}catch(a){i=null}return i||null};function D(t){var e,n;void 0===t&&(t={});var i=!1;if(!1!==t.canvas){if(!(e=t.context)||"string"==typeof e){var r=t.canvas;r||(r=function(){if(!l())throw new Error("It appears you are runing from Node.js or a non-browser environment. Try passing in an existing { canvas } interface instead.");return document.createElement("canvas")}(),i=!0);var o=e||"2d";if("function"!=typeof r.getContext)throw new Error("The specified { canvas } element does not have a getContext() function, maybe it is not a <canvas> tag?");if(!(e=O(o,s({},t.attributes,{canvas:r}))))throw new Error("Failed at canvas.getContext('"+o+"') - the browser may not support this context, or a different context may already be in use with this canvas.")}if(n=e.canvas,t.canvas&&n!==t.canvas)throw new Error("The { canvas } and { context } settings must point to the same underlying canvas element");t.pixelated&&(e.imageSmoothingEnabled=!1,e.mozImageSmoothingEnabled=!1,e.oImageSmoothingEnabled=!1,e.webkitImageSmoothingEnabled=!1,e.msImageSmoothingEnabled=!1,n.style["image-rendering"]="pixelated")}return{canvas:n,context:e,ownsCanvas:i}}var N=function(){var t=this;this._settings={},this._props={},this._sketch=void 0,this._raf=null,this._lastRedrawResult=void 0,this._isP5Resizing=!1,this._keyboardShortcuts=function(t){void 0===t&&(t={});var e=function(e){if(t.enabled()){var n=d();83!==e.keyCode||e.altKey||!e.metaKey&&!e.ctrlKey?32===e.keyCode?t.togglePlay(e):n&&!e.altKey&&75===e.keyCode&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),t.commit(e)):(e.preventDefault(),t.save(e))}};return{attach:function(){window.addEventListener("keydown",e)},detach:function(){window.removeEventListener("keydown",e)}}}({enabled:function(){return!1!==t.settings.hotkeys},save:function(e){e.shiftKey?t.props.recording?(t.endRecord(),t.run()):t.record():t.exportFrame()},togglePlay:function(){t.props.playing?t.pause():t.play()},commit:function(e){t.exportFrame({commit:!0})}}),this._animateHandler=function(){return t.animate()},this._resizeHandler=function(){t.resize()&&t.render()}},A={sketch:{configurable:!0},settings:{configurable:!0},props:{configurable:!0}};A.sketch.get=function(){return this._sketch},A.settings.get=function(){return this._settings},A.props.get=function(){return this._props},N.prototype._computePlayhead=function(t,e){return"number"==typeof e&&isFinite(e)?t/e:0},N.prototype._computeFrame=function(t,e,n,i){return isFinite(n)&&n>1?Math.floor(t*(n-1)):Math.floor(i*e)},N.prototype._computeCurrentFrame=function(){return this._computeFrame(this.props.playhead,this.props.time,this.props.totalFrames,this.props.fps)},N.prototype._getSizeProps=function(){var t=this.props;return{width:t.width,height:t.height,pixelRatio:t.pixelRatio,canvasWidth:t.canvasWidth,canvasHeight:t.canvasHeight,viewportWidth:t.viewportWidth,viewportHeight:t.viewportHeight}},N.prototype.run=function(){if(!this.sketch)throw new Error("should wait until sketch is loaded before trying to play()");return!1!==this.settings.playing&&this.play(),"function"==typeof this.sketch.dispose&&console.warn("In canvas-sketch@0.0.23 the dispose() event has been renamed to unload()"),this.props.started||(this._signalBegin(),this.props.started=!0),this.tick(),this.render(),this},N.prototype.play=function(){var t=this.settings.animate;"animation"in this.settings&&(t=!0,console.warn("[canvas-sketch] { animation } has been renamed to { animate }")),t&&(l()?this.props.playing||(this.props.started||(this._signalBegin(),this.props.started=!0),this.props.playing=!0,null!=this._raf&&window.cancelAnimationFrame(this._raf),this._lastTime=c(),this._raf=window.requestAnimationFrame(this._animateHandler)):console.error("[canvas-sketch] WARN: Using { animate } in Node.js is not yet supported"))},N.prototype.pause=function(){this.props.recording&&this.endRecord(),this.props.playing=!1,null!=this._raf&&l()&&window.cancelAnimationFrame(this._raf)},N.prototype.togglePlay=function(){this.props.playing?this.pause():this.play()},N.prototype.stop=function(){this.pause(),this.props.frame=0,this.props.playhead=0,this.props.time=0,this.props.deltaTime=0,this.props.started=!1,this.render()},N.prototype.record=function(){var t=this;if(!this.props.recording)if(l()){this.stop(),this.props.playing=!0,this.props.recording=!0;var e=1/this.props.fps;null!=this._raf&&window.cancelAnimationFrame(this._raf);var n=function(){return t.props.recording?(t.props.deltaTime=e,t.tick(),t.exportFrame({sequence:!0}).then(function(){t.props.recording&&(t.props.deltaTime=0,t.props.frame++,t.props.frame<t.props.totalFrames?(t.props.time+=e,t.props.playhead=t._computePlayhead(t.props.time,t.props.duration),t._raf=window.requestAnimationFrame(n)):(console.log("Finished recording"),t._signalEnd(),t.endRecord(),t.stop(),t.run()))})):Promise.resolve()};this.props.started||(this._signalBegin(),this.props.started=!0),this._raf=window.requestAnimationFrame(n)}else console.error("[canvas-sketch] WARN: Recording from Node.js is not yet supported")},N.prototype._signalBegin=function(){var t=this;this.sketch&&"function"==typeof this.sketch.begin&&this._wrapContextScale(function(e){return t.sketch.begin(e)})},N.prototype._signalEnd=function(){var t=this;this.sketch&&"function"==typeof this.sketch.end&&this._wrapContextScale(function(e){return t.sketch.end(e)})},N.prototype.endRecord=function(){null!=this._raf&&l()&&window.cancelAnimationFrame(this._raf),this.props.recording=!1,this.props.deltaTime=0,this.props.playing=!1},N.prototype.exportFrame=function(t){var e=this;if(void 0===t&&(t={}),!this.sketch)return Promise.all([]);"function"==typeof this.sketch.preExport&&this.sketch.preExport();var n=s({sequence:t.sequence,frame:t.sequence?this.props.frame:void 0,file:this.settings.file,name:this.settings.name,prefix:this.settings.prefix,suffix:this.settings.suffix,encoding:this.settings.encoding,encodingQuality:this.settings.encodingQuality,timeStamp:v(new Date,"yyyy.mm.dd-HH.MM.ss"),totalFrames:isFinite(this.props.totalFrames)?Math.max(100,this.props.totalFrames):1e3}),i=d(),r=Promise.resolve();if(i&&t.commit&&"function"==typeof i.commit){var o=s({},n),a=i.commit(o);r=u(a)?a:Promise.resolve(a)}return r.then(function(t){return e._doExportFrame(s({},n,{hash:t||""}))})},N.prototype._doExportFrame=function(t){var e=this;void 0===t&&(t={}),this._props.exporting=!0,this.resize();var i=this.render(),r=this.props.canvas;return void 0===i&&(i=[r]),i=(i=[].concat(i).filter(Boolean)).map(function(e){var i,r="object"==typeof e&&e&&("data"in e||"dataURL"in e),o=r?e.data:e,a=r?s({},e,{data:o}):{data:o};if(h(i=o)&&/canvas/i.test(i.nodeName)&&"function"==typeof i.getContext){var p=function(t,e){void 0===e&&(e={});var n=e.encoding||"image/png";if(!R.includes(n))throw new Error("Invalid canvas encoding "+n);var i=(n.split("/")[1]||"").replace(/jpeg/i,"jpg");return i&&(i=("."+i).toLowerCase()),{extension:i,type:n,dataURL:t.toDataURL(n,e.encodingQuality)}}(o,{encoding:a.encoding||t.encoding,encodingQuality:n(a.encodingQuality,t.encodingQuality,.95)}),c=p.dataURL,u=p.extension,d=p.type;return Object.assign(a,{dataURL:c,extension:u,type:d})}return a}),this._props.exporting=!1,this.resize(),this.render(),Promise.all(i.map(function(e,n,i){var r=s({},t,e,{layer:n,totalLayers:i.length}),o=e.data;if(e.dataURL){var a=e.dataURL;return delete r.dataURL,T(a,r)}return function(t,e){void 0===e&&(e={});var n=Array.isArray(t)?t:[t];return M(new window.Blob(n,{type:e.type||""}),e)}(o,r)})).then(function(n){if(n.length>0){var i,r=n.find(function(t){return t.outputName}),o=n.some(function(t){return t.client});i=n.length>1?n.length:r?r.outputName+"/"+n[0].filename:""+n[0].filename;var s="";if(t.sequence)s=isFinite(e.props.totalFrames)?" (frame "+(t.frame+1)+" / "+e.props.totalFrames+")":" (frame "+t.frame+")";else n.length>1&&(s=" files");var a=o?"canvas-sketch-cli":"canvas-sketch";console.log("%c["+a+"]%c Exported %c"+i+"%c"+s,"color: #8e8e8e;","color: initial;","font-weight: bold;","font-weight: initial;")}"function"==typeof e.sketch.postExport&&e.sketch.postExport()})},N.prototype._wrapContextScale=function(t){this._preRender(),t(this.props),this._postRender()},N.prototype._preRender=function(){var t=this.props;this.props.gl||!t.context||t.p5?t.p5&&t.p5.scale(t.scaleX/t.pixelRatio,t.scaleY/t.pixelRatio):(t.context.save(),!1!==this.settings.scaleContext&&t.context.scale(t.scaleX,t.scaleY))},N.prototype._postRender=function(){var t=this.props;this.props.gl||!t.context||t.p5||t.context.restore(),t.gl&&!1!==this.settings.flush&&!t.p5&&t.gl.flush()},N.prototype.tick=function(){this.sketch&&"function"==typeof this.sketch.tick&&(this._preRender(),this.sketch.tick(this.props),this._postRender())},N.prototype.render=function(){return this.props.p5?(this._lastRedrawResult=void 0,this.props.p5.redraw(),this._lastRedrawResult):this.submitDrawCall()},N.prototype.submitDrawCall=function(){if(this.sketch){var t,e=this.props;return this._preRender(),"function"==typeof this.sketch?t=this.sketch(e):"function"==typeof this.sketch.render&&(t=this.sketch.render(e)),this._postRender(),t}},N.prototype.update=function(t){var e=this;void 0===t&&(t={});var n=["animate"];Object.keys(t).forEach(function(t){if(n.indexOf(t)>=0)throw new Error("Sorry, the { "+t+" } option is not yet supported with update().")});var i=this._settings.canvas,r=this._settings.context;for(var o in t){var s=t[o];void 0!==s&&(e._settings[o]=s)}var a=Object.assign({},this._settings,t);if("time"in t&&"frame"in t)throw new Error("You should specify { time } or { frame } but not both");if("time"in t?delete a.frame:"frame"in t&&delete a.time,"duration"in t&&"totalFrames"in t)throw new Error("You should specify { duration } or { totalFrames } but not both");"duration"in t?delete a.totalFrames:"totalFrames"in t&&delete a.duration,"data"in t&&(this._props.data=t.data);var p=this.getTimeProps(a);if(Object.assign(this._props,p),i!==this._settings.canvas||r!==this._settings.context){var c=D(this._settings),u=c.canvas,h=c.context;this.props.canvas=u,this.props.context=h,this._setupGLKey(),this._appendCanvasIfNeeded()}return t.p5&&"function"!=typeof t.p5&&(this.props.p5=t.p5,this.props.p5.draw=function(){e._isP5Resizing||(e._lastRedrawResult=e.submitDrawCall())}),"playing"in t&&(t.playing?this.play():this.pause()),j(this._settings),this.resize(),this.render(),this.props},N.prototype.resize=function(){var t=this._getSizeProps(),e=this.settings,n=this.props,i=S(n,e);Object.assign(this._props,i);var r=this.props,o=r.pixelRatio,s=r.canvasWidth,a=r.canvasHeight,p=r.styleWidth,c=r.styleHeight,u=this.props.canvas;u&&!1!==e.resizeCanvas&&(n.p5?u.width===s&&u.height===a||(this._isP5Resizing=!0,n.p5.pixelDensity(o),n.p5.resizeCanvas(s/o,a/o,!1),this._isP5Resizing=!1):(u.width!==s&&(u.width=s),u.height!==a&&(u.height=a)),l()&&!1!==e.styleCanvas&&(u.style.width=p+"px",u.style.height=c+"px"));var h=this._getSizeProps(),d=!g(t,h);return d&&this._sizeChanged(),d},N.prototype._sizeChanged=function(){this.sketch&&"function"==typeof this.sketch.resize&&this.sketch.resize(this.props)},N.prototype.animate=function(){if(this.props.playing)if(l()){this._raf=window.requestAnimationFrame(this._animateHandler);var t=c(),e=1e3/this.props.fps,n=t-this._lastTime,i=this.props.duration,r="number"==typeof i&&isFinite(i),o=!0,s=this.settings.playbackRate;"fixed"===s?n=e:"throttle"===s?n>e?(t-=n%e,this._lastTime=t):o=!1:this._lastTime=t;var a=n/1e3,p=this.props.time+a*this.props.timeScale;p<0&&r&&(p=i+p);var u=!1,h=!1,d=!1!==this.settings.loop;if(r&&p>=i&&(d?(o=!0,p%=i,h=!0):(o=!1,p=i,u=!0),this._signalEnd()),o){this.props.deltaTime=a,this.props.time=p,this.props.playhead=this._computePlayhead(p,i);var f=this.props.frame;this.props.frame=this._computeCurrentFrame(),h&&this._signalBegin(),f!==this.props.frame&&this.tick(),this.render(),this.props.deltaTime=0}u&&this.pause()}else console.error("[canvas-sketch] WARN: Animation in Node.js is not yet supported")},N.prototype.dispatch=function(t){if("function"!=typeof t)throw new Error("must pass function into dispatch()");t(this.props),this.render()},N.prototype.mount=function(){this._appendCanvasIfNeeded()},N.prototype.unmount=function(){l()&&(window.removeEventListener("resize",this._resizeHandler),this._keyboardShortcuts.detach()),this.props.canvas.parentElement&&this.props.canvas.parentElement.removeChild(this.props.canvas)},N.prototype._appendCanvasIfNeeded=function(){l()&&(!1!==this.settings.parent&&this.props.canvas&&!this.props.canvas.parentElement&&(this.settings.parent||document.body).appendChild(this.props.canvas))},N.prototype._setupGLKey=function(){var t;this.props.context&&("function"==typeof(t=this.props.context).clear&&"function"==typeof t.clearColor&&"function"==typeof t.bufferData?this._props.gl=this.props.context:delete this._props.gl)},N.prototype.getTimeProps=function(t){void 0===t&&(t={});var e=t.duration,i=t.totalFrames,r=n(t.timeScale,1),o=n(t.fps,24),s="number"==typeof e&&isFinite(e),a="number"==typeof i&&isFinite(i),p=s?Math.floor(o*e):void 0,c=a?i/o:void 0;if(s&&a&&p!==i)throw new Error("You should specify either duration or totalFrames, but not both. Or, they must match exactly.");void 0===t.dimensions&&void 0!==t.units&&console.warn("You've specified a { units } setting but no { dimension }, so the units will be ignored."),i=n(i,p,1/0),e=n(e,c,1/0);var u=t.time,h=t.frame,d="number"==typeof u&&isFinite(u),l="number"==typeof h&&isFinite(h),f=0,m=0,y=0;if(d&&l)throw new Error("You should specify either start frame or time, but not both.");return d?(f=u,y=this._computePlayhead(f,e),m=this._computeFrame(y,f,i,o)):l&&(f=(m=h)/o,y=this._computePlayhead(f,e)),{playhead:y,time:f,frame:m,duration:e,totalFrames:i,fps:o,timeScale:r}},N.prototype.setup=function(t){var e=this;if(void 0===t&&(t={}),this.sketch)throw new Error("Multiple setup() calls not yet supported.");this._settings=Object.assign({},t,this._settings),j(this._settings);var n=D(this._settings),i=n.context,r=n.canvas,o=this.getTimeProps(this._settings);this._props=Object.assign({},o,{canvas:r,context:i,deltaTime:0,started:!1,exporting:!1,playing:!1,recording:!1,settings:this.settings,data:this.settings.data,render:function(){return e.render()},togglePlay:function(){return e.togglePlay()},dispatch:function(t){return e.dispatch(t)},tick:function(){return e.tick()},resize:function(){return e.resize()},update:function(t){return e.update(t)},exportFrame:function(t){return e.exportFrame(t)},record:function(){return e.record()},play:function(){return e.play()},pause:function(){return e.pause()},stop:function(){return e.stop()}}),this._setupGLKey(),this.resize()},N.prototype.loadAndRun=function(t,e){var n=this;return this.load(t,e).then(function(){return n.run(),n})},N.prototype.unload=function(){var t=this;this.pause(),this.sketch&&("function"==typeof this.sketch.unload&&this._wrapContextScale(function(e){return t.sketch.unload(e)}),this._sketch=null)},N.prototype.destroy=function(){this.unload(),this.unmount()},N.prototype.load=function(t,e){var n=this;if("function"!=typeof t)throw new Error("The function must take in a function as the first parameter. Example:\n  canvasSketcher(() => { ... }, settings)");this.sketch&&this.unload(),void 0!==e&&this.update(e),this._preRender();var i=Promise.resolve();if(this.settings.p5){if(!l())throw new Error("[canvas-sketch] ERROR: Using p5.js in Node.js is not supported");i=new Promise(function(t){var e,i=n.settings.p5;i.p5&&(e=i.preload,i=i.p5);var r=function(i){e&&(i.preload=function(){return e(i)}),i.setup=function(){var e=n.props,r="webgl"===n.settings.context,o=r?i.WEBGL:i.P2D;i.noLoop(),i.pixelDensity(e.pixelRatio),i.createCanvas(e.viewportWidth,e.viewportHeight,o),r&&n.settings.attributes&&i.setAttributes(n.settings.attributes),n.update({p5:i,canvas:i.canvas,context:i._renderer.drawingContext}),t()}};if("function"==typeof i)new i(r);else{if("function"!=typeof window.createCanvas)throw new Error("{ p5 } setting is passed but can't find p5.js in global (window) scope. Maybe you did not create it globally?\nnew p5(); // <-- attaches to global scope");r(window)}})}return i.then(function(){var e=t(n.props);return u(e)||(e=Promise.resolve(e)),e}).then(function(t){return t||(t={}),n._sketch=t,l()&&(n._keyboardShortcuts.attach(),window.addEventListener("resize",n._resizeHandler)),n._postRender(),n._sizeChanged(),n}).catch(function(t){throw console.warn("Could not start sketch, the async loading function rejected with an error:\n    Error: "+t.message),t})},Object.defineProperties(N.prototype,A);var H="hot-id-cache",z=[];function L(t,e){if(void 0===e&&(e={}),e.p5){if(e.canvas||e.context&&"string"!=typeof e.context)throw new Error('In { p5 } mode, you can\'t pass your own canvas or context, unless the context is a "webgl" or "2d" string');var i="string"==typeof e.context&&e.context;e=Object.assign({},e,{canvas:!1,context:i})}var r,o,s=(r=d())&&r.hot;s&&(o=n(e.id,"$__DEFAULT_CANVAS_SKETCH_ID__$"));var a=s&&"string"==typeof o;a&&z.includes(o)&&(console.warn("Warning: You have multiple calls to canvasSketch() in --hot mode. You must pass unique { id } strings in settings to enable hot reload across multiple sketches. ",o),a=!1);var p=Promise.resolve();if(a){z.push(o);var c=function(t){var e=d();if(e)return e[H]=e[H]||{},e[H][t]}(o);if(c){var u=function(){var t,n=(t=c.manager,e.animate?{time:t.props.time}:void 0);return c.manager.destroy(),n};p=c.load.then(u).catch(u)}}return p.then(function(n){var i,r,s,p,c=new N;return t?(e=Object.assign({},e,n),c.setup(e),c.mount(),i=c.loadAndRun(t)):i=Promise.resolve(c),a&&(r=o,s={load:i,manager:c},(p=d())&&(p[H]=p[H]||{},p[H][r]=s)),i})}return L.canvasSketch=L,L.PaperSizes=E,L});
},{"convert-length":"6IqQ"}],"nyCU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.settings=void 0;var t=300,e={animate:!0,duration:4,fps:100,dimensions:[t,t]};exports.settings=e;var i=Math.random(),n=function(){return function(e){var i=e.context,n=e.width,o=e.height,r=e.playhead;i.fillStyle="#55cc99",i.fillRect(0,0,n,o),i.beginPath(),i.lineWidth=2;for(var a=function(t){return Math.sin(t)*o/4+o/2},s=0;s<t;s+=1)i.moveTo(s,a(s*r)),i.lineTo(s,a(s));i.strokeStyle=Math.random()>.5?"white":"pink",i.stroke()}};exports.default=n;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=n(require("canvas-sketch")),t=r(require("./sketch.js"));function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function n(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){c(e,t,r[t])})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=(0,e.default)(t.default,o({},t.settings,{canvas:document.getElementById("canvas")}));module.hot&&module.hot.dispose(function(){u.then(function(e){return console.log(e.destroy())})});
},{"canvas-sketch":"DzB2","./sketch.js":"nyCU"}]},{},["Focm"], null)
//# sourceMappingURL=/sine/sine.fe6f28a7.map