_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"3hDz":function(e,t){e.exports="/_next/static/images/phone-c6d58297b6de1fde282d80fa33e49750.svg"},E8JX:function(e,t,n){"use strict";var r=n("nKUr"),s=n("MX0m"),a=n.n(s);n("q1tI");t.a=function(){return Object(r.jsxs)("div",{className:"jsx-1333926409 container align-self-center",children:[Object(r.jsx)("h3",{className:"jsx-1333926409 font-weight-bold text-white",children:"Zwallet"}),Object(r.jsx)("div",{className:"jsx-1333926409 text-center",children:Object(r.jsx)("img",{style:{height:"400px"},src:n("3hDz"),className:"jsx-1333926409"})}),Object(r.jsx)("h5",{className:"jsx-1333926409 font-weight-bold text-white",children:"App that Covering Banking Needs."}),Object(r.jsx)("div",{className:"jsx-1333926409 pr-5",children:Object(r.jsx)("p",{className:"jsx-1333926409 text-light",children:"Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage."})}),Object(r.jsx)(a.a,{id:"1333926409",children:['.bg-accent.jsx-1333926409{background-image:url("/assets/Vector1.svg");background-repeat:no-repeat;background-size:cover;background-position-y:50px;}']})]})}},O2ls:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),s=n("rePB"),a=n("MX0m"),c=n.n(a),o=n("q1tI"),i=n("vDqi"),l=n.n(i),d=n("YFqc"),u=n.n(d),j=n("PSD3"),f=n.n(j),p=n("20a2"),x=n("E8JX");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.default=function(){var e=Object(p.useRouter)(),t=Object(o.useState)({email:"",password:""}),n=t[0],a=t[1],i=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n);t[e.target.name]=e.target.value,a(t)};return Object(r.jsxs)(o.Fragment,{children:[Object(r.jsx)("div",{className:"jsx-3594937797",children:Object(r.jsxs)("div",{className:"jsx-3594937797 row min-vh-100 no-gutters",children:[Object(r.jsx)("div",{className:"jsx-3594937797 col-7 bg-blue min-vh-100 bg-accent overflow-auto d-none d-lg-flex px-5",children:Object(r.jsx)(x.a,{})}),Object(r.jsx)("div",{className:"jsx-3594937797 col w-100 min-vh-100 overflow-auto d-flex px-lg-5 phone-brand",children:Object(r.jsxs)("div",{className:"jsx-3594937797 w-100 align-self-lg-center",children:[Object(r.jsx)("div",{className:"jsx-3594937797 d-flex d-lg-none h-brand",children:Object(r.jsx)("h3",{className:"jsx-3594937797 font-weight-bold w-100 align-self-center m-0 text-center text-blue",children:"Zwallet"})}),Object(r.jsxs)("div",{className:"jsx-3594937797 align-self-center w-100",children:[Object(r.jsx)("div",{className:"jsx-3594937797 d-none d-lg-block",children:Object(r.jsxs)("div",{className:"jsx-3594937797 py-5 px-2 pr-5",children:[Object(r.jsx)("h4",{className:"jsx-3594937797 font-weight-bold",children:"Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users"}),Object(r.jsx)("p",{className:"jsx-3594937797 text-muted",children:"Transfering money is easier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!"})]})}),Object(r.jsx)("div",{className:"jsx-3594937797 d-flex d-lg-block",children:Object(r.jsx)("div",{className:"jsx-3594937797 align-self-center w-100",children:Object(r.jsxs)("div",{className:"jsx-3594937797 bg-white round h-content",children:[Object(r.jsxs)("div",{className:"jsx-3594937797 py-5 d-block d-lg-none",children:[Object(r.jsx)("h4",{className:"jsx-3594937797 font-weight-bold text-center",children:"Login"}),Object(r.jsxs)("p",{className:"jsx-3594937797 text-muted text-center",children:["Login to your existing account to access ",Object(r.jsx)("br",{className:"jsx-3594937797"}),"all the features in Zwallet"]})]}),Object(r.jsx)("div",{className:"jsx-3594937797 container",children:Object(r.jsxs)("div",{className:"jsx-3594937797 my-2 m-lg-0 p-lg-0 px-4",children:[Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();l.a.post("".concat("http://100.25.29.134:5001/api/","login"),n).then((function(t){console.log(t),localStorage.setItem("token",t.data.token),localStorage.setItem("id",t.data.id),localStorage.setItem("name",t.data.name),!0===t.data.pin?f.a.fire({title:"Success!",text:t.data.message,icon:"success",confirmButtonText:"Ok",confirmButtonColor:"#6379f4;"}).then((function(t){t.isConfirmed,e.push("/dashboard")})):f.a.fire({title:"Success!",text:t.data.message,icon:"success",confirmButtonText:"Ok",confirmButtonColor:"#6379f4;"}).then((function(t){t.isConfirmed,e.push("/pin")}))})).catch((function(e){f.a.fire({title:"Error!",text:e.response.data.message,icon:"error",confirmButtonText:"Ok",confirmButtonColor:"#a4a7b4"})}))},className:"jsx-3594937797",children:[Object(r.jsxs)("div",{className:"jsx-3594937797 input-group mb-3",children:[Object(r.jsx)("div",{className:"jsx-3594937797 input-group-prepend",children:Object(r.jsx)("span",{id:"basic-addon1",className:"jsx-3594937797 input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0",children:Object(r.jsx)("i",{className:"jsx-3594937797 far fa-envelope"})})}),Object(r.jsx)("input",{type:"email",placeholder:"Enter your e-mail",name:"email",onChange:i,required:!0,className:"jsx-3594937797 form-control border-top-0 border-left-0 border-right-0 rounded-0"})]}),Object(r.jsxs)("div",{className:"jsx-3594937797 input-group mb-3",children:[Object(r.jsx)("div",{className:"jsx-3594937797 input-group-prepend",children:Object(r.jsx)("span",{id:"basic-addon1",className:"jsx-3594937797 input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0",children:Object(r.jsx)("i",{className:"jsx-3594937797 fas fa-lock"})})}),Object(r.jsx)("input",{type:"password",placeholder:"Enter your password",name:"password",onChange:i,required:!0,className:"jsx-3594937797 form-control border-top-0 border-left-0 border-right-0 rounded-0"}),Object(r.jsx)("div",{className:"jsx-3594937797 input-group-append",children:Object(r.jsx)("span",{id:"basic-addon1",className:"jsx-3594937797 input-group-text bg-white border-top-0 border-left-0 border-right-0",children:Object(r.jsx)("span",{className:"jsx-3594937797 text-decoration-none text-dark",children:Object(r.jsx)("i",{className:"jsx-3594937797 fas fa-eye-slash"})})})})]}),Object(r.jsx)("h6",{className:"jsx-3594937797 font-weight-bold text-right",children:Object(r.jsx)(u.a,{href:"/reset-password",children:Object(r.jsx)("a",{className:"jsx-3594937797 text-decoration-none text-muted",children:"Forgot password?"})})}),Object(r.jsx)("button",{type:"submit",style:{borderRadius:"12px"},className:"jsx-3594937797 btn btn-secondary btn-block",children:"Login"})]}),Object(r.jsxs)("p",{className:"jsx-3594937797 text-center pt-4",children:["Don\u2019t have an account? Let\u2019s",Object(r.jsx)(u.a,{href:"/sign-up",children:Object(r.jsx)("a",{className:"jsx-3594937797 text-decoration-none",children:" Sign Up"})})]})]})})]})})})]})]})})]})}),Object(r.jsx)(c.a,{id:"3594937797",children:["@media screen and (max-width:992px){.phone-brand.jsx-3594937797{background-color:ghostwhite;}.h-content.jsx-3594937797{height:calc(100vh - 75px);box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important;}}",".round.jsx-3594937797{border-radius:25px 25px 0px 0px;}",".h-brand.jsx-3594937797{height:100px;}","input.jsx-3594937797:focus{border-color:blue !important;box-shadow:none !important;outline:0 none !important;}"]})]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),s=n("284h");t.__esModule=!0,t.default=void 0;var a=s(n("q1tI")),c=n("elyg"),o=n("nOHt"),i=n("vNVm"),l={};function d(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var s=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(s?"%"+s:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),s=n&&n.pathname||"/",u=a.default.useMemo((function(){var t=(0,c.resolveHref)(s,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,c.resolveHref)(s,e.as):o||a}}),[s,e.href,e.as]),j=u.href,f=u.as,p=e.children,x=e.replace,b=e.shallow,h=e.scroll,m=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var g=a.Children.only(p),v=g&&"object"===typeof g&&g.ref,O=(0,i.useIntersection)({rootMargin:"200px"}),w=r(O,2),N=w[0],y=w[1],k=a.default.useCallback((function(e){N(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,N]);(0,a.useEffect)((function(){var e=y&&t&&(0,c.isLocalURL)(j),r="undefined"!==typeof m?m:n&&n.locale,s=l[j+"%"+f+(r?"%"+r:"")];e&&!s&&d(n,j,f,{locale:r})}),[f,j,y,m,t,n]);var E={ref:k,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,s,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[s?"replace":"push"](n,r,{shallow:a,locale:i,scroll:o}))}(e,n,j,f,x,b,h,m)},onMouseEnter:function(e){(0,c.isLocalURL)(j)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),d(n,j,f,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var _="undefined"!==typeof m?m:n&&n.locale,L=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(f,_,n&&n.locales,n&&n.domainLocales);E.href=L||(0,c.addBasePath)((0,c.addLocale)(f,_,n&&n.defaultLocale))}return a.default.cloneElement(g,E)};t.default=u},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},u6Hu:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n("O2ls")}])},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,i=(0,s.useRef)(),l=(0,s.useState)(!1),d=r(l,2),u=d[0],j=d[1],f=(0,s.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||u||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:s,elements:r}),n}(n),s=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),o.delete(s))}}(e,(function(e){return e&&j(e)}),{rootMargin:t}))}),[n,t,u]);return(0,s.useEffect)((function(){if(!c&&!u){var e=(0,a.requestIdleCallback)((function(){return j(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[u]),[f,u]};var s=n("q1tI"),a=n("0G5g"),c="undefined"!==typeof IntersectionObserver;var o=new Map}},[["u6Hu",0,2,1,3,4,6]]]);