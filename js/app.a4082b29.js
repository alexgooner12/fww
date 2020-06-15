(function(t){function e(e){for(var a,r,c=e[0],o=e[1],l=e[2],f=0,d=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==s[o]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/rna/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"23f7":function(t,e,n){"use strict";var a=n("73c1"),s=n.n(a);s.a},"28fb":function(t,e,n){},4155:function(t,e,n){},"513c":function(t,e,n){"use strict";var a=n("28fb"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navigation"),n("router-view")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navigation"},[n("ul",{staticClass:"navigation__list"},t._l(t.pages,(function(e,a){return n("li",{key:a,staticClass:"navigation__item line-link shrink"},[n("router-link",{staticClass:"navigation__link",class:{"exact-active":e===t.currentPage},attrs:{to:e.url},domProps:{innerHTML:t._s(e.title)}})],1)})),0),t._m(0)])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"navigation__logo"},[n("a",{staticClass:"color-red",attrs:{href:"/"}},[t._v("RNA ")])])}],o=(n("d81d"),n("2ef0")),l=n.n(o),u={name:"Navigation",mounted:function(){},computed:{routes:function(){return l.a.get(this.$router,"options.routes")},pages:function(){return l.a.map(this.routes,(function(t){return Object.assign({},{url:t.path,title:l.a.get(t,"component.name")})}))},currentPage:function(){return this.$route.path}}},f=u,d=(n("23f7"),n("2877")),v=Object(d["a"])(f,r,c,!1,null,"7a31ee3b",null),p=v.exports,h={name:"App",components:{Navigation:p}},g=h,m=(n("5c0b"),Object(d["a"])(g,s,i,!1,null,null,null)),b=m.exports,_=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h2",{staticClass:"color-red"},[t._v("Welcome to Random Number App")]),n("Fields")],1)},y=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fields"},t._l(t.fields,(function(e,a){return n("div",{key:a},[n("span",{class:{disabled:e.disabled},domProps:{innerHTML:t._s(e.label)}}),t.isChanging&&!e.disabled?n("span",[t.checkNumberPositivity(e.values[e.values.length-1])?n("arrow-up"):n("arrow-down")],1):t._e(),n("p",{domProps:{innerHTML:t._s(e.values[e.values.length-1])}}),n("button",{staticClass:"button",class:e.disabled?"orange":"grey",on:{click:function(e){return t.toggleFieldDisability(a)}}},[t._v(" "+t._s(e.disabled?"Enable":"Disable")+" ")])])})),0)},O=[],x=(n("99af"),n("a630"),n("b680"),n("d3b7"),n("3ca3"),n("ddb0"),n("2909")),P=n("5530"),k={computed:{loadFromLocalStorage:function(){if(localStorage.getItem("fields"))return JSON.parse(localStorage.getItem("fields"))}}},j=(n("2af1"),{methods:{checkNumberPositivity:function(t){return 1==Math.sign(t)}}}),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"icon",attrs:{id:"Layer","enable-background":"new 0 0 64 64",height:"512",viewBox:"0 0 64 64",width:"512",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"m32 56c1.104 0 2-.896 2-2v-39.899l14.552 15.278c.393.413.92.621 1.448.621.495 0 .992-.183 1.379-.552.8-.762.831-2.028.069-2.828l-16.619-17.448c-.756-.755-1.76-1.172-2.829-1.172s-2.073.417-2.862 1.207l-16.586 17.414c-.762.8-.731 2.066.069 2.828s2.067.731 2.828-.069l14.551-15.342v39.962c0 1.104.896 2 2 2z"}})])},V=[],F={name:"Arrow-up"},N=F,M=(n("7d09"),Object(d["a"])(N,S,V,!1,null,"08b97ff4",null)),E=M.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"icon",staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[n("path",{staticStyle:{fill:"#FFC107"},attrs:{d:"M440.437,301.781L266.656,475.584V10.667C266.656,4.776,261.88,0,255.989,0\n\tc-5.891,0-10.667,4.776-10.667,10.667v464.917L71.541,301.781c-4.237-4.093-10.99-3.975-15.083,0.262\n\tc-3.992,4.134-3.992,10.687,0,14.82l192,192c4.16,4.171,10.914,4.179,15.085,0.019c0.006-0.006,0.013-0.013,0.019-0.019l192-192\n\tc4.093-4.237,3.975-10.99-0.262-15.083c-4.134-3.993-10.687-3.993-14.821,0L440.437,301.781z"}}),n("path",{attrs:{d:"M255.989,512c-2.831,0.005-5.548-1.115-7.552-3.115l-192-192c-4.093-4.237-3.975-10.99,0.262-15.083\n\tc4.134-3.992,10.687-3.992,14.82,0l184.469,184.448l184.448-184.448c4.237-4.093,10.99-3.975,15.083,0.262\n\tc3.993,4.134,3.993,10.687,0,14.821l-192,192C261.521,510.879,258.813,511.999,255.989,512z"}}),n("path",{attrs:{d:"M255.989,512c-5.891,0-10.667-4.776-10.667-10.667V10.667C245.323,4.776,250.098,0,255.989,0\n\tc5.891,0,10.667,4.776,10.667,10.667v490.667C266.656,507.224,261.88,512,255.989,512z"}}),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g"),n("g")])},$=[],A={name:"Arrow-up"},T=A,D=(n("c5b8"),Object(d["a"])(T,L,$,!1,null,"60e4a584",null)),H=D.exports,R={name:"Fields",data:function(){return{fields:[],isChanging:!1,isPaused:!1}},mixins:[k,j],components:{ArrowUp:E,ArrowDown:H},mounted:function(){this.isPaused=!1,this.setStartingFields(),this.run()},beforeDestroy:function(){this.isPaused=!0},methods:{run:function(){var t=this;setInterval((function(){t.isPaused||t.updateFields()}),2e3)},setStartingFields:function(){this.loadFromLocalStorage&&(this.fields=this.loadFromLocalStorage)||(this.fields=this.createDefaultFields())},createDefaultFields:function(){var t=this;return Array.from(new Array(10),(function(e,n){return Object.assign({},{label:t.labels[n],values:["3"],disabled:!1})}))},saveToLocalStorage:function(){localStorage.setItem("fields",JSON.stringify(this.fields))},updateFields:function(){var t=this;this.isChanging=!0,this.fields=l.a.map(this.fields,(function(e){return e.disabled?e:Object.assign({},Object(P["a"])(Object(P["a"])({},e),{},{values:[].concat(Object(x["a"])(e.values),[t.createFieldValue()])}))})),this.saveToLocalStorage()},toggleFieldDisability:function(t){this.fields=l.a.map(this.fields,(function(e,n){return t==n&&(e.disabled=!e.disabled),e}))},createFieldValue:function(){return"".concat(this.createRandomMathSign()).concat(this.createRandomNumber())},createRandomMathSign:function(){return l.a.sample([!0,!1])?"+":"-"},createRandomNumber:function(){return(2*Math.random()+1).toFixed(2)}},computed:{labels:function(){return["A","B","C","D","E","F","G","H","I","J"]}}},I=R,J=(n("8100"),Object(d["a"])(I,C,O,!1,null,"511579b4",null)),z=J.exports,U={name:"Home",components:{Fields:z}},q=U,B=(n("9e1a"),Object(d["a"])(q,w,y,!1,null,"355a9dec",null)),G=B.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"statistics"},[n("h2",{staticClass:"color-red"},[t._v("Statistics")]),t.fields?n("div",[n("Chart",{attrs:{labels:t.labels,amountsOfPositiveValues:t.amountsOfPositiveValues,amountsOfNegativeValues:t.amountsOfNegativeValues,positiveValues:t.positiveValues,negativeValues:t.negativeValues}})],1):n("h5",{staticClass:"color-grey"},[t._v("No data has been recorded yet")])])},K=[],Q=(n("4de4"),n("13d5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chart"},[n("table",{attrs:{id:"q-graph"}},[t._m(0),n("tbody",t._l(t.labels,(function(e,a){return n("tr",{key:a,staticClass:"qtr",style:"left: "+(t.isMobileOrTablet?20*a:10*a)+"%",attrs:{id:"q1"}},[n("th",{attrs:{scope:"row"},domProps:{innerHTML:t._s(e)}}),n("td",{staticClass:"pos bar",style:"height: "+t.positiveValues[a].percentage},[n("p",{staticClass:"color-white"},[t._v(" "+t._s(t._f("roundUp")(t.amountsOfPositiveValues[a]))+" ")])]),n("td",{staticClass:"neg bar",style:"height: "+t.negativeValues[a].percentage},[n("p",{staticClass:"color-white"},[t._v(" "+t._s(t._f("roundUp")(t.amountsOfNegativeValues[a]))+" ")])])])})),0)]),t._m(1)])}),X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",{staticClass:"color-white"},[n("th"),n("th",{staticClass:"pos"},[t._v("Positive")]),n("th",{staticClass:"neg"},[t._v("Negative")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ticks"}},[n("div",{staticClass:"tick"}),n("div",{staticClass:"tick"}),n("div",{staticClass:"tick"}),n("div",{staticClass:"tick"})])}],Y={name:"Chart",props:["labels","amountsOfPositiveValues","amountsOfNegativeValues","negativeValues","positiveValues"],filters:{roundUp:function(t){if(t){var e=+t;return e.toFixed(2)}}},computed:{isMobileOrTablet:function(){return screen.width<=1024}}},Z=Y,tt=(n("513c"),Object(d["a"])(Z,Q,X,!1,null,"fe0269b6",null)),et=tt.exports,nt={name:"Statistics",data:function(){return{fields:[]}},components:{Chart:et},mixins:[k,j],mounted:function(){this.fields=this.loadFromLocalStorage},methods:{calcPercentage:function(t,e){return"".concat(e/t*100,"%")}},computed:{labels:function(){return this.fields&&l.a.map(this.fields,"label")},values:function(){return this.fields&&l.a.map(this.fields,"values")},positiveValues:function(){var t=this;return this.values&&l.a.map(this.values,(function(e){var n=l.a.filter(e,(function(e){return t.checkNumberPositivity(e)})),a=t.calcPercentage(e.length,n.length);return Object.assign({},{percentage:a,values:n})}))},negativeValues:function(){var t=this;return this.values&&l.a.map(this.values,(function(e){var n=l.a.filter(e,(function(e){return!t.checkNumberPositivity(e)})),a=t.calcPercentage(e.length,n.length);return Object.assign({},{percentage:a,values:n})}))},amountsOfPositiveValues:function(){var t=this;return this.values&&l.a.map(this.values,(function(e){return l.a.reduce(l.a.filter(e,(function(e){return t.checkNumberPositivity(e)})),(function(t,e){return+t+ +e}))}))},amountsOfNegativeValues:function(){var t=this;return this.values&&l.a.map(this.values,(function(e){return l.a.reduce(l.a.filter(e,(function(e){return!t.checkNumberPositivity(e)})),(function(t,e){return+t+ +e}))}))}}},at=nt,st=Object(d["a"])(at,W,K,!1,null,null,null),it=st.exports;a["a"].config.productionTip=!1,a["a"].use(_["a"]),a["a"].use("svg-to-vue-component/loader");var rt=new _["a"]({routes:[{path:"/",component:G},{path:"/statistics",component:it}],mode:"history",linkExactActiveClass:"exact-active"});new a["a"]({router:rt,render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),s=n.n(a);s.a},"6b94":function(t,e,n){},"73c1":function(t,e,n){},"7d09":function(t,e,n){"use strict";var a=n("dca9"),s=n.n(a);s.a},8100:function(t,e,n){"use strict";var a=n("4155"),s=n.n(a);s.a},"9c0c":function(t,e,n){},"9e1a":function(t,e,n){"use strict";var a=n("a8c1"),s=n.n(a);s.a},a8c1:function(t,e,n){},c5b8:function(t,e,n){"use strict";var a=n("6b94"),s=n.n(a);s.a},dca9:function(t,e,n){}});
//# sourceMappingURL=app.a4082b29.js.map