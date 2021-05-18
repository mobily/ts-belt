let length = Belt.Array.length
let isEmpty = xs => length(xs) == 0
let isNotEmpty = xs => length(xs) > 0
let reverse = Belt.Array.reverse
let prepend = (el, xs) => Belt.Array.concat([el], xs)
let append = (el, xs) => Belt.Array.concat(xs, [el])
let get = (i, xs) => Belt.Array.get(xs, i)
let getBy = (predicateFn, xs) => Belt.Array.getBy(xs, predicateFn)
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
let makeWithIndex = Belt.Array.makeBy

let map = (mapFn, xs) => Belt.Array.map(xs, mapFn)
let mapWithIndex = (mapFn, xs) => Belt.Array.mapWithIndex(xs, (i, el) => mapFn(el, i))

let filter = (fn, xs) => Belt.Array.keep(xs, fn)
let filterWithIndex = (fn, xs) => Belt.Array.keepWithIndex(xs, fn)

let reject = (fn, xs) => filter(el => !fn(el), xs)
let rejectWithIndex = (fn, xs) => filterWithIndex((el, i) => !fn(el, i), xs)

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

let partition = (fn, xs) => Belt.Array.partition(xs, fn)
let concat = (xs, ys) => Belt.Array.concat(ys, xs)
let concatMany = Belt.Array.concatMany
let every = (fn, xs) => Belt.Array.every(xs, fn)
let some = (fn, xs) => Belt.Array.some(xs, fn)
let slice = (offset, len, xs) => Belt.Array.slice(xs, ~offset, ~len)
let sliceToEnd = (offset, xs) => Belt.Array.sliceToEnd(xs, offset)
let eq = (cmp, xs, ys) => Belt.Array.eq(xs, ys, cmp)
let range = Belt.Array.range
let rangeBy = (x, y, step) => Belt.Array.rangeBy(x, y, ~step)
let reduce = (fn, acc, xs) => Belt.Array.reduce(xs, acc, fn)
let reduceWithIndex = (fn, acc, xs) => Belt.Array.reduceWithIndex(xs, acc, fn)
let copy = Belt.Array.copy
let zip = (xs, ys) => Belt.Array.zip(ys, xs)
let zipWith = (fn, xs, ys) => Belt.Array.zipBy(ys, xs, fn)
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
let removeAt = (targetIndex, xs) => xs |> filterWithIndex((_, i) => i != targetIndex)
let uniqBy = (predicateFn, xs) =>
  Belt.Array.reduce(xs, [], (acc, value) =>
    Belt.Array.some(acc, Function.equals(predicateFn(value))) ? acc : append(value, acc)
  )
let uniq = xs => uniqBy(Function.identity, xs)

let forEach = (fn, xs) => Belt.Array.forEach(xs, fn)
let forEachWithIndex = (fn, xs) => Belt.Array.forEachWithIndex(xs, fn)
let getIndexBy = (predicateFn, xs) => Belt.Array.getIndexBy(xs, predicateFn)
let includes = (el, xs) => Belt.Array.some(xs, Function.equals(el))
let join = (delim, xs) => Js.Array2.joinWith(xs, delim)
