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

%comment("Applies a side-effect function on the given value and returns the original value.")
export tap = (value, fn) => {
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
export makeControlledThrottle = (fn, options) => {
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

  {schedule: make, invoke: invoke, cancel: cancel, isScheduled: isScheduled}
}

%comment(
  "Takes a function and returns a new function (no control values) which when used, suppresses calls to the given function to only once within the given `delay`."
)
export throttle = (fn, delay) => makeControlledThrottle(fn, {delay: delay, leading: false}).schedule

%comment(
  "Takes a function, and returns a new function (and other control values) which when called, will only invoke the given input function after a period of inactivity. If `leading` is set to `true`, the function will be invoked immediately."
)
export makeControlledDebounce = (fn, options) => {
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

  {schedule: make, invoke: invoke, cancel: cancel, isScheduled: isScheduled}
}

%comment(
  "Takes a function, and returns a new function (no control values) which when called, will only invoke the given input function after a period of inactivity."
)
export debounce = (fn, delay) => makeControlledDebounce(fn, {delay: delay, leading: false}).schedule
