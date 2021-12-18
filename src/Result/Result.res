open Externals

let placeholder = () => Js.Undefined.empty

%comment("Returns `Ok(value)` if `value` is non-nullable, otherwise, returns `Error(errorValue)`.")
@gentype
let fromNullable = (value, errorValue) =>
  Js.Nullable.isNullable(value) ? Belt.Result.Error(errorValue) : Belt.Result.Ok(value)

%comment("Returns `Ok(value)` if `value` is not falsy, otherwise, returns `Error(errorValue)`.")
@gentype
let fromFalsy = (value, errorValue) => value ? Ok(value) : Error(errorValue)

%comment(
  "Returns `Ok(value)` if the predicate function returns `true`, otherwise, returns `Error(errorValue)`."
)
@gentype
let fromPredicate = (value, predicateFn, errorValue) =>
  predicateFn(value) ? fromNullable(value, errorValue) : Error(errorValue)

%comment(
  "Returns the result of `mapFn` if `result` is `Ok(value)`, otherwise, returns `Error(errorValue)` and `mapFn` is not called."
)
@gentype
let map = (result, mapFn) => Belt.Result.mapU(result, mapFn)

%comment(
  "Returns the result of `mapFn` if `result` is `Ok(value)`, otherwise returns a default value."
)
@gentype
let mapWithDefault = (result, defaultValue, mapFn) =>
  Belt.Result.mapWithDefaultU(result, defaultValue, mapFn)

%comment(
  "Returns the result of `mapFn` (it must have a return type of `Result`) if `result` is `Ok(value)`, otherwise, returns `result` unchanged."
)
@gentype
let flatMap = (result, mapFn) => Belt.Result.flatMapU(result, mapFn)

%comment("Returns `value` if `result` is `Ok(value)`, otherwise, throws an exception.")
@gentype
let getExn = result => Belt.Result.getExn(result)

%comment("Returns `value` if `result` is `Ok(value)`, otherwise, returns a default value.")
@gentype
let getWithDefault = (result, defaultValue) => Belt.Result.getWithDefault(result, defaultValue)

%comment("Returns `value` if `result` is `Ok(value)`, otherwise, returns `undefined`.")
@gentype
let toUndefined = result => getWithDefault(result, Js.undefined)

%comment("Returns `value` if `result` is `Ok(value)`, otherwise, returns `null`.")
@gentype
let toNullable = result => getWithDefault(result, Js.null)

%comment(
  "Returns `Some(value)` if `result` is `Ok(value)`, otherwise, returns `None`, both `Some` and `None` come from the `Option` type."
)
@gentype
let toOption = result =>
  switch result {
  | Ok(value) => Some(value)
  | Error(_) => None
  }

%comment(
  "Returns the result of `okFn` if `result` is `Ok(value)`, otherwise, returns the result of `errorFn`."
)
@gentype
let match = (result, okFn, errorFn) =>
  switch result {
  | Ok(value) => okFn(value)
  | Error(value) => errorFn(value)
  }

%comment(
  "Returns `true` if the provided `result` is `Error(errorValue)`, otherwise, returns `false`."
)
@gentype
let isError = result => Belt.Result.isError(result)

%comment("Returns `true` if the provided `result` is `Ok(value)`, otherwise, returns `false`.")
@gentype
let isOk = result => Belt.Result.isOk(result)

%comment("Applies a side-effect function to the value in `Ok`, and returns the original `result`.")
@gentype
let tap = (result, okFn) =>
  switch result {
  | Ok(value) =>
    okFn(value)
    result
  | Error(_) => result
  }
