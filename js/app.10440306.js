(function(t){function e(e){for(var i,o,a=e[0],l=e[1],u=e[2],p=0,d=[];p<a.length;p++)o=a[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var l=n[a];0!==s[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/DragDrop-VueJS/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("DragDrop")],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"center"},[t.list.length>0?n("div",{attrs:{id:"list-item"}},[n("draggable",t._b({attrs:{list:t.list},on:{change:function(e){return t.isListChange()}}},"draggable",t.dragOptions,!1),t._l(t.list,(function(e,i){return n("div",{key:e.position,staticClass:"item"},[n("div",{staticClass:"zone-drag handle"},[n("button",{staticClass:"item--drag"},[t._v(" Drag ")])]),n("div",{staticClass:"zone-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"item.text"}],staticClass:"item--input",attrs:{type:"text",placeholder:"Enter anything...."},domProps:{value:e.text},on:{input:function(n){n.target.composing||t.$set(e,"text",n.target.value)}}})]),n("div",{staticClass:"zone-delete"},[n("button",{staticClass:"item--delete",on:{click:function(e){return t.deleteItem(i)}}},[t._v(" Delete ")])])])})),0)],1):n("div",{staticClass:"item item-nodata"},[n("span",[t._v("No Data")])]),n("div",[n("button",{staticClass:"item--push",on:{click:function(e){return t.addItem()}}},[t._v(" + ")])]),n("div",{staticClass:"preview-data"},t._l(t.list,(function(e){return n("p",{key:e.position},[t._v(" "+t._s(e)+" ")])})),0)])])},a=[],l=(n("a434"),n("b76a")),u=n.n(l),c={name:"DragDrop",components:{draggable:u.a},computed:{dragOptions:function(){return{animation:150,group:"list",handle:".handle",ghostClass:"ghost"}}},data:function(){return{list:[{text:"This is item 1",position:1},{text:"This is item 2",position:2},{text:"This is item 3",position:3},{text:"This is item 4",position:4}]}},methods:{addItem:function(){if(0===this.list.length){var t={text:"",position:1};this.list.push(t)}else{for(var e=0;e<this.list.length;e++)this.list[e].position=e+1;var n={text:"",position:this.list.length+1};this.list.push(n)}},deleteItem:function(t){this.list.splice(t,1);for(var e=0;e<this.list.length;e++)this.list[e].position=e+1},isListChange:function(){for(var t=0;t<this.list.length;t++)this.list[t].position=t+1}}},p=c,d=(n("7826"),n("2877")),f=Object(d["a"])(p,o,a,!1,null,null,null),h=f.exports,v={name:"App",components:{DragDrop:h}},g=v,m=(n("034f"),Object(d["a"])(g,s,r,!1,null,null,null)),b=m.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(b)}}).$mount("#app")},7826:function(t,e,n){"use strict";n("e59e")},"85ec":function(t,e,n){},e59e:function(t,e,n){}});
//# sourceMappingURL=app.10440306.js.map