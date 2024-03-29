let length = Js.String2.length
let head = str => Js.String2.slice(str, ~from=0, ~to_=1)
let slice = (from, to_, str) => Js.String2.slice(str, ~from, ~to_)
let sliceToEnd = (from, str) => Js.String2.sliceToEnd(str, ~from)
let toLowerCase = Js.String2.toLowerCase
let toUpperCase = Js.String2.toUpperCase
let trim = Js.String2.trim
let isEmpty = str => length(str) == 0
let split = (delimiter, str) => Js.String2.split(str, delimiter)
let includes = (value, str) => Js.String2.includes(str, value)
let replace = (oldValue, newValue, str) => Js.String2.replace(str, oldValue, newValue)
let replaceByRe = (regex, value, str) => Js.String2.replaceByRe(str, regex, value)
