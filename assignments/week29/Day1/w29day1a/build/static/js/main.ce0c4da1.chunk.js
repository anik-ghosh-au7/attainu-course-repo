(this.webpackJsonpw29day1a=this.webpackJsonpw29day1a||[]).push([[0],{22:function(e,a,t){e.exports=t(34)},27:function(e,a,t){},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),c=t.n(r),s=t(6),o=(t(27),t(28),t(1)),m=t(20),i=t.n(m),u=t(7),p=t(8),d=t(10),E=t(9),b=function(e){Object(d.a)(t,e);var a=Object(E.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("form",null,l.a.createElement("h3",null,"Sign In"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter password"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"custom-control custom-checkbox"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember me"))),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Submit"),l.a.createElement("p",{className:"forgot-password text-right"},"Forgot ",l.a.createElement("a",{href:"/sign-in"},"password?")))}}]),t}(n.Component),v=function(e){Object(d.a)(t,e);var a=Object(E.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("form",null,l.a.createElement("h3",null,"Sign Up"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"First name"),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"First name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Last name"),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Last name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter password"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Sign Up"),l.a.createElement("p",{className:"forgot-password text-right"},"Already registered ",l.a.createElement("a",{href:"sign-up"},"sign in?")))}}]),t}(n.Component),h=function(e){Object(d.a)(t,e);var a=Object(E.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"span4 well"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"span1"},l.a.createElement("img",{src:"https://res.cloudinary.com/dtappasld/image/upload/v1593208750/s9otj8t6h5qpxfmmqylp.png",alt:"",width:"100px",height:"100px"})),l.a.createElement("div",{class:"span3"},l.a.createElement("p",null,"Admin"),l.a.createElement("p",null,l.a.createElement("strong",null,"Anik Ghosh")),l.a.createElement("span",{class:" badge badge-warning"},"8 messages")," ",l.a.createElement("span",{class:" badge badge-info"},"15 followers"))))))}}]),t}(n.Component),f=[{path:"/",exact:!0,isProtected:!0,component:function(e){Object(d.a)(t,e);var a=Object(E.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"span4 well"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"aboutus"},l.a.createElement("h2",{class:"aboutus-title"},"About Us"),l.a.createElement("p",{class:"aboutus-text"},"Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in."),l.a.createElement("p",{class:"aboutus-text"},"This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem"),l.a.createElement("a",{class:"aboutus-more",href:"/"},"read more"))))))}}]),t}(n.Component)},{path:"/sign-in",exact:!0,isProtected:!1,component:b},{path:"/sign-up",exact:!0,isProtected:!1,component:v},{path:"/profile",exact:!0,isProtected:!1,component:h}];var g=function(){return l.a.createElement(s.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top"},l.a.createElement("div",{className:"container"},l.a.createElement(s.b,{className:"navbar-brand",to:"/"},"React Demo App"),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link",to:"/"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link",to:"/profile"},"Profile")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link",to:"/sign-in"},"Sign In")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link",to:"/sign-up"},"Sign up")))))),l.a.createElement("div",{className:"auth-wrapper"},l.a.createElement("div",{className:"auth-inner"},l.a.createElement(o.c,null,i.a.map(f,(function(e,a){return l.a.createElement(o.a,Object.assign({key:a},e))})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(s.a,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.ce0c4da1.chunk.js.map