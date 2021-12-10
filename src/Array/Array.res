open Externals

let placeholder = () => Js.Undefined.empty

%comment("Creates an empty array. Alternative for `const xs = [] as ReadonlyArray<A>`.")
export makeEmpty = () => []

%comment(
  "Returns a new array of size `n` populated by `mapFn(index)`, or an empty array if `n` is negative."
)
export makeWithIndex = (n, mapFn) => Belt.Array.makeByU(n, mapFn)

%comment(
  "Returns a new array of size `n` populated by `element`, or an empty array if `n` is negative."
)
export make = (n, element) => Belt.Array.make(n, element)

%comment("Alias for `make`.")
export repeat = (n, element) => Belt.Array.make(n, element)

%comment("Returns the size of the provided array.")
export length = xs => Belt.Array.length(xs)

%comment("Determines whether the array is empty.")
export isEmpty = xs => length(xs) == 0

%comment("Determines whether the array is not empty.")
export isNotEmpty = xs => length(xs) > 0

%comment("Returns a new array with the elements of the provided array in reverse order.")
export reverse = xs => Belt.Array.reverse(xs)

%comment("Adds a single element to the end of an array.")
export append = (xs, element) => Belt.Array.concat(xs, [element])

%comment("Prepends a single element to the start of the given array.")
export prepend = (xs, element) => Belt.Array.concat([element], xs)

%comment(
  "Returns a new array which contains the given delimiter inserted before every element in the provided array."
)
export prependToAll = (xs, delimiter) =>
  Belt.Array.reduceU(xs, [], (. acc, value) => Belt.Array.concat([delimiter, value], acc))

%comment("Creates a new array with the separator interposed between elements.")
export intersperse = (xs, delimiter) =>
  Belt.Array.reduceWithIndexU(xs, [], (. acc, value, index) => {
    switch index {
    | x if xs->length->pred == x => Js.Array2.push(acc, value)
    | _ => Js.Array2.pushMany(acc, [value, delimiter])
    }->ignore
    acc
  })

%comment("Returns `Some(value)` at the given index, or `None` if the given index is out of range.")
export get = (xs, index) => Belt.Array.get(xs, index)

%comment("Alias for `get`.")
export at = (xs, index) => get(xs, index)

%comment(
  "Returns `value` at the given index (use only if you're entirely sure that a value exists at the given index)."
)
export getUnsafe = (xs, index) => Belt.Array.getUnsafe(xs, index)

%comment("Returns `value` at the given index, or `undefined` if the given index is out of range.")
export getUndefined = (xs, index) => Belt.Array.getUndefined(xs, index)

%comment(
  "Returns `Some(value)` for the first element in the array that satisifies the given predicate function, or `None` if no element satisifies the predicate."
)
export getBy = (xs, predicateFn) => Belt.Array.getByU(xs, predicateFn)

%comment("Alias for `getBy`.")
export find = (xs, predicateFn) => getBy(xs, predicateFn)

%comment(
  "Returns `Some(value)` where `value` is the first element of the array, or `None` if the given array is empty."
)
export head = xs => get(xs, 0)

%comment(
  "Returns the last element (`Some(value)`) in the array, or `None` if the given array is empty."
)
export last = xs => {
  let l = length(xs)
  l == 0 ? None : get(xs, l - 1)
}

