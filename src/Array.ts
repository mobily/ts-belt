import type { Option } from './Option'
import type { PredicateFn } from './types'

declare type TupleOf<T> = readonly [T, T]

export declare const get: {
  (i: number): <T>(xs: readonly T[]) => Option<T>
  <T>(i: number, xs: readonly T[]): Option<T>
}
export declare const getBy: {
  <T>(predicateFn: PredicateFn<[T, number]>): (xs: readonly T[]) => Option<T>
  <T>(predicateFn: PredicateFn<[T, number]>, xs: readonly T[]): Option<T>
}
export declare const drop: {
  (i: number): <T>(xs: readonly T[]) => readonly T[]
  <T>(i: number, xs: readonly T[]): readonly T[]
}
export declare const head: <T>(xs: readonly T[]) => Option<T>
export declare const splitAt: {
  (i: number): <T>(xs: readonly T[]) => Option<TupleOf<readonly T[]>>
  <T>(i: number, xs: readonly T[]): Option<TupleOf<readonly T[]>>
}
export declare const tail: <T>(xs: readonly T[]) => Option<readonly T[]>
export declare const take: {
  <T>(i: number): (xs: readonly T[]) => readonly T[]
  <T>(i: number, xs: readonly T[]): readonly T[]
}
export declare const length: <T>(xs: readonly T[]) => number
