(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/carousel/carousel"],{"1b8d":function(n,t,o){},"23ca":function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"carousel",props:{swpieItems:Array},data:function(){return{background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}},methods:{tao:function(t,o){console.log(o),o?n.navigateToMiniProgram({appId:o,path:t,success:function(n){console.log("打开成功",n)},fail:function(n){console.log(n)}}):n.navigateTo({url:t})}}};t.default=o}).call(this,o("543d")["default"])},"85b1":function(n,t,o){"use strict";o.r(t);var e=o("e169"),a=o("ebe2");for(var u in a)"default"!==u&&function(n){o.d(t,n,(function(){return a[n]}))}(u);o("8a86");var r,c=o("f0c5"),i=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);t["default"]=i.exports},"8a86":function(n,t,o){"use strict";var e=o("1b8d"),a=o.n(e);a.a},e169:function(n,t,o){"use strict";var e;o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return u})),o.d(t,"a",(function(){return e}));var a=function(){var n=this,t=n.$createElement;n._self._c},u=[]},ebe2:function(n,t,o){"use strict";o.r(t);var e=o("23ca"),a=o.n(e);for(var u in e)"default"!==u&&function(n){o.d(t,n,(function(){return e[n]}))}(u);t["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/carousel/carousel-create-component',
    {
        'components/carousel/carousel-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("85b1"))
        })
    },
    [['components/carousel/carousel-create-component']]
]);
