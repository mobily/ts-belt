export declare type EmptyObject = Record<string, any>
export declare type ExtractValue<T> = Exclude<T, null | undefined>
export declare type ExtractNested<T> = T extends ReadonlyArray<infer K>
  ? ExtractNested<K>
  : T
export declare type GuardArray<T extends unknown> = Extract<
  T,
  Array<any> | ReadonlyArray<any>
> extends never
  ? ReadonlyArray<unknown>
  : Extract<T, Array<any> | ReadonlyArray<any>>
export declare type GuardPromise<T extends unknown> = Extract<
  T,
  Promise<any>
> extends never
  ? Promise<unknown>
  : Extract<T, Promise<any>>
export declare type GuardObject<T extends unknown> = Exclude<
  Extract<T, object>,
  Array<any> | Function | ReadonlyArray<any>
> extends never
  ? { [k: string]: unknown }
  : Exclude<Extract<T, object>, Array<any> | Function | ReadonlyArray<any>>
export declare type GuardValue<T, V> = Extract<T, V> extends never
  ? V
  : Extract<T, V> extends any
  ? V
  : Extract<T, V>
