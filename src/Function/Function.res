let identity = value => value
let equals = (x, y) => y == x
let both = (fn0, fn1, value) => fn0(value) && fn1(value)
let either = (fn0, fn1, value) => fn0(value) || fn1(value)
let always = (value, . ()) => value
let defaultTo = (defaultValue, value) => Js.Nullable.isNullable(value) ? defaultValue : value
let falsy = always(false)
let truthy = always(true)
let ifElse = (predicateFn, trueFn, falseFn, value) =>
  predicateFn(value) ? trueFn(value) : falseFn(value)
let ignore = () => ()
let unless = (predicateFn, falseFn, value) => !predicateFn(value) ? falseFn(value) : value
let when_ = (predicateFn, trueFn, value) => predicateFn(value) ? trueFn(value) : value
let allPass = (fns, value) => Belt.Array.everyU(fns, (. fn) => fn(value))
let anyPass = (fns, value) => Belt.Array.someU(fns, (. fn) => fn(value))
