webpackJsonp([5],{CpWp:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Xxa5"),s=a.n(r),n=a("exGp"),c=a.n(n),o=a("gyMJ"),i={data:function(){return{id:"",name:"",category:"",html:"",css:"",js:"",categoryList:[]}},methods:{fetchData:function(t){var e=this;return c()(s.a.mark(function a(){var r,n;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(o.e)(t);case 3:200===(r=a.sent).data.code&&(n=r.data.data,e.name=n.name,e.category=n.category,e.html=n.html,e.css=n.css,e.js=n.js),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.error(a.t0);case 10:case"end":return a.stop()}},a,e,[[0,7]])}))()},fetchCategory:function(){var t=this;return c()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(o.c)();case 3:(a=e.sent)&&(t.categoryList=a.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()},upload:function(){var t=this;return c()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=void 0,!t.id){e.next=8;break}return e.next=5,Object(o.h)(t.id,t.name,t.html,t.css,t.js,t.category);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,Object(o.i)(t.name,t.html,t.css,t.js,t.category);case 10:a=e.sent;case 11:200===a.data.code?(alert("保存成功"),t.back()):alert("保存失败"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}},e,t,[[0,14]])}))()},back:function(){this.$router.go(-1)}},created:function(){this.id=this.$route.params.moduleId,this.id&&this.fetchData(this.id),this.fetchCategory()}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"layout-body"},[a("div",{staticClass:"layout-edit"},[a("div",{staticClass:"edit-hd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"模板名称"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"edit-bd"},[a("div",{staticClass:"bd-item bd-category"},[a("h3",[t._v("类别")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.category,expression:"category",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"类别"},domProps:{value:t.category},on:{input:function(e){e.target.composing||(t.category=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.category,expression:"category",modifiers:{trim:!0}}],attrs:{name:"category"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.category=e.target.multiple?a:a[0]}}},t._l(t.categoryList,function(e){return a("option",{key:e},[t._v(t._s(e))])}))]),t._v(" "),a("div",{staticClass:"bd-item bd-html"},[a("h3",[t._v("html")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.html,expression:"html"}],attrs:{name:"html"},domProps:{value:t.html},on:{input:function(e){e.target.composing||(t.html=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"bd-item bd-css"},[a("h3",[t._v("css")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.css,expression:"css"}],attrs:{name:"css"},domProps:{value:t.css},on:{input:function(e){e.target.composing||(t.css=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"bd-item bd-js"},[a("h3",[t._v("js")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.js,expression:"js"}],attrs:{name:"js"},domProps:{value:t.js},on:{input:function(e){e.target.composing||(t.js=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"edit-fd"},[a("button",{staticClass:"btn",on:{click:t.back}},[t._v("返回")]),t._v(" "),a("button",{staticClass:"btn",on:{click:t.upload}},[t._v("保存")])])])])])},staticRenderFns:[]},l=a("VU/8")(i,d,!1,function(t){a("FZrM")},"data-v-d703fffe",null);e.default=l.exports},FZrM:function(t,e){}});
//# sourceMappingURL=5.dd22c58edf87de69584d.js.map