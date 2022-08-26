"use strict";(self.webpackChunkts_belt_docs=self.webpackChunkts_belt_docs||[]).push([[643],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>s});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(t),s=a,b=d["".concat(o,".").concat(s)]||d[s]||c[s]||l;return t?r.createElement(b,u(u({ref:n},m),{},{components:t})):r.createElement(b,u({ref:n},m))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,u=new Array(l);u[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var p=2;p<l;p++)u[p]=t[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6160:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>b});var r=t(3117),a=t(102),l=(t(7294),t(3905)),u=["components"],i=[{value:"add",id:"add",children:[],level:3},{value:"clamp",id:"clamp",children:[],level:3},{value:"divide",id:"divide",children:[],level:3},{value:"divideWithModulo",id:"dividewithmodulo",children:[],level:3},{value:"gt",id:"gt",children:[],level:3},{value:"gte",id:"gte",children:[],level:3},{value:"lt",id:"lt",children:[],level:3},{value:"lte",id:"lte",children:[],level:3},{value:"modulo",id:"modulo",children:[],level:3},{value:"multiply",id:"multiply",children:[],level:3},{value:"pred",id:"pred",children:[],level:3},{value:"subtract",id:"subtract",children:[],level:3},{value:"succ",id:"succ",children:[],level:3}],o={toc:i};function p(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"add"},"add"),(0,l.kt)("p",null,"Returns the sum of two numbers."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function add(b: number): (a: number) => number\nfunction add(a: number, b: number): number\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"N.add(10, 20) // \u2192 30\npipe(5, N.add(10)) // \u2192 15\n")),(0,l.kt)("h3",{id:"clamp"},"clamp"),(0,l.kt)("p",null,"Clamps a value between an upper and lower bound"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function clamp(min: number, max: number): (num: number) => number\nfunction clamp(num: number, min: number, max: number): number\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"N.clamp(2, 4, 6) // \u2192 4\npipe(10, N.clamp(2, 5)) // \u2192 5\n")),(0,l.kt)("h3",{id:"divide"},"divide"),(0,l.kt)("p",null,"Divides two numbers."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function divide(b: number): (a: number) => number\nfunction divide(a: number, b: number): number\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"N.divide(20, 5) // \u2192 4\npipe(40, N.divide(4)) // \u2192 10\n")),(0,l.kt)("h3",{id:"dividewithmodulo"},"divideWithModulo"),(0,l.kt)("p",null,"Returns the quotient and remainder of a number division."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function divideWithModulo(b: number): (a: number) => readonly [number, number]\nfunction divideWithModulo(a: number, b: number): readonly [number, number]\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"N.divideWithModulo(20, 5) // \u2192 [4, 0]\npipe(30, N.divideWithModulo(4)) // \u2192 [7.5, 2]\n")),(0,l.kt)("h3",{id:"gt"},"gt"),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if the first argument is greater than second argument. Otherwise it returns ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function gt(b: number): (a: number) => boolean\nfunction gt(a: number, b: number): boolean\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"N.gt(2, 4) // \u2192 false\npipe(4, N.gt(2)) // \u2192 true\n")),(0,l.kt)("h3",{id:"gte"},"gte"),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if the first argument is greater or equal than second argument. Otherwise it returns ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function gte(b: number): (a: number) => boolean\nfunction gte(a: number, b: number): boolean\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"N.gte(2, 4) // \u2192 false\npipe(4, N.gte(2)) // \u2192 true\n")),(0,l.kt)("h3",{id:"lt"},"lt"),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if the first argument is lower than second argument. Otherwise it returns ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function lt(b: number): (a: number) => boolean\nfunction lt(a: number, b: number): boolean\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"N.lt(2, 4) // \u2192 true\npipe(4, N.lt(2)) // \u2192 false\n")),(0,l.kt)("h3",{id:"lte"},"lte"),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if the first argument is lower or equal than second argument. Otherwise it returns ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function lte(b: number): (a: number) => boolean\nfunction lte(a: number, b: number): boolean\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"N.lte(2, 4) // \u2192 true\npipe(4, N.lte(2)) // \u2192 false\n")),(0,l.kt)("h3",{id:"modulo"},"modulo"),(0,l.kt)("p",null,"Returns the remainder of a number division."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function modulo(b: number): (a: number) => number\nfunction modulo(a: number, b: number): number\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"N.modulo(20, 6) // \u2192 2\npipe(30, N.modulo(4)) // \u2192 2\n")),(0,l.kt)("h3",{id:"multiply"},"multiply"),(0,l.kt)("p",null,"Multiplies two numbers."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function multiply(b: number): (a: number) => number\nfunction multiply(a: number, b: number): number\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"N.multiply(3, 6) // \u2192 18\npipe(8, N.multiply(4)) // \u2192 32\n")),(0,l.kt)("h3",{id:"pred"},"pred"),(0,l.kt)("p",null,"Subtracts ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," from the given number."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function pred(n: number): number\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"N.pred(6) // \u2192 5\npipe(5, N.pred) // \u2192 4\n")),(0,l.kt)("h3",{id:"subtract"},"subtract"),(0,l.kt)("p",null,"Returns the difference of two numbers."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function subtract(b: number): (a: number) => number\nfunction subtract(a: number, b: number): number\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"N.subtract(20, 10) // \u2192 10\npipe(15, N.subtract(10)) // \u2192 5\n")),(0,l.kt)("h3",{id:"succ"},"succ"),(0,l.kt)("p",null,"Adds ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," to the given number."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function succ(n: number): number\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"N.succ(0) // \u2192 1\nA.makeWithIndex(4, N.succ) // \u2192 [1, 2, 3, 4]\npipe(5, N.succ) // \u2192 6\n")))}p.isMDXComponent=!0;var m=["components"],c={id:"number",title:"Number"},d=void 0,s={unversionedId:"number",id:"number",title:"Number",description:"Utility functions for Number.",source:"@site/api/number.mdx",sourceDirName:".",slug:"/number",permalink:"/ts-belt/api/number",tags:[],version:"current",frontMatter:{id:"number",title:"Number"},sidebar:"sidebar",previous:{title:"Guards",permalink:"/ts-belt/api/guards"},next:{title:"Object (Dict)",permalink:"/ts-belt/api/object"}},b=i,k={toc:b};function g(e){var n=e.components,t=(0,a.Z)(e,m);return(0,l.kt)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Utility functions for ",(0,l.kt)("inlineCode",{parentName:"p"},"Number"),"."),(0,l.kt)(p,{mdxType:"Number"}))}g.isMDXComponent=!0}}]);