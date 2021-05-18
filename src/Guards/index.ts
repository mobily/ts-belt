import { PredicateFn } from '../types'

export declare const isString: <T>(value: T) => value is Extract<T, string>
export declare const isNumber: <T>(value: T) => value is Extract<T, number>
export declare const isBoolean: <T>(value: T) => value is Extract<T, boolean>
export declare const isPromise: <T>(value: T) => value is Extract<T, Promise<any>>
export declare const isArray: <T>(value: T) => value is Extract<T, any[] | readonly any[]>
export declare const isObject: <T>(
  value: T,
) => value is Exclude<Extract<T, object>, any[] | readonly any[] | Function>
export declare const isFunction: <T>(value: T) => value is Extract<T, Function>
export declare const isError: <T>(value: T) => value is Extract<T, Error>
export declare const isNullable: <T>(value: T) => value is Extract<T, null | undefined>
export declare const isNotNullable: <T>(value: T) => value is NonNullable<T>
export declare const isUndefined: <T>(value: T | null | undefined) => value is undefined
export declare const isNull: <T>(value: T | null | undefined) => value is null
export declare const isNot: {
  <T, S>(predicateFn: PredicateFn<[T]>): (value: T) => value is Exclude<T, S>
  <T, S>(predicateFn: PredicateFn<[T]>, value: T): value is Exclude<T, S>
}
