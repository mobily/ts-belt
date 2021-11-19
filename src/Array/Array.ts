import { ExtractNested } from '../types'

export declare const groupBy: <T>(
  xs: ReadonlyArray<T>,
  groupFn: (value: T) => any,
) => Record<string, ReadonlyArray<T>>
export declare const flat: <T>(
  xs: ReadonlyArray<T>,
) => ReadonlyArray<T extends ReadonlyArray<infer K> ? K : T>
export declare const deepFlat: <T>(xs: ReadonlyArray<T>) => ReadonlyArray<ExtractNested<T>>
