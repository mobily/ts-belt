import { Option } from '../Option'

export declare const makeEmpty: <T>() => T
export declare const get: <T, K extends keyof T>(
  dict: T,
  key: K,
) => Option<T[K]>
export declare const getUnsafe: <T, K extends keyof T>(dict: T, key: K) => T[K]
export declare const prop: <T, K extends keyof T>(dict: T, key: K) => T[K]
export declare const values: <T extends string | number, R>(
  dict: Record<T, R>,
) => ReadonlyArray<R>
export declare const keys: <T extends Record<string, unknown>>(
  dict: T,
) => ReadonlyArray<keyof T>
export declare const merge: <A, B>(fst: A, snd: B) => A & B
export declare const set: <T, K extends string | number, V>(
  dict: T,
  key: K,
  value: V,
) => T & Record<K, V>
export declare const update: <T, K extends keyof T, R>(
  dict: T,
  key: K,
  fn: (value: T[K]) => R,
) => T & Record<K, R>
export declare const map: <T extends Record<string, any>, R>(
  dict: T,
  mapFn: (value: T[keyof T]) => R,
) => Record<keyof T, R>
export declare const mapWithKey: <T extends Record<string, any>, R>(
  dict: T,
  mapFn: (key: keyof T, value: T[keyof T]) => R,
) => Record<keyof T, R>
export declare const filter: <T extends Record<string, any>>(
  dict: T,
  predicateFn: (value: T[keyof T]) => boolean,
) => Partial<T>
export declare const filterWithKey: <T extends Record<string, any>>(
  dict: T,
  predicateFn: (key: keyof T, value: T[keyof T]) => boolean,
) => Partial<T>
export declare const reject: <T extends Record<string, any>>(
  dict: T,
  predicateFn: (value: T[keyof T]) => boolean,
) => Partial<T>
export declare const rejectWithKey: <T extends Record<string, any>>(
  dict: T,
  predicateFn: (key: keyof T, value: T[keyof T]) => boolean,
) => Partial<T>
export declare const fromPairs: <T, K extends keyof any>(
  xs: ReadonlyArray<readonly [K, T]>,
) => Record<K, T>
export declare const toPairs: <T, K extends keyof any>(
  dict: Record<K, T>,
) => ReadonlyArray<readonly [K, T]>
