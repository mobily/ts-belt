@gentype
let length = xs => Belt.Array.length(xs)

@gentype
let isEmpty = xs => length(xs) == 0

@gentype
let isNotEmpty = xs => length(xs) > 0

@gentype
let reverse = xs => Belt.Array.reverse(xs)

@gentype
let prepend = (xs, element) => Belt.Array.concat([element], xs)

@gentype
let append = (xs, element) => Belt.Array.concat(xs, [element])

@gentype
let get = (xs, index) => Belt.Array.get(xs, index)

@gentype
let at = (xs, index) => get(xs, index)

@gentype
let getBy = (xs, predicateFn) => Belt.Array.getByU(xs, predicateFn)

@gentype
let find = (xs, predicateFn) => getBy(xs, predicateFn)

@gentype
let head = xs => get(xs, 0)

%%raw(`
/**
  hello doc!
*/
`)
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

@gentype
let tailOrEmpty = xs =>
  switch tail(xs) {
  | Some(xs) => xs
  | None => []
  }

@gentype
let take = (xs, offset) => {
  let l = length(xs)
  let len = offset < 0 ? 0 : l < offset ? l : offset
  Belt.Array.slice(xs, ~offset=0, ~len)
}

@gentype
let takeExactly = (xs, offset) =>
  offset < 0 || offset > length(xs) ? None : Some(Belt.Array.slice(xs, ~offset=0, ~len=offset))

@gentype
let rec takeWhile = (xs, predicateFn) =>
  switch head(xs) {
  | Some(el) if predicateFn(el) => prepend(takeWhile(tailOrEmpty(xs), predicateFn), el)
  | _ => []
  }

@gentype
let drop = (xs, offset) => {
  let l = length(xs)
  let start = offset < 0 ? 0 : l < offset ? l : offset
  Belt.Array.sliceToEnd(xs, start)
}

@gentype
let dropExactly = (xs, offset) =>
  offset < 0 || offset > length(xs) ? None : Some(Belt.Array.sliceToEnd(xs, offset))

@gentype
let rec dropWhile = (xs, predicateFn) =>
  switch head(xs) {
  | Some(element) if predicateFn(element) => dropWhile(tailOrEmpty(xs), predicateFn)
  | _ => xs
  }

@gentype
let uncons = xs =>
  switch xs {
  | [] => None
  | _ => Some((Belt.Array.getExn(xs, 0), Belt.Array.sliceToEnd(xs, 1)))
  }

@gentype
let splitAt = (xs, offset) =>
  offset < 0 || offset > length(xs)
    ? None
    : Some((Belt.Array.slice(xs, ~offset=0, ~len=offset), Belt.Array.sliceToEnd(xs, offset)))

@gentype
let rec splitEvery = (xs, offset) =>
  offset < 1
    ? [xs]
    : length(xs) <= offset
    ? [xs]
    : xs->drop(offset)->splitEvery(offset)->Belt.Array.concat([take(xs, offset)], _)

@gentype
let shuffle = xs => Belt.Array.shuffle(xs)

@gentype
let repeat = (n, element) => Belt.Array.make(n, element)

@gentype
let makeWithIndex = (n, mapFn) => Belt.Array.makeByU(n, mapFn)

@gentype
let map = (xs, mapFn) => {
  let index = ref(0)
  let arr = Belt.Array.makeUninitializedUnsafe(length(xs))

  while index.contents < length(xs) {
    Belt.Array.setUnsafe(arr, index.contents, mapFn(Belt.Array.getUnsafe(xs, index.contents)))
    index := succ(index.contents)
  }

  arr
}

@gentype
let mapWithIndex = (xs, mapFn) => Belt.Array.mapWithIndexU(xs, (. i, el) => mapFn(el, i))

