import type { Option } from '../Option/Option'
import type { ExtractValue } from '../types'

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

export declare function fromNullable<A, B>(
  value: A,
  errorValue: NonNullable<B>,
): Result<ExtractValue<A>, B>
export declare function fromFalsy<A, B>(
  value: A,
  errorValue: NonNullable<B>,
): Result<ExtractValue<A>, B>
export declare function fromPredicate<A, B>(
  value: A,
  predicateFn: (value: NonNullable<A>) => boolean,
  errorValue: NonNullable<B>,
): Result<ExtractValue<A>, B>
export declare function fromExecution<A>(
  fn: () => A,
): Result<ExtractValue<A>, globalThis.Error>
export declare function fromPromise<A>(
  promise: Promise<A>,
): Promise<Result<ExtractValue<A>, globalThis.Error>>
export declare function flatMap<A, B, C>(
  result: Result<A, B>,
  mapFn: (value: A) => Result<C, B>,
): Result<C, B>
export declare function map<A, B, R>(
  result: Result<A, B>,
  mapFn: (value: A) => NonNullable<R>,
): Result<R, B>
export declare function mapWithDefault<A, B, R>(
  result: Result<A, B>,
  defaultValue: NonNullable<R>,
  mapFn: (value: A) => NonNullable<R>,
): R
export declare function getWithDefault<A, B>(
  result: Result<A, B>,
  defaultValue: NonNullable<A>,
): A
export declare function getExn<A, B>(result: Result<A, B>): A | never
export declare function match<A, B, R>(
  result: Result<A, B>,
  okFn: (value: A) => R,
  errorFn: (value: B) => R,
): R
export declare function toNullable<A, B>(result: Result<A, B>): A | null
export declare function toOption<A, B>(result: Result<A, B>): Option<A>
export declare function toUndefined<A, B>(result: Result<A, B>): A | undefined
export declare function isOk<A, B>(result: Result<A, B>): result is Ok<A>
export declare function isError<A, B>(result: Result<A, B>): result is Error<B>
export declare function tap<A, B>(
  result: Result<A, B>,
  okFn: (value: A) => void,
): Result<A, B>
export declare function tapError<A, B>(
  result: Result<A, B>,
  errorFn: (err: B) => void,
): Result<A, B>
export declare function handleError<A, B>(
  result: Result<A, B>,
  mapFn: (err: B) => NonNullable<A>,
): Result<A, void>
export declare function mapError<A, B, C>(
  result: Result<A, B>,
  mapFn: (err: B) => NonNullable<C>,
): Result<A, C>
export declare function catchError<A, B, C>(
  result: Result<A, B>,
  mapFn: (err: B) => Result<A, C>,
): Result<A, C>
export declare function recover<A, B>(
  result: Result<A, B>,
  defaultValue: NonNullable<A>,
): Result<A, B>
export declare function flip<A, B>(result: Result<A, B>): Result<B, A>
