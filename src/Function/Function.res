export identity = value => value

export equals = (fst, snd) => fst == snd

export both = (value, fn0, fn1) => fn0(value) && fn1(value)

export either = (value, fn0, fn1) => fn0(value) || fn1(value)

export always = (value, . ()) => value

export defaultTo = (value, defaultValue) => Js.Nullable.isNullable(value) ? defaultValue : value

export falsy = always(false)

export truthy = always(true)

export ifElse = (value, predicateFn, truthyFn, falsyFn) =>
  predicateFn(value) ? truthyFn(value) : falsyFn(value)

export ignore = () => ()

export unless = (value, predicateFn, falsyFn) => !predicateFn(value) ? falsyFn(value) : value

export when_ = (value, predicateFn, truthyFn) => predicateFn(value) ? truthyFn(value) : value

export allPass = (value, fns) => Belt.Array.everyU(fns, (. fn) => fn(value))

export anyPass = (value, fns) => Belt.Array.someU(fns, (. fn) => fn(value))

export pred = n => pred(n)

export succ = n => succ(n)
