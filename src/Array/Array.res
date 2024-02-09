open Externals

let placeholder = () => Js.Undefined.empty

%comment("Creates an empty array. Alternative for `const xs = [] as ReadonlyArray<A>`.")
@gentype
let makeEmpty = () => []

%comment(
  "Returns a new array of size `n` populated by `mapFn(index)`, or an empty array if `n` is negative."
)
@gentype
let makeWithIndex = (n, mapFn) => Belt.Array.makeByU(n, mapFn)

%comment(
  "Returns a new array of size `n` populated by `element`, or an empty array if `n` is negative."
)
@gentype
let make = (n, element) => Belt.Array.make(n, element)

%comment("Alias for `make`.")
@gentype
let repeat = (n, element) => make(n, element)

%comment("Returns the size of the provided array.")
@gentype
let length = xs => Belt.Array.length(xs)

%comment("Determines whether the given array is empty.")
@gentype
let isEmpty = xs => length(xs) == 0

%comment("Determines whether the given array is not empty.")
@gentype
let isNotEmpty = xs => length(xs) > 0

%comment("Returns a new array with the elements of the provided array in reverse order.")
@gentype
let reverse = xs => Belt.Array.reverse(xs)

%comment("Adds a single element to the end of an array.")
@gentype
let append = (xs, element) => Belt.Array.concat(xs, [element])

%comment("Prepends a single element to the start of the given array.")
@gentype
let prepend = (xs, element) => Belt.Array.concat([element], xs)

%comment(
  "Returns a new array which contains the given delimiter inserted before every element in the provided array."
)
@gentype
let prependToAll = (xs, delimiter) =>
  Belt.Array.reduceU(xs, [], (. acc, value) => Belt.Array.concat(acc, [delimiter, value]))

%comment("Creates a new array with the separator interposed between elements.")
@gentype
let intersperse = (xs, delimiter) => {
  Belt.Array.reduceWithIndexU(xs, [], (. acc, value, index) => {
    switch index {
    | x if xs->length->pred == x => Js.Array2.push(acc, value)
    | _ => Js.Array2.pushMany(acc, [value, delimiter])
    }->ignore
    acc
  })
}

%comment("Returns `Some(value)` at the given index, or `None` if the given index is out of range.")
@gentype
let get = (xs, index) => Belt.Array.get(xs, index)

%comment("Alias for `get`.")
@gentype
let at = (xs, index) => get(xs, index)

%comment(
  "Returns `value` at the given index (use only if you're entirely sure that a value exists at the given index)."
)
@gentype
let getUnsafe = (xs, index) => Belt.Array.getUnsafe(xs, index)

%comment("Returns `value` at the given index, or `undefined` if the given index is out of range.")
@gentype
let getUndefined = (xs, index) => Belt.Array.getUndefined(xs, index)

%comment(
  "Returns `Some(value)` for the first element in the array that satisifies the given predicate function, or `None` if no element satisifies the predicate."
)
@gentype
let getBy = (xs, predicateFn) => Belt.Array.getByU(xs, predicateFn)

%comment("Alias for `getBy`.")
@gentype
let find = (xs, predicateFn) => getBy(xs, predicateFn)

%comment(
  "Returns `Some(value)` where `value` is the first element of the array, or `None` if the given array is empty."
)
@gentype
let head = xs => get(xs, 0)

%comment(
  "Returns the last element (`Some(value)`) in the array, or `None` if the given array is empty."
)
@gentype
let last = xs => {
  let l = length(xs)
  l == 0 ? None : get(xs, l - 1)
}

%comment(
  "Returns a new array containing all but the the first element of the provided array, or `None` if the given array is empty (has no tail)."
)
@gentype
let tail = xs => {
  switch length(xs) {
  | l if l == 1 => Some([])
  | l if l == 0 => None
  | _ =>
    let xs = Belt.Array.sliceToEnd(xs, 1)
    isNotEmpty(xs) ? Some(xs) : None
  }
}

%comment(
  "Returns a new array containing all but the first element of the provided array, or an empty array if the given array is empty (has no tail)."
)
@gentype
let tailOrEmpty = xs =>
  switch tail(xs) {
  | Some(xs) => xs
  | None => []
  }

%comment(
  "Returns a new array (`Some(xs)`) with all elements except the last of the provided array."
)
@gentype
let init = xs => {
  let l = length(xs)
  l == 0 ? None : Some(Belt.Array.slice(xs, ~offset=0, ~len=l - 1))
}

