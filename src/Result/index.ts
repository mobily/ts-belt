import { Option } from '../Option'
export declare type Ok<T> = {
  readonly TAG: 0
  readonly _0: T
}
export declare type Error<T> = {
  readonly TAG: 1
  readonly _0: T
}

export declare type Result<A, B> = Ok<A> | Error<B>

export declare const Ok: <T>(value: T) => Ok<T>
export declare const Error: <T>(value: T) => Error<T>

export declare type TypeOfResult<T> = T extends Ok<infer U> ? U : never

export declare type TypeOfResultArray<T extends readonly [...any[]]> =
  T extends [infer Head, ...infer Tail]
    ? readonly [TypeOfResult<Head>, ...TypeOfResultArray<Tail>]
    : readonly []

export declare function makeOk<A, B>(value: A): Result<A, B>
export declare function makeError<A, B>(value: B): Result<A, B>

/** Returns `Ok(value)` if `value` is non-nullable, otherwise, returns `Error(errorValue)`. */

export declare function fromNullable<A, B>(
  value: A,
  errorValue: B,
): Result<NonNullable<A>, B>

export declare function fromNullable<A, B>(
  errorValue: B,
): (value: A) => Result<NonNullable<A>, B>

/** Returns `Ok(value)` if `value` is not falsy, otherwise, returns `Error(errorValue)`. */

export declare function fromFalsy<A, B>(
  value: A,
  errorValue: B,
): Result<NonNullable<A>, B>

export declare function fromFalsy<A, B>(
  errorValue: B,
): (value: A) => Result<NonNullable<A>, B>

/** Returns `Ok(value)` if the predicate function returns `true`, otherwise, returns `Error(errorValue)`. */

export declare function fromPredicate<A, B>(
  value: A,
  predicateFn: (value: NonNullable<A>) => boolean,
  errorValue: B,
): Result<NonNullable<A>, B>

export declare function fromPredicate<A, B>(
  predicateFn: (value: NonNullable<A>) => boolean,
  errorValue: B,
): (value: A) => Result<NonNullable<A>, B>

/** Returns `Ok(value)` (`value` is the result of `fn`) if `fn` didn't throw an error, otherwise, returns `Error(err)`. */

export declare function fromExecution<A>(
  fn: () => A,
): Result<NonNullable<A>, globalThis.Error>

/** Returns `Ok(value)` if `promise` is resolved successfully, otherwise, returns `Error(err)`. */

export declare function fromPromise<A>(
  promise: Promise<A>,
): Promise<Result<NonNullable<A>, globalThis.Error>>

/** Returns the result of `mapFn` if `result` is `Ok(value)`, otherwise, returns `Error(errorValue)` and `mapFn` is not called. */

export declare function map<A, B, C>(
  result: Result<A, B>,
  mapFn: (value: A) => C,
): Result<C, B>

export declare function map<A, B, C>(
  mapFn: (value: A) => C,
): (result: Result<A, B>) => Result<C, B>

/** Returns the result of `mapFn` if `result` is `Ok(value)`, otherwise returns a default value. */

export declare function mapWithDefault<A, B, C>(
  result: Result<A, B>,
  defaultValue: C,
  mapFn: (value: A) => C,
): C

export declare function mapWithDefault<A, B, C>(
  defaultValue: C,
  mapFn: (value: A) => C,
): (result: Result<A, B>) => C

/** Returns the result of `mapFn` (it must have a return type of `Result`) if `result` is `Ok(value)`, otherwise, returns `result` unchanged. */

export declare function flatMap<A, B, C, D = B>(
  result: Result<A, B>,
  mapFn: (value: A) => Result<C, D>,
): Result<C, B | D>

export declare function flatMap<A, B, C, D = B>(
  mapFn: (value: A) => Result<C, D>,
): (result: Result<A, B>) => Result<C, B | D>

/** Returns `value` if `result` is `Ok(value)`, otherwise, throws an exception. */

export declare function getExn<A, B>(result: Result<A, B>): A | never

/** Returns `value` if `result` is `Ok(value)`, otherwise, returns a default value. */

export declare function getWithDefault<A, B>(
  result: Result<A, B>,
  defaultValue: A,
): A

export declare function getWithDefault<A, B>(
  defaultValue: A,
): (result: Result<A, B>) => A

/** Returns `value` if `result` is `Ok(value)`, otherwise, returns `undefined`. */

