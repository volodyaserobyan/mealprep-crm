(this["webpackJsonpmealprep-crm"]=this["webpackJsonpmealprep-crm"]||[]).push([[3],{35:function(e,t,a){},37:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),o=a(32),l=a(28),u=a(10),i=(a(35),a(36)),s=a.n(i),p=function(e){return c.a.createElement("input",{type:e.type,name:e.name,placeholder:e.placeholder,className:s()("input",e.className),value:e.value,onChange:function(t){return e.onChange(t)}})},m=(a(37),Object(u.b)((function(e){return{help:e.helpReducer.getCategories}}))((function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),r=a[0],u=a[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),m=s[0],d=s[1],h=Object(n.useState)(!1),f=Object(l.a)(h,2),b=f[0],E=f[1];return b?c.a.createElement(o.a,{to:{pathname:"".concat("/projects/react/mealprep-crm/build","/dashboard/help/").concat(e.help[0]._id)}}):c.a.createElement("section",{className:"SignIn"},c.a.createElement("div",{className:"SignIn-Cont"},c.a.createElement("h1",null,"Sign In"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==m&&""!==r&&E(!0)}},c.a.createElement(p,{type:"text",name:"mail",placeholder:"E-mail",value:r,onChange:function(e){return u(e.target.value)}}),c.a.createElement(p,{type:"password",name:"password",placeholder:"Password",value:m,onChange:function(e){return d(e.target.value)}}),c.a.createElement(p,{type:"submit",className:"Submit",value:"LOGIN"}))))}))),d=(a(42),Object(u.b)((function(e){return{help:e.helpReducer.getCategories}}))((function(e){return c.a.createElement("section",{className:"Aside"},c.a.createElement("div",{className:"Aside-Cont"},c.a.createElement("ul",null,c.a.createElement(r.c,{to:{pathname:"".concat("/projects/react/mealprep-crm/build","/dashboard/help/").concat(e.help[0]._id)}},c.a.createElement("li",null,"Help")),c.a.createElement(r.c,{to:{pathname:"".concat("/projects/react/mealprep-crm/build","/dashboard/blog")}},c.a.createElement("li",null,"Blog")),c.a.createElement(r.c,{to:{pathname:"".concat("/projects/react/mealprep-crm/build","/dashboard/meal")}},c.a.createElement("li",null,"Meal")))))}))),h=a(3),f=function(e){return function(t){return t({type:h.d}),fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){t({type:h.e,getCategories:e})})).catch((function(e){t({type:h.c,data:e})}))}},b=function(e,t,a){return function(n){return n({type:h.d}),fetch(e,{method:a?"PATCH":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){n({type:h.g,postCategories:e})})).catch((function(e){n({type:h.c,data:e})}))}},E=function(e,t){return function(a){return a({type:h.d}),fetch(e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){a({type:h.f,patchOrder:e})})).catch((function(e){a({type:h.c,data:e})}))}},g="https://andoghevian-chef-app.herokuapp.com",j=("".concat(g,"/users/me"),"".concat(g,"/users/"),"".concat(g,"/meals"),"".concat(g,"/users/local/auth/code/verify"),"".concat(g,"/users/local/auth/code/refresh"),"".concat(g,"/users/local/auth/signup"),"".concat(g,"/users/local/auth/login"),"".concat(g,"/users/facebook/auth/login"),"".concat(g,"/users/local/auth/logout"),"".concat(g,"/filters"),"".concat(g,"/testimonials"),"".concat(g,"/users/me/testimonials"),"".concat(g,"/users/local/password/forget"),"".concat(g,"/users/local/password/change"),"".concat(g,"/help-center/categories")),O=("".concat(g,"/about-us/team"),a(43),Object(u.b)(null,(function(e){return{deleteQuestHelp:function(t){return e(function(e){return function(t){return t({type:h.d}),fetch(e,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){t({type:h.b,deleteQuestions:e})})).catch((function(e){t({type:h.c,data:e})}))}}(t))},postQuest:function(t,a,n){return e(b(t,a,n))},patchOrderHelp:function(t,a){return e(E(t,a))}}}))((function(e){var t=Object(n.useState)({id:"",isOpen:!1}),a=Object(l.a)(t,2),o=a[0],u=a[1],i=Object(n.useState)({id:"",isOpen:!1}),s=Object(l.a)(i,2),m=s[0],d=s[1],h=Object(n.useState)(""),f=Object(l.a)(h,2),b=f[0],E=f[1],g=Object(n.useState)(""),O=Object(l.a)(g,2),v=O[0],C=O[1],y=Object(n.useState)(""),S=Object(l.a)(y,2),N=S[0],T=S[1],H=Object(n.useState)(""),_=Object(l.a)(H,2),w=_[0],D=_[1];return c.a.createElement("section",{className:"HelpGeneral"},e.item.questions.map((function(t,a){return c.a.createElement("div",{key:t._id},c.a.createElement("div",null,c.a.createElement("h1",{onClick:function(){return u({id:t._id,isOpen:!o.isOpen})}},t.title),c.a.createElement("p",{onClick:function(){return E(t._id)}},a),b==t._id&&c.a.createElement("form",{onSubmit:function(a){return function(t,a){a.preventDefault();var n={newIndex:v};e.patchOrderHelp("".concat(j,"/questions/").concat(t,"/order"),n)}(t._id,a)}},c.a.createElement(p,{type:"text",name:"order",placeholder:"Order",value:v,onChange:function(e){return C(e.target.value)}}),c.a.createElement(p,{type:"submit",className:"Submit",value:"SAVE"})),c.a.createElement("button",{onClick:function(){return function(t){e.deleteQuestHelp("".concat(j,"/questions/").concat(t))}(t._id)}},"Delete"),c.a.createElement("button",{onClick:function(){return d({id:t._id,isOpen:!m.isOpen})}},"Edit"),m.id==t._id&&m.isOpen&&c.a.createElement("form",{onSubmit:function(a){return function(t,a){a.preventDefault();var n={title:N,label:N.split(" ").join("_").toLowerCase(),answere:w};e.postQuest("".concat(j,"/questions/").concat(t),n,!0)}(t._id,a)}},c.a.createElement(p,{type:"text",name:"question",placeholder:"Question",value:N,onChange:function(e){return T(e.target.value)}}),c.a.createElement(p,{type:"text",name:"answere",placeholder:"Answere",value:w,onChange:function(e){return D(e.target.value)}}),c.a.createElement(p,{type:"submit",className:"Submit",value:"SAVE"}))),t._id==o.id&&o.isOpen&&c.a.createElement("p",null,t.answere))})),c.a.createElement(r.b,{to:{pathname:"".concat("/projects/react/mealprep-crm/build","/dashboard/addhelp"),query:e.id}},c.a.createElement("button",null,"Add Question")))}))),v=(a(44),a(31),Object(u.b)((function(e){return{helpGET:e.helpReducer.getCategories,helpORDER:e.helpReducer.patchOrder,helpDELETECAT:e.helpReducer.deleteCategories,helpDELETEQUEST:e.helpReducer.deleteQuestions}}),(function(e){return{getCategoriesHelp:function(t){return e(f(t))},deleteCategoriesHelp:function(t){return e(function(e){return function(t){return t({type:h.d}),fetch(e,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){t({type:h.a,deleteCategories:e})})).catch((function(e){t({type:h.c,data:e})}))}}(t))},patchOrderHelp:function(t,a){return e(E(t,a))}}}))((function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),u=a[0],i=a[1],s=Object(n.useState)(""),m=Object(l.a)(s,2),d=m[0],h=m[1],f=Object(n.useState)(""),b=Object(l.a)(f,2),E=b[0],g=b[1];Object(n.useEffect)((function(){e.getCategoriesHelp(j)}),[e.helpDELETECAT,e.helpDELETEQUEST,e.helpORDER]);return u?c.a.createElement(o.a,{to:{pathname:"".concat("/projects/react/mealprep-crm/build","/dashboard/addhelp")}}):c.a.createElement("section",{className:"Help"},c.a.createElement("div",{className:"Help-Cont innerWrap"},c.a.createElement("h1",{className:"Help-Cont-Title"},"Help Center"),c.a.createElement("div",{className:"Help-Cont-Wrap"},c.a.createElement("div",{className:"Help-Cont-Wrap-Menu"},e.helpGET.map((function(t){return c.a.createElement("div",{key:t._id},c.a.createElement(r.c,{to:{pathname:"".concat("/projects/react/mealprep-crm/build","/dashboard/help/").concat(t._id)},activeClassName:"isActive"},c.a.createElement("p",null,t.title),c.a.createElement("p",{onClick:function(){return h(t._id)}},t.orderIndex)),d==t._id&&c.a.createElement("form",{onSubmit:function(a){return function(t,a){a.preventDefault();var n={newIndex:E};e.patchOrderHelp("".concat(j,"/").concat(t,"/order"),n)}(t._id,a)}},c.a.createElement(p,{type:"text",name:"order",placeholder:"Order",value:d.value,onChange:function(e){console.log(e.target.value),g(e.target.value)}}),c.a.createElement(p,{type:"submit",className:"Submit",value:"ADD"})),c.a.createElement("button",{onClick:function(){e.deleteCategoriesHelp("".concat(j,"/").concat(t._id))}},"Delete"))}))),c.a.createElement("div",{className:"Help-Cont-Wrap-Context"},e.helpGET.map((function(t){return e.match.params.id==t._id&&c.a.createElement(O,{key:t._id,item:t,id:e.match.params.id})})))),c.a.createElement("button",{onClick:function(){return i(!0)}},"Add Help")))}))),C=(a(46),a(31)),y=Object(u.b)((function(e){return{helpGET:e.helpReducer.getCategories,helpPost:void 0!=e.helpReducer.postCategories&&e.helpReducer.postCategories.message}}),(function(e){return{postCategoriesHelp:function(t,a){return e(b(t,a))}}}))((function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),r=a[0],u=a[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),m=s[0],d=s[1],h=Object(n.useState)(""),f=Object(l.a)(h,2),b=f[0],E=f[1],g=Object(n.useState)(""),O=Object(l.a)(g,2),v=O[0],y=O[1],S=Object(n.useState)(""),N=Object(l.a)(S,2),T=N[0],H=N[1],_=Object(n.useState)(e.location.query),w=Object(l.a)(_,2),D=w[0],A=(w[1],Object(n.useState)(!1)),x=Object(l.a)(A,2),k=x[0],L=x[1];""==r&&e.helpGET.map((function(t){e.location.query==t._id&&(u(t.title),d(t.title.split(" ").join("_").toLowerCase()))}));return Object(n.useEffect)((function(){"help categorie created"===e.helpPost&&C.isEmpty(e.helpGET)&&L(!0)}),[e.helpPost]),console.log(e),k?c.a.createElement(o.a,{to:{pathname:"".concat("/projects/react/mealprep-crm/build","/dashboard/help/").concat(e.help[0]._id)}}):(console.log(r,"sss"),c.a.createElement("section",{className:"AddHelp"},c.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),void 0==D){var a={title:r,label:m,questions:[{title:b,label:v,answere:T}]};e.postCategoriesHelp(j,a)}else{var n={title:b,answere:T,label:v};e.postCategoriesHelp("".concat(j,"/").concat(D,"/questions"),n)}}},c.a.createElement(p,{type:"text",name:"title",placeholder:"Title",value:r,onChange:function(e){u(e.target.value);var t=e.target.value.split(" ").join("_");d(t.toLowerCase())}}),c.a.createElement(p,{type:"text",name:"title",placeholder:"Title-label",value:m,onChange:function(e){return d(e.target.value.split(" ").join("_").toLowerCase())}}),c.a.createElement(p,{type:"text",name:"question",placeholder:"Question",value:b,onChange:function(e){E(e.target.value);var t=e.target.value.split(" ").join("_");y(t.toLowerCase())}}),c.a.createElement(p,{type:"text",name:"title",placeholder:"Question-label",value:v,onChange:function(e){return y(e.target.value.split(" ").join("_").toLowerCase())}}),c.a.createElement(p,{type:"text",name:"answer",placeholder:"Answeer",value:T,onChange:function(e){return H(e.target.value)}}),c.a.createElement(p,{type:"submit",className:"Submit",value:"ADD"}))))})),S=(a(47),function(){return c.a.createElement("section",{className:"Blog"},"Blog")}),N=(a(48),function(){return c.a.createElement("section",{className:"Meal"},"Meal")}),T=(a(49),function(){return c.a.createElement("section",{className:"Tabs"},c.a.createElement(o.b,{path:"".concat("/projects/react/mealprep-crm/build","/dashboard/help/:id"),component:v}),c.a.createElement(o.b,{path:"".concat("/projects/react/mealprep-crm/build","/dashboard/addhelp"),component:y}),c.a.createElement(o.b,{path:"".concat("/projects/react/mealprep-crm/build","/dashboard/blog"),component:S}),c.a.createElement(o.b,{path:"".concat("/projects/react/mealprep-crm/build","/dashboard/meal"),component:N}))}),H=(a(50),function(){return c.a.createElement("section",{className:"Dashboard"},c.a.createElement("div",{className:"Dashboard-Cont"},c.a.createElement(d,null),c.a.createElement(T,null)))}),_=(a(51),a(31));t.default=Object(u.b)((function(e){return{help:e.helpReducer.getCategories}}),(function(e){return{getCategoriesHelp:function(t){return e(f(t))}}}))((function(e){return Object(n.useEffect)((function(){_.isEmpty(e.help)&&e.getCategoriesHelp(j)}),[]),_.isEmpty(e.help)?c.a.createElement("div",null,"Loading..."):c.a.createElement("div",{className:"App"},c.a.createElement(r.a,null,c.a.createElement(o.d,null,c.a.createElement(o.b,{path:"".concat("/projects/react/mealprep-crm/build","/"),component:m,exact:!0}),c.a.createElement(o.b,{path:"".concat("/projects/react/mealprep-crm/build","/dashboard"),component:H}))))}))}}]);
//# sourceMappingURL=3.32bcb208.chunk.js.map