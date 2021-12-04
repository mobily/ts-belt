import { GuardArray, GuardValue, GuardObject, GuardPromise } from '../types'

export declare const isString: <T>(
  value: T | string,
) => value is GuardValue<T, string>
export declare const isNumber: <T>(
  value: T | number,
) => value is GuardValue<T, number>
export declare const isBoolean: <T>(
  value: T | boolean,
) => value is GuardValue<T, boolean>
export declare const isPromise: <T>(
  value: T | Promise<unknown>,
) => value is GuardPromise<T>
export declare const isArray: <T>(
  value: T | ReadonlyArray<unknown>,
) => value is GuardArray<T>
export declare const isObject: <T>(value: T | object) => value is GuardObject<T>
export declare const isFunction: <T>(
  value: T | Function,
) => value is GuardValue<T, Function>
export declare const isError: <T>(
  value: T | Error,
) => value is GuardValue<T, Error>
export declare const isNullable: <T>(
  value: T,
) => value is Extract<T, null | undefined>
export declare const isNotNullable: <T>(value: T) => value is NonNullable<T>
export declare const isUndefined: <T>(
  value: T | null | undefined,
) => value is undefined
export declare const isNull: <T>(value: T | null | undefined) => value is null
export declare const isNot: <T>(
  value: T,
  predicateFn: (value: T) => boolean,
) => boolean
export declare const isDate: <T>(value: T) => value is Extract<T, Date>
