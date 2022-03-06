import { GuardValue } from '../types'
import { GuardObject } from '../types'
import { GuardPromise } from '../types'
import { GuardArray } from '../types'

export declare function isString<A>(
  value: A | string,
): value is GuardValue<A, string>
export declare function isNumber<A>(
  value: A | number,
): value is GuardValue<A, number>
export declare function isBoolean<A>(
  value: A | boolean,
): value is GuardValue<A, boolean>
export declare function isPromise<A>(
  value: A | Promise<unknown>,
): value is GuardPromise<A>
export declare function isArray<A>(
  value: A | ReadonlyArray<unknown>,
): value is GuardArray<A>
export declare function isObject<A>(value: A | object): value is GuardObject<A>
export declare function isFunction<A>(
  value: A | Function,
): value is GuardValue<A, Function>
export declare function isError<A>(
  value: A | Error,
): value is GuardValue<A, Error>
export declare function isDate<A>(value: A): value is Extract<A, Date>
export declare function isNullable<A>(
  value: A,
): value is Extract<A, null | undefined>
export declare function isNotNullable<A>(value: A): value is NonNullable<A>
export declare function isNull<A>(value: A | null | undefined): value is null
export declare function isUndefined<A>(
  value: A | null | undefined,
): value is undefined
export declare function isNot<A, B extends A>(
  value: A,
  predicateFn: (value: A) => value is B,
): value is Exclude<A, B>
export declare function isNot<A, B extends A>(
  predicateFn: (value: A) => value is B,
): (value: A) => value is Exclude<A, B>
export declare function isNot<A>(
  value: A,
  predicateFn: (value: A) => any,
): boolean
export declare function isNot<A>(
  predicateFn: (value: A) => any,
): (value: A) => boolean