%comment(
  "Returns a new array with all elements except the last of the provided array, or an empty array if the given array is empty."
)
@gentype
let initOrEmpty = xs =>
  switch init(xs) {
  | Some(xs) => xs
  | None => []
  }

%comment(
  "Returns a new array including the first `n` elements of the provided array, or an empty array if `n` is either negative or greater than the length of the provided array."
)
@gentype
let take = (xs, n) => {
  let l = length(xs)
  let len = n < 0 ? 0 : l < n ? l : n
  Belt.Array.slice(xs, ~offset=0, ~len)
}

%comment(
  "Returns a new array (`Some(xs)`) with the first `n` elements of the provided array, or `None` if `n` is either negative or greater than the length of the provided array."
)
@gentype
let takeExactly = (xs, n) =>
  n < 0 || n > length(xs) ? None : Some(Belt.Array.slice(xs, ~offset=0, ~len=n))

%comment(
  "Returns a new array, filled with elements from the provided array until an element doesn't pass the provided predicate."
)
@gentype
let takeWhile = (xs, predicateFn) => {
  let index = ref(0)
  let break = ref(false)
  let arr = []

  while index.contents < length(xs) && !break.contents {
    let value = Belt.Array.getUnsafe(xs, index.contents)

    if predicateFn(value) {
      Js.Array2.push(arr, value)->ignore
      index := succ(index.contents)
    } else {
      break := true
    }
  }

  arr
}

%comment(
  "Returns a new array that does not contain the first `n` elements of the provided array, or an empty array if `n` is either less than `0` or greater than the length of the provided array."
)
@gentype
let drop = (xs, n) => {
  let l = length(xs)
  let start = n < 0 ? 0 : l < n ? l : n
  Belt.Array.sliceToEnd(xs, start)
}

%comment(
  "Returns a new array (`Some(xs)`) that does not contain the first `n` elements of the provided array, or `None` if `n` is either less than `0` or greater than the length of the provided array."
)
@gentype
let dropExactly = (xs, n) => n < 0 || n > length(xs) ? None : Some(Belt.Array.sliceToEnd(xs, n))

%comment(
  "Drops elements from the beginning of the array until an element is reached which does not satisfy the given predicate."
)
@gentype
let dropWhile = (xs, predicateFn) => {
  let index = ref(0)
  let break = ref(false)
  let arr = []

  while index.contents < length(xs) && !break.contents {
    let value = Belt.Array.getUnsafe(xs, index.contents)

    if predicateFn(value) {
      index := succ(index.contents)
    } else {
      break := true
    }
  }
  while index.contents < length(xs) {
    Js.Array2.push(arr, Belt.Array.getUnsafe(xs, index.contents))->ignore
    index := succ(index.contents)
  }
  arr
}
%comment(
  "Splits the provided array into head and tail parts (as a tuple), but only if the array is not empty."
)
@gentype
let uncons = xs =>
  switch xs {
  | [] => None
  | _ => Some((Belt.Array.getExn(xs, 0), Belt.Array.sliceToEnd(xs, 1)))
  }

%comment("Returns a new array by calling `mapFn` for each element of the provided array.")
@gentype
let map = (xs, mapFn) => Belt.Array.mapU(xs, (. el) => mapFn(el))

%comment(
  "Returns a new array by calling `mapFn` (which takes two arguments: the element from array and its index) for each element of the provided array."
)
@gentype
let mapWithIndex = (xs, mapFn) => Belt.Array.mapWithIndexU(xs, mapFn)

%comment("Returns a new array that keep all elements satisfy the given predicate.")
@gentype
let filter = (xs, predicateFn) => {
  let index = ref(0)
  let arr = []

  while index.contents < length(xs) {
    let value = Belt.Array.getUnsafe(xs, index.contents)
    if predicateFn(value) {
      Js.Array2.push(arr, value)->ignore
    }
    index := succ(index.contents)
  }

  arr
}

%comment("Alias for `filter`.")
@gentype
let keep = (xs, predicateFn) => filter(xs, predicateFn)

%comment(
  "Returns a new array that keep all elements satisfy the given predicate (which take two arguments: the element for the array and its index)."
)
@gentype
let filterWithIndex = (xs, predicateFn) => {
  let index = ref(0)
  let arr = []

  while index.contents < length(xs) {
    let value = Belt.Array.getUnsafe(xs, index.contents)
    if predicateFn(index.contents, value) {
      Js.Array2.push(arr, value)->ignore
    }
    index := succ(index.contents)
  }

  arr
}

%comment("Alias for `filterWithIndex`.")
@gentype
let keepWithIndex = (xs, predicateFn) => filterWithIndex(xs, predicateFn)

