(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{24:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(2),a=n(16),c=n.n(a),i=n(3),l=n(4),o=n(6),j=n(5),b=n(18);n(24);var d=function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.firstName}),Object(r.jsx)("td",{children:e.lastName}),Object(r.jsx)("td",{children:e.gender}),Object(r.jsx)("td",{children:e.phoneNumber}),Object(r.jsx)("td",{children:e.location})]},e.index)},h=n(17),u=n.n(h),m=function(){return u.a.get("https://randomuser.me/api/?results=50&nat=au")},p=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={employees:[],originalEmployees:[],sort:"",search:""},e.sort=function(t){var n=Object(b.a)(e.state.employees);console.log("event",t.target.id);var r="";switch(t.target.id){case"1":r=e.state.employees.sort((function(e,t){var n=e.name.first.toUpperCase(),r=t.name.first.toUpperCase();return n<r?-1:n>r?1:0}));break;case"2":r=e.state.employees.sort((function(e,t){var n=e.name.last.toUpperCase(),r=t.name.last.toUpperCase();return n<r?-1:n>r?1:0}));break;case"3":r=e.state.employees.sort((function(e,t){var n=e.location.city.toUpperCase(),r=t.location.city.toUpperCase();return n<r?-1:n>r?1:0}));break;default:console.error("error")}console.log("sorted",r),e.setState({originalEmployees:n}),e.setState({employees:r})},e.reset=function(){e.setState({employees:e.state.originalEmployees})},e.handleInputChange=function(t){if(""!==t.target.value){t.target.value;console.log(t.target.value);var n=e.state.employees.filter((function(e){return e.name.first.startsWith(t.target.value)}));e.setState({employees:n})}else e.setState({employees:e.state.originalEmployees})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;m().then((function(t){e.setState({employees:t.data.results}),e.setState({originalEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"text-center",children:[Object(r.jsx)("p",{children:"Filter by first Name: "}),Object(r.jsx)("form",{className:"form",children:Object(r.jsx)("input",{name:"firstName",onChange:this.handleInputChange,type:"text",placeholder:"filter by first name"})}),Object(r.jsx)("p",{}),Object(r.jsx)("button",{onClick:this.reset,className:"btn btn-primary btn-sm",children:"reset table"}),Object(r.jsxs)("table",{className:"table table-striped",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsxs)("th",{children:[Object(r.jsx)("div",{children:"First Name"})," ",Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:this.sort,id:"1",className:"btn btn-primary btn-sm",children:"sort alphabetically"})})]}),Object(r.jsxs)("th",{children:[Object(r.jsx)("div",{children:"Last Name"})," ",Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:this.sort,id:"2",className:"btn btn-primary btn-sm",children:"sort alphabetically"})})]}),Object(r.jsx)("th",{children:"Gender"}),Object(r.jsx)("th",{children:"Phone Number"}),Object(r.jsxs)("th",{children:[Object(r.jsx)("div",{children:"City"})," ",Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:this.sort,id:"3",className:"btn btn-primary btn-sm",children:"sort alphabetically"})})]})]})}),Object(r.jsx)("tbody",{children:this.state.employees.map((function(e){return Object(r.jsx)(d,{index:e,firstName:e.name.first,lastName:e.name.last,gender:e.gender,phoneNumber:e.cell,location:e.location.city})}))})]})]})}}]),n}(s.Component);n(43);var O=function(e){return Object(r.jsx)("div",{className:"wrapper",children:e.children})};n(44);var y=function(e){return Object(r.jsx)("h1",{className:"title",children:e.children})},f=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(O,{children:[Object(r.jsx)(y,{children:"Employee Directory"}),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(p,{})})]})}}]),n}(s.Component);n(45),n(46);c.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.ceac86b5.chunk.js.map