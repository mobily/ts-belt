open Externals

let placeholder = () => Js.Undefined.empty

%comment("Returns `Some(value)` if the provided value is non-nullable, otherwise, returns `None`.")
@gentype
let fromNullable = value => Js.Nullable.toOption(value)

%comment("Returns `Some(value)` if the provided value is not falsy, otherwise, returns `None`.")
@gentype
let fromFalsy = value => value ? Some(value) : None

%comment(
  "Returns `Some(value)` if the given predicate function returns `true`, otherwise, returns `None`."
)
@gentype
let fromPredicate = (value, predicateFn) =>
  value->fromNullable->Belt.Option.flatMap(value => predicateFn(value) ? Some(value) : None)

%comment(
  "Returns `Some(value)` (`value` is the result of `fn`) if `fn` didn't throw an error, otherwise, returns `None`."
)
@gentype
let fromExecution = fn => {
  try {
    Some(fn())
  } catch {
  | _ => None
  }
}

%comment("Returns `Some(value)` if `promise` is resolved successfully, otherwise, returns `None`.")
@gentype
let fromPromise = promise => {
  open Js.Promise
  promise->then_(value => resolve(Some(value)), _)->catch(_ => resolve(None), _)
}

%comment(
  "Returns the result of `mapFn` if `option` is `Some(value)`, otherwise, returns `None` and `mapFn` is not called."
)
@gentype
let map = (option, mapFn) => Belt.Option.mapU(option, mapFn)

%comment(
  "Returns the result of `mapFn` (it must have a return type of `Option`) if `option` is `Some(value)`, otherwise, returns `None`."
)
@gentype
let flatMap = (option, mapFn) => Belt.Option.flatMapU(option, mapFn)

%comment(
  "Returns the result of `mapFn` if `option` is `Some(value)`, otherwise, returns a default value."
)
@gentype
let mapWithDefault = (option, defaultValue, mapFn) =>
  Belt.Option.mapWithDefaultU(option, defaultValue, mapFn)

%comment(
  "Returns `Some(value)` if the result of `mapFn` is non-nullable, otherwise, returns `None`."
)
@gentype
let mapNullable = (option, mapFn) =>
  switch option {
  | Some(value) => fromNullable(mapFn(value))
  | None => None
  }

%comment(
  "Returns `Some(value)` if `option` is `Some(value)` and the result of `predicateFn` is truthy, otherwise, returns `None`."
)
@gentype
let filter = (option, predicateFn) =>
  Belt.Option.flatMapU(option, (. value) => predicateFn(value) ? Some(value) : None)

%comment("Returns `value` if `option` is `Some(value)`, otherwise, returns a default value.")
@gentype
let getWithDefault = (option, defaultValue) => Belt.Option.getWithDefault(option, defaultValue)

%comment("Returns `value` if `option` is `Some(value)`, otherwise, throws an exception.")
@gentype
let getExn = option => Belt.Option.getExn(option)

%comment("Returns `value` if `option` is `Some(value)`, otherwise, returns `null`.")
@gentype
let toNullable = option => getWithDefault(option, Js.null)

%comment("Returns `value` if `option` is `Some(value)`, otherwise, returns `undefined`.")
@gentype
let toUndefined = option => getWithDefault(option, Js.undefined)

%comment(
  "Returns `Ok(value)` if `option` is `Some(value)`, otherwise, returns `Error(errorValue)`, both `Ok` and `Error` come from the `Result` type."
)
@gentype
let toResult = (option, errorValue) =>
  switch option {
  | Some(value) => Belt.Result.Ok(value)
  | None => Belt.Result.Error(errorValue)
  }

%comment(
  "Returns the result of `someFn` if `option` is `Some(value)`, otherwise, returns the result of `noneFn`."
)
@gentype
let match = (option, someFn, noneFn) =>
  switch option {
  | Some(value) => someFn(value)
  | None => noneFn()
  }

%comment("Returns `true` if the provided `option` is `None`, otherwise, returns `false`.")
@gentype
let isNone = option => Belt.Option.isNone(option)

%comment("Returns `true` if the provided `option` is `Some(value)`, otherwise, returns `false`.")
@gentype
let isSome = option => Belt.Option.isSome(option)

%comment(
  "Applies a side-effect function to the value in `Some`, and returns the original `option`."
)
@gentype
let tap = (option, someFn) =>
  switch option {
  | Some(value) =>
    someFn(value)
    option
  | None => option
  }

%comment("Checks if `option` is the `Some` variant and contains the given value.")
@gentype
let contains = (option, value) =>
  Belt.Option.mapWithDefaultU(option, false, (. someValue) => someValue == value)

%comment(
  "Combines two Options into a single Option containing a tuple of their values, if both Options are `Some` variants, otherwise, returns `None`."
)
@gentype
let zip = (fstOption, sndOption) =>
  switch (fstOption, sndOption) {
  | (Some(x), Some(y)) => Some((x, y))
  | _ => None
  }

%comment(
  "Combines two Options into a single Option. The new value is produced by applying the given function to both values, if both Options are `Some` variants, otherwise, returns `None`."
)
@gentype
let zipWith = (fstOption, sndOption, mapFn) =>
  switch (fstOption, sndOption) {
  | (Some(x), Some(y)) => Some(mapFn(x, y))
  | _ => None
  }
