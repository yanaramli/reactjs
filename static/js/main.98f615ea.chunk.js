(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{38:function(e,t,n){e.exports=n.p+"static/media/photoalbum.d7d6c23b.svg"},47:function(e,t,n){e.exports=n(58)},55:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),l=(n(29),n(52),n(30)),i=n(31),u=n(43),s=n(32),h=n(44),m=n(33),d=n(22),p=n(62),f=n(63),b=n(64),g=n(36),w=n(60),O=function(e){var t=e.showModal,n=e.selectedImage,a=e.handleHide,o=e.setShowModal;return r.a.createElement(b.a,{show:t,onHide:function(){return a()},centered:!0},r.a.createElement(b.a.Body,null,r.a.createElement(g.a,{onClick:function(){return o(!1)}}),n?r.a.createElement(w.a,{style:{height:"330px",maxWidth:"100%"},alt:"selected image",src:n.download_url}):null))},E=function(e){var t=e.allNewPhoto,n=e.setShowModal,a=e.setSelectedImage;return t.map((function(e,t){return r.a.createElement(w.a,{onClick:function(){n(!0),a(e)},key:t,src:e.download_url,className:"img",width:"300px",alt:"image",rounded:!0})}))},j=(n(55),function(){return r.a.createElement("div",{style:{display:"block",marginLeft:"auto",marginRight:"auto"}},r.a.createElement(w.a,{alt:"loading...",src:"https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif",height:"300"}))}),v=n(61),y=n(66),x=function(e){var t=e.handleClick;return r.a.createElement("div",{style:{display:"block",marginLeft:"auto",marginRight:"auto"}},r.a.createElement(v.a,null,r.a.createElement(y.a,{variant:"outline-info",onClick:function(){return t()}},"Refresh")))};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var k={allNewPhoto:[],page:1},S=function(){var e=Object(a.useState)(k),t=Object(d.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),l=Object(d.a)(c,2),i=l[0],u=l[1],s=Object(a.useState)(null),h=Object(d.a)(s,2),b=h[0],g=h[1],w=function(){var e;o({page:(e=100,Math.floor(Math.random()*e)),allNewPhoto:[]}),fetch("".concat("https://picsum.photos/v2/list?limit=6&page=").concat(n.page),{headers:{"Cache-Control":"no-cache"}}).then((function(e){return e.json()})).then((function(e){o((function(t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{allNewPhoto:e})})),console.log(e)})).catch((function(e){return console.error(e)}))};Object(a.useEffect)((function(){w()}),[]);return r.a.createElement(p.a,null,n.allNewPhoto.length?r.a.createElement("div",{className:"Container"},r.a.createElement(E,{allNewPhoto:n.allNewPhoto,setShowModal:u,setSelectedImage:g})):r.a.createElement(f.a,null,r.a.createElement(j,null)),r.a.createElement(f.a,{className:"mt-3"},r.a.createElement(x,{handleClick:function(){return w()}})),r.a.createElement(O,{showModal:i,selectedImage:b,handleHide:function(){return u(!1)},setShowModal:u}))},N=n(37),C=n(65),M=n(39),B=n(38),I=n.n(B);function D(){var e=Object(N.a)(["\n\t.navbar {\n\t\tbackground-color: black;\n\t\tfont-family: 'Source Sans Pro', sans-serif;\n\t\t-webkit-box-shadow: 0 8px 6px -6px #999;\n\t\t-moz-box-shadow: 0 8px 6px -6px #999;\n\t\tbox-shadow: 0 8px 6px -6px #999;\n\t}\n\t.navbar-brand {\n\t\tfont-weight: bold;\n\t\tcolor: white;\n\n\t\t&:hover {\n\t\t\tcolor: #e6e6fa;\n\t\t}\n\t}\n"]);return D=function(){return e},e}var H=M.a.div(D()),R=function(){return r.a.createElement(H,null,r.a.createElement(C.a,{bg:"dark",expand:"lg"},r.a.createElement(C.a.Brand,{href:"#home"},r.a.createElement("img",{src:I.a,width:"30",height:"30",className:"d-inline-block align-top",alt:"React Bootstrap logo"})," ","PHOTO ALBUM")))},L=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null),r.a.createElement("br",null),r.a.createElement(S,null))}}]),t}(a.Component);c.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.98f615ea.chunk.js.map