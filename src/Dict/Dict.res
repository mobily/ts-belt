@val
external assign: (Js.Dict.t<'a>, Js.Dict.t<'a>, Js.Dict.t<'a>) => Js.Dict.t<'a> = "Object.assign"

let makeEmpty = Js.Dict.empty
let prop = (key, dict) => Js.Dict.unsafeGet(dict, key)
let entries = Js.Dict.entries
let values = Js.Dict.values
let keys = Js.Dict.keys
let fromPairs = Js.Dict.fromArray
let merge = (fst, snd) => assign(makeEmpty(), fst, snd)
let map = (mapFn, dict) => {
  dict
  |> keys
  |> Array.map((. key) => {
    let value = mapFn(prop(key, dict))
    (key, value)
  })
  |> fromPairs
}
let filter = (predicateFn, dict) => {
  dict |> keys |> Array.reduce((. acc, key) => {
    let value = prop(key, dict)
    predicateFn(value) ? Array.append((key, value), acc) : acc
  }, []) |> fromPairs
}
let reject = (predicateFn, dict) => filter(value => !predicateFn(value), dict)
