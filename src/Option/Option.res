let fromNullable = value => Js.Nullable.toOption(value)
let fromFalsy = value => !value ? None : Some(value)
let fromPredicate = (predicateFn, value) => predicateFn(value) ? fromNullable(value) : None

let map = (mapFn, option) => Belt.Option.mapU(option, mapFn)
let flatMap = (mapFn, option) => Belt.Option.flatMapU(option, mapFn)
let mapWithDefault = (defaultValue, mapFn, option) =>
  Belt.Option.mapWithDefaultU(option, defaultValue, mapFn)
let mapNullable = (mapFn, option) =>
  switch option {
  | Some(value) => fromNullable(mapFn(value))
  | None => None
  }
let filter = (predicateFn, option) =>
  Belt.Option.flatMapU(option, (. value) => predicateFn(value) ? Some(value) : None)

let getWithDefault = (defaultValue, option) => Belt.Option.getWithDefault(option, defaultValue)
let getExn = Belt.Option.getExn
let toNullable = option => Belt.Option.getWithDefault(option, Js.null)
let toUndefined = option => Belt.Option.getWithDefault(option, Js.undefined)
let toResult = (error, option) =>
  switch option {
  | Some(value) => Belt.Result.Ok(value)
  | None => Belt.Result.Error(error)
  }
let match = (someFn, noneFn, option) =>
  switch option {
  | Some(value) => someFn(value)
  | None => noneFn()
  }

let isNone = Belt.Option.isNone
let isSome = Belt.Option.isSome
