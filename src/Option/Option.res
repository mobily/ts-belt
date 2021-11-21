export fromNullable = value => Js.Nullable.toOption(value)

export fromFalsy = value => value ? Some(value) : None

export fromPredicate = (value, predicateFn) => predicateFn(value) ? fromNullable(value) : None

export map = Belt.Option.mapU

export flatMap = Belt.Option.flatMapU

export mapWithDefault = Belt.Option.mapWithDefaultU

export mapNullable = (option, mapFn) =>
  switch option {
  | Some(value) => fromNullable(mapFn(value))
  | None => None
  }

export filter = (option, predicateFn) =>
  Belt.Option.flatMapU(option, (. value) => predicateFn(value) ? Some(value) : None)

export getWithDefault = Belt.Option.getWithDefault

export getExn = Belt.Option.getExn

export toNullable = option => getWithDefault(option, Js.null)

export toUndefined = option => getWithDefault(option, Js.undefined)

export toResult = (option, error) =>
  switch option {
  | Some(value) => Belt.Result.Ok(value)
  | None => Belt.Result.Error(error)
  }

export match = (option, someFn, noneFn) =>
  switch option {
  | Some(value) => someFn(value)
  | None => noneFn()
  }

export isNone = Belt.Option.isNone

export isSome = Belt.Option.isSome
