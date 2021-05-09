let length = Belt.Array.length
let drop = (i, xs) => {
  let l = length(xs)
  let start = i < 0 ? 0 : l < i ? l : i
  Belt.Array.sliceToEnd(xs, start)
}
let get = (i, xs) => xs->Belt.Array.get(i)->Belt.Option.map(Option.fromNullable)
let getBy = (predicateFn, xs) =>
  xs->Belt.Array.getBy(predicateFn)->Belt.Option.map(Option.fromNullable)
let head = xs => get(0, xs)
let splitAt = (i, xs) => {
  if i < 0 || i > length(xs) {
    None
  } else {
    Some((Belt.Array.slice(xs, ~offset=0, ~len=i), Belt.Array.sliceToEnd(xs, i)))
  }
}
let tail = xs => {
  let l = length(xs)

  if l == 0 {
    None
  } else if l == 1 {
    Some([])
  } else {
    let ys = Belt.Array.sliceToEnd(xs, 1)
    length(ys) > 0 ? Some(ys) : None
  }
}
let take = (i, xs) => {
  let l = length(xs)
  let len = i < 0 ? 0 : l < i ? l : i
  Belt.Array.slice(xs, ~offset=0, ~len)
}