export declare function toUndefined<A, B>(result: Result<A, B>): A | undefined

/** Returns `value` if `result` is `Ok(value)`, otherwise, returns `null`. */

export declare function toNullable<A, B>(result: Result<A, B>): A | null

/** Returns `Some(value)` if `result` is `Ok(value)`, otherwise, returns `None`, both `Some` and `None` come from the `Option` type. */

export declare function toOption<A, B>(result: Result<A, B>): Option<A>

/** Returns the result of `okFn` if `result` is `Ok(value)`, otherwise, returns the result of `errorFn`. */

export declare function match<A, B, R>(
  result: Result<A, B>,
  okFn: (value: A) => R,
  errorFn: (value: B) => R,
): R

export declare function match<A, B, R>(
  okFn: (value: A) => R,
  errorFn: (value: B) => R,
): (result: Result<A, B>) => R

/** Returns `true` if the provided `result` is `Error(errorValue)`, otherwise, returns `false`. */

export declare function isError<A, B>(result: Result<A, B>): result is Error<B>

/** Returns `true` if the provided `result` is `Ok(value)`, otherwise, returns `false`. */

export declare function isOk<A, B>(result: Result<A, B>): result is Ok<A>

/** Applies a side-effect function to the value in `Ok`, and returns the original `result`. */

export declare function tap<A, B>(
  result: Result<A, B>,
  okFn: (value: A) => void,
): Result<A, B>

export declare function tap<A, B>(
  okFn: (value: A) => void,
): (result: Result<A, B>) => Result<A, B>

/** Applies a side-effect function to the value in `Error`, and returns the original `result`. */

export declare function tapError<A, B>(
  result: Result<A, B>,
  errorFn: (err: B) => void,
): Result<A, B>

export declare function tapError<A, B>(
  errorFn: (err: B) => void,
): (result: Result<A, B>) => Result<A, B>

/** Converts errors into successful values, and returns a Result where the error channel is voided, to indicate that the error has been handled. */

export declare function handleError<A, B>(
  result: Result<A, B>,
  mapFn: (err: B) => A,
): Result<A, void>

export declare function handleError<A, B>(
  mapFn: (err: B) => A,
): (result: Result<A, B>) => Result<A, void>

/** Returns `result` unchanged if `result` is of the form `Ok`, otherwise, returns `Error(mapFn(err))`. */

export declare function mapError<A, B, C>(
  result: Result<A, B>,
  mapFn: (err: B) => C,
): Result<A, C>

export declare function mapError<A, B, C>(
  mapFn: (err: B) => C,
): (result: Result<A, B>) => Result<A, C>

/** Returns `mapFn(err)` when `result` is of the form `Error(err)`, otherwise, returns `result` unchanged. */

export declare function catchError<A, B, C>(
  result: Result<A, B>,
  mapFn: (err: B) => Result<A, C>,
): Result<A, C>

export declare function catchError<A, B, C>(
  mapFn: (err: B) => Result<A, C>,
): (result: Result<A, B>) => Result<A, C>

/** Ensures that the returned result is `Ok` by returning the provided result if it's already [Ok], or by falling back to the default value, which will be wrapped in the `Ok` constructor, if the provided result is an `Error`. */

export declare function recover<A, B>(
  result: Result<A, B>,
  defaultValue: A,
): Result<A, B>

export declare function recover<A, B>(
  defaultValue: A,
): (result: Result<A, B>) => Result<A, B>

/** Swaps the values between the `Ok` and `Error`. */

export declare function flip<A, B>(result: Result<A, B>): Result<B, A>

export declare function filter<A, B>(
  result: Result<A, B>,
  predicateFn: (value: A) => boolean,
): Result<A, B | globalThis.Error>
export declare function filter<A, B>(
  predicateFn: (value: A) => boolean,
): (result: Result<A, B>) => Result<A, B | globalThis.Error>
export declare function fold<A, B, C>(
  result: Result<A, B>,
  okFn: (value: A) => C,
  errorFn: (error: B) => C,
): C
export declare function fold<A, B, C>(
  okFn: (value: A) => C,
  errorFn: (error: B) => C,
): (result: Result<A, B>) => C
export declare function all<T extends readonly [...Result<any, any>[]]>(
  xs: readonly [...T],
): Result<TypeOfResultArray<T>, globalThis.Error>
