import type { Option } from './Option'
import type { MapFn, PredicateFn } from './types'

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

export declare const fromNullable: {
  <B>(error: NonNullable<B>): <A>(value: A) => Result<A, B>
  <A, B>(error: NonNullable<B>, value: A): Result<A, B>
}
export declare const fromFalsy: {
  <B>(error: NonNullable<B>): (value: 0 | '' | false | null | undefined) => Error<B>
  <B>(error: NonNullable<B>, value: 0 | '' | false | null | undefined): Error<B>
  <B>(error: NonNullable<B>): <A>(value: A) => Result<A, B>
  <A, B>(error: NonNullable<B>, value: A): Result<A, B>
}
export declare const fromPredicate: {
  <A>(predicateFn: PredicateFn<[A]>): <B>(error: NonNullable<B>) => <A>(value: A) => Result<A, B>
  <A, B>(predicateFn: PredicateFn<[A]>, error: NonNullable<B>): (value: A) => Result<A, B>
  <A, B>(predicateFn: PredicateFn<[A]>, error: NonNullable<B>, value: A): Result<A, B>
}
export declare const flatMap: {
  <A, B, R>(mapFn: MapFn<[A], Result<R, B>>): (result: Result<A, B>) => Result<R, B>
  <A, B, R>(mapFn: MapFn<[A], Result<R, B>>, result: Result<A, B>): Result<R, B>
}
export declare const map: {
  <A, B, R>(fn: MapFn<[A], NonNullable<R>>): (result: Result<A, B>) => Result<R, B>
  <A, B, R>(fn: MapFn<[A], NonNullable<R>>, result: Result<A, B>): Result<R, B>
}
export declare const mapWithDefault: {
  <A, B, R>(defaultValue: NonNullable<R>): (
    fn: MapFn<[A], NonNullable<R>>,
  ) => (result: Result<A, B>) => R
  <A, B, R>(defaultValue: NonNullable<R>, fn: MapFn<[A], NonNullable<R>>): (
    result: Result<A, B>,
  ) => R
  <A, B, R>(defaultValue: NonNullable<R>, fn: MapFn<[A], NonNullable<R>>, result: Result<A, B>): R
}
export declare const getWithDefault: {
  <A>(defaultValue: NonNullable<A>): <B>(result: Result<A, B>) => A
  <A, B>(defaultValue: NonNullable<A>, result: Result<A, B>): A
}
export declare const getExn: <A, B>(result: Result<A, B>) => A | never
export declare const match: {
  <A, R>(okFn: (value: A) => R): <B>(errorFn: (value: B) => R) => (result: Result<A, B>) => R
  <A, B, R>(okFn: (value: A) => R, errorFn: (value: B) => R): (result: Result<A, B>) => R
  <A, B, R>(okFn: (value: A) => R, errorFn: (value: B) => R, result: Result<A, B>): R
}
export declare const toNullable: <A, B>(result: Result<A, B>) => A | null
export declare const toOption: <A, B>(result: Result<A, B>) => Option<A>
export declare const toUndefined: <A, B>(result: Result<A, B>) => A | undefined

export declare const isOk: <A, B>(result: Result<A, B>) => result is Ok<A>
export declare const isError: <A, B>(result: Result<A, B>) => result is Error<B>
