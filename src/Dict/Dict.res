open Externals

let placeholder = () => Js.Undefined.empty

%comment("Creates an empty object. Alternative for `const obj = {} as SomeObjectType`.")
@gentype
let makeEmpty = Js.Dict.empty

%comment("Returns the value if the given key exists, otherwise returns `undefined`.")
@gentype
let getUnsafe = (dict, key) => Js.Dict.unsafeGet(dict, key)

%comment("Returns `Some(value)` if the given key exists, otherwise returns `None`.")
@gentype
let get = (dict, key) => Js.Dict.get(dict, key)

%comment("@deprecated Use either `D.get` or `D.getUnsafe` instead.")
@gentype
let prop = (dict, key) => Js.Dict.unsafeGet(dict, key)

%comment("Converts an object into an array of `[key, value]` tuples.")
@gentype
let toPairs = dict => Externals.entries(dict)

%comment("Returns a new array that contains all values of the provided object.")
@gentype
let values = dict => Js.Dict.values(dict)

%comment("Returns a new array that contains all keys of the provided object.")
@gentype
let keys = dict => Js.Dict.keys(dict)

%comment("Creates a new object from an array of tuples (`[key, value]`).")
@gentype
let fromPairs = dict => Js.Dict.fromArray(dict)

%comment("Merges two provided objects.")
@gentype
let merge = (fst, snd) => assign2(makeEmpty(), fst, snd)

%comment("Adds a property. Equivalent to merging with `{key: value}`")
@gentype
let set = (dict, key, value) => {
  let obj = merge(makeEmpty(), dict)
  Js.Dict.set(obj, key, value)
  obj
}

%comment(
  "Updates a property by applying the provided function to the corresponding optional value."
)
@gentype
let update = (dict, key, fn) => {
  let optionalValue = get(dict, key)
  set(dict, key, fn(optionalValue))
}

%comment("Updates a property by applying the provided function to the corresponding value.")
@gentype
let updateUnsafe = (dict, key, fn) => {
  let value = getUnsafe(dict, key)
  set(dict, key, fn(value))
}

%comment("Returns a new object with the provided key deleted.")
@gentype
let deleteKey = (dict, key) => {
  let obj = merge(makeEmpty(), dict)
  Js.Dict.unsafeDeleteKey(. obj, key)
  obj
}

%comment("Returns a new object with the provided keys deleted.")
@gentype
let deleteKeys = (dict, keys) => {
  let obj = merge(makeEmpty(), dict)
  keys->Belt.Array.forEachU((. key) => {
    Js.Dict.unsafeDeleteKey(. obj, key)
  })
  obj
}

%comment("Transforms each value in the object to a new value using the provided function.")
@gentype
let map = (dict, mapFn) => {
  dict
  ->keys
  ->Belt.Array.mapU((. key) => {
    let value = mapFn(Js.Dict.unsafeGet(dict, key))
    (key, value)
  })
  ->fromPairs
}

%comment(
  "Transforms each value in the object to a new value using the provided function (which takes two arguments: a property value and key)."
)
@gentype
let mapWithKey = (dict, mapFn) => {
  dict
  ->keys
  ->Belt.Array.mapU((. key) => {
    let value = mapFn(key, Js.Dict.unsafeGet(dict, key))
    (key, value)
  })
  ->fromPairs
}

%comment("Removes each property that doesn't satisfy the given predicate function.")
@gentype
let filter = (dict, predicateFn) => {
  dict
  ->keys
  ->Belt.Array.reduceU([], (. acc, key) => {
    let value = Js.Dict.unsafeGet(dict, key)
    predicateFn(value) ? Array.append(acc, (key, value)) : acc
  })
  ->fromPairs
}

%comment(
  "Removes each property that doesn't satisfy the given predicate function (which takes two arguments: a property value and key)."
)
@gentype
let filterWithKey = (dict, predicateFn) => {
  dict
  ->keys
  ->Belt.Array.reduceU([], (. acc, key) => {
    let value = Js.Dict.unsafeGet(dict, key)
    predicateFn(key, value) ? Array.append(acc, (key, value)) : acc
  })
  ->fromPairs
}

%comment("Removes each property that satisfies the given predicate function.")
@gentype
let reject = (dict, predicateFn) => filter(dict, value => !predicateFn(value))

%comment(
  "Removes each property that satisfies the given predicate function (which takes two arguments: a property value and key)."
)
@gentype
let rejectWithKey = (dict, predicateFn) =>
  filterWithKey(dict, (key, value) => !predicateFn(key, value))

%comment("Returns a new object with the provided keys selected.")
@gentype
let selectKeys = (dict, keys) => {
  filterWithKey(dict, (key, _) => Js.Array.includes(key, keys))
}

%comment("Determines whether the given object is empty.")
@gentype
let isEmpty = dict => dict == makeEmpty()

%comment("Determines whether the given object is not empty.")
@gentype
let isNotEmpty = dict => !isEmpty(dict)
