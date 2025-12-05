open Externals

exception ResultError({message: string})

let mapException = exn => {
  switch exn {
  | Promise.JsError(error) => Error(error)
  | _ as exn => Error(unsafeToJsExn(exn))
  }
}

@gentype
let makeOk = value => Ok(value)

@gentype
let makeError = value => Error(value)

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
  value
  ->fromNullable(errorValue)
  ->Belt.Result.flatMap(value => predicateFn(value) ? Ok(value) : Error(errorValue))

%comment(
  "Returns `Ok(value)` (`value` is the result of `fn`) if `fn` didn't throw an error, otherwise, returns `Error(err)`."
)
@gentype
let fromExecution = fn => {
  try {
    Ok(fn())
  } catch {
  | Js.Exn.Error(err) => Error(err)
  }
}

%comment(
  "Returns `Ok(value)` if `promise` is resolved successfully, otherwise, returns `Error(err)`."
)
@gentype
let fromPromise = promise => {
  open Promise
  promise->thenResolve(value => Ok(value))->catch(exn => resolve(mapException(exn)))
}

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

@gentype
let bimap = (result, okFn, errorFn) =>
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

%comment(
  "Applies a side-effect function to the value in `Error`, and returns the original `result`."
)
@gentype
let tapError = (result, errorFn) =>
  switch result {
  | Ok(_) => result
  | Error(err) =>
    errorFn(err)
    result
  }

%comment(
  "Converts errors into successful values, and returns a Result where the error channel is voided, to indicate that the error has been handled."
)
@gentype
let handleError = (result, mapFn) =>
  switch result {
  | Ok(_) as result => result
  | Error(err) => Ok(mapFn(err))
  }

%comment(
  "Returns `result` unchanged if `result` is of the form `Ok`, otherwise, returns `Error(mapFn(err))`."
)
@gentype
let mapError = (result, mapFn) =>
  switch result {
  | Ok(_) as result => result
  | Error(err) => Error(mapFn(err))
  }

%comment(
  "Returns `mapFn(err)` when `result` is of the form `Error(err)`, otherwise, returns `result` unchanged."
)
@gentype
let catchError = (result, mapFn) =>
  switch result {
  | Ok(_) as result => result
  | Error(err) => mapFn(err)
  }

%comment(
  "Ensures that the returned result is `Ok` by returning the provided result if it's already [Ok], or by falling back to the default value, which will be wrapped in the `Ok` constructor, if the provided result is an `Error`."
)
@gentype
let recover = (result, defaultValue) => catchError(result, _ => Ok(defaultValue))

%comment("Swaps the values between the `Ok` and `Error`.")
@gentype
let flip = result =>
  switch result {
  | Ok(value) => Error(value)
  | Error(err) => Ok(err)
  }

@gentype
let filter = (result, predicateFn) => {
  Belt.Result.flatMapU(result, (. value) =>
    predicateFn(value) ? Ok(value) : Error(ResultError({message: "[Result.filter]: not found"}))
  )
}

@gentype
let fold = (result, okFn, errorFn) =>
  switch result {
  | Ok(value) => okFn(value)
  | Error(error) => errorFn(error)
  }

@gentype
let all = xs =>
  Belt.Array.reduceU(xs, Ok([]), (. acc, data) => {
    acc->Belt.Result.flatMapU((. xs) => {
      switch data {
      | Ok(value) => Ok(Belt.Array.concat(xs, [value]))
      | Error(_) => Error(ResultError({message: "[Result.all]: found Error data type"}))
      }
    })
  })
