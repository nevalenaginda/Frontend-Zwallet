_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"/Y8a":function(e,s,t){"use strict";t.r(s);var n=t("nKUr"),a=t("MX0m"),r=t.n(a),c=t("q1tI"),o=t("YFqc"),i=t.n(o),l=t("E8JX"),d=t("20a2"),j=t("vDqi"),x=t.n(j),b=t("PSD3"),h=t.n(b);s.default=function(){var e=Object(c.useState)(""),s=e[0],t=e[1],a=Object(d.useRouter)();return Object(c.useEffect)((function(){localStorage.getItem("token")&&a.push("/dashboard")}),[]),Object(n.jsxs)("div",{className:"jsx-1217259691",children:[Object(n.jsxs)("div",{className:"jsx-1217259691 row min-vh-100 no-gutters",children:[Object(n.jsx)("div",{className:"jsx-1217259691 col-lg-7 bg-blue min-vh-100 bg-accent overflow-auto d-none d-lg-flex px-5",children:Object(n.jsx)(l.a,{})}),Object(n.jsxs)("div",{className:"jsx-1217259691 col min-vh-100 overflow-auto d-lg-flex px-lg-5 phone-brand",children:[Object(n.jsx)("div",{className:"jsx-1217259691",children:Object(n.jsx)("div",{className:"jsx-1217259691 d-flex d-lg-none h-brand",children:Object(n.jsx)("h3",{className:"jsx-1217259691 font-weight-bold w-100 align-self-center m-0 text-center text-blue",children:"Zwallet"})})}),Object(n.jsx)("div",{className:"jsx-1217259691 align-self-center bg-white h-content round py-5 py-lg-0",children:Object(n.jsx)("div",{className:"jsx-1217259691 container",children:Object(n.jsxs)("div",{className:"jsx-1217259691 px-4",children:[Object(n.jsxs)("div",{className:"jsx-1217259691 d-none d-lg-block",children:[Object(n.jsx)("h4",{className:"jsx-1217259691 font-weight-bold",children:"Did You Forgot Your Password? Don\u2019t Worry, You Can Reset Your Password In a Minutes."}),Object(n.jsx)("p",{className:"jsx-1217259691 text-muted",children:"To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens."})]}),Object(n.jsxs)("div",{className:"jsx-1217259691 d-block d-lg-none text-center mb-5",children:[Object(n.jsx)("h4",{className:"jsx-1217259691 font-weight-bold",children:"Reset Password"}),Object(n.jsx)("p",{className:"jsx-1217259691 text-muted",children:"Enter your Zwallet e-mail so we can send you a password reset link."})]}),Object(n.jsxs)("div",{className:"jsx-1217259691 mt-md-5",children:[Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={email:s};x.a.post("".concat("https://zwallet.naginda.site/api/","forgotPassword"),n,{withCredentials:!0}).then((function(e){h.a.fire({title:"Success!",text:e.data.message,icon:"success",confirmButtonText:"Ok",confirmButtonColor:"#6379f4;"}).then((function(e){e.isConfirmed,t("")}))})).catch((function(e){console.log(e.response.data.message),h.a.fire({title:"Error!",text:e.response.data.message,icon:"error",confirmButtonText:"Ok",confirmButtonColor:"#a4a7b4"})}))},className:"jsx-1217259691",children:[Object(n.jsxs)("div",{className:"jsx-1217259691 input-group mb-4",children:[Object(n.jsx)("div",{className:"jsx-1217259691 input-group-prepend",children:Object(n.jsx)("span",{id:"basic-addon1",className:"jsx-1217259691 input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0",children:Object(n.jsx)("i",{className:"jsx-1217259691 far fa-envelope"})})}),Object(n.jsx)("input",{type:"email",placeholder:"Enter your e-mail",value:s,onChange:function(e){return t(e.target.value)},required:!0,className:"jsx-1217259691 form-control border-top-0 border-left-0 border-right-0 rounded-0"})]}),Object(n.jsx)("div",{className:"jsx-1217259691 pt-4",children:Object(n.jsx)("button",{type:"submit",style:{borderRadius:"12px"},className:"jsx-1217259691 btn btn-secondary btn-block",children:"Confirm"})})]}),Object(n.jsxs)("p",{className:"jsx-1217259691 text-center pt-4",children:["Have memorized your password ? Let's back to",Object(n.jsx)(i.a,{href:"/auth/login",children:Object(n.jsx)("a",{className:"jsx-1217259691 text-decoration-none",children:" Login"})})]})]})]})})})]})]}),Object(n.jsx)(r.a,{id:"1217259691",children:["@media screen and (max-width:992px){.phone-brand.jsx-1217259691{background-color:ghostwhite;}.h-content.jsx-1217259691{height:calc(100vh - 75px);box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important;}}","input.jsx-1217259691:focus{border-color:blue !important;box-shadow:none !important;outline:0 none !important;}",".h-brand.jsx-1217259691{height:100px;}",".round.jsx-1217259691{border-radius:25px 25px 0px 0px;}"]})]})}},"3hDz":function(e,s){e.exports="/_next/static/images/phone-c6d58297b6de1fde282d80fa33e49750.svg"},E8JX:function(e,s,t){"use strict";var n=t("nKUr"),a=t("MX0m"),r=t.n(a);t("q1tI");s.a=function(){return Object(n.jsxs)("div",{className:"jsx-1333926409 container align-self-center",children:[Object(n.jsx)("h3",{className:"jsx-1333926409 font-weight-bold text-white",children:"Zwallet"}),Object(n.jsx)("div",{className:"jsx-1333926409 text-center",children:Object(n.jsx)("img",{style:{height:"400px"},src:t("3hDz"),className:"jsx-1333926409"})}),Object(n.jsx)("h5",{className:"jsx-1333926409 font-weight-bold text-white",children:"App that Covering Banking Needs."}),Object(n.jsx)("div",{className:"jsx-1333926409 pr-5",children:Object(n.jsx)("p",{className:"jsx-1333926409 text-light",children:"Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage."})}),Object(n.jsx)(r.a,{id:"1333926409",children:['.bg-accent.jsx-1333926409{background-image:url("/assets/Vector1.svg");background-repeat:no-repeat;background-size:cover;background-position-y:50px;}']})]})}},"GNn/":function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/forgot-password",function(){return t("/Y8a")}])}},[["GNn/",0,2,1,3,4,6]]]);