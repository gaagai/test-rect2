(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{256:function(e,t,a){e.exports=a(425)},261:function(e,t,a){},425:function(e,t,a){"use strict";a.r(t);var n=a(10),c=a(0),r=a.n(c),o=a(67),l=a.n(o),i=a(60),s=(a(261),a(22)),m=a(440),u=a(49);function d(){return r.a.createElement("div",{className:"ui container topLogo"},r.a.createElement(s.b,{to:"/"},r.a.createElement(m.a,{as:"h2",className:"topHead"},r.a.createElement(u.a,{name:"location arrow"}),r.a.createElement(m.a.Content,null,"My Locations"))))}var E=a(426);function g(){return r.a.createElement("div",{className:"ui container footer"},r.a.createElement("div",{className:"buttonsFooter"},r.a.createElement("div",null,r.a.createElement(s.b,{to:"/"},r.a.createElement(E.a,{basic:!0,color:"olive",size:"medium"},"Categories"))),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/locations"},r.a.createElement(E.a,{basic:!0,color:"olive",size:"medium"},"Locations")))))}function p(e){return r.a.createElement("div",{className:"app"},r.a.createElement(d,{history:e}),e.children,r.a.createElement(g,null))}var b=r.a.createContext({categories:[{id:1,name:"Attractions"},{id:2,name:"Restaurants"},{id:3,name:"Beaches"},{id:4,name:"ATM"},{id:5,name:"Hotels"}],currentCategory:{}}),h=a(437);function f(){var e=Object(c.useContext)(b),t=e.state,a=e.dispatch,n=JSON.parse(localStorage.getItem("categories"))||t;return r.a.createElement("div",null,r.a.createElement(h.a,{horizontal:!0,divided:!0,relaxed:!0},n.categories.map((function(e){return r.a.createElement(h.a.Item,{key:e.id,onClick:function(){return function(e){a({type:"SET_CORRENT_CAT",payload:e})}(e)},className:"flex"},r.a.createElement(h.a.Content,{className:"flex ".concat(t.currentCategory.name===e.name&&"highlited")},r.a.createElement(h.a.Description,{as:"a"},e.name)))}))))}var y=a(439);function v(){var e=Object(c.useContext)(b),t=e.state,a=e.dispatch,n=t.currentCategory;return r.a.createElement(y.a,{stackable:!0,className:"ui container"},r.a.createElement(y.a.Item,{name:"categoryList",onClick:function(){return a({type:"SET_CORRENT_CAT",payload:{}})},as:s.c,exact:!0,to:"/"},"Categories"),n.name&&r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a.Item,{name:"editCategory",as:s.c,exact:!0,to:"/editcat"},r.a.createElement(u.a,{name:"edit outline"}),"Edit"),r.a.createElement(y.a.Item,{name:"deleteCategory",as:s.c,exact:!0,to:"/deletecat"},r.a.createElement(u.a,{name:"delete"}),"Delete"),r.a.createElement(y.a.Item,{name:"viewCategory",as:s.c,exact:!0,to:"/viewcat"},r.a.createElement(u.a,{name:"eye"}),"View")),r.a.createElement(y.a.Item,{name:"newCategory",as:s.c,exact:!0,to:"/addcat",position:"right"},r.a.createElement(u.a,{name:"plus"})," New Category"))}function C(){return r.a.createElement(p,null,r.a.createElement(v,null),r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"ui container header2"},r.a.createElement("h2",null,"Categories")),r.a.createElement(f,null)))}var O=a(435),j=a(438);function N(){var e=Object(c.useState)(""),t=Object(n.a)(e,2),a=t[0],o=t[1],l=Object(c.useState)(""),i=Object(n.a)(l,2),m=i[0],u=i[1],d=Object(c.useState)(!1),g=Object(n.a)(d,2),h=g[0],f=g[1],y=Object(c.useContext)(b),v=y.state,C=y.dispatch;Object(c.useEffect)((function(){window.localStorage.setItem("categories",JSON.stringify(v))}),[v]);return r.a.createElement(p,null,r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"ui container header2"},h?r.a.createElement(s.b,{to:"/"}," ",r.a.createElement(E.a,{basic:!0,color:"olive"},"Go Back to Categories")):r.a.createElement("h2",null,"Add New Category")),r.a.createElement("div",{className:"ui container addForm"},r.a.createElement(O.a,{success:h,onSubmit:function(e){e.preventDefault(),C({type:"CREACTE_CAT",payload:a}),""!==a&&(f(!0),u(a),o(""))}},r.a.createElement(O.a.Field,null,r.a.createElement("label",null,"New Category"),r.a.createElement("input",{placeholder:"New Category",onChange:function(e){return o(e.target.value)},value:a})),r.a.createElement(O.a.Field,{control:E.a,type:"submit",basic:!0,color:"olive"},"Submit New Category"),r.a.createElement(j.a,{success:!0,icon:"check",header:"Success !!!",content:"Category ** ".concat(m," ** Added :)")})))))}var S=a(434);function x(){var e=Object(c.useContext)(b),t=e.state,a=e.dispatch,o=Object(c.useState)(""),l=Object(n.a)(o,2),i=l[0],m=l[1],u=Object(c.useState)(""),d=Object(n.a)(u,2),g=d[0],h=d[1],f=Object(c.useState)(!1),y=Object(n.a)(f,2),v=y[0],C=y[1];Object(c.useEffect)((function(){t.currentCategory.name&&m(t.currentCategory.name),window.localStorage.setItem("categories",JSON.stringify(t))}),[t]);return r.a.createElement(p,null,r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"ui container header2"},""===i?r.a.createElement(s.b,{to:"/"}," ",r.a.createElement(E.a,{basic:!0,color:"olive"},"Go Back to Categories")):r.a.createElement("h2",null,"Edit: ".concat(t.currentCategory.name))),r.a.createElement("div",{className:"ui container addForm"},r.a.createElement(O.a,{success:v,onSubmit:function(e){e.preventDefault(),a({type:"EDIT_CAT",payload:i}),C(!0),h(i),m("")}},r.a.createElement(O.a.Field,{control:S.a,name:"name",label:"Category Name",placeholder:t.currentCategory.name,onChange:function(e){return m(e.target.value)},value:i}),r.a.createElement(O.a.Field,{control:E.a,type:"submit",basic:!0,color:"olive"},"Edit Category"),r.a.createElement(j.a,{success:!0,icon:"check",header:"Success !!!",content:"Changed submited to: ".concat(g)})))))}function L(){var e=Object(c.useContext)(b),t=e.state,a=e.dispatch,o=Object(c.useState)(!1),l=Object(n.a)(o,2),i=l[0],m=l[1],u=r.a.useState(!1),d=Object(n.a)(u,2),g=d[0],h=d[1];Object(c.useEffect)((function(){window.localStorage.setItem("categories",JSON.stringify(t))}),[t]);return r.a.createElement(p,null,r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"ui container header2"},i?r.a.createElement(s.b,{to:"/"},r.a.createElement(E.a,{basic:!0,color:"olive"},"Go Back to Categories")):r.a.createElement("h2",null,"Delete: ".concat(t.currentCategory.name)),r.a.createElement(O.a,{success:i},r.a.createElement(O.a.Field,{control:E.a,onClick:function(e){a({type:"DELETE_CAT",payload:t.currentCategory}),m(!0),h(!0)},disabled:g,basic:!0,color:"red",icon:"trash alternate outline"},"Delete from list"),r.a.createElement(j.a,{success:!0,icon:"check",header:"Success !!!",content:"Category Deleted"})))))}function k(){var e=Object(c.useContext)(b).state;return r.a.createElement(p,null,r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"ui container"},r.a.createElement("h2",{className:"header2"},e.currentCategory.name||"Please select a category first"),r.a.createElement("h3",null,"id:",e.currentCategory.id))))}var T=r.a.createContext({locations:[{id:1,name:"Hilton",address:"Hitlton 1 St",longitude:"34.770817",latitude:"32.0895867",category:"Hotels"},{id:2,name:"Messa",address:"Haarbaa 4 St",longitude:"34.7868466",latitude:"32.0704641",category:"Restaurants"},{id:3,name:"Gordon Beach",address:"Gordon Beach",longitude:"34.76761918",latitude:"32.08316055",category:"Beaches"},{id:4,name:"Cantina",address:"Rothschild 71",longitude:"34.7767884",latitude:"32.0657753",category:"Restaurants"},{id:5,name:"Intercontinental",address:"Kaufmann St 12",longitude:"34.76368236290579",latitude:"32.06539385",category:"Hotels"},{id:6,name:"Jerusalem Beach",address:"Jerusalem Beach",longitude:"34.76453229",latitude:"32.07443424",category:"Beaches"},{id:7,name:"Dan Tel",address:"HaYarkon St 99",longitude:"34.76734405",latitude:"32.07935405",category:"Hotels"},{id:8,name:"Art Museum",address:"Sha'ul HaMelech 27",longitude:"34.7866202",latitude:"32.0776063",category:"Attractions"}],currentLocation:{}});function w(){var e=Object(c.useContext)(T).locations.currentLocation;return r.a.createElement(y.a,{stackable:!0,className:"ui container"},r.a.createElement(y.a.Item,{name:"locationsList",as:s.c,exact:!0,to:"/locations"},"Locations"),e.name&&r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a.Item,{name:"deleteLocation",as:s.c,exact:!0,to:"/deletelocation"},r.a.createElement(u.a,{name:"delete"}),"Delete"),r.a.createElement(y.a.Item,{name:"viewLocation",as:s.c,exact:!0,to:"/viewlocation"},r.a.createElement(u.a,{name:"eye"}),"View")),r.a.createElement(y.a.Item,{name:"newLocation",as:s.c,exact:!0,to:"/addlocation",position:"right"},r.a.createElement(u.a,{name:"plus"})," New Location"))}function I(e){var t=e.alphabetSorted,a=Object(c.useContext)(T),o=a.locations,l=a.dispatchLoactions,i=JSON.parse(localStorage.getItem("locations"))||o,s=Object(c.useState)(i),m=Object(n.a)(s,2),u=m[0],d=m[1];Object(c.useEffect)((function(){if(!0===t){var e={};e.locations=u.locations.sort((function(e,t){return e.name>t.name?1:-1})),d(e)}}),[t,u.locations]);var E="true"!==t?u:i;return r.a.createElement("div",{className:"ui container"},E&&r.a.createElement(h.a,{horizontal:!0,divided:!0,relaxed:!0},E.locations.map((function(e){return r.a.createElement(h.a.Item,{key:e.id,onClick:function(){return l({type:"SET_CORRENT_LOC",payload:e})},className:"flex"},r.a.createElement(h.a.Content,{className:"flex ".concat(o.currentLocation.name===e.name&&"highlited")},r.a.createElement(h.a.Description,{as:"a"},e.name)))}))))}function A(e){var t=e.setAlphabetSorted,a=e.history;return r.a.createElement(y.a,{stackable:!0,className:"ui container"},r.a.createElement(y.a.Item,{to:"/locations",as:s.c},"Locations"),r.a.createElement(y.a.Item,{name:"aphabetic",onClick:function(){t(!0)}},"Sort alphabetically"),r.a.createElement(y.a.Item,{name:"grouped",onClick:function(){a.push({pathname:"/grouped"})}},"Groups"),r.a.createElement(y.a.Item,{name:"Filter",to:"/filter",as:s.c}))}function D(e){var t=Object(c.useState)(!1),a=Object(n.a)(t,2),o=a[0],l=a[1];return r.a.createElement(p,null,r.a.createElement("div",{className:"home"},r.a.createElement(A,{setAlphabetSorted:l,alphabetSorted:o,history:e.history}),r.a.createElement("div",{className:"ui container header2"},r.a.createElement("h2",null,"Locations"),r.a.createElement(I,{alphabetSorted:o})),r.a.createElement(w,null)))}function F(){var e=Object(c.useContext)(T),t=e.locations,a=e.dispatchLoactions,o=Object(c.useState)(!1),l=Object(n.a)(o,2),i=l[0],m=l[1],u=r.a.useState(!1),d=Object(n.a)(u,2),g=d[0],b=d[1];Object(c.useEffect)((function(){window.localStorage.setItem("locations",JSON.stringify(t))}),[t]);return r.a.createElement(p,null,r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"ui container header2"},i?r.a.createElement(s.b,{to:"/locations"},r.a.createElement(E.a,{basic:!0,color:"olive"},"Go Back to Locations")):r.a.createElement("h2",null,"Delete: ".concat(t.currentLocation.name)),r.a.createElement(O.a,{success:i},r.a.createElement(O.a.Field,{control:E.a,onClick:function(e){a({type:"DELETE_LOC",payload:t.currentLocation}),m(!0),b(!0)},disabled:g,basic:!0,color:"red"},"Delete from list"),r.a.createElement(j.a,{success:!0,icon:"check",header:"Success !!!",content:"Category Deleted"})))))}var R=a(3),_=a(31),B=a(436),G=a(12),J=a(11),z=a(20),H=a(16),M=a(21),q=function(e){function t(){var e,a;Object(G.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(z.a)(this,(e=Object(H.a)(t)).call.apply(e,[this].concat(c)))).state={},a.handleOptionsChange=function(e){var t={};t.target={name:"category",value:e.target.value},a.setState({value:e.target.value}),a.props.handleChange(t)},a}return Object(M.a)(t,e),Object(J.a)(t,[{key:"render",value:function(){var e=this.state.value,t=this.props.categories.map((function(e){var t=e.id,a=e.name;return Object(_.a)({},e,{key:t,text:a})})).map((function(e){return r.a.createElement("option",{key:e.id,value:e.name},e.name)}));return r.a.createElement(r.a.Fragment,null,"Choose a category :",r.a.createElement("select",{required:!0,value:e,onChange:this.handleOptionsChange},r.a.createElement("option",{value:""}),t))}}]),t}(c.Component),V=a(68),Y={fill:"#d00",stroke:"none"},P=function(e){function t(){return Object(G.a)(this,t),Object(z.a)(this,Object(H.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(J.a)(t,[{key:"render",value:function(){var e=this.props.size,t=void 0===e?20:e;return r.a.createElement("svg",{height:t,viewBox:"0 0 24 24",style:Y},r.a.createElement("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"}))}}]),t}(c.PureComponent),Q={position:"absolute",top:0,left:0,padding:"10px"};function Z(e){var t=e.hadleCoordinates,a=Object(c.useState)({latitude:32.08642879334798,longitude:34.78966712951661,zoom:13,bearing:0,pitch:0}),o=Object(n.a)(a,2),l=o[0],i=o[1],s=Object(c.useState)({latitude:32.0864288,longitude:34.7896672}),m=Object(n.a)(s,2),u=m[0],d=m[1],E=Object(c.useState)({}),g=Object(n.a)(E,2),p=g[0],b=g[1];function h(e,t){b(Object(_.a)({},p,Object(R.a)({},e,t.lngLat)))}return r.a.createElement(V.c,Object.assign({},l,{width:" 100%",height:"250px",mapStyle:"mapbox://styles/gaagai/ck2yygcwp0g2m1cphpnxmkppv",onViewportChange:i,mapboxApiAccessToken:"pk.eyJ1IjoiZ2FhZ2FpIiwiYSI6ImNrNWZxb3JkdjBkMmszbG53bDYza2FiYTEifQ.0g0MmVmuInQc8AThqDNlAQ"}),r.a.createElement(V.a,{longitude:u.longitude,latitude:u.latitude,offsetTop:-20,offsetLeft:-10,draggable:!0,onDragStart:function(e){h("onDragStart",e)},onDrag:function(e){h("onDrag",e)},onDragEnd:function(e){h("onDragEnd",e),d({longitude:e.lngLat[0],latitude:e.lngLat[1]}),t(e.lngLat)}},r.a.createElement(P,{size:20})),r.a.createElement("div",{className:"nav",style:Q},r.a.createElement(V.b,{onViewportChange:i})))}var W={name:"",address:"",latitude:"",longitude:"",category:""};function K(){var e=Object(c.useState)(W),t=Object(n.a)(e,2),a=t[0],o=t[1],l=Object(c.useContext)(b).state,i=Object(c.useState)(""),m=Object(n.a)(i,2),u=m[0],d=m[1],g=Object(c.useState)(!1),h=Object(n.a)(g,2),f=h[0],y=h[1],v=Object(c.useContext)(T),C=v.locations,N=v.dispatchLoactions,x=Object(c.useState)(!1),L=Object(n.a)(x,2),k=L[0],w=L[1],I=Object(c.useState)(!0),A=Object(n.a)(I,2),D=A[0],F=A[1];Object(c.useEffect)((function(){window.localStorage.setItem("locations",JSON.stringify(C))}),[C]);var G=function(e){var t=e.target,a=t.name,n=t.value;o((function(e){return Object(_.a)({},e,Object(R.a)({},a,n))}))};return r.a.createElement(p,null,r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"ui container header2"},f?r.a.createElement(s.b,{to:"/locations"}," ",r.a.createElement(E.a,{basic:!0,color:"olive"},"Go Back to locations")):r.a.createElement("h2",null,"Add New Location")),r.a.createElement("div",{className:"ui container addForm"},r.a.createElement(O.a,{success:f,onSubmit:function(e){e.preventDefault(),N({type:"CREATE_LOC",payload:a}),""!==a&&(y(!0),d(a),o(W))}},r.a.createElement(O.a.Field,{required:!0,label:"Location Name",control:S.a,placeholder:"Name",onChange:G,value:a.name,name:"name"}),r.a.createElement(O.a.Field,{required:!0,control:S.a,label:"Address",placeholder:"Address",onChange:G,value:a.address,name:"address"})," ",r.a.createElement(E.a,{onClick:function(){return w(!0)},style:{display:"block",marginBottom:"10px"},basic:!0,color:"green"},"Set Location"),r.a.createElement(B.a,{open:k,dimmer:"blurring",closeOnDimmerClick:!0},r.a.createElement(B.a.Header,null,"Drag Pin To Set Coordinates"),r.a.createElement(B.a.Content,null,r.a.createElement(Z,{hadleCoordinates:function(e){e.target={name:"longitude",value:e[0]},G(e),e.target={name:"latitude",value:e[1]},G(e),F(!1)}})),r.a.createElement(B.a.Actions,null,r.a.createElement(E.a,{style:{display:"block",marginBottom:"10px"},basic:!0,color:"green",onClick:function(){return w(!1)}},"Set Location"))),r.a.createElement(O.a.Group,{widths:"equal"},r.a.createElement(O.a.Field,{required:!0,disabled:!0,control:S.a,label:"Lat",placeholder:"Latitude",onChange:G,value:a.latitude,name:"latitude"})," ",r.a.createElement(O.a.Field,{required:!0,disabled:!0,control:S.a,label:"Long",placeholder:"Longitude",onChange:G,value:a.longitude,name:"longitude"})),r.a.createElement(q,{categories:l.categories,handleChange:G}),r.a.createElement(O.a.Field,{disabled:D,control:E.a,type:"submit",color:"olive",style:{marginTop:"10px"}},"Submit New Location"),r.a.createElement(j.a,{success:!0,icon:"check",header:"Success !!!",content:"Location ** ".concat(u.name," ** Added :)")})))))}function U(e){var t=e.Lat,a=e.Long,o=parseFloat(t)||32.08642879334798,l=parseFloat(a)||34.78966712951661,i=Object(c.useState)({latitude:o||32.08642879334798,longitude:l||34.78966712951661,zoom:13,bearing:0,pitch:0,width:"100%",height:400}),s=Object(n.a)(i,2),m=s[0],u=s[1];return r.a.createElement(r.a.Fragment,null,m!=={}?r.a.createElement(r.a.Fragment,null,r.a.createElement(V.c,Object.assign({},m,{mapStyle:"mapbox://styles/gaagai/ck2yygcwp0g2m1cphpnxmkppv",mapboxApiAccessToken:"pk.eyJ1IjoiZ2FhZ2FpIiwiYSI6ImNrNWZxb3JkdjBkMmszbG53bDYza2FiYTEifQ.0g0MmVmuInQc8AThqDNlAQ",onViewportChange:u}),r.a.createElement(V.a,{latitude:o,longitude:l},r.a.createElement("img",{alt:"pin",src:"/images/pin.svg"})))):r.a.createElement("div",null,"Loading"))}function X(){var e=Object(c.useContext)(T).locations,t=e.currentLocation,a=t.latitude,n=t.longitude,o=t.category,l=t.address,i=t.id;return r.a.createElement(p,null,r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"ui container header2"},r.a.createElement("h2",null,e.currentLocation.name||r.a.createElement(s.b,{to:"/locations"},"Please select a locatoin first")),r.a.createElement("h3",null,"Category: ",o),r.a.createElement("h3",null,"Address: ",l),r.a.createElement("h3",null,"Long: ",n),r.a.createElement("h3",null,"Lat: ",a),r.a.createElement("h5",null,"id:",i),r.a.createElement(U,{Long:n,Lat:a}))))}function $(){var e=Object(c.useContext)(T).locations,t=JSON.parse(localStorage.getItem("locations"))||e,a=Object(c.useState)(t),o=Object(n.a)(a,2),l=o[0],i=(o[1],Object(c.useState)([])),m=Object(n.a)(i,2),u=m[0],d=m[1];Object(c.useEffect)((function(){var e,t=(e="category",function(t){return t.reduce((function(t,a){var n=a[e];return t[n]=(t[n]||[]).concat(a),t}),{})})(l.locations);d(t)}),[l.locations]);var E=Object.entries(u);return r.a.createElement(p,null,r.a.createElement("div",{className:"home"},r.a.createElement(y.a,{stackable:!0,className:"ui container"},r.a.createElement(y.a.Item,{to:"/locations",as:s.c},"\u21e6 Go back to - Locations")),r.a.createElement("div",null,r.a.createElement("h2",{className:"headerGroup"},"Group By Cat"),E&&E.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("ul",{className:"groupUl"},r.a.createElement("h3",{className:"group"},e[0],":"),e[1].map((function(e,t){return r.a.createElement("li",{className:"groupLi",key:t},e.name)}))))})))))}function ee(e){var t=e.filterLocByCat,a=Object(c.useContext)(b),n=a.state,o=a.dispatch,l=JSON.parse(localStorage.getItem("categories"))||n;return r.a.createElement("div",null,r.a.createElement(h.a,{horizontal:!0,divided:!0,relaxed:!0},l.categories.map((function(e){return r.a.createElement(h.a.Item,{key:e.id,onClick:function(){return function(e){o({type:"SET_CORRENT_CAT",payload:e}),t(e)}(e)},className:"flex"},r.a.createElement(h.a.Content,{className:"flex ".concat(n.currentCategory.name===e.name&&"highlited")},r.a.createElement(h.a.Description,{as:"a"},e.name)))}))))}function te(){var e=Object(c.useContext)(T),t=e.locations,a=e.dispatchLoactions,o=Object(c.useState)(t),l=Object(n.a)(o,2),i=l[0],m=l[1],u=Object(c.useState)(!1),d=Object(n.a)(u,2),E=d[0],g=d[1],b=Object(c.useState)(""),f=Object(n.a)(b,2),v=f[0],C=f[1];return r.a.createElement(p,null,r.a.createElement("div",{className:"home"},r.a.createElement(y.a,{stackable:!0,className:"ui container"},r.a.createElement(y.a.Item,{to:"/locations",as:s.c},"\u21e6 Go back to - Locations")),r.a.createElement("h2",{className:"headerGroup"},"Filter By Cat"),r.a.createElement(ee,{filterLocByCat:function(e){C(e),g(!0);var a={};a.locations=t.locations.filter((function(t){return e.name===t.category})),m(a)}}),r.a.createElement("div",null,r.a.createElement("h2",{className:"headerGroup",style:{paddingTop:"10px",textAlign:"center"}},E?"".concat(v.name):"Locations:"),r.a.createElement(h.a,{className:"ui container",horizontal:!0,divided:!0,relaxed:!0},i.locations.length>0?i.locations.map((function(e){return r.a.createElement(h.a.Item,{key:e.id,onClick:function(){return a({type:"SET_CORRENT_LOC",payload:e})},className:"flex"},r.a.createElement(h.a.Content,{className:"flex ".concat(t.currentLocation.name===e.name&&"highlited")},r.a.createElement(h.a.Description,{as:"a"},e.name)))})):r.a.createElement("h3",{style:{textAlign:"center"}},"Sorry, No Locations in this Category")))),r.a.createElement(w,null))}function ae(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:C}),r.a.createElement(i.a,{path:"/addcat",exact:!0,component:N}),r.a.createElement(i.a,{path:"/editcat",exact:!0,component:x}),r.a.createElement(i.a,{path:"/deletecat",exact:!0,component:L}),r.a.createElement(i.a,{path:"/viewcat",exact:!0,component:k}),r.a.createElement(i.a,{path:"/locations",exact:!0,component:D}),r.a.createElement(i.a,{path:"/deletelocation",exact:!0,component:F}),r.a.createElement(i.a,{path:"/addlocation",exact:!0,component:K}),r.a.createElement(i.a,{path:"/viewlocation",exact:!0,component:X}),r.a.createElement(i.a,{path:"/grouped",exact:!0,component:$}),r.a.createElement(i.a,{path:"/filter",exact:!0,component:te}))}var ne=a(79),ce=a(121),re=a.n(ce);function oe(e,t){switch(t.type){case"SET_CORRENT_CAT":return Object(_.a)({},e,{currentCategory:t.payload});case"CREACTE_CAT":if(!t.payload)return e;if(e.categories.findIndex((function(e){return e.name===t.payload}))>-1)return e;var a={id:re()(),name:t.payload},n=[].concat(Object(ne.a)(e.categories),[a]);return Object(_.a)({},e,{categories:n});case"EDIT_CAT":var c=Object(_.a)({},e.currentCategory,{name:t.payload}),r=e.categories.findIndex((function(t){return t.id===e.currentCategory.id})),o=[].concat(Object(ne.a)(e.categories.slice(0,r)),[c],Object(ne.a)(e.categories.slice(r+1)));return Object(_.a)({},e,{currentCategory:{},categories:o});case"DELETE_CAT":var l=e.categories.filter((function(e){return e.id!==t.payload.id})),i=e.currentCategory.id===t.payload.id?{}:e.currentCategory;return Object(_.a)({},e,{currentCategory:i,categories:l});default:return e}}function le(e,t){switch(t.type){case"SET_CORRENT_LOC":return Object(_.a)({},e,{currentLocation:t.payload});case"CREATE_LOC":if(!t.payload)return e;if(e.locations.findIndex((function(e){return e.name===t.payload}))>-1)return e;var a={id:re()(),name:t.payload.name,address:t.payload.address,latitude:t.payload.latitude,longitude:t.payload.longitude,category:t.payload.category},n=[].concat(Object(ne.a)(e.locations),[a]);return Object(_.a)({},e,{locations:n});case"DELETE_LOC":var c=e.locations.filter((function(e){return e.id!==t.payload.id})),r=e.currentLocation.id===t.payload.id?{}:e.currentLocation;return Object(_.a)({},e,{currentLocation:r,locations:c});default:return e}}l.a.render(r.a.createElement((function(){var e=Object(c.useContext)(b),t=Object(c.useReducer)(oe,e),a=Object(n.a)(t,2),o=a[0],l=a[1],i=Object(c.useContext)(T),m=Object(c.useReducer)(le,i),u=Object(n.a)(m,2),d=u[0],E=u[1];return r.a.createElement(s.a,null,r.a.createElement(b.Provider,{value:{state:o,dispatch:l}},r.a.createElement(T.Provider,{value:{locations:d,dispatchLoactions:E}},r.a.createElement(ae,null))))}),null),document.getElementById("root"))}},[[256,1,2]]]);
//# sourceMappingURL=main.fd5c3053.chunk.js.map