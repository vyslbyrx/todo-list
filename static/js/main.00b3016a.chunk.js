(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(8),i=c.n(n),o=c(5),s=c(9),l=c(4),d=(c(14),c(18)),r=c(19),j=c(1);var u=function(){var e=Object(a.useState)([{id:0,name:"Domates Al",completed:!1},{id:1,name:"30 sayfa kitap okumay\u0131 unutma",completed:!0},{id:2,name:"Market al\u0131\u015fveri\u015fi yap\u0131lacak",completed:!0},{id:3,name:"6:30 da spor salonuna gidilecek...",completed:!0}]),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),u=Object(l.a)(i,2),m=u[0],b=u[1],O=Object(a.useState)(),p=Object(l.a)(O,2),h=p[0],f=p[1],x=Object(a.useState)(""),v=Object(l.a)(x,2),k=v[0],N=v[1],C=function(e){if(""===e.target.value)return!1;N(e.target.value)},g=function(){f(-1),N("")};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"todo-list-title",children:"TODO LIST"}),Object(j.jsxs)("div",{className:"todo-add",children:[Object(j.jsx)("input",{value:m,onChange:function(e){if(" "===e.target.value)return!1;b(e.target.value)},type:"text"}),Object(j.jsx)("button",{onClick:function(){""===m?alert("Please write the task name..."):(n([].concat(Object(s.a)(c),[{id:Date.now(),name:m,complete:!1}])),b(""))},children:"Add"})]}),Object(j.jsx)("div",{className:"todo-list",children:c.map((function(e){return Object(j.jsxs)("div",{className:e.completed?"todo-item complete":"todo-item",children:[Object(j.jsx)("span",{children:e.name}),Object(j.jsxs)("div",{className:"todo-item-actions",children:[Object(j.jsxs)("span",{onClick:function(){return function(e){f(e.id),N(e.name)}(e)},className:"todo-item-edit",children:[" ",Object(j.jsx)(d.b,{})," "]}),Object(j.jsx)("span",{onClick:function(){return t=e,void n(c.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{completed:!e.completed}):e})));var t},className:"todo-item-muted",children:Object(j.jsx)(r.a,{})})]}),h===e.id&&Object(j.jsxs)("div",{className:"todo-add-item",children:[Object(j.jsx)("input",{value:k,onChange:C,type:"text"}),Object(j.jsx)("button",{onClick:function(){return function(e){""===k?alert("The part of the task to be changed cannot be left blank."):(n(c.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},e),{},{name:k}):t}))),N(""))}(e)},children:"Change"}),Object(j.jsx)("span",{onClick:g,className:"todo-add-item-close",children:Object(j.jsx)(d.a,{})})]})]},e.id)}))}),Object(j.jsxs)("div",{className:"form-buttons",children:[Object(j.jsx)("button",{onClick:function(){n(c.filter((function(e){return!e.completed})))},className:"todo-clear",children:"Clear Done"}),Object(j.jsx)("button",{onClick:function(){n([])},className:"todo-all-clear",children:"Clear All"})]})]})};i.a.render(Object(j.jsx)(u,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.00b3016a.chunk.js.map