import type { Option } from './Option'
import type { PredicateFn, MapFn } from './internal/types'

declare type Array<T> = readonly T[]

export declare const length: <T>(xs: Array<T>) => number
export declare const isEmpty: <T>(xs: Array<T>) => boolean
export declare const isNotEmpty: <T>(xs: Array<T>) => boolean
export declare const reverse: <T>(xs: Array<T>) => Array<T>
export declare const prepend: {
  <T>(el: T): (xs: Array<T>) => Array<T>
  <T>(el: T, xs: Array<T>): Array<T>
}
export declare const append: {
  <T>(el: T): (xs: Array<T>) => Array<T>
  <T>(el: T, xs: Array<T>): Array<T>
}
export declare const get: {
  (i: number): <T>(xs: Array<T>) => Option<T>
  <T>(i: number, xs: Array<T>): Option<T>
}
export declare const getBy: {
  <T>(predicateFn: PredicateFn<[T, number]>): (xs: Array<T>) => Option<T>
  <T>(predicateFn: PredicateFn<[T, number]>, xs: Array<T>): Option<T>
}
export declare const head: <T>(xs: Array<T>) => Option<T>
export declare const tail: <T>(xs: Array<T>) => Option<Array<T>>
export declare const tailOrEmpty: <T>(xs: Array<T>) => Array<T>
export declare const take: {
  (i: number): <T>(xs: Array<T>) => Array<T>
  <T>(i: number, xs: Array<T>): Array<T>
}
export declare const takeExactly: {
  (i: number): <T>(xs: Array<T>) => Option<Array<T>>
  <T>(i: number, xs: Array<T>): Option<Array<T>>
}
export declare const takeWhile: {
  <T>(predicateFn: PredicateFn<[T]>): (xs: Array<T>) => Array<T>
  <T>(predicateFn: PredicateFn<[T]>, xs: Array<T>): Array<T>
}
export declare const drop: {
  (i: number): <T>(xs: Array<T>) => Array<T>
  <T>(i: number, xs: Array<T>): Array<T>
}
export declare const dropExactly: {
  (i: number): <T>(xs: Array<T>) => Option<Array<T>>
  <T>(i: number, xs: Array<T>): Option<Array<T>>
}
export declare const dropWhile: {
  <T>(predicateFn: PredicateFn<[T]>): (xs: Array<T>) => Array<T>
  <T>(predicateFn: PredicateFn<[T]>, xs: Array<T>): Array<T>
}
export declare const uncons: <T>(xs: Array<T>) => Option<readonly [T, Array<T>]>
export declare const splitAt: {
  (i: number): <T>(xs: Array<T>) => Option<readonly [Array<T>, Array<T>]>
  <T>(i: number, xs: Array<T>): Option<readonly [Array<T>, Array<T>]>
}
export declare const splitEvery: {
  (i: number): <T>(xs: Array<T>) => Array<Array<T>>
  <T>(i: number, xs: Array<T>): Array<Array<T>>
}
export declare const shuffle: <T>(xs: Array<T>) => Array<T>
export declare const repeat: <T>(i: number, el: T) => Array<T>
export declare const makeWithIndex: <T>(i: number, mapFn: MapFn<[number], T>) => Array<T>
export declare const map: {
  <T, R>(mapFn: MapFn<[T], R>): (xs: Array<T>) => Array<R>
  <T, R>(mapFn: MapFn<[T], R>, xs: Array<T>): Array<R>
}
export declare const mapWithIndex: {
  <T, R>(mapFn: MapFn<[T, number], R>): (xs: Array<T>) => Array<R>
  <T, R>(mapFn: MapFn<[T, number], R>, xs: Array<T>): Array<R>
}
export declare const filter: {
  <T>(predicateFn: PredicateFn<[T]>): (xs: Array<T>) => Array<T>
  <T>(predicateFn: PredicateFn<[T]>, xs: Array<T>): Array<T>
}
export declare const filterWithIndex: {
  <T>(predicateFn: PredicateFn<[T, number]>): (xs: Array<T>) => Array<T>
  <T>(predicateFn: PredicateFn<[T, number]>, xs: Array<T>): Array<T>
}
export declare const reject: {
  <T>(predicateFn: PredicateFn<[T]>): (xs: Array<T>) => Array<T>
  <T>(predicateFn: PredicateFn<[T]>, xs: Array<T>): Array<T>
}
export declare const rejectWithIndex: {
  <T>(predicateFn: PredicateFn<[T, number]>): (xs: Array<T>) => Array<T>
  <T>(predicateFn: PredicateFn<[T, number]>, xs: Array<T>): Array<T>
}
export declare const init: <T>(xs: Array<T>) => Option<Array<T>>
export declare const initOrEmpty: <T>(xs: Array<T>) => Array<T>
export declare const last: <T>(xs: Array<T>) => Option<T>
export declare const partition: {
  <T>(predicateFn: PredicateFn<[T]>): (xs: Array<T>) => readonly [Array<T>, Array<T>]
  <T>(predicateFn: PredicateFn<[T]>, xs: Array<T>): readonly [Array<T>, Array<T>]
}
export declare const concat: {
  <T>(xs: Array<T>): <R>(ys: Array<R>) => Array<T & R>
  <T, R>(xs: Array<T>, ys: Array<R>): Array<T & R>
}
export declare const concatMany: <T>(xs: Array<Array<T>>) => Array<T>
export declare const every: {
  <T>(predicateFn: PredicateFn<[T]>): (xs: Array<T>) => boolean
  <T>(predicateFn: PredicateFn<[T]>, xs: Array<T>): boolean
}
export declare const some: {
  <T>(predicateFn: PredicateFn<[T]>): (xs: Array<T>) => boolean
  <T>(predicateFn: PredicateFn<[T]>, xs: Array<T>): boolean
}
export declare const slice: {
  (offset: number): (len: number) => <T>(xs: Array<T>) => Array<T>
  (offset: number, len: number): <T>(xs: Array<T>) => Array<T>
  <T>(offset: number, len: number, xs: Array<T>): Array<T>
}
export declare const sliceToEnd: {
  (offset: number): <T>(xs: Array<T>) => Array<T>
  <T>(offset: number, xs: Array<T>): Array<T>
}
export declare const eq: {
  <T, R>(predicateFn: PredicateFn<[T, R]>): (xs: Array<T>) => (ys: Array<R>) => boolean
  <T, R>(predicateFn: PredicateFn<[T, R]>, xs: Array<T>): (ys: Array<R>) => boolean
  <T, R>(predicateFn: PredicateFn<[T, R]>, xs: Array<T>, ys: Array<R>): boolean
}
export declare const range: (start: number, finish: number) => Array<number>
export declare const rangeBy: {
  (start: number): (finish: number) => (step: number) => Array<number>
  (start: number, finish: number): (step: number) => Array<number>
  (start: number, finish: number, step: number): Array<number>
}
export declare const reduce: {
  <T, R>(mapFn: MapFn<[R, T], R>): (acc: R) => (xs: Array<T>) => R
  <T, R>(mapFn: MapFn<[R, T], R>, acc: R): (xs: Array<T>) => R
  <T, R>(mapFn: MapFn<[R, T], R>, acc: R, xs: Array<T>): R
}
export declare const reduceWithIndex: {
  <T, R>(mapFn: MapFn<[R, T, number], R>): (acc: R) => (xs: Array<T>) => R
  <T, R>(mapFn: MapFn<[R, T, number], R>, acc: R): (xs: Array<T>) => R
  <T, R>(mapFn: MapFn<[R, T, number], R>, acc: R, xs: Array<T>): R
}
export declare const copy: <T>(xs: Array<T>) => Array<T>
export declare const zip: {
  <T>(xs: Array<T>): <R>(ys: Array<R>) => Array<readonly [R, T]>
  <T, R>(xs: Array<T>, ys: Array<R>): Array<readonly [R, T]>
}
export declare const zipWith: {
  <B, A, R>(mapFn: MapFn<[A, B], R>): (ys: Array<B>) => (xs: Array<A>) => Array<R>
  <B, A, R>(mapFn: MapFn<[A, B], R>, ys: Array<B>): (xs: Array<A>) => Array<R>
  <B, A, R>(mapFn: MapFn<[A, B], R>, ys: Array<B>, xs: Array<A>): Array<R>
}
export declare const unzip: <A, B>(xs: Array<readonly [A, B]>) => readonly [Array<A>, Array<B>]
export declare const replaceAt: {
  (targetIndex: number): <T>(el: T) => (xs: Array<T>) => Array<T>
  <T>(targetIndex: number, el: T): (xs: Array<T>) => Array<T>
  <T>(targetIndex: number, el: T, xs: Array<T>): Array<T>
}
export declare const insertAt: {
  (targetIndex: number): <T>(el: T) => (xs: Array<T>) => Array<T>
  <T>(targetIndex: number, el: T): (xs: Array<T>) => Array<T>
  <T>(targetIndex: number, el: T, xs: Array<T>): Array<T>
}
export declare const updateAt: {
  (targetIndex: number): <T>(mapFn: MapFn<[T], T>) => (xs: Array<T>) => Array<T>
  <T>(targetIndex: number, mapFn: MapFn<[T], T>): (xs: Array<T>) => Array<T>
  <T>(targetIndex: number, mapFn: MapFn<[T], T>, xs: Array<T>): Array<T>
}
export declare const swapAt: {
  (targetIndex: number): (swapIndex: number) => <T>(xs: Array<T>) => Array<T>
  (targetIndex: number, swapIndex: number): <T>(xs: Array<T>) => Array<T>
  <T>(targetIndex: number, swapIndex: number, xs: Array<T>): Array<T>
}
export declare const removeAt: {
  (targetIndex: number): <T>(xs: Array<T>) => Array<T>
  <T>(targetIndex: number, xs: Array<T>): Array<T>
}
export declare const uniqBy: {
  <T, R>(fn: MapFn<[T], R>): <T>(xs: Array<T>) => Array<T>
  <T, R>(fn: MapFn<[T], R>, xs: Array<T>): Array<T>
}
export declare const uniq: <T>(xs: Array<T>) => Array<T>
export declare const forEach: {
  <T>(fn: MapFn<[T], void>): (xs: Array<T>) => void
  <T>(fn: MapFn<[T], void>, xs: Array<T>): void
}
export declare const forEachWithIndex: {
  <T>(fn: MapFn<[T, number], void>): (xs: Array<T>) => void
  <T>(fn: MapFn<[T, number], void>, xs: Array<T>): void
}
export declare const getIndexBy: {
  <T>(predicateFn: PredicateFn<[T]>): (xs: Array<T>) => Option<number>
  <T>(predicateFn: PredicateFn<[T]>, xs: Array<T>): Option<number>
}
export declare const includes: {
  <T>(el: T): (xs: Array<T>) => boolean
  <T>(el: T, xs: Array<T>): boolean
}
export declare const join: {
  (delim: string): <T>(xs: Array<T>) => string
  <T>(delim: string, xs: Array<T>): string
}
