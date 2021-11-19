import { Result } from '../Result'
import { ExtractValue } from '../types'

export declare abstract class Option<T> {
  protected opaque?: T
}

export declare const Some: <T>(value: NonNullable<T>) => Option<T>
export declare const None: Option<never>

export declare function fromNullable<T>(value: T): Option<ExtractValue<T>>
export declare function fromFalsy<T>(value: T): Option<ExtractValue<T>>
export declare function fromPredicate<T>(
  value: T,
  predicateFn: (value: T) => boolean,
): Option<ExtractValue<T>>
export declare function fromPredicate<T>(
  predicateFn: (value: T) => boolean,
): (value: T) => Option<ExtractValue<T>>
export declare function map<T, R>(option: Option<T>, mapFn: (value: T) => NonNullable<R>): Option<R>
export declare function map<T, R>(
  mapFn: (value: T) => NonNullable<R>,
): (option: Option<T>) => Option<R>
export declare function flatMap<T, R>(option: Option<T>, mapFn: (value: T) => Option<R>): Option<R>
export declare function flatMap<T, R>(
  mapFn: (value: T) => Option<R>,
): (option: Option<T>) => Option<R>
export declare function mapWithDefault<T, R>(
  option: Option<T>,
  defaultValue: NonNullable<R>,
  mapFn: (value: T) => R,
): R
export declare function mapWithDefault<T, R>(
  defaultValue: NonNullable<R>,
  mapFn: (value: T) => R,
): (option: Option<T>) => R
export declare function mapNullable<T, R>(
  option: Option<T>,
  mapFn: (value: T) => R | null | undefined,
): Option<ExtractValue<R>>
export declare function mapNullable<T, R>(
  mapFn: (value: T) => R | null | undefined,
): (option: Option<T>) => Option<ExtractValue<R>>
export declare function filter<T>(option: Option<T>, predicate: (value: T) => boolean): Option<T>
export declare function filter<T>(
  predicate: (value: T) => boolean,
): (option: Option<T>) => Option<T>
export declare function getWithDefault<T>(option: Option<T>, defaultValue: NonNullable<T>): T
export declare function getWithDefault<T>(defaultValue: NonNullable<T>): (option: Option<T>) => T
export declare function getExn<T>(option: Option<T>): T | never
export declare function toNullable<T>(option: Option<T>): T | null
export declare function toUndefined<T>(option: Option<T>): T | undefined
export declare function toResult<A, B>(option: Option<A>, error: NonNullable<B>): Result<A, B>
export declare function toResult<A, B>(error: NonNullable<B>): (option: Option<A>) => Result<A, B>
export declare function match<T, R>(option: Option<T>, someFn: (value: T) => R, noneFn: () => R): R
export declare function match<T, R>(
  someFn: (value: T) => R,
  noneFn: () => R,
): (option: Option<T>) => R
export declare function isNone<T>(option: Option<T>): option is Option<never>
export declare function isSome<T>(option: Option<T>): option is Option<T>
