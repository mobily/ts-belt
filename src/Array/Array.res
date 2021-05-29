let length = Belt.Array.length
let isEmpty = xs => length(xs) == 0
let isNotEmpty = xs => length(xs) > 0
let reverse = Belt.Array.reverse
let prepend = (el, xs) => Belt.Array.concat([el], xs)
let append = (el, xs) => Belt.Array.concat(xs, [el])
let get = (i, xs) => Belt.Array.get(xs, i)
let getBy = (predicateFn, xs) => Belt.Array.getByU(xs, predicateFn)
let head = xs => get(0, xs)
let tail = xs => {
  let l = length(xs)

  if l == 0 {
    None
  } else if l == 1 {
    Some([])
  } else {
    let xs = Belt.Array.sliceToEnd(xs, 1)
    isNotEmpty(xs) ? Some(xs) : None
  }
}
let tailOrEmpty = xs =>
  switch tail(xs) {
  | Some(xs) => xs
  | None => []
  }

let take = (i, xs) => {
  let l = length(xs)
  let len = i < 0 ? 0 : l < i ? l : i
  Belt.Array.slice(xs, ~offset=0, ~len)
}
let takeExactly = (i, xs) =>
  i < 0 || i > length(xs) ? None : Some(Belt.Array.slice(xs, ~offset=0, ~len=i))

let rec takeWhile = (predicateFn, xs) =>
  switch head(xs) {
  | Some(el) if predicateFn(el) => prepend(el, takeWhile(predicateFn, tailOrEmpty(xs)))
  | _ => []
  }

let drop = (i, xs) => {
  let l = length(xs)
  let start = i < 0 ? 0 : l < i ? l : i
  Belt.Array.sliceToEnd(xs, start)
}

let dropExactly = (i, xs) => i < 0 || i > length(xs) ? None : Some(Belt.Array.sliceToEnd(xs, i))

let rec dropWhile = (predicateFn, xs) =>
  switch head(xs) {
  | Some(el) if predicateFn(el) => dropWhile(predicateFn, tailOrEmpty(xs))
  | _ => xs
  }

let uncons = xs =>
  switch xs {
  | [] => None
  | _ => Some((Belt.Array.getExn(xs, 0), Belt.Array.sliceToEnd(xs, 1)))
  }

let splitAt = (i, xs) =>
  i < 0 || i > length(xs)
    ? None
    : Some((Belt.Array.slice(xs, ~offset=0, ~len=i), Belt.Array.sliceToEnd(xs, i)))

let rec splitEvery = (i, xs) =>
  i < 1
    ? [xs]
    : Belt.Array.length(xs) <= i
    ? [xs]
    : xs |> drop(i) |> splitEvery(i) |> Belt.Array.concat([take(i, xs)])

let shuffle = Belt.Array.shuffle
let repeat = Belt.Array.make
let makeWithIndex = Belt.Array.makeByU
let map = (mapFn, xs) => Belt.Array.mapU(xs, mapFn)
let mapWithIndex = (mapFn, xs) => Belt.Array.mapWithIndexU(xs, (. i, el) => mapFn(el, i))
let filter = (predicateFn, xs) => Belt.Array.keepU(xs, predicateFn)
let filterWithIndex = (predicateFn, xs) => Belt.Array.keepWithIndexU(xs, predicateFn)
let reject = (predicateFn, xs) => filter((. el) => !predicateFn(el), xs)
let rejectWithIndex = (predicateFn, xs) => filterWithIndex((. el, i) => !predicateFn(el, i), xs)
let init = xs => {
  let l = length(xs)
  l == 0 ? None : Some(Belt.Array.slice(xs, ~offset=0, ~len=l - 1))
}

let initOrEmpty = xs =>
  switch init(xs) {
  | Some(xs) => xs
  | None => []
  }
let last = xs => {
  let l = length(xs)
  l == 0 ? None : get(l - 1, xs)
}

let partition = (fn, xs) => Belt.Array.partitionU(xs, fn)
let concat = (xs, ys) => Belt.Array.concat(ys, xs)
let concatMany = Belt.Array.concatMany
let every = (fn, xs) => Belt.Array.everyU(xs, fn)
let some = (fn, xs) => Belt.Array.someU(xs, fn)
let slice = (offset, len, xs) => Belt.Array.slice(xs, ~offset, ~len)
let sliceToEnd = (offset, xs) => Belt.Array.sliceToEnd(xs, offset)
let eq = (cmp, xs, ys) => Belt.Array.eqU(xs, ys, cmp)
let range = Belt.Array.range
let rangeBy = (x, y, step) => Belt.Array.rangeBy(x, y, ~step)
let reduce = (fn, acc, xs) => Belt.Array.reduceU(xs, acc, fn)
let reduceWithIndex = (fn, acc, xs) => Belt.Array.reduceWithIndexU(xs, acc, fn)
let copy = Belt.Array.copy
let zip = (xs, ys) => Belt.Array.zip(ys, xs)
let zipWith = (fn, xs, ys) => Belt.Array.zipByU(ys, xs, fn)
let unzip = Belt.Array.unzip
let replaceAt = (targetIndex, el, xs) =>
  xs |> mapWithIndex((current, currentIndex) => currentIndex == targetIndex ? el : current)
let insertAt = (targetIndex, el, xs) =>
  switch splitAt(targetIndex, xs) {
  | Some((before, after)) => concat(before, concat([el], after))
  | None => xs
  }
let updateAt = (targetIndex, fn, xs) =>
  xs |> mapWithIndex((x, index) => index == targetIndex ? fn(x) : x)
let swapAt = (targetIndex, swapIndex, xs) =>
  switch (get(targetIndex, xs), get(swapIndex, xs)) {
  | (Some(a), Some(b)) =>
    xs |> mapWithIndex((x, k) => targetIndex == k ? b : swapIndex == k ? a : x)
  | _ => xs
  }
let removeAt = (targetIndex, xs) => xs |> filterWithIndex((. _, i) => i != targetIndex)
let uniqBy = (predicateFn, xs) =>
  Belt.Array.reduceU(xs, [], (. acc, value) =>
    Belt.Array.someU(acc, (. x) => x == predicateFn(value)) ? acc : append(value, acc)
  )
let uniq = xs => uniqBy(el => el, xs)
let forEach = (fn, xs) => Belt.Array.forEachU(xs, fn)
let forEachWithIndex = (fn, xs) => Belt.Array.forEachWithIndexU(xs, fn)
let getIndexBy = (predicateFn, xs) => Belt.Array.getIndexByU(xs, predicateFn)
let includes = (el, xs) => Belt.Array.someU(xs, (. x) => x == el)
let join = (delim, xs) => Js.Array2.joinWith(xs, delim)
let sort = (sortFn, xs) => Belt.SortArray.stableSortByU(xs, sortFn)
let sortBy = (sortFn, xs) => sort((. a, b) => {
    let a = sortFn(a)
    let b = sortFn(b)
    a === b ? 0 : a < b ? -1 : 1
  }, xs)
let makeEmpty = () => []
