/// <reference path="global.d.ts" />
export declare type Array<T> = Belt.UseMutableArrays extends 1
  ? T[]
  : readonly T[]
export declare type Mutable<T> = { -readonly [P in keyof T]-?: T[P] }
export declare type EmptyObject = Record<string, any>
export declare type ExtractValue<T> = Exclude<T, null | undefined>
export declare type ExtractNested<T> = T extends Array<infer K>
  ? ExtractNested<K>
  : T
export declare type GuardArray<T extends unknown> = Extract<
  T,
  Array<any>
> extends never
  ? Array<unknown>
  : Extract<T, Array<any>>
export declare type GuardPromise<T extends unknown> = Extract<
  T,
  Promise<any>
> extends never
  ? Promise<unknown>
  : Extract<T, Promise<any>>
export declare type GuardObject<T extends unknown> = Exclude<
  Extract<T, object>,
  Function | Array<any>
> extends never
  ? { [k: string]: unknown }
  : Exclude<Extract<T, object>, Function | Array<any>>
export declare type GuardValue<T, V> = Extract<T, V> extends never
  ? V
  : Extract<T, V> extends any
  ? V
  : Extract<T, V>
