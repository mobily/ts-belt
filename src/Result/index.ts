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

export declare function fromNullable<A, B>(
  value: A,
  error: NonNullable<B>,
): Result<ExtractValue<A>, B>
export declare function fromNullable<A, B>(
  error: NonNullable<B>,
): (value: A) => Result<ExtractValue<A>, B>
export declare function fromFalsy<A, B>(value: A, error: NonNullable<B>): Result<ExtractValue<A>, B>
export declare function fromFalsy<A, B>(
  error: NonNullable<B>,
): (value: A) => Result<ExtractValue<A>, B>
export declare function fromPredicate<A, B>(
  value: A,
  predicateFn: (value: A) => boolean,
  error: NonNullable<B>,
): Result<ExtractValue<A>, B>
export declare function fromPredicate<A, B>(
  predicateFn: (value: A) => boolean,
  error: NonNullable<B>,
): (value: A) => Result<ExtractValue<A>, B>
export declare function map<A, B, R>(
  result: Result<A, B>,
  mapFn: (value: A) => NonNullable<R>,
): Result<R, B>
export declare function map<A, B, R>(
  mapFn: (value: A) => NonNullable<R>,
): (result: Result<A, B>) => Result<R, B>

export declare function mapWithDefault<A, B, R>(
  result: Result<A, B>,
  defaultValue: NonNullable<R>,
  fn: (value: A) => NonNullable<R>,
): R

export declare function mapWithDefault<A, B, R>(
  defaultValue: NonNullable<R>,
  fn: (value: A) => NonNullable<R>,
): (result: Result<A, B>) => R
export declare function flatMap<A, B, R>(
  result: Result<A, B>,
  mapFn: (value: A) => Result<R, B>,
): Result<R, B>
export declare function flatMap<A, B, R>(
  mapFn: (value: A) => Result<R, B>,
): (result: Result<A, B>) => Result<R, B>
export declare function getExn<A, B>(result: Result<A, B>): A | never
export declare function getWithDefault<A, B>(result: Result<A, B>, defaultValue: NonNullable<A>): A
export declare function getWithDefault<A, B>(
  defaultValue: NonNullable<A>,
): (result: Result<A, B>) => A
export declare function toUndefined<A, B>(result: Result<A, B>): A | undefined
export declare function toNullable<A, B>(result: Result<A, B>): A | null
export declare function toOption<A, B>(result: Result<A, B>): Option<A>
export declare function match<A, B, R>(
  result: Result<A, B>,
  okFn: (value: A) => R,
  errorFn: (value: B) => R,
): R
export declare function match<A, B, R>(
  okFn: (value: A) => R,
  errorFn: (value: B) => R,
): (result: Result<A, B>) => R
export declare function isError<A, B>(result: Result<A, B>): result is Error<B>
export declare function isOk<A, B>(result: Result<A, B>): result is Ok<A>
