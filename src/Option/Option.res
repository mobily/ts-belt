open Externals

let placeholder = () => Js.Undefined.empty

%comment("Returns `Some(value)` if the provided value is non-nullable, otherwise, returns `None`.")
export fromNullable = value => Js.Nullable.toOption(value)

%comment("Returns `Some(value)` if the provided value is not falsy, otherwise, returns `None`.")
export fromFalsy = value => value ? Some(value) : None

%comment(
  "Returns `Some(value)` if the given predicate function returns `true`, otherwise, returns `None`."
)
export fromPredicate = (value, predicateFn) => predicateFn(value) ? fromNullable(value) : None

%comment(
  "Returns the result of `mapFn` if `option` is `Some(value)`, otherwise, returns `None` and `mapFn` is not called."
)
export map = (option, mapFn) => Belt.Option.mapU(option, mapFn)

%comment(
  "Returns the result of `mapFn` (it must have a return type of `Option`) if `option` is `Some(value)`, otherwise, returns `None`."
)
export flatMap = (option, mapFn) => Belt.Option.flatMapU(option, mapFn)

%comment(
  "Returns the result of `mapFn` if `option` is `Some(value)`, otherwise, returns a default value."
)
export mapWithDefault = (option, defaultValue, mapFn) =>
  Belt.Option.mapWithDefaultU(option, defaultValue, mapFn)

%comment(
  "Returns `Some(value)` if the result of `mapFn` is non-nullable, otherwise, returns `None`."
)
export mapNullable = (option, mapFn) =>
  switch option {
  | Some(value) => fromNullable(mapFn(value))
  | None => None
  }

%comment(
  "Returns `Some(value)` if `option` is `Some(value)` and the result of `predicateFn` is truthy, otherwise, returns `None`."
)
export filter = (option, predicateFn) =>
  Belt.Option.flatMapU(option, (. value) => predicateFn(value) ? Some(value) : None)

%comment("Returns `value` if `option` is `Some(value)`, otherwise, returns a default value.")
export getWithDefault = (option, defaultValue) => Belt.Option.getWithDefault(option, defaultValue)

%comment("Returns `value` if `option` is `Some(value)`, otherwise, throws an exception.")
export getExn = option => Belt.Option.getExn(option)

%comment("Returns `value` if `option` is `Some(value)`, otherwise, returns `null`.")
export toNullable = option => getWithDefault(option, Js.null)

%comment("Returns `value` if `option` is `Some(value)`, otherwise, returns `undefined`.")
export toUndefined = option => getWithDefault(option, Js.undefined)

%comment(
  "Returns `Ok(value)` if `option` is `Some(value)`, otherwise, returns `Error(errorValue)`, both `Ok` and `Error` come from the `Result` type."
)
export toResult = (option, errorValue) =>
  switch option {
  | Some(value) => Belt.Result.Ok(value)
  | None => Belt.Result.Error(errorValue)
  }

%comment(
  "Returns the result of `someFn` if `option` is `Some(value)`, otherwise, returns the result of `noneFn`."
)
export match = (option, someFn, noneFn) =>
  switch option {
  | Some(value) => someFn(value)
  | None => noneFn()
  }

%comment("Returns `true` if the provided `option` is `None`, otherwise, returns `false`.")
export isNone = option => Belt.Option.isNone(option)

%comment("Returns `true` if the provided `option` is `Some(value)`, otherwise, returns `false`.")
export isSome = option => Belt.Option.isSome(option)