%comment(
  "Returns a new array containing all but the the first element of the provided array, or `None` if the given array is empty (has no tail)."
)
export tail = xs => {
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
export tailOrEmpty = xs =>
  switch tail(xs) {
  | Some(xs) => xs
  | None => []
  }

%comment(
  "Returns a new array (`Some(xs)`) with all elements except the last of the provided array."
)
export init = xs => {
  let l = length(xs)
  l == 0 ? None : Some(Belt.Array.slice(xs, ~offset=0, ~len=l - 1))
}

%comment(
  "Returns a new array with all elements except the last of the provided array, or an empty array if the given array is empty."
)
export initOrEmpty = xs =>
  switch init(xs) {
  | Some(xs) => xs
  | None => []
  }

%comment(
  "Returns a new array including the first `n` elements of the provided array, or an empty array if `n` is either negative or greater than the length of the provided array."
)
export take = (xs, n) => {
  let l = length(xs)
  let len = n < 0 ? 0 : l < n ? l : n
  Belt.Array.slice(xs, ~offset=0, ~len)
}

%comment(
  "Returns a new array (`Some(xs)`) with the first `n` elements of the provided array, or `None` if `n` is either negative or greater than the length of the provided array."
)
export takeExactly = (xs, n) =>
  n < 0 || n > length(xs) ? None : Some(Belt.Array.slice(xs, ~offset=0, ~len=n))

%comment(
  "Returns a new array, filled with elements from the provided array until an element doesn't pass the provided predicate."
)
export takeWhile = (xs, predicateFn) =>
  Belt.Array.reduceU(xs, [], (. acc, element) => {
    if predicateFn(element) {
      Js.Array2.push(acc, element)->ignore
    }
    acc
  })

%comment(
  "Returns a new array that does not contain the first `n` elements of the provided array, or an empty array if `n` is either less than `0` or greater than the length of the provided array."
)
export drop = (xs, n) => {
  let l = length(xs)
  let start = n < 0 ? 0 : l < n ? l : n
  Belt.Array.sliceToEnd(xs, start)
}

%comment(
  "Returns a new array (`Some(xs)`) that does not contain the first `n` elements of the provided array, or `None` if `n` is either less than `0` or greater than the length of the provided array."
)
export dropExactly = (xs, n) => n < 0 || n > length(xs) ? None : Some(Belt.Array.sliceToEnd(xs, n))

%comment(
  "Drops elements from the beginning of the array until an element is reached which does not satisfy the given predicate."
)
export dropWhile = (xs, predicateFn) =>
  Belt.Array.reduceU(xs, [], (. acc, element) => {
    if !predicateFn(element) {
      Js.Array2.push(acc, element)->ignore
    }
    acc
  })

%comment(
  "Splits the provided array into head and tail parts (as a tuple), but only if the array is not empty."
)
export uncons = xs =>
  switch xs {
  | [] => None
  | _ => Some((Belt.Array.getExn(xs, 0), Belt.Array.sliceToEnd(xs, 1)))
  }

%comment("Returns a new array by calling `mapFn` for each element of the provided array.")
export map = (xs, mapFn) => Belt.Array.mapU(xs, (. el) => mapFn(el))

%comment(
  "Returns a new array by calling `mapFn` (which takes two arguments: the element from array and its index) for each element of the provided array."
)
export mapWithIndex = (xs, mapFn) => Belt.Array.mapWithIndexU(xs, mapFn)

%comment("Returns a new array that keep all elements satisfy the given predicate.")
export filter = (xs, predicateFn) => {
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

%comment(
  "Returns a new array that keep all elements satisfy the given predicate (which take two arguments: the element for the array and its index)."
)
export filterWithIndex = (xs, predicateFn) => {
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

%comment(
  "Returns a new array of elements from the provided array which do not satisfy the given predicate."
)
export reject = (xs, predicateFn) => filter(xs, el => !predicateFn(el))

%comment(
  "Returns a new array of elements from the provided array which do not satisfy the given predicate (which take two arguments: the element for the array and its index)."
)
export rejectWithIndex = (xs, predicateFn) =>
  filterWithIndex(xs, (index, el) => !predicateFn(index, el))

%comment(
  "Applies `reduceFn` (which has two parameters: an `accumulator` which starts with a value of `initialValue` and the next value from the array) to each element of the provided array, and eventually it returns the final value of the accumulator."
)
export reduce = (xs, initialValue, reduceFn) => Belt.Array.reduceU(xs, initialValue, reduceFn)

%comment(
  "Applies `reduceFn` (which has three parameters: an `accumulator` which starts with a value of `initialValue`, the next value from the array and its index) to each element of the provided array, and eventually it returns the final value of the accumulator."
)
export reduceWithIndex = (xs, initialValue, reduceFn) =>
  Belt.Array.reduceWithIndexU(xs, initialValue, reduceFn)

%comment(
  "Returns two arrays (`Some([xs, ys])`), with the original array divided at the given index, or `None` if the index is out of range."
)
export splitAt = (xs, offset) =>
  offset < 0 || offset > length(xs)
    ? None
    : Some((Belt.Array.slice(xs, ~offset=0, ~len=offset), Belt.Array.sliceToEnd(xs, offset)))

%comment(
  "Returns an array of arrays, where each of the inner arrays has length equal to the provided `size` parameter."
)
export splitEvery = (xs, size) => {
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
export shuffle = xs => Belt.Array.shuffle(xs)

%comment(
  "Splits the provided array into two separate arrays - one containing elements which satisfy the predicate, and the other array containing the elements which do not satisfy the predicate."
)
export partition = (xs, fn) => Belt.Array.partitionU(xs, fn)

%comment("Returns a new array containing the concatenation of two provided arrays.")
export concat = (xs0, xs1) => Belt.Array.concat(xs0, xs1)

%comment("Returns a new array as the concatenation of the provided array of arrays.")
export concatMany = xs => Belt.Array.concatMany(xs)

%comment("Returns `true`` if all elements satisfy the given predicate.")
export every = (xs, fn) => Belt.Array.everyU(xs, fn)

%comment(
  "Returns `true` if at least one of the elements in the given array satifies the predicate."
)
export some = (xs, fn) => Belt.Array.someU(xs, fn)

%comment(
  "Returns a new array with the `len` elements of the given array starting at `offset` (offset can be negative)."
)
export slice = (xs, offset, len) => Belt.Array.slice(xs, ~offset, ~len)

%comment(
  "Returns a new array with the elements of the given array starting at `offset` (offset can be negative)."
)
export sliceToEnd = (xs, offset) => Belt.Array.sliceToEnd(xs, offset)

%comment(
  "Returns `false` if length of both arrays is not the same, otherwise compares elements one by one using the comparator."
)
export eq = (xs0, xs1, comparatorFn) => Belt.Array.eqU(xs0, xs1, comparatorFn)

%comment("Returns a new array of numbers from `start` (inclusive) to `finish` (exclusive).")
export range = (start, finish) => Belt.Array.range(start, finish)

%comment("Returns a new array of numbers from `start` (inclusive) to `finish` (exclusive).")
export rangeBy = (start, finish, step) => Belt.Array.rangeBy(start, finish, ~step)

%comment("Returns a copy of the provided array.")
export copy = xs => Belt.Array.copy(xs)

%comment("Creates a new array of pairs from corresponding elements of two provided arrays.")
export zip = (xs0, xs1) => Belt.Array.zip(xs0, xs1)

%comment(
  "Creates a new array by applying `zipFn` to corresponding elements of two provided arrays."
)
export zipWith = (xs0, xs1, zipFn) => Belt.Array.zipByU(xs0, xs1, zipFn)

%comment(
  "Takes an array of pairs and creates a pair of arrays. The first array contains all the first elements of the pairs and the other one contains all the second elements."
)
export unzip = xs => Belt.Array.unzip(xs)

%comment(
  "Creates a new array by replacing the value at the given index with the given value (no replacement is made if the index is out of range)."
)
export replaceAt = (xs, targetIndex, element) =>
  mapWithIndex(xs, (. currentIndex, current) => currentIndex == targetIndex ? element : current)

%comment(
  "Creates a new array that inserts the given value at the given index (no insertion is made if the index is out of range)."
)
export insertAt = (xs, targetIndex, element) =>
  switch splitAt(xs, targetIndex) {
  | Some((before, after)) => concat(before, concat([element], after))
  | None => xs
  }

%comment(
  "Creates a new array that replaces the value at the given index with the value returned by the provided function (the original array if the index is out of range)."
)
export updateAt = (xs, targetIndex, fn) =>
  mapWithIndex(xs, (. index, el) => index == targetIndex ? fn(el) : el)

%comment(
  "Creates a new array with the elements at the two given indexes swapped (the original array if the index is out of range)."
)
export swapAt = (xs, targetIndex, swapIndex) =>
  switch (get(xs, targetIndex), get(xs, swapIndex)) {
  | (Some(a), Some(b)) =>
    mapWithIndex(xs, (. k, x) => targetIndex == k ? b : swapIndex == k ? a : x)
  | _ => xs
  }

%comment(
  "Creates a new array without the element at the given index (the original array if the index is out of range)."
)
export removeAt = (xs, targetIndex) => filterWithIndex(xs, (index, _) => index != targetIndex)

%comment(
  "Returns a new array containing only one copy of each element in the provided array, based upon the value returned by applying the function to each element."
)
export uniqBy = (xs, uniqFn) => {
  let index = ref(0)
  let arr = []

  while index.contents < length(xs) {
    let value = Belt.Array.getUnsafe(xs, index.contents)
    let alreadyAdded = some(arr, (. x) => uniqFn(unsafe(x)) == uniqFn(value))

    if !alreadyAdded {
      Js.Array2.push(arr, value)->ignore
    }

    index := succ(index.contents)
  }

  arr
}

%comment("Returns a new array containing only one copy of each element in the provided array.")
export uniq = xs => uniqBy(xs, element => element)

%comment("Calls `fn` on each element of the provided array.")
export forEach = (xs, fn) => Belt.Array.forEachU(xs, fn)

%comment(
  "Calls `fn` (which takes two arguments: the element from array and its index) on each element of the provided array."
)
export forEachWithIndex = (xs, fn) => Belt.Array.forEachWithIndexU(xs, fn)

%comment(
  "Returns `Some(index)` for the first value in the provided array that satisifies the predicate function."
)
export getIndexBy = (xs, predicateFn) => Belt.Array.getIndexByU(xs, predicateFn)

%comment(
  "Returns `true` if the provided value is equal to at least one element of the given array."
)
export includes = (xs, value) => Belt.Array.someU(xs, (. x) => x == value)

%comment(
  "Converts each element of the array to a string and concatenates them, separated by the given string."
)
export join = (xs, delimiter) => Js.Array2.joinWith(xs, delimiter)

%comment("Returns a new array, sorted according to the comparator function.")
export sort = (xs, sortFn) => Belt.SortArray.stableSortByU(xs, sortFn)

%comment("Returns a new array, sorted according to the provided function.")
export sortBy = (xs, sortFn) =>
  sort(xs, (. a, b) => {
    let a = sortFn(a)
    let b = sortFn(b)
    a === b ? 0 : a < b ? -1 : 1
  })

%comment(
  "Splits the given array into sub-arrays in an object, grouped by the result of running each value through the provided function."
)
export groupBy = (xs, groupFn) =>
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
export flat = xs =>
  Belt.Array.reduceU(xs, [], (. acc, value) => {
    if Js.Array2.isArray(value) {
      Belt.Array.forEachU(value, (. element) => Js.Array2.push(acc, element)->ignore)
    } else {
      Js.Array2.push(acc, unsafe(value))->ignore
    }
    acc
  })

let rec flatten = (xs, arr) => {
  let index = ref(0)

  while index.contents < length(xs) {
    let value = Belt.Array.getUnsafe(xs, index.contents)
    if Js.Array2.isArray(value) {
      flatten(unsafe(value), arr)->ignore
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
export deepFlat = xs => flatten(xs, [])

%comment("Converts the given array to the TypeScript's tuple.")
export toTuple = xs => xs

%comment("Applies a side-effect on each element of the provided array.")
export tap = (xs, fn) => {
  Belt.Array.forEachU(xs, fn)
  xs
}
