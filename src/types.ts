export declare type PredicateFn<T extends any[]> = (...args: T) => boolean
export declare type MapFn<T extends any[], R> = (...args: T) => R
export declare type Array<T> = readonly T[]
export declare type EmptyObject = Record<string, any>
export declare type ExtractValue<T> = T extends null | undefined ? Exclude<T, null | undefined> : T
