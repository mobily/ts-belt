open Externals

let placeholder = () => Js.Undefined.empty

%comment("Creates an empty object. Alternative for `const obj = {} as SomeObjectType`.")
export makeEmpty = Js.Dict.empty

%comment("Returns the value of the given property.")
export prop = (dict, key) => Js.Dict.unsafeGet(dict, key)

%comment("Converts an object into an array of `[key, value]` tuples.")
export toPairs = dict => entries(dict)

%comment("Returns a new array that contains all values of the provided object.")
export values = dict => Js.Dict.values(dict)

%comment("Returns a new array that contains all keys of the provided object.")
export keys = dict => Js.Dict.keys(dict)

%comment("Creates a new object from an array of tuples (`[key, value]`).")
export fromPairs = dict => Js.Dict.fromArray(dict)

%comment("Merges two provided objects.")
export merge = (fst, snd) => assign(makeEmpty(), fst, snd)

%comment("Transforms each value in the object to a new value using the provided function.")
export map = (dict, mapFn) => {
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
export mapWithKey = (dict, mapFn) => {
  dict
  ->keys
  ->Belt.Array.mapU((. key) => {
    let value = mapFn(Js.Dict.unsafeGet(dict, key), key)
    (key, value)
  })
  ->fromPairs
}

%comment("Removes each property that doesn't satisfy the given predicate function.")
export filter = (dict, predicateFn) => {
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
export filterWithKey = (dict, predicateFn) => {
  dict
  ->keys
  ->Belt.Array.reduceU([], (. acc, key) => {
    let value = Js.Dict.unsafeGet(dict, key)
    predicateFn(value, key) ? Array.append(acc, (key, value)) : acc
  })
  ->fromPairs
}

%comment("Removes each property that satisfies the given predicate function.")
export reject = (dict, predicateFn) => filter(dict, value => !predicateFn(value))

%comment(
  "Removes each property that satisfies the given predicate function (which takes two arguments: a property value and key)."
)
export rejectWithKey = (dict, predicateFn) =>
  filterWithKey(dict, (value, key) => !predicateFn(value, key))
