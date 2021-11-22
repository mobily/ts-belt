@val
external assign: (Js.Dict.t<'a>, Js.Dict.t<'a>, Js.Dict.t<'a>) => Js.Dict.t<'a> = "Object.assign"

@val
external entries: Js.Dict.t<'a> => array<(Js.Dict.key, 'a)> = "Object.entries"

export makeEmpty = Js.Dict.empty

export prop = (key, dict) => Js.Dict.unsafeGet(dict, key)

export toPairs = dict => entries(dict)

export values = dict => Js.Dict.values(dict)

export keys = dict => Js.Dict.keys(dict)

export fromPairs = dict => Js.Dict.fromArray(dict)

export merge = (fst, snd) => assign(makeEmpty(), fst, snd)

export map = (dict, mapFn) => {
  dict
  ->keys
  ->Belt.Array.mapU((. key) => {
    let value = mapFn(prop(key, dict))
    (key, value)
  })
  ->fromPairs
}

export mapWithKey = (dict, mapFn) => {
  dict
  ->keys
  ->Belt.Array.mapU((. key) => {
    let value = mapFn(prop(key, dict), key)
    (key, value)
  })
  ->fromPairs
}

export filter = (dict, predicateFn) => {
  dict
  ->keys
  ->Belt.Array.reduceU([], (. acc, key) => {
    let value = prop(key, dict)
    predicateFn(value) ? Array.append(acc, (key, value)) : acc
  })
  ->fromPairs
}

export filterWithKey = (dict, predicateFn) => {
  dict
  ->keys
  ->Belt.Array.reduceU([], (. acc, key) => {
    let value = prop(key, dict)
    predicateFn(value, key) ? Array.append(acc, (key, value)) : acc
  })
  ->fromPairs
}

export reject = (predicateFn, dict) => filter(dict, value => !predicateFn(value))

export rejectWithKey = (predicateFn, dict) =>
  filterWithKey(dict, (value, key) => !predicateFn(value, key))
