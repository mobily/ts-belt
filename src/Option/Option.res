@gentype
let fromNullable = value => Js.Nullable.toOption(value)

@gentype
let fromFalsy = value => value ? Some(value) : None

@gentype
let fromPredicate = (value, predicateFn) => predicateFn(value) ? fromNullable(value) : None

@gentype
let map = (option, mapFn) => Belt.Option.mapU(option, mapFn)

@gentype
let flatMap = (option, mapFn) => Belt.Option.flatMapU(option, mapFn)

@gentype
let mapWithDefault = (option, defaultValue, mapFn) =>
  Belt.Option.mapWithDefaultU(option, defaultValue, mapFn)

@gentype
let mapNullable = (mapFn, option) =>
  switch option {
  | Some(value) => fromNullable(mapFn(value))
  | None => None
  }

@gentype
let filter = (option, predicateFn) =>
  Belt.Option.flatMapU(option, (. value) => predicateFn(value) ? Some(value) : None)

@gentype
let getWithDefault = (option, defaultValue) => Belt.Option.getWithDefault(option, defaultValue)

@gentype
let getExn = Belt.Option.getExn

@gentype
let toNullable = option => Belt.Option.getWithDefault(option, Js.null)

@gentype
let toUndefined = option => Belt.Option.getWithDefault(option, Js.undefined)

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
let isNone = option => Belt.Option.isNone(option)

@gentype
let isSome = option => Belt.Option.isSome(option)
