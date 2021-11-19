@gentype
let identity = value => value

@gentype
let equals = (fst, snd) => fst == snd

@gentype
let both = (value, fn0, fn1) => fn0(value) && fn1(value)

@gentype
let either = (value, fn0, fn1) => fn0(value) || fn1(value)

@gentype
let always = (value, . ()) => value

@gentype
let defaultTo = (value, defaultValue) => Js.Nullable.isNullable(value) ? defaultValue : value

@gentype
let falsy = always(false)

@gentype
let truthy = always(true)

@gentype
let ifElse = (value, predicateFn, truthyFn, falsyFn) =>
  predicateFn(value) ? truthyFn(value) : falsyFn(value)

@gentype
let ignore = () => ()

@gentype
let unless = (value, predicateFn, falsyFn) => !predicateFn(value) ? falsyFn(value) : value

@gentype
let when_ = (value, predicateFn, truthyFn) => predicateFn(value) ? truthyFn(value) : value

@gentype
let allPass = (value, fns) => Belt.Array.everyU(fns, (. fn) => fn(value))

@gentype
let anyPass = (value, fns) => Belt.Array.someU(fns, (. fn) => fn(value))

@gentype
let pred = n => pred(n)

@gentype
let succ = n => succ(n)
