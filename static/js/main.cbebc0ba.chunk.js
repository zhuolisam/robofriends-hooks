(this["webpackJsonprobofriends-hooks"]=this["webpackJsonprobofriends-hooks"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(4),a=c.n(s),o=(c(9),c(2)),i=c(0),b=function(e){var t=e.name,c=e.id,n=e.email;return Object(i.jsxs)("div",{className:"tc f7 bg-light-green dib br3 ma2 grow pa3 bw2 shadow-5",children:[Object(i.jsx)("img",{alt:"Robots",src:"https://robohash.org/".concat(c,"?200x200")}),Object(i.jsxs)("h2",{children:[" ",t," "]}),Object(i.jsxs)("p",{children:[" ",n," "]})]})},j=function(e){var t=e.robots;return Object(i.jsx)("div",{children:t.map((function(e,c){return Object(i.jsx)(b,{id:t[c].id,name:t[c].name,email:t[c].email},t[c].id)}))})},h=function(e){var t=e.searchChange;return Object(i.jsx)("div",{className:"pa2",children:Object(i.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search a robot...",onChange:t})})},l=function(e){return Object(i.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})};c(11);var d=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(o.a)(s,2),b=a[0],d=a[1],u=Object(n.useState)(0),f=Object(o.a)(u,2);f[0],f[1],Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]);var O=c.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())}));return c.length?Object(i.jsxs)("div",{className:"tc",children:[".",Object(i.jsx)("h1",{className:"f1",children:" Robofriends"}),Object(i.jsx)(h,{searchChange:function(e){d(e.target.value)}}),Object(i.jsx)(l,{children:Object(i.jsx)(j,{robots:O})})]}):Object(i.jsx)("h1",{className:"tc",children:"Loading"})};c(12);a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[13,1,2]]]);
//# sourceMappingURL=main.cbebc0ba.chunk.js.map