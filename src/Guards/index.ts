import { GuardValue } from '../types'
import { GuardObject } from '../types'
import { GuardPromise } from '../types'
import { GuardArray } from '../types'

export declare function isString<T>(
  value: T | string,
): value is GuardValue<T, string>
export declare function isNumber<T>(
  value: T | number,
): value is GuardValue<T, number>
export declare function isBoolean<T>(
  value: T | boolean,
): value is GuardValue<T, boolean>
export declare function isPromise<T>(
  value: T | Promise<unknown>,
): value is GuardPromise<T>
export declare function isArray<T>(
  value: T | ReadonlyArray<unknown>,
): value is GuardArray<T>
export declare function isObject<T>(value: T | object): value is GuardObject<T>
export declare function isFunction<T>(
  value: T | Function,
): value is GuardValue<T, Function>
export declare function isError<T>(
  value: T | Error,
): value is GuardValue<T, Error>
export declare function isDate<T>(value: T): value is Extract<T, Date>
export declare function isNullable<T>(
  value: T,
): value is Extract<T, null | undefined>
export declare function isNotNullable<T>(value: T): value is NonNullable<T>
export declare function isNull<T>(value: T | null | undefined): value is null
export declare function isUndefined<T>(
  value: T | null | undefined,
): value is undefined
export declare function isNot<T>(
  value: T,
  predicateFn: (value: T) => boolean,
): boolean
export declare function isNot<T>(
  predicateFn: (value: T) => boolean,
): (value: T) => boolean
