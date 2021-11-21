export length = str => Js.String2.length(str)

export head = str => Js.String2.slice(str, ~from=0, ~to_=1)

export slice = (str, start, end) => Js.String2.slice(str, ~from=start, ~to_=end)

export sliceToEnd = (str, start) => Js.String2.sliceToEnd(str, ~from=start)

export toLowerCase = str => Js.String2.toLowerCase(str)

export toUpperCase = str => Js.String2.toUpperCase(str)

export trim = str => Js.String2.trim(str)

export isEmpty = str => length(str) == 0

export split = (str, delimiter) => Js.String2.split(str, delimiter)

export includes = (str, value) => Js.String2.includes(str, value)

export replace = (str, oldValue, newValue) => Js.String2.replace(str, oldValue, newValue)

export replaceByRe = (str, regex, value) => Js.String2.replaceByRe(str, regex, value)
