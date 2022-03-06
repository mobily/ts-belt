"use strict";(self.webpackChunkts_belt_docs=self.webpackChunkts_belt_docs||[]).push([[80],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,h=u["".concat(o,".").concat(c)]||u[c]||k[c]||l;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:i,r[1]=d;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1016:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>d,contentTitle:()=>o,metadata:()=>p,toc:()=>m,default:()=>u});var a=n(3117),i=n(102),l=(n(7294),n(3905)),r=["components"],d={id:"changelog",title:"Changelog"},o=void 0,p={unversionedId:"changelog",id:"changelog",title:"Changelog",description:"v3.9.1",source:"@site/docs/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/ts-belt/docs/changelog",editUrl:"https://github.com/mobily/ts-belt/edit/master/docs/docs/changelog.md",tags:[],version:"current",frontMatter:{id:"changelog",title:"Changelog"},sidebar:"sidebar",previous:{title:"Usage",permalink:"/ts-belt/docs/getting-started/usage"}},m=[{value:"<code>v3.9.1</code>",id:"v391",children:[],level:3},{value:"<code>v3.9.0</code>",id:"v390",children:[],level:3},{value:"<code>v3.8.0</code>",id:"v380",children:[],level:3},{value:"<code>v3.7.0</code>",id:"v370",children:[],level:3},{value:"<code>v3.6.0</code>",id:"v360",children:[],level:3},{value:"<code>v3.5.0</code>",id:"v350",children:[],level:3},{value:"<code>v3.4.1</code>",id:"v341",children:[],level:3},{value:"<code>v3.4.0</code>",id:"v340",children:[],level:3},{value:"<code>v3.3.0</code>",id:"v330",children:[],level:3},{value:"<code>v3.2.0</code>",id:"v320",children:[],level:3},{value:"<code>v3.1.1</code>",id:"v311",children:[],level:3},{value:"<code>v3.1.0</code>",id:"v310",children:[],level:3},{value:"<code>v3.0.1</code>",id:"v301",children:[],level:3},{value:"<code>v3.0.0</code>",id:"v300",children:[],level:3}],k={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"v391"},(0,l.kt)("inlineCode",{parentName:"h3"},"v3.9.1")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2728 make ",(0,l.kt)("inlineCode",{parentName:"li"},"A.filter"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"A.filterWithIndex"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"A.keep"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"A.keepWithIndex"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"A.partition")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"G.isNot")," types aware of type guards (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/mobily/ts-belt/issues/25"},"#25"),")")),(0,l.kt)("h3",{id:"v390"},(0,l.kt)("inlineCode",{parentName:"h3"},"v3.9.0")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc1b fixed ",(0,l.kt)("inlineCode",{parentName:"li"},"R.fromPredicate")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"O.contains")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"O.zip")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"O.zipWith")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"A.removeFirst")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"A.removeFirstBy")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"A.zipWithIndex"))),(0,l.kt)("h3",{id:"v380"},(0,l.kt)("inlineCode",{parentName:"h3"},"v3.8.0")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc1b fixed ",(0,l.kt)("inlineCode",{parentName:"li"},"O.fromPredicate")),(0,l.kt)("li",{parentName:"ul"},"\u267b\ufe0f the ",(0,l.kt)("inlineCode",{parentName:"li"},"Option")," type is now ",(0,l.kt)("inlineCode",{parentName:"li"},"type Option<T> = T | undefined | null")," (due to this update, adding ",(0,l.kt)("inlineCode",{parentName:"li"},"noUncheckedIndexedAccess")," to your ",(0,l.kt)("inlineCode",{parentName:"li"},"tsconfig")," is mandatory, you can see other recommended options ",(0,l.kt)("a",{parentName:"li",href:"/ts-belt/docs/getting-started/config"},"here"),")")),(0,l.kt)("h3",{id:"v370"},(0,l.kt)("inlineCode",{parentName:"h3"},"v3.7.0")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"R.catchError")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"R.handleError")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"R.mapError")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"R.tapError")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"R.recover")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"R.flip"))),(0,l.kt)("h3",{id:"v360"},(0,l.kt)("inlineCode",{parentName:"h3"},"v3.6.0")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"flow")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/mobily/ts-belt/issues/17"},"#17"),", learn more ",(0,l.kt)("a",{parentName:"li",href:"/api/pipe-flow"},"here"),")"),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"D.selectKeys")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/anthony-khong"},"@anthony-khong"),")"),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"D.deleteKey")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/anthony-khong"},"@anthony-khong"),")"),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"D.deleteKeys")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/anthony-khong"},"@anthony-khong"),")"),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"N.clamp")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/domeknn"},"@domeknn"),")"),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"N.gt")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/domeknn"},"@domeknn"),")"),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"N.lt")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/domeknn"},"@domeknn"),")"),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"N.gte")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/domeknn"},"@domeknn"),")"),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"N.lte")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/domeknn"},"@domeknn"),")"),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc1b fixed ",(0,l.kt)("inlineCode",{parentName:"li"},"A.prependToAll")," (the order of elements was incorrect after calling ",(0,l.kt)("inlineCode",{parentName:"li"},"prependToAll"),")")),(0,l.kt)("h3",{id:"v350"},(0,l.kt)("inlineCode",{parentName:"h3"},"v3.5.0")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"D.update")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/anthony-khong"},"@anthony-khong"),")"),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"D.updateUnsafe")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/anthony-khong"},"@anthony-khong"),")"),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"D.isEmpty")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"D.isNotEmpty")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"A.reduceReverse")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"A.filterMap")," (alias: ",(0,l.kt)("inlineCode",{parentName:"li"},"A.keepMap"),")")),(0,l.kt)("h3",{id:"v341"},(0,l.kt)("inlineCode",{parentName:"h3"},"v3.4.1")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc1b fixed ",(0,l.kt)("inlineCode",{parentName:"li"},"F.makeControlledThrottle")),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc1b fixed ",(0,l.kt)("inlineCode",{parentName:"li"},"F.makeControlledDebounce"))),(0,l.kt)("p",null,"\u2b06\ufe0f The ",(0,l.kt)("inlineCode",{parentName:"p"},"invoke")," method was accepting only one argument."),(0,l.kt)("h3",{id:"v340"},(0,l.kt)("inlineCode",{parentName:"h3"},"v3.4.0")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc1b fixed the internal implementation for comparing objects (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/mobily/ts-belt/issues/10"},"#10"),")"),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"D.set")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/anthony-khong"},"@anthony-khong"),")")),(0,l.kt)("h3",{id:"v330"},(0,l.kt)("inlineCode",{parentName:"h3"},"v3.3.0")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u267b\ufe0f all tuples are now ",(0,l.kt)("inlineCode",{parentName:"li"},"readonly")),(0,l.kt)("li",{parentName:"ul"},"\ud83d\uddd1 ",(0,l.kt)("inlineCode",{parentName:"li"},"D.prop")," has been deprecated (please use either ",(0,l.kt)("inlineCode",{parentName:"li"},"D.get")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"D.getUnsafe"),")"),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"A.flip")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"F.tap")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"F.debounce")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"F.makeControlledDebounce")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"F.throttle")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"F.makeControlledThrottle"))),(0,l.kt)("h3",{id:"v320"},(0,l.kt)("inlineCode",{parentName:"h3"},"v3.2.0")),(0,l.kt)("p",null,"This version provides much better support for the point-free style. For instance, the following should not throw an error in TypeScript:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"A.reduce([1, 2, 3], 0, N.add)\nA.reduce(['hello', 'world'], '', S.concat)\nA.filter(['hello', 'world'], S.startsWith('h'))\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"O.tap")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"R.tap")),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"A.tap"))),(0,l.kt)("h3",{id:"v311"},(0,l.kt)("inlineCode",{parentName:"h3"},"v3.1.1")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc1b fixed arguments order of ",(0,l.kt)("inlineCode",{parentName:"li"},"A.*WithIndex")," \u2192 ",(0,l.kt)("inlineCode",{parentName:"li"},"(index, value)")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"D.*WithKey")," \u2192 ",(0,l.kt)("inlineCode",{parentName:"li"},"(key, value)"),"  functions")),(0,l.kt)("h3",{id:"v310"},(0,l.kt)("inlineCode",{parentName:"h3"},"v3.1.0")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc1b fixed ",(0,l.kt)("inlineCode",{parentName:"li"},"S.head")," return type"),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"S.trimEnd")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Dilven"},"@Dilven"),")"),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"S.trimStart")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Dilven"},"@Dilven"),")"),(0,l.kt)("li",{parentName:"ul"},"\u2728 added ",(0,l.kt)("inlineCode",{parentName:"li"},"S.last")," (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Dilven"},"@Dilven"),")")),(0,l.kt)("h3",{id:"v301"},(0,l.kt)("inlineCode",{parentName:"h3"},"v3.0.1")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc1b fixed ",(0,l.kt)("inlineCode",{parentName:"li"},"A.uniqBy")," signature (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/mobily/ts-belt/issues/1"},"#1"),")")),(0,l.kt)("h3",{id:"v300"},(0,l.kt)("inlineCode",{parentName:"h3"},"v3.0.0")),(0,l.kt)("p",null,"Initial ",(0,l.kt)("inlineCode",{parentName:"p"},"v3")," implementation."))}u.isMDXComponent=!0}}]);