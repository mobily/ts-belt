export const isString = value => typeof value === 'string'
export const isNumber = value => typeof value === 'number' && !isNaN(value)
export const isBoolean = value => typeof value === 'boolean'
export const isPromise = value => value instanceof Promise
export const isArray = value => Array.isArray(value)
export const isObject = value => !!value && !isArray(value) && typeof value === 'object'
export const isFunction = value => typeof value === 'function'
export const isError = value => value instanceof Error
export const isNullable = value => value == null
export const isNotNullable = value => typeof value !== 'undefined' && value !== null
export const isUndefined = value => value === undefined
export const isNull = value => value === null
export const isNot = (predicateFn, value) => !predicateFn(value)
