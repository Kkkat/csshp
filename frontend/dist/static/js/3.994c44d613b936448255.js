webpackJsonp([3],{jFIK:function(e,t,i){"use strict";(function(e){var s=i("//Fk"),n=i.n(s),r=i("Xxa5"),o=i.n(r),a=i("exGp"),c=i.n(a),l=i("mvHQ"),u=i.n(l),p=i("kT5B"),d=e.require("path");t.a={data:function(){return{dropHover:!0,fileInfo:[],mode:{spriteRemMode:!1,imgQuant:!1,plugins:[]},tips:[],handling:!1,progress:{index:0,length:0}}},watch:{mode:{handler:function(e){localStorage.setItem("options",u()(e))},deep:!0}},methods:{drop:function(e){var t=this;return c()(o.a.mark(function i(){return o.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:t.dropHover=!1,t.tips=[],t.fileInfo=e.dataTransfer.files,t.progress.index=0,t.progress.length=t.fileInfo.length-1,t.handlefile();case 6:case"end":return i.stop()}},i,t)}))()},handlefile:function(){var e=this;return c()(o.a.mark(function t(){var i,s,r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:i=e.progress,console.log(i.index),s=e.fileInfo[i.index].path,r=d.parse(s),a=r.ext,e.tips.push({txt:"正在处理："+s,type:"normal"}),new n.a(function(t,i){/css/.test(a)?Object(p.a)(s,e.mode,t,i):/html/.test(a)?Object(p.b)(s,t,i):/jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga/.test(a)&&Object(p.c)(s,e.mode.imgQuant,t,i)}).then(function(t){e.tips.push(t),i.index<i.length&&(++e.progress.index,e.handlefile())},function(t){e.tips.push(t),i.index<i.length&&(++e.progress.index,e.handlefile())});case 7:case"end":return t.stop()}},t,e)}))()}},created:function(){var e=localStorage.getItem("options");e&&(this.mode=JSON.parse(e))}}}).call(t,i("DuR2"))},kT5B:function(e,t,i){"use strict";(function(e){function s(e,t){a.exists(c.join(e,"/dist/"),function(i){i?a.exists(t,function(e){e||a.mkdir(t,function(e){e&&console.error(e)})}):a.mkdir(c.join(e,"/dist/"),function(e){e||a.exists(t,function(e){e||a.mkdir(t,function(e){e&&console.error(e)})})})})}t.a=function(e,t,i,n){var u=c.parse(e),p=u.dir.split(c.sep).slice(0,-1).join(c.sep);s(p,c.join(p,"/dist/css/"));var d=[];t.plugins.forEach(function(e){switch(e){case"cssnext":d.push(h({features:{autoprefixer:!1,rem:!1}}));break;case"autoprefixer":d.push(f("last 6 versions"));break;case"@import":d.push(g);break;case"cssnano":d.push(v)}}),new r.a(function(i,s){Object(o.a)(e,t,i,s)}).then(function(t){l(d).process(t,{from:e,to:p+"/dist/css/"+u.base}).then(function(t){a.writeFile(c.join(p,"/dist/css/",u.base),t.css,"utf8",function(t){t?n({txt:t.toString(),type:"fail"}):i({txt:"成功处理："+e,type:"succ"})})})},function(e){n({txt:e.toString(),type:"fail"})})},t.b=function(e,t,i){var n=c.parse(e),r=n.dir;s(r,e),a.readFile(e,function(e,s){if(e)i({txt:e.toString(),type:"fail"});else{var o=s;a.writeFile(c.join(r,"/dist/",n.base),o.toString(),function(e){e?i({txt:e.toString(),type:"fail"}):t({txt:"成功处理："+c.join(r,"/dist/",n.base),type:"succ"})})}})},t.c=function(e,t,i,n){var r=c.parse(e),o=r.dir.split(c.sep).slice(0,-1).join(c.sep),l=r.dir.split(c.sep);if(l.splice(-1,0,"dist"),l=l.join(c.sep),s(o,l),t)u([e],c.join(l),{plugins:[p({quality:"100"}),m(),d({floyd:1,quality:"100"})]}).then(function(){i({txt:"成功处理："+e,type:"succ"})});else{var f=a.createReadStream(e),g=a.createWriteStream(c.join(l,r.base));f.on("data",function(e){g.write(e)}),f.on("error",function(e){n({txt:e.toString(),type:"fail"})}),f.on("end",function(){g.end(),i({txt:"成功处理："+c.join(l,r.base),type:"succ"})})}};var n=i("//Fk"),r=i.n(n),o=i("vQ4y"),a=e.require("fs"),c=e.require("path"),l=e.require("postcss"),u=e.require("imagemin"),p=e.require("imagemin-mozjpeg"),d=e.require("imagemin-pngquant"),m=e.require("imagemin-gifsicle"),f=e.require("autoprefixer"),g=e.require("postcss-import"),v=e.require("cssnano"),h=e.require("postcss-cssnext")}).call(t,i("DuR2"))},mlqX:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("jFIK"),n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"layout-body"},[i("div",{staticClass:"wp-menu"},[i("div",{staticClass:"menu-options"},[i("ul",[i("li",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.mode.spriteRemMode,expression:"mode.spriteRemMode"}],staticClass:"option",attrs:{id:"sprite",type:"checkbox"},domProps:{checked:Array.isArray(e.mode.spriteRemMode)?e._i(e.mode.spriteRemMode,null)>-1:e.mode.spriteRemMode},on:{change:function(t){var i=e.mode.spriteRemMode,s=t.target,n=!!s.checked;if(Array.isArray(i)){var r=e._i(i,null);s.checked?r<0&&(e.mode.spriteRemMode=i.concat([null])):r>-1&&(e.mode.spriteRemMode=i.slice(0,r).concat(i.slice(r+1)))}else e.$set(e.mode,"spriteRemMode",n)}}}),e._v(" "),i("label",{attrs:{for:"sprite"}},[e._v("雪碧图rem模式")])]),e._v(" "),i("li",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.mode.imgQuant,expression:"mode.imgQuant"}],staticClass:"option",attrs:{id:"imgQuant",type:"checkbox"},domProps:{checked:Array.isArray(e.mode.imgQuant)?e._i(e.mode.imgQuant,null)>-1:e.mode.imgQuant},on:{change:function(t){var i=e.mode.imgQuant,s=t.target,n=!!s.checked;if(Array.isArray(i)){var r=e._i(i,null);s.checked?r<0&&(e.mode.imgQuant=i.concat([null])):r>-1&&(e.mode.imgQuant=i.slice(0,r).concat(i.slice(r+1)))}else e.$set(e.mode,"imgQuant",n)}}}),e._v(" "),i("label",{attrs:{for:"imgQuant"}},[e._v("压缩图片")])]),e._v(" "),i("li",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.mode.plugins,expression:"mode.plugins"}],staticClass:"option",attrs:{id:"cssnext",type:"checkbox",value:"cssnext"},domProps:{checked:Array.isArray(e.mode.plugins)?e._i(e.mode.plugins,"cssnext")>-1:e.mode.plugins},on:{change:function(t){var i=e.mode.plugins,s=t.target,n=!!s.checked;if(Array.isArray(i)){var r=e._i(i,"cssnext");s.checked?r<0&&(e.mode.plugins=i.concat(["cssnext"])):r>-1&&(e.mode.plugins=i.slice(0,r).concat(i.slice(r+1)))}else e.$set(e.mode,"plugins",n)}}}),e._v(" "),i("label",{attrs:{for:"cssnext"}},[e._v("使用最新css")])]),e._v(" "),i("li",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.mode.plugins,expression:"mode.plugins"}],staticClass:"option",attrs:{id:"autoprefixer",type:"checkbox",value:"autoprefixer"},domProps:{checked:Array.isArray(e.mode.plugins)?e._i(e.mode.plugins,"autoprefixer")>-1:e.mode.plugins},on:{change:function(t){var i=e.mode.plugins,s=t.target,n=!!s.checked;if(Array.isArray(i)){var r=e._i(i,"autoprefixer");s.checked?r<0&&(e.mode.plugins=i.concat(["autoprefixer"])):r>-1&&(e.mode.plugins=i.slice(0,r).concat(i.slice(r+1)))}else e.$set(e.mode,"plugins",n)}}}),e._v(" "),i("label",{attrs:{for:"autoprefixer"}},[e._v("自动加前缀功能")])]),e._v(" "),i("li",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.mode.plugins,expression:"mode.plugins"}],staticClass:"option",attrs:{id:"cssnano",type:"checkbox",value:"cssnano"},domProps:{checked:Array.isArray(e.mode.plugins)?e._i(e.mode.plugins,"cssnano")>-1:e.mode.plugins},on:{change:function(t){var i=e.mode.plugins,s=t.target,n=!!s.checked;if(Array.isArray(i)){var r=e._i(i,"cssnano");s.checked?r<0&&(e.mode.plugins=i.concat(["cssnano"])):r>-1&&(e.mode.plugins=i.slice(0,r).concat(i.slice(r+1)))}else e.$set(e.mode,"plugins",n)}}}),e._v(" "),i("label",{attrs:{for:"cssnano"}},[e._v("压缩css")])]),e._v(" "),i("li",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.mode.plugins,expression:"mode.plugins"}],staticClass:"option",attrs:{id:"import",type:"checkbox",value:"@import"},domProps:{checked:Array.isArray(e.mode.plugins)?e._i(e.mode.plugins,"@import")>-1:e.mode.plugins},on:{change:function(t){var i=e.mode.plugins,s=t.target,n=!!s.checked;if(Array.isArray(i)){var r=e._i(i,"@import");s.checked?r<0&&(e.mode.plugins=i.concat(["@import"])):r>-1&&(e.mode.plugins=i.slice(0,r).concat(i.slice(r+1)))}else e.$set(e.mode,"plugins",n)}}}),e._v(" "),i("label",{attrs:{for:"import"}},[e._v("处理@import文件")])])])]),e._v(" "),e._m(0)]),e._v(" "),i("div",{staticClass:"wp-drag"},[i("div",{staticClass:"drag-main",class:{"drop-hover":e.dropHover},on:{dragover:function(t){t.preventDefault(),e.dropHover=!0},drop:function(t){t.preventDefault(),e.drop(t)}}},[i("p",[e._v("将文件拖拽到此区域")])]),e._v(" "),i("div",{staticClass:"drag-log"},e._l(e.tips,function(t){return i("p",{class:t.type},[e._v("\n                    "+e._s(t.txt)+"\n                ")])}))])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"menu-address"},[t("h3",[this._v("保存到")]),this._v(" "),t("div",{staticClass:"local"},[t("input",{attrs:{id:"local",type:"checkbox",value:"local",checked:""}}),this._v(" "),t("label",{attrs:{for:"local"}},[this._v("本地")])])])}]},r=function(e){i("qR6m")},o={components:{"index-body":i("VU/8")(s.a,n,!1,r,"data-v-7f12521e",null).exports}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("index-body")],1)},staticRenderFns:[]},c=i("VU/8")(o,a,!1,function(e){i("y/Fe")},"data-v-9fd14d0c",null);t.default=c.exports},mvHQ:function(e,t,i){e.exports={default:i("qkKv"),__esModule:!0}},qR6m:function(e,t){},qkKv:function(e,t,i){var s=i("FeBl"),n=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},vQ4y:function(e,t,i){"use strict";(function(e){var s=i("//Fk"),n=i.n(s),r=e.require("postcss"),o=e.require("postcss-sprites"),a=e.require("path"),c=e.require("fs"),l=e.require("imagemin"),u=e.require("imagemin-pngquant");t.a=function(e,t,i,s){var p=a.parse(e),d=p.dir.split(a.sep).slice(0,-1).join(a.sep),m={stylesheetPath:a.join(d,"/dist/css/"),spritePath:"./dist/img",basePath:d,spritesmith:{padding:5},filterBy:function(e){return~e.url.indexOf("/slice/")?n.a.resolve():n.a.reject(new Error("error"))},groupBy:function(e){var t=/\/slice\/([0-9.A-Za-z]+)\//.exec(e.url);return t?n.a.resolve(t[1]):n.a.reject(new Error("Not a shape image"))},hooks:{onUpdateRule:function(e,i,s){var n=void 0,o=void 0;if(t.spriteRemMode){var a=-s.coords.x/100,c=-s.coords.y/100;n=r.decl({prop:"background-size",value:s.spriteWidth/100+"rem auto"}),o=r.decl({prop:"background-position",value:a+"rem "+c+"rem"})}else{var l=-s.coords.x,u=-s.coords.y;o=r.decl({prop:"background-position",value:l+"px "+u+"px"})}var p=(new Date).getTime(),d=r.decl({prop:"background-image",value:"url("+s.spriteUrl+"?"+p+")"}),m=r.decl({prop:"background-repeat",value:"no-repeat"});e.insertAfter(i,d),e.insertAfter(d,o),t.spriteRemMode&&e.insertAfter(o,n),e.insertAfter(o,m)},onSaveSpritesheet:function(e,t){var i=t.groups.concat(t.extension);return i.length>1?a.join(d,e.spritePath,"spr-"+i[0]+"."+i[1]):a.join(d,e.spritePath,"spr."+i[0])}}};c.readFile(e,"utf-8",function(n,c){n?s(n):r([o(m)]).process(c,{from:e,to:d+"/dist/css/"+p.base}).then(function(e){t.imgQuant?l([a.join(d,"/dist/img/spr*.png")],a.join(d,"/dist/img/"),{plugins:[u({quality:"100"})]}).then(function(){i(e.css)}):i(e.css)})})}}).call(t,i("DuR2"))},"y/Fe":function(e,t){}});
//# sourceMappingURL=3.994c44d613b936448255.js.map