@gentype
let fromNullable = (value, error) =>
  Js.Nullable.isNullable(value) ? Belt.Result.Error(error) : Belt.Result.Ok(value)

@gentype
let fromFalsy = (value, error) => value ? Ok(error) : Error(value)

@gentype
let fromPredicate = (value, predicateFn, error) =>
  predicateFn(value) ? fromNullable(error, value) : Error(error)

@gentype
let map = (result, mapFn) => Belt.Result.mapU(result, mapFn)

@gentype
let mapWithDefault = (result, defaultValue, mapFn) =>
  Belt.Result.mapWithDefaultU(result, defaultValue, mapFn)

@gentype
let flatMap = (result, mapFn) => Belt.Result.flatMapU(result, mapFn)

@gentype
let getExn = result => Belt.Result.getExn(result)

@gentype
let getWithDefault = (result, defaultValue) => Belt.Result.getWithDefault(result, defaultValue)

@gentype
let toUndefined = result => Belt.Result.getWithDefault(result, Js.undefined)

@gentype
let toNullable = result => Belt.Result.getWithDefault(result, Js.null)

@gentype
let toOption = result =>
  switch result {
  | Ok(value) => Some(value)
  | Error(_) => None
  }

@gentype
let match = (result, okFn, errorFn) =>
  switch result {
  | Ok(value) => okFn(value)
  | Error(value) => errorFn(value)
  }

@gentype
let isError = result => Belt.Result.isError(result)

@gentype
let isOk = result => Belt.Result.isOk(result)
