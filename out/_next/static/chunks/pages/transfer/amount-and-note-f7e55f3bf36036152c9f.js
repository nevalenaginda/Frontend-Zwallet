_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{"+tsZ":function(e,t,n){e.exports={"min-container-fluid":"Footer_min-container-fluid__CfBCp"}},"48G7":function(e,t,n){"use strict";function r(e){return parseInt(e).toLocaleString("id-ID")}n.d(t,"a",(function(){return r}))},DiCg:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n("vDqi"),a=n.n(r),o=function(){return function(e){return new Promise((function(t,n){a.a.get("".concat("http://178.128.80.182:5001/api/","profile"),{withCredentials:!0}).then((function(n){t(n),e({type:"GET_USER",payload:n.data.data})})).catch((function(e){n(e)}))}))}},i=function(e,t){return function(n){return new Promise((function(r,i){a.a.patch("".concat("http://178.128.80.182:5001/api/","user/").concat(t),e,{withCredentials:!0}).then((function(e){n(o()),r(e)})).catch((function(e){i(e)}))}))}},s=function(e,t){return function(n){return new Promise((function(n,r){a.a.post("".concat("http://178.128.80.182:5001/api/","loginPIN/").concat(t),e,{withCredentials:!0}).then((function(e){n(e)})).catch((function(e){r(new Error(e))}))}))}}},EPq0:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n("vDqi"),a=n.n(r),o=n("L8ff"),i=function(e){return function(t){return new Promise((function(n,r){a.a.post("".concat("http://178.128.80.182:5001/api/","transferProcess/").concat(e.from_id),e,{withCredentials:!0}).then((function(r){t(Object(o.a)(e.from_id)),n(r)})).catch((function(e){r(e)}))}))}},s=function(e){return function(t){a.a.get("".concat("http://178.128.80.182:5001/api/","user/").concat(e),{withCredentials:!0}).then((function(e){t({type:"GET_DATA_TARGET",payload:e.data.data,message:e.data.message})})).catch((function(e){t({type:"GET_DATA_TARGET",message:e.res.data.message})}))}}},L8ff:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c}));var r,a=n("vDqi"),o=n.n(a);r=localStorage.getItem("id");var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"desc";return function(r){return new Promise((function(a,i){r({type:"REQUEST_ALL_HISTORY"}),o.a.get("".concat("http://178.128.80.182:5001/api/","history/").concat(e,"?limit=").concat(t,"&sort=").concat(n),{withCredentials:!0}).then((function(e){r({type:"REQUEST_ALL_HISTORY_SUCCESS",payload:e.data,message:e.data.message}),a(e)})).catch((function(e){r({type:"REQUEST_ALL_HISTORY_FAILURE",message:e.response.data.message}),i(e)}))}))}},s=function(e){return function(t){return new Promise((function(n,r){t({type:"REQUEST_ALL_NOTIFICATIONS"}),o.a.get("".concat("http://178.128.80.182:5001/api/","notifications/").concat(e),{withCredentials:!0}).then((function(e){404!==e.data.code?t({type:"REQUEST_ALL_NOTIFICATIONS_SUCCESS",payload:e.data.pagination.totalData,message:e.data.message}):t({type:"REQUEST_ALL_NOTIFICATIONS_FAILURE",message:err.response.data.message,payload:0}),n(e)})).catch((function(e){t({type:"REQUEST_ALL_NOTIFICATIONS_FAILURE",message:e.response.data.message,payload:0}),r(e)}))}))}},c=function(e){return function(t){return new Promise((function(n,a){o.a.get("".concat("http://178.128.80.182:5001/api/","detailHistory/").concat(e),{withCredentials:!0}).then((function(e){t(s(r)),n(e)})).catch((function(e){a(e)}))}))}}},NYep:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("MX0m"),o=n.n(a),i=n("q1tI"),s=n.n(i),c=n("XAmc"),l=n("tT2N"),u=n("QNkD"),d=n("20a2"),f=n("rePB"),p=n("YFqc"),h=n.n(p),m=(n("vDqi"),n("/MKj")),g=n("EPq0");function j(){}function b(){}b.resetWarningCache=j;var x=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){e.exports=function(){function e(e,t,n,r,a,o){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==o){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:b,resetWarningCache:j};return n.PropTypes=n,n}()}));function v(){}function O(e){return!!(e||"").match(/\d/)}function y(e){return null===e||void 0===e}function N(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function w(e,t){void 0===t&&(t=!0);var n="-"===e[0],r=n&&t,a=(e=e.replace("-","")).split(".");return{beforeDecimal:a[0],afterDecimal:a[1]||"",hasNagation:n,addNegation:r}}function S(e,t,n){for(var r="",a=n?"0":"",o=0;o<=t-1;o++)r+=e[o]||a;return r}function P(e,t){return Array(t+1).join(e)}function I(e){var t="-"===(e+="")[0]?"-":"";t&&(e=e.substring(1));var n=e.split(/[eE]/g),r=n[0],a=n[1];if(!(a=Number(a)))return t+r;var o=1+a,i=(r=r.replace(".","")).length;return o<0?r="0."+P("0",Math.abs(o))+r:o>=i?r+=P("0",o-i):r=(r.substring(0,o)||"0")+"."+r.substring(o),t+r}function T(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var n=e.createTextRange();return n.move("character",t),n.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}function E(e,t,n){return Math.min(Math.max(e,t),n)}function C(e){return Math.max(e.selectionStart,e.selectionEnd)}var D={thousandSeparator:x.oneOfType([x.string,x.oneOf([!0])]),decimalSeparator:x.string,allowedDecimalSeparators:x.arrayOf(x.string),thousandsGroupStyle:x.oneOf(["thousand","lakh","wan"]),decimalScale:x.number,fixedDecimalScale:x.bool,displayType:x.oneOf(["input","text"]),prefix:x.string,suffix:x.string,format:x.oneOfType([x.string,x.func]),removeFormatting:x.func,mask:x.oneOfType([x.string,x.arrayOf(x.string)]),value:x.oneOfType([x.number,x.string]),defaultValue:x.oneOfType([x.number,x.string]),isNumericString:x.bool,customInput:x.elementType,allowNegative:x.bool,allowEmptyFormatting:x.bool,allowLeadingZeros:x.bool,onValueChange:x.func,onKeyDown:x.func,onMouseUp:x.func,onChange:x.func,onFocus:x.func,onBlur:x.func,type:x.oneOf(["text","tel","password"]),isAllowed:x.func,renderText:x.func,getInputRef:x.oneOfType([x.func,x.shape({current:x.any})])},A={displayType:"input",decimalSeparator:".",thousandsGroupStyle:"thousand",fixedDecimalScale:!1,prefix:"",suffix:"",allowNegative:!0,allowEmptyFormatting:!1,allowLeadingZeros:!1,isNumericString:!1,type:"text",onValueChange:v,onChange:v,onKeyDown:v,onMouseUp:v,onFocus:v,onBlur:v,isAllowed:function(){return!0}},_=function(e){function t(t){e.call(this,t);var n=t.defaultValue;this.validateProps();var r=this.formatValueProp(n);this.state={value:r,numAsString:this.removeFormatting(r),mounted:!1},this.selectionBeforeInput={selectionStart:0,selectionEnd:0},this.onChange=this.onChange.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.componentDidMount=function(){this.setState({mounted:!0})},t.prototype.componentDidUpdate=function(e){this.updateValueIfRequired(e)},t.prototype.componentWillUnmount=function(){clearTimeout(this.focusTimeout)},t.prototype.updateValueIfRequired=function(e){var t=this,n=t.props,r=t.state,a=t.focusedElm,o=r.value,i=r.numAsString;if(void 0===i&&(i=""),e!==n){this.validateProps();var s=this.formatNumString(i),c=y(n.value)?s:this.formatValueProp(),l=this.removeFormatting(c),u=parseFloat(l),d=parseFloat(i);(isNaN(u)&&isNaN(d)||u===d)&&s===o&&(null!==a||c===o)||this.updateValue({formattedValue:c,numAsString:l,input:a})}},t.prototype.getFloatString=function(e){void 0===e&&(e="");var t=this.props.decimalScale,n=this.getSeparators().decimalSeparator,r=this.getNumberRegex(!0),a="-"===e[0];a&&(e=e.replace("-","")),n&&0===t&&(e=e.split(n)[0]);var o=(e=(e.match(r)||[]).join("").replace(n,".")).indexOf(".");return-1!==o&&(e=e.substring(0,o)+"."+e.substring(o+1,e.length).replace(new RegExp(N(n),"g"),"")),a&&(e="-"+e),e},t.prototype.getNumberRegex=function(e,t){var n=this.props,r=n.format,a=n.decimalScale,o=this.getSeparators().decimalSeparator;return new RegExp("\\d"+(!o||0===a||t||r?"":"|"+N(o)),e?"g":void 0)},t.prototype.getSeparators=function(){var e=this.props.decimalSeparator,t=this.props,n=t.thousandSeparator,r=t.allowedDecimalSeparators;return!0===n&&(n=","),r||(r=[e,"."]),{decimalSeparator:e,thousandSeparator:n,allowedDecimalSeparators:r}},t.prototype.getMaskAtIndex=function(e){var t=this.props.mask;return void 0===t&&(t=" "),"string"===typeof t?t:t[e]||" "},t.prototype.getValueObject=function(e,t){var n=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(n)?void 0:n}},t.prototype.validateProps=function(){var e=this.props.mask,t=this.getSeparators(),n=t.decimalSeparator,r=t.thousandSeparator;if(n===r)throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: "+r+' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: '+n+" (default value for decimalSeparator is .)\n       ");if(e&&("string"===e?e:e.toString()).match(/\d/g))throw new Error("\n          Mask "+e+" should not contain numeric character;\n        ")},t.prototype.setPatchedCaretPosition=function(e,t,n){T(e,t),setTimeout((function(){e.value===n&&T(e,t)}),0)},t.prototype.correctCaretPosition=function(e,t,n){var r=this.props,a=r.prefix,o=r.suffix,i=r.format;if(""===e)return 0;if(t=E(t,0,e.length),!i){var s="-"===e[0];return E(t,a.length+(s?1:0),e.length-o.length)}if("function"===typeof i)return t;if("#"===i[t]&&O(e[t]))return t;if("#"===i[t-1]&&O(e[t-1]))return t;var c=i.indexOf("#");t=E(t,c,i.lastIndexOf("#")+1);for(var l=i.substring(t,i.length).indexOf("#"),u=t,d=t+(-1===l?0:l);u>c&&("#"!==i[u]||!O(e[u]));)u-=1;return!O(e[d])||"left"===n&&t!==c||t-u<d-t?O(e[u])?u+1:u:d},t.prototype.getCaretPosition=function(e,t,n){var r,a,o=this.props.format,i=this.state.value,s=this.getNumberRegex(!0),c=(e.match(s)||[]).join(""),l=(t.match(s)||[]).join("");for(r=0,a=0;a<n;a++){var u=e[a]||"",d=t[r]||"";if((u.match(s)||u===d)&&("0"!==u||!d.match(s)||"0"===d||c.length===l.length)){for(;u!==t[r]&&r<t.length;)r++;r++}}return"string"!==typeof o||i||(r=t.length),r=this.correctCaretPosition(t,r)},t.prototype.removePrefixAndSuffix=function(e){var t=this.props,n=t.format,r=t.prefix,a=t.suffix;if(!n&&e){var o="-"===e[0];o&&(e=e.substring(1,e.length));var i=(e=r&&0===e.indexOf(r)?e.substring(r.length,e.length):e).lastIndexOf(a);e=a&&-1!==i&&i===e.length-a.length?e.substring(0,i):e,o&&(e="-"+e)}return e},t.prototype.removePatternFormatting=function(e){for(var t=this.props.format.split("#").filter((function(e){return""!==e})),n=0,r="",a=0,o=t.length;a<=o;a++){var i=t[a]||"",s=a===o?e.length:e.indexOf(i,n);if(-1===s){r=e;break}r+=e.substring(n,s),n=s+i.length}return(r.match(/\d/g)||[]).join("")},t.prototype.removeFormatting=function(e){var t=this.props,n=t.format,r=t.removeFormatting;return e?(n?e="string"===typeof n?this.removePatternFormatting(e):"function"===typeof r?r(e):(e.match(/\d/g)||[]).join(""):(e=this.removePrefixAndSuffix(e),e=this.getFloatString(e)),e):e},t.prototype.formatWithPattern=function(e){for(var t=this.props.format,n=0,r=t.split(""),a=0,o=t.length;a<o;a++)"#"===t[a]&&(r[a]=e[n]||this.getMaskAtIndex(n),n+=1);return r.join("")},t.prototype.formatAsNumber=function(e){var t=this.props,n=t.decimalScale,r=t.fixedDecimalScale,a=t.prefix,o=t.suffix,i=t.allowNegative,s=t.thousandsGroupStyle,c=this.getSeparators(),l=c.thousandSeparator,u=c.decimalSeparator,d=-1!==e.indexOf(".")||n&&r,f=w(e,i),p=f.beforeDecimal,h=f.afterDecimal,m=f.addNegation;return void 0!==n&&(h=S(h,n,r)),l&&(p=function(e,t,n){var r=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}(n),a=e.search(/[1-9]/);return a=-1===a?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(r,"$1"+t)}(p,l,s)),a&&(p=a+p),o&&(h+=o),m&&(p="-"+p),e=p+(d&&u||"")+h},t.prototype.formatNumString=function(e){void 0===e&&(e="");var t=this.props,n=t.format,r=t.allowEmptyFormatting,a=e;return a=""!==e||r?"-"!==e||n?"string"===typeof n?this.formatWithPattern(a):"function"===typeof n?n(a):this.formatAsNumber(a):"-":""},t.prototype.formatValueProp=function(e){var t=this.props,n=t.format,r=t.decimalScale,a=t.fixedDecimalScale,o=t.allowEmptyFormatting,i=this.props,s=i.value,c=i.isNumericString,l=!(s=y(s)?e:s)&&0!==s;return l&&o&&(s=""),l&&!o?"":("number"===typeof s&&(s=I(s),c=!0),"Infinity"===s&&c&&(s=""),c&&!n&&"number"===typeof r&&(s=function(e,t,n){if(-1!==["","-"].indexOf(e))return e;var r=-1!==e.indexOf(".")&&t,a=w(e),o=a.beforeDecimal,i=a.afterDecimal,s=a.hasNagation,c=parseFloat("0."+(i||"0")),l=(i.length<=t?I(c):c.toFixed(t)).split(".");return(s?"-":"")+o.split("").reverse().reduce((function(e,t,n){return e.length>n?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e}),l[0])+(r?".":"")+S(l[1]||"",Math.min(t,i.length),n)}(s,r,a)),c?this.formatNumString(s):this.formatInput(s))},t.prototype.formatNegation=function(e){void 0===e&&(e="");var t=this.props.allowNegative,n=new RegExp("(-)"),r=new RegExp("(-)(.)*(-)"),a=n.test(e),o=r.test(e);return e=e.replace(/-/g,""),a&&!o&&t&&(e="-"+e),e},t.prototype.formatInput=function(e){return void 0===e&&(e=""),this.props.format||(e=this.removePrefixAndSuffix(e),e=this.formatNegation(e)),e=this.removeFormatting(e),this.formatNumString(e)},t.prototype.isCharacterAFormat=function(e,t){var n=this.props,r=n.format,a=n.prefix,o=n.suffix,i=n.decimalScale,s=n.fixedDecimalScale,c=this.getSeparators().decimalSeparator;return"string"===typeof r&&"#"!==r[e]||!(r||!(e<a.length||e>=t.length-o.length||i&&s&&t[e]===c))},t.prototype.checkIfFormatGotDeleted=function(e,t,n){for(var r=e;r<t;r++)if(this.isCharacterAFormat(r,n))return!0;return!1},t.prototype.correctInputValue=function(e,t,n){var r=this.props,a=r.format,o=r.allowNegative,i=r.prefix,s=r.suffix,c=r.decimalScale,l=this.getSeparators(),u=l.allowedDecimalSeparators,d=l.decimalSeparator,f=this.state.numAsString||"",p=this.selectionBeforeInput,h=p.selectionStart,m=p.selectionEnd,g=function(e,t){for(var n=0,r=0,a=e.length,o=t.length;e[n]===t[n]&&n<a;)n++;for(;e[a-1-r]===t[o-1-r]&&o-r>n&&a-r>n;)r++;return{start:n,end:a-r}}(t,n),j=g.start,b=g.end;if(!a&&j===b&&-1!==u.indexOf(n[h])){var x=0===c?"":d;return n.substr(0,h)+x+n.substr(h+1,n.length)}var v=a?0:i.length,O=t.length-(a?0:s.length);if(n.length>t.length||!n.length||j===b||0===h&&m===t.length||0===j&&b===t.length||h===v&&m===O)return n;if(this.checkIfFormatGotDeleted(j,b,t)&&(n=t),!a){var y=this.removeFormatting(n),N=w(y,o),S=N.beforeDecimal,P=N.afterDecimal,I=N.addNegation,T=e<n.indexOf(d)+1;if(y.length<f.length&&T&&""===S&&!parseFloat(P))return I?"-":""}return n},t.prototype.updateValue=function(e){var t=e.formattedValue,n=e.input,r=e.setCaretPosition;void 0===r&&(r=!0);var a=e.numAsString,o=e.caretPos,i=this.props.onValueChange,s=this.state.value;if(n)if(r){if(!o){var c=e.inputValue||n.value,l=C(n);n.value=t,o=this.getCaretPosition(c,t,l)}this.setPatchedCaretPosition(n,o,t)}else n.value=t;void 0===a&&(a=this.removeFormatting(t)),t!==s&&(this.setState({value:t,numAsString:a}),i(this.getValueObject(t,a)))},t.prototype.onChange=function(e){var t=e.target,n=t.value,r=this.state,a=this.props,o=a.isAllowed,i=r.value||"",s=C(t);n=this.correctInputValue(s,i,n);var c=this.formatInput(n)||"",l=this.removeFormatting(c),u=o(this.getValueObject(c,l));u||(c=i),this.updateValue({formattedValue:c,numAsString:l,inputValue:n,input:t}),u&&a.onChange(e)},t.prototype.onBlur=function(e){var t=this.props,n=this.state,r=t.format,a=t.onBlur,o=t.allowLeadingZeros,i=n.numAsString,s=n.value;if(this.focusedElm=null,clearTimeout(this.focusTimeout),!r){isNaN(parseFloat(i))&&(i=""),o||(i=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var n=e.split("."),r=n[0].replace(/^0+/,"")||"0",a=n[1]||"";return(t?"-":"")+r+(a?"."+a:"")}(i));var c=this.formatNumString(i);if(c!==s)return this.updateValue({formattedValue:c,numAsString:i,input:e.target,setCaretPosition:!1}),void a(e)}a(e)},t.prototype.onKeyDown=function(e){var t,n=e.target,r=e.key,a=n.selectionStart,o=n.selectionEnd,i=n.value;void 0===i&&(i="");var s=this.props,c=s.decimalScale,l=s.fixedDecimalScale,u=s.prefix,d=s.suffix,f=s.format,p=s.onKeyDown,h=void 0!==c&&l,m=this.getNumberRegex(!1,h),g=new RegExp("-"),j="string"===typeof f;if(this.selectionBeforeInput={selectionStart:a,selectionEnd:o},"ArrowLeft"===r||"Backspace"===r?t=a-1:"ArrowRight"===r?t=a+1:"Delete"===r&&(t=a),void 0!==t&&a===o){var b=t,x=j?f.indexOf("#"):u.length,v=j?f.lastIndexOf("#")+1:i.length-d.length;if("ArrowLeft"===r||"ArrowRight"===r){var O="ArrowLeft"===r?"left":"right";b=this.correctCaretPosition(i,t,O)}else if("Delete"!==r||m.test(i[t])||g.test(i[t])){if("Backspace"===r&&!m.test(i[t]))if(a<=x+1&&"-"===i[0]&&"undefined"===typeof f){var y=i.substring(1);this.updateValue({formattedValue:y,caretPos:b,input:n})}else if(!g.test(i[t])){for(;!m.test(i[b-1])&&b>x;)b--;b=this.correctCaretPosition(i,b,"left")}}else for(;!m.test(i[b])&&b<v;)b++;(b!==t||t<x||t>v)&&(e.preventDefault(),this.setPatchedCaretPosition(n,b,i)),e.isUnitTestRun&&this.setPatchedCaretPosition(n,b,i),p(e)}else p(e)},t.prototype.onMouseUp=function(e){var t=e.target,n=t.selectionStart,r=t.selectionEnd,a=t.value;if(void 0===a&&(a=""),n===r){var o=this.correctCaretPosition(a,n);o!==n&&this.setPatchedCaretPosition(t,o,a)}this.props.onMouseUp(e)},t.prototype.onFocus=function(e){var t=this;e.persist(),this.focusedElm=e.target,this.focusTimeout=setTimeout((function(){var n=e.target,r=n.selectionStart,a=n.selectionEnd,o=n.value;void 0===o&&(o="");var i=t.correctCaretPosition(o,r);i===r||0===r&&a===o.length||t.setPatchedCaretPosition(n,i,o),t.props.onFocus(e)}),0)},t.prototype.render=function(){var e=this.props,t=e.type,n=e.displayType,r=e.customInput,a=e.renderText,o=e.getInputRef,i=e.format,c=this.state,l=c.value,u=c.mounted,d=function(e,t){var n={};return Object.keys(e).forEach((function(r){t[r]||(n[r]=e[r])})),n}(this.props,D),f=u&&function(e){return e||!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}(i)?"numeric":void 0,p=Object.assign({inputMode:f},d,{type:t,value:l,onChange:this.onChange,onKeyDown:this.onKeyDown,onMouseUp:this.onMouseUp,onFocus:this.onFocus,onBlur:this.onBlur});if("text"===n)return a?a(l,d)||null:s.a.createElement("span",Object.assign({},d,{ref:o}),l);if(r){var h=r;return s.a.createElement(h,Object.assign({},p,{ref:o}))}return s.a.createElement("input",Object.assign({},p,{ref:o}))},t}(s.a.Component);_.propTypes=D,_.defaultProps=A;var k=_,R=n("48G7");function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=function(){var e=Object(d.useRouter)(),t=Object(m.b)(),a=Object(m.c)((function(e){return e.transfer})),s=a.transfer,c=a.dataTarget,l=Object(m.c)((function(e){return e.user})).user,u=Object(i.useState)({amount:"",notes:""}),p=u[0],j=u[1],b=function(e){var t=e.target,n=t.id,r=t.value;"amount"===n?r.match(",")?j(L(L({},p),{},{amount:r.split("Rp")[1].replace(",","")})):j(L(L({},p),{},{amount:r.split("Rp")[1]})):j(L(L({},p),{},Object(f.a)({},n,r)))};return Object(i.useEffect)((function(){s.to_id?t(Object(g.a)(s.to_id)):e.push("/dashboard")}),[t,s]),Object(r.jsxs)("div",{className:"jsx-1512633450 ",children:[Object(r.jsxs)("div",{className:"jsx-1512633450 container d-flex d-lg-none mb-3 ",children:[Object(r.jsx)(h.a,{href:"/transfer",children:Object(r.jsx)("div",{className:"jsx-1512633450 text-dark mr-3",children:Object(r.jsx)("h5",{className:"jsx-1512633450 m-0 font-weight-bold align-self-center",children:Object(r.jsx)("i",{className:"jsx-1512633450 fas fa-arrow-left"})})})}),Object(r.jsx)("h5",{className:"jsx-1512633450 m-0 align-self-center font-weight-bold",children:"Transfer"})]}),Object(r.jsx)("div",{className:"jsx-1512633450 card border-0 shadow card-lg",children:Object(r.jsxs)("div",{className:"jsx-1512633450 card-body",children:[Object(r.jsx)("h5",{className:"jsx-1512633450 font-weight-bold d-none d-lg-block",children:"Transfer Money"}),Object(r.jsx)("div",{className:"jsx-1512633450 card border-0 shadow mb-4",children:Object(r.jsx)("div",{className:"jsx-1512633450 card-body d-flex",children:Object(r.jsxs)("div",{className:"jsx-1512633450 align-self-center d-flex",children:[c.image?Object(r.jsx)("img",{src:"".concat("http://178.128.80.182:5001","/images/").concat(c.image),alt:"",className:"jsx-1512633450 img-people mr-4"}):Object(r.jsx)("img",{src:n("xij6"),alt:"",className:"jsx-1512633450 img-people mr-4"}),c.name&&c.phone?Object(r.jsxs)("div",{className:"jsx-1512633450 align-self-center",children:[Object(r.jsx)("h5",{className:"jsx-1512633450 font-weight-bold",children:c.name}),Object(r.jsx)("small",{className:"jsx-1512633450 text-muted m-0",children:c.phone})]}):Object(r.jsxs)("div",{className:"jsx-1512633450 align-self-center",children:[Object(r.jsx)("h5",{className:"jsx-1512633450 font-weight-bold"}),Object(r.jsx)("small",{className:"jsx-1512633450 text-muted m-0"})]})]})})}),Object(r.jsxs)("div",{className:"jsx-1512633450",children:[Object(r.jsxs)("p",{className:"jsx-1512633450 text-muted d-none d-lg-block",children:["Type the amount you want to transfer and then",Object(r.jsx)("br",{className:"jsx-1512633450"}),"press continue to the next steps."]}),c&&Object(r.jsx)(k,{prefix:"Rp",placeholder:"Rp0",className:"box-shadow-none form-control form-control-lg text-center border-0  font-weight-bold mb-3",onChange:b,id:"amount",name:"amount",isAllowed:function(e){if(e.value<parseInt(l.balance)+1)return e},disabled:0===c.balance}),c.balance?Object(r.jsxs)("p",{className:"jsx-1512633450 font-weight-bold text-center mb-5",children:["Rp",Object(R.a)(l.balance)," available"]}):Object(r.jsx)("p",{className:"jsx-1512633450 font-weight-bold text-center mb-5"}),Object(r.jsx)("div",{className:"jsx-1512633450 row w-100 d-flex justify-content-center",children:Object(r.jsx)("div",{className:"jsx-1512633450 col-lg-6",children:Object(r.jsxs)("div",{className:"jsx-1512633450 input-group",children:[Object(r.jsx)("div",{className:"jsx-1512633450 input-group-prepend",children:Object(r.jsx)("span",{className:"jsx-1512633450 input-group-text border-top-0 border-left-0 bg-white rounded-0",children:Object(r.jsx)("i",{"aria-hidden":"true",className:"jsx-1512633450 fas fa-pencil-alt"})})}),Object(r.jsx)("input",{type:"text",placeholder:"Add some notes",name:"notes",id:"notes",required:!0,onChange:b,className:"jsx-1512633450 form-control border-top-0 border-left-0 border-right-0 bg-white rounded-0"})]})})})]}),Object(r.jsx)("div",{className:"jsx-1512633450 pt-5 d-flex justify-content-end",children:Object(r.jsx)("button",{onClick:function(){console.log(p),t({type:"INSERT_DATA_TRANSEFR",action:(s.from_id=l.id,s.amount=p.amount,s.status="1",s.notes=p.notes,s.balanceLeft=l.balance-p.amount)}),e.push({pathname:"/transfer/detail"})},className:"jsx-1512633450 btn btn-lg btn-blue radius-12",children:Object(r.jsx)("small",{className:"jsx-1512633450 p-3",children:"Continue"})})})]})}),Object(r.jsx)(o.a,{id:"1512633450",children:["@media screen and (max-width:992px){.card-lg.jsx-1512633450{box-shadow:none !important;}}",".btn-blue.jsx-1512633450{background-color:#6379f4;color:white;}",".btn-blue.jsx-1512633450:hover{background-color:#5365c9;color:white;}","input.font-weight-bold.border-0.jsx-1512633450{font-size:32px;}",".img-people.jsx-1512633450{width:50px;height:50px;border-radius:12px;object-fit:cover;}","div.card.jsx-1512633450{border-radius:15px;}",".bg-gray.jsx-1512633450{background-color:#ebecec;}",".bg-gray.jsx-1512633450:focus{background-color:#ebecec;}","input.jsx-1512633450:focus{box-shadow:none;}",".box-shadow-none.jsx-1512633450{box-shadow:none !important;}"]})]})};t.default=function(){return Object(d.useRouter)(),Object(r.jsxs)("div",{className:"jsx-1542663087 bg-light",children:[Object(r.jsx)("div",{className:"jsx-1542663087 d-none d-md-block",children:Object(r.jsx)(c.a,{})}),Object(r.jsx)("div",{className:"jsx-1542663087 container",children:Object(r.jsxs)("div",{className:"jsx-1542663087 row h-row py-lg-5",children:[Object(r.jsx)("div",{className:"jsx-1542663087 col-3 d-none d-lg-block",children:Object(r.jsx)(u.a,{})}),Object(r.jsx)("div",{className:"jsx-1542663087 col py-5 py-lg-0",children:Object(r.jsx)(M,{})})]})}),Object(r.jsx)("div",{className:"jsx-1542663087 d-none d-md-block",children:Object(r.jsx)(l.a,{})}),Object(r.jsx)(o.a,{id:"1542663087",children:["@media (max-width:767.98px){.h-content.jsx-1542663087{height:80vh;}.bg-light.jsx-1542663087{background:white !important;}}"]})]})}},QNkD:function(e,t,n){"use strict";var r=n("nKUr"),a=(n("q1tI"),n("20a2")),o=n("YFqc"),i=n.n(o);t.a=function(){var e=Object(a.useRouter)();return Object(r.jsxs)("div",{className:"h-100",children:[Object(r.jsx)("div",{className:"card border-0 shadow h-100  card",children:Object(r.jsx)("div",{className:"card-body p-0",children:Object(r.jsx)("div",{className:"h-100",children:Object(r.jsxs)("div",{className:"h-100 d-flex align-item-start flex-column",children:[Object(r.jsxs)("div",{className:"h-side",children:[Object(r.jsx)("div",{className:"container mt-5 text-muted ".concat("/dashboard"===e.asPath||e.asPath.includes("/history/")?"active":""),children:Object(r.jsx)(i.a,{href:"/dashboard",children:Object(r.jsxs)("h5",{className:"m-0 mx-3 pointer d-flex",children:[Object(r.jsx)("i",{className:"fas fa-border-all mr-2"}),"Dashboard"]})})}),Object(r.jsx)("div",{className:"container mt-5 text-muted ".concat(e.asPath.includes("/transfer")?"active":""),children:Object(r.jsx)(i.a,{href:"/transfer",children:Object(r.jsxs)("h5",{className:"m-0 mx-3 pointer d-flex",children:[Object(r.jsx)("i",{className:"fas fa-arrow-up  mr-2"}),"Transfer"]})})}),Object(r.jsx)("div",{className:"container mt-5 text-muted ".concat("/topup"===e.asPath?"active":""),children:Object(r.jsx)(i.a,{href:"/topup",children:Object(r.jsxs)("h5",{className:"m-0 mx-3 pointer d-flex",children:[Object(r.jsx)("i",{className:"fas fa-plus mr-2"}),"Top Up"]})})}),Object(r.jsx)("div",{className:"container mt-5 text-muted ".concat(e.asPath.includes("/profile")?"active":""),children:Object(r.jsx)(i.a,{href:"/profile",children:Object(r.jsxs)("h5",{className:"m-0 mx-3 pointer d-flex",children:[Object(r.jsx)("i",{className:"far fa-user d-flex mr-2"}),"Profile"]})})})]}),Object(r.jsx)("div",{className:" container pb-4 mt-auto text-muted ",onClick:function(t){localStorage.removeItem("token"),localStorage.removeItem("id"),e.push("/auth/login")},children:Object(r.jsxs)("h5",{className:"align-items-end mx-3 pointer d-flex",children:[Object(r.jsx)("i",{className:"fas fa-sign-out-alt mr-2"}),"Logout"]})})]})})})}),Object(r.jsx)("style",{children:"\n          .active {\n            border-left: solid #6379f4;\n            color: #6379f4 !important;\n          }\n          div.card {\n            border-radius: 15px;\n          }\n          .pointer {\n            cursor: pointer;\n          }\n\n          .font-title {\n            font-size: 24px;\n          }\n          .bt-blue {\n            background: #6379f4;\n          }\n\n          .bt-blue:hover {\n            color: #fff;\n            background: #425be7;\n          }\n\n          .f-white {\n            color: #fff;\n          }\n          .h-side {\n            height: 400px;\n          }\n        "})]})}},Qka7:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/transfer/amount-and-note",function(){return n("NYep")}])},XAmc:function(e,t,n){"use strict";var r=n("nKUr"),a=n("MX0m"),o=n.n(a),i=n("q1tI"),s=n("20a2"),c=n("/MKj"),l=n("DiCg"),u=n("L8ff");t.a=function(){var e,t,n=Object(s.useRouter)(),a=Object(c.b)(),d=Object(c.c)((function(e){return e.user})).user,f=Object(c.c)((function(e){return e.history})).totalNotif;return Object(i.useEffect)((function(){(e=localStorage.getItem("token"))&&a(Object(l.b)()).then((function(e){a(Object(u.b)(t))}))}),[a]),Object(i.useEffect)((function(){e=localStorage.getItem("token"),t=localStorage.getItem("id"),e||n.push("/auth/login")}),[]),Object(r.jsxs)("nav",{className:"jsx-3916544990 bg-white shadow h-navbar",children:[Object(r.jsx)("div",{className:"jsx-3916544990 container d-flex h-100",children:Object(r.jsxs)("div",{className:"jsx-3916544990 row w-100 d-flex",children:[Object(r.jsx)("div",{onClick:function(e){return n.push("/dashboard")},className:"jsx-3916544990 col align-self-center pointer",children:Object(r.jsx)("h3",{className:"jsx-3916544990 text-blue font-weight-bold m-0",children:"Zwallet"})}),Object(r.jsx)("div",{className:"jsx-3916544990 col align-self-center d-none d-md-block",children:Object(r.jsxs)("div",{className:"jsx-3916544990 d-flex justify-content-end",children:[d.image?Object(r.jsx)("img",{src:"".concat("http://178.128.80.182:5001","/images/").concat(d.image),onClick:function(e){return n.push("/profile")},className:"jsx-3916544990 img-user align-self-center bg-dark mr-3 pointer"}):"",Object(r.jsxs)("div",{onClick:function(e){return n.push("/profile")},className:"jsx-3916544990 align-self-center pointer",children:[d.name?Object(r.jsx)("h5",{className:"jsx-3916544990 font-weight-bold m-0",children:d.name}):"",d.phone?Object(r.jsx)("small",{className:"jsx-3916544990 text-muted",children:d.phone}):""]}),Object(r.jsx)("h3",{className:"jsx-3916544990 far fa-bell  ml-3 align-self-center text-muted m-0 pointer"})," ",f>0?Object(r.jsx)("span",{style:{height:"20px"},className:"jsx-3916544990 badge badge-danger",children:f}):""]})})]})}),Object(r.jsx)(o.a,{id:"3916544990",children:[".img-user.jsx-3916544990{width:50px;height:50px;border-radius:12px;object-fit:cover;}",".h-navbar.jsx-3916544990{height:100px;border-radius:0px 0px 20px 20px;}"]})]})}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},tT2N:function(e,t,n){"use strict";var r=n("nKUr"),a=(n("q1tI"),n("+tsZ")),o=n.n(a);t.a=function(){return Object(r.jsx)("div",{className:"container-fluid bg-blue text-white d-flex min-h ".concat(o.a["min-container-fluid"]),children:Object(r.jsx)("div",{className:"align-self-center w-100",children:Object(r.jsxs)("div",{className:"container d-block d-md-flex justify-content-between text-center text-md-left",children:[Object(r.jsx)("div",{children:"2021 Zwallet. All right reserved."}),Object(r.jsxs)("div",{className:"d-block d-md-flex justify-content-between",children:[Object(r.jsx)("div",{className:"mr-3",children:"+62 5637 8882 9901"}),Object(r.jsx)("div",{className:"",children:"contact@zwallet.com"})]})]})})})}},xij6:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI2MiIgdmlld0JveD0iMCAwIDI2MiAyNjIiIHdpZHRoPSIyNjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2JhYmZiZSI+PGVsbGlwc2UgY3g9IjEzMSIgY3k9IjEwNy41IiByeD0iNjAuOCIgcnk9IjYyLjUiLz48cGF0aCBkPSJtMTMxIDE4Mi43Yy02NS4yIDAtMTE4IDM1LjUtMTE4IDc5LjNoMjM2YzAtNDMuOC01Mi44LTc5LjMtMTE4LTc5LjN6Ii8+PC9nPjwvc3ZnPgo="}},[["Qka7",0,2,1,3,4,5]]]);