(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a4bf489"],{"48ad":function(e,a,t){"use strict";var l=t("a69e"),s=t.n(l);s.a},"88d1":function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-layout",{staticClass:"full-height",attrs:{column:"","align-center":""}},[t("v-form",{model:{value:e.isValid,callback:function(a){e.isValid=a},expression:"isValid"}},[t("v-text-field",{attrs:{color:"#fb7600",label:"Email",rules:[e.notEmptyRule,e.emailRule]},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}}),t("v-text-field",{attrs:{color:"#fb7600",label:"Repeat Email",rules:[e.notEmptyRule,e.sameEmailRule]},model:{value:e.emailRepeated,callback:function(a){e.emailRepeated=a},expression:"emailRepeated"}}),t("v-text-field",{attrs:{color:"#fb7600",label:"Password",type:"password",rules:[e.notEmptyRule,e.lengthRule]},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),t("v-text-field",{attrs:{color:"#fb7600",label:"Repeat Password",type:"password",rules:[e.notEmptyRule,e.samePasswordRule]},model:{value:e.passwordRepeated,callback:function(a){e.passwordRepeated=a},expression:"passwordRepeated"}})],1),e.isLoading?t("v-progress-circular",{attrs:{size:70,width:7,color:"#fb7600",indeterminate:""}}):t("v-btn",{attrs:{color:"#fb7600",dark:e.isValid,disabled:!e.isValid},on:{click:e.signUp}},[e._v("\n        Sign Up\n      ")])],1)},s=[],i=t("c0d6"),n=t("2f62"),o=t("2a03"),r={name:"signup",data:function(){var e=this;return{isValid:!1,email:"",emailRepeated:"",password:"",passwordRepeated:"",notEmptyRule:function(e){return e.length>0||"Can't be empty"},lengthRule:function(e){return e.length>3||"Must be longer than 3 characters"},emailRule:function(e){return/\S+@\S+/.test(e)||"Must be valid email"},samePasswordRule:function(a){return a===e.password||"Password are different"},sameEmailRule:function(a){return a===e.email||"Emails are different"}}},computed:Object(n["b"])(["isLoading"]),methods:{signUp:function(){i["a"].dispatch(o["b"],{email:this.email,password:this.password})}}},d=r,u=(t("48ad"),t("2877")),c=Object(u["a"])(d,l,s,!1,null,"27699de3",null);c.options.__file="SignUp.vue";a["default"]=c.exports},a69e:function(e,a,t){}}]);
//# sourceMappingURL=chunk-2a4bf489.b3be542c.js.map