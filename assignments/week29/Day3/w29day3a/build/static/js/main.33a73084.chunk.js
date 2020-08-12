(this.webpackJsonpw28day3a=this.webpackJsonpw28day3a||[]).push([[0],{37:function(e,a,t){e.exports=t(67)},42:function(e,a,t){},43:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(32),o=t.n(l),c=t(7),s=(t(42),t(43),t(1)),i=t(33),m=t.n(i),u="/",p="/sign-in",d="/sign-up",g="/profile",h=t(34),b=t(35),v=t.n(b),E={baseUrl:"https://react-demo-login-signup.herokuapp.com/",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json"},responseType:"json"},f=function(e){var a=e.data,t=e.url,n=e.method,r=function(){var e=localStorage.getItem("access_token");return!!e&&(E.headers.Authorization="Bearer ".concat(e)),E}();return v()(Object(h.a)({method:n,url:t,data:a},r))},N=t(8),k=t.n(N),w=t(15),y=t(14),O=t(9),j=t(10),x=t(12),S=t(11),C=function(e){Object(x.a)(t,e);var a=Object(S.a)(t);function t(e){var n;return Object(O.a)(this,t),(n=a.call(this,e)).inputChangeHandler=function(e){console.log("change handler triggered"),n.setState(Object(y.a)({},e.target.name,e.target.value),(function(){console.log(n.state)}))},n.clickedSubmitButton=function(){var e=Object(w.a)(k.a.mark((function e(a){var t,r,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log("submit button clicked"),t=n.state,console.log("form data --\x3e ",t),r=n.props.history,e.prev=5,e.next=8,f({method:"POST",url:"/login",data:t});case 8:if(!(l=e.sent).data.error){e.next=11;break}throw new Error(l.data.error);case 11:console.log("response data --\x3e ",l.data),localStorage.setItem("access_token",l.data.access_token),localStorage.setItem("user_info",JSON.stringify(l.data.user)),r.push("/profile"),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(5),console.log("login error --\x3e ",e.t0.message),n.setState({error:e.t0.message});case 22:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(a){return e.apply(this,arguments)}}(),n.state={email:"",password:"",error:""},n}return Object(j.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password,n=e.error;return r.a.createElement("form",null,r.a.createElement("h3",null,"Sign In"),n&&r.a.createElement("h6",{id:"error"},n),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{name:"email",type:"email",className:"form-control",value:a,onChange:this.inputChangeHandler,placeholder:"Enter email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",type:"password",className:"form-control",value:t,onChange:this.inputChangeHandler,placeholder:"Enter password"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"custom-control custom-checkbox"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember me"))),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:this.clickedSubmitButton},"Submit"),r.a.createElement("p",{className:"forgot-password text-right"},"Forgot ",r.a.createElement("a",{href:"/sign-in"},"password?")))}}]),t}(n.Component),A=function(e){Object(x.a)(t,e);var a=Object(S.a)(t);function t(e){var n;return Object(O.a)(this,t),(n=a.call(this,e)).inputChangeHandler=function(e){console.log("change handler triggered"),n.setState(Object(y.a)({},e.target.name,e.target.value),(function(){console.log(n.state)}))},n.clickedSubmitButton=function(){var e=Object(w.a)(k.a.mark((function e(a){var t,r,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log("submit button clicked"),t=n.state,console.log("form data --\x3e ",t),r=n.props.history,e.prev=5,e.next=8,f({method:"POST",url:"/signup",data:t});case 8:l=e.sent,console.log("response data --\x3e ",l.data.msg),r.push("/sign-in"),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),console.log("signup error --\x3e ",e.t0),n.setState({error:"error occured !!!"});case 17:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(a){return e.apply(this,arguments)}}(),n.state={firstname:"",lastname:"",email:"",password:"",error:""},n}return Object(j.a)(t,[{key:"render",value:function(){var e=this.state,a=e.firstname,t=e.lastname,n=e.email,l=e.password,o=e.error;return r.a.createElement("form",null,r.a.createElement("h3",null,"Sign Up"),o&&r.a.createElement("h6",{id:"error"},o),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First name"),r.a.createElement("input",{name:"firstname",type:"text",className:"form-control",value:a,onChange:this.inputChangeHandler,placeholder:"First name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last name"),r.a.createElement("input",{name:"lastname",type:"text",className:"form-control",value:t,onChange:this.inputChangeHandler,placeholder:"Last name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{name:"email",type:"email",className:"form-control",value:n,onChange:this.inputChangeHandler,placeholder:"Enter email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",type:"password",className:"form-control",value:l,onChange:this.inputChangeHandler,placeholder:"Enter password"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:this.clickedSubmitButton},"Sign Up"),r.a.createElement("p",{className:"forgot-password text-right"},"Already registered ",r.a.createElement("a",{href:"sign-up"},"sign in?")))}}]),t}(n.Component),P=function(e){Object(x.a)(t,e);var a=Object(S.a)(t);function t(){var e;Object(O.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).clickedLogoutButton=function(){var a=Object(w.a)(k.a.mark((function a(t){var n;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),console.log("logout button clicked"),n=e.props.history,localStorage.clear(),n.push("/sign-in");case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(j.a)(t,[{key:"render",value:function(){var e,a,t=JSON.parse(localStorage.getItem("user_info"));return t&&(e=t.firstname,a=t.lastname),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"span4 well"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"span1"},r.a.createElement("img",{src:"https://res.cloudinary.com/dtappasld/image/upload/v1593208750/s9otj8t6h5qpxfmmqylp.png",alt:"",width:"100px",height:"100px"})),r.a.createElement("div",{className:"span3"},r.a.createElement("p",null,"Admin"),r.a.createElement("p",null,r.a.createElement("strong",null,"".concat(e," ").concat(a))),r.a.createElement("span",{className:" badge badge-warning"},"8 messages")," ",r.a.createElement("span",{className:" badge badge-info"},"15 followers")),r.a.createElement("button",{id:"logout",type:"button",className:"btn btn-danger btn-block btn-sm",onClick:this.clickedLogoutButton},"Logout")))))}}]),t}(n.Component),I=function(e){Object(x.a)(t,e);var a=Object(S.a)(t);function t(){return Object(O.a)(this,t),a.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"span4 well"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"aboutus"},r.a.createElement("h2",{className:"aboutus-title"},"About Us"),r.a.createElement("p",{className:"aboutus-text"},"Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in."),r.a.createElement("p",{className:"aboutus-text"},"This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem"),r.a.createElement("a",{className:"aboutus-more",href:"/"},"read more"))))))}}]),t}(n.Component),q=[{path:u,exact:!0,isProtected:!1,component:I},{path:p,exact:!0,isProtected:!1,component:C},{path:d,exact:!0,isProtected:!1,component:A},{path:g,exact:!0,isProtected:!0,component:P}],B=t(17),H=function(e){var a=e.component,t=Object(B.a)(e,["component"]),n=!!localStorage.getItem("access_token");return r.a.createElement(s.b,Object.assign({},t,{render:function(e){return n?r.a.createElement(a,Object.assign({},t,e)):r.a.createElement(s.a,{to:p})}}))},L=function(e){var a=e.component,t=Object(B.a)(e,["component"]),n=!!localStorage.getItem("access_token");return r.a.createElement(s.b,Object.assign({},t,{render:function(e){return e.location.pathname===u?r.a.createElement(a,Object.assign({},t,e)):n?r.a.createElement(s.a,{to:g}):r.a.createElement(a,Object.assign({},t,e))}}))};var _=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top"},r.a.createElement("div",{className:"container"},r.a.createElement(c.b,{className:"navbar-brand",to:u},"React Demo App"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:u},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:g},"Profile")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:p},"Sign In")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",to:d},"Sign up")))))),r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement("div",{className:"auth-inner"},r.a.createElement(s.d,null,m.a.map(q,(function(e,a){return e.isProtected?r.a.createElement(H,Object.assign({key:a},e)):r.a.createElement(L,Object.assign({key:a},e))})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.33a73084.chunk.js.map