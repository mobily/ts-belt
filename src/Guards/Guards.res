let is = (value, type_) => Js.typeof(value) === type_

@gentype
let isString = value => is(value, "string")

@gentype
let isNumber = value => is(value, "number") && !Js.Float.isNaN(value)

@gentype
let isBoolean = value => is(value, "boolean")

@gentype
let isPromise = %raw("value => value instanceof Promise")

@gentype
let isArray = value => Js.Array2.isArray(value)

@gentype
let isObject = value => %raw("!!value") && !isArray(value) && is(value, "object")

@gentype
let isFunction = value => is(value, "function")

@gentype
let isError = %raw("value => value instanceof Error")

@gentype
let isDate = %raw("value => value instanceof Date")

@gentype
let isNullable = value => Js.Nullable.isNullable(value)

@gentype
let isNotNullable = value => !isNullable(value)

@gentype
let isNull = %raw("value => value === null")

@gentype
let isUndefined = %raw("value => value === undefined")

@gentype
let isNot = (value, predicateFn) => !predicateFn(value)
