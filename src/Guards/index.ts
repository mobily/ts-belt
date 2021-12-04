export declare function isString<T>(value: T): value is Extract<T, string>
export declare function isNumber<T>(value: T): value is Extract<T, number>
export declare function isBoolean<T>(value: T): value is Extract<T, boolean>
export declare function isPromise<T>(
  value: T,
): value is Extract<T, Promise<any>>
export declare function isArray<T>(
  value: T,
): value is Extract<T, any[] | readonly any[]>
export declare function isObject<T>(
  value: T,
): value is Exclude<Extract<T, object>, any[] | readonly any[] | Function>
export declare function isFunction<T>(value: T): value is Extract<T, Function>
export declare function isError<T>(value: T): value is Extract<T, Error>
export declare function isNullable<T>(
  value: T,
): value is Extract<T, null | undefined>
export declare function isNotNullable<T>(value: T): value is NonNullable<T>
export declare function isUndefined<T>(
  value: T | null | undefined,
): value is undefined
export declare function isNull<T>(value: T | null | undefined): value is null
export declare function isNot<T, S>(
  value: T,
  predicateFn: (value: T) => boolean,
): value is Exclude<T, S>
export declare function isNot<T, S>(
  predicateFn: (value: T) => boolean,
): (value: T) => value is Exclude<T, S>
