let head = str => {
  let str = Js.String2.slice(str, ~from=0, ~to_=1)
  str == "" ? None : Some(str)
}

let slice = (from, to_, str) => Js.String2.slice(str, ~from, ~to_)
let sliceToEnd = (from, str) => Js.String2.sliceToEnd(str, ~from)
