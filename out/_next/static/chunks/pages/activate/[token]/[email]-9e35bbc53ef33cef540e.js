_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"8oxB":function(e,t){var n,c,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:r}catch(e){n=r}try{c="function"===typeof clearTimeout?clearTimeout:s}catch(e){c=s}}();var o,l=[],u=!1,d=-1;function h(){u&&o&&(u=!1,o.length?l=o.concat(l):d=-1,l.length&&f())}function f(){if(!u){var e=a(h);u=!0;for(var t=l.length;t;){for(o=l,l=[];++d<t;)o&&o[d].run();d=-1,t=l.length}o=null,u=!1,function(e){if(c===clearTimeout)return clearTimeout(e);if((c===s||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{c(e)}catch(t){try{return c.call(null,e)}catch(t){return c.call(this,e)}}}(e)}}function j(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new j(e,t)),1!==l.length||u||a(f)},j.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},jqd6:function(e,t,n){"use strict";n.r(t);var c=n("nKUr"),i=n("q1tI"),r=n("20a2"),s=n("vDqi"),a=n.n(s);t.default=function(){var e=Object(r.useRouter)(),t=Object(i.useState)("loading"),n=t[0],s=t[1];return Object(i.useEffect)((function(){setTimeout((function(){a.a.get("".concat("http://100.25.29.134:5001/api/","activate/").concat(e.query.token,"/").concat(e.query.email)).then((function(){s("ok")})).catch((function(e){console.log(e),s("failed")}))}),3e3)}),[e.query.token,e.query.email]),Object(c.jsx)("div",{className:"container min-vh-100",children:"loading"===n?Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"d-flex justify-content-center min-vh-100",children:Object(c.jsxs)("div",{className:"align-self-center text-center",children:[Object(c.jsx)("div",{className:"spinner-border mb-3 text-blue",role:"status",children:Object(c.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(c.jsx)("h3",{className:"m-0",children:"Please Wait"}),Object(c.jsx)("p",{className:"m-0",children:"Activating Account"})]})})}):"ok"===n?Object(c.jsx)("div",{className:"min-vh-100 d-flex justify-content-center",children:Object(c.jsxs)("div",{className:"align-self-center",children:[Object(c.jsx)("h1",{className:" text-muted",children:Object(c.jsx)("i",{className:"fa fa-check-circle","aria-hidden":"true"})}),Object(c.jsx)("h4",{children:"OK!"}),Object(c.jsx)("p",{children:"Your activation success!"}),Object(c.jsx)("button",{type:"button",className:"btn btn-primary text-center",onClick:function(t){return e.push("/login")},children:"Take me to login page"})]})}):"failed"===n&&void 0!==e.query.email?Object(c.jsx)("div",{className:"min-vh-100 d-flex justify-content-center",children:Object(c.jsxs)("div",{className:"align-self-center",children:[Object(c.jsx)("h1",{className:"text-muted",children:Object(c.jsx)("i",{className:"fa fa-frown","aria-hidden":"true"})}),Object(c.jsx)("h4",{children:"Something not good"}),Object(c.jsx)("p",{children:"Maybe, your token was expired or typo. Dont make any unique for token that requested for activation"})]})}):Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"d-flex justify-content-center min-vh-100",children:Object(c.jsxs)("div",{className:"align-self-center text-center",children:[Object(c.jsx)("div",{className:"spinner-border mb-3 text-blue",role:"status",children:Object(c.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(c.jsx)("h3",{className:"m-0",children:"Please Wait"}),Object(c.jsx)("p",{className:"m-0",children:"Activating Account"})]})})})})}},teJh:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/activate/[token]/[email]",function(){return n("jqd6")}])}},[["teJh",0,2,1,4]]]);