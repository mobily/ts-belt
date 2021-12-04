import { ExtractNested } from '../types'

export declare const groupBy: <A, B extends PropertyKey>(
  xs: ReadonlyArray<A>,
  groupFn: (item: A) => B,
) => Partial<Record<B, readonly [A, ...A[]]>>
export declare const flat: <A>(
  xs: ReadonlyArray<A>,
) => ReadonlyArray<A extends ReadonlyArray<infer B> ? B : A>
export declare const deepFlat: <A>(
  xs: ReadonlyArray<A>,
) => ReadonlyArray<ExtractNested<A>>
export declare const toTuple: <T extends ReadonlyArray<any>>(
  xs: [...T],
) => [...T]
