open AsyncData

let placeholder = () => Js.Undefined.empty

type t<'a, 'b> = AsyncData.t<result<'a, 'b>>

@gentype
let makeInit = () => Init

@gentype
let makeLoading = () => Loading

@gentype
let makeReloadingOk = value => Reloading(Ok(value))

@gentype
let makeReloadingError = error => Reloading(Error(error))

@gentype
let makeCompleteOk = value => Complete(Ok(value))

@gentype
let makeCompleteError = error => Complete(Error(error))

@gentype
let fromAsyncData = data =>
  switch data {
  | Init => Init
  | Loading => Loading
  | Reloading(value) => Reloading(Ok(value))
  | Complete(value) => Complete(Ok(value))
  }

@gentype
let isOk = data =>
  switch data {
  | Init
  | Loading
  | Reloading(Error(_))
  | Complete(Error(_)) => false
  | Reloading(Ok(_))
  | Complete(Ok(_)) => true
  }

@gentype
let isError = data =>
  switch data {
  | Init
  | Loading
  | Reloading(Ok(_))
  | Complete(Ok(_)) => false
  | Reloading(Error(_))
  | Complete(Error(_)) => true
  }

@gentype
let isReloadingOk = data =>
  switch data {
  | Reloading(Ok(_)) => true
  | _ => false
  }

@gentype
let isReloadingError = data =>
  switch data {
  | Reloading(Error(_)) => true
  | _ => false
  }

@gentype
let isCompleteOk = data =>
  switch data {
  | Complete(Ok(_)) => true
  | _ => false
  }

@gentype
let isCompleteError = data =>
  switch data {
  | Complete(Error(_)) => true
  | _ => false
  }

@gentype
let getOk = data =>
  switch data {
  | Init
  | Loading
  | Reloading(Error(_))
  | Complete(Error(_)) =>
    None
  | Reloading(Ok(value))
  | Complete(Ok(value)) =>
    Some(value)
  }

@gentype
let getError = data =>
  switch data {
  | Init
  | Loading
  | Complete(Ok(_))
  | Reloading(Ok(_)) =>
    None
  | Complete(Error(error))
  | Reloading(Error(error)) =>
    Some(error)
  }

@gentype
let getReloadingOk = data =>
  switch data {
  | Reloading(Ok(value)) => Some(value)
  | _ => None
  }

@gentype
let getReloadingError = data =>
  switch data {
  | Reloading(Error(error)) => Some(error)
  | _ => None
  }

@gentype
let getCompleteOk = data =>
  switch data {
  | Complete(Ok(value)) => Some(value)
  | _ => None
  }

@gentype
let getCompleteError = data =>
  switch data {
  | Complete(Error(error)) => Some(error)
  | _ => None
  }

@gentype
let map = (data, mapFn) =>
  switch data {
  | Init => Init
  | Loading => Loading
  | Reloading(Ok(value)) => makeReloadingOk(mapFn(value))
  | Reloading(Error(_)) as reloading => reloading
  | Complete(Ok(value)) => makeCompleteOk(mapFn(value))
  | Complete(Error(_)) as complete => complete
  }

@gentype
let mapError = (data, mapFn) =>
  switch data {
  | Init => Init
  | Loading => Loading
  | Reloading(Ok(_)) as reloading => reloading
  | Reloading(Error(error)) => makeReloadingError(mapFn(error))
  | Complete(Ok(_)) as complete => complete
  | Complete(Error(error)) => makeCompleteError(mapFn(error))
  }

@gentype
let tap = (data, fn) =>
  switch data {
  | Init
  | Loading
  | Reloading(Error(_))
  | Complete(Error(_)) => data
  | Reloading(Ok(value))
  | Complete(Ok(value)) =>
    fn(value)
    data
  }

@gentype
let tapError = (data, fn) =>
  switch data {
  | Init
  | Loading
  | Reloading(Ok(_))
  | Complete(Ok(_)) => data
  | Reloading(Error(error))
  | Complete(Error(error)) =>
    fn(error)
    data
  }

@gentype
let flatMap = (data, mapFn) =>
  switch data {
  | Init => Init
  | Loading => Loading
  | Reloading(Error(_)) as reloading => reloading
  | Complete(Error(_)) as reloading => reloading
  | Reloading(Ok(value))
  | Complete(Ok(value)) =>
    mapFn(value)
  }

@gentype
let fold = (data, okFn, errorFn, emptyFn) =>
  switch data {
  | Reloading(Ok(value))
  | Complete(Ok(value)) =>
    okFn(value)
  | Reloading(Error(error))
  | Complete(Error(error)) =>
    errorFn(error)
  | _ => emptyFn()
  }

@gentype
let foldOk = (data, okFn, otherFn) =>
  switch data {
  | Init => otherFn(Init)
  | Loading => otherFn(Loading)
  | Reloading(Error(_)) as reloading => otherFn(reloading)
  | Complete(Error(_)) as complete => otherFn(complete)
  | Reloading(Ok(value))
  | Complete(Ok(value)) =>
    okFn(value)
  }

@gentype
let foldError = (data, errorFn, otherFn) =>
  switch data {
  | Init => otherFn(Init)
  | Loading => otherFn(Loading)
  | Reloading(Error(error)) => errorFn(error)
  | Complete(Error(error)) => errorFn(error)
  | Reloading(Ok(_)) as reloading => otherFn(reloading)
  | Complete(Ok(_)) as complete => otherFn(complete)
  }

@gentype
let toAsyncData = data =>
  switch data {
  | Init => Init
  | Loading => Loading
  | Reloading(Error(value))
  | Reloading(Ok(value)) =>
    Reloading(value)
  | Complete(Error(value))
  | Complete(Ok(value)) =>
    Complete(value)
  }
