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

export declare const fromNullable: <A, B>(
  value: A,
  errorValue: NonNullable<B>,
) => Result<ExtractValue<A>, B>
export declare const fromFalsy: <A, B>(
  value: A,
  errorValue: NonNullable<B>,
) => Result<ExtractValue<A>, B>
export declare const fromPredicate: <A, B>(
  value: A,
  predicateFn: (value: A) => boolean,
  errorValue: NonNullable<B>,
) => Result<ExtractValue<A>, B>
export declare const flatMap: <A, B, R>(
  result: Result<A, B>,
  mapFn: (value: A) => Result<R, B>,
) => Result<R, B>
export declare const map: <A, B, R>(
  result: Result<A, B>,
  mapFn: (value: A) => NonNullable<R>,
) => Result<R, B>
export declare const mapWithDefault: <A, B, R>(
  result: Result<A, B>,
  defaultValue: NonNullable<R>,
  mapFn: (value: A) => NonNullable<R>,
) => R
export declare const getWithDefault: <A, B>(
  result: Result<A, B>,
  defaultValue: NonNullable<A>,
) => A
export declare const getExn: <A, B>(result: Result<A, B>) => A | never
export declare const match: <A, B, R>(
  result: Result<A, B>,
  okFn: (value: A) => R,
  errorFn: (value: B) => R,
) => R
export declare const toNullable: <A, B>(result: Result<A, B>) => A | null
export declare const toOption: <A, B>(result: Result<A, B>) => Option<A>
export declare const toUndefined: <A, B>(result: Result<A, B>) => A | undefined
export declare const isOk: <A, B>(result: Result<A, B>) => result is Ok<A>
export declare const isError: <A, B>(result: Result<A, B>) => result is Error<B>
export declare const tap: <A, B>(
  result: Result<A, B>,
  okFn: (value: A) => void,
) => Result<A, B>
export declare const tapError: <A, B>(
  result: Result<A, B>,
  errorFn: (err: B) => void,
) => Result<A, B>
export declare const handleError: <A, B>(
  result: Result<A, B>,
  mapFn: (err: B) => NonNullable<A>,
) => Result<A, void>
export declare const mapError: <A, B, C>(
  result: Result<A, B>,
  mapFn: (err: B) => NonNullable<C>,
) => Result<A, C>
export declare const catchError: <A, B, C>(
  result: Result<A, B>,
  mapFn: (err: B) => Result<A, C>,
) => Result<A, C>
export declare const recover: <A, B>(
  result: Result<A, B>,
  defaultValue: NonNullable<A>,
) => Result<A, B>
