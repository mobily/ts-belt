open Externals

let placeholder = () => Js.Undefined.empty

%comment("Always returns the provided value, useful as a placeholder function.")
export identity = value => value

%comment("Returns `true` if provided values are equal, otherwise, returns `false`.")
export equals = (fst, snd) => fst == snd

%comment(
  "Calls the two provided functions and returns `&&` of the results → `fn0(value) && fn1(value)`."
)
export both = (value, fn0, fn1) => fn0(value) && fn1(value)

%comment(
  "Calls the two provided functions and returns `||` of the results → `fn0(value) || fn1(value)`."
)
export either = (value, fn0, fn1) => fn0(value) || fn1(value)

%comment("Returns a function that always returns the provided value.")
export always = (value, . ()) => value

%comment("Returns a default value if `value` is nullable.")
export defaultTo = (value, defaultValue) => Js.Nullable.isNullable(value) ? defaultValue : value

%comment("Always returns `false`.")
export falsy = always(false)

%comment("Always returns `true`.")
export truthy = always(true)

%comment(
  "Tests the given value by passing it to the predicate, if the predicate is satisfied, the function returns the result of `truthyFn`, otherwise, returns the result of `falsyFn`."
)
export ifElse = (value, predicateFn, truthyFn, falsyFn) =>
  predicateFn(value) ? truthyFn(value) : falsyFn(value)

%comment("Always returns `void`, useful as a placeholder function.")
export ignore = () => ()

%comment(
  "Tests the given value by passing it to the predicate, if the predicate is satisfied, the function returns `value`, otherwise, returns the result of `falsyFn`."
)
export unless = (value, predicateFn, falsyFn) => !predicateFn(value) ? falsyFn(value) : value

%comment(
  "Tests the given value by passing it to the predicate, if the predicate is satisfied, the function returns the result of `truthyFn`, otherwise, returns `value`."
)
export when_ = (value, predicateFn, truthyFn) => predicateFn(value) ? truthyFn(value) : value

%comment("Determines whether all the provided predicates return `true` for the given value.")
export allPass = (value, fns) => Belt.Array.everyU(fns, (. fn) => fn(value))

%comment(
  "Determines whether at least one of the provided predicate returns `true` for the given value."
)
export anyPass = (value, fns) => Belt.Array.someU(fns, (. fn) => fn(value))

export throttle = (fn, delay) => {
  let isThrottled = ref(false)
  let timer = ref(None)
  let cancel = () => {
    Belt.Option.mapWithDefaultU(timer.contents, (), (. timer) => Js.Global.clearTimeout(timer))
    timer := None
  }

  (. ()) =>
    if !isThrottled.contents {
      cancel()
      isThrottled := true
      fn()
      let timeout = Js.Global.setTimeout(() => {
        isThrottled := false
        timer := None
      }, delay)
      timer := Some(timeout)
    }
}

export debounce = (fn, delay) => {
  let timer = ref(None)
  let cancel = () => {
    Belt.Option.mapWithDefaultU(timer.contents, (), (. timer) => Js.Global.clearTimeout(timer))
    timer := None
  }

  (. ()) => {
    cancel()
    let timeout = Js.Global.setTimeout(() => {
      fn()
      timer := None
    }, delay)
    timer := Some(timeout)
  }
}
