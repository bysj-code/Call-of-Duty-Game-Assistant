(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/systemintro/detail"],{"0764":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t,n,e,i,r,s,a){try{var o=t[s](a),u=o.value}catch(c){return void e(c)}o.done?n(u):Promise.resolve(u).then(i,r)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(i,r){var a=t.apply(n,e);function o(t){s(a,i,r,o,u,"next",t)}function u(t){s(a,i,r,o,u,"throw",t)}o(void 0)}))}}var o={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=a(i.default.mark((function t(n){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=n.id,n.userid&&(this.userid=n.userid),this.init();case 3:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onUnload:function(){this.timer&&clearInterval(this.timer)},onShow:function(){var n=a(i.default.mark((function n(e){var r,s;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:s=n.sent,this.user=s.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}));case 6:case"end":return n.stop()}}),n,this)})));function e(t){return n.apply(this,arguments)}return e}(),destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","systemintro"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(n){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(n.id,"&userid=")+this.userid)},onAcrossTap:function(n,e,i,r,s){if(t.setStorageSync("crossTable","systemintro"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",i),t.setStorageSync("statusColumnValue",s),t.setStorageSync("tips",r),""!=i&&!i.startsWith("[")){var a=t.getStorageSync("crossObj");for(var o in a)if(o==i&&a[o]==s)return void this.$utils.msg(r)}this.$utils.jump("../".concat(n,"/add-or-update?cross=true"))},init:function(){var t=a(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.timer&&clearInterval(this.timer),t.next=3,this.$api.info("systemintro",this.id);case 3:n=t.sent,this.detail=n.data,this.detail.content=this.detail.content.replace(/img src/gi,'img style="width:100%;" src');case 6:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=a(i.default.mark((function t(n){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.endSuccess(n.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(n){var e=this;n=e.$base.url+n,t.downloadFile({url:n,success:function(t){200===t.statusCode&&(e.$utils.msg("下载成功"),window.open(n))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=a(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$utils.jump("../discusssystemintro/add-or-update?refid=".concat(this.id));case 1:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onSHTap:function(){this.$refs.popup.open()}}};n.default=o}).call(this,e("543d")["default"])},1348:function(t,n,e){"use strict";var i=e("701b"),r=e.n(i);r.a},6469:function(t,n,e){"use strict";e.r(n);var i=e("0764"),r=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=r.a},"701b":function(t,n,e){},"92d0":function(t,n,e){"use strict";e.r(n);var i=e("cfc0"),r=e("6469");for(var s in r)"default"!==s&&function(t){e.d(n,t,(function(){return r[t]}))}(s);e("1348");var a,o=e("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"2b072d41",null,!1,i["a"],a);n["default"]=u.exports},cfc0:function(t,n,e){"use strict";var i={"mescroll-uni":()=>Promise.all([e.e("common/vendor"),e.e("components/mescroll-uni/mescroll-uni")]).then(e.bind(null,"f05e"))},r=function(){var t=this,n=t.$createElement;t._self._c},s=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}))},fa81:function(t,n,e){"use strict";(function(t){e("6cdc"),e("921b");i(e("66fd"));var n=i(e("92d0"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["fa81","common/runtime","common/vendor"]]]);