(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/almost-lottery-cloud/pages/lottery"],{"04f2":function(e,t,n){"use strict";n.r(t);var o=n("f859"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=r.a},4097:function(e,t,n){"use strict";(function(e){n("d77f");o(n("66fd"));var t=o(n("bdd0"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("a821")["createPage"])},"492a":function(e,t,n){"use strict";var o=n("d0ee"),r=n.n(o);r.a},bdd0:function(e,t,n){"use strict";n.r(t);var o=n("cb1a"),r=n("04f2");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("492a");var i,s=n("f0c5"),c=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,"e30e0630",null,!1,o["a"],i);t["default"]=c.exports},cb1a:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var o={almostLottery:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/almost-lottery/components/almost-lottery/almost-lottery")]).then(n.bind(null,"eb32"))}},r=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.prizeIndex=-1})},a=[]},d0ee:function(e,t,n){},f859:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("4b84"),a=n("26cb");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){n.e("uni_modules/almost-lottery-cloud/components/almost-lottery").then(function(){return resolve(n("459b"))}.bind(null,n)).catch(n.oe)},u={name:"Home",components:{AlmostLottery:l},data:function(){return{isDev:!0,lotteryConfig:{lotterySize:630},prizeList:[],prizeIndex:-1,prizeing:!1,weightTotal:0,weightArr:[],enable:!1,startDate:null,endDate:null,freeNumDay:0,goldCoinCost:0,freeNum:0}},computed:s(s({},(0,a.mapGetters)(["scoreInfo"])),{},{isApple:function(){return"ios"===e.getSystemInfoSync().platform}}),methods:s(s({},(0,a.mapMutations)(["setScoreInfo"])),{},{handleInitCanvas:function(){(0,r.clearCacheFile)(),this.prizeList=[],this.getPrizeData()},getFreeNum:function(){var e=this;o.callFunction({name:"almost-lottery-draw",data:{action:"getFreeNum",params:{lotteryId:1e4}},success:function(t){var n=t.result;e.freeNum=n.free_num}})},getPrizeData:function(){e.showLoading({title:"奖品准备中..."});var t=this;o.callFunction({name:"almost-lottery-draw",data:{action:"getPrizeData",params:{lotteryId:1e4}},success:function(n){console.log("奖品准备中",n);var o=n.result;if(o.prizeList&&o.prizeList.length)t.freeNumDay=o.free_num_day,t.goldCoinCost=o.gold_coin_cost,t.enable=o.enable,t.startDate=o.start_date,t.endDate=o.end_date,t.prizeList=o.prizeList,t.getFreeNum();else{e.showToast({title:"获取奖品失败，请先在后台添加奖品设置",icon:"none",duration:2e3});var r=setTimeout((function(){clearTimeout(r),r=null,e.navigateBack()}),2e3)}},fail:function(t){console.error(t),e.showToast({title:t.errMsg,icon:"none",duration:2e3});var n=setTimeout((function(){clearTimeout(n),n=null,e.navigateBack()}),2e3)}})},getScoreInfo:function(){var t=this;o.callFunction({name:"almost-passport",data:{action:"getScore"},success:function(n){console.log("获取金币信息",n.result);var o=n.result;if(30203===o.code)t.logout(),e.showToast({title:"".concat(o.msg,"，请重新登录"),duration:2e3,icon:"none"});else if(o.data.length){var r=o.data[0].balance;t.setScoreInfo({balance:r})}},fail:function(e){console.error(e)}})},handleDrawStart:function(){console.log("触发抽奖按钮"),!this.enable||Date.now()<this.startDate?e.showToast({title:"活动暂未开启，请稍后再来",icon:"none"}):Date.now()>this.endDate?e.showToast({title:"活动已结束，请继续关注我们的下一次活动",icon:"none"}):this.prizeing||(this.prizeing=!0,this.freeNum>0||this.scoreInfo.balance>=this.goldCoinCost?(this.freeNum>0?this.freeNum--:this.scoreInfo.balance>=this.goldCoinCost&&(this.scoreInfo.balance-=this.goldCoinCost),this.lotteryDraw()):(this.prizeing=!1,e.showModal({title:"金币不足",content:"是否前往赚取金币？",success:function(e){console.log("金币不足",e)}})))},lotteryDraw:function(){var e=this;o.callFunction({name:"almost-lottery-draw",data:{action:"lotteryDraw",params:{lotteryId:1e4}},success:function(t){var n=t.result,o=n.prizeId;e.prizeList.forEach((function(t,n){t.prizeId===o&&(e.prizeIndex=n)})),e.getFreeNum(),e.getScoreInfo()}})},handleDrawEnd:function(){console.log("旋转结束，执行拿到结果后到逻辑"),this.prizeing=!1;var t=this.prizeList[this.prizeIndex].prizeName,n="";n="谢谢参与"===t?"很遗憾，没有中奖，请再接再厉！":"恭喜您，获得 ".concat(t," ！"),e.showModal({content:n,showCancel:!1})},handleDrawFinish:function(t){console.log("抽奖转盘绘制完成",t),e.showToast({title:t.msg,duration:2e3,mask:!0,icon:"none"})}}),onShow:function(){this.getPrizeData(),this.getScoreInfo()},onUnload:function(){e.hideLoading()}};t.default=u}).call(this,n("a821")["default"],n("a9ff")["default"])}},[["4097","common/runtime","common/vendor"]]]);