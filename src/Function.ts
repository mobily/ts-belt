import type { PredicateFn, MapFn } from './internal/types'

export declare const identity: <T>(arg0: T) => T
export declare const equals: {
  <A>(arg0: A): <B>(arg1: B) => boolean
  <A, B>(arg0: A, arg1: B): boolean
}
export declare const both: {
  <A>(fn0: PredicateFn<[A]>): (fn1: PredicateFn<[A]>) => (arg: A) => boolean
  <A>(fn0: PredicateFn<[A]>, fn1: PredicateFn<[A]>): (arg: A) => boolean
  <A>(fn0: PredicateFn<[A]>, fn1: PredicateFn<[A]>, arg: A): boolean
}
export declare const either: {
  <A>(fn0: PredicateFn<[A]>): (fn1: PredicateFn<[A]>) => (arg: A) => boolean
  <A>(fn0: PredicateFn<[A]>, fn1: PredicateFn<[A]>): (arg: A) => boolean
  <A>(fn0: PredicateFn<[A]>, fn1: PredicateFn<[A]>, arg: A): boolean
}
export declare const always: <T>(value: T) => () => T
export declare const defaultTo: {
  <T>(defaultValue: NonNullable<T>): (value: T) => NonNullable<T>
  <T>(defaultValue: NonNullable<T>, value: T): NonNullable<T>
}
export declare const falsy: () => false
export declare const truthy: () => true
export declare const ifElse: {
  <A>(predicateFn: PredicateFn<[A]>): <B>(
    trueFn: MapFn<[A], B>,
  ) => (falseFn: MapFn<[A], B>) => (value: A) => B
  <A, B>(predicateFn: PredicateFn<[A]>, trueFn: MapFn<[A], B>): (
    falseFn: MapFn<[A], B>,
  ) => (value: A) => B
  <A, B>(predicateFn: PredicateFn<[A]>, trueFn: MapFn<[A], B>, falseFn: MapFn<[A], B>): (
    value: A,
  ) => B
  <A, B>(predicateFn: PredicateFn<[A]>, trueFn: MapFn<[A], B>, falseFn: MapFn<[A], B>, value: A): B
}
export declare const ignore: () => void
export declare const unless: {
  <A>(predicateFn: PredicateFn<[A]>): <B>(whenFalseFn: MapFn<[A], B>) => (value: A) => B
  <A, B>(predicateFn: PredicateFn<[A]>, whenFalseFn: MapFn<[A], B>): (value: A) => B
  <A, B>(predicateFn: PredicateFn<[A]>, whenFalseFn: MapFn<[A], B>, value: A): B
}
export declare const when: {
  <A>(predicateFn: PredicateFn<[A]>): <B>(whenFalseFn: MapFn<[A], B>) => (value: A) => B
  <A, B>(predicateFn: PredicateFn<[A]>, whenFalseFn: MapFn<[A], B>): (value: A) => B
  <A, B>(predicateFn: PredicateFn<[A]>, whenFalseFn: MapFn<[A], B>, value: A): B
}
