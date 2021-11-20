@gentype
let fromNullable = value => Js.Nullable.toOption(value)

@gentype
let fromFalsy = value => value ? Some(value) : None

@gentype
let fromPredicate = (value, predicateFn) => predicateFn(value) ? fromNullable(value) : None

@gentype
let map = Belt.Option.mapU

@gentype
let flatMap = Belt.Option.flatMapU

@gentype
let mapWithDefault = Belt.Option.mapWithDefaultU

@gentype
let mapNullable = (option, mapFn) =>
  switch option {
  | Some(value) => fromNullable(mapFn(value))
  | None => None
  }

@gentype
let filter = (option, predicateFn) =>
  Belt.Option.flatMapU(option, (. value) => predicateFn(value) ? Some(value) : None)

@gentype
let getWithDefault = Belt.Option.getWithDefault

@gentype
let getExn = Belt.Option.getExn

@gentype
let toNullable = option => getWithDefault(option, Js.null)

@gentype
let toUndefined = option => getWithDefault(option, Js.undefined)

@gentype
let toResult = (option, error) =>
  switch option {
  | Some(value) => Belt.Result.Ok(value)
  | None => Belt.Result.Error(error)
  }

@gentype
let match = (option, someFn, noneFn) =>
  switch option {
  | Some(value) => someFn(value)
  | None => noneFn()
  }

@gentype
let isNone = Belt.Option.isNone

@gentype
let isSome = Belt.Option.isSome
