@val
external assign: (Js.Dict.t<'a>, Js.Dict.t<'a>, Js.Dict.t<'a>) => Js.Dict.t<'a> = "Object.assign"
let internalFn = (dict, mapFn) => dict |> Js.Dict.keys |> mapFn |> Js.Dict.fromArray

let makeEmpty = Js.Dict.empty
let prop = (key, dict) => Js.Dict.unsafeGet(dict, key)
let entries = Js.Dict.entries
let values = Js.Dict.values
let keys = Js.Dict.keys
let fromPairs = Js.Dict.fromArray
let merge = (fst, snd) => assign(makeEmpty(), fst, snd)
let map = (mapFn, dict) => {
  internalFn(
    dict,
    Array.map((. key) => {
      let value = mapFn(prop(key, dict))
      (key, value)
    }),
  )
}
let mapWithKey = (mapFn, dict) => {
  internalFn(
    dict,
    Array.map((. key) => {
      let value = mapFn(prop(key, dict), key)
      (key, value)
    }),
  )
}
let filter = (predicateFn, dict) => {
  internalFn(dict, Array.reduce((. acc, key) => {
      let value = prop(key, dict)
      predicateFn(value) ? Array.append((key, value), acc) : acc
    }, []))
}
let filterWithKey = (predicateFn, dict) => {
  internalFn(dict, Array.reduce((. acc, key) => {
      let value = prop(key, dict)
      predicateFn(value, key) ? Array.append((key, value), acc) : acc
    }, []))
}
let reject = (predicateFn, dict) => filter(value => !predicateFn(value), dict)
let rejectWithKey = (predicateFn, dict) =>
  filterWithKey((value, key) => !predicateFn(value, key), dict)
