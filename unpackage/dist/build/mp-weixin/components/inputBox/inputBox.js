(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/inputBox/inputBox"],{"25a2":function(e,t,n){"use strict";var u=n("9bcb"),i=n.n(u);i.a},3004:function(e,t,n){"use strict";n.r(t);var u=n("a16e"),i=n.n(u);for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o);t["default"]=i.a},"818b":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return u}));var u={uniPopup:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-popup/uni-popup")]).then(n.bind(null,"334c"))}},i=function(){var e=this,t=e.$createElement;e._self._c},o=[]},"90b7":function(e,t,n){"use strict";n.r(t);var u=n("818b"),i=n("3004");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("25a2");var c,r=n("f0c5"),a=Object(r["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);t["default"]=a.exports},"9bcb":function(e,t,n){},a16e:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){n.e("components/uni-popup/uni-popup-message").then(function(){return resolve(n("938f"))}.bind(null,n)).catch(n.oe)},i=function(){var e=0;return function(t,n){clearTimeout(e),e=setTimeout(t,n)}}(),o={name:"inputBox",components:{uniPopupMessage:u},data:function(){return{inputNumber:"",inputNumber2:"",theCheck:"",theType:""}},methods:{theInput:function(e){var t=this;this.$emit("func","NAN","NAN",!0),this.inputNumber=this.inputNumber.replace(/^\.+|[^\d.]/g,"");var n=this.inputNumber.replace(/^\.+|[^\d.]/g,"");if(4==n.length){var u=this.common.test(n);switch(u){case 1:this.theType=1;break;case 2:this.theType=2;break;case 3:this.theType=3;break}this.$emit("func",this.inputNumber,this.theType,!1)}n.length>4&&i((function(){var e=t.common.test(n);switch(console.log(n.length,e),e){case 1:t.theType=1;break;case 2:t.theType=2;break;case 3:t.theType=3;break}t.$emit("func",t.inputNumber,t.theType,!1)}),500)}}};t.default=o}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/inputBox/inputBox-create-component',
    {
        'components/inputBox/inputBox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("90b7"))
        })
    },
    [['components/inputBox/inputBox-create-component']]
]);