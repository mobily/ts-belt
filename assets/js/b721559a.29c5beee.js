"use strict";(self.webpackChunkts_belt_docs=self.webpackChunkts_belt_docs||[]).push([[911],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(k,l(l({ref:n},c),{},{components:t})):a.createElement(k,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3270:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>d,default:()=>f,frontMatter:()=>u,metadata:()=>m,toc:()=>k});var a=t(3117),o=t(102),r=(t(7294),t(3905)),l=["components"],i=[{value:"deleteKey",id:"deletekey",children:[],level:3},{value:"deleteKeys",id:"deletekeys",children:[],level:3},{value:"filter",id:"filter",children:[],level:3},{value:"filterWithKey",id:"filterwithkey",children:[],level:3},{value:"fromPairs",id:"frompairs",children:[],level:3},{value:"get",id:"get",children:[],level:3},{value:"getUnsafe",id:"getunsafe",children:[],level:3},{value:"isEmpty",id:"isempty",children:[],level:3},{value:"isNotEmpty",id:"isnotempty",children:[],level:3},{value:"keys",id:"keys",children:[],level:3},{value:"makeEmpty",id:"makeempty",children:[],level:3},{value:"map",id:"map",children:[],level:3},{value:"mapWithKey",id:"mapwithkey",children:[],level:3},{value:"merge",id:"merge",children:[],level:3},{value:"prop",id:"prop",children:[],level:3},{value:"reject",id:"reject",children:[],level:3},{value:"rejectWithKey",id:"rejectwithkey",children:[],level:3},{value:"selectKeys",id:"selectkeys",children:[],level:3},{value:"set",id:"set",children:[],level:3},{value:"toPairs",id:"topairs",children:[],level:3},{value:"update",id:"update",children:[],level:3},{value:"updateUnsafe",id:"updateunsafe",children:[],level:3},{value:"values",id:"values",children:[],level:3}],s={toc:i};function p(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"deletekey"},"deleteKey"),(0,r.kt)("p",null,"Returns a new object with the provided key deleted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function deleteKey<T, K extends keyof T>(dict: T, key: K): Omit<T, K>\nfunction deleteKey<T, K extends keyof T>(key: K): (dict: T) => Omit<T, K>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.deleteKey({ name: 'Joe', location: 'Warsaw' }, 'location') // \u2192 { name: 'Joe' }\npipe({ name: 'Joe', location: 'Warsaw' }, D.deleteKey('location')) // \u2192 { name: 'Joe' }\n")),(0,r.kt)("h3",{id:"deletekeys"},"deleteKeys"),(0,r.kt)("p",null,"Returns a new object with the provided keys deleted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function deleteKeys<T, K extends keyof T>(dict: T, keys: ReadonlyArray<K>): Omit<T, K>\nfunction deleteKeys<T, K extends keyof T>(keys: ReadonlyArray<K>): (dict: T) => Omit<T, K>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.deleteKeys({ name: 'Joe', location: 'Warsaw' }, []) // \u2192 {\n  name: 'Joe',\n  location: 'Warsaw',\n}\nD.deleteKeys({ name: 'Joe', location: 'Warsaw' }, ['name']) // \u2192 { location: 'Warsaw' }\nD.deleteKeys({ name: 'Joe', location: 'Warsaw' }, ['name', 'location']) // \u2192 {}\npipe({ name: 'Joe', location: 'Warsaw' }, D.deleteKeys([])) // \u2192 {\n  name: 'Joe',\n  location: 'Warsaw',\n}\npipe({ name: 'Joe', location: 'Warsaw' }, D.deleteKeys(['name'])) // \u2192 { location: 'Warsaw' }\npipe(\n  { name: 'Joe', location: 'Warsaw' },\n  D.deleteKeys(['name', 'location']),\n) // \u2192 {}\n")),(0,r.kt)("h3",{id:"filter"},"filter"),(0,r.kt)("p",null,"Removes each property that doesn't satisfy the given predicate function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function filter<T extends Record<string, any>>(dict: T, predicateFn: (value: T[keyof T]) => boolean): Partial<T>\nfunction filter<T extends Record<string, any>>(predicateFn: (value: T[keyof T]) => boolean): (dict: T) => Partial<T>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.filter({ name: 'Joe', age: 20 }, value => value === 20) // \u2192 { age: 20 }\npipe(\n  {\n    name: 'Joe',\n    age: 20,\n  },\n  D.filter(value => value === 'Joe'),\n) // \u2192 { name: 'Joe' }\n")),(0,r.kt)("h3",{id:"filterwithkey"},"filterWithKey"),(0,r.kt)("p",null,"Removes each property that doesn't satisfy the given predicate function (which takes two arguments: a property value and key)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function filterWithKey<T extends Record<string, any>>(dict: T, predicateFn: (key: keyof T, value: T[keyof T]) => boolean): Partial<T>\nfunction filterWithKey<T extends Record<string, any>>(predicateFn: (key: keyof T, value: T[keyof T]) => boolean): (dict: T) => Partial<T>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.filterWithKey(\n  { name: 'Joe', age: 20 },\n  (key, value) => value === 30 && key === 'age',\n) // \u2192 {}\n\npipe(\n  {\n    name: 'Joe',\n    age: 20,\n  },\n  D.filterWithKey((key, _) => key === 'name'),\n) // \u2192 { name: 'Joe' }\n")),(0,r.kt)("h3",{id:"frompairs"},"fromPairs"),(0,r.kt)("p",null,"Creates a new object from an array of tuples (",(0,r.kt)("inlineCode",{parentName:"p"},"[key, value]"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function fromPairs<T, K extends keyof any>(xs: Array<readonly [K, T]>): Record<K, T>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.fromPairs([\n  ['name', 'Joe'],\n  ['location', 'Warsaw'],\n]) // \u2192 { name: 'Joe', location: 'Warsaw' }\n\npipe(\n  [A.toTuple(['name', 'Joe']), A.toTuple(['location', 'Warsaw'])],\n  D.fromPairs,\n) // \u2192 { name: 'Joe', location: 'Warsaw' }\n")),(0,r.kt)("h3",{id:"get"},"get"),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"Some(value)")," if the given key exists, otherwise returns ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function get<T, K extends keyof T>(dict: T, key: K): Option<T[K]>\nfunction get<T, K extends keyof T>(key: K): (dict: T) => Option<T[K]>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.get({ name: 'Joe', location: 'Warsaw' }, 'location') // \u2192 Some('Warsaw')\npipe({ name: 'Joe', location: 'Warsaw' }, D.get('location')) // \u2192 Some('Warsaw')\npipe([{ name: 'Joe' }, { location: 'Warsaw' }], A.map(D.get('name'))) // \u2192 [Some('Joe'), None]\n")),(0,r.kt)("h3",{id:"getunsafe"},"getUnsafe"),(0,r.kt)("p",null,"Returns the value if the given key exists, otherwise returns ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function getUnsafe<T, K extends keyof T>(dict: T, key: K): T[K]\nfunction getUnsafe<T, K extends keyof T>(key: K): (dict: T) => T[K]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.getUnsafe({ name: 'Joe', location: 'Warsaw' }, 'location') // \u2192 'Warsaw'\npipe({ name: 'Joe', location: 'Warsaw' }, D.getUnsafe('location')) // \u2192 'Warsaw'\npipe(\n  [{ name: 'Joe' }, { location: 'Warsaw' }],\n  A.map(D.getUnsafe('name')),\n) // \u2192 ['Joe', undefined]\n")),(0,r.kt)("h3",{id:"isempty"},"isEmpty"),(0,r.kt)("p",null,"Determines whether the given object is empty."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function isEmpty<T extends Record<string, any>>(dict: T): boolean\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.isEmpty({ name: 'Joe', age: 20 }) // \u2192 false\nD.isEmpty({}) // \u2192 true\npipe(\n  {\n    name: 'Joe',\n    age: 20,\n  },\n  D.isEmpty,\n) // \u2192 false\n\npipe({}, D.isEmpty) // \u2192 true\n")),(0,r.kt)("h3",{id:"isnotempty"},"isNotEmpty"),(0,r.kt)("p",null,"Determines whether the given object is not empty."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function isNotEmpty<T extends Record<string, any>>(dict: T): boolean\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.isNotEmpty({ name: 'Joe', age: 20 }) // \u2192 true\nD.isNotEmpty({}) // \u2192 false\npipe(\n  {\n    name: 'Joe',\n    age: 20,\n  },\n  D.isNotEmpty,\n) // \u2192 true\n\npipe({}, D.isNotEmpty) // \u2192 false\n")),(0,r.kt)("h3",{id:"keys"},"keys"),(0,r.kt)("p",null,"Returns a new array that contains all keys of the provided object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function keys<T extends Record<string, unknown>>(dict: T): Array<keyof T>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.keys({\n  name: 'Joe',\n  age: 20,\n}) // \u2192 ['name', 'age']\n\npipe(\n  {\n    name: 'Joe',\n    age: 20,\n  },\n  D.keys,\n) // \u2192 ['name', 'age']\n")),(0,r.kt)("h3",{id:"makeempty"},"makeEmpty"),(0,r.kt)("p",null,"Creates an empty object. Alternative for ",(0,r.kt)("inlineCode",{parentName:"p"},"const obj = {} as SomeObjectType"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function makeEmpty<T>(): T\n")),(0,r.kt)("h3",{id:"map"},"map"),(0,r.kt)("p",null,"Transforms each value in the object to a new value using the provided function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function map<T extends Record<string, any>, R>(dict: T, mapFn: (value: T[keyof T]) => R): Record<keyof T, R>\nfunction map<T extends Record<string, any>, R>(mapFn: (value: T[keyof T]) => R): (dict: T) => Record<keyof T, R>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.map(\n  {\n    name: 'Joe',\n    location: 'Warsaw',\n  },\n  value => value.length,\n) // \u2192 { name: 3, location: 6 }\n\npipe(\n  {\n    name: 'Joe',\n    location: 'Warsaw',\n  },\n  D.map(value => value.length),\n) // \u2192 { name: 3, location: 6 }\n")),(0,r.kt)("h3",{id:"mapwithkey"},"mapWithKey"),(0,r.kt)("p",null,"Transforms each value in the object to a new value using the provided function (which takes two arguments: a property value and key)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function mapWithKey<T extends Record<string, any>, R>(dict: T, mapFn: (key: keyof T, value: T[keyof T]) => R): Record<keyof T, R>\nfunction mapWithKey<T extends Record<string, any>, R>(mapFn: (key: keyof T, value: T[keyof T]) => R): (dict: T) => Record<keyof T, R>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.mapWithKey(\n  {\n    name: 'Joe',\n    location: 'Warsaw',\n  },\n  (key, value) => `${key}-${value.toLowerCase()}`,\n) // \u2192 { name: 'name-joe', location: 'location-warsaw' }\n\npipe(\n  {\n    name: 'Joe',\n    location: 'Warsaw',\n  },\n  D.mapWithKey((key, value) => `${key}-${value.toLowerCase()}`),\n) // \u2192 { name: 'name-joe', location: 'location-warsaw' }\n")),(0,r.kt)("h3",{id:"merge"},"merge"),(0,r.kt)("p",null,"Merges two provided objects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function merge<A, B>(fst: A, snd: B): A & B\nfunction merge<A, B>(snd: B): (fst: A) => A & B\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.merge({ x: 1, y: 2 }, { y: 3, z: 4 }) // \u2192 { x: 1, y: 3, z: 4 }\npipe({ x: 1, y: 2 }, D.merge({ y: 3, z: 4 })) // \u2192 { x: 1, y: 3, z: 4 }\n")),(0,r.kt)("h3",{id:"prop"},"prop"),(0,r.kt)("p",null,"@deprecated Use either ",(0,r.kt)("inlineCode",{parentName:"p"},"D.get")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"D.getUnsafe")," instead."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function prop<T, K extends keyof T>(dict: T, key: K): T[K]\nfunction prop<T, K extends keyof T>(key: K): (dict: T) => T[K]\n")),(0,r.kt)("h3",{id:"reject"},"reject"),(0,r.kt)("p",null,"Removes each property that satisfies the given predicate function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function reject<T extends Record<string, any>>(dict: T, predicateFn: (value: T[keyof T]) => boolean): Partial<T>\nfunction reject<T extends Record<string, any>>(predicateFn: (value: T[keyof T]) => boolean): (dict: T) => Partial<T>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.reject({ name: 'Joe', age: 20 }, value => value === 20) // \u2192 { name: 'Joe' }\npipe(\n  {\n    name: 'Joe',\n    age: 20,\n  },\n  D.reject(value => value === 'Joe'),\n) // \u2192 { age: 20 }\n")),(0,r.kt)("h3",{id:"rejectwithkey"},"rejectWithKey"),(0,r.kt)("p",null,"Removes each property that satisfies the given predicate function (which takes two arguments: a property value and key)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function rejectWithKey<T extends Record<string, any>>(dict: T, predicateFn: (key: keyof T, value: T[keyof T]) => boolean): Partial<T>\nfunction rejectWithKey<T extends Record<string, any>>(predicateFn: (key: keyof T, value: T[keyof T]) => boolean): (dict: T) => Partial<T>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.rejectWithKey(\n  { name: 'Joe', age: 20 },\n  (key, value) => value === 20 && key === 'age',\n) // \u2192 { name: 'Joe' }\n\npipe(\n  {\n    name: 'Joe',\n    age: 20,\n  },\n  D.rejectWithKey((key, _) => key === 'name'),\n) // \u2192 { age: 20 }\n")),(0,r.kt)("h3",{id:"selectkeys"},"selectKeys"),(0,r.kt)("p",null,"Returns a new object with the provided keys selected."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function selectKeys<T, K extends keyof T>(dict: T, keys: ReadonlyArray<K>): Pick<T, K>\nfunction selectKeys<T, K extends keyof T>(keys: ReadonlyArray<K>): (dict: T) => Pick<T, K>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.selectKeys({ name: 'Joe', location: 'Warsaw', age: 42 }, [\n  'name',\n  'age',\n]) // \u2192 { name: 'Joe', age: 42 }\n\n// \u2b07\ufe0f const obj: Record<string, string> = { name: 'Joe', location: 'Warsaw' }\nD.selectKeys(obj, ['name', 'age']) // \u2192 { name: 'Joe' }\n\npipe(\n  { name: 'Joe', location: 'Warsaw', age: 42 },\n  D.selectKeys(['name', 'age']),\n) // \u2192 { name: 'Joe', age: 42 }\n\n// \u2b07\ufe0f const obj: Record<string, string> = { name: 'Joe', location: 'Warsaw' }\npipe(obj, D.selectKeys(['name', 'age'])) // \u2192 { name: 'Joe' }\n")),(0,r.kt)("h3",{id:"set"},"set"),(0,r.kt)("p",null,"Adds a property. Equivalent to merging with ",(0,r.kt)("inlineCode",{parentName:"p"},"{key: value}")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function set<T, K extends string | number, V>(dict: T, key: K, value: V): T & Record<K, V>\nfunction set<T, K extends string | number, V>(key: K, value: V): (dict: T) => T & Record<K, V>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.set({ name: 'Joe', location: 'Warsaw' }, 'location', 'Gda\u0144sk') // \u2192 { name: 'Joe', location: 'Gda\u0144sk' }\nD.set({ 0: false, 1: true }, 1, 'abc') // \u2192 { 0: false, 1: 'abc' }\npipe({ name: 'Joe', location: 'Warsaw' }, D.set('location', 'Gda\u0144sk')) // \u2192 { name: 'Joe', location: 'Gda\u0144sk' }\npipe({ 0: false, 1: true }, D.set(1, 'abc')) // \u2192 { 0: false, 1: 'abc' }\n")),(0,r.kt)("h3",{id:"topairs"},"toPairs"),(0,r.kt)("p",null,"Converts an object into an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"[key, value]")," tuples."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function toPairs<T, K extends keyof any>(dict: Record<K, T>): Array<readonly [K, T]>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.toPairs({\n  name: 'Joe',\n  age: 20,\n}) // \u2192 [['name', 'Joe'], ['age', 20]]\n\npipe(\n  {\n    name: 'Joe',\n    age: 20,\n  },\n  D.toPairs,\n) // \u2192 [['name', 'Joe'], ['age', 20]]\n")),(0,r.kt)("h3",{id:"update"},"update"),(0,r.kt)("p",null,"Updates a property by applying the provided function to the corresponding optional value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function update<T, K extends keyof T, R>(dict: T, key: K, fn: (value: Option<T[K]>) => R): T & Record<K, R>\nfunction update<T, K extends keyof T, R>(key: K, fn: (value: Option<T[K]>) => R): (dict: T) => T & Record<K, R>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.update({ name: 'Joe', location: 'Warsaw' }, 'name', option =>\n  O.mapWithDefault(option, 'unknown', S.toUpperCase),\n) // \u2192 { name: 'JOE', location: 'Warsaw' }\n\n// \u2b07\ufe0f const obj: Record<string, string> = { name: 'Joe', location: 'Warsaw' }\nD.update(obj, 'key', option =>\n  O.mapWithDefault(option, 'unknown', S.toUpperCase),\n) // \u2192 { name: 'Joe', key: 'unknown', location: 'Warsaw' }\n\npipe(\n  { name: 'Joe', location: 'Warsaw' },\n  D.update('name', option =>\n    O.mapWithDefault(option, 'unknown', S.toUpperCase),\n  ),\n) // \u2192 { name: 'JOE', location: 'Warsaw' }\n\n// \u2b07\ufe0f const obj: Record<string, string> = { name: 'Joe', location: 'Warsaw' }\npipe(\n  obj,\n  D.update('key', option =>\n    O.mapWithDefault(option, 'unknown', S.toUpperCase),\n  ),\n) // \u2192 { name: 'Joe', key: 'unknown', location: 'Warsaw' }\n")),(0,r.kt)("h3",{id:"updateunsafe"},"updateUnsafe"),(0,r.kt)("p",null,"Updates a property by applying the provided function to the corresponding value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function updateUnsafe<T, K extends keyof T, R>(dict: T, key: K, fn: (value: T[K]) => R): T & Record<K, R>\nfunction updateUnsafe<T, K extends keyof T, R>(key: K, fn: (value: T[K]) => R): (dict: T) => T & Record<K, R>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.updateUnsafe(\n  { name: 'Joe', location: 'Warsaw' },\n  'name',\n  S.toUpperCase,\n) // \u2192 { name: 'JOE', location: 'Warsaw' }\n\nD.updateUnsafe({ 0: false, 1: true }, 1, B.inverse) // \u2192 { 0: false, 1: false }\npipe(\n  { name: 'Joe', location: 'Warsaw' },\n  D.updateUnsafe('name', S.toUpperCase),\n) // \u2192 { name: 'JOE', location: 'Warsaw' }\n\npipe({ 0: false, 1: true }, D.updateUnsafe(1, B.inverse)) // \u2192 { 0: false, 1: false }\n")),(0,r.kt)("h3",{id:"values"},"values"),(0,r.kt)("p",null,"Returns a new array that contains all values of the provided object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function values<T extends string | number, R>(dict: Record<T, R>): Array<R>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"D.values({\n  name: 'Joe',\n  age: 20,\n}) // \u2192 ['Joe', 20]\n\npipe(\n  {\n    name: 'Joe',\n    age: 20,\n  },\n  D.values,\n) // \u2192 ['Joe', 20]\n")))}p.isMDXComponent=!0;var c=["components"],u={id:"object",title:"Object (Dict)"},d=void 0,m={unversionedId:"object",id:"object",title:"Object (Dict)",description:"Utility functions for Object.",source:"@site/api/object.mdx",sourceDirName:".",slug:"/object",permalink:"/ts-belt/api/object",tags:[],version:"current",frontMatter:{id:"object",title:"Object (Dict)"},sidebar:"sidebar",previous:{title:"Number",permalink:"/ts-belt/api/number"},next:{title:"Option",permalink:"/ts-belt/api/option"}},k=i,y={toc:k};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Utility functions for ",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),"."),(0,r.kt)(p,{mdxType:"Dict"}))}f.isMDXComponent=!0}}]);