@gentype
let filter = (xs, predicateFn) => {
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

@gentype
let filterWithIndex = (xs, predicateFn) => Belt.Array.keepWithIndexU(xs, predicateFn)

@gentype
let reject = (xs, predicateFn) => filter(xs, el => !predicateFn(el))

@gentype
let rejectWithIndex = (xs, predicateFn) => filterWithIndex(xs, (. el, i) => !predicateFn(el, i))
let init = xs => {
  let l = length(xs)
  l == 0 ? None : Some(Belt.Array.slice(xs, ~offset=0, ~len=l - 1))
}

@gentype
let initOrEmpty = xs =>
  switch init(xs) {
  | Some(xs) => xs
  | None => []
  }

@gentype
let last = xs => {
  let l = length(xs)
  l == 0 ? None : get(xs, l - 1)
}

@gentype
let partition = (xs, fn) => Belt.Array.partitionU(xs, fn)

@gentype
let concat = (xs0, xs1) => Belt.Array.concat(xs0, xs1)

@gentype
let concatMany = xs => Belt.Array.concatMany(xs)

@gentype
let every = (xs, fn) => Belt.Array.everyU(xs, fn)

@gentype
let some = (xs, fn) => Belt.Array.someU(xs, fn)

@gentype
let slice = (xs, offset, len) => Belt.Array.slice(xs, ~offset, ~len)

@gentype
let sliceToEnd = (xs, offset) => Belt.Array.sliceToEnd(xs, offset)

@gentype
let eq = (xs0, xs1, comparatorFn) => Belt.Array.eqU(xs0, xs1, comparatorFn)

@gentype
let range = (start, length) => Belt.Array.range(start, length)

@gentype
let rangeBy = (start, length, step) => Belt.Array.rangeBy(start, length, ~step)

@gentype
let reduce = (xs, acc, reduceFn) => Belt.Array.reduceU(xs, acc, reduceFn)

@gentype
let reduceWithIndex = (xs, acc, reduceFn) => Belt.Array.reduceWithIndexU(xs, acc, reduceFn)

@gentype
let copy = xs => Belt.Array.copy(xs)

@gentype
let zip = (xs0, xs1) => Belt.Array.zip(xs0, xs1)

@gentype
let zipWith = (xs0, xs1, zipFn) => Belt.Array.zipByU(xs0, xs1, zipFn)

@gentype
let unzip = xs => Belt.Array.unzip(xs)

@gentype
let replaceAt = (xs, targetIndex, element) =>
  mapWithIndex(xs, (current, currentIndex) => currentIndex == targetIndex ? element : current)

@gentype
let insertAt = (xs, targetIndex, element) =>
  switch splitAt(xs, targetIndex) {
  | Some((before, after)) => concat(before, concat([element], after))
  | None => xs
  }

@gentype
let updateAt = (targetIndex, fn, xs) =>
  mapWithIndex(xs, (x, index) => index == targetIndex ? fn(x) : x)

@gentype
let swapAt = (xs, targetIndex, swapIndex) =>
  switch (get(xs, targetIndex), get(xs, swapIndex)) {
  | (Some(a), Some(b)) => mapWithIndex(xs, (x, k) => targetIndex == k ? b : swapIndex == k ? a : x)
  | _ => xs
  }

@gentype
let removeAt = (xs, targetIndex) => filterWithIndex(xs, (. _, i) => i != targetIndex)

@gentype
let uniqBy = (xs, predicateFn) => {
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

@gentype
let uniq = xs => uniqBy(xs, element => element)

@gentype
let forEach = (xs, fn) => Belt.Array.forEachU(xs, fn)

@gentype
let forEachWithIndex = (xs, fn) => Belt.Array.forEachWithIndexU(xs, fn)

@gentype
let getIndexBy = (xs, predicateFn) => Belt.Array.getIndexByU(xs, predicateFn)

@gentype
let includes = (xs, element) => Belt.Array.someU(xs, (. x) => x == element)

@gentype
let join = (xs, delimiter) => Js.Array2.joinWith(xs, delimiter)

@gentype
let sort = (xs, sortFn) => Belt.SortArray.stableSortByU(xs, sortFn)

@gentype
let sortBy = (xs, sortFn) =>
  sort(xs, (. a, b) => {
    let a = sortFn(a)
    let b = sortFn(b)
    a === b ? 0 : a < b ? -1 : 1
  })

@gentype
let makeEmpty = () => []

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

external unsafe: 'a => 'b = "%identity"

@gentype
let flat = xs => {
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

@gentype
let deepFlat = xs => {
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
