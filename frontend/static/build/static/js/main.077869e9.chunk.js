(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{48:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(24),r=n.n(i),c=n(13),o=(n(48),n(22)),l=n.n(o),h=n(27),d=n(7),j=n(8),u=n(3),b=n(10),p=n(9),m=n(6),O=n.n(m),f=n(20),v=n(0),x=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleInput=a.handleInput.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(j.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleRegistration(this.state)}},{key:"render",value:function(){return Object(v.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(v.jsx)("h3",{children:"Choose A Username"}),Object(v.jsx)("label",{for:"username"}),Object(v.jsx)("input",{id:"username",type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(v.jsx)("br",{}),Object(v.jsx)("h3",{children:"Enter Your Email Address"}),Object(v.jsx)("label",{for:"email"}),Object(v.jsx)("input",{id:"email",type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput}),Object(v.jsx)("br",{}),Object(v.jsx)("h3",{children:"Choose A Password"}),Object(v.jsx)("label",{for:"password1"}),Object(v.jsx)("input",{id:"password1",type:"password",placeholder:"password",name:"password1",value:this.state.password1,onChange:this.handleInput}),Object(v.jsx)("br",{}),Object(v.jsx)("h3",{children:"Enter Your Password Again"}),Object(v.jsx)("label",{for:"password2"}),Object(v.jsx)("input",{id:"password2",type:"password",placeholder:"enter password again",name:"password2",value:this.state.password2,onChange:this.handleInput}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{className:"login-button",type:"Submit",children:"Register"})]})}}]),n}(s.a.Component),g=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:""},a.handleInput=a.handleInput.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(j.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleLogin(this.state)}},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"login-page-container",children:[Object(v.jsx)("div",{className:"login-container",children:Object(v.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(v.jsx)("h3",{children:"Enter Username"}),Object(v.jsx)("label",{for:"username1"}),Object(v.jsx)("input",{type:"text",id:"username1",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(v.jsx)("br",{}),Object(v.jsx)("h3",{children:"Enter Email"}),Object(v.jsx)("label",{for:"email1"}),Object(v.jsx)("input",{id:"email1",type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput}),Object(v.jsx)("br",{}),Object(v.jsx)("h3",{children:"Enter Password"}),Object(v.jsx)("label",{for:"password"}),Object(v.jsx)("input",{type:"password",placeholder:"password",id:"password",name:"password",value:this.state.password1,onChange:this.handleInput}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{className:"login-button",type:"Submit",onClick:this.redirectToHome,children:"Submit"})]})}),Object(v.jsx)("div",{className:"registration-container",children:Object(v.jsx)(x,{})})]})})}}]),n}(s.a.Component),y=n(25),w=n(12),k=n(23),C=n.n(k),S=n(42),N=n(66),T=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={reviews:[],title:"",body:"",rating:"",show:!1,game:a.props.game.id},a.addReview=a.addReview.bind(Object(u.a)(a)),a.handleInput=a.handleInput.bind(Object(u.a)(a)),a.handleShow=a.handleShow.bind(Object(u.a)(a)),a.handleClose=a.handleClose.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(j.a)(n,[{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleChange",value:function(e){this.setState({rating:e.target.value})}},{key:"handleInput",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"addReview",value:function(e){e.preventDefault();var t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(this.state)};fetch("/api/v1/reviews/",t).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})),this.setState({game:"",title:"",body:"",rating:""})}},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)(S.a,{className:"collection-button",variant:"primary",onClick:this.handleShow,children:"Add Review"}),Object(v.jsxs)(N.a,{show:this.state.show,onHide:this.handleClose,children:[Object(v.jsx)(N.a.Header,{closebutton:!0,children:Object(v.jsx)(N.a.Title,{className:"review-title",children:"Add Your Review Here"})}),Object(v.jsx)(N.a.Body,{children:Object(v.jsxs)("form",{onSubmit:this.addReview,children:[Object(v.jsx)("input",{type:"text",autoComplete:"off",name:"title",value:this.state.title,onChange:this.handleInput,placeholder:"Title of Review"}),Object(v.jsx)("textarea",{name:"body",value:this.state.body,onChange:this.handleInput,id:"",cols:"30",rows:"10",placeholder:"Your thoughts"}),Object(v.jsx)("p",{children:"Rating (1-5):"}),Object(v.jsxs)("select",{value:this.state.rating,onChange:this.handleChange,children:[Object(v.jsx)("option",{value:"1",children:"1"}),Object(v.jsx)("option",{value:"2",children:"2"}),Object(v.jsx)("option",{value:"3",children:"3"}),Object(v.jsx)("option",{value:"4",children:"4"}),Object(v.jsx)("option",{value:"5",children:"5"})]}),Object(v.jsxs)("section",{className:"rating-scale",children:[Object(v.jsx)("p",{children:"Rating Scale:"}),Object(v.jsx)("p",{children:"5- Highly recommend as soon as possible."}),Object(v.jsx)("p",{children:"4- Recommend but not a go and get now."}),Object(v.jsx)("p",{children:"3- Not a must have but still good. Maybe wait for it to be on sale."}),Object(v.jsx)("p",{children:"2- Not for me. Not a bad game and could see others maybe liking it."}),Object(v.jsx)("p",{children:"1- Garbage. Not even worth a try."})]}),Object(v.jsx)("button",{type:"submit",onClick:this.handleClose,children:"Submit"})]})}),Object(v.jsx)(N.a.Footer,{children:Object(v.jsx)(S.a,{variant:"secondary",onClick:this.handleClose,children:"Close"})})]})]})})}}]),n}(s.a.Component),R=Object(w.g)(T),E=n(21),F=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state=Object(E.a)(Object(E.a)({},a.props.game),{},{reviews:[],show:!1}),a.handleShow=a.handleShow.bind(Object(u.a)(a)),a.handleClose=a.handleClose.bind(Object(u.a)(a)),a}return Object(j.a)(n,[{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/reviews/games/?game=".concat(this.state.name)).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({reviews:t})})).catch((function(e){console.error("There has been a problem with your fetch operation:",e)}))}},{key:"render",value:function(){var e=this.state.reviews.map((function(e){return Object(v.jsxs)("li",{children:[Object(v.jsx)("h3",{children:e.title}),Object(v.jsxs)("p",{children:["By: ",e.author]}),Object(v.jsx)("p",{children:e.body}),Object(v.jsxs)("p",{children:["Rating: ",e.rating]})]},e.id)}));return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(S.a,{className:"collection-button",variant:"primary",onClick:this.handleShow,children:"See Reviews"}),Object(v.jsxs)(N.a,{show:this.state.show,onHide:this.handleClose,children:[Object(v.jsx)(N.a.Header,{closebutton:!0,children:Object(v.jsx)(N.a.Title,{className:"review-title",children:"Reviews"})}),Object(v.jsx)(N.a.Body,{children:Object(v.jsx)("ul",{children:Object(v.jsx)("p",{children:e})})}),Object(v.jsx)(N.a.Footer,{children:Object(v.jsx)(S.a,{variant:"secondary",onClick:this.handleClose,children:"Close"})})]})]})}}]),n}(s.a.Component),I=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={isEditing:!1,play_status:"UNSTARTED",show:!1},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.saveStatus=a.saveStatus.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(j.a)(n,[{key:"handleChange",value:function(e){this.setState({play_status:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"saveStatus",value:function(){var e=this.props.game;e.play_status=this.state.play_status,this.props.updateStatus(e),this.setState({isEditing:!1})}},{key:"render",value:function(){var e=this,t=this.props.game;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("li",{className:"collection-item",children:[Object(v.jsx)("h2",{className:"collection-title",children:t.name}),Object(v.jsxs)("section",{className:"collection-body",children:[Object(v.jsx)(R,{game:t}),Object(v.jsx)("img",{src:t.background_image,alt:"game screenshot"}),Object(v.jsx)("p",{children:"Date Added To Collection:"}),Object(v.jsx)(C.a,{className:"release-date",format:"MM/DD/YYYY",children:t.date_added}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),this.state.isEditing?Object(v.jsx)("form",{onSubmit:this.handleSubmit,children:Object(v.jsxs)("select",{value:this.state.play_status,onChange:this.handleChange,children:[Object(v.jsx)("option",{value:"NOTSTARTED",children:"Not Started"}),Object(v.jsx)("option",{value:"PLAYING",children:"Playing"}),Object(v.jsx)("option",{value:"COMPLETED",children:"Completed"})]})}):Object(v.jsxs)("p",{children:["Play Status: ",t.play_status]}),this.state.isEditing?Object(v.jsx)(S.a,{className:"collection-button",type:"button",onClick:this.saveStatus,children:"Save"}):Object(v.jsx)(S.a,{className:"collection-button",type:"button",onClick:function(){return e.setState({isEditing:!0})},children:"Change Play Status"}),Object(v.jsx)(S.a,{className:"collection-button",type:"button",onClick:function(){return e.props.removeGame(t.id)},children:"Remove"}),Object(v.jsx)(F,{game:t})]})]})})}}]),n}(s.a.Component),A=Object(w.g)(I),D=n(28),_=function(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)("ul",{children:e.gameResults.map((function(e){return Object(v.jsx)("li",{children:Object(v.jsxs)(c.b,{to:{pathname:"/game/".concat(e.name),gameProps:{game:e}},children:[Object(v.jsx)("h3",{children:e.name}),Object(v.jsx)("img",{src:e.background_image,alt:"game"}),Object(v.jsx)("h3",{children:"Released:"}),Object(v.jsx)(C.a,{className:"release-date",format:"MM/DD/YYYY",children:e.released})]})},e.id)}))}),Object(v.jsxs)("p",{children:["Game data and pictures provided by ",Object(v.jsx)("a",{href:"https://rawg.io/",children:"RAWG"})]})]})};n(59).config();var P=function(){var e=Object(a.useState)(""),t=Object(D.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)([]),r=Object(D.a)(i,2),c=r[0],o=r[1],l=Object(a.useState)(!1),h=Object(D.a)(l,2),d=h[0],j=h[1],u=function(){return j(!1)};return Object(v.jsxs)("div",{children:[Object(v.jsx)(S.a,{className:"collection-button",variant:"primary",onClick:function(){return j(!0)},children:"Add New Game"}),Object(v.jsxs)(N.a,{show:d,onHide:u,children:[Object(v.jsx)(N.a.Header,{closeButton:!0,children:Object(v.jsx)(N.a.Title,{children:"Game Search"})}),Object(v.jsxs)(N.a.Body,{children:[Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=n.split(" ").join("-").toLowerCase();o([]),fetch("https://rawg.io/api/games?key=".concat("00ad52f6e4214b1fa7cb50086b276cfc","&search=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.results;void 0===t?alert("no games found"):o(t)})),s("")},children:[Object(v.jsx)("input",{type:"text",value:n,onChange:function(e){s(e.target.value)}}),Object(v.jsx)("input",{type:"submit"})]}),Object(v.jsx)(_,{gameResults:c})]}),Object(v.jsx)(N.a.Footer,{children:Object(v.jsx)(S.a,{variant:"secondary",onClick:u,children:"Close"})})]})]})},Y=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={games:[]},a.componentDidMount=a.componentDidMount.bind(Object(u.a)(a)),a.filterCompleted=a.filterCompleted.bind(Object(u.a)(a)),a.filterPlaying=a.filterPlaying.bind(Object(u.a)(a)),a.filterUnstarted=a.filterUnstarted.bind(Object(u.a)(a)),a.removeGame=a.removeGame.bind(Object(u.a)(a)),a.updateStatus=a.updateStatus.bind(Object(u.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/games/?is_owned=true").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({games:t})})).catch((function(e){console.error("There has been a problem with your fetch request:",e)}))}},{key:"filterCompleted",value:function(){var e=this;fetch("api/v1/games/?play_status=COMPLETED").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({games:t})})).catch((function(e){console.error("There has been a problem with your fetch request:",e)}))}},{key:"filterPlaying",value:function(){var e=this;fetch("api/v1/games/?play_status=PLAYING").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({games:t})})).catch((function(e){console.error("There has been a problem with your fetch request:",e)}))}},{key:"filterUnstarted",value:function(){var e=this;fetch("api/v1/games/?play_status=UNSTARTED").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({games:t})})).catch((function(e){console.error("There has been a problem with your fetch request:",e)}))}},{key:"removeGame",value:function(e){var t=this,n={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")}};fetch("/api/v1/games/".concat(e,"/"),n).then((function(n){var a=Object(y.a)(t.state.games),s=a.findIndex((function(t){return t.id===e}));a.splice(s,1),t.setState({games:a})}))}},{key:"updateStatus",value:function(e){var t=this,n={method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(e)};fetch("/api/v1/games/".concat(e.id,"/?is_owned=true"),n).then((function(e){return e.json()})).then((function(e){var n=Object(y.a)(t.state.games),a=n.findIndex((function(e){return e.id}));n[a]=e,t.setState({games:n})}))}},{key:"render",value:function(){var e=this,t=this.state.games.map((function(t){return Object(v.jsx)(A,{game:t,removeGame:e.removeGame,updateStatus:e.updateStatus},t.id)}));return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"main-container",children:Object(v.jsxs)("div",{className:"collection-main-container",children:[Object(v.jsx)("h1",{children:"MY COLLECTION"}),Object(v.jsx)(P,{}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{className:"filter-button",type:"button",onClick:this.componentDidMount,children:"All"}),Object(v.jsx)("button",{className:"filter-button",type:"button",onClick:this.filterCompleted,children:"Completed"}),Object(v.jsx)("button",{className:"filter-button",type:"button",onClick:this.filterPlaying,children:"Playing"}),Object(v.jsx)("button",{className:"filter-button",type:"button",onClick:this.filterUnstarted,children:"Unstarted"}),Object(v.jsx)("div",{className:"collection-container",children:Object(v.jsx)("ul",{className:"collection-list",children:t})})]})})})}}]),n}(s.a.Component);var L=function(e){return Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{className:"nav-links",children:[Object(v.jsx)("li",{className:"navbar-links",children:Object(v.jsx)(c.b,{to:"/",className:"nav-link",children:"Home"})}),Object(v.jsx)("li",{className:"navbar-links",children:!O.a.get("Authorization")&&Object(v.jsx)(c.b,{to:"/login",className:"nav-link",children:"Login / Register"})}),Object(v.jsx)("li",{className:"user-links",children:!!O.a.get("Authorization")&&Object(v.jsx)(c.b,{to:"/userhomepage",className:"nav-link",children:"Collection"})}),Object(v.jsx)("li",{className:"user-links",children:!!O.a.get("Authorization")&&Object(v.jsx)(c.b,{to:"/wishlist",className:"nav-link",children:"Wishlist"})}),Object(v.jsx)("li",{className:"user-links",children:!!O.a.get("Authorization")&&Object(v.jsx)(c.b,{to:"/profile",className:"nav-link",children:"Profile"})}),Object(v.jsx)("li",{className:"user-links",children:!!O.a.get("Authorization")&&Object(v.jsx)(c.b,{to:"/",className:"nav-link",onClick:function(){return e.handleLogout("login")},children:"Logout"})})]})})},G=(n(63),n(43)),M=["children"];var H=function(e){var t=e.children,n=Object(G.a)(e,M);return Object(v.jsx)(w.b,Object(E.a)(Object(E.a)({},n),{},{render:function(){return!0===!!O.a.get("Authorization")?t:Object(v.jsx)(w.a,{to:"/"})}}))},U=n(31),X=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleInput=function(e){a.setState({searchTerm:e.target.value})},a.state={searchTerm:"",results:[]},a.getResults=a.getResults.bind(Object(u.a)(a)),a.handleInput=a.handleInput.bind(Object(u.a)(a)),a}return Object(j.a)(n,[{key:"getResults",value:function(e){var t=this;e.preventDefault(),fetch("/api/v1/users/profiles/?display_name=".concat(this.state.searchTerm)).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){console.dir(e),t.setState({results:e})})).catch((function(e){console.error("There has been a problem with your fetch operation:",e)})),this.setState({searchTerm:""})}},{key:"render",value:function(){var e,t=this,n=this.state.results.map((function(e){return Object(v.jsx)("li",{children:Object(v.jsxs)(U.a,{style:{width:"18rem"},children:[Object(v.jsx)(U.a.Img,{variant:"top",src:e.avatar}),Object(v.jsxs)(U.a.Body,{children:[Object(v.jsx)(U.a.Title,{children:e.display_name}),Object(v.jsx)(S.a,{variant:"primary",onClick:function(){return t.props.addFriend(e.id)},children:"Add friend"})]})]})},e.id)}));return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("form",{onSubmit:this.getResults,children:Object(v.jsxs)("label",{htmlFor:"searchTerm",children:[Object(v.jsx)("strong",{children:"Find Friend: "}),Object(v.jsx)("input",{type:"text",name:"searchTerm",value:this.state.searchTerm,onChange:this.handleInput,autoComplete:"off"}),Object(v.jsx)("input",{type:"submit",value:"submit"})]})}),Object(v.jsx)("ul",{children:n}),Object(v.jsx)("h3",{children:null===(e=this.state.results)||void 0===e?void 0:e.display_name})]})}}]),n}(s.a.Component),z=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={friends:[],display_name:"",avatar:null,preview:""},a.addFriend=a.addFriend.bind(Object(u.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/users/profiles/user/").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState(Object(E.a)({},t))})).catch((function(e){console.error("There has been a problem with your fetch operation:",e)}))}},{key:"addFriend",value:function(e){var t=this,n=[].concat(Object(y.a)(this.state.friends),[e]),a={method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify({friends:n})};fetch("/api/v1/users/profiles/user/",a).then((function(e){return e.json()})).then((function(e){t.setState(e),console.log(e)}))}},{key:"render",value:function(){var e=this.state.friends.map((function(e){return Object(v.jsxs)("li",{children:[Object(v.jsx)("img",{className:"friend-list-avatar",src:e.avatar,alt:""}),Object(v.jsx)("p",{children:e.display_name})]},e.id)}));return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(X,{addFriend:this.addFriend}),Object(v.jsx)("h3",{children:"Friends"}),Object(v.jsx)("ul",{children:Object(v.jsx)("p",{children:e})})]})}}]),n}(s.a.Component),B=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={display_name:"",avatar:null,preview:"",isEditing:!1},a.handleImage=a.handleImage.bind(Object(u.a)(a)),a.handleInput=a.handleInput.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/users/profiles/user/").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState(Object(E.a)({},t))})).catch((function(e){console.error("There has been a problem with your fetch operation:",e)}))}},{key:"handleInput",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState({avatar:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"handleSubmit",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a,s,i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=new FormData,this.state.avatar instanceof File&&n.append("avatar",this.state.avatar),n.append("display_name",this.state.display_name),this.state.id?(a="PATCH",s="/api/v1/users/profiles/user/"):(a="POST",s="/api/v1/users/profiles/"),i={method:a,headers:{"X-CSRFToken":O.a.get("csrftoken")},body:n},e.next=8,fetch(s,i);case 8:r=e.sent,this.setState({isEditing:!1}),alert("Profile saved!",r);case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"profile-main-container",children:[Object(v.jsx)("div",{className:"friends-list",children:Object(v.jsx)(z,{})}),Object(v.jsx)("div",{className:"profile-details",children:Object(v.jsxs)("form",{children:[Object(v.jsx)("label",{htmlFor:"display-name",children:"Display name: "}),Object(v.jsx)("input",{id:"display-name",type:"text",name:"display_name",value:this.state.display_name,onChange:this.handleInput,disabled:!this.state.isEditing}),Object(v.jsxs)("div",{className:"profile-image-container",children:[Object(v.jsx)("input",{type:"file",name:"avatar",onChange:this.handleImage}),this.state.avatar&&!this.state.preview&&Object(v.jsx)("img",{className:"profile-image",src:this.state.avatar,alt:""}),this.state.preview&&Object(v.jsx)("img",{className:"profile-image",src:this.state.preview,alt:""})]}),this.state.isEditing?Object(v.jsx)(S.a,{className:"collection-button",type:"button",onClick:this.handleSubmit,children:"Save"}):Object(v.jsx)(S.a,{className:"collection-button",type:"button",onClick:function(){return e.setState({isEditing:!0})},children:"Edit"})]})})]})})}}]),n}(s.a.Component),J=Object(w.g)(B),W=Object(w.g)((function(e){var t=e.location.gameProps.game,n=Object(a.useState)(!1),s=Object(D.a)(n,2),i=s[0],r=s[1],c=function(){return r(!1)},o=function(n){var a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify({name:t.name,released:t.released,background_image:t.background_image,is_owned:n})};fetch("/api/v1/games/",a).then((function(e){if(!e.ok)throw new Error("Network response not ok");return e.json()})),e.history.push("/userhomepage")};return Object(v.jsxs)("div",{children:[Object(v.jsx)(S.a,{variant:"primary",onClick:function(){return r(!0)},children:"Show Game"}),Object(v.jsxs)(N.a,{show:i,onHide:c,children:[Object(v.jsx)(N.a.Header,{closeButton:!0,children:Object(v.jsx)(N.a.Title,{children:t.name})}),Object(v.jsxs)(N.a.Body,{children:[Object(v.jsx)("img",{src:t.background_image,alt:"screenshot"}),Object(v.jsx)("h3",{children:"Released:"}),Object(v.jsx)(C.a,{className:"release-date",format:"MM/DD/YYYY",children:t.released}),Object(v.jsx)("h3",{children:"Platform(s):"}),Object(v.jsx)("p",{children:t.platforms.map((function(e){return"".concat(e.platform.name," |")}))}),Object(v.jsx)("br",{}),Object(v.jsx)("button",{type:"button",onClick:function(){return o(!0)},children:"Add to Your Collection"}),Object(v.jsx)("button",{type:"button",onClick:function(){return o(!1)},children:"Add to Wishlist"})]}),Object(v.jsx)(N.a.Footer,{children:Object(v.jsx)(S.a,{variant:"secondary",onClick:c,children:"Close"})})]}),Object(v.jsxs)("p",{children:["Game data and pictures provided by ",Object(v.jsx)("a",{href:"https://rawg.io/",children:"RAWG"})]})]})})),q=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={games:[],is_owned:a.props.game.is_owned},a}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.props.game;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("li",{className:"collection-item",children:[Object(v.jsx)("h2",{className:"collection-title",children:t.name}),Object(v.jsxs)("section",{className:"collection-body",children:[Object(v.jsx)("img",{src:t.background_image,alt:"game screenshot"}),Object(v.jsx)("p",{children:"Date Added To Wishlist:"}),Object(v.jsx)(C.a,{className:"release-date",format:"MM/DD/YYYY",children:t.date_added}),Object(v.jsx)("br",{}),Object(v.jsx)(S.a,{className:"collection-button",type:"button",onClick:function(){return e.props.updateOwned(t.id)},children:"Add to Collection"}),Object(v.jsx)(S.a,{className:"collection-button",type:"button",onClick:function(){return e.props.removeGame(t.id)},children:"Remove"}),Object(v.jsx)(F,{})]})]})})}}]),n}(s.a.Component),K=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={games:[]},a.removeGame=a.removeGame.bind(Object(u.a)(a)),a.updateOwned=a.updateOwned.bind(Object(u.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/games/?is_owned=false").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({games:t})})).catch((function(e){console.error("There has been a problem with your fetch request:",e)}))}},{key:"removeGame",value:function(e){var t=this,n={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")}};fetch("/api/v1/games/".concat(e),n).then((function(n){var a=Object(y.a)(t.state.games),s=a.findIndex((function(t){return t.id===e}));a.splice(s,1),t.setState({games:a})}))}},{key:"updateOwned",value:function(e){var t=this,n={method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify({is_owned:!0})};fetch("/api/v1/games/".concat(e,"/?is_owned=false"),n).then((function(e){return e.json()})).then((function(e){var n=Object(y.a)(t.state.games),a=n.findIndex((function(e){return e.id}));n[a]=e,t.setState({games:n}),t.props.history.push("/userhomepage")}))}},{key:"render",value:function(){var e=this,t=this.state.games.map((function(t){return Object(v.jsx)(q,{game:t,removeGame:e.removeGame,updateOwned:e.updateOwned},t.id)}));return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"main-container",children:Object(v.jsxs)("div",{className:"collection-main-container",children:[Object(v.jsx)("h1",{children:"MY WISHLIST"}),Object(v.jsx)(P,{}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{className:"collection-container",children:Object(v.jsx)("ul",{className:"collection-list",children:t})})]})})})}}]),n}(s.a.Component),Q=Object(w.g)(K),V=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h1",{className:"frontpage-main-title",children:"YOUR GAMES, YOUR WAY"}),Object(v.jsxs)("div",{className:"frontpage-container",children:[Object(v.jsxs)("div",{className:"frontpage-item",children:[Object(v.jsx)("i",{className:"fas fa-gamepad frontpage-icon"}),Object(v.jsx)("p",{className:"frontpage-title",children:"Your Collection"}),Object(v.jsx)("p",{className:"frontpage-body",children:"Keep track of your game collection"})]}),Object(v.jsxs)("div",{className:"frontpage-item",children:[Object(v.jsx)("i",{className:"far fa-keyboard frontpage-icon"}),Object(v.jsx)("p",{className:"frontpage-title",children:"Your Input"}),Object(v.jsx)("p",{className:"frontpage-body",children:"Create your own reviews, ratings and recommendations"})]}),Object(v.jsxs)("div",{className:"frontpage-item",children:[Object(v.jsx)("i",{className:"fas fa-users frontpage-icon"}),Object(v.jsx)("p",{className:"frontpage-title",children:"Your Community"}),Object(v.jsx)("p",{className:"frontpage-body",children:"Connect with friends to share and see what they're playing"})]})]})]})})}}]),n}(s.a.Component),Z=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={selection:O.a.get("Authorization")?"userhomepage":"login"},a.handleNavigation=a.handleNavigation.bind(Object(u.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(u.a)(a)),a.handleLogin=a.handleLogin.bind(Object(u.a)(a)),a.handleLogout=a.handleLogout.bind(Object(u.a)(a)),a}return Object(j.a)(n,[{key:"handleNavigation",value:function(e){this.setState({selection:e})}},{key:"handleRegistration",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/registration/",n).catch(a);case 4:if(!(s=e.sent).ok){e.next=11;break}return e.next=8,s.json().catch(a);case 8:i=e.sent,O.a.set("Authorization","Token ".concat(i.key)),this.props.history.push("/profile");case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleLogin",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/login/",n).catch(a);case 4:if(!(s=e.sent).ok){e.next=11;break}return e.next=8,s.json().catch(a);case 8:i=e.sent,O.a.set("Authorization","Token ".concat(i.key)),this.props.history.push("/userhomepage");case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")}},n=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/logout/",t).catch(n);case 4:e.sent.ok&&(O.a.remove("Authorization"),this.props.history.push("/"));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsx)("div",{className:"main-container",children:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(L,{handleNavigation:this.handleNavigation,handleLogout:this.handleLogout}),Object(v.jsx)("div",{children:Object(v.jsxs)(w.d,{children:[Object(v.jsx)(w.b,{exact:!0,path:"/",component:V}),Object(v.jsx)(w.b,{exact:!0,path:"/login",children:Object(v.jsx)(g,{handleNavigation:this.handleNavigation,handleLogin:this.handleLogin})}),Object(v.jsx)(w.b,{path:"/register",children:Object(v.jsx)(x,{handleNavigation:this.handleNavigation,handleRegistration:this.handleRegistration})}),Object(v.jsx)(H,{path:"/userhomepage",children:Object(v.jsx)(Y,{})}),Object(v.jsx)(H,{path:"/profile",children:Object(v.jsx)(J,{})}),Object(v.jsx)(H,{path:"/gamesearch",children:Object(v.jsx)(P,{})}),Object(v.jsx)(H,{path:"/game/:name",children:Object(v.jsx)(W,{})}),Object(v.jsx)(H,{path:"/wishlist",children:Object(v.jsx)(Q,{})}),Object(v.jsx)(H,{path:"/submitreview",children:Object(v.jsx)(R,{})}),Object(v.jsx)(H,{path:"/profilesearch",children:Object(v.jsx)(X,{})})]})})]})})}}]),n}(s.a.Component),$=Object(w.g)(Z),ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(c.a,{children:Object(v.jsx)($,{})})}),document.getElementById("root")),ee()}},[[64,1,2]]]);
//# sourceMappingURL=main.077869e9.chunk.js.map