%comment(
  "Returns a new array of elements from the provided array which do not satisfy the given predicate."
)
@gentype
let reject = (xs, predicateFn) => filter(xs, el => !predicateFn(el))

%comment(
  "Returns a new array of elements from the provided array which do not satisfy the given predicate (which take two arguments: the element for the array and its index)."
)
@gentype
let rejectWithIndex = (xs, predicateFn) =>
  filterWithIndex(xs, (index, el) => !predicateFn(index, el))

%comment(
  "Applies `reduceFn` (which has two parameters: an `accumulator` which starts with a value of `initialValue` and the next value from the array) to each element of the provided array, and eventually it returns the final value of the accumulator."
)
@gentype
let reduce = (xs, initialValue, reduceFn) => Belt.Array.reduceU(xs, initialValue, reduceFn)

%comment(
  "Works like A.reduce, except that the function `reduceFn` is applied to each item of `xs` from the last back to the first."
)
@gentype
let reduceReverse = (xs, initialValue, reduceFn) =>
  Belt.Array.reduceReverseU(xs, initialValue, reduceFn)

%comment(
  "Applies `reduceFn` (which has three parameters: an `accumulator` which starts with a value of `initialValue`, the next value from the array and its index) to each element of the provided array, and eventually it returns the final value of the accumulator."
)
@gentype
let reduceWithIndex = (xs, initialValue, reduceFn) =>
  Belt.Array.reduceWithIndexU(xs, initialValue, reduceFn)

%comment(
  "Returns two arrays (`Some([xs, ys])`), with the original array divided at the given index, or `None` if the index is out of range."
)
@gentype
let splitAt = (xs, offset) =>
  offset < 0 || offset > length(xs)
    ? None
    : Some((Belt.Array.slice(xs, ~offset=0, ~len=offset), Belt.Array.sliceToEnd(xs, offset)))

%comment(
  "Returns an array of arrays, where each of the inner arrays has length equal to the provided `size` parameter."
)
@gentype
let splitEvery = (xs, size) => {
  if size < 1 || length(xs) <= size {
    [xs]
  } else {
    let offset = ref(0)
    let arr = []

    while offset.contents < length(xs) {
      let len = offset.contents + size
      Js.Array2.push(arr, Belt.Array.slice(xs, ~offset=offset.contents, ~len=size))->ignore
      offset := len
    }

    arr
  }
}

%comment("Returns a new array with elements in the original array randomly shuffled.")
@gentype
let shuffle = xs => Belt.Array.shuffle(xs)

%comment(
  "Splits the provided array into two separate arrays - one containing elements which satisfy the predicate, and the other array containing the elements which do not satisfy the predicate."
)
@gentype
let partition = (xs, fn) => Belt.Array.partitionU(xs, fn)

%comment("Returns a new array containing the concatenation of two provided arrays.")
@gentype
let concat = (xs0, xs1) => Belt.Array.concat(xs0, xs1)

%comment("Returns a new array as the concatenation of the provided array of arrays.")
@gentype
let concatMany = xs => Belt.Array.concatMany(xs)

%comment("Returns `true`` if all elements satisfy the given predicate.")
@gentype
let every = (xs, fn) => Belt.Array.everyU(xs, fn)

%comment(
  "Returns `true` if at least one of the elements in the given array satifies the predicate."
)
@gentype
let some = (xs, fn) => Belt.Array.someU(xs, fn)

%comment(
  "Returns a new array with the `len` elements of the given array starting at `offset` (offset can be negative)."
)
@gentype
let slice = (xs, offset, len) => Belt.Array.slice(xs, ~offset, ~len)

%comment(
  "Returns a new array with the elements of the given array starting at `offset` (offset can be negative)."
)
@gentype
let sliceToEnd = (xs, offset) => Belt.Array.sliceToEnd(xs, offset)

%comment(
  "Returns `false` if length of both arrays is not the same, otherwise compares elements one by one using the comparator."
)
@gentype
let eq = (xs0, xs1, comparatorFn) => Belt.Array.eqU(xs0, xs1, comparatorFn)

%comment(
  "Returns a new inclusive array of numbers from `start` to `finish` (it returns an empty array when `start` > `finish`)."
)
@gentype
let range = (start, finish) => Belt.Array.range(start, finish)

%comment(
  "Returns a new inclusive array of numbers from `start` to `finish` (it returns an empty array when `step` is 0 or negative, it also returns an empty array when `start` > `finish`)."
)
@gentype
let rangeBy = (start, finish, step) => Belt.Array.rangeBy(start, finish, ~step)

