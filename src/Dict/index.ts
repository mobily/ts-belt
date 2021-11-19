export declare function makeEmpty<T>(): T
export declare function prop<T, K extends keyof T>(dict: T, key: K): T[K]
export declare function prop<T, K extends keyof T>(key: K): (dict: T) => T[K]
export declare function toPairs<T>(dict: Record<string, T>): ReadonlyArray<readonly [string, T]>
export declare function values<T extends string | number, R>(dict: Record<T, R>): ReadonlyArray<R>
export declare function keys<T extends Record<string, unknown>>(dict: T): ReadonlyArray<keyof T>
export declare function fromPairs<T>(xs: ReadonlyArray<readonly [number, T]>): Record<number, T>
export declare function merge<A, B>(fst: A, snd: B): A & B
export declare function merge<A, B>(snd: B): (fst: A) => A & B
export declare function map<T extends Record<string, any>, R>(
  dict: T,
  mapFn: (value: T[keyof T]) => R,
): Record<keyof T, R>
export declare function map<T extends Record<string, any>, R>(
  mapFn: (value: T[keyof T]) => R,
): (dict: T) => Record<keyof T, R>
export declare function mapWithKey<T extends Record<string, any>, R>(
  dict: T,
  mapFn: (value: T[keyof T], key: keyof T) => R,
): Record<keyof T, R>
export declare function mapWithKey<T extends Record<string, any>, R>(
  mapFn: (value: T[keyof T], key: keyof T) => R,
): (dict: T) => Record<keyof T, R>
export declare function filter<T extends Record<string, any>>(
  dict: T,
  predicateFn: (value: T[keyof T]) => boolean,
): Partial<T>
export declare function filter<T extends Record<string, any>>(
  predicateFn: (value: T[keyof T]) => boolean,
): (dict: T) => Partial<T>
export declare function filterWithKey<T extends Record<string, any>>(
  dict: T,
  predicateFn: (value: T[keyof T], key: keyof T) => boolean,
): Partial<T>
export declare function filterWithKey<T extends Record<string, any>>(
  predicateFn: (value: T[keyof T], key: keyof T) => boolean,
): (dict: T) => Partial<T>
export declare function reject<T extends Record<string, any>>(
  dict: T,
  predicateFn: (value: T[keyof T]) => boolean,
): Partial<T>
export declare function reject<T extends Record<string, any>>(
  predicateFn: (value: T[keyof T]) => boolean,
): (dict: T) => Partial<T>
export declare function rejectWithKey<T extends Record<string, any>>(
  dict: T,
  predicateFn: (value: T[keyof T], key: keyof T) => boolean,
): Partial<T>
export declare function rejectWithKey<T extends Record<string, any>>(
  predicateFn: (value: T[keyof T], key: keyof T) => boolean,
): (dict: T) => Partial<T>
