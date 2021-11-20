@gentype
let fromNullable = (value, error) =>
  Js.Nullable.isNullable(value) ? Belt.Result.Error(error) : Belt.Result.Ok(value)

@gentype
let fromFalsy = (value, error) => value ? Ok(value) : Error(error)

@gentype
let fromPredicate = (value, predicateFn, error) =>
  predicateFn(value) ? fromNullable(value, error) : Error(error)

@gentype
let map = Belt.Result.mapU

@gentype
let mapWithDefault = Belt.Result.mapWithDefaultU

@gentype
let flatMap = Belt.Result.flatMapU

@gentype
let getExn = Belt.Result.getExn

@gentype
let getWithDefault = Belt.Result.getWithDefault

@gentype
let toUndefined = result => getWithDefault(result, Js.undefined)

@gentype
let toNullable = result => getWithDefault(result, Js.null)

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
let isError = Belt.Result.isError

@gentype
let isOk = Belt.Result.isOk
