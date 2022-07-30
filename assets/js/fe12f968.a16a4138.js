"use strict";(self.webpackChunkts_belt_docs=self.webpackChunkts_belt_docs||[]).push([[509],{3905:(e,n,l)=>{l.d(n,{Zo:()=>s,kt:()=>d});var r=l(7294);function t(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function a(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,r)}return l}function o(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?a(Object(l),!0).forEach((function(n){t(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function u(e,n){if(null==e)return{};var l,r,t=function(e,n){if(null==e)return{};var l,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],n.indexOf(l)>=0||(t[l]=e[l]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var p=r.createContext({}),i=function(e){var n=r.useContext(p),l=n;return e&&(l="function"==typeof e?e(n):o(o({},n),e)),l},s=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var l=e.components,t=e.mdxType,a=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=i(l),d=t,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return l?r.createElement(k,o(o({ref:n},s),{},{components:l})):r.createElement(k,o({ref:n},s))}));function d(e,n){var l=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=l.length,o=new Array(a);o[0]=c;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u.mdxType="string"==typeof e?e:t,o[1]=u;for(var i=2;i<a;i++)o[i]=l[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,l)}c.displayName="MDXCreateElement"},652:(e,n,l)=>{l.r(n),l.d(n,{contentTitle:()=>c,default:()=>N,frontMatter:()=>m,metadata:()=>d,toc:()=>k});var r=l(3117),t=l(102),a=(l(7294),l(3905)),o=["components"],u=[{value:"catchError",id:"catcherror",children:[],level:3},{value:"flatMap",id:"flatmap",children:[],level:3},{value:"flip",id:"flip",children:[],level:3},{value:"fromExecution",id:"fromexecution",children:[],level:3},{value:"fromFalsy",id:"fromfalsy",children:[],level:3},{value:"fromNullable",id:"fromnullable",children:[],level:3},{value:"fromPredicate",id:"frompredicate",children:[],level:3},{value:"fromPromise",id:"frompromise",children:[],level:3},{value:"getExn",id:"getexn",children:[],level:3},{value:"getWithDefault",id:"getwithdefault",children:[],level:3},{value:"handleError",id:"handleerror",children:[],level:3},{value:"isError",id:"iserror",children:[],level:3},{value:"isOk",id:"isok",children:[],level:3},{value:"map",id:"map",children:[],level:3},{value:"mapError",id:"maperror",children:[],level:3},{value:"mapWithDefault",id:"mapwithdefault",children:[],level:3},{value:"match",id:"match",children:[],level:3},{value:"recover",id:"recover",children:[],level:3},{value:"tap",id:"tap",children:[],level:3},{value:"tapError",id:"taperror",children:[],level:3},{value:"toNullable",id:"tonullable",children:[],level:3},{value:"toOption",id:"tooption",children:[],level:3},{value:"toUndefined",id:"toundefined",children:[],level:3}],p={toc:u};function i(e){var n=e.components,l=(0,t.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"catcherror"},"catchError"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"mapFn(err)")," when ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," is of the form ",(0,a.kt)("inlineCode",{parentName:"p"},"Error(err)"),", otherwise, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," unchanged."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function catchError<A, B, C>(result: Result<A, B>, mapFn: (err: B) => Result<A, C>): Result<A, C>\nfunction catchError<A, B, C>(mapFn: (err: B) => Result<A, C>): (result: Result<A, B>) => Result<A, C>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// type User = { name: string, age: number } | null\npipe(\n  // \u2b07\ufe0f const obj: User = { name: 'Joe', age: 20 }\n  R.fromNullable(obj, 'unknown'),\n  R.catchError(err => {\n    return R.Ok({\n      name: err,\n      age: 0,\n    })\n  }),\n  R.map(obj => obj.name),\n) // \u2192 Ok('Joe')\n\npipe(\n  // \u2b07\ufe0f const obj: User = null\n  R.fromNullable(obj, 'unknown'),\n  R.catchError(err => {\n    return R.Error(`${err} value`)\n  }),\n  R.map(obj => obj.name),\n) // \u2192 Error('unknown value')\n")),(0,a.kt)("h3",{id:"flatmap"},"flatMap"),(0,a.kt)("p",null,"Returns the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"mapFn")," (it must have a return type of ",(0,a.kt)("inlineCode",{parentName:"p"},"Result"),") if ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok(value)"),", otherwise, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," unchanged."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function flatMap<A, B, C>(result: Result<A, B>, mapFn: (value: A) => Result<C, B>): Result<C, B>\nfunction flatMap<A, B, C>(mapFn: (value: A) => Result<C, B>): (result: Result<A, B>) => Result<C, B>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n  R.fromNullable(4, 'value cannot be nullable'),\n  R.flatMap(value => {\n    return value === 0\n      ? R.Error('never divide by zero')\n      : R.Ok(100 / value)\n  }),\n) // \u2192 Ok(25)\n\npipe(\n  R.fromNullable(null, 'value cannot be nullable'),\n  R.flatMap(value => {\n    return value === 0\n      ? R.Error('never divide by zero')\n      : R.Ok(100 / value)\n  }),\n) // \u2192 Error('value cannot be nullable')\n\npipe(\n  R.fromNullable(0, 'value cannot be nullable'),\n  R.flatMap(value => {\n    return value === 0\n      ? R.Error('never divide by zero')\n      : R.Ok(100 / value)\n  }),\n) // \u2192 Error('never divide by zero')\n")),(0,a.kt)("h3",{id:"flip"},"flip"),(0,a.kt)("p",null,"Swaps the values between the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function flip<A, B>(result: Result<A, B>): Result<B, A>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// type Value = string | null\npipe(\n  // \u2b07\ufe0f const value: Value = 'Joe'\n  R.fromNullable(value, 'value cannot be nullable'),\n  R.flip,\n) // \u2192 Error('Joe')\n\n// type Value = string | null\npipe(\n  // \u2b07\ufe0f const value: Value = null\n  R.fromNullable(value, 'value cannot be nullable'),\n  R.flip,\n) // \u2192 Ok('value cannot be nullable')\n")),(0,a.kt)("h3",{id:"fromexecution"},"fromExecution"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok(value)")," (",(0,a.kt)("inlineCode",{parentName:"p"},"value")," is the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"fn"),") if ",(0,a.kt)("inlineCode",{parentName:"p"},"fn")," didn't throw an error, otherwise, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Error(err)"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function fromExecution<A>(fn: () => A): Result<ExtractValue<A>, globalThis.Error>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type User = { readonly name: string }\nconst parseJSON = <T>(value: string) => () => JSON.parse(value) as T\nconst okJSON = `{"name": "John"}`\nconst badJSON = `{name": John}`\n\nR.fromExecution(parseJSON<User>(okJSON)) // \u2192 Ok({ name: \'John\' })\n\nR.fromExecution(parseJSON<User>(badJSON)) // \u2192 Error(new SyntaxError(\'Unexpected token n in JSON at position 1\'))\n')),(0,a.kt)("h3",{id:"fromfalsy"},"fromFalsy"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok(value)")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," is not falsy, otherwise, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Error(errorValue)"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function fromFalsy<A, B>(value: A, errorValue: NonNullable<B>): Result<ExtractValue<A>, B>\nfunction fromFalsy<A, B>(errorValue: NonNullable<B>): (value: A) => Result<ExtractValue<A>, B>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"R.fromFalsy(4, 'falsy') // \u2192 Ok(4)\nR.fromFalsy([], 'falsy') // \u2192 Ok([])\nR.fromFalsy({}, 'falsy') // \u2192 Ok({})\nR.fromFalsy(0, 'falsy') // \u2192 Error('falsy')\nR.fromFalsy('', 'falsy') // \u2192 Error('falsy')\nR.fromFalsy(false, 'falsy') // \u2192 Error('falsy')\n")),(0,a.kt)("h3",{id:"fromnullable"},"fromNullable"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok(value)")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," is non-nullable, otherwise, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Error(errorValue)"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function fromNullable<A, B>(value: A, errorValue: NonNullable<B>): Result<ExtractValue<A>, B>\nfunction fromNullable<A, B>(errorValue: NonNullable<B>): (value: A) => Result<ExtractValue<A>, B>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"R.fromNullable(null, 'nullable') // \u2192 Error('nullable')\nR.fromNullable(undefined, 'nullable') // \u2192 Error('nullable')\nR.fromNullable([], 'nullable') // \u2192 Ok([])\nR.fromNullable({}, 'nullable') // \u2192 Ok({})\nR.fromNullable(0, 'nullable') // \u2192 Ok(0)\nR.fromNullable(1, 'nullable') // \u2192 Ok(1)\nR.fromNullable(false, 'nullable') // \u2192 Ok(false)\n")),(0,a.kt)("h3",{id:"frompredicate"},"fromPredicate"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok(value)")," if the predicate function returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", otherwise, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Error(errorValue)"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function fromPredicate<A, B>(\n    value: A,\n    predicateFn: (value: NonNullable<A>) => boolean,\n    errorValue: NonNullable<B>\n): Result<ExtractValue<A>, B>\nfunction fromPredicate<A, B>(\n    predicateFn: (value: NonNullable<A>) => boolean,\n    errorValue: NonNullable<B>\n): (value: A) => Result<ExtractValue<A>, B>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"R.fromPredicate(\n  [1, 2, 3],\n  A.some(x => x === 2),\n  'value not found',\n) // \u2192 Ok([1, 2, 3])\n\nR.fromPredicate(\n  [1, 2, 3],\n  A.some(x => x === 4),\n  'value not found',\n) // \u2192 Error('value not found')\n")),(0,a.kt)("h3",{id:"frompromise"},"fromPromise"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok(value)")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"promise")," is resolved successfully, otherwise, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Error(err)"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function fromPromise<A>(promise: Promise<A>): Promise<Result<ExtractValue<A>, globalThis.Error>>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"await R.fromPromise(Promise.resolve('hello world')) // \u2192 Ok('hello world')\nawait R.fromPromise(Promise.reject('oops')) // \u2192 Error('oops')\n")),(0,a.kt)("h3",{id:"getexn"},"getExn"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok(value)"),", otherwise, throws an exception."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function getExn<A, B>(result: Result<A, B>): A | never\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n  R.fromNullable('hello', 'oops!'),\n  R.map(value => `${value} world!`),\n  R.getExn,\n) // \u2192 'hello world!'\n")),(0,a.kt)("h3",{id:"getwithdefault"},"getWithDefault"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok(value)"),", otherwise, returns a default value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function getWithDefault<A, B>(result: Result<A, B>, defaultValue: NonNullable<A>): A\nfunction getWithDefault<A, B>(defaultValue: NonNullable<A>): (result: Result<A, B>) => A\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n  R.fromNullable('hello', 'oops!'),\n  R.map(value => `${value} world!`),\n  R.getWithDefault('error'),\n) // \u2192 'hello world!'\n\npipe(\n  R.fromNullable(null, 'oops!'),\n  R.map(value => `${value} world!`),\n  R.getWithDefault('error'),\n) // \u2192 'error'\n")),(0,a.kt)("h3",{id:"handleerror"},"handleError"),(0,a.kt)("p",null,"Converts errors into successful values, and returns a Result where the error channel is voided, to indicate that the error has been handled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function handleError<A, B>(result: Result<A, B>, mapFn: (err: B) => NonNullable<A>): Result<A, void>\nfunction handleError<A, B>(mapFn: (err: B) => NonNullable<A>): (result: Result<A, B>) => Result<A, void>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// type User = { name: string, age: number } | null\npipe(\n  // \u2b07\ufe0f const obj: User = { name: 'Joe', age: 20 }\n  R.fromNullable(obj, 'unknown'),\n  R.handleError(err => {\n    return {\n      name: err,\n      age: 0,\n    }\n  }),\n  R.map(obj => obj.name),\n) // \u2192 Ok('Joe')\n\npipe(\n  // \u2b07\ufe0f const obj: User = null\n  R.fromNullable(obj, 'unknown'),\n  R.handleError(err => {\n    return {\n      name: err,\n      age: 0,\n    }\n  }),\n  R.map(obj => obj.name),\n) // \u2192 Ok('unknown')\n")),(0,a.kt)("h3",{id:"iserror"},"isError"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"Error(errorValue)"),", otherwise, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function isError<A, B>(result: Result<A, B>): result is Error<B>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"R.isError(R.Error('bad')) // \u2192 true\npipe(R.fromNullable(null, 'error'), R.isError) // \u2192 true\nR.isError(R.Ok('good')) // \u2192 false\npipe(R.fromNullable(4, 'error'), R.isError) // \u2192 false\n")),(0,a.kt)("h3",{id:"isok"},"isOk"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok(value)"),", otherwise, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function isOk<A, B>(result: Result<A, B>): result is Ok<A>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"R.isOk(R.Ok('good')) // \u2192 true\npipe(R.fromNullable(4, 'error'), R.isOk) // \u2192 true\nR.isOk(R.Error('bad')) // \u2192 false\npipe(R.fromNullable(null, 'error'), R.isOk) // \u2192 false\n")),(0,a.kt)("h3",{id:"map"},"map"),(0,a.kt)("p",null,"Returns the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"mapFn")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok(value)"),", otherwise, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Error(errorValue)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"mapFn")," is not called."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function map<A, B, R>(result: Result<A, B>, mapFn: (value: A) => NonNullable<R>): Result<R, B>\nfunction map<A, B, R>(mapFn: (value: A) => NonNullable<R>): (result: Result<A, B>) => Result<R, B>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// type User = { name: string | null, age: number } | null\npipe(\n  // \u2b07\ufe0f const obj: User = { name: 'Joe', age: 20 }\n  R.fromNullable(obj, 'cannot be nullable'),\n  R.flatMap(obj => {\n    return G.isNotNullable(obj.name) ? R.Ok(obj) : R.Error('missing name')\n  }),\n  R.map(obj => `${obj.name} is ${obj.age} year old!`),\n) // \u2192 Ok('Joe is 20 year old!')\n\npipe(\n  // \u2b07\ufe0f const obj: User = { name: null, age: 20 }\n  R.fromNullable(obj, 'cannot be nullable'),\n  R.flatMap(obj => {\n    return G.isNotNullable(obj.name) ? R.Ok(obj) : R.Error('missing name')\n  }),\n  R.map(obj => `${obj.name} is ${obj.age} year old!`),\n) // \u2192 Error('missing name')\n\npipe(\n  // \u2b07\ufe0f const obj: User = null\n  R.fromNullable(obj, 'cannot be nullable'),\n  R.flatMap(obj => {\n    return G.isNotNullable(obj.name) ? R.Ok(obj) : R.Error('missing name')\n  }),\n  R.map(obj => `${obj.name} is ${obj.age} year old!`),\n) // \u2192 Error('cannot be nullable')\n")),(0,a.kt)("h3",{id:"maperror"},"mapError"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," unchanged if ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," is of the form ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok"),", otherwise, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Error(mapFn(err))"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function mapError<A, B, C>(result: Result<A, B>, mapFn: (err: B) => NonNullable<C>): Result<A, C>\nfunction mapError<A, B, C>(mapFn: (err: B) => NonNullable<C>): (result: Result<A, B>) => Result<A, C>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// type User = { name: string, age: number } | null\npipe(\n  // \u2b07\ufe0f const obj: User = { name: 'Joe', age: 20 }\n  R.fromNullable(obj, 'unknown'),\n  R.mapError(err => {\n    return `${err} value`\n  }),\n  R.map(obj => obj.name),\n) // \u2192 Ok('Joe')\n\npipe(\n  // \u2b07\ufe0f const obj: User = null\n  R.fromNullable(obj, 'unknown'),\n  R.mapError(err => {\n    return `${err} value`\n  }),\n  R.map(obj => obj.name),\n) // \u2192 Error('unknown value')\n")),(0,a.kt)("h3",{id:"mapwithdefault"},"mapWithDefault"),(0,a.kt)("p",null,"Returns the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"mapFn")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok(value)"),", otherwise returns a default value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function mapWithDefault<A, B, R>(\n    result: Result<A, B>,\n    defaultValue: NonNullable<R>,\n    mapFn: (value: A) => NonNullable<R>\n): R\nfunction mapWithDefault<A, B, R>(defaultValue: NonNullable<R>, mapFn: (value: A) => NonNullable<R>): (result: Result<A, B>) => R\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// type Name = string | null\npipe(\n  // \u2b07\ufe0f const name: Name = 'Joe'\n  R.fromNullable(name, 'cannot be nullable'),\n  R.mapWithDefault('Hello, stranger!', name => `Hello, ${name}!`),\n) // \u2192 'Hello, Joe!'\n\npipe(\n  // \u2b07\ufe0f const name: Name = null\n  R.fromNullable(name, 'cannot be nullable'),\n  R.mapWithDefault('Hello, stranger!', name => `Hello, ${name}!`),\n) // \u2192 'Hello, stranger!'\n")),(0,a.kt)("h3",{id:"match"},"match"),(0,a.kt)("p",null,"Returns the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"okFn")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok(value)"),", otherwise, returns the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"errorFn"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function match<A, B, R>(result: Result<A, B>, okFn: (value: A) => R, errorFn: (value: B) => R): R\nfunction match<A, B, R>(okFn: (value: A) => R, errorFn: (value: B) => R): (result: Result<A, B>) => R\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// type Elements = ReadonlyArray<string> | null\npipe(\n  // \u2b07\ufe0f const xs: Elements = ['hello', 'world']\n  R.fromNullable(xs, 'cannot be nullable'),\n  R.map(A.join(' ')),\n  R.match(\n    str => `${str}!`,\n    () => 'oops!',\n  ),\n) // \u2192 'hello world!'\n\npipe(\n  // \u2b07\ufe0f const xs: Elements = null\n  R.fromNullable(xs, 'cannot be nullable'),\n  R.map(A.join(' ')),\n  R.match(\n    str => `${str}!`,\n    error => `${error}!`,\n  ),\n) // \u2192 'cannot be nullable!'\n")),(0,a.kt)("h3",{id:"recover"},"recover"),(0,a.kt)("p",null,"Ensures that the returned result is ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," by returning the provided result if it's already ","[Ok]",", or by falling back to the default value, which will be wrapped in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," constructor, if the provided result is an ",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function recover<A, B>(result: Result<A, B>, defaultValue: NonNullable<A>): Result<A, B>\nfunction recover<A, B>(defaultValue: NonNullable<A>): (result: Result<A, B>) => Result<A, B>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// type User = { name: string | null, age: number } | null\npipe(\n  // \u2b07\ufe0f const obj: User = { name: 'Joe', age: 20 }\n  R.fromNullable(obj, 'value cannot be nullable'),\n  R.flatMap(obj => {\n    return obj.name ? R.Ok(obj.name) : R.Error('name not found')\n  }),\n  R.recover('unknown name'),\n) // \u2192 Ok('Joe')\n\npipe(\n  // \u2b07\ufe0f const obj: User = { name: null, age: 20 }\n  R.fromNullable(obj, 'value cannot be nullable'),\n  R.flatMap(obj => {\n    return obj.name ? R.Ok(obj.name) : R.Error('name not found')\n  }),\n  R.recover('unknown name'),\n) // \u2192 Ok('unknown name')\n")),(0,a.kt)("h3",{id:"tap"},"tap"),(0,a.kt)("p",null,"Applies a side-effect function to the value in ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok"),", and returns the original ",(0,a.kt)("inlineCode",{parentName:"p"},"result"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function tap<A, B>(result: Result<A, B>, okFn: (value: A) => void): Result<A, B>\nfunction tap<A, B>(okFn: (value: A) => void): (result: Result<A, B>) => Result<A, B>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n  R.fromNullable('hello', 'value cannot be nullable'),\n  R.map(S.isEmpty),\n  R.tap(isEmpty => {\n    console.log(isEmpty) // \u2b05\ufe0f false\n  }),\n  R.getWithDefault(false),\n) // \u2192 false\n")),(0,a.kt)("h3",{id:"taperror"},"tapError"),(0,a.kt)("p",null,"Applies a side-effect function to the value in ",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),", and returns the original ",(0,a.kt)("inlineCode",{parentName:"p"},"result"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function tapError<A, B>(result: Result<A, B>, errorFn: (err: B) => void): Result<A, B>\nfunction tapError<A, B>(errorFn: (err: B) => void): (result: Result<A, B>) => Result<A, B>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n  R.fromNullable(null, 'value cannot be nullable'),\n  R.tapError(err => {\n    console.log(err) // \u2b05\ufe0f 'value cannot be nullable'\n  }),\n  R.getWithDefault(false),\n) // \u2192 false\n")),(0,a.kt)("h3",{id:"tonullable"},"toNullable"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok(value)"),", otherwise, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function toNullable<A, B>(result: Result<A, B>): A | null\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n  R.fromNullable(['hello', 'world', 'ts', 'belt'], 'cannot be nullable'),\n  R.flatMap(xs => {\n    return pipe(xs, A.dropExactly(2), O.toResult('array is empty'))\n  }),\n  R.map(A.join('-')),\n  R.toNullable,\n) // \u2192 'ts-belt'\n\npipe(\n  R.fromNullable([], 'cannot be nullable'),\n  R.flatMap(xs => {\n    return pipe(xs, A.dropExactly(2), O.toResult('array is empty'))\n  }),\n  R.map(A.join('-')),\n  R.toNullable,\n) // \u2192 null\n")),(0,a.kt)("h3",{id:"tooption"},"toOption"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Some(value)")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok(value)"),", otherwise, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"None"),", both ",(0,a.kt)("inlineCode",{parentName:"p"},"Some")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"None")," come from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Option")," type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function toOption<A, B>(result: Result<A, B>): Option<A>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// type Data = { names: string } | null\npipe(\n  // \u2b07\ufe0f const obj: Data = { names: 'hello,world,ts,belt' }\n  R.fromNullable(obj, 'cannot be nullable'), // \u2192 Ok({ names: 'hello,world,ts,belt' })\n  R.map(D.getUnsafe('names')), // \u2192 Ok('hello,world,ts,belt')\n  R.map(S.split(',')), // \u2192 Ok(['hello', 'world', 'ts', 'belt'])\n  R.toOption, // \u2192 Some(['hello', 'world', 'ts', 'belt'])\n  O.flatMap(A.dropExactly(2)), // \u2192 Some(['ts', 'belt'])\n  O.map(A.join('-')), // \u2192 Some('ts-belt')\n  O.getWithDefault('nothing found'), // \u2192 ts-belt\n) // \u2192 'ts-belt'\n\npipe(\n  // \u2b07\ufe0f const obj: Data = null\n  R.fromNullable(obj, 'cannot be nullable'), // \u2192 Error('cannot be nullable')\n  R.map(D.getUnsafe('names')), // \u2192 Error('cannot be nullable')\n  R.map(S.split(',')), // \u2192 Error('cannot be nullable')\n  R.toOption, // \u2192 None\n  O.flatMap(A.dropExactly(2)), // \u2192 None\n  O.map(A.join('-')), // \u2192 None\n  O.getWithDefault('nothing found'), // \u2192 nothing found\n) // \u2192 'nothing found'\n")),(0,a.kt)("h3",{id:"toundefined"},"toUndefined"),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok(value)"),", otherwise, returns ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function toUndefined<A, B>(result: Result<A, B>): A | undefined\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n  R.fromNullable(['hello', 'world', 'ts', 'belt'], 'cannot be nullable'),\n  R.flatMap(xs => {\n    return pipe(xs, A.dropExactly(2), O.toResult('array is empty'))\n  }),\n  R.map(A.join('-')),\n  R.toUndefined,\n) // \u2192 'ts-belt'\n\npipe(\n  R.fromNullable([], 'cannot be nullable'),\n  R.flatMap(xs => {\n    return pipe(xs, A.dropExactly(2), O.toResult('array is empty'))\n  }),\n  R.map(A.join('-')),\n  R.toUndefined,\n) // \u2192 undefined\n")))}i.isMDXComponent=!0;var s=["components"],m={id:"result",title:"Result"},c=void 0,d={unversionedId:"result",id:"result",title:"Result",description:"Result type is really useful to describe the result of a certain operation without relying on exceptions.",source:"@site/api/result.mdx",sourceDirName:".",slug:"/result",permalink:"/ts-belt/api/result",tags:[],version:"current",frontMatter:{id:"result",title:"Result"},sidebar:"sidebar",previous:{title:"Option",permalink:"/ts-belt/api/option"},next:{title:"String",permalink:"/ts-belt/api/string"}},k=u,f={toc:k};function N(e){var n=e.components,l=(0,t.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Result")," type is really useful to describe the result of a certain operation without relying on exceptions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type Result<A, B> = Ok<A> | Error<B>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function() {\n  const obj = {\n    // \u2b07\ufe0f update the value below to either greater than 0 or `null/undefined` in order to see changes\n    value: 0,\n  }\n  const value = pipe(\n    R.fromNullable(obj.value, 'value cannot be nullable!'),\n    R.flatMap(value => {\n      return value === 0 ? R.Error('never divide by zero!') : R.Ok(100 / value)\n    }),\n    R.match(value => `100 / ${obj.value} = ${value}`, err => err),\n  )\n\n  return value\n}\n")),(0,a.kt)(i,{mdxType:"Result"}))}N.isMDXComponent=!0}}]);