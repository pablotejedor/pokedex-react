(this["webpackJsonppokedex-react"]=this["webpackJsonppokedex-react"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(6),a=n.n(r),s=(n(11),n(2)),i=n(0),o=function(e){var t=e.pokemon,n={fire:"#F05030",grass:"#78C850",electric:"#F8D030",water:"#3899F8",ground:"#E9D6A4",rock:"#B8A058",fairy:"#E79FE7",poison:"#B058A0",bug:"#A8B820",dragon:"#7860E0",psychic:"#F870A0",flying:"#98A8F0",fighting:"#A05038",normal:"#A8A090",steel:"#A8A8C0",ghost:"#6060B0",ice:"#58C8E0",dark:"#7A5848"},c={backgroundImage:"linear-gradient(315deg, ".concat(n[t.types[t.types.length-1]]," 0%, ").concat(n[t.types[0]]," 75%)")};return Object(i.jsxs)("div",{className:"poke-card",style:c,children:[Object(i.jsx)("img",{src:t.img,alt:t.name}),Object(i.jsxs)("p",{children:["#",t.id]}),Object(i.jsx)("h4",{children:t.name[0].toUpperCase()+t.name.slice(1)}),Object(i.jsxs)("p",{children:["Type: ",t.type]})]})},u=n(3),p=n.n(u),j=n(5),b=function(){var e=Object(j.a)(p.a.mark((function e(t){var n,c,r,a,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=function(){var e=Object(j.a)(p.a.mark((function e(t){var n,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://pokeapi.co/api/v2/pokemon/".concat(t),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=[],r=t[0];r<=t[1];r++)c.push(n(r));return e.next=5,Promise.all(c);case 5:return a=e.sent,s=a.map((function(e){return{img:e.sprites.front_default,name:e.name,id:e.id,type:e.types.map((function(e){return e.type.name[0].toUpperCase()+e.type.name.slice(1)})).join(", "),types:e.types.map((function(e){return e.type.name}))}})),e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e){var t=e.rangeOfPokemons,n=Object(c.useState)([]),r=Object(s.a)(n,2),a=r[0],u=r[1],p=Object(c.useState)(!0),j=Object(s.a)(p,2),l=j[0],d=j[1];return Object(c.useEffect)((function(){b(t).then((function(e){u(e),d(!1)}))}),[t]),Object(c.useEffect)((function(){d(!0)}),[t]),Object(i.jsx)(i.Fragment,{children:l?Object(i.jsx)("p",{children:"Loading..."}):Object(i.jsx)("div",{className:"poke-container",children:a.map((function(e){return Object(i.jsx)(o,{pokemon:e},e.id)}))})})},d=function(){var e=Object(c.useState)([1,30]),t=Object(s.a)(e,2),n=t[0],r=t[1],a=function(){n[1]+30>891?r([n[0]=870,n[1]+(891-n[1])]):r(n.map((function(e){return e+30})))},o=function(){n[0]<30||r(n.map((function(e){return e-30})))};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Pokedex"}),Object(i.jsx)("h3",{children:"Gotta catch' em all!"}),Object(i.jsxs)("div",{className:"buttons-container",children:[Object(i.jsx)("button",{onClick:o,children:"Previous"}),Object(i.jsx)("button",{onClick:a,children:"Next"})]}),Object(i.jsx)(l,{rangeOfPokemons:n}),Object(i.jsxs)("div",{className:"buttons-container",children:[Object(i.jsx)("button",{onClick:o,children:"Previous"}),Object(i.jsx)("button",{onClick:a,children:"Next"})]})]})};a.a.render(Object(i.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.53cd00bb.chunk.js.map