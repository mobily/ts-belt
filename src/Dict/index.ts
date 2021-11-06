import type { Array, MapFn, PredicateFn, EmptyObject } from '../types'

export declare const makeEmpty: {
  <T>(): T
  <K extends string, T>(): Record<K, T>
}
export declare const prop: {
  <T, K extends keyof T>(key: K): (obj: T) => T[K]
  <T, K extends keyof T>(key: K, obj: T): T[K]
}
export declare const values: <T extends string | number, X>(obj: Record<T, X>) => Array<X>
export declare const keys: <T extends Record<string, unknown>>(obj: T) => Array<keyof T>
export declare const merge: {
  <A>(fst: A): <B>(snd: B) => A & B
  <A, B>(fst: A, snd: B): A & B
}
export declare const map: {
  <T extends EmptyObject, R>(mapFn: MapFn<[T[keyof T]], R>): (dict: T) => Record<keyof T, R>
  <T extends EmptyObject, R>(mapFn: MapFn<[T[keyof T]], R>, dict: T): Record<keyof T, R>
}
export declare const mapWithKey: {
  <T extends EmptyObject, R>(mapFn: MapFn<[T[keyof T], keyof T], R>): (
    dict: T,
  ) => Record<keyof T, R>
  <T extends EmptyObject, R>(mapFn: MapFn<[T[keyof T], keyof T], R>, dict: T): Record<keyof T, R>
}
export declare const filter: {
  <T extends EmptyObject>(predicateFn: PredicateFn<[T[keyof T]]>): (dict: T) => Partial<T>
  <T extends EmptyObject>(predicateFn: PredicateFn<[T[keyof T]]>, dict: T): Partial<T>
}
export declare const filterWithKey: {
  <T extends EmptyObject>(predicateFn: PredicateFn<[T[keyof T], keyof T]>): (dict: T) => Partial<T>
  <T extends EmptyObject>(predicateFn: PredicateFn<[T[keyof T], keyof T]>, dict: T): Partial<T>
}
export declare const reject: {
  <T extends EmptyObject>(predicateFn: PredicateFn<[T[keyof T]]>): (dict: T) => Partial<T>
  <T extends EmptyObject>(predicateFn: PredicateFn<[T[keyof T]]>, dict: T): Partial<T>
}
export declare const rejectWithKey: {
  <T extends EmptyObject>(predicateFn: PredicateFn<[T[keyof T], keyof T]>): (dict: T) => Partial<T>
  <T extends EmptyObject>(predicateFn: PredicateFn<[T[keyof T], keyof T]>, dict: T): Partial<T>
}
export declare const fromPairs: {
  <T>(xs: Array<readonly [string, T]>): Record<string, T>
  <T>(xs: Array<readonly [number, T]>): Record<number, T>
}
export declare const toPairs: <T>(dict: Record<string, T>) => Array<readonly [string, T]>
