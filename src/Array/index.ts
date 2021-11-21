import { Option } from '../Option'
import { ExtractNested } from '../types'

export declare function length<A>(xs: ReadonlyArray<A>): number
export declare function isEmpty<A>(xs: ReadonlyArray<A>): boolean
export declare function isNotEmpty<A>(xs: ReadonlyArray<A>): boolean
export declare function reverse<A>(xs: ReadonlyArray<A>): ReadonlyArray<A>
export declare function prepend<A>(xs: ReadonlyArray<A>, element: A): ReadonlyArray<A>
export declare function prepend<A>(element: A): (xs: ReadonlyArray<A>) => ReadonlyArray<A>
export declare function append<A>(xs: ReadonlyArray<A>, element: A): ReadonlyArray<A>
export declare function append<A>(element: A): (xs: ReadonlyArray<A>) => ReadonlyArray<A>
export declare function get<A>(xs: ReadonlyArray<A>, index: number): Option<A>
export declare function get<A>(index: number): (xs: ReadonlyArray<A>) => Option<A>
export declare function at<A>(xs: ReadonlyArray<A>, index: number): Option<A>
export declare function at<A>(index: number): (xs: ReadonlyArray<A>) => Option<A>
export declare function getBy<A>(xs: ReadonlyArray<A>, predicateFn: (_1: A) => boolean): Option<A>
export declare function getBy<A>(
  predicateFn: (_1: A) => boolean,
): (xs: ReadonlyArray<A>) => Option<A>
export declare function find<A>(xs: ReadonlyArray<A>, predicateFn: (_1: A) => boolean): Option<A>
export declare function find<A>(
  predicateFn: (_1: A) => boolean,
): (xs: ReadonlyArray<A>) => Option<A>
export declare function head<A>(xs: ReadonlyArray<A>): Option<A>
export declare function tail<A>(xs: ReadonlyArray<A>): Option<ReadonlyArray<A>>
export declare function tailOrEmpty<A>(xs: ReadonlyArray<A>): ReadonlyArray<A>
export declare function take<A>(xs: ReadonlyArray<A>, offset: number): ReadonlyArray<A>
export declare function take<A>(offset: number): (xs: ReadonlyArray<A>) => ReadonlyArray<A>
export declare function takeExactly<A>(
  xs: ReadonlyArray<A>,
  offset: number,
): Option<ReadonlyArray<A>>
export declare function takeExactly<A>(
  offset: number,
): (xs: ReadonlyArray<A>) => Option<ReadonlyArray<A>>
export declare function takeWhile<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (_1: A) => boolean,
): ReadonlyArray<A>
export declare function takeWhile<A>(
  predicateFn: (_1: A) => boolean,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>
export declare function drop<A>(xs: ReadonlyArray<A>, offset: number): ReadonlyArray<A>
export declare function drop<A>(offset: number): (xs: ReadonlyArray<A>) => ReadonlyArray<A>
export declare function dropExactly<A>(
  xs: ReadonlyArray<A>,
  offset: number,
): Option<ReadonlyArray<A>>
export declare function dropExactly<A>(
  offset: number,
): (xs: ReadonlyArray<A>) => Option<ReadonlyArray<A>>
export declare function dropWhile<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (_1: A) => boolean,
): ReadonlyArray<A>
export declare function dropWhile<A>(
  predicateFn: (_1: A) => boolean,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>
export declare function uncons<A>(xs: ReadonlyArray<A>): Option<[A, ReadonlyArray<A>]>
export declare function splitAt<A>(
  xs: ReadonlyArray<A>,
  offset: number,
): Option<[ReadonlyArray<A>, ReadonlyArray<A>]>
export declare function splitAt<A>(
  offset: number,
): (xs: ReadonlyArray<A>) => Option<[ReadonlyArray<A>, ReadonlyArray<A>]>
export declare function splitEvery<A>(xs: ReadonlyArray<A>, offset: number): Array<ReadonlyArray<A>>
export declare function splitEvery<A>(
  offset: number,
): (xs: ReadonlyArray<A>) => Array<ReadonlyArray<A>>
export declare function shuffle<A>(xs: ReadonlyArray<A>): ReadonlyArray<A>
export declare function repeat<A>(n: number, element: A): ReadonlyArray<A>
export declare function repeat<A>(element: A): (n: number) => ReadonlyArray<A>
export declare function makeWithIndex<A>(n: number, mapFn: (_1: number) => A): ReadonlyArray<A>
export declare function makeWithIndex<A>(mapFn: (_1: number) => A): (n: number) => ReadonlyArray<A>
export declare function map<A, B>(xs: ReadonlyArray<A>, mapFn: (_1: A) => B): ReadonlyArray<B>
export declare function map<A, B>(mapFn: (_1: A) => B): (xs: ReadonlyArray<A>) => ReadonlyArray<B>
export declare function mapWithIndex<A, B>(
  xs: ReadonlyArray<A>,
  mapFn: (_1: A, _2: number) => B,
): ReadonlyArray<B>
export declare function mapWithIndex<A, B>(
  mapFn: (_1: A, _2: number) => B,
): (xs: ReadonlyArray<A>) => ReadonlyArray<B>
export declare function filter<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (_1: A) => boolean,
): ReadonlyArray<A>
export declare function filter<A>(
  predicateFn: (_1: A) => boolean,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>
export declare function filterWithIndex<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (_1: A, _2: number) => boolean,
): ReadonlyArray<A>
export declare function filterWithIndex<A>(
  predicateFn: (_1: A, _2: number) => boolean,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>
export declare function reject<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (_1: A) => boolean,
): ReadonlyArray<A>
export declare function reject<A>(
  predicateFn: (_1: A) => boolean,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>
export declare function rejectWithIndex<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (_1: A, _2: number) => boolean,
): ReadonlyArray<A>
export declare function rejectWithIndex<A>(
  predicateFn: (_1: A, _2: number) => boolean,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>
export declare function init<A>(xs: ReadonlyArray<A>): Option<ReadonlyArray<A>>
export declare function initOrEmpty<A>(xs: ReadonlyArray<A>): ReadonlyArray<A>
export declare function last<A>(xs: ReadonlyArray<A>): Option<A>
export declare function partition<A>(
  xs: ReadonlyArray<A>,
  fn: (_1: A) => boolean,
): [ReadonlyArray<A>, ReadonlyArray<A>]
export declare function partition<A>(
  fn: (_1: A) => boolean,
): (xs: ReadonlyArray<A>) => [ReadonlyArray<A>, ReadonlyArray<A>]
export declare function concat<A>(xs0: ReadonlyArray<A>, xs1: ReadonlyArray<A>): ReadonlyArray<A>
export declare function concat<A>(
  xs1: ReadonlyArray<A>,
): (xs0: ReadonlyArray<A>) => ReadonlyArray<A>
export declare function concatMany<A>(xs: Array<ReadonlyArray<A>>): ReadonlyArray<A>
export declare function every<A>(xs: ReadonlyArray<A>, fn: (_1: A) => boolean): boolean
export declare function every<A>(fn: (_1: A) => boolean): (xs: ReadonlyArray<A>) => boolean
export declare function some<A>(xs: ReadonlyArray<A>, fn: (_1: A) => boolean): boolean
export declare function some<A>(fn: (_1: A) => boolean): (xs: ReadonlyArray<A>) => boolean
export declare function slice<A>(
  xs: ReadonlyArray<A>,
  offset: number,
  len: number,
): ReadonlyArray<A>
export declare function slice<A>(
  offset: number,
  len: number,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>
export declare function sliceToEnd<A>(xs: ReadonlyArray<A>, offset: number): ReadonlyArray<A>
export declare function sliceToEnd<A>(offset: number): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

export declare function eq<A>(
  xs0: ReadonlyArray<A>,
  xs1: ReadonlyArray<A>,
  comparatorFn: (_1: A, _2: A) => boolean,
): boolean

export declare function eq<A>(
  xs1: ReadonlyArray<A>,
  comparatorFn: (_1: A, _2: A) => boolean,
): (xs0: ReadonlyArray<A>) => boolean
export declare function range(start: number, length: number): number[]
export declare function range(length: number): (start: number) => number[]
export declare function rangeBy(start: number, length: number, step: number): number[]
export declare function rangeBy(length: number, step: number): (start: number) => number[]
export declare function reduce<A, B>(
  xs: ReadonlyArray<A>,
  initialValue: B,
  reduceFn: (_1: B, _2: A) => B,
): B
export declare function reduce<A, B>(
  initialValue: B,
  reduceFn: (_1: B, _2: A) => B,
): (xs: ReadonlyArray<A>) => B

export declare function reduceWithIndex<A, B>(
  xs: ReadonlyArray<A>,
  initialValue: B,
  reduceFn: (_1: B, _2: A, _3: number) => B,
): B

export declare function reduceWithIndex<A, B>(
  initialValue: B,
  reduceFn: (_1: B, _2: A, _3: number) => B,
): (xs: ReadonlyArray<A>) => B
export declare function copy<A>(xs: ReadonlyArray<A>): ReadonlyArray<A>
export declare function zip<A, B>(xs0: ReadonlyArray<A>, xs1: ReadonlyArray<B>): Array<[A, B]>
export declare function zip<A, B>(xs1: ReadonlyArray<B>): (xs0: ReadonlyArray<A>) => Array<[A, B]>
export declare function zipWith<A, B, C>(
  xs0: ReadonlyArray<A>,
  xs1: ReadonlyArray<B>,
  zipFn: (_1: A, _2: B) => C,
): ReadonlyArray<C>
export declare function zipWith<A, B, C>(
  xs1: ReadonlyArray<B>,
  zipFn: (_1: A, _2: B) => C,
): (xs0: ReadonlyArray<A>) => ReadonlyArray<C>
export declare function unzip<A, B>(xs: Array<[A, B]>): [ReadonlyArray<A>, ReadonlyArray<B>]
export declare function replaceAt<A>(
  xs: ReadonlyArray<A>,
  targetIndex: number,
  element: A,
): ReadonlyArray<A>
export declare function replaceAt<A>(
  targetIndex: number,
  element: A,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>
export declare function insertAt<A>(
  xs: ReadonlyArray<A>,
  targetIndex: number,
  element: A,
): ReadonlyArray<A>
export declare function insertAt<A>(
  targetIndex: number,
  element: A,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>
export declare function updateAt<A>(
  targetIndex: number,
  fn: (_1: A) => A,
  xs: ReadonlyArray<A>,
): ReadonlyArray<A>
export declare function updateAt<A>(
  fn: (_1: A) => A,
  xs: ReadonlyArray<A>,
): (targetIndex: number) => ReadonlyArray<A>
export declare function swapAt<A>(
  xs: ReadonlyArray<A>,
  targetIndex: number,
  swapIndex: number,
): ReadonlyArray<A>
export declare function swapAt<A>(
  targetIndex: number,
  swapIndex: number,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>
export declare function removeAt<A>(xs: ReadonlyArray<A>, targetIndex: number): ReadonlyArray<A>
export declare function removeAt<A>(targetIndex: number): (xs: ReadonlyArray<A>) => ReadonlyArray<A>
export declare function uniqBy<A>(xs: ReadonlyArray<A>, predicateFn: (_1: A) => A): ReadonlyArray<A>
export declare function uniqBy<A>(
  predicateFn: (_1: A) => A,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>
export declare function uniq<A>(xs: ReadonlyArray<A>): ReadonlyArray<A>
export declare function forEach<A>(xs: ReadonlyArray<A>, fn: (_1: A) => void): void
export declare function forEach<A>(fn: (_1: A) => void): (xs: ReadonlyArray<A>) => void
export declare function forEachWithIndex<A>(
  xs: ReadonlyArray<A>,
  fn: (_1: number, _2: A) => void,
): void
export declare function forEachWithIndex<A>(
  fn: (_1: number, _2: A) => void,
): (xs: ReadonlyArray<A>) => void
export declare function getIndexBy<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (_1: A) => boolean,
): Option<number>
export declare function getIndexBy<A>(
  predicateFn: (_1: A) => boolean,
): (xs: ReadonlyArray<A>) => Option<number>
export declare function includes<A>(xs: ReadonlyArray<A>, element: A): boolean
export declare function includes<A>(element: A): (xs: ReadonlyArray<A>) => boolean
export declare function join<A>(xs: ReadonlyArray<A>, delimiter: string): string
export declare function join<A>(delimiter: string): (xs: ReadonlyArray<A>) => string
export declare function sort<A>(
  xs: ReadonlyArray<A>,
  sortFn: (_1: A, _2: A) => number,
): ReadonlyArray<A>
export declare function sort<A>(
  sortFn: (_1: A, _2: A) => number,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>
export declare function sortBy<A, B>(xs: ReadonlyArray<A>, sortFn: (_1: A) => B): ReadonlyArray<A>
export declare function sortBy<A, B>(
  sortFn: (_1: A) => B,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>
export declare function makeEmpty<A>(): ReadonlyArray<A>
export declare function groupBy<T>(
  xs: ReadonlyArray<T>,
  groupFn: (value: T) => any,
): Record<string, ReadonlyArray<T>>
export declare function groupBy<T>(
  groupFn: (value: T) => any,
): (xs: ReadonlyArray<T>) => Record<string, ReadonlyArray<T>>
export declare function flat<T>(
  xs: ReadonlyArray<T>,
): ReadonlyArray<T extends ReadonlyArray<infer K> ? K : T>
export declare function deepFlat<T>(xs: ReadonlyArray<T>): ReadonlyArray<ExtractNested<T>>
