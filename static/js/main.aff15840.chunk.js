(this["webpackJsonpcall-react-api"]=this["webpackJsonpcall-react-api"]||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(20),i=a.n(r),o=a(21),l=a(2),j=a(13),d=a.n(j),b=a(16),h=a(8),p=a(9),u=a(11),m=a(10),O=(a(29),a(30),function(e){var t=e.increment,a=e.decrement,n=e.numberPage;return Object(c.jsx)("footer",{children:Object(c.jsxs)("div",{className:"contenedor",children:[Object(c.jsx)("div",{className:"buttonStyle",children:Object(c.jsx)("button",{type:"button",class:"btn btn-dark btn-sm",onClick:a,children:"Anterior"})}),Object(c.jsx)("div",{className:"buttonStyle",children:Object(c.jsxs)("button",{class:"btn btn-dark mb-3 btn-sm",children:["Page Number ",Object(c.jsx)("span",{class:"badge badge-light",children:n})]})}),Object(c.jsx)("div",{className:"buttonStyle",children:Object(c.jsx)("button",{type:"button",class:"btn btn-dark btn-sm",onClick:t,children:"Siguiente"})})]})})}),v=(a(31),a(32),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"lds-grid",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})}}]),a}(n.Component));var x=function(){return Object(c.jsx)("div",{className:"PageLoading",children:Object(c.jsx)(v,{})})};a(33);var g=function(e){return Object(c.jsxs)("div",{className:"PageError",children:["\u274c",e.error.message,"\ud83d\ude31"]})},f=(a(34),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={modalActivo:!1},e}return Object(p.a)(a,[{key:"activarModal",value:function(){this.setState({modalActivo:!0})}},{key:"desactivarModal",value:function(){this.setState({modalActivo:!1})}},{key:"render",value:function(){var e=this,t=this.state.modalActivo;return Object(c.jsxs)(n.Fragment,{children:[t?Object(c.jsx)("div",{className:"Modal",children:Object(c.jsxs)("div",{className:"containerPrimary",children:[Object(c.jsx)("div",{className:"imageContainer",children:Object(c.jsx)("img",{src:this.props.character.image})}),Object(c.jsxs)("div",{className:"informationContainer",children:[Object(c.jsx)("h1",{children:this.props.character.name}),Object(c.jsxs)("div",{className:"informationStyle",children:[Object(c.jsx)("p",{className:"informationStyleTopP",children:"Status:"}),Object(c.jsx)("p",{children:this.props.character.status})]}),Object(c.jsxs)("div",{className:"informationStyle",children:[Object(c.jsx)("p",{className:"informationStyleTopP",children:"Species:"}),Object(c.jsx)("p",{children:this.props.character.species})]}),Object(c.jsxs)("div",{className:"informationStyle",children:[Object(c.jsx)("p",{className:"informationStyleTopP",children:"Gender:"}),Object(c.jsx)("p",{children:this.props.character.gender})]}),Object(c.jsxs)("div",{className:"informationStyle",children:[Object(c.jsx)("p",{className:"informationStyleTopP",children:"Origin:"}),Object(c.jsx)("p",{children:this.props.character.origin.name})]}),Object(c.jsx)("button",{type:"button",class:"btn btn-dark",onClick:function(t){return e.desactivarModal()},children:"Close"})]})]})}):null,Object(c.jsx)("div",{class:"center",onClick:function(t){return e.activarModal()},children:Object(c.jsxs)("div",{class:"property-card",children:[Object(c.jsx)("img",{src:this.props.character.image}),Object(c.jsx)("div",{class:"property-image",children:Object(c.jsx)("div",{class:"property-image-title"})}),Object(c.jsx)("div",{class:"property-description",children:Object(c.jsx)("h5",{children:this.props.character.name})})]})})]})}}]),a}(s.a.Component)),y=a.p+"static/media/image.1c95a02a.png",N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={loading:!0,error:null,data:{info:{},results:[]},page:1,pageCounter:1,modalActivo:!1},e.fetchData=Object(b.a)(d.a.mark((function t(){var a,c,n,s=arguments;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.length>0&&void 0!==s[0]?s[0]:0,a="https://rickandmortyapi.com/api/character/?page=".concat(e.state.page),e.setState({loading:!0,error:null}),t.prev=3,t.next=6,fetch(a);case 6:return c=t.sent,t.next=9,c.json();case 9:n=t.sent,e.setState({loading:!1,data:{info:n.info,results:(e.state.data.results,n.results)}}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),e.setState({loading:!1,error:t.t0});case 16:case"end":return t.stop()}}),t,null,[[3,13]])}))),e.increment=Object(b.a)(d.a.mark((function t(){var a,c,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.state,c=a.page,n=a.pageCounter,e.setState({page:c+1,pageCounter:n+1});case 2:case"end":return t.stop()}}),t)}))),e.decrement=function(){var t=e.state,a=t.page,c=t.pageCounter;e.setState({page:a-1,pageCounter:c-1})},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.page;a!=t.page&&(a<0&&(this.setState({page:0,pageCounter:1}),this.fetchData(e.page)),this.fetchData(a)),34===a&&this.setState({page:33,pageCounter:34})}},{key:"activarModal",value:function(){this.setState({modalActivo:!0})}},{key:"render",value:function(){var e=this.state,t=e.pageCounter;e.modalActivo;return!0===this.state.loading&&void 0===this.state.data?Object(c.jsx)(x,{}):this.state.error?Object(c.jsx)(g,{error:this.state.error}):Object(c.jsxs)("div",{className:"background",children:[Object(c.jsx)("div",{className:"image-logo-container",children:Object(c.jsx)("a",{className:"",imageHeader:!0,title:"Los Tejos",href:"https://rickandmortyapi.com/",children:Object(c.jsx)("img",{src:y,alt:"Los Tejos"})})}),Object(c.jsx)("div",{className:"container body",children:Object(c.jsx)("div",{className:"contStyle",children:Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("ul",{className:"row",children:this.state.data.results.map((function(e){return Object(c.jsx)("li",{className:"col-4",children:Object(c.jsx)(f,{character:e})},e.id)}))})})})}),Object(c.jsx)(O,{increment:this.increment,decrement:this.decrement,numberPage:t})]})}}]),a}(s.a.Component),k=(a(35),a.p+"static/media/404Error-rafiki.20b870df.svg");var S=function(){return Object(c.jsx)("div",{className:"notFound",children:Object(c.jsx)("img",{src:k})})};var C=function(){return Object(c.jsx)(o.a,{children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",component:N}),Object(c.jsx)(l.a,{component:S})]})})},A=(a(41),document.getElementById("app"));i.a.render(Object(c.jsx)(C,{}),A)}},[[42,1,2]]]);
//# sourceMappingURL=main.aff15840.chunk.js.map