let fromNullable = (error, value) =>
  Js.Nullable.isNullable(value) ? Belt.Result.Error(error) : Belt.Result.Ok(value)
let fromFalsy = (error, value) => !value ? Error(error) : Ok(value)
let fromPredicate = (predicateFn, error, value) =>
  predicateFn(value) ? fromNullable(error, value) : Error(error)

let map = (mapFn, result) => Belt.Result.mapU(result, mapFn)
let mapWithDefault = (defaultValue, mapFn, result) =>
  Belt.Result.mapWithDefaultU(result, defaultValue, mapFn)
let flatMap = (mapFn, result) => Belt.Result.flatMapU(result, mapFn)

let getExn = Belt.Result.getExn
let getWithDefault = (defaultValue, result) => Belt.Result.getWithDefault(result, defaultValue)

let toUndefined = result => Belt.Result.getWithDefault(result, Js.undefined)
let toNullable = result => Belt.Result.getWithDefault(result, Js.null)
let toOption = result =>
  switch result {
  | Ok(value) => Some(value)
  | Error(_) => None
  }
let match = (okFn, errorFn, result) =>
  switch result {
  | Ok(value) => okFn(value)
  | Error(value) => errorFn(value)
  }

let isError = Belt.Result.isError
let isOk = Belt.Result.isOk
