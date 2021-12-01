import { Option } from '../Option'
import { ExtractValue } from '../types'

export declare type Ok<T> = {
  readonly TAG: 0
  readonly _0: NonNullable<T>
} & { __: 'Ok' }
export declare type Error<T> = {
  readonly TAG: 1
  readonly _0: NonNullable<T>
} & { __: 'Error' }

export declare type Result<A, B> = Ok<A> | Error<B>

export declare const Ok: <T>(value: NonNullable<T>) => Ok<T>
export declare const Error: <T>(value: NonNullable<T>) => Error<T>

// Returns `Ok(value)` if `value` is non-nullable, otherwise, returns `Error(errorValue)`.

export declare function fromNullable<A, B>(
  value: A,
  errorValue: NonNullable<B>,
): Result<ExtractValue<A>, B>

export declare function fromNullable<A, B>(
  errorValue: NonNullable<B>,
): (value: A) => Result<ExtractValue<A>, B>

// Returns `Ok(value)` if `value` is not falsy, otherwise, returns `Error(errorValue)`.

export declare function fromFalsy<A, B>(
  value: A,
  errorValue: NonNullable<B>,
): Result<ExtractValue<A>, B>

export declare function fromFalsy<A, B>(
  errorValue: NonNullable<B>,
): (value: A) => Result<ExtractValue<A>, B>

// Returns `Ok(value)` if the predicate function returns `true`, otherwise, returns `Error(errorValue)`.

export declare function fromPredicate<A, B>(
  value: A,
  predicateFn: (value: A) => boolean,
  errorValue: NonNullable<B>,
): Result<ExtractValue<A>, B>

export declare function fromPredicate<A, B>(
  predicateFn: (value: A) => boolean,
  errorValue: NonNullable<B>,
): (value: A) => Result<ExtractValue<A>, B>

// Returns the result of `mapFn` if `result` is `Ok(value)`, otherwise, returns `Error(errorValue)` and `mapFn` is not called.

export declare function map<A, B, R>(
  result: Result<A, B>,
  mapFn: (value: A) => NonNullable<R>,
): Result<R, B>

export declare function map<A, B, R>(
  mapFn: (value: A) => NonNullable<R>,
): (result: Result<A, B>) => Result<R, B>

// Returns the result of `mapFn` if `result` is `Ok(value)`, otherwise returns `Ok(defaultValue)`.

export declare function mapWithDefault<A, B, R>(
  result: Result<A, B>,
  defaultValue: NonNullable<R>,
  mapFn: (value: A) => NonNullable<R>,
): R

export declare function mapWithDefault<A, B, R>(
  defaultValue: NonNullable<R>,
  mapFn: (value: A) => NonNullable<R>,
): (result: Result<A, B>) => R

// Returns the result of `mapFn` (it must have a return type of `Result`) if `result` is `Ok(value)`, otherwise, returns `result` unchanged.

export declare function flatMap<A, B, R>(
  result: Result<A, B>,
  mapFn: (value: A) => Result<R, B>,
): Result<R, B>

export declare function flatMap<A, B, R>(
  mapFn: (value: A) => Result<R, B>,
): (result: Result<A, B>) => Result<R, B>

// Returns `value` if `result` is `Ok(value)`, otherwise, throws an exception.

export declare function getExn<A, B>(result: Result<A, B>): A | never

export declare function getWithDefault<A, B>(result: Result<A, B>, defaultValue: NonNullable<A>): A
export declare function getWithDefault<A, B>(
  defaultValue: NonNullable<A>,
): (result: Result<A, B>) => A

// Returns `value` if `result` is `Ok(value)`, otherwise, returns a default value.

// Returns `value` if `result` is `Ok(value)`, otherwise, returns `undefined`.

export declare function toUndefined<A, B>(result: Result<A, B>): A | undefined

// Returns `value` if `result` is `Ok(value)`, otherwise, returns `null`.

export declare function toNullable<A, B>(result: Result<A, B>): A | null

// Returns `Some(value)` if `result` is `Ok(value)`, otherwise, returns `None`, both `Some` and `None` come from the `Option` type.

export declare function toOption<A, B>(result: Result<A, B>): Option<A>

// Returns the result of `okFn` if `result` is `Ok(value)`, otherwise, returns the result of `errorFn`.

export declare function match<A, B, R>(
  result: Result<A, B>,
  okFn: (value: A) => R,
  errorFn: (value: B) => R,
): R

export declare function match<A, B, R>(
  okFn: (value: A) => R,
  errorFn: (value: B) => R,
): (result: Result<A, B>) => R

// Returns `true` if the provided `result` is `Error(errorValue)`, otherwise, returns `false`.

export declare function isError<A, B>(result: Result<A, B>): result is Error<B>

// Returns `true` if the provided `result` is `Ok(value)`, otherwise, returns `false`.

export declare function isOk<A, B>(result: Result<A, B>): result is Ok<A>
