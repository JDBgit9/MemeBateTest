(this["webpackJsonpmemebate-test"]=this["webpackJsonpmemebate-test"]||[]).push([[0],{17:function(e,t,c){e.exports={container:"Meme_container__2-YjG",skip:"Meme_skip__3ZNVI",generate:"Meme_generate__2RiOz"}},23:function(e,t,c){},24:function(e,t){},47:function(e,t,c){},55:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){e.exports={success:"AppStyles_success__2LCSi"}},75:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c(33),i=c.n(s),r=c(9),l=(c(47),c(10));var o=function(e){var t=e.color,c=void 0===t?"":t,a=Object(r.b)(),s=a.loginWithRedirect,i=a.user,o=a.isAuthenticated,j=a.logout;return Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top py-3 ".concat(c),id:"mainNav",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"}),Object(n.jsx)("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarResponsive",children:Object(n.jsxs)("ul",{className:"navbar-nav ml-auto my-2 my-lg-0",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link js-scroll-trigger",to:"/",children:"Home"})}),o?Object(n.jsx)("li",{className:"nav-item",onClick:function(){return j({returnTo:window.location.origin})},children:"Logout"}):Object(n.jsx)("li",{className:"nav-item",onClick:function(){return s()},children:"Login"}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link js-scroll-trigger",to:"/about",children:"About Us"})}),o&&Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link js-scroll-trigger",to:"/profile",children:i.email})})]})})]})})},j=c(2);var b=function(){var e=Object(r.b)().loginWithRedirect;return Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{onClick:function(){return e()},children:"login"})]})},d=(c(55),c.p+"static/media/WebMBimg.634a5371.png"),h=c(11),u=c(3),m=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){0===c.length&&fetch("http://localhost:4041/media").then((function(e){return e.json()})).then((function(e){s([].concat(Object(h.a)(c),Object(h.a)(e)))})).catch(console.error)}),[c]),Object(n.jsx)("div",{className:"videos",children:c.length>0&&c.map((function(e,t){return Object(n.jsx)("iframe",{width:"385",height:"315",src:"https://www.youtube.com/embed/".concat(e.debate),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},"video_".concat(t))}))})},x=(c(23),c(17)),O=c.n(x);var p=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(0),r=Object(u.a)(i,2),l=r[0],o=r[1],b=Object(a.useState)([]),d=Object(u.a)(b,2),h=d[0],m=d[1];return Object(j.f)(),Object(a.useEffect)((function(){fetch("http://memebuild.com/api/1.0/getDefaultMemes?api-key=384be08c76d654f4105db56ec7dd11").then((function(e){e.json()})).then((function(e){var t=e;console.log(e),function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*t),n=e[t];e[t]=e[c],e[c]=n}}(t),s(t)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){c.length&&m(Array(c[l].box_count).fill(""))}),[l,c]),c.length>0?Object(n.jsxs)("div",{className:O.a.container,children:[Object(n.jsx)("button",{onClick:function(){var e=c[l],t=new FormData;t.append("template_id",e.id),h.forEach((function(e,c){return t.append("boxes[".concat(c,"][text]"),e)}))},className:O.a.generate,children:"Generate"}),Object(n.jsx)("button",{onClick:function(){return o(l+1)},className:O.a.skip,children:"Skip"}),h.map((function(e,t){return Object(n.jsx)("input",{onChange:function(e){return function(e,t){var c=e.target.value||"";m(h.map((function(e,n){return t===n?c:e})))}(e,t)}},t)})),Object(n.jsx)("img",{alt:"meme",src:c[l].url})]}):Object(n.jsx)(n.Fragment,{})},g=function e(){var t=Object(a.useState)([]),c=Object(u.a)(t,2),s=c[0],i=c[1];Object(a.useEffect)((function(){0===s.length&&fetch("http://localhost:3000/memebater").then((function(e){return e.json()})).then((function(e){i([].concat(Object(h.a)(s),Object(h.a)(e)))})).catch(console.error)}),[e]);return Object(n.jsx)("div",{children:function(e){null===e||void 0===e||e.map((function(e,t){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"memebater",children:[Object(n.jsx)("h3",{children:"Name"}),Object(n.jsx)("p",{children:"Membates"}),Object(n.jsx)("h3",{children:"likes"}),Object(n.jsx)("h3",{children:"Dislikes"}),Object(n.jsx)("image",{children:"Meme"}),Object(n.jsx)("button",{onClick:console.log,children:"Meme"})]})})}))}(s)})};c(24);var v=function(){var e=Object(r.b)(),t=(e.loginWithRedirect,e.user,e.isAuthenticated);return e.logout,Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{className:"masthead",children:Object(n.jsx)("div",{className:"container h-100",children:Object(n.jsxs)("div",{className:"row h-100 align-items-center justify-content-center text-center",children:[Object(n.jsxs)("div",{className:"col-lg-10 align-self-end",children:[Object(n.jsx)("img",{src:d}),Object(n.jsx)("hr",{className:"divider my-4"})]}),Object(n.jsxs)("div",{className:"col-lg-8 align-self-baseline",children:[Object(n.jsx)("p",{className:"text-white-75 font-weight-light mb-5",children:"A fun digital debate platform without all the fuss."}),Object(n.jsx)("a",{className:"btn btn-primary btn-xl js-scroll-trigger",href:"#about",children:"Find Out More"})]})]})})}),Object(n.jsx)("section",{className:"page-section bg-primary",id:"about",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{style:{width:"100%",height:"50rem",textAlign:"center"},className:"row justify-content-center",children:Object(n.jsxs)("div",{className:"col-lg-8 text-center",children:[Object(n.jsx)("h2",{className:"text-white mt-0",children:"Freedom of Speech"}),Object(n.jsx)("hr",{className:"divider light my-4"}),Object(n.jsxs)("h3",{className:"text-white-50 mb-4",children:["Memebate is an application designed to preserve the right to speak freely online without censorship or bias.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"As a debater you will create an account and then state your case through a myriad of topics while holding yourself and others accountable through source reporting, points, acquiring memebaters, and winning debates."]}),Object(n.jsx)("a",{className:"btn btn-light btn-xl js-scroll-trigger",href:"#services",children:"Get Started!"})]})})})}),Object(n.jsx)("section",{className:"page-section bg-pink lighten-4",id:"services",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h2",{className:"text-center mt-0",children:"How do I start?"}),Object(n.jsx)("hr",{className:"divider my-4"}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-lg-3 col-md-6 text-center",children:Object(n.jsxs)("div",{className:"mt-5",children:[Object(n.jsx)("i",{className:"fas fa-4x fa-laptop-code text-primary mb-4"}),Object(n.jsx)("h3",{className:"h4 mb-2",children:"Memebaters"}),Object(n.jsx)("p",{className:"text-muted mb-0",children:"As a memebater you get to engage in the debates by posting likes, dislikes, memes, gifs, and emojis in the comment section. Memebaters are most important because they are the judges of each of the debates on this platform. So be nice you never kow you'll meet. You must sign up to become a memebater."})]})}),Object(n.jsx)("div",{className:"col-lg-3 col-md-6 text-center",children:Object(n.jsxs)("div",{className:"mt-5",children:[Object(n.jsx)("i",{className:"fas fa-4x fa-gem text-primary mb-4"}),Object(n.jsx)("h3",{className:"h4 mb-2",children:"Debaters"}),Object(n.jsx)("p",{className:"text-muted mb-0",children:"Debaters simply create an account and then record an audio or video media link (anonymous, or non-anonymous) to their profile page of their favorite topic and then watch the fun memebating begin to unfold."})]})}),Object(n.jsx)("div",{className:"col-lg-3 col-md-6 text-center",children:Object(n.jsxs)("div",{className:"mt-5",children:[Object(n.jsx)("i",{className:"fas fa-4x fa-globe text-primary mb-4"}),Object(n.jsx)("h3",{className:"h4 mb-2",children:"Want to respond?"}),Object(n.jsx)("p",{className:"text-muted mb-0",children:"If you want to join an open discussion simply add a media video or audio (anonymous or non-anonymous) link with oral response to the conversation or just send memes. That's always fun."})]})}),Object(n.jsx)("div",{className:"col-lg-3 col-md-6 text-center",children:Object(n.jsxs)("div",{className:"mt-5",children:[Object(n.jsx)("i",{className:"fas fa-4x fa-heart text-primary mb-4"}),Object(n.jsx)("h3",{className:"h4 mb-2",children:"Thank you"}),Object(n.jsx)("p",{className:"text-muted mb-0",children:"We hope that this will be a step in a direction of bringing humanity together through harmony, understanding, and honest communication."})]})})]})]})}),Object(n.jsxs)("div",{id:"portfolio",children:[Object(n.jsx)("div",{className:"container-fluid p-0",children:Object(n.jsx)("div",{className:"row no-gutters",children:t&&Object(n.jsx)(m,{})})}),t&&Object(n.jsx)(g,{})]}),Object(n.jsx)("section",{className:"page-section2 text-white",children:Object(n.jsxs)("div",{className:"container text-center",children:[Object(n.jsx)("h2",{className:"mb-4",children:"Free To Join"}),Object(n.jsx)(l.b,{className:"btn btn-light btn-xl",to:"/Login",children:"Sign up now!"})]})}),Object(n.jsx)("section",{className:"page-section",id:"contact",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsxs)("div",{className:"col-lg-8 text-center",children:[Object(n.jsx)("h2",{className:"mt-0",children:"Stay In Touch!"}),Object(n.jsx)("hr",{className:"divider my-4"}),Object(n.jsx)("p",{className:"text-muted mb-5",children:"Want to advertise your business on this site? Give us a call or send us an email and we will get back to you as soon as possible!"})]})}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-lg-4 ml-auto text-center mb-5 mb-lg-0",children:[Object(n.jsx)("i",{className:"fas fa-phone fa-3x mb-3 text-muted"}),Object(n.jsx)("div",{children:"+1 (917) 263-5300"})]}),Object(n.jsxs)("div",{className:"col-lg-4 mr-auto text-center",children:[Object(n.jsx)("i",{className:"fas fa-envelope fa-3x mb-3 text-muted"}),Object(n.jsx)("a",{className:"d-block",href:"mailto:contact@yourwebsite.com",children:"contact@memebate.com"})]})]})]})}),Object(n.jsx)("footer",{className:"bg-primary py-5",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"small text-center text-white",children:"Copyright \xa9 2020 - MemeBate App is currently a UCF online coding Bootcamp project. All Rights reserved."})})})]})},f=c(35),N=c.n(f);var y=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){0===(null===c||void 0===c?void 0:c.length)&&fetch("http://localhost:4041/media").then((function(e){return e.json()})).then((function(e){s([].concat(Object(h.a)(c),Object(h.a)(e)))})).catch(console.error)}),[]),Object(n.jsx)("div",{className:"videos",children:(null===c||void 0===c?void 0:c.length)>0&&c.map((function(e,t){return Object(n.jsxs)("div",{className:"Memebates",children:[Object(n.jsx)("iframe",{width:"385",height:"315",src:"https://www.youtube.com/embed/".concat(e.debate),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},"video_".concat(t)),Object(n.jsx)(p,{id:e.id})]})}))})};var w=function(e){var t=e.primary?"primary":"",c=Object(r.b)(),s=c.user,i=c.isAuthenticated,l=Object(a.useState)(""),o=Object(u.a)(l,2),j=o[0],b=o[1],d=Object(a.useState)(""),h=Object(u.a)(d,2),m=h[0],x=h[1],O=Object(a.useState)(""),p=Object(u.a)(O,2),g=p[0],v=p[1],f=Object(a.useState)(""),w=Object(u.a)(f,2),S=w[0],k=w[1],C=Object(a.useState)(""),M=Object(u.a)(C,2),F=M[0],_=M[1],E=Object(a.useState)(""),A=Object(u.a)(E,2),R=A[0],D=A[1],T=Object(a.useState)(""),U=Object(u.a)(T,2),B=U[0],W=U[1],G=Object(a.useState)(""),I=Object(u.a)(G,2),L=I[0],H=I[1];console.log(j);var z=function(){H(""),b(""),x(""),v(""),k(""),_(""),D(""),W("")};return i&&Object(n.jsxs)("div",{className:"profile",stlyle:{display:"flex",justifyContent:"space-around",background:"green",margin:"18px 50px"},children:[Object(n.jsxs)("div",{className:"profile_left",children:[Object(n.jsx)("h1",{className:"".concat(t," font-xl"),children:"Memebers"}),Object(n.jsx)("h2",{}),Object(n.jsx)("p",{className:"points",children:"Congratulations you have 100 points!"}),Object(n.jsx)("img",{style:{width:"160px",height:"160",borderRadius:"80px"},src:"https://imagery.zoogletools.com/u/166069/dc6cfc08abcd4c18efea413f74383db421beea8d/350w/05dbb3ff-b33b-4db1-8559-438a79af7f35.jpeg"}),Object(n.jsx)("p",{children:s.email}),Object(n.jsx)("h3",{children:"Begin Debate"}),Object(n.jsxs)("div",{className:"form",children:[Object(n.jsxs)("select",{value:g,defaultValue:"",onChange:function(e){return v(e.target.value)},children:[Object(n.jsx)("option",{value:"",disabled:!0,children:"Select Catergory"}),Object(n.jsx)("option",{value:"Anime",children:"Anime"}),Object(n.jsx)("option",{value:"Coding",children:"Coding"}),Object(n.jsx)("option",{value:"Culture",children:"Culture"}),Object(n.jsx)("option",{value:"Education",children:"Education"}),Object(n.jsx)("option",{value:"Fashion",children:"Fashion"}),Object(n.jsx)("option",{value:"Financial",children:"Financial"}),Object(n.jsx)("option",{value:"Gaming",children:"Gaming"}),Object(n.jsx)("option",{value:"History",children:"History"}),Object(n.jsx)("option",{value:"Kamakazi",children:"Kamakazi"}),Object(n.jsx)("option",{value:"Medicine",children:"Medicine"}),Object(n.jsx)("option",{value:"Music",children:"Music"}),Object(n.jsx)("option",{value:"News",children:"News"}),Object(n.jsx)("option",{value:"Opinion",children:"Opinion"}),Object(n.jsx)("option",{value:"Politics",children:"Politics"}),Object(n.jsx)("option",{value:"Random",children:"Random"}),Object(n.jsx)("option",{value:"Religion",children:"Religion"}),Object(n.jsx)("option",{value:"Science",children:"Science"}),Object(n.jsx)("option",{value:"Speed",children:"Speed"}),Object(n.jsx)("option",{value:"Sports",children:"Sports"}),Object(n.jsx)("option",{value:"Tecnology",children:"Technology"}),Object(n.jsx)("option",{value:"Questions",children:"Questions"})]}),Object(n.jsxs)("select",{value:S,onChange:function(e){return k(e.target.value)},children:[Object(n.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Select Format"}),Object(n.jsx)("option",{value:"Open",children:"Open Debate"}),Object(n.jsx)("option",{value:"Closed",children:"Closed Debate"}),Object(n.jsx)("option",{value:"Moderated",children:"Moderated"}),Object(n.jsx)("option",{value:"Formal",children:"Formal"}),Object(n.jsx)("option",{value:"Live",children:"Live"})]}),Object(n.jsx)("input",{type:"text",placeholder:"Enter Title",value:j,onChange:function(e){return b(e.target.value)}}),Object(n.jsx)("input",{type:"text",placeholder:"Enter Debate Url",value:L,onChange:function(e){return H(e.target.value)}}),Object(n.jsx)("textarea",{placeholder:"Enter Synopsis",onChange:function(e){return x(e.target.value)},value:m}),Object(n.jsx)("input",{type:"text",placeholder:"Enter Supporting Url",value:F,onChange:function(e){return _(e.target.value)}}),Object(n.jsx)("input",{type:"text",placeholder:"Enter Supporting Url",value:R,onChange:function(e){return D(e.target.value)}}),Object(n.jsx)("input",{type:"text",placeholder:"Enter Supporting Url",value:B,onChange:function(e){return W(e.target.value)}}),Object(n.jsx)("button",{onClick:function(e){var t={debate:L,title:j,synopsis:m,category:g,format:S,source1:F,source2:R,source3:B};N.a.post("http://localhost:4041/media",t).then((function(e){console.log(e),z(),alert("media uploaded")})).catch(console.error)},children:"Submit"})]})]}),Object(n.jsxs)("div",{className:"profile_right",children:[Object(n.jsxs)("div",{className:"memebater",children:[Object(n.jsx)("p",{children:"Memebates"}),Object(n.jsx)("h4",{children:"likes"}),Object(n.jsx)("h4",{children:"Dislikes"}),Object(n.jsx)("image",{children:"Meme"}),Object(n.jsx)("button",{onClick:console.log,children:"MemeBate"})]}),Object(n.jsx)(y,{})]})]})};c(73),c(74);function S(){return Object(n.jsx)(l.a,{children:Object(n.jsxs)(j.c,{children:[Object(n.jsxs)(j.a,{path:"/profile",children:[Object(n.jsx)(o,{color:"dark"}),Object(n.jsx)(w,{primary:!0})]}),Object(n.jsxs)(j.a,{path:"/login",children:[Object(n.jsx)(o,{}),Object(n.jsx)(b,{})]}),Object(n.jsxs)(j.a,{path:"/",children:[Object(n.jsx)(o,{}),Object(n.jsx)(v,{}),Object(n.jsx)(g,{}),Object(n.jsx)(p,{})]})]})})}i.a.render(Object(n.jsx)(r.a,{domain:"dev-g2wsfaf4.us.auth0.com",clientId:"oRh7HMEEqUvhjrFJUXadh9aXrCiQ64oh",redirectUri:window.location.origin,children:Object(n.jsx)(S,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.907a0d92.chunk.js.map