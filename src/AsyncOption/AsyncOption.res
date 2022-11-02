open Promise

@gentype
let make = promise => {
  promise->thenResolve(value => Js.Nullable.toOption(value))->catch(_ => resolve(None))
}

@gentype
let map = (promise, mapFn) => {
  promise->thenResolve(Belt.Option.mapU(_, mapFn))
}

@gentype
let flatMap = (promise, mapFn) => {
  promise->thenResolve(Belt.Option.flatMapU(_, mapFn))
}

@gentype
let fold = (promise, mapFn) => {
  promise->then(result => {
    Belt.Option.flatMapU(result, mapFn)->resolve
  })
}

@gentype
let mapWithDefault = (promise, defaultValue, mapFn) => {
  promise->thenResolve(Belt.Option.mapWithDefaultU(_, defaultValue, mapFn))
}

@gentype
let getWithDefault = (promise, defaultValue) => {
  promise->thenResolve(Belt.Option.getWithDefault(_, defaultValue))
}

@gentype
let filter = (promise, predicateFn) => {
  promise->thenResolve(
    Belt.Option.flatMapU(_, (. value) => predicateFn(value) ? Some(value) : None),
  )
}

@gentype
let match = (promise, someFn, noneFn) => {
  promise->thenResolve(option => {
    switch option {
    | Some(value) => someFn(value)
    | None => noneFn()
    }
  })
}

@gentype
let toResult = (promise, errorValue) => {
  promise->thenResolve(option => {
    switch option {
    | Some(value) => Ok(value)
    | None => Error(errorValue)
    }
  })
}

@gentype
let toNullable = promise => getWithDefault(promise, Js.null)

@gentype
let toUndefined = promise => getWithDefault(promise, Js.undefined)

@gentype
let isSome = promise => {
  promise->thenResolve(Belt.Option.isSome)
}

@gentype
let isNone = promise => {
  promise->thenResolve(Belt.Option.isNone)
}

@gentype
let contains = (promise, value) => {
  promise->thenResolve(Belt.Option.mapWithDefaultU(_, false, (. someValue) => someValue == value))
}

@gentype
let tap = (promise, tapFn) => {
  promise->thenResolve(option => {
    switch option {
    | Some(value) =>
      tapFn(value)
      option
    | None => option
    }
  })
}

@gentype
let flatten = promise => {
  promise->thenResolve(Belt.Option.getWithDefault(_, None))
}

@gentype
let reject = () => resolve(None)

@gentype
let resolve = value => resolve(Some(value))