%comment("Returns a copy of the provided array.")
@gentype
let copy = xs => Belt.Array.copy(xs)

%comment("Creates a new array of pairs from corresponding elements of two provided arrays.")
@gentype
let zip = (xs0, xs1) => Belt.Array.zip(xs0, xs1)

%comment(
  "Creates a new array by applying `zipFn` to corresponding elements of two provided arrays."
)
@gentype
let zipWith = (xs0, xs1, zipFn) => Belt.Array.zipByU(xs0, xs1, zipFn)

%comment(
  "Takes an array of pairs and creates a pair of arrays. The first array contains all the first elements of the pairs and the other one contains all the second elements."
)
@gentype
let unzip = xs => Belt.Array.unzip(xs)

%comment(
  "Creates a new array by replacing the value at the given index with the given value (no replacement is made if the index is out of range)."
)
@gentype
let replaceAt = (xs, targetIndex, element) =>
  mapWithIndex(xs, (. currentIndex, current) => currentIndex == targetIndex ? element : current)

%comment(
  "Creates a new array that inserts the given value at the given index (no insertion is made if the index is out of range)."
)
@gentype
let insertAt = (xs, targetIndex, element) =>
  switch splitAt(xs, targetIndex) {
  | Some((before, after)) => concat(before, concat([element], after))
  | None => xs
  }

%comment(
  "Creates a new array that replaces the value at the given index with the value returned by the provided function (the original array if the index is out of range)."
)
@gentype
let updateAt = (xs, targetIndex, fn) =>
  mapWithIndex(xs, (. index, el) => index == targetIndex ? fn(el) : el)

%comment(
  "Creates a new array with the elements at the two given indexes swapped (the original array if the index is out of range)."
)
@gentype
let swapAt = (xs, targetIndex, swapIndex) =>
  switch (get(xs, targetIndex), get(xs, swapIndex)) {
  | (Some(a), Some(b)) =>
    mapWithIndex(xs, (. k, x) => targetIndex == k ? b : swapIndex == k ? a : x)
  | _ => xs
  }

%comment(
  "Creates a new array without the element at the given index (the original array if the index is out of range)."
)
@gentype
let removeAt = (xs, targetIndex) => filterWithIndex(xs, (index, _) => index != targetIndex)

%comment(
  "Returns a new array containing only one copy of each element in the provided array, based upon the value returned by applying the function to each element."
)
@gentype
let uniqBy = (xs, uniqFn) => {
  let index = ref(0)
  let arr = []

  while index.contents < length(xs) {
    let value = Belt.Array.getUnsafe(xs, index.contents)
    let alreadyAdded = some(arr, (. x) => uniqFn(coerce(x)) == uniqFn(value))

    if !alreadyAdded {
      Js.Array2.push(arr, value)->ignore
    }

    index := succ(index.contents)
  }

  arr
}

%comment("Returns a new array containing only one copy of each element in the provided array.")
@gentype
let uniq = xs => uniqBy(xs, element => element)

%comment("Calls `fn` on each element of the provided array.")
@gentype
let forEach = (xs, fn) => Belt.Array.forEachU(xs, fn)

%comment(
  "Calls `fn` (which takes two arguments: the element from array and its index) on each element of the provided array."
)
@gentype
let forEachWithIndex = (xs, fn) => Belt.Array.forEachWithIndexU(xs, fn)

%comment(
  "Returns `Some(index)` for the first value in the provided array that satisifies the predicate function."
)
@gentype
let getIndexBy = (xs, predicateFn) => Belt.Array.getIndexByU(xs, predicateFn)

%comment(
  "Returns `true` if the provided value is equal to at least one element of the given array."
)
@gentype
let includes = (xs, value) => Belt.Array.someU(xs, (. x) => x == value)

%comment(
  "Converts each element of the array to a string and concatenates them, separated by the given string."
)
@gentype
let join = (xs, delimiter) => Js.Array2.joinWith(xs, delimiter)

%comment("Returns a new array, sorted according to the comparator function.")
@gentype
let sort = (xs, sortFn) => Belt.SortArray.stableSortByU(xs, sortFn)

%comment("Returns a new array, sorted according to the provided function.")
@gentype
let sortBy = (xs, sortFn) =>
  sort(xs, (. a, b) => {
    let a = sortFn(a)
    let b = sortFn(b)
    a === b ? 0 : a < b ? -1 : 1
  })

