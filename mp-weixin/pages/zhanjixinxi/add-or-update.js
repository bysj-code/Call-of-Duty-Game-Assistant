(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zhanjixinxi/add-or-update"],{"0cf2":function(n,e,t){},"11b8":function(n,e,t){"use strict";t.r(e);var i=t("4fa3"),a=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,(function(){return i[n]}))}(r);e["default"]=a.a},"4fa3":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(t("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,e,t,i,a,r,s){try{var u=n[r](s),o=u.value}catch(c){return void t(c)}u.done?e(o):Promise.resolve(o).then(i,a)}function s(n){return function(){var e=this,t=arguments;return new Promise((function(i,a){var s=n.apply(e,t);function u(n){r(s,i,a,u,o,"next",n)}function o(n){r(s,i,a,u,o,"throw",n)}u(void 0)}))}}var u=function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"e2b1"))},o=function(){return t.e("components/xia-editor/xia-editor").then(t.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{wanjiazhanghao:"",wanjiaxingming:"",wanjiashouji:"",changci:"",jishashu:"",siwangshu:"",changjunjisha:"",changjunsiwang:"",changjunzhugong:"",fenshu:"",dengjishijian:""},user:{},ro:{wanjiazhanghao:!1,wanjiaxingming:!1,wanjiashouji:!1,changci:!1,jishashu:!1,siwangshu:!1,changjunjisha:!1,changjunsiwang:!1,changjunzhugong:!1,fenshu:!1,dengjishijian:!1}}},components:{wPicker:u,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=s(i.default.mark((function e(t){var a,r,s,u;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.dengjishijian=this.$utils.getCurDateTime(),a=n.getStorageSync("nowTable"),e.next=4,this.$api.session(a);case 4:if(r=e.sent,this.user=r.data,this.ruleForm.wanjiazhanghao=this.user.wanjiazhanghao,this.ro.wanjiazhanghao=!0,this.ruleForm.wanjiaxingming=this.user.wanjiaxingming,this.ro.wanjiaxingming=!0,this.ruleForm.wanjiashouji=this.user.wanjiashouji,this.ro.wanjiashouji=!0,this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){e.next=20;break}return this.ruleForm.id=t.id,e.next=18,this.$api.info("zhanjixinxi",this.ruleForm.id);case 18:r=e.sent,this.ruleForm=r.data;case 20:if(this.cross=t.cross,!t.cross){e.next=72;break}s=n.getStorageSync("crossObj"),e.t0=i.default.keys(s);case 24:if((e.t1=e.t0()).done){e.next=72;break}if(u=e.t1.value,"wanjiazhanghao"!=u){e.next=30;break}return this.ruleForm.wanjiazhanghao=s[u],this.ro.wanjiazhanghao=!0,e.abrupt("continue",24);case 30:if("wanjiaxingming"!=u){e.next=34;break}return this.ruleForm.wanjiaxingming=s[u],this.ro.wanjiaxingming=!0,e.abrupt("continue",24);case 34:if("wanjiashouji"!=u){e.next=38;break}return this.ruleForm.wanjiashouji=s[u],this.ro.wanjiashouji=!0,e.abrupt("continue",24);case 38:if("changci"!=u){e.next=42;break}return this.ruleForm.changci=s[u],this.ro.changci=!0,e.abrupt("continue",24);case 42:if("jishashu"!=u){e.next=46;break}return this.ruleForm.jishashu=s[u],this.ro.jishashu=!0,e.abrupt("continue",24);case 46:if("siwangshu"!=u){e.next=50;break}return this.ruleForm.siwangshu=s[u],this.ro.siwangshu=!0,e.abrupt("continue",24);case 50:if("changjunjisha"!=u){e.next=54;break}return this.ruleForm.changjunjisha=s[u],this.ro.changjunjisha=!0,e.abrupt("continue",24);case 54:if("changjunsiwang"!=u){e.next=58;break}return this.ruleForm.changjunsiwang=s[u],this.ro.changjunsiwang=!0,e.abrupt("continue",24);case 58:if("changjunzhugong"!=u){e.next=62;break}return this.ruleForm.changjunzhugong=s[u],this.ro.changjunzhugong=!0,e.abrupt("continue",24);case 62:if("fenshu"!=u){e.next=66;break}return this.ruleForm.fenshu=s[u],this.ro.fenshu=!0,e.abrupt("continue",24);case 66:if("dengjishijian"!=u){e.next=70;break}return this.ruleForm.dengjishijian=s[u],this.ro.dengjishijian=!0,e.abrupt("continue",24);case 70:e.next=24;break;case 72:this.styleChange();case 73:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},dengjishijianConfirm:function(n){console.log(n),this.ruleForm.dengjishijian=n.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=s(i.default.mark((function e(){var t,a,r,s,u,o,c,h,g,f;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.fenshu||this.$validate.isIntNumer(this.ruleForm.fenshu)){e.next=3;break}return this.$utils.msg("分数应输入整数"),e.abrupt("return");case 3:if(!this.cross){e.next=19;break}if(u=n.getStorageSync("statusColumnName"),o=n.getStorageSync("statusColumnValue"),""==u){e.next=19;break}if(t||(t=n.getStorageSync("crossObj")),u.startsWith("[")){e.next=15;break}for(c in t)c==u&&(t[c]=o);return h=n.getStorageSync("crossTable"),e.next=13,this.$api.update("".concat(h),t);case 13:e.next=19;break;case 15:a=Number(n.getStorageSync("userid")),r=t["id"],s=n.getStorageSync("statusColumnName"),s=s.replace(/\[/,"").replace(/\]/,"");case 19:if(!r||!a){e.next=41;break}return this.ruleForm.crossuserid=a,this.ruleForm.crossrefid=r,g={page:1,limit:10,crossuserid:a,crossrefid:r},e.next=25,this.$api.list("zhanjixinxi",g);case 25:if(f=e.sent,!(f.data.total>=s)){e.next=31;break}return this.$utils.msg(n.getStorageSync("tips")),e.abrupt("return",!1);case 31:if(!this.ruleForm.id){e.next=36;break}return e.next=34,this.$api.update("zhanjixinxi",this.ruleForm);case 34:e.next=38;break;case 36:return e.next=38,this.$api.add("zhanjixinxi",this.ruleForm);case 38:this.$utils.msgBack("提交成功");case 39:e.next=49;break;case 41:if(!this.ruleForm.id){e.next=46;break}return e.next=44,this.$api.update("zhanjixinxi",this.ruleForm);case 44:e.next=48;break;case 46:return e.next=48,this.$api.add("zhanjixinxi",this.ruleForm);case 48:this.$utils.msgBack("提交成功");case 49:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,a=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,t("543d")["default"])},"5f92":function(n,e,t){"use strict";(function(n){t("6cdc"),t("921b");i(t("66fd"));var e=i(t("cd29"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"72aa":function(n,e,t){"use strict";var i={"w-picker":()=>Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"e2b1"))},a=function(){var n=this,e=n.$createElement;n._self._c},r=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return i}))},"9e48":function(n,e,t){"use strict";var i=t("0cf2"),a=t.n(i);a.a},cd29:function(n,e,t){"use strict";t.r(e);var i=t("72aa"),a=t("11b8");for(var r in a)"default"!==r&&function(n){t.d(e,n,(function(){return a[n]}))}(r);t("9e48");var s,u=t("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"5fbbcb9a",null,!1,i["a"],s);e["default"]=o.exports}},[["5f92","common/runtime","common/vendor"]]]);