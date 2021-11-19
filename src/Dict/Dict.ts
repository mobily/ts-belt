export declare const makeEmpty: <T>() => T
export declare const prop: <T, K extends keyof T>(dict: T, key: K) => T[K]
export declare const values: <T extends string | number, R>(dict: Record<T, R>) => ReadonlyArray<R>
export declare const keys: <T extends Record<string, unknown>>(dict: T) => ReadonlyArray<keyof T>
export declare const merge: <A, B>(fst: A, snd: B) => A & B
export declare const map: <T extends Record<string, any>, R>(
  dict: T,
  mapFn: (value: T[keyof T]) => R,
) => Record<keyof T, R>
export declare const mapWithKey: <T extends Record<string, any>, R>(
  dict: T,
  mapFn: (value: T[keyof T], key: keyof T) => R,
) => Record<keyof T, R>
export declare const filter: <T extends Record<string, any>>(
  dict: T,
  predicateFn: (value: T[keyof T]) => boolean,
) => Partial<T>
export declare const filterWithKey: <T extends Record<string, any>>(
  dict: T,
  predicateFn: (value: T[keyof T], key: keyof T) => boolean,
) => Partial<T>
export declare const reject: <T extends Record<string, any>>(
  dict: T,
  predicateFn: (value: T[keyof T]) => boolean,
) => Partial<T>
export declare const rejectWithKey: <T extends Record<string, any>>(
  dict: T,
  predicateFn: (value: T[keyof T], key: keyof T) => boolean,
) => Partial<T>
export declare const fromPairs: <T>(xs: ReadonlyArray<readonly [number, T]>) => Record<number, T>
export declare const toPairs: <T>(dict: Record<string, T>) => ReadonlyArray<readonly [string, T]>
