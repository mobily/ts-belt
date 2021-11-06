import type { Result } from '../Result'
import type { PredicateFn, MapFn, ExtractValue } from '../types'

export declare abstract class Option<T> {
  protected opaque?: T
}

export declare const Some: <T>(value: NonNullable<T>) => Option<T>
export declare const None: Option<never>
export declare const fromNullable: <T>(value: T) => Option<ExtractValue<T>>;
export declare const fromFalsy:  <T>(value: T) => Option<ExtractValue<T>>;
export declare const fromPredicate: {
  <T>(predicate: PredicateFn<[T]>): (value: T) => Option<ExtractValue<T>>
  <T>(predicate: PredicateFn<[T]>, value: T): Option<ExtractValue<T>>
}
export declare const filter: {
  <T>(predicate: PredicateFn<[T]>): (option: Option<T>) => Option<T>
  <T>(predicate: PredicateFn<[T]>, option: Option<T>): Option<T>
}
export declare const map: {
  <T, R>(mapFn: MapFn<[T], NonNullable<R>>): (option: Option<T>) => Option<R>
  <T, R>(mapFn: MapFn<[T], NonNullable<R>>, option: Option<T>): Option<R>
}
export declare const flatMap: {
  <T, R>(mapFn: MapFn<[T], Option<R>>): (option: Option<T>) => Option<R>
  <T, R>(mapFn: MapFn<[T], Option<R>>, option: Option<T>): Option<R>
}
export declare const mapNullable: {
  <T, R>(mapFn: MapFn<[T], R | null | undefined>): (option: Option<T>) => Option<ExtractValue<R>>
  <T, R>(mapFn: MapFn<[T], R | null | undefined>, option: Option<T>): Option<ExtractValue<R>>
}
export declare const mapWithDefault: {
  <R>(defaultValue: NonNullable<R>): <T>(mapFn: MapFn<[T], R>) => (option: Option<T>) => R
  <T, R>(defaultValue: NonNullable<R>, mapFn: MapFn<[T], R>): (option: Option<T>) => R
  <T, R>(defaultValue: NonNullable<R>, mapFn: MapFn<[T], R>, option: Option<T>): R
}
export declare const match: {
  <T, R>(someFn: (value: T) => R): (noneFn: () => R) => (option: Option<T>) => R
  <T, R>(someFn: (value: T) => R, noneFn: () => R): (option: Option<T>) => R
  <T, R>(someFn: (value: T) => R, noneFn: () => R, option: Option<T>): R
}
export declare const toNullable: <T>(option: Option<T>) => T | null
export declare const toUndefined: <T>(option: Option<T>) => T | undefined
export declare const toResult: {
  <A, B>(error: NonNullable<B>): (option: Option<A>) => Result<A, B>
  <A, B>(error: NonNullable<B>, option: Option<A>): Result<A, B>
}
export declare const getExn: <T>(option: Option<T>) => T | never
export declare const getWithDefault: {
  <T>(defaultValue: NonNullable<T>): (option: Option<T>) => T
  <T>(defaultValue: NonNullable<T>, option: Option<T>): T
}
export declare const isNone: <T>(option: Option<T>) => option is Option<never>
export declare const isSome: <T>(option: Option<T>) => option is Option<T>
