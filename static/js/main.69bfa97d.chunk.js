(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(37)},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(17),c=n.n(o),s=n(10),i=n(7),l=n(19),u=n(20),h=(n(31),n(14)),d=n.n(h),b=n(21),p=n(2),m=n(3),E=n(5),f=n(4),O=n(6),g=function(e){var t=e.children;return a.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},t)},v=function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"robots"}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,r)))},j=function(e){var t=e.robots;return console.log("CardList"),a.a.createElement("div",null,t.map(function(e,t){return a.a.createElement(v,{key:t,id:e.id,name:e.name,email:e.email})}))},y=function(e){e.searchField;var t=e.searchChange;return console.log("SearchBox"),a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},R=function(e){function t(){return Object(p.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(m.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return console.log("Header"),a.a.createElement("div",null,a.a.createElement("h1",{className:"f1"},"RoboFriends"))}}]),t}(r.Component),S=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(E.a)(this,Object(f.a)(t).call(this,e))).state={hasError:!1},n}return Object(O.a)(t,e),Object(m.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oooops. That is not good."):this.props.children}}]),t}(r.Component),w=function(e){function t(){return Object(p.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.onRequestRobots();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o?a.a.createElement("h1",null,"Loading"):a.a.createElement("div",{className:"tc"},a.a.createElement(R,null),a.a.createElement(y,{searchField:t,searchChange:n}),a.a.createElement(g,null,a.a.createElement(S,null,a.a.createElement(j,{robots:c}))))}}]),t}(r.Component),C=Object(s.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(w);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(35);var _=n(9),k={searchField:"",robots:[]},T=(Object(l.createLogger)(),Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(_.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(_.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(_.a)({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(_.a)({},e,{error:t.payload,isPending:!1});default:return e}}})),F=Object(i.d)(T,Object(i.a)(u.a));c.a.render(a.a.createElement(s.a,{store:F},a.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.69bfa97d.chunk.js.map