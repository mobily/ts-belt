open Externals

let placeholder = () => Js.Undefined.empty

%comment("Converts the given value to a string.")
@gentype
let make = value => Js.String2.make(value)

%comment("Returns the length of the given string.")
@gentype
let length = str => Js.String2.length(str)

%comment("Returns a new string with `appendValue` added after `str`.")
@gentype
let concat = (str, appendValue) => Js.String2.concat(str, appendValue)

%comment("Alias for `concat`.")
@gentype
let append = (str, appendValue) => Js.String2.concat(str, appendValue)

%comment("Returns a new string with `prependValue` added before `str`.")
@gentype
let prepend = (str, prependValue) => Js.String2.concat(prependValue, str)

%comment(
  "Returns the substring of `str` starting at character `start` up to but not including `end`."
)
@gentype
let slice = (str, start, end) => Js.String2.slice(str, ~from=start, ~to_=end)

%comment("Returns the substring of `str` starting at character `start` to the end of the string.")
@gentype
let sliceToEnd = (str, start) => Js.String2.sliceToEnd(str, ~from=start)

%comment("Converts `str` to lower case.")
@gentype
let toLowerCase = str => Js.String2.toLowerCase(str)

%comment("Converts `str` to upper case.")
@gentype
let toUpperCase = str => Js.String2.toUpperCase(str)

%comment("Returns a new string with leading and trailing whitespace removed from `str`.")
@gentype
let trim = str => Js.String2.trim(str)

%comment("Returns a new string with leading whitespace removed from `str`.")
@gentype
let trimStart = str => Externals.trimStart(str)

%comment("Returns a new string with trailing whitespace removed from `str`.")
@gentype
let trimEnd = str => Externals.trimEnd(str)

%comment("Returns `true` if the provided string is empty.")
@gentype
let isEmpty = str => length(str) === 0

%comment("Returns `true` if the provided string is not empty.")
@gentype
let isNotEmpty = str => length(str) > 0

%comment(
  "Splits the given string at every occurrence of `delimiter` and returns an array of the resulting substrings."
)
@gentype
let split = (str, delimiter) => Js.String2.split(str, delimiter)

%comment(
  "Splits the given string at every occurrence of `regex` and returns an array of the resulting substrings."
)
@gentype
let splitByRe = (str, regex) => Js.String2.splitByRe(str, regex)

%comment("Splits the string at the given index, returning a tuple of the parts.")
@gentype
let splitAt = (str, index) => (slice(str, 0, index), sliceToEnd(str, index))

%comment("Returns `true` if `searchValue` appears anywhere in the given string.")
@gentype
let includes = (str, searchValue) => Js.String2.includes(str, searchValue)

%comment(
  "Replaces the first occurrence of `oldValue` with `newValue` in the given string and returns a new string."
)
@gentype
let replace = (str, oldValue, newValue) => Js.String2.replace(str, oldValue, newValue)

%comment(
  "Replaces each occurrence of `oldValue` with `newValue` in the given string and returns a new string."
)
@gentype
let replaceAll = (str, oldValue, newValue) => {
  let xs = split(str, oldValue)
  Belt.Array.reduceWithIndexU(xs, "", (. acc, str, index) => {
    let value = index < pred(Belt.Array.length(xs)) ? concat(str, newValue) : str
    concat(acc, value)
  })
}

%comment(
  "Replaces the matched regular expression with `newValue` in the given string and returns a new string."
)
@gentype
let replaceByRe = (str, regex, value) => Js.String2.replaceByRe(str, regex, value)

%comment("Returns a new string with the first occurrence of `value` removed from `str`.")
@gentype
let remove = (str, value) => replace(str, value, "")

%comment("Returns a new string with every occurrence of `value` removed from `str`.")
@gentype
let removeAll = (str, value) => replaceAll(str, value, "")

%comment(
  "Returns `Some(index)`, where `index` is the starting position of the first match of regular expression in the given string."
)
@gentype
let search = (str, regex) => {
  let index = Js.String2.search(str, regex)
  index < 0 ? None : Some(index)
}

%comment(
  "Matches the given string against the provided regular expression, ir returns `None` if there is no match."
)
@gentype
let match = (str, regex) => Js.String2.match_(str, regex)

%comment("Returns a string consisting of `n` repetitions of `str`.")
@gentype
let repeat = (str, n) => Js.String2.repeat(str, n)

%comment(
  "Returns `Some(index)`, where `index` is the starting position of the first occurrence of `searchValue` within `str`."
)
@gentype
let indexOf = (str, searchValue) => {
  let index = Js.String2.indexOf(str, searchValue)
  index < 0 ? None : Some(index)
}

%comment(
  "Returns `Some(index)`, where `index` is the starting position of the last occurrence of `searchValue` within `str`."
)
@gentype
let lastIndexOf = (str, searchValue) => {
  let index = Js.String2.lastIndexOf(str, searchValue)
  index < 0 ? None : Some(index)
}

%comment("Returns `true` if the given string ends with `substr`.")
@gentype
let endsWith = (str, substr) => Js.String2.endsWith(str, substr)

%comment("Returns `true` if the given string starts with `substr`.")
@gentype
let startsWith = (str, substr) => Js.String2.startsWith(str, substr)

%comment(
  "Returns `value`, where `value` is a string consisting of the character at location `n` in the string, or `undefined` if the `n` is out of range."
)
@gentype
let getUnsafe = (str, n) => Js.String2.get(str, n)

%comment(
  "Returns `Some(value)`, where `value` is a string consisting of the character at location `n` in the string, or `None` if the `n` is out of range."
)
@gentype
let get = (str, n) => {
  let str = str->Js.String2.get(n)->Js.Undefined.return
  Js.Undefined.toOption(str)
}

%comment("Creates an array with one character of `str` per element.")
@gentype
let toArray = str => Belt.Array.makeByU(length(str), (. index) => getUnsafe(str, index))

%comment(
  "Returns `Some(value)` where `value` is the first character of the string, or `None` if the given string is empty."
)
@gentype
let head = str => get(str, 0)

%comment(
  "Returns `Some(value)` where `value` is the last character of the string, or `None` if the given string is empty."
)
@gentype
let last = str => get(str, length(str) - 1)
