"use strict";(self.webpackChunkepti_doc=self.webpackChunkepti_doc||[]).push([[822],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:e},s),{},{components:n})):r.createElement(m,o({ref:e},s))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6013:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="\u6dfb\u52a0\u591a\u56e0\u5b50\u8eab\u4efd\u9a8c\u8bc1\u4ee5\u4e3a\u8d26\u53f7\u63d0\u4f9b\u4fdd\u62a4",l={unversionedId:"\u8d26\u53f7/adding-2fa-protection",id:"\u8d26\u53f7/adding-2fa-protection",title:"\u6dfb\u52a0\u591a\u56e0\u5b50\u8eab\u4efd\u9a8c\u8bc1\u4ee5\u4e3a\u8d26\u53f7\u63d0\u4f9b\u4fdd\u62a4",description:"2FA \u4ecb\u7ecd",source:"@site/docs/\u8d26\u53f7/adding-2fa-protection.md",sourceDirName:"\u8d26\u53f7",slug:"/\u8d26\u53f7/adding-2fa-protection",permalink:"/docs/\u8d26\u53f7/adding-2fa-protection",draft:!1,editUrl:"https://git.uicai.ml/server_maintainer/epti-docs/docs/\u8d26\u53f7/adding-2fa-protection.md",tags:[],version:"current",lastUpdatedBy:"ecwu",lastUpdatedAt:1660633035,formattedLastUpdatedAt:"2022\u5e748\u670816\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u8d26\u53f7\u7684\u521d\u59cb\u5316",permalink:"/docs/\u8d26\u53f7/initialize-your-account"},next:{title:"\u901a\u8fc7\u7edf\u4e00\u767b\u5f55\u7cfb\u7edf\u8bbf\u95ee\u5176\u4ed6\u529f\u80fd",permalink:"/docs/\u8d26\u53f7/sso-authentication-portal"}},p={},c=[{value:"\u4ec0\u4e48\u662f 2FA\uff0cMFA",id:"\u4ec0\u4e48\u662f-2famfa",level:2},{value:"\u6dfb\u52a0\u591a\u56e0\u5b50\u8eab\u4efd\u9a8c\u8bc1",id:"\u6dfb\u52a0\u591a\u56e0\u5b50\u8eab\u4efd\u9a8c\u8bc1",level:2},{value:"\u6dfb\u52a0 TOTP \u8eab\u4efd\u9a8c\u8bc1\u5668",id:"\u6dfb\u52a0-totp-\u8eab\u4efd\u9a8c\u8bc1\u5668",level:3},{value:"\u4f7f\u7528\u591a\u56e0\u5b50\u8eab\u4efd\u9a8c\u8bc1",id:"\u4f7f\u7528\u591a\u56e0\u5b50\u8eab\u4efd\u9a8c\u8bc1",level:2}],s={toc:c};function d(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6dfb\u52a0\u591a\u56e0\u5b50\u8eab\u4efd\u9a8c\u8bc1\u4ee5\u4e3a\u8d26\u53f7\u63d0\u4f9b\u4fdd\u62a4"},"\u6dfb\u52a0\u591a\u56e0\u5b50\u8eab\u4efd\u9a8c\u8bc1\u4ee5\u4e3a\u8d26\u53f7\u63d0\u4f9b\u4fdd\u62a4"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"2FA \u4ecb\u7ecd",src:n(4833).Z,width:"800",height:"450"})),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f-2famfa"},"\u4ec0\u4e48\u662f 2FA\uff0cMFA"),(0,a.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u4e09\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u8bc1\u636e\uff0c\u53ef\u4ee5\u8bc1\u660e\u4e00\u4e2a\u4eba\u7684\u8eab\u4efd\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u79d8\u5bc6\u4fe1\u606f\uff1a\u53ea\u6709\u8be5\u7528\u6237\u77e5\u9053\u3001\u5176\u4ed6\u4eba\u4e0d\u77e5\u9053\u7684\u67d0\u79cd\u4fe1\u606f\uff0c\u6bd4\u5982\u5bc6\u7801\u3002\n\u4e2a\u4eba\u7269\u54c1\uff1a\u8be5\u7528\u6237\u7684\u79c1\u4eba\u7269\u54c1\uff0c\u6bd4\u5982\u8eab\u4efd\u8bc1\u3001\u94a5\u5319\u3002\n\u751f\u7406\u7279\u5f81\uff1a\u8be5\u7528\u6237\u7684\u9057\u4f20\u7279\u5f81\uff0c\u6bd4\u5982\u6307\u7eb9\u3001\u76f8\u8c8c\u3001\u8679\u819c\u7b49\u7b49\u3002")),(0,a.kt)("p",null,'\u8fd9\u4e9b\u8bc1\u636e\u5c31\u79f0\u4e3a\u4e09\u79cd "\u56e0\u7d20"\uff08factor\uff09\u3002\u56e0\u7d20\u8d8a\u591a\uff0c\u8bc1\u660e\u529b\u5c31\u8d8a\u5f3a\uff0c\u8eab\u4efd\u5c31\u8d8a\u53ef\u9760\u3002\u6240\u4ee5 2FA\uff0cMFA \u5c31\u662f\u6307\u4f7f\u7528\u591a\u4e8e\u4e00\u79cd\u56e0\u7d20\u6765\u8bc1\u660e\u8eab\u4efd\u3002\u5e38\u7528\u7684\u5de5\u5177\u6709\u5b89\u5168\u5bc6\u94a5\uff08\u786c\u4ef6\uff09\uff0c\u77ed\u4fe1\u9a8c\u8bc1\u7801\uff0c\u52a8\u6001\u5bc6\u7801\u7b49\u3002'),(0,a.kt)("h2",{id:"\u6dfb\u52a0\u591a\u56e0\u5b50\u8eab\u4efd\u9a8c\u8bc1"},"\u6dfb\u52a0\u591a\u56e0\u5b50\u8eab\u4efd\u9a8c\u8bc1"),(0,a.kt)("p",null,"EPTI \u4f7f\u7528\u7684 Authentik \u652f\u6301\u5b89\u5168\u5bc6\u94a5\u548c\u52a8\u6001\u5bc6\u7801\u4e24\u79cd\u591a\u56e0\u5b50\u8eab\u4efd\u9a8c\u8bc1\u65b9\u5f0f\u3002\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://auth.uicai.ml/if/user/#/settings;%7B%22page%22%3A%22page-mfa%22%7D"},"\u3010\u8bbe\u7f6e\u9875\u9762-MFA\u8bbe\u5907\u3011")," \u53ef\u4ee5\u83b7\u5f97\u76ee\u524d\u5728\u4f7f\u7528\u7684\u591a\u56e0\u5b50\u8eab\u4efd\u9a8c\u8bc1\u5de5\u5177\uff0c\u5e76\u8fdb\u884c\u65b0\u589e\u6216\u5220\u9664\u7684\u64cd\u4f5c\u3002\u8fd9\u91cc\u4ee5\u6dfb\u52a0\u52a8\u6001\u5bc6\u7801\uff08TOTP\u8eab\u4efd\u9a8c\u8bc1\u5668\uff09\u4e3a\u4f8b\u5b50\u3002"),(0,a.kt)("h3",{id:"\u6dfb\u52a0-totp-\u8eab\u4efd\u9a8c\u8bc1\u5668"},"\u6dfb\u52a0 TOTP \u8eab\u4efd\u9a8c\u8bc1\u5668"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u9875\u9762\u7684\u6ce8\u518c\u6309\u94ae\uff0c\u6253\u5f00\u4e0b\u62c9\u83dc\u5355\u3002\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"li"},"TOTP \u8eab\u4efd\u9a8c\u8bc1\u5668"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"TOTP \u6309\u94ae",src:n(7387).Z,width:"371",height:"254"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5728\u5f39\u51fa\u7684\u9875\u9762\u4e2d\uff0c\u4f1a\u51fa\u73b0\u4e00\u4e2a\u4e8c\u7ef4\u7801\uff0c\u8bf7\u4e0b\u8f7d\u4e00\u4e2a TOTP \u5de5\u5177\u6765\u626b\u63cf\u4e8c\u7ef4\u7801\uff08\u5982\u5b81\u987f\u4ee4\u724c\uff09\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"TOTP \u4e8c\u7ef4\u7801",src:n(2487).Z,width:"601",height:"706"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u5728 TOTP \u5de5\u5177\u8f6f\u4ef6\u4e0a\u626b\u63cf\u4e8c\u7ef4\u7801\u540e\uff0c\u4f1a\u663e\u793a\u4e00\u4e2a\u6bcf30\u79d2\u5237\u65b0\u7684\u516d\u4f4d\u6570\u5b57\u5bc6\u7801\uff0c\u5c06\u8fd9\u4e2a\u5bc6\u7801\u8f93\u5165\u5230\u4e8c\u7ef4\u7801\u9875\u9762\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Code")," \u6587\u5b57\u6846\uff0c\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"Continue")," \u6309\u94ae\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"TOTP \u5df2\u7ecf\u542f\u7528",src:n(6723).Z,width:"940",height:"332"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u542f\u7528\u540e\uff0c\u4f1a\u8fd4\u56de\u5230 MFA \u8bbe\u5907\u9875\u9762\uff0c\u53ef\u4ee5\u770b\u5230\u5df2\u7ecf\u542f\u7528\u7684 TOTP \u8eab\u4efd\u9a8c\u8bc1\u5668\u3002")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u591a\u56e0\u5b50\u8eab\u4efd\u9a8c\u8bc1"},"\u4f7f\u7528\u591a\u56e0\u5b50\u8eab\u4efd\u9a8c\u8bc1"),(0,a.kt)("p",null,"\u5f53\u4f60\u5df2\u7ecf\u8bbe\u7f6e\u4e86 TOTP \u8eab\u4efd\u9a8c\u8bc1\u5668\u540e\uff0c\u4e0b\u4e00\u6b21\u9700\u8981\u767b\u5f55 EPTI SSO \u5e73\u53f0\u65f6\uff0c\u9664\u4e86\u8981\u6c42\u4f60\u63d0\u4f9b\u8d26\u6237\u548c\u5bc6\u7801\uff0c\u8fd8\u4f1a\u8981\u6c42\u4f60\u989d\u5916\u8f93\u5165 TOTP \u5de5\u5177\u4e0a\u7684 6 \u4f4d\u6570\u52a8\u6001\u5bc6\u7801\u3002\u5982\u679c\u52a8\u6001\u5bc6\u7801\u6b63\u786e\uff0c\u5c31\u4f1a\u88ab\u6b63\u5e38\u91cd\u5b9a\u5411\u5230\u4e3b\u754c\u9762\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"TOTP \u767b\u5f55",src:n(190).Z,width:"574",height:"404"})))}d.isMDXComponent=!0},190:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/dynamic-totp-93f9da5faf38d956d073a574f96e2484.png"},4833:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/multifactor-authentication-2965b70f7d83e2e632b9bcd215bd0dd9.jpeg"},7387:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/totp-btn-42ad5f551cdf91c85169226334823b68.png"},2487:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/totp-enable-38c352725fe8730bc3edb59610d54343.png"},6723:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/totp-ok-0eb49a30d74df10c7e667632df213da0.png"}}]);