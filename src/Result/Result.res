export fromNullable = (value, error) =>
  Js.Nullable.isNullable(value) ? Belt.Result.Error(error) : Belt.Result.Ok(value)

export fromFalsy = (value, error) => value ? Ok(value) : Error(error)

export fromPredicate = (value, predicateFn, error) =>
  predicateFn(value) ? fromNullable(value, error) : Error(error)

export map = Belt.Result.mapU

export mapWithDefault = Belt.Result.mapWithDefaultU

export flatMap = Belt.Result.flatMapU

export getExn = Belt.Result.getExn

export getWithDefault = Belt.Result.getWithDefault

export toUndefined = result => getWithDefault(result, Js.undefined)

export toNullable = result => getWithDefault(result, Js.null)

export toOption = result =>
  switch result {
  | Ok(value) => Some(value)
  | Error(_) => None
  }

export match = (result, okFn, errorFn) =>
  switch result {
  | Ok(value) => okFn(value)
  | Error(value) => errorFn(value)
  }

export isError = Belt.Result.isError

export isOk = Belt.Result.isOk
