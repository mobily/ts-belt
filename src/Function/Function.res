open Externals

let placeholder = () => Js.Undefined.empty

%comment("Always returns the provided value, useful as a placeholder function.")
@gentype
let identity = value => value

%comment("Returns `true` if provided values are equal, otherwise, returns `false`.")
@gentype
let equals = (fst, snd) => fst == snd

%comment(
  "Calls the two provided functions and returns `&&` of the results → `fn0(value) && fn1(value)`."
)
@gentype
let both = (value, fn0, fn1) => fn0(value) && fn1(value)

%comment(
  "Calls the two provided functions and returns `||` of the results → `fn0(value) || fn1(value)`."
)
@gentype
let either = (value, fn0, fn1) => fn0(value) || fn1(value)

%comment("Returns a function that always returns the provided value.")
@gentype
let always = (value, . ()) => value

%comment("Returns a default value if `value` is nullable.")
@gentype
let defaultTo = (value, defaultValue) => Js.Nullable.isNullable(value) ? defaultValue : value

%comment("Always returns `false`.")
@gentype
let falsy = always(false)

%comment("Always returns `true`.")
@gentype
let truthy = always(true)

%comment(
  "Tests the given value by passing it to the predicate, if the predicate is satisfied, the function returns the result of `truthyFn`, otherwise, returns the result of `falsyFn`."
)
@gentype
let ifElse = (value, predicateFn, truthyFn, falsyFn) =>
  predicateFn(value) ? truthyFn(value) : falsyFn(value)

%comment("Always returns `void`, useful as a placeholder function.")
@gentype
let ignore = () => ()

%comment(
  "Tests the given value by passing it to the predicate, if the predicate is satisfied, the function returns `value`, otherwise, returns the result of `falsyFn`."
)
@gentype
let unless = (value, predicateFn, falsyFn) => !predicateFn(value) ? falsyFn(value) : value

%comment(
  "Tests the given value by passing it to the predicate, if the predicate is satisfied, the function returns the result of `truthyFn`, otherwise, returns `value`."
)
@gentype
let when_ = (value, predicateFn, truthyFn) => predicateFn(value) ? truthyFn(value) : value

%comment("Determines whether all the provided predicates return `true` for the given value.")
@gentype
let allPass = (value, fns) => Belt.Array.everyU(fns, (. fn) => fn(value))

%comment(
  "Determines whether at least one of the provided predicate returns `true` for the given value."
)
@gentype
let anyPass = (value, fns) => Belt.Array.someU(fns, (. fn) => fn(value))

%comment("Applies a side-effect function on the given value and returns the original value.")
@gentype
let tap = (value, fn) => {
  fn(value)
  value
}

type controlled<'a> = {
  cancel: unit => unit,
  invoke: 'a => unit,
  isScheduled: unit => bool,
  schedule: 'a => unit,
}

type options = {
  delay: int,
  leading: bool,
}

%comment(
  "Takes a function and returns a new function (and other control values) which when used, suppresses calls to the given function to only once within the given `delay`. If `leading` is set to `true`, the function will be allowed to run on the first call before the throttling starts."
)
@gentype
let makeControlledThrottle = (fn, options) => {
  let isThrottled = ref(false)
  let timer = ref(None)
  let cancel = () => {
    Belt.Option.mapWithDefaultU(timer.contents, (), (. timer) => Js.Global.clearTimeout(timer))
    timer := None
  }
  let schedule = restArgs => {
    if !isThrottled.contents {
      cancel()
      isThrottled := true
      fn(restArgs)
      let timeout = Js.Global.setTimeout(() => {
        isThrottled := false
        timer := None
      }, options.delay)
      timer := Some(timeout)
    }
  }
  let invoke = restArgs => {
    cancel()
    fn(restArgs)
  }
  let isScheduled = () => isThrottled.contents
  let isLeading = ref(options.leading)

  let make = restArgs =>
    if isLeading.contents {
      isLeading := false
      fn(restArgs)
    } else {
      schedule(restArgs)
    }

  {schedule: make, invoke, cancel, isScheduled}
}

%comment(
  "Takes a function and returns a new function (no control values) which when used, suppresses calls to the given function to only once within the given `delay`."
)
@gentype
let throttle = (fn, delay) => makeControlledThrottle(fn, {delay, leading: false}).schedule

