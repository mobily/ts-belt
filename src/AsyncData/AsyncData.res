open Externals

let placeholder = () => Js.Undefined.empty

type t<'a> =
  | Init
  | Loading
  | Reloading('a)
  | Complete('a)

@gentype
let makeInit = () => Init

@gentype
let makeLoading = () => Loading

@gentype
let makeReloading = data => Reloading(data)

@gentype
let makeComplete = data => Complete(data)

%comment("Checks if the provided `AsyncData` value is `Init`.")
@gentype
let isInit = data => data == Init

%comment("Checks if the provided `AsyncData` value is `Loading`.")
@gentype
let isLoading = data => data == Loading

%comment("Checks if the provided `AsyncData` value is `Reloading`.")
@gentype
let isReloading = data =>
  switch data {
  | Reloading(_) => true
  | _ => false
  }

%comment("Checks if the provided `AsyncData` value is `Complete`.")
@gentype
let isComplete = data =>
  switch data {
  | Complete(_) => true
  | _ => false
  }

%comment("Checks if the provided `AsyncData` value is working (`Loading` or `Reloading`).")
@gentype
let isBusy = data => {
  switch data {
  | Init
  | Complete(_) => false
  | Loading
  | Reloading(_) => true
  }
}

%comment("Checks if the provided `AsyncData` value is not working (`Init` or `Complete`).")
@gentype
let isIdle = data => !isBusy(data)

%comment("Checks if the provided `AsyncData` value is `Init` or `Loading`.")
@gentype
let isEmpty = data => {
  switch data {
  | Init
  | Loading => true
  | Reloading(_)
  | Complete(_) => false
  }
}

%comment("Checks if the provided `AsyncData` value is `Reloading` or `Complete`.")
@gentype
let isNotEmpty = data => !isEmpty(data)

%comment(
  "Creates a new `AsyncData` by transitioning the given `AsyncData` into a busy state (`Loading` or `Reloading`), and carrying over the internal data if available."
)
@gentype
let toBusy = data =>
  switch data {
  | Init => Loading
  | Loading as value => value
  | Reloading(_) as value => value
  | Complete(value) => Reloading(value)
  }

%comment(
  "Creates a new `AsyncData` by transitioning the given `AsyncData` into an idle state (`Init` or `Complete`), and carrying over the internal data if available."
)
@gentype
let toIdle = data =>
  switch data {
  | Init as value => value
  | Loading => Init
  | Reloading(value) => Complete(value)
  | Complete(_) as value => value
  }

%comment(
  "Get `Some(value)` from the `Complete` state if the `AsyncData` is complete, or the last known complete value in `Reloading`."
)
@gentype
let getValue = data =>
  switch data {
  | Init
  | Loading =>
    None
  | Reloading(value)
  | Complete(value) =>
    Some(value)
  }

%comment(
  "Returns a value if the `AsyncData` is either in the `Complete` or `Reloading` state, otherwise, returns `defaultValue`."
)
@gentype
let getWithDefault = (data, defaultValue) =>
  switch data {
  | Init
  | Loading => defaultValue
  | Reloading(value)
  | Complete(value) => value
  }

%comment(
  "Get `Some(value)` only from the `Reloading` state, and `None` in all other cases, including `Complete`."
)
@gentype
let getReloading = data =>
  switch data {
  | Init
  | Loading
  | Complete(_) =>
    None
  | Reloading(value) => Some(value)
  }

%comment(
  "Get `Some(value)` only from the `Complete` state, and `None` in all other cases, including `Reloading`."
)
@gentype
let getComplete = data =>
  switch data {
  | Init
  | Loading
  | Reloading(_) =>
    None
  | Complete(value) => Some(value)
  }

%comment("Maps a pure function over the value contained by `Reloading` or `Complete`.")
@gentype
let map = (data, mapFn) =>
  switch data {
  | Init => Init
  | Loading => Loading
  | Reloading(value) => Reloading(mapFn(value))
  | Complete(value) => Complete(mapFn(value))
  }

%comment(
  "Maps the `AsyncData` into a new value by providing a strict value to use when there is no data, or function to handle when there is data."
)
@gentype
let mapWithDefault = (data, defaultValue, mapFn) => {
  switch data {
  | Init
  | Loading => defaultValue
  | Reloading(value)
  | Complete(value) =>
    mapFn(value)
  }
}

%comment("Applies a monadic function to the value contained by `Reloading` or `Complete`.")
@gentype
let flatMap = (data, mapFn) =>
  switch data {
  | Init => Init
  | Loading => Loading
  | Reloading(value)
  | Complete(value) =>
    mapFn(value)
  }

%comment("Applies a side effect function if the value is `Init`.")
@gentype
let tapInit = (data, initFn) => {
  switch data {
  | Init =>
    initFn()
    data
  | _ => data
  }
}

%comment("Applies a side effect function if the value is `Loading`.")
@gentype
let tapLoading = (data, loadingFn) => {
  switch data {
  | Loading =>
    loadingFn()
    data
  | _ => data
  }
}

%comment("Applies a side effect function if the value is `Reloading`.")
@gentype
let tapReloading = (data, reloadingFn) => {
  switch data {
  | Reloading(value) =>
    reloadingFn(value)
    data
  | _ => data
  }
}

%comment("Applies a side effect function if the value is `Complete`.")
@gentype
let tapComplete = (data, completeFn) => {
  switch data {
  | Complete(value) =>
    completeFn(value)
    data
  | _ => data
  }
}

%comment("Applies a side effect function if the value is `Init` or `Loading`.")
@gentype
let tapEmpty = (data, emptyFn) => {
  switch data {
  | Init
  | Loading =>
    emptyFn()
    data
  | Reloading(_)
  | Complete(_) => data
  }
}

%comment("Applies a side effect function if the value is `Reloading` or `Complete`.")
@gentype
let tapNotEmpty = (data, notEmptyFn) => {
  switch data {
  | Init
  | Loading => data
  | Reloading(value)
  | Complete(value) =>
    notEmptyFn(value)
    data
  }
}

@gentype
let all = xs => {
  let data = Belt.Array.reduceU(xs, Complete([]), (. acc, data) => {
    acc->flatMap(xs => {
      switch data {
      | Init => Init
      | Loading => Loading
      | Reloading(value) => Reloading(Belt.Array.concat(xs, [value]))
      | Complete(value) => Complete(Belt.Array.concat(xs, [value]))
      }
    })
  })

  switch data {
  | Reloading(ys) => Reloading(ys)
  | Complete(ys) =>
    let reloading = Belt.Array.someU(xs, (. value) => isReloading(value))
    reloading ? Reloading(ys) : Complete(ys)
  | _ as empty => empty
  }
}

@genType
let fold = (data, notEmptyFn, emptyFn) =>
  switch data {
  | Init
  | Loading =>
    emptyFn()
  | Reloading(value)
  | Complete(value) =>
    notEmptyFn(value)
  }
