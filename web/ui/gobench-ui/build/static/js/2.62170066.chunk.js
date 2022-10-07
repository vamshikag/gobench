/*! For license information please see 2.62170066.chunk.js.LICENSE.txt */
(this["webpackJsonpgobench-ui"]=this["webpackJsonpgobench-ui"]||[]).push([[2],{577:function(e,t){Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}},578:function(e,t){Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|iota|nil|true|false)\b/,number:/(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/}),delete Prism.languages.go["class-name"]},588:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s="navigator"in e&&/Win/i.test(navigator.platform),c="navigator"in e&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),u="npm__react-simple-code-editor__textarea",h=function(e){function t(){var e,n,a;o(this,t);for(var i=arguments.length,u=Array(i),h=0;h<i;h++)u[h]=arguments[h];return n=a=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.state={capture:!0},a._recordCurrentState=function(){var e=a._input;if(e){var t=e.value,n=e.selectionStart,r=e.selectionEnd;a._recordChange({value:t,selectionStart:n,selectionEnd:r})}},a._getLines=function(e,t){return e.substring(0,t).split("\n")},a._recordChange=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a._history,i=n.stack,o=n.offset;if(i.length&&o>-1){a._history.stack=i.slice(0,o+1);var l=a._history.stack.length;if(l>100){var s=l-100;a._history.stack=i.slice(s,l),a._history.offset=Math.max(a._history.offset-s,0)}}var c=Date.now();if(t){var u=a._history.stack[a._history.offset];if(u&&c-u.timestamp<3e3){var h=/[^a-z0-9]([a-z0-9]+)$/i,f=a._getLines(u.value,u.selectionStart).pop().match(h),d=a._getLines(e.value,e.selectionStart).pop().match(h);if(f&&d&&d[1].startsWith(f[1]))return void(a._history.stack[a._history.offset]=r({},e,{timestamp:c}))}}a._history.stack.push(r({},e,{timestamp:c})),a._history.offset++},a._updateInput=function(e){var t=a._input;t&&(t.value=e.value,t.selectionStart=e.selectionStart,t.selectionEnd=e.selectionEnd,a.props.onValueChange(e.value))},a._applyEdits=function(e){var t=a._input,n=a._history.stack[a._history.offset];n&&t&&(a._history.stack[a._history.offset]=r({},n,{selectionStart:t.selectionStart,selectionEnd:t.selectionEnd})),a._recordChange(e),a._updateInput(e)},a._undoEdit=function(){var e=a._history,t=e.stack,n=e.offset,r=t[n-1];r&&(a._updateInput(r),a._history.offset=Math.max(n-1,0))},a._redoEdit=function(){var e=a._history,t=e.stack,n=e.offset,r=t[n+1];r&&(a._updateInput(r),a._history.offset=Math.min(n+1,t.length-1))},a._handleKeyDown=function(e){var t=a.props,n=t.tabSize,r=t.insertSpaces,i=t.ignoreTabKey,o=t.onKeyDown;if(!o||(o(e),!e.defaultPrevented)){27===e.keyCode&&e.target.blur();var l=e.target,u=l.value,h=l.selectionStart,f=l.selectionEnd,d=(r?" ":"\t").repeat(n);if(9===e.keyCode&&!i&&a.state.capture)if(e.preventDefault(),e.shiftKey){var p=a._getLines(u,h),g=p.length-1,y=a._getLines(u,f).length-1,v=u.split("\n").map((function(e,t){return t>=g&&t<=y&&e.startsWith(d)?e.substring(d.length):e})).join("\n");if(u!==v){var m=p[g];a._applyEdits({value:v,selectionStart:m.startsWith(d)?h-d.length:h,selectionEnd:f-(u.length-v.length)})}}else if(h!==f){var b=a._getLines(u,h),k=b.length-1,_=a._getLines(u,f).length-1,x=b[k];a._applyEdits({value:u.split("\n").map((function(e,t){return t>=k&&t<=_?d+e:e})).join("\n"),selectionStart:/\S/.test(x)?h+d.length:h,selectionEnd:f+d.length*(_-k+1)})}else{var w=h+d.length;a._applyEdits({value:u.substring(0,h)+d+u.substring(f),selectionStart:w,selectionEnd:w})}else if(8===e.keyCode){var S=h!==f;if(u.substring(0,h).endsWith(d)&&!S){e.preventDefault();var C=h-d.length;a._applyEdits({value:u.substring(0,h-d.length)+u.substring(f),selectionStart:C,selectionEnd:C})}}else if(13===e.keyCode){if(h===f){var E=a._getLines(u,h).pop().match(/^\s+/);if(E&&E[0]){e.preventDefault();var O="\n"+E[0],K=h+O.length;a._applyEdits({value:u.substring(0,h)+O+u.substring(f),selectionStart:K,selectionEnd:K})}}}else if(57===e.keyCode||219===e.keyCode||222===e.keyCode||192===e.keyCode){var P=void 0;57===e.keyCode&&e.shiftKey?P=["(",")"]:219===e.keyCode?P=e.shiftKey?["{","}"]:["[","]"]:222===e.keyCode?P=e.shiftKey?['"','"']:["'","'"]:192!==e.keyCode||e.shiftKey||(P=["`","`"]),h!==f&&P&&(e.preventDefault(),a._applyEdits({value:u.substring(0,h)+P[0]+u.substring(h,f)+P[1]+u.substring(f),selectionStart:h,selectionEnd:f+2}))}else!(c?e.metaKey&&90===e.keyCode:e.ctrlKey&&90===e.keyCode)||e.shiftKey||e.altKey?(c?e.metaKey&&90===e.keyCode&&e.shiftKey:s?e.ctrlKey&&89===e.keyCode:e.ctrlKey&&90===e.keyCode&&e.shiftKey)&&!e.altKey?(e.preventDefault(),a._redoEdit()):77!==e.keyCode||!e.ctrlKey||c&&!e.shiftKey||(e.preventDefault(),a.setState((function(e){return{capture:!e.capture}}))):(e.preventDefault(),a._undoEdit())}},a._handleChange=function(e){var t=e.target,n=t.value,r=t.selectionStart,i=t.selectionEnd;a._recordChange({value:n,selectionStart:r,selectionEnd:i},!0),a.props.onValueChange(n)},a._history={stack:[],offset:-1},l(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this._recordCurrentState()}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,a=t.style,o=t.padding,l=t.highlight,s=t.textareaId,c=t.textareaClassName,h=t.autoFocus,d=t.disabled,p=t.form,g=t.maxLength,y=t.minLength,v=t.name,m=t.placeholder,b=t.readOnly,k=t.required,_=t.onClick,x=t.onFocus,w=t.onBlur,S=t.onKeyUp,C=(t.onKeyDown,t.onValueChange,t.tabSize,t.insertSpaces,t.ignoreTabKey,t.preClassName),E=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["value","style","padding","highlight","textareaId","textareaClassName","autoFocus","disabled","form","maxLength","minLength","name","placeholder","readOnly","required","onClick","onFocus","onBlur","onKeyUp","onKeyDown","onValueChange","tabSize","insertSpaces","ignoreTabKey","preClassName"]),O={paddingTop:o,paddingRight:o,paddingBottom:o,paddingLeft:o},K=l(n);return i.createElement("div",r({},E,{style:r({},f.container,a)}),i.createElement("textarea",{ref:function(t){return e._input=t},style:r({},f.editor,f.textarea,O),className:u+(c?" "+c:""),id:s,value:n,onChange:this._handleChange,onKeyDown:this._handleKeyDown,onClick:_,onKeyUp:S,onFocus:x,onBlur:w,disabled:d,form:p,maxLength:g,minLength:y,name:v,placeholder:m,readOnly:b,required:k,autoFocus:h,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),i.createElement("pre",r({className:C,"aria-hidden":"true",style:r({},f.editor,f.highlight,O)},"string"===typeof K?{dangerouslySetInnerHTML:{__html:K+"<br />"}}:{children:K})),i.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:"\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.npm__react-simple-code-editor__textarea:empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .npm__react-simple-code-editor__textarea {\n    color: transparent !important;\n  }\n\n  .npm__react-simple-code-editor__textarea::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n"}}))}},{key:"session",get:function(){return{history:this._history}},set:function(e){this._history=e.history}}]),t}(i.Component);h.defaultProps={tabSize:2,insertSpaces:!0,ignoreTabKey:!1,padding:0},t.default=h;var f={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}}}).call(this,n(31))},589:function(e,t,n){(function(t){var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof i?new i(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,i;switch(n=n||{},a.util.type(t)){case"Object":if(i=a.util.objId(t),n[i])return n[i];for(var o in r={},n[i]=r,t)t.hasOwnProperty(o)&&(r[o]=e(t[o],n));return r;case"Array":return i=a.util.objId(t),n[i]?n[i]:(r=[],n[i]=r,t.forEach((function(t,a){r[a]=e(t,n)})),r);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(r.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var r="no-"+t;e;){var a=e.classList;if(a.contains(t))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!n}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e],o={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var s in n)n.hasOwnProperty(s)&&(o[s]=n[s]);n.hasOwnProperty(l)||(o[l]=i[l])}var c=r[e];return r[e]=o,a.languages.DFS(a.languages,(function(t,n){n===c&&t!=e&&(this[t]=o)})),o},DFS:function e(t,n,r,i){i=i||{};var o=a.util.objId;for(var l in t)if(t.hasOwnProperty(l)){n.call(t,l,t[l],r||l);var s=t[l],c=a.util.type(s);"Object"!==c||i[o(s)]?"Array"!==c||i[o(s)]||(i[o(s)]=!0,e(s,n,l,i)):(i[o(s)]=!0,e(s,n,null,i))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,o=0;i=r.elements[o++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(n,r,i){var o=a.util.getLanguage(n),l=a.languages[o];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+o;var s=n.parentElement;s&&"pre"===s.nodeName.toLowerCase()&&(s.className=s.className.replace(t,"").replace(/\s+/g," ")+" language-"+o);var c={element:n,language:o,grammar:l,code:n.textContent};function u(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),i&&i.call(c.element)}if(a.hooks.run("before-sanity-check",c),(s=c.element.parentElement)&&"pre"===s.nodeName.toLowerCase()&&!s.hasAttribute("tabindex")&&s.setAttribute("tabindex","0"),!c.code)return a.hooks.run("complete",c),void(i&&i.call(c.element));if(a.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var h=new Worker(a.filename);h.onmessage=function(e){u(e.data)},h.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(a.highlight(c.code,c.grammar,c.language));else u(a.util.encode(c.code))},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",r),r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}var u=new l;return s(u,u.head,e),function e(t,n,r,l,u,h){for(var f in r)if(r.hasOwnProperty(f)&&r[f]){var d=r[f];d=Array.isArray(d)?d:[d];for(var p=0;p<d.length;++p){if(h&&h.cause==f+","+p)return;var g=d[p],y=g.inside,v=!!g.lookbehind,m=!!g.greedy,b=g.alias;if(m&&!g.pattern.global){var k=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,k+"g")}for(var _=g.pattern||g,x=l.next,w=u;x!==n.tail&&!(h&&w>=h.reach);w+=x.value.length,x=x.next){var S=x.value;if(n.length>t.length)return;if(!(S instanceof i)){var C,E=1;if(m){if(!(C=o(_,w,t,v)))break;var O=C.index,K=C.index+C[0].length,P=w;for(P+=x.value.length;O>=P;)x=x.next,P+=x.value.length;if(P-=x.value.length,w=P,x.value instanceof i)continue;for(var L=x;L!==n.tail&&(P<K||"string"===typeof L.value);L=L.next)E++,P+=L.value.length;E--,S=t.slice(w,P),C.index-=w}else if(!(C=o(_,0,S,v)))continue;O=C.index;var A=C[0],j=S.slice(0,O),I=S.slice(O+A.length),z=w+S.length;h&&z>h.reach&&(h.reach=z);var D=x.prev;j&&(D=s(n,D,j),w+=j.length),c(n,D,E);var M=new i(f,y?a.tokenize(A,y):A,b,A);if(x=s(n,D,M),I&&s(n,x,I),E>1){var N={cause:f+","+p,reach:z};e(t,n,r,x.prev,w,N),h&&N.reach>h.reach&&(h.reach=N.reach)}}}}}}(e,u,t,u.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(u)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}},Token:i};function i(e,t,n,r){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length}function o(e,t,n,r){e.lastIndex=t;var a=e.exec(n);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function s(e,t,n){var r=t.next,a={value:n,prev:t,next:r};return t.next=a,r.prev=a,e.length++,a}function c(e,t,n){for(var r=t.next,a=0;a<n&&r!==e.tail;a++)r=r.next;t.next=r,r.prev=t,e.length-=a}if(e.Prism=a,i.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach((function(t){r+=e(t,n)})),r}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(i.classes,o):i.classes.push(o)),a.hooks.run("wrap",i);var l="";for(var s in i.attributes)l+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+l+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,i=n.code,o=n.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),o&&e.close()}),!1),a):a;var u=a.util.currentScript();function h(){a.manual||a.highlightAll()}if(u&&(a.filename=u.src,u.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var f=document.readyState;"loading"===f||"interactive"===f&&u&&u.defer?document.addEventListener("DOMContentLoaded",h):window.requestAnimationFrame?window.requestAnimationFrame(h):window.setTimeout(h,16)}return a}("undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),"undefined"!==typeof t&&(t.Prism=n)}).call(this,n(31))}}]);
//# sourceMappingURL=2.62170066.chunk.js.map