(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/wanjia/add-or-update"],{"1ecd":function(e,t,n){},"5ea3":function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=(e._self._c,e.ruleForm.touxiang.split(","));e.$mp.data=Object.assign({},{$root:{g0:n}})},r=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}))},"88e5":function(e,t,n){"use strict";n.r(t);var i=n("5ea3"),a=n("cdd7");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("fed4");var u,s=n("f0c5"),o=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"22354c24",null,!1,i["a"],u);t["default"]=o.exports},cdd7:function(e,t,n){"use strict";n.r(t);var i=n("d208"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},d208:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,i,a,r,u){try{var s=e[r](u),o=s.value}catch(c){return void n(c)}s.done?t(o):Promise.resolve(o).then(i,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var u=e.apply(t,n);function s(e){r(u,i,a,s,o,"next",e)}function o(e){r(u,i,a,s,o,"throw",e)}s(void 0)}))}}var s=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},o=function(){return n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{wanjiazhanghao:"",mima:"",wanjiaxingming:"",xingbie:"",nianling:"",touxiang:"",wanjiashouji:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{wanjiazhanghao:!1,mima:!1,wanjiaxingming:!1,xingbie:!1,nianling:!1,touxiang:!1,wanjiashouji:!1}}},components:{wPicker:s,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=u(i.default.mark((function t(n){var a,r,u,s;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.getStorageSync("nowTable"),t.next=3,this.$api.session(a);case 3:if(r=t.sent,this.user=r.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=14;break}return this.ruleForm.id=n.id,t.next=12,this.$api.info("wanjia",this.ruleForm.id);case 12:r=t.sent,this.ruleForm=r.data;case 14:if(this.cross=n.cross,!n.cross){t.next=50;break}u=e.getStorageSync("crossObj"),t.t0=i.default.keys(u);case 18:if((t.t1=t.t0()).done){t.next=50;break}if(s=t.t1.value,"wanjiazhanghao"!=s){t.next=24;break}return this.ruleForm.wanjiazhanghao=u[s],this.ro.wanjiazhanghao=!0,t.abrupt("continue",18);case 24:if("mima"!=s){t.next=28;break}return this.ruleForm.mima=u[s],this.ro.mima=!0,t.abrupt("continue",18);case 28:if("wanjiaxingming"!=s){t.next=32;break}return this.ruleForm.wanjiaxingming=u[s],this.ro.wanjiaxingming=!0,t.abrupt("continue",18);case 32:if("xingbie"!=s){t.next=36;break}return this.ruleForm.xingbie=u[s],this.ro.xingbie=!0,t.abrupt("continue",18);case 36:if("nianling"!=s){t.next=40;break}return this.ruleForm.nianling=u[s],this.ro.nianling=!0,t.abrupt("continue",18);case 40:if("touxiang"!=s){t.next=44;break}return this.ruleForm.touxiang=u[s].split(",")[0],this.ro.touxiang=!0,t.abrupt("continue",18);case 44:if("wanjiashouji"!=s){t.next=48;break}return this.ruleForm.wanjiashouji=u[s],this.ro.wanjiashouji=!0,t.abrupt("continue",18);case 48:t.next=18;break;case 50:this.styleChange();case 51:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.touxiang="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=u(i.default.mark((function t(){var n,a,r,u,s,o,c,l,h,f;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.wanjiazhanghao){t.next=3;break}return this.$utils.msg("玩家账号不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(!this.ruleForm.wanjiashouji||this.$validate.isMobile(this.ruleForm.wanjiashouji)){t.next=9;break}return this.$utils.msg("玩家手机应输入手机格式"),t.abrupt("return");case 9:if(!this.cross){t.next=25;break}if(s=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==s){t.next=25;break}if(n||(n=e.getStorageSync("crossObj")),s.startsWith("[")){t.next=21;break}for(c in n)c==s&&(n[c]=o);return l=e.getStorageSync("crossTable"),t.next=19,this.$api.update("".concat(l),n);case 19:t.next=25;break;case 21:a=Number(e.getStorageSync("userid")),r=n["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 25:if(!r||!a){t.next=47;break}return this.ruleForm.crossuserid=a,this.ruleForm.crossrefid=r,h={page:1,limit:10,crossuserid:a,crossrefid:r},t.next=31,this.$api.list("wanjia",h);case 31:if(f=t.sent,!(f.data.total>=u)){t.next=37;break}return this.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 37:if(!this.ruleForm.id){t.next=42;break}return t.next=40,this.$api.update("wanjia",this.ruleForm);case 40:t.next=44;break;case 42:return t.next=44,this.$api.add("wanjia",this.ruleForm);case 44:this.$utils.msgBack("提交成功");case 45:t.next=55;break;case 47:if(!this.ruleForm.id){t.next=52;break}return t.next=50,this.$api.update("wanjia",this.ruleForm);case 50:t.next=54;break;case 52:return t.next=54,this.$api.add("wanjia",this.ruleForm);case 54:this.$utils.msgBack("提交成功");case 55:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,a=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(n,"-").concat(i,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,n("543d")["default"])},f0fa:function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");i(n("66fd"));var t=i(n("88e5"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},fed4:function(e,t,n){"use strict";var i=n("1ecd"),a=n.n(i);a.a}},[["f0fa","common/runtime","common/vendor"]]]);