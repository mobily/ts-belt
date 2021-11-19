@val
external assign: (Js.Dict.t<'a>, Js.Dict.t<'a>, Js.Dict.t<'a>) => Js.Dict.t<'a> = "Object.assign"

@val
external entries: Js.Dict.t<'a> => array<(Js.Dict.key, 'a)> = "Object.entries"

@gentype
let makeEmpty = Js.Dict.empty

@gentype
let prop = (key, dict) => Js.Dict.unsafeGet(dict, key)

@gentype
let toPairs = dict => entries(dict)

@gentype
let values = dict => Js.Dict.values(dict)

@gentype
let keys = dict => Js.Dict.keys(dict)

@gentype
let fromPairs = dict => Js.Dict.fromArray(dict)

@gentype
let merge = (fst, snd) => assign(makeEmpty(), fst, snd)

@gentype
let map = (dict, mapFn) => {
  dict
  ->keys
  ->Array.map(key => {
    let value = mapFn(prop(key, dict))
    (key, value)
  })
  ->fromPairs
}

@gentype
let mapWithKey = (dict, mapFn) => {
  dict
  ->keys
  ->Array.map(key => {
    let value = mapFn(prop(key, dict), key)
    (key, value)
  })
  ->fromPairs
}

@gentype
let filter = (dict, predicateFn) => {
  dict
  ->keys
  ->Array.reduce([], (. acc, key) => {
    let value = prop(key, dict)
    predicateFn(value) ? Array.append(acc, (key, value)) : acc
  })
  ->fromPairs
}

@gentype
let filterWithKey = (dict, predicateFn) => {
  dict
  ->keys
  ->Array.reduce([], (. acc, key) => {
    let value = prop(key, dict)
    predicateFn(value, key) ? Array.append(acc, (key, value)) : acc
  })
  ->fromPairs
}

@gentype
let reject = (predicateFn, dict) => filter(dict, value => !predicateFn(value))

@gentype
let rejectWithKey = (predicateFn, dict) =>
  filterWithKey(dict, (value, key) => !predicateFn(value, key))
