(this["webpackJsonpreact-link-preview"]=this["webpackJsonpreact-link-preview"]||[]).push([[0],{21:function(e,t,n){},39:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(31),a=n.n(i),r=(n(39),n(10)),l=n(9),d=n(2),o=(n(40),n(21),n(17)),j=n(0);var u=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(!1),a=Object(o.a)(i,2),r=a[0],d=a[1],u=Object(c.useState)([]),b=Object(o.a)(u,2),h=b[0],O=b[1];return Object(c.useEffect)((function(){fetch("https://retoolapi.dev/mka0wj/linkdata").then((function(e){return e.json()})).then((function(e){d(!0),O(e)}),(function(e){d(!0),s(e)}))}),[]),n?Object(j.jsxs)("div",{children:["Error: ",n.message]}):r?Object(j.jsx)("section",{className:"App-wrap",children:Object(j.jsx)("ul",{className:"App-ul",children:h.map((function(e){return Object(j.jsxs)("li",{className:"App-li",children:[Object(j.jsxs)("div",{className:"App-li-span",children:[Object(j.jsxs)("span",{children:[e.id,") "]}),e.desc,": ",e.url]}),Object(j.jsx)("div",{className:"App-content",children:Object(j.jsx)("i",{children:"preview here"})}),Object(j.jsx)("small",{children:Object(j.jsx)(l.b,{style:{color:"#ccc"},to:{pathname:"/edit/".concat(e.id),state:{id:e.id,url:e.url,desc:e.desc}},children:"Edit"})})]},e.id)}))})}):Object(j.jsx)("div",{className:"App-loading",children:"Loading..."})},b=n(12),h=n(13),O=n(7),p=n(16),x=n(15),v=n(34),k=n.n(v).a.create({baseURL:"https://retoolapi.dev/mka0wj","Access-Control-Allow-Origin":"*",headers:{"Content-type":"application/json"}}),m=new(function(){function e(){Object(b.a)(this,e)}return Object(h.a)(e,[{key:"getAll",value:function(){return k.get("/linkdata")}},{key:"get",value:function(e){return k.get("/linkdata/".concat(e))}},{key:"create",value:function(e){return k.post("/linkdata",e)}},{key:"update",value:function(e,t){return k.put("/linkdata/".concat(e),t)}},{key:"delete",value:function(e){return k.delete("/linkdata/".concat(e))}},{key:"findByUrl",value:function(e){return k.get("/linkdata?url=".concat(e))}}]),e}()),f=function(e){Object(p.a)(n,e);var t=Object(x.a)(n);function n(e){var c;return Object(b.a)(this,n),(c=t.call(this,e)).onChangeUrl=c.onChangeUrl.bind(Object(O.a)(c)),c.onChangeDesc=c.onChangeDesc.bind(Object(O.a)(c)),c.saveLink=c.saveLink.bind(Object(O.a)(c)),c.newLink=c.newLink.bind(Object(O.a)(c)),c.state={id:null,url:"",desc:"",submitted:!1},c}return Object(h.a)(n,[{key:"onChangeUrl",value:function(e){this.setState({url:e.target.value})}},{key:"onChangeDesc",value:function(e){this.setState({desc:e.target.value})}},{key:"saveLink",value:function(){var e=this,t={url:this.state.url,desc:this.state.desc};m.create(t).then((function(t){e.setState({id:t.data.id,url:t.data.url,desc:t.data.desc,submitted:!0})})).catch((function(e){console.log("LinkService.create error: ",e)}))}},{key:"newLink",value:function(){this.setState({id:null,url:"",desc:"",submitted:!1})}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"submit-form",children:this.state.submitted?Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("h4",{children:"You have submitted successfully!"}),Object(j.jsx)("button",{className:"btn btn-success",onClick:this.newLink,children:"Add Another"})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{style:{marginTop:15},children:"Add Link"}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"title",children:"URL"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"title",required:!0,value:this.state.url,onChange:this.onChangeUrl,name:"title"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"description",children:"Desc"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"description",required:!0,value:this.state.desc,onChange:this.onChangeDesc,name:"description"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:this.saveLink,className:"btn btn-success",disabled:""===this.state.url||""===this.state.desc,children:"Submit"})]})})}}]),n}(c.Component),g=function(e){Object(p.a)(n,e);var t=Object(x.a)(n);function n(e){var c;if(Object(b.a)(this,n),(c=t.call(this,e)).onChangeUrl=c.onChangeUrl.bind(Object(O.a)(c)),c.onChangeDesc=c.onChangeDesc.bind(Object(O.a)(c)),c.getLink=c.getLink.bind(Object(O.a)(c)),c.updateLink=c.updateLink.bind(Object(O.a)(c)),c.deleteLink=c.deleteLink.bind(Object(O.a)(c)),e.location.state.id){var s=c.props.location.state,i=s.id,a=s.url,r=s.desc;c.state={currentLink:{id:i,url:a,desc:r},message:""}}else c.state={currentLink:{id:null,url:"",desc:""},message:""};return c}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getLink(this.props.match.params.id)}},{key:"onChangeUrl",value:function(e){var t=e.target.value;this.setState((function(e){return{currentLink:Object(r.a)(Object(r.a)({},e.currentLink),{},{url:t})}}))}},{key:"onChangeDesc",value:function(e){var t=e.target.value;this.setState((function(e){return{currentLink:Object(r.a)(Object(r.a)({},e.currentLink),{},{desc:t})}}))}},{key:"getLink",value:function(e){var t=this;m.get(e).then((function(e){t.setState({currentLink:e.data})})).catch((function(e){console.log("EditLink getLink error: ",e)}))}},{key:"updateLink",value:function(){var e=this;m.update(this.state.currentLink.id,this.state.currentLink).then((function(t){e.setState({message:"The link was updated successfully!"})})).catch((function(e){console.log("EditLink updateLink response: ",e)}))}},{key:"deleteLink",value:function(){var e=this;if(!1===confirm("Are you sure you want to delete this link?"))return!1;m.delete(this.state.currentLink.id).then((function(t){e.props.history.push("/")})).catch((function(e){console.log("EditLink deleteLink response: ",e)}))}},{key:"render",value:function(){var e=this.state.currentLink;return Object(j.jsx)("div",{children:e?Object(j.jsxs)("div",{className:"edit-form",children:[Object(j.jsx)("h4",{style:{marginTop:15},children:"Edit Link"}),Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("p",{style:{fontSize:"10px"},children:Object(j.jsxs)("i",{children:["Editing: ",e.id]})}),Object(j.jsx)("label",{htmlFor:"url",children:"URL"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"url",value:e.url,onChange:this.onChangeUrl})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"desc",children:"Desc"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"desc",value:e.desc,onChange:this.onChangeDesc})]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"badge badge-danger mr-2",onClick:this.deleteLink,style:{marginRight:15,backgroundColor:"#282c34"},children:"Delete"}),Object(j.jsx)("button",{type:"submit",className:"badge badge-success",onClick:this.updateLink,style:{marginRight:15,backgroundColor:"#282c34"},disabled:""===this.state.url||""===this.state.desc,children:"Update"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:this.state.message})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:"Please click Edit on a Link in Previews..."})]})})}}]),n}(c.Component);var L=function(){return Object(j.jsxs)("div",{class:"App-container",children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)(l.b,{style:{fontSize:"12px",color:"black"},to:"/previews",children:"ReactJS Link Preview Demo"})]})};var y=function(){return Object(j.jsxs)("div",{class:"App-container",children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)(l.b,{style:{fontSize:"12px",color:"black"},to:"/",children:"Go to Previews"})]})};var C=function(){return Object(j.jsxs)(l.a,{children:[Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{className:"App-header-ul",children:[Object(j.jsx)("li",{className:"App-header-li",children:Object(j.jsx)(l.c,{exact:!0,activeClassName:"active",to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"App-header-li",children:Object(j.jsx)(l.c,{exact:!0,activeClassName:"active",to:"/previews",children:"Previews"})}),Object(j.jsx)("li",{className:"App-header-li",children:Object(j.jsx)(l.c,{exact:!0,activeClassName:"active",to:"/add",children:"Add Link"})})]})})})}),Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{exact:!0,path:"/",render:function(e){return Object(j.jsx)(L,Object(r.a)({},e))}}),Object(j.jsx)(d.a,{path:"/previews",render:function(e){return Object(j.jsx)(u,Object(r.a)({},e))}}),Object(j.jsx)(d.a,{path:"/add",render:function(e){return Object(j.jsx)(f,Object(r.a)({},e))}}),Object(j.jsx)(d.a,{path:"/edit/:id",render:function(e){return Object(j.jsx)(g,Object(r.a)({},e))}}),Object(j.jsx)(d.a,{path:"*",component:y})]})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),N()}},[[65,1,2]]]);
//# sourceMappingURL=main.a18adde4.chunk.js.map