"use strict";(self.webpackChunkepti_doc=self.webpackChunkepti_doc||[]).push([[458],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>u});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},p=Object.keys(t);for(a=0;a<p.length;a++)r=p[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(a=0;a<p.length;a++)r=p[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),o=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=o(t.components);return a.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,p=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),k=o(r),u=n,N=k["".concat(c,".").concat(u)]||k[u]||m[u]||p;return r?a.createElement(N,i(i({ref:e},d),{},{components:r})):a.createElement(N,i({ref:e},d))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var p=r.length,i=new Array(p);i[0]=k;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var o=2;o<p;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},9385:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>o});var a=r(7462),n=(r(7294),r(3905));const p={sidebar_position:2},i="Jupyter \u955c\u50cf\u8be6\u60c5",l={unversionedId:"\u5bb9\u5668\u548c\u955c\u50cf/docker-images",id:"\u5bb9\u5668\u548c\u955c\u50cf/docker-images",title:"Jupyter \u955c\u50cf\u8be6\u60c5",description:"JupyterHub \u63d0\u4f9b\u4e86\u591a\u4e2a\u9884\u5236\u955c\u50cf\uff0c\u65b9\u4fbf\u7528\u6237\u4f7f\u7528\u3002\u4e0d\u540c\u955c\u50cf\u4e5f\u6302\u8f7d\u4e86\u4e0d\u540c\u7684\u8d44\u6e90\u3002",source:"@site/docs/\u5bb9\u5668\u548c\u955c\u50cf/docker-images.md",sourceDirName:"\u5bb9\u5668\u548c\u955c\u50cf",slug:"/\u5bb9\u5668\u548c\u955c\u50cf/docker-images",permalink:"/docs/\u5bb9\u5668\u548c\u955c\u50cf/docker-images",draft:!1,editUrl:"https://git.uicai.ml/server_maintainer/epti-docs/docs/\u5bb9\u5668\u548c\u955c\u50cf/docker-images.md",tags:[],version:"current",lastUpdatedBy:"ecwu",lastUpdatedAt:1668664375,formattedLastUpdatedAt:"2022\u5e7411\u670817\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"JupyterHub \u521b\u5efa\u5bb9\u5668",permalink:"/docs/\u5bb9\u5668\u548c\u955c\u50cf/jupyter-hub"},next:{title:"\u7b97\u529b\u548c\u7b97\u529b\u76d1\u6d4b",permalink:"/docs/category/\u7b97\u529b\u548c\u7b97\u529b\u76d1\u6d4b"}},c={},o=[{value:"GPU \u533b\u7597\u5f71\u50cf\u5b9e\u4f8b (PyTorch)",id:"gpu-\u533b\u7597\u5f71\u50cf\u5b9e\u4f8b-pytorch",level:2},{value:"GPU \u533b\u7597\u5f71\u50cf\u5b9e\u4f8b (PyTorch)",id:"gpu-\u533b\u7597\u5f71\u50cf\u5b9e\u4f8b-pytorch-1",level:2},{value:"CPU \u57fa\u7840\u5b9e\u4f8b",id:"cpu-\u57fa\u7840\u5b9e\u4f8b",level:2},{value:"CPU \u6570\u636e\u79d1\u5b66\u5b9e\u4f8b",id:"cpu-\u6570\u636e\u79d1\u5b66\u5b9e\u4f8b",level:2}],d={toc:o};function m(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"jupyter-\u955c\u50cf\u8be6\u60c5"},"Jupyter \u955c\u50cf\u8be6\u60c5"),(0,n.kt)("p",null,"JupyterHub \u63d0\u4f9b\u4e86\u591a\u4e2a\u9884\u5236\u955c\u50cf\uff0c\u65b9\u4fbf\u7528\u6237\u4f7f\u7528\u3002\u4e0d\u540c\u955c\u50cf\u4e5f\u6302\u8f7d\u4e86\u4e0d\u540c\u7684\u8d44\u6e90\u3002"),(0,n.kt)("h2",{id:"gpu-\u533b\u7597\u5f71\u50cf\u5b9e\u4f8b-pytorch"},"GPU \u533b\u7597\u5f71\u50cf\u5b9e\u4f8b (PyTorch)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u9879\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8be6\u60c5"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u955c\u50cf"),(0,n.kt)("td",{parentName:"tr",align:"center"},"reg.uicai.ml/library/jupyter_lab_singleuser_gpu:1.1.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Python \u73af\u5883"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"R \u73af\u5883"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Julia \u73af\u5883"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"GPU"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705 (CUDA 11.7 + cudnn8.1)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u7cfb\u7edf\u7248\u672c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Ubuntu 22.04")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u7cfb\u7edf\u8f6f\u4ef6\u4f9d\u8d56"),(0,n.kt)("td",{parentName:"tr",align:"center"},"apt-utils, curl, wget, zip, unzip, git, unrar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u8f6f\u4ef6\u5305\u4f9d\u8d56"),(0,n.kt)("td",{parentName:"tr",align:"center"},"pytorch, torchvision, touchaudio ",(0,n.kt)("br",null)," pandas, scikit, scipy, matplotlib, seaborn ",(0,n.kt)("br",null)," monai, nibabel, jupyterlab-tensorboard-pro")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Dockerfile"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://git.uicai.ml/server_maintainer/singleuser/src/branch/main/Dockerfile"},"https://git.uicai.ml/server_maintainer/singleuser/src/branch/main/Dockerfile"))))),(0,n.kt)("h2",{id:"gpu-\u533b\u7597\u5f71\u50cf\u5b9e\u4f8b-pytorch-1"},"GPU \u533b\u7597\u5f71\u50cf\u5b9e\u4f8b (PyTorch)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u9879\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8be6\u60c5"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u955c\u50cf"),(0,n.kt)("td",{parentName:"tr",align:"center"},"reg.uicai.ml/library/jupyter_lab_tensorflow_gpu:1.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Python \u73af\u5883"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"R \u73af\u5883"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Julia \u73af\u5883"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"GPU"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705 (CUDA 11.7 + cudnn8.1)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u7cfb\u7edf\u7248\u672c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Ubuntu 22.04")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u7cfb\u7edf\u8f6f\u4ef6\u4f9d\u8d56"),(0,n.kt)("td",{parentName:"tr",align:"center"},"apt-utils, curl, wget, zip, unzip, git")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u8f6f\u4ef6\u5305\u4f9d\u8d56"),(0,n.kt)("td",{parentName:"tr",align:"center"},"tensorflow ",(0,n.kt)("br",null)," pandas, scikit, scipy, matplotlib, seaborn ",(0,n.kt)("br",null)," monai, tensorboard")))),(0,n.kt)("h2",{id:"cpu-\u57fa\u7840\u5b9e\u4f8b"},"CPU \u57fa\u7840\u5b9e\u4f8b"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u9879\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8be6\u60c5"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u955c\u50cf"),(0,n.kt)("td",{parentName:"tr",align:"center"},"jupyter/base-notebook:latest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Python \u73af\u5883"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"R \u73af\u5883"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Julia \u73af\u5883"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"GPU"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u7cfb\u7edf\u7248\u672c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Ubuntu 22.04")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u7cfb\u7edf\u8f6f\u4ef6\u4f9d\u8d56"),(0,n.kt)("td",{parentName:"tr",align:"center"},"wget")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u8f6f\u4ef6\u5305\u4f9d\u8d56"),(0,n.kt)("td",{parentName:"tr",align:"center"},"N/A")))),(0,n.kt)("h2",{id:"cpu-\u6570\u636e\u79d1\u5b66\u5b9e\u4f8b"},"CPU \u6570\u636e\u79d1\u5b66\u5b9e\u4f8b"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u9879\u76ee"),(0,n.kt)("th",{parentName:"tr",align:"center"},"\u8be6\u60c5"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u955c\u50cf"),(0,n.kt)("td",{parentName:"tr",align:"center"},"reg.uicai.ml/library/jupyter_lab_tensorflow_gpu:latest")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Python \u73af\u5883"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"R \u73af\u5883"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705 4.1.3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Julia \u73af\u5883"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705 1.7.3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"GPU"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u7cfb\u7edf\u7248\u672c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Ubuntu 22.04")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u7cfb\u7edf\u8f6f\u4ef6\u4f9d\u8d56"),(0,n.kt)("td",{parentName:"tr",align:"center"},"wget")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u8f6f\u4ef6\u5305\u4f9d\u8d56"),(0,n.kt)("td",{parentName:"tr",align:"center"},"N/A")))))}m.isMDXComponent=!0}}]);