external unsafe: 'a => 'b = "%identity"

export length = xs => Belt.Array.length(xs)

export isEmpty = xs => length(xs) == 0

export isNotEmpty = xs => length(xs) > 0

export reverse = xs => Belt.Array.reverse(xs)

export prepend = (xs, element) => Belt.Array.concat([element], xs)

export append = (xs, element) => Belt.Array.concat(xs, [element])

export get = (xs, index) => Belt.Array.get(xs, index)

export at = (xs, index) => get(xs, index)

export getBy = (xs, predicateFn) => Belt.Array.getByU(xs, predicateFn)

export find = (xs, predicateFn) => getBy(xs, predicateFn)

export head = xs => get(xs, 0)

%%raw(`
/**
  hello doc!
*/
`)
export tail = xs => {
  switch length(xs) {
  | l if l == 1 => Some([])
  | l if l == 0 => None
  | _ =>
    let xs = Belt.Array.sliceToEnd(xs, 1)
    isNotEmpty(xs) ? Some(xs) : None
  }
}

export tailOrEmpty = xs =>
  switch tail(xs) {
  | Some(xs) => xs
  | None => []
  }

export take = (xs, offset) => {
  let l = length(xs)
  let len = offset < 0 ? 0 : l < offset ? l : offset
  Belt.Array.slice(xs, ~offset=0, ~len)
}

export takeExactly = (xs, offset) =>
  offset < 0 || offset > length(xs) ? None : Some(Belt.Array.slice(xs, ~offset=0, ~len=offset))

export rec takeWhile = (xs, predicateFn) =>
  switch head(xs) {
  | Some(el) if predicateFn(el) => prepend(takeWhile(tailOrEmpty(xs), predicateFn), el)
  | _ => []
  }

export drop = (xs, offset) => {
  let l = length(xs)
  let start = offset < 0 ? 0 : l < offset ? l : offset
  Belt.Array.sliceToEnd(xs, start)
}

export dropExactly = (xs, offset) =>
  offset < 0 || offset > length(xs) ? None : Some(Belt.Array.sliceToEnd(xs, offset))

export rec dropWhile = (xs, predicateFn) =>
  switch head(xs) {
  | Some(element) if predicateFn(element) => dropWhile(tailOrEmpty(xs), predicateFn)
  | _ => xs
  }

export uncons = xs =>
  switch xs {
  | [] => None
  | _ => Some((Belt.Array.getExn(xs, 0), Belt.Array.sliceToEnd(xs, 1)))
  }

export splitAt = (xs, offset) =>
  offset < 0 || offset > length(xs)
    ? None
    : Some((Belt.Array.slice(xs, ~offset=0, ~len=offset), Belt.Array.sliceToEnd(xs, offset)))

export rec splitEvery = (xs, offset) =>
  offset < 1
    ? [xs]
    : length(xs) <= offset
    ? [xs]
    : xs->drop(offset)->splitEvery(offset)->Belt.Array.concat([take(xs, offset)], _)

export shuffle = xs => Belt.Array.shuffle(xs)

export repeat = (n, element) => Belt.Array.make(n, element)

export makeWithIndex = (n, mapFn) => Belt.Array.makeByU(n, mapFn)

export map = (xs, mapFn) => Belt.Array.mapU(xs, (. el) => mapFn(el))

export mapWithIndex = (xs, mapFn) => Belt.Array.mapWithIndexU(xs, (. i, el) => mapFn(el, i))

export filter = (xs, predicateFn) => {
  let index = ref(0)
  let arr = []

  while index.contents < length(xs) {
    if predicateFn(Belt.Array.getUnsafe(xs, index.contents)) {
      Js.Array2.push(arr, Belt.Array.getUnsafe(xs, index.contents))->ignore
    }
    index := succ(index.contents)
  }

  arr
}

export filterWithIndex = (xs, predicateFn) =>
  Belt.Array.reduceWithIndexU(xs, [], (. acc, value, index) => {
    if predicateFn(value, index) {
      Js.Array2.push(acc, value)->ignore
    }

    acc
  })

export reject = (xs, predicateFn) => filter(xs, el => !predicateFn(el))

export rejectWithIndex = (xs, predicateFn) =>
  filterWithIndex(xs, (el, index) => !predicateFn(el, index))

export init = xs => {
  let l = length(xs)
  l == 0 ? None : Some(Belt.Array.slice(xs, ~offset=0, ~len=l - 1))
}

export initOrEmpty = xs =>
  switch init(xs) {
  | Some(xs) => xs
  | None => []
  }

