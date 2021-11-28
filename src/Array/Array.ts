import { ExtractNested } from '../types'

export declare const groupBy: <T, K extends PropertyKey>(
  xs: ReadonlyArray<T>,
  groupFn: (item: T) => K,
) => Partial<Record<K, readonly [T, ...T[]]>>
export declare const flat: <T>(
  xs: ReadonlyArray<T>,
) => ReadonlyArray<T extends ReadonlyArray<infer K> ? K : T>
export declare const deepFlat: <T>(xs: ReadonlyArray<T>) => ReadonlyArray<ExtractNested<T>>
