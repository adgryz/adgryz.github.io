(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59071579"],{"0e94":function(e,t,o){},"27ea":function(e,t,o){},"5bc3":function(e,t,o){"use strict";var a=o("27ea"),n=o.n(a);n.a},"6ebc":function(e,t,o){"use strict";var a=o("8cb9"),n=o.n(a);n.a},"8cb9":function(e,t,o){},"97bb":function(e,t,o){"use strict";var a=o("0e94"),n=o.n(a);n.a},b4fa:function(e,t,o){"use strict";var a=o("dfac"),n=o.n(a);n.a},c72a:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"add-view"},[o("v-stepper",{model:{value:e.stepNo,callback:function(t){e.stepNo=t},expression:"stepNo"}},[o("v-stepper-header",[o("v-stepper-step",{attrs:{color:"#fb7600",complete:e.stepNo>1,step:"1"}},[e._v("Choose type")]),o("v-divider"),o("v-stepper-step",{attrs:{color:"#fb7600",complete:e.stepNo>2,step:"2"}},[e._v("Upload images")]),o("v-divider"),o("v-stepper-step",{attrs:{color:"#fb7600",step:"3"}},[e._v("Fill data")])],1),o("v-stepper-items",[o("v-stepper-content",{attrs:{step:"1"}},[o("type-selection"),o("v-btn",{attrs:{color:"#fb7600",dark:""},on:{click:function(t){e.stepNo=2}}},[e._v("\r\n                    Continue\r\n                ")])],1),o("v-stepper-content",{attrs:{step:"2"}},[o("image-upload"),o("v-btn",{attrs:{color:"#fb7600",dark:""},on:{click:function(t){e.stepNo=3}}},[e._v("\r\n                    Continue\r\n                ")])],1),o("v-stepper-content",{attrs:{step:"3"}},[o("data-fill"),o("v-btn",{attrs:{color:"#fb7600",dark:""},on:{click:function(t){e.stepNo=1}}},[e._v("\r\n                Add your announcement\r\n            ")])],1)],1)],1)],1)},n=[],l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[e._v("Choose type of your announcement : ")]),o("v-radio-group",{model:{value:e.selectedType,callback:function(t){e.selectedType=t},expression:"selectedType"}},e._l(3,function(t){return o("v-radio",{key:t,attrs:{color:"#fb7600",label:e.types[t-1]+e.descriptions[t-1],value:t}})}))],1)},r=[],s={data:function(){return{types:["Flat","Room ","Roommate"],descriptions:[" - you want to rent out whole flat"," - you have one free room and looking for roommate"," - you are looking for room"],selectedType:1}}},i=s,c=(o("6ebc"),o("2877")),p=Object(c["a"])(i,l,r,!1,null,null,null);p.options.__file="TypeSelection.vue";var u=p.exports,d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"photo-upload-content"},[o("div",[e._v("Upload photos of your flat")]),o("div",{staticClass:"drop-zone"},[e._v("\n        DROP ZONE\n    ")]),o("div",{staticClass:"photos"},e._l(4,function(t){return o("div",{key:t,staticClass:"photo"},[e._v("\n            UPLOADED PHOTO\n        ")])}))])},v=[],f={data:function(){return{images:[]}}},b=f,m=(o("5bc3"),Object(c["a"])(b,d,v,!1,null,null,null));m.options.__file="ImageUpload.vue";var _=m.exports,y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"data-view"},[o("div",{staticClass:"data-form"},[o("v-text-field",{attrs:{label:"Title",placeholder:" ",color:"#fb7600"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),o("v-text-field",{attrs:{label:"Address",placeholder:" ",color:"#fb7600"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),o("v-text-field",{attrs:{label:"Price",type:"number",color:"#fb7600"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}}),o("v-text-field",{attrs:{label:"Area",type:"number",color:"#fb7600"},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}}),o("v-text-field",{attrs:{label:"Rooms",type:"number",color:"#fb7600"},model:{value:e.rooms,callback:function(t){e.rooms=t},expression:"rooms"}}),o("v-textarea",{attrs:{name:"input-7-1",label:"Description",color:"#fb7600"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),o("div",{staticClass:"map-wrapper"},[o("gmap-map",{staticStyle:{width:"100%",height:"100%"},attrs:{center:{lat:52.237049,lng:21.017532},zoom:12}})],1)])},k=[],h={data:function(){return{title:"",address:"",description:"",price:0,area:0,rooms:0}}},x=h,w=(o("b4fa"),Object(c["a"])(x,y,k,!1,null,null,null));w.options.__file="DataFill.vue";var C=w.exports,g={name:"addnew",data:function(){return{stepNo:0}},components:{TypeSelection:u,ImageUpload:_,DataFill:C}},N=g,O=(o("97bb"),Object(c["a"])(N,a,n,!1,null,null,null));O.options.__file="AddNew.vue";t["default"]=O.exports},dfac:function(e,t,o){}}]);
//# sourceMappingURL=chunk-59071579.0197f967.js.map