export last = xs => {
  let l = length(xs)
  l == 0 ? None : get(xs, l - 1)
}

export partition = (xs, fn) => Belt.Array.partitionU(xs, fn)

export concat = (xs0, xs1) => Belt.Array.concat(xs0, xs1)

export concatMany = xs => Belt.Array.concatMany(xs)

export every = (xs, fn) => Belt.Array.everyU(xs, fn)

export some = (xs, fn) => Belt.Array.someU(xs, fn)

export slice = (xs, offset, len) => Belt.Array.slice(xs, ~offset, ~len)

export sliceToEnd = (xs, offset) => Belt.Array.sliceToEnd(xs, offset)

export eq = (xs0, xs1, comparatorFn) => Belt.Array.eqU(xs0, xs1, comparatorFn)

export range = (start, length) => Belt.Array.range(start, length)

export rangeBy = (start, length, step) => Belt.Array.rangeBy(start, length, ~step)

export reduce = (xs, initialValue, reduceFn) => Belt.Array.reduceU(xs, initialValue, reduceFn)

export reduceWithIndex = (xs, initialValue, reduceFn) =>
  Belt.Array.reduceWithIndexU(xs, initialValue, reduceFn)

export copy = xs => Belt.Array.copy(xs)

export zip = (xs0, xs1) => Belt.Array.zip(xs0, xs1)

export zipWith = (xs0, xs1, zipFn) => Belt.Array.zipByU(xs0, xs1, zipFn)

export unzip = xs => Belt.Array.unzip(xs)

export replaceAt = (xs, targetIndex, element) =>
  mapWithIndex(xs, (current, currentIndex) => currentIndex == targetIndex ? element : current)

export insertAt = (xs, targetIndex, element) =>
  switch splitAt(xs, targetIndex) {
  | Some((before, after)) => concat(before, concat([element], after))
  | None => xs
  }

export updateAt = (targetIndex, fn, xs) =>
  mapWithIndex(xs, (x, index) => index == targetIndex ? fn(x) : x)

export swapAt = (xs, targetIndex, swapIndex) =>
  switch (get(xs, targetIndex), get(xs, swapIndex)) {
  | (Some(a), Some(b)) => mapWithIndex(xs, (x, k) => targetIndex == k ? b : swapIndex == k ? a : x)
  | _ => xs
  }

export removeAt = (xs, targetIndex) => filterWithIndex(xs, (_, i) => i != targetIndex)

export uniqBy = (xs, predicateFn) => {
  let index = ref(0)
  let arr = []

  while index.contents < length(xs) {
    let value = Belt.Array.getUnsafe(xs, index.contents)
    let alreadyAdded = some(arr, (. x) => x == predicateFn(value))

    if !alreadyAdded {
      Js.Array2.push(arr, value)->ignore
    }

    index := succ(index.contents)
  }

  arr
}

export uniq = xs => uniqBy(xs, element => element)

export forEach = (xs, fn) => Belt.Array.forEachU(xs, fn)

export forEachWithIndex = (xs, fn) => Belt.Array.forEachWithIndexU(xs, fn)

export getIndexBy = (xs, predicateFn) => Belt.Array.getIndexByU(xs, predicateFn)

export includes = (xs, element) => Belt.Array.someU(xs, (. x) => x == element)

export join = (xs, delimiter) => Js.Array2.joinWith(xs, delimiter)

export sort = (xs, sortFn) => Belt.SortArray.stableSortByU(xs, sortFn)

export sortBy = (xs, sortFn) =>
  sort(xs, (. a, b) => {
    let a = sortFn(a)
    let b = sortFn(b)
    a === b ? 0 : a < b ? -1 : 1
  })

export makeEmpty = () => []

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

export flat = xs => {
  let arr = ref([])
  let index = ref(0)

  while index.contents < length(xs) {
    let value = Belt.Array.getUnsafe(xs, index.contents)
    let element = Js.Array2.isArray(value) ? value : [unsafe(value)]

    arr := Belt.Array.concat(arr.contents, element)

    index := succ(index.contents)
  }

  arr.contents
}

export deepFlat = xs => {
  let rec flat = (xs, input) => {
    let index = ref(0)

    while index.contents < length(xs) {
      let value = Belt.Array.getUnsafe(xs, index.contents)

      if Js.Array2.isArray(value) {
        flat(unsafe(value), input)->ignore
      } else {
        Js.Array2.push(input, value)->ignore
      }

      index := succ(index.contents)
    }

    input
  }

  flat(xs, [])
}
