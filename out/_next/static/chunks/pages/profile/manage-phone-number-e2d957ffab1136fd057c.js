_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{F82U:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var c=n("o0o1"),r=n.n(c);function s(e,t,n,c,r,s,a){try{var i=e[s](a),o=i.value}catch(d){return void n(d)}i.done?t(o):Promise.resolve(o).then(c,r)}var a=n("nKUr"),i=n("MX0m"),o=n.n(i),d=(n("q1tI"),n("vDqi")),l=n.n(d),h=n("20a2"),u=n.n(h),j=n("tT2N"),b=n("/MKj"),m=n("DiCg"),x=n("PSD3"),p=n.n(x);var f=function(e){var t=e.phone,n=Object(b.b)(),c=Object(h.useRouter)(),r=Object(b.c)((function(e){return e.user})).user;return Object(a.jsx)("div",{className:"card shadow border-0 radius-12 h-100",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"font-weight-bold",children:"Manage Phone Number"}),Object(a.jsxs)("p",{className:"text-muted",children:["You can only delete the phone number and then",Object(a.jsx)("br",{}),"you must add another phone number."]}),Object(a.jsx)("div",{className:"card shadow border-0",children:Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"text-muted",children:"Primary"}),t?Object(a.jsx)("h5",{className:"m-0 font-weight-bold",children:t}):Object(a.jsx)("h5",{className:"m-0 font-weight-bold"})]}),Object(a.jsx)("div",{className:"align-self-center",children:Object(a.jsx)("span",{className:"text-decoration-none pointer bg-white",style:{background:"white"},onClick:function(e){e.preventDefault();n(Object(m.c)({phone:""},r.id)).then((function(e){n(Object(m.b)()),p.a.fire({title:"Success!",text:"Success delete phone number",icon:"success",showConfirmButton:!1,timer:1500}),c.push("/profile")})).catch((function(e){p.a.fire({title:"Error!",text:"Failed delete phone number",icon:"error",showConfirmButton:!1,timer:2e3})}))},children:Object(a.jsx)("h2",{className:"m-0 text-muted",children:Object(a.jsx)("i",{className:"fas fa-trash-alt"})})})})]})})})]})})},v=n("XAmc"),O=n("QNkD");function w(e){var t=e.user;return Object(a.jsxs)("div",{className:"jsx-2129811849 bg-light min-vh-100",children:[Object(a.jsx)(v.a,{}),Object(a.jsx)("div",{className:"jsx-2129811849 container h-content",children:Object(a.jsxs)("div",{className:"jsx-2129811849 row py-5 py-lg-5",children:[Object(a.jsx)("div",{className:"jsx-2129811849 col-3 d-none d-lg-block",children:Object(a.jsx)(O.a,{})}),Object(a.jsx)("div",{className:"jsx-2129811849 col",children:Object(a.jsx)(f,{phone:t.phone})})]})}),Object(a.jsx)(j.a,{}),Object(a.jsx)(o.a,{id:"2129811849",children:["@media (max-width:767.98px){.h-content.jsx-2129811849{height:80vh;}}"]})]})}w.getInitialProps=function(){var e,t=(e=r.a.mark((function e(t){var n,c,s,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://localhost:3000",e.prev=2,c="",t.req&&(c=t.req.headers.cookie),e.next=7,l.a.get("".concat("http://localhost:5001/api/","profile"),{withCredentials:!0,headers:{cookie:c}});case 7:return s=e.sent,a=s.data.data,e.abrupt("return",{user:a});case 12:return e.prev=12,e.t0=e.catch(2),console.log(e.t0),t.req&&(t.res.writeHead(301,{Location:"".concat(n,"/auth/login")}),t.res.end()),t.req||u.a.push("/auth/login"),e.abrupt("return",{user:{}});case 18:case"end":return e.stop()}}),e,null,[[2,12]])})),function(){var t=this,n=arguments;return new Promise((function(c,r){var a=e.apply(t,n);function i(e){s(a,c,r,i,o,"next",e)}function o(e){s(a,c,r,i,o,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}()},L8BP:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/manage-phone-number",function(){return n("F82U")}])}},[["L8BP",0,2,1,3,4,5,6,7]]]);