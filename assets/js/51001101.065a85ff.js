"use strict";(self.webpackChunkmetro_website=self.webpackChunkmetro_website||[]).push([[645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return n?a.createElement(m,c(c({ref:t},h),{},{components:n})):a.createElement(m,c({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),c=["components"],i={id:"caching",title:"Caching"},s=void 0,l={unversionedId:"caching",id:"caching",title:"Caching",description:"Metro has a multi-layered cache: you can set up multiple caches to be used by Metro instead of one. This has several advantages, on this page we will explain how the caches work.",source:"@site/../docs/Caching.md",sourceDirName:".",slug:"/caching",permalink:"/metro/docs/caching",editUrl:"https://github.com/facebook/metro/edit/main/docs/../docs/Caching.md",tags:[],version:"current",lastUpdatedAt:1647956905,formattedLastUpdatedAt:"3/22/2022",frontMatter:{id:"caching",title:"Caching"},sidebar:"docs",previous:{title:"Bundling",permalink:"/metro/docs/bundling"},next:{title:"API",permalink:"/metro/docs/api"}},h={},p=[{value:"Why Cache?",id:"why-cache",level:2},{value:"Cache Fetching &amp; Saving",id:"cache-fetching--saving",level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Metro has a multi-layered cache: you can set up multiple caches to be used by Metro instead of one. This has several advantages, on this page we will explain how the caches work."),(0,o.kt)("h2",{id:"why-cache"},"Why Cache?"),(0,o.kt)("p",null,"Caches give big performance benefits, they can increase the speed of a bundler with more than tenfold. However, many systems use a non-persistent cache. With Metro we have a more sophisticated way of caching with a layer system. For example, we can store the cache on a server. Because of this all bundlers connected to the same server can use the shared cache. As a result the initial build time for CI servers and local development become significantly lower."),(0,o.kt)("p",null,"We want to store caches in multiple places as to always have a cache to fallback to. That's why there is a multi-layered cache system."),(0,o.kt)("h2",{id:"cache-fetching--saving"},"Cache Fetching & Saving"),(0,o.kt)("p",null,"There is an ordering mechanism to determine which cache to use. For retrieving a cache we go through the caches from ",(0,o.kt)("em",{parentName:"p"},"top to bottom")," until we find a result, for saving a cache we do the same until we find a store that has the cache."),(0,o.kt)("p",null,"Let's say you have two cache stores: one on a server and one on your local file system. You would specify that in this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const config = {\n  cacheStores: [\n    new FileStore({/*opts*/}),\n    new NetworkStore({/*opts*/})\n  ]\n}\n")),(0,o.kt)("p",null,"Metro will first look into the ",(0,o.kt)("inlineCode",{parentName:"p"},"FileStore")," when we retrieve a cache. If it can't find the cache there it will check ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkStore"),", and so on. Finally if there's no cache there it will generate a new cache itself. As soon as the cache has been generated, Metro will go again from top to bottom to store the cache in ",(0,o.kt)("em",{parentName:"p"},"all")," stores. This also happens if a cache is found. For example, if Metro finds a cache in the ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkStore")," it will store it in ",(0,o.kt)("inlineCode",{parentName:"p"},"FileStore")," as well."))}d.isMDXComponent=!0}}]);