%comment(
  "Splits the given array into sub-arrays in an object, grouped by the result of running each value through the provided function."
)
@gentype
let groupBy = (xs, groupFn) =>
  Belt.Array.reduceU(xs, Js.Dict.empty(), (. acc, element) => {
    let key = groupFn(element)
    let value = Js.Dict.get(acc, key)

    switch value {
    | Some(xs) => Js.Array2.push(xs, element)->ignore
    | None => Js.Dict.set(acc, key, [element])
    }

    acc
  })

%comment(
  "Creates a new array with all sub-array elements concatenated into it (the single level depth)."
)
@gentype
let flat = xs =>
  Belt.Array.reduceU(xs, [], (. acc, value) => {
    if Js.Array2.isArray(value) {
      Belt.Array.forEachU(value, (. element) => Js.Array2.push(acc, element)->ignore)
    } else {
      Js.Array2.push(acc, coerce(value))->ignore
    }
    acc
  })

let rec flatten = (xs, arr) => {
  let index = ref(0)

  while index.contents < length(xs) {
    let value = Belt.Array.getUnsafe(xs, index.contents)
    if Js.Array2.isArray(value) {
      flatten(coerce(value), arr)->ignore
    } else {
      Js.Array2.push(arr, value)->ignore
    }
    index := succ(index.contents)
  }

  arr
}

%comment(
  "Creates a new array with all sub-array elements concatenated into it recursively up to the `Infinite` depth."
)
@gentype
let deepFlat = xs => flatten(xs, [])

%comment("Converts the given array to the TypeScript's tuple.")
@gentype
let toTuple = xs => xs

%comment("Applies a side-effect function on each element of the provided array.")
@gentype
let tap = (xs, fn) => {
  Belt.Array.forEachU(xs, fn)
  xs
}

%comment("Returns a new tuple with the reverse order of the elements.")
@gentype
let flip = xs => {
  let (fst, snd) = xs
  (snd, fst)
}

%comment(
  "Returns a new array that keep all elements that return `Some(value)` applied within `predicateFn`."
)
@gentype
let filterMap = (xs, predicateFn) => Belt.Array.keepMapU(xs, predicateFn)

%comment("Alias for `filterMap`.")
@gentype
let keepMap = (xs, predicateFn) => filterMap(xs, predicateFn)

%comment(
  "Removes the first occurrence of the given value from the array, using the given equality function."
)
@gentype
let removeFirstBy = (xs, value, predicateFn) => {
  let (_, xs) = Belt.Array.reduceU(xs, (false, []), (. acc, v) => {
    let (found, ys) = acc
    if found {
      Js.Array2.push(ys, v)->ignore
      (true, ys)
    } else if predicateFn(v, value) {
      (true, ys)
    } else {
      Js.Array2.push(ys, v)->ignore
      (false, ys)
    }
  })
  xs
}

%comment("Creates a copy of the given array with the first occurrence of the given element removed")
@gentype
let removeFirst = (xs, value) => removeFirstBy(xs, value, (x, y) => x == y)

%comment("Creates a new array of each value paired with its index in a tuple.")
@gentype
let zipWithIndex = xs => {
  Belt.Array.reduceWithIndexU(xs, [], (. acc, value, index) => {
    Js.Array2.push(acc, (value, index))->ignore
    acc
  })
}

%comment(
  "Returns `true` if all elements of the array match the predicate function, otherwise, returns `false`."
)
@gentype
let all = (xs, predicateFn) => Belt.Array.everyU(xs, (. value) => predicateFn(value))

%comment(
  "Returns `true` if at least one of the elements of the array match the predicate function, otherwise, returns `false`."
)
@gentype
let any = (xs, predicateFn) => Belt.Array.someU(xs, (. value) => predicateFn(value))

%comment("Returns elements from the first array, not existing in the second array.")
@gentype
let difference = (xs, ys) => xs->uniq->reject(value => includes(ys, value))

%comment("Returns union of two arrays.")
@gentype
let union = (xs, ys) => xs->concat(ys)->uniq

%comment("Returns intersection of two arrays.")
@gentype
let intersection = (xs, ys) => {
  let (xs, ys) = Belt.Array.length(xs) > Belt.Array.length(ys) ? (xs, ys) : (ys, xs)
  xs->filter(value => includes(ys, value))->uniq
}

@gentype
let sample = xs => {
  let offset = xs->Belt.Array.length->pred
  Belt.Array.getUnsafe(xs, Js.Math.random_int(0, offset))
}

@gentype
let flatMap = (xs, fn) => {
  xs->map(fn)->flat
}
