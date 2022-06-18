"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8283],{5713:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(3645),s=n.n(r)()((function(t){return t[1]}));s.push([t.id,".sync-alt[data-v-0c7f3326]{-webkit-animation:spin-data-v-0c7f3326 1s linear infinite;animation:spin-data-v-0c7f3326 1s linear infinite}@-webkit-keyframes spin-data-v-0c7f3326{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-0c7f3326{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""]);const i=s},7776:(t,e,n)=>{n.d(e,{Z:()=>s});const r={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}};const s=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isVisible?n("div",{staticClass:"w-full max-w-xl text-center m-auto py-6"},[t._t("default")],2):t._e()}),[],!1,null,null,null).exports},683:(t,e,n)=>{n.d(e,{Z:()=>s});const r={name:"AuthContentWrapper"};const s=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"flex px-2.5 md:px-6"},[t._t("default")],2)}),[],!1,null,null,null).exports},371:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(9101);const s={name:"AuthContent",props:["loading","icon","text"],components:{ChevronRightIcon:r.XCv,RefreshCwIcon:r.Iyk},data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}};var i=n(3379),a=n.n(i),o=n(5713),l={insert:"head",singleton:!1};a()(o.Z,l);o.Z.locals;const c=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"group mx-auto inline-block flex items-center whitespace-nowrap rounded-lg border-2 border-black px-7 py-2.5 dark:border-gray-300"},[n("span",{staticClass:"pr-1 text-lg font-extrabold"},[t._v("\n        "+t._s(t.text)+"\n    ")]),t._v(" "),t.loading?n("refresh-cw-icon",{staticClass:"vue-feather text-theme sync-alt -mr-1",attrs:{size:"20"}}):t._e(),t._v(" "),!t.loading&&t.icon?n("chevron-right-icon",{staticClass:"vue-feather text-theme -mr-1",attrs:{size:"20"}}):t._e()],1)}),[],!1,null,"0c7f3326",null).exports},5993:(t,e,n)=>{n.d(e,{Z:()=>o});function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const a={name:"Headline",props:["description","title"],computed:s(s({},(0,n(629).Se)(["config","isDarkMode"])),{},{logoSrc:function(){return this.isDarkMode&&this.config.app_logo?this.config.app_logo_dark:this.config.app_logo}})};const o=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-14"},[t._t("default"),t._v(" "),t.$slots.default?t._e():n("div",[t.config.app_logo?n("img",{staticClass:"mx-auto mb-6 h-16 md:h-20 mb-10",attrs:{src:t.$getImage(t.logoSrc),alt:t.config.app_name}}):t._e(),t._v(" "),t.config.app_logo?t._e():n("b",{staticClass:"mb-10 block text-xl font-bold"},[t._v("\n            "+t._s(t.config.app_name)+"\n        ")])]),t._v(" "),n("h1",{staticClass:"mb-0.5 text-3xl font-extrabold md:text-4xl"},[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),n("h2",{staticClass:"text-xl font-normal md:text-2xl"},[t._v("\n        "+t._s(t.description)+"\n    ")])],2)}),[],!1,null,null,null).exports},2883:(t,e,n)=>{n.r(e),n.d(e,{default:()=>l});var r=n(683),s=n(7776),i=n(371),a=n(5993);const o={name:"SuccessfullyEmailVerified",components:{AuthContentWrapper:r.Z,AuthContent:s.Z,AuthButton:i.Z,Headline:a.Z}};const l=(0,n(1900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AuthContentWrapper",{staticClass:"h-screen"},[n("AuthContent",{attrs:{visible:!0}},[n("Headline",{attrs:{title:t.$t("page_email_successfully_verified.title"),description:t.$t("page_email_successfully_verified.subtitle")}}),t._v(" "),n("router-link",{attrs:{to:{name:"SignIn"}}},[n("AuthButton",{attrs:{icon:"chevron-right",text:t.$t("log_in")}})],1)],1)],1)}),[],!1,null,null,null).exports}}]);