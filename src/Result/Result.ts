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

export declare function fromNullable<A, B>(
  value: A,
  errorValue: B,
): Result<NonNullable<A>, B>
export declare function fromFalsy<A, B>(
  value: A,
  errorValue: B,
): Result<NonNullable<A>, B>
export declare function fromPredicate<A, B>(
  value: A,
  predicateFn: (value: NonNullable<A>) => boolean,
  errorValue: B,
): Result<NonNullable<A>, B>
export declare function fromExecution<A>(
  fn: () => A,
): Result<NonNullable<A>, globalThis.Error>
export declare function fromPromise<A>(
  promise: Promise<A>,
): Promise<Result<NonNullable<A>, globalThis.Error>>
export declare function flatMap<A, B, C, D = B>(
  result: Result<A, B>,
  mapFn: (value: A) => Result<C, D>,
): Result<C, B | D>
export declare function map<A, B, C>(
  result: Result<A, B>,
  mapFn: (value: A) => C,
): Result<C, B>
export declare function mapWithDefault<A, B, C>(
  result: Result<A, B>,
  defaultValue: C,
  mapFn: (value: A) => C,
): C
export declare function getWithDefault<A, B>(
  result: Result<A, B>,
  defaultValue: A,
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
  mapFn: (err: B) => A,
): Result<A, void>
export declare function mapError<A, B, C>(
  result: Result<A, B>,
  mapFn: (err: B) => C,
): Result<A, C>
export declare function catchError<A, B, C>(
  result: Result<A, B>,
  mapFn: (err: B) => Result<A, C>,
): Result<A, C>
export declare function recover<A, B>(
  result: Result<A, B>,
  defaultValue: A,
): Result<A, B>
export declare function flip<A, B>(result: Result<A, B>): Result<B, A>
export declare function filter<A, B>(
  result: Result<A, B>,
  predicateFn: (value: A) => boolean,
): Result<A, B | globalThis.Error>
export declare function fold<A, B, C>(
  result: Result<A, B>,
  okFn: (value: A) => C,
  errorFn: (error: B) => C,
): C
export declare function all<T extends readonly [...Result<any, any>[]]>(
  xs: readonly [...T],
): Result<TypeOfResultArray<T>, globalThis.Error>
