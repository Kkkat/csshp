webpackJsonp([6],{"55zV":function(t,e){},rwXd:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Xxa5"),n=a.n(r),s=a("exGp"),c=a.n(s),i=a("gyMJ"),o={data:function(){return{moduleList:[]}},methods:{fetchData:function(){var t=this;return c()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(i.d)();case 3:200===(a=e.sent).data.code?t.moduleList=a.data.data:console.error("error"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case 11:case"end":return e.stop()}},e,t,[[0,7]])}))()},deleteData:function(t,e){var a=this;return c()(n.a.mark(function r(){return n.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!window.confirm("确认删除模板："+t+"?")){r.next=14;break}return r.prev=2,r.next=5,Object(i.b)(e);case 5:200===r.sent.data.code?(alert("删除成功"),a.fetchData()):(alert("删除失败"),console.error("error")),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(2),alert("删除失败"),console.error(r.t0);case 13:case 14:case"end":return r.stop()}},r,a,[[2,9]])}))()}},created:function(){this.fetchData()}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"layout-body"},[a("div",{staticClass:"layout-manage"},[a("div",{staticClass:"manage-hd"},[a("h1",[t._v("模块管理")]),t._v(" "),a("router-link",{staticClass:"btn btn01",attrs:{to:{name:"edit"}}},[t._v("新增")])],1),t._v(" "),a("div",{staticClass:"manage-bd"},[a("ul",t._l(t.moduleList,function(e){return a("li",{key:e._id},[a("p",{staticClass:"module-name"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"module-act"},[a("router-link",{staticClass:"icon icon-edit",attrs:{title:"编辑",to:{name:"edit",params:{moduleId:e._id}}}}),t._v(" "),a("a",{staticClass:"icon icon-del",attrs:{href:"javascript:;",title:"删除"},on:{click:function(a){t.deleteData(e.name,e._id)}}})],1)])}))])])])])},staticRenderFns:[]},l=a("VU/8")(o,d,!1,function(t){a("55zV")},"data-v-5f6f0854",null);e.default=l.exports}});
//# sourceMappingURL=6.509104191ef67f71fa67.js.map