@gentype
let length = str => Js.String2.length(str)

@gentype
let head = str => Js.String2.slice(str, ~from=0, ~to_=1)

@gentype
let slice = (str, start, end) => Js.String2.slice(str, ~from=start, ~to_=end)

@gentype
let sliceToEnd = (str, start) => Js.String2.sliceToEnd(str, ~from=start)

@gentype
let toLowerCase = str => Js.String2.toLowerCase(str)

@gentype
let toUpperCase = str => Js.String2.toUpperCase(str)

@gentype
let trim = str => Js.String2.trim(str)

@gentype
let isEmpty = str => length(str) == 0

@gentype
let split = (str, delimiter) => Js.String2.split(str, delimiter)

@gentype
let includes = (str, value) => Js.String2.includes(str, value)

@gentype
let replace = (str, oldValue, newValue) => Js.String2.replace(str, oldValue, newValue)

@gentype
let replaceByRe = (str, regex, value) => Js.String2.replaceByRe(str, regex, value)
