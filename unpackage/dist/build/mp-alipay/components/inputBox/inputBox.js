;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/inputBox/inputBox"],{1140:function(e,t,n){},"13b1":function(e,t,n){"use strict";n.r(t);var u=n("ab2a"),i=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,(function(){return u[e]}))}(r);t["default"]=i.a},3760:function(e,t,n){"use strict";var u={uniPopup:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-popup/uni-popup")]).then(n.bind(null,"5853"))}},i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return u}))},"3b69":function(e,t,n){"use strict";var u=n("1140"),i=n.n(u);i.a},"954c":function(e,t,n){"use strict";n.r(t);var u=n("3760"),i=n("13b1");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("3b69");var c,o=n("f0c5"),a=Object(o["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);t["default"]=a.exports},ab2a:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){n.e("components/uni-popup/uni-popup-message").then(function(){return resolve(n("28ac"))}.bind(null,n)).catch(n.oe)},i=function(){var e=0;return function(t,n){clearTimeout(e),e=setTimeout(t,n)}}(),r={name:"inputBox",components:{uniPopupMessage:u},data:function(){return{inputNumber:"",inputNumber2:"",theCheck:"",theType:""}},methods:{theInput:function(e){var t=this;this.$emit("func","NAN","NAN",!0),this.inputNumber=this.inputNumber.replace(/^\.+|[^\d.]/g,"");var n=this.inputNumber.replace(/^\.+|[^\d.]/g,"");if(4==n.length){var u=this.common.test(n);switch(u){case 1:this.theType=1;break;case 2:this.theType=2;break;case 3:this.theType=3;break}this.$emit("func",this.inputNumber,this.theType,!1)}n.length>4&&i((function(){var e=t.common.test(n);switch(console.log(n.length,e),e){case 1:t.theType=1;break;case 2:t.theType=2;break;case 3:t.theType=3;break}t.$emit("func",t.inputNumber,t.theType,!1)}),500)}}};t.default=r}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/inputBox/inputBox-create-component',
    {
        'components/inputBox/inputBox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("954c"))
        })
    },
    [['components/inputBox/inputBox-create-component']]
]);