%comment(
  "Takes a function, and returns a new function (and other control values) which when called, will only invoke the given input function after a period of inactivity. If `leading` is set to `true`, the function will be invoked immediately."
)
@gentype
let makeControlledDebounce = (fn, options) => {
  let timer = ref(None)
  let cancel = () => {
    Belt.Option.mapWithDefaultU(timer.contents, (), (. timer) => Js.Global.clearTimeout(timer))
    timer := None
  }
  let schedule = restArgs => {
    cancel()
    let timeout = Js.Global.setTimeout(() => {
      fn(restArgs)
      timer := None
    }, options.delay)
    timer := Some(timeout)
  }
  let invoke = restArgs => {
    cancel()
    fn(restArgs)
  }
  let isScheduled = () => Belt.Option.isSome(timer.contents)
  let isLeading = ref(options.leading)

  let make = restArgs =>
    if isLeading.contents {
      isLeading := false
      fn(restArgs)
    } else {
      schedule(restArgs)
    }

  {schedule: make, invoke, cancel, isScheduled}
}

%comment(
  "Takes a function, and returns a new function (no control values) which when called, will only invoke the given input function after a period of inactivity."
)
@gentype
let debounce = (fn, delay) => makeControlledDebounce(fn, {delay, leading: false}).schedule

%comment(
  "Takes a function, which is called in the `try/catch` block, and returns the `Result` data type."
)
@gentype
let tryCatch = (value, fn) => {
  try {
    Ok(fn(value))
  } catch {
  | JsError(error) => Error(unsafeToJsExn(error))
  | _ as exn => Error(unsafeToJsExn(exn))
  }
}

%comment(
  "Takes a function and returns a new function which when called, will allow the first `times` calls to invoke the given function, and any successive calls will be suppressed and the last result will be returned."
)
@gentype
let before = (times, fn) => {
  let count = ref(0)
  let lastResult = ref(None)

  (. restArgs) => {
    switch lastResult.contents {
    | Some(result) =>
      if count.contents < times {
        let result = fn(restArgs)
        lastResult := Some(result)
        count := succ(count.contents)
        result
      } else {
        result
      }
    | None =>
      let result = fn(restArgs)
      lastResult := Some(result)
      count := succ(count.contents)
      result
    }
  }
}

%comment(
  "Takes a function and returns a new function that when called, will suppress the first `times` invocations."
)
@gentype
let after = (times, fn) => {
  let count = ref(0)
  (. restArgs) =>
    if count.contents < times {
      count := succ(count.contents)
      None
    } else {
      Some(fn(restArgs))
    }
}

%comment(
  "Takes a function and returns a new function which will invoke the given function once, and any successive calls will be suppressed, returning the value of the first call."
)
@gentype
let once = fn => {
  let lastResult = ref(None)

  (. restArgs) => {
    switch lastResult.contents {
    | Some(result) => result
    | None =>
      let result = fn(restArgs)
      lastResult := Some(result)
      result
    }
  }
}

%comment("Alias for `once`.")
@gentype
let memoize = fn => once(fn)

%comment(
  "Takes a function and returns a new function which once called, stores the result produced by the given function in a closure-based cache, using a cache key created by the function `makeKeyFn`."
)
@gentype
let memoizeWithKey = (makeKeyFn, fn) => {
  let cache = ref(Belt.Map.String.empty)

  (. restArgs) => {
    let key = makeKeyFn(restArgs)
    let result = Belt.Map.String.get(cache.contents, key)

    switch result {
    | Some(result) => result
    | None =>
      let result = fn(restArgs)
      cache := Belt.Map.String.set(cache.contents, key, result)
      result
    }
  }
}

%comment("Takes a value and converts its immutable type to a mutable one.")
@gentype
let toMutable = value => value

%comment("Takes a value and coerces a new type.")
@gentype
let coerce = value => value

@gentype
let andThen = (value, fn) => fn(value)

%comment("Takes comparator fn and compares values ascending")
@genType
let ascend = (fn, a, b) => {
  let resultA = fn(a)
  let resultB = fn(b)

  resultA < resultB ? -1 : resultA > resultB ? 1 : 0
}

%comment("Takes comparator fn and compares values descending")
@genType
let descend = (fn, a, b) => {
  let resultA = fn(a)
  let resultB = fn(b)

  resultA > resultB ? -1 : resultA < resultB ? 1 : 0
}
