import { Result } from '../Result'
import { ExtractValue } from '../types'

export declare type Option<T> = T | null | undefined

export declare const Some: <T>(value: NonNullable<T>) => Option<T>
export declare const None: Option<never>

/** Returns `Some(value)` if the provided value is non-nullable, otherwise, returns `None`. */

export declare function fromNullable<T>(value: T): Option<ExtractValue<T>>

/** Returns `Some(value)` if the provided value is not falsy, otherwise, returns `None`. */

export declare function fromFalsy<T>(value: T): Option<ExtractValue<T>>

/** Returns `Some(value)` if the given predicate function returns `true`, otherwise, returns `None`. */

export declare function fromPredicate<T>(
  value: T,
  predicateFn: (value: T) => boolean,
): Option<ExtractValue<T>>

export declare function fromPredicate<T>(
  predicateFn: (value: T) => boolean,
): (value: T) => Option<ExtractValue<T>>

/** Returns the result of `mapFn` if `option` is `Some(value)`, otherwise, returns `None` and `mapFn` is not called. */

export declare function map<T, R>(
  option: Option<T>,
  mapFn: (value: T) => NonNullable<R>,
): Option<R>

export declare function map<T, R>(
  mapFn: (value: T) => NonNullable<R>,
): (option: Option<T>) => Option<R>

/** Returns the result of `mapFn` (it must have a return type of `Option`) if `option` is `Some(value)`, otherwise, returns `None`. */

export declare function flatMap<T, R>(
  option: Option<T>,
  mapFn: (value: T) => Option<R>,
): Option<R>

export declare function flatMap<T, R>(
  mapFn: (value: T) => Option<R>,
): (option: Option<T>) => Option<R>

/** Returns the result of `mapFn` if `option` is `Some(value)`, otherwise, returns a default value. */

export declare function mapWithDefault<T, R>(
  option: Option<T>,
  defaultValue: NonNullable<R>,
  mapFn: (value: T) => R,
): R

export declare function mapWithDefault<T, R>(
  defaultValue: NonNullable<R>,
  mapFn: (value: T) => R,
): (option: Option<T>) => R

/** Returns `Some(value)` if the result of `mapFn` is non-nullable, otherwise, returns `None`. */

export declare function mapNullable<T, R>(
  option: Option<T>,
  mapFn: (value: T) => R | null | undefined,
): Option<ExtractValue<R>>

export declare function mapNullable<T, R>(
  mapFn: (value: T) => R | null | undefined,
): (option: Option<T>) => Option<ExtractValue<R>>

/** Returns `Some(value)` if `option` is `Some(value)` and the result of `predicateFn` is truthy, otherwise, returns `None`. */

export declare function filter<T>(
  option: Option<T>,
  predicateFn: (value: T) => boolean,
): Option<T>

export declare function filter<T>(
  predicateFn: (value: T) => boolean,
): (option: Option<T>) => Option<T>

/** Returns `value` if `option` is `Some(value)`, otherwise, returns a default value. */

export declare function getWithDefault<T>(
  option: Option<T>,
  defaultValue: NonNullable<T>,
): T

export declare function getWithDefault<T>(
  defaultValue: NonNullable<T>,
): (option: Option<T>) => T

/** Returns `value` if `option` is `Some(value)`, otherwise, throws an exception. */

export declare function getExn<T>(option: Option<T>): T | never

/** Returns `value` if `option` is `Some(value)`, otherwise, returns `null`. */

export declare function toNullable<T>(option: Option<T>): T | null

/** Returns `value` if `option` is `Some(value)`, otherwise, returns `undefined`. */

export declare function toUndefined<T>(option: Option<T>): T | undefined

/** Returns `Ok(value)` if `option` is `Some(value)`, otherwise, returns `Error(errorValue)`, both `Ok` and `Error` come from the `Result` type. */

export declare function toResult<A, B>(
  option: Option<A>,
  errorValue: NonNullable<B>,
): Result<A, B>

export declare function toResult<A, B>(
  errorValue: NonNullable<B>,
): (option: Option<A>) => Result<A, B>

/** Returns the result of `someFn` if `option` is `Some(value)`, otherwise, returns the result of `noneFn`. */

export declare function match<T, R>(
  option: Option<T>,
  someFn: (value: T) => R,
  noneFn: () => R,
): R

export declare function match<T, R>(
  someFn: (value: T) => R,
  noneFn: () => R,
): (option: Option<T>) => R

/** Returns `true` if the provided `option` is `None`, otherwise, returns `false`. */

export declare function isNone<T>(option: Option<T>): option is Option<never>

/** Returns `true` if the provided `option` is `Some(value)`, otherwise, returns `false`. */

export declare function isSome<T>(option: Option<T>): option is Option<T>

/** Applies a side-effect function to the value in `Some`, and returns the original `option`. */

export declare function tap<T>(
  option: Option<T>,
  someFn: (value: T) => void,
): Option<T>

export declare function tap<T>(
  someFn: (value: T) => void,
): (option: Option<T>) => Option<T>
