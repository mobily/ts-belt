@val
external assign: (Js.Dict.t<'a>, Js.Dict.t<'a>, Js.Dict.t<'a>) => Js.Dict.t<'a> = "Object.assign"

let makeEmpty = Js.Dict.empty
let prop = (key, dict) => Js.Dict.unsafeGet(dict, key)
let entries = Js.Dict.entries
let values = Js.Dict.values
let keys = Js.Dict.keys
let fromPairs = Js.Dict.fromArray
let merge = (fst, snd) => assign(makeEmpty(), fst, snd)
