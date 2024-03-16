open Promise
open Externals

exception AsyncResultError({message: string})

let mapException = exn => {
  switch exn {
  | JsError(error) => Error(error)
  | _ as exn => Error(unsafeToJsExn(exn))
  }
}

let handleException = exn => resolve(mapException(exn))

@gentype
let make = promise => {
  promise->thenResolve(value => Ok(value))->catch(handleException)
}

@gentype
let map = (promise, mapFn) => {
  promise->thenResolve(Belt.Result.mapU(_, mapFn))
}

@gentype
let flatMap = (promise, mapFn) => {
  promise->thenResolve(Belt.Result.flatMapU(_, mapFn))
}

@gentype
let fold = (promise, mapFn) => {
  promise->then(result => {
    Belt.Result.flatMapU(result, mapFn)->resolve
  })
}

@gentype
let mapWithDefault = (promise, defaultValue, mapFn) => {
  promise->thenResolve(Belt.Result.mapWithDefaultU(_, defaultValue, mapFn))
}

@gentype
let getWithDefault = (promise, defaultValue) => {
  promise->thenResolve(Belt.Result.getWithDefault(_, defaultValue))
}

@gentype
let filter = (promise, predicateFn) => {
  promise->thenResolve(
    Belt.Result.flatMapU(_, (. value) =>
      predicateFn(value)
        ? Ok(value)
        : Error(AsyncResultError({message: "[AsyncResult.filter]: not found"}))
    ),
  )
}

@gentype
let match = (promise, okFn, errorFn) => {
  promise->thenResolve(option => {
    switch option {
    | Ok(value) => okFn(value)
    | Error(error) => errorFn(error)
    }
  })
}

@gentype
let toOption = asyncResult => {
  asyncResult->thenResolve(result => {
    switch result {
    | Ok(None) => None
    | Ok(value) => Some(value)
    | Error(_) => None
    }->Js.Promise.resolve
  })
}

@gentype
let toNullable = promise => getWithDefault(promise, Js.null)

@gentype
let toUndefined = promise => getWithDefault(promise, Js.undefined)

@gentype
let tap = (promise, tapFn) => {
  promise->thenResolve(result => {
    switch result {
    | Ok(value) =>
      tapFn(value)
      result
    | Error(_) => result
    }
  })
}

@gentype
let tapError = (promise, tapFn) => {
  promise->thenResolve(result => {
    switch result {
    | Ok(_) => result
    | Error(error) =>
      tapFn(error)
      result
    }
  })
}

@gentype
let handleError = (promise, mapFn) => {
  promise->thenResolve(result => {
    switch result {
    | Ok(_) as result => result
    | Error(err) => Ok(mapFn(err))
    }
  })
}

@gentype
let mapError = (promise, mapFn) => {
  promise->thenResolve(result => {
    switch result {
    | Ok(_) as result => result
    | Error(err) => Error(mapFn(err))
    }
  })
}

@gentype
let catchError = (promise, mapFn) => {
  promise->thenResolve(result => {
    switch result {
    | Ok(_) as result => result
    | Error(err) => mapFn(err)
    }
  })
}

@gentype
let recover = (promise, defaultValue) => catchError(promise, _ => Ok(defaultValue))

@gentype
let flip = promise => {
  promise->thenResolve(result => {
    switch result {
    | Ok(value) => Error(value)
    | Error(err) => Ok(err)
    }
  })
}

@gentype
let flatten = promise => {
  promise->thenResolve(Belt.Result.flatMapU(_, (. value) => value))
}

@gentype
let reject = error => resolve(Error(error))

@gentype
let resolve = value => resolve(Ok(value))
