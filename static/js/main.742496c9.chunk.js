(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var a=c(12),s=c.n(a),n=c(13),r=c(3),l=c(5),i=c(2),o=c(1);c(18),c(19);function d(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then(Object(l.a)(Object(r.a)().mark((function e(){var t,a,s,n,l,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(c);case 2:if(a=e.sent,s=a.ok,n=a.status,l=a.statusText,i=a.headers,s){e.next=6;break}throw new Error("".concat(n," - ").concat(l));case 6:if(null!==(t=i.get("content-type"))&&void 0!==t&&t.includes("application/json")){e.next=8;break}throw new Error("Content-type is not supported");case 8:return e.abrupt("return",a.json());case 9:case"end":return e.stop()}}),e)}))))}var j=function(e){return d("/users/".concat(e))},u=function(e){return e.All="all",e.Active="active",e.Completed="completed",e}({}),b=c(7),h=c.n(b),O=c(0),m=function(e){var t=e.todos,c=e.onTodoSelect,a=e.selectedTodo;return Object(O.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("i",{className:"fas fa-check"})})}),Object(O.jsx)("th",{children:"Title"}),Object(O.jsx)("th",{children:" "})]})}),Object(O.jsx)("tbody",{children:t.map((function(e){var t=e.id,s=e.title,n=e.completed,r=e===a;return Object(O.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(O.jsx)("td",{className:"is-vcentered",children:t}),Object(O.jsx)("td",{className:"is-vcentered",children:n&&Object(O.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(O.jsx)("i",{className:"fas fa-check"})})}),Object(O.jsx)("td",{className:"is-vcentered is-expanded",children:Object(O.jsx)("p",{className:h()({"has-text-danger":!n},{"has-text-success":n}),children:s})}),Object(O.jsx)("td",{className:"has-text-right is-vcentered",children:Object(O.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(O.jsx)("span",{className:"icon",children:Object(O.jsx)("i",{className:h()("far",{"fa-eye":!r},{"fa-eye-slash":r})})})})})]},t)}))})]})},x=c(9),f=c(11),p=Object.values(u),v=p.reduce((function(e,t){var c=t.split("")[0].toUpperCase()+t.slice(1);return Object(f.a)(Object(f.a)({},e),{},Object(x.a)({},t,c))}),{}),N=function(e){var t=e.query,c=e.filterBy,a=e.onQueryChange,s=e.onFilterChange;return Object(O.jsxs)("form",{className:"field has-addons",children:[Object(O.jsx)("p",{className:"control",children:Object(O.jsx)("span",{className:"select",children:Object(O.jsx)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){s(e.currentTarget.value)},children:p.map((function(e){return Object(O.jsx)("option",{value:e,selected:c===e,children:v[e]})}))})})}),Object(O.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(O.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){a(e.currentTarget.value)}}),Object(O.jsx)("span",{className:"icon is-left",children:Object(O.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(O.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(O.jsx)("button",{"aria-label":"Reset","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){a("")}})})]})]})},y=(c(21),function(){return Object(O.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(O.jsx)("div",{className:"Loader__content"})})}),g=function(){return Object(O.jsx)("div",{className:"notification is-danger is-light",children:"An error occured while loading!"})},k=function(e){var t=e.todo,c=e.onClose,a=t.id,s=t.title,n=t.completed,d=t.userId,u=Object(o.useState)(),b=Object(i.a)(u,2),m=b[0],x=b[1],f=Object(o.useState)(!1),p=Object(i.a)(f,2),v=p[0],N=p[1],k=Object(o.useState)(!1),w=Object(i.a)(k,2),C=w[0],S=w[1],T=function(){var e=Object(l.a)(Object(r.a)().mark((function e(t){var c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.prev=1,e.next=4,j(t);case 4:c=e.sent,x(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),S(!0);case 11:return e.prev=11,N(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){T(d)}),[]),Object(O.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(O.jsx)("div",{className:"modal-background"}),v&&Object(O.jsx)(y,{}),m&&Object(O.jsxs)("div",{className:"modal-card",children:[Object(O.jsxs)("header",{className:"modal-card-head",children:[Object(O.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a)}),Object(O.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(O.jsxs)("div",{className:"modal-card-body",children:[Object(O.jsx)("p",{className:"block","data-cy":"modal-title",children:s}),Object(O.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(O.jsx)("strong",{className:h()({"has-text-success":n},{"has-text-danger":!n}),children:n?"Done":"Planned"})," by ",Object(O.jsx)("a",{href:"mailto:".concat(m.email),children:m.name})]})]})]}),C&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g,{}),Object(O.jsx)("button",{type:"button",className:"button is-danger",onClick:c,children:"Close"})]})]})},w=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(o.useState)(!1),j=Object(i.a)(s,2),b=j[0],h=j[1],x=Object(o.useState)(!1),f=Object(i.a)(x,2),p=f[0],v=f[1],w=Object(o.useState)(null),C=Object(i.a)(w,2),S=C[0],T=C[1],E=Object(o.useState)(""),L=Object(i.a)(E,2),A=L[0],B=L[1],F=Object(o.useState)(u.All),_=Object(i.a)(F,2),I=_[0],q=_[1],J=function(){var e=Object(l.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,d("/todos");case 4:t=e.sent,a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),v(!0);case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){J()}),[]);var P=Object(o.useMemo)((function(){var e=Object(n.a)(c);switch(A&&(e=e.filter((function(e){return e.title.toLocaleLowerCase().includes(A.toLocaleLowerCase())}))),I){case u.Completed:e=e.filter((function(e){return e.completed}));break;case u.Active:e=e.filter((function(e){return!e.completed}))}return e}),[A,I,b]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"section",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("h1",{className:"title",children:"Todos:"}),Object(O.jsx)("div",{className:"block",children:Object(O.jsx)(N,{query:A,onQueryChange:B,filterBy:I,onFilterChange:q})}),Object(O.jsx)("div",{className:"block",children:b?Object(O.jsx)(y,{}):Object(O.jsxs)(O.Fragment,{children:[P.length>0?Object(O.jsx)(m,{todos:P,onTodoSelect:function(e){T(e)},selectedTodo:S}):Object(O.jsx)("p",{children:"No todos found"}),p&&Object(O.jsx)(g,{})]})})]})})}),S&&Object(O.jsx)(k,{todo:S,onClose:function(){T(null)}})]})};s.a.render(Object(O.jsx)(w,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.742496c9.chunk.js.map