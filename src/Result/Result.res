open Externals

let placeholder = () => Js.Undefined.empty

%comment("Returns `Ok(value)` if `value` is non-nullable, otherwise, returns `Error(errorValue)`.")
export fromNullable = (value, errorValue) =>
  Js.Nullable.isNullable(value) ? Belt.Result.Error(errorValue) : Belt.Result.Ok(value)

%comment("Returns `Ok(value)` if `value` is not falsy, otherwise, returns `Error(errorValue)`.")
export fromFalsy = (value, errorValue) => value ? Ok(value) : Error(errorValue)

%comment(
  "Returns `Ok(value)` if the predicate function returns `true`, otherwise, returns `Error(errorValue)`."
)
export fromPredicate = (value, predicateFn, errorValue) =>
  predicateFn(value) ? fromNullable(value, errorValue) : Error(errorValue)

%comment(
  "Returns the result of `mapFn` if `result` is `Ok(value)`, otherwise, returns `Error(errorValue)` and `mapFn` is not called."
)
export map = (result, mapFn) => Belt.Result.mapU(result, mapFn)

%comment(
  "Returns the result of `mapFn` if `result` is `Ok(value)`, otherwise returns a default value."
)
export mapWithDefault = (result, defaultValue, mapFn) =>
  Belt.Result.mapWithDefaultU(result, defaultValue, mapFn)

%comment(
  "Returns the result of `mapFn` (it must have a return type of `Result`) if `result` is `Ok(value)`, otherwise, returns `result` unchanged."
)
export flatMap = (result, mapFn) => Belt.Result.flatMapU(result, mapFn)

%comment("Returns `value` if `result` is `Ok(value)`, otherwise, throws an exception.")
export getExn = result => Belt.Result.getExn(result)

%comment("Returns `value` if `result` is `Ok(value)`, otherwise, returns a default value.")
export getWithDefault = Belt.Result.getWithDefault

%comment("Returns `value` if `result` is `Ok(value)`, otherwise, returns `undefined`.")
export toUndefined = result => getWithDefault(result, Js.undefined)

%comment("Returns `value` if `result` is `Ok(value)`, otherwise, returns `null`.")
export toNullable = result => getWithDefault(result, Js.null)

%comment(
  "Returns `Some(value)` if `result` is `Ok(value)`, otherwise, returns `None`, both `Some` and `None` come from the `Option` type."
)
export toOption = result =>
  switch result {
  | Ok(value) => Some(value)
  | Error(_) => None
  }

%comment(
  "Returns the result of `okFn` if `result` is `Ok(value)`, otherwise, returns the result of `errorFn`."
)
export match = (result, okFn, errorFn) =>
  switch result {
  | Ok(value) => okFn(value)
  | Error(value) => errorFn(value)
  }

%comment(
  "Returns `true` if the provided `result` is `Error(errorValue)`, otherwise, returns `false`."
)
export isError = result => Belt.Result.isError(result)

%comment("Returns `true` if the provided `result` is `Ok(value)`, otherwise, returns `false`.")
export isOk = result => Belt.Result.isOk(result)

%comment("Applies a side-effect function to the value in `Ok`, and returns the original `result`.")
export tap = (result, okFn) =>
  switch result {
  | Ok(value) =>
    okFn(value)
    result
  | Error(_) => result
  }
