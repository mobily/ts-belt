import type { Result } from '../Result/Result'
import type { ExtractValue } from '../types'

export declare type Option<A> = A | null | undefined

export declare const Some: <A>(value: NonNullable<A>) => Option<A>
export declare const None: Option<never>

export declare const fromNullable: <A>(value: A) => Option<ExtractValue<A>>
export declare const fromFalsy: <A>(value: A) => Option<ExtractValue<A>>
export declare const fromPredicate: <A>(
  value: A,
  predicateFn: (value: NonNullable<A>) => boolean,
) => Option<ExtractValue<A>>
export declare const filter: <A>(
  option: Option<A>,
  predicateFn: (value: A) => boolean,
) => Option<A>
export declare const map: <A, B>(
  option: Option<A>,
  mapFn: (value: A) => NonNullable<B>,
) => Option<B>
export declare const flatMap: <A, B>(
  option: Option<A>,
  mapFn: (value: A) => Option<B>,
) => Option<B>
export declare const mapNullable: <A, B>(
  option: Option<A>,
  mapFn: (value: A) => B | null | undefined,
) => Option<ExtractValue<B>>
export declare const mapWithDefault: <A, B>(
  option: Option<A>,
  defaultValue: NonNullable<B>,
  mapFn: (value: A) => B,
) => B
export declare const match: <A, B>(
  option: Option<A>,
  someFn: (value: A) => B,
  noneFn: () => B,
) => B
export declare const toNullable: <A>(option: Option<A>) => A | null
export declare const toUndefined: <A>(option: Option<A>) => A | undefined
export declare const toResult: <A, B>(
  option: Option<A>,
  errorValue: NonNullable<B>,
) => Result<A, B>
export declare const getExn: <A>(option: Option<A>) => A | never
export declare const getWithDefault: <A>(
  option: Option<A>,
  defaultValue: NonNullable<A>,
) => A
export declare const isNone: <A>(option: Option<A>) => option is Option<never>
export declare const isSome: <A>(option: Option<A>) => option is Option<A>
export declare const tap: <A>(
  option: Option<A>,
  someFn: (value: A) => void,
) => Option<A>
