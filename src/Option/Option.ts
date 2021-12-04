import type { Result } from '../Result/Result'
import type { ExtractValue } from '../types'

export declare abstract class Option<T> {
  protected opaque?: T
}

export declare const Some: <T>(value: NonNullable<T>) => Option<T>
export declare const None: Option<never>

export declare const fromNullable: <T>(value: T) => Option<ExtractValue<T>>
export declare const fromFalsy: <T>(value: T) => Option<ExtractValue<T>>
export declare const fromPredicate: <T>(
  value: T,
  predicateFn: (value: T) => boolean,
) => Option<ExtractValue<T>>
export declare const filter: <T>(
  option: Option<T>,
  predicateFn: (value: T) => boolean,
) => Option<T>
export declare const map: <T, R>(
  option: Option<T>,
  mapFn: (value: T) => NonNullable<R>,
) => Option<R>
export declare const flatMap: <T, R>(
  option: Option<T>,
  mapFn: (value: T) => Option<R>,
) => Option<R>
export declare const mapNullable: <T, R>(
  option: Option<T>,
  mapFn: (value: T) => R | null | undefined,
) => Option<ExtractValue<R>>
export declare const mapWithDefault: <T, R>(
  option: Option<T>,
  defaultValue: NonNullable<R>,
  mapFn: (value: T) => R,
) => R
export declare const match: <T, R>(
  option: Option<T>,
  someFn: (value: T) => R,
  noneFn: () => R,
) => R
export declare const toNullable: <T>(option: Option<T>) => T | null
export declare const toUndefined: <T>(option: Option<T>) => T | undefined
export declare const toResult: <A, B>(
  option: Option<A>,
  errorValue: NonNullable<B>,
) => Result<A, B>
export declare const getExn: <T>(option: Option<T>) => T | never
export declare const getWithDefault: <T>(
  option: Option<T>,
  defaultValue: NonNullable<T>,
) => T
export declare const isNone: <T>(option: Option<T>) => option is Option<never>
export declare const isSome: <T>(option: Option<T>) => option is Option<T>
