import { ExtractNested } from '../types'

export declare function groupBy<A, B extends PropertyKey>(
  xs: ReadonlyArray<A>,
  groupFn: (item: A) => B,
): Partial<Record<B, readonly [A, ...A[]]>>
export declare function flat<A>(
  xs: ReadonlyArray<A>,
): ReadonlyArray<A extends ReadonlyArray<infer B> ? B : A>
export declare function deepFlat<A>(
  xs: ReadonlyArray<A>,
): ReadonlyArray<ExtractNested<A>>
export declare function toTuple<T extends ReadonlyArray<any>>(
  xs: readonly [...T],
): readonly [...T]
export declare function filter<A, B extends A>(
  xs: ReadonlyArray<A>,
  predicateFn: (value: A) => value is B,
): ReadonlyArray<B>
export declare function filter<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (value: A) => boolean,
): ReadonlyArray<A>
export declare function filterWithIndex<A, B extends A>(
  xs: ReadonlyArray<A>,
  predicateFn: (index: number, value: A) => value is B,
): ReadonlyArray<B>
export declare function filterWithIndex<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (index: number, value: A) => boolean,
): ReadonlyArray<A>
export declare function keep<A, B extends A>(
  xs: ReadonlyArray<A>,
  predicateFn: (value: A) => value is B,
): ReadonlyArray<B>
export declare function keep<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (value: A) => boolean,
): ReadonlyArray<A>
export declare function keepWithIndex<A, B extends A>(
  xs: ReadonlyArray<A>,
  predicateFn: (index: number, value: A) => value is B,
): ReadonlyArray<B>
export declare function keepWithIndex<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (index: number, value: A) => boolean,
): ReadonlyArray<A>
export declare function partition<A, B extends A>(
  xs: ReadonlyArray<A>,
  predicateFn: (value: A) => value is B,
): readonly [ReadonlyArray<B>, ReadonlyArray<Exclude<A, B>>]
export declare function partition<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (value: A) => boolean,
): readonly [ReadonlyArray<A>, ReadonlyArray